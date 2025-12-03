import type { QuizQuestion } from "@shared/schema";

export const quizQuestions: QuizQuestion[] = [
  // Module 1: Community of Learners
  {
    id: "q1-1",
    moduleId: "module-1",
    type: "multiple-choice",
    question: "What is the FIRST step in the Five Steps of Problem Solving?",
    options: ["Brainstorm Ideas", "Define the Problem", "Implement the Solution", "Review the Results"],
    correctAnswer: "Define the Problem",
    explanation: "The first step is to Define the Problem - clearly understanding what is being asked, what we know, and what we need to find. This sets the foundation for all subsequent steps."
  },
  {
    id: "q1-2",
    moduleId: "module-1",
    type: "multiple-choice",
    question: "Which Mathematical Practice focuses on students explaining their reasoning and responding to others' arguments?",
    options: ["MP1: Make sense of problems", "MP3: Construct viable arguments and critique reasoning", "MP6: Attend to precision", "MP8: Look for regularity"],
    correctAnswer: "MP3: Construct viable arguments and critique reasoning",
    explanation: "MP3 (Construct viable arguments and critique the reasoning of others) is about students justifying conclusions, communicating them clearly, and asking useful questions about others' reasoning."
  },
  {
    id: "q1-3",
    moduleId: "module-1",
    type: "true-false",
    question: "MP4 (Model with mathematics) involves applying math to solve everyday life problems.",
    options: ["True", "False"],
    correctAnswer: "True",
    explanation: "MP4 is about modeling with mathematics - students apply math to solve problems in everyday life, society, and the workplace, making assumptions and approximations to simplify complex situations."
  },
  {
    id: "q1-4",
    moduleId: "module-1",
    type: "multiple-choice",
    question: "Which step of problem solving involves checking if the answer makes sense?",
    options: ["Define the Problem", "Brainstorm Ideas", "Implement the Solution", "Review the Results"],
    correctAnswer: "Review the Results",
    explanation: "Review the Results is the final step where students check if their answer makes sense, verify the solution, and reflect on the process they used."
  },
  {
    id: "q1-5",
    moduleId: "module-1",
    type: "multiple-choice",
    question: "MP7 (Look for and make use of structure) involves students:",
    options: ["Using calculators strategically", "Finding patterns like 3×7 as 3×5 + 3×2", "Writing clear explanations", "Making real-world connections"],
    correctAnswer: "Finding patterns like 3×7 as 3×5 + 3×2",
    explanation: "MP7 is about discerning patterns and structures in mathematics. The example 3×7 = 3×5 + 3×2 shows how students can break down problems using structural understanding."
  },

  // Module 2: Teaching & Learning
  {
    id: "q2-1",
    moduleId: "module-2",
    type: "multiple-choice",
    question: "According to the Four Recommendations, teachers should teach to the:",
    options: ["State standards only", "Developmental characteristics of students", "Textbook sequence", "Parent expectations"],
    correctAnswer: "Developmental characteristics of students",
    explanation: "Recommendation #1 states that teachers should teach to the developmental characteristics of students. Children progress through stages as they mature, and instruction should match their developmental level."
  },
  {
    id: "q2-2",
    moduleId: "module-2",
    type: "multiple-choice",
    question: "What is the correct order of Bruner's developmental sequence?",
    options: ["Symbolic → Iconic → Enactive", "Iconic → Enactive → Symbolic", "Enactive → Iconic → Symbolic", "Symbolic → Enactive → Iconic"],
    correctAnswer: "Enactive → Iconic → Symbolic",
    explanation: "Bruner's sequence is Enactive (concrete/hands-on) → Iconic (pictorial/visual) → Symbolic (abstract/numbers). This matches the Concrete → Pictorial → Abstract instructional approach."
  },
  {
    id: "q2-3",
    moduleId: "module-2",
    type: "true-false",
    question: "Objectives must be tied to a specific mathematical procedure to be valid.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Objectives do NOT have to be tied to a specific mathematical procedure. They must be measurable, observable, and student-centered, but can focus on understanding, problem-solving, or communication."
  },
  {
    id: "q2-4",
    moduleId: "module-2",
    type: "multiple-choice",
    question: "Which learning theory emphasizes that learners actively construct their own knowledge?",
    options: ["Behaviorism", "Constructivism", "Associationism", "Cognitivism"],
    correctAnswer: "Constructivism",
    explanation: "Constructivism holds that learners actively create or invent (construct) their own knowledge by reflecting on physical and mental actions. Key theorists include Piaget and Bruner."
  },
  {
    id: "q2-5",
    moduleId: "module-2",
    type: "multiple-choice",
    question: "Piaget's Concrete Operational stage is characterized by:",
    options: ["Abstract thinking only", "Multiple representations connecting concept and activity", "Symbolic play only", "Sensory exploration"],
    correctAnswer: "Multiple representations connecting concept and activity",
    explanation: "The Concrete Operational stage (ages 7-11) is when children can think logically about concrete objects and use multiple representations to connect concepts and activities."
  },
  {
    id: "q2-6",
    moduleId: "module-2",
    type: "multiple-choice",
    question: "In behaviorism, learning is shaped through:",
    options: ["Active construction of knowledge", "Reinforcement of drill and practice", "Social dialogue", "Reflection on mental actions"],
    correctAnswer: "Reinforcement of drill and practice",
    explanation: "Behaviorism emphasizes that behavior can be shaped by reinforcement of drill and practice. Skills are learned in a fixed order, and clear objectives guide instruction."
  },
  {
    id: "q2-7",
    moduleId: "module-2",
    type: "multiple-choice",
    question: "Recommendation #2 states that teachers should:",
    options: ["Use only direct instruction", "Actively involve students", "Focus on memorization", "Teach abstract concepts first"],
    correctAnswer: "Actively involve students",
    explanation: "Recommendation #2 emphasizes that teachers should actively involve students in the learning process, not have them be passive recipients of information."
  },

  // Module 3: Assessment
  {
    id: "q3-1",
    moduleId: "module-3",
    type: "multiple-choice",
    question: "Which type of rubric provides the MOST targeted feedback for specific criteria?",
    options: ["Holistic rubric", "Analytic rubric", "Single-point rubric", "Checklist"],
    correctAnswer: "Analytic rubric",
    explanation: "Analytic rubrics break assignments into parts and define levels of performance for each part, providing targeted feedback on specific criteria."
  },
  {
    id: "q3-2",
    moduleId: "module-3",
    type: "multiple-choice",
    question: "What does the 'G' stand for in the GRASPS performance task format?",
    options: ["Grade", "Goal", "Group", "Guidance"],
    correctAnswer: "Goal",
    explanation: "In GRASPS, G stands for Goal - 'Your goal (or task) is to...' This establishes what the student needs to accomplish in the performance task."
  },
  {
    id: "q3-3",
    moduleId: "module-3",
    type: "true-false",
    question: "Formative assessment occurs at the END of instruction to evaluate learning.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Formative assessment is ongoing assessment DURING instruction to guide teaching and provide feedback. Summative assessment occurs at the end to evaluate learning."
  },
  {
    id: "q3-4",
    moduleId: "module-3",
    type: "multiple-choice",
    question: "A single-point rubric describes only:",
    options: ["All levels of failure", "The required level of performance with open-ended areas", "Numerical scores", "Teacher preferences"],
    correctAnswer: "The required level of performance with open-ended areas",
    explanation: "Single-point rubrics describe only the required level of performance (what 'meets standard' looks like) and leave areas for concerns and excellence open-ended for personalized feedback."
  },
  {
    id: "q3-5",
    moduleId: "module-3",
    type: "multiple-choice",
    question: "'My Favorite No' is an example of:",
    options: ["Summative assessment", "Formative assessment strategy", "Standardized testing", "Performance task"],
    correctAnswer: "Formative assessment strategy",
    explanation: "'My Favorite No' is a formative assessment strategy where teachers collect wrong answers that show interesting thinking and discuss mistakes as a class to promote learning."
  },

  // Module 4: Numbers & Number Sense
  {
    id: "q4-1",
    moduleId: "module-4",
    type: "multiple-choice",
    question: "Subitizing is the ability to:",
    options: ["Count by skip counting", "Instantly recognize small quantities without counting", "Write numbers correctly", "Solve addition problems"],
    correctAnswer: "Instantly recognize small quantities without counting",
    explanation: "Subitizing is the ability to instantly recognize small quantities (typically 1-5) without counting. This skill builds number sense and supports mental math development."
  },
  {
    id: "q4-2",
    moduleId: "module-4",
    type: "true-false",
    question: "Pattern blocks are an appropriate model for teaching place value.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Pattern blocks are NOT a place value model. Appropriate place value models include base-ten blocks, place value charts, expanded notation, and money (dollars, dimes, pennies)."
  },
  {
    id: "q4-3",
    moduleId: "module-3",
    type: "multiple-choice",
    question: "The counting principle that states 'the last number said represents the total quantity' is:",
    options: ["Stable order", "One-to-one correspondence", "Cardinality", "Abstraction"],
    correctAnswer: "Cardinality",
    explanation: "Cardinality is the principle that the last number counted represents the total quantity of objects in the set. This is a crucial understanding for meaningful counting."
  },
  {
    id: "q4-4",
    moduleId: "module-4",
    type: "multiple-choice",
    question: "Cardinal numbers tell us:",
    options: ["Position or order", "How many", "A label or identifier", "Direction"],
    correctAnswer: "How many",
    explanation: "Cardinal numbers tell 'how many' (e.g., 'There are 5 apples'). Ordinal numbers tell position, and nominal numbers are labels."
  },
  {
    id: "q4-5",
    moduleId: "module-4",
    type: "multiple-choice",
    question: "Rational counting differs from rote counting because rational counting involves:",
    options: ["Faster recitation", "Understanding that counting determines 'how many'", "Skip counting", "Writing numbers"],
    correctAnswer: "Understanding that counting determines 'how many'",
    explanation: "Rote counting is just reciting number words in order, while rational counting involves understanding that the counting process determines 'how many' objects there are."
  },

  // Module 5: Operations
  {
    id: "q5-1",
    moduleId: "module-5",
    type: "multiple-choice",
    question: "The sequence for teaching operations according to Bruner is:",
    options: ["Symbols → Pictures → Materials", "Pictures → Materials → Symbols", "Materials → Pictures → Symbols", "Symbols → Materials → Pictures"],
    correctAnswer: "Materials → Pictures → Symbols",
    explanation: "Bruner's sequence is Enactive (materials/concrete) → Iconic (pictures/representational) → Symbolic (abstract). This is the modeling sequence: materials → pictures → symbols."
  },
  {
    id: "q5-2",
    moduleId: "module-5",
    type: "multiple-choice",
    question: "Which problem type involves a Start, Change, and End (Result)?",
    options: ["Part-Part-Whole", "Compare", "Change (Join or Separate)", "Array"],
    correctAnswer: "Change (Join or Separate)",
    explanation: "Change problems (either Join or Separate) have a Start amount, a Change (adding or removing), and an End/Result. They can be directly modeled/acted out."
  },
  {
    id: "q5-3",
    moduleId: "module-5",
    type: "multiple-choice",
    question: "'Connie has 15 red marbles and 28 blue marbles. How many total?' is an example of which problem type?",
    options: ["Change (Join)", "Change (Separate)", "Part-Part-Whole", "Compare"],
    correctAnswer: "Part-Part-Whole",
    explanation: "This is a Part-Part-Whole problem because two parts (red marbles and blue marbles) combine to make a whole. There is no action or change over time."
  },
  {
    id: "q5-4",
    moduleId: "module-5",
    type: "multiple-choice",
    question: "Derived facts are:",
    options: ["Facts memorized through drill", "Facts figured out using known facts", "Facts taught by the teacher", "Facts from a textbook"],
    correctAnswer: "Facts figured out using known facts",
    explanation: "Derived facts are strategies where students use facts they know to figure out facts they don't know. Example: 'I know 9+4=13 because 9+1=10 and 3 more is 13.'"
  },
  {
    id: "q5-5",
    moduleId: "module-5",
    type: "multiple-choice",
    question: "Measurement division asks: 'How many groups?' Partition division asks:",
    options: ["How many groups?", "How many in each group?", "What is the total?", "What is the difference?"],
    correctAnswer: "How many in each group?",
    explanation: "Measurement division finds the number of groups (given total and group size). Partition division finds the size of each group (given total and number of groups) - it's like fair sharing."
  },
  {
    id: "q5-6",
    moduleId: "module-5",
    type: "multiple-choice",
    question: "Compare problems involve finding the:",
    options: ["Start, Change, and End", "Part, Part, and Whole", "Larger Set, Smaller Set, and Difference", "Rows and Columns"],
    correctAnswer: "Larger Set, Smaller Set, and Difference",
    explanation: "Compare problems compare two quantities to find the difference between them. They involve a Larger Set, a Smaller Set, and the Difference between them."
  },
  {
    id: "q5-7",
    moduleId: "module-5",
    type: "multiple-choice",
    question: "Which model shows a whole and its two parts using connected circles?",
    options: ["Change diagram", "Bar model", "Number bonds", "Array"],
    correctAnswer: "Number bonds",
    explanation: "Number bonds use three connected circles to show a whole number and how it breaks into two parts. They're useful for showing part-whole relationships."
  },
  {
    id: "q5-8",
    moduleId: "module-5",
    type: "multiple-choice",
    question: "'Jeff spent 3 times as much as Hilary's $5' is an example of:",
    options: ["Equal groups", "Multiplicative comparison", "Array/Area", "Combination"],
    correctAnswer: "Multiplicative comparison",
    explanation: "Multiplicative comparison problems use language like 'times as many' or 'times as much' to compare quantities multiplicatively. One quantity is a multiple of another."
  },

  // Module 6: Geometry, Measurement, Data
  {
    id: "q6-1",
    moduleId: "module-6",
    type: "multiple-choice",
    question: "At van Hiele Level 0 (Visualization), students recognize shapes by:",
    options: ["Their properties", "Formal definitions", "Appearance", "Deductive reasoning"],
    correctAnswer: "Appearance",
    explanation: "At Level 0 (Visualization/Beginning), students recognize shapes by their overall appearance, not by their properties. 'It's a square because it looks like one.'"
  },
  {
    id: "q6-2",
    moduleId: "module-6",
    type: "multiple-choice",
    question: "A referent in measurement is:",
    options: ["The measuring tool", "A known quantity used for comparison", "The answer to a problem", "A type of graph"],
    correctAnswer: "A known quantity used for comparison",
    explanation: "A referent is a known quantity used for comparison when estimating measurements. For example, 'about as long as my arm' uses your arm as a referent."
  },
  {
    id: "q6-3",
    moduleId: "module-6",
    type: "true-false",
    question: "Congruent shapes have the same shape but can be different sizes.",
    options: ["True", "False"],
    correctAnswer: "False",
    explanation: "Congruent shapes have both the same size AND the same shape. Similar shapes have the same shape but can be different sizes (proportional dimensions)."
  },

  // Mixed Quiz Questions for comprehensive review
  {
    id: "q-mixed-1",
    moduleId: "module-2",
    type: "fill-blank",
    question: "Complete: The 'A' in ABCD objectives stands for _____, which refers to who is learning.",
    options: ["Audience", "Assessment", "Activity", "Abstract"],
    correctAnswer: "Audience",
    explanation: "In the ABCD framework for objectives: A = Audience (who is learning), B = Behavior (what they will do), C = Condition (under what circumstances), D = Degree (how well they must perform)."
  },
  {
    id: "q-mixed-2",
    moduleId: "module-5",
    type: "multiple-choice",
    question: "Which of these is NOT one of the three problem structures for addition and subtraction?",
    options: ["Change (Join/Separate)", "Part-Part-Whole", "Compare", "Equal Groups"],
    correctAnswer: "Equal Groups",
    explanation: "The three problem structures for addition and subtraction are: Change (Join/Separate), Part-Part-Whole, and Compare. Equal Groups is a multiplication/division problem type."
  }
];

export function getQuestionsByModule(moduleId: string): QuizQuestion[] {
  return quizQuestions.filter(q => q.moduleId === moduleId);
}

export function getRandomQuestions(count: number, moduleId?: string): QuizQuestion[] {
  let pool = moduleId ? getQuestionsByModule(moduleId) : quizQuestions;
  const shuffled = [...pool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
