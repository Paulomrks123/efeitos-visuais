import { useEffect, useId } from "react";
import { Animation } from "@/data/animations";

interface RealisticAnimationPreviewProps {
  animation: Animation;
  size?: "sm" | "md" | "lg";
  isPlaying?: boolean;
}

// Determine which template to use based on animation type
function getAnimationTemplate(animation: Animation): "card" | "button" | "icon" | "badge" | "notification" {
  const name = animation.name.toLowerCase();
  const className = animation.animationClass.toLowerCase();

  if (name.includes("pulse") || name.includes("glow") || name.includes("neon")) {
    return "badge";
  }
  if (name.includes("bounce") || name.includes("pop") || name.includes("scale")) {
    return "button";
  }
  if (name.includes("spin") || name.includes("rotate") || name.includes("flip")) {
    return "icon";
  }
  if (name.includes("shake") || name.includes("wobble") || name.includes("alert")) {
    return "notification";
  }
  return "card";
}

export function RealisticAnimationPreview({ 
  animation, 
  size = "md", 
  isPlaying = true 
}: RealisticAnimationPreviewProps) {
  const styleId = useId();
  const uniqueStyleId = `animation-${animation.id}-${styleId.replace(/:/g, '')}`;
  const template = getAnimationTemplate(animation);
  const previewColor = animation.previewColor || "#00FFFF";

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.id = uniqueStyleId;
    styleElement.textContent = animation.cssCode;
    document.head.appendChild(styleElement);
    return () => {
      const el = document.getElementById(uniqueStyleId);
      if (el) el.remove();
    };
  }, [animation.cssCode, uniqueStyleId]);

  const playState = isPlaying ? "running" : "paused";

  const sizeStyles = {
    sm: { scale: 0.8 },
    md: { scale: 1 },
    lg: { scale: 1.2 },
  };

  // Badge template (pulse, glow effects)
  if (template === "badge") {
    return (
      <div 
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm ${animation.animationClass}`}
        style={{ 
          background: `linear-gradient(135deg, ${previewColor}30, ${previewColor}10)`,
          border: `1px solid ${previewColor}50`,
          color: previewColor,
          animationPlayState: playState,
          transform: `scale(${sizeStyles[size].scale})`,
        }}
      >
        <span className="w-2 h-2 rounded-full" style={{ background: previewColor }} />
        Online
      </div>
    );
  }

  // Button template (bounce, pop, scale effects)
  if (template === "button") {
    return (
      <button
        className={`px-5 py-2.5 rounded-lg font-semibold text-sm ${animation.animationClass}`}
        style={{
          background: `linear-gradient(135deg, ${previewColor}, ${previewColor}cc)`,
          color: '#000',
          boxShadow: `0 4px 15px ${previewColor}40`,
          animationPlayState: playState,
          transform: `scale(${sizeStyles[size].scale})`,
        }}
      >
        Clique Aqui
      </button>
    );
  }

  // Icon template (spin, rotate, flip effects)
  if (template === "icon") {
    return (
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${animation.animationClass}`}
        style={{
          background: `linear-gradient(135deg, ${previewColor}30, ${previewColor}10)`,
          border: `2px solid ${previewColor}50`,
          animationPlayState: playState,
          transform: `scale(${sizeStyles[size].scale})`,
        }}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke={previewColor}
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
          />
        </svg>
      </div>
    );
  }

  // Notification template (shake, alert effects)
  if (template === "notification") {
    return (
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl ${animation.animationClass}`}
        style={{
          background: `linear-gradient(135deg, ${previewColor}20, ${previewColor}08)`,
          border: `1px solid ${previewColor}40`,
          animationPlayState: playState,
          transform: `scale(${sizeStyles[size].scale})`,
        }}
      >
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: `${previewColor}30` }}
        >
          <svg className="w-4 h-4" fill={previewColor} viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold" style={{ color: previewColor }}>Nova mensagem</p>
          <p className="text-[10px] text-muted-foreground">Há 2 minutos</p>
        </div>
      </div>
    );
  }

  // Default card template
  return (
    <div
      className={`p-4 rounded-xl ${animation.animationClass}`}
      style={{
        background: `linear-gradient(145deg, ${previewColor}15, ${previewColor}05)`,
        border: `1px solid ${previewColor}30`,
        boxShadow: `0 8px 24px ${previewColor}15`,
        animationPlayState: playState,
        transform: `scale(${sizeStyles[size].scale})`,
        minWidth: size === 'sm' ? 120 : size === 'md' ? 150 : 180,
      }}
    >
      <div 
        className="w-full h-2 rounded-full mb-3"
        style={{ background: `linear-gradient(90deg, ${previewColor}, ${previewColor}60)` }}
      />
      <div className="space-y-1.5">
        <div 
          className="h-2 rounded w-3/4"
          style={{ background: `${previewColor}40` }}
        />
        <div 
          className="h-2 rounded w-1/2"
          style={{ background: `${previewColor}25` }}
        />
      </div>
    </div>
  );
}
