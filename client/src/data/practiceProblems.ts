import type { PracticeProblem } from "@shared/schema";

export const practiceProblems: PracticeProblem[] = [
  // Change (Join) Problems
  {
    id: "pp-1",
    moduleId: "module-5",
    type: "change",
    problemText: "Marcus had 12 stickers. His friend gave him 7 more stickers. How many stickers does Marcus have now?",
    model: "change-diagram",
    solution: "19 stickers",
    steps: [
      "Start: 12 stickers",
      "Change: +7 stickers (Join)",
      "End: 12 + 7 = 19 stickers"
    ]
  },
  {
    id: "pp-2",
    moduleId: "module-5",
    type: "change",
    problemText: "Emma had some books. She got 5 new books from the library. Now she has 13 books. How many books did Emma start with?",
    model: "change-diagram",
    solution: "8 books",
    steps: [
      "Start: ? books",
      "Change: +5 books (Join)",
      "End: 13 books",
      "Work backward: 13 - 5 = 8 books"
    ]
  },
  // Change (Separate) Problems
  {
    id: "pp-3",
    moduleId: "module-5",
    type: "change",
    problemText: "Alex had 15 cookies. He gave 6 cookies to his sister. How many cookies does Alex have left?",
    model: "change-diagram",
    solution: "9 cookies",
    steps: [
      "Start: 15 cookies",
      "Change: -6 cookies (Separate)",
      "End: 15 - 6 = 9 cookies"
    ]
  },
  {
    id: "pp-4",
    moduleId: "module-5",
    type: "change",
    problemText: "Sofia had 20 crayons. She lost some crayons. Now she has 14 crayons. How many crayons did Sofia lose?",
    model: "change-diagram",
    solution: "6 crayons",
    steps: [
      "Start: 20 crayons",
      "Change: -? crayons (Separate)",
      "End: 14 crayons",
      "Find change: 20 - 14 = 6 crayons lost"
    ]
  },
  // Part-Part-Whole Problems
  {
    id: "pp-5",
    moduleId: "module-5",
    type: "part-part-whole",
    problemText: "There are 8 red apples and 5 green apples in a basket. How many apples are in the basket altogether?",
    model: "bar-model",
    solution: "13 apples",
    steps: [
      "Part 1: 8 red apples",
      "Part 2: 5 green apples",
      "Whole: 8 + 5 = 13 apples"
    ]
  },
  {
    id: "pp-6",
    moduleId: "module-5",
    type: "part-part-whole",
    problemText: "There are 16 students in the class. 9 students are girls. How many students are boys?",
    model: "number-bonds",
    solution: "7 boys",
    steps: [
      "Whole: 16 students",
      "Part 1 (girls): 9",
      "Part 2 (boys): 16 - 9 = 7"
    ]
  },
  {
    id: "pp-7",
    moduleId: "module-5",
    type: "part-part-whole",
    problemText: "Miguel has 11 toy cars and 7 toy trucks. How many toy vehicles does he have in total?",
    model: "bar-model",
    solution: "18 toy vehicles",
    steps: [
      "Part 1: 11 toy cars",
      "Part 2: 7 toy trucks",
      "Whole: 11 + 7 = 18 vehicles"
    ]
  },
  // Compare Problems
  {
    id: "pp-8",
    moduleId: "module-5",
    type: "compare",
    problemText: "Mia has 14 stickers. Jake has 9 stickers. How many more stickers does Mia have than Jake?",
    model: "bar-model",
    solution: "5 more stickers",
    steps: [
      "Larger set (Mia): 14",
      "Smaller set (Jake): 9",
      "Difference: 14 - 9 = 5 more stickers"
    ]
  },
  {
    id: "pp-9",
    moduleId: "module-5",
    type: "compare",
    problemText: "Tyler read 8 books. His sister read 5 fewer books than Tyler. How many books did his sister read?",
    model: "bar-model",
    solution: "3 books",
    steps: [
      "Tyler (larger): 8 books",
      "Difference: 5 fewer",
      "Sister (smaller): 8 - 5 = 3 books"
    ]
  },
  // Equal Groups (Multiplication)
  {
    id: "pp-10",
    moduleId: "module-5",
    type: "equal-groups",
    problemText: "There are 4 tables in the cafeteria. Each table has 6 chairs. How many chairs are there in all?",
    model: "array",
    solution: "24 chairs",
    steps: [
      "Number of groups: 4 tables",
      "Size of each group: 6 chairs",
      "Total: 4 × 6 = 24 chairs"
    ]
  },
  {
    id: "pp-11",
    moduleId: "module-5",
    type: "equal-groups",
    problemText: "Ben bought 3 packs of markers. Each pack has 8 markers. How many markers did Ben buy?",
    model: "bar-model",
    solution: "24 markers",
    steps: [
      "Number of groups: 3 packs",
      "Size of each group: 8 markers",
      "Total: 3 × 8 = 24 markers"
    ]
  },
  // Array Problems
  {
    id: "pp-12",
    moduleId: "module-5",
    type: "array",
    problemText: "A parking lot has cars arranged in 5 rows with 7 cars in each row. How many cars are in the parking lot?",
    model: "array",
    solution: "35 cars",
    steps: [
      "Rows: 5",
      "Cars per row: 7",
      "Total: 5 × 7 = 35 cars"
    ]
  },
  // Multiplicative Comparison
  {
    id: "pp-13",
    moduleId: "module-5",
    type: "multiplicative-comparison",
    problemText: "Sara has 4 stamps. Tom has 3 times as many stamps as Sara. How many stamps does Tom have?",
    model: "bar-model",
    solution: "12 stamps",
    steps: [
      "Sara (reference): 4 stamps",
      "Tom has 3 times as many",
      "Tom: 3 × 4 = 12 stamps"
    ]
  },
  {
    id: "pp-14",
    moduleId: "module-5",
    type: "multiplicative-comparison",
    problemText: "A giraffe is 18 feet tall. A penguin is 3 feet tall. How many times taller is the giraffe than the penguin?",
    model: "bar-model",
    solution: "6 times taller",
    steps: [
      "Giraffe: 18 feet",
      "Penguin: 3 feet",
      "Comparison: 18 ÷ 3 = 6 times taller"
    ]
  }
];

export function getProblemsByType(type: PracticeProblem['type']): PracticeProblem[] {
  return practiceProblems.filter(p => p.type === type);
}

export function getRandomProblems(count: number): PracticeProblem[] {
  const shuffled = [...practiceProblems].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export function generateVariation(problem: PracticeProblem): PracticeProblem {
  const variations = {
    names: ["Alex", "Emma", "Marcus", "Sofia", "Tyler", "Mia", "Ben", "Sara", "Jake", "Lily"],
    items: {
      change: ["stickers", "books", "cookies", "crayons", "pencils", "marbles", "cards"],
      "part-part-whole": ["apples", "students", "cars", "birds", "flowers", "coins"],
      compare: ["stickers", "books", "points", "shells", "stamps", "dollars"],
      "equal-groups": ["chairs", "markers", "eggs", "cookies", "toys"],
      array: ["cars", "trees", "desks", "tiles", "plants"],
      "multiplicative-comparison": ["stamps", "books", "marbles", "dollars", "points"]
    }
  };
  
  const randomName = variations.names[Math.floor(Math.random() * variations.names.length)];
  const itemOptions = variations.items[problem.type] || variations.items.change;
  const randomItem = itemOptions[Math.floor(Math.random() * itemOptions.length)];
  
  const multiplier = Math.floor(Math.random() * 3) + 1;
  
  return {
    ...problem,
    id: `${problem.id}-var-${Date.now()}`,
    problemText: problem.problemText
      .replace(/\b(Alex|Emma|Marcus|Sofia|Tyler|Mia|Ben|Sara|Jake|Lily|Miguel|Tom|Jessa)\b/gi, randomName)
  };
}
