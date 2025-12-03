import { useState, useEffect } from "react";
import { modules } from "@/data/studyContent";
import { quizQuestions, getQuestionsByModule, getRandomQuestions } from "@/data/quizQuestions";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, RotateCcw, Shuffle } from "lucide-react";
import { saveQuizScore } from "@/lib/progress";
import type { QuizQuestion } from "@shared/schema";

type QuizState = "setup" | "active" | "review" | "results";

export default function Quiz() {
  const [quizState, setQuizState] = useState<QuizState>("setup");
  const [selectedModule, setSelectedModule] = useState<string>("all");
  const [questionCount, setQuestionCount] = useState<number>(10);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Map<string, string>>(new Map());
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;
  const progress = ((currentIndex + 1) / questions.length) * 100;

  const startQuiz = () => {
    const moduleId = selectedModule === "all" ? undefined : selectedModule;
    const quizQuestions = getRandomQuestions(questionCount, moduleId);
    setQuestions(quizQuestions);
    setCurrentIndex(0);
    setAnswers(new Map());
    setSelectedAnswer(null);
    setShowExplanation(false);
    setQuizState("active");
  };

  const handleAnswerSelect = (answer: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(answer);
    setAnswers(prev => new Map(prev).set(currentQuestion.id, answer));
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(answers.get(questions[currentIndex + 1]?.id) || null);
      setShowExplanation(false);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    const score = questions.reduce((acc, q) => {
      return acc + (answers.get(q.id) === q.correctAnswer ? 1 : 0);
    }, 0);
    
    saveQuizScore(
      `quiz-${Date.now()}`,
      selectedModule === "all" ? "mixed" : selectedModule,
      score,
      questions.length
    );
    
    setQuizState("results");
  };

  const getScore = () => {
    return questions.reduce((acc, q) => {
      return acc + (answers.get(q.id) === q.correctAnswer ? 1 : 0);
    }, 0);
  };

  const resetQuiz = () => {
    setQuizState("setup");
    setQuestions([]);
    setCurrentIndex(0);
    setAnswers(new Map());
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  if (quizState === "setup") {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Quiz Mode</h1>
          <p className="text-muted-foreground">
            Test your knowledge with randomized questions from the study material.
          </p>
        </div>

        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Quiz Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Select Module</label>
              <Select value={selectedModule} onValueChange={setSelectedModule}>
                <SelectTrigger data-testid="select-module">
                  <SelectValue placeholder="Choose a module" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Modules (Mixed)</SelectItem>
                  {modules.map((module) => (
                    <SelectItem key={module.id} value={module.id}>
                      Module {module.number}: {module.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Number of Questions</label>
              <Select value={questionCount.toString()} onValueChange={(v) => setQuestionCount(parseInt(v))}>
                <SelectTrigger data-testid="select-count">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 Questions</SelectItem>
                  <SelectItem value="10">10 Questions</SelectItem>
                  <SelectItem value="15">15 Questions</SelectItem>
                  <SelectItem value="20">20 Questions</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="bg-accent/50 rounded-lg p-4">
              <h4 className="font-medium text-sm mb-2">Quiz Features:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li className="flex items-center gap-2">
                  <Shuffle className="h-3 w-3" /> Randomized question order
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3 w-3" /> Instant feedback on answers
                </li>
                <li className="flex items-center gap-2">
                  <HelpCircle className="h-3 w-3" /> Detailed explanations for each question
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              className="w-full" 
              size="lg" 
              onClick={startQuiz}
              data-testid="button-start-quiz"
            >
              Start Quiz
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (quizState === "results") {
    const score = getScore();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Quiz Results</h1>
        </div>

        <Card className="max-w-xl mx-auto">
          <CardHeader className="text-center pb-2">
            <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center text-3xl font-bold mb-4 ${
              percentage >= 80 
                ? "bg-chart-5/20 text-chart-5" 
                : percentage >= 60 
                  ? "bg-chart-3/20 text-chart-3"
                  : "bg-destructive/20 text-destructive"
            }`}>
              {percentage}%
            </div>
            <CardTitle className="text-2xl">
              {percentage >= 80 
                ? "Excellent Work!" 
                : percentage >= 60 
                  ? "Good Effort!"
                  : "Keep Practicing!"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                You scored <span className="font-bold text-foreground">{score}</span> out of <span className="font-bold text-foreground">{questions.length}</span> questions
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium">Question Review:</h4>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {questions.map((q, idx) => {
                  const userAnswer = answers.get(q.id);
                  const correct = userAnswer === q.correctAnswer;
                  return (
                    <div 
                      key={q.id} 
                      className={`p-3 rounded-lg border ${
                        correct ? "bg-chart-5/5 border-chart-5/20" : "bg-destructive/5 border-destructive/20"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {correct ? (
                          <CheckCircle2 className="h-4 w-4 text-chart-5 mt-0.5 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                        )}
                        <div className="text-sm">
                          <p className="font-medium">Q{idx + 1}: {q.question}</p>
                          {!correct && (
                            <p className="text-muted-foreground mt-1">
                              Correct: {q.correctAnswer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={resetQuiz}
              data-testid="button-new-quiz"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              New Quiz
            </Button>
            <Button 
              className="flex-1"
              onClick={() => {
                setQuizState("active");
                setCurrentIndex(0);
                setSelectedAnswer(answers.get(questions[0]?.id) || null);
                setShowExplanation(true);
              }}
              data-testid="button-review-answers"
            >
              Review Answers
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-foreground">Quiz Mode</h1>
          <Badge variant="secondary" className="text-sm">
            Question {currentIndex + 1} of {questions.length}
          </Badge>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
              {currentIndex + 1}
            </div>
            <div>
              <Badge variant="outline" className="mb-2">
                {currentQuestion?.type.replace("-", " ")}
              </Badge>
              <CardTitle className="text-xl leading-relaxed">
                {currentQuestion?.question}
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {currentQuestion?.options?.map((option, idx) => {
            const isSelected = selectedAnswer === option;
            const isCorrectOption = option === currentQuestion.correctAnswer;
            const showFeedback = selectedAnswer !== null;

            let buttonClass = "w-full justify-start text-left p-4 h-auto";
            
            if (showFeedback) {
              if (isCorrectOption) {
                buttonClass += " bg-chart-5/10 border-chart-5 text-foreground";
              } else if (isSelected && !isCorrectOption) {
                buttonClass += " bg-destructive/10 border-destructive text-foreground";
              }
            }

            return (
              <Button
                key={idx}
                variant="outline"
                className={buttonClass}
                onClick={() => handleAnswerSelect(option)}
                disabled={selectedAnswer !== null}
                data-testid={`option-${idx}`}
              >
                <div className="flex items-center gap-3 w-full">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                    showFeedback && isCorrectOption
                      ? "bg-chart-5 border-chart-5 text-white"
                      : showFeedback && isSelected && !isCorrectOption
                        ? "bg-destructive border-destructive text-white"
                        : isSelected
                          ? "bg-primary border-primary text-primary-foreground"
                          : "border-muted-foreground/30"
                  }`}>
                    {showFeedback && isCorrectOption && <CheckCircle2 className="h-4 w-4" />}
                    {showFeedback && isSelected && !isCorrectOption && <XCircle className="h-4 w-4" />}
                  </div>
                  <span className="flex-1">{option}</span>
                </div>
              </Button>
            );
          })}

          {showExplanation && (
            <div className={`mt-6 p-4 rounded-lg border ${
              isCorrect 
                ? "bg-chart-5/5 border-chart-5/20" 
                : "bg-chart-3/5 border-chart-3/20"
            }`}>
              <div className="flex items-start gap-2">
                {isCorrect ? (
                  <CheckCircle2 className="h-5 w-5 text-chart-5 mt-0.5 flex-shrink-0" />
                ) : (
                  <HelpCircle className="h-5 w-5 text-chart-3 mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <p className={`font-medium ${isCorrect ? "text-chart-5" : "text-chart-3"}`}>
                    {isCorrect ? "Correct!" : "Not quite right"}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {currentQuestion?.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="ghost" 
            onClick={resetQuiz}
            data-testid="button-quit-quiz"
          >
            Quit Quiz
          </Button>
          <Button 
            onClick={nextQuestion}
            disabled={!selectedAnswer}
            data-testid="button-next-question"
          >
            {currentIndex < questions.length - 1 ? (
              <>
                Next Question
                <ArrowRight className="h-4 w-4 ml-2" />
              </>
            ) : (
              "Finish Quiz"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
