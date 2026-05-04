"""One-shot rewrite: remove Notes column from math.html and ela.html grade tables;
add Exam column (linking to exams/math-<grade>.html) to math.html for K-Alg2.

Run from repo root:
    python _scripts/rewrite_columns.py
"""
from __future__ import annotations
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# Map of math section id -> list of (exam-file-stem, cta-label, sub-label).
# Each grade hosts BOTH a Form A (applied / problem-solving) and a Form B
# (calculation-focused, standards-walkthrough). Algebra 2 hosts four exams
# total: regular A+B and honors A+B.
EXAM_MAP: dict[str, list[tuple[str, str, str]]] = {
    "g-k":     [
        ("math-k",                    "Form A · Applied",        "Kindergarten"),
        ("math-k-form-b",             "Form B · Standards Drill","Kindergarten"),
    ],
    "g-1":     [
        ("math-1",                    "Form A · Applied",        "Grade 1"),
        ("math-1-form-b",             "Form B · Standards Drill","Grade 1"),
    ],
    "g-2":     [
        ("math-2",                    "Form A · Applied",        "Grade 2"),
        ("math-2-form-b",             "Form B · Standards Drill","Grade 2"),
    ],
    "g-3":     [
        ("math-3",                    "Form A · Applied",        "Grade 3"),
        ("math-3-form-b",             "Form B · Standards Drill","Grade 3"),
    ],
    "g-4":     [
        ("math-4",                    "Form A · Applied",        "Grade 4"),
        ("math-4-form-b",             "Form B · Standards Drill","Grade 4"),
    ],
    "g-5":     [
        ("math-5",                    "Form A · Applied",        "Grade 5"),
        ("math-5-form-b",             "Form B · Standards Drill","Grade 5"),
    ],
    "g-6":     [
        ("math-6",                    "Form A · Applied",        "Grade 6"),
        ("math-6-form-b",             "Form B · Standards Drill","Grade 6"),
    ],
    "g-7":     [
        ("math-7",                    "Form A · Applied",        "Grade 7"),
        ("math-7-form-b",             "Form B · Standards Drill","Grade 7"),
    ],
    "g-8":     [
        ("math-8",                    "Form A · Applied",        "Grade 8"),
        ("math-8-form-b",             "Form B · Standards Drill","Grade 8"),
    ],
    "g-alg1":  [
        ("math-algebra-1",            "Form A · Applied",        "Algebra 1"),
        ("math-algebra-1-form-b",     "Form B · Standards Drill","Algebra 1"),
    ],
    "g-geom":  [
        ("math-geometry",             "Form A · Applied",        "Geometry"),
        ("math-geometry-form-b",      "Form B · Standards Drill","Geometry"),
    ],
    "g-alg2":  [
        ("math-algebra-2",            "Form A · Applied",        "Algebra 2"),
        ("math-algebra-2-form-b",     "Form B · Standards Drill","Algebra 2"),
        ("math-algebra-2-honors",     "Form A · Applied",        "Algebra 2 Honors"),
        ("math-algebra-2-honors-form-b","Form B · Standards Drill","Algebra 2 Honors"),
    ],
}

NOTES_TD_RE = re.compile(
    r'\s*<td[^>]*data-label="Notes"[^>]*>.*?</td>\n?',
    re.DOTALL,
)

# Match the entire <section id="g-...">...</section> for grade tables.
SECTION_RE = re.compile(
    r'(<section id="(g-[a-z0-9]+)">)(.*?)(</section>)',
    re.DOTALL,
)


def strip_notes_th(thead_html: str) -> str:
    """Remove the <th>Notes</th> (with optional width attr) from a <thead> block."""
    # Handle the K table style: <th style="width:9%">Notes</th>
    thead_html = re.sub(
        r'<th[^>]*>\s*Notes\s*</th>',
        '',
        thead_html,
    )
    return thead_html


def strip_notes_tds(html: str) -> str:
    return NOTES_TD_RE.sub('', html)


def add_exam_th(thead_html: str, has_width_attrs: bool) -> str:
    """Insert <th>Exam</th> as the new last header before </tr> in the first <tr> of thead."""
    th_html = '<th style="width:11%">Exam</th>' if has_width_attrs else '<th>Exam</th>'
    return re.sub(r'</tr>', th_html + '</tr>', thead_html, count=1)


def count_tbody_rows(tbody_html: str) -> int:
    return len(re.findall(r'<tr\b', tbody_html))


def add_exam_td(tbody_html: str, exams: list[tuple[str, str, str]]) -> str:
    """Add a single rowspan'd cell to the first <tr> of <tbody>, before </tr>.
    The cell contains one link per exam: (stem, cta-label, sub-label)."""
    n = count_tbody_rows(tbody_html)
    if n == 0 or not exams:
        return tbody_html
    rowspan_attr = f' rowspan="{n}"' if n > 1 else ''
    links = "".join(
        f'<a class="exam-link" href="exams/{stem}.html">'
        f'<span class="exam-cta">{cta}</span>'
        f'<span class="exam-sub">{sub}</span></a>'
        for stem, cta, sub in exams
    )
    cell = (
        f'\n        <td data-label="Exam"{rowspan_attr} class="exam-cell">'
        f'{links}'
        f'</td>'
    )
    return tbody_html.replace('</tr>', cell + '\n      </tr>', 1)


def rewrite_math_section(section_id: str, body: str) -> str:
    """Rewrite the inside of one <section id="g-..."> block."""
    # Split into thead and tbody for surgical edits.
    thead_match = re.search(r'(<thead>.*?</thead>)', body, re.DOTALL)
    tbody_match = re.search(r'(<tbody>.*?</tbody>)', body, re.DOTALL)
    if not (thead_match and tbody_match):
        return body
    thead = thead_match.group(1)
    tbody = tbody_match.group(1)

    has_widths = 'width:' in thead

    # Always strip Notes.
    thead_new = strip_notes_th(thead)
    tbody_new = strip_notes_tds(tbody)

    # Add Exam column for K-Alg2 grade tables.
    if section_id in EXAM_MAP:
        thead_new = add_exam_th(thead_new, has_widths)
        tbody_new = add_exam_td(tbody_new, EXAM_MAP[section_id])

    body = body.replace(thead, thead_new, 1)
    body = body.replace(tbody, tbody_new, 1)
    return body


def process_math(path: Path):
    html = path.read_text(encoding='utf-8')

    def repl(m: re.Match) -> str:
        opening, sec_id, inner, closing = m.group(1), m.group(2), m.group(3), m.group(4)
        new_inner = rewrite_math_section(sec_id, inner)
        return opening + new_inner + closing

    new_html = SECTION_RE.sub(repl, html)
    path.write_text(new_html, encoding='utf-8')
    print(f"[math] wrote {path}  ({len(new_html)} bytes)")


def process_ela(path: Path):
    """Same Notes-removal, no Exam column."""
    html = path.read_text(encoding='utf-8')

    def repl(m: re.Match) -> str:
        opening, sec_id, inner, closing = m.group(1), m.group(2), m.group(3), m.group(4)
        # ELA grade IDs: g-k, g-1..g-8, g-910, g-1112 etc. Apply to all.
        thead_match = re.search(r'(<thead>.*?</thead>)', inner, re.DOTALL)
        tbody_match = re.search(r'(<tbody>.*?</tbody>)', inner, re.DOTALL)
        if not (thead_match and tbody_match):
            return opening + inner + closing
        thead = thead_match.group(1)
        tbody = tbody_match.group(1)
        new_inner = inner.replace(thead, strip_notes_th(thead), 1)
        new_inner = new_inner.replace(tbody, strip_notes_tds(tbody), 1)
        return opening + new_inner + closing

    new_html = SECTION_RE.sub(repl, html)
    path.write_text(new_html, encoding='utf-8')
    print(f"[ela]  wrote {path}  ({len(new_html)} bytes)")


if __name__ == '__main__':
    process_math(ROOT / 'math.html')
    process_ela(ROOT / 'ela.html')
