import { useState } from "react";
import { Copy, Check, Sliders } from "lucide-react";
import { ButtonAnimation } from "@/data/buttons";
import { FavoriteButton } from "@/components/features/FavoriteButton";
import { AnimationPlayground } from "@/components/playground/AnimationPlayground";

interface ButtonCardProps {
  button: ButtonAnimation;
  isCompact?: boolean;
}

const categoryColors = {
  scale: "border-neon-cyan/30 hover:border-neon-cyan/60",
  pulse: "border-neon-magenta/30 hover:border-neon-magenta/60",
};

const categoryBadgeColors = {
  scale: "bg-neon-cyan/20 text-neon-cyan",
  pulse: "bg-neon-magenta/20 text-neon-magenta",
};

export function ButtonCardWithPlayground({ button, isCompact = false }: ButtonCardProps) {
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedHTML, setCopiedHTML] = useState(false);
  const [activeTab, setActiveTab] = useState<"css" | "html">("css");
  const [showPlayground, setShowPlayground] = useState(false);

  const copyToClipboard = async (text: string, type: "css" | "html") => {
    await navigator.clipboard.writeText(text);
    if (type === "css") {
      setCopiedCSS(true);
      setTimeout(() => setCopiedCSS(false), 2000);
    } else {
      setCopiedHTML(true);
      setTimeout(() => setCopiedHTML(false), 2000);
    }
  };

  const previewColor = button.previewColor || "#00FFFF";

  const renderPreview = () => {
    return (
      <button
        className="px-6 py-3 rounded-lg font-medium text-sm transition-all hover:scale-105"
        style={{
          background: `linear-gradient(135deg, ${previewColor}, ${previewColor}cc)`,
          color: "#fff",
          boxShadow: `0 4px 15px ${previewColor}44`,
        }}
      >
        {button.name}
      </button>
    );
  };

  // Adapter for playground
  const playgroundItem = {
    ...button,
    htmlExample: button.htmlCode,
  };

  if (isCompact) {
    return (
      <>
        <div 
          className={`glass-card p-4 border-2 transition-all duration-300 group cursor-pointer ${categoryColors[button.category]}`}
          onClick={() => setShowPlayground(true)}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono text-muted-foreground">{button.id}</span>
            <div className="flex gap-1">
              <FavoriteButton id={button.id} type="button" size="sm" />
              <button
                onClick={(e) => { e.stopPropagation(); setShowPlayground(true); }}
                className="p-1.5 rounded-lg bg-neon-cyan/20 hover:bg-neon-cyan/40 text-neon-cyan transition-colors opacity-0 group-hover:opacity-100"
              >
                <Sliders size={12} />
              </button>
            </div>
          </div>
          <div className="bg-background/50 rounded-lg p-4 mb-2 flex items-center justify-center min-h-[80px] border border-border/50">
            {renderPreview()}
          </div>
          <h3 className="text-sm font-medium text-foreground truncate">{button.name}</h3>
          <button
            onClick={(e) => { e.stopPropagation(); copyToClipboard(button.cssCode, "css"); }}
            className="mt-2 w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors py-1.5 rounded-lg bg-muted/50"
          >
            {copiedCSS ? <Check size={12} className="text-neon-green" /> : <Copy size={12} />}
            {copiedCSS ? "Copiado!" : "Copiar CSS"}
          </button>
        </div>

        <AnimationPlayground
          isOpen={showPlayground}
          onClose={() => setShowPlayground(false)}
          item={playgroundItem}
          type="button"
        />
      </>
    );
  }

  return (
    <>
      <div className={`glass-card p-6 border-2 transition-all duration-300 ${categoryColors[button.category]}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-muted-foreground">{button.id}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${categoryBadgeColors[button.category]}`}>
                {button.category}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">{button.name}</h3>
          </div>
          <div className="flex items-center gap-2">
            <FavoriteButton id={button.id} type="button" />
            <button
              onClick={() => setShowPlayground(true)}
              className="p-2 rounded-lg bg-neon-cyan/20 hover:bg-neon-cyan/40 text-neon-cyan transition-colors"
              title="Abrir Playground"
            >
              <Sliders size={16} />
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4">{button.description}</p>

        {/* Preview */}
        <div 
          className="bg-background/50 rounded-lg p-6 mb-4 flex items-center justify-center min-h-[120px] border border-border/50 cursor-pointer hover:border-neon-cyan/50 transition-colors"
          onClick={() => setShowPlayground(true)}
        >
          {renderPreview()}
        </div>

        {/* Code Tabs */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("css")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === "css" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              CSS
            </button>
            <button
              onClick={() => setActiveTab("html")}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === "html" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              React/HTML
            </button>
          </div>

          <div className="relative">
            <pre className="bg-background/80 rounded-lg p-4 text-xs overflow-x-auto border border-border/50 max-h-48 font-mono">
              <code className="text-muted-foreground">
                {activeTab === "css" ? button.cssCode : button.htmlCode}
              </code>
            </pre>
            <button
              onClick={() => copyToClipboard(
                activeTab === "css" ? button.cssCode : button.htmlCode,
                activeTab
              )}
              className="absolute top-2 right-2 p-2 rounded-md bg-muted hover:bg-muted/80 transition-colors"
              title="Copiar código"
            >
              {(activeTab === "css" ? copiedCSS : copiedHTML) ? (
                <Check size={14} className="text-neon-green" />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimationPlayground
        isOpen={showPlayground}
        onClose={() => setShowPlayground(false)}
        item={playgroundItem}
        type="button"
      />
    </>
  );
}
