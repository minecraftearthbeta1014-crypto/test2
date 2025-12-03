import { useState, useEffect } from "react";
import { practiceProblems, getProblemsByType, getRandomProblems } from "@/data/practiceProblems";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight, PenTool, Eye, EyeOff, Shuffle, RotateCcw } from "lucide-react";
import type { PracticeProblem } from "@shared/schema";

type ProblemType = PracticeProblem['type'] | 'all';

const problemTypeLabels: Record<PracticeProblem['type'], string> = {
  "change": "Change (Join/Separate)",
  "part-part-whole": "Part-Part-Whole",
  "compare": "Compare",
  "equal-groups": "Equal Groups",
  "array": "Array/Area",
  "multiplicative-comparison": "Multiplicative Comparison"
};

export default function Practice() {
  const [selectedType, setSelectedType] = useState<ProblemType>("all");
  const [problems, setProblems] = useState<PracticeProblem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    loadProblems();
  }, [selectedType]);

  const loadProblems = () => {
    let problemSet = selectedType === "all" 
      ? practiceProblems 
      : getProblemsByType(selectedType as PracticeProblem['type']);
    setProblems([...problemSet].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setShowSolution(false);
  };

  const currentProblem = problems[currentIndex];

  const goNext = () => {
    if (currentIndex < problems.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowSolution(false);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowSolution(false);
    }
  };

  const getModelDiagram = (problem: PracticeProblem) => {
    if (!problem.model) return null;

    switch (problem.model) {
      case "change-diagram":
        return (
          <div className="flex items-center justify-center gap-2 p-4 bg-accent/30 rounded-lg">
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-primary/20 border-2 border-primary flex items-center justify-center font-bold text-primary">
                Start
              </div>
              <span className="text-xs text-muted-foreground mt-1">Beginning</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-0.5 w-8 bg-primary" />
              <span className="text-xs font-medium text-primary">+/-</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-chart-3/20 border-2 border-chart-3 flex items-center justify-center font-bold text-chart-3">
                Change
              </div>
              <span className="text-xs text-muted-foreground mt-1">Action</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-0.5 w-8 bg-primary" />
              <span className="text-xs font-medium text-primary">=</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-lg bg-chart-5/20 border-2 border-chart-5 flex items-center justify-center font-bold text-chart-5">
                End
              </div>
              <span className="text-xs text-muted-foreground mt-1">Result</span>
            </div>
          </div>
        );

      case "bar-model":
        return (
          <div className="p-4 bg-accent/30 rounded-lg space-y-3">
            <div className="flex gap-1">
              <div className="flex-1 h-10 bg-primary/30 border-2 border-primary rounded flex items-center justify-center text-sm font-medium">
                Part 1
              </div>
              <div className="flex-1 h-10 bg-chart-3/30 border-2 border-chart-3 rounded flex items-center justify-center text-sm font-medium">
                Part 2
              </div>
            </div>
            <div className="h-10 bg-chart-5/30 border-2 border-chart-5 rounded flex items-center justify-center text-sm font-medium">
              Whole
            </div>
          </div>
        );

      case "number-bonds":
        return (
          <div className="flex flex-col items-center p-4 bg-accent/30 rounded-lg">
            <div className="w-16 h-16 rounded-full bg-chart-5/30 border-2 border-chart-5 flex items-center justify-center font-bold">
              Whole
            </div>
            <div className="flex gap-8 mt-4">
              <div className="relative">
                <div className="absolute -top-4 left-1/2 w-0.5 h-4 bg-foreground/30" />
                <div className="w-12 h-12 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center text-sm font-medium">
                  Part
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 left-1/2 w-0.5 h-4 bg-foreground/30" />
                <div className="w-12 h-12 rounded-full bg-chart-3/30 border-2 border-chart-3 flex items-center justify-center text-sm font-medium">
                  Part
                </div>
              </div>
            </div>
          </div>
        );

      case "array":
        return (
          <div className="p-4 bg-accent/30 rounded-lg">
            <div className="grid grid-cols-4 gap-1 max-w-xs mx-auto">
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i}
                  className="w-8 h-8 rounded bg-primary/30 border border-primary"
                />
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-2">
              Rows × Columns = Total
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  if (problems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Practice Problems</h1>
          <p className="text-muted-foreground">
            Practice with word problems and visual models.
          </p>
        </div>

        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PenTool className="h-5 w-5" />
              Select Problem Type
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={selectedType} onValueChange={(v) => setSelectedType(v as ProblemType)}>
              <SelectTrigger data-testid="select-problem-type">
                <SelectValue placeholder="Choose problem type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Problem Types</SelectItem>
                {Object.entries(problemTypeLabels).map(([value, label]) => (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button 
              className="w-full" 
              size="lg" 
              onClick={loadProblems}
              data-testid="button-load-problems"
            >
              Start Practice
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-foreground">Practice Problems</h1>
          <Badge variant="secondary" className="text-sm">
            {currentIndex + 1} of {problems.length}
          </Badge>
        </div>
        <div className="flex items-center gap-4">
          <Select value={selectedType} onValueChange={(v) => setSelectedType(v as ProblemType)}>
            <SelectTrigger className="w-56" data-testid="select-type-filter">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Problem Types</SelectItem>
              {Object.entries(problemTypeLabels).map(([value, label]) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={loadProblems} data-testid="button-shuffle-problems">
            <Shuffle className="h-4 w-4 mr-2" />
            Shuffle
          </Button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge>{problemTypeLabels[currentProblem?.type as keyof typeof problemTypeLabels]}</Badge>
              {currentProblem?.model && (
                <Badge variant="outline" className="capitalize">
                  {currentProblem.model.replace("-", " ")} model
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-lg leading-relaxed text-foreground">
              {currentProblem?.problemText}
            </div>

            {currentProblem && getModelDiagram(currentProblem)}

            <div className="pt-4">
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowSolution(!showSolution)}
                data-testid="button-toggle-solution"
              >
                {showSolution ? (
                  <>
                    <EyeOff className="h-4 w-4 mr-2" />
                    Hide Solution
                  </>
                ) : (
                  <>
                    <Eye className="h-4 w-4 mr-2" />
                    Show Solution
                  </>
                )}
              </Button>
            </div>

            {showSolution && (
              <div className="bg-chart-5/10 border border-chart-5/20 rounded-lg p-4 space-y-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-chart-5 text-white">Answer</Badge>
                  <span className="text-lg font-bold text-foreground">
                    {currentProblem?.solution}
                  </span>
                </div>

                {currentProblem?.steps && currentProblem.steps.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm text-foreground">Solution Steps:</h4>
                    <ol className="space-y-2">
                      {currentProblem.steps.map((step, idx) => (
                        <li 
                          key={idx}
                          className="flex items-start gap-3 text-sm"
                        >
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">
                            {idx + 1}
                          </span>
                          <span className="text-foreground pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button
              variant="outline"
              onClick={goPrev}
              disabled={currentIndex === 0}
              data-testid="button-prev-problem"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button
              onClick={goNext}
              disabled={currentIndex === problems.length - 1}
              data-testid="button-next-problem"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </CardFooter>
        </Card>

        <div className="mt-8 text-center">
          <Button variant="ghost" onClick={loadProblems} data-testid="button-restart-practice">
            <RotateCcw className="h-4 w-4 mr-2" />
            Start Over
          </Button>
        </div>
      </div>
    </div>
  );
}
