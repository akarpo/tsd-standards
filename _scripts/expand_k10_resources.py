"""K-10 Math + ELA expansion: comprehensive self-directed learning resources
for advanced students.

For each K-10 cellId in resources.js, append a curated batch of additional
free resources covering:
  - Sample syllabi from rigorous national curricula
    (EL Education, CKLA, Open Up Resources, Illustrative Mathematics,
    Eureka Math/EngageNY, Phillips Exeter)
  - Free textbooks and anthologies (OpenStax, CK-12, LibriVox, Standard
    Ebooks, Library of America, HathiTrust, Internet Archive, Bartleby)
  - Advanced practice / competition (AoPS Alcumus + Wiki, AMC 8/10/12,
    MATHCOUNTS, MOEMS, Math Kangaroo, Project Euler, NRICH, Open Middle)
  - Self-directed online courses (MIT OCW Highlights for High School,
    MIT BLOSSOMS, Saylor Academy, Yale Open Courses, edX/Coursera audit)
  - Conceptual/intuition resources (3Blue1Brown, Numberphile,
    Better Explained, Cut the Knot, Mathigon/Polypad)

Run:  python _scripts/expand_k10_resources.py
"""
from __future__ import annotations
from pathlib import Path
import re
import os

ROOT = Path(__file__).resolve().parents[1]
RESOURCES = ROOT / "resources.js"


def E(t, name, url, note=None):
    """Render one resource entry as a JS object literal line."""
    note_str = f', note: "{note}"' if note else ''
    return f'    {{ type: "{t}", name: "{name}", url: "{url}"{note_str} }}'


# =============================================================================
# Re-usable resource bundles. Each is a list of E(...) entries.
# =============================================================================

# ---------- ELA: K-2 sample syllabi + advanced enrichment ----------
ELA_K2_SYLLABI = [
    E("course", "★Top  Core Knowledge Language Arts (CKLA) — full K-5 curriculum",
      "https://www.coreknowledge.org/curriculum/language-arts/",
      "Free, content-rich, knowledge-building curriculum used at top US public schools"),
    E("course", "EL Education K-5 ELA Curriculum",
      "https://curriculum.eleducation.org/curriculum/ela",
      "Free, NCTQ-rated 'green'; thematic modules + close reading"),
    E("course", "Open Up Resources Bookworms (K-5)",
      "https://openupresources.org/elementary-ela/",
      "Free K-5 reading + writing curriculum"),
    E("course", "EngageNY / NYSED ELA — Skills + Listening & Learning strands",
      "https://www.engageny.org/",
      "Original NYSED CCSS-aligned modules (now CKLA-derived)"),
]

ELA_K2_ADVANCED = [
    E("text", "LibriVox — free audiobooks of public-domain children's lit",
      "https://librivox.org/"),
    E("text", "Standard Ebooks — beautifully typeset public-domain books",
      "https://standardebooks.org/"),
    E("text", "Project Gutenberg — Children's Bookshelf",
      "https://www.gutenberg.org/wiki/Children%27s_Bookshelf_(Bookshelf)"),
    E("foundational", "The Measured Mom — free literacy printables (advanced K-2)",
      "https://www.themeasuredmom.com/"),
    E("foundational", "Phonics Hero — free demo + decodables",
      "https://www.phonicshero.com/"),
    E("free", "Storynory — free narrated children's stories",
      "https://www.storynory.com/"),
    E("free", "ABCya! — free K-5 literacy games",
      "https://www.abcya.com/"),
]

# ---------- ELA: Gr 3-5 sample syllabi + advanced enrichment ----------
ELA_3_5_SYLLABI = [
    E("course", "★Top  Core Knowledge Language Arts (CKLA) — Gr 3-5 modules",
      "https://www.coreknowledge.org/curriculum/language-arts/",
      "Free knowledge-building curriculum w/ rich content domains"),
    E("course", "EL Education Gr 3-5 ELA Curriculum",
      "https://curriculum.eleducation.org/curriculum/ela",
      "Free; NCTQ 'green' rated; module + skills blocks"),
    E("course", "Open Up Resources Bookworms (3-5)",
      "https://openupresources.org/elementary-ela/"),
    E("course", "EngageNY / NYSED ELA modules (Gr 3-5)",
      "https://www.engageny.org/"),
    E("course", "Achieve the Core — Gr 3-5 Read-Aloud + Close Reading tasks",
      "https://achievethecore.org/category/411/ela-literacy-lessons"),
]

ELA_3_5_ADVANCED = [
    E("text", "Standard Ebooks — public-domain literature (Gr 3-5+)",
      "https://standardebooks.org/"),
    E("text", "Project Gutenberg — full library",
      "https://www.gutenberg.org/"),
    E("text", "Bartleby — free classic literature",
      "https://www.bartleby.com/"),
    E("text", "Internet Archive — free books (incl. Newbery winners)",
      "https://archive.org/"),
    E("text", "Library of Congress — Children's Lit Collections",
      "https://www.loc.gov/programs/teachers/"),
    E("tool", "Wordsift — free vocabulary visualizer",
      "https://wordsift.org/",
      "Visualize, define, group academic words from any text"),
    E("tool", "Rewordify — text simplifier (helps advanced learners scaffold up)",
      "https://rewordify.com/"),
    E("free", "Listenwise — free educator tier (NPR-style listening lessons)",
      "https://listenwise.com/"),
    E("course", "National History Day — research-based ELA + history project",
      "https://www.nhd.org/",
      "Top middle/HS research competition; uses primary sources"),
    E("course", "Scholastic Art & Writing Awards (Gr 7-12; gateway concepts at Gr 5+)",
      "https://www.artandwriting.org/"),
]

# ---------- ELA: Gr 6-8 sample syllabi + advanced ----------
ELA_6_8_SYLLABI = [
    E("course", "★Top  EL Education Gr 6-8 ELA Curriculum (free)",
      "https://curriculum.eleducation.org/curriculum/ela",
      "NCTQ 'green'; module-based, college-prep rigor"),
    E("course", "Achieve the Core — Gr 6-8 close-reading tasks (CCSS-aligned)",
      "https://achievethecore.org/category/411/ela-literacy-lessons"),
    E("course", "EngageNY / NYSED ELA modules (Gr 6-8)",
      "https://www.engageny.org/"),
    E("course", "EDSITEment (NEH) — middle-school humanities lesson plans",
      "https://edsitement.neh.gov/"),
    E("course", "Stanford History Education Group — Reading Like a Historian",
      "https://sheg.stanford.edu/history-lessons",
      "Free document-based critical-reading curriculum"),
]

ELA_6_8_ADVANCED = [
    E("text", "Library of America — Story of the Week (free)",
      "https://storyoftheweek.loa.org/"),
    E("text", "Modern American Poetry (Univ. of Illinois)",
      "https://www.modernamericanpoetry.org/"),
    E("text", "Standard Ebooks — public-domain literature",
      "https://standardebooks.org/"),
    E("text", "HathiTrust Digital Library — free scholar editions",
      "https://www.hathitrust.org/"),
    E("course", "Yale Open Courses — English (preview HS-track lectures)",
      "https://oyc.yale.edu/english"),
    E("course", "Khan Academy — Pre-AP English 1 path (Gr 9 Honors prep)",
      "https://www.khanacademy.org/ela/cc-9th-reading-vocab"),
    E("course", "Pre-AP English 1 Course Guide (PDF) — feeder syllabus",
      "https://pre-ap.collegeboard.org/media/pdf/pre-ap-english-cg-wr.pdf"),
    E("course", "National History Day (research + writing competition)",
      "https://www.nhd.org/"),
    E("course", "Scholastic Art & Writing Awards (Gr 7-12)",
      "https://www.artandwriting.org/"),
    E("course", "National Speech & Debate Association — Middle School Resources",
      "https://www.speechanddebate.org/student-resources/"),
    E("tool", "MIT OCW Highlights for High School — Humanities & Lit",
      "https://ocw.mit.edu/high-school/humanities-and-social-sciences/"),
]

# ---------- ELA: Gr 9-10 sample syllabi + advanced ----------
# (HS already very rich; we add a few more national exemplars + competition)
ELA_910_ADVANCED = [
    E("course", "★Top  EL Education 9-12 ELA Curriculum (free)",
      "https://curriculum.eleducation.org/curriculum/ela/9-12",
      "NCTQ 'green'; explicit AP-track alignment"),
    E("course", "Stanford History Education Group — HS document-based units",
      "https://sheg.stanford.edu/history-lessons"),
    E("course", "MIT OCW Highlights for High School — Humanities",
      "https://ocw.mit.edu/high-school/humanities-and-social-sciences/"),
    E("course", "edX HarvardX — Masterpieces of World Lit (free audit)",
      "https://www.edx.org/learn/literature/harvard-university-masterpieces-of-world-literature"),
    E("course", "Saylor Academy — ENGL202: World Literature (free)",
      "https://learn.saylor.org/course/view.php?id=10"),
    E("course", "National History Day — research-paper / website / documentary track",
      "https://www.nhd.org/"),
    E("course", "Scholastic Art & Writing Awards (national HS writing competition)",
      "https://www.artandwriting.org/"),
    E("course", "John Locke Institute Essay Competition (advanced HS)",
      "https://www.johnlockeinstitute.com/essay-competition"),
    E("text", "Library of America — Story of the Week (curated American canon)",
      "https://storyoftheweek.loa.org/"),
    E("text", "American Verse Project — public-domain American poetry",
      "https://quod.lib.umich.edu/a/amverse"),
]

# =============================================================================
# Math expansion bundles
# =============================================================================

# ---------- Math: K-2 ----------
MATH_K2_SYLLABI = [
    E("course", "★Top  Eureka Math / EngageNY K-2 (free)",
      "https://www.engageny.org/ccls-math",
      "Free national curriculum; rigorous K-12 math (now Great Minds)"),
    E("course", "Illustrative Mathematics K-5 (free via Kendall Hunt)",
      "https://accessim.org/k-5",
      "Free, IM-authored K-5 curriculum"),
    E("course", "Open Up Resources K-5 Math (planned/free)",
      "https://openupresources.org/math-curriculum/"),
    E("course", "Bridges in Mathematics — overview + scope & sequence",
      "https://www.mathlearningcenter.org/curriculum/bridges",
      "Math Learning Center — partial free resources"),
]

MATH_K2_ADVANCED = [
    E("tool", "★Top  Beast Academy Playground (free, AoPS)",
      "https://playground.beastacademy.com/",
      "Free advanced puzzles from Art of Problem Solving"),
    E("tool", "Greg Tang Math — free puzzles & games",
      "https://gregtangmath.com/"),
    E("tool", "Bedtime Math — free daily problems for K-5",
      "https://bedtimemath.org/"),
    E("tool", "Toy Theater — free interactive math manipulatives",
      "https://toytheater.com/category/math-games/"),
    E("tool", "Math Playground — free K-6 games",
      "https://www.mathplayground.com/"),
    E("tool", "Coolmath4kids — free games + puzzles",
      "https://www.coolmath4kids.com/"),
    E("video", "Numberblocks (BBC, on YouTube) — free animated number sense",
      "https://www.youtube.com/playlist?list=PLDUKkIRc-YyV1nIqspQk9-rE0lZJ-wFxd"),
    E("practice", "Math Kangaroo USA — Levels 1-2 (advanced K-2 enrichment)",
      "https://mathkangaroo.org/mks/"),
]

# ---------- Math: Gr 3-5 ----------
MATH_3_5_SYLLABI = [
    E("course", "★Top  Eureka Math / EngageNY Gr 3-5 (free)",
      "https://www.engageny.org/ccls-math"),
    E("course", "Illustrative Mathematics 3-5 (free)",
      "https://accessim.org/3-5"),
    E("course", "Open Up Resources K-5 Math (free)",
      "https://openupresources.org/math-curriculum/"),
    E("course", "Bridges in Mathematics scope & sequence",
      "https://www.mathlearningcenter.org/curriculum/bridges"),
]

MATH_3_5_ADVANCED = [
    E("course", "★Top  Beast Academy Playground (free, AoPS)",
      "https://playground.beastacademy.com/",
      "Free advanced puzzles + sample lessons (Beast Academy is the gold-standard advanced K-5 curriculum)"),
    E("practice", "★Top  AoPS Alcumus — free adaptive practice",
      "https://artofproblemsolving.com/alcumus",
      "Goes from elementary through HS — Art of Problem Solving's free skill builder"),
    E("course", "Math Olympiad for Elementary & Middle School (MOEMS)",
      "https://www.moems.org/",
      "National Gr 4-6 math olympiad; sample problems online"),
    E("practice", "Math Kangaroo USA (Levels 3-4)",
      "https://mathkangaroo.org/mks/"),
    E("course", "AoPS Wiki — algebra, number theory, geometry essays",
      "https://artofproblemsolving.com/wiki",
      "Free encyclopedia of competition math"),
    E("video", "Numberphile — short videos on advanced math ideas",
      "https://www.youtube.com/@numberphile"),
    E("video", "3Blue1Brown — visual essays on advanced concepts",
      "https://www.youtube.com/@3blue1brown"),
    E("text", "Better Explained — intuition-first explanations of math concepts",
      "https://betterexplained.com/"),
    E("tool", "Greg Tang Math — advanced puzzles + Word Problem Generator",
      "https://gregtangmath.com/"),
    E("course", "MIT BLOSSOMS — Mathematics video lessons (some accessible to Gr 4-5)",
      "https://blossoms.mit.edu/videos/by_subject/mathematics"),
]

# ---------- Math: Gr 6-8 ----------
MATH_6_8_SYLLABI = [
    E("course", "★Top  Illustrative Mathematics 6-8 / Open Up Resources (free)",
      "https://im.kendallhunt.com/MS/",
      "Free, top-rated 6-8 math curriculum (NCTQ Tier 1)"),
    E("course", "★Top  Eureka Math / EngageNY Gr 6-8 (free)",
      "https://www.engageny.org/ccls-math"),
    E("course", "Open Up Resources 6-8 Math curriculum (free)",
      "https://openupresources.org/math-curriculum/grade-6-8/"),
    E("course", "MIT BLOSSOMS — Algebra & Geometry video lessons (Gr 7+)",
      "https://blossoms.mit.edu/videos/by_subject/mathematics"),
]

MATH_6_8_ADVANCED = [
    E("course", "★Top  Art of Problem Solving — Introduction series (Pre-Algebra, Algebra, Number Theory, Counting)",
      "https://artofproblemsolving.com/store/list/aops-curriculum",
      "Books are paid; class textbooks viewable online; free Alcumus + AoPS Wiki cover same material"),
    E("practice", "★Top  AoPS Alcumus (free adaptive practice)",
      "https://artofproblemsolving.com/alcumus"),
    E("course", "AMC 8 (American Math Competition, Gr 6-8)",
      "https://www.maa.org/math-competitions/amc-8",
      "National competition; past problems publicly available"),
    E("course", "MATHCOUNTS — middle school competition program",
      "https://www.mathcounts.org/programs",
      "Free curriculum, problem-of-the-week, club resources"),
    E("course", "Math Olympiad for Middle School (MOEMS Division M)",
      "https://www.moems.org/"),
    E("practice", "Math Kangaroo USA (Levels 5-8)",
      "https://mathkangaroo.org/mks/"),
    E("text", "AoPS Wiki — competition math reference (free)",
      "https://artofproblemsolving.com/wiki"),
    E("text", "Better Explained — algebra/geometry intuition",
      "https://betterexplained.com/"),
    E("video", "3Blue1Brown — Essence of Algebra/Linear Algebra (advanced)",
      "https://www.youtube.com/@3blue1brown"),
    E("video", "Numberphile — advanced math curiosities",
      "https://www.youtube.com/@numberphile"),
    E("video", "Stand-up Maths (Matt Parker) — math humor + insight",
      "https://www.youtube.com/@standupmaths"),
    E("tool", "Mathigon Polypad — virtual manipulatives",
      "https://polypad.amplify.com/"),
    E("tool", "Project Euler — math + programming problems (advanced)",
      "https://projecteuler.net/"),
    E("course", "MIT OCW Highlights for High School — Algebra & Geometry",
      "https://ocw.mit.edu/high-school/mathematics/"),
]

# ---------- Math: HS (Algebra 1, Geometry, Algebra 2) ----------
MATH_HS_SYLLABI = [
    E("course", "★Top  Illustrative Mathematics HS (Algebra 1 / Geometry / Algebra 2)",
      "https://im.kendallhunt.com/HS/",
      "Free, top-rated HS math curriculum (NCTQ Tier 1)"),
    E("course", "Phillips Exeter Academy — Math 1-4 problem sets (free)",
      "https://www.exeter.edu/mathematics/math-materials",
      "Renowned Harkness-style problem-based curriculum"),
    E("course", "★Top  EngageNY / Eureka Math HS curriculum (free)",
      "https://www.engageny.org/ccls-math"),
    E("course", "MIT BLOSSOMS — HS Algebra/Geometry/Trig video lessons",
      "https://blossoms.mit.edu/videos/by_subject/mathematics"),
    E("course", "Saylor Academy — College Algebra (free, self-paced)",
      "https://learn.saylor.org/course/view.php?id=12"),
]

MATH_HS_ADVANCED = [
    E("course", "★Top  AoPS Online courses (Intro/Intermediate Algebra, Geometry, Number Theory, Counting)",
      "https://artofproblemsolving.com/online",
      "Paid courses; free Alcumus + AoPS Wiki provide same content & practice"),
    E("practice", "★Top  AoPS Alcumus (free adaptive practice)",
      "https://artofproblemsolving.com/alcumus"),
    E("course", "AMC 10/12 (American Math Competition, HS)",
      "https://www.maa.org/math-competitions/amc-1012",
      "Past problems + solutions free online"),
    E("course", "AIME (American Invitational Math Exam) — for AMC 10/12 qualifiers",
      "https://www.maa.org/math-competitions/aime"),
    E("course", "USAMTS — USA Math Talent Search (free, no entry fee)",
      "https://www.usamts.org/",
      "Year-long olympiad-style; full proofs required"),
    E("text", "AoPS Wiki — comprehensive competition math reference",
      "https://artofproblemsolving.com/wiki"),
    E("text", "Better Explained — algebra/calculus intuition",
      "https://betterexplained.com/"),
    E("text", "Cut the Knot — advanced math problems & proofs",
      "https://www.cut-the-knot.org/"),
    E("video", "3Blue1Brown — Essence of Linear Algebra / Calculus",
      "https://www.youtube.com/@3blue1brown"),
    E("video", "Numberphile — advanced math curiosities",
      "https://www.youtube.com/@numberphile"),
    E("video", "Eddie Woo (mister woo) — full HS math YouTube channel",
      "https://www.youtube.com/@misterwootube"),
    E("video", "Professor Leonard — full lecture-style HS/college math",
      "https://www.youtube.com/@ProfessorLeonard"),
    E("course", "MIT OCW Highlights for High School — Algebra/Geom/PreCalc",
      "https://ocw.mit.edu/high-school/mathematics/"),
    E("tool", "Project Euler — advanced math + programming problems",
      "https://projecteuler.net/"),
    E("tool", "Mathigon Polypad — virtual manipulatives + interactive",
      "https://polypad.amplify.com/"),
]


# =============================================================================
# Mapping cellId -> bundles to append
# =============================================================================

# ELA cellIds: gK, g1, g2, g3, g4, g5, g6, g7, g8, g910 — across strands
def ela_grades_to_cells(grades, strands=("RL","RI","W","SL","L","RF")):
    out = []
    for g in grades:
        for s in strands:
            out.append(f"ela:{g}-{s}")
    return out

ELA_K2_CELLS = ela_grades_to_cells(["gK","g1","g2"])
ELA_3_5_CELLS = ela_grades_to_cells(["g3","g4","g5"])
ELA_6_8_CELLS = ela_grades_to_cells(["g6","g7","g8"], strands=("RL","RI","W","SL","L"))  # no RF in 6-8
ELA_910_CELLS = ela_grades_to_cells(["g910"], strands=("RL","RI","W","SL","L"))

# Math cellIds — match what's actually in resources.js
def math_cells(grade_keys, domains):
    out = []
    for g in grade_keys:
        for d in domains:
            out.append(f"math:{g}-{d}")
    return out

# K: CC, OA, NBT, MD, G  (5 domains)
# 1-2: same domains
# 3-5: OA, NBT, NF, MD, G
# 6-7: RP, NS, EE, G, SP
# 8: NS, EE, F, G, SP
# Alg1: N, A, F, SP
# Geom: CO, SRT, C, GPE, GMD, CP
# Alg2: N, A, F, SP

MATH_K2_CELLS = (
    math_cells(["gK"], ["CC", "OA", "NBT", "MD", "G"]) +
    math_cells(["g1", "g2"], ["OA", "NBT", "MD", "G"])
)
MATH_3_5_CELLS = math_cells(["g3", "g4", "g5"], ["OA", "NBT", "NF", "MD", "G"])
MATH_6_8_CELLS = (
    math_cells(["g6", "g7"], ["RP", "NS", "EE", "G", "SP"]) +
    math_cells(["g8"], ["NS", "EE", "F", "G", "SP"])
)
MATH_HS_CELLS = (
    math_cells(["gAlg1"], ["N", "A", "F", "SP"]) +
    math_cells(["gGeom"], ["CO", "SRT", "C", "GPE", "GMD", "CP"]) +
    math_cells(["gAlg2"], ["N", "A", "F", "SP"])
)


def main():
    src = RESOURCES.read_text(encoding="utf-8")

    # Backup once
    bak = RESOURCES.with_suffix(RESOURCES.suffix + ".k10-expand.bak")
    if not bak.exists():
        bak.write_text(src, encoding="utf-8")

    plan = []
    # ELA bundles (syllabi + advanced together for each grade band)
    for cid in ELA_K2_CELLS:  plan.append((cid, ELA_K2_SYLLABI + ELA_K2_ADVANCED))
    for cid in ELA_3_5_CELLS: plan.append((cid, ELA_3_5_SYLLABI + ELA_3_5_ADVANCED))
    for cid in ELA_6_8_CELLS: plan.append((cid, ELA_6_8_SYLLABI + ELA_6_8_ADVANCED))
    for cid in ELA_910_CELLS: plan.append((cid, ELA_910_ADVANCED))
    # Math bundles
    for cid in MATH_K2_CELLS:  plan.append((cid, MATH_K2_SYLLABI + MATH_K2_ADVANCED))
    for cid in MATH_3_5_CELLS: plan.append((cid, MATH_3_5_SYLLABI + MATH_3_5_ADVANCED))
    for cid in MATH_6_8_CELLS: plan.append((cid, MATH_6_8_SYLLABI + MATH_6_8_ADVANCED))
    for cid in MATH_HS_CELLS:  plan.append((cid, MATH_HS_SYLLABI + MATH_HS_ADVANCED))

    n_ok, n_skip = 0, 0
    for cellId, entries in plan:
        # match the array literal:
        #   "cellId": [ ... \n  ]
        pattern = re.compile(
            r'(\"' + re.escape(cellId) + r'\":\s*\[)(.*?)(\n  \])',
            re.DOTALL,
        )
        m = pattern.search(src)
        if not m:
            n_skip += 1
            continue
        head, body, tail = m.group(1), m.group(2), m.group(3)
        body_trim = body.rstrip()
        if not body_trim.endswith(","):
            body_trim = body_trim + ","
        addition = "\n" + ",\n".join(entries)
        new_block = head + body_trim + addition + tail
        src = src[:m.start()] + new_block + src[m.end():]
        n_ok += 1

    tmp = RESOURCES.with_suffix(RESOURCES.suffix + ".tmp")
    tmp.write_text(src, encoding="utf-8")
    os.replace(tmp, RESOURCES)
    print(f"K-10 expansion complete: {n_ok} cellIds enriched, {n_skip} skipped (not present).")


if __name__ == "__main__":
    main()
