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
      // Image effects preview with animal images
      const imageId = parseInt(effect.id.replace("I-", "")) || 1;
      const imageAnimations = [
        "imgFadeIn", "imgZoomReveal", "imgSlideLeft", "imgSlideRight",
        "imgFlipH", "imgFlipV", "imgBlurClear", "imgRotateIn",
        "imgBounceIn", "imgSlideUp", "imgCurtain", "imgCircleExpand",
        "imgDiagonalWipe", "imgShutter", "imgGlitchReveal", "imgTvStatic",
        "imgPolaroidDrop", "imgCardFlip", "imgPixelDissolve", "imgKenBurns",
        "imgNeonFrame", "imgSplitReveal", "imgElasticPop", "imgWaveDistort",
        "imgHexagon", "imgParallaxFloat", "imgSpotlight", "imgVintageFilm",
        "imgHoloShine", "imgPortal",
        // New 20 animations (I-31 to I-50)
        "imgDnaSpiral", "imgOrigami", "imgInkDrop", "imgKaleidoscope",
        "imgBrokenGlass", "imgMagnetic", "imgNeonScan", "imgSmokeReveal",
        "imgLightning", "imgPrism", "imgCyberGlitch", "imgVortex",
        "imgMatrix", "imgFlame", "imgRippleWater", "imgDiamond",
        "imgAurora", "imgShockwave", "imgPixelRain", "imgBlackhole"
      ];
      
      // Different animal emojis for each image effect (50 total)
      const animalEmojis = [
        "🦁", "🐯", "🐻", "🦊", "🐺", "🦄", "🐸", "🦋",
        "🦅", "🐬", "🦈", "🐙", "🦜", "🦩", "🐧", "🦥",
        "🦘", "🐨", "🦒", "🦓", "🐆", "🦏", "🦛", "🐊",
        "🦚", "🦢", "🦃", "🐓", "🦔", "🐢",
        // New 20 animals
        "🐉", "🦖", "🦕", "🐋", "🦭", "🐘", "🦬", "🐪",
        "🦌", "🐃", "🦙", "🦫", "🦡", "🦨", "🦝", "🐇",
        "🦤", "🪿", "🐦", "🦇"
      ];
      
      // Animal image URLs from Unsplash (50 total)
      const animalImages = [
        "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=200&h=200&fit=crop", // lion
        "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=200&h=200&fit=crop", // tiger
        "https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=200&h=200&fit=crop", // bear
        "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=200&h=200&fit=crop", // fox
        "https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=200&h=200&fit=crop", // wolf
        "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=200&h=200&fit=crop", // horse
        "https://images.unsplash.com/photo-1559253664-ca249d4608c6?w=200&h=200&fit=crop", // frog
        "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=200&h=200&fit=crop", // butterfly
        "https://images.unsplash.com/photo-1611689342806-0863700ce1e4?w=200&h=200&fit=crop", // eagle
        "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=200&h=200&fit=crop", // dolphin
        "https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=200&h=200&fit=crop", // shark
        "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=200&h=200&fit=crop", // octopus
        "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=200&h=200&fit=crop", // parrot
        "https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=200&h=200&fit=crop", // flamingo
        "https://images.unsplash.com/photo-1551986782-d0169b3f8fa7?w=200&h=200&fit=crop", // penguin
        "https://images.unsplash.com/photo-1577936003568-4d2ad79eb789?w=200&h=200&fit=crop", // sloth
        "https://images.unsplash.com/photo-1555169062-013468b47731?w=200&h=200&fit=crop", // kangaroo
        "https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?w=200&h=200&fit=crop", // koala
        "https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=200&h=200&fit=crop", // giraffe
        "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=200&h=200&fit=crop", // zebra
        "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=200&h=200&fit=crop", // leopard
        "https://images.unsplash.com/photo-1598894000329-23c07728de99?w=200&h=200&fit=crop", // rhino
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=200&h=200&fit=crop", // dog
        "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=200&h=200&fit=crop", // crocodile
        "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=200&h=200&fit=crop", // peacock
        "https://images.unsplash.com/photo-1524024973431-2ad916746881?w=200&h=200&fit=crop", // swan
        "https://images.unsplash.com/photo-1612024782955-49fae79e42bb?w=200&h=200&fit=crop", // turkey
        "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=200&h=200&fit=crop", // rooster
        "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=200&h=200&fit=crop", // hedgehog
        "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=200&h=200&fit=crop", // turtle
        // New 20 animal images
        "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=200&h=200&fit=crop", // dragon/lizard
        "https://images.unsplash.com/photo-1606567595334-d39972c85dfd?w=200&h=200&fit=crop", // dinosaur toy
        "https://images.unsplash.com/photo-1519069060891-f8c50519bf22?w=200&h=200&fit=crop", // elephant
        "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=200&h=200&fit=crop", // whale
        "https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?w=200&h=200&fit=crop", // seal
        "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=200&h=200&fit=crop", // elephant 2
        "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=200&h=200&fit=crop", // bison
        "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=200&h=200&fit=crop", // camel
        "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=200&h=200&fit=crop", // deer
        "https://images.unsplash.com/photo-1557431177-36141475c676?w=200&h=200&fit=crop", // buffalo
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=200&h=200&fit=crop", // llama
        "https://images.unsplash.com/photo-1612024782955-49fae79e42bb?w=200&h=200&fit=crop", // beaver
        "https://images.unsplash.com/photo-1497206365907-f5e630693df0?w=200&h=200&fit=crop", // badger
        "https://images.unsplash.com/photo-1504173010664-32509aeebb62?w=200&h=200&fit=crop", // skunk
        "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?w=200&h=200&fit=crop", // raccoon
        "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=200&h=200&fit=crop", // rabbit
        "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=200&h=200&fit=crop", // dodo
        "https://images.unsplash.com/photo-1555169062-013468b47731?w=200&h=200&fit=crop", // goose
        "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=200&h=200&fit=crop", // bird
        "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?w=200&h=200&fit=crop", // bat
      ];
      
      const animName = imageAnimations[(imageId - 1) % imageAnimations.length];
      const animalEmoji = animalEmojis[(imageId - 1) % animalEmojis.length];
      const animalImage = animalImages[(imageId - 1) % animalImages.length];
      
      return (
        <div
          className="relative overflow-hidden rounded-lg"
          style={{
            width: dimensions.width + 20,
            height: dimensions.height + 10,
          }}
        >
          {/* Animal image with effect animation */}
          <div
            className="w-full h-full rounded-lg overflow-hidden relative"
            style={{
              animation: `${animName} 2s ease-in-out infinite`,
              boxShadow: `0 0 20px ${previewColor}44`,
              border: `2px solid ${previewColor}66`,
            }}
          >
            <img
              src={animalImage}
              alt={`Animal ${imageId}`}
              className="w-full h-full object-cover"
              style={{
                filter: `drop-shadow(0 0 5px ${previewColor})`,
              }}
              onError={(e) => {
                // Fallback to emoji if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Emoji fallback */}
            <div 
              className="hidden absolute inset-0 flex items-center justify-center text-4xl"
              style={{
                background: `linear-gradient(135deg, ${previewColor}40, ${previewColor}80)`,
              }}
            >
              {animalEmoji}
            </div>
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
