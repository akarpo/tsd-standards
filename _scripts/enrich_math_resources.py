"""Enrich Math HS-level cellId arrays in resources.js with AP Course Exam
Description PDFs, Pre-AP frameworks, MIT OCW courses, Phillips Exeter
problem sets, and other rigorous national resources.

For each math:gXXX cellId in MATH_ADDS, append the listed entries before
the array's closing bracket.

Run:  python _scripts/enrich_math_resources.py
"""
from __future__ import annotations
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
RESOURCES = ROOT / "resources.js"


def make_entry(t, name, url, note=None):
    note_str = f', note: "{note}"' if note else ''
    return f'    {{ type: "{t}", name: "{name}", url: "{url}"{note_str} }}'


# Common rigorous resources used across multiple courses
PHILEX_LANDING = "https://www.exeter.edu/mathematics"
COLLEGE_BOARD_AP_LANDING = "https://apcentral.collegeboard.org/courses"

MATH_ADDS = {
    # ===== Algebra 1 =====
    "math:gAlg1-N": [
        make_entry("course", "College Board: Pre-AP Algebra 1 — course framework",
                   "https://pre-ap.collegeboard.org/courses/course-descriptions/algebra-1",
                   "National Pre-AP Honors-track framework"),
        make_entry("course", "MIT BLOSSOMS — Algebra video lessons",
                   "https://blossoms.mit.edu/videos/by_subject/mathematics",
                   "MIT-produced free HS lessons w/ teacher guides"),
        make_entry("text", "Better Explained — algebra deep intuition",
                   "https://betterexplained.com/"),
    ],
    "math:gAlg1-A": [
        make_entry("course", "College Board: Pre-AP Algebra 1 framework",
                   "https://pre-ap.collegeboard.org/courses/course-descriptions/algebra-1"),
        make_entry("text", "AoPS Online — Alcumus (free adaptive practice)",
                   "https://artofproblemsolving.com/alcumus",
                   "Art of Problem Solving's free skill builder"),
        make_entry("course", "MIT BLOSSOMS — Algebra video lessons",
                   "https://blossoms.mit.edu/videos/by_subject/mathematics"),
        make_entry("course", "Saylor Academy — College Algebra (free, self-paced)",
                   "https://learn.saylor.org/course/view.php?id=12"),
    ],
    "math:gAlg1-F": [
        make_entry("course", "College Board: Pre-AP Algebra 1 framework",
                   "https://pre-ap.collegeboard.org/courses/course-descriptions/algebra-1"),
        make_entry("text", "Better Explained — function & graphing intuition",
                   "https://betterexplained.com/"),
    ],
    "math:gAlg1-SP": [
        make_entry("course", "OpenIntro: Advanced HS Stats (free textbook)",
                   "https://www.openintro.org/book/ahss/"),
        make_entry("course", "Saylor Academy — Statistics (free, self-paced)",
                   "https://learn.saylor.org/course/view.php?id=53"),
    ],

    # ===== Geometry =====
    "math:gGeom-CO": [
        make_entry("course", "College Board: Pre-AP Geometry with Statistics framework",
                   "https://pre-ap.collegeboard.org/courses/course-descriptions/geometry-with-statistics",
                   "National Honors-track Geom framework"),
        make_entry("course", "Phillips Exeter — Mathematics Materials (Math 1-4 problem sets)",
                   "https://www.exeter.edu/mathematics/math-materials",
                   "Free, world-renowned Harkness-style problem-based curriculum"),
        make_entry("text", "Euclid's Elements (Clark Univ. interactive)",
                   "https://aleph0.clarku.edu/~djoyce/elements/elements.html"),
    ],
    "math:gGeom-SRT": [
        make_entry("course", "College Board: Pre-AP Geometry framework",
                   "https://pre-ap.collegeboard.org/courses/course-descriptions/geometry-with-statistics"),
        make_entry("course", "Phillips Exeter Math problem sets",
                   "https://www.exeter.edu/mathematics/math-materials"),
    ],
    "math:gGeom-C": [
        make_entry("course", "College Board: Pre-AP Geometry framework",
                   "https://pre-ap.collegeboard.org/courses/course-descriptions/geometry-with-statistics"),
        make_entry("text", "Euclid's Elements (Clark Univ. interactive)",
                   "https://aleph0.clarku.edu/~djoyce/elements/elements.html"),
    ],
    "math:gGeom-GPE": [
        make_entry("course", "College Board: Pre-AP Geometry framework",
                   "https://pre-ap.collegeboard.org/courses/course-descriptions/geometry-with-statistics"),
        make_entry("course", "Phillips Exeter Math problem sets",
                   "https://www.exeter.edu/mathematics/math-materials"),
    ],
    "math:gGeom-GMD": [
        make_entry("course", "College Board: Pre-AP Geometry framework",
                   "https://pre-ap.collegeboard.org/courses/course-descriptions/geometry-with-statistics"),
        make_entry("course", "Phillips Exeter Math problem sets",
                   "https://www.exeter.edu/mathematics/math-materials"),
    ],
    "math:gGeom-CP": [
        make_entry("course", "College Board: Pre-AP Geometry framework",
                   "https://pre-ap.collegeboard.org/courses/course-descriptions/geometry-with-statistics"),
        make_entry("course", "OpenIntro: Advanced HS Statistics (free)",
                   "https://www.openintro.org/book/ahss/"),
    ],

    # ===== Algebra 2 =====
    "math:gAlg2-N": [
        make_entry("course", "College Board: Pre-AP Algebra 2 framework",
                   "https://pre-ap.collegeboard.org/courses/course-descriptions/algebra-2"),
        make_entry("text", "AoPS Online — Alcumus (free adaptive practice)",
                   "https://artofproblemsolving.com/alcumus"),
        make_entry("course", "Saylor Academy — College Algebra",
                   "https://learn.saylor.org/course/view.php?id=12"),
    ],
    "math:gAlg2-A": [
        make_entry("course", "College Board: Pre-AP Algebra 2 framework",
                   "https://pre-ap.collegeboard.org/courses/course-descriptions/algebra-2"),
        make_entry("course", "Phillips Exeter Math 2-3 problem sets",
                   "https://www.exeter.edu/mathematics/math-materials"),
        make_entry("text", "AoPS Online — Alcumus (free adaptive practice)",
                   "https://artofproblemsolving.com/alcumus"),
        make_entry("course", "MIT BLOSSOMS — Algebra video lessons",
                   "https://blossoms.mit.edu/videos/by_subject/mathematics"),
    ],
    "math:gAlg2-F": [
        make_entry("course", "College Board: Pre-AP Algebra 2 framework",
                   "https://pre-ap.collegeboard.org/courses/course-descriptions/algebra-2"),
        make_entry("course", "Phillips Exeter Math 3-4 problem sets",
                   "https://www.exeter.edu/mathematics/math-materials"),
        make_entry("text", "Better Explained — function deep intuition",
                   "https://betterexplained.com/"),
    ],
    "math:gAlg2-SP": [
        make_entry("course", "OpenIntro: Advanced HS Stats (free textbook)",
                   "https://www.openintro.org/book/ahss/"),
        make_entry("course", "Saylor Academy — Statistics",
                   "https://learn.saylor.org/course/view.php?id=53"),
    ],

    # ===== Pre-Calculus / AP Precalculus =====
    "math:gPreCalc-PR": [
        make_entry("course", "★Top  AP Precalculus — Course & Exam Description",
                   "https://apcentral.collegeboard.org/courses/ap-precalculus",
                   "Official AP CED PDF; full curriculum + sample MCQs/FRQs"),
        make_entry("course", "Phillips Exeter Math 4 problem sets",
                   "https://www.exeter.edu/mathematics/math-materials"),
        make_entry("course", "MIT OCW: Single Variable Calculus (precalc review)",
                   "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/"),
        make_entry("text", "Paul's Online Math Notes — Algebra/Trig (precalc review)",
                   "https://tutorial.math.lamar.edu/Classes/Alg/Alg.aspx"),
    ],
    "math:gPreCalc-EL": [
        make_entry("course", "AP Precalculus — Course & Exam Description",
                   "https://apcentral.collegeboard.org/courses/ap-precalculus"),
        make_entry("text", "Better Explained — exponentials & logs",
                   "https://betterexplained.com/articles/an-intuitive-guide-to-exponential-functions-e/"),
        make_entry("text", "Paul's Online Math Notes — Algebra/Exponents-Logs",
                   "https://tutorial.math.lamar.edu/Classes/Alg/Alg.aspx"),
    ],
    "math:gPreCalc-TP": [
        make_entry("course", "AP Precalculus — Course & Exam Description",
                   "https://apcentral.collegeboard.org/courses/ap-precalculus"),
        make_entry("course", "Phillips Exeter Math 3-4 problem sets",
                   "https://www.exeter.edu/mathematics/math-materials"),
        make_entry("text", "Better Explained — Trig",
                   "https://betterexplained.com/articles/intuitive-trigonometry/"),
        make_entry("text", "Paul's Online Math Notes — Trigonometry",
                   "https://tutorial.math.lamar.edu/Classes/Alg/Alg.aspx"),
    ],
    "math:gPreCalc-FM": [
        make_entry("course", "AP Precalculus — Course & Exam Description",
                   "https://apcentral.collegeboard.org/courses/ap-precalculus"),
        make_entry("course", "Phillips Exeter Math 4 problem sets",
                   "https://www.exeter.edu/mathematics/math-materials"),
        make_entry("course", "MIT BLOSSOMS — Modeling video lessons",
                   "https://blossoms.mit.edu/videos/by_subject/mathematics"),
    ],

    # ===== AP Calculus AB =====
    "math:gCalcAB-LIM": [
        make_entry("course", "★Top  AP Calculus AB — Course & Exam Description",
                   "https://apcentral.collegeboard.org/courses/ap-calculus-ab",
                   "Official AP CED PDF; ~280pp, full unit-by-unit framework + sample FRQs"),
        make_entry("course", "MIT OCW: 18.01 Single Variable Calculus",
                   "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/",
                   "Full Stanford-quality free calc course"),
        make_entry("course", "MIT OCW: 18.01x Calculus 1A (edX)",
                   "https://ocw.mit.edu/courses/res-18-001-calculus-online-textbook-spring-2005/",
                   "Strang's free Calculus textbook"),
        make_entry("text", "MIT — Strang Calculus textbook (full PDF, free)",
                   "https://ocw.mit.edu/courses/res-18-001-calculus-online-textbook-spring-2005/pages/textbook/"),
    ],
    "math:gCalcAB-DIFF": [
        make_entry("course", "★Top  AP Calculus AB CED — Differentiation units",
                   "https://apcentral.collegeboard.org/courses/ap-calculus-ab"),
        make_entry("course", "MIT OCW: 18.01 Single Variable Calculus",
                   "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/"),
        make_entry("text", "MIT — Strang Calculus textbook",
                   "https://ocw.mit.edu/courses/res-18-001-calculus-online-textbook-spring-2005/pages/textbook/"),
    ],
    "math:gCalcAB-APD": [
        make_entry("course", "AP Calc AB CED — Applications of Differentiation",
                   "https://apcentral.collegeboard.org/courses/ap-calculus-ab"),
        make_entry("course", "MIT OCW: 18.01 Single Variable Calculus",
                   "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/"),
    ],
    "math:gCalcAB-INT": [
        make_entry("course", "AP Calc AB CED — Integration & Accumulation",
                   "https://apcentral.collegeboard.org/courses/ap-calculus-ab"),
        make_entry("course", "MIT OCW: 18.01 Single Variable Calculus",
                   "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/"),
        make_entry("text", "MIT — Strang Calculus textbook",
                   "https://ocw.mit.edu/courses/res-18-001-calculus-online-textbook-spring-2005/pages/textbook/"),
    ],

    # ===== AP Calculus BC =====
    "math:gCalcBC-AB": [
        make_entry("course", "★Top  AP Calculus BC — Course & Exam Description",
                   "https://apcentral.collegeboard.org/courses/ap-calculus-bc",
                   "Official AP CED PDF; superset of AB + parametric, polar, vector, series"),
        make_entry("course", "MIT OCW: 18.01 Single Variable Calculus",
                   "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/"),
    ],
    "math:gCalcBC-PPV": [
        make_entry("course", "AP Calc BC CED — Parametric, Polar, Vector",
                   "https://apcentral.collegeboard.org/courses/ap-calculus-bc"),
        make_entry("course", "MIT OCW: 18.02 Multivariable Calculus (vector fields)",
                   "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/"),
    ],
    "math:gCalcBC-SER": [
        make_entry("course", "AP Calc BC CED — Sequences & Series",
                   "https://apcentral.collegeboard.org/courses/ap-calculus-bc"),
        make_entry("course", "MIT OCW: 18.01 Single Variable Calculus — Series",
                   "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/"),
        make_entry("text", "Paul's Online Math Notes — Series & Sequences",
                   "https://tutorial.math.lamar.edu/Classes/CalcII/CalcII.aspx"),
    ],

    # ===== AP Statistics =====
    "math:gStats-1D": [
        make_entry("course", "★Top  AP Statistics — Course & Exam Description",
                   "https://apcentral.collegeboard.org/courses/ap-statistics",
                   "Official AP CED PDF; 9 units + AP Stats Investigative Tasks"),
        make_entry("course", "OpenIntro: Advanced HS Statistics (AP Stats-aligned)",
                   "https://www.openintro.org/book/ahss/",
                   "Free textbook explicitly written to AP Stats curriculum"),
        make_entry("course", "MIT OCW: Introduction to Probability and Statistics",
                   "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/"),
    ],
    "math:gStats-2D": [
        make_entry("course", "AP Statistics CED — Exploring Two-Variable Data",
                   "https://apcentral.collegeboard.org/courses/ap-statistics"),
        make_entry("course", "OpenIntro: Advanced HS Stats (Ch 8: regression)",
                   "https://www.openintro.org/book/ahss/"),
    ],
    "math:gStats-SAMP": [
        make_entry("course", "AP Statistics CED — Sampling & Experimentation",
                   "https://apcentral.collegeboard.org/courses/ap-statistics"),
        make_entry("course", "OpenIntro: Advanced HS Stats — Ch 1, 2",
                   "https://www.openintro.org/book/ahss/"),
    ],
    "math:gStats-PROB": [
        make_entry("course", "AP Statistics CED — Probability & Distributions",
                   "https://apcentral.collegeboard.org/courses/ap-statistics"),
        make_entry("course", "OpenIntro: Advanced HS Stats — Ch 3-4",
                   "https://www.openintro.org/book/ahss/"),
    ],
    "math:gStats-INF": [
        make_entry("course", "AP Statistics CED — Inference units",
                   "https://apcentral.collegeboard.org/courses/ap-statistics"),
        make_entry("course", "OpenIntro: Advanced HS Stats — Ch 5-9 (inference)",
                   "https://www.openintro.org/book/ahss/"),
        make_entry("course", "MIT OCW: 18.05 Probability & Statistics — inference",
                   "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/"),
    ],
}


def inject_into_array(src: str, cellId: str, new_entries: list[str]) -> tuple[str, bool]:
    """Find the array literal for `cellId` and append new_entries before its
    closing `]`. We use a non-greedy match between `"cellId": [` and the
    next `\n  ]` (two-space indent).
    """
    pattern = re.compile(
        r'(\"' + re.escape(cellId) + r'\":\s*\[)(.*?)(\n  \])',
        re.DOTALL,
    )
    def repl(m):
        head, body, tail = m.group(1), m.group(2), m.group(3)
        # Trim trailing whitespace on body, ensure trailing comma
        body = body.rstrip()
        if not body.endswith(","):
            body = body + ","
        # Build new body with new entries appended
        joiner = ",\n"
        addition = "\n" + joiner.join(new_entries)
        return head + body + addition + tail

    out, n = pattern.subn(repl, src, count=1)
    return out, bool(n)


def main():
    src = RESOURCES.read_text(encoding="utf-8")
    bak = RESOURCES.with_suffix(RESOURCES.suffix + ".math-enrich.bak")
    if not bak.exists():
        bak.write_text(src, encoding="utf-8")

    n_ok = 0
    n_fail = 0
    for cellId, entries in MATH_ADDS.items():
        src, ok = inject_into_array(src, cellId, entries)
        if ok:
            n_ok += 1
        else:
            n_fail += 1
            print(f"  FAIL: could not match {cellId}")

    tmp = RESOURCES.with_suffix(RESOURCES.suffix + ".tmp")
    tmp.write_text(src, encoding="utf-8")
    import os
    os.replace(tmp, RESOURCES)
    print(f"Math enrichment complete: {n_ok} cellIds enriched, {n_fail} failed.")


if __name__ == "__main__":
    main()
