"""Splice the new ELA resources block into resources.js.

Replaces the old ELA cellId region (from the "// ELA · KINDERGARTEN"
section header to the closing `]` of "ela:g1112-L") with the freshly
authored block in _scripts/new_ela_resources.js.
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RESOURCES = ROOT / "resources.js"
NEW_BLOCK = ROOT / "_scripts" / "new_ela_resources.js"

START_MARKER = "  // ============================================================\n  // ELA · KINDERGARTEN\n"
# We want to find the END of the ela:g1112-L array. We look for the
# closing `]` on a line by itself, immediately followed by a blank line
# and then `};` (end of RESOURCES object).
END_MARKER_LINE = "  ]\n\n};\n"

src = RESOURCES.read_text(encoding="utf-8")

start_idx = src.find(START_MARKER)
if start_idx == -1:
    raise SystemExit("could not find ELA section start marker")

end_idx = src.find(END_MARKER_LINE, start_idx)
if end_idx == -1:
    raise SystemExit("could not find ELA section end marker")

# end_idx points at `  ]\n\n};\n`. We keep the `\n};\n` tail so we replace
# from start_idx up to end_idx + len("  ]\n").
end_keep = end_idx + len("  ]\n")

new_block = NEW_BLOCK.read_text(encoding="utf-8").rstrip("\n") + "\n"

# Reassemble:
#   prefix  + new ELA block  + tail (starts with `\n};\n`)
prefix = src[:start_idx]
tail = src[end_keep:]

out = prefix + new_block + tail

# Write to a staging file first, then atomic replace.
staging = RESOURCES.with_suffix(".js.tmp")
staging.write_text(out, encoding="utf-8")
import os
os.replace(staging, RESOURCES)

print("OK — resources.js updated. New file size:", RESOURCES.stat().st_size)
