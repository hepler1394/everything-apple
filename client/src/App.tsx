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
import IOS27 from "./pages/IOS27";
import MacOSGoldenGate from "./pages/MacOSGoldenGate";
import AppleIntelligence from "./pages/AppleIntelligence";
import WatchOS12 from "./pages/WatchOS12";
import AppleSilicon from "./pages/AppleSilicon";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/wwdc-2026" component={WWDC} />
      <Route path="/siri-ai" component={SiriAI} />
      <Route path="/parental-controls" component={ParentalControls} />
      <Route path="/iphones" component={IPhones} />
      <Route path="/jailbreak" component={Jailbreak} />
      <Route path="/community" component={Reddit} />
      <Route path="/ios-27" component={IOS27} />
      <Route path="/macos-golden-gate" component={MacOSGoldenGate} />
      <Route path="/apple-intelligence" component={AppleIntelligence} />
      <Route path="/watchos-12" component={WatchOS12} />
      <Route path="/apple-silicon" component={AppleSilicon} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
