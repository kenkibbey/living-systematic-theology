// Regenerates the 23 non-governing public reading pages from the single
// authoritative public Systematic mirror. Run after Drive -> GitHub sync.
// Usage: node scripts/build_reading_chapters.mjs [--check]
import fs from "node:fs";
import path from "node:path";

const check = process.argv.includes("--check");
const sourcePath = "LIVING_SYSTEMATIC_THEOLOGY.md";
const outDir = "THEOLOGY/CHAPTERS";
const src = fs.readFileSync(sourcePath, "utf8");
const headings = [...src.matchAll(/^## (\d+)\. ([^\n]+)$/gm)];
if (headings.length !== 23) throw Error(`Expected 23 sections; found ${headings.length}`);
const version = src.match(/\*\*VERSION ([0-9]+\.[0-9]+)\*\*/)?.[1];
if (!version) throw Error("Cannot determine version from Systematic header");
fs.mkdirSync(outDir, { recursive: true });

function write(target, content) {
  const file = path.join(outDir, target);
  if (check) {
    if (!fs.existsSync(file) || fs.readFileSync(file, "utf8") !== content)
      throw Error(`Generated reading copy differs from its source: ${file}`);
  } else fs.writeFileSync(file, content, "utf8");
}
function titleCase(s) {
  return s.toLowerCase().replace(/\b[a-z]/g, c => c.toUpperCase()).replace(/'S\b/g, "'s");
}
for (let i = 0; i < headings.length; i++) {
  const m = headings[i];
  const end = i < 22 ? headings[i + 1].index : src.indexOf("## CONCLUSION", m.index);
  if (end < m.index) throw Error("Missing conclusion");
  const body = src.slice(m.index + m[0].length, end)
      .replace(/\[↑ Back to Contents\]\(#contents\)/g, "").trim();
  const n = Number(m[1]), title = titleCase(m[2]);
  const next = n === 23 ? "CONCLUSION.md" : `${String(n + 1).padStart(2, "0")}.md`;
  const label = n === 23 ? "Conclusion" : `Chapter ${n + 1}`;
  const page = `---
layout: page
title: "Chapter ${n}: ${title}"
---

# Chapter ${n} — ${title}

*Generated reading copy from LST Version **${version}**. The [complete current Systematic](../../LIVING_SYSTEMATIC_THEOLOGY.md) governs doctrine; this page must not be edited independently.*

${body}

---

**[Continue → ${label}](${next})**

[Chapter Contents ↑](README.md) · [Theology Contents ↑](../README.md) · [Main Start Here ↑](../../README.md#start-here)
`;
  write(`${String(n).padStart(2, "0")}.md`, page);
}
const start = src.indexOf("## CONCLUSION");
const stop = src.indexOf("Soli Deo Gloria.", start) + "Soli Deo Gloria.".length;
if (start < 0 || stop <= start) throw Error("Cannot find conclusion");
const conclusion = src.slice(start + "## CONCLUSION".length, stop).trim();
const conclusionPage = `---
layout: page
title: "LST Conclusion"
---

# Conclusion

*Generated reading copy from LST Version **${version}**. The [complete current Systematic](../../LIVING_SYSTEMATIC_THEOLOGY.md) governs doctrine; this page must not be edited independently.*

${conclusion}

---

**[Reading complete → How to Challenge LST](../../CHALLENGE/README.md)**

[Chapter Contents ↑](README.md) · [Theology Contents ↑](../README.md) · [Main Start Here ↑](../../README.md#start-here)
`;
write("CONCLUSION.md", conclusionPage);
console.log(`${check ? "Verified" : "Generated"} 23 chapters and conclusion for LST ${version}`);
