import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import SearchOverlay from "./components/SearchOverlay";
import PageTransition from "./components/PageTransition";
import { useState, useEffect, createContext, useContext, lazy, Suspense } from "react";
import { useSEO } from "./lib/seo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ReadingProgress from "./components/ReadingProgress";

// Home stays eager so the landing page paints with no extra round-trip.
import Home from "./pages/Home";

// Every other route is code-split: its chunk only downloads when visited.
const IPhones = lazy(() => import("./pages/IPhones"));
const Jailbreak = lazy(() => import("./pages/Jailbreak"));
const WWDC = lazy(() => import("./pages/WWDC"));
const SiriAI = lazy(() => import("./pages/SiriAI"));
const ParentalControls = lazy(() => import("./pages/ParentalControls"));
const Reddit = lazy(() => import("./pages/Reddit"));
const IOS27 = lazy(() => import("./pages/IOS27"));
const MacOSGoldenGate = lazy(() => import("./pages/MacOSGoldenGate"));
const AppleIntelligence = lazy(() => import("./pages/AppleIntelligence"));
const WatchOS12 = lazy(() => import("./pages/WatchOS12"));
const AppleSilicon = lazy(() => import("./pages/AppleSilicon"));
const IPhoneTimeline = lazy(() => import("./pages/IPhoneTimeline"));
const WatchHistory = lazy(() => import("./pages/WatchHistory"));
const IPodHistory = lazy(() => import("./pages/IPodHistory"));
const Compare = lazy(() => import("./pages/Compare"));
const Sideloading = lazy(() => import("./pages/Sideloading"));
const AppleHistory = lazy(() => import("./pages/AppleHistory"));
const TipsAndTricks = lazy(() => import("./pages/TipsAndTricks"));
const Accessories = lazy(() => import("./pages/Accessories"));
const MacOSDeepDive = lazy(() => import("./pages/MacOSDeepDive"));
const EcosystemGuide = lazy(() => import("./pages/EcosystemGuide"));
const PrivacySecurity = lazy(() => import("./pages/PrivacySecurity"));
const Shortcuts = lazy(() => import("./pages/Shortcuts"));
const DeveloperTools = lazy(() => import("./pages/DeveloperTools"));
const HiddenFeatures = lazy(() => import("./pages/HiddenFeatures"));
const Troubleshooting = lazy(() => import("./pages/Troubleshooting"));
const AppleServices = lazy(() => import("./pages/AppleServices"));
const KeyboardShortcuts = lazy(() => import("./pages/KeyboardShortcuts"));
const Rumors = lazy(() => import("./pages/Rumors"));
const AppleVsAndroid = lazy(() => import("./pages/AppleVsAndroid"));
const BestApps = lazy(() => import("./pages/BestApps"));
const IPadOS = lazy(() => import("./pages/IPadOS"));
const VisionPro = lazy(() => import("./pages/VisionPro"));
const BuyingGuide = lazy(() => import("./pages/BuyingGuide"));
const Benchmarks = lazy(() => import("./pages/Benchmarks"));
const MusicPodcasts = lazy(() => import("./pages/MusicPodcasts"));
const MapsCarPlay = lazy(() => import("./pages/MapsCarPlay"));
const Photography = lazy(() => import("./pages/Photography"));
const HealthFitness = lazy(() => import("./pages/HealthFitness"));
const Gaming = lazy(() => import("./pages/Gaming"));
const Education = lazy(() => import("./pages/Education"));
const SmartHome = lazy(() => import("./pages/SmartHome"));
const RepairDIY = lazy(() => import("./pages/RepairDIY"));
const Accessibility = lazy(() => import("./pages/Accessibility"));
const Blog = lazy(() => import("./pages/Blog"));
const NewsArticle = lazy(() => import("./pages/NewsArticle"));
const Devices = lazy(() => import("./pages/Devices"));
const AppleGraveyard = lazy(() => import("./pages/AppleGraveyard"));

// Global search context so any page can open the search overlay
export const SearchContext = createContext<{ openSearch: () => void }>({ openSearch: () => {} });
export const useSearch = () => useContext(SearchContext);

// Reserves vertical space while a route chunk loads, so layout doesn't jump.
function PageLoader() {
  return <div style={{ minHeight: "70vh" }} aria-busy="true" aria-label="Loading" />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/news/:id" component={NewsArticle} />
      <Route path="/news" component={Blog} />
      <Route path="/devices" component={Devices} />
      <Route path="/apple-graveyard" component={AppleGraveyard} />
      <Route path="/graveyard" component={AppleGraveyard} />
      <Route path="/wwdc-2026" component={WWDC} />
      <Route path="/siri-ai" component={SiriAI} />
      <Route path="/parental-controls" component={ParentalControls} />
      <Route path="/iphones" component={IPhones} />
      <Route path="/jailbreak" component={Jailbreak} />
      <Route path="/sideloading" component={Sideloading} />
      <Route path="/community" component={Reddit} />
      <Route path="/ios-27" component={IOS27} />
      <Route path="/macos-golden-gate" component={MacOSGoldenGate} />
      <Route path="/apple-intelligence" component={AppleIntelligence} />
      <Route path="/watchos-12" component={WatchOS12} />
      <Route path="/apple-silicon" component={AppleSilicon} />
      <Route path="/iphone-timeline" component={IPhoneTimeline} />
      <Route path="/watch-history" component={WatchHistory} />
      <Route path="/ipod-history" component={IPodHistory} />
      <Route path="/compare" component={Compare} />
      <Route path="/apple-history" component={AppleHistory} />
      <Route path="/tips-and-tricks" component={TipsAndTricks} />
      <Route path="/accessories" component={Accessories} />
      <Route path="/macos-deep-dive" component={MacOSDeepDive} />
      <Route path="/ecosystem-guide" component={EcosystemGuide} />
      <Route path="/privacy-security" component={PrivacySecurity} />
      <Route path="/shortcuts" component={Shortcuts} />
      <Route path="/developer-tools" component={DeveloperTools} />
      <Route path="/hidden-features" component={HiddenFeatures} />
      <Route path="/troubleshooting" component={Troubleshooting} />
      <Route path="/apple-services" component={AppleServices} />
      <Route path="/keyboard-shortcuts" component={KeyboardShortcuts} />
      <Route path="/rumors" component={Rumors} />
      <Route path="/apple-vs-android" component={AppleVsAndroid} />
      <Route path="/best-apps" component={BestApps} />
      <Route path="/ipados" component={IPadOS} />
      <Route path="/vision-pro" component={VisionPro} />
      <Route path="/buying-guide" component={BuyingGuide} />
      <Route path="/benchmarks" component={Benchmarks} />
      <Route path="/music-podcasts" component={MusicPodcasts} />
      <Route path="/maps-carplay" component={MapsCarPlay} />
      <Route path="/photography" component={Photography} />
      <Route path="/health-fitness" component={HealthFitness} />
      <Route path="/gaming" component={Gaming} />
      <Route path="/education" component={Education} />
      <Route path="/smart-home" component={SmartHome} />
      <Route path="/repair-diy" component={RepairDIY} />
      <Route path="/accessibility" component={Accessibility} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppInner() {
  const [searchOpen, setSearchOpen] = useState(false);
  useSEO();

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
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <main id="main-content" style={{ paddingTop: "calc(var(--nav-height, 44px) + var(--banner-height, 0px))" }}>
        <PageTransition>
          <Suspense fallback={<PageLoader />}>
            <Router />
          </Suspense>
        </PageTransition>
        <Footer />
      </main>
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <BackToTop />
      <ReadingProgress />
    </SearchContext.Provider>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="classic">
        <TooltipProvider>
          <Toaster />
          <AppInner />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
