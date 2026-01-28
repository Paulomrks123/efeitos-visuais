import { useState } from "react";
import { Copy, Check, Play, Pause } from "lucide-react";
import { Animation } from "@/data/animations";

interface AnimationCardProps {
  animation: Animation;
}

const categoryColors = {
  futuristic: "border-neon-cyan/30 hover:border-neon-cyan/60",
  modern: "border-neon-green/30 hover:border-neon-green/60",
  stylish: "border-neon-purple/30 hover:border-neon-purple/60",
  vibrant: "border-neon-magenta/30 hover:border-neon-magenta/60",
};

const categoryBadgeColors = {
  futuristic: "bg-neon-cyan/20 text-neon-cyan",
  modern: "bg-neon-green/20 text-neon-green",
  stylish: "bg-neon-purple/20 text-neon-purple",
  vibrant: "bg-neon-magenta/20 text-neon-magenta",
};

export function AnimationCard({ animation }: AnimationCardProps) {
  const [isPlaying, setIsPlaying] = useState(true);
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
    const baseClasses = isPlaying ? animation.animationClass : "";
    
    // Custom renders for specific animations
    switch (animation.id) {
      case "F-01": // Neon Pulse
        return (
          <span className={`${baseClasses} text-3xl font-bold text-primary`}>
            NEON
          </span>
        );
      case "F-02": // Glitch
        return (
          <span className={`${baseClasses} text-3xl font-bold text-foreground`}>
            GLITCH
          </span>
        );
      case "F-03": // Data Stream
        return (
          <div 
            className={`${baseClasses} w-full h-24 bg-gradient-to-b from-primary/0 via-primary to-primary/0 bg-[length:100%_200%]`} 
          />
        );
      case "F-05": // Holographic
        return (
          <div 
            className={`${baseClasses} w-24 h-24 rounded-xl bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_200%]`} 
          />
        );
      case "F-06": // 3D Spin
        return (
          <div 
            className={`${baseClasses} w-16 h-16 bg-primary rounded-lg`}
            style={{ transformStyle: 'preserve-3d' }}
          />
        );
      case "F-08": // Scanline
        return (
          <div className="relative w-full h-24 bg-card overflow-hidden rounded-lg">
            <div className={`${isPlaying ? 'animate-scanline' : ''} absolute w-full h-1 bg-primary/50 left-0`} />
          </div>
        );
      case "F-09": // Warp Speed
        return (
          <div 
            key={isPlaying ? 'playing' : 'paused'}
            className={`${baseClasses} w-16 h-16 bg-primary rounded-full`} 
          />
        );
      case "F-11": // Float
        return (
          <div className={`${baseClasses} w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full shadow-lg`} />
        );
      case "F-12": // Digital Pulse
        return (
          <div className="relative flex items-center justify-center">
            <div className={`${isPlaying ? 'animate-digital-pulse' : ''} absolute w-16 h-16 bg-primary/30 rounded-full`} />
            <div className="w-8 h-8 bg-primary rounded-full z-10" />
          </div>
        );
      case "F-13": // Binary Blink
        return (
          <span className={`${baseClasses} font-mono text-primary text-xl`}>
            01001010
          </span>
        );
      case "M-21": // Smooth Hover Scale
        return (
          <button className="transition-transform duration-300 hover:scale-110 bg-primary text-primary-foreground px-4 py-2 rounded-lg">
            Hover Me
          </button>
        );
      case "M-22": // Underline Grow
        return (
          <a className="relative group text-foreground cursor-pointer text-lg">
            Menu Item
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0" />
          </a>
        );
      case "M-23": // Fade In Down
        return (
          <div 
            key={isPlaying ? 'playing' : 'paused'}
            className={`${baseClasses} bg-card p-4 rounded-lg border border-border`}
          >
            Conteúdo
          </div>
        );
      case "M-24": // Micro Bounce
        return (
          <button className={`${baseClasses} text-2xl bg-card p-3 rounded-full border border-border`}>
            🔔
          </button>
        );
      case "M-32": // Zoom In
        return (
          <div 
            key={isPlaying ? 'playing' : 'paused'}
            className={`${baseClasses} w-24 h-16 bg-gradient-to-r from-muted to-muted-foreground/20 rounded-lg`}
          />
        );
      case "M-35": // Rotate Hover
        return (
          <div className="transition-transform duration-300 hover:rotate-3 bg-card p-4 rounded-lg border border-border">
            Hover me
          </div>
        );
      case "M-36": // Skew Hover
        return (
          <div className="transition-transform duration-300 hover:skew-x-3 bg-card p-4 rounded-lg border border-border">
            Hover me
          </div>
        );
      case "M-40": // Slide Up
        return (
          <div 
            key={isPlaying ? 'playing' : 'paused'}
            className={`${baseClasses} bg-card p-4 rounded-lg border border-border`}
          >
            Sliding
          </div>
        );
      case "M-41": // Blur In
        return (
          <div 
            key={isPlaying ? 'playing' : 'paused'}
            className={`${baseClasses} bg-card p-4 rounded-lg text-lg`}
          >
            Blur
          </div>
        );
      case "M-42": // Pop
        return (
          <div 
            key={isPlaying ? 'playing' : 'paused'}
            className={`${baseClasses} bg-primary text-primary-foreground p-3 rounded-full w-12 h-12 flex items-center justify-center`}
          >
            ✓
          </div>
        );
      case "E-42": // Text Wave
        return (
          <div className="flex">
            {'WAVE'.split('').map((letter, i) => (
              <span 
                key={i}
                className={`${isPlaying ? 'animate-text-wave' : ''} text-2xl font-bold`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
        );
      case "E-52": // Bouncing Loader
        return (
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div 
                key={i}
                className={`${isPlaying ? 'animate-bouncing' : ''} w-3 h-3 bg-primary rounded-full`}
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        );
      case "E-55": // Infinite Scroll
        return (
          <div className="overflow-hidden w-full">
            <div className={`${isPlaying ? 'animate-scroll-left' : ''} flex gap-4 w-max`}>
              {['⭐', '🚀', '💫', '✨', '⭐', '🚀', '💫', '✨'].map((item, i) => (
                <span key={i} className="text-xl">{item}</span>
              ))}
            </div>
          </div>
        );
      case "E-56": // Morph
        return (
          <div className={`${baseClasses} w-20 h-20 bg-gradient-to-br from-primary to-secondary`} />
        );
      case "E-57": // Flip
        return (
          <div 
            key={isPlaying ? 'playing' : 'paused'}
            className={`${baseClasses} w-16 h-16 bg-card rounded-lg flex items-center justify-center text-2xl border border-border`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            🎴
          </div>
        );
      case "E-58": // Swing
        return (
          <div 
            key={isPlaying ? 'playing' : 'paused'}
            className={`${baseClasses} origin-top bg-card p-3 rounded-lg inline-block border border-border`}
          >
            🔔 Notif
          </div>
        );
      case "E-59": // Jello
        return (
          <button 
            key={isPlaying ? 'playing' : 'paused'}
            className={`${baseClasses} bg-primary text-primary-foreground px-4 py-2 rounded-lg`}
          >
            Jello
          </button>
        );
      case "E-60": // Tada
        return (
          <div 
            key={isPlaying ? 'playing' : 'paused'}
            className={`${baseClasses} text-3xl`}
          >
            🎉
          </div>
        );
      case "E-61": // Wobble
        return (
          <div 
            key={isPlaying ? 'playing' : 'paused'}
            className={`${baseClasses} bg-card p-4 rounded-lg inline-block border border-border`}
          >
            Wobble
          </div>
        );
      case "E-62": // Rubber Band
        return (
          <button 
            key={isPlaying ? 'playing' : 'paused'}
            className={`${baseClasses} bg-secondary text-secondary-foreground px-4 py-2 rounded-lg`}
          >
            Stretch
          </button>
        );
      case "V-61": // Rainbow
        return (
          <div 
            className={`${baseClasses} w-full h-16 rounded-lg`}
            style={{
              background: 'linear-gradient(to right, #ef4444, #f59e0b, #22c55e, #3b82f6, #a855f7, #ef4444)',
              backgroundSize: '200% 200%',
            }}
          />
        );
      case "V-62": // Pulsating Glow
        return (
          <div className={`${baseClasses} w-16 h-16 bg-accent rounded-full`} />
        );
      case "V-65": // Hue Rotate
        return (
          <div className={`${baseClasses} w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-xl`} />
        );
      case "V-73": // Shimmer
        return (
          <div 
            className={`${baseClasses} w-full h-12 rounded-lg`}
            style={{
              background: 'linear-gradient(to right, hsl(var(--muted)), hsl(var(--muted-foreground) / 0.3), hsl(var(--muted)))',
              backgroundSize: '200% 100%',
            }}
          />
        );
      case "V-78": // Color Cycle
        return (
          <div className={`${baseClasses} w-20 h-20 rounded-xl`} />
        );
      case "V-74": // Heartbeat
        return (
          <div className={`${baseClasses} text-4xl`}>
            ❤️
          </div>
        );
      case "V-75": // Shake
        return (
          <button 
            key={isPlaying ? 'playing' : 'paused'}
            className={`${baseClasses} bg-destructive text-destructive-foreground px-4 py-2 rounded-lg`}
          >
            Error!
          </button>
        );
      case "V-76": // Rotate
        return (
          <div className={`${baseClasses} w-12 h-12 border-4 border-primary border-t-transparent rounded-full`} />
        );
      case "V-79": // Pulse Ring
        return (
          <div className="relative flex items-center justify-center">
            <div className={`${isPlaying ? 'animate-pulse-ring' : ''} absolute w-10 h-10 border-2 border-primary rounded-full`} />
            <div className="w-3 h-3 bg-primary rounded-full" />
          </div>
        );
      case "V-80": // Gradient Border
        return (
          <div 
            className={`p-[2px] rounded-lg ${baseClasses}`}
            style={{
              background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))',
              backgroundSize: '200% 200%',
            }}
          >
            <div className="bg-background rounded-md px-3 py-2 text-sm">
              Border
            </div>
          </div>
        );
      default:
        return (
          <div className={`${baseClasses} w-16 h-16 bg-primary rounded-lg`} />
        );
    }
  };

  return (
    <div 
      className={`glass-card p-6 border-2 transition-all duration-300 ${categoryColors[animation.category]}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono text-muted-foreground">{animation.id}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${categoryBadgeColors[animation.category]}`}>
              {animation.category}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-foreground">{animation.name}</h3>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
          title={isPlaying ? "Pausar" : "Reproduzir"}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground mb-4">{animation.description}</p>

      {/* Preview */}
      <div className="bg-background/50 rounded-lg p-6 mb-4 flex items-center justify-center min-h-[120px] border border-border/50">
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
              {activeTab === "css" ? animation.cssCode : animation.htmlExample}
            </code>
          </pre>
          <button
            onClick={() => copyToClipboard(
              activeTab === "css" ? animation.cssCode : animation.htmlExample,
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
