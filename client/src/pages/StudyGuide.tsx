import { useState } from "react";
import { modules, contentCoverageNotes } from "@/data/studyContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, BookOpen, CheckCircle2, ChevronRight } from "lucide-react";
import { markModuleViewed, markTopicCompleted, getProgress } from "@/lib/progress";

export default function StudyGuide() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [progress, setProgress] = useState(getProgress());

  const handleModuleClick = (moduleId: string) => {
    setSelectedModule(moduleId);
    markModuleViewed(moduleId);
    setProgress(getProgress());
  };

  const handleTopicComplete = (topicId: string) => {
    markTopicCompleted(topicId);
    setProgress(getProgress());
  };

  const selectedModuleData = modules.find(m => m.id === selectedModule);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">Study Guide</h1>
        <p className="text-muted-foreground">
          Complete study materials for EDEC 303. Select a module to begin studying.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Modules
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[calc(100vh-280px)]">
                <div className="p-4 pt-0 space-y-2">
                  {modules.map((module) => {
                    const isViewed = progress.modulesViewed.includes(module.id);
                    const isSelected = selectedModule === module.id;
                    const hasIncomplete = module.topics.some(t => t.incomplete);

                    return (
                      <button
                        key={module.id}
                        onClick={() => handleModuleClick(module.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-colors ${
                          isSelected
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-card border-card-border hover-elevate"
                        }`}
                        data-testid={`module-${module.number}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            isSelected 
                              ? "bg-primary-foreground/20 text-primary-foreground" 
                              : "bg-primary/10 text-primary"
                          }`}>
                            {module.number}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className={`font-medium truncate ${isSelected ? "" : "text-foreground"}`}>
                                {module.title}
                              </span>
                              {isViewed && !isSelected && (
                                <CheckCircle2 className="h-4 w-4 text-chart-5 flex-shrink-0" />
                              )}
                            </div>
                            <p className={`text-xs mt-1 line-clamp-2 ${
                              isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
                            }`}>
                              {module.description}
                            </p>
                            {hasIncomplete && (
                              <Badge variant="outline" className="mt-2 text-xs">
                                Limited content
                              </Badge>
                            )}
                          </div>
                          <ChevronRight className={`h-4 w-4 flex-shrink-0 ${
                            isSelected ? "text-primary-foreground" : "text-muted-foreground"
                          }`} />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2 text-muted-foreground">
                <AlertCircle className="h-4 w-4" />
                Content Notes
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs text-muted-foreground space-y-3">
              {contentCoverageNotes.map((note, idx) => (
                <div key={idx}>
                  <p className="font-medium">{note.module}:</p>
                  <p>{note.note}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          {selectedModuleData ? (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg font-bold text-primary">
                    {selectedModuleData.number}
                  </div>
                  <div>
                    <CardTitle>{selectedModuleData.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {selectedModuleData.description}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[calc(100vh-320px)]">
                  <Accordion type="multiple" className="w-full">
                    {selectedModuleData.topics.map((topic) => {
                      const isCompleted = progress.topicsCompleted.includes(topic.id);

                      return (
                        <AccordionItem key={topic.id} value={topic.id}>
                          <AccordionTrigger className="hover:no-underline">
                            <div className="flex items-center gap-3 text-left">
                              {isCompleted ? (
                                <CheckCircle2 className="h-5 w-5 text-chart-5 flex-shrink-0" />
                              ) : (
                                <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30 flex-shrink-0" />
                              )}
                              <span className="font-medium">{topic.title}</span>
                              {topic.incomplete && (
                                <Badge variant="secondary" className="text-xs ml-2">
                                  Limited
                                </Badge>
                              )}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="pl-8 space-y-4">
                              <p className="text-muted-foreground leading-relaxed">
                                {topic.content}
                              </p>

                              {topic.keyPoints && topic.keyPoints.length > 0 && (
                                <div className="space-y-2">
                                  <h4 className="font-medium text-sm text-foreground">Key Points:</h4>
                                  <ul className="space-y-2">
                                    {topic.keyPoints.map((point, idx) => (
                                      <li
                                        key={idx}
                                        className="text-sm text-foreground leading-relaxed pl-4 border-l-2 border-primary/30"
                                      >
                                        {point}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {topic.examples && topic.examples.length > 0 && (
                                <div className="space-y-2">
                                  <h4 className="font-medium text-sm text-foreground">Examples:</h4>
                                  <div className="space-y-2">
                                    {topic.examples.map((example, idx) => (
                                      <div
                                        key={idx}
                                        className="text-sm bg-accent/50 rounded-lg p-3 text-foreground"
                                      >
                                        {example}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              <div className="pt-2">
                                <Button
                                  size="sm"
                                  variant={isCompleted ? "secondary" : "default"}
                                  onClick={() => handleTopicComplete(topic.id)}
                                  data-testid={`complete-topic-${topic.id}`}
                                >
                                  {isCompleted ? (
                                    <>
                                      <CheckCircle2 className="h-4 w-4 mr-2" />
                                      Completed
                                    </>
                                  ) : (
                                    "Mark as Complete"
                                  )}
                                </Button>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      );
                    })}
                  </Accordion>
                </ScrollArea>
              </CardContent>
            </Card>
          ) : (
            <Card className="h-[calc(100vh-220px)] flex items-center justify-center">
              <div className="text-center p-8">
                <BookOpen className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-xl font-medium text-foreground mb-2">
                  Select a Module
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Choose a module from the list on the left to start studying. 
                  Each module contains topics with key points and examples.
                </p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
