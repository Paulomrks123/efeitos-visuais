import { CSSProperties } from "react";
import { Animation } from "@/data/animations";
import { Effect } from "@/data/effects";
import { ButtonAnimation } from "@/data/buttons";
import { TextEffectPreview } from "./TextEffectPreview";

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
  sm: { width: 48, height: 48 },
  md: { width: 64, height: 64 },
  lg: { width: 80, height: 80 },
};

/**
 * Detecta o tipo de animação baseado no ID, nome ou classe
 */
function getAnimationType(animation: Animation): string {
  const id = animation.id.toLowerCase();
  const name = animation.name.toLowerCase();
  const className = animation.animationClass.toLowerCase();

  // Pulse/Glow effects
  if (name.includes("pulse") || name.includes("glow") || name.includes("neon") || 
      className.includes("pulse") || className.includes("glow") || 
      name.includes("reactor") || name.includes("tron")) {
    return "pulse";
  }
  
  // Flicker effects
  if (name.includes("flicker") || name.includes("blink") || name.includes("quantum") ||
      name.includes("binary")) {
    return "flicker";
  }
  
  // Shake/Zap effects
  if (name.includes("zap") || name.includes("shake") || name.includes("wobble") ||
      name.includes("electric") || name.includes("glitch")) {
    return "zap";
  }
  
  // Rotate/Spin effects
  if (name.includes("spin") || name.includes("rotate") || name.includes("flip") ||
      name.includes("tunnel") || name.includes("warp")) {
    return "spin";
  }
  
  // Bounce effects
  if (name.includes("bounce") || name.includes("jump") || name.includes("hop")) {
    return "bounce";
  }
  
  // Scale effects
  if (name.includes("scale") || name.includes("zoom") || name.includes("pop") ||
      name.includes("expand")) {
    return "scale";
  }
  
  // Float effects
  if (name.includes("float") || name.includes("levitate") || name.includes("hover") ||
      name.includes("drift")) {
    return "float";
  }
  
  // Color shift effects
  if (name.includes("hologram") || name.includes("rainbow") || name.includes("spectrum") ||
      name.includes("prism") || name.includes("hue") || name.includes("color")) {
    return "colorShift";
  }
  
  // Morph effects
  if (name.includes("morph") || name.includes("blob") || name.includes("plasma") ||
      name.includes("organic")) {
    return "morph";
  }
  
  // Shimmer effects
  if (name.includes("shimmer") || name.includes("shine") || name.includes("chrome") ||
      name.includes("reflect")) {
    return "shimmer";
  }
  
  // Heartbeat effects
  if (name.includes("heart") || name.includes("beat") || name.includes("throb")) {
    return "heartbeat";
  }
  
  // Jello effects
  if (name.includes("jello") || name.includes("rubber") || name.includes("elastic") ||
      name.includes("squish")) {
    return "jello";
  }
  
  // Swing effects
  if (name.includes("swing") || name.includes("pendulum") || name.includes("sway")) {
    return "swing";
  }
  
  // Tada effects
  if (name.includes("tada") || name.includes("attention") || name.includes("alert")) {
    return "tada";
  }
  
  // Matrix/Rain effects
  if (name.includes("matrix") || name.includes("rain") || name.includes("stream") ||
      name.includes("fall") || name.includes("cascade")) {
    return "float";
  }

  // Default to pulse for neon-themed
  return "pulse";
}

/**
 * Retorna o estilo de animação inline baseado no tipo
 */
function getAnimationStyle(type: string, color: string, isPlaying: boolean): CSSProperties {
  const baseStyle: CSSProperties = {
    "--preview-color": color,
    background: `linear-gradient(135deg, ${color}, ${color}88)`,
    animationPlayState: isPlaying ? "running" : "paused",
  } as CSSProperties;

  switch (type) {
    case "pulse":
      return {
        ...baseStyle,
        animation: "liveNeonPulse 2s ease-in-out infinite",
        boxShadow: `0 0 10px ${color}, 0 0 20px ${color}66`,
      };
    
    case "flicker":
      return {
        ...baseStyle,
        animation: "liveFlicker 1.5s infinite",
        boxShadow: `0 0 15px ${color}`,
      };
    
    case "zap":
      return {
        ...baseStyle,
        animation: "liveZap 0.3s ease-in-out infinite",
        boxShadow: `0 0 15px ${color}, 0 0 30px ${color}44`,
      };
    
    case "spin":
      return {
        ...baseStyle,
        animation: "liveSpin 3s linear infinite",
        boxShadow: `0 0 10px ${color}`,
      };
    
    case "bounce":
      return {
        ...baseStyle,
        animation: "liveBounce 1s ease-in-out infinite",
        boxShadow: `0 0 15px ${color}66`,
      };
    
    case "scale":
      return {
        ...baseStyle,
        animation: "liveScale 1.5s ease-in-out infinite",
        boxShadow: `0 0 10px ${color}`,
      };
    
    case "float":
      return {
        ...baseStyle,
        animation: "liveFloat 3s ease-in-out infinite",
        boxShadow: `0 0 12px ${color}88`,
      };
    
    case "colorShift":
      return {
        ...baseStyle,
        background: `linear-gradient(90deg, ${color}, #FF00FF, #00FFFF, ${color})`,
        backgroundSize: "300% 100%",
        animation: "liveGradientMove 3s ease infinite",
        boxShadow: `0 0 15px ${color}`,
      };
    
    case "morph":
      return {
        ...baseStyle,
        animation: "liveMorph 4s ease-in-out infinite, liveNeonPulse 2s ease-in-out infinite",
        borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
      };
    
    case "shimmer":
      return {
        ...baseStyle,
        background: `linear-gradient(90deg, ${color}44, ${color}, ${color}44, ${color}, ${color}44)`,
        backgroundSize: "200% 100%",
        animation: "liveShimmer 2s linear infinite",
      };
    
    case "heartbeat":
      return {
        ...baseStyle,
        animation: "liveHeartbeat 1.5s ease-in-out infinite",
        boxShadow: `0 0 15px ${color}`,
      };
    
    case "jello":
      return {
        ...baseStyle,
        animation: "liveJello 2s ease-in-out infinite",
        boxShadow: `0 0 10px ${color}88`,
      };
    
    case "swing":
      return {
        ...baseStyle,
        animation: "liveSwing 2s ease-in-out infinite",
        transformOrigin: "top center",
        boxShadow: `0 0 12px ${color}`,
      };
    
    case "tada":
      return {
        ...baseStyle,
        animation: "liveTada 2s ease-in-out infinite",
        boxShadow: `0 0 15px ${color}`,
      };
    
    default:
      return {
        ...baseStyle,
        animation: "liveNeonPulse 2s ease-in-out infinite",
        boxShadow: `0 0 10px ${color}`,
      };
  }
}

/**
 * Preview ao vivo para animações - aplica animações CSS reais
 */
export function AnimationLivePreview({
  animation,
  isPlaying = true,
  size = "md",
}: AnimationLivePreviewProps) {
  const previewColor = animation.previewColor || "#00FFFF";
  const animationType = getAnimationType(animation);
  const dimensions = sizeClasses[size];
  
  const style = getAnimationStyle(animationType, previewColor, isPlaying);

  return (
    <div
      className="rounded-lg"
      style={{
        ...style,
        width: dimensions.width,
        height: dimensions.height,
      }}
    />
  );
}

/**
 * Preview ao vivo para efeitos visuais com animações reais
 */
export function EffectLivePreview({ effect, size = "md" }: EffectLivePreviewProps) {
  const previewColor = effect.previewColor || "#00FFFF";
  const dimensions = sizeClasses[size];
  const minWidth = size === "sm" ? 80 : size === "md" ? 100 : 120;

  switch (effect.category) {
    case "glassmorphism":
      return (
        <div className="relative" style={{ minWidth, minHeight: dimensions.height + 20 }}>
          {/* Background pattern to show blur effect */}
          <div 
            className="absolute inset-0 rounded-2xl"
            style={{
              background: `
                linear-gradient(45deg, ${previewColor}33 25%, transparent 25%),
                linear-gradient(-45deg, ${previewColor}33 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, ${previewColor}33 75%),
                linear-gradient(-45deg, transparent 75%, ${previewColor}33 75%)
              `,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
              animation: "liveGradientMove 4s ease infinite",
            }}
          />
          {/* Glassmorphism card */}
          <div
            className="relative backdrop-blur-xl border rounded-2xl p-3 text-xs font-medium flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${previewColor}30, ${previewColor}10)`,
              borderColor: `${previewColor}50`,
              boxShadow: `0 8px 32px ${previewColor}22, inset 0 0 20px ${previewColor}11`,
              color: previewColor,
              minHeight: dimensions.height,
              animation: "liveNeonPulse 3s ease-in-out infinite",
              "--preview-color": previewColor,
            } as CSSProperties}
          >
            Glass
          </div>
        </div>
      );

    case "neumorphism":
      return (
        <div
          className="rounded-2xl p-3 text-xs font-medium flex items-center justify-center"
          style={{
            background: `linear-gradient(145deg, ${previewColor}22, ${previewColor}11)`,
            boxShadow: `8px 8px 16px ${previewColor}44, -8px -8px 16px rgba(255,255,255,0.08)`,
            minWidth,
            minHeight: dimensions.height,
            color: previewColor,
            animation: "liveNeumorphPress 2s ease-in-out infinite",
          }}
        >
          Neumorphic
        </div>
      );

    case "filters":
      return (
        <div
          className="rounded-lg"
          style={{
            width: dimensions.width,
            height: dimensions.height,
            background: `linear-gradient(135deg, ${previewColor}, ${previewColor}66)`,
            boxShadow: `0 0 15px ${previewColor}44`,
            animation: "liveFilterAnimate 3s ease-in-out infinite, liveColorShift 5s linear infinite",
          }}
        />
      );

    case "gradients":
      return (
        <div
          className="rounded-lg"
          style={{
            width: minWidth,
            height: dimensions.height,
            background: `linear-gradient(135deg, ${previewColor}, #FF00FF, #00FFFF, ${previewColor})`,
            backgroundSize: "300% 300%",
            animation: "liveGradientMove 3s ease infinite",
            boxShadow: `0 0 20px ${previewColor}44`,
          }}
        />
      );

    case "text":
      return (
        <TextEffectPreview 
          effect={effect} 
          size={size} 
          text="ÚNICO"
        />
      );

    case "images":
      // Image effects preview with animated placeholder
      const imageId = parseInt(effect.id.replace("I-", "")) || 1;
      const animations = [
        "imgFadeIn", "imgZoomReveal", "imgSlideLeft", "imgSlideRight",
        "imgFlipH", "imgFlipV", "imgBlurClear", "imgRotateIn",
        "imgBounceIn", "imgSlideUp", "imgCurtain", "imgCircleExpand",
        "imgDiagonalWipe", "imgShutter", "imgGlitchReveal", "imgTvStatic",
        "imgPolaroidDrop", "imgCardFlip", "imgPixelDissolve", "imgKenBurns",
        "imgNeonFrame", "imgSplitReveal", "imgElasticPop", "imgWaveDistort",
        "imgHexagon", "imgParallaxFloat", "imgSpotlight", "imgVintageFilm",
        "imgHoloShine", "imgPortal"
      ];
      const animName = animations[(imageId - 1) % animations.length];
      
      return (
        <div
          className="relative overflow-hidden rounded-lg"
          style={{
            width: dimensions.width + 20,
            height: dimensions.height + 10,
          }}
        >
          {/* Image placeholder with effect animation */}
          <div
            className="w-full h-full rounded-lg flex items-center justify-center text-xs font-bold"
            style={{
              background: `linear-gradient(135deg, ${previewColor}40, ${previewColor}80, ${previewColor}40)`,
              backgroundSize: "200% 200%",
              color: "#fff",
              textShadow: `0 0 10px ${previewColor}`,
              boxShadow: `0 0 20px ${previewColor}44, inset 0 0 30px ${previewColor}22`,
              animation: `${animName} 2s ease-in-out infinite, liveGradientMove 4s ease infinite`,
              border: `2px solid ${previewColor}66`,
            }}
          >
            📷
          </div>
        </div>
      );

    default:
      return (
        <div
          className="rounded-lg"
          style={{
            width: dimensions.width,
            height: dimensions.height,
            background: `linear-gradient(135deg, ${previewColor}, ${previewColor}88)`,
            boxShadow: `0 0 15px ${previewColor}44`,
            animation: "liveNeonPulse 2s ease-in-out infinite",
            "--preview-color": previewColor,
          } as CSSProperties}
        />
      );
  }
}

/**
 * Preview ao vivo para botões - mostra animação contínua única por botão
 */
export function ButtonLivePreview({
  button,
  isPlaying = true,
  size = "md",
}: ButtonLivePreviewProps) {
  const previewColor = button.previewColor || "#00FFFF";

  const buttonSizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  // Get unique animation style based on button ID and category
  const getButtonAnimation = (): CSSProperties => {
    const baseStyle: CSSProperties = {
      background: `linear-gradient(135deg, ${previewColor}, ${previewColor}cc)`,
      color: "#fff",
      boxShadow: `0 4px 20px ${previewColor}55, 0 0 15px ${previewColor}33`,
      animationPlayState: isPlaying ? "running" : "paused",
      "--preview-color": previewColor,
    } as CSSProperties;

    // Category-specific animations with unique variations
    switch (button.category) {
      case "scale":
        return {
          ...baseStyle,
          animation: getScaleAnimation(button.id),
        };
      case "pulse":
        return {
          ...baseStyle,
          animation: getPulseAnimation(button.id),
        };
      case "glow":
        return {
          ...baseStyle,
          animation: getGlowAnimation(button.id),
          boxShadow: `0 0 20px ${previewColor}, 0 0 40px ${previewColor}66, 0 0 60px ${previewColor}33`,
        };
      case "fill":
        return {
          ...baseStyle,
          animation: getFillAnimation(button.id),
          background: `linear-gradient(90deg, ${previewColor} 50%, ${previewColor}44 50%)`,
          backgroundSize: "200% 100%",
        };
      case "3d":
        return {
          ...baseStyle,
          animation: get3DAnimation(button.id),
          transformStyle: "preserve-3d",
          perspective: "500px",
        };
      case "icon":
        return {
          ...baseStyle,
          animation: getIconAnimation(button.id),
        };
      default:
        return {
          ...baseStyle,
          animation: "liveNeonPulse 2s ease-in-out infinite",
        };
    }
  };

  // Get icon for icon category buttons
  const getButtonIcon = (): string => {
    if (button.category !== "icon") return "";
    const id = button.id;
    if (id.includes("spin")) return "⚙️";
    if (id.includes("bounce")) return "🎾";
    if (id.includes("flip")) return "🔄";
    if (id.includes("shake")) return "📳";
    if (id.includes("pulse")) return "💫";
    if (id.includes("rotate")) return "🔁";
    if (id.includes("swing")) return "🎵";
    if (id.includes("beat") || id.includes("heart")) return "❤️";
    if (id.includes("float")) return "🎈";
    if (id.includes("morph")) return "🎭";
    if (id.includes("jelly")) return "🍮";
    if (id.includes("sparkle") || id.includes("diamond")) return "💎";
    if (id.includes("fire")) return "🔥";
    if (id.includes("lightning") || id.includes("bolt")) return "⚡";
    if (id.includes("magic") || id.includes("wand")) return "✨";
    if (id.includes("rocket") || id.includes("launch")) return "🚀";
    if (id.includes("wave")) return "👋";
    return "⭐";
  };

  return (
    <button
      className={`${buttonSizes[size]} rounded-lg font-medium transition-all`}
      style={getButtonAnimation()}
    >
      {button.category === "icon" && <span className="mr-1">{getButtonIcon()}</span>}
      {button.name.split(" ")[0]}
    </button>
  );
}

// Unique scale animations for each button
function getScaleAnimation(id: string): string {
  const num = parseInt(id.replace(/\D/g, "")) || 1;
  const variations = [
    "liveScale 1.5s ease-in-out infinite",
    "liveBounce 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite",
    "liveJello 2s ease-in-out infinite",
    "liveTada 2s ease-in-out infinite",
    "liveSwing 2s ease-in-out infinite",
    "liveHeartbeat 1.5s ease-in-out infinite",
    "liveZap 0.5s ease-in-out infinite",
    "liveRubberBand 1s ease infinite",
    "liveWobble 1.5s ease-in-out infinite",
    "liveFlip3D 2s ease-in-out infinite",
  ];
  return variations[num % variations.length];
}

// Unique pulse animations for each button
function getPulseAnimation(id: string): string {
  const num = parseInt(id.replace(/\D/g, "")) || 1;
  const variations = [
    "liveNeonPulse 2s ease-in-out infinite",
    "livePulseRing 1.5s ease-out infinite",
    "livePulseGlow 2s ease-in-out infinite",
    "liveSonarPing 2s ease-out infinite",
    "liveHeartbeat 1.5s ease-in-out infinite",
    "liveEnergyPulse 2s ease-in-out infinite",
    "liveRipple 1.5s ease-out infinite",
    "livePulseWave 2s ease-in-out infinite",
    "liveRadarPing 2s linear infinite",
    "livePulseExpand 1.8s ease-in-out infinite",
  ];
  return variations[num % variations.length];
}

// Unique glow animations for each button
function getGlowAnimation(id: string): string {
  const num = parseInt(id.replace(/\D/g, "")) || 1;
  const variations = [
    "liveGlowPulse 2s ease-in-out infinite",
    "liveNeonFlicker 1.5s ease-in-out infinite",
    "liveAuroraShift 4s ease-in-out infinite",
    "livePlasmaFlow 3s ease-in-out infinite",
    "liveHolographicShine 2s linear infinite",
    "liveElectricStorm 0.3s ease-in-out infinite",
    "liveGlowRotate 2s linear infinite",
    "liveGlowBreath 3s ease-in-out infinite",
    "liveGlowPulseDouble 2s ease-in-out infinite",
    "liveGlowWave 2.5s ease-in-out infinite",
  ];
  return variations[num % variations.length];
}

// Unique fill animations for each button
function getFillAnimation(id: string): string {
  const num = parseInt(id.replace(/\D/g, "")) || 1;
  const variations = [
    "liveFillSlide 1.5s ease-in-out infinite",
    "liveFillWipe 2s ease-in-out infinite",
    "liveGradientMove 3s ease infinite",
    "liveFillExpand 2s ease-in-out infinite",
    "liveFillReveal 2s ease-in-out infinite",
    "liveFillDiagonal 2s ease-in-out infinite",
    "liveLiquidFill 3s ease-in-out infinite",
    "liveFillPulse 2s ease-in-out infinite",
    "liveFillShimmer 2s linear infinite",
    "liveFillMagnetic 2.5s ease-in-out infinite",
  ];
  return variations[num % variations.length];
}

// Unique 3D animations for each button
function get3DAnimation(id: string): string {
  const num = parseInt(id.replace(/\D/g, "")) || 1;
  const variations = [
    "liveFlip3D 2s ease-in-out infinite",
    "liveTilt3D 2s ease-in-out infinite",
    "liveCubeRotate 3s ease-in-out infinite",
    "liveFloat3D 3s ease-in-out infinite",
    "livePerspectiveShift 2s ease-in-out infinite",
    "liveDepthPush 1.5s ease-in-out infinite",
    "liveCardFlip 2.5s ease-in-out infinite",
    "live3DWobble 2s ease-in-out infinite",
    "live3DSpin 4s linear infinite",
    "live3DBounce 2s ease-in-out infinite",
  ];
  return variations[num % variations.length];
}

// Unique icon animations for each button
function getIconAnimation(id: string): string {
  const num = parseInt(id.replace(/\D/g, "")) || 1;
  const variations = [
    "liveSpin 2s linear infinite",
    "liveBounce 1s ease-in-out infinite",
    "liveSwing 2s ease-in-out infinite",
    "liveHeartbeat 1.5s ease-in-out infinite",
    "liveFloat 3s ease-in-out infinite",
    "liveZap 0.5s ease-in-out infinite",
    "livePulseGlow 2s ease-in-out infinite",
    "liveJello 2s ease-in-out infinite",
    "liveRocket 2s ease-in-out infinite",
    "liveMagicSparkle 1.5s ease-in-out infinite",
  ];
  return variations[num % variations.length];
}
