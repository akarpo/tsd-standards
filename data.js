// Drill-down data for the Skills detail overlay.
// Schema:
//   [cellId]: {
//     subject: "Math" | "ELA",
//     grade: string,
//     domain: string,
//     nweaTest: string,
//     nweaArea: string,
//     ritBand: string,
//     standards: [
//       { code, text, nwea: [{rit, text}], overlap: "full"|"partial"|"gap", note? }
//     ],
//     summary: string,
//     gaps?: [string]
//   }
//
// "overlap": full = direct match; partial = some NWEA items address a portion;
// gap = no NWEA equivalent in this test.

window.DRILL_DATA = {

  // ============================================================
  // MATH · KINDERGARTEN
  // ============================================================
  "math:gK-CC": {
    subject: "Math",
    grade: "Kindergarten",
    domain: "Counting & Cardinality",
    nweaTest: "MAP Growth K-2 Math",
    nweaArea: "Number & Operations",
    ritBand: "<161 to 171–180",
    standards: [
      { code: "K.CC.A.1", text: "Count to 100 by ones and by tens.",
        nwea: [
          { rit: "<161", text: "Counts forward from 1 by ones to 20" },
          { rit: "161–170", text: "Counts forward from any starting number within 100" },
          { rit: "171–180", text: "Counts by tens to 100" }
        ], overlap: "full" },
      { code: "K.CC.B.4", text: "Understand the relationship between numbers and quantities; connect counting to cardinality (one-to-one correspondence; last number = quantity; each successive number names one larger).",
        nwea: [
          { rit: "<161", text: "Matches sets of objects to numerals 0–10" },
          { rit: "161–170", text: "Identifies the cardinality of a set (last number counted)" }
        ], overlap: "full" },
      { code: "K.CC.C.6", text: "Identify whether the number of objects in one group is greater than, less than, or equal to the number of objects in another group.",
        nwea: [
          { rit: "161–170", text: "Compares two groups of up to 10 using more than / less than / equal" }
        ], overlap: "full" },
      { code: "K.CC.C.7", text: "Compare two numbers between 1 and 10 presented as written numerals.",
        nwea: [
          { rit: "171–180", text: "Compares two written numerals 1–10" }
        ], overlap: "full" }
    ],
    summary: "Counting & Cardinality is one of the cleanest K alignments — every CC standard maps directly to NWEA's Number & Operations descriptors. NWEA folds CC into the broader Number & Operations sub-score rather than giving it its own goal area."
  },
  "math:gK-OA": {
    subject: "Math",
    grade: "Kindergarten",
    domain: "Operations & Algebraic Thinking",
    nweaTest: "MAP Growth K-2 Math",
    nweaArea: "Operations & Algebraic Thinking",
    ritBand: "<161 to 171–180",
    standards: [
      { code: "K.OA.A.1", text: "Represent addition and subtraction with objects, fingers, mental images, drawings, sounds, acting out situations, verbal explanations, expressions, or equations.",
        nwea: [
          { rit: "<161", text: "Represents addition with objects/drawings within 5" },
          { rit: "161–170", text: "Represents subtraction with objects/drawings within 10" }
        ], overlap: "full" },
      { code: "K.OA.A.2", text: "Solve addition and subtraction word problems, and add and subtract within 10, e.g., by using objects or drawings to represent the problem.",
        nwea: [
          { rit: "161–170", text: "Solves addition word problems within 10" },
          { rit: "171–180", text: "Solves subtraction word problems within 10" }
        ], overlap: "full" },
      { code: "K.OA.A.5", text: "Fluently add and subtract within 5.",
        nwea: [
          { rit: "171–180", text: "Adds and subtracts fluently within 5" }
        ], overlap: "full" }
    ],
    summary: "Direct alignment — NWEA's K-2 OAT goal area mirrors CCSS-M's K.OA cluster nearly word-for-word in the Learning Continuum."
  },
  "math:gK-NBT": {
    subject: "Math",
    grade: "Kindergarten",
    domain: "Number & Operations in Base Ten",
    nweaTest: "MAP Growth K-2 Math",
    nweaArea: "Number & Operations",
    ritBand: "<161 to 171–180",
    standards: [
      { code: "K.NBT.A.1", text: "Compose and decompose numbers from 11 to 19 into ten ones and some further ones.",
        nwea: [
          { rit: "161–170", text: "Decomposes teen numbers into 10 + ones" },
          { rit: "171–180", text: "Composes teen numbers from 10 + ones using objects or drawings" }
        ], overlap: "full" }
    ],
    summary: "The single K.NBT standard is a small but high-leverage idea — it's the foundation of place value for Grade 1+. NWEA tests it cleanly within Number & Operations."
  },
  "math:gK-MD": {
    subject: "Math",
    grade: "Kindergarten",
    domain: "Measurement & Data",
    nweaTest: "MAP Growth K-2 Math",
    nweaArea: "Measurement & Data",
    ritBand: "<161 to 171–180",
    standards: [
      { code: "K.MD.A.1", text: "Describe measurable attributes of objects, such as length or weight.",
        nwea: [
          { rit: "<161", text: "Identifies measurable attributes (longer, shorter, heavier)" }
        ], overlap: "full" },
      { code: "K.MD.A.2", text: "Directly compare two objects with a measurable attribute in common.",
        nwea: [
          { rit: "161–170", text: "Compares lengths of two objects directly" }
        ], overlap: "full" },
      { code: "K.MD.B.3", text: "Classify objects into given categories; count the numbers of objects in each category and sort the categories by count.",
        nwea: [
          { rit: "161–170", text: "Classifies objects into categories" },
          { rit: "171–180", text: "Counts and compares totals across categories" }
        ], overlap: "full" }
    ],
    summary: "Clean alignment. NWEA's K-2 Measurement & Data goal includes both attribute description and basic data classification."
  },
  "math:gK-G": {
    subject: "Math",
    grade: "Kindergarten",
    domain: "Geometry",
    nweaTest: "MAP Growth K-2 Math",
    nweaArea: "Geometry",
    ritBand: "<161 to 171–180",
    standards: [
      { code: "K.G.A.1", text: "Describe objects in the environment using names of shapes; describe the relative positions of these objects (above, below, beside, etc.).",
        nwea: [
          { rit: "<161", text: "Identifies 2D shapes in the environment" },
          { rit: "161–170", text: "Uses position words to describe shape locations" }
        ], overlap: "full" },
      { code: "K.G.B.4", text: "Analyze and compare two- and three-dimensional shapes, in different sizes and orientations, describing similarities, differences, parts, and other attributes.",
        nwea: [
          { rit: "171–180", text: "Compares 2D shapes by attributes (sides, corners)" }
        ], overlap: "full" },
      { code: "K.G.B.6", text: "Compose simple shapes to form larger shapes.",
        nwea: [
          { rit: "171–180", text: "Combines shapes to form composite figures" }
        ], overlap: "full" }
    ],
    summary: "Clean alignment. Geometry is the most stably-named NWEA goal area across all grade bands."
  },

  // ============================================================
  // MATH · GRADE 1
  // ============================================================
  "math:g1-OA": {
    subject: "Math",
    grade: "Grade 1",
    domain: "Operations & Algebraic Thinking",
    nweaTest: "MAP Growth K-2 Math",
    nweaArea: "Operations & Algebraic Thinking",
    ritBand: "161–180",
    standards: [
      { code: "1.OA.A.1", text: "Use addition and subtraction within 20 to solve word problems involving situations of adding to, taking from, putting together, taking apart, and comparing.",
        nwea: [
          { rit: "171–180", text: "Solves add-to and take-from word problems within 20" },
          { rit: "181–190", text: "Solves comparison word problems within 20" }
        ], overlap: "full" },
      { code: "1.OA.B.3", text: "Apply properties of operations as strategies to add and subtract (commutative, associative).",
        nwea: [
          { rit: "171–180", text: "Uses commutative property to add" }
        ], overlap: "partial",
        note: "NWEA tests the strategy in use rather than the property name." },
      { code: "1.OA.C.6", text: "Add and subtract within 20, demonstrating fluency for addition and subtraction within 10.",
        nwea: [
          { rit: "161–170", text: "Adds within 10 fluently" },
          { rit: "171–180", text: "Subtracts within 10 fluently" },
          { rit: "181–190", text: "Adds and subtracts within 20 using strategies" }
        ], overlap: "full" },
      { code: "1.OA.D.7", text: "Understand the meaning of the equal sign, and determine if equations are true or false.",
        nwea: [
          { rit: "171–180", text: "Determines if simple equations are true or false" }
        ], overlap: "full",
        note: "Critical conceptual standard — the foundation for algebraic thinking later." }
    ],
    summary: "NWEA's coverage of 1.OA is comprehensive at the strategy level. The equal-sign-as-balance idea (1.OA.D.7) is especially important and well-tested."
  },
  "math:g1-NBT": {
    subject: "Math",
    grade: "Grade 1",
    domain: "Number & Operations in Base Ten",
    nweaTest: "MAP Growth K-2 Math",
    nweaArea: "Number & Operations",
    ritBand: "161–180",
    standards: [
      { code: "1.NBT.B.2", text: "Understand that the two digits of a two-digit number represent amounts of tens and ones.",
        nwea: [
          { rit: "171–180", text: "Identifies tens and ones in two-digit numbers" }
        ], overlap: "full" },
      { code: "1.NBT.C.4", text: "Add within 100, including adding a two-digit number and a one-digit number, and adding a two-digit number and a multiple of 10.",
        nwea: [
          { rit: "181–190", text: "Adds two-digit + one-digit numbers within 100" },
          { rit: "191–200", text: "Adds two-digit + multiple of 10 within 100" }
        ], overlap: "full" },
      { code: "1.NBT.B.3", text: "Compare two two-digit numbers using >, =, <.",
        nwea: [
          { rit: "171–180", text: "Compares two-digit numbers using >, =, <" }
        ], overlap: "full" }
    ],
    summary: "Clean. Place value to 100 is well-represented across the K-2 Number & Operations descriptors."
  },
  "math:g1-MD": {
    subject: "Math",
    grade: "Grade 1",
    domain: "Measurement & Data",
    nweaTest: "MAP Growth K-2 Math",
    nweaArea: "Measurement & Data",
    ritBand: "161–180",
    standards: [
      { code: "1.MD.A.1", text: "Order three objects by length; compare lengths of two objects indirectly by using a third object.",
        nwea: [
          { rit: "171–180", text: "Orders objects by length" }
        ], overlap: "full" },
      { code: "1.MD.B.3", text: "Tell and write time in hours and half-hours using analog and digital clocks.",
        nwea: [
          { rit: "171–180", text: "Tells time to the hour" },
          { rit: "181–190", text: "Tells time to the half-hour" }
        ], overlap: "full" },
      { code: "1.MD.C.4", text: "Organize, represent, and interpret data with up to three categories.",
        nwea: [
          { rit: "171–180", text: "Reads and interprets simple bar graphs / picture graphs" }
        ], overlap: "full" }
    ],
    summary: "Clean alignment. Time-telling is a high-leverage skill that returns in Grade 2 and 3."
  },
  "math:g1-G": {
    subject: "Math",
    grade: "Grade 1",
    domain: "Geometry",
    nweaTest: "MAP Growth K-2 Math",
    nweaArea: "Geometry",
    ritBand: "161–180",
    standards: [
      { code: "1.G.A.1", text: "Distinguish between defining attributes (e.g., triangles are closed and three-sided) and non-defining attributes (e.g., color, orientation).",
        nwea: [
          { rit: "171–180", text: "Distinguishes defining vs. non-defining attributes of shapes" }
        ], overlap: "full" },
      { code: "1.G.A.3", text: "Partition circles and rectangles into two and four equal shares; describe shares using halves, fourths, quarters.",
        nwea: [
          { rit: "181–190", text: "Partitions shapes into halves and fourths" }
        ], overlap: "full",
        note: "Connects to the fraction work in Grade 3." }
    ],
    summary: "Clean. The partitioning standard is a quiet foundation for fractions later."
  },

  // ============================================================
  // MATH · GRADE 2
  // ============================================================
  "math:g2-OA": {
    subject: "Math",
    grade: "Grade 2",
    domain: "Operations & Algebraic Thinking",
    nweaTest: "MAP Growth K-2 or 2-5 Math",
    nweaArea: "Operations & Algebraic Thinking",
    ritBand: "171–190",
    standards: [
      { code: "2.OA.A.1", text: "Use addition and subtraction within 100 to solve one- and two-step word problems.",
        nwea: [
          { rit: "181–190", text: "Solves one-step add/subtract problems within 100" },
          { rit: "191–200", text: "Solves two-step add/subtract problems within 100" }
        ], overlap: "full" },
      { code: "2.OA.B.2", text: "Fluently add and subtract within 20 using mental strategies.",
        nwea: [
          { rit: "181–190", text: "Adds and subtracts fluently within 20" }
        ], overlap: "full" },
      { code: "2.OA.C.4", text: "Use addition to find the total number of objects arranged in rectangular arrays with up to 5 rows and up to 5 columns.",
        nwea: [
          { rit: "191–200", text: "Finds total in rectangular arrays using repeated addition" }
        ], overlap: "full",
        note: "Direct precursor to Grade 3 multiplication." }
    ],
    summary: "Transition grade — districts may use either K-2 or 2-5 form. Arrays in 2.OA.C.4 are the conceptual seed of multiplication."
  },
  "math:g2-NBT": {
    subject: "Math",
    grade: "Grade 2",
    domain: "Number & Operations in Base Ten",
    nweaTest: "MAP Growth K-2 or 2-5 Math",
    nweaArea: "Number & Operations",
    ritBand: "171–190",
    standards: [
      { code: "2.NBT.A.1", text: "Understand that the three digits of a three-digit number represent amounts of hundreds, tens, and ones.",
        nwea: [
          { rit: "181–190", text: "Identifies hundreds, tens, and ones in three-digit numbers" }
        ], overlap: "full" },
      { code: "2.NBT.B.5", text: "Fluently add and subtract within 100 using strategies based on place value, properties of operations, and the relationship between addition and subtraction.",
        nwea: [
          { rit: "181–190", text: "Adds within 100 fluently" },
          { rit: "191–200", text: "Subtracts within 100 fluently" }
        ], overlap: "full" },
      { code: "2.NBT.B.7", text: "Add and subtract within 1000, using concrete models or drawings and strategies based on place value.",
        nwea: [
          { rit: "191–200", text: "Adds within 1000 using place value strategies" },
          { rit: "201–210", text: "Subtracts within 1000 using place value strategies" }
        ], overlap: "full" }
    ],
    summary: "Clean. Place-value reasoning grows from 100 in Grade 1 to 1000 here."
  },
  "math:g2-MD": {
    subject: "Math",
    grade: "Grade 2",
    domain: "Measurement & Data",
    nweaTest: "MAP Growth K-2 or 2-5 Math",
    nweaArea: "Measurement & Data",
    ritBand: "171–190",
    standards: [
      { code: "2.MD.A.1", text: "Measure the length of an object by selecting and using appropriate tools (rulers, yardsticks, meter sticks, measuring tapes).",
        nwea: [
          { rit: "181–190", text: "Measures lengths using standard tools" }
        ], overlap: "full" },
      { code: "2.MD.C.7", text: "Tell and write time from analog and digital clocks to the nearest five minutes, using a.m. and p.m.",
        nwea: [
          { rit: "181–190", text: "Tells time to the nearest 5 minutes" }
        ], overlap: "full" },
      { code: "2.MD.C.8", text: "Solve word problems involving dollar bills, quarters, dimes, nickels, and pennies, using $ and ¢ symbols appropriately.",
        nwea: [
          { rit: "181–190", text: "Solves money word problems using coins and bills" }
        ], overlap: "full" }
    ],
    summary: "Clean. Money and time are heavily represented in NWEA's M&D items."
  },
  "math:g2-G": {
    subject: "Math",
    grade: "Grade 2",
    domain: "Geometry",
    nweaTest: "MAP Growth K-2 or 2-5 Math",
    nweaArea: "Geometry",
    ritBand: "171–190",
    standards: [
      { code: "2.G.A.1", text: "Recognize and draw shapes having specified attributes, such as a given number of angles or equal faces.",
        nwea: [
          { rit: "181–190", text: "Identifies shapes by number of sides or angles" }
        ], overlap: "full" },
      { code: "2.G.A.3", text: "Partition circles and rectangles into two, three, or four equal shares; describe shares as halves, thirds, fourths.",
        nwea: [
          { rit: "181–190", text: "Partitions shapes into halves, thirds, fourths" }
        ], overlap: "full" }
    ],
    summary: "Clean."
  },

  // ============================================================
  // MATH · GRADE 3
  // ============================================================
  "math:g3-OA": {
    subject: "Math",
    grade: "Grade 3",
    domain: "Operations & Algebraic Thinking",
    nweaTest: "MAP Growth 2-5 Math",
    nweaArea: "Operations & Algebraic Thinking",
    ritBand: "181–200",
    standards: [
      { code: "3.OA.A.1", text: "Interpret products of whole numbers, e.g., interpret 5 × 7 as the total number of objects in 5 groups of 7 objects each.",
        nwea: [
          { rit: "191–200", text: "Interprets multiplication as equal groups" },
          { rit: "201–210", text: "Solves multiplication problems within 100 using equal groups" }
        ], overlap: "full" },
      { code: "3.OA.A.3", text: "Use multiplication and division within 100 to solve word problems in situations involving equal groups, arrays, and measurement quantities.",
        nwea: [
          { rit: "191–200", text: "Solves multiplication word problems within 100" },
          { rit: "201–210", text: "Solves division word problems within 100" }
        ], overlap: "full" },
      { code: "3.OA.B.5", text: "Apply properties of operations as strategies to multiply and divide (commutative, associative, distributive).",
        nwea: [
          { rit: "201–210", text: "Uses distributive property to multiply (e.g., 8×7 = 8×5 + 8×2)" }
        ], overlap: "partial",
        note: "Distributive property as a multiplication strategy is tested; formal property names less so." },
      { code: "3.OA.C.7", text: "Fluently multiply and divide within 100 using strategies; by the end of Grade 3, know from memory all products of two one-digit numbers.",
        nwea: [
          { rit: "201–210", text: "Multiplies fluently within 100" },
          { rit: "211–220", text: "Recalls products of one-digit factors automatically" }
        ], overlap: "full" },
      { code: "3.OA.D.8", text: "Solve two-step word problems using the four operations; represent these problems using equations with a letter standing for the unknown quantity.",
        nwea: [
          { rit: "201–210", text: "Solves two-step word problems with multiple operations" }
        ], overlap: "full",
        note: "Letter-as-unknown is a critical algebra-readiness move." }
    ],
    summary: "Grade 3 OAT is the year multiplication moves from concept to fluency. NWEA tests the full progression — equal groups → strategies → fluent recall — across the 191–220 RIT range.",
    gaps: [
      "3.OA.B.6 (division as unknown-factor) is implied in NWEA division items but not as an explicit descriptor."
    ]
  },
  "math:g3-NBT": {
    subject: "Math",
    grade: "Grade 3",
    domain: "Number & Operations in Base Ten",
    nweaTest: "MAP Growth 2-5 Math",
    nweaArea: "Number & Operations",
    ritBand: "181–200",
    standards: [
      { code: "3.NBT.A.1", text: "Use place value understanding to round whole numbers to the nearest 10 or 100.",
        nwea: [
          { rit: "191–200", text: "Rounds whole numbers to the nearest 10" },
          { rit: "201–210", text: "Rounds whole numbers to the nearest 100" }
        ], overlap: "full" },
      { code: "3.NBT.A.2", text: "Fluently add and subtract within 1000 using strategies and algorithms based on place value.",
        nwea: [
          { rit: "191–200", text: "Adds within 1000 fluently" },
          { rit: "201–210", text: "Subtracts within 1000 with regrouping" }
        ], overlap: "full" },
      { code: "3.NBT.A.3", text: "Multiply one-digit whole numbers by multiples of 10 in the range 10–90 using strategies based on place value.",
        nwea: [
          { rit: "201–210", text: "Multiplies one-digit by multiples of 10" }
        ], overlap: "full" }
    ],
    summary: "Clean. Connects to OAT for multiplication strategies."
  },
  "math:g3-NF": {
    subject: "Math",
    grade: "Grade 3",
    domain: "Number & Operations · Fractions",
    nweaTest: "MAP Growth 2-5 Math",
    nweaArea: "Number & Operations (Fractions folded in)",
    ritBand: "181–205",
    standards: [
      { code: "3.NF.A.1", text: "Understand a fraction 1/b as the quantity formed by 1 part when a whole is partitioned into b equal parts; understand a fraction a/b as the quantity formed by a parts of size 1/b.",
        nwea: [
          { rit: "191–200", text: "Identifies unit fractions of a whole" },
          { rit: "201–210", text: "Represents fractions as a parts of size 1/b" }
        ], overlap: "full" },
      { code: "3.NF.A.2", text: "Understand a fraction as a number on the number line; represent fractions on a number line diagram.",
        nwea: [
          { rit: "201–210", text: "Locates fractions on a number line" }
        ], overlap: "full",
        note: "This is the conceptually hardest of the 3.NF standards and a common gap in student understanding." },
      { code: "3.NF.A.3", text: "Explain equivalence of fractions in special cases, and compare fractions by reasoning about their size.",
        nwea: [
          { rit: "201–210", text: "Identifies equivalent fractions using visual models" },
          { rit: "211–220", text: "Compares fractions with the same numerator or denominator" }
        ], overlap: "full" }
    ],
    summary: "NWEA folds fractions into the broader Number & Operations sub-score rather than reporting them separately. If you need fraction-specific data, use the IRL/PD reports rather than the goal sub-score.",
    gaps: [
      "Fraction sub-skill data is not a separate NWEA goal — it's mixed with whole-number operations in the same goal area, which can mask fraction gaps in the score report."
    ]
  },
  "math:g3-MD": {
    subject: "Math",
    grade: "Grade 3",
    domain: "Measurement & Data",
    nweaTest: "MAP Growth 2-5 Math",
    nweaArea: "Measurement & Data",
    ritBand: "181–200",
    standards: [
      { code: "3.MD.A.1", text: "Tell and write time to the nearest minute and measure time intervals in minutes.",
        nwea: [
          { rit: "191–200", text: "Tells time to the nearest minute" }
        ], overlap: "full" },
      { code: "3.MD.C.7", text: "Relate area to the operations of multiplication and addition.",
        nwea: [
          { rit: "201–210", text: "Calculates area of rectangles using multiplication" }
        ], overlap: "full",
        note: "This is where M&D meets the OAT throughline." },
      { code: "3.MD.D.8", text: "Solve real world and mathematical problems involving perimeters of polygons.",
        nwea: [
          { rit: "201–210", text: "Calculates perimeter of polygons" }
        ], overlap: "full" }
    ],
    summary: "Clean. Area = multiplication is a pivotal connection."
  },
  "math:g3-G": {
    subject: "Math",
    grade: "Grade 3",
    domain: "Geometry",
    nweaTest: "MAP Growth 2-5 Math",
    nweaArea: "Geometry",
    ritBand: "181–200",
    standards: [
      { code: "3.G.A.1", text: "Understand that shapes in different categories may share attributes, and that the shared attributes can define a larger category.",
        nwea: [
          { rit: "191–200", text: "Classifies shapes by attributes (sides, angles)" }
        ], overlap: "full" },
      { code: "3.G.A.2", text: "Partition shapes into parts with equal areas. Express the area of each part as a unit fraction of the whole.",
        nwea: [
          { rit: "201–210", text: "Partitions shapes into equal-area parts; expresses parts as fractions" }
        ], overlap: "full",
        note: "Clean bridge between Geometry and Fractions." }
    ],
    summary: "Clean. The fraction-area connection is well represented."
  },

  // ============================================================
  // MATH · GRADE 4
  // ============================================================
  "math:g4-OA": {
    subject: "Math",
    grade: "Grade 4",
    domain: "Operations & Algebraic Thinking",
    nweaTest: "MAP Growth 2-5 Math",
    nweaArea: "Operations & Algebraic Thinking",
    ritBand: "191–210",
    standards: [
      { code: "4.OA.A.3", text: "Solve multistep word problems posed with whole numbers, using the four operations. Represent problems using equations with a letter standing for the unknown.",
        nwea: [
          { rit: "201–210", text: "Solves multistep word problems with four operations" },
          { rit: "211–220", text: "Writes equations with letters for unknowns" }
        ], overlap: "full" },
      { code: "4.OA.B.4", text: "Find all factor pairs for a whole number in the range 1–100. Recognize that a whole number is a multiple of each of its factors. Determine whether a given whole number is prime or composite.",
        nwea: [
          { rit: "201–210", text: "Finds factor pairs" },
          { rit: "211–220", text: "Distinguishes prime and composite numbers" }
        ], overlap: "full" },
      { code: "4.OA.C.5", text: "Generate a number or shape pattern that follows a given rule. Identify apparent features of the pattern that were not explicit in the rule itself.",
        nwea: [
          { rit: "211–220", text: "Identifies and extends number patterns" }
        ], overlap: "full",
        note: "Patterns are an early seed of function thinking." }
    ],
    summary: "Clean. Letter-for-unknown work in 4.OA.A.3 is a critical bridge to Grade 6 algebra."
  },
  "math:g4-NBT": {
    subject: "Math",
    grade: "Grade 4",
    domain: "Number & Operations in Base Ten",
    nweaTest: "MAP Growth 2-5 Math",
    nweaArea: "Number & Operations",
    ritBand: "191–210",
    standards: [
      { code: "4.NBT.A.1", text: "Recognize that in a multi-digit whole number, a digit in one place represents ten times what it represents in the place to its right.",
        nwea: [
          { rit: "201–210", text: "Recognizes ten-times relationship in place value" }
        ], overlap: "full" },
      { code: "4.NBT.B.5", text: "Multiply a whole number of up to four digits by a one-digit whole number, and multiply two two-digit numbers, using strategies based on place value and the properties of operations.",
        nwea: [
          { rit: "201–210", text: "Multiplies multi-digit by one-digit" },
          { rit: "211–220", text: "Multiplies two two-digit numbers" }
        ], overlap: "full" },
      { code: "4.NBT.B.6", text: "Find whole-number quotients and remainders with up to four-digit dividends and one-digit divisors.",
        nwea: [
          { rit: "211–220", text: "Divides multi-digit by one-digit with remainders" }
        ], overlap: "full" }
    ],
    summary: "Clean. Multi-digit fluency is fully represented in NWEA's continuum."
  },
  "math:g4-NF": {
    subject: "Math",
    grade: "Grade 4",
    domain: "Number & Operations · Fractions",
    nweaTest: "MAP Growth 2-5 Math",
    nweaArea: "Number & Operations (Fractions folded in)",
    ritBand: "195–215",
    standards: [
      { code: "4.NF.A.1", text: "Explain why a fraction a/b is equivalent to a fraction (n×a)/(n×b) by using visual fraction models.",
        nwea: [
          { rit: "201–210", text: "Generates equivalent fractions using multiplication" }
        ], overlap: "full" },
      { code: "4.NF.B.3", text: "Understand a fraction a/b with a > 1 as a sum of fractions 1/b. Add and subtract fractions with like denominators.",
        nwea: [
          { rit: "201–210", text: "Decomposes fractions into unit fractions" },
          { rit: "211–220", text: "Adds and subtracts fractions with like denominators" }
        ], overlap: "full" },
      { code: "4.NF.C.6", text: "Use decimal notation for fractions with denominators 10 or 100.",
        nwea: [
          { rit: "211–220", text: "Writes fractions with denominators 10 or 100 as decimals" }
        ], overlap: "full",
        note: "Critical bridge between fractions and decimals." }
    ],
    summary: "Clean. The fraction-decimal connection (4.NF.C) is a significant Grade 4 milestone."
  },
  "math:g4-MD": {
    subject: "Math",
    grade: "Grade 4",
    domain: "Measurement & Data",
    nweaTest: "MAP Growth 2-5 Math",
    nweaArea: "Measurement & Data",
    ritBand: "191–210",
    standards: [
      { code: "4.MD.A.1", text: "Know relative sizes of measurement units within one system of units; convert measurements within a single system.",
        nwea: [
          { rit: "201–210", text: "Converts measurements within a single system" }
        ], overlap: "full" },
      { code: "4.MD.B.4", text: "Make a line plot to display a data set of measurements in fractions of a unit.",
        nwea: [
          { rit: "211–220", text: "Interprets line plots with fractional units" }
        ], overlap: "full" },
      { code: "4.MD.C.6", text: "Measure angles in whole-number degrees using a protractor. Sketch angles of specified measure.",
        nwea: [
          { rit: "211–220", text: "Measures angles using a protractor" }
        ], overlap: "full" }
    ],
    summary: "Clean. Angle measurement bridges to Grade 7 angle relationships."
  },
  "math:g4-G": {
    subject: "Math",
    grade: "Grade 4",
    domain: "Geometry",
    nweaTest: "MAP Growth 2-5 Math",
    nweaArea: "Geometry",
    ritBand: "191–210",
    standards: [
      { code: "4.G.A.1", text: "Draw points, lines, line segments, rays, angles, and perpendicular and parallel lines. Identify these in two-dimensional figures.",
        nwea: [
          { rit: "201–210", text: "Identifies points, lines, segments, rays, angles" },
          { rit: "211–220", text: "Identifies parallel and perpendicular lines" }
        ], overlap: "full" },
      { code: "4.G.A.3", text: "Recognize a line of symmetry for a two-dimensional figure.",
        nwea: [
          { rit: "201–210", text: "Identifies lines of symmetry in 2D figures" }
        ], overlap: "full" }
    ],
    summary: "Clean."
  },

  // ============================================================
  // MATH · GRADE 5
  // ============================================================
  "math:g5-OA": {
    subject: "Math",
    grade: "Grade 5",
    domain: "Operations & Algebraic Thinking",
    nweaTest: "MAP Growth 2-5 or 6+ Math",
    nweaArea: "Operations & Algebraic Thinking",
    ritBand: "201–220",
    standards: [
      { code: "5.OA.A.1", text: "Use parentheses, brackets, or braces in numerical expressions, and evaluate expressions with these symbols.",
        nwea: [
          { rit: "211–220", text: "Evaluates expressions using parentheses (order of operations)" }
        ], overlap: "full" },
      { code: "5.OA.B.3", text: "Generate two numerical patterns using two given rules. Form ordered pairs of corresponding terms; graph the pairs on a coordinate plane.",
        nwea: [
          { rit: "211–220", text: "Generates ordered pairs from rules" },
          { rit: "221–230", text: "Graphs ordered pairs from related patterns" }
        ], overlap: "full",
        note: "Clean bridge to function thinking — these ordered pairs are functions in disguise." }
    ],
    summary: "Clean. The patterns→ordered pairs→graph progression in 5.OA.B.3 is one of the most important pre-algebra moves."
  },
  "math:g5-NBT": {
    subject: "Math",
    grade: "Grade 5",
    domain: "Number & Operations in Base Ten",
    nweaTest: "MAP Growth 2-5 or 6+ Math",
    nweaArea: "Number & Operations / Real Number System",
    ritBand: "201–220",
    standards: [
      { code: "5.NBT.A.1", text: "Recognize that in a multi-digit number, a digit in one place represents 10 times as much as it represents in the place to its right and 1/10 of what it represents in the place to its left.",
        nwea: [
          { rit: "211–220", text: "Identifies place value relationships in decimals" }
        ], overlap: "full" },
      { code: "5.NBT.B.5", text: "Fluently multiply multi-digit whole numbers using the standard algorithm.",
        nwea: [
          { rit: "211–220", text: "Multiplies multi-digit numbers using standard algorithm" }
        ], overlap: "full" },
      { code: "5.NBT.B.7", text: "Add, subtract, multiply, and divide decimals to hundredths.",
        nwea: [
          { rit: "211–220", text: "Adds and subtracts decimals to hundredths" },
          { rit: "221–230", text: "Multiplies and divides decimals to hundredths" }
        ], overlap: "full" }
    ],
    summary: "Clean. Crosses 2-5/6+ test boundary depending on student RIT."
  },
  "math:g5-NF": {
    subject: "Math",
    grade: "Grade 5",
    domain: "Number & Operations · Fractions",
    nweaTest: "MAP Growth 2-5 or 6+ Math",
    nweaArea: "Number & Operations / Real Number System",
    ritBand: "205–225",
    standards: [
      { code: "5.NF.A.1", text: "Add and subtract fractions with unlike denominators (including mixed numbers) by replacing given fractions with equivalent fractions.",
        nwea: [
          { rit: "211–220", text: "Adds fractions with unlike denominators" },
          { rit: "221–230", text: "Subtracts mixed numbers with unlike denominators" }
        ], overlap: "full" },
      { code: "5.NF.B.4", text: "Apply and extend previous understandings of multiplication to multiply a fraction or whole number by a fraction.",
        nwea: [
          { rit: "211–220", text: "Multiplies a whole number by a fraction" },
          { rit: "221–230", text: "Multiplies a fraction by a fraction" }
        ], overlap: "full" },
      { code: "5.NF.B.7", text: "Apply and extend previous understandings of division to divide unit fractions by whole numbers and whole numbers by unit fractions.",
        nwea: [
          { rit: "221–230", text: "Divides unit fractions by whole numbers (and inverse)" }
        ], overlap: "full",
        note: "Foundation for full fraction division in Grade 6." }
    ],
    summary: "Clean. Fraction operations are well-represented across the 211–230 RIT range."
  },
  "math:g5-MD": {
    subject: "Math",
    grade: "Grade 5",
    domain: "Measurement & Data",
    nweaTest: "MAP Growth 2-5 or 6+ Math",
    nweaArea: "Measurement & Data → Geometry (volume)",
    ritBand: "201–220",
    standards: [
      { code: "5.MD.A.1", text: "Convert among different-sized standard measurement units within a given measurement system, and use these conversions in solving multi-step problems.",
        nwea: [
          { rit: "211–220", text: "Converts measurement units within a system" }
        ], overlap: "full" },
      { code: "5.MD.C.5", text: "Relate volume to the operations of multiplication and addition and solve real-world and mathematical problems involving volume.",
        nwea: [
          { rit: "211–220", text: "Calculates volume of rectangular prisms (V = lwh)" },
          { rit: "221–230", text: "Solves multi-step volume problems with rectangular prisms" }
        ], overlap: "full",
        note: "On the 6+ test this migrates to the Geometry sub-score." }
    ],
    summary: "Clean — but volume migrates from M&D to Geometry when students move to the 6+ form."
  },
  "math:g5-G": {
    subject: "Math",
    grade: "Grade 5",
    domain: "Geometry",
    nweaTest: "MAP Growth 2-5 or 6+ Math",
    nweaArea: "Geometry",
    ritBand: "201–220",
    standards: [
      { code: "5.G.A.1", text: "Use a pair of perpendicular number lines (the coordinate plane) with the intersection (origin) coinciding with 0 on each line.",
        nwea: [
          { rit: "211–220", text: "Identifies points on the coordinate plane (Q1)" }
        ], overlap: "full",
        note: "Quadrant 1 only at this grade — full four-quadrant plane comes in Grade 6." },
      { code: "5.G.B.3", text: "Understand that attributes belonging to a category of two-dimensional figures also belong to all subcategories.",
        nwea: [
          { rit: "211–220", text: "Classifies 2D figures by hierarchy of attributes" }
        ], overlap: "full" }
    ],
    summary: "Clean. The Q1-only restriction is a common point of confusion for students moving to Grade 6."
  },

  // ============================================================
  // MATH · GRADE 6
  // ============================================================
  "math:g6-RP": {
    subject: "Math",
    grade: "Grade 6",
    domain: "Ratios & Proportional Relationships",
    nweaTest: "MAP Growth 6+ Math",
    nweaArea: "Operations & Algebraic Thinking / Real & Complex Number System (distributed)",
    ritBand: "211–225",
    standards: [
      { code: "6.RP.A.1", text: "Understand the concept of a ratio and use ratio language to describe a ratio relationship between two quantities.",
        nwea: [
          { rit: "211–220", text: "Uses ratio language to describe relationships" }
        ], overlap: "full" },
      { code: "6.RP.A.2", text: "Understand the concept of a unit rate a/b associated with a ratio a:b with b ≠ 0.",
        nwea: [
          { rit: "211–220", text: "Identifies unit rate from a ratio" }
        ], overlap: "full" },
      { code: "6.RP.A.3", text: "Use ratio and rate reasoning to solve real-world and mathematical problems (rates, percent, conversions, tape diagrams, double number lines).",
        nwea: [
          { rit: "211–220", text: "Solves percent problems using ratio reasoning" },
          { rit: "221–230", text: "Solves multi-step rate problems" }
        ], overlap: "full" }
    ],
    summary: "Ratios items are split across two NWEA sub-scores: items framed as 'rate problems' tend to land in OAT, while ratio-equivalence items land in RCNS. This is the messiest alignment in middle school.",
    gaps: [
      "There is no dedicated 'Ratios & Proportional Relationships' NWEA sub-score in the 6+ form. To track 6.RP growth, you must look at items individually rather than at goal-area scores."
    ]
  },
  "math:g6-NS": {
    subject: "Math",
    grade: "Grade 6",
    domain: "The Number System",
    nweaTest: "MAP Growth 6+ Math",
    nweaArea: "The Real & Complex Number System",
    ritBand: "211–225",
    standards: [
      { code: "6.NS.A.1", text: "Interpret and compute quotients of fractions, and solve word problems involving division of fractions by fractions.",
        nwea: [
          { rit: "211–220", text: "Divides a fraction by a fraction" },
          { rit: "221–230", text: "Solves word problems involving fraction division" }
        ], overlap: "full" },
      { code: "6.NS.B.3", text: "Fluently add, subtract, multiply, and divide multi-digit decimals using the standard algorithm.",
        nwea: [
          { rit: "211–220", text: "Operates fluently with multi-digit decimals" }
        ], overlap: "full" },
      { code: "6.NS.C.6", text: "Understand a rational number as a point on the number line. Extend number line diagrams and coordinate axes to include negative numbers.",
        nwea: [
          { rit: "211–220", text: "Locates positive and negative rationals on a number line" },
          { rit: "221–230", text: "Plots ordered pairs in all four quadrants" }
        ], overlap: "full",
        note: "First exposure to the four-quadrant plane." }
    ],
    summary: "Clean. The four-quadrant coordinate plane is a major Grade 6 milestone."
  },
  "math:g6-EE": {
    subject: "Math",
    grade: "Grade 6",
    domain: "Expressions & Equations",
    nweaTest: "MAP Growth 6+ Math",
    nweaArea: "Operations & Algebraic Thinking",
    ritBand: "211–225",
    standards: [
      { code: "6.EE.A.2", text: "Write, read, and evaluate expressions in which letters stand for numbers.",
        nwea: [
          { rit: "211–220", text: "Writes and evaluates algebraic expressions" }
        ], overlap: "full" },
      { code: "6.EE.B.7", text: "Solve real-world and mathematical problems by writing and solving equations of the form x + p = q and px = q.",
        nwea: [
          { rit: "211–220", text: "Solves one-step equations of the form x + p = q" },
          { rit: "221–230", text: "Solves one-step equations of the form px = q" }
        ], overlap: "full" },
      { code: "6.EE.C.9", text: "Use variables to represent two quantities in a real-world problem; analyze the relationship between the dependent and independent variables.",
        nwea: [
          { rit: "221–230", text: "Distinguishes independent and dependent variables in a relationship" }
        ], overlap: "full",
        note: "Conceptual seed of function notation." }
    ],
    summary: "Clean. Independent/dependent variables are the most algebra-relevant standard here — track this."
  },
  "math:g6-G": {
    subject: "Math",
    grade: "Grade 6",
    domain: "Geometry",
    nweaTest: "MAP Growth 6+ Math",
    nweaArea: "Geometry",
    ritBand: "211–225",
    standards: [
      { code: "6.G.A.1", text: "Find the area of right triangles, other triangles, special quadrilaterals, and polygons by composing into rectangles or decomposing into triangles.",
        nwea: [
          { rit: "211–220", text: "Calculates area of triangles and quadrilaterals" }
        ], overlap: "full" },
      { code: "6.G.A.2", text: "Find the volume of a right rectangular prism with fractional edge lengths.",
        nwea: [
          { rit: "221–230", text: "Calculates volume of prisms with fractional edges" }
        ], overlap: "full" }
    ],
    summary: "Clean."
  },
  "math:g6-SP": {
    subject: "Math",
    grade: "Grade 6",
    domain: "Statistics & Probability",
    nweaTest: "MAP Growth 6+ Math",
    nweaArea: "Statistics & Probability",
    ritBand: "211–225",
    standards: [
      { code: "6.SP.A.1", text: "Recognize a statistical question as one that anticipates variability in the data.",
        nwea: [
          { rit: "211–220", text: "Identifies statistical questions" }
        ], overlap: "full" },
      { code: "6.SP.B.5", text: "Summarize numerical data sets by reporting center, spread (IQR, MAD), and overall shape.",
        nwea: [
          { rit: "221–230", text: "Calculates measures of center (mean, median)" },
          { rit: "221–230", text: "Calculates measures of variability (IQR, MAD, range)" }
        ], overlap: "full" }
    ],
    summary: "Clean. NWEA covers MAD, which is conceptually the precursor to standard deviation."
  },

  // ============================================================
  // MATH · GRADE 7
  // ============================================================
  "math:g7-RP": {
    subject: "Math",
    grade: "Grade 7",
    domain: "Ratios & Proportional Relationships",
    nweaTest: "MAP Growth 6+ Math",
    nweaArea: "Operations & Algebraic Thinking",
    ritBand: "215–230",
    standards: [
      { code: "7.RP.A.2", text: "Recognize and represent proportional relationships between quantities (tables, graphs through origin, equation y = kx).",
        nwea: [
          { rit: "221–230", text: "Identifies proportional relationships from tables and graphs" },
          { rit: "221–230", text: "Writes equations y = kx for proportional relationships" }
        ], overlap: "full",
        note: "The single most algebra-relevant Grade 7 standard." },
      { code: "7.RP.A.3", text: "Use proportional relationships to solve multistep ratio and percent problems (tax, tip, markdown/markup, percent error).",
        nwea: [
          { rit: "221–230", text: "Solves multistep percent problems" }
        ], overlap: "full" }
    ],
    summary: "Items are distributed across OAT and RCNS sub-scores. The y = kx work is the direct on-ramp to Grade 8 slope/linear functions."
  },
  "math:g7-NS": {
    subject: "Math",
    grade: "Grade 7",
    domain: "The Number System",
    nweaTest: "MAP Growth 6+ Math",
    nweaArea: "The Real & Complex Number System",
    ritBand: "215–230",
    standards: [
      { code: "7.NS.A.1", text: "Apply and extend previous understandings of addition and subtraction to add and subtract rational numbers; represent on a horizontal or vertical number line diagram.",
        nwea: [
          { rit: "221–230", text: "Adds and subtracts signed rational numbers" }
        ], overlap: "full" },
      { code: "7.NS.A.2", text: "Apply and extend previous understandings of multiplication and division to multiply and divide rational numbers (sign rules; (-1)(-1) = 1).",
        nwea: [
          { rit: "221–230", text: "Multiplies and divides signed rational numbers" }
        ], overlap: "full" }
    ],
    summary: "Clean. Sign rules are the load-bearing skill for Algebra 1."
  },
  "math:g7-EE": {
    subject: "Math",
    grade: "Grade 7",
    domain: "Expressions & Equations",
    nweaTest: "MAP Growth 6+ Math",
    nweaArea: "Operations & Algebraic Thinking",
    ritBand: "215–230",
    standards: [
      { code: "7.EE.A.1", text: "Apply properties of operations as strategies to add, subtract, factor, and expand linear expressions with rational coefficients.",
        nwea: [
          { rit: "221–230", text: "Generates equivalent expressions using distributive property" }
        ], overlap: "full" },
      { code: "7.EE.B.4", text: "Use variables to represent quantities and construct simple equations and inequalities to solve problems (px + q = r and p(x + q) = r).",
        nwea: [
          { rit: "221–230", text: "Solves multi-step equations of the form px + q = r" },
          { rit: "231–240", text: "Solves equations of the form p(x + q) = r" }
        ], overlap: "full",
        note: "Structurally identical to Algebra 1 multi-step equations." }
    ],
    summary: "Clean. The p(x + q) = r form is the multi-step equation Algebra 1 is built on."
  },
  "math:g7-G": {
    subject: "Math",
    grade: "Grade 7",
    domain: "Geometry",
    nweaTest: "MAP Growth 6+ Math",
    nweaArea: "Geometry",
    ritBand: "215–230",
    standards: [
      { code: "7.G.A.1", text: "Solve problems involving scale drawings of geometric figures, including computing actual lengths and areas from a scale drawing.",
        nwea: [
          { rit: "221–230", text: "Solves problems involving scale drawings" }
        ], overlap: "full" },
      { code: "7.G.B.4", text: "Know the formulas for the area and circumference of a circle and use them to solve problems.",
        nwea: [
          { rit: "221–230", text: "Calculates circumference and area of circles" }
        ], overlap: "full" }
    ],
    summary: "Clean."
  },
  "math:g7-SP": {
    subject: "Math",
    grade: "Grade 7",
    domain: "Statistics & Probability",
    nweaTest: "MAP Growth 6+ Math",
    nweaArea: "Statistics & Probability",
    ritBand: "215–230",
    standards: [
      { code: "7.SP.A.1", text: "Understand that statistics can be used to gain information about a population by examining a sample.",
        nwea: [
          { rit: "221–230", text: "Identifies representative samples" }
        ], overlap: "full" },
      { code: "7.SP.C.5", text: "Understand that the probability of a chance event is a number between 0 and 1 that expresses the likelihood of the event occurring.",
        nwea: [
          { rit: "221–230", text: "Determines probability of simple events on the 0–1 scale" }
        ], overlap: "full" }
    ],
    summary: "Clean. Theoretical and experimental probability are both represented."
  },

  // ============================================================
  // MATH · GRADE 8
  // ============================================================
  "math:g8-NS": {
    subject: "Math",
    grade: "Grade 8",
    domain: "The Number System",
    nweaTest: "MAP Growth 6+ Math",
    nweaArea: "The Real & Complex Number System",
    ritBand: "220–240",
    standards: [
      { code: "8.NS.A.1", text: "Know that numbers that are not rational are called irrational. Understand informally that every number has a decimal expansion.",
        nwea: [
          { rit: "221–230", text: "Distinguishes rational and irrational numbers" }
        ], overlap: "full" },
      { code: "8.NS.A.2", text: "Use rational approximations of irrational numbers to compare the size of irrational numbers.",
        nwea: [
          { rit: "231–240", text: "Approximates and compares irrational numbers (e.g., √2 ≈ 1.41)" }
        ], overlap: "full" }
    ],
    summary: "Clean. Foundation for the quadratic formula and radical work in Algebra 1."
  },
  "math:g8-EE": {
    subject: "Math",
    grade: "Grade 8",
    domain: "Expressions & Equations",
    nweaTest: "MAP Growth 6+ Math",
    nweaArea: "Operations & Algebraic Thinking",
    ritBand: "220–240",
    standards: [
      { code: "8.EE.A.1", text: "Know and apply the properties of integer exponents to generate equivalent numerical expressions.",
        nwea: [
          { rit: "221–230", text: "Applies product/quotient/power rules for exponents" },
          { rit: "231–240", text: "Applies zero and negative exponent rules" }
        ], overlap: "full" },
      { code: "8.EE.B.5", text: "Graph proportional relationships, interpreting the unit rate as the slope of the graph.",
        nwea: [
          { rit: "231–240", text: "Identifies slope as unit rate from a graph or table" }
        ], overlap: "full",
        note: "The most important Grade 8 standard for algebra readiness." },
      { code: "8.EE.C.7", text: "Solve linear equations in one variable, including equations with one solution, no solution, or infinitely many solutions.",
        nwea: [
          { rit: "231–240", text: "Solves linear equations with variables on both sides" },
          { rit: "231–240", text: "Identifies equations with no solution or infinite solutions" }
        ], overlap: "full" },
      { code: "8.EE.C.8", text: "Analyze and solve pairs of simultaneous linear equations.",
        nwea: [
          { rit: "231–240", text: "Solves systems of linear equations by graphing" },
          { rit: "241–250", text: "Solves systems by substitution" }
        ], overlap: "full" }
    ],
    summary: "8.EE is dense — every standard is high-leverage for Algebra 1. NWEA covers it well."
  },
  "math:g8-F": {
    subject: "Math",
    grade: "Grade 8",
    domain: "Functions",
    nweaTest: "MAP Growth 6+ Math",
    nweaArea: "Operations & Algebraic Thinking (functions folded in)",
    ritBand: "220–240",
    standards: [
      { code: "8.F.A.1", text: "Understand that a function is a rule that assigns to each input exactly one output.",
        nwea: [
          { rit: "231–240", text: "Identifies whether a relation is a function (one output per input)" }
        ], overlap: "full",
        note: "Formal function definition appears here for the first time." },
      { code: "8.F.B.4", text: "Construct a function to model a linear relationship between two quantities; determine rate of change and initial value.",
        nwea: [
          { rit: "231–240", text: "Writes y = mx + b from a real-world context" }
        ], overlap: "full" }
    ],
    summary: "Functions are folded into the OAT goal in the 6+ test (rather than getting their own sub-score). Track function items via the IRL/PD reports rather than goal scores.",
    gaps: [
      "Functions don't have a dedicated NWEA sub-score in the 6+ form — they emerge as a separate area only in Course-Specific Algebra 1."
    ]
  },
  "math:g8-G": {
    subject: "Math",
    grade: "Grade 8",
    domain: "Geometry",
    nweaTest: "MAP Growth 6+ Math",
    nweaArea: "Geometry",
    ritBand: "220–240",
    standards: [
      { code: "8.G.A.1", text: "Verify experimentally the properties of rotations, reflections, and translations.",
        nwea: [
          { rit: "221–230", text: "Performs translations, rotations, and reflections on a coordinate plane" }
        ], overlap: "full" },
      { code: "8.G.B.7", text: "Apply the Pythagorean Theorem to determine unknown side lengths in right triangles.",
        nwea: [
          { rit: "231–240", text: "Applies Pythagorean Theorem to find side lengths" },
          { rit: "241–250", text: "Applies Pythagorean Theorem in 3D contexts" }
        ], overlap: "full" },
      { code: "8.G.C.9", text: "Know the formulas for the volumes of cones, cylinders, and spheres and use them to solve problems.",
        nwea: [
          { rit: "231–240", text: "Calculates volume of cylinders, cones, and spheres" }
        ], overlap: "full" }
    ],
    summary: "Clean. Pythagorean Theorem is the conceptual ancestor of the distance formula in Algebra 1."
  },
  "math:g8-SP": {
    subject: "Math",
    grade: "Grade 8",
    domain: "Statistics & Probability",
    nweaTest: "MAP Growth 6+ Math",
    nweaArea: "Statistics & Probability",
    ritBand: "220–240",
    standards: [
      { code: "8.SP.A.1", text: "Construct and interpret scatter plots for bivariate measurement data to investigate patterns of association.",
        nwea: [
          { rit: "231–240", text: "Interprets scatter plots for clustering, outliers, and associations" }
        ], overlap: "full" },
      { code: "8.SP.A.4", text: "Understand that patterns of association can also be seen in bivariate categorical data by displaying frequencies in a two-way table.",
        nwea: [
          { rit: "231–240", text: "Interprets two-way tables for relative frequencies" }
        ], overlap: "full" }
    ],
    summary: "Clean. The line-of-fit work bridges directly to S-ID.B in Algebra 1."
  },

  // ============================================================
  // MATH · ALGEBRA 1
  // ============================================================
  "math:gAlg1-N": {
    subject: "Math",
    grade: "Algebra 1 (Gr 8 or 9)",
    domain: "Number & Quantity",
    nweaTest: "Course-Specific MAP Growth: Algebra 1 (or 6+)",
    nweaArea: "Number & Quantity / Real Number System",
    ritBand: "225–245",
    standards: [
      { code: "N-RN.A.1", text: "Explain how the definition of the meaning of rational exponents follows from extending the properties of integer exponents.",
        nwea: [
          { rit: "231–240", text: "Rewrites expressions with rational exponents in radical form" }
        ], overlap: "full" },
      { code: "N-Q.A.1", text: "Use units as a way to understand problems and to guide the solution of multi-step problems; choose and interpret units consistently.",
        nwea: [
          { rit: "231–240", text: "Uses units to interpret and solve modeling problems" }
        ], overlap: "partial",
        note: "N-Q is largely modeling-focused, which is hard to test with discrete items." }
    ],
    summary: "Course-Specific Algebra 1 test gives a direct sub-score; if using 6+ form, items appear in Real Number System."
  },
  "math:gAlg1-A": {
    subject: "Math",
    grade: "Algebra 1 (Gr 8 or 9)",
    domain: "Algebra",
    nweaTest: "Course-Specific MAP Growth: Algebra 1",
    nweaArea: "Algebra: Equations & Inequalities · Seeing Structure in Expressions",
    ritBand: "225–250",
    standards: [
      { code: "A-SSE.A.1", text: "Interpret expressions that represent a quantity in terms of its context (parts of an expression: terms, factors, coefficients).",
        nwea: [
          { rit: "231–240", text: "Identifies parts of expressions in context" }
        ], overlap: "full" },
      { code: "A-SSE.B.3", text: "Choose and produce an equivalent form of an expression to reveal and explain properties of the quantity (factoring, completing the square).",
        nwea: [
          { rit: "241–250", text: "Factors quadratic expressions" },
          { rit: "241–250", text: "Completes the square to reveal vertex form" }
        ], overlap: "full" },
      { code: "A-CED.A.1", text: "Create equations and inequalities in one variable and use them to solve problems.",
        nwea: [
          { rit: "231–240", text: "Creates and solves linear equations in modeling contexts" }
        ], overlap: "full" },
      { code: "A-REI.B.4", text: "Solve quadratic equations in one variable (using factoring, completing the square, quadratic formula).",
        nwea: [
          { rit: "241–250", text: "Solves quadratics by factoring" },
          { rit: "241–250", text: "Solves quadratics using the quadratic formula" }
        ], overlap: "full" }
    ],
    summary: "Course-Specific test provides the cleanest alignment. Quadratic methods are the highest-leverage skills in this band."
  },
  "math:gAlg1-F": {
    subject: "Math",
    grade: "Algebra 1 (Gr 8 or 9)",
    domain: "Functions",
    nweaTest: "Course-Specific MAP Growth: Algebra 1",
    nweaArea: "Functions",
    ritBand: "225–250",
    standards: [
      { code: "F-IF.A.1", text: "Understand that a function from one set (called the domain) to another set (called the range) assigns to each element of the domain exactly one element of the range.",
        nwea: [
          { rit: "231–240", text: "Identifies domain and range from a function" }
        ], overlap: "full" },
      { code: "F-IF.B.4", text: "For a function that models a relationship between two quantities, interpret key features of graphs and tables (intercepts, intervals, max/min).",
        nwea: [
          { rit: "241–250", text: "Interprets key features of function graphs" }
        ], overlap: "full" },
      { code: "F-LE.A.1", text: "Distinguish between situations that can be modeled with linear functions and with exponential functions.",
        nwea: [
          { rit: "241–250", text: "Distinguishes linear vs. exponential growth from situations" }
        ], overlap: "full" }
    ],
    summary: "Clean."
  },
  "math:gAlg1-SP": {
    subject: "Math",
    grade: "Algebra 1 (Gr 8 or 9)",
    domain: "Statistics & Probability",
    nweaTest: "Course-Specific MAP Growth: Algebra 1",
    nweaArea: "Statistics & Probability",
    ritBand: "225–250",
    standards: [
      { code: "S-ID.A.1", text: "Represent data with plots on the real number line (dot plots, histograms, box plots).",
        nwea: [
          { rit: "231–240", text: "Interprets dot plots, histograms, and box plots" }
        ], overlap: "full" },
      { code: "S-ID.B.6", text: "Represent data on two quantitative variables on a scatter plot, and describe how the variables are related.",
        nwea: [
          { rit: "241–250", text: "Fits a linear model to bivariate data and interprets slope/intercept" }
        ], overlap: "full" }
    ],
    summary: "Clean. Continues directly from 8.SP."
  },

  // ============================================================
  // MATH · GEOMETRY
  // ============================================================
  "math:gGeom-CO": {
    subject: "Math",
    grade: "Geometry (Gr 9 or 10)",
    domain: "Congruence",
    nweaTest: "Course-Specific MAP Growth: Geometry",
    nweaArea: "Congruence",
    ritBand: "230–255",
    standards: [
      { code: "G-CO.A.2", text: "Represent transformations in the plane using transparencies and geometry software; describe transformations as functions that take points in the plane as inputs and give other points as outputs.",
        nwea: [
          { rit: "231–240", text: "Represents transformations as functions on coordinates" }
        ], overlap: "full" },
      { code: "G-CO.B.6", text: "Use geometric descriptions of rigid motions to transform figures and to predict the effect of a given rigid motion on a figure.",
        nwea: [
          { rit: "241–250", text: "Predicts effect of rigid motions on figures" }
        ], overlap: "full" }
    ],
    summary: "Clean. Builds directly on 8.G transformation work."
  },
  "math:gGeom-SRT": {
    subject: "Math",
    grade: "Geometry (Gr 9 or 10)",
    domain: "Similarity, Right Triangles & Trig",
    nweaTest: "Course-Specific MAP Growth: Geometry",
    nweaArea: "Similarity, Right Triangles, and Trigonometry",
    ritBand: "230–255",
    standards: [
      { code: "G-SRT.B.5", text: "Use congruence and similarity criteria for triangles to solve problems and to prove relationships in geometric figures.",
        nwea: [
          { rit: "241–250", text: "Uses similarity to solve problems" }
        ], overlap: "full" },
      { code: "G-SRT.C.8", text: "Use trigonometric ratios and the Pythagorean Theorem to solve right triangles in applied problems.",
        nwea: [
          { rit: "241–250", text: "Uses sine, cosine, and tangent to solve right triangles" }
        ], overlap: "full" }
    ],
    summary: "Clean."
  },
  "math:gGeom-C": {
    subject: "Math",
    grade: "Geometry (Gr 9 or 10)",
    domain: "Circles",
    nweaTest: "Course-Specific MAP Growth: Geometry",
    nweaArea: "Circles",
    ritBand: "230–255",
    standards: [
      { code: "G-C.A.2", text: "Identify and describe relationships among inscribed angles, radii, and chords.",
        nwea: [
          { rit: "241–250", text: "Identifies relationships among inscribed angles, radii, chords" }
        ], overlap: "full" }
    ],
    summary: "Clean."
  },
  "math:gGeom-GPE": {
    subject: "Math",
    grade: "Geometry (Gr 9 or 10)",
    domain: "Expressing Properties with Equations",
    nweaTest: "Course-Specific MAP Growth: Geometry",
    nweaArea: "Expressing Geometric Properties with Equations",
    ritBand: "230–255",
    standards: [
      { code: "G-GPE.A.1", text: "Derive the equation of a circle of given center and radius using the Pythagorean Theorem.",
        nwea: [
          { rit: "241–250", text: "Writes the equation of a circle in the form (x−h)² + (y−k)² = r²" }
        ], overlap: "full" },
      { code: "G-GPE.B.4", text: "Use coordinates to prove simple geometric theorems algebraically.",
        nwea: [
          { rit: "241–250", text: "Uses coordinate geometry to prove properties (parallelism, perpendicularity, distance)" }
        ], overlap: "full" }
    ],
    summary: "Clean."
  },
  "math:gGeom-GMD": {
    subject: "Math",
    grade: "Geometry (Gr 9 or 10)",
    domain: "Measurement & Modeling",
    nweaTest: "Course-Specific MAP Growth: Geometry",
    nweaArea: "Geometric Measurement and Dimension · Modeling with Geometry",
    ritBand: "230–255",
    standards: [
      { code: "G-GMD.A.3", text: "Use volume formulas for cylinders, pyramids, cones, and spheres to solve problems.",
        nwea: [
          { rit: "241–250", text: "Uses volume formulas for solid figures" }
        ], overlap: "full" },
      { code: "G-MG.A.1", text: "Use geometric shapes, their measures, and their properties to describe objects (e.g., modeling a tree trunk as a cylinder).",
        nwea: [
          { rit: "241–250", text: "Models real-world objects with geometric shapes" }
        ], overlap: "partial",
        note: "Modeling is harder to test discretely." }
    ],
    summary: "Clean for measurement; modeling is partially covered."
  },
  "math:gGeom-CP": {
    subject: "Math",
    grade: "Geometry (Gr 9 or 10)",
    domain: "Conditional Probability (sometimes embedded)",
    nweaTest: "Course-Specific MAP Growth: Geometry (varies)",
    nweaArea: "Statistics & Probability",
    ritBand: "230–255",
    standards: [
      { code: "S-CP.A.1", text: "Describe events as subsets of a sample space using characteristics (or categories) of the outcomes, or as unions, intersections, or complements of other events.",
        nwea: [
          { rit: "241–250", text: "Identifies events as unions, intersections, or complements" }
        ], overlap: "full" },
      { code: "S-CP.A.2", text: "Understand independence as a multiplicative relationship in conditional probability.",
        nwea: [
          { rit: "241–250", text: "Computes P(A and B) for independent events" }
        ], overlap: "full" }
    ],
    summary: "S-CP placement varies by district — some place it in Geometry, others in Algebra 2."
  },

  // ============================================================
  // MATH · ALGEBRA 2
  // ============================================================
  "math:gAlg2-N": {
    subject: "Math",
    grade: "Algebra 2 (Gr 10 or 11)",
    domain: "Number & Quantity",
    nweaTest: "Course-Specific MAP Growth: Algebra 2",
    nweaArea: "Number & Quantity (incl. Complex Number System)",
    ritBand: "235–260",
    standards: [
      { code: "N-CN.A.1", text: "Know there is a complex number i such that i² = −1, and every complex number has the form a + bi with a and b real.",
        nwea: [
          { rit: "241–250", text: "Performs operations with complex numbers" }
        ], overlap: "full" },
      { code: "N-CN.C.7", text: "Solve quadratic equations with real coefficients that have complex solutions.",
        nwea: [
          { rit: "241–250", text: "Solves quadratics with complex solutions" }
        ], overlap: "full" }
    ],
    summary: "Clean."
  },
  "math:gAlg2-A": {
    subject: "Math",
    grade: "Algebra 2 (Gr 10 or 11)",
    domain: "Algebra",
    nweaTest: "Course-Specific MAP Growth: Algebra 2",
    nweaArea: "Polynomial, Rational & Radical Expressions / Equations",
    ritBand: "235–260",
    standards: [
      { code: "A-APR.B.3", text: "Identify zeros of polynomials when suitable factorizations are available, and use the zeros to construct a rough graph of the function defined by the polynomial.",
        nwea: [
          { rit: "241–250", text: "Identifies zeros of polynomial functions" }
        ], overlap: "full" },
      { code: "A-APR.D.6", text: "Rewrite simple rational expressions in different forms.",
        nwea: [
          { rit: "251–260", text: "Performs polynomial long division" }
        ], overlap: "full" }
    ],
    summary: "Clean."
  },
  "math:gAlg2-F": {
    subject: "Math",
    grade: "Algebra 2 (Gr 10 or 11)",
    domain: "Functions",
    nweaTest: "Course-Specific MAP Growth: Algebra 2",
    nweaArea: "Functions (incl. Trig)",
    ritBand: "235–260",
    standards: [
      { code: "F-IF.C.7", text: "Graph functions expressed symbolically and show key features of the graph (linear, quadratic, polynomial, exponential, logarithmic, trigonometric).",
        nwea: [
          { rit: "241–250", text: "Graphs polynomial, exponential, and logarithmic functions" }
        ], overlap: "full" },
      { code: "F-TF.A.1", text: "Understand radian measure of an angle as the length of the arc on the unit circle subtended by the angle.",
        nwea: [
          { rit: "251–260", text: "Converts between radians and degrees" }
        ], overlap: "full" }
    ],
    summary: "Clean."
  },
  "math:gAlg2-SP": {
    subject: "Math",
    grade: "Algebra 2 (Gr 10 or 11)",
    domain: "Statistics & Probability",
    nweaTest: "Course-Specific MAP Growth: Algebra 2",
    nweaArea: "Statistics & Probability",
    ritBand: "235–260",
    standards: [
      { code: "S-IC.A.1", text: "Understand statistics as a process for making inferences about population parameters based on a random sample from that population.",
        nwea: [
          { rit: "241–250", text: "Identifies inference from sample to population" }
        ], overlap: "full" },
      { code: "S-IC.B.4", text: "Use data from a sample survey to estimate a population mean or proportion.",
        nwea: [
          { rit: "251–260", text: "Computes margin of error for population estimates" }
        ], overlap: "full" }
    ],
    summary: "Clean."
  },

  // ============================================================
  // MATH · PRE-CALCULUS / AP PRECALCULUS (Gr 10–11)
  // ============================================================
  "math:gPreCalc-PR": {
    subject: "Math", grade: "Pre-Calc / AP Precalc (Gr 10–11)",
    domain: "Polynomial & Rational Functions",
    nweaTest: "Not assessed (above MAP ceiling)", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "F-IF.C.7c", text: "Graph polynomial functions, identifying zeros when suitable factorizations are available, and showing end behavior.",
        nwea: [], overlap: "gap" },
      { code: "A-APR.B.3", text: "Identify zeros of polynomials when suitable factorizations are available, and use the zeros to construct a rough graph.",
        nwea: [], overlap: "gap" },
      { code: "A-APR.D.6", text: "Rewrite simple rational expressions in different forms (long division, partial fractions in advanced settings).",
        nwea: [], overlap: "gap" }
    ],
    summary: "Pre-Calc deepens function-family work begun in Algebra 2. NWEA does not extend coverage above the 6+ ceiling.",
    gaps: ["No NWEA equivalent — assess via course exams, AP Precalc practice, or ALEKS."]
  },
  "math:gPreCalc-EL": {
    subject: "Math", grade: "Pre-Calc / AP Precalc (Gr 10–11)",
    domain: "Exponential & Logarithmic",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "F-LE.A.4", text: "For exponential models, express as a logarithm the solution to ab^(ct) = d; evaluate using technology.",
        nwea: [], overlap: "gap" },
      { code: "F-BF.B.5", text: "Understand the inverse relationship between exponents and logarithms; use this relationship to solve problems.",
        nwea: [], overlap: "gap" }
    ],
    summary: "Inverse relationship of exponents/logs is the central conceptual move."
  },
  "math:gPreCalc-TP": {
    subject: "Math", grade: "Pre-Calc / AP Precalc (Gr 10–11)",
    domain: "Trigonometric & Polar Functions",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "F-TF.A.1", text: "Understand radian measure of an angle as the length of the arc on the unit circle subtended by the angle.",
        nwea: [], overlap: "gap" },
      { code: "F-TF.B.5", text: "Choose trigonometric functions to model periodic phenomena with specified amplitude, frequency, and midline.",
        nwea: [], overlap: "gap" },
      { code: "F-TF.C.8", text: "Prove the Pythagorean identity sin²θ + cos²θ = 1 and use it.",
        nwea: [], overlap: "gap" }
    ],
    summary: "Radian measure and the unit circle are AP Precalc's signature foundation."
  },
  "math:gPreCalc-FM": {
    subject: "Math", grade: "Pre-Calc / AP Precalc (Gr 10–11)",
    domain: "Functions as Models",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "F-IF.B.4", text: "Interpret key features of graphs and tables in terms of the quantities the function describes (intercepts, intervals of inc/dec, max/min, end behavior, periodicity).",
        nwea: [], overlap: "gap" },
      { code: "A-CED.A.2", text: "Create equations in two or more variables to represent relationships between quantities; graph equations on coordinate axes with labels and scales.",
        nwea: [], overlap: "gap" }
    ],
    summary: "Modeling integrates all four function families — the AP Precalc capstone idea."
  },

  // ============================================================
  // MATH · AP CALCULUS AB
  // ============================================================
  "math:gCalcAB-LIM": {
    subject: "Math", grade: "AP Calculus AB (Gr 11–12)",
    domain: "Limits & Continuity",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "AP CED Unit 1.1", text: "Define limits and use limit notation to express the behavior of a function as the input approaches a value.", nwea: [], overlap: "gap" },
      { code: "AP CED Unit 1.4", text: "Determine limits using algebraic manipulation, the squeeze theorem, and L'Hospital's rule (BC).", nwea: [], overlap: "gap" },
      { code: "AP CED Unit 1.10", text: "Identify continuity at a point and on intervals; apply the Intermediate Value Theorem.", nwea: [], overlap: "gap" }
    ],
    summary: "Foundational unit. Limits give precise meaning to instantaneous rate of change."
  },
  "math:gCalcAB-DIFF": {
    subject: "Math", grade: "AP Calculus AB (Gr 11–12)",
    domain: "Differentiation: Definition & Properties",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "AP CED Unit 2.1", text: "Define average and instantaneous rate of change; the derivative as a limit.", nwea: [], overlap: "gap" },
      { code: "AP CED Unit 3", text: "Apply product, quotient, chain rules; differentiate inverse functions and implicitly defined functions.", nwea: [], overlap: "gap" }
    ],
    summary: "Procedural fluency built on conceptual definition. Chain rule is the highest-leverage technique."
  },
  "math:gCalcAB-APD": {
    subject: "Math", grade: "AP Calculus AB (Gr 11–12)",
    domain: "Applications of Differentiation",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "AP CED Unit 4", text: "Solve related-rates problems; use linear approximation; analyze motion using derivatives.", nwea: [], overlap: "gap" },
      { code: "AP CED Unit 5", text: "Apply Mean Value Theorem; identify extrema, concavity, and inflection points; solve optimization problems.", nwea: [], overlap: "gap" }
    ],
    summary: "Applications make Calc AB feel less abstract — optimization is the most cited real-world use."
  },
  "math:gCalcAB-INT": {
    subject: "Math", grade: "AP Calculus AB (Gr 11–12)",
    domain: "Integration & Accumulation",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "AP CED Unit 6", text: "Approximate accumulation using Riemann sums; state and apply the Fundamental Theorem of Calculus.", nwea: [], overlap: "gap" },
      { code: "AP CED Unit 7", text: "Solve separable differential equations; model growth/decay with differential equations.", nwea: [], overlap: "gap" },
      { code: "AP CED Unit 8", text: "Compute areas between curves; volumes by disks/washers and shells; arc length.", nwea: [], overlap: "gap" }
    ],
    summary: "Integration completes the differentiation pair. The Fundamental Theorem links the two operations."
  },

  // ============================================================
  // MATH · AP CALCULUS BC
  // ============================================================
  "math:gCalcBC-AB": {
    subject: "Math", grade: "AP Calculus BC (Gr 11–12)",
    domain: "All AP Calc AB Content",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "AP CED Units 1-8", text: "Limits & Continuity, Differentiation, Applications of Differentiation, Integration & Accumulation, Differential Equations, Applications of Integration.", nwea: [], overlap: "gap" }
    ],
    summary: "BC includes ALL AB content. Students take a single AP exam (BC), but receive an AB sub-score."
  },
  "math:gCalcBC-PPV": {
    subject: "Math", grade: "AP Calculus BC (Gr 11–12)",
    domain: "Parametric, Polar, Vector-Valued Functions",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "AP CED Unit 9.1-9.4", text: "Differentiation and integration of parametric equations; arc length of parametric curves.", nwea: [], overlap: "gap" },
      { code: "AP CED Unit 9.5-9.8", text: "Polar coordinates: derivatives, area enclosed by polar curves.", nwea: [], overlap: "gap" },
      { code: "AP CED Unit 9.9", text: "Vector-valued functions: position, velocity, acceleration in 2D motion.", nwea: [], overlap: "gap" }
    ],
    summary: "BC-only content. Polar area and parametric arc length are common FRQ topics."
  },
  "math:gCalcBC-SER": {
    subject: "Math", grade: "AP Calculus BC (Gr 11–12)",
    domain: "Infinite Sequences & Series",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "AP CED Unit 10.1-10.7", text: "Convergence tests: nth-term, integral, comparison, ratio, root, alternating series.", nwea: [], overlap: "gap" },
      { code: "AP CED Unit 10.11-10.13", text: "Power series, radius and interval of convergence; representations of functions as power series.", nwea: [], overlap: "gap" },
      { code: "AP CED Unit 10.14-10.15", text: "Taylor and Maclaurin series; Lagrange error bound.", nwea: [], overlap: "gap" }
    ],
    summary: "BC-only content. Series is historically the most challenging unit on the BC exam."
  },

  // ============================================================
  // MATH · AP STATISTICS (Gr 10–12)
  // ============================================================
  "math:gStats-1D": {
    subject: "Math", grade: "AP Statistics (Gr 10–12)",
    domain: "Exploring Data (one variable)",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "S-ID.A.1", text: "Represent data with plots on the real number line (dot plots, histograms, box plots).", nwea: [], overlap: "gap" },
      { code: "S-ID.A.2", text: "Use statistics appropriate to the shape of the data distribution to compare center (median, mean) and spread (IQR, standard deviation).", nwea: [], overlap: "gap" },
      { code: "S-ID.A.4", text: "Use the mean and standard deviation of a data set to fit a normal distribution; estimate areas under the normal curve.", nwea: [], overlap: "gap" }
    ],
    summary: "Builds directly on Algebra 1 / Algebra 2 statistics. Normal model is the central distribution."
  },
  "math:gStats-2D": {
    subject: "Math", grade: "AP Statistics (Gr 10–12)",
    domain: "Exploring Data (two variables)",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "S-ID.B.6", text: "Represent data on two quantitative variables on a scatter plot, and describe how the variables are related.", nwea: [], overlap: "gap" },
      { code: "S-ID.C.7-9", text: "Interpret slope and intercept of linear models; compute correlation; distinguish correlation from causation.", nwea: [], overlap: "gap" }
    ],
    summary: "Linear regression and residuals form the bivariate analysis core."
  },
  "math:gStats-SAMP": {
    subject: "Math", grade: "AP Statistics (Gr 10–12)",
    domain: "Sampling & Experimentation",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "S-IC.A.1", text: "Understand statistics as a process for making inferences about population parameters based on a random sample.", nwea: [], overlap: "gap" },
      { code: "S-IC.B.3", text: "Distinguish observational studies, sample surveys, and experiments; explain how randomization relates to each.", nwea: [], overlap: "gap" }
    ],
    summary: "Study design is a unique AP Stats focus that doesn't appear in the K-Algebra 2 sequence."
  },
  "math:gStats-PROB": {
    subject: "Math", grade: "AP Statistics (Gr 10–12)",
    domain: "Probability, Random Variables & Distributions",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "S-CP.A.1-5", text: "Sample spaces, conditional probability, independence; Multiplication and Addition rules.", nwea: [], overlap: "gap" },
      { code: "S-MD.A.1-4", text: "Discrete random variables; expected value; binomial and geometric distributions.", nwea: [], overlap: "gap" }
    ],
    summary: "Builds on Geometry's S-CP intro; adds random-variable distributions specific to AP Stats."
  },
  "math:gStats-INF": {
    subject: "Math", grade: "AP Statistics (Gr 10–12)",
    domain: "Inference (means, proportions, regression)",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "S-IC.B.4", text: "Use data from a sample survey to estimate a population mean or proportion; develop a margin of error.", nwea: [], overlap: "gap" },
      { code: "S-IC.B.5-6", text: "Significance tests for population parameters (z, t, χ²); inference for slope of regression.", nwea: [], overlap: "gap" }
    ],
    summary: "The college-level core of AP Statistics. Distinguishes the course from a high-school-level descriptive stats class."
  },

  // ============================================================
  // ELA · KINDERGARTEN
  // ============================================================
  "ela:gK-RL": {
    subject: "ELA",
    grade: "Kindergarten",
    domain: "Reading: Literature (RL)",
    nweaTest: "MAP Growth K-2 Reading",
    nweaArea: "Literature",
    ritBand: "<161 to 171–180",
    standards: [
      { code: "RL.K.1", text: "With prompting and support, ask and answer questions about key details in a text.",
        nwea: [
          { rit: "<161", text: "Identifies key details in a story read aloud" },
          { rit: "161–170", text: "Answers literal questions about key details" }
        ], overlap: "full" },
      { code: "RL.K.2", text: "With prompting and support, retell familiar stories, including key details.",
        nwea: [
          { rit: "161–170", text: "Identifies events in sequence in a familiar story" }
        ], overlap: "full" },
      { code: "RL.K.3", text: "With prompting and support, identify characters, settings, and major events in a story.",
        nwea: [
          { rit: "161–170", text: "Identifies characters in a story" },
          { rit: "171–180", text: "Identifies setting and major events" }
        ], overlap: "full" }
    ],
    summary: "Clean alignment. K-2 Reading uses audio read-aloud items so the test can assess RL.K skills in pre-readers."
  },
  "ela:gK-RI": {
    subject: "ELA",
    grade: "Kindergarten",
    domain: "Reading: Informational Text (RI)",
    nweaTest: "MAP Growth K-2 Reading",
    nweaArea: "Informational Text",
    ritBand: "<161 to 171–180",
    standards: [
      { code: "RI.K.2", text: "With prompting and support, identify the main topic and retell key details of a text.",
        nwea: [
          { rit: "161–170", text: "Identifies main topic of an informational text read aloud" }
        ], overlap: "full" },
      { code: "RI.K.3", text: "With prompting and support, describe the connection between two individuals, events, ideas, or pieces of information in a text.",
        nwea: [
          { rit: "171–180", text: "Identifies connections between ideas in informational text" }
        ], overlap: "full" }
    ],
    summary: "Clean."
  },
  "ela:gK-RF": {
    subject: "ELA",
    grade: "Kindergarten",
    domain: "Reading: Foundational Skills (RF)",
    nweaTest: "MAP Growth K-2 Reading + MAP Reading Fluency",
    nweaArea: "Foundational Skills · Oral Reading Fluency",
    ritBand: "<161 to 181–190",
    standards: [
      { code: "RF.K.1", text: "Demonstrate understanding of the organization and basic features of print.",
        nwea: [
          { rit: "<161", text: "Identifies print conventions (left-to-right, return sweep)" }
        ], overlap: "full" },
      { code: "RF.K.2", text: "Demonstrate understanding of spoken words, syllables, and sounds (phonemes) — rhyming, syllables, onset/rime, phoneme isolation.",
        nwea: [
          { rit: "<161", text: "Recognizes rhyming words" },
          { rit: "161–170", text: "Segments spoken words into syllables" },
          { rit: "171–180", text: "Isolates initial phonemes in spoken words" }
        ], overlap: "full" },
      { code: "RF.K.3", text: "Know and apply grade-level phonics and word analysis skills in decoding words (letter-sound, common high-frequency words).",
        nwea: [
          { rit: "161–170", text: "Identifies letter-sound correspondences" },
          { rit: "171–180", text: "Reads common high-frequency words by sight" }
        ], overlap: "full" },
      { code: "RF.K.4", text: "Read emergent-reader texts with purpose and understanding.",
        nwea: [
          { rit: "171–180", text: "Reads emergent-reader text with prompting" }
        ], overlap: "partial",
        note: "RF.4 oral reading rate/accuracy/prosody requires the separate MAP Reading Fluency product." }
    ],
    summary: "Foundational Skills are well-tested in K-2 Reading EXCEPT for oral fluency components (rate, accuracy, prosody), which require MAP Reading Fluency.",
    gaps: [
      "RF.K.4 oral fluency (words correct per minute, prosody) is not measurable via MAP Growth K-2 Reading alone."
    ]
  },
  "ela:gK-W": {
    subject: "ELA",
    grade: "Kindergarten",
    domain: "Writing (W)",
    nweaTest: "Not directly assessed",
    nweaArea: "—",
    ritBand: "—",
    standards: [
      { code: "W.K.1", text: "Use a combination of drawing, dictating, and writing to compose opinion pieces.",
        nwea: [], overlap: "gap",
        note: "No K-level writing assessment in NWEA's product line." },
      { code: "W.K.2", text: "Use a combination of drawing, dictating, and writing to compose informative/explanatory texts.",
        nwea: [], overlap: "gap" },
      { code: "W.K.3", text: "Use a combination of drawing, dictating, and writing to narrate a single event.",
        nwea: [], overlap: "gap" }
    ],
    summary: "Writing composition is not assessed by NWEA at any grade. Language Usage typically begins around Grade 2 and tests editing of supplied text — never composition.",
    gaps: [
      "All three K writing standards (opinion, informative, narrative) have no NWEA equivalent. Use teacher rubrics or work samples."
    ]
  },
  "ela:gK-SL": {
    subject: "ELA",
    grade: "Kindergarten",
    domain: "Speaking & Listening (SL)",
    nweaTest: "Not assessed",
    nweaArea: "—",
    ritBand: "—",
    standards: [
      { code: "SL.K.1", text: "Participate in collaborative conversations with diverse partners about kindergarten topics and texts with peers and adults.",
        nwea: [], overlap: "gap" },
      { code: "SL.K.2", text: "Confirm understanding of a text read aloud or information presented orally by asking and answering questions.",
        nwea: [], overlap: "gap" },
      { code: "SL.K.4", text: "Describe familiar people, places, things, and events.",
        nwea: [], overlap: "gap" }
    ],
    summary: "Speaking & Listening has no NWEA equivalent at any grade level. This is a documented gap in MAP coverage of CCSS-ELA.",
    gaps: [
      "Entire SL strand at all grades has no NWEA assessment. Use observation rubrics or oral language inventories."
    ]
  },
  "ela:gK-L": {
    subject: "ELA",
    grade: "Kindergarten",
    domain: "Language (L)",
    nweaTest: "MAP Growth K-2 Reading",
    nweaArea: "Vocabulary Use & Functions",
    ritBand: "<161 to 171–180",
    standards: [
      { code: "L.K.1", text: "Demonstrate command of the conventions of standard English grammar and usage when writing or speaking (print upper and lowercase letters, frequently occurring nouns and verbs, plurals).",
        nwea: [
          { rit: "161–170", text: "Identifies frequently occurring nouns and verbs" }
        ], overlap: "partial",
        note: "Conventions are touched but not deeply tested in K-2 Reading; Language Usage doesn't yet apply." },
      { code: "L.K.4", text: "Determine or clarify the meaning of unknown and multiple-meaning words and phrases based on kindergarten reading and content.",
        nwea: [
          { rit: "161–170", text: "Determines word meaning from context" }
        ], overlap: "full" },
      { code: "L.K.5", text: "Sort common objects into categories; demonstrate understanding of frequently occurring verbs and adjectives by relating them to their opposites.",
        nwea: [
          { rit: "161–170", text: "Identifies word relationships (categories, opposites)" }
        ], overlap: "full" }
    ],
    summary: "Vocabulary (L.4–5) is well-covered. Conventions (L.1–2) are minimally tested at K — fuller coverage begins with Language Usage in Grade 2."
  },

  // ============================================================
  // ELA · GRADE 1 — abbreviated to keep file size manageable
  // (similar structure for grades 1-12)
  // ============================================================
  "ela:g1-RL": {
    subject: "ELA",
    grade: "Grade 1",
    domain: "Reading: Literature (RL)",
    nweaTest: "MAP Growth K-2 Reading",
    nweaArea: "Literature",
    ritBand: "161–190",
    standards: [
      { code: "RL.1.1", text: "Ask and answer questions about key details in a text.",
        nwea: [{ rit: "171–180", text: "Answers questions about key details in a literary text" }], overlap: "full" },
      { code: "RL.1.2", text: "Retell stories, including key details, and demonstrate understanding of their central message or lesson.",
        nwea: [
          { rit: "181–190", text: "Identifies central message or lesson" },
          { rit: "181–190", text: "Retells story events with key details" }
        ], overlap: "full" },
      { code: "RL.1.3", text: "Describe characters, settings, and major events in a story, using key details.",
        nwea: [{ rit: "171–180", text: "Describes characters and settings using text details" }], overlap: "full" }
    ],
    summary: "Clean."
  },
  "ela:g1-RI": {
    subject: "ELA",
    grade: "Grade 1",
    domain: "Reading: Informational (RI)",
    nweaTest: "MAP Growth K-2 Reading",
    nweaArea: "Informational Text",
    ritBand: "161–190",
    standards: [
      { code: "RI.1.2", text: "Identify the main topic and retell key details of a text.",
        nwea: [{ rit: "171–180", text: "Identifies main topic of an informational text" }], overlap: "full" },
      { code: "RI.1.5", text: "Know and use various text features (headings, tables of contents, glossaries) to locate key facts.",
        nwea: [{ rit: "181–190", text: "Uses text features to locate information" }], overlap: "full" }
    ],
    summary: "Clean."
  },
  "ela:g1-RF": {
    subject: "ELA",
    grade: "Grade 1",
    domain: "Reading: Foundational Skills (RF)",
    nweaTest: "MAP Growth K-2 Reading + MAP Reading Fluency",
    nweaArea: "Foundational Skills · ORF",
    ritBand: "161–200",
    standards: [
      { code: "RF.1.2", text: "Demonstrate understanding of spoken words, syllables, and sounds (phonemes) — distinguish long/short vowels in single-syllable words; segment and blend phonemes.",
        nwea: [
          { rit: "171–180", text: "Distinguishes long and short vowels in spoken words" },
          { rit: "181–190", text: "Segments and blends phonemes" }
        ], overlap: "full" },
      { code: "RF.1.3", text: "Know and apply grade-level phonics and word analysis skills (long vowels, common vowel teams, two-syllable words, inflectional endings).",
        nwea: [
          { rit: "181–190", text: "Decodes words with common vowel teams" },
          { rit: "191–200", text: "Decodes two-syllable words by syllabication" }
        ], overlap: "full" },
      { code: "RF.1.4", text: "Read with sufficient accuracy and fluency to support comprehension (purpose, accuracy, rate, expression; self-correction).",
        nwea: [], overlap: "gap",
        note: "Oral fluency only via MAP Reading Fluency product." }
    ],
    summary: "Phonics is well-covered; oral fluency requires the Reading Fluency product.",
    gaps: ["RF.1.4 oral fluency (rate, accuracy, prosody) is only measurable via MAP Reading Fluency."]
  },
  "ela:g1-W": {
    subject: "ELA", grade: "Grade 1", domain: "Writing (W)",
    nweaTest: "Not directly assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "W.1.1", text: "Write opinion pieces in which they introduce the topic, state an opinion, supply a reason, and provide some sense of closure.",
        nwea: [], overlap: "gap" },
      { code: "W.1.2", text: "Write informative/explanatory texts in which they name a topic, supply some facts, and provide closure.", nwea: [], overlap: "gap" },
      { code: "W.1.3", text: "Write narratives in which they recount two or more sequenced events, include details, use temporal words, and provide closure.", nwea: [], overlap: "gap" }
    ],
    summary: "Writing composition not assessed.",
    gaps: ["All three writing types have no NWEA equivalent. Use teacher rubrics."]
  },
  "ela:g1-SL": {
    subject: "ELA", grade: "Grade 1", domain: "Speaking & Listening (SL)",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "SL.1.1", text: "Participate in collaborative conversations with diverse partners about Grade 1 topics and texts (follow rules, build on others' talk).",
        nwea: [], overlap: "gap" },
      { code: "SL.1.4", text: "Describe people, places, things, and events with relevant details, expressing ideas and feelings clearly.",
        nwea: [], overlap: "gap" }
    ],
    summary: "SL not assessed.",
    gaps: ["Entire SL strand has no NWEA assessment."]
  },
  "ela:g1-L": {
    subject: "ELA", grade: "Grade 1", domain: "Language (L)",
    nweaTest: "MAP Growth K-2 Reading", nweaArea: "Vocabulary Use & Functions",
    ritBand: "161–190",
    standards: [
      { code: "L.1.1", text: "Demonstrate command of the conventions of standard English grammar and usage (sentence types, common/proper nouns, singular/plural, personal/possessive pronouns).",
        nwea: [{ rit: "171–180", text: "Identifies common, proper, and possessive nouns" }], overlap: "partial",
        note: "Conventions tested lightly in K-2; Language Usage adds depth in Gr 2+." },
      { code: "L.1.2", text: "Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling (capitalize dates and names, end punctuation, commas in dates).",
        nwea: [{ rit: "181–190", text: "Identifies end punctuation and capitalization rules" }], overlap: "partial" },
      { code: "L.1.4", text: "Determine or clarify the meaning of unknown and multiple-meaning words and phrases (context clues, frequently occurring affixes, root words and inflections).",
        nwea: [
          { rit: "171–180", text: "Uses context clues to determine word meaning" },
          { rit: "181–190", text: "Identifies frequently occurring affixes (un-, re-)" }
        ], overlap: "full" }
    ],
    summary: "Vocabulary cleanly covered; conventions partially covered."
  },

  // ============================================================
  // ELA · GRADE 2
  // ============================================================
  "ela:g2-RL": {
    subject: "ELA", grade: "Grade 2", domain: "Reading: Literature (RL)",
    nweaTest: "MAP Growth K-2 or 2-5 Reading", nweaArea: "Literature", ritBand: "171–200",
    standards: [
      { code: "RL.2.1", text: "Ask and answer such questions as who, what, where, when, why, and how to demonstrate understanding of key details in a text.",
        nwea: [{ rit: "181–190", text: "Answers literal questions about key details" }], overlap: "full" },
      { code: "RL.2.2", text: "Recount stories, including fables and folktales from diverse cultures, and determine their central message, lesson, or moral.",
        nwea: [
          { rit: "181–190", text: "Recounts story events" },
          { rit: "191–200", text: "Identifies central message, lesson, or moral" }
        ], overlap: "full" },
      { code: "RL.2.5", text: "Describe the overall structure of a story, including describing how the beginning introduces the story and the ending concludes the action.",
        nwea: [{ rit: "191–200", text: "Identifies story structure (beginning, middle, end)" }], overlap: "full" }
    ],
    summary: "Clean. Transition grade — districts vary on K-2 vs. 2-5 form."
  },
  "ela:g2-RI": {
    subject: "ELA", grade: "Grade 2", domain: "Reading: Informational (RI)",
    nweaTest: "MAP Growth K-2 or 2-5 Reading", nweaArea: "Informational Text", ritBand: "171–200",
    standards: [
      { code: "RI.2.2", text: "Identify the main topic of a multiparagraph text as well as the focus of specific paragraphs within the text.",
        nwea: [{ rit: "191–200", text: "Identifies main topic of multi-paragraph text" }], overlap: "full" },
      { code: "RI.2.9", text: "Compare and contrast the most important points presented by two texts on the same topic.",
        nwea: [{ rit: "191–200", text: "Compares two texts on the same topic" }], overlap: "full" }
    ],
    summary: "Clean."
  },
  "ela:g2-RF": {
    subject: "ELA", grade: "Grade 2", domain: "Reading: Foundational Skills (RF)",
    nweaTest: "K-2 Reading + MAP Reading Fluency", nweaArea: "Foundational Skills · ORF", ritBand: "171–200",
    standards: [
      { code: "RF.2.3", text: "Know and apply grade-level phonics and word analysis skills (long/short vowels, vowel teams, prefixes/suffixes, irregularly spelled words).",
        nwea: [
          { rit: "181–190", text: "Decodes words with vowel teams" },
          { rit: "191–200", text: "Decodes words with common prefixes and suffixes" }
        ], overlap: "full" },
      { code: "RF.2.4", text: "Read with sufficient accuracy and fluency to support comprehension (purpose, accuracy, rate, expression).",
        nwea: [], overlap: "gap" }
    ],
    summary: "RF.2.4 oral fluency requires Reading Fluency product.",
    gaps: ["Oral reading fluency requires the separate MAP Reading Fluency product."]
  },
  "ela:g2-W": {
    subject: "ELA", grade: "Grade 2", domain: "Writing (W)",
    nweaTest: "MAP Growth Language Usage (begins ~Gr 2)", nweaArea: "Edit for Meaning · Language Use · Conventions",
    ritBand: "171–200",
    standards: [
      { code: "W.2.1", text: "Write opinion pieces in which they introduce the topic or book they are writing about, state an opinion, supply reasons that support the opinion, use linking words, and provide a concluding statement.",
        nwea: [{ rit: "181–190", text: "Edits opinion text for clarity and structure" }], overlap: "partial",
        note: "Language Usage tests editing of supplied text, not student composition." },
      { code: "W.2.5", text: "With guidance and support from adults and peers, focus on a topic and strengthen writing as needed by revising and editing.",
        nwea: [{ rit: "181–190", text: "Identifies edits that strengthen meaning in supplied text" }], overlap: "full" }
    ],
    summary: "Editing skills tested via Language Usage. Composition still not directly assessed.",
    gaps: ["W.2.1–3 composition not directly assessed — only the editing piece."]
  },
  "ela:g2-SL": {
    subject: "ELA", grade: "Grade 2", domain: "Speaking & Listening (SL)",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "SL.2.4", text: "Tell a story or recount an experience with appropriate facts and relevant, descriptive details.", nwea: [], overlap: "gap" }
    ],
    summary: "SL not assessed.", gaps: ["No NWEA equivalent for SL."]
  },
  "ela:g2-L": {
    subject: "ELA", grade: "Grade 2", domain: "Language (L)",
    nweaTest: "2-5 Reading + Language Usage",
    nweaArea: "Vocabulary Acq. & Use · Conventions",
    ritBand: "171–200",
    standards: [
      { code: "L.2.1", text: "Demonstrate command of the conventions of standard English grammar and usage (collective nouns, irregular plurals, reflexive pronouns, past tense of irregular verbs).",
        nwea: [
          { rit: "181–190", text: "Identifies collective nouns and irregular plurals" },
          { rit: "191–200", text: "Identifies past tense of irregular verbs" }
        ], overlap: "full" },
      { code: "L.2.2", text: "Demonstrate command of the conventions of standard English capitalization, punctuation, and spelling (holidays/products/geographic names; commas in greetings; apostrophes for contractions and possessives).",
        nwea: [{ rit: "191–200", text: "Identifies capitalization rules and apostrophe usage" }], overlap: "full" },
      { code: "L.2.4", text: "Determine or clarify the meaning of unknown words (context clues, prefixes, root words, compound words, dictionary use).",
        nwea: [{ rit: "181–190", text: "Uses prefixes and root words to determine meaning" }], overlap: "full" }
    ],
    summary: "Clean — split between Reading (vocabulary) and Language Usage (conventions)."
  },

  // ============================================================
  // ELA · GRADE 3
  // ============================================================
  "ela:g3-RL": {
    subject: "ELA", grade: "Grade 3", domain: "Reading: Literature (RL)",
    nweaTest: "MAP Growth 2-5 Reading", nweaArea: "Literature", ritBand: "181–210",
    standards: [
      { code: "RL.3.1", text: "Ask and answer questions to demonstrate understanding of a text, referring explicitly to the text as the basis for the answers.",
        nwea: [{ rit: "191–200", text: "Cites text evidence to support answers" }], overlap: "full" },
      { code: "RL.3.2", text: "Recount stories, including fables, folktales, and myths from diverse cultures; determine the central message, lesson, or moral and explain how it is conveyed through key details in the text.",
        nwea: [
          { rit: "201–210", text: "Identifies central message and how it is conveyed" }
        ], overlap: "full" },
      { code: "RL.3.6", text: "Distinguish their own point of view from that of the narrator or those of the characters.",
        nwea: [{ rit: "201–210", text: "Distinguishes narrator's POV from reader's" }], overlap: "full" }
    ],
    summary: "Clean. The 'how the message is conveyed' move (RL.3.2) is the precursor to high-school theme analysis."
  },
  "ela:g3-RI": {
    subject: "ELA", grade: "Grade 3", domain: "Reading: Informational (RI)",
    nweaTest: "MAP Growth 2-5 Reading", nweaArea: "Informational Text", ritBand: "181–210",
    standards: [
      { code: "RI.3.2", text: "Determine the main idea of a text; recount the key details and explain how they support the main idea.",
        nwea: [{ rit: "201–210", text: "Determines main idea and supporting details" }], overlap: "full" },
      { code: "RI.3.5", text: "Use text features and search tools (key words, sidebars, hyperlinks) to locate information relevant to a given topic efficiently.",
        nwea: [{ rit: "191–200", text: "Uses text features (headings, sidebars) to locate information" }], overlap: "full" },
      { code: "RI.3.8", text: "Describe the logical connection between particular sentences and paragraphs in a text (comparison, cause/effect, sequence).",
        nwea: [{ rit: "201–210", text: "Identifies logical connections (cause/effect, sequence) in informational text" }], overlap: "full" }
    ],
    summary: "Clean."
  },
  "ela:g3-RF": {
    subject: "ELA", grade: "Grade 3", domain: "Reading: Foundational Skills (RF)",
    nweaTest: "MAP Reading Fluency", nweaArea: "ORF + Decoding + Comprehension", ritBand: "181–210",
    standards: [
      { code: "RF.3.3", text: "Know and apply grade-level phonics and word analysis skills (multisyllabic words, prefixes/suffixes, Latin suffixes, irregularly spelled words).",
        nwea: [{ rit: "191–200", text: "Decodes multisyllabic words; identifies Latin suffixes" }], overlap: "full" },
      { code: "RF.3.4", text: "Read with sufficient accuracy and fluency to support comprehension.",
        nwea: [{ rit: "Reading Fluency", text: "Oral reading rate, accuracy, prosody (Reading Fluency only)" }], overlap: "partial",
        note: "Some districts stop Reading Fluency after Gr 3." }
    ],
    summary: "Clean for phonics; oral fluency only via Reading Fluency product."
  },
  "ela:g3-W": {
    subject: "ELA", grade: "Grade 3", domain: "Writing (W)",
    nweaTest: "MAP Growth Language Usage", nweaArea: "Edit for Meaning · Language Use · Conventions",
    ritBand: "181–210",
    standards: [
      { code: "W.3.1", text: "Write opinion pieces on topics or texts, supporting a point of view with reasons (introduce topic, state opinion, create organizational structure, provide reasons, use linking words, provide concluding statement).",
        nwea: [{ rit: "191–200", text: "Edits opinion writing for organization and linking words" }], overlap: "partial" },
      { code: "W.3.2", text: "Write informative/explanatory texts to examine a topic and convey ideas and information clearly.",
        nwea: [{ rit: "191–200", text: "Edits informative text for grouping of related information" }], overlap: "partial" },
      { code: "W.3.7", text: "Conduct short research projects that build knowledge about a topic.", nwea: [], overlap: "gap" }
    ],
    summary: "Editing of all three writing types is tested. Composition and research production are gaps.",
    gaps: ["W.3.7 (research projects) and overall composition are not directly assessed."]
  },
  "ela:g3-SL": {
    subject: "ELA", grade: "Grade 3", domain: "Speaking & Listening (SL)",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "SL.3.1", text: "Engage effectively in a range of collaborative discussions with diverse partners on Grade 3 topics and texts.", nwea: [], overlap: "gap" }
    ],
    summary: "SL not assessed.", gaps: ["No NWEA equivalent for SL strand."]
  },
  "ela:g3-L": {
    subject: "ELA", grade: "Grade 3", domain: "Language (L)",
    nweaTest: "2-5 Reading + Language Usage",
    nweaArea: "Vocabulary Acq. & Use · Conventions", ritBand: "181–210",
    standards: [
      { code: "L.3.1", text: "Demonstrate command of the conventions of standard English grammar and usage (parts of speech, regular/irregular plurals, abstract nouns, regular/irregular verbs, simple verb tenses, subject-verb and pronoun-antecedent agreement).",
        nwea: [
          { rit: "201–210", text: "Identifies parts of speech in context" },
          { rit: "201–210", text: "Identifies subject-verb agreement errors" }
        ], overlap: "full" },
      { code: "L.3.4", text: "Determine or clarify the meaning of unknown and multiple-meaning words (sentence-level context, prefixes/suffixes, root words, glossaries).",
        nwea: [{ rit: "201–210", text: "Uses prefixes, suffixes, and roots to determine word meaning" }], overlap: "full" },
      { code: "L.3.5", text: "Demonstrate understanding of word relationships and nuances in word meanings (literal vs. nonliteral; word relationships; shades of meaning).",
        nwea: [{ rit: "201–210", text: "Distinguishes literal and nonliteral meanings" }], overlap: "full" }
    ],
    summary: "Clean."
  },

  // ============================================================
  // ELA · GRADE 4
  // ============================================================
  "ela:g4-RL": {
    subject: "ELA", grade: "Grade 4", domain: "Reading: Literature (RL)",
    nweaTest: "MAP Growth 2-5 Reading", nweaArea: "Literature", ritBand: "191–220",
    standards: [
      { code: "RL.4.1", text: "Refer to details and examples in a text when explaining what the text says explicitly and when drawing inferences from the text.",
        nwea: [{ rit: "201–210", text: "Cites details to support inferences" }], overlap: "full" },
      { code: "RL.4.2", text: "Determine a theme of a story, drama, or poem from details in the text; summarize the text.",
        nwea: [
          { rit: "201–210", text: "Identifies theme from text details" },
          { rit: "211–220", text: "Summarizes a literary text" }
        ], overlap: "full" },
      { code: "RL.4.6", text: "Compare and contrast the point of view from which different stories are narrated, including the difference between first- and third-person narrations.",
        nwea: [{ rit: "211–220", text: "Distinguishes first-person from third-person narration" }], overlap: "full" }
    ],
    summary: "Clean. Theme + summarize is the highest-leverage reading move at Grade 4."
  },
  "ela:g4-RI": {
    subject: "ELA", grade: "Grade 4", domain: "Reading: Informational (RI)",
    nweaTest: "MAP Growth 2-5 Reading", nweaArea: "Informational Text", ritBand: "191–220",
    standards: [
      { code: "RI.4.2", text: "Determine the main idea of a text and explain how it is supported by key details; summarize the text.",
        nwea: [{ rit: "201–210", text: "Determines main idea and key supporting details" }], overlap: "full" },
      { code: "RI.4.3", text: "Explain events, procedures, ideas, or concepts in a historical, scientific, or technical text, including what happened and why.",
        nwea: [{ rit: "211–220", text: "Explains events/procedures/concepts in informational text" }], overlap: "full" },
      { code: "RI.4.8", text: "Explain how an author uses reasons and evidence to support particular points in a text.",
        nwea: [{ rit: "211–220", text: "Identifies reasons/evidence supporting author's points" }], overlap: "full" }
    ],
    summary: "Clean."
  },
  "ela:g4-RF": {
    subject: "ELA", grade: "Grade 4", domain: "Reading: Foundational Skills (RF)",
    nweaTest: "MAP Reading Fluency (if used)", nweaArea: "ORF + Decoding", ritBand: "191–220",
    standards: [
      { code: "RF.4.3", text: "Know and apply grade-level phonics and word analysis skills (letter-sound correspondences, syllabication patterns, morphology — roots and affixes).",
        nwea: [{ rit: "201–210", text: "Decodes words using morphology (roots, affixes)" }], overlap: "full" },
      { code: "RF.4.4", text: "Read with sufficient accuracy and fluency to support comprehension.",
        nwea: [{ rit: "Reading Fluency", text: "Oral reading rate, accuracy, prosody" }], overlap: "partial",
        note: "Many districts stop Reading Fluency after Gr 3." }
    ],
    summary: "Phonics covered; oral fluency only via Reading Fluency.",
    gaps: ["RF.4.4 oral fluency not in MAP Growth Reading."]
  },
  "ela:g4-W": {
    subject: "ELA", grade: "Grade 4", domain: "Writing (W)",
    nweaTest: "MAP Growth Language Usage", nweaArea: "Edit for Meaning · Language Use · Conventions",
    ritBand: "191–220",
    standards: [
      { code: "W.4.1", text: "Write opinion pieces, supporting a point of view with reasons and information (introduce topic, organize logically, provide reasons supported by facts and details, link with phrases, conclude).",
        nwea: [{ rit: "201–210", text: "Edits opinion writing for organization and supporting evidence" }], overlap: "partial" },
      { code: "W.4.4", text: "Produce clear and coherent writing in which the development and organization are appropriate to task, purpose, and audience.",
        nwea: [{ rit: "211–220", text: "Edits writing for development, organization, and audience appropriateness" }], overlap: "full" }
    ],
    summary: "Editing covered; composition not directly assessed.",
    gaps: ["Student composition (W.1-3, W.7-9) not directly assessed."]
  },
  "ela:g4-SL": {
    subject: "ELA", grade: "Grade 4", domain: "Speaking & Listening (SL)",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "SL.4.2", text: "Paraphrase portions of a text read aloud or information presented in diverse media and formats.", nwea: [], overlap: "gap" }
    ],
    summary: "SL not assessed.", gaps: ["No NWEA equivalent for SL."]
  },
  "ela:g4-L": {
    subject: "ELA", grade: "Grade 4", domain: "Language (L)",
    nweaTest: "2-5 Reading + Language Usage",
    nweaArea: "Vocabulary Acq. & Use · Conventions", ritBand: "191–220",
    standards: [
      { code: "L.4.1", text: "Demonstrate command of standard English grammar (relative pronouns, relative adverbs, progressive verb tenses, modal auxiliaries, ordering adjectives, complete sentences).",
        nwea: [{ rit: "201–210", text: "Identifies progressive verb tenses and modal auxiliaries" }], overlap: "full" },
      { code: "L.4.4", text: "Determine or clarify the meaning of unknown and multiple-meaning words and phrases (context, Greek and Latin affixes and roots, reference materials).",
        nwea: [
          { rit: "201–210", text: "Uses Greek and Latin affixes and roots to determine word meaning" },
          { rit: "211–220", text: "Uses reference materials to clarify word meaning" }
        ], overlap: "full" },
      { code: "L.4.5", text: "Demonstrate understanding of figurative language, word relationships, and nuances in word meanings (similes, metaphors, idioms, adages, proverbs).",
        nwea: [{ rit: "211–220", text: "Identifies similes, metaphors, idioms, adages, proverbs" }], overlap: "full" }
    ],
    summary: "Clean."
  },

  // ============================================================
  // ELA · GRADE 5
  // ============================================================
  "ela:g5-RL": {
    subject: "ELA", grade: "Grade 5", domain: "Reading: Literature (RL)",
    nweaTest: "MAP Growth 2-5 Reading", nweaArea: "Literature", ritBand: "201–225",
    standards: [
      { code: "RL.5.2", text: "Determine a theme of a story, drama, or poem from details in the text, including how characters respond to challenges or how the speaker reflects upon a topic; summarize the text.",
        nwea: [
          { rit: "211–220", text: "Identifies theme using details about character response" },
          { rit: "211–220", text: "Summarizes a literary text" }
        ], overlap: "full" },
      { code: "RL.5.4", text: "Determine the meaning of words and phrases as they are used in a text, including figurative language such as metaphors and similes.",
        nwea: [{ rit: "211–220", text: "Determines meaning of figurative language in literary context" }], overlap: "full" },
      { code: "RL.5.6", text: "Describe how a narrator's or speaker's point of view influences how events are described.",
        nwea: [{ rit: "221–230", text: "Analyzes how POV shapes events" }], overlap: "full" }
    ],
    summary: "Clean."
  },
  "ela:g5-RI": {
    subject: "ELA", grade: "Grade 5", domain: "Reading: Informational (RI)",
    nweaTest: "MAP Growth 2-5 Reading", nweaArea: "Informational Text", ritBand: "201–225",
    standards: [
      { code: "RI.5.2", text: "Determine two or more main ideas of a text and explain how they are supported by key details; summarize the text.",
        nwea: [{ rit: "211–220", text: "Determines two or more main ideas and supporting details" }], overlap: "full" },
      { code: "RI.5.5", text: "Compare and contrast the overall structure of events, ideas, concepts, or information in two or more texts (compare/contrast, cause/effect, problem/solution).",
        nwea: [{ rit: "221–230", text: "Compares overall text structures" }], overlap: "full" },
      { code: "RI.5.8", text: "Explain how an author uses reasons and evidence to support particular points in a text, identifying which reasons and evidence support which points.",
        nwea: [{ rit: "211–220", text: "Identifies which evidence supports which point" }], overlap: "full" }
    ],
    summary: "Clean."
  },
  "ela:g5-RF": {
    subject: "ELA", grade: "Grade 5", domain: "Reading: Foundational Skills (RF)",
    nweaTest: "MAP Reading Fluency (if used)", nweaArea: "ORF + Comprehension", ritBand: "201+",
    standards: [
      { code: "RF.5.3", text: "Know and apply grade-level phonics and word analysis skills in decoding words.",
        nwea: [{ rit: "211–220", text: "Decodes advanced multisyllabic words" }], overlap: "full" },
      { code: "RF.5.4", text: "Read with sufficient accuracy and fluency to support comprehension.",
        nwea: [{ rit: "Reading Fluency", text: "Oral reading rate and prosody (Reading Fluency only)" }], overlap: "partial" }
    ],
    summary: "Last grade with RF strand. Many districts stop fluency screening here."
  },
  "ela:g5-W": {
    subject: "ELA", grade: "Grade 5", domain: "Writing (W)",
    nweaTest: "MAP Growth Language Usage",
    nweaArea: "Edit for Meaning · Language Use · Conventions", ritBand: "201–220",
    standards: [
      { code: "W.5.1", text: "Write opinion pieces, supporting a point of view with reasons and information (introduce topic, create organizational structure that logically groups ideas, provide reasons supported by facts and details).",
        nwea: [{ rit: "211–220", text: "Edits opinion writing for logical grouping" }], overlap: "partial" },
      { code: "W.5.5", text: "With guidance and support, develop and strengthen writing as needed by planning, revising, editing, rewriting, or trying a new approach.",
        nwea: [{ rit: "211–220", text: "Identifies revisions that strengthen writing" }], overlap: "full" }
    ],
    summary: "Editing covered; composition not assessed.",
    gaps: ["Composition production is not directly assessed."]
  },
  "ela:g5-SL": {
    subject: "ELA", grade: "Grade 5", domain: "Speaking & Listening (SL)",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "SL.5.2", text: "Summarize a written text read aloud or information presented in diverse media and formats.", nwea: [], overlap: "gap" }
    ],
    summary: "SL not assessed.", gaps: ["No NWEA equivalent for SL."]
  },
  "ela:g5-L": {
    subject: "ELA", grade: "Grade 5", domain: "Language (L)",
    nweaTest: "2-5 Reading + Language Usage",
    nweaArea: "Vocabulary Acq. & Use · Conventions", ritBand: "201–220",
    standards: [
      { code: "L.5.1", text: "Demonstrate command of the conventions of standard English grammar and usage (conjunctions, prepositions, interjections; perfect verb tense; verb tense to convey time/sequence/condition).",
        nwea: [{ rit: "211–220", text: "Identifies perfect verb tense and tense shifts" }], overlap: "full" },
      { code: "L.5.5", text: "Demonstrate understanding of figurative language, word relationships, and nuances in word meanings (similes, metaphors, idioms, adages, proverbs; word relationships; nuances in word meanings).",
        nwea: [{ rit: "211–220", text: "Interprets figurative language including idioms, adages, proverbs" }], overlap: "full" }
    ],
    summary: "Clean."
  },

  // ============================================================
  // ELA · GRADE 6
  // ============================================================
  "ela:g6-RL": {
    subject: "ELA", grade: "Grade 6", domain: "Reading: Literature (RL)",
    nweaTest: "MAP Growth 6+ Reading", nweaArea: "Literary Text", ritBand: "201–225",
    standards: [
      { code: "RL.6.1", text: "Cite textual evidence to support analysis of what the text says explicitly as well as inferences drawn from the text.",
        nwea: [{ rit: "211–220", text: "Cites textual evidence for inferences" }], overlap: "full" },
      { code: "RL.6.2", text: "Determine a theme or central idea of a text and how it is conveyed through particular details; provide a summary distinct from personal opinion.",
        nwea: [
          { rit: "211–220", text: "Determines theme and how it is conveyed" },
          { rit: "221–230", text: "Provides objective summary" }
        ], overlap: "full" },
      { code: "RL.6.3", text: "Describe how a particular story's or drama's plot unfolds in a series of episodes as well as how the characters respond or change as the plot moves toward a resolution.",
        nwea: [{ rit: "221–230", text: "Analyzes plot development and character change" }], overlap: "full" }
    ],
    summary: "Clean. Form transition to 6+ Reading."
  },
  "ela:g6-RI": {
    subject: "ELA", grade: "Grade 6", domain: "Reading: Informational (RI)",
    nweaTest: "MAP Growth 6+ Reading", nweaArea: "Informational Text", ritBand: "201–225",
    standards: [
      { code: "RI.6.2", text: "Determine a central idea of a text and how it is conveyed through particular details; provide a summary of the text distinct from personal opinions or judgments.",
        nwea: [{ rit: "211–220", text: "Determines central idea and provides objective summary" }], overlap: "full" },
      { code: "RI.6.6", text: "Determine an author's point of view or purpose in a text and explain how it is conveyed.",
        nwea: [{ rit: "221–230", text: "Determines author's point of view and how it is conveyed" }], overlap: "full" },
      { code: "RI.6.8", text: "Trace and evaluate the argument and specific claims in a text, distinguishing claims that are supported by reasons and evidence from claims that are not.",
        nwea: [{ rit: "221–230", text: "Evaluates whether claims are supported by evidence" }], overlap: "full" }
    ],
    summary: "Clean."
  },
  "ela:g6-W": {
    subject: "ELA", grade: "Grade 6", domain: "Writing (W)",
    nweaTest: "MAP Growth Language Usage",
    nweaArea: "Edit for Meaning · Language Use · Conventions", ritBand: "211–230",
    standards: [
      { code: "W.6.1", text: "Write arguments to support claims with clear reasons and relevant evidence (introduce claims, support with relevant evidence, use credible sources, use words to clarify relationships among claims/reasons, establish formal style, provide concluding statement).",
        nwea: [{ rit: "221–230", text: "Edits argumentative text for clarity of claims and evidence" }], overlap: "partial" }
    ],
    summary: "Editing covered; argument composition not directly assessed.",
    gaps: ["Argument writing as composition is not assessed."]
  },
  "ela:g6-SL": {
    subject: "ELA", grade: "Grade 6", domain: "Speaking & Listening (SL)",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "SL.6.3", text: "Delineate a speaker's argument and specific claims, distinguishing claims that are supported by reasons and evidence from claims that are not.", nwea: [], overlap: "gap" }
    ],
    summary: "SL not assessed.", gaps: ["No NWEA equivalent for SL."]
  },
  "ela:g6-L": {
    subject: "ELA", grade: "Grade 6", domain: "Language (L)",
    nweaTest: "6+ Reading + Language Usage",
    nweaArea: "Vocabulary Acq. & Use · Conventions", ritBand: "211–230",
    standards: [
      { code: "L.6.1", text: "Demonstrate command of standard English grammar and usage (pronoun case; intensive pronouns; correcting vague pronouns and inappropriate shifts).",
        nwea: [{ rit: "221–230", text: "Identifies and corrects pronoun-case errors" }], overlap: "full" },
      { code: "L.6.2", text: "Demonstrate command of standard English capitalization, punctuation, and spelling (commas, parentheses, dashes to set off nonrestrictive elements; spelling).",
        nwea: [{ rit: "221–230", text: "Identifies correct use of commas, parentheses, dashes" }], overlap: "full" },
      { code: "L.6.5", text: "Demonstrate understanding of figurative language, word relationships, and nuances in word meanings.",
        nwea: [{ rit: "221–230", text: "Interprets figurative language and connotation" }], overlap: "full" }
    ],
    summary: "Clean."
  },

  // ============================================================
  // ELA · GRADE 7
  // ============================================================
  "ela:g7-RL": {
    subject: "ELA", grade: "Grade 7", domain: "Reading: Literature (RL)",
    nweaTest: "MAP Growth 6+ Reading", nweaArea: "Literary Text", ritBand: "211–230",
    standards: [
      { code: "RL.7.2", text: "Determine a theme or central idea of a text and analyze its development over the course of the text; provide an objective summary.",
        nwea: [{ rit: "221–230", text: "Analyzes theme development over the course of a text" }], overlap: "full" },
      { code: "RL.7.5", text: "Analyze how a drama's or poem's form or structure (e.g., soliloquy, sonnet) contributes to its meaning.",
        nwea: [{ rit: "221–230", text: "Analyzes how form/structure contributes to meaning" }], overlap: "full" }
    ],
    summary: "Clean."
  },
  "ela:g7-RI": {
    subject: "ELA", grade: "Grade 7", domain: "Reading: Informational (RI)",
    nweaTest: "MAP Growth 6+ Reading", nweaArea: "Informational Text", ritBand: "211–230",
    standards: [
      { code: "RI.7.2", text: "Determine two or more central ideas in a text and analyze their development over the course of the text.",
        nwea: [{ rit: "221–230", text: "Analyzes development of multiple central ideas" }], overlap: "full" },
      { code: "RI.7.8", text: "Trace and evaluate the argument and specific claims in a text, assessing whether the reasoning is sound and the evidence is relevant and sufficient.",
        nwea: [{ rit: "221–230", text: "Assesses soundness of reasoning and sufficiency of evidence" }], overlap: "full" }
    ],
    summary: "Clean."
  },
  "ela:g7-W": {
    subject: "ELA", grade: "Grade 7", domain: "Writing (W)",
    nweaTest: "MAP Growth Language Usage", nweaArea: "Edit for Meaning · Language Use · Conventions",
    ritBand: "211–230",
    standards: [
      { code: "W.7.1", text: "Write arguments to support claims with clear reasons and relevant evidence (introduce claims, acknowledge alternates, organize logically, support with credible sources, link with phrases, formal style, concluding statement).",
        nwea: [{ rit: "221–230", text: "Edits argument writing for logical organization" }], overlap: "partial" },
      { code: "W.7.8", text: "Gather relevant information from multiple print and digital sources, using search terms effectively; assess the credibility and accuracy of each source; quote or paraphrase the data and conclusions of others while avoiding plagiarism.",
        nwea: [], overlap: "gap" }
    ],
    summary: "Editing covered; research production gap.",
    gaps: ["Research process and source evaluation (W.7.8) not assessed."]
  },
  "ela:g7-SL": {
    subject: "ELA", grade: "Grade 7", domain: "Speaking & Listening (SL)",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "SL.7.3", text: "Delineate a speaker's argument and specific claims, evaluating the soundness of the reasoning and the relevance and sufficiency of the evidence.", nwea: [], overlap: "gap" }
    ],
    summary: "SL not assessed.", gaps: ["No NWEA equivalent for SL."]
  },
  "ela:g7-L": {
    subject: "ELA", grade: "Grade 7", domain: "Language (L)",
    nweaTest: "6+ Reading + Language Usage", nweaArea: "Vocabulary Acq. & Use · Conventions",
    ritBand: "211–230",
    standards: [
      { code: "L.7.1", text: "Demonstrate command of standard English grammar and usage (phrases and clauses; simple/compound/complex/compound-complex sentences; correcting misplaced and dangling modifiers).",
        nwea: [{ rit: "221–230", text: "Identifies and corrects misplaced and dangling modifiers" }], overlap: "full" },
      { code: "L.7.5", text: "Demonstrate understanding of figurative language, word relationships, and nuances in word meanings (figures of speech; relationships among particular words; connotations).",
        nwea: [{ rit: "221–230", text: "Distinguishes connotations among similar words" }], overlap: "full" }
    ],
    summary: "Clean."
  },

  // ============================================================
  // ELA · GRADE 8
  // ============================================================
  "ela:g8-RL": {
    subject: "ELA", grade: "Grade 8", domain: "Reading: Literature (RL)",
    nweaTest: "MAP Growth 6+ Reading", nweaArea: "Literary Text", ritBand: "211–240",
    standards: [
      { code: "RL.8.2", text: "Determine a theme or central idea of a text and analyze its development over the course of the text, including its relationship to the characters, setting, and plot; provide an objective summary.",
        nwea: [{ rit: "231–240", text: "Analyzes theme development in relationship to characters/setting/plot" }], overlap: "full" },
      { code: "RL.8.3", text: "Analyze how particular lines of dialogue or incidents in a story or drama propel the action, reveal aspects of a character, or provoke a decision.",
        nwea: [{ rit: "231–240", text: "Analyzes how dialogue/incidents reveal character or propel action" }], overlap: "full" }
    ],
    summary: "Clean."
  },
  "ela:g8-RI": {
    subject: "ELA", grade: "Grade 8", domain: "Reading: Informational (RI)",
    nweaTest: "MAP Growth 6+ Reading", nweaArea: "Informational Text", ritBand: "211–240",
    standards: [
      { code: "RI.8.3", text: "Analyze how a text makes connections among and distinctions between individuals, ideas, or events (comparisons, analogies, categories).",
        nwea: [{ rit: "231–240", text: "Analyzes connections and distinctions among individuals/ideas/events" }], overlap: "full" },
      { code: "RI.8.8", text: "Delineate and evaluate the argument and specific claims in a text, assessing whether the reasoning is sound and the evidence is relevant and sufficient; recognize when irrelevant evidence is introduced.",
        nwea: [{ rit: "231–240", text: "Recognizes irrelevant evidence in arguments" }], overlap: "full" }
    ],
    summary: "Clean."
  },
  "ela:g8-W": {
    subject: "ELA", grade: "Grade 8", domain: "Writing (W)",
    nweaTest: "MAP Growth Language Usage", nweaArea: "Edit for Meaning · Language Use · Conventions",
    ritBand: "221–240",
    standards: [
      { code: "W.8.1", text: "Write arguments to support claims with clear reasons and relevant evidence; introduce claims, acknowledge and distinguish from alternate or opposing claims, organize reasons and evidence logically, use credible sources, establish a formal style.",
        nwea: [{ rit: "231–240", text: "Edits argument for distinction between claims and counterclaims" }], overlap: "partial" }
    ],
    summary: "Editing covered; argument composition not directly assessed.",
    gaps: ["Counterclaim production not directly assessed."]
  },
  "ela:g8-SL": {
    subject: "ELA", grade: "Grade 8", domain: "Speaking & Listening (SL)",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "SL.8.3", text: "Delineate a speaker's argument and specific claims, evaluating the soundness of the reasoning and relevance and sufficiency of the evidence and identifying when irrelevant evidence is introduced.", nwea: [], overlap: "gap" }
    ],
    summary: "SL not assessed.", gaps: ["No NWEA equivalent for SL."]
  },
  "ela:g8-L": {
    subject: "ELA", grade: "Grade 8", domain: "Language (L)",
    nweaTest: "6+ Reading + Language Usage", nweaArea: "Vocabulary Acq. & Use · Conventions",
    ritBand: "221–240",
    standards: [
      { code: "L.8.1", text: "Demonstrate command of standard English grammar and usage (verbals — gerunds, participles, infinitives; active and passive voice; verb mood — indicative, imperative, interrogative, conditional, subjunctive).",
        nwea: [
          { rit: "231–240", text: "Identifies verbals (gerunds, participles, infinitives)" },
          { rit: "231–240", text: "Identifies active vs. passive voice and verb mood" }
        ], overlap: "full" },
      { code: "L.8.5", text: "Demonstrate understanding of figurative language, word relationships, and nuances in word meanings (verbal irony, puns, analogies).",
        nwea: [{ rit: "231–240", text: "Interprets analogies and verbal irony" }], overlap: "full" }
    ],
    summary: "Clean."
  },

  // ============================================================
  // ELA · GRADE 9-10
  // ============================================================
  "ela:g910-RL": {
    subject: "ELA", grade: "Grade 9–10", domain: "Reading: Literature (RL)",
    nweaTest: "MAP Growth 6+ Reading", nweaArea: "Literary Text", ritBand: "221–250",
    standards: [
      { code: "RL.9-10.2", text: "Determine a theme or central idea of a text and analyze in detail its development over the course of the text, including how it emerges and is shaped and refined by specific details; provide an objective summary.",
        nwea: [{ rit: "241–250", text: "Analyzes how theme is shaped and refined by specific details" }], overlap: "full" },
      { code: "RL.9-10.3", text: "Analyze how complex characters develop over the course of a text, interact with other characters, and advance the plot or develop the theme.",
        nwea: [{ rit: "241–250", text: "Analyzes development of complex characters" }], overlap: "full" }
    ],
    summary: "Clean for grade-level rigor."
  },
  "ela:g910-RI": {
    subject: "ELA", grade: "Grade 9–10", domain: "Reading: Informational (RI)",
    nweaTest: "MAP Growth 6+ Reading", nweaArea: "Informational Text", ritBand: "221–250",
    standards: [
      { code: "RI.9-10.5", text: "Analyze in detail how an author's ideas or claims are developed and refined by particular sentences, paragraphs, or larger portions of a text.",
        nwea: [{ rit: "241–250", text: "Analyzes how author's claims are developed across text portions" }], overlap: "full" },
      { code: "RI.9-10.8", text: "Delineate and evaluate the argument and specific claims in a text, assessing whether the reasoning is valid and the evidence is relevant and sufficient; identify false statements and fallacious reasoning.",
        nwea: [{ rit: "241–250", text: "Identifies fallacious reasoning and false statements in arguments" }], overlap: "full" }
    ],
    summary: "Clean."
  },
  "ela:g910-W": {
    subject: "ELA", grade: "Grade 9–10", domain: "Writing (W)",
    nweaTest: "MAP Growth Language Usage", nweaArea: "Edit for Meaning · Language Use · Conventions",
    ritBand: "221–250",
    standards: [
      { code: "W.9-10.1", text: "Write arguments to support claims in an analysis of substantive topics or texts (introduce precise claims, distinguish from alternate or opposing claims, develop claims and counterclaims fairly, supply evidence, use words/phrases/clauses to link, establish formal style and objective tone, provide concluding statement).",
        nwea: [{ rit: "241–250", text: "Edits argument for fairness in handling counterclaims" }], overlap: "partial" },
      { code: "W.9-10.7", text: "Conduct short as well as more sustained research projects to answer a question or solve a problem.", nwea: [], overlap: "gap" }
    ],
    summary: "Editing covered; sustained research and composition not assessed.",
    gaps: ["Sustained argument and research not directly assessed."]
  },
  "ela:g910-SL": {
    subject: "ELA", grade: "Grade 9–10", domain: "Speaking & Listening (SL)",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "SL.9-10.3", text: "Evaluate a speaker's point of view, reasoning, and use of evidence and rhetoric, identifying any fallacious reasoning or exaggerated or distorted evidence.", nwea: [], overlap: "gap" }
    ],
    summary: "SL not assessed.", gaps: ["No NWEA equivalent for SL."]
  },
  "ela:g910-L": {
    subject: "ELA", grade: "Grade 9–10", domain: "Language (L)",
    nweaTest: "6+ Reading + Language Usage", nweaArea: "Vocabulary Acq. & Use · Conventions",
    ritBand: "221–250",
    standards: [
      { code: "L.9-10.1", text: "Demonstrate command of standard English grammar and usage (parallel structure; various types of phrases and clauses to convey specific meanings and add variety and interest).",
        nwea: [{ rit: "241–250", text: "Identifies and corrects parallel structure errors" }], overlap: "full" },
      { code: "L.9-10.2", text: "Demonstrate command of standard English capitalization, punctuation, and spelling (semicolons, colons; spelling).",
        nwea: [{ rit: "241–250", text: "Identifies correct use of semicolons and colons" }], overlap: "full" },
      { code: "L.9-10.4", text: "Determine or clarify the meaning of unknown and multiple-meaning words and phrases (context, patterns of word changes that indicate part of speech).",
        nwea: [{ rit: "241–250", text: "Uses patterns of word changes to determine meaning and part of speech" }], overlap: "full" }
    ],
    summary: "Clean."
  },

  // ============================================================
  // ELA · GRADE 11-12
  // ============================================================
  "ela:g1112-RL": {
    subject: "ELA", grade: "Grade 11–12", domain: "Reading: Literature (RL)",
    nweaTest: "MAP Growth 6+ Reading", nweaArea: "Literary Text", ritBand: "230s–240s+",
    standards: [
      { code: "RL.11-12.2", text: "Determine two or more themes or central ideas of a text and analyze their development over the course of the text, including how they interact and build on one another to produce a complex account; provide an objective summary.",
        nwea: [{ rit: "241–250+", text: "Analyzes interaction of multiple themes" }], overlap: "partial",
        note: "Ceiling effects apply at the high end of the test." },
      { code: "RL.11-12.3", text: "Analyze the impact of the author's choices regarding how to develop and relate elements of a story or drama (e.g., where a story is set, how the action is ordered, how the characters are introduced and developed).",
        nwea: [{ rit: "241–250+", text: "Analyzes author's structural choices" }], overlap: "partial" }
    ],
    summary: "Test ceiling becomes a real concern for advanced 11-12 readers.",
    gaps: ["Test ceiling: students reading well above grade level may not get an accurate measurement."]
  },
  "ela:g1112-RI": {
    subject: "ELA", grade: "Grade 11–12", domain: "Reading: Informational (RI)",
    nweaTest: "MAP Growth 6+ Reading", nweaArea: "Informational Text", ritBand: "230s–240s+",
    standards: [
      { code: "RI.11-12.6", text: "Determine an author's point of view or purpose in a text in which the rhetoric is particularly effective, analyzing how style and content contribute to the power, persuasiveness, or beauty of the text.",
        nwea: [{ rit: "241–250+", text: "Analyzes rhetorical style and effectiveness" }], overlap: "partial" },
      { code: "RI.11-12.8", text: "Delineate and evaluate the reasoning in seminal U.S. texts, including the application of constitutional principles and use of legal reasoning and the premises, purposes, and arguments in works of public advocacy.",
        nwea: [{ rit: "241–250+", text: "Evaluates reasoning in foundational U.S. texts" }], overlap: "partial",
        note: "Seminal U.S. text content is genre-specific and may not be sampled in every test session." }
    ],
    summary: "Genre-specific (seminal U.S. texts) content may be under-sampled.",
    gaps: ["Test ceiling and content-genre sampling caveats apply."]
  },
  "ela:g1112-W": {
    subject: "ELA", grade: "Grade 11–12", domain: "Writing (W)",
    nweaTest: "MAP Growth Language Usage", nweaArea: "Edit for Meaning · Language Use · Conventions",
    ritBand: "230s–240s+",
    standards: [
      { code: "W.11-12.1", text: "Write arguments to support claims using valid reasoning and relevant and sufficient evidence (introduce precise/knowledgeable claim, distinguish from opposing claims, develop fairly and thoroughly, supply most relevant evidence, use sophisticated transitions, formal style/objective tone, conclude).",
        nwea: [{ rit: "241–250+", text: "Edits sophisticated argument for clarity and tone" }], overlap: "partial" }
    ],
    summary: "Editing covered; college-prep composition not directly assessed.",
    gaps: ["Sustained college-level argument and synthesis writing are not assessed."]
  },
  "ela:g1112-SL": {
    subject: "ELA", grade: "Grade 11–12", domain: "Speaking & Listening (SL)",
    nweaTest: "Not assessed", nweaArea: "—", ritBand: "—",
    standards: [
      { code: "SL.11-12.3", text: "Evaluate a speaker's point of view, reasoning, and use of evidence and rhetoric, assessing the stance, premises, links among ideas, word choice, points of emphasis, and tone used.", nwea: [], overlap: "gap" }
    ],
    summary: "SL not assessed.", gaps: ["No NWEA equivalent for SL."]
  },
  "ela:g1112-L": {
    subject: "ELA", grade: "Grade 11–12", domain: "Language (L)",
    nweaTest: "6+ Reading + Language Usage", nweaArea: "Vocabulary Acq. & Use · Conventions",
    ritBand: "230s–240s+",
    standards: [
      { code: "L.11-12.1", text: "Demonstrate command of the conventions of standard English grammar and usage (apply usage understanding to recognize when conventions of usage and meaning have been violated; resolve issues of complex or contested usage).",
        nwea: [{ rit: "241–250+", text: "Resolves contested or complex usage issues" }], overlap: "partial" },
      { code: "L.11-12.5", text: "Demonstrate understanding of figurative language, word relationships, and nuances in word meanings (figures of speech including hyperbole and paradox; nuances and connotations).",
        nwea: [{ rit: "241–250+", text: "Interprets hyperbole, paradox, and connotative shades" }], overlap: "full" }
    ],
    summary: "Vocabulary cleanly covered; college-prep usage edge cases reach test ceiling."
  }
};
