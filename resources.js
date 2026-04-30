// Comprehensive free-resource library, keyed by cellId.
// Each cell has 6–10 curated free resources organized by type:
//   "khan"         — Khan Academy course or unit
//   "video"        — video lessons (Math Antics, Crash Course, etc.)
//   "practice"     — problem sets and tasks (Open Middle, NRICH, IM Tasks)
//   "tool"         — interactive manipulatives or tools (Desmos, GeoGebra, PhET)
//   "text"         — passages and texts (ReadWorks, CommonLit, OpenStax)
//   "foundational" — K-3 phonics & reading scaffolds (FCRR, UFLI, Reading Rockets)
//   "course"       — full curriculum / textbook (CK-12, OpenStax, Mathigon)
//
// Resources here are ALL free (free tier, free for educators, or fully open).

window.RESOURCES = {

  // ============================================================
  // GRADE-LEVEL DEFAULTS — used as a baseline if a cell doesn't list resources.
  // ============================================================
  __khanMath: {
    "K":    { name: "Khan Academy: Early Math (K)",     url: "https://www.khanacademy.org/math/early-math" },
    "1":    { name: "Khan Academy: 1st Grade Math",      url: "https://www.khanacademy.org/math/cc-1st-grade-math" },
    "2":    { name: "Khan Academy: 2nd Grade Math",      url: "https://www.khanacademy.org/math/cc-2nd-grade-math" },
    "3":    { name: "Khan Academy: 3rd Grade Math",      url: "https://www.khanacademy.org/math/cc-third-grade-math" },
    "4":    { name: "Khan Academy: 4th Grade Math",      url: "https://www.khanacademy.org/math/cc-fourth-grade-math" },
    "5":    { name: "Khan Academy: 5th Grade Math",      url: "https://www.khanacademy.org/math/cc-fifth-grade-math" },
    "6":    { name: "Khan Academy: 6th Grade Math",      url: "https://www.khanacademy.org/math/cc-sixth-grade-math" },
    "7":    { name: "Khan Academy: 7th Grade Math",      url: "https://www.khanacademy.org/math/cc-seventh-grade-math" },
    "8":    { name: "Khan Academy: 8th Grade Math",      url: "https://www.khanacademy.org/math/cc-eighth-grade-math" },
    "Alg1": { name: "Khan Academy: Algebra 1",           url: "https://www.khanacademy.org/math/algebra" },
    "Geom": { name: "Khan Academy: Geometry",            url: "https://www.khanacademy.org/math/geometry" },
    "Alg2": { name: "Khan Academy: Algebra 2",           url: "https://www.khanacademy.org/math/algebra2" }
  },
  __khanEla: {
    "K":    null,
    "1":    null,
    "2":    { name: "Khan Academy: 2nd Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-2nd-reading-vocab" },
    "3":    { name: "Khan Academy: 3rd Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-3rd-reading-vocab" },
    "4":    { name: "Khan Academy: 4th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-4th-reading-vocab" },
    "5":    { name: "Khan Academy: 5th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-5th-reading-vocab" },
    "6":    { name: "Khan Academy: 6th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-6th-reading-vocab" },
    "7":    { name: "Khan Academy: 7th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-7th-reading-vocab" },
    "8":    { name: "Khan Academy: 8th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-8th-reading-vocab" },
    "910":  { name: "Khan Academy: 9th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-9th-reading-vocab" },
    "1112": null
  },

  // ============================================================
  // MATH · KINDERGARTEN
  // ============================================================
  "math:gK-CC": [
    { type: "khan", name: "Khan Academy: Counting", url: "https://www.khanacademy.org/math/early-math/cc-early-math-counting-topic" },
    { type: "foundational", name: "Khan Academy Kids (free app)", url: "https://learn.khanacademy.org/khan-academy-kids/", note: "Counting games for ages 2-7" },
    { type: "practice", name: "Greg Tang Math: Kakooma & Counting Games", url: "https://gregtangmath.com/games", note: "Free puzzles for number sense" },
    { type: "tool", name: "PBS Kids: Curious George Counting", url: "https://pbskids.org/curiousgeorge/games/", note: "Free counting games" },
    { type: "video", name: "Numberblocks (BBC) on YouTube", url: "https://www.youtube.com/@Numberblocks", note: "Visual counting and cardinality" },
    { type: "text", name: "Bedtime Math (free daily problems)", url: "https://bedtimemath.org/", note: "Counting problems in real-world contexts" },
    { type: "tool", name: "Math Learning Center: Number Pieces (free)", url: "https://apps.mathlearningcenter.org/number-pieces/", note: "Virtual base-ten blocks" }
  ],
  "math:gK-OA": [
    { type: "khan", name: "Khan Academy: Addition & Subtraction Intro", url: "https://www.khanacademy.org/math/early-math/cc-early-math-add-sub-basics" },
    { type: "foundational", name: "Khan Academy Kids", url: "https://learn.khanacademy.org/khan-academy-kids/" },
    { type: "video", name: "Numberblocks: Addition Within 5", url: "https://www.youtube.com/@Numberblocks" },
    { type: "practice", name: "Greg Tang Math: NumTanga", url: "https://gregtangmath.com/numtanga", note: "Match equivalent representations" },
    { type: "tool", name: "Math Learning Center: Number Frames", url: "https://apps.mathlearningcenter.org/number-frames/", note: "Free 5- and 10-frames for composing numbers" },
    { type: "tool", name: "Toy Theater: Counting Bears", url: "https://toytheater.com/category/teacher-tools/virtual-manipulatives/", note: "Free virtual manipulatives" },
    { type: "text", name: "Bedtime Math", url: "https://bedtimemath.org/" }
  ],
  "math:gK-NBT": [
    { type: "khan", name: "Khan Academy: Place Value (Tens & Ones)", url: "https://www.khanacademy.org/math/early-math/cc-early-math-place-value-topic" },
    { type: "video", name: "Math Antics: Place Value", url: "https://www.mathantics.com/section/lesson-video/place-value" },
    { type: "tool", name: "MLC: Number Pieces (base-ten blocks)", url: "https://apps.mathlearningcenter.org/number-pieces/" },
    { type: "tool", name: "Toy Theater: Base-10 Blocks", url: "https://toytheater.com/category/teacher-tools/virtual-manipulatives/" },
    { type: "video", name: "Numberblocks: Tens & Ones", url: "https://www.youtube.com/@Numberblocks" },
    { type: "practice", name: "Greg Tang Math Games", url: "https://gregtangmath.com/games" }
  ],
  "math:gK-MD": [
    { type: "khan", name: "Khan Academy: Measurement & Data (K)", url: "https://www.khanacademy.org/math/early-math/cc-early-math-measure-data-topic" },
    { type: "tool", name: "Toy Theater: Sorting Mat", url: "https://toytheater.com/category/teacher-tools/virtual-manipulatives/" },
    { type: "practice", name: "ABCya: Sorting Activities (free games)", url: "https://www.abcya.com/grades/k", note: "Free K games for sorting & comparing" },
    { type: "video", name: "Sesame Street: Measure That!", url: "https://www.youtube.com/@SesameStreet", note: "Free YouTube clips on measurement" },
    { type: "foundational", name: "Khan Academy Kids", url: "https://learn.khanacademy.org/khan-academy-kids/" }
  ],
  "math:gK-G": [
    { type: "khan", name: "Khan Academy: Geometry (K)", url: "https://www.khanacademy.org/math/early-math/cc-early-math-geometry-topic" },
    { type: "tool", name: "MLC: Pattern Shapes", url: "https://apps.mathlearningcenter.org/pattern-shapes/", note: "Free virtual pattern blocks" },
    { type: "tool", name: "Toy Theater: Pattern Blocks", url: "https://toytheater.com/pattern-blocks/" },
    { type: "video", name: "Numberblocks: Shapes", url: "https://www.youtube.com/@Numberblocks" },
    { type: "practice", name: "ABCya: Shape Patterns", url: "https://www.abcya.com/grades/k" }
  ],

  // ============================================================
  // MATH · GRADE 1
  // ============================================================
  "math:g1-OA": [
    { type: "khan", name: "Khan Academy: 1st Grade Math — Add & Subtract Within 20", url: "https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-add-sub-within-20" },
    { type: "video", name: "Math Antics: Adding & Subtracting", url: "https://www.mathantics.com/" },
    { type: "practice", name: "Open Middle: Grade 1 Tasks", url: "https://www.openmiddle.com/category/grade-1/" },
    { type: "practice", name: "IM Tasks: Grade 1 OA", url: "https://tasks.illustrativemathematics.org/content-standards/1/OA" },
    { type: "tool", name: "MLC: Number Frames", url: "https://apps.mathlearningcenter.org/number-frames/" },
    { type: "video", name: "Numberblocks (full series)", url: "https://www.youtube.com/@Numberblocks" },
    { type: "practice", name: "Greg Tang Math: Word Problem Generator", url: "https://gregtangmath.com/wordproblems" }
  ],
  "math:g1-NBT": [
    { type: "khan", name: "Khan Academy: Place Value (1st)", url: "https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-place-value" },
    { type: "video", name: "Math Antics: Place Value", url: "https://www.mathantics.com/section/lesson-video/place-value" },
    { type: "tool", name: "MLC: Number Pieces (base-ten)", url: "https://apps.mathlearningcenter.org/number-pieces/" },
    { type: "practice", name: "IM Tasks: Grade 1 NBT", url: "https://tasks.illustrativemathematics.org/content-standards/1/NBT" },
    { type: "practice", name: "Open Middle: Grade 1 NBT", url: "https://www.openmiddle.com/category/grade-1/" }
  ],
  "math:g1-MD": [
    { type: "khan", name: "Khan Academy: Measurement & Data (1st)", url: "https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-measurement-topic" },
    { type: "video", name: "Math Antics: Telling Time", url: "https://www.mathantics.com/section/lesson-video/telling-time" },
    { type: "practice", name: "IM Tasks: Grade 1 MD", url: "https://tasks.illustrativemathematics.org/content-standards/1/MD" },
    { type: "tool", name: "Toy Theater: Clock", url: "https://toytheater.com/clock/" },
    { type: "practice", name: "ABCya: Telling Time", url: "https://www.abcya.com/grades/1" }
  ],
  "math:g1-G": [
    { type: "khan", name: "Khan Academy: Geometry (1st)", url: "https://www.khanacademy.org/math/cc-1st-grade-math/cc-1st-geometry-topic" },
    { type: "tool", name: "MLC: Pattern Shapes", url: "https://apps.mathlearningcenter.org/pattern-shapes/" },
    { type: "tool", name: "MLC: Geoboard", url: "https://apps.mathlearningcenter.org/geoboard/" },
    { type: "practice", name: "IM Tasks: Grade 1 G", url: "https://tasks.illustrativemathematics.org/content-standards/1/G" }
  ],

  // ============================================================
  // MATH · GRADE 2
  // ============================================================
  "math:g2-OA": [
    { type: "khan", name: "Khan Academy: 2nd Grade — Add & Subtract Within 100", url: "https://www.khanacademy.org/math/cc-2nd-grade-math/x3184e0ec:add-and-subtract-within-100" },
    { type: "video", name: "Math Antics: Multi-Digit Addition", url: "https://www.mathantics.com/" },
    { type: "practice", name: "Open Middle: Grade 2", url: "https://www.openmiddle.com/category/grade-2/" },
    { type: "practice", name: "IM Tasks: Grade 2 OA", url: "https://tasks.illustrativemathematics.org/content-standards/2/OA" },
    { type: "tool", name: "MLC: Number Pieces", url: "https://apps.mathlearningcenter.org/number-pieces/" },
    { type: "practice", name: "Greg Tang Math: Word Problems", url: "https://gregtangmath.com/wordproblems" }
  ],
  "math:g2-NBT": [
    { type: "khan", name: "Khan Academy: Place Value (2nd)", url: "https://www.khanacademy.org/math/cc-2nd-grade-math/x3184e0ec:place-value" },
    { type: "video", name: "Math Antics: Place Value", url: "https://www.mathantics.com/section/lesson-video/place-value" },
    { type: "tool", name: "MLC: Number Pieces (base-ten blocks)", url: "https://apps.mathlearningcenter.org/number-pieces/" },
    { type: "practice", name: "IM Tasks: Grade 2 NBT", url: "https://tasks.illustrativemathematics.org/content-standards/2/NBT" },
    { type: "practice", name: "Open Middle: Grade 2", url: "https://www.openmiddle.com/category/grade-2/" }
  ],
  "math:g2-MD": [
    { type: "khan", name: "Khan Academy: Measurement & Data (2nd)", url: "https://www.khanacademy.org/math/cc-2nd-grade-math/cc-2nd-measurement-data-topic" },
    { type: "video", name: "Math Antics: Telling Time", url: "https://www.mathantics.com/section/lesson-video/telling-time" },
    { type: "tool", name: "Toy Theater: Money", url: "https://toytheater.com/money/", note: "Free virtual coins and bills" },
    { type: "tool", name: "Toy Theater: Clock", url: "https://toytheater.com/clock/" },
    { type: "practice", name: "IM Tasks: Grade 2 MD", url: "https://tasks.illustrativemathematics.org/content-standards/2/MD" }
  ],
  "math:g2-G": [
    { type: "khan", name: "Khan Academy: Geometry (2nd)", url: "https://www.khanacademy.org/math/cc-2nd-grade-math/cc-2nd-geometry-topic" },
    { type: "tool", name: "MLC: Pattern Shapes", url: "https://apps.mathlearningcenter.org/pattern-shapes/" },
    { type: "tool", name: "MLC: Geoboard", url: "https://apps.mathlearningcenter.org/geoboard/" },
    { type: "practice", name: "IM Tasks: Grade 2 G", url: "https://tasks.illustrativemathematics.org/content-standards/2/G" }
  ],

  // ============================================================
  // MATH · GRADE 3
  // ============================================================
  "math:g3-OA": [
    { type: "khan", name: "Khan Academy: Multiplication & Division Intro", url: "https://www.khanacademy.org/math/cc-third-grade-math/intro-to-multiplication" },
    { type: "video", name: "Math Antics: Multi-Digit Multiplication", url: "https://www.mathantics.com/section/lesson-video/multi-digit-multiplication-pt-1" },
    { type: "video", name: "Math Antics: Long Division", url: "https://www.mathantics.com/section/lesson-video/long-division" },
    { type: "practice", name: "Open Middle: Grade 3", url: "https://www.openmiddle.com/category/grade-3/" },
    { type: "practice", name: "IM Tasks: Grade 3 OA", url: "https://tasks.illustrativemathematics.org/content-standards/3/OA" },
    { type: "practice", name: "NRICH: Multiplication & Division", url: "https://nrich.maths.org/8826" },
    { type: "tool", name: "MLC: Number Line", url: "https://apps.mathlearningcenter.org/number-line/" },
    { type: "practice", name: "Greg Tang Math: Multiplication Games", url: "https://gregtangmath.com/games" }
  ],
  "math:g3-NBT": [
    { type: "khan", name: "Khan Academy: Place Value & Rounding", url: "https://www.khanacademy.org/math/cc-third-grade-math" },
    { type: "video", name: "Math Antics: Rounding", url: "https://www.mathantics.com/section/lesson-video/rounding" },
    { type: "video", name: "Math Antics: Multi-Digit Subtraction", url: "https://www.mathantics.com/" },
    { type: "tool", name: "MLC: Number Pieces", url: "https://apps.mathlearningcenter.org/number-pieces/" },
    { type: "practice", name: "IM Tasks: Grade 3 NBT", url: "https://tasks.illustrativemathematics.org/content-standards/3/NBT" }
  ],
  "math:g3-NF": [
    { type: "khan", name: "Khan Academy: Fractions (3rd)", url: "https://www.khanacademy.org/math/cc-third-grade-math/3rd-fractions-topic" },
    { type: "video", name: "Math Antics: Fractions Are Parts", url: "https://www.mathantics.com/section/lesson-video/fractions-are-parts" },
    { type: "video", name: "Math Antics: Fractions on a Number Line", url: "https://www.mathantics.com/" },
    { type: "tool", name: "Visual Fractions", url: "https://www.visualfractions.com/", note: "Free interactive fraction models" },
    { type: "tool", name: "MLC: Fractions", url: "https://apps.mathlearningcenter.org/fractions/" },
    { type: "practice", name: "Open Middle: Fractions Tasks", url: "https://www.openmiddle.com/category/fractions/" },
    { type: "practice", name: "IM Tasks: Grade 3 NF", url: "https://tasks.illustrativemathematics.org/content-standards/3/NF" },
    { type: "practice", name: "NRICH: Fractions", url: "https://nrich.maths.org/fractions" }
  ],
  "math:g3-MD": [
    { type: "khan", name: "Khan Academy: Measurement & Data (3rd)", url: "https://www.khanacademy.org/math/cc-third-grade-math/measurement-3rd" },
    { type: "video", name: "Math Antics: Area", url: "https://www.mathantics.com/section/lesson-video/area" },
    { type: "video", name: "Math Antics: Perimeter", url: "https://www.mathantics.com/section/lesson-video/perimeter" },
    { type: "tool", name: "MLC: Geoboard (area & perimeter)", url: "https://apps.mathlearningcenter.org/geoboard/" },
    { type: "practice", name: "IM Tasks: Grade 3 MD", url: "https://tasks.illustrativemathematics.org/content-standards/3/MD" },
    { type: "practice", name: "Open Middle: Grade 3 Area", url: "https://www.openmiddle.com/category/grade-3/" }
  ],
  "math:g3-G": [
    { type: "khan", name: "Khan Academy: Geometry (3rd)", url: "https://www.khanacademy.org/math/cc-third-grade-math/imp-geometry" },
    { type: "tool", name: "MLC: Pattern Shapes", url: "https://apps.mathlearningcenter.org/pattern-shapes/" },
    { type: "practice", name: "IM Tasks: Grade 3 G", url: "https://tasks.illustrativemathematics.org/content-standards/3/G" },
    { type: "practice", name: "NRICH: Shape & Space", url: "https://nrich.maths.org/shape-and-space" }
  ],

  // ============================================================
  // MATH · GRADE 4
  // ============================================================
  "math:g4-OA": [
    { type: "khan", name: "Khan Academy: 4th Grade Math — Operations", url: "https://www.khanacademy.org/math/cc-fourth-grade-math" },
    { type: "video", name: "Math Antics: Long Division", url: "https://www.mathantics.com/section/lesson-video/long-division" },
    { type: "video", name: "Math Antics: Factors & Multiples", url: "https://www.mathantics.com/" },
    { type: "practice", name: "Open Middle: Grade 4", url: "https://www.openmiddle.com/category/grade-4/" },
    { type: "practice", name: "IM Tasks: Grade 4 OA", url: "https://tasks.illustrativemathematics.org/content-standards/4/OA" },
    { type: "practice", name: "NRICH: Number & Algebra", url: "https://nrich.maths.org/number" },
    { type: "tool", name: "MLC: Number Line", url: "https://apps.mathlearningcenter.org/number-line/" }
  ],
  "math:g4-NBT": [
    { type: "khan", name: "Khan Academy: Place Value (4th)", url: "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-place-value-and-rounding" },
    { type: "video", name: "Math Antics: Multi-Digit Multiplication", url: "https://www.mathantics.com/" },
    { type: "video", name: "Math Antics: Long Division", url: "https://www.mathantics.com/section/lesson-video/long-division" },
    { type: "practice", name: "IM Tasks: Grade 4 NBT", url: "https://tasks.illustrativemathematics.org/content-standards/4/NBT" },
    { type: "practice", name: "Open Middle: Grade 4 NBT", url: "https://www.openmiddle.com/category/grade-4/" },
    { type: "tool", name: "MLC: Number Pieces", url: "https://apps.mathlearningcenter.org/number-pieces/" }
  ],
  "math:g4-NF": [
    { type: "khan", name: "Khan Academy: Fractions (4th)", url: "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-fractions" },
    { type: "video", name: "Math Antics: Equivalent Fractions", url: "https://www.mathantics.com/" },
    { type: "video", name: "Math Antics: Adding & Subtracting Fractions", url: "https://www.mathantics.com/" },
    { type: "tool", name: "Visual Fractions", url: "https://www.visualfractions.com/" },
    { type: "tool", name: "MLC: Fractions", url: "https://apps.mathlearningcenter.org/fractions/" },
    { type: "practice", name: "IM Tasks: Grade 4 NF", url: "https://tasks.illustrativemathematics.org/content-standards/4/NF" },
    { type: "practice", name: "Open Middle: Fractions", url: "https://www.openmiddle.com/category/fractions/" },
    { type: "practice", name: "NRICH: Fractions, Decimals, Percents", url: "https://nrich.maths.org/fractions-decimals-percentages" }
  ],
  "math:g4-MD": [
    { type: "khan", name: "Khan Academy: Measurement & Data (4th)", url: "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-measurement-and-data" },
    { type: "video", name: "Math Antics: Angles", url: "https://www.mathantics.com/section/lesson-video/angle-basics" },
    { type: "tool", name: "MLC: Math Clock", url: "https://apps.mathlearningcenter.org/math-clock/" },
    { type: "practice", name: "IM Tasks: Grade 4 MD", url: "https://tasks.illustrativemathematics.org/content-standards/4/MD" },
    { type: "tool", name: "GeoGebra: Angle Measurement", url: "https://www.geogebra.org/m/QzMaR4yE" }
  ],
  "math:g4-G": [
    { type: "khan", name: "Khan Academy: Geometry (4th)", url: "https://www.khanacademy.org/math/cc-fourth-grade-math/imp-geometry" },
    { type: "tool", name: "MLC: Geoboard", url: "https://apps.mathlearningcenter.org/geoboard/" },
    { type: "tool", name: "GeoGebra: Lines, Angles, Symmetry", url: "https://www.geogebra.org/" },
    { type: "practice", name: "IM Tasks: Grade 4 G", url: "https://tasks.illustrativemathematics.org/content-standards/4/G" }
  ],

  // ============================================================
  // MATH · GRADE 5
  // ============================================================
  "math:g5-OA": [
    { type: "khan", name: "Khan Academy: Order of Operations & Patterns (5th)", url: "https://www.khanacademy.org/math/cc-fifth-grade-math" },
    { type: "video", name: "Math Antics: Order of Operations", url: "https://www.mathantics.com/section/lesson-video/order-of-operations" },
    { type: "practice", name: "Open Middle: Grade 5", url: "https://www.openmiddle.com/category/grade-5/" },
    { type: "practice", name: "IM Tasks: Grade 5 OA", url: "https://tasks.illustrativemathematics.org/content-standards/5/OA" },
    { type: "tool", name: "Desmos: Free Graphing Calculator", url: "https://www.desmos.com/calculator", note: "Plot ordered pairs from rules" }
  ],
  "math:g5-NBT": [
    { type: "khan", name: "Khan Academy: Decimal Place Value (5th)", url: "https://www.khanacademy.org/math/cc-fifth-grade-math/cc-5th-place-value-decimals" },
    { type: "video", name: "Math Antics: Decimal Place Value", url: "https://www.mathantics.com/" },
    { type: "video", name: "Math Antics: Decimal Arithmetic", url: "https://www.mathantics.com/" },
    { type: "practice", name: "IM Tasks: Grade 5 NBT", url: "https://tasks.illustrativemathematics.org/content-standards/5/NBT" },
    { type: "practice", name: "Open Middle: Grade 5", url: "https://www.openmiddle.com/category/grade-5/" }
  ],
  "math:g5-NF": [
    { type: "khan", name: "Khan Academy: Fractions (5th)", url: "https://www.khanacademy.org/math/cc-fifth-grade-math/cc-5th-fractions-topic" },
    { type: "video", name: "Math Antics: Multiplying Fractions", url: "https://www.mathantics.com/" },
    { type: "video", name: "Math Antics: Dividing Fractions", url: "https://www.mathantics.com/" },
    { type: "tool", name: "Visual Fractions", url: "https://www.visualfractions.com/" },
    { type: "practice", name: "IM Tasks: Grade 5 NF", url: "https://tasks.illustrativemathematics.org/content-standards/5/NF" },
    { type: "practice", name: "Open Middle: Fractions", url: "https://www.openmiddle.com/category/fractions/" },
    { type: "practice", name: "NRICH: Fractions, Decimals, Percents", url: "https://nrich.maths.org/fractions-decimals-percentages" }
  ],
  "math:g5-MD": [
    { type: "khan", name: "Khan Academy: Volume & Conversions (5th)", url: "https://www.khanacademy.org/math/cc-fifth-grade-math" },
    { type: "video", name: "Math Antics: Volume", url: "https://www.mathantics.com/section/lesson-video/volume" },
    { type: "tool", name: "MLC: Geoboard", url: "https://apps.mathlearningcenter.org/geoboard/" },
    { type: "practice", name: "IM Tasks: Grade 5 MD", url: "https://tasks.illustrativemathematics.org/content-standards/5/MD" }
  ],
  "math:g5-G": [
    { type: "khan", name: "Khan Academy: Coordinate Plane (5th)", url: "https://www.khanacademy.org/math/cc-fifth-grade-math/cc-5th-coordinate-plane" },
    { type: "tool", name: "Desmos: Coordinate Plane", url: "https://www.desmos.com/calculator" },
    { type: "tool", name: "Math Open Reference: Coordinate Plane", url: "https://www.mathopenref.com/coordpoint.html" },
    { type: "practice", name: "IM Tasks: Grade 5 G", url: "https://tasks.illustrativemathematics.org/content-standards/5/G" }
  ],

  // ============================================================
  // MATH · GRADE 6
  // ============================================================
  "math:g6-RP": [
    { type: "khan", name: "Khan Academy: Ratios & Rates (6th)", url: "https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-ratios-prop-topic" },
    { type: "video", name: "Math Antics: Ratios & Rates", url: "https://www.mathantics.com/" },
    { type: "video", name: "Math Antics: Percentages", url: "https://www.mathantics.com/section/lesson-video/what-are-percentages" },
    { type: "practice", name: "Open Middle: 6th Grade Ratios", url: "https://www.openmiddle.com/category/grade-6/" },
    { type: "practice", name: "IM Tasks: Grade 6 RP", url: "https://tasks.illustrativemathematics.org/content-standards/6/RP" },
    { type: "practice", name: "NRICH: Proportional Reasoning", url: "https://nrich.maths.org/proportion" },
    { type: "tool", name: "Desmos: Ratio Activities", url: "https://teacher.desmos.com/" }
  ],
  "math:g6-NS": [
    { type: "khan", name: "Khan Academy: The Number System (6th)", url: "https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-arithmetic-operations" },
    { type: "video", name: "Math Antics: Negative Numbers", url: "https://www.mathantics.com/section/lesson-video/negative-numbers" },
    { type: "video", name: "Math Antics: Integer Multiplication & Division", url: "https://www.mathantics.com/" },
    { type: "practice", name: "Open Middle: Grade 6", url: "https://www.openmiddle.com/category/grade-6/" },
    { type: "practice", name: "IM Tasks: Grade 6 NS", url: "https://tasks.illustrativemathematics.org/content-standards/6/NS" },
    { type: "tool", name: "Desmos: Coordinate Plane (4 quadrants)", url: "https://www.desmos.com/calculator" }
  ],
  "math:g6-EE": [
    { type: "khan", name: "Khan Academy: Expressions & Equations (6th)", url: "https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-equations-and-inequalities-topic" },
    { type: "video", name: "Math Antics: What Is Algebra?", url: "https://www.mathantics.com/section/lesson-video/what-is-algebra" },
    { type: "video", name: "Math Antics: Solving Basic Equations", url: "https://www.mathantics.com/" },
    { type: "practice", name: "Open Middle: 6th Grade Equations", url: "https://www.openmiddle.com/category/grade-6/" },
    { type: "practice", name: "IM Tasks: Grade 6 EE", url: "https://tasks.illustrativemathematics.org/content-standards/6/EE" },
    { type: "practice", name: "NRICH: Algebra Puzzles", url: "https://nrich.maths.org/algebra" },
    { type: "tool", name: "Desmos: Equation Solving Activities", url: "https://teacher.desmos.com/" }
  ],
  "math:g6-G": [
    { type: "khan", name: "Khan Academy: Geometry (6th)", url: "https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-geometry-topic" },
    { type: "video", name: "Math Antics: Area of Polygons", url: "https://www.mathantics.com/" },
    { type: "video", name: "Math Antics: Volume", url: "https://www.mathantics.com/" },
    { type: "tool", name: "GeoGebra: Polygon Area", url: "https://www.geogebra.org/" },
    { type: "practice", name: "IM Tasks: Grade 6 G", url: "https://tasks.illustrativemathematics.org/content-standards/6/G" },
    { type: "practice", name: "Open Middle: 6th Grade Geometry", url: "https://www.openmiddle.com/category/grade-6/" }
  ],
  "math:g6-SP": [
    { type: "khan", name: "Khan Academy: Statistics & Probability (6th)", url: "https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-data-statistics" },
    { type: "video", name: "Math Antics: Mean, Median, Mode", url: "https://www.mathantics.com/" },
    { type: "tool", name: "Desmos: Data Activities", url: "https://teacher.desmos.com/" },
    { type: "practice", name: "IM Tasks: Grade 6 SP", url: "https://tasks.illustrativemathematics.org/content-standards/6/SP" },
    { type: "practice", name: "NRICH: Statistics", url: "https://nrich.maths.org/statistics" }
  ],

  // ============================================================
  // MATH · GRADE 7
  // ============================================================
  "math:g7-RP": [
    { type: "khan", name: "Khan Academy: Proportional Relationships (7th)", url: "https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-ratio-proportion" },
    { type: "video", name: "Math Antics: Proportions", url: "https://www.mathantics.com/" },
    { type: "video", name: "Math Antics: Percent Word Problems", url: "https://www.mathantics.com/" },
    { type: "practice", name: "Open Middle: 7th Grade", url: "https://www.openmiddle.com/category/grade-7/" },
    { type: "practice", name: "IM Tasks: Grade 7 RP", url: "https://tasks.illustrativemathematics.org/content-standards/7/RP" },
    { type: "practice", name: "NRICH: Proportional Reasoning", url: "https://nrich.maths.org/proportion" },
    { type: "tool", name: "Desmos: Proportional Relationships", url: "https://teacher.desmos.com/" }
  ],
  "math:g7-NS": [
    { type: "khan", name: "Khan Academy: Operations w/ Rationals (7th)", url: "https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-negative-numbers" },
    { type: "video", name: "Math Antics: Adding & Subtracting Integers", url: "https://www.mathantics.com/" },
    { type: "video", name: "Math Antics: Multiplying & Dividing Integers", url: "https://www.mathantics.com/" },
    { type: "practice", name: "IM Tasks: Grade 7 NS", url: "https://tasks.illustrativemathematics.org/content-standards/7/NS" },
    { type: "practice", name: "Open Middle: 7th Grade NS", url: "https://www.openmiddle.com/category/grade-7/" }
  ],
  "math:g7-EE": [
    { type: "khan", name: "Khan Academy: Expressions, Equations & Inequalities (7th)", url: "https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-equations-expressions" },
    { type: "video", name: "Math Antics: Solving Two-Step Equations", url: "https://www.mathantics.com/" },
    { type: "video", name: "Math Antics: Distributive Property", url: "https://www.mathantics.com/" },
    { type: "practice", name: "Open Middle: 7th Grade Equations", url: "https://www.openmiddle.com/category/grade-7/" },
    { type: "practice", name: "IM Tasks: Grade 7 EE", url: "https://tasks.illustrativemathematics.org/content-standards/7/EE" },
    { type: "practice", name: "NRICH: Algebra", url: "https://nrich.maths.org/algebra" },
    { type: "tool", name: "Desmos: Hanger Diagrams", url: "https://teacher.desmos.com/" }
  ],
  "math:g7-G": [
    { type: "khan", name: "Khan Academy: Geometry (7th)", url: "https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-geometry" },
    { type: "video", name: "Math Antics: Circles, Circumference & Area", url: "https://www.mathantics.com/section/lesson-video/circles-circumference-and-area" },
    { type: "video", name: "Math Antics: Volume", url: "https://www.mathantics.com/" },
    { type: "tool", name: "GeoGebra: Scale Drawings", url: "https://www.geogebra.org/" },
    { type: "tool", name: "Desmos: Geometry", url: "https://www.desmos.com/geometry" },
    { type: "practice", name: "IM Tasks: Grade 7 G", url: "https://tasks.illustrativemathematics.org/content-standards/7/G" }
  ],
  "math:g7-SP": [
    { type: "khan", name: "Khan Academy: Probability & Sampling (7th)", url: "https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-probability-statistics" },
    { type: "video", name: "Crash Course Statistics: Probability", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr" },
    { type: "tool", name: "Desmos: Probability Activities", url: "https://teacher.desmos.com/" },
    { type: "practice", name: "IM Tasks: Grade 7 SP", url: "https://tasks.illustrativemathematics.org/content-standards/7/SP" },
    { type: "practice", name: "NRICH: Probability", url: "https://nrich.maths.org/probability" }
  ],

  // ============================================================
  // MATH · GRADE 8
  // ============================================================
  "math:g8-NS": [
    { type: "khan", name: "Khan Academy: Number System (8th)", url: "https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-numbers-operations" },
    { type: "video", name: "Math Antics: Square Roots", url: "https://www.mathantics.com/" },
    { type: "practice", name: "IM Tasks: Grade 8 NS", url: "https://tasks.illustrativemathematics.org/content-standards/8/NS" },
    { type: "practice", name: "Open Middle: 8th Grade", url: "https://www.openmiddle.com/category/grade-8/" }
  ],
  "math:g8-EE": [
    { type: "khan", name: "Khan Academy: Linear Equations & Functions (8th)", url: "https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-solving-equations-with-one-unknown" },
    { type: "video", name: "Math Antics: Exponents", url: "https://www.mathantics.com/section/lesson-video/exponents" },
    { type: "video", name: "Math Antics: Slope", url: "https://www.mathantics.com/" },
    { type: "video", name: "Math Antics: Solving Systems", url: "https://www.mathantics.com/" },
    { type: "practice", name: "Open Middle: 8th Grade Equations", url: "https://www.openmiddle.com/category/grade-8/" },
    { type: "practice", name: "IM Tasks: Grade 8 EE", url: "https://tasks.illustrativemathematics.org/content-standards/8/EE" },
    { type: "tool", name: "Desmos: Polygraph Lines, Marbleslides", url: "https://teacher.desmos.com/", note: "Free, classroom-tested linear-function activities" },
    { type: "tool", name: "Desmos: Free Graphing Calculator", url: "https://www.desmos.com/calculator" }
  ],
  "math:g8-F": [
    { type: "khan", name: "Khan Academy: Functions (8th)", url: "https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-functions" },
    { type: "video", name: "Math Antics: Functions", url: "https://www.mathantics.com/" },
    { type: "tool", name: "Desmos: Function Carnival", url: "https://teacher.desmos.com/", note: "Classic free Desmos activity" },
    { type: "tool", name: "Desmos: Graphing Calculator", url: "https://www.desmos.com/calculator" },
    { type: "practice", name: "IM Tasks: Grade 8 F", url: "https://tasks.illustrativemathematics.org/content-standards/8/F" },
    { type: "practice", name: "Open Middle: 8th Grade Functions", url: "https://www.openmiddle.com/category/grade-8/" }
  ],
  "math:g8-G": [
    { type: "khan", name: "Khan Academy: Geometry (8th)", url: "https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-geometry" },
    { type: "video", name: "Math Antics: Pythagorean Theorem", url: "https://www.mathantics.com/" },
    { type: "video", name: "Math Antics: Volume of Cones, Cylinders, Spheres", url: "https://www.mathantics.com/" },
    { type: "tool", name: "GeoGebra: Transformations", url: "https://www.geogebra.org/m/u4gaqssh" },
    { type: "tool", name: "Desmos: Geometry", url: "https://www.desmos.com/geometry" },
    { type: "practice", name: "IM Tasks: Grade 8 G", url: "https://tasks.illustrativemathematics.org/content-standards/8/G" },
    { type: "practice", name: "Open Middle: 8th Grade Geometry", url: "https://www.openmiddle.com/category/grade-8/" }
  ],
  "math:g8-SP": [
    { type: "khan", name: "Khan Academy: Bivariate Data (8th)", url: "https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-data" },
    { type: "tool", name: "Desmos: Linear Regression", url: "https://www.desmos.com/calculator" },
    { type: "practice", name: "IM Tasks: Grade 8 SP", url: "https://tasks.illustrativemathematics.org/content-standards/8/SP" },
    { type: "practice", name: "NRICH: Statistics & Probability", url: "https://nrich.maths.org/statistics" }
  ],

  // ============================================================
  // MATH · ALGEBRA 1
  // ============================================================
  "math:gAlg1-N": [
    { type: "khan", name: "Khan Academy: Algebra 1 — Exponents", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:exponents-radicals" },
    { type: "course", name: "OpenStax: Elementary Algebra (free textbook)", url: "https://openstax.org/details/books/elementary-algebra-2e" },
    { type: "course", name: "CK-12: Algebra I", url: "https://www.ck12.org/fbbrowse/cbb/algebra/" },
    { type: "video", name: "Math Antics: Exponents", url: "https://www.mathantics.com/" },
    { type: "practice", name: "IM Tasks: HS N-Q", url: "https://tasks.illustrativemathematics.org/content-standards/HSN" }
  ],
  "math:gAlg1-A": [
    { type: "khan", name: "Khan Academy: Algebra 1", url: "https://www.khanacademy.org/math/algebra" },
    { type: "course", name: "OpenStax: Elementary Algebra", url: "https://openstax.org/details/books/elementary-algebra-2e" },
    { type: "course", name: "CK-12: Algebra I", url: "https://www.ck12.org/fbbrowse/cbb/algebra/" },
    { type: "video", name: "Math Antics: Solving Equations & Quadratics", url: "https://www.mathantics.com/" },
    { type: "video", name: "Eddie Woo: Algebra (YouTube)", url: "https://www.youtube.com/@misterwootube" },
    { type: "tool", name: "Desmos: Algebra Activities", url: "https://teacher.desmos.com/" },
    { type: "tool", name: "Desmos: Graphing Calculator", url: "https://www.desmos.com/calculator" },
    { type: "practice", name: "Open Middle: HSA", url: "https://www.openmiddle.com/category/hs/" },
    { type: "practice", name: "IM Tasks: HS Algebra", url: "https://tasks.illustrativemathematics.org/content-standards/HSA" },
    { type: "practice", name: "Achieve the Core: Algebra Tasks", url: "https://achievethecore.org/page/3185/mathematics-tasks" }
  ],
  "math:gAlg1-F": [
    { type: "khan", name: "Khan Academy: Functions (Algebra 1)", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions" },
    { type: "course", name: "Mathigon: Functions Course (interactive)", url: "https://mathigon.org/course/functions/introduction" },
    { type: "tool", name: "Desmos: Polygraph Lines / Marbleslides", url: "https://teacher.desmos.com/" },
    { type: "tool", name: "Desmos: Function Carnival", url: "https://teacher.desmos.com/" },
    { type: "video", name: "3Blue1Brown: Function Visualizations", url: "https://www.youtube.com/@3blue1brown" },
    { type: "practice", name: "IM Tasks: HS Functions", url: "https://tasks.illustrativemathematics.org/content-standards/HSF" }
  ],
  "math:gAlg1-SP": [
    { type: "khan", name: "Khan Academy: Statistics (Algebra 1)", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:data-distributions" },
    { type: "tool", name: "Desmos: Stats Activities", url: "https://teacher.desmos.com/" },
    { type: "video", name: "Crash Course Statistics", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr" },
    { type: "course", name: "OpenIntro Stats (free textbook)", url: "https://www.openintro.org/book/os/" },
    { type: "practice", name: "IM Tasks: HS Statistics", url: "https://tasks.illustrativemathematics.org/content-standards/HSS" }
  ],

  // ============================================================
  // MATH · GEOMETRY
  // ============================================================
  "math:gGeom-CO": [
    { type: "khan", name: "Khan Academy: Geometry — Transformations", url: "https://www.khanacademy.org/math/geometry/hs-geo-transformations" },
    { type: "course", name: "OpenStax: Geometry (Big Ideas)", url: "https://openstax.org/" },
    { type: "course", name: "CK-12: Geometry", url: "https://www.ck12.org/fbbrowse/cbb/geometry/" },
    { type: "tool", name: "GeoGebra: Transformations", url: "https://www.geogebra.org/m/u4gaqssh" },
    { type: "tool", name: "Desmos: Transformation Golf (rigid motion)", url: "https://teacher.desmos.com/" },
    { type: "practice", name: "IM Tasks: HS G-CO", url: "https://tasks.illustrativemathematics.org/content-standards/HSG" }
  ],
  "math:gGeom-SRT": [
    { type: "khan", name: "Khan Academy: Geometry — Similarity & Trig", url: "https://www.khanacademy.org/math/geometry/hs-geo-similarity" },
    { type: "video", name: "Math Antics: Similar Triangles", url: "https://www.mathantics.com/" },
    { type: "tool", name: "GeoGebra: Similar Triangles", url: "https://www.geogebra.org/" },
    { type: "tool", name: "Desmos: Trig Ratios", url: "https://teacher.desmos.com/" },
    { type: "practice", name: "IM Tasks: HS G-SRT", url: "https://tasks.illustrativemathematics.org/content-standards/HSG" }
  ],
  "math:gGeom-C": [
    { type: "khan", name: "Khan Academy: Circles", url: "https://www.khanacademy.org/math/geometry/hs-geo-circles" },
    { type: "tool", name: "GeoGebra: Circle Theorems", url: "https://www.geogebra.org/" },
    { type: "video", name: "Eddie Woo: Circle Theorems", url: "https://www.youtube.com/@misterwootube" },
    { type: "practice", name: "IM Tasks: HS G-C", url: "https://tasks.illustrativemathematics.org/content-standards/HSG" }
  ],
  "math:gGeom-GPE": [
    { type: "khan", name: "Khan Academy: Coordinate Geometry", url: "https://www.khanacademy.org/math/geometry/hs-geo-analytic-geometry" },
    { type: "tool", name: "Desmos: Coordinate Geometry", url: "https://www.desmos.com/calculator" },
    { type: "tool", name: "GeoGebra: Equations of Conics", url: "https://www.geogebra.org/" },
    { type: "practice", name: "IM Tasks: HS G-GPE", url: "https://tasks.illustrativemathematics.org/content-standards/HSG" }
  ],
  "math:gGeom-GMD": [
    { type: "khan", name: "Khan Academy: Solid Geometry & Modeling", url: "https://www.khanacademy.org/math/geometry/hs-geo-solids" },
    { type: "video", name: "Math Antics: 3D Shapes & Volume", url: "https://www.mathantics.com/" },
    { type: "tool", name: "GeoGebra: 3D Calculator", url: "https://www.geogebra.org/3d" },
    { type: "practice", name: "IM Tasks: HS G-GMD/MG", url: "https://tasks.illustrativemathematics.org/content-standards/HSG" }
  ],
  "math:gGeom-CP": [
    { type: "khan", name: "Khan Academy: Conditional Probability", url: "https://www.khanacademy.org/math/statistics-probability/probability-library" },
    { type: "video", name: "Crash Course Statistics: Conditional Probability", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr" },
    { type: "course", name: "OpenIntro Stats", url: "https://www.openintro.org/book/os/" },
    { type: "practice", name: "IM Tasks: HS S-CP", url: "https://tasks.illustrativemathematics.org/content-standards/HSS" }
  ],

  // ============================================================
  // MATH · ALGEBRA 2
  // ============================================================
  "math:gAlg2-N": [
    { type: "khan", name: "Khan Academy: Complex Numbers (Alg 2)", url: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:complex" },
    { type: "course", name: "OpenStax: College Algebra", url: "https://openstax.org/details/books/college-algebra" },
    { type: "course", name: "CK-12: Algebra II", url: "https://www.ck12.org/fbbrowse/cbb/algebra-ii/" },
    { type: "video", name: "3Blue1Brown: Complex Numbers Visually", url: "https://www.youtube.com/@3blue1brown" },
    { type: "practice", name: "IM Tasks: HS N-CN", url: "https://tasks.illustrativemathematics.org/content-standards/HSN" }
  ],
  "math:gAlg2-A": [
    { type: "khan", name: "Khan Academy: Algebra 2", url: "https://www.khanacademy.org/math/algebra2" },
    { type: "course", name: "OpenStax: Intermediate Algebra", url: "https://openstax.org/details/books/intermediate-algebra-2e" },
    { type: "course", name: "OpenStax: College Algebra", url: "https://openstax.org/details/books/college-algebra" },
    { type: "course", name: "CK-12: Algebra II", url: "https://www.ck12.org/fbbrowse/cbb/algebra-ii/" },
    { type: "video", name: "Eddie Woo: Polynomials & Rationals", url: "https://www.youtube.com/@misterwootube" },
    { type: "tool", name: "Desmos: Polynomial Activities", url: "https://teacher.desmos.com/" },
    { type: "practice", name: "IM Tasks: HS Algebra", url: "https://tasks.illustrativemathematics.org/content-standards/HSA" }
  ],
  "math:gAlg2-F": [
    { type: "khan", name: "Khan Academy: Functions (Alg 2)", url: "https://www.khanacademy.org/math/algebra2" },
    { type: "tool", name: "Desmos: Function Transformations", url: "https://teacher.desmos.com/" },
    { type: "video", name: "3Blue1Brown: Calculus & Functions", url: "https://www.youtube.com/@3blue1brown" },
    { type: "video", name: "Eddie Woo: Trig Functions", url: "https://www.youtube.com/@misterwootube" },
    { type: "course", name: "Mathigon: Trigonometry", url: "https://mathigon.org/course/circles/intro" },
    { type: "practice", name: "IM Tasks: HS Functions", url: "https://tasks.illustrativemathematics.org/content-standards/HSF" }
  ],
  "math:gAlg2-SP": [
    { type: "khan", name: "Khan Academy: Statistics (Alg 2)", url: "https://www.khanacademy.org/math/algebra2" },
    { type: "course", name: "OpenIntro Stats (free textbook)", url: "https://www.openintro.org/book/os/" },
    { type: "video", name: "Crash Course Statistics", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr" },
    { type: "tool", name: "Desmos: Stats Activities", url: "https://teacher.desmos.com/" },
    { type: "practice", name: "IM Tasks: HS Statistics", url: "https://tasks.illustrativemathematics.org/content-standards/HSS" }
  ],

  // ============================================================
  // MATH · PRE-CALCULUS / AP PRECALCULUS
  // ============================================================
  "math:gPreCalc-PR": [
    { type: "khan", name: "Khan Academy: AP Precalculus", url: "https://www.khanacademy.org/math/ap-precalculus" },
    { type: "course", name: "OpenStax: Precalculus 2e", url: "https://openstax.org/details/books/precalculus-2e" },
    { type: "tool", name: "Desmos: Polynomial & Rational Activities", url: "https://teacher.desmos.com/" },
    { type: "video", name: "Eddie Woo: Polynomials & Rationals", url: "https://www.youtube.com/@misterwootube" }
  ],
  "math:gPreCalc-EL": [
    { type: "khan", name: "Khan Academy: Exponential & Logarithmic", url: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs" },
    { type: "course", name: "OpenStax: Precalculus 2e — Ch 6", url: "https://openstax.org/details/books/precalculus-2e" },
    { type: "video", name: "3Blue1Brown: Exponentials & e", url: "https://www.youtube.com/@3blue1brown" }
  ],
  "math:gPreCalc-TP": [
    { type: "khan", name: "Khan Academy: Trigonometry & Polar", url: "https://www.khanacademy.org/math/trigonometry" },
    { type: "course", name: "Mathigon: Circles & Trig", url: "https://mathigon.org/course/circles/intro" },
    { type: "course", name: "OpenStax: Precalculus 2e — Trig", url: "https://openstax.org/details/books/precalculus-2e" },
    { type: "video", name: "3Blue1Brown: Trig Visualizations", url: "https://www.youtube.com/@3blue1brown" },
    { type: "tool", name: "Desmos: Trig Activities", url: "https://teacher.desmos.com/" }
  ],
  "math:gPreCalc-FM": [
    { type: "khan", name: "Khan Academy: AP Precalculus — Functions", url: "https://www.khanacademy.org/math/ap-precalculus" },
    { type: "tool", name: "Desmos: Function Modeling", url: "https://teacher.desmos.com/" },
    { type: "course", name: "OpenStax: Precalculus 2e", url: "https://openstax.org/details/books/precalculus-2e" }
  ],

  // ============================================================
  // MATH · AP CALCULUS AB
  // ============================================================
  "math:gCalcAB-LIM": [
    { type: "khan", name: "Khan Academy: AP Calculus AB", url: "https://www.khanacademy.org/math/ap-calculus-ab" },
    { type: "course", name: "OpenStax: Calculus Volume 1", url: "https://openstax.org/details/books/calculus-volume-1" },
    { type: "video", name: "3Blue1Brown: Essence of Calculus", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
    { type: "video", name: "Professor Leonard: Calculus 1 (full lectures)", url: "https://www.youtube.com/@ProfessorLeonard" },
    { type: "practice", name: "Paul's Online Math Notes — Calc I", url: "https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx" }
  ],
  "math:gCalcAB-DIFF": [
    { type: "khan", name: "Khan Academy: AP Calc AB — Differentiation", url: "https://www.khanacademy.org/math/ap-calculus-ab" },
    { type: "course", name: "OpenStax: Calculus Volume 1 — Ch 3", url: "https://openstax.org/details/books/calculus-volume-1" },
    { type: "video", name: "3Blue1Brown: Derivatives", url: "https://www.youtube.com/@3blue1brown" },
    { type: "practice", name: "Paul's Online Math Notes — Derivatives", url: "https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx" }
  ],
  "math:gCalcAB-APD": [
    { type: "khan", name: "Khan Academy: AP Calc AB — Applications", url: "https://www.khanacademy.org/math/ap-calculus-ab" },
    { type: "course", name: "OpenStax: Calculus Volume 1 — Ch 4", url: "https://openstax.org/details/books/calculus-volume-1" },
    { type: "video", name: "Professor Leonard: Optimization & Related Rates", url: "https://www.youtube.com/@ProfessorLeonard" }
  ],
  "math:gCalcAB-INT": [
    { type: "khan", name: "Khan Academy: AP Calc AB — Integration", url: "https://www.khanacademy.org/math/ap-calculus-ab" },
    { type: "course", name: "OpenStax: Calculus Volume 1 — Ch 5-6", url: "https://openstax.org/details/books/calculus-volume-1" },
    { type: "video", name: "3Blue1Brown: Integration", url: "https://www.youtube.com/@3blue1brown" },
    { type: "practice", name: "Paul's Online Math Notes — Integrals", url: "https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx" }
  ],

  // ============================================================
  // MATH · AP CALCULUS BC
  // ============================================================
  "math:gCalcBC-AB": [
    { type: "khan", name: "Khan Academy: AP Calculus BC", url: "https://www.khanacademy.org/math/ap-calculus-bc" },
    { type: "course", name: "OpenStax: Calculus Volume 1", url: "https://openstax.org/details/books/calculus-volume-1" },
    { type: "video", name: "3Blue1Brown: Essence of Calculus", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" }
  ],
  "math:gCalcBC-PPV": [
    { type: "khan", name: "Khan Academy: BC — Parametric / Polar / Vector", url: "https://www.khanacademy.org/math/ap-calculus-bc" },
    { type: "course", name: "OpenStax: Calculus Volume 2 — Ch 1-2 (parametric/polar)", url: "https://openstax.org/details/books/calculus-volume-2" },
    { type: "course", name: "OpenStax: Calculus Volume 3 — Ch 2-3 (vectors)", url: "https://openstax.org/details/books/calculus-volume-3" },
    { type: "tool", name: "Desmos: Parametric & Polar Plotter", url: "https://www.desmos.com/calculator" }
  ],
  "math:gCalcBC-SER": [
    { type: "khan", name: "Khan Academy: BC — Series", url: "https://www.khanacademy.org/math/ap-calculus-bc" },
    { type: "course", name: "OpenStax: Calculus Volume 2 — Ch 5-6 (series)", url: "https://openstax.org/details/books/calculus-volume-2" },
    { type: "video", name: "3Blue1Brown: Taylor Series Visualized", url: "https://www.youtube.com/@3blue1brown" },
    { type: "video", name: "Professor Leonard: Series convergence tests", url: "https://www.youtube.com/@ProfessorLeonard" }
  ],

  // ============================================================
  // MATH · AP STATISTICS
  // ============================================================
  "math:gStats-1D": [
    { type: "khan", name: "Khan Academy: AP Statistics", url: "https://www.khanacademy.org/math/ap-statistics" },
    { type: "course", name: "OpenIntro Statistics (free textbook)", url: "https://www.openintro.org/book/os/" },
    { type: "video", name: "Crash Course Statistics", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr" },
    { type: "tool", name: "Desmos: Statistics Activities", url: "https://teacher.desmos.com/" }
  ],
  "math:gStats-2D": [
    { type: "khan", name: "Khan Academy: AP Stats — Two-Variable Data", url: "https://www.khanacademy.org/math/ap-statistics" },
    { type: "course", name: "OpenIntro Statistics", url: "https://www.openintro.org/book/os/" },
    { type: "tool", name: "Desmos: Linear Regression Activity", url: "https://www.desmos.com/calculator" }
  ],
  "math:gStats-SAMP": [
    { type: "khan", name: "Khan Academy: AP Stats — Sampling & Experiments", url: "https://www.khanacademy.org/math/ap-statistics" },
    { type: "course", name: "OpenIntro Statistics", url: "https://www.openintro.org/book/os/" }
  ],
  "math:gStats-PROB": [
    { type: "khan", name: "Khan Academy: AP Stats — Probability", url: "https://www.khanacademy.org/math/ap-statistics" },
    { type: "course", name: "OpenIntro Statistics — Ch 3-4", url: "https://www.openintro.org/book/os/" },
    { type: "video", name: "Crash Course Statistics: Probability", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr" }
  ],
  "math:gStats-INF": [
    { type: "khan", name: "Khan Academy: AP Stats — Inference", url: "https://www.khanacademy.org/math/ap-statistics" },
    { type: "course", name: "OpenIntro Statistics — Inference chapters", url: "https://www.openintro.org/book/os/" },
    { type: "video", name: "Crash Course Statistics: Hypothesis Testing", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr" }
  ],

  // ============================================================
  // ELA · KINDERGARTEN
  // ============================================================
  "ela:gK-RL": [
    { type: "foundational", name: "Khan Academy Kids (free app)", url: "https://learn.khanacademy.org/khan-academy-kids/" },
    { type: "text", name: "Storyline Online (free read-alouds)", url: "https://storylineonline.net/" },
    { type: "text", name: "ReadWorks (free passages w/ questions)", url: "https://www.readworks.org/" },
    { type: "text", name: "Unite for Literacy (free K-2 books)", url: "https://www.uniteforliteracy.com/" },
    { type: "text", name: "Reading Rockets: Recommended Books", url: "https://www.readingrockets.org/booksauthors/booksbytheme" },
    { type: "video", name: "Reading Rockets: Read-Aloud Strategies", url: "https://www.readingrockets.org/strategies" }
  ],
  "ela:gK-RI": [
    { type: "foundational", name: "Khan Academy Kids", url: "https://learn.khanacademy.org/khan-academy-kids/" },
    { type: "text", name: "ReadWorks (free)", url: "https://www.readworks.org/" },
    { type: "text", name: "Wonderopolis (free informational texts)", url: "https://www.wonderopolis.org/" },
    { type: "text", name: "National Geographic Kids", url: "https://kids.nationalgeographic.com/" },
    { type: "text", name: "Smithsonian Tween Tribune (lower levels)", url: "https://www.tweentribune.com/" },
    { type: "video", name: "PBS Kids: Informational Videos", url: "https://pbskids.org/" }
  ],
  "ela:gK-RF": [
    { type: "foundational", name: "UFLI Foundations (free K-2 phonics)", url: "https://education.ufl.edu/ufli/foundations/free-resources/" },
    { type: "foundational", name: "Florida Center for Reading Research (FCRR)", url: "https://fcrr.org/student-center-activities", note: "Free K-1 phonics & PA activities" },
    { type: "foundational", name: "Khan Academy Kids", url: "https://learn.khanacademy.org/khan-academy-kids/" },
    { type: "foundational", name: "Reading Rockets: Phonological Awareness", url: "https://www.readingrockets.org/topics/phonological-and-phonemic-awareness" },
    { type: "foundational", name: "Reading Rockets: Phonics", url: "https://www.readingrockets.org/topics/phonics-and-decoding" },
    { type: "tool", name: "Starfall (free phonics games)", url: "https://www.starfall.com/" },
    { type: "video", name: "Alphablocks (BBC) on YouTube", url: "https://www.youtube.com/@officialalphablocks" }
  ],
  "ela:gK-W": [
    { type: "foundational", name: "Reading Rockets: Writing", url: "https://www.readingrockets.org/topics/writing" },
    { type: "foundational", name: "Heggerty Resources", url: "https://heggerty.org/", note: "Free PA & writing scaffolds" },
    { type: "foundational", name: "Khan Academy Kids", url: "https://learn.khanacademy.org/khan-academy-kids/" }
  ],
  "ela:gK-SL": [
    { type: "foundational", name: "Colorín Colorado: Oral Language", url: "https://www.colorincolorado.org/oral-language" },
    { type: "foundational", name: "Reading Rockets: Comprehension via Discussion", url: "https://www.readingrockets.org/strategies" },
    { type: "video", name: "Storyline Online (read-alouds with discussion)", url: "https://storylineonline.net/" }
  ],
  "ela:gK-L": [
    { type: "foundational", name: "Khan Academy Kids", url: "https://learn.khanacademy.org/khan-academy-kids/" },
    { type: "foundational", name: "FCRR Vocabulary Activities", url: "https://fcrr.org/student-center-activities" },
    { type: "tool", name: "Vocabulary.com (free K-12 word games)", url: "https://www.vocabulary.com/" },
    { type: "video", name: "Sesame Street Vocabulary", url: "https://www.youtube.com/@SesameStreet" }
  ],

  // ============================================================
  // ELA · GRADE 1
  // ============================================================
  "ela:g1-RL": [
    { type: "foundational", name: "Khan Academy Kids", url: "https://learn.khanacademy.org/khan-academy-kids/" },
    { type: "text", name: "ReadWorks (free)", url: "https://www.readworks.org/" },
    { type: "text", name: "Storyline Online", url: "https://storylineonline.net/" },
    { type: "text", name: "Unite for Literacy (free books)", url: "https://www.uniteforliteracy.com/" },
    { type: "text", name: "International Children's Digital Library", url: "https://www.childrenslibrary.org/" },
    { type: "video", name: "Reading Rockets: Comprehension", url: "https://www.readingrockets.org/strategies" }
  ],
  "ela:g1-RI": [
    { type: "text", name: "ReadWorks (free)", url: "https://www.readworks.org/" },
    { type: "text", name: "Wonderopolis", url: "https://www.wonderopolis.org/" },
    { type: "text", name: "National Geographic Kids", url: "https://kids.nationalgeographic.com/" },
    { type: "text", name: "Newsela (free tier)", url: "https://newsela.com/" },
    { type: "tool", name: "Smithsonian: TweenTribune", url: "https://www.tweentribune.com/" }
  ],
  "ela:g1-RF": [
    { type: "foundational", name: "UFLI Foundations", url: "https://education.ufl.edu/ufli/foundations/free-resources/" },
    { type: "foundational", name: "FCRR Activities (Gr 1)", url: "https://fcrr.org/student-center-activities" },
    { type: "foundational", name: "Reading Rockets: Phonics", url: "https://www.readingrockets.org/topics/phonics-and-decoding" },
    { type: "tool", name: "Starfall (free)", url: "https://www.starfall.com/" },
    { type: "tool", name: "ReadingBear (decoding & vocab)", url: "https://www.readingbear.org/" },
    { type: "video", name: "Alphablocks on YouTube", url: "https://www.youtube.com/@officialalphablocks" }
  ],
  "ela:g1-W": [
    { type: "foundational", name: "Reading Rockets: Writing", url: "https://www.readingrockets.org/topics/writing" },
    { type: "course", name: "ReadWriteThink (NCTE/IRA, free)", url: "https://www.readwritethink.org/" },
    { type: "video", name: "Read Aloud Revival: Writing Models", url: "https://www.readaloudrevival.com/" }
  ],
  "ela:g1-SL": [
    { type: "foundational", name: "Colorín Colorado", url: "https://www.colorincolorado.org/oral-language" },
    { type: "video", name: "Storyline Online", url: "https://storylineonline.net/" }
  ],
  "ela:g1-L": [
    { type: "khan", name: "Khan Academy: Grammar (covers K-12)", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "foundational", name: "Khan Academy Kids", url: "https://learn.khanacademy.org/khan-academy-kids/" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "foundational", name: "FCRR Vocabulary", url: "https://fcrr.org/student-center-activities" }
  ],

  // ============================================================
  // ELA · GRADE 2
  // ============================================================
  "ela:g2-RL": [
    { type: "khan", name: "Khan Academy: 2nd Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-2nd-reading-vocab" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "CommonLit (Gr 3+)", url: "https://www.commonlit.org/" },
    { type: "text", name: "Storyline Online", url: "https://storylineonline.net/" },
    { type: "text", name: "Unite for Literacy", url: "https://www.uniteforliteracy.com/" },
    { type: "video", name: "Reading Rockets: Strategies", url: "https://www.readingrockets.org/strategies" }
  ],
  "ela:g2-RI": [
    { type: "khan", name: "Khan Academy: 2nd Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-2nd-reading-vocab" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "Wonderopolis", url: "https://www.wonderopolis.org/" },
    { type: "text", name: "National Geographic Kids", url: "https://kids.nationalgeographic.com/" },
    { type: "text", name: "Newsela (free tier)", url: "https://newsela.com/" }
  ],
  "ela:g2-RF": [
    { type: "foundational", name: "UFLI Foundations", url: "https://education.ufl.edu/ufli/foundations/free-resources/" },
    { type: "foundational", name: "FCRR Activities (Gr 2-3)", url: "https://fcrr.org/student-center-activities" },
    { type: "tool", name: "ReadingBear", url: "https://www.readingbear.org/" },
    { type: "foundational", name: "Reading Rockets: Fluency", url: "https://www.readingrockets.org/topics/fluency" },
    { type: "tool", name: "Starfall", url: "https://www.starfall.com/" }
  ],
  "ela:g2-W": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "ReadWriteThink: Grade 2 Writing", url: "https://www.readwritethink.org/" },
    { type: "foundational", name: "Reading Rockets: Writing", url: "https://www.readingrockets.org/topics/writing" }
  ],
  "ela:g2-SL": [
    { type: "foundational", name: "Colorín Colorado: Oral Language", url: "https://www.colorincolorado.org/oral-language" },
    { type: "video", name: "Storyline Online (model fluent reading)", url: "https://storylineonline.net/" }
  ],
  "ela:g2-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "khan", name: "Khan Academy: 2nd Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-2nd-reading-vocab" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "foundational", name: "FCRR Vocabulary", url: "https://fcrr.org/student-center-activities" }
  ],

  // ============================================================
  // ELA · GRADE 3
  // ============================================================
  "ela:g3-RL": [
    { type: "khan", name: "Khan Academy: 3rd Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-3rd-reading-vocab" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "CommonLit (Gr 3+)", url: "https://www.commonlit.org/" },
    { type: "text", name: "Storyline Online", url: "https://storylineonline.net/" },
    { type: "text", name: "Project Gutenberg (free classic stories)", url: "https://www.gutenberg.org/" }
  ],
  "ela:g3-RI": [
    { type: "khan", name: "Khan Academy: 3rd Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-3rd-reading-vocab" },
    { type: "text", name: "Newsela (free tier)", url: "https://newsela.com/" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "Wonderopolis", url: "https://www.wonderopolis.org/" },
    { type: "text", name: "National Geographic Kids", url: "https://kids.nationalgeographic.com/" },
    { type: "text", name: "TweenTribune", url: "https://www.tweentribune.com/" }
  ],
  "ela:g3-RF": [
    { type: "foundational", name: "Reading Rockets: Fluency", url: "https://www.readingrockets.org/topics/fluency" },
    { type: "foundational", name: "FCRR Gr 2-3 Activities", url: "https://fcrr.org/student-center-activities" },
    { type: "tool", name: "ReadingBear", url: "https://www.readingbear.org/" },
    { type: "tool", name: "Starfall", url: "https://www.starfall.com/" }
  ],
  "ela:g3-W": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "ReadWriteThink (free lessons)", url: "https://www.readwritethink.org/" },
    { type: "foundational", name: "Reading Rockets: Writing", url: "https://www.readingrockets.org/topics/writing" },
    { type: "course", name: "Time4Writing (free resources)", url: "https://www.time4writing.com/free-writing-resources/" }
  ],
  "ela:g3-SL": [
    { type: "foundational", name: "Colorín Colorado: Oral Language", url: "https://www.colorincolorado.org/oral-language" },
    { type: "video", name: "TED-Ed (short videos for discussion)", url: "https://ed.ted.com/" },
    { type: "video", name: "Storyline Online", url: "https://storylineonline.net/" }
  ],
  "ela:g3-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "khan", name: "Khan Academy: 3rd Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-3rd-reading-vocab" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Membean (free trial)", url: "https://membean.com/" },
    { type: "tool", name: "Quizlet (free vocab decks)", url: "https://quizlet.com/" }
  ],

  // ============================================================
  // ELA · GRADE 4
  // ============================================================
  "ela:g4-RL": [
    { type: "khan", name: "Khan Academy: 4th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-4th-reading-vocab" },
    { type: "text", name: "CommonLit", url: "https://www.commonlit.org/" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "Project Gutenberg", url: "https://www.gutenberg.org/" },
    { type: "text", name: "Storyline Online", url: "https://storylineonline.net/" }
  ],
  "ela:g4-RI": [
    { type: "khan", name: "Khan Academy: 4th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-4th-reading-vocab" },
    { type: "text", name: "Newsela (free tier)", url: "https://newsela.com/" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "TweenTribune", url: "https://www.tweentribune.com/" },
    { type: "text", name: "DOGOnews (free for educators)", url: "https://www.dogonews.com/" },
    { type: "text", name: "Wonderopolis", url: "https://www.wonderopolis.org/" }
  ],
  "ela:g4-RF": [
    { type: "foundational", name: "Reading Rockets: Fluency", url: "https://www.readingrockets.org/topics/fluency" },
    { type: "tool", name: "ReadingBear (advanced phonics)", url: "https://www.readingbear.org/" },
    { type: "foundational", name: "FCRR Gr 4-5", url: "https://fcrr.org/student-center-activities" }
  ],
  "ela:g4-W": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "ReadWriteThink", url: "https://www.readwritethink.org/" },
    { type: "course", name: "Time4Writing free resources", url: "https://www.time4writing.com/free-writing-resources/" },
    { type: "tool", name: "NoRedInk (free for some)", url: "https://www.noredink.com/" }
  ],
  "ela:g4-SL": [
    { type: "video", name: "TED-Ed", url: "https://ed.ted.com/" },
    { type: "foundational", name: "Colorín Colorado", url: "https://www.colorincolorado.org/oral-language" }
  ],
  "ela:g4-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "khan", name: "Khan Academy: 4th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-4th-reading-vocab" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Quizlet", url: "https://quizlet.com/" }
  ],

  // ============================================================
  // ELA · GRADE 5
  // ============================================================
  "ela:g5-RL": [
    { type: "khan", name: "Khan Academy: 5th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-5th-reading-vocab" },
    { type: "text", name: "CommonLit", url: "https://www.commonlit.org/" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "Project Gutenberg", url: "https://www.gutenberg.org/" },
    { type: "text", name: "Library of Congress: Children's Literature", url: "https://www.loc.gov/" }
  ],
  "ela:g5-RI": [
    { type: "khan", name: "Khan Academy: 5th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-5th-reading-vocab" },
    { type: "text", name: "Newsela", url: "https://newsela.com/" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "TweenTribune", url: "https://www.tweentribune.com/" },
    { type: "text", name: "DOGOnews", url: "https://www.dogonews.com/" },
    { type: "text", name: "Library of Congress (primary docs)", url: "https://www.loc.gov/programs/teachers/" }
  ],
  "ela:g5-RF": [
    { type: "foundational", name: "Reading Rockets: Fluency", url: "https://www.readingrockets.org/topics/fluency" },
    { type: "foundational", name: "FCRR Gr 4-5", url: "https://fcrr.org/student-center-activities" }
  ],
  "ela:g5-W": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "ReadWriteThink", url: "https://www.readwritethink.org/" },
    { type: "course", name: "Time4Writing free", url: "https://www.time4writing.com/free-writing-resources/" }
  ],
  "ela:g5-SL": [
    { type: "video", name: "TED-Ed", url: "https://ed.ted.com/" },
    { type: "foundational", name: "Colorín Colorado", url: "https://www.colorincolorado.org/oral-language" }
  ],
  "ela:g5-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "khan", name: "Khan Academy: 5th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-5th-reading-vocab" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Quizlet", url: "https://quizlet.com/" }
  ],

  // ============================================================
  // ELA · GRADE 6
  // ============================================================
  "ela:g6-RL": [
    { type: "khan", name: "Khan Academy: 6th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-6th-reading-vocab" },
    { type: "text", name: "CommonLit", url: "https://www.commonlit.org/" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "Project Gutenberg", url: "https://www.gutenberg.org/" },
    { type: "text", name: "Folger Shakespeare (free)", url: "https://www.folger.edu/explore/shakespeares-works/" }
  ],
  "ela:g6-RI": [
    { type: "khan", name: "Khan Academy: 6th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-6th-reading-vocab" },
    { type: "text", name: "Newsela", url: "https://newsela.com/" },
    { type: "text", name: "CommonLit (informational)", url: "https://www.commonlit.org/" },
    { type: "text", name: "TweenTribune", url: "https://www.tweentribune.com/" },
    { type: "text", name: "ProCon.org (argument analysis)", url: "https://www.procon.org/" },
    { type: "text", name: "Library of Congress: Teachers", url: "https://www.loc.gov/programs/teachers/" }
  ],
  "ela:g6-W": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "ReadWriteThink", url: "https://www.readwritethink.org/" },
    { type: "course", name: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/" },
    { type: "tool", name: "NoRedInk (free for some)", url: "https://www.noredink.com/" }
  ],
  "ela:g6-SL": [
    { type: "video", name: "TED-Ed", url: "https://ed.ted.com/" },
    { type: "video", name: "C-SPAN Classroom (free)", url: "https://www.c-span.org/classroom/" }
  ],
  "ela:g6-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "khan", name: "Khan Academy: 6th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-6th-reading-vocab" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Membean", url: "https://membean.com/" },
    { type: "tool", name: "Quizlet", url: "https://quizlet.com/" }
  ],

  // ============================================================
  // ELA · GRADE 7
  // ============================================================
  "ela:g7-RL": [
    { type: "khan", name: "Khan Academy: 7th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-7th-reading-vocab" },
    { type: "text", name: "CommonLit", url: "https://www.commonlit.org/" },
    { type: "text", name: "Project Gutenberg", url: "https://www.gutenberg.org/" },
    { type: "text", name: "Poetry Foundation", url: "https://www.poetryfoundation.org/" },
    { type: "text", name: "Folger Shakespeare", url: "https://www.folger.edu/explore/shakespeares-works/" }
  ],
  "ela:g7-RI": [
    { type: "khan", name: "Khan Academy: 7th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-7th-reading-vocab" },
    { type: "text", name: "Newsela", url: "https://newsela.com/" },
    { type: "text", name: "CommonLit", url: "https://www.commonlit.org/" },
    { type: "text", name: "ProCon.org", url: "https://www.procon.org/" },
    { type: "text", name: "Library of Congress: Teachers", url: "https://www.loc.gov/programs/teachers/" },
    { type: "text", name: "EDSITEment (NEH free lessons)", url: "https://edsitement.neh.gov/" }
  ],
  "ela:g7-W": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/" },
    { type: "course", name: "ReadWriteThink", url: "https://www.readwritethink.org/" }
  ],
  "ela:g7-SL": [
    { type: "video", name: "TED-Ed", url: "https://ed.ted.com/" },
    { type: "video", name: "C-SPAN Classroom", url: "https://www.c-span.org/classroom/" }
  ],
  "ela:g7-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "khan", name: "Khan Academy: 7th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-7th-reading-vocab" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Membean", url: "https://membean.com/" },
    { type: "tool", name: "Quizlet", url: "https://quizlet.com/" }
  ],

  // ============================================================
  // ELA · GRADE 8
  // ============================================================
  "ela:g8-RL": [
    { type: "khan", name: "Khan Academy: 8th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-8th-reading-vocab" },
    { type: "text", name: "CommonLit", url: "https://www.commonlit.org/" },
    { type: "text", name: "Project Gutenberg", url: "https://www.gutenberg.org/" },
    { type: "text", name: "Poetry Foundation", url: "https://www.poetryfoundation.org/" },
    { type: "text", name: "Folger Shakespeare", url: "https://www.folger.edu/explore/shakespeares-works/" }
  ],
  "ela:g8-RI": [
    { type: "khan", name: "Khan Academy: 8th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-8th-reading-vocab" },
    { type: "text", name: "Newsela", url: "https://newsela.com/" },
    { type: "text", name: "CommonLit", url: "https://www.commonlit.org/" },
    { type: "text", name: "ProCon.org", url: "https://www.procon.org/" },
    { type: "text", name: "Library of Congress: Teachers", url: "https://www.loc.gov/programs/teachers/" },
    { type: "text", name: "EDSITEment (NEH)", url: "https://edsitement.neh.gov/" }
  ],
  "ela:g8-W": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/" },
    { type: "course", name: "ReadWriteThink", url: "https://www.readwritethink.org/" },
    { type: "tool", name: "NoRedInk (free for some)", url: "https://www.noredink.com/" }
  ],
  "ela:g8-SL": [
    { type: "video", name: "TED-Ed", url: "https://ed.ted.com/" },
    { type: "video", name: "C-SPAN Classroom", url: "https://www.c-span.org/classroom/" }
  ],
  "ela:g8-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "khan", name: "Khan Academy: 8th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-8th-reading-vocab" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Membean", url: "https://membean.com/" },
    { type: "tool", name: "Quizlet", url: "https://quizlet.com/" }
  ],

  // ============================================================
  // ELA · GRADE 9-10
  // ============================================================
  "ela:g910-RL": [
    { type: "khan", name: "Khan Academy: 9th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-9th-reading-vocab" },
    { type: "text", name: "CommonLit (HS)", url: "https://www.commonlit.org/" },
    { type: "text", name: "Project Gutenberg", url: "https://www.gutenberg.org/" },
    { type: "text", name: "Poetry Foundation", url: "https://www.poetryfoundation.org/" },
    { type: "text", name: "Folger Shakespeare", url: "https://www.folger.edu/explore/shakespeares-works/" },
    { type: "khan", name: "Khan Academy: AP English Literature", url: "https://www.khanacademy.org/test-prep/ap-english-literature" }
  ],
  "ela:g910-RI": [
    { type: "text", name: "Newsela", url: "https://newsela.com/" },
    { type: "text", name: "CommonLit", url: "https://www.commonlit.org/" },
    { type: "text", name: "ProCon.org", url: "https://www.procon.org/" },
    { type: "text", name: "Library of Congress: U.S. Documents", url: "https://www.loc.gov/programs/teachers/" },
    { type: "text", name: "EDSITEment (NEH)", url: "https://edsitement.neh.gov/" },
    { type: "khan", name: "Khan Academy: AP English Language", url: "https://www.khanacademy.org/test-prep/ap-english-language" }
  ],
  "ela:g910-W": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "Purdue OWL: Argument Writing", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/argument_papers/" },
    { type: "course", name: "ReadWriteThink", url: "https://www.readwritethink.org/" },
    { type: "tool", name: "NoRedInk", url: "https://www.noredink.com/" }
  ],
  "ela:g910-SL": [
    { type: "video", name: "TED-Ed", url: "https://ed.ted.com/" },
    { type: "video", name: "C-SPAN Classroom", url: "https://www.c-span.org/classroom/" },
    { type: "course", name: "National Speech & Debate Association: Free Resources", url: "https://www.speechanddebate.org/student-resources/" }
  ],
  "ela:g910-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "Purdue OWL: Mechanics", url: "https://owl.purdue.edu/owl/general_writing/mechanics/" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Membean", url: "https://membean.com/" }
  ],

  // ============================================================
  // ELA · GRADE 11-12
  // ============================================================
  "ela:g1112-RL": [
    { type: "khan", name: "Khan Academy: AP English Literature", url: "https://www.khanacademy.org/test-prep/ap-english-literature" },
    { type: "text", name: "CommonLit (HS)", url: "https://www.commonlit.org/" },
    { type: "text", name: "Project Gutenberg", url: "https://www.gutenberg.org/" },
    { type: "text", name: "Poetry Foundation", url: "https://www.poetryfoundation.org/" },
    { type: "text", name: "Folger Shakespeare", url: "https://www.folger.edu/explore/shakespeares-works/" },
    { type: "course", name: "Yale Open Courses: Literature (free)", url: "https://oyc.yale.edu/english" }
  ],
  "ela:g1112-RI": [
    { type: "khan", name: "Khan Academy: AP English Language", url: "https://www.khanacademy.org/test-prep/ap-english-language" },
    { type: "text", name: "Library of Congress: U.S. Documents", url: "https://www.loc.gov/programs/teachers/" },
    { type: "text", name: "EDSITEment (NEH)", url: "https://edsitement.neh.gov/" },
    { type: "text", name: "ProCon.org", url: "https://www.procon.org/" },
    { type: "text", name: "Smithsonian Learning Lab", url: "https://learninglab.si.edu/" },
    { type: "text", name: "OER Commons (free curated texts)", url: "https://oercommons.org/" }
  ],
  "ela:g1112-W": [
    { type: "course", name: "Purdue OWL: Academic Writing", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/" },
    { type: "course", name: "Purdue OWL: Argument Writing", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/argument_papers/" },
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "Harvard Writing Center (free)", url: "https://writingcenter.fas.harvard.edu/pages/strategies-essay-writing" }
  ],
  "ela:g1112-SL": [
    { type: "video", name: "TED Talks", url: "https://www.ted.com/" },
    { type: "video", name: "C-SPAN Classroom", url: "https://www.c-span.org/classroom/" },
    { type: "course", name: "National Speech & Debate", url: "https://www.speechanddebate.org/student-resources/" }
  ],
  "ela:g1112-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Membean", url: "https://membean.com/" }
  ]

};

// ---------- Helpers ----------
window.gradeKeyFromCellId = function (cellId) {
  var m = cellId.match(/^(math|ela):g([A-Z0-9]+)-/);
  return m ? m[2] : null;
};

window.getResourcesForCell = function (cellId) {
  var subject = cellId.startsWith("math:") ? "math" : "ela";
  var gradeKey = window.gradeKeyFromCellId(cellId);
  var khanMap = subject === "math" ? window.RESOURCES.__khanMath : window.RESOURCES.__khanEla;
  var khan = khanMap ? khanMap[gradeKey] : null;
  var explicit = window.RESOURCES[cellId] || [];

  // If the explicit list already includes a Khan entry, don't double-add the grade default.
  var hasKhan = explicit.some(function (r) { return r.type === "khan" || (r.name && r.name.indexOf("Khan Academy") === 0); });
  var out = [];
  if (khan && !hasKhan) out.push({ type: "khan", name: khan.name, url: khan.url });
  return out.concat(explicit);
};
