
<p align="center">
  <img src="../assets/banners/review-03rolesandworkflow.svg" alt="Illustrated LST banner for 3. Four AI Roles and the Review Workflow" width="100%">
</p>

<h1 align="center">3. Four AI Roles and the Review Workflow</h1>
<p align="center"><em>The challenger’s advocate, LST’s defender, an independent adjudicator, and a verifier</em></p>
<p align="center">✦ <strong>Scripture governs</strong> · Evidence matters · Every claim remains testable ✦</p>

**This is a proposed pilot. The published prompts at the end of this reading sequence are the reproducible task instructions.**

## What each role actually does

| Role | Example service | Assignment | May it decide the final verdict? |
| --- | --- | --- | --- |
| A: **Challenger's advocate** | Claude | Present the submitter's original argument in its **strongest fair biblical form against LST**; clearly distinguish the person's claims from additional AI-developed support; acknowledge irreparable weaknesses | No |
| B: LST defender | ChatGPT (dedicated review session) | Defend the current wording with the strongest *positive* biblical case; answer every material objection; acknowledge whatever fails | No |
| C: Independent adjudicator | Grok | Compare the strongest cases under the same interpretive standards, including direct biblical evidence, unresolved problems, and actual doctrinal confidence | Makes a **reasoned proposed finding**, subject to verification |
| D: Independent verifier | Gemini | Independently recheck controlling texts, sources, both sides' omissions, bias, and whether C's finding follows; flag reasons for reconsideration | No automatic rubber stamp or invisible veto |

**The challenger remains a person with a voice.** They may use any AI, or none. **Prompt A is assigned to advocate for the *challenge*, not argue against the challenger.** Grok must preserve the submitter's own claims and make any AI-added biblical arguments clearly attributable to Grok. Its role does not make it the submitter's authorized personal representative and is not a substitute for the challenger's own words. The original challenge and subsequent rebuttals are included in the judge's case packet, not rewritten by the defender as the only record.

**Courtroom analogy and reusable prompts:** A is counsel for the challenger, B is counsel for LST, C is the independent judge, and D checks the judge's evidence. The public A/B/C/D prompts specify **roles only**. Each can be pasted into a separate chat and paired with its [required case packet](README.md#start-here--copy-and-paste-courtroom-workflow-role-only-prompts). GitHub publication is handled separately under the pilot runbook. Provider assignments are suggested rather than mandatory; currently Claude=A, ChatGPT=B, Grok=C, Gemini=D. Fresh chats do not guarantee the absence of private account-level context; each examiner must disregard unrelated personal history where possible and disclose material context that cannot be excluded.

## Rotation and isolation

ChatGPT retains **Role B**, an intentionally disclosed advocate of the existing LST position. **Owner-authorized pilot execution (October 21, 2026):** the established LST project-assisted ChatGPT / T.A.I.T. conversation may conduct Role B Revision Resistance, including on [Issue #33](https://github.com/kenkibbey/living-systematic-theology/issues/33). A run using that context is labeled **“project-assisted Prompt B”**, never **“Prompt B only,” “clean session,” “independent adjudication,”** or **“fully prompt-reproducible.”** The public Prompt B establishes the external-facing defender task; private governing project instructions and other project context also apply, but their source text is not public. Disclose the existence of that private context, its general role and material effects, whether project memory/context was available, model/session/date if known, primary sources and public case inputs used, and any source-access limits. Do not disclose private instructions or private correspondence. Publish the actual B1–B6 reasoning so it can be evaluated from Scripture and public evidence. A fresh public-Prompt-B-only replay may be performed as an optional sensitivity test, but is not required for the project-assisted pilot variant. This changes only the disclosed pilot execution plan; the official GitHub challenge rules remain unchanged.

Grok, Claude, and Gemini can rotate among **A, C, D** for later challenges, if each position has appropriate capabilities and a separate fresh session. **Adjudicator C and verifier D must be distinct sessions and must not inherit Role B's private LST project context.** Supply the same original public challenge, complete A and B outputs, public evidence and declared limitations; identify B as intentionally project-assisted so C and D can scrutinize defender-context bias. Do not use the same AI session to both decide and verify the same case. A judge must not receive an instruction to favor LST or the challenger. Record provider, model (if known), date, actual role, and materials read. If a model cannot be run, report the substitution or deferral instead of fabricating a completed review.

No named model is intrinsically neutral. No rotation algorithm guarantees unbiased results.

## What goes to all review roles

Each role needs an explicit, source-backed case packet:

1. The **precise current LST wording**, chapter, active version, and confidence classification.
2. The challenger's **unaltered submission**, subsequent relevant rebuttals, supporting passages, and proposed correction.
3. The entire public LST defender response, plus any supplemental adversarial findings and supporting research, with clear origin labels.
4. Actual controlling Scripture passages, context, disputed readings, and verifiable source details.
5. **Same interpretive criteria** (the seven stages from chapter 2), disclosed scope, and questions still undecided.
6. A timestamped record of what each AI actually received; no secret summaries substituted for adverse evidence.

The **first-stage judge comparison** may label the competing propositions A/B rather than LST/challenger *when doing so is practicable and does not hide critical context*. The second stage reveals current LST text and confidence so that the judge can assess whether it deserves retaining, strengthening, qualifying, or overturning. Position-order reversal is a useful additional check when feasible.

## A full challenge, in sequence

1. The issue is filed publicly; the challenger may use an AI to argue as strongly as desired.
2. Confirm exact challenged wording, its confidence, decisive passages, and whether a clarification is needed; do not call intake a doctrinal verdict.
3. **The challenger's advocate** develops the best defensible form of the submitter's actual case **against LST**, with contextual biblical evidence and transparent attribution, **not** a volume-based quota. The complete public report goes into a **version-controlled Markdown file** under `REVIEW/CASES/ISSUE-XXXX/`; a short **first substantive AI review comment** with the verified full-report link goes on the original issue when feasible. **No companion GitHub issue is created.**
4. The ChatGPT defender receives the whole case and builds **Revision Resistance**: the strongest honest case for keeping the existing claim and the exact reasons that would require conceding it.
5. The independent adjudicator reads both cases and the decisive texts, weighs positive biblical support for **both** propositions, documents misreadings and open questions, and recommends the smallest faithful correction.
6. The independent verifier independently checks the judge's evidence, including omissions and source access. A material discrepancy goes back for another visible adjudication; **do not average contradictory verdicts into a compromise**.
7. Publish the exact role record, case map, finding, verification, limitations, and any unresolved dissent. Apply the adopted rebuttal/closure procedures; do not confuse an AI reply with administrative approval.
8. Only an authorized, verified change to the **current Drive governing files**, with historical preservation and revision record, may become a new official LST version; then independently publish and verify the GitHub counterpart. A written recommendation is not an edit.

### Two decisions, not one

For each disputed proposition the adjudicator must decide **(a) what the challenge established** and **(b) what positive biblical warrant the existing claim actually retains**. It must separately evaluate the proposed replacement. “The challenger failed to prove X” is *not* “LST proved Y.” “Both readings are possible” is *not* permission to append two contradictory doctrinal statements.

### Existing challenge policy during pilot

The official GitHub process currently provides up to **three substantive rebuttal rounds** and a seven-day window after published adjudications where rounds remain. These rules are not rewritten merely by publishing this pilot. Changes to intake, deadlines, procedural disputes, and who manages the queue require a separate proposed governance revision and official verification.

---

**[Continue → 4. Verdicts, corrections, and public accountability](04_VERDICTS_AND_ACCOUNTABILITY.md)**

[Return to table of contents ↑](README.md)
