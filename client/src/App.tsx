import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Philosophy from "./pages/Philosophy";
import Engine from "@/pages/Engine";
import Manifesto from "@/pages/Manifesto";
import Category from "@/pages/Category";
import Roadmap from "@/pages/Roadmap";
import Team from "@/pages/Team";
import TampaConfidential from "@/pages/TampaConfidential";
import Strategy from "./pages/Strategy";
import POV from "./pages/POV";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/philosophy" component={Philosophy} />
      <Route path="/engine" component={Engine} />
      <Route path="/manifesto" component={Manifesto} />
      <Route path="/category" component={Category} />
      <Route path="/roadmap" component={Roadmap} />
      <Route path="/team" component={Team} />
      <Route path="/tampa" component={TampaConfidential} />
      <Route path="/strategy" component={Strategy} />
      <Route path="/pov" component={POV} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
