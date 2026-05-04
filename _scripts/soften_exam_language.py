"""Soften formal language in elementary math exams to grade-appropriate
student-facing wording. Each grade gets a different replacement table:
younger grades use the friendliest substitutions; older grades retain
some technical math vocabulary that is grade-appropriate.

Run:  python _scripts/soften_exam_language.py
"""
from __future__ import annotations
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1] / "exams"

# Replacements common to ALL elementary grades (K-5):
# (these are unambiguous global substitutions)
COMMON_K5 = [
    # "Compute X" forms —> "Find X" / "Solve X" (capital + lowercase)
    (r"\bCompute each fact\b", "Find each answer"),
    (r"\bCompute each\b", "Find each"),
    (r"\bCompute and answer\b", "Find the total"),
    (r"\bCompute using the standard algorithm\b",
     "Use the standard way (the algorithm) to find each answer"),
    (r"\bCompute \(", "Find ("),
    # Lowercase "compute" used inside sentences:
    (r"\bto compute\b", "to find"),
    (r"\bcompute the same total\b", "find the same total"),
    (r"\bcompute the exact product\b", "find the exact product"),
    (r"\bcompute exactly to check\b", "find the exact answer to check"),
    (r"\bcompute exactly\b", "find the exact answer"),
    (r"\bhow you computed each\b", "how you found each"),
    (r"\bcompute each fact\b", "find each answer"),
    (r"\bmust compute each fact\b", "must find each answer"),
    (r"\bcount squares or compute\b", "count squares or find with the formula"),
    # Compute as imperative inside problem text:
    (r"\(ii\) Compute \\\(", r"(ii) Find \\("),
    (r"\(iii\) Compute \\\(", r"(iii) Find \\("),
    (r"\bCompute perimeter and area\b", "Find the perimeter and area"),
    (r"\bCompute and convert\b", "Find the total and convert"),
    # "(recall)" parenthetical drop / soften
    (r"\(recall\)", "(use what you know)"),
    (r"\(recall, no fingers\)", "(use what you know — no fingers)"),
    (r"\(recall, no skip-counting on paper\)", "(use what you know — no skip-counting on paper)"),
    # "Justify" -> "Explain why"
    (r"\bJustify each in one sentence\b", "Explain each in one sentence"),
    (r"\bJustify in one sentence\b", "Explain in one sentence"),
    (r"\bJustify by\b", "Explain by"),
    (r"\bJustify with\b", "Explain with"),
    (r"\bJustify each\b", "Explain each"),
    (r"\bJustify\b", "Explain"),
    # "Determine whether" -> "Tell whether" / "Decide whether"
    (r"\bDetermine whether each\b", "Tell whether each"),
    (r"\bDetermine whether\b", "Decide whether"),
    (r"\bDetermine\b", "Find"),
    # "Express" -> "Write" (in math context)
    (r"\bExpress as\b", "Write as"),
    (r"\bExpress in simplest form\b", "Write in simplest form"),
    (r"\bExpress the difference in centimeters\b", "Write the difference in centimeters"),
    (r"\bExpress length using\b", "Measure length using"),
    (r"\bExpress fractions in simplest form\b", "Write fractions in simplest form"),
    (r"\bExpress the answer\b", "Write the answer"),
    (r"\bExpress\b", "Write"),
    # Lowercase "express" inside sentences:
    (r"\bexpress in simplest form\b", "write in simplest form"),
    (r"\bexpress the answer in simplest form\b", "write the answer in simplest form"),
    (r"\bexpress as a mixed number\b", "write as a mixed number"),
    # Lowercase "justify" / "determine":
    (r"\bjustify in one (sentence|phrase)\b", r"explain in one \1"),
    (r"\bjustify each\b", "explain each"),
    (r"\bjustify by\b", "explain by"),
    (r"\bjustify with\b", "explain with"),
    (r"\bjustify\b", "explain"),
    (r"\bdetermine whether\b", "decide whether"),
    (r"\bdetermine the\b", "find the"),
    # Lowercase "identify" -> "name" / "list" depending; default "name"
    (r"\bIdentify the first six multiples\b", "List the first six multiples"),
    # Lowercase "verify" / "evaluate":
    (r"\bverify\b", "check"),
    (r"\bevaluate\b", "find the value of"),
    # "Recall" used as a directive -> drop / soften
    (r"recall, no skip-counting on paper", "use what you know — no skip-counting on paper"),
    (r"no fingers — recall or use known facts",
     "no fingers — use what you know"),
    (r"no fingers; recall from memory or use a known fact",
     "no fingers; use what you know"),
    (r"\(recall, no skip-counting on paper\)", "(use what you know — no skip-counting on paper)"),
    # "Verify" -> "Check"
    (r"\bVerify\b", "Check"),
    (r"\bverifies each\b", "checks each"),
    # "Evaluate" -> "Find the value of" / "Solve"
    (r"\bEvaluate using the order of operations\b",
     "Find the value using the order of operations"),
    (r"\bEvaluate the expression\b", "Find the value of"),
    (r"\bEvaluate\b", "Solve"),
    # "fluent / fluency" -> "quick"
    (r"\bfluent addition and subtraction\b", "quick addition and subtraction"),
    (r"\bfluent\b", "quick"),
    (r"\bFluency within (\d+)\.", r"Quick math facts to \1."),
    (r"\bfluency within (\d+)\b", r"quick math facts to \1"),
]

# Additional substitutions ONLY for K-2 (younger grades — be friendlier)
K2_EXTRA = [
    # "Identify ... shapes" -> "Name ... shapes"
    (r"\bIdentify (each|the) shape\b", r"Name \1 shape"),
    (r"\bIdentify (each|the)\b", r"Name \1"),
    # "Classify" -> "Sort" at K-2
    (r"\bClassify (each|the)\b", r"Sort \1"),
    # "Decompose" -> "break apart" (K-2 standards term but kid-friendlier)
    (r"\bDecompose (a|the|each|two)\b", r"Break apart \1"),
    # Sketch ok; "Construct" -> "Make"/"Draw"
    (r"\bConstruct\b", "Draw"),
]

# Additional substitutions ONLY for grades 3-5 (some technical vocab kept)
GR35_EXTRA = [
    # "Identify" can stay at Gr 3+ but soften when describing
    (r"\bIdentify each as\b", "Tell whether each is"),
    # "Categorize" -> "Sort"
    (r"\bCategorize\b", "Sort"),
]


def apply(path: Path, rules):
    src = path.read_text(encoding="utf-8")
    n_total = 0
    new = src
    for pat, sub in rules:
        new, n = re.subn(pat, sub, new)
        n_total += n
    if new != src:
        path.write_text(new, encoding="utf-8")
        print(f"  {path.name}: {n_total} substitutions")
    else:
        print(f"  {path.name}: no changes")


print("Softening elementary exam language…")
print("\nK-2 (with extra friendliness):")
for fname in [
    "math-k.html", "math-k-form-b.html",
    "math-1.html", "math-1-form-b.html",
    "math-2.html", "math-2-form-b.html",
]:
    p = ROOT / fname
    if p.exists():
        apply(p, COMMON_K5 + K2_EXTRA)

print("\nGr 3-5 (technical math vocab kept where grade-appropriate):")
for fname in [
    "math-3.html", "math-3-form-b.html",
    "math-4.html", "math-4-form-b.html",
    "math-5.html", "math-5-form-b.html",
]:
    p = ROOT / fname
    if p.exists():
        apply(p, COMMON_K5 + GR35_EXTRA)

print("\nDone.")
