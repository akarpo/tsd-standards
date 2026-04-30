# Build Prompts

The data on this site was researched by orchestrating Claude Code agents
with web access (`WebSearch` + `WebFetch`). This file documents the prompts
that produced each major section, so the project is reproducible end-to-end:
re-run any prompt with a current Claude Code agent and you'll get an updated
version of that section's data.

Each prompt below is the actual brief sent to a research agent. They follow
a consistent pattern:

1. **Background** — what's already known.
2. **What to research** — specific questions, with primary-source pointers.
3. **What to return** — format expectations (Markdown, tables, citations).
4. **Caveats** — flag uncertainty rather than invent.

## How to re-run

In Claude Code:

```bash
claude
> [paste the prompt below into a new conversation, optionally as
>  Agent({ subagent_type: "general-purpose", prompt: "..." })]
```

Or in any LLM tool with web access. The prompts are intentionally
self-contained — each one briefs the agent like a smart colleague who
hasn't seen the prior conversation.

---

## 1. Illustrative Mathematics 6–8 curriculum (initial seed)

Used to produce the IM 6–8 unit lists, skill mappings, and Algebra 1
on-ramp framing that informed Troy's MS math overlay.

```
I need extremely thorough research on the Illustrative Mathematics (IM)
curriculum for grades 6, 7, and 8. The end goal is to build a webpage with
a skill matrix mapping IM units to supplemental homework/practice and
explaining how each unit acts as an on-ramp to Algebra 1.

Cover for each grade: unit titles, key topics, lesson counts (verified
from Kendall Hunt unit pages), core skills, prerequisite gaps, common
misconceptions, supplemental resources (free + paid), and a 2-4 sentence
Algebra 1 on-ramp explanation per unit referencing specific CCSS codes.

Use illustrativemathematics.org and Kendall Hunt as primary sources. Cite
URLs.
```

---

## 2. NWEA RIT scores for 8th-grade Algebra 1 readiness

```
Research: NWEA MAP Growth math RIT scores at end of 7th grade and their
relationship to Algebra 1 success in 8th grade. Audience is parents
deciding on Algebra 1 placement.

1. NWEA's own guidance — RIT thresholds, Algebra Readiness materials, 2020
   norms (verify end-of-Grade-7 math norm). Look at nwea.org and published
   research briefs/PDFs.
2. Sample district placement criteria — find 4-6 districts that publish
   Algebra-1-in-8th-grade placement rules using NWEA. Note RIT cutoff,
   other components (teacher rec, course grade, IAAT, Orleans-Hanna),
   source link.
3. Research / position statements — Brookings/Loveless on 8th-grade
   Algebra, NCTM's position, peer-reviewed predictive validity research.
4. Parent-facing translation — RIT bands mapped to recommendations
   (strong fit / borderline / not yet), green flags / red flags.
5. Caveats — norms shift, NWEA is one signal, equity concerns.

Return clean Markdown with tables. Include direct URLs. Flag uncertainty.
```

---

## 3. MDE Math standards × NWEA MAP Growth crosswalk

Produced the K–11 Math matrix that lives in `math.html`.

```
Build a comprehensive matrix mapping Michigan Department of Education
(MDE) Math standards to NWEA MAP Growth Math instructional areas/skills,
for grades K through 11.

Background: Michigan adopted CCSS-M; NWEA MAP Growth has K-2, 2-5, 6+,
and Course-Specific test families with named instructional areas; NWEA
publishes a Learning Continuum mapping RIT bands to specific skills.

Return:
A. MDE Math standards by grade (domains, cluster headings, representative
   standards with codes).
B. NWEA MAP Growth Math instructional areas by test family.
C. The matrix (per-grade rows): Grade | MDE/CCSS Domain | Key Standards |
   Skills | NWEA Test Family | NWEA Instructional Area | Typical RIT band |
   Alignment notes.
D. Throughlines (4-6 strands that evolve K-12).
E. Caveats.

Cite primary sources. Flag uncertainty. Length is fine — comprehensive
reference material.
```

---

## 4. MDE ELA standards × NWEA MAP Growth crosswalk

Produced the K–12 ELA matrix in `ela.html`.

```
Build a comprehensive matrix mapping Michigan Department of Education
(MDE) ELA standards to NWEA MAP Growth Reading/Language instructional
areas, for grades K through 11.

Background: Michigan adopted CCSS-ELA. NWEA has multiple ELA tests:
MAP Growth K-2 / 2-5 / 6+ Reading, MAP Reading Fluency (separate product),
and MAP Growth Language Usage.

Return:
A. MDE ELA standards by grade by strand (RL, RI, RF, W, SL, L) with codes.
B. NWEA instructional areas by test.
C. Matrix per grade per strand.
D. Throughlines (4-6 K-12 vertical threads).
E. Caveats — explicitly flag the three NWEA gaps: no SL coverage, Writing
   composition not assessed (Language Usage tests editing only), oral
   fluency requires the separate MAP Reading Fluency product.
```

---

## 5. Troy SD K–5 curriculum identification

Produced Bridges in Mathematics K–5 + Collaborative Literacy + UFLI
mappings in `troy-curriculum.js`.

```
Build a crosswalk to Michigan/CCSS K-5 standards for three curricula:
1. Troy School District (Troy, Michigan) current K-5 Math curriculum
2. Collaborative Literacy (Center for the Collaborative Classroom)
3. UFLI Foundations (University of Florida Literacy Institute)

Search "Troy School District Michigan K-5 math curriculum" to verify the
current adoption (likely Bridges in Mathematics + Number Corner).

For each curriculum: list units/lessons by grade, document what each
teaches, cite which MDE/CCSS standards each unit covers, and note any
caveats. Use publisher scope-and-sequence PDFs as primary sources.
```

---

## 6. Troy SD 6–12 Math curriculum & AP Math

Produced Troy IM 6–8 entries, HS pathways, and AP Math table.

```
Research Troy School District (Troy, Michigan) 6-12 math curriculum.

Known: Troy uses Illustrative Mathematics (IM) 6-8 for grades 6-8.
Planning to adopt IM Advanced starting with Math 6/7 in 2026-27. Likely
uses IM for Geometry. Algebra 2 and beyond unknown.

Verify via troy.k12.mi.us and the 2025-2026 Course Description Book PDF.
List AP Math exams (AP Precalculus, AP Calc AB, AP Calc BC, AP Statistics)
with content, prerequisites, typical grades. Confirm which Troy offers.

Return Markdown with tables. Cite source URLs.
```

---

## 7. Troy HS Geometry / Algebra 2 deep-dive (textbook identification)

The breakthrough prompt. Identified the actual textbooks via Troy's own
Test-Out study sheets — strategy generalized to other subjects.

```
Deep-dive investigation to identify the actual textbook/curriculum that
Troy School District uses for Geometry, Honors Geometry, Algebra 2, and
Honors Algebra 2.

The standard public-facing curriculum pages on troy.k12.mi.us do not
disclose textbook publishers. Try:
1. The 2025-2026 Course Description Book PDF
2. Individual teacher pages and syllabi (search "site:troy.k12.mi.us
   geometry textbook")
3. Board of Education curriculum adoption documents
4. Common Michigan HS Math adoptions (Big Ideas Math, Pearson enVision,
   McGraw-Hill Glencoe, HMH Holt McDougal Larson, CPM)
5. Adjacent districts (Birmingham, Bloomfield Hills, Rochester) — they
   likely use the same publisher
6. opensyllabus.org for "Troy Athens" or "Troy High Michigan"
7. Wayback Machine — older Troy SD curriculum pages
8. Studocu / Course Hero mirrors of teacher syllabi

For each course return:
- Best-evidence answer for textbook
- Source URL(s) and confidence rating (HIGH / MEDIUM / LOW)
- If unable to confirm, list 2-3 most likely candidates

Cite all sources. Flag uncertainty.
```

**Outcome:** Found Troy SD's own "Test-Out / Exit-Exam Study Sheets" PDFs
on their CDN, which include explicit "Text Book Information" sections.
Generalize this strategy whenever a district appears to publish nothing.

---

## 8. Troy 6–12 ELA + AP ELA exams

Produced Troy 6–12 ELA entries and the AP English / AP Capstone table.

```
Research Troy School District 6-12 ELA curriculum and AP ELA exam offerings.

Find:
1. Middle school ELA grades 6, 7, 8 textbooks
2. High school English 9, 10, 11, 12 textbooks
3. Honors / AP English courses

Common Michigan adoptions to check: StudySync, HMH Into Literature,
Pearson myPerspectives, Springboard, McDougal Littell, Holt McDougal.

List all AP ELA exams (AP English Lang & Comp, AP English Lit & Comp, AP
Seminar, AP Research). Confirm which Troy offers. Note Troy's AP Capstone
status.

Return Markdown with tables. Cite URLs.
```

**Outcome:** Troy uses novel-based + Teachers College Reading and Writing
Project (TCRWP) units, NOT a single published basal. The 9-12 program is
in active pilot through 2027-28.

---

## 9. Troy HS Science / Economics / CS deep-dive

Produced `science.html`, `economics.html`, `computer-science.html`.

```
Deep-dive research for Troy School District (Troy HS + Athens HS) and
Michigan state standards for four HS subjects:
1. Chemistry (regular and Honors)
2. Biology (regular and Honors)
3. Economics
4. Computer Science (Intro CS / non-AP CS courses)

For each, return:
A. Michigan state standards (MSS for Bio/Chem; MI Social Studies for Econ;
   MI K-12 CS Standards). List relevant DCIs / strands.
B. AP exams in the subject area (AP Bio, AP Chem, AP Environmental
   Science, AP Physics 1/2/C, AP Macro/Micro, AP CSP, AP CSA).
C. Troy SD course offerings — verify regular/honors/AP courses at each
   level.
D. Troy textbook identification — search for test-out study sheet PDFs on
   resources.finalsite.net/.../troyk12mius/ following the pattern that
   worked for Geometry/Algebra 2. Also check Studocu mirrors and
   BoardDocs (https://go.boarddocs.com/mi/troysd/Board.nsf/Public).
E. Honors test-out / acceleration material.

Format: Markdown by subject. Cite URLs. Flag uncertainty.
```

**Outcome:** Troy's non-math test-out policy explicitly provides no study
materials, so the test-out PDF strategy doesn't work for non-math subjects.
Textbook citations for Bio, Chem, Econ, CS are LOW confidence inference
based on common Michigan adoptions, flagged in-line.

---

## Repeatable build pattern

For each major research output:

1. **Spawn a focused research agent** in the background using
   `general-purpose` subagent type with web access.
2. **Receive structured findings** with confidence ratings and source URLs.
3. **Distinguish primary-source confirmed from inferred**, and flag the
   difference inline in the UI.
4. **Integrate** into the appropriate file:
   - Standards content → page HTML directly
   - Drill-down details → `data.js`
   - Free resources → `resources.js`
   - Troy curriculum citations → `troy-curriculum.js`
5. **Add sources** to the page footer's `<details>` collapsible.
6. **Surface caveats** in the page's banner/callout sections.

## Build prompts as you extend

When adding a new subject or grade band, keep the same pattern:

- A research prompt that asks for primary-source verification.
- Confidence ratings on every claim.
- Explicit handling of "what to do if X can't be verified" — list candidates
  with their evidence rather than guessing.
