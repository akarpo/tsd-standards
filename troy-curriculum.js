// Troy School District (Troy, MI) curriculum overlay.
// K-5 only. Maps each MDE/CCSS cell to Troy's adopted/piloting curriculum:
//   • Math K-5 — Bridges in Mathematics (The Math Learning Center) + daily Number Corner — currently adopted
//   • ELA K-5 — Collaborative Literacy (Center for the Collaborative Classroom):
//                Being a Reader · Making Meaning · Being a Writer — currently piloting
//   • ELA K-2 RF — UFLI Foundations (Univ. of Florida Literacy Institute) — currently piloting (Tier 2)
//
// Schema:
//   [cellId]: [
//     { program, citation, coverage, status?, note? },
//     ...
//   ]
//
// status: "current" (already adopted) | "planned" (currently piloting; final adoption pending) | "tier2" (Tier 2 supplemental, also piloting)

window.TROY_CURRICULUM = {

  // ============================================================
  // MATH · BRIDGES IN MATHEMATICS (current — Math Learning Center 2nd Edition)
  // ============================================================

  // ===== Kindergarten =====
  "math:gK-CC": [
    { program: "Bridges Math", citation: "Unit 1: Numbers to Five & Ten", coverage: "K.CC.A.1–3, K.CC.B.4–5, K.CC.C.6", status: "current" },
    { program: "Bridges Math", citation: "Unit 2: Numbers to Ten", coverage: "K.CC.A.1–3, K.CC.B.4, K.CC.C.6–7", status: "current" },
    { program: "Bridges Math", citation: "Unit 7: Beyond Ten", coverage: "K.CC.A.1–2", status: "current" },
    { program: "Bridges Math", citation: "Number Corner (daily, all year)", coverage: "All K.CC standards spiraled daily", status: "current" }
  ],
  "math:gK-OA": [
    { program: "Bridges Math", citation: "Unit 3: Bikes & Bugs — Double, Add & Subtract", coverage: "K.OA.A.1–3, K.OA.A.5", status: "current" },
    { program: "Bridges Math", citation: "Unit 4: Paths to Adding, Subtracting & Measuring", coverage: "K.OA.A.1–5", status: "current" },
    { program: "Bridges Math", citation: "Number Corner (daily)", coverage: "All K.OA spiraled", status: "current" }
  ],
  "math:gK-NBT": [
    { program: "Bridges Math", citation: "Unit 6: Three-Dimensional Shapes & Numbers", coverage: "K.NBT.A.1", status: "current" },
    { program: "Bridges Math", citation: "Unit 7: Beyond Ten", coverage: "K.NBT.A.1", status: "current" },
    { program: "Bridges Math", citation: "Unit 8: Computing & Measuring with Frogs & Bugs", coverage: "K.NBT.A.1", status: "current" }
  ],
  "math:gK-MD": [
    { program: "Bridges Math", citation: "Unit 4: Paths to Adding, Subtracting & Measuring", coverage: "K.MD.A.1–2", status: "current" },
    { program: "Bridges Math", citation: "Unit 8: Weight & Place Value", coverage: "K.MD.A.1–2, K.MD.B.3", status: "current" }
  ],
  "math:gK-G": [
    { program: "Bridges Math", citation: "Unit 5: Two-Dimensional Geometry", coverage: "K.G.A.1–3, K.G.B.4–6", status: "current" },
    { program: "Bridges Math", citation: "Unit 6: Three-Dimensional Shapes & Numbers", coverage: "K.G.A.1–3, K.G.B.4", status: "current" }
  ],

  // ===== Grade 1 =====
  "math:g1-OA": [
    { program: "Bridges Math", citation: "Unit 1: Numbers All Around Us", coverage: "1.OA.C.5–6", status: "current" },
    { program: "Bridges Math", citation: "Unit 2: Developing Strategies with Dice & Dominoes", coverage: "1.OA.B.3–4, 1.OA.C.5–6, 1.OA.D.7–8", status: "current" },
    { program: "Bridges Math", citation: "Unit 3: Adding, Subtracting, Counting & Comparing", coverage: "1.OA.A.1–2, 1.OA.D.7–8", status: "current" },
    { program: "Bridges Math", citation: "Unit 6: Figure the Facts with Penguins", coverage: "1.OA.C.6, 1.OA.B.3–4 (fluency focus)", status: "current" },
    { program: "Bridges Math", citation: "Number Corner", coverage: "Spiral review", status: "current" }
  ],
  "math:g1-NBT": [
    { program: "Bridges Math", citation: "Unit 1: Numbers All Around Us", coverage: "1.NBT.A.1", status: "current" },
    { program: "Bridges Math", citation: "Unit 4: Leapfrogs on the Number Line", coverage: "1.NBT.A.1, 1.NBT.C.4–5", status: "current" },
    { program: "Bridges Math", citation: "Unit 7: One Hundred & Beyond", coverage: "1.NBT.A.1, 1.NBT.B.2–3, 1.NBT.C.4–6", status: "current" }
  ],
  "math:g1-MD": [
    { program: "Bridges Math", citation: "Unit 8: Changes, Changes", coverage: "1.MD.A.1–2, 1.MD.B.3, 1.MD.C.4", status: "current" }
  ],
  "math:g1-G": [
    { program: "Bridges Math", citation: "Unit 5: Geometry", coverage: "1.G.A.1–3", status: "current" }
  ],

  // ===== Grade 2 =====
  "math:g2-OA": [
    { program: "Bridges Math", citation: "Unit 1: Figure the Facts", coverage: "2.OA.B.2, 2.OA.A.1 (fluency review)", status: "current" },
    { program: "Bridges Math", citation: "Unit 3: Addition & Subtraction Within 100", coverage: "2.OA.A.1", status: "current" },
    { program: "Bridges Math", citation: "Unit 6: Geometry", coverage: "2.OA.C.4 (arrays foundation for multiplication)", status: "current" },
    { program: "Bridges Math", citation: "Unit 8: Marble Rolls — Multi-Digit Computation", coverage: "2.OA.A.1", status: "current" }
  ],
  "math:g2-NBT": [
    { program: "Bridges Math", citation: "Unit 2: Place Value & Measurement with Jack's Beanstalks", coverage: "2.NBT.A.1–4", status: "current" },
    { program: "Bridges Math", citation: "Unit 3: Addition & Subtraction Within 100", coverage: "2.NBT.B.5, 2.NBT.B.7", status: "current" },
    { program: "Bridges Math", citation: "Unit 5: Place Value to One Thousand", coverage: "2.NBT.A.1–4, 2.NBT.B.7–9", status: "current" },
    { program: "Bridges Math", citation: "Unit 7 & 8: Hungry Ants / Marble Rolls", coverage: "2.NBT.B.5–7", status: "current" }
  ],
  "math:g2-MD": [
    { program: "Bridges Math", citation: "Unit 2: Jack's Beanstalks (linear measurement)", coverage: "2.MD.A.1–4", status: "current" },
    { program: "Bridges Math", citation: "Unit 4: Measurement", coverage: "2.MD.A.1–4, 2.MD.B.5–6, 2.MD.C.7–8, 2.MD.D.9", status: "current" },
    { program: "Bridges Math", citation: "Unit 8: Marble Rolls (data)", coverage: "2.MD.D.9–10", status: "current" }
  ],
  "math:g2-G": [
    { program: "Bridges Math", citation: "Unit 6: Geometry", coverage: "2.G.A.1–3, 2.OA.C.4", status: "current" },
    { program: "Bridges Math", citation: "Unit 7: Hungry Ants (equal shares)", coverage: "2.G.A.3", status: "current" }
  ],

  // ===== Grade 3 =====
  "math:g3-OA": [
    { program: "Bridges Math", citation: "Unit 1: Addition & Subtraction Patterns", coverage: "3.OA.D.9", status: "current" },
    { program: "Bridges Math", citation: "Unit 2: Introduction to Multiplication", coverage: "3.OA.A.1–4, 3.OA.B.5, 3.OA.C.7", status: "current" },
    { program: "Bridges Math", citation: "Unit 5: Multiplication, Division & Area", coverage: "3.OA.A.1–4, 3.OA.B.5–6, 3.OA.C.7", status: "current" },
    { program: "Bridges Math", citation: "Unit 7: Extending Multiplication & Fractions", coverage: "3.OA.A.3, 3.OA.D.8", status: "current" }
  ],
  "math:g3-NBT": [
    { program: "Bridges Math", citation: "Unit 1: Addition & Subtraction Patterns", coverage: "3.NBT.A.2", status: "current" },
    { program: "Bridges Math", citation: "Unit 3: Multi-Digit Addition & Subtraction", coverage: "3.NBT.A.1–2", status: "current" }
  ],
  "math:g3-NF": [
    { program: "Bridges Math", citation: "Unit 4: Measurement & Fractions", coverage: "3.NF.A.1–3", status: "current" },
    { program: "Bridges Math", citation: "Unit 7: Extending Multiplication & Fractions", coverage: "3.NF.A.3 (equivalence/comparison)", status: "current" }
  ],
  "math:g3-MD": [
    { program: "Bridges Math", citation: "Unit 4: Measurement & Fractions", coverage: "3.MD.A.1–2, 3.MD.B.4", status: "current" },
    { program: "Bridges Math", citation: "Unit 5: Multiplication, Division & Area", coverage: "3.MD.C.5–7", status: "current" },
    { program: "Bridges Math", citation: "Unit 6: Geometry", coverage: "3.MD.D.8 (perimeter)", status: "current" },
    { program: "Bridges Math", citation: "Unit 8: Bridge Design & Construction", coverage: "3.MD.B.3–4 (data collection)", status: "current" }
  ],
  "math:g3-G": [
    { program: "Bridges Math", citation: "Unit 6: Geometry", coverage: "3.G.A.1–2", status: "current" }
  ],

  // ===== Grade 4 =====
  "math:g4-OA": [
    { program: "Bridges Math", citation: "Unit 1: Multiplicative Thinking", coverage: "4.OA.B.4, 4.OA.A.1–3 (factors, multiples, prime/composite)", status: "current" },
    { program: "Bridges Math", citation: "Unit 2: Multi-Digit Multiplication & Early Division", coverage: "4.OA.A.1–3", status: "current" },
    { program: "Bridges Math", citation: "Unit 8: Playground Design (capstone)", coverage: "4.OA.A.3 (multistep word problems)", status: "current" }
  ],
  "math:g4-NBT": [
    { program: "Bridges Math", citation: "Unit 2: Multi-Digit Multiplication & Early Division", coverage: "4.NBT.B.5–6", status: "current" },
    { program: "Bridges Math", citation: "Unit 4: Addition, Subtraction & Measurement", coverage: "4.NBT.B.4", status: "current" },
    { program: "Bridges Math", citation: "Unit 6: Multiplication & Division, Data & Fractions", coverage: "4.NBT.B.5–6", status: "current" },
    { program: "Bridges Math", citation: "Unit 7: Reviewing & Extending Multi-Digit Multiplication", coverage: "4.NBT.B.5", status: "current" }
  ],
  "math:g4-NF": [
    { program: "Bridges Math", citation: "Unit 3: Fractions & Decimals", coverage: "4.NF.A.1–2, 4.NF.B.3–4, 4.NF.C.5–7", status: "current" },
    { program: "Bridges Math", citation: "Unit 6: Data & Fractions", coverage: "4.NF.B.3", status: "current" },
    { program: "Bridges Math", citation: "Unit 7: Reviewing & Extending Fractions, Decimals", coverage: "4.NF.A–C", status: "current" }
  ],
  "math:g4-MD": [
    { program: "Bridges Math", citation: "Unit 4: Addition, Subtraction & Measurement", coverage: "4.MD.A.1–3", status: "current" },
    { program: "Bridges Math", citation: "Unit 5: Geometry & Measurement", coverage: "4.MD.C.5–7 (angle measure)", status: "current" },
    { program: "Bridges Math", citation: "Unit 6: Data & Fractions", coverage: "4.MD.B.4 (line plots with fractions)", status: "current" },
    { program: "Bridges Math", citation: "Unit 8: Playground Design", coverage: "4.MD.A.3", status: "current" }
  ],
  "math:g4-G": [
    { program: "Bridges Math", citation: "Unit 5: Geometry & Measurement", coverage: "4.G.A.1–3", status: "current" }
  ],

  // ===== Grade 5 =====
  "math:g5-OA": [
    { program: "Bridges Math", citation: "Unit 1: Expressions, Equations & Volume", coverage: "5.OA.A.1–2", status: "current" },
    { program: "Bridges Math", citation: "Unit 8: Solar Design (capstone)", coverage: "5.OA.B.3", status: "current" }
  ],
  "math:g5-NBT": [
    { program: "Bridges Math", citation: "Unit 1: Expressions, Equations & Volume", coverage: "5.NBT.B.5", status: "current" },
    { program: "Bridges Math", citation: "Unit 3: Place Value & Decimals", coverage: "5.NBT.A.1–4", status: "current" },
    { program: "Bridges Math", citation: "Unit 4: Multiplying & Dividing Whole Numbers & Decimals", coverage: "5.NBT.B.5–7", status: "current" },
    { program: "Bridges Math", citation: "Unit 7: Division & Decimals", coverage: "5.NBT.B.6–7", status: "current" }
  ],
  "math:g5-NF": [
    { program: "Bridges Math", citation: "Unit 2: Adding & Subtracting Fractions", coverage: "5.NF.A.1–2", status: "current" },
    { program: "Bridges Math", citation: "Unit 5: Multiplying & Dividing Fractions", coverage: "5.NF.B.3–7", status: "current" }
  ],
  "math:g5-MD": [
    { program: "Bridges Math", citation: "Unit 1: Expressions, Equations & Volume", coverage: "5.MD.C.3–5", status: "current" },
    { program: "Bridges Math", citation: "Unit 6: Graphing, Geometry & Volume", coverage: "5.MD.C.3–5", status: "current" },
    { program: "Bridges Math", citation: "Unit 8: Solar Design", coverage: "5.MD.A.1, 5.MD.B.2", status: "current" }
  ],
  "math:g5-G": [
    { program: "Bridges Math", citation: "Unit 6: Graphing, Geometry & Volume", coverage: "5.G.A.1–2, 5.G.B.3–4", status: "current" }
  ],

  // ============================================================
  // MATH · ILLUSTRATIVE MATHEMATICS 6-8
  // (currently adopted as "Imagine IM Math" — Imagine Learning's IM-certified version;
  //  Troy Board approved May 2023 by 6-1 vote.)
  // Beginning 2026-2027: IM 6-8 Accelerated ("IM Advanced") for Math 6/7 pathway.
  // ============================================================

  // ===== Grade 6 =====
  "math:g6-RP": [
    { program: "Illustrative Mathematics 6", citation: "Unit 2: Introducing Ratios", coverage: "6.RP.A.1, 6.RP.A.3", status: "current" },
    { program: "Illustrative Mathematics 6", citation: "Unit 3: Unit Rates and Percentages", coverage: "6.RP.A.2–3", status: "current" }
  ],
  "math:g6-NS": [
    { program: "Illustrative Mathematics 6", citation: "Unit 4: Dividing Fractions", coverage: "6.NS.A.1", status: "current" },
    { program: "Illustrative Mathematics 6", citation: "Unit 5: Arithmetic in Base Ten", coverage: "6.NS.B.2–4", status: "current" },
    { program: "Illustrative Mathematics 6", citation: "Unit 7: Rational Numbers", coverage: "6.NS.C.5–8 (negative numbers, four-quadrant plane)", status: "current" }
  ],
  "math:g6-EE": [
    { program: "Illustrative Mathematics 6", citation: "Unit 6: Expressions and Equations", coverage: "6.EE.A.1–4, 6.EE.B.5–8, 6.EE.C.9", status: "current" }
  ],
  "math:g6-G": [
    { program: "Illustrative Mathematics 6", citation: "Unit 1: Area and Surface Area", coverage: "6.G.A.1, 6.G.A.4", status: "current" }
  ],
  "math:g6-SP": [
    { program: "Illustrative Mathematics 6", citation: "Unit 8: Data Sets and Distributions", coverage: "6.SP.A.1–3, 6.SP.B.4–5", status: "current" }
  ],

  // ===== Grade 7 =====
  "math:g7-RP": [
    { program: "Illustrative Mathematics 7", citation: "Unit 2: Introducing Proportional Relationships", coverage: "7.RP.A.2 (y = kx; tables, graphs, equations)", status: "current" },
    { program: "Illustrative Mathematics 7", citation: "Unit 4: Proportional Relationships and Percentages", coverage: "7.RP.A.3 (multistep percent)", status: "current" }
  ],
  "math:g7-NS": [
    { program: "Illustrative Mathematics 7", citation: "Unit 5: Rational Number Arithmetic", coverage: "7.NS.A.1–3 (signed-number operations)", status: "current" }
  ],
  "math:g7-EE": [
    { program: "Illustrative Mathematics 7", citation: "Unit 6: Expressions, Equations, and Inequalities", coverage: "7.EE.A.1–2, 7.EE.B.3–4 (incl. p(x+q)=r)", status: "current" }
  ],
  "math:g7-G": [
    { program: "Illustrative Mathematics 7", citation: "Unit 1: Scale Drawings", coverage: "7.G.A.1, 7.G.A.3", status: "current" },
    { program: "Illustrative Mathematics 7", citation: "Unit 3: Measuring Circles", coverage: "7.G.B.4", status: "current" },
    { program: "Illustrative Mathematics 7", citation: "Unit 7: Angles, Triangles, and Prisms", coverage: "7.G.A.2, 7.G.B.5–6", status: "current" }
  ],
  "math:g7-SP": [
    { program: "Illustrative Mathematics 7", citation: "Unit 8: Probability and Sampling", coverage: "7.SP.A.1–2, 7.SP.B.3–4, 7.SP.C.5–8", status: "current" }
  ],

  // ===== Grade 8 =====
  "math:g8-NS": [
    { program: "Illustrative Mathematics 8", citation: "Unit 8: Pythagorean Theorem and Irrational Numbers", coverage: "8.NS.A.1–2", status: "current" }
  ],
  "math:g8-EE": [
    { program: "Illustrative Mathematics 8", citation: "Unit 2: Dilations, Similarity, and Introducing Slope", coverage: "8.EE.B.5–6 (slope from similar triangles)", status: "current" },
    { program: "Illustrative Mathematics 8", citation: "Unit 3: Linear Relationships", coverage: "8.EE.B.5, 8.EE.B.6 (y = mx + b)", status: "current" },
    { program: "Illustrative Mathematics 8", citation: "Unit 4: Linear Equations and Linear Systems", coverage: "8.EE.C.7–8 (variables both sides; systems)", status: "current" },
    { program: "Illustrative Mathematics 8", citation: "Unit 7: Exponents and Scientific Notation", coverage: "8.EE.A.1–4", status: "current" }
  ],
  "math:g8-F": [
    { program: "Illustrative Mathematics 8", citation: "Unit 5: Functions and Volume", coverage: "8.F.A.1–3, 8.F.B.4–5 (formal function definition)", status: "current" }
  ],
  "math:g8-G": [
    { program: "Illustrative Mathematics 8", citation: "Unit 1: Rigid Transformations and Congruence", coverage: "8.G.A.1–5", status: "current" },
    { program: "Illustrative Mathematics 8", citation: "Unit 2: Dilations, Similarity, and Introducing Slope", coverage: "8.G.A.3–4", status: "current" },
    { program: "Illustrative Mathematics 8", citation: "Unit 5: Functions and Volume", coverage: "8.G.C.9 (cylinders, cones, spheres)", status: "current" },
    { program: "Illustrative Mathematics 8", citation: "Unit 8: Pythagorean Theorem and Irrational Numbers", coverage: "8.G.B.6–8", status: "current" }
  ],
  "math:g8-SP": [
    { program: "Illustrative Mathematics 8", citation: "Unit 6: Associations in Data", coverage: "8.SP.A.1–4 (scatter plots, two-way tables)", status: "current" }
  ],

  // ============================================================
  // MATH · HIGH SCHOOL (Algebra 1 / Geometry / Algebra 2)
  // Publisher / textbook NOT publicly disclosed by Troy SD.
  // The 2023 IM adoption covered grades 6-8 only; HS IM adoption is unconfirmed.
  // ============================================================
  "math:gAlg1-N": [
    { program: "Troy HS / Athens HS — Algebra 1 (textbook unverified)", citation: "Algebra 1 / Honors Algebra 1 course", coverage: "N-RN.A, N-Q.A", status: "current", note: "Textbook publisher not publicly disclosed by Troy SD." }
  ],
  "math:gAlg1-A": [
    { program: "Troy HS / Athens HS — Algebra 1 (textbook unverified)", citation: "Algebra 1 / Honors Algebra 1 course", coverage: "A-SSE, A-APR, A-CED, A-REI", status: "current", note: "May be split into Algebra 2 Part A/B for some students. Publisher not disclosed." }
  ],
  "math:gAlg1-F": [
    { program: "Troy HS / Athens HS — Algebra 1 (textbook unverified)", citation: "Algebra 1 / Honors Algebra 1 course", coverage: "F-IF, F-BF, F-LE", status: "current", note: "Publisher not disclosed." }
  ],
  "math:gAlg1-SP": [
    { program: "Troy HS / Athens HS — Algebra 1 (textbook unverified)", citation: "Algebra 1 / Honors Algebra 1 course", coverage: "S-ID", status: "current", note: "Publisher not disclosed." }
  ],
  "math:gGeom-CO": [
    { program: "Big Ideas Math: Geometry (Larson & Boswell, Big Ideas Learning, 2015)", citation: "Geometry / Honors Geometry · ISBN 978-1-60840-839-9", coverage: "G-CO.A–D (Congruence)", status: "current", note: "Same textbook for regular and Honors; Honors covers content at greater depth/pace with additional topics." }
  ],
  "math:gGeom-SRT": [
    { program: "Big Ideas Math: Geometry (Larson & Boswell, Big Ideas Learning, 2015)", citation: "Geometry / Honors Geometry · ISBN 978-1-60840-839-9", coverage: "G-SRT.A–C (Similarity, Right Triangles, Trigonometry)", status: "current" }
  ],
  "math:gGeom-C": [
    { program: "Big Ideas Math: Geometry (Larson & Boswell, Big Ideas Learning, 2015)", citation: "Geometry / Honors Geometry · ISBN 978-1-60840-839-9", coverage: "G-C.A–B (Circles)", status: "current" }
  ],
  "math:gGeom-GPE": [
    { program: "Big Ideas Math: Geometry (Larson & Boswell, Big Ideas Learning, 2015)", citation: "Geometry / Honors Geometry · ISBN 978-1-60840-839-9", coverage: "G-GPE.A–B (Coordinate Geometry)", status: "current" }
  ],
  "math:gGeom-GMD": [
    { program: "Big Ideas Math: Geometry (Larson & Boswell, Big Ideas Learning, 2015)", citation: "Geometry / Honors Geometry · ISBN 978-1-60840-839-9", coverage: "G-GMD, G-MG (Measurement & Modeling)", status: "current" }
  ],
  "math:gGeom-CP": [
    { program: "Big Ideas Math: Geometry (Larson & Boswell, Big Ideas Learning, 2015)", citation: "Geometry / Honors Geometry · ISBN 978-1-60840-839-9 (sometimes embedded)", coverage: "S-CP.A–B (Conditional Probability)", status: "current" }
  ],
  "math:gAlg2-N": [
    { program: "Holt McDougal Algebra 2 — Michigan Edition (Larson, Boswell, Kanold & Stiff, 2008/2011)", citation: "Algebra 2 / Honors Algebra 2 · ISBN 9780618923939 (MI Ed) or 9780547315263 (2011)", coverage: "N-CN, N-RN advanced", status: "current", note: "Same textbook used for regular and Honors; may be split into Algebra 2 Part A/B over two years for some students." }
  ],
  "math:gAlg2-A": [
    { program: "Holt McDougal Algebra 2 — Michigan Edition (Larson, Boswell, Kanold & Stiff, 2008/2011)", citation: "Algebra 2 / Honors Algebra 2 · ISBN 9780618923939 / 9780547315263", coverage: "A-SSE, A-APR, A-CED, A-REI advanced", status: "current" }
  ],
  "math:gAlg2-F": [
    { program: "Holt McDougal Algebra 2 — Michigan Edition (Larson, Boswell, Kanold & Stiff, 2008/2011)", citation: "Algebra 2 / Honors Algebra 2 · ISBN 9780618923939 / 9780547315263; Pre-Calculus / Honors Pre-Calculus follows", coverage: "F-IF, F-BF, F-LE, F-TF (in Pre-Calc)", status: "current" }
  ],
  "math:gAlg2-SP": [
    { program: "Holt McDougal Algebra 2 — Michigan Edition (Larson, Boswell, Kanold & Stiff, 2008/2011)", citation: "Algebra 2 / Honors Algebra 2 · ISBN 9780618923939 / 9780547315263", coverage: "S-ID, S-IC", status: "current", note: "AP Statistics is also offered as a separate AP course after Algebra 2." }
  ],

  // ============================================================
  // MATH HS · Pre-Calculus / AP Calc / AP Statistics (Grade 11-12)
  // Textbook publishers not publicly disclosed by Troy SD.
  // ============================================================
  "math:gPreCalc-PR": [{ program: "Troy HS / Athens HS — Pre-Calculus", citation: "Pre-Calculus / Honors Pre-Calculus course", coverage: "F-IF, A-APR (polynomial/rational)", status: "current", note: "Publisher not disclosed. Honors Pre-Calc may align with AP Precalculus (verify w/ counseling)." }],
  "math:gPreCalc-EL": [{ program: "Troy HS / Athens HS — Pre-Calculus", citation: "Pre-Calculus / Honors Pre-Calculus course", coverage: "F-LE, F-BF (exponential & logarithmic)", status: "current", note: "Publisher not disclosed." }],
  "math:gPreCalc-TP": [{ program: "Troy HS / Athens HS — Pre-Calculus", citation: "Pre-Calculus / Honors Pre-Calculus course", coverage: "F-TF (trigonometric & polar)", status: "current", note: "Publisher not disclosed." }],
  "math:gPreCalc-FM": [{ program: "Troy HS / Athens HS — Pre-Calculus", citation: "Pre-Calculus / Honors Pre-Calculus course", coverage: "A-CED, F-IF (functions as models)", status: "current", note: "Publisher not disclosed." }],

  "math:gCalcAB-LIM": [{ program: "Troy HS / Athens HS — AP Calculus AB", citation: "AP Calculus AB · Unit 1 (Limits & Continuity)", coverage: "AP Calc AB CED Unit 1", status: "current", note: "Standard AP-aligned text (Stewart, Larson, or Finney/Demana commonly used; not confirmed for Troy)." }],
  "math:gCalcAB-DIFF": [{ program: "Troy HS / Athens HS — AP Calculus AB", citation: "AP Calculus AB · Units 2-3 (Differentiation)", coverage: "AP Calc AB CED Units 2-3", status: "current" }],
  "math:gCalcAB-APD": [{ program: "Troy HS / Athens HS — AP Calculus AB", citation: "AP Calculus AB · Units 4-5 (Applications of Differentiation)", coverage: "AP Calc AB CED Units 4-5", status: "current" }],
  "math:gCalcAB-INT": [{ program: "Troy HS / Athens HS — AP Calculus AB", citation: "AP Calculus AB · Units 6-8 (Integration & Accumulation)", coverage: "AP Calc AB CED Units 6-8", status: "current" }],

  "math:gCalcBC-AB": [{ program: "Troy HS / Athens HS — AP Calculus BC", citation: "AP Calculus BC · Units 1-8 (all AB content)", coverage: "AP Calc BC CED Units 1-8", status: "current", note: "BC includes all AB topics + parametric/polar/vector and series." }],
  "math:gCalcBC-PPV": [{ program: "Troy HS / Athens HS — AP Calculus BC", citation: "AP Calculus BC · Unit 9 (Parametric, Polar, Vector)", coverage: "AP Calc BC CED Unit 9", status: "current" }],
  "math:gCalcBC-SER": [{ program: "Troy HS / Athens HS — AP Calculus BC", citation: "AP Calculus BC · Unit 10 (Sequences & Series)", coverage: "AP Calc BC CED Unit 10", status: "current" }],

  "math:gStats-1D": [{ program: "Troy HS / Athens HS — AP Statistics", citation: "AP Statistics · Unit 1 (Exploring One-Variable Data)", coverage: "S-ID.A.1-4 + AP Stats CED Unit 1", status: "current", note: "Open to students after Algebra 2." }],
  "math:gStats-2D": [{ program: "Troy HS / Athens HS — AP Statistics", citation: "AP Statistics · Unit 2 (Exploring Two-Variable Data)", coverage: "S-ID.B.5-9 + AP Stats CED Unit 2", status: "current" }],
  "math:gStats-SAMP": [{ program: "Troy HS / Athens HS — AP Statistics", citation: "AP Statistics · Unit 3 (Collecting Data)", coverage: "S-IC.A-B + AP Stats CED Unit 3", status: "current" }],
  "math:gStats-PROB": [{ program: "Troy HS / Athens HS — AP Statistics", citation: "AP Statistics · Units 4-5 (Probability, Random Variables, Distributions)", coverage: "S-CP, S-MD + AP Stats CED Units 4-5", status: "current" }],
  "math:gStats-INF": [{ program: "Troy HS / Athens HS — AP Statistics", citation: "AP Statistics · Units 6-9 (Inference)", coverage: "S-IC.B + AP Stats CED Units 6-9", status: "current" }],

  // ============================================================
  // ELA · TROY 6-12 (currently NOT a single published basal — novel-based + TCRWP)
  // The 9-12 program is in active pilot/review through ~2027-28.
  // All AP ELA courses confirmed at both Troy HS and Athens HS (AP Capstone schools).
  // ============================================================
  "ela:g6-RL": [{ program: "Troy MS — ELA 6", citation: "Novel-based units, TCRWP-informed (no single published textbook)", coverage: "RL.6.1-10", status: "current", note: "Built around literary novels and teacher-curated text sets; under review for 2027-28 adoption." }],
  "ela:g6-RI": [{ program: "Troy MS — ELA 6", citation: "Text-set units, TCRWP-informed", coverage: "RI.6.1-10", status: "current" }],
  "ela:g6-W":  [{ program: "Troy MS — ELA 6", citation: "TCRWP Units of Study (Lucy Calkins model)", coverage: "W.6.1-10 (narrative, info, argument)", status: "current", note: "Approach is under district scrutiny relative to MI Public Act 146 (2024)." }],
  "ela:g6-SL": [{ program: "Troy MS — ELA 6", citation: "Embedded in TCRWP partner work and discussion routines", coverage: "SL.6.1-6", status: "current" }],
  "ela:g6-L":  [{ program: "Troy MS — ELA 6", citation: "Conventions and vocabulary embedded in units of study", coverage: "L.6.1-6", status: "current" }],

  "ela:g7-RL": [{ program: "Troy MS — ELA 7", citation: "Novel-based units, TCRWP-informed", coverage: "RL.7.1-10", status: "current" }],
  "ela:g7-RI": [{ program: "Troy MS — ELA 7", citation: "Text-set units, TCRWP-informed", coverage: "RI.7.1-10", status: "current" }],
  "ela:g7-W":  [{ program: "Troy MS — ELA 7", citation: "TCRWP Units of Study", coverage: "W.7.1-10", status: "current" }],
  "ela:g7-SL": [{ program: "Troy MS — ELA 7", citation: "Embedded discussion and partner routines", coverage: "SL.7.1-6", status: "current" }],
  "ela:g7-L":  [{ program: "Troy MS — ELA 7", citation: "Conventions/vocabulary embedded", coverage: "L.7.1-6", status: "current" }],

  "ela:g8-RL": [{ program: "Troy MS — ELA 8", citation: "Novel-based units, TCRWP-informed", coverage: "RL.8.1-10", status: "current" }],
  "ela:g8-RI": [{ program: "Troy MS — ELA 8", citation: "Text-set units, TCRWP-informed", coverage: "RI.8.1-10", status: "current" }],
  "ela:g8-W":  [{ program: "Troy MS — ELA 8", citation: "TCRWP Units of Study", coverage: "W.8.1-10", status: "current" }],
  "ela:g8-SL": [{ program: "Troy MS — ELA 8", citation: "Embedded discussion routines", coverage: "SL.8.1-6", status: "current" }],
  "ela:g8-L":  [{ program: "Troy MS — ELA 8", citation: "Conventions/vocabulary embedded", coverage: "L.8.1-6", status: "current" }],

  "ela:g910-RL": [
    { program: "Troy HS / Athens HS — English 9 Lit/Comp", citation: "9 / 9 Honors Lit/Comp 1 & 2 (currently being piloted)", coverage: "RL.9-10.1-10", status: "current", note: "9th-grade team is actively piloting new 9-12 program for 2027-28 adoption." },
    { program: "Troy HS / Athens HS — English 10 Lit/Comp", citation: "10 / 10 Honors Lit/Comp (genre-based: allegory, classic/contemporary novels, drama, poetry)", coverage: "RL.9-10.1-10", status: "current" }
  ],
  "ela:g910-RI": [
    { program: "Troy HS / Athens HS — English 9 Lit/Comp", citation: "9 / 9 Honors Lit/Comp", coverage: "RI.9-10.1-10", status: "current" },
    { program: "Troy HS / Athens HS — English 10 Lit/Comp", citation: "10 / 10 Honors Lit/Comp (rhetoric, nonfiction text sets)", coverage: "RI.9-10.1-10", status: "current" }
  ],
  "ela:g910-W": [
    { program: "Troy HS / Athens HS — English 9 / 10", citation: "Embedded writing across all genre units", coverage: "W.9-10.1-10", status: "current" }
  ],
  "ela:g910-SL": [
    { program: "Troy HS / Athens HS — English 9 / 10", citation: "Embedded discussion and presentation tasks", coverage: "SL.9-10.1-6", status: "current" }
  ],
  "ela:g910-L": [
    { program: "Troy HS / Athens HS — English 9 / 10", citation: "Vocabulary and conventions embedded in units", coverage: "L.9-10.1-6", status: "current" }
  ],

  "ela:g1112-RL": [
    { program: "Troy HS / Athens HS — English 11", citation: "11 Lit/Comp + elective (American Literature focus)", coverage: "RL.11-12.1-10", status: "current" },
    { program: "Troy HS / Athens HS — AP English Language & Composition", citation: "11 AP English (rhetorical analysis, argument, synthesis)", coverage: "RL/RI.11-12.1-10 (rhetorical lens)", status: "current", note: "Grade 11 AP course; pairs with American Literature focus." },
    { program: "Troy HS / Athens HS — English 12", citation: "12 Lit/Comp 1 & 2 (World Literature)", coverage: "RL.11-12.1-10", status: "current" },
    { program: "Troy HS / Athens HS — AP English Literature & Composition", citation: "12 AP English (fiction, poetry, drama from various periods/cultures)", coverage: "RL.11-12.1-10 (advanced)", status: "current", note: "Grade 12 AP course." }
  ],
  "ela:g1112-RI": [
    { program: "Troy HS / Athens HS — AP English Language & Composition", citation: "11 AP English (nonfiction: speeches, essays, journalism, memoirs)", coverage: "RI.11-12.1-10", status: "current", note: "AP Lang is the strongest informational-text course in the sequence." },
    { program: "Troy HS / Athens HS — English 11/12 Lit/Comp", citation: "Embedded informational reading", coverage: "RI.11-12.1-10", status: "current" }
  ],
  "ela:g1112-W": [
    { program: "Troy HS / Athens HS — AP English Language", citation: "AP Lang (rhetorical analysis, argument, synthesis FRQs)", coverage: "W.11-12.1, W.11-12.4-10", status: "current" },
    { program: "Troy HS / Athens HS — AP English Literature", citation: "AP Lit (literary analysis FRQs)", coverage: "W.11-12.2, W.11-12.4-10", status: "current" },
    { program: "Troy HS / Athens HS — AP Seminar / AP Research", citation: "AP Capstone — Individual Research Report (1,200 words) + AP Research paper (~5,000 words)", coverage: "W.11-12.7-9 (sustained research)", status: "current", note: "Both Troy HS and Athens HS are AP Capstone schools." },
    { program: "Troy HS / Athens HS — English 11/12 Lit/Comp", citation: "Embedded composition", coverage: "W.11-12.1-10", status: "current" }
  ],
  "ela:g1112-SL": [
    { program: "Troy HS / Athens HS — AP Seminar", citation: "AP Capstone — Team Multimedia Presentation; oral defenses", coverage: "SL.11-12.1-6", status: "current" },
    { program: "Troy HS / Athens HS — AP Research", citation: "Oral defense of research paper", coverage: "SL.11-12.4-6", status: "current" }
  ],
  "ela:g1112-L": [
    { program: "Troy HS / Athens HS — AP English Language", citation: "11 AP — usage, conventions, rhetorical effect", coverage: "L.11-12.1-6", status: "current" },
    { program: "Troy HS / Athens HS — AP English Literature", citation: "12 AP — figurative language nuance, connotation", coverage: "L.11-12.4-6", status: "current" }
  ],

  // ============================================================
  // ELA · COLLABORATIVE LITERACY (currently piloting K-5 — Center for the Collaborative Classroom)
  // ============================================================

  // ===== Kindergarten =====
  "ela:gK-RL": [
    { program: "Making Meaning", citation: "Unit 1: The Reading Community", coverage: "RL.K.10, SL.K.1–3", status: "planned" },
    { program: "Making Meaning", citation: "Unit 2: Making Connections (fiction)", coverage: "RL.K.1–3, RL.K.7", status: "planned" },
    { program: "Making Meaning", citation: "Unit 3: Retelling (fiction)", coverage: "RL.K.2–3", status: "planned" },
    { program: "Making Meaning", citation: "Unit 4: Visualizing (poetry & fiction)", coverage: "RL.K.4, RL.K.10", status: "planned" },
    { program: "Making Meaning", citation: "Unit 5: Wondering (fiction & narrative nonfiction)", coverage: "RL.K.1, SL.K.3", status: "planned" },
    { program: "Being a Reader", citation: "Whole-Class Reading Units (7–8 total)", coverage: "RL.K.1–10", status: "planned" }
  ],
  "ela:gK-RI": [
    { program: "Making Meaning", citation: "Unit 6: Making Connections (expository nonfiction)", coverage: "RI.K.1–3, RI.K.7", status: "planned" },
    { program: "Making Meaning", citation: "Unit 7: Wondering (expository nonfiction)", coverage: "RI.K.1, RI.K.6", status: "planned" },
    { program: "Making Meaning", citation: "Unit 8: Using Text Features (expository nonfiction)", coverage: "RI.K.5, RI.K.7", status: "planned" },
    { program: "Being a Reader", citation: "Whole-Class Reading Units", coverage: "RI.K.1–10", status: "planned" }
  ],
  "ela:gK-RF": [
    { program: "Being a Reader", citation: "Word Study (daily) — letter names, sounds, PA, HFW", coverage: "RF.K.1, RF.K.2, RF.K.3, L.K.1–2", status: "planned" },
    { program: "Being a Reader", citation: "Small-Group Reading Sets 1–3", coverage: "RF.K.2, RF.K.3, RF.K.4 (decodable texts)", status: "planned" },
    { program: "UFLI Foundations", citation: "Lessons 1–34 — Alphabet Unit (CVC, CCVC, CVCC)", coverage: "RF.K.1d, RF.K.2, RF.K.3a–b", status: "planned", note: "Tier 2 / supplemental — overlaps with Being a Reader Word Study" },
    { program: "UFLI Foundations", citation: "Lessons 35–41 — Alphabet Review & Longer Words", coverage: "RF.K.3a–b", status: "planned" }
  ],
  "ela:gK-W": [
    { program: "Being a Writer", citation: "Unit 1: The Writing Community / Getting Started", coverage: "W.K.5, SL.K.1", status: "planned" },
    { program: "Being a Writer", citation: "Units 2–3: Narrative & Fiction", coverage: "W.K.3, W.K.5", status: "planned" },
    { program: "Being a Writer", citation: "Unit 4: Expository Nonfiction", coverage: "W.K.2", status: "planned" },
    { program: "Being a Writer", citation: "Units 6–7: Opinion Writing", coverage: "W.K.1", status: "planned" }
  ],
  "ela:gK-SL": [
    { program: "Making Meaning", citation: "Unit 1 + Unit 9 — Reading Community / Think-Pair-Share", coverage: "SL.K.1–6 (embedded)", status: "planned" },
    { program: "Being a Writer", citation: "Author's Chair routines", coverage: "SL.K.4–6", status: "planned" }
  ],
  "ela:gK-L": [
    { program: "Being a Reader", citation: "Word Study (daily)", coverage: "L.K.1–2 (print conventions, capitalization)", status: "planned" },
    { program: "Making Meaning", citation: "Vocabulary instruction (Tier 2 from read-alouds)", coverage: "L.K.4–6", status: "planned" },
    { program: "Being a Writer", citation: "Conventions instruction", coverage: "L.K.1, L.K.2", status: "planned" }
  ],

  // ===== Grade 1 =====
  "ela:g1-RL": [
    { program: "Making Meaning", citation: "Unit 2: Making Connections (fiction)", coverage: "RL.1.1–3, RL.1.7", status: "planned" },
    { program: "Making Meaning", citation: "Unit 3: Retelling (fiction)", coverage: "RL.1.2–3", status: "planned" },
    { program: "Making Meaning", citation: "Unit 4: Visualizing (poetry & fiction)", coverage: "RL.1.4, RL.1.7", status: "planned" },
    { program: "Making Meaning", citation: "Unit 5: Wondering/Questioning (fiction)", coverage: "RL.1.1", status: "planned" },
    { program: "Being a Reader", citation: "Whole-Class Reading Units (30 weeks)", coverage: "RL.1.1–10", status: "planned" }
  ],
  "ela:g1-RI": [
    { program: "Making Meaning", citation: "Unit 6: Making Connections (expository nonfiction)", coverage: "RI.1.1–3, RI.1.7", status: "planned" },
    { program: "Making Meaning", citation: "Unit 7: Wondering/Questioning (expository nonfiction)", coverage: "RI.1.1", status: "planned" },
    { program: "Making Meaning", citation: "Unit 8: Using Text Features (expository nonfiction)", coverage: "RI.1.5, RI.1.7", status: "planned" },
    { program: "Being a Reader", citation: "Whole-Class Reading Units", coverage: "RI.1.1–10", status: "planned" }
  ],
  "ela:g1-RF": [
    { program: "Being a Reader", citation: "Word Study (daily) — phonics, spelling, morphology", coverage: "RF.1.2, RF.1.3, L.1.2", status: "planned" },
    { program: "Being a Reader", citation: "Small-Group Reading Sets 4–7 — short vowels, blends, digraphs, HFW", coverage: "RF.1.1, RF.1.2, RF.1.3, RF.1.4", status: "planned" },
    { program: "UFLI Foundations", citation: "Lessons 1–53 — Alphabet, Review, Digraphs (build on K)", coverage: "RF.1.2, RF.1.3a, RF.1.3b", status: "planned", note: "Some districts use UFLI 1–34 in K and 35–76 in Gr 1" },
    { program: "UFLI Foundations", citation: "Lessons 54–62 — VCe (Long vowels)", coverage: "RF.1.3c", status: "planned" },
    { program: "UFLI Foundations", citation: "Lessons 63–76 — Inflectional Endings & Syllables", coverage: "RF.1.3e–f", status: "planned" }
  ],
  "ela:g1-W": [
    { program: "Being a Writer", citation: "Personal narrative, fiction, expository nonfiction, opinion, poetry, letters", coverage: "W.1.1–3, W.1.5–8", status: "planned" }
  ],
  "ela:g1-SL": [
    { program: "Making Meaning", citation: "Think-Pair-Share embedded in all units", coverage: "SL.1.1–6", status: "planned" },
    { program: "Being a Writer", citation: "Author's Chair, peer conferring", coverage: "SL.1.4–6", status: "planned" }
  ],
  "ela:g1-L": [
    { program: "Being a Reader", citation: "Word Study + handwriting", coverage: "L.1.1–2", status: "planned" },
    { program: "Making Meaning", citation: "Vocabulary (Tier 2)", coverage: "L.1.4–6", status: "planned" },
    { program: "Being a Writer", citation: "Conventions instruction", coverage: "L.1.1–2", status: "planned" }
  ],

  // ===== Grade 2 =====
  "ela:g2-RL": [
    { program: "Making Meaning", citation: "Unit 2: Visualizing", coverage: "RL.2.4, RL.2.7", status: "planned" },
    { program: "Making Meaning", citation: "Unit 3: Wondering/Questioning", coverage: "RL.2.1", status: "planned" },
    { program: "Making Meaning", citation: "Unit 4: Making Inferences (fiction)", coverage: "RL.2.1, RL.2.3", status: "planned" },
    { program: "Making Meaning", citation: "Unit 7: Determining Important Ideas", coverage: "RL.2.2", status: "planned" },
    { program: "Making Meaning", citation: "Unit 8: Synthesizing/Retelling", coverage: "RL.2.2–3", status: "planned" },
    { program: "Being a Reader", citation: "Whole-Class Unit 2: Making Connections + others", coverage: "RL.2.1–10", status: "planned" }
  ],
  "ela:g2-RI": [
    { program: "Making Meaning", citation: "Unit 5: Using Text Features", coverage: "RI.2.5", status: "planned" },
    { program: "Making Meaning", citation: "Unit 6: Wondering/Questioning (nonfiction)", coverage: "RI.2.1, RI.2.6", status: "planned" },
    { program: "Making Meaning", citation: "Unit 7: Determining Important Ideas", coverage: "RI.2.2", status: "planned" },
    { program: "Being a Reader", citation: "Whole-Class Reading Units", coverage: "RI.2.1–10", status: "planned" }
  ],
  "ela:g2-RF": [
    { program: "Being a Reader", citation: "Word Study — long vowels, vowel teams, r-controlled, multisyllabic", coverage: "RF.2.3, L.2.2", status: "planned" },
    { program: "Being a Reader", citation: "Small-Group Reading Sets 8–12 — advanced phonics; trade books", coverage: "RF.2.3, RF.2.4", status: "planned" },
    { program: "UFLI Foundations", citation: "Lessons 77–98 — R-controlled, Long Vowel Teams, Diphthongs", coverage: "RF.2.3b", status: "planned" },
    { program: "UFLI Foundations", citation: "Lessons 99–118 — Early Morphology, Suffix Rules, Low-Frequency Spellings", coverage: "RF.2.3d, L.2.4b–c", status: "planned" },
    { program: "UFLI Foundations", citation: "Lessons 119–128 — Advanced Morphology", coverage: "L.2.4 (extends to Gr 3+)", status: "tier2", note: "Reaches into Gr 3+ standards" }
  ],
  "ela:g2-W": [
    { program: "Being a Writer", citation: "Personal narrative, fiction, expository nonfiction, opinion, poetry, letters", coverage: "W.2.1–3, W.2.5–8", status: "planned" }
  ],
  "ela:g2-SL": [
    { program: "Making Meaning", citation: "Think-Pair-Share + partner discussion routines", coverage: "SL.2.1–6", status: "planned" }
  ],
  "ela:g2-L": [
    { program: "Being a Reader", citation: "Word Study", coverage: "L.2.1–2 (collective nouns, irregular plurals, conventions)", status: "planned" },
    { program: "Making Meaning", citation: "Vocabulary (Tier 2)", coverage: "L.2.4–6", status: "planned" },
    { program: "Being a Writer", citation: "Conventions instruction", coverage: "L.2.1–2", status: "planned" }
  ],

  // ===== Grade 3 =====
  "ela:g3-RL": [
    { program: "Making Meaning", citation: "Unit 1: The Reading Community (fiction & narrative nonfiction)", coverage: "RL.3.10, SL.3.1", status: "planned" },
    { program: "Making Meaning", citation: "Unit 2: Visualizing (poetry & fiction)", coverage: "RL.3.4, RL.3.7", status: "planned" },
    { program: "Making Meaning", citation: "Unit 3: Making Inferences (fiction)", coverage: "RL.3.1, RL.3.3", status: "planned" },
    { program: "Making Meaning", citation: "Unit 4: Wondering/Questioning (fiction)", coverage: "RL.3.1", status: "planned" },
    { program: "Making Meaning", citation: "Unit 8: Determining Important Ideas (incl. fiction)", coverage: "RL.3.2", status: "planned" },
    { program: "Being a Reader", citation: "Whole-Class Reading Units (7–8 per grade)", coverage: "RL.3.1–10", status: "planned" }
  ],
  "ela:g3-RI": [
    { program: "Making Meaning", citation: "Unit 5: Wondering/Questioning (narrative nonfiction/biography)", coverage: "RI.3.1, RI.3.3", status: "planned" },
    { program: "Making Meaning", citation: "Unit 6: Using Text Features (expository nonfiction)", coverage: "RI.3.5, RI.3.7", status: "planned" },
    { program: "Making Meaning", citation: "Unit 7: Wondering/Questioning (expository nonfiction)", coverage: "RI.3.1, RI.3.6", status: "planned" },
    { program: "Making Meaning", citation: "Unit 8: Determining Important Ideas", coverage: "RI.3.2", status: "planned" },
    { program: "Being a Reader", citation: "Whole-Class Reading Units", coverage: "RI.3.1–10", status: "planned" }
  ],
  "ela:g3-RF": [
    { program: "Being a Reader", citation: "Word Study — multisyllabic decoding, morphology", coverage: "RF.3.3, L.3.2, L.3.4b", status: "planned" }
  ],
  "ela:g3-W": [
    { program: "Being a Writer", citation: "Personal narrative, fiction, expository nonfiction, opinion, poetry, letters", coverage: "W.3.1–3, W.3.4–10", status: "planned" }
  ],
  "ela:g3-SL": [
    { program: "Making Meaning", citation: "Think-Pair-Share, partner work, reading community", coverage: "SL.3.1–6", status: "planned" }
  ],
  "ela:g3-L": [
    { program: "Being a Reader", citation: "Word Study (multisyllabic, morphology)", coverage: "L.3.4b", status: "planned" },
    { program: "Making Meaning", citation: "Tier 2 vocabulary in context", coverage: "L.3.4–6", status: "planned" },
    { program: "Being a Writer", citation: "Conventions", coverage: "L.3.1–2", status: "planned" }
  ],

  // ===== Grade 4 =====
  "ela:g4-RL": [
    { program: "Making Meaning", citation: "Unit 1: The Reading Community", coverage: "RL.4.10, SL.4.1", status: "planned" },
    { program: "Making Meaning", citation: "Unit 2: Visualizing", coverage: "RL.4.4, RL.4.7", status: "planned" },
    { program: "Making Meaning", citation: "Unit 3: Questioning (fiction)", coverage: "RL.4.1", status: "planned" },
    { program: "Making Meaning", citation: "Unit 4: Analyzing Text Structure", coverage: "RL.4.5", status: "planned" },
    { program: "Making Meaning", citation: "Unit 5: Making Inferences (fiction & poetry)", coverage: "RL.4.1, RL.4.3–4", status: "planned" },
    { program: "Making Meaning", citation: "Unit 8: Determining Important Ideas & Summarizing", coverage: "RL.4.2", status: "planned" },
    { program: "Being a Reader", citation: "Whole-Class Reading Units", coverage: "RL.4.1–10", status: "planned" }
  ],
  "ela:g4-RI": [
    { program: "Making Meaning", citation: "Unit 6: Making Inferences (expository nonfiction)", coverage: "RI.4.1, RI.4.3", status: "planned" },
    { program: "Making Meaning", citation: "Unit 7: Analyzing Text Structure (expository)", coverage: "RI.4.5", status: "planned" },
    { program: "Making Meaning", citation: "Unit 8: Determining Important Ideas & Summarizing", coverage: "RI.4.2", status: "planned" },
    { program: "Being a Reader", citation: "Whole-Class Reading Units", coverage: "RI.4.1–10", status: "planned" }
  ],
  "ela:g4-RF": [
    { program: "Being a Reader", citation: "Word Study — morphology (Greek/Latin roots, prefixes, suffixes)", coverage: "RF.4.3", status: "planned" }
  ],
  "ela:g4-W": [
    { program: "Being a Writer", citation: "Personal narrative, fiction, expository nonfiction, opinion, poetry, letters", coverage: "W.4.1–3, W.4.4–10", status: "planned" }
  ],
  "ela:g4-SL": [
    { program: "Making Meaning", citation: "Discussion routines (Think-Pair-Share, partner work)", coverage: "SL.4.1–6", status: "planned" }
  ],
  "ela:g4-L": [
    { program: "Being a Reader", citation: "Word Study — Greek/Latin affixes & roots", coverage: "L.4.4b", status: "planned" },
    { program: "Making Meaning", citation: "Tier 2 vocabulary", coverage: "L.4.4–6", status: "planned" },
    { program: "Being a Writer", citation: "Conventions instruction", coverage: "L.4.1–2", status: "planned" }
  ],

  // ===== Grade 5 =====
  "ela:g5-RL": [
    { program: "Making Meaning", citation: "Unit 1: The Reading Community (fiction)", coverage: "RL.5.10, SL.5.1", status: "planned" },
    { program: "Making Meaning", citation: "Unit 4: Analyzing Text Structure (fiction)", coverage: "RL.5.5", status: "planned" },
    { program: "Making Meaning", citation: "Unit 5: Making Inferences (fiction & poetry)", coverage: "RL.5.1, RL.5.2, RL.5.4", status: "planned" },
    { program: "Making Meaning", citation: "Unit 6: Making Inferences (fiction & expository)", coverage: "RL.5.1", status: "planned" },
    { program: "Making Meaning", citation: "Unit 8: Determining Important Ideas & Summarizing", coverage: "RL.5.2", status: "planned" },
    { program: "Being a Reader", citation: "Whole-Class Reading Units", coverage: "RL.5.1–10", status: "planned" }
  ],
  "ela:g5-RI": [
    { program: "Making Meaning", citation: "Unit 2: Using Text Features (expository)", coverage: "RI.5.5, RI.5.7", status: "planned" },
    { program: "Making Meaning", citation: "Unit 3: Questioning (expository)", coverage: "RI.5.1, RI.5.6", status: "planned" },
    { program: "Making Meaning", citation: "Unit 6: Making Inferences (across genres)", coverage: "RI.5.1", status: "planned" },
    { program: "Making Meaning", citation: "Unit 7: Analyzing Text Structure (expository)", coverage: "RI.5.5", status: "planned" },
    { program: "Making Meaning", citation: "Unit 8: Determining Important Ideas & Summarizing", coverage: "RI.5.2", status: "planned" },
    { program: "Being a Reader", citation: "Whole-Class Reading Units", coverage: "RI.5.1–10", status: "planned" }
  ],
  "ela:g5-RF": [
    { program: "Being a Reader", citation: "Word Study — multisyllabic decoding, morphology, advanced fluency", coverage: "RF.5.3–4", status: "planned" }
  ],
  "ela:g5-W": [
    { program: "Being a Writer", citation: "Personal narrative, fiction, expository nonfiction, opinion, poetry, letters (supplemental)", coverage: "W.5.1–3, W.5.4–10", status: "planned" }
  ],
  "ela:g5-SL": [
    { program: "Making Meaning", citation: "Discussion routines + reading community", coverage: "SL.5.1–6", status: "planned" }
  ],
  "ela:g5-L": [
    { program: "Being a Reader", citation: "Word Study — morphology, advanced affixes/roots", coverage: "L.5.4b–c", status: "planned" },
    { program: "Making Meaning", citation: "Tier 2 vocabulary (figurative language, idioms, adages)", coverage: "L.5.4–6", status: "planned" },
    { program: "Being a Writer", citation: "Conventions instruction", coverage: "L.5.1–2", status: "planned" }
  ]
};

// Helper: short summary string for table cell
window.troyShortSummary = function (cellId) {
  var entries = window.TROY_CURRICULUM[cellId];
  if (!entries || !entries.length) return null;
  var programs = {};
  entries.forEach(function (e) { programs[e.program] = (programs[e.program] || 0) + 1; });
  var parts = [];
  for (var p in programs) {
    parts.push(p + " (" + programs[p] + ")");
  }
  return parts.join(" · ");
};
