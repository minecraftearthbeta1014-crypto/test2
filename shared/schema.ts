import { z } from "zod";

export const moduleSchema = z.object({
  id: z.string(),
  number: z.number(),
  title: z.string(),
  description: z.string(),
  topics: z.array(z.object({
    id: z.string(),
    title: z.string(),
    content: z.string(),
    keyPoints: z.array(z.string()).optional(),
    examples: z.array(z.string()).optional(),
    incomplete: z.boolean().optional(),
  })),
});

export const quizQuestionSchema = z.object({
  id: z.string(),
  moduleId: z.string(),
  type: z.enum(["multiple-choice", "true-false", "matching", "fill-blank"]),
  question: z.string(),
  options: z.array(z.string()).optional(),
  correctAnswer: z.union([z.string(), z.array(z.string())]),
  explanation: z.string(),
  difficulty: z.enum(["easy", "medium", "hard"]).optional(),
});

export const flashcardSchema = z.object({
  id: z.string(),
  moduleId: z.string(),
  category: z.string(),
  front: z.string(),
  back: z.string(),
  examples: z.array(z.string()).optional(),
});

export const practiceProblemsSchema = z.object({
  id: z.string(),
  moduleId: z.string(),
  type: z.enum(["change", "part-part-whole", "compare", "equal-groups", "array", "multiplicative-comparison"]),
  problemText: z.string(),
  model: z.enum(["bar-model", "number-bonds", "array", "change-diagram"]).optional(),
  solution: z.string(),
  steps: z.array(z.string()).optional(),
});

export const progressSchema = z.object({
  modulesViewed: z.array(z.string()),
  topicsCompleted: z.array(z.string()),
  quizScores: z.array(z.object({
    quizId: z.string(),
    moduleId: z.string(),
    score: z.number(),
    total: z.number(),
    date: z.string(),
  })),
  flashcardsReviewed: z.array(z.string()),
  lastStudyDate: z.string().optional(),
});

export type Module = z.infer<typeof moduleSchema>;
export type QuizQuestion = z.infer<typeof quizQuestionSchema>;
export type Flashcard = z.infer<typeof flashcardSchema>;
export type PracticeProblem = z.infer<typeof practiceProblemsSchema>;
export type Progress = z.infer<typeof progressSchema>;

export const users = null;
export const insertUserSchema = z.object({
  username: z.string(),
  password: z.string(),
});
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = { id: string; username: string; password: string };
