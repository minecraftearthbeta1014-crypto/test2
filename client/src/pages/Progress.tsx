import { useState, useEffect } from "react";
import { modules } from "@/data/studyContent";
import { flashcards } from "@/data/flashcards";
import { quizQuestions } from "@/data/quizQuestions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress as ProgressBar } from "@/components/ui/progress";
import { 
  BarChart3, BookOpen, HelpCircle, Layers, CheckCircle2, 
  Clock, TrendingUp, RotateCcw, Calendar
} from "lucide-react";
import { getProgress, getStudyStats, resetProgress } from "@/lib/progress";
import type { Progress as ProgressType } from "@shared/schema";

export default function Progress() {
  const [progress, setProgress] = useState<ProgressType>(getProgress());
  const stats = getStudyStats(progress);

  const refreshProgress = () => {
    setProgress(getProgress());
  };

  const handleReset = () => {
    if (confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
      resetProgress();
      refreshProgress();
    }
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return "Never";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-chart-5";
    if (score >= 60) return "text-chart-3";
    return "text-destructive";
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return "bg-chart-5";
    if (score >= 60) return "bg-chart-3";
    return "bg-destructive";
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Progress Tracker</h1>
            <p className="text-muted-foreground">
              Track your study progress and quiz performance.
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={handleReset} data-testid="button-reset-progress">
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset Progress
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.modulesProgress}%</p>
                <p className="text-sm text-muted-foreground">Modules Viewed</p>
              </div>
            </div>
            <ProgressBar value={stats.modulesProgress} className="mt-4 h-2" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-chart-5/10">
                <CheckCircle2 className="h-6 w-6 text-chart-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.topicsCompleted}</p>
                <p className="text-sm text-muted-foreground">Topics Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-chart-3/10">
                <HelpCircle className="h-6 w-6 text-chart-3" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{stats.totalQuizzesTaken}</p>
                <p className="text-sm text-muted-foreground">Quizzes Taken</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-chart-4/10">
                <TrendingUp className="h-6 w-6 text-chart-4" />
              </div>
              <div>
                <p className={`text-2xl font-bold ${getScoreColor(stats.averageScore)}`}>
                  {stats.averageScore}%
                </p>
                <p className="text-sm text-muted-foreground">Average Score</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Module Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {modules.map((module) => {
                const isViewed = progress.modulesViewed.includes(module.id);
                const moduleTopics = module.topics.map(t => t.id);
                const completedTopics = moduleTopics.filter(t => 
                  progress.topicsCompleted.includes(t)
                ).length;
                const topicProgress = (completedTopics / moduleTopics.length) * 100;

                return (
                  <div key={module.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          isViewed ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                        }`}>
                          {module.number}
                        </div>
                        <span className="font-medium text-foreground text-sm">
                          {module.title}
                        </span>
                      </div>
                      <Badge variant={topicProgress === 100 ? "default" : "secondary"}>
                        {completedTopics}/{moduleTopics.length} topics
                      </Badge>
                    </div>
                    <ProgressBar value={topicProgress} className="h-1.5" />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Recent Quiz Scores
            </CardTitle>
          </CardHeader>
          <CardContent>
            {progress.quizScores.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <HelpCircle className="h-12 w-12 mx-auto mb-4 opacity-30" />
                <p>No quizzes taken yet.</p>
                <p className="text-sm mt-1">Take a quiz to see your scores here!</p>
              </div>
            ) : (
              <div className="space-y-3">
                {progress.quizScores.slice(-10).reverse().map((quiz, idx) => {
                  const percentage = Math.round((quiz.score / quiz.total) * 100);
                  const moduleName = quiz.moduleId === "mixed" 
                    ? "All Modules" 
                    : modules.find(m => m.id === quiz.moduleId)?.title || quiz.moduleId;

                  return (
                    <div 
                      key={idx}
                      className="flex items-center gap-4 p-3 rounded-lg bg-accent/30"
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${getScoreBgColor(percentage)}`}>
                        {percentage}%
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground text-sm truncate">
                          {moduleName}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {quiz.score}/{quiz.total} correct
                        </p>
                      </div>
                      <div className="text-right text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 inline mr-1" />
                        {new Date(quiz.date).toLocaleDateString()}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              Flashcard Review
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Cards Reviewed</span>
                <span className="font-bold text-foreground">
                  {stats.flashcardsReviewed} / {flashcards.length}
                </span>
              </div>
              <ProgressBar 
                value={(stats.flashcardsReviewed / flashcards.length) * 100} 
                className="h-2" 
              />
              <p className="text-sm text-muted-foreground">
                {Math.round((stats.flashcardsReviewed / flashcards.length) * 100)}% of flashcards reviewed
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Study Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Last Study Session</span>
                <span className="font-medium text-foreground text-sm">
                  {formatDate(stats.lastStudyDate)}
                </span>
              </div>
              
              <div className="pt-4 border-t border-border">
                <h4 className="text-sm font-medium text-foreground mb-3">Study Tips:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-chart-5 mt-0.5 flex-shrink-0" />
                    Review flashcards daily for better retention
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-chart-5 mt-0.5 flex-shrink-0" />
                    Take quizzes to test your understanding
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-chart-5 mt-0.5 flex-shrink-0" />
                    Focus on topics with lower scores
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
