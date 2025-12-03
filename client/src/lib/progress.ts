import type { Progress } from "@shared/schema";

const STORAGE_KEY = "edec303-progress";

const defaultProgress: Progress = {
  modulesViewed: [],
  topicsCompleted: [],
  quizScores: [],
  flashcardsReviewed: [],
  lastStudyDate: undefined,
};

export function getProgress(): Progress {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Error loading progress:", e);
  }
  return defaultProgress;
}

export function saveProgress(progress: Progress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error("Error saving progress:", e);
  }
}

export function markModuleViewed(moduleId: string): void {
  const progress = getProgress();
  if (!progress.modulesViewed.includes(moduleId)) {
    progress.modulesViewed.push(moduleId);
    progress.lastStudyDate = new Date().toISOString();
    saveProgress(progress);
  }
}

export function markTopicCompleted(topicId: string): void {
  const progress = getProgress();
  if (!progress.topicsCompleted.includes(topicId)) {
    progress.topicsCompleted.push(topicId);
    progress.lastStudyDate = new Date().toISOString();
    saveProgress(progress);
  }
}

export function saveQuizScore(quizId: string, moduleId: string, score: number, total: number): void {
  const progress = getProgress();
  progress.quizScores.push({
    quizId,
    moduleId,
    score,
    total,
    date: new Date().toISOString(),
  });
  progress.lastStudyDate = new Date().toISOString();
  saveProgress(progress);
}

export function markFlashcardReviewed(flashcardId: string): void {
  const progress = getProgress();
  if (!progress.flashcardsReviewed.includes(flashcardId)) {
    progress.flashcardsReviewed.push(flashcardId);
    progress.lastStudyDate = new Date().toISOString();
    saveProgress(progress);
  }
}

export function resetProgress(): void {
  saveProgress(defaultProgress);
}

export function getStudyStats(progress: Progress) {
  const totalModules = 6;
  const modulesProgress = (progress.modulesViewed.length / totalModules) * 100;
  
  const recentScores = progress.quizScores.slice(-10);
  const averageScore = recentScores.length > 0
    ? recentScores.reduce((sum, q) => sum + (q.score / q.total) * 100, 0) / recentScores.length
    : 0;
  
  return {
    modulesProgress: Math.round(modulesProgress),
    topicsCompleted: progress.topicsCompleted.length,
    totalQuizzesTaken: progress.quizScores.length,
    averageScore: Math.round(averageScore),
    flashcardsReviewed: progress.flashcardsReviewed.length,
    lastStudyDate: progress.lastStudyDate,
  };
}
