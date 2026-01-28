import { Grid3X3, LayoutGrid, List } from "lucide-react";
import { ViewMode } from "@/hooks/useViewMode";

interface ViewModeToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export function ViewModeToggle({ viewMode, onViewModeChange }: ViewModeToggleProps) {
  const modes: { mode: ViewMode; icon: React.ReactNode; label: string }[] = [
    { mode: "grid", icon: <LayoutGrid size={18} />, label: "Grade Normal" },
    { mode: "compact", icon: <Grid3X3 size={18} />, label: "Grade Compacta" },
    { mode: "list", icon: <List size={18} />, label: "Lista" },
  ];

  return (
    <div className="flex items-center gap-1 bg-card/80 backdrop-blur-xl border border-border rounded-xl p-1">
      {modes.map(({ mode, icon, label }) => (
        <button
          key={mode}
          onClick={() => onViewModeChange(mode)}
          title={label}
          className={`
            p-2.5 rounded-lg transition-all duration-200
            ${viewMode === mode
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }
          `}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
