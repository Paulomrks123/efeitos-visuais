import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Effect } from "@/data/effects";

interface EffectCardProps {
  effect: Effect;
}

const categoryColors = {
  glassmorphism: "border-neon-cyan/30 hover:border-neon-cyan/60",
  neumorphism: "border-neon-green/30 hover:border-neon-green/60",
  filters: "border-neon-purple/30 hover:border-neon-purple/60",
  gradients: "border-neon-magenta/30 hover:border-neon-magenta/60",
};

const categoryBadgeColors = {
  glassmorphism: "bg-neon-cyan/20 text-neon-cyan",
  neumorphism: "bg-neon-green/20 text-neon-green",
  filters: "bg-neon-purple/20 text-neon-purple",
  gradients: "bg-neon-magenta/20 text-neon-magenta",
};

export function EffectCard({ effect }: EffectCardProps) {
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedHTML, setCopiedHTML] = useState(false);
  const [activeTab, setActiveTab] = useState<"css" | "html">("css");

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

  const renderPreview = () => {
    switch (effect.id) {
      // Glassmorphism
      case "G-01":
        return (
          <div className="backdrop-blur-xl bg-white/15 border border-white/20 rounded-2xl p-4 text-sm">
            Frosted Card
          </div>
        );
      case "G-02":
        return (
          <div className="relative w-full h-20">
            <div className="absolute inset-0 backdrop-blur-sm bg-white/5 rounded-xl" />
            <div className="relative backdrop-blur-xl bg-white/10 rounded-xl p-4 text-sm h-full flex items-center justify-center">
              Layered Glass
            </div>
          </div>
        );
      case "G-03":
        return (
          <button className="backdrop-blur-xl bg-white/10 border border-white/20 px-5 py-2.5 rounded-xl hover:bg-white/20 transition-all text-sm">
            Glass Button
          </button>
        );
      case "G-04":
        return (
          <div className="backdrop-blur-xl bg-white/10 rounded-xl p-4 border border-cyan-400/30 shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-shadow text-sm">
            Neon Glass
          </div>
        );
      case "G-05":
        return (
          <div className="backdrop-blur-xl bg-white/10 rounded-xl p-4 transition-transform duration-300 hover:[transform:perspective(1000px)_rotateX(5deg)_rotateY(5deg)] text-sm">
            3D Tilt (hover)
          </div>
        );
      case "G-06":
        return (
          <div className="w-24 backdrop-blur-2xl bg-black/30 border-r border-white/10 p-3 rounded-lg text-xs">
            Sidebar
          </div>
        );
      case "G-07":
        return (
          <h1 className="text-3xl font-bold text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.6)]">
            GLASS
          </h1>
        );
      case "G-08":
        return (
          <div className="relative overflow-hidden backdrop-blur-xl bg-white/10 rounded-xl p-4 w-full">
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            <span className="relative text-sm">Shimmer</span>
          </div>
        );
      case "G-09":
        return (
          <div className="w-20 h-20 rounded-full backdrop-blur-xl bg-white/15 border border-white/20 flex items-center justify-center text-2xl">
            🔮
          </div>
        );
      case "G-10":
        return (
          <div className="backdrop-blur-lg bg-white/10 rounded-lg p-3 shadow-2xl border border-white/20 text-sm">
            Popover
          </div>
        );

      // Neumorphism
      case "N-21":
        return (
          <div className="bg-[#e0e0e0] rounded-2xl p-4 shadow-[8px_8px_15px_#a7a7a7,-8px_-8px_15px_#ffffff] text-gray-700 text-sm">
            Convex Card
          </div>
        );
      case "N-22":
        return (
          <input 
            className="bg-[#e0e0e0] rounded-xl px-4 py-2 shadow-[inset_5px_5px_10px_#a7a7a7,inset_-5px_-5px_10px_#ffffff] outline-none text-gray-700 text-sm w-36" 
            placeholder="Concave Input"
          />
        );
      case "N-23":
        return (
          <button className="bg-[#e0e0e0] rounded-xl px-5 py-2 shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] text-gray-700 text-sm">
            Pressed
          </button>
        );
      case "N-24":
        return (
          <button className="bg-[#e0e0e0] rounded-xl px-5 py-2 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] active:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] transition-shadow text-gray-700 text-sm">
            Raised
          </button>
        );
      case "N-25":
        return (
          <div className="w-14 h-14 rounded-full bg-[#e0e0e0] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] flex items-center justify-center cursor-pointer active:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff] transition-shadow">
            ⚡
          </div>
        );
      case "N-26":
        return (
          <div className="text-3xl [filter:drop-shadow(2px_2px_2px_#bebebe)_drop-shadow(-2px_-2px_2px_#ffffff)]">
            ⭐
          </div>
        );
      case "N-27":
        return (
          <div className="w-20 h-20 rounded-full bg-[#e0e0e0] shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#e0e0e0] shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]" />
          </div>
        );
      case "N-29":
        return (
          <h1 className="text-3xl font-bold text-[#d0d0d0] [text-shadow:2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff]">
            SOFT
          </h1>
        );
      case "N-31":
        return (
          <div className="w-16 h-16 rounded-full bg-[#e0e0e0] p-1 shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
          </div>
        );
      case "N-37":
        return (
          <span className="bg-[#e0e0e0] px-3 py-1 rounded-full text-sm shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff] text-gray-700">
            Badge
          </span>
        );

      // Filters
      case "F-41":
        return (
          <div className="w-24 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-green-500 [filter:sepia(1)_hue-rotate(200deg)_saturate(3)]" />
        );
      case "F-42":
        return (
          <div className="text-2xl font-bold [filter:drop-shadow(2px_0_0_red)_drop-shadow(-2px_0_0_cyan)]">
            CHROMATIC
          </div>
        );
      case "F-43":
        return (
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 [clip-path:circle(50%_at_50%_50%)]" />
        );
      case "F-44":
        return (
          <div 
            key={Date.now()}
            className="bg-gradient-to-r from-primary to-secondary p-4 rounded-lg animate-[reveal_0.8s_ease-out_forwards] [clip-path:inset(50%)] text-sm"
          >
            Revealed!
          </div>
        );
      case "F-45":
        return (
          <div className="w-24 h-16 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 grayscale-0 hover:grayscale transition-[filter] duration-300 cursor-pointer" />
        );
      case "F-47":
        return (
          <div className="w-24 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 [clip-path:polygon(0_0,100%_0,100%_75%,50%_100%,0_75%)]" />
        );
      case "F-49":
        return (
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Gradient
          </h1>
        );
      case "F-53":
        return (
          <div className="invert-0 hover:invert transition-[filter] duration-300 p-3 rounded-lg bg-card border border-border cursor-pointer text-sm">
            Hover to Invert
          </div>
        );
      case "F-56":
        return (
          <div className="relative w-24 h-16 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500" />
            <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7))]" />
          </div>
        );
      case "F-60":
        return (
          <div className="[backdrop-filter:blur(10px)_hue-rotate(90deg)] bg-white/10 p-4 rounded-xl text-sm">
            Hue Rotate
          </div>
        );

      // Gradients
      case "D-61":
        return (
          <div 
            className="w-full h-16 rounded-lg animate-rainbow"
            style={{
              background: 'linear-gradient(to right, #ef4444, #f59e0b, #22c55e, #3b82f6, #a855f7, #ef4444)',
              backgroundSize: '200% 200%',
            }}
          />
        );
      case "D-62":
        return (
          <div className="w-20 h-20 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fff,#00ffff,#0066ff,#000)]" />
        );
      case "D-63":
        return (
          <div className="relative w-full h-20 overflow-hidden rounded-lg">
            <div className="absolute w-20 h-20 rounded-full bg-cyan-400 blur-2xl opacity-60 animate-float" />
            <div className="absolute right-0 w-20 h-20 rounded-full bg-purple-500 blur-2xl opacity-60 animate-float" style={{ animationDelay: '1s', animationDirection: 'reverse' }} />
          </div>
        );
      case "D-65":
        return (
          <div className="w-full h-20 rounded-lg bg-[radial-gradient(at_40%_20%,#ff00ff_0px,transparent_50%),radial-gradient(at_80%_0%,#00ffff_0px,transparent_50%),radial-gradient(at_0%_50%,#00ff00_0px,transparent_50%)] bg-background" />
        );
      case "D-66":
        return (
          <div className="w-full h-16 rounded-lg bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)] bg-card animate-[stripe-move_1s_linear_infinite]" />
        );
      case "D-70":
        return (
          <div className="relative w-full h-24 overflow-hidden rounded-lg bg-gradient-to-b from-purple-900 to-black">
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-[linear-gradient(rgba(255,0,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.3)_1px,transparent_1px)] bg-[size:20px_20px] [transform:perspective(100px)_rotateX(50deg)] [transform-origin:bottom]" />
          </div>
        );
      case "D-71":
        return (
          <div className="relative w-full h-16 flex items-center justify-around">
            {['⭐', '💫', '✨'].map((icon, i) => (
              <span 
                key={i}
                className="animate-float text-xl"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                {icon}
              </span>
            ))}
          </div>
        );
      case "D-73":
        return (
          <h1 className="text-2xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer">
            Highlight
          </h1>
        );
      case "D-77":
        return (
          <div 
            key={Date.now()}
            className="bg-gradient-to-r from-primary to-secondary p-4 rounded-lg animate-[circle-reveal_0.6s_ease-out_forwards] [clip-path:circle(0%_at_50%_50%)] text-sm"
          >
            Revealed!
          </div>
        );
      case "D-80":
        return (
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulsating-glow" />
        );
      default:
        return (
          <div className="w-16 h-16 bg-primary rounded-lg" />
        );
    }
  };

  return (
    <div className={`glass-card p-6 border-2 transition-all duration-300 ${categoryColors[effect.category]}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-muted-foreground">{effect.id}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${categoryBadgeColors[effect.category]}`}>
              {effect.category}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-foreground">{effect.name}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4">{effect.description}</p>

      {/* Preview */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 mb-4 flex items-center justify-center min-h-[120px] border border-border/50 overflow-hidden">
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
              {activeTab === "css" ? effect.cssCode : effect.htmlExample}
            </code>
          </pre>
          <button
            onClick={() => copyToClipboard(
              activeTab === "css" ? effect.cssCode : effect.htmlExample,
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
  );
}
