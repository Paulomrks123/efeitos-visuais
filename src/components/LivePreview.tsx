import { CSSProperties } from "react";
import { Animation } from "@/data/animations";
import { Effect } from "@/data/effects";
import { ButtonAnimation } from "@/data/buttons";

interface AnimationLivePreviewProps {
  animation: Animation;
  isPlaying?: boolean;
  size?: "sm" | "md" | "lg";
}

interface EffectLivePreviewProps {
  effect: Effect;
  size?: "sm" | "md" | "lg";
}

interface ButtonLivePreviewProps {
  button: ButtonAnimation;
  isPlaying?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-16 h-16",
  lg: "w-20 h-20",
};

/**
 * Preview ao vivo para animações - aplica a classe CSS real
 */
export function AnimationLivePreview({
  animation,
  isPlaying = true,
  size = "md",
}: AnimationLivePreviewProps) {
  const previewColor = animation.previewColor || "#00FFFF";

  // Estilo base com a cor da animação
  const style: CSSProperties = {
    background: `linear-gradient(135deg, ${previewColor}, ${previewColor}88)`,
    boxShadow: `0 0 20px ${previewColor}44, 0 0 40px ${previewColor}22`,
    "--animation-color": previewColor,
  } as CSSProperties;

  return (
    <div
      className={`${sizeClasses[size]} rounded-lg ${isPlaying ? animation.animationClass : ""}`}
      style={style}
    />
  );
}

/**
 * Preview ao vivo para efeitos visuais
 */
export function EffectLivePreview({ effect, size = "md" }: EffectLivePreviewProps) {
  const previewColor = effect.previewColor || "#00FFFF";

  switch (effect.category) {
    case "glassmorphism":
      return (
        <div
          className="backdrop-blur-xl border rounded-2xl p-4 text-sm font-medium"
          style={{
            background: `${previewColor}25`,
            borderColor: `${previewColor}40`,
            boxShadow: `0 8px 32px ${previewColor}22`,
            color: previewColor,
            minWidth: size === "sm" ? "80px" : size === "md" ? "100px" : "120px",
          }}
        >
          {effect.name.split(" ")[0]}
        </div>
      );

    case "neumorphism":
      return (
        <div
          className="rounded-2xl p-4 text-sm font-medium"
          style={{
            background: previewColor,
            boxShadow: `8px 8px 16px ${previewColor}66, -8px -8px 16px #ffffff44`,
            minWidth: size === "sm" ? "80px" : size === "md" ? "100px" : "120px",
          }}
        >
          {effect.name.split(" ")[0]}
        </div>
      );

    case "filters":
      return (
        <div
          className={`${sizeClasses[size]} rounded-lg transition-all duration-300`}
          style={{
            background: `linear-gradient(135deg, ${previewColor}, ${previewColor}88)`,
            filter: "contrast(1.1) saturate(1.2)",
          }}
        />
      );

    case "gradients":
      return (
        <div
          className="w-full h-16 rounded-lg animate-pulse"
          style={{
            background: `linear-gradient(135deg, ${previewColor}, ${previewColor}44, ${previewColor}88)`,
            backgroundSize: "200% 200%",
            animation: "gradient-border 3s ease infinite",
          }}
        />
      );

    default:
      return (
        <div
          className={`${sizeClasses[size]} rounded-lg`}
          style={{ background: previewColor }}
        />
      );
  }
}

/**
 * Preview ao vivo para botões - mostra animação no hover
 */
export function ButtonLivePreview({
  button,
  isPlaying = true,
  size = "md",
}: ButtonLivePreviewProps) {
  const previewColor = button.previewColor || "#00FFFF";

  // Extrai o nome da classe do CSS
  const classMatch = button.cssCode.match(/\.([a-zA-Z0-9-]+)\s*\{/);
  const buttonClass = classMatch ? classMatch[1] : "";

  const buttonSizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`${buttonSizes[size]} rounded-lg font-medium transition-all ${isPlaying ? buttonClass : ""}`}
      style={{
        background: `linear-gradient(135deg, ${previewColor}, ${previewColor}cc)`,
        color: "#fff",
        boxShadow: `0 4px 15px ${previewColor}44`,
        animation: isPlaying && button.category === "pulse" 
          ? "pulsePreview 2s infinite" 
          : undefined,
      }}
    >
      {button.name}
    </button>
  );
}
