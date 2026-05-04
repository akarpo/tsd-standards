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
    { type: "practice", name: "IM Tasks: HS N-Q", url: "https://tasks.illustrativemathematics.org/content-standards/HSN" },
    { type: "course", name: "College Board: Pre-AP Algebra 1 — course framework", url: "https://pre-ap.collegeboard.org/courses/course-descriptions/algebra-1", note: "National Pre-AP Honors-track framework" },
    { type: "course", name: "MIT BLOSSOMS — Algebra video lessons", url: "https://blossoms.mit.edu/videos/by_subject/mathematics", note: "MIT-produced free HS lessons w/ teacher guides" },
    { type: "text", name: "Better Explained — algebra deep intuition", url: "https://betterexplained.com/" }
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
    { type: "practice", name: "Achieve the Core: Algebra Tasks", url: "https://achievethecore.org/page/3185/mathematics-tasks" },
    { type: "course", name: "College Board: Pre-AP Algebra 1 framework", url: "https://pre-ap.collegeboard.org/courses/course-descriptions/algebra-1" },
    { type: "text", name: "AoPS Online — Alcumus (free adaptive practice)", url: "https://artofproblemsolving.com/alcumus", note: "Art of Problem Solving's free skill builder" },
    { type: "course", name: "MIT BLOSSOMS — Algebra video lessons", url: "https://blossoms.mit.edu/videos/by_subject/mathematics" },
    { type: "course", name: "Saylor Academy — College Algebra (free, self-paced)", url: "https://learn.saylor.org/course/view.php?id=12" }
  ],
  "math:gAlg1-F": [
    { type: "khan", name: "Khan Academy: Functions (Algebra 1)", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:functions" },
    { type: "course", name: "Mathigon: Functions Course (interactive)", url: "https://mathigon.org/course/functions/introduction" },
    { type: "tool", name: "Desmos: Polygraph Lines / Marbleslides", url: "https://teacher.desmos.com/" },
    { type: "tool", name: "Desmos: Function Carnival", url: "https://teacher.desmos.com/" },
    { type: "video", name: "3Blue1Brown: Function Visualizations", url: "https://www.youtube.com/@3blue1brown" },
    { type: "practice", name: "IM Tasks: HS Functions", url: "https://tasks.illustrativemathematics.org/content-standards/HSF" },
    { type: "course", name: "College Board: Pre-AP Algebra 1 framework", url: "https://pre-ap.collegeboard.org/courses/course-descriptions/algebra-1" },
    { type: "text", name: "Better Explained — function & graphing intuition", url: "https://betterexplained.com/" }
  ],
  "math:gAlg1-SP": [
    { type: "khan", name: "Khan Academy: Statistics (Algebra 1)", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:data-distributions" },
    { type: "tool", name: "Desmos: Stats Activities", url: "https://teacher.desmos.com/" },
    { type: "video", name: "Crash Course Statistics", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr" },
    { type: "course", name: "OpenIntro Stats (free textbook)", url: "https://www.openintro.org/book/os/" },
    { type: "practice", name: "IM Tasks: HS Statistics", url: "https://tasks.illustrativemathematics.org/content-standards/HSS" },
    { type: "course", name: "OpenIntro: Advanced HS Stats (free textbook)", url: "https://www.openintro.org/book/ahss/" },
    { type: "course", name: "Saylor Academy — Statistics (free, self-paced)", url: "https://learn.saylor.org/course/view.php?id=53" }
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
    { type: "practice", name: "IM Tasks: HS G-CO", url: "https://tasks.illustrativemathematics.org/content-standards/HSG" },
    { type: "course", name: "College Board: Pre-AP Geometry with Statistics framework", url: "https://pre-ap.collegeboard.org/courses/course-descriptions/geometry-with-statistics", note: "National Honors-track Geom framework" },
    { type: "course", name: "Phillips Exeter — Mathematics Materials (Math 1-4 problem sets)", url: "https://www.exeter.edu/mathematics/math-materials", note: "Free, world-renowned Harkness-style problem-based curriculum" },
    { type: "text", name: "Euclid's Elements (Clark Univ. interactive)", url: "https://aleph0.clarku.edu/~djoyce/elements/elements.html" }
  ],
  "math:gGeom-SRT": [
    { type: "khan", name: "Khan Academy: Geometry — Similarity & Trig", url: "https://www.khanacademy.org/math/geometry/hs-geo-similarity" },
    { type: "video", name: "Math Antics: Similar Triangles", url: "https://www.mathantics.com/" },
    { type: "tool", name: "GeoGebra: Similar Triangles", url: "https://www.geogebra.org/" },
    { type: "tool", name: "Desmos: Trig Ratios", url: "https://teacher.desmos.com/" },
    { type: "practice", name: "IM Tasks: HS G-SRT", url: "https://tasks.illustrativemathematics.org/content-standards/HSG" },
    { type: "course", name: "College Board: Pre-AP Geometry framework", url: "https://pre-ap.collegeboard.org/courses/course-descriptions/geometry-with-statistics" },
    { type: "course", name: "Phillips Exeter Math problem sets", url: "https://www.exeter.edu/mathematics/math-materials" }
  ],
  "math:gGeom-C": [
    { type: "khan", name: "Khan Academy: Circles", url: "https://www.khanacademy.org/math/geometry/hs-geo-circles" },
    { type: "tool", name: "GeoGebra: Circle Theorems", url: "https://www.geogebra.org/" },
    { type: "video", name: "Eddie Woo: Circle Theorems", url: "https://www.youtube.com/@misterwootube" },
    { type: "practice", name: "IM Tasks: HS G-C", url: "https://tasks.illustrativemathematics.org/content-standards/HSG" },
    { type: "course", name: "College Board: Pre-AP Geometry framework", url: "https://pre-ap.collegeboard.org/courses/course-descriptions/geometry-with-statistics" },
    { type: "text", name: "Euclid's Elements (Clark Univ. interactive)", url: "https://aleph0.clarku.edu/~djoyce/elements/elements.html" }
  ],
  "math:gGeom-GPE": [
    { type: "khan", name: "Khan Academy: Coordinate Geometry", url: "https://www.khanacademy.org/math/geometry/hs-geo-analytic-geometry" },
    { type: "tool", name: "Desmos: Coordinate Geometry", url: "https://www.desmos.com/calculator" },
    { type: "tool", name: "GeoGebra: Equations of Conics", url: "https://www.geogebra.org/" },
    { type: "practice", name: "IM Tasks: HS G-GPE", url: "https://tasks.illustrativemathematics.org/content-standards/HSG" },
    { type: "course", name: "College Board: Pre-AP Geometry framework", url: "https://pre-ap.collegeboard.org/courses/course-descriptions/geometry-with-statistics" },
    { type: "course", name: "Phillips Exeter Math problem sets", url: "https://www.exeter.edu/mathematics/math-materials" }
  ],
  "math:gGeom-GMD": [
    { type: "khan", name: "Khan Academy: Solid Geometry & Modeling", url: "https://www.khanacademy.org/math/geometry/hs-geo-solids" },
    { type: "video", name: "Math Antics: 3D Shapes & Volume", url: "https://www.mathantics.com/" },
    { type: "tool", name: "GeoGebra: 3D Calculator", url: "https://www.geogebra.org/3d" },
    { type: "practice", name: "IM Tasks: HS G-GMD/MG", url: "https://tasks.illustrativemathematics.org/content-standards/HSG" },
    { type: "course", name: "College Board: Pre-AP Geometry framework", url: "https://pre-ap.collegeboard.org/courses/course-descriptions/geometry-with-statistics" },
    { type: "course", name: "Phillips Exeter Math problem sets", url: "https://www.exeter.edu/mathematics/math-materials" }
  ],
  "math:gGeom-CP": [
    { type: "khan", name: "Khan Academy: Conditional Probability", url: "https://www.khanacademy.org/math/statistics-probability/probability-library" },
    { type: "video", name: "Crash Course Statistics: Conditional Probability", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr" },
    { type: "course", name: "OpenIntro Stats", url: "https://www.openintro.org/book/os/" },
    { type: "practice", name: "IM Tasks: HS S-CP", url: "https://tasks.illustrativemathematics.org/content-standards/HSS" },
    { type: "course", name: "College Board: Pre-AP Geometry framework", url: "https://pre-ap.collegeboard.org/courses/course-descriptions/geometry-with-statistics" },
    { type: "course", name: "OpenIntro: Advanced HS Statistics (free)", url: "https://www.openintro.org/book/ahss/" }
  ],

  // ============================================================
  // MATH · ALGEBRA 2
  // ============================================================
  "math:gAlg2-N": [
    { type: "khan", name: "Khan Academy: Complex Numbers (Alg 2)", url: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:complex" },
    { type: "course", name: "OpenStax: College Algebra", url: "https://openstax.org/details/books/college-algebra" },
    { type: "course", name: "CK-12: Algebra II", url: "https://www.ck12.org/fbbrowse/cbb/algebra-ii/" },
    { type: "video", name: "3Blue1Brown: Complex Numbers Visually", url: "https://www.youtube.com/@3blue1brown" },
    { type: "practice", name: "IM Tasks: HS N-CN", url: "https://tasks.illustrativemathematics.org/content-standards/HSN" },
    { type: "course", name: "College Board: Pre-AP Algebra 2 framework", url: "https://pre-ap.collegeboard.org/courses/course-descriptions/algebra-2" },
    { type: "text", name: "AoPS Online — Alcumus (free adaptive practice)", url: "https://artofproblemsolving.com/alcumus" },
    { type: "course", name: "Saylor Academy — College Algebra", url: "https://learn.saylor.org/course/view.php?id=12" }
  ],
  "math:gAlg2-A": [
    { type: "khan", name: "Khan Academy: Algebra 2", url: "https://www.khanacademy.org/math/algebra2" },
    { type: "course", name: "OpenStax: Intermediate Algebra", url: "https://openstax.org/details/books/intermediate-algebra-2e" },
    { type: "course", name: "OpenStax: College Algebra", url: "https://openstax.org/details/books/college-algebra" },
    { type: "course", name: "CK-12: Algebra II", url: "https://www.ck12.org/fbbrowse/cbb/algebra-ii/" },
    { type: "video", name: "Eddie Woo: Polynomials & Rationals", url: "https://www.youtube.com/@misterwootube" },
    { type: "tool", name: "Desmos: Polynomial Activities", url: "https://teacher.desmos.com/" },
    { type: "practice", name: "IM Tasks: HS Algebra", url: "https://tasks.illustrativemathematics.org/content-standards/HSA" },
    { type: "course", name: "College Board: Pre-AP Algebra 2 framework", url: "https://pre-ap.collegeboard.org/courses/course-descriptions/algebra-2" },
    { type: "course", name: "Phillips Exeter Math 2-3 problem sets", url: "https://www.exeter.edu/mathematics/math-materials" },
    { type: "text", name: "AoPS Online — Alcumus (free adaptive practice)", url: "https://artofproblemsolving.com/alcumus" },
    { type: "course", name: "MIT BLOSSOMS — Algebra video lessons", url: "https://blossoms.mit.edu/videos/by_subject/mathematics" }
  ],
  "math:gAlg2-F": [
    { type: "khan", name: "Khan Academy: Functions (Alg 2)", url: "https://www.khanacademy.org/math/algebra2" },
    { type: "tool", name: "Desmos: Function Transformations", url: "https://teacher.desmos.com/" },
    { type: "video", name: "3Blue1Brown: Calculus & Functions", url: "https://www.youtube.com/@3blue1brown" },
    { type: "video", name: "Eddie Woo: Trig Functions", url: "https://www.youtube.com/@misterwootube" },
    { type: "course", name: "Mathigon: Trigonometry", url: "https://mathigon.org/course/circles/intro" },
    { type: "practice", name: "IM Tasks: HS Functions", url: "https://tasks.illustrativemathematics.org/content-standards/HSF" },
    { type: "course", name: "College Board: Pre-AP Algebra 2 framework", url: "https://pre-ap.collegeboard.org/courses/course-descriptions/algebra-2" },
    { type: "course", name: "Phillips Exeter Math 3-4 problem sets", url: "https://www.exeter.edu/mathematics/math-materials" },
    { type: "text", name: "Better Explained — function deep intuition", url: "https://betterexplained.com/" }
  ],
  "math:gAlg2-SP": [
    { type: "khan", name: "Khan Academy: Statistics (Alg 2)", url: "https://www.khanacademy.org/math/algebra2" },
    { type: "course", name: "OpenIntro Stats (free textbook)", url: "https://www.openintro.org/book/os/" },
    { type: "video", name: "Crash Course Statistics", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr" },
    { type: "tool", name: "Desmos: Stats Activities", url: "https://teacher.desmos.com/" },
    { type: "practice", name: "IM Tasks: HS Statistics", url: "https://tasks.illustrativemathematics.org/content-standards/HSS" },
    { type: "course", name: "OpenIntro: Advanced HS Stats (free textbook)", url: "https://www.openintro.org/book/ahss/" },
    { type: "course", name: "Saylor Academy — Statistics", url: "https://learn.saylor.org/course/view.php?id=53" }
  ],

  // ============================================================
  // MATH · PRE-CALCULUS / AP PRECALCULUS
  // ============================================================
  "math:gPreCalc-PR": [
    { type: "khan", name: "Khan Academy: AP Precalculus", url: "https://www.khanacademy.org/math/ap-precalculus" },
    { type: "course", name: "OpenStax: Precalculus 2e", url: "https://openstax.org/details/books/precalculus-2e" },
    { type: "tool", name: "Desmos: Polynomial & Rational Activities", url: "https://teacher.desmos.com/" },
    { type: "video", name: "Eddie Woo: Polynomials & Rationals", url: "https://www.youtube.com/@misterwootube" },
    { type: "course", name: "★Top  AP Precalculus — Course & Exam Description", url: "https://apcentral.collegeboard.org/courses/ap-precalculus", note: "Official AP CED PDF; full curriculum + sample MCQs/FRQs" },
    { type: "course", name: "Phillips Exeter Math 4 problem sets", url: "https://www.exeter.edu/mathematics/math-materials" },
    { type: "course", name: "MIT OCW: Single Variable Calculus (precalc review)", url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/" },
    { type: "text", name: "Paul's Online Math Notes — Algebra/Trig (precalc review)", url: "https://tutorial.math.lamar.edu/Classes/Alg/Alg.aspx" }
  ],
  "math:gPreCalc-EL": [
    { type: "khan", name: "Khan Academy: Exponential & Logarithmic", url: "https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:logs" },
    { type: "course", name: "OpenStax: Precalculus 2e — Ch 6", url: "https://openstax.org/details/books/precalculus-2e" },
    { type: "video", name: "3Blue1Brown: Exponentials & e", url: "https://www.youtube.com/@3blue1brown" },
    { type: "course", name: "AP Precalculus — Course & Exam Description", url: "https://apcentral.collegeboard.org/courses/ap-precalculus" },
    { type: "text", name: "Better Explained — exponentials & logs", url: "https://betterexplained.com/articles/an-intuitive-guide-to-exponential-functions-e/" },
    { type: "text", name: "Paul's Online Math Notes — Algebra/Exponents-Logs", url: "https://tutorial.math.lamar.edu/Classes/Alg/Alg.aspx" }
  ],
  "math:gPreCalc-TP": [
    { type: "khan", name: "Khan Academy: Trigonometry & Polar", url: "https://www.khanacademy.org/math/trigonometry" },
    { type: "course", name: "Mathigon: Circles & Trig", url: "https://mathigon.org/course/circles/intro" },
    { type: "course", name: "OpenStax: Precalculus 2e — Trig", url: "https://openstax.org/details/books/precalculus-2e" },
    { type: "video", name: "3Blue1Brown: Trig Visualizations", url: "https://www.youtube.com/@3blue1brown" },
    { type: "tool", name: "Desmos: Trig Activities", url: "https://teacher.desmos.com/" },
    { type: "course", name: "AP Precalculus — Course & Exam Description", url: "https://apcentral.collegeboard.org/courses/ap-precalculus" },
    { type: "course", name: "Phillips Exeter Math 3-4 problem sets", url: "https://www.exeter.edu/mathematics/math-materials" },
    { type: "text", name: "Better Explained — Trig", url: "https://betterexplained.com/articles/intuitive-trigonometry/" },
    { type: "text", name: "Paul's Online Math Notes — Trigonometry", url: "https://tutorial.math.lamar.edu/Classes/Alg/Alg.aspx" }
  ],
  "math:gPreCalc-FM": [
    { type: "khan", name: "Khan Academy: AP Precalculus — Functions", url: "https://www.khanacademy.org/math/ap-precalculus" },
    { type: "tool", name: "Desmos: Function Modeling", url: "https://teacher.desmos.com/" },
    { type: "course", name: "OpenStax: Precalculus 2e", url: "https://openstax.org/details/books/precalculus-2e" },
    { type: "course", name: "AP Precalculus — Course & Exam Description", url: "https://apcentral.collegeboard.org/courses/ap-precalculus" },
    { type: "course", name: "Phillips Exeter Math 4 problem sets", url: "https://www.exeter.edu/mathematics/math-materials" },
    { type: "course", name: "MIT BLOSSOMS — Modeling video lessons", url: "https://blossoms.mit.edu/videos/by_subject/mathematics" }
  ],

  // ============================================================
  // MATH · AP CALCULUS AB
  // ============================================================
  "math:gCalcAB-LIM": [
    { type: "khan", name: "Khan Academy: AP Calculus AB", url: "https://www.khanacademy.org/math/ap-calculus-ab" },
    { type: "course", name: "OpenStax: Calculus Volume 1", url: "https://openstax.org/details/books/calculus-volume-1" },
    { type: "video", name: "3Blue1Brown: Essence of Calculus", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
    { type: "video", name: "Professor Leonard: Calculus 1 (full lectures)", url: "https://www.youtube.com/@ProfessorLeonard" },
    { type: "practice", name: "Paul's Online Math Notes — Calc I", url: "https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx" },
    { type: "course", name: "★Top  AP Calculus AB — Course & Exam Description", url: "https://apcentral.collegeboard.org/courses/ap-calculus-ab", note: "Official AP CED PDF; ~280pp, full unit-by-unit framework + sample FRQs" },
    { type: "course", name: "MIT OCW: 18.01 Single Variable Calculus", url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/", note: "Full Stanford-quality free calc course" },
    { type: "course", name: "MIT OCW: 18.01x Calculus 1A (edX)", url: "https://ocw.mit.edu/courses/res-18-001-calculus-online-textbook-spring-2005/", note: "Strang's free Calculus textbook" },
    { type: "text", name: "MIT — Strang Calculus textbook (full PDF, free)", url: "https://ocw.mit.edu/courses/res-18-001-calculus-online-textbook-spring-2005/pages/textbook/" }
  ],
  "math:gCalcAB-DIFF": [
    { type: "khan", name: "Khan Academy: AP Calc AB — Differentiation", url: "https://www.khanacademy.org/math/ap-calculus-ab" },
    { type: "course", name: "OpenStax: Calculus Volume 1 — Ch 3", url: "https://openstax.org/details/books/calculus-volume-1" },
    { type: "video", name: "3Blue1Brown: Derivatives", url: "https://www.youtube.com/@3blue1brown" },
    { type: "practice", name: "Paul's Online Math Notes — Derivatives", url: "https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx" },
    { type: "course", name: "★Top  AP Calculus AB CED — Differentiation units", url: "https://apcentral.collegeboard.org/courses/ap-calculus-ab" },
    { type: "course", name: "MIT OCW: 18.01 Single Variable Calculus", url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/" },
    { type: "text", name: "MIT — Strang Calculus textbook", url: "https://ocw.mit.edu/courses/res-18-001-calculus-online-textbook-spring-2005/pages/textbook/" }
  ],
  "math:gCalcAB-APD": [
    { type: "khan", name: "Khan Academy: AP Calc AB — Applications", url: "https://www.khanacademy.org/math/ap-calculus-ab" },
    { type: "course", name: "OpenStax: Calculus Volume 1 — Ch 4", url: "https://openstax.org/details/books/calculus-volume-1" },
    { type: "video", name: "Professor Leonard: Optimization & Related Rates", url: "https://www.youtube.com/@ProfessorLeonard" },
    { type: "course", name: "AP Calc AB CED — Applications of Differentiation", url: "https://apcentral.collegeboard.org/courses/ap-calculus-ab" },
    { type: "course", name: "MIT OCW: 18.01 Single Variable Calculus", url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/" }
  ],
  "math:gCalcAB-INT": [
    { type: "khan", name: "Khan Academy: AP Calc AB — Integration", url: "https://www.khanacademy.org/math/ap-calculus-ab" },
    { type: "course", name: "OpenStax: Calculus Volume 1 — Ch 5-6", url: "https://openstax.org/details/books/calculus-volume-1" },
    { type: "video", name: "3Blue1Brown: Integration", url: "https://www.youtube.com/@3blue1brown" },
    { type: "practice", name: "Paul's Online Math Notes — Integrals", url: "https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx" },
    { type: "course", name: "AP Calc AB CED — Integration & Accumulation", url: "https://apcentral.collegeboard.org/courses/ap-calculus-ab" },
    { type: "course", name: "MIT OCW: 18.01 Single Variable Calculus", url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/" },
    { type: "text", name: "MIT — Strang Calculus textbook", url: "https://ocw.mit.edu/courses/res-18-001-calculus-online-textbook-spring-2005/pages/textbook/" }
  ],

  // ============================================================
  // MATH · AP CALCULUS BC
  // ============================================================
  "math:gCalcBC-AB": [
    { type: "khan", name: "Khan Academy: AP Calculus BC", url: "https://www.khanacademy.org/math/ap-calculus-bc" },
    { type: "course", name: "OpenStax: Calculus Volume 1", url: "https://openstax.org/details/books/calculus-volume-1" },
    { type: "video", name: "3Blue1Brown: Essence of Calculus", url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr" },
    { type: "course", name: "★Top  AP Calculus BC — Course & Exam Description", url: "https://apcentral.collegeboard.org/courses/ap-calculus-bc", note: "Official AP CED PDF; superset of AB + parametric, polar, vector, series" },
    { type: "course", name: "MIT OCW: 18.01 Single Variable Calculus", url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/" }
  ],
  "math:gCalcBC-PPV": [
    { type: "khan", name: "Khan Academy: BC — Parametric / Polar / Vector", url: "https://www.khanacademy.org/math/ap-calculus-bc" },
    { type: "course", name: "OpenStax: Calculus Volume 2 — Ch 1-2 (parametric/polar)", url: "https://openstax.org/details/books/calculus-volume-2" },
    { type: "course", name: "OpenStax: Calculus Volume 3 — Ch 2-3 (vectors)", url: "https://openstax.org/details/books/calculus-volume-3" },
    { type: "tool", name: "Desmos: Parametric & Polar Plotter", url: "https://www.desmos.com/calculator" },
    { type: "course", name: "AP Calc BC CED — Parametric, Polar, Vector", url: "https://apcentral.collegeboard.org/courses/ap-calculus-bc" },
    { type: "course", name: "MIT OCW: 18.02 Multivariable Calculus (vector fields)", url: "https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/" }
  ],
  "math:gCalcBC-SER": [
    { type: "khan", name: "Khan Academy: BC — Series", url: "https://www.khanacademy.org/math/ap-calculus-bc" },
    { type: "course", name: "OpenStax: Calculus Volume 2 — Ch 5-6 (series)", url: "https://openstax.org/details/books/calculus-volume-2" },
    { type: "video", name: "3Blue1Brown: Taylor Series Visualized", url: "https://www.youtube.com/@3blue1brown" },
    { type: "video", name: "Professor Leonard: Series convergence tests", url: "https://www.youtube.com/@ProfessorLeonard" },
    { type: "course", name: "AP Calc BC CED — Sequences & Series", url: "https://apcentral.collegeboard.org/courses/ap-calculus-bc" },
    { type: "course", name: "MIT OCW: 18.01 Single Variable Calculus — Series", url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/" },
    { type: "text", name: "Paul's Online Math Notes — Series & Sequences", url: "https://tutorial.math.lamar.edu/Classes/CalcII/CalcII.aspx" }
  ],

  // ============================================================
  // MATH · AP STATISTICS
  // ============================================================
  "math:gStats-1D": [
    { type: "khan", name: "Khan Academy: AP Statistics", url: "https://www.khanacademy.org/math/ap-statistics" },
    { type: "course", name: "OpenIntro Statistics (free textbook)", url: "https://www.openintro.org/book/os/" },
    { type: "video", name: "Crash Course Statistics", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr" },
    { type: "tool", name: "Desmos: Statistics Activities", url: "https://teacher.desmos.com/" },
    { type: "course", name: "★Top  AP Statistics — Course & Exam Description", url: "https://apcentral.collegeboard.org/courses/ap-statistics", note: "Official AP CED PDF; 9 units + AP Stats Investigative Tasks" },
    { type: "course", name: "OpenIntro: Advanced HS Statistics (AP Stats-aligned)", url: "https://www.openintro.org/book/ahss/", note: "Free textbook explicitly written to AP Stats curriculum" },
    { type: "course", name: "MIT OCW: Introduction to Probability and Statistics", url: "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/" }
  ],
  "math:gStats-2D": [
    { type: "khan", name: "Khan Academy: AP Stats — Two-Variable Data", url: "https://www.khanacademy.org/math/ap-statistics" },
    { type: "course", name: "OpenIntro Statistics", url: "https://www.openintro.org/book/os/" },
    { type: "tool", name: "Desmos: Linear Regression Activity", url: "https://www.desmos.com/calculator" },
    { type: "course", name: "AP Statistics CED — Exploring Two-Variable Data", url: "https://apcentral.collegeboard.org/courses/ap-statistics" },
    { type: "course", name: "OpenIntro: Advanced HS Stats (Ch 8: regression)", url: "https://www.openintro.org/book/ahss/" }
  ],
  "math:gStats-SAMP": [
    { type: "khan", name: "Khan Academy: AP Stats — Sampling & Experiments", url: "https://www.khanacademy.org/math/ap-statistics" },
    { type: "course", name: "OpenIntro Statistics", url: "https://www.openintro.org/book/os/" },
    { type: "course", name: "AP Statistics CED — Sampling & Experimentation", url: "https://apcentral.collegeboard.org/courses/ap-statistics" },
    { type: "course", name: "OpenIntro: Advanced HS Stats — Ch 1, 2", url: "https://www.openintro.org/book/ahss/" }
  ],
  "math:gStats-PROB": [
    { type: "khan", name: "Khan Academy: AP Stats — Probability", url: "https://www.khanacademy.org/math/ap-statistics" },
    { type: "course", name: "OpenIntro Statistics — Ch 3-4", url: "https://www.openintro.org/book/os/" },
    { type: "video", name: "Crash Course Statistics: Probability", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr" },
    { type: "course", name: "AP Statistics CED — Probability & Distributions", url: "https://apcentral.collegeboard.org/courses/ap-statistics" },
    { type: "course", name: "OpenIntro: Advanced HS Stats — Ch 3-4", url: "https://www.openintro.org/book/ahss/" }
  ],
  "math:gStats-INF": [
    { type: "khan", name: "Khan Academy: AP Stats — Inference", url: "https://www.khanacademy.org/math/ap-statistics" },
    { type: "course", name: "OpenIntro Statistics — Inference chapters", url: "https://www.openintro.org/book/os/" },
    { type: "video", name: "Crash Course Statistics: Hypothesis Testing", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNM_Y-bUAhblSAdWRnmBUcr" },
    { type: "course", name: "AP Statistics CED — Inference units", url: "https://apcentral.collegeboard.org/courses/ap-statistics" },
    { type: "course", name: "OpenIntro: Advanced HS Stats — Ch 5-9 (inference)", url: "https://www.openintro.org/book/ahss/" },
    { type: "course", name: "MIT OCW: 18.05 Probability & Statistics — inference", url: "https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2014/" }
  ],

  // ============================================================
  // ELA · KINDERGARTEN
  // ============================================================
  "ela:gK-RL": [
    { type: "foundational", name: "Khan Academy Kids (free app, K–2)", url: "https://learn.khanacademy.org/khan-academy-kids/" },
    { type: "text", name: "Storyline Online — actor-narrated read-alouds", url: "https://storylineonline.net/" },
    { type: "text", name: "Unite for Literacy — free K–2 picture books", url: "https://www.uniteforliteracy.com/" },
    { type: "text", name: "ReadWorks K-Ready Reading", url: "https://www.readworks.org/", note: "Free passages, audio support, comprehension Qs" },
    { type: "text", name: "International Children's Digital Library", url: "https://www.childrenslibrary.org/" },
    { type: "text", name: "Reading Rockets: Recommended Books", url: "https://www.readingrockets.org/booksauthors/booksbytheme" },
    { type: "video", name: "PBS Kids: Story Time", url: "https://pbskids.org/" },
    { type: "open", name: "EngageNY/NYSED ELA — Kindergarten modules", url: "https://www.engageny.org/resource/kindergarten-english-language-arts", note: "Free K-5 module library (CCSS-aligned)" },
    { type: "free", name: "Storynory — free audio stories", url: "https://www.storynory.com/" }
  ],
  "ela:gK-RI": [
    { type: "foundational", name: "Khan Academy Kids", url: "https://learn.khanacademy.org/khan-academy-kids/" },
    { type: "text", name: "Wonderopolis — Wonder of the Day", url: "https://www.wonderopolis.org/" },
    { type: "text", name: "ReadWorks (audio + Qs)", url: "https://www.readworks.org/" },
    { type: "text", name: "National Geographic Kids", url: "https://kids.nationalgeographic.com/" },
    { type: "text", name: "Smithsonian TweenTribune (lower lex)", url: "https://www.tweentribune.com/" },
    { type: "video", name: "PBS Kids: Informational shorts", url: "https://pbskids.org/" },
    { type: "open", name: "EngageNY/NYSED — K Listening & Learning", url: "https://www.engageny.org/resource/kindergarten-english-language-arts" },
    { type: "free", name: "DOGOnews Jr. (read-aloud current events)", url: "https://www.dogonews.com/" }
  ],
  "ela:gK-RF": [
    { type: "foundational", name: "UFLI Foundations — free K–2 phonics scope", url: "https://education.ufl.edu/ufli/foundations/free-resources/", note: "Lesson PDFs, decodables, virtual manipulatives" },
    { type: "foundational", name: "Florida Center for Reading Research (FCRR) — Student Center Activities", url: "https://fcrr.org/student-center-activities", note: "K–1 PA, phonics, fluency, vocab, comprehension activity packets" },
    { type: "foundational", name: "Heggerty Bridge the Gap — free PA scope", url: "https://heggerty.org/", note: "Daily phonemic awareness routines" },
    { type: "foundational", name: "Reading Rockets: Phonological Awareness", url: "https://www.readingrockets.org/topics/phonological-and-phonemic-awareness" },
    { type: "foundational", name: "Reading Rockets: Phonics", url: "https://www.readingrockets.org/topics/phonics-and-decoding" },
    { type: "foundational", name: "Khan Academy Kids", url: "https://learn.khanacademy.org/khan-academy-kids/" },
    { type: "tool", name: "Starfall — free phonics games", url: "https://www.starfall.com/" },
    { type: "tool", name: "ReadingBear — decoding + vocab", url: "https://www.readingbear.org/" },
    { type: "video", name: "Alphablocks (BBC) on YouTube", url: "https://www.youtube.com/@officialalphablocks" },
    { type: "open", name: "ProgressivePhonics — free decodables", url: "http://www.progressivephonics.com/" }
  ],
  "ela:gK-W": [
    { type: "foundational", name: "Reading Rockets: Writing K–3", url: "https://www.readingrockets.org/topics/writing" },
    { type: "foundational", name: "Khan Academy Kids — drawing & writing tools", url: "https://learn.khanacademy.org/khan-academy-kids/" },
    { type: "course", name: "ReadWriteThink (NCTE/IRA) — K–2 writing lessons", url: "https://www.readwritethink.org/" },
    { type: "open", name: "EngageNY/NYSED K writing modules", url: "https://www.engageny.org/resource/kindergarten-english-language-arts" },
    { type: "tool", name: "The Measured Mom — free writing printables", url: "https://www.themeasuredmom.com/" }
  ],
  "ela:gK-SL": [
    { type: "foundational", name: "Colorín Colorado: Oral Language", url: "https://www.colorincolorado.org/oral-language" },
    { type: "foundational", name: "Reading Rockets: Discussion Strategies", url: "https://www.readingrockets.org/strategies" },
    { type: "video", name: "Storyline Online (model fluent read-aloud + discussion)", url: "https://storylineonline.net/" },
    { type: "video", name: "PBS Kids — short conversation-prompt clips", url: "https://pbskids.org/" }
  ],
  "ela:gK-L": [
    { type: "foundational", name: "Khan Academy Kids", url: "https://learn.khanacademy.org/khan-academy-kids/" },
    { type: "foundational", name: "FCRR Vocabulary Activities (K–1)", url: "https://fcrr.org/student-center-activities" },
    { type: "tool", name: "Vocabulary.com (free word games)", url: "https://www.vocabulary.com/" },
    { type: "video", name: "Sesame Street — Word of the Day", url: "https://www.youtube.com/@SesameStreet" },
    { type: "free", name: "Merriam-Webster: Word Central", url: "https://wordcentral.com/" }
  ],

  // ============================================================
  // ELA · GRADE 1
  // ============================================================
  "ela:g1-RL": [
    { type: "foundational", name: "Khan Academy Kids", url: "https://learn.khanacademy.org/khan-academy-kids/" },
    { type: "text", name: "ReadWorks (passages + audio)", url: "https://www.readworks.org/" },
    { type: "text", name: "Storyline Online", url: "https://storylineonline.net/" },
    { type: "text", name: "Unite for Literacy — free books w/ narration", url: "https://www.uniteforliteracy.com/" },
    { type: "text", name: "International Children's Digital Library", url: "https://www.childrenslibrary.org/" },
    { type: "video", name: "Reading Rockets: Comprehension Strategies", url: "https://www.readingrockets.org/strategies" },
    { type: "open", name: "EngageNY/NYSED — Grade 1 ELA modules", url: "https://www.engageny.org/resource/grade-1-english-language-arts" },
    { type: "free", name: "Storynory audio stories", url: "https://www.storynory.com/" }
  ],
  "ela:g1-RI": [
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "Wonderopolis", url: "https://www.wonderopolis.org/" },
    { type: "text", name: "National Geographic Kids", url: "https://kids.nationalgeographic.com/" },
    { type: "text", name: "Newsela (free educator tier)", url: "https://newsela.com/" },
    { type: "text", name: "Smithsonian TweenTribune", url: "https://www.tweentribune.com/" },
    { type: "open", name: "EngageNY/NYSED Grade 1 Listening & Learning", url: "https://www.engageny.org/resource/grade-1-english-language-arts" },
    { type: "free", name: "DOGOnews", url: "https://www.dogonews.com/" }
  ],
  "ela:g1-RF": [
    { type: "foundational", name: "UFLI Foundations — Grade 1 scope", url: "https://education.ufl.edu/ufli/foundations/free-resources/" },
    { type: "foundational", name: "FCRR Student Center Activities (Gr 1)", url: "https://fcrr.org/student-center-activities" },
    { type: "foundational", name: "Heggerty PA — Primary level", url: "https://heggerty.org/" },
    { type: "foundational", name: "Reading Rockets: Phonics", url: "https://www.readingrockets.org/topics/phonics-and-decoding" },
    { type: "tool", name: "Starfall — phonics games", url: "https://www.starfall.com/" },
    { type: "tool", name: "ReadingBear — decoding + vocab videos", url: "https://www.readingbear.org/" },
    { type: "video", name: "Alphablocks (BBC)", url: "https://www.youtube.com/@officialalphablocks" },
    { type: "open", name: "ProgressivePhonics — free decodables", url: "http://www.progressivephonics.com/" }
  ],
  "ela:g1-W": [
    { type: "foundational", name: "Reading Rockets: Writing K–3", url: "https://www.readingrockets.org/topics/writing" },
    { type: "course", name: "ReadWriteThink (NCTE/IRA) — Gr 1 writing lessons", url: "https://www.readwritethink.org/" },
    { type: "open", name: "EngageNY/NYSED Grade 1 writing modules", url: "https://www.engageny.org/resource/grade-1-english-language-arts" },
    { type: "tool", name: "The Measured Mom — writing printables", url: "https://www.themeasuredmom.com/" },
    { type: "video", name: "Read Aloud Revival — writing models", url: "https://www.readaloudrevival.com/" }
  ],
  "ela:g1-SL": [
    { type: "foundational", name: "Colorín Colorado", url: "https://www.colorincolorado.org/oral-language" },
    { type: "video", name: "Storyline Online", url: "https://storylineonline.net/" },
    { type: "video", name: "PBS Kids: Discussion clips", url: "https://pbskids.org/" }
  ],
  "ela:g1-L": [
    { type: "khan", name: "Khan Academy: Grammar (covers K–12)", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "foundational", name: "Khan Academy Kids", url: "https://learn.khanacademy.org/khan-academy-kids/" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "foundational", name: "FCRR Vocabulary (Gr 1)", url: "https://fcrr.org/student-center-activities" },
    { type: "free", name: "Merriam-Webster Word Central (kid dict.)", url: "https://wordcentral.com/" }
  ],

  // ============================================================
  // ELA · GRADE 2
  // ============================================================
  "ela:g2-RL": [
    { type: "khan", name: "Khan Academy: 2nd Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-2nd-reading-vocab" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "CommonLit (Gr 3+ baseline; some Gr 2 passages)", url: "https://www.commonlit.org/" },
    { type: "text", name: "Storyline Online", url: "https://storylineonline.net/" },
    { type: "text", name: "Unite for Literacy", url: "https://www.uniteforliteracy.com/" },
    { type: "video", name: "Reading Rockets: Strategies", url: "https://www.readingrockets.org/strategies" },
    { type: "open", name: "EngageNY/NYSED — Grade 2 ELA modules", url: "https://www.engageny.org/resource/grade-2-english-language-arts" },
    { type: "free", name: "Storynory audio stories", url: "https://www.storynory.com/" }
  ],
  "ela:g2-RI": [
    { type: "khan", name: "Khan Academy: 2nd Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-2nd-reading-vocab" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "Wonderopolis", url: "https://www.wonderopolis.org/" },
    { type: "text", name: "National Geographic Kids", url: "https://kids.nationalgeographic.com/" },
    { type: "text", name: "Newsela (free tier)", url: "https://newsela.com/" },
    { type: "text", name: "TweenTribune", url: "https://www.tweentribune.com/" },
    { type: "free", name: "DOGOnews", url: "https://www.dogonews.com/" },
    { type: "open", name: "EngageNY/NYSED Gr 2 Listening & Learning", url: "https://www.engageny.org/resource/grade-2-english-language-arts" }
  ],
  "ela:g2-RF": [
    { type: "foundational", name: "UFLI Foundations — Grade 2 scope", url: "https://education.ufl.edu/ufli/foundations/free-resources/" },
    { type: "foundational", name: "FCRR Activities (Gr 2–3)", url: "https://fcrr.org/student-center-activities" },
    { type: "foundational", name: "Reading Rockets: Fluency", url: "https://www.readingrockets.org/topics/fluency" },
    { type: "tool", name: "ReadingBear", url: "https://www.readingbear.org/" },
    { type: "tool", name: "Starfall", url: "https://www.starfall.com/" },
    { type: "open", name: "ProgressivePhonics — advanced decodables", url: "http://www.progressivephonics.com/" }
  ],
  "ela:g2-W": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "ReadWriteThink — Gr 2 writing", url: "https://www.readwritethink.org/" },
    { type: "foundational", name: "Reading Rockets: Writing", url: "https://www.readingrockets.org/topics/writing" },
    { type: "open", name: "EngageNY/NYSED Gr 2 writing modules", url: "https://www.engageny.org/resource/grade-2-english-language-arts" },
    { type: "tool", name: "Quill.org Writing — free for educators", url: "https://www.quill.org/" }
  ],
  "ela:g2-SL": [
    { type: "foundational", name: "Colorín Colorado: Oral Language", url: "https://www.colorincolorado.org/oral-language" },
    { type: "video", name: "Storyline Online", url: "https://storylineonline.net/" },
    { type: "video", name: "TED-Ed (short videos for discussion)", url: "https://ed.ted.com/" }
  ],
  "ela:g2-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "khan", name: "Khan Academy: 2nd Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-2nd-reading-vocab" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Quill.org Grammar", url: "https://www.quill.org/" },
    { type: "foundational", name: "FCRR Vocabulary (Gr 2–3)", url: "https://fcrr.org/student-center-activities" },
    { type: "free", name: "Merriam-Webster Word Central", url: "https://wordcentral.com/" }
  ],

  // ============================================================
  // ELA · GRADE 3
  // ============================================================
  "ela:g3-RL": [
    { type: "khan", name: "Khan Academy: 3rd Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-3rd-reading-vocab" },
    { type: "text", name: "ReadWorks (passages + audio + Qs)", url: "https://www.readworks.org/" },
    { type: "text", name: "CommonLit — full Gr 3+ library", url: "https://www.commonlit.org/", note: "Free; passages + assessment + paired texts" },
    { type: "text", name: "Storyline Online", url: "https://storylineonline.net/" },
    { type: "text", name: "Project Gutenberg — classic children's lit", url: "https://www.gutenberg.org/" },
    { type: "open", name: "EngageNY/NYSED Grade 3 ELA modules", url: "https://www.engageny.org/resource/grade-3-english-language-arts" },
    { type: "open", name: "Achieve the Core — Gr 3 read-aloud + tasks", url: "https://achievethecore.org/category/411/ela-literacy-lessons" }
  ],
  "ela:g3-RI": [
    { type: "khan", name: "Khan Academy: 3rd Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-3rd-reading-vocab" },
    { type: "text", name: "Newsela (free tier)", url: "https://newsela.com/" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "CommonLit informational set", url: "https://www.commonlit.org/" },
    { type: "text", name: "Wonderopolis", url: "https://www.wonderopolis.org/" },
    { type: "text", name: "National Geographic Kids", url: "https://kids.nationalgeographic.com/" },
    { type: "text", name: "TweenTribune (Smithsonian)", url: "https://www.tweentribune.com/" },
    { type: "open", name: "Library of Congress: Teachers", url: "https://www.loc.gov/programs/teachers/", note: "Primary source sets for elementary" }
  ],
  "ela:g3-RF": [
    { type: "foundational", name: "Reading Rockets: Fluency", url: "https://www.readingrockets.org/topics/fluency" },
    { type: "foundational", name: "FCRR Gr 2–3 Activities", url: "https://fcrr.org/student-center-activities" },
    { type: "tool", name: "ReadingBear (advanced phonics)", url: "https://www.readingbear.org/" },
    { type: "tool", name: "Starfall", url: "https://www.starfall.com/" },
    { type: "open", name: "ProgressivePhonics — Intermediate", url: "http://www.progressivephonics.com/" }
  ],
  "ela:g3-W": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "ReadWriteThink (NCTE/IRA) — free lessons", url: "https://www.readwritethink.org/" },
    { type: "course", name: "Time4Writing — free writing resources", url: "https://www.time4writing.com/free-writing-resources/" },
    { type: "tool", name: "Quill.org — sentence + paragraph practice", url: "https://www.quill.org/" },
    { type: "foundational", name: "Reading Rockets: Writing", url: "https://www.readingrockets.org/topics/writing" },
    { type: "open", name: "EngageNY/NYSED Grade 3 writing modules", url: "https://www.engageny.org/resource/grade-3-english-language-arts" }
  ],
  "ela:g3-SL": [
    { type: "foundational", name: "Colorín Colorado: Oral Language", url: "https://www.colorincolorado.org/oral-language" },
    { type: "video", name: "TED-Ed (short clips for discussion)", url: "https://ed.ted.com/" },
    { type: "video", name: "Storyline Online", url: "https://storylineonline.net/" }
  ],
  "ela:g3-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "khan", name: "Khan Academy: 3rd Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-3rd-reading-vocab" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Quill.org — grammar practice", url: "https://www.quill.org/" },
    { type: "tool", name: "Membean (free trial)", url: "https://membean.com/", note: "Adaptive vocab" },
    { type: "tool", name: "Quizlet — free vocab decks", url: "https://quizlet.com/" }
  ],

  // ============================================================
  // ELA · GRADE 4
  // ============================================================
  "ela:g4-RL": [
    { type: "khan", name: "Khan Academy: 4th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-4th-reading-vocab" },
    { type: "text", name: "CommonLit", url: "https://www.commonlit.org/" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "Project Gutenberg", url: "https://www.gutenberg.org/" },
    { type: "text", name: "Storyline Online", url: "https://storylineonline.net/" },
    { type: "open", name: "EngageNY/NYSED Grade 4 ELA modules", url: "https://www.engageny.org/resource/grade-4-english-language-arts" },
    { type: "open", name: "Achieve the Core — Gr 4 close-reading tasks", url: "https://achievethecore.org/category/411/ela-literacy-lessons" }
  ],
  "ela:g4-RI": [
    { type: "khan", name: "Khan Academy: 4th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-4th-reading-vocab" },
    { type: "text", name: "Newsela (free tier)", url: "https://newsela.com/" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "CommonLit informational", url: "https://www.commonlit.org/" },
    { type: "text", name: "TweenTribune", url: "https://www.tweentribune.com/" },
    { type: "text", name: "DOGOnews (free for educators)", url: "https://www.dogonews.com/" },
    { type: "text", name: "Wonderopolis", url: "https://www.wonderopolis.org/" },
    { type: "open", name: "Library of Congress: Teachers", url: "https://www.loc.gov/programs/teachers/" }
  ],
  "ela:g4-RF": [
    { type: "foundational", name: "Reading Rockets: Fluency", url: "https://www.readingrockets.org/topics/fluency" },
    { type: "foundational", name: "FCRR Gr 4–5", url: "https://fcrr.org/student-center-activities" },
    { type: "tool", name: "ReadingBear (advanced phonics, morphology)", url: "https://www.readingbear.org/" }
  ],
  "ela:g4-W": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "ReadWriteThink — Gr 4 writing", url: "https://www.readwritethink.org/" },
    { type: "course", name: "Time4Writing — free resources", url: "https://www.time4writing.com/free-writing-resources/" },
    { type: "tool", name: "NoRedInk (free school plan)", url: "https://www.noredink.com/", note: "Adaptive grammar/writing" },
    { type: "tool", name: "Quill.org — sentence/paragraph", url: "https://www.quill.org/" },
    { type: "open", name: "EngageNY/NYSED Grade 4 writing modules", url: "https://www.engageny.org/resource/grade-4-english-language-arts" }
  ],
  "ela:g4-SL": [
    { type: "video", name: "TED-Ed", url: "https://ed.ted.com/" },
    { type: "foundational", name: "Colorín Colorado", url: "https://www.colorincolorado.org/oral-language" },
    { type: "video", name: "C-SPAN Classroom — Bell Ringers", url: "https://www.c-span.org/classroom/" }
  ],
  "ela:g4-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "khan", name: "Khan Academy: 4th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-4th-reading-vocab" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Quill.org grammar", url: "https://www.quill.org/" },
    { type: "tool", name: "Quizlet", url: "https://quizlet.com/" },
    { type: "tool", name: "Membean", url: "https://membean.com/" }
  ],

  // ============================================================
  // ELA · GRADE 5
  // ============================================================
  "ela:g5-RL": [
    { type: "khan", name: "Khan Academy: 5th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-5th-reading-vocab" },
    { type: "text", name: "CommonLit", url: "https://www.commonlit.org/" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "Project Gutenberg", url: "https://www.gutenberg.org/" },
    { type: "text", name: "Library of Congress: Children's Literature", url: "https://www.loc.gov/" },
    { type: "open", name: "EngageNY/NYSED Grade 5 ELA modules", url: "https://www.engageny.org/resource/grade-5-english-language-arts" },
    { type: "open", name: "Achieve the Core — Gr 5 read-aloud + tasks", url: "https://achievethecore.org/category/411/ela-literacy-lessons" }
  ],
  "ela:g5-RI": [
    { type: "khan", name: "Khan Academy: 5th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-5th-reading-vocab" },
    { type: "text", name: "Newsela", url: "https://newsela.com/" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "CommonLit informational", url: "https://www.commonlit.org/" },
    { type: "text", name: "TweenTribune", url: "https://www.tweentribune.com/" },
    { type: "text", name: "DOGOnews", url: "https://www.dogonews.com/" },
    { type: "open", name: "Library of Congress — primary source sets", url: "https://www.loc.gov/programs/teachers/" },
    { type: "open", name: "Smithsonian Learning Lab", url: "https://learninglab.si.edu/" }
  ],
  "ela:g5-RF": [
    { type: "foundational", name: "Reading Rockets: Fluency", url: "https://www.readingrockets.org/topics/fluency" },
    { type: "foundational", name: "FCRR Gr 4–5", url: "https://fcrr.org/student-center-activities" }
  ],
  "ela:g5-W": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "ReadWriteThink", url: "https://www.readwritethink.org/" },
    { type: "course", name: "Time4Writing free", url: "https://www.time4writing.com/free-writing-resources/" },
    { type: "course", name: "Purdue OWL — General Writing (Gr 5+)", url: "https://owl.purdue.edu/owl/general_writing/" },
    { type: "tool", name: "NoRedInk (free school plan)", url: "https://www.noredink.com/" },
    { type: "tool", name: "Quill.org", url: "https://www.quill.org/" },
    { type: "open", name: "EngageNY/NYSED Grade 5 writing modules", url: "https://www.engageny.org/resource/grade-5-english-language-arts" }
  ],
  "ela:g5-SL": [
    { type: "video", name: "TED-Ed", url: "https://ed.ted.com/" },
    { type: "video", name: "C-SPAN Classroom", url: "https://www.c-span.org/classroom/" },
    { type: "foundational", name: "Colorín Colorado", url: "https://www.colorincolorado.org/oral-language" }
  ],
  "ela:g5-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "khan", name: "Khan Academy: 5th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-5th-reading-vocab" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Quill.org grammar", url: "https://www.quill.org/" },
    { type: "tool", name: "Membean", url: "https://membean.com/" },
    { type: "tool", name: "Quizlet", url: "https://quizlet.com/" }
  ],

  // ============================================================
  // ELA · GRADE 6
  // ============================================================
  "ela:g6-RL": [
    { type: "khan", name: "Khan Academy: 6th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-6th-reading-vocab" },
    { type: "text", name: "CommonLit (HS-track passages from Gr 6)", url: "https://www.commonlit.org/" },
    { type: "text", name: "ReadWorks", url: "https://www.readworks.org/" },
    { type: "text", name: "Project Gutenberg", url: "https://www.gutenberg.org/" },
    { type: "text", name: "Folger Shakespeare — free editions", url: "https://www.folger.edu/explore/shakespeares-works/" },
    { type: "text", name: "Poetry Foundation", url: "https://www.poetryfoundation.org/" },
    { type: "text", name: "Poetry Out Loud — anthology + lessons", url: "https://www.poetryoutloud.org/" },
    { type: "open", name: "EngageNY/NYSED Grade 6 ELA modules", url: "https://www.engageny.org/resource/grade-6-english-language-arts" },
    { type: "open", name: "Achieve the Core — Gr 6 close-reading tasks", url: "https://achievethecore.org/category/411/ela-literacy-lessons" }
  ],
  "ela:g6-RI": [
    { type: "khan", name: "Khan Academy: 6th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-6th-reading-vocab" },
    { type: "text", name: "Newsela", url: "https://newsela.com/" },
    { type: "text", name: "CommonLit (informational)", url: "https://www.commonlit.org/" },
    { type: "text", name: "TweenTribune (Smithsonian)", url: "https://www.tweentribune.com/" },
    { type: "text", name: "Britannica ProCon", url: "https://www.procon.org/", note: "Argument analysis: pro/con frameworks" },
    { type: "text", name: "Library of Congress: Teachers", url: "https://www.loc.gov/programs/teachers/" },
    { type: "open", name: "EDSITEment (NEH) — free middle-school lessons", url: "https://edsitement.neh.gov/" },
    { type: "open", name: "Smithsonian Learning Lab", url: "https://learninglab.si.edu/" }
  ],
  "ela:g6-W": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "Purdue OWL — General Writing", url: "https://owl.purdue.edu/owl/general_writing/" },
    { type: "course", name: "ReadWriteThink (NCTE/IRA)", url: "https://www.readwritethink.org/" },
    { type: "tool", name: "NoRedInk (free school plan)", url: "https://www.noredink.com/" },
    { type: "tool", name: "Quill.org", url: "https://www.quill.org/" },
    { type: "tool", name: "Hemingway Editor — free in-browser", url: "https://hemingwayapp.com/", note: "Highlights long sentences, passive voice, complex words" },
    { type: "open", name: "EngageNY/NYSED Grade 6 writing modules", url: "https://www.engageny.org/resource/grade-6-english-language-arts" }
  ],
  "ela:g6-SL": [
    { type: "video", name: "TED-Ed (lessons + discussion Qs)", url: "https://ed.ted.com/" },
    { type: "video", name: "C-SPAN Classroom (free)", url: "https://www.c-span.org/classroom/" },
    { type: "course", name: "National Speech & Debate Association — Student Resources", url: "https://www.speechanddebate.org/student-resources/" }
  ],
  "ela:g6-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "khan", name: "Khan Academy: 6th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-6th-reading-vocab" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Membean", url: "https://membean.com/" },
    { type: "tool", name: "Quill.org — grammar drill", url: "https://www.quill.org/" },
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
    { type: "text", name: "Poetry Out Loud", url: "https://www.poetryoutloud.org/" },
    { type: "text", name: "Folger Shakespeare (free editions + lesson plans)", url: "https://www.folger.edu/explore/shakespeares-works/" },
    { type: "open", name: "EngageNY/NYSED Grade 7 ELA modules", url: "https://www.engageny.org/resource/grade-7-english-language-arts" },
    { type: "open", name: "Achieve the Core — Gr 7 close-reading tasks", url: "https://achievethecore.org/category/411/ela-literacy-lessons" }
  ],
  "ela:g7-RI": [
    { type: "khan", name: "Khan Academy: 7th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-7th-reading-vocab" },
    { type: "text", name: "Newsela", url: "https://newsela.com/" },
    { type: "text", name: "CommonLit", url: "https://www.commonlit.org/" },
    { type: "text", name: "Britannica ProCon", url: "https://www.procon.org/" },
    { type: "text", name: "Library of Congress: Teachers", url: "https://www.loc.gov/programs/teachers/" },
    { type: "text", name: "EDSITEment (NEH)", url: "https://edsitement.neh.gov/" },
    { type: "open", name: "Smithsonian Learning Lab", url: "https://learninglab.si.edu/" }
  ],
  "ela:g7-W": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "Purdue OWL — General Writing", url: "https://owl.purdue.edu/owl/general_writing/" },
    { type: "course", name: "ReadWriteThink", url: "https://www.readwritethink.org/" },
    { type: "tool", name: "NoRedInk (free school plan)", url: "https://www.noredink.com/" },
    { type: "tool", name: "Quill.org", url: "https://www.quill.org/" },
    { type: "tool", name: "Hemingway Editor", url: "https://hemingwayapp.com/" },
    { type: "open", name: "EngageNY/NYSED Grade 7 writing modules", url: "https://www.engageny.org/resource/grade-7-english-language-arts" }
  ],
  "ela:g7-SL": [
    { type: "video", name: "TED-Ed", url: "https://ed.ted.com/" },
    { type: "video", name: "C-SPAN Classroom", url: "https://www.c-span.org/classroom/" },
    { type: "course", name: "National Speech & Debate Association", url: "https://www.speechanddebate.org/student-resources/" }
  ],
  "ela:g7-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "khan", name: "Khan Academy: 7th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-7th-reading-vocab" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Membean", url: "https://membean.com/" },
    { type: "tool", name: "Quill.org grammar", url: "https://www.quill.org/" },
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
    { type: "text", name: "Folger Shakespeare", url: "https://www.folger.edu/explore/shakespeares-works/" },
    { type: "text", name: "Poetry Out Loud — recitation anthology", url: "https://www.poetryoutloud.org/" },
    { type: "open", name: "EngageNY/NYSED Grade 8 ELA modules", url: "https://www.engageny.org/resource/grade-8-english-language-arts" },
    { type: "open", name: "Achieve the Core — Gr 8 close-reading tasks", url: "https://achievethecore.org/category/411/ela-literacy-lessons" }
  ],
  "ela:g8-RI": [
    { type: "khan", name: "Khan Academy: 8th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-8th-reading-vocab" },
    { type: "text", name: "Newsela", url: "https://newsela.com/" },
    { type: "text", name: "CommonLit", url: "https://www.commonlit.org/" },
    { type: "text", name: "Britannica ProCon", url: "https://www.procon.org/" },
    { type: "text", name: "Library of Congress: Teachers", url: "https://www.loc.gov/programs/teachers/" },
    { type: "text", name: "EDSITEment (NEH)", url: "https://edsitement.neh.gov/" },
    { type: "open", name: "Smithsonian Learning Lab", url: "https://learninglab.si.edu/" },
    { type: "open", name: "iCivics — argument & civic literacy (free)", url: "https://www.icivics.org/" }
  ],
  "ela:g8-W": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "Purdue OWL — General Writing", url: "https://owl.purdue.edu/owl/general_writing/" },
    { type: "course", name: "Purdue OWL — Argument Papers", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/argument_papers/" },
    { type: "course", name: "ReadWriteThink", url: "https://www.readwritethink.org/" },
    { type: "tool", name: "NoRedInk (free school plan)", url: "https://www.noredink.com/" },
    { type: "tool", name: "Quill.org", url: "https://www.quill.org/" },
    { type: "tool", name: "Hemingway Editor", url: "https://hemingwayapp.com/" },
    { type: "open", name: "EngageNY/NYSED Grade 8 writing modules", url: "https://www.engageny.org/resource/grade-8-english-language-arts" }
  ],
  "ela:g8-SL": [
    { type: "video", name: "TED-Ed", url: "https://ed.ted.com/" },
    { type: "video", name: "C-SPAN Classroom", url: "https://www.c-span.org/classroom/" },
    { type: "course", name: "National Speech & Debate Association", url: "https://www.speechanddebate.org/student-resources/" }
  ],
  "ela:g8-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "khan", name: "Khan Academy: 8th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-8th-reading-vocab" },
    { type: "tool", name: "Vocabulary.com", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Membean", url: "https://membean.com/" },
    { type: "tool", name: "Quill.org grammar", url: "https://www.quill.org/" },
    { type: "tool", name: "Quizlet", url: "https://quizlet.com/" }
  ],

  // ============================================================
  // ELA · GRADE 9–10
  // The "Lit/Comp Honors" feeder lane: Pre-AP English 1 (Gr 9) and
  // Pre-AP English 2 (Gr 10) feed AP Lit / AP Lang in 11–12. Resources
  // below pair national course frameworks (College Board), nationally
  // recognized district honors syllabi, and free practice / texts.
  // ============================================================
  "ela:g910-RL": [
    { type: "khan", name: "Khan Academy: 9th Grade Reading & Vocab", url: "https://www.khanacademy.org/ela/cc-9th-reading-vocab" },
    { type: "khan", name: "Khan Academy: AP English Literature", url: "https://www.khanacademy.org/test-prep/ap-english-literature", note: "Gr 10 Adv-Honors-track prep starts here" },
    { type: "course", name: "College Board: Pre-AP English 1 Course Guide (PDF)", url: "https://pre-ap.collegeboard.org/media/pdf/pre-ap-english-cg-wr.pdf", note: "National Gr 9 Lit/Comp Honors framework — units, learning objectives, assessments" },
    { type: "course", name: "College Board: Pre-AP English 2 Course Guide (PDF)", url: "https://pre-ap.collegeboard.org/media/pdf/pre-ap-english-2-course-guide.pdf", note: "National Gr 10 Lit/Comp Honors framework" },
    { type: "course", name: "Toms River RSD — English II Advanced Honors syllabus (PDF)", url: "https://www.trschools.com/curriculum/docs/2022/02/English-Grade-10-Advanced-Honors-_2_.pdf", note: "Gold-standard nationally cited Gr 10 Adv Honors syllabus" },
    { type: "course", name: "Toms River RSD — English Grade 9 syllabus (PDF)", url: "https://www.trschools.com/curriculum/docs/2022/02/English-Grade-9-_2_.pdf", note: "Companion Gr 9 Honors / CP syllabus from same district" },
    { type: "course", name: "Becton HS — English 9 Honors Curriculum Guide (PDF)", url: "https://resources.finalsite.net/images/v1599588764/bectonhsorg/bxgbg3kioxenjgbancnx/English9Honors.pdf" },
    { type: "course", name: "FHSD — Honors / Pre-AP English II Curriculum (PDF)", url: "https://resources.finalsite.net/images/v1672756391/fhsdschoolsorg/c3j8dotsbxpkulhcz0kj/FHSD-English-II-Pre-AP-Curriculum.pdf" },
    { type: "course", name: "Open Yale Courses — English Department", url: "https://oyc.yale.edu/english", note: "Free college-level lecture courses (Modern Poetry, Milton)" },
    { type: "text", name: "CommonLit — full HS library", url: "https://www.commonlit.org/" },
    { type: "text", name: "Project Gutenberg — full text canon", url: "https://www.gutenberg.org/" },
    { type: "text", name: "Folger Shakespeare — free editions + lesson plans", url: "https://www.folger.edu/explore/shakespeares-works/" },
    { type: "text", name: "Poetry Foundation", url: "https://www.poetryfoundation.org/" },
    { type: "text", name: "Poetry Out Loud — recitation anthology + scoring rubric", url: "https://www.poetryoutloud.org/" }
  ],
  "ela:g910-RI": [
    { type: "khan", name: "Khan Academy: AP English Language", url: "https://www.khanacademy.org/test-prep/ap-english-language", note: "Argument analysis — feeds AP Lang in Gr 11–12" },
    { type: "course", name: "College Board: Pre-AP English 1 Course Guide (PDF)", url: "https://pre-ap.collegeboard.org/media/pdf/pre-ap-english-cg-wr.pdf" },
    { type: "course", name: "College Board: Pre-AP English 2 Course Guide (PDF)", url: "https://pre-ap.collegeboard.org/media/pdf/pre-ap-english-2-course-guide.pdf" },
    { type: "course", name: "Pre-AP English 2 ↔ Common Core crosswalk (PDF)", url: "https://pre-ap.collegeboard.org/media/pdf/pre-ap-english-2-crosswalk-summary-common-core-state-standards.pdf" },
    { type: "course", name: "Toms River RSD — English II Adv Honors syllabus", url: "https://www.trschools.com/curriculum/docs/2022/02/English-Grade-10-Advanced-Honors-_2_.pdf" },
    { type: "course", name: "FHSD — Pre-AP English II curriculum", url: "https://resources.finalsite.net/images/v1672756391/fhsdschoolsorg/c3j8dotsbxpkulhcz0kj/FHSD-English-II-Pre-AP-Curriculum.pdf" },
    { type: "text", name: "Newsela (free educator tier)", url: "https://newsela.com/" },
    { type: "text", name: "CommonLit informational set", url: "https://www.commonlit.org/" },
    { type: "text", name: "Britannica ProCon — argument analysis", url: "https://www.procon.org/" },
    { type: "text", name: "Library of Congress: U.S. Founding Documents", url: "https://www.loc.gov/programs/teachers/" },
    { type: "text", name: "National Archives: DocsTeach", url: "https://www.docsteach.org/", note: "Free primary-source toolkits + lesson builder" },
    { type: "open", name: "EDSITEment (NEH) — HS lessons", url: "https://edsitement.neh.gov/" },
    { type: "open", name: "Smithsonian Learning Lab", url: "https://learninglab.si.edu/" },
    { type: "tool", name: "C-SPAN Classroom — Bell Ringers", url: "https://www.c-span.org/classroom/", note: "Short clips of speeches/debates for rhetorical analysis" }
  ],
  "ela:g910-W": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "Purdue OWL — Academic Writing", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/" },
    { type: "course", name: "Purdue OWL — Argument Papers", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/argument_papers/" },
    { type: "course", name: "Purdue OWL — MLA Formatting & Style Guide", url: "https://owl.purdue.edu/owl/research_and_citation/mla_style/mla_formatting_and_style_guide/mla_general_format.html" },
    { type: "course", name: "Harvard College Writing Center — Strategies for Essay Writing", url: "https://writingcenter.fas.harvard.edu/pages/strategies-essay-writing" },
    { type: "course", name: "ReadWriteThink (NCTE/IRA)", url: "https://www.readwritethink.org/" },
    { type: "tool", name: "NoRedInk (free school plan)", url: "https://www.noredink.com/", note: "Adaptive grammar tied to student writing" },
    { type: "tool", name: "Quill.org — sentence/paragraph practice", url: "https://www.quill.org/" },
    { type: "tool", name: "Hemingway Editor — free in-browser", url: "https://hemingwayapp.com/" },
    { type: "tool", name: "Zotero — free citation manager", url: "https://www.zotero.org/", note: "MLA/APA/Chicago bibliography automation for the research paper" },
    { type: "tool", name: "MLA Style Center", url: "https://style.mla.org/" }
  ],
  "ela:g910-SL": [
    { type: "video", name: "TED Talks (full library)", url: "https://www.ted.com/" },
    { type: "video", name: "TED-Ed (with discussion sets)", url: "https://ed.ted.com/" },
    { type: "video", name: "C-SPAN Classroom — Bell Ringers", url: "https://www.c-span.org/classroom/" },
    { type: "course", name: "National Speech & Debate Association — Student Resources", url: "https://www.speechanddebate.org/student-resources/" },
    { type: "course", name: "Poetry Out Loud — recitation rubric & national finals", url: "https://www.poetryoutloud.org/" },
    { type: "open", name: "iCivics — Drafting Board (argument writing/speaking)", url: "https://www.icivics.org/" }
  ],
  "ela:g910-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "Purdue OWL — Mechanics", url: "https://owl.purdue.edu/owl/general_writing/mechanics/" },
    { type: "course", name: "Purdue OWL — Punctuation", url: "https://owl.purdue.edu/owl/general_writing/punctuation/" },
    { type: "tool", name: "Vocabulary.com (SAT/Achieve word lists)", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Membean — adaptive vocab", url: "https://membean.com/" },
    { type: "tool", name: "Quill.org — grammar drill", url: "https://www.quill.org/" },
    { type: "tool", name: "Quizlet — vocab decks", url: "https://quizlet.com/" },
    { type: "free", name: "Etymonline — etymology dictionary", url: "https://www.etymonline.com/", note: "Roots / word histories for L.9-10.4" }
  ],

  // ============================================================
  // ELA · GRADE 11–12
  // AP English Language and AP English Literature anchor the
  // college-prep arc. Resources include the official CEDs, free
  // college courseware, and rigorous national HS Honors syllabi.
  // ============================================================
  "ela:g1112-RL": [
    { type: "khan", name: "Khan Academy: AP English Literature", url: "https://www.khanacademy.org/test-prep/ap-english-literature" },
    { type: "course", name: "AP English Literature & Composition — Course & Exam Description", url: "https://apcentral.collegeboard.org/courses/ap-english-literature-and-composition", note: "Official AP CED, sample syllabi, past free-response prompts" },
    { type: "course", name: "Open Yale Courses — English Department", url: "https://oyc.yale.edu/english", note: "Free college lectures (Modern Poetry, Milton, The American Novel Since 1945)" },
    { type: "course", name: "MIT OpenCourseWare — Literature", url: "https://ocw.mit.edu/search/?d=Literature" },
    { type: "course", name: "Toms River RSD — English IV (Gr 12) syllabus", url: "https://www.trschools.com/curriculum/docs/2022/02/English-Grade-12-_2_.pdf" },
    { type: "text", name: "CommonLit (HS)", url: "https://www.commonlit.org/" },
    { type: "text", name: "Project Gutenberg — full text canon", url: "https://www.gutenberg.org/" },
    { type: "text", name: "Internet Archive — open scholar editions", url: "https://archive.org/" },
    { type: "text", name: "HathiTrust Digital Library", url: "https://www.hathitrust.org/", note: "Free public-domain scholar editions" },
    { type: "text", name: "Folger Shakespeare — free editions + lesson plans", url: "https://www.folger.edu/explore/shakespeares-works/" },
    { type: "text", name: "Poetry Foundation", url: "https://www.poetryfoundation.org/" },
    { type: "text", name: "Modern American Poetry (illinois.edu)", url: "https://www.modernamericanpoetry.org/" },
    { type: "text", name: "Library of America — Story of the Week (free)", url: "https://storyoftheweek.loa.org/" }
  ],
  "ela:g1112-RI": [
    { type: "khan", name: "Khan Academy: AP English Language", url: "https://www.khanacademy.org/test-prep/ap-english-language" },
    { type: "course", name: "AP English Language & Composition — Course & Exam Description", url: "https://apcentral.collegeboard.org/courses/ap-english-language-and-composition" },
    { type: "course", name: "Stanford Encyclopedia of Philosophy — argument & rhetoric entries", url: "https://plato.stanford.edu/" },
    { type: "course", name: "American Rhetoric — Top 100 Speeches + analysis", url: "https://www.americanrhetoric.com/", note: "Full transcripts + audio of canonical American speeches" },
    { type: "text", name: "Library of Congress: U.S. Documents", url: "https://www.loc.gov/programs/teachers/" },
    { type: "text", name: "National Archives: DocsTeach", url: "https://www.docsteach.org/" },
    { type: "text", name: "Avalon Project (Yale Law) — historical documents", url: "https://avalon.law.yale.edu/" },
    { type: "text", name: "Britannica ProCon", url: "https://www.procon.org/" },
    { type: "text", name: "Smithsonian Learning Lab", url: "https://learninglab.si.edu/" },
    { type: "open", name: "EDSITEment (NEH)", url: "https://edsitement.neh.gov/" },
    { type: "open", name: "OER Commons — free curated texts/units", url: "https://oercommons.org/" },
    { type: "tool", name: "C-SPAN Classroom — Bell Ringers", url: "https://www.c-span.org/classroom/", note: "Speeches/debates for rhetorical analysis" }
  ],
  "ela:g1112-W": [
    { type: "course", name: "Purdue OWL — Academic Writing (full)", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/" },
    { type: "course", name: "Purdue OWL — Argument Papers", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/argument_papers/" },
    { type: "course", name: "Purdue OWL — MLA Style Guide", url: "https://owl.purdue.edu/owl/research_and_citation/mla_style/mla_formatting_and_style_guide/mla_general_format.html" },
    { type: "course", name: "Purdue OWL — APA Style Guide", url: "https://owl.purdue.edu/owl/research_and_citation/apa_style/apa_formatting_and_style_guide/general_format.html" },
    { type: "course", name: "Harvard College Writing Center — Strategies for Essay Writing", url: "https://writingcenter.fas.harvard.edu/pages/strategies-essay-writing" },
    { type: "course", name: "Yale Poorvu Center — Writing Resources", url: "https://poorvucenter.yale.edu/writing/" },
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "tool", name: "Hemingway Editor", url: "https://hemingwayapp.com/" },
    { type: "tool", name: "Zotero — citation manager", url: "https://www.zotero.org/" },
    { type: "tool", name: "MLA Style Center", url: "https://style.mla.org/" },
    { type: "tool", name: "NoRedInk (free school plan)", url: "https://www.noredink.com/" }
  ],
  "ela:g1112-SL": [
    { type: "video", name: "TED Talks", url: "https://www.ted.com/" },
    { type: "video", name: "American Rhetoric — Top 100 Speeches (audio)", url: "https://www.americanrhetoric.com/" },
    { type: "video", name: "C-SPAN Classroom", url: "https://www.c-span.org/classroom/" },
    { type: "course", name: "National Speech & Debate Association — Student Resources", url: "https://www.speechanddebate.org/student-resources/" },
    { type: "course", name: "Poetry Out Loud — recitation rubric & national finals", url: "https://www.poetryoutloud.org/" }
  ],
  "ela:g1112-L": [
    { type: "khan", name: "Khan Academy: Grammar", url: "https://www.khanacademy.org/humanities/grammar" },
    { type: "course", name: "Purdue OWL — General Writing & Mechanics", url: "https://owl.purdue.edu/owl/general_writing/" },
    { type: "course", name: "MLA Style Center", url: "https://style.mla.org/" },
    { type: "tool", name: "Vocabulary.com (SAT/AP-aligned lists)", url: "https://www.vocabulary.com/" },
    { type: "tool", name: "Membean — adaptive vocab", url: "https://membean.com/" },
    { type: "tool", name: "Hemingway Editor", url: "https://hemingwayapp.com/" },
    { type: "free", name: "Etymonline — etymology dictionary", url: "https://www.etymonline.com/" },
    { type: "free", name: "Merriam-Webster Dictionary & Thesaurus", url: "https://www.merriam-webster.com/" }
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
