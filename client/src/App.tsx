import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import SearchOverlay from "./components/SearchOverlay";
import WWDCBanner from "./components/WWDCBanner";
import PageTransition from "./components/PageTransition";
import { useState, useEffect, createContext, useContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
import Gallery from "./pages/Gallery";
import IPhoneTimeline from "./pages/IPhoneTimeline";
import Compare from "./pages/Compare";
import BackToTop from "./components/BackToTop";

// Global search context so any page can open the search overlay
export const SearchContext = createContext<{ openSearch: () => void }>({ openSearch: () => {} });
export const useSearch = () => useContext(SearchContext);

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
      <Route path="/gallery" component={Gallery} />
      <Route path="/iphone-timeline" component={IPhoneTimeline} />
      <Route path="/compare" component={Compare} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppInner() {
  const [searchOpen, setSearchOpen] = useState(false);

  // Cmd+K / Ctrl+K shortcut
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <SearchContext.Provider value={{ openSearch: () => setSearchOpen(true) }}>
      <WWDCBanner />
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <div style={{ paddingTop: "calc(44px + var(--banner-height, 0px))" }}>
        <PageTransition>
          <Router />
        </PageTransition>
        <Footer />
      </div>
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <BackToTop />
    </SearchContext.Provider>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <AppInner />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
