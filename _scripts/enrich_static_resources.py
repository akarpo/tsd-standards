"""Enrich Free Resources cells in static HTML pages (science, economics, CS).

The static pages each have multiple rows whose Free Resources column is a
`<ul class="res">…</ul>`. We locate each row by its first-cell domain code
(e.g., "HS-LS1", "E1", "CS"+"Computing Systems", etc.) and append a
curated set of additional rigorous national-syllabi / textbook /
self-directed-learning resources to the existing list, just before
the closing `</ul></td>`.

Run:  python _scripts/enrich_static_resources.py
"""
from __future__ import annotations
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]

# ---------- Resource additions, keyed by row anchor ----------
# Each anchor is a substring that uniquely identifies the FIRST cell of
# the row (e.g. the domain badge text). We match on the anchor and add the
# new <li> items at the END of the row's resource <ul>, just before </ul>.

# Each entry: (badge_class, badge_label, url, name, optional note)
def li(cls, label, url, name, note=None):
    note_html = (
        f'<span class="res-note">{note}</span>' if note else ''
    )
    return (f'          <li><span class="rb {cls}">{label}</span>'
            f'<a href="{url}" target="_blank" rel="noopener">{name}</a>'
            f'{note_html}</li>')


SCIENCE_ADDS = {
    # HS-LS1 — Molecules to Organisms (cells, DNA, photosynth, respiration, homeostasis)
    "HS-LS1": [
        li("rb-course", "★Top",  "https://apcentral.collegeboard.org/courses/ap-biology",
           "AP Biology — Course & Exam Description (CED)",
           "Official 230+ pp PDF: full curriculum, sample MCQs, FRQs, sample syllabi"),
        li("rb-course", "Course", "https://pre-ap.collegeboard.org/courses/course-descriptions/biology",
           "College Board — Pre-AP Biology framework",
           "National Honors-track Gr 9 Bio framework (feeder to AP Bio)"),
        li("rb-course", "Course", "https://bscs.org/curriculum-products/",
           "BSCS Science Learning — free HS Biology curricula"),
        li("rb-course", "Course", "https://www.biointeractive.org/educator-tools/courses",
           "HHMI BioInteractive — Course Library",
           "Sequenced curriculum bundles built from BioInteractive units"),
        li("rb-course", "OCW",   "https://www.labxchange.org/library?source=harvard",
           "LabXchange (Harvard) — free interactive Bio modules"),
        li("rb-text",   "Text",  "https://www.biologyproject.arizona.edu/",
           "The Biology Project (Univ. of Arizona) — free tutorials + problem sets"),
    ],
    # HS-LS2 — Ecosystems
    "HS-LS2": [
        li("rb-course", "★Top",  "https://apcentral.collegeboard.org/courses/ap-environmental-science",
           "AP Environmental Science — Course & Exam Description (CED)",
           "Official ecology/ecosystem-aligned framework"),
        li("rb-course", "Course", "https://www.biointeractive.org/educator-tools/courses",
           "HHMI BioInteractive — Ecology Course bundles"),
        li("rb-course", "Course", "https://bscs.org/curriculum-products/",
           "BSCS Science Learning — Ecology units"),
        li("rb-course", "OCW",   "https://www.labxchange.org/library?source=harvard",
           "LabXchange — free Bio/Ecology modules"),
        li("rb-data",   "Data",  "https://earthobservatory.nasa.gov/",
           "NASA Earth Observatory — climate & biosphere datasets"),
    ],
    # HS-LS3 — Heredity
    "HS-LS3": [
        li("rb-course", "★Top",  "https://apcentral.collegeboard.org/courses/ap-biology",
           "AP Biology CED — Heredity (Unit 5) + Gene Expression (Unit 6)"),
        li("rb-course", "Course", "https://pre-ap.collegeboard.org/courses/course-descriptions/biology",
           "Pre-AP Biology — Genetics framework"),
        li("rb-course", "Course", "https://www.biointeractive.org/educator-tools/courses",
           "HHMI BioInteractive — Genetics Course"),
        li("rb-tool",   "Tool",  "https://www.yourgenome.org/",
           "yourgenome.org (Wellcome) — free genetics tutorials"),
        li("rb-text",   "Text",  "https://www.biologyproject.arizona.edu/",
           "The Biology Project — Mendelian genetics tutorials"),
    ],
    # HS-LS4 — Evolution
    "HS-LS4": [
        li("rb-course", "★Top",  "https://apcentral.collegeboard.org/courses/ap-biology",
           "AP Biology CED — Natural Selection (Unit 7)"),
        li("rb-course", "Course", "https://pre-ap.collegeboard.org/courses/course-descriptions/biology",
           "Pre-AP Biology — Evolution framework"),
        li("rb-course", "OCW",   "https://oyc.yale.edu/ecology-and-evolutionary-biology/eeb-122",
           "Yale Open Course — Principles of Evolution, Ecology & Behavior"),
        li("rb-course", "Course", "https://www.biointeractive.org/educator-tools/courses",
           "HHMI BioInteractive — Evolution Course"),
        li("rb-text",   "Text",  "https://www.biologyproject.arizona.edu/",
           "The Biology Project — Evolution tutorials"),
    ],
    # HS-PS1 — Matter & Interactions
    "HS-PS1": [
        li("rb-course", "★Top",  "https://apcentral.collegeboard.org/courses/ap-chemistry",
           "AP Chemistry — Course & Exam Description (CED)",
           "Official ~250 pp PDF: full curriculum, MCQs, FRQs, sample syllabi"),
        li("rb-course", "Course", "https://pre-ap.collegeboard.org/courses/course-descriptions/chemistry",
           "College Board — Pre-AP Chemistry framework",
           "National Honors-track Gr 10–11 Chem framework"),
        li("rb-course", "Course", "https://teachchemistry.org/",
           "ACS Teach Chemistry — free K-12 chem curriculum",
           "American Chemical Society's free HS curriculum + activities"),
        li("rb-course", "Course", "https://www.acs.org/education/students/highschool/chemmatters.html",
           "ACS ChemMatters magazine (free for students)"),
        li("rb-text",   "Text",  "https://www.chemedx.org/",
           "ChemEd X — free chemistry teacher community + content"),
        li("rb-course", "OCW",   "https://www.labxchange.org/library?source=harvard",
           "LabXchange — Harvard interactive Chemistry modules"),
    ],
    # HS-PS2 — Forces & Interactions / IMF
    "HS-PS2": [
        li("rb-course", "★Top",  "https://apcentral.collegeboard.org/courses/ap-chemistry",
           "AP Chemistry CED — Intermolecular Forces (Unit 3)"),
        li("rb-course", "Course", "https://pre-ap.collegeboard.org/courses/course-descriptions/chemistry",
           "Pre-AP Chemistry — IMF framework"),
        li("rb-course", "Course", "https://teachchemistry.org/",
           "ACS Teach Chemistry — Bonding & IMF"),
        li("rb-course", "Course", "https://apcentral.collegeboard.org/courses/ap-physics-1",
           "AP Physics 1 CED — Forces & Newton's Laws"),
    ],
    # HS-PS3 — Energy
    "HS-PS3": [
        li("rb-course", "★Top",  "https://apcentral.collegeboard.org/courses/ap-chemistry",
           "AP Chemistry CED — Thermodynamics (Unit 6)"),
        li("rb-course", "Course", "https://apcentral.collegeboard.org/courses/ap-physics-1",
           "AP Physics 1 CED — Energy"),
        li("rb-course", "Course", "https://teachchemistry.org/",
           "ACS Teach Chemistry — Energy & Thermo activities"),
        li("rb-course", "OCW",   "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/",
           "MIT OCW: Classical Mechanics (Energy units)"),
    ],
}


ECONOMICS_ADDS = {
    "E1": [
        li("rb-course", "★Top",  "https://apcentral.collegeboard.org/courses/ap-microeconomics",
           "AP Microeconomics — Course & Exam Description (CED)",
           "Official PDF: 6 units, MCQs, FRQs, sample syllabi"),
        li("rb-course", "Course", "https://www.councilforeconed.org/wp-content/uploads/2012/03/voluntary-national-content-standards-2010.pdf",
           "CEE Voluntary National Content Standards in Economics (PDF)",
           "Authoritative national K-12 economics standards (20 standards)"),
        li("rb-course", "OCW",   "https://oyc.yale.edu/economics/econ-159",
           "Yale Open Course — Game Theory (microeconomic foundations)"),
        li("rb-course", "Course", "https://www.coreecon.org/",
           "CORE Econ — The Economy 2.0 (free comprehensive textbook)",
           "Used as Intro Econ textbook at UCL, Sciences Po, Toulouse"),
        li("rb-prac",   "Practice", "https://www.smgww.org/",
           "Stock Market Game (SIFMA Foundation) — free for educators"),
    ],
    "E2": [
        li("rb-course", "★Top",  "https://apcentral.collegeboard.org/courses/ap-macroeconomics",
           "AP Macroeconomics — Course & Exam Description (CED)",
           "Official PDF: 6 units, MCQs, FRQs, sample syllabi"),
        li("rb-course", "Course", "https://www.coreecon.org/the-economy/",
           "CORE Econ — The Economy 2.0 textbook (free, full)",
           "Macroeconomic theory + real-world data integration"),
        li("rb-course", "OCW",   "https://ocw.mit.edu/courses/14-02-principles-of-macroeconomics-spring-2014/",
           "MIT OCW: Principles of Macroeconomics"),
        li("rb-data",   "Data",  "https://www.federalreserve.gov/data.htm",
           "Federal Reserve Board — Statistical Releases"),
        li("rb-course", "Course", "https://www.federalreserveeducation.org/about-the-fed/structure-and-functions/courses",
           "FederalReserveEducation.org — free monetary-policy curriculum"),
    ],
    "E3": [
        li("rb-course", "Course", "https://apcentral.collegeboard.org/courses/ap-macroeconomics",
           "AP Macro CED — International Trade & Finance unit"),
        li("rb-course", "Course", "https://www.coreecon.org/",
           "CORE Econ — global trade chapters (free)"),
        li("rb-course", "OCW",   "https://oyc.yale.edu/economics/econ-159",
           "Yale Open Course — Financial Markets (Robert Shiller)"),
        li("rb-data",   "Data",  "https://www.imf.org/en/Data",
           "IMF Data — free international macro datasets"),
    ],
    "E4": [
        li("rb-course", "Course", "https://www.ngpf.org/curriculum/",
           "NGPF Semester Course — full national HS Personal Finance curriculum"),
        li("rb-course", "Course", "https://www.federalreserveeducation.org/resources/personal-finance",
           "Federal Reserve Education — Personal Finance lessons"),
        li("rb-prac",   "Practice", "https://www.budgetchallenge.com/",
           "Budget Challenge — free month-long simulation"),
        li("rb-prac",   "Practice", "https://www.smgww.org/",
           "Stock Market Game — free for K-12"),
        li("rb-tool",   "Tool",  "https://nextgenpersonalfinance.org/arcade/",
           "NGPF Arcade — free finance mini-games"),
        li("rb-course", "Course", "https://www.fdic.gov/resources/consumers/money-smart/",
           "FDIC Money Smart — free curriculum across age bands"),
    ],
}


# CS rows are anchored on the badge text on the FIRST cell e.g.
# "Computing Systems", "Networks & the Internet", "Data & Analysis",
# "Algorithms & Programming", "Impacts of Computing"
CS_ADDS = {
    "Computing Systems": [
        li("rb-course", "★Top",  "https://apcentral.collegeboard.org/courses/ap-computer-science-principles",
           "AP CSP — Course & Exam Description (CED)",
           "Official PDF: 5 Big Ideas, learning objectives, performance tasks"),
        li("rb-course", "Course", "https://bjc.berkeley.edu/",
           "Beauty & Joy of Computing (BJC) — UC Berkeley AP CSP curriculum",
           "Free, College Board–endorsed CSP curriculum (Snap! based)"),
        li("rb-course", "OCW",   "https://web.stanford.edu/class/cs106a/",
           "Stanford CS106A — Programming Methodology (free public class)"),
    ],
    "Networks": [
        li("rb-course", "Course", "https://apcentral.collegeboard.org/courses/ap-computer-science-principles",
           "AP CSP CED — Big Idea 4 (Computer Systems & Networks)"),
        li("rb-course", "Course", "https://niccs.cisa.gov/education-training/cybersecurity-training-events",
           "CISA Cybersecurity Training (free federal resources)"),
        li("rb-prac",   "Practice", "https://www.cyberstart.com/",
           "CyberStart America — free cyber game (US students)"),
    ],
    "Data &": [  # match "Data & Analysis"
        li("rb-course", "★Top",  "https://apcentral.collegeboard.org/courses/ap-statistics",
           "AP Statistics — Course & Exam Description (CED)",
           "Cross-relevant for CS Data & Analysis: probability, sampling, inference"),
        li("rb-course", "Course", "https://www.openintro.org/book/os/",
           "OpenIntro Statistics — free comprehensive textbook"),
        li("rb-course", "Course", "https://www.fast.ai/",
           "fast.ai — free Practical Deep Learning courses"),
        li("rb-course", "OCW",   "https://ocw.mit.edu/courses/6-0002-introduction-to-computational-thinking-and-data-science-fall-2016/",
           "MIT OCW: Computational Thinking & Data Science"),
    ],
    "Algorithms": [
        li("rb-course", "★Top",  "https://apcentral.collegeboard.org/courses/ap-computer-science-a",
           "AP CSA — Course & Exam Description (CED)",
           "Official Java curriculum: ~200 pp PDF + sample MCQs/FRQs"),
        li("rb-course", "★Top",  "https://apcentral.collegeboard.org/courses/ap-computer-science-principles",
           "AP CSP — Course & Exam Description (CED)"),
        li("rb-course", "Course", "https://www.bebraschallenge.org/",
           "Bebras Computational Thinking Challenge (free, international)"),
        li("rb-course", "OCW",   "https://web.stanford.edu/class/cs106b/",
           "Stanford CS106B — Programming Abstractions (free public class)"),
        li("rb-course", "OCW",   "https://csprimer.com/",
           "CS Primer — free CS fundamentals course"),
        li("rb-text",   "Text",  "https://runestone.academy/ns/books/published/csawesome/index.html",
           "CSAwesome — interactive AP CSA Java textbook (Runestone)"),
        li("rb-text",   "Text",  "https://runestone.academy/ns/books/published/thinkcspy/index.html",
           "How to Think Like a Computer Scientist (Python) — Runestone"),
        li("rb-prac",   "Practice", "https://train.usaco.org/",
           "USACO Training Program (free, all levels)"),
    ],
    "Impacts": [
        li("rb-course", "Course", "https://apcentral.collegeboard.org/courses/ap-computer-science-principles",
           "AP CSP CED — Big Idea 5 (Impact of Computing)"),
        li("rb-course", "Course", "https://www.media.mit.edu/courses/",
           "MIT Media Lab — open courses on tech & society"),
        li("rb-text",   "Text",  "https://ethicsincomputing.com/",
           "Ethics in Computing (open educational resource)"),
        li("rb-tool",   "Tool",  "https://digitalliteracy.gov/",
           "DigitalLiteracy.gov — federal digital-citizenship hub"),
    ],
}


def inject(html: str, anchor_to_lis: dict[str, list[str]]) -> tuple[str, int]:
    """For each row whose first cell contains an anchor key, append the
    given <li> entries to that row's `<ul class="res">…</ul>` block.

    The resources <ul> is identified specifically by the `class="res"`
    attribute, so we don't accidentally inject into the skill-list <ul>
    that also lives in the row.
    """
    inserts = 0
    out_parts = []
    pos = 0
    row_re = re.compile(r"<tr>(.*?)</tr>", re.DOTALL)

    for m in row_re.finditer(html):
        out_parts.append(html[pos:m.start()])
        row = m.group(0)

        # Determine anchor: look at first <td class="domain-cell">…</td>
        first_cell_m = re.search(r'<td class="domain-cell">(.*?)</td>', row, re.DOTALL)
        first_cell = first_cell_m.group(1) if first_cell_m else ""

        new_lis = []
        for anchor, lis in anchor_to_lis.items():
            if anchor in first_cell:
                new_lis = lis
                break

        if new_lis:
            # Inject just before the closing `</ul>` of the row's
            # `<ul class="res">…</ul>` block.
            block = "\n".join(new_lis) + "\n        "
            res_ul_re = re.compile(r'(<ul class="res">.*?)(</ul>)', re.DOTALL)
            new_row, n = res_ul_re.subn(r'\1' + block + r'\2', row, count=1)
            if n:
                row = new_row
                inserts += 1
        out_parts.append(row)
        pos = m.end()

    out_parts.append(html[pos:])
    return ("".join(out_parts), inserts)


def process(path: Path, additions: dict):
    src = path.read_text(encoding="utf-8")
    out, n = inject(src, additions)
    if n:
        # Backup once
        bak = path.with_suffix(path.suffix + ".enrich.bak")
        if not bak.exists():
            bak.write_text(src, encoding="utf-8")
        # Atomic replace
        tmp = path.with_suffix(path.suffix + ".tmp")
        tmp.write_text(out, encoding="utf-8")
        import os
        os.replace(tmp, path)
        print(f"  {path.name}: enriched {n} rows")
    else:
        print(f"  {path.name}: NO ROWS MATCHED — check anchors")


print("Enriching static resource cells:")
process(ROOT / "science.html", SCIENCE_ADDS)
process(ROOT / "economics.html", ECONOMICS_ADDS)
process(ROOT / "computer-science.html", CS_ADDS)
print("Done.")
