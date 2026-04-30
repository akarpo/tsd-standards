# Michigan K–12 Standards & Skills Matrix

A unified reference site for the Michigan K–12 academic standards across
Mathematics, English Language Arts, Science (Biology & Chemistry, 9–12),
Economics (9–12), and Computer Science (9–12) — with curated free skill-building
resources, AP exam coverage, NWEA MAP Growth alignment (where applicable), and
a Troy School District curriculum overlay.

**Live use:** open [`index.html`](./index.html) in any modern browser. No build
step required.

## What's in the box

```
mi-nwea-standards-matrix/
├── index.html              # Landing page · subject cards · Troy overlay · Placement · sources
├── math.html               # K–12 Math matrix (incl. Pre-Calc, AP Calc AB/BC, AP Stats)
├── ela.html                # K–12 ELA matrix (RL, RI, RF, W, SL, L)
├── science.html            # 9–12 Biology + Chemistry matrix
├── economics.html          # 9–12 Economics (E1–E4 strands)
├── computer-science.html   # 9–12 CS (CSTA strands)
├── styles.css              # Shared CSS
├── data.js                 # Drill-down content for math.html / ela.html cells
├── resources.js            # Free-resource library keyed to cellId (math + ELA)
├── troy-curriculum.js      # Troy SD curriculum citations keyed to cellId
├── app.js                  # Table transformer + modal drill-down for math/ELA
├── README.md               # This file
├── PROMPTS.md              # Research prompts used to build the data
└── LICENSE                 # MIT
```

## How the site is structured

### Three-tier data model

1. **Standards content** lives directly in the HTML pages as static `<table>`
   rows. Each row represents one MDE/CCSS domain or strand at one grade.
2. **Drill-down content** (math.html and ela.html only) lives in `data.js`,
   keyed by a cellId like `math:g3-OA` or `ela:gK-RL`. When a user clicks a
   Skills cell, `app.js` opens a modal showing the full standard text, NWEA
   Learning Continuum descriptors, and the resource library for that cell.
3. **Resources** (`resources.js`) and **Troy curriculum** (`troy-curriculum.js`)
   are also keyed by the same cellId scheme.

### cellId scheme

```
{subject}:g{grade}-{abbrev}

Examples:
  math:gK-CC        Math · Kindergarten · Counting & Cardinality
  math:g3-NF        Math · Grade 3 · Number & Operations · Fractions
  math:g8-EE        Math · Grade 8 · Expressions & Equations
  math:gAlg1-A      Math · Algebra 1 · Algebra strand
  math:gCalcAB-INT  Math · AP Calc AB · Integration & Accumulation
  math:gStats-INF   Math · AP Statistics · Inference
  ela:gK-RL         ELA · Kindergarten · Reading Literature
  ela:g910-W        ELA · Grades 9-10 · Writing
```

### How `app.js` transforms tables

On page load (math.html / ela.html only), `app.js`:
1. Detects subject from `<body data-subject="math|ela">`.
2. Walks each `<table class="filterable">` row.
3. Derives cellId from the row's section (`g-3`, `g-alg1`, etc.) and first
   cell's text or strand badge.
4. Rebuilds the table header and cells with the standardized column order:
   `Domain / Strand · MDE Standards · Skill / What students learn ·
   Free Resources · Troy SD Curriculum · NWEA Overlap · Notes`
5. Marks each Skills cell as drillable; click opens the modal sourced from
   `data.js`.

Static pages (science, economics, computer-science) skip the transformer and
ship pre-rendered tables.

## How to view

Just double-click `index.html` (or any HTML file). All data is bundled into
the shipped JS files; no server required.

For local development with auto-reload, any static server works:

```bash
# Python 3
python3 -m http.server 8000

# Node (with `serve` installed)
npx serve

# Then visit http://localhost:8000
```

## How to extend

### Add a new free resource to a math/ELA cell

Edit `resources.js`. Find the cellId entry (e.g., `"math:g4-NF"`) and add an
object to the array:

```js
"math:g4-NF": [
  // ...existing entries
  { type: "video", name: "New Resource Title", url: "https://...", note: "Optional one-liner" }
]
```

Type values: `khan`, `video`, `practice`, `tool`, `text`, `course`,
`foundational`, `open`, `free`. The badge color is auto-applied.

### Add a new Troy curriculum citation

Edit `troy-curriculum.js`:

```js
"math:g4-NF": [
  // ...existing entries
  { program: "Bridges Math",
    citation: "Unit 3: Fractions & Decimals",
    coverage: "4.NF.A.1–2, 4.NF.B.3–4, 4.NF.C.5–7",
    status: "current",  // or "planned" or "tier2"
    note: "Optional caveat" }
]
```

### Add a new drill-down detail (math/ELA)

Edit `data.js`. Each entry contains the standards, NWEA descriptors, and gaps
to surface in the Sheet 2 modal. Schema is documented inline at the top of
the file.

### Add a new subject page

Copy `science.html` or `economics.html` as a template. The pages are
self-contained — they include their own `<style>` block for the resource
badges (`ul.res`, `.rb-khan`, etc.) and don't depend on `app.js` for table
transformation. Then:

1. Add a nav link to all other pages (`index.html`, `math.html`, `ela.html`,
   `science.html`, `economics.html`, `computer-science.html`).
2. Add a new subject card to `index.html`'s "Pick your matrix" section.

### Add a new grade-level section to math.html

1. Add the section's HTML in the appropriate place between existing sections.
2. Add a grade-nav link in the `<nav class="grade-nav">`.
3. Update `gradeKeyFromSectionId()` in `app.js` to map the new section ID to
   a cellId prefix.
4. Update `MATH_DOMAIN_TO_ABBREV` in `app.js` if the section introduces new
   domain names.
5. Add corresponding entries to `data.js`, `resources.js`, and (optionally)
   `troy-curriculum.js`.

## How the data was researched

This project was built by orchestrating Claude Code agents with web access
(WebSearch + WebFetch). Each major data section came from a focused research
prompt; the full set is in [`PROMPTS.md`](./PROMPTS.md) for reproducibility.

The general pattern:

1. **Prompt a research agent** with a specific question (e.g., "find Troy
   SD's Geometry textbook"). Use multiple search strategies and cite primary
   sources.
2. **Receive structured findings** with confidence ratings and source URLs.
3. **Integrate into the site** via the appropriate JS data file or HTML
   page, preserving the source attribution and any flagged uncertainty.

## Caveats baked into the site

- **NWEA RIT bands** in `data.js` are based on the structure of NWEA's
  Learning Continuum but were not verified live cell-by-cell against the
  current production version. Verify against the MAP Help Center before use
  in placement decisions.
- **Troy SD HS textbook citations**: Geometry and Algebra 2 are confirmed
  via Troy's own Test-Out study sheets. Algebra 1, Pre-Calc, AP Calc, AP
  Stats publishers are not publicly disclosed and are flagged as unverified.
- **Troy SD K–5 ELA**: Collaborative Literacy + UFLI Foundations are in
  pilot, not adopted. Status is flagged as "Currently piloting" throughout.
- **Troy SD non-math test-out policy**: explicitly provides no study
  materials for Bio, Chem, Econ, etc. — the test-out PDF strategy that
  identified Math textbooks does not work for these subjects, so their
  textbook citations are low-confidence inference (typically blank with
  an `[unverified]` flag).
- **Curriculum content** is derived from publicly available standards
  documents and curriculum publisher pages; treat it as a reference, not
  a substitute for district policy.

## License

MIT License — see [`LICENSE`](./LICENSE).

Standards content (Michigan K-12 Standards, Common Core, NGSS, CSTA, AP
course descriptions) is property of the respective publishers and bodies.
NWEA, MAP, and MAP Growth are trademarks of NWEA.

## Compiled

2026-04-29.
