import type { Flashcard } from "@shared/schema";

export const flashcards: Flashcard[] = [
  // Module 1: Problem Solving & Standards
  {
    id: "fc-1-1",
    moduleId: "module-1",
    category: "Problem Solving",
    front: "Five Steps of Problem Solving",
    back: "1. Define the Problem\n2. Brainstorm Ideas\n3. Decide on a Solution\n4. Implement the Solution\n5. Review the Results",
    examples: ["Use when helping students work through word problems or real-world challenges"]
  },
  {
    id: "fc-1-2",
    moduleId: "module-1",
    category: "Mathematical Practices",
    front: "MP1",
    back: "Make sense of problems and persevere in solving them.\n\nStudents explain meanings, analyze givens, constraints, and goals. They plan pathways rather than jumping to solutions."
  },
  {
    id: "fc-1-3",
    moduleId: "module-1",
    category: "Mathematical Practices",
    front: "MP2",
    back: "Reason abstractly and quantitatively.\n\nStudents decontextualize (represent situations symbolically) and contextualize (consider meaning of symbols)."
  },
  {
    id: "fc-1-4",
    moduleId: "module-1",
    category: "Mathematical Practices",
    front: "MP3",
    back: "Construct viable arguments and critique the reasoning of others.\n\nStudents justify conclusions, communicate clearly, and ask useful questions about others' reasoning."
  },
  {
    id: "fc-1-5",
    moduleId: "module-1",
    category: "Mathematical Practices",
    front: "MP4",
    back: "Model with mathematics.\n\nStudents apply math to solve everyday life problems, making assumptions and approximations."
  },
  {
    id: "fc-1-6",
    moduleId: "module-1",
    category: "Mathematical Practices",
    front: "MP5",
    back: "Use appropriate tools strategically.\n\nStudents consider available tools and make decisions about when they are helpful."
  },
  {
    id: "fc-1-7",
    moduleId: "module-1",
    category: "Mathematical Practices",
    front: "MP6",
    back: "Attend to precision.\n\nStudents communicate precisely, use clear definitions, specify units, and calculate accurately."
  },
  {
    id: "fc-1-8",
    moduleId: "module-1",
    category: "Mathematical Practices",
    front: "MP7",
    back: "Look for and make use of structure.\n\nStudents discern patterns, such as seeing 3×7 as 3×5 + 3×2."
  },
  {
    id: "fc-1-9",
    moduleId: "module-1",
    category: "Mathematical Practices",
    front: "MP8",
    back: "Look for and express regularity in repeated reasoning.\n\nStudents notice repeated calculations and look for shortcuts and generalizations."
  },

  // Module 2: Learning Theories
  {
    id: "fc-2-1",
    moduleId: "module-2",
    category: "Learning Theories",
    front: "Behaviorism",
    back: "Learning theory where behavior is shaped through reinforcement and drill. Skills learned in fixed order. Clear objectives guide instruction.\n\nTheorists: Thorndike, Skinner, Gagné"
  },
  {
    id: "fc-2-2",
    moduleId: "module-2",
    category: "Learning Theories",
    front: "Constructivism",
    back: "Learning theory where learners actively construct their own knowledge through experience and reflection. Social dialogue supports learning.\n\nTheorists: Brownell, Piaget, Bruner, Dienes"
  },
  {
    id: "fc-2-3",
    moduleId: "module-2",
    category: "Developmental Theories",
    front: "Bruner's Developmental Sequence",
    back: "Enactive → Iconic → Symbolic\n\n• Enactive: Concrete/hands-on\n• Iconic: Pictorial/visual\n• Symbolic: Abstract/numbers\n\nSame as: Concrete → Pictorial → Abstract"
  },
  {
    id: "fc-2-4",
    moduleId: "module-2",
    category: "Developmental Theories",
    front: "Piaget's Concrete Operational Stage",
    back: "Ages 7-11: Children can think logically about concrete objects. They can classify, seriate, and understand conservation.\n\nKey feature: Multiple representations connect concept and activity."
  },
  {
    id: "fc-2-5",
    moduleId: "module-2",
    category: "Teaching Recommendations",
    front: "Four Recommendations for Teaching Math",
    back: "1. Teach to developmental characteristics of students\n2. Actively involve students\n3. Move learning from concrete to abstract\n4. Use communication to encourage understanding"
  },
  {
    id: "fc-2-6",
    moduleId: "module-2",
    category: "Objectives",
    front: "ABCD's of Objectives",
    back: "A = Audience (who is learning)\nB = Behavior (what they will do - observable)\nC = Condition (under what circumstances)\nD = Degree (how well they must perform)\n\nObjectives must be measurable, observable, student-centered."
  },
  {
    id: "fc-2-7",
    moduleId: "module-2",
    category: "Knowledge Types",
    front: "Procedural vs. Conceptual Knowledge",
    back: "Procedural: Knowing HOW to do something (the steps)\n\nConceptual: Understanding WHY something works (underlying concepts)\n\nEffective teaching develops BOTH."
  },

  // Module 3: Assessment
  {
    id: "fc-3-1",
    moduleId: "module-3",
    category: "Assessment Types",
    front: "Formative Assessment",
    back: "Assessment FOR Learning\n\n• Ongoing during instruction\n• Guides teaching\n• Provides feedback to improve learning\n• Examples: observations, questioning, exit tickets"
  },
  {
    id: "fc-3-2",
    moduleId: "module-3",
    category: "Assessment Types",
    front: "Summative Assessment",
    back: "Assessment OF Learning\n\n• At the end of instruction\n• Evaluates learning/achievement\n• Examples: tests, projects, portfolios"
  },
  {
    id: "fc-3-3",
    moduleId: "module-3",
    category: "Rubrics",
    front: "Holistic Rubric",
    back: "Defines 3-5 levels of performance, considering the product as a whole.\n\nPros: Easy to develop and apply\nCons: Provides limited specific feedback"
  },
  {
    id: "fc-3-4",
    moduleId: "module-3",
    category: "Rubrics",
    front: "Analytic Rubric",
    back: "Breaks assignment into parts; defines levels for each part.\n\nPros: Provides targeted feedback on each criterion\nCons: Takes more time to develop; can be wordy"
  },
  {
    id: "fc-3-5",
    moduleId: "module-3",
    category: "Rubrics",
    front: "Single-Point Rubric",
    back: "Describes only the required level of performance with open-ended areas for concerns and excellence.\n\nPros: Simple, encourages creativity, takes attention off grades\nCons: Less defined criteria for concerns/excellence"
  },
  {
    id: "fc-3-6",
    moduleId: "module-3",
    category: "Performance Tasks",
    front: "GRASPS Format",
    back: "G = Goal (the task)\nR = Role (student's job)\nA = Audience (who to convince)\nS = Situation (context/challenge)\nP = Product & Purpose\nS = Standards/Criteria for Success"
  },

  // Module 4: Number Sense
  {
    id: "fc-4-1",
    moduleId: "module-4",
    category: "Number Concepts",
    front: "Subitizing",
    back: "Instantly recognizing small quantities (1-5) without counting.\n\nBuilds number sense and supports mental math development."
  },
  {
    id: "fc-4-2",
    moduleId: "module-4",
    category: "Number Concepts",
    front: "Conservation",
    back: "Understanding that quantity remains the same regardless of arrangement.\n\nExample: 5 buttons spread out is still the same as 5 buttons close together."
  },
  {
    id: "fc-4-3",
    moduleId: "module-4",
    category: "Number Concepts",
    front: "One-to-One Correspondence",
    back: "Matching one object to one number when counting. Each object is counted exactly once."
  },
  {
    id: "fc-4-4",
    moduleId: "module-4",
    category: "Counting Principles",
    front: "Cardinality Principle",
    back: "The last number said represents the total quantity of the set.\n\nWhen counting 1-2-3-4-5, the '5' tells how many there are total."
  },
  {
    id: "fc-4-5",
    moduleId: "module-4",
    category: "Number Types",
    front: "Cardinal, Ordinal, Nominal Numbers",
    back: "Cardinal: Tells 'how many' (5 apples)\nOrdinal: Tells position/order (3rd place)\nNominal: Labels/identifiers (Jersey #24)"
  },
  {
    id: "fc-4-6",
    moduleId: "module-4",
    category: "Counting",
    front: "Rote vs. Rational Counting",
    back: "Rote: Reciting number words in order (may not understand meaning)\n\nRational: Understanding that counting determines 'how many'"
  },
  {
    id: "fc-4-7",
    moduleId: "module-4",
    category: "Counting Strategies",
    front: "Counting On",
    back: "Starting from a number and counting forward.\n\nFor 5+3: Say 'five... six, seven, eight'\n\nMore efficient than counting all."
  },

  // Module 5: Operations
  {
    id: "fc-5-1",
    moduleId: "module-5",
    category: "Problem Types",
    front: "Change Problems",
    back: "Have a Start, Change, and End (Result).\nCan be Join (adding) or Separate (taking away).\n\nExample: 'Carl has 5 blocks. Rita gives him 8 more. How many now?'"
  },
  {
    id: "fc-5-2",
    moduleId: "module-5",
    category: "Problem Types",
    front: "Part-Part-Whole Problems",
    back: "Two parts combine to make a whole. No action or change over time.\n\nExample: 'Connie has 15 red and 28 blue marbles. How many total?'"
  },
  {
    id: "fc-5-3",
    moduleId: "module-5",
    category: "Problem Types",
    front: "Compare Problems",
    back: "Compare two quantities to find the difference.\nHave: Larger Set, Smaller Set, Difference\n\nExample: 'Jessa has 78 shells. Susan has 6 more. How many does Susan have?'"
  },
  {
    id: "fc-5-4",
    moduleId: "module-5",
    category: "Models",
    front: "Change Diagram",
    back: "Shows Start → Change → End for action problems.\n\nUsed for Join and Separate (Change) problems."
  },
  {
    id: "fc-5-5",
    moduleId: "module-5",
    category: "Models",
    front: "Bar Model",
    back: "Rectangular bars showing part-whole or comparison relationships.\n\nUseful for visualizing addition, subtraction, and comparison problems."
  },
  {
    id: "fc-5-6",
    moduleId: "module-5",
    category: "Models",
    front: "Number Bonds",
    back: "Three connected circles showing a whole and its two parts.\n\nGreat for showing part-whole relationships and fact families."
  },
  {
    id: "fc-5-7",
    moduleId: "module-5",
    category: "Strategies",
    front: "Derived Facts",
    back: "Using known facts to figure out unknown facts.\n\nExample: 'I know 9+4=13 because 9+1=10 and 3 more is 13.'"
  },
  {
    id: "fc-5-8",
    moduleId: "module-5",
    category: "Multiplication Types",
    front: "Equal Groups Problems",
    back: "Same-sized groups combined.\n\nExample: '3 boxes with 8 cards each. How many total?'\n\nRelated to repeated addition: 3×8 = 8+8+8"
  },
  {
    id: "fc-5-9",
    moduleId: "module-5",
    category: "Multiplication Types",
    front: "Multiplicative Comparison",
    back: "One quantity is a multiple of another. Uses 'times as many/much.'\n\nExample: 'Jeff spent 3 times as much as Hilary's $5.'"
  },
  {
    id: "fc-5-10",
    moduleId: "module-5",
    category: "Division Types",
    front: "Measurement vs. Partition Division",
    back: "Measurement: Know total & group size, find # of groups\n('How many groups?')\n\nPartition: Know total & # of groups, find group size\n('How many in each group?' - fair sharing)"
  },

  // Module 6: Geometry & Measurement
  {
    id: "fc-6-1",
    moduleId: "module-6",
    category: "Geometric Thinking",
    front: "Van Hiele Level 0 (Visualization)",
    back: "Students recognize shapes by appearance, not properties.\n\n'It's a square because it looks like one.'"
  },
  {
    id: "fc-6-2",
    moduleId: "module-6",
    category: "Geometric Thinking",
    front: "Van Hiele Level 1 (Analysis)",
    back: "Students identify properties of shapes.\n\n'A square has 4 equal sides and 4 right angles.'"
  },
  {
    id: "fc-6-3",
    moduleId: "module-6",
    category: "Measurement",
    front: "Referent (in Measurement)",
    back: "A known quantity used for comparison when estimating.\n\nExample: 'about as long as my arm' or 'about as heavy as a textbook'"
  },
  {
    id: "fc-6-4",
    moduleId: "module-6",
    category: "Shape Properties",
    front: "Congruent vs. Similar Shapes",
    back: "Congruent: Same size AND same shape\n\nSimilar: Same shape but different sizes (proportional dimensions)"
  }
];

export function getFlashcardsByModule(moduleId: string): Flashcard[] {
  return flashcards.filter(fc => fc.moduleId === moduleId);
}

export function getFlashcardsByCategory(category: string): Flashcard[] {
  return flashcards.filter(fc => fc.category === category);
}

export function shuffleFlashcards(cards: Flashcard[]): Flashcard[] {
  return [...cards].sort(() => Math.random() - 0.5);
}
