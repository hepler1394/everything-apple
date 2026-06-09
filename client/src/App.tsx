import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import IPhones from "./pages/IPhones";
import Jailbreak from "./pages/Jailbreak";
import WWDC from "./pages/WWDC";
import SiriAI from "./pages/SiriAI";
import ParentalControls from "./pages/ParentalControls";
import Reddit from "./pages/Reddit";
import Navbar from "./components/Navbar";
function Router() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/wwdc-2026" component={WWDC} />
        <Route path="/siri-ai" component={SiriAI} />
        <Route path="/parental-controls" component={ParentalControls} />
        <Route path="/iphones" component={IPhones} />
        <Route path="/jailbreak" component={Jailbreak} />
        <Route path="/community" component={Reddit} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
