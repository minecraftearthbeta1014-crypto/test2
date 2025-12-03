import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import StudyGuide from "@/pages/StudyGuide";
import Quiz from "@/pages/Quiz";
import Flashcards from "@/pages/Flashcards";
import Practice from "@/pages/Practice";
import Progress from "@/pages/Progress";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={StudyGuide} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/flashcards" component={Flashcards} />
      <Route path="/practice" component={Practice} />
      <Route path="/progress" component={Progress} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Router />
          </main>
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
