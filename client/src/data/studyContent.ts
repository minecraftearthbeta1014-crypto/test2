import type { Module } from "@shared/schema";

export const modules: Module[] = [
  {
    id: "module-1",
    number: 1,
    title: "Building Our Community of Learners",
    description: "Foundations of problem solving, mathematical practices, and creating a supportive learning environment.",
    topics: [
      {
        id: "m1-problem-solving",
        title: "Five Steps of Problem Solving",
        content: "A systematic approach to helping children solve mathematical problems effectively.",
        keyPoints: [
          "1. Define the Problem - Clearly understand what is being asked. What do we know? What do we need to find?",
          "2. Brainstorm Ideas - Generate multiple possible strategies. Consider different approaches without judging them yet.",
          "3. Decide on a Solution - Choose the most promising strategy based on the problem type and available information.",
          "4. Implement the Solution - Carry out the chosen strategy step by step, showing work clearly.",
          "5. Review the Results - Check if the answer makes sense. Verify the solution and reflect on the process."
        ],
        examples: [
          "Example: A student solving 'There are 24 students and 6 tables. How many students at each table?' would: (1) Define: find students per table, (2) Brainstorm: try division, draw pictures, skip count, (3) Decide: use division 24÷6, (4) Implement: calculate 24÷6=4, (5) Review: check 6×4=24 ✓"
        ]
      },
      {
        id: "m1-standards-practice",
        title: "Eight Standards for Mathematical Practice",
        content: "The Standards for Mathematical Practice describe the ways students should engage with mathematics. These practices apply across all grade levels.",
        keyPoints: [
          "MP1: Make sense of problems and persevere in solving them - Students explain the meaning of problems, analyze givens, constraints, relationships, and goals. They make conjectures and plan solution pathways rather than jumping to solutions.",
          "MP2: Reason abstractly and quantitatively - Students make sense of quantities and relationships. They decontextualize (represent situations symbolically) and contextualize (consider meaning of symbols).",
          "MP3: Construct viable arguments and critique the reasoning of others - Students justify conclusions, communicate them clearly, and respond to others' arguments by asking useful questions.",
          "MP4: Model with mathematics - Students apply math to solve everyday life problems, making assumptions and approximations to simplify complex situations.",
          "MP5: Use appropriate tools strategically - Students consider available tools (physical or digital) and make sound decisions about when tools are helpful.",
          "MP6: Attend to precision - Students communicate precisely, use clear definitions, state meaning of symbols, specify units, and calculate accurately.",
          "MP7: Look for and make use of structure - Students discern patterns and structures, such as 3×7 as 3×5 + 3×2.",
          "MP8: Look for and express regularity in repeated reasoning - Students notice calculations that repeat and look for shortcuts and generalizations."
        ]
      },
      {
        id: "m1-processes",
        title: "Processes of Mathematics",
        content: "The five interconnected processes that support mathematical learning and understanding.",
        keyPoints: [
          "Problem Solving - The foundation of all mathematical activity; develops reasoning and critical thinking",
          "Reasoning and Proof - Students learn to make conjectures and develop arguments",
          "Communication - Students articulate mathematical ideas in multiple ways",
          "Connections - Link mathematical concepts to each other and to real-world contexts",
          "Representation - Use multiple representations (concrete, pictorial, symbolic) to understand concepts"
        ]
      }
    ]
  },
  {
    id: "module-2",
    number: 2,
    title: "Teaching & Learning—Students & Mathematics",
    description: "Understanding how children learn mathematics, learning theories, and effective teaching strategies.",
    topics: [
      {
        id: "m2-behaviorism",
        title: "Behaviorism",
        content: "A learning theory focused on observable behaviors that can be shaped through reinforcement.",
        keyPoints: [
          "Behavior can be shaped by reinforcement of drill and practice",
          "Specific skills need to be learned in a fixed order",
          "Clear objectives help students and teachers",
          "Key theorists: Edward L. Thorndike, B.F. Skinner, Robert Gagné",
          "Emphasizes repetition, practice, and immediate feedback",
          "Learning is measured by observable changes in behavior"
        ]
      },
      {
        id: "m2-constructivism",
        title: "Constructivism",
        content: "A learning theory where learners actively create their own knowledge through experience and reflection.",
        keyPoints: [
          "Learners actively create or invent (construct) their own knowledge",
          "Students create new mathematical knowledge by reflecting on physical and mental actions",
          "Learning reflects a social process—children engage in dialogue and discussion",
          "Key theorists: William Brownell, Jean Piaget, Jerome Bruner, Zoltan Dienes",
          "Emphasizes understanding over memorization",
          "Prior knowledge is essential for building new understanding"
        ]
      },
      {
        id: "m2-four-recommendations",
        title: "Four Recommendations for Teaching Mathematics",
        content: "Research-based recommendations for helping children make sense of mathematics.",
        keyPoints: [
          "Recommendation #1: Teach to the developmental characteristics of students - Several characteristics and stages of thinking exist; children progress through stages as they mature.",
          "Recommendation #2: Actively involve students - Learners are actively involved in the learning process, not passive recipients.",
          "Recommendation #3: Move learning from concrete to abstract - Learning proceeds from concrete materials to abstract symbols.",
          "Recommendation #4: Use communication to encourage understanding - Learners need opportunities for talking and communicating their ideas with others."
        ]
      },
      {
        id: "m2-bruner",
        title: "Bruner's Developmental Sequence",
        content: "Jerome Bruner's three stages of representation for mathematical understanding.",
        keyPoints: [
          "Enactive Stage (Concrete) - Learning through physical manipulation of objects. Students use real objects, manipulatives, and hands-on activities.",
          "Iconic Stage (Pictorial/Representational) - Learning through pictures, drawings, and visual representations. Students draw diagrams, use number lines, create pictorial models.",
          "Symbolic Stage (Abstract) - Learning through symbols, numbers, and mathematical notation. Students work with equations, formulas, and abstract concepts.",
          "Instruction should follow this sequence: Concrete → Pictorial → Abstract",
          "Students need solid understanding at each stage before moving to the next"
        ],
        examples: [
          "Addition Example: (Enactive) Use counting bears to combine 3+2, (Iconic) Draw 3 circles and 2 circles then count all, (Symbolic) Write 3+2=5"
        ]
      },
      {
        id: "m2-piaget",
        title: "Piaget's Stages of Development",
        content: "Jean Piaget's cognitive developmental stages relevant to mathematics education.",
        keyPoints: [
          "Sensorimotor Stage (0-2 years) - Learning through senses and motor activities",
          "Preoperational Stage (2-7 years) - Symbolic thinking develops, but thinking is egocentric and not yet logical",
          "Concrete Operational Stage (7-11 years) - Logical thinking about concrete objects; can classify, seriate, and understand conservation. Multiple representations connect concept and activity.",
          "Formal Operational Stage (11+ years) - Abstract and hypothetical thinking develops",
          "Children in concrete operational stage need hands-on experiences with math concepts",
          "Constructivism: Children build knowledge through active exploration"
        ]
      },
      {
        id: "m2-objectives",
        title: "ABCD's of Writing Objectives",
        content: "Framework for writing clear, effective learning objectives.",
        keyPoints: [
          "A - Audience: Who is learning? (e.g., 'Students will...' or 'SWBAT...')",
          "B - Behavior: What will they do? Must be observable and measurable (e.g., 'identify,' 'solve,' 'explain')",
          "C - Condition: Under what circumstances? (e.g., 'given a set of manipulatives,' 'using a number line')",
          "D - Degree: How well must they perform? (e.g., 'with 80% accuracy,' 'correctly solving 4 out of 5')",
          "Objectives must be: Measurable, Observable, Student-centered",
          "Objectives do NOT have to be tied to a specific mathematical procedure"
        ],
        examples: [
          "Example: 'Students will be able to (SWBAT) determine how many peas there would be if all peas were in one pod.'",
          "Example: 'SWBAT write a number model (equation) to reflect the Peas in a Pod video.'"
        ]
      },
      {
        id: "m2-diverse-learners",
        title: "Supporting Diverse Learners",
        content: "Strategies for helping all children learn mathematics with understanding.",
        keyPoints: [
          "Procedural Knowledge: Knowing how to do something (the steps, procedures)",
          "Conceptual Knowledge: Understanding why something works (the underlying concepts)",
          "Effective teaching develops both procedural and conceptual knowledge",
          "Use multiple representations to reach different learners",
          "Provide appropriate scaffolding based on student needs",
          "Build on students' prior knowledge and experiences"
        ]
      }
    ]
  },
  {
    id: "module-3",
    number: 3,
    title: "Assessment",
    description: "Understanding formative and summative assessment, rubrics, and assessment strategies for mathematics.",
    topics: [
      {
        id: "m3-formative-summative",
        title: "Formative and Summative Assessment",
        content: "Two major types of assessment that serve different purposes in teaching and learning.",
        keyPoints: [
          "Formative Assessment (Assessment FOR Learning): Ongoing assessment during instruction to guide teaching; provides feedback to improve learning; includes observations, questioning, exit tickets",
          "Summative Assessment (Assessment OF Learning): Assessment at the end of instruction to evaluate learning; measures achievement; includes tests, projects, portfolios",
          "'My Favorite No' (Teaching Channel video): A formative assessment strategy where teachers collect student work, select a wrong answer that shows interesting thinking, and discuss the mistake as a class without identifying the student"
        ]
      },
      {
        id: "m3-rubrics",
        title: "Types of Rubrics",
        content: "Different rubric formats for assessing student work, each with advantages and limitations.",
        keyPoints: [
          "Holistic Rubrics: Define 3-5 levels of performance; consider the product as a whole. Pros: Easy to develop and apply. Cons: Provide limited feedback.",
          "Analytic Rubrics: Break assignment into parts and define levels for each part. Pros: Provide targeted feedback for each criterion. Cons: Take more time to develop; can be wordy.",
          "Single-Point Rubrics: Describe only the required level of performance with open-ended areas for concerns and excellence. Pros: Less wordy; highlights learning; encourages creativity. Cons: Areas of concern/excellence less defined.",
          "Single-Point Rubric Benefits: (1) Gives space to reflect on strengths and weaknesses, (2) Doesn't place boundaries on student performance, (3) Works against comparing/ranking students, (4) Takes attention off the grade, (5) Creates flexibility without sacrificing clarity, (6) Simple and more likely to be read"
        ]
      },
      {
        id: "m3-performance-tasks",
        title: "Performance Tasks & GRASPS",
        content: "Authentic assessments that measure how well students apply knowledge to real-world problems.",
        keyPoints: [
          "Performance assessments are authentic—rooted in real-world problems",
          "They provide opportunities for students to 'show what they know'",
          "GRASPS Format for Performance Tasks:",
          "  G - Goal: Your goal (or task) is to...",
          "  R - Role: Your job is to...",
          "  A - Audience: You need to convince...",
          "  S - Situation: The challenge/context is...",
          "  P - Performance/Product and Purpose: You will create a ___ in order to...",
          "  S - Standards (Criteria for Success): Your product must meet the following standards..."
        ],
        examples: [
          "M&M Shipping Example: Goal: minimize shipping costs; Role: packaging engineer; Audience: company executives; Situation: design cost-effective container; Product: shipping container with written proposal; Standards: cost-effective, maximize volume, safe to transport"
        ]
      },
      {
        id: "m3-questioning",
        title: "Assessment Through Questioning",
        content: "Using strategic questioning as a form of ongoing assessment.",
        keyPoints: [
          "'What do you notice?' - Open-ended observation questions",
          "Turn observations into questions ('I wonder...')",
          "Provide opportunities for students to ask questions about phenomena",
          "Use questioning to probe for understanding, not just correct answers"
        ]
      }
    ]
  },
  {
    id: "module-4",
    number: 4,
    title: "Numbers & Number Sense",
    description: "Developing counting skills, number sense, and understanding of place value and fractions.",
    topics: [
      {
        id: "m4-prenumber",
        title: "Prenumber Development",
        content: "Foundational concepts children need before formal number work.",
        keyPoints: [
          "Classification: Sorting objects by attributes (color, shape, size); recognizing what belongs and what doesn't",
          "Patterns: Recognizing, copying, extending, and creating patterns; foundational for algebraic thinking",
          "These prenumber concepts build the foundation for meaningful number work"
        ]
      },
      {
        id: "m4-early-number",
        title: "Early Number Development",
        content: "Key concepts in early number understanding.",
        keyPoints: [
          "Conservation: Understanding that quantity remains the same regardless of arrangement",
          "Group Recognition/Subitizing: Instantly recognizing small quantities (1-5) without counting; builds number sense and mental math",
          "One-to-One Correspondence: Matching one object to one number when counting; each object counted exactly once"
        ]
      },
      {
        id: "m4-counting",
        title: "Counting Development",
        content: "Stages and principles of counting development.",
        keyPoints: [
          "Counting Stages:",
          "  - Rote Counting: Reciting number words in order (may not understand meaning)",
          "  - Rational Counting: Understanding that counting determines 'how many'",
          "Counting Principles:",
          "  - Stable Order: Numbers are always said in the same sequence",
          "  - One-to-One Correspondence: Each object gets exactly one count",
          "  - Cardinality: The last number said represents the total quantity",
          "  - Abstraction: Any collection of objects can be counted",
          "  - Order Irrelevance: Objects can be counted in any order"
        ]
      },
      {
        id: "m4-counting-strategies",
        title: "Counting Strategies",
        content: "Different counting strategies children develop.",
        keyPoints: [
          "Counting On: Starting from a number and counting forward (e.g., for 5+3: 'five... six, seven, eight')",
          "Counting Back: Starting from a number and counting backward (for subtraction)",
          "Skip Counting: Counting by 2s, 5s, 10s, etc.; foundational for multiplication",
          "Counting Groups: Counting sets of objects rather than individual items"
        ]
      },
      {
        id: "m4-number-types",
        title: "Cardinal, Ordinal, and Nominal Numbers",
        content: "Different uses of numbers in mathematics and daily life.",
        keyPoints: [
          "Cardinal Numbers: Tell 'how many' (e.g., 'There are 5 apples')",
          "Ordinal Numbers: Tell position or order (e.g., 'She finished 3rd')",
          "Nominal Numbers: Numbers as labels or identifiers (e.g., 'Jersey #24', 'Room 101')"
        ]
      },
      {
        id: "m4-place-value",
        title: "Place Value",
        content: "Understanding the base-ten number system.",
        keyPoints: [
          "Place value is understanding that the position of a digit determines its value",
          "Models of Place Value (pattern blocks are NOT a place value model):",
          "  - Base-ten blocks (units, rods, flats, cubes)",
          "  - Place value charts",
          "  - Expanded notation",
          "  - Money (dollars, dimes, pennies)",
          "Students need concrete experiences grouping and regrouping in tens"
        ],
        incomplete: true
      },
      {
        id: "m4-fractions",
        title: "Making Sense of Fractions",
        content: "Introduction to fraction concepts.",
        keyPoints: [
          "Fractions represent equal parts of a whole or set",
          "Students need concrete and pictorial experiences before symbolic notation",
          "Understanding part-whole relationships is foundational"
        ],
        incomplete: true
      }
    ]
  },
  {
    id: "module-5",
    number: 5,
    title: "Operations, Meanings, Basic Facts",
    description: "Understanding addition, subtraction, multiplication, and division through problem structures and strategies.",
    topics: [
      {
        id: "m5-add-sub-foundations",
        title: "Addition & Subtraction Foundations",
        content: "Building understanding of addition and subtraction as inverse operations.",
        keyPoints: [
          "Addition and subtraction are connected (like inhaling and exhaling)",
          "Addition names the whole in terms of the parts: ___ + ___ = Whole",
          "Subtraction names a missing part: ___ - ___ = Missing Part",
          "Inverse relationship: If 5+3=8, then 8-3=5 and 8-5=3",
          "Instructional Sequence: Concrete → Pictures → Abstract (Bruner)",
          "Models help students understand problems regardless of number size"
        ]
      },
      {
        id: "m5-problem-structures",
        title: "Problem Structures for Addition & Subtraction",
        content: "Three types of problem structures that lead to addition and subtraction.",
        keyPoints: [
          "CHANGE Problems (Join or Separate):",
          "  - Have a Start, Change, and End (Result)",
          "  - Can be directly modeled/acted out",
          "  - Join example: 'Carl has 5 blocks. Rita gives him 8 more. How many now?'",
          "  - Separate example: 'Shane has 12 pencils. He gives some away. Now he has 7. How many did he give?'",
          "",
          "PART-PART-WHOLE Problems:",
          "  - Two parts that combine to make a whole",
          "  - No action or change over time",
          "  - Example: 'Connie has 15 red marbles and 28 blue marbles. How many total?'",
          "  - Can solve for a missing part: '9 bakeries, 2 are new. How many are older?'",
          "",
          "COMPARE Problems:",
          "  - Compare two quantities to find the difference",
          "  - Have a Larger Set, Smaller Set, and Difference",
          "  - Example: 'Jessa collected 78 shells. Susan collected 6 more than Jessa. How many did Susan collect?'"
        ]
      },
      {
        id: "m5-models",
        title: "Models for Problem Solving",
        content: "Visual and concrete models for representing mathematical problems.",
        keyPoints: [
          "Change Diagram: Shows Start → Change → End for action problems",
          "Bar Model: Rectangular bars showing part-whole or comparison relationships",
          "Number Bonds: Three connected circles showing a whole and its two parts",
          "Models can be used to understand the problem",
          "Models work regardless of the size of numbers",
          "Modeling sequence: materials → pictures → symbols"
        ]
      },
      {
        id: "m5-student-strategies",
        title: "Student Strategies for Addition & Subtraction",
        content: "How students develop strategies for computing basic facts.",
        keyPoints: [
          "Direct Modeling: Using objects or pictures to represent and solve",
          "Counting Strategies: Counting on, counting back; using number lines, 100 charts, fingers",
          "Derived Facts: Using known facts to figure out unknown facts (e.g., 'I know 9+4=13 because 9+1=10 and 3 more is 13')",
          "Mental Math/Automaticity: Consolidated facts that can be recalled quickly"
        ]
      },
      {
        id: "m5-basic-facts",
        title: "Basic Fact Strategies",
        content: "Thinking strategies for learning addition and subtraction facts.",
        keyPoints: [
          "Commutative Property: 3+6 = 6+3 (order doesn't matter in addition)",
          "Adding/Subtracting 0 or 1: Simple but important patterns",
          "Doubles: 5+5, 6+6, etc. - often memorized early",
          "Near Doubles: 5+6 = 5+5+1 = 11",
          "Combinations to 10: 1+9, 2+8, 3+7, 4+6, 5+5",
          "Adding to 10 and Beyond: 7+4 → think 7+3=10, then 1 more is 11",
          "Practice: 5-10 minutes daily; make it interesting and confidence-building"
        ]
      },
      {
        id: "m5-mult-div-foundations",
        title: "Multiplication & Division Foundations",
        content: "Building understanding of multiplication and division as inverse operations.",
        keyPoints: [
          "Multiplication and division are connected (like tying and untying a shoe)",
          "Multiplication has many applications: quick counting, scaling, area",
          "Division relates to sharing or breaking into smaller parts",
          "The four operations are related: Multiplication builds on addition; Division builds on subtraction",
          "Inverse relationship: If 3×8=24, then 24÷8=3 and 24÷3=8"
        ]
      },
      {
        id: "m5-mult-problem-types",
        title: "Multiplication Problem Types",
        content: "Four types of situations that lead to multiplication.",
        keyPoints: [
          "EQUAL GROUPS: Same-sized groups combined",
          "  - Example: '3 boxes with 8 cards each. How many cards total?'",
          "  - Related to repeated addition: 3×8 = 8+8+8",
          "",
          "MULTIPLICATIVE COMPARISON: One quantity is a multiple of another",
          "  - Example: 'Jeff spent 3 times as much as Hilary's $5. How much did Jeff spend?'",
          "  - Uses language like 'times as many' or 'times as much'",
          "",
          "AREA/ARRAYS: Rows and columns arrangement",
          "  - Arrays are visual representations showing rows × columns",
          "  - Example: 'Plant 24 corn in 3 rows. How many in each row?'",
          "",
          "COMBINATION: Finding all possible pairings",
          "  - Example: '3 ice cream flavors and 2 cone types. How many possible cones?'",
          "  - 3×2=6 combinations"
        ]
      },
      {
        id: "m5-division-types",
        title: "Division Problem Types",
        content: "Two types of division situations.",
        keyPoints: [
          "MEASUREMENT (Quotitive) Division:",
          "  - Know the total and group size; find number of groups",
          "  - 'I have 32 Snickers. If I put 2 in each bag, how many bags?'",
          "  - Can be solved by repeated subtraction",
          "",
          "PARTITION (Partitive/Fair Sharing) Division:",
          "  - Know the total and number of groups; find group size",
          "  - 'Ted has 32 Snickers to share equally among 4 people. How many each?'",
          "  - Can be solved by dealing out one at a time"
        ]
      },
      {
        id: "m5-mult-strategies",
        title: "Multiplication & Division Strategies",
        content: "Thinking strategies for learning multiplication and division facts.",
        keyPoints: [
          "Commutative Property: 3×6 = 6×3",
          "Multiplying/Dividing by 0 or 1: Special patterns",
          "Perfect Squares: 4×4, 5×5, etc.",
          "Add Another Group: 5×7=35, so 6×7=35+7=42",
          "The 9's Pattern: Various finger tricks and patterns",
          "Doubling: 4× table is double the 2× table"
        ]
      }
    ]
  },
  {
    id: "module-6",
    number: 6,
    title: "Geometry, Measurement, and Data",
    description: "Understanding geometric concepts, measurement principles, and data analysis.",
    topics: [
      {
        id: "m6-van-hiele",
        title: "Van Hiele Levels of Geometric Thinking",
        content: "A model describing how students develop geometric understanding.",
        keyPoints: [
          "Level 0 - Visualization (Beginning): Students recognize shapes by appearance, not properties. 'It's a square because it looks like one.'",
          "Level 1 - Analysis (Intermediate): Students identify properties of shapes. 'A square has 4 equal sides and 4 right angles.'",
          "Level 2 - Informal Deduction (Advanced): Students understand relationships between properties. 'A square is a special rectangle.'",
          "Students must progress through levels in order",
          "Instruction should match student's current level"
        ],
        incomplete: true
      },
      {
        id: "m6-shape-properties",
        title: "Properties of Shapes",
        content: "Key properties used to describe and classify shapes.",
        keyPoints: [
          "Sides: Number, length, straight vs. curved",
          "Corners/Vertices: Number, types of angles",
          "Angles: Right angles, acute, obtuse",
          "Parallel lines: Lines that never meet",
          "Perpendicular lines: Lines that meet at right angles",
          "Symmetry: Line symmetry, rotational symmetry",
          "Convex vs. Concave: Convex has no 'dents'; concave has inward curves"
        ],
        incomplete: true
      },
      {
        id: "m6-congruence-similarity",
        title: "Congruence and Similarity",
        content: "Understanding when shapes are the same or similar.",
        keyPoints: [
          "Congruent shapes: Same size AND same shape; all corresponding parts equal",
          "Similar shapes: Same shape but different sizes; proportional dimensions"
        ],
        incomplete: true
      },
      {
        id: "m6-measurement-concepts",
        title: "Measurement Concepts",
        content: "Essential concepts for teaching measurement.",
        keyPoints: [
          "Chunking: Breaking measurement into manageable parts",
          "Referent: A known quantity used for comparison (e.g., 'about as long as my arm')",
          "Estimating: Making reasonable guesses before measuring",
          "Equivalences: Understanding relationships (12 inches = 1 foot, etc.)",
          "Connections to children's lives: cooking, sports, building, crafts, temperature"
        ],
        incomplete: true
      },
      {
        id: "m6-data-analysis",
        title: "Data Analysis",
        content: "Types of graphs and data representations.",
        keyPoints: [
          "Types of Graphs:",
          "  - Line plots: Show frequency of data on a number line",
          "  - Pictographs: Use pictures to represent data",
          "  - Bar graphs: Use bars to compare categories",
          "  - Pie/Circle graphs: Show parts of a whole",
          "  - Histograms: Show frequency distribution",
          "  - Line graphs: Show change over time",
          "  - Stem-and-leaf plots: Organize numerical data",
          "  - Box plots: Show data distribution",
          "  - Scatterplots: Show relationships between two variables",
          "Use Bruner's Instructional Sequence: Concrete → Pictorial → Abstract",
          "Connect data to real-life contexts and children's interests"
        ],
        incomplete: true
      }
    ]
  }
];

export const contentCoverageNotes = [
  {
    module: "Module 4",
    note: "Place Value and Fractions content is limited due to PowerPoint files that could not be read. Full slide content not available.",
    topics: ["Place Value details", "Fraction representations and models"]
  },
  {
    module: "Module 6",
    note: "Geometry, Measurement, and Data Analysis content is limited due to PowerPoint files that could not be read.",
    topics: ["Detailed van Hiele level examples", "Geometry standards by grade", "Geoboard activities", "3D shapes (prisms, faces, vertices, edges)", "Measurement Jigsaw full content", "Teaching Channel video details", "Full list of graph types with examples", "PECT-style questions"]
  }
];
