import { useState } from "react";

// Keyboard Shortcuts — Every Mac Shortcut You Need
// Organized by category with search and copy functionality

interface Shortcut {
  keys: string;
  action: string;
  context: string;
}

interface ShortcutCategory {
  name: string;
  icon: string;
  shortcuts: Shortcut[];
}

const SHORTCUT_DATA: ShortcutCategory[] = [
  {
    name: "Essential",
    icon: "⌘",
    shortcuts: [
      { keys: "⌘ + C", action: "Copy selected item", context: "Universal" },
      { keys: "⌘ + V", action: "Paste", context: "Universal" },
      { keys: "⌘ + X", action: "Cut selected item", context: "Universal" },
      { keys: "⌘ + Z", action: "Undo last action", context: "Universal" },
      { keys: "⌘ + ⇧ + Z", action: "Redo (undo the undo)", context: "Universal" },
      { keys: "⌘ + A", action: "Select all items", context: "Universal" },
      { keys: "⌘ + F", action: "Find in document/page", context: "Universal" },
      { keys: "⌘ + S", action: "Save current document", context: "Universal" },
      { keys: "⌘ + W", action: "Close current window", context: "Universal" },
      { keys: "⌘ + Q", action: "Quit application", context: "Universal" },
      { keys: "⌘ + Tab", action: "Switch between apps", context: "Universal" },
      { keys: "⌘ + Space", action: "Open Spotlight search", context: "Universal" },
    ]
  },
  {
    name: "Window Management",
    icon: "🪟",
    shortcuts: [
      { keys: "⌘ + M", action: "Minimize window to Dock", context: "All apps" },
      { keys: "⌘ + H", action: "Hide current app", context: "All apps" },
      { keys: "⌘ + ⌥ + H", action: "Hide all other apps", context: "All apps" },
      { keys: "⌃ + ⌘ + F", action: "Toggle fullscreen", context: "All apps" },
      { keys: "⌘ + `", action: "Switch between windows of same app", context: "All apps" },
      { keys: "⌃ + ↓", action: "Show all windows of current app", context: "Mission Control" },
      { keys: "⌃ + ↑", action: "Mission Control (all windows)", context: "Mission Control" },
      { keys: "F11", action: "Show Desktop", context: "Mission Control" },
      { keys: "⌃ + ← / →", action: "Switch between Spaces", context: "Mission Control" },
      { keys: "Globe + F", action: "Toggle fullscreen (macOS Sequoia+)", context: "All apps" },
      { keys: "Globe + ← / →", action: "Tile window left/right", context: "macOS Sequoia+" },
    ]
  },
  {
    name: "Finder",
    icon: "📁",
    shortcuts: [
      { keys: "⌘ + N", action: "New Finder window", context: "Finder" },
      { keys: "⌘ + ⇧ + N", action: "Create new folder", context: "Finder" },
      { keys: "⌘ + Delete", action: "Move to Trash", context: "Finder" },
      { keys: "⌘ + ⇧ + Delete", action: "Empty Trash", context: "Finder" },
      { keys: "Space", action: "Quick Look (preview file)", context: "Finder" },
      { keys: "⌘ + I", action: "Get Info (file properties)", context: "Finder" },
      { keys: "⌘ + D", action: "Duplicate selected item", context: "Finder" },
      { keys: "⌘ + ⇧ + G", action: "Go to folder (type path)", context: "Finder" },
      { keys: "⌘ + ⇧ + .", action: "Show/hide hidden files", context: "Finder" },
      { keys: "⌘ + 1/2/3/4", action: "Switch view (icon/list/column/gallery)", context: "Finder" },
      { keys: "⌘ + ↑", action: "Go to parent folder", context: "Finder" },
      { keys: "⌘ + ↓", action: "Open selected item", context: "Finder" },
      { keys: "⌘ + T", action: "New tab", context: "Finder" },
      { keys: "Enter", action: "Rename selected file", context: "Finder" },
    ]
  },
  {
    name: "Safari",
    icon: "🧭",
    shortcuts: [
      { keys: "⌘ + T", action: "New tab", context: "Safari" },
      { keys: "⌘ + W", action: "Close current tab", context: "Safari" },
      { keys: "⌘ + ⇧ + T", action: "Reopen last closed tab", context: "Safari" },
      { keys: "⌘ + L", action: "Focus address bar", context: "Safari" },
      { keys: "⌘ + R", action: "Reload page", context: "Safari" },
      { keys: "⌘ + [", action: "Go back", context: "Safari" },
      { keys: "⌘ + ]", action: "Go forward", context: "Safari" },
      { keys: "⌘ + ⇧ + L", action: "Toggle sidebar (bookmarks/reading list)", context: "Safari" },
      { keys: "⌘ + ⇧ + R", action: "Toggle Reader Mode", context: "Safari" },
      { keys: "⌘ + D", action: "Bookmark current page", context: "Safari" },
      { keys: "⌘ + ⌥ + I", action: "Open Web Inspector", context: "Safari" },
      { keys: "⌘ + 1-9", action: "Switch to tab 1-9", context: "Safari" },
      { keys: "⌃ + Tab", action: "Next tab", context: "Safari" },
      { keys: "⌃ + ⇧ + Tab", action: "Previous tab", context: "Safari" },
    ]
  },
  {
    name: "Text Editing",
    icon: "✍️",
    shortcuts: [
      { keys: "⌘ + B", action: "Bold text", context: "Text editors" },
      { keys: "⌘ + I", action: "Italic text", context: "Text editors" },
      { keys: "⌘ + U", action: "Underline text", context: "Text editors" },
      { keys: "⌥ + ← / →", action: "Move cursor by word", context: "Text editors" },
      { keys: "⌘ + ← / →", action: "Move cursor to line start/end", context: "Text editors" },
      { keys: "⌘ + ↑ / ↓", action: "Move cursor to document start/end", context: "Text editors" },
      { keys: "⇧ + Arrow keys", action: "Select text in direction", context: "Text editors" },
      { keys: "⌥ + ⇧ + ← / →", action: "Select by word", context: "Text editors" },
      { keys: "⌘ + ⇧ + ← / →", action: "Select to line start/end", context: "Text editors" },
      { keys: "⌥ + Delete", action: "Delete word before cursor", context: "Text editors" },
      { keys: "⌘ + Delete", action: "Delete to line start", context: "Text editors" },
      { keys: "⌃ + K", action: "Delete from cursor to end of line", context: "Text editors" },
      { keys: "⌃ + T", action: "Transpose characters", context: "Text editors" },
    ]
  },
  {
    name: "Screenshots",
    icon: "📸",
    shortcuts: [
      { keys: "⌘ + ⇧ + 3", action: "Screenshot entire screen", context: "System" },
      { keys: "⌘ + ⇧ + 4", action: "Screenshot selection (crosshair)", context: "System" },
      { keys: "⌘ + ⇧ + 4, Space", action: "Screenshot specific window", context: "System" },
      { keys: "⌘ + ⇧ + 5", action: "Screenshot toolbar (options)", context: "System" },
      { keys: "⌘ + ⇧ + 6", action: "Screenshot Touch Bar", context: "MacBook Pro" },
      { keys: "⌃ + ⌘ + ⇧ + 3", action: "Screenshot to clipboard (not file)", context: "System" },
      { keys: "⌃ + ⌘ + ⇧ + 4", action: "Selection screenshot to clipboard", context: "System" },
    ]
  },
  {
    name: "System",
    icon: "⚙️",
    shortcuts: [
      { keys: "⌘ + ⌥ + Esc", action: "Force Quit applications", context: "System" },
      { keys: "⌃ + ⌘ + Q", action: "Lock screen", context: "System" },
      { keys: "⌃ + ⌘ + Power", action: "Force restart", context: "System" },
      { keys: "⌘ + ⌥ + D", action: "Show/hide Dock", context: "System" },
      { keys: "⌘ + ,", action: "Open Preferences/Settings for current app", context: "All apps" },
      { keys: "⌘ + ⌥ + Esc", action: "Force Quit dialog", context: "System" },
      { keys: "⌃ + Space", action: "Switch input source/keyboard", context: "System" },
      { keys: "⌘ + ⇧ + Q", action: "Log out", context: "System" },
      { keys: "⌥ + Volume", action: "Open Sound settings", context: "System" },
      { keys: "⌥ + Brightness", action: "Open Display settings", context: "System" },
      { keys: "⌥ + click Wi-Fi", action: "Show detailed Wi-Fi info", context: "Menu bar" },
    ]
  },
  {
    name: "Xcode / Developer",
    icon: "🛠️",
    shortcuts: [
      { keys: "⌘ + R", action: "Run/Build and run", context: "Xcode" },
      { keys: "⌘ + B", action: "Build project", context: "Xcode" },
      { keys: "⌘ + .", action: "Stop running", context: "Xcode" },
      { keys: "⌘ + ⇧ + O", action: "Open Quickly (file search)", context: "Xcode" },
      { keys: "⌘ + ⇧ + J", action: "Reveal in Project Navigator", context: "Xcode" },
      { keys: "⌘ + /", action: "Toggle comment", context: "Xcode" },
      { keys: "⌃ + I", action: "Re-indent selection", context: "Xcode" },
      { keys: "⌘ + ⌥ + [/]", action: "Move line up/down", context: "Xcode" },
      { keys: "⌘ + ⇧ + K", action: "Clean build folder", context: "Xcode" },
      { keys: "⌘ + 0", action: "Toggle Navigator panel", context: "Xcode" },
      { keys: "⌘ + ⌥ + 0", action: "Toggle Inspector panel", context: "Xcode" },
      { keys: "⌘ + ⇧ + Y", action: "Toggle Debug area", context: "Xcode" },
    ]
  },
];

export default function KeyboardShortcuts() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories = SHORTCUT_DATA.filter(cat => {
    if (activeCategory !== "all" && cat.name !== activeCategory) return false;
    return true;
  }).map(cat => ({
    ...cat,
    shortcuts: cat.shortcuts.filter(s =>
      search === "" ||
      s.keys.toLowerCase().includes(search.toLowerCase()) ||
      s.action.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(cat => cat.shortcuts.length > 0);

  const totalShortcuts = SHORTCUT_DATA.reduce((sum, cat) => sum + cat.shortcuts.length, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
        <div className="relative z-10">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Work Faster</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Keyboard Shortcuts</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            {totalShortcuts} essential Mac shortcuts organized by category. 
            Master these and never touch your mouse again.
          </p>
        </div>
      </section>

      {/* Search + Filter */}
      <section className="py-4 px-4 border-y border-border/30 sticky top-[44px] z-20 bg-background/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="Search shortcuts..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full px-4 py-2 pl-10 rounded-lg bg-white/5 border border-border/50 text-sm focus:outline-none focus:border-blue-500/50"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex flex-wrap gap-1.5 justify-center">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                  activeCategory === "all" ? "bg-blue-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10"
                }`}
              >
                All
              </button>
              {SHORTCUT_DATA.map(cat => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-medium transition-all ${
                    activeCategory === cat.name ? "bg-blue-500 text-white" : "bg-white/5 text-muted-foreground hover:bg-white/10"
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shortcuts Grid */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-8">
          {filteredCategories.map(cat => (
            <div key={cat.name}>
              <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span>{cat.icon}</span> {cat.name}
                <span className="text-xs text-muted-foreground font-normal">({cat.shortcuts.length})</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {cat.shortcuts.map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-border/20 hover:bg-white/[0.05] transition-colors group">
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{s.action}</span>
                    <kbd className="text-xs px-2 py-1 rounded bg-white/10 border border-border/30 font-mono whitespace-nowrap ml-2">
                      {s.keys}
                    </kbd>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {filteredCategories.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg">No shortcuts found for "{search}"</p>
              <p className="text-sm mt-1">Try a different search term</p>
            </div>
          )}
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 px-4 border-t border-border/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Pro Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold mb-2">Modifier Key Symbols</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <span>⌘ = Command</span>
                <span>⌥ = Option/Alt</span>
                <span>⌃ = Control</span>
                <span>⇧ = Shift</span>
                <span>⇪ = Caps Lock</span>
                <span>Globe/Fn = Function</span>
              </div>
            </div>
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold mb-2">Learning Strategy</h3>
              <p className="text-sm text-muted-foreground">Pick 3 new shortcuts per week. Put sticky notes on your monitor. After 2 months you'll know 24+ shortcuts by muscle memory.</p>
            </div>
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold mb-2">Hold ⌘ in Any App</h3>
              <p className="text-sm text-muted-foreground">In most apps, holding ⌘ for 2 seconds shows an overlay of all available keyboard shortcuts for that app.</p>
            </div>
            <div className="p-5 rounded-xl border border-border/30 bg-white/[0.02]">
              <h3 className="font-bold mb-2">Custom Shortcuts</h3>
              <p className="text-sm text-muted-foreground">System Settings → Keyboard → Keyboard Shortcuts → App Shortcuts. Add custom shortcuts for any menu item in any app.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
