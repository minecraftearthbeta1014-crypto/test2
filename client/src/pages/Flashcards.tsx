import { useState, useEffect } from "react";
import { modules } from "@/data/studyContent";
import { flashcards, getFlashcardsByModule, shuffleFlashcards } from "@/data/flashcards";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronLeft, ChevronRight, Shuffle, Layers, RotateCcw, Eye, EyeOff } from "lucide-react";
import { markFlashcardReviewed, getProgress } from "@/lib/progress";
import type { Flashcard } from "@shared/schema";

export default function Flashcards() {
  const [selectedModule, setSelectedModule] = useState<string>("all");
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [reviewed, setReviewed] = useState<Set<string>>(new Set());

  useEffect(() => {
    loadCards();
  }, [selectedModule]);

  const loadCards = () => {
    let cardSet = selectedModule === "all" 
      ? flashcards 
      : getFlashcardsByModule(selectedModule);
    setCards(shuffleFlashcards(cardSet));
    setCurrentIndex(0);
    setIsFlipped(false);
    setReviewed(new Set());
  };

  const currentCard = cards[currentIndex];

  const goNext = () => {
    if (currentIndex < cards.length - 1) {
      if (currentCard) {
        markFlashcardReviewed(currentCard.id);
        setReviewed(prev => new Set(prev).add(currentCard.id));
      }
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  const shuffleCards = () => {
    setCards(shuffleFlashcards(cards));
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const progress = cards.length > 0 ? ((currentIndex + 1) / cards.length) * 100 : 0;

  if (cards.length === 0) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Flashcards</h1>
          <p className="text-muted-foreground">
            Review key concepts with interactive flashcards.
          </p>
        </div>

        <Card className="max-w-xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              Select Flashcard Set
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select value={selectedModule} onValueChange={setSelectedModule}>
              <SelectTrigger data-testid="select-flashcard-module">
                <SelectValue placeholder="Choose a module" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Modules</SelectItem>
                {modules.map((module) => (
                  <SelectItem key={module.id} value={module.id}>
                    Module {module.number}: {module.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button 
              className="w-full" 
              size="lg" 
              onClick={loadCards}
              data-testid="button-load-flashcards"
            >
              Load Flashcards
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
          <h1 className="text-3xl font-bold text-foreground">Flashcards</h1>
          <Badge variant="secondary" className="text-sm">
            {currentIndex + 1} of {cards.length}
          </Badge>
        </div>
        <div className="flex items-center gap-4">
          <Select value={selectedModule} onValueChange={setSelectedModule}>
            <SelectTrigger className="w-48" data-testid="select-module-filter">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Modules</SelectItem>
              {modules.map((module) => (
                <SelectItem key={module.id} value={module.id}>
                  Module {module.number}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={shuffleCards} data-testid="button-shuffle">
            <Shuffle className="h-4 w-4 mr-2" />
            Shuffle
          </Button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="h-2 bg-secondary rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div 
          className="perspective-1000 cursor-pointer mb-6"
          onClick={() => setIsFlipped(!isFlipped)}
          data-testid="flashcard"
        >
          <div 
            className={`relative transition-transform duration-500 transform-style-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
            }}
          >
            <Card className="min-h-[320px] backface-hidden">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge variant="outline">{currentCard?.category}</Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    Click to flip
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-center min-h-[220px]">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground">
                    {currentCard?.front}
                  </h3>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="min-h-[320px] absolute inset-0 backface-hidden"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden"
              }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Badge>{currentCard?.category}</Badge>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <EyeOff className="h-3 w-3" />
                    Click to flip back
                  </span>
                </div>
              </CardHeader>
              <CardContent className="flex items-center justify-center min-h-[220px]">
                <div className="text-center space-y-4">
                  <p className="text-lg text-foreground whitespace-pre-line leading-relaxed">
                    {currentCard?.back}
                  </p>
                  {currentCard?.examples && currentCard.examples.length > 0 && (
                    <div className="text-sm text-muted-foreground bg-accent/50 rounded-lg p-3">
                      {currentCard.examples.map((ex, idx) => (
                        <p key={idx}>{ex}</p>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            onClick={goPrev}
            disabled={currentIndex === 0}
            data-testid="button-prev-card"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <div className="flex items-center gap-2">
            {cards.slice(Math.max(0, currentIndex - 2), currentIndex + 3).map((card, relIdx) => {
              const actualIdx = Math.max(0, currentIndex - 2) + relIdx;
              const isCurrent = actualIdx === currentIndex;
              const isReviewed = reviewed.has(card.id);
              
              return (
                <button
                  key={card.id}
                  onClick={() => {
                    setCurrentIndex(actualIdx);
                    setIsFlipped(false);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    isCurrent 
                      ? "w-6 bg-primary" 
                      : isReviewed
                        ? "bg-chart-5"
                        : "bg-muted-foreground/30"
                  }`}
                />
              );
            })}
          </div>

          <Button
            onClick={goNext}
            disabled={currentIndex === cards.length - 1}
            data-testid="button-next-card"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="mt-8 text-center">
          <Button variant="ghost" onClick={loadCards} data-testid="button-restart-flashcards">
            <RotateCcw className="h-4 w-4 mr-2" />
            Start Over
          </Button>
        </div>
      </div>
    </div>
  );
}
