import { CSSProperties, useState } from "react";
import { Effect } from "@/data/effects";
import { motion, AnimatePresence } from "framer-motion";

interface EnhancedEffectPreviewProps {
  effect: Effect;
  size?: "sm" | "md" | "lg" | "xl";
  showLabel?: boolean;
  interactive?: boolean;
}

const sizeConfig = {
  sm: { width: 100, height: 80, fontSize: "0.625rem", padding: 12 },
  md: { width: 140, height: 100, fontSize: "0.75rem", padding: 16 },
  lg: { width: 180, height: 120, fontSize: "0.875rem", padding: 20 },
  xl: { width: 240, height: 160, fontSize: "1rem", padding: 24 },
};

// Get unique gradient for each effect based on ID
function getEffectGradient(effect: Effect): { primary: string; secondary: string; accent: string } {
  const id = effect.id;
  const category = effect.category;
  
  // Category-based gradient palettes
  const palettes: Record<string, { primary: string; secondary: string; accent: string }[]> = {
    glassmorphism: [
      { primary: "#00D9FF", secondary: "#00FFA3", accent: "#00FFFF" },
      { primary: "#FF6B9D", secondary: "#C850C0", accent: "#FF00FF" },
      { primary: "#4FACFE", secondary: "#00F2FE", accent: "#00BFFF" },
      { primary: "#A8EDEA", secondary: "#FED6E3", accent: "#FFB6C1" },
      { primary: "#667EEA", secondary: "#764BA2", accent: "#8B5CF6" },
    ],
    neumorphism: [
      { primary: "#E0E5EC", secondary: "#C5CCD6", accent: "#A0AEC0" },
      { primary: "#F5F7FA", secondary: "#E4E8ED", accent: "#CBD5E1" },
      { primary: "#DFE6E9", secondary: "#B2BEC3", accent: "#636E72" },
      { primary: "#FAF0E6", secondary: "#E8D4C4", accent: "#C4A77D" },
      { primary: "#E8F4FD", secondary: "#C6E4F5", accent: "#93C5FD" },
    ],
    filters: [
      { primary: "#FF0080", secondary: "#7928CA", accent: "#FF00FF" },
      { primary: "#F7971E", secondary: "#FFD200", accent: "#FFA500" },
      { primary: "#00C9FF", secondary: "#92FE9D", accent: "#00FF88" },
      { primary: "#FC466B", secondary: "#3F5EFB", accent: "#8B5CF6" },
      { primary: "#0099F7", secondary: "#F11712", accent: "#FF4444" },
    ],
    gradients: [
      { primary: "#FF416C", secondary: "#FF4B2B", accent: "#FF6B6B" },
      { primary: "#11998E", secondary: "#38EF7D", accent: "#00FF88" },
      { primary: "#6441A5", secondary: "#2A0845", accent: "#8B5CF6" },
      { primary: "#FF512F", secondary: "#F09819", accent: "#FFD700" },
      { primary: "#1A2980", secondary: "#26D0CE", accent: "#00FFFF" },
    ],
    text: [
      { primary: "#FF00FF", secondary: "#00FFFF", accent: "#FFFF00" },
      { primary: "#FF6B6B", secondary: "#4ECDC4", accent: "#45B7D1" },
      { primary: "#A855F7", secondary: "#EC4899", accent: "#F472B6" },
      { primary: "#22D3EE", secondary: "#818CF8", accent: "#C084FC" },
      { primary: "#F59E0B", secondary: "#EF4444", accent: "#F97316" },
    ],
    images: [
      { primary: "#00FF88", secondary: "#00BFFF", accent: "#00FFFF" },
      { primary: "#FF0080", secondary: "#8B00FF", accent: "#FF00FF" },
      { primary: "#FFD700", secondary: "#FF8C00", accent: "#FF4500" },
      { primary: "#00CED1", secondary: "#20B2AA", accent: "#48D1CC" },
      { primary: "#9370DB", secondary: "#8A2BE2", accent: "#BA55D3" },
    ],
  };

  // Get numeric part from ID
  const numMatch = id.match(/\d+/);
  const num = numMatch ? parseInt(numMatch[0]) : 1;
  const palette = palettes[category] || palettes.gradients;
  const colorSet = palette[(num - 1) % palette.length];
  
  return colorSet;
}

export function EnhancedEffectPreview({ 
  effect, 
  size = "md", 
  showLabel = true,
  interactive = true 
}: EnhancedEffectPreviewProps) {
  const [isHovered, setIsHovered] = useState(false);
  const config = sizeConfig[size];
  const colors = getEffectGradient(effect);

  const baseContainerStyle: CSSProperties = {
    width: config.width,
    minHeight: config.height,
    position: "relative",
    overflow: "hidden",
    borderRadius: 16,
  };

  const renderGlassmorphism = () => (
    <motion.div
      className="relative w-full h-full"
      style={baseContainerStyle}
      animate={{ scale: isHovered ? 1.02 : 1 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${colors.primary}30, ${colors.secondary}30, ${colors.accent}30)`,
          backgroundSize: "400% 400%",
          animation: "liveGradientMove 6s ease infinite",
        }}
      />
      
      {/* Floating orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 10 + i * 6,
            height: 10 + i * 6,
            background: `radial-gradient(circle, ${colors.primary}80, transparent)`,
            left: `${10 + i * 18}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
      
      {/* Glass card */}
      <div
        className="absolute inset-2 backdrop-blur-xl rounded-xl flex flex-col items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}10)`,
          border: `1px solid ${colors.primary}40`,
          boxShadow: `
            0 8px 32px ${colors.primary}20,
            inset 0 1px 0 ${colors.primary}30
          `,
        }}
      >
        {/* Light reflection */}
        <div 
          className="absolute top-0 left-0 right-0 h-1/3 rounded-t-xl opacity-50"
          style={{
            background: `linear-gradient(180deg, ${colors.primary}20, transparent)`,
          }}
        />
        {showLabel && (
          <>
            <span style={{ color: colors.primary, fontSize: config.fontSize, fontWeight: 700 }}>
              GLASS
            </span>
            <span style={{ color: colors.secondary, fontSize: "0.625rem", opacity: 0.8 }}>
              {effect.name}
            </span>
          </>
        )}
      </div>
    </motion.div>
  );

  const renderNeumorphism = () => (
    <motion.div
      style={{
        ...baseContainerStyle,
        background: `linear-gradient(145deg, ${colors.primary}, ${colors.secondary})`,
      }}
      animate={{ 
        boxShadow: isHovered 
          ? `12px 12px 24px ${colors.accent}40, -12px -12px 24px rgba(255,255,255,0.15), inset 2px 2px 4px rgba(255,255,255,0.1)`
          : `8px 8px 16px ${colors.accent}30, -8px -8px 16px rgba(255,255,255,0.1)`,
      }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-center"
    >
      <motion.div
        className="rounded-lg flex items-center justify-center"
        style={{
          width: "70%",
          height: "60%",
          background: `linear-gradient(145deg, ${colors.secondary}, ${colors.primary})`,
          boxShadow: `inset 4px 4px 8px rgba(0,0,0,0.15), inset -4px -4px 8px rgba(255,255,255,0.1)`,
        }}
        animate={{ scale: isHovered ? 0.95 : 1 }}
      >
        {showLabel && (
          <span style={{ color: "#374151", fontSize: config.fontSize, fontWeight: 600 }}>
            SOFT
          </span>
        )}
      </motion.div>
    </motion.div>
  );

  const renderFilters = () => (
    <motion.div
      style={baseContainerStyle}
      className="flex items-center justify-center"
    >
      {/* Background pattern */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, ${colors.primary}40 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, ${colors.secondary}40 0%, transparent 50%),
            linear-gradient(45deg, ${colors.accent}20, transparent)
          `,
        }}
      />
      
      {/* Animated filter effect */}
      <motion.div
        className="rounded-xl"
        style={{
          width: "80%",
          height: "80%",
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          boxShadow: `0 0 30px ${colors.primary}50`,
        }}
        animate={{
          filter: [
            "hue-rotate(0deg) saturate(1)",
            "hue-rotate(30deg) saturate(1.3)",
            "hue-rotate(0deg) saturate(1)",
          ],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-0.5"
        style={{ background: `linear-gradient(90deg, transparent, ${colors.accent}, transparent)` }}
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );

  const renderGradients = () => (
    <motion.div
      style={baseContainerStyle}
      animate={{ 
        backgroundPosition: isHovered ? ["0% 50%", "100% 50%"] : "0% 50%",
      }}
      transition={{ duration: isHovered ? 1 : 0 }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary}, ${colors.accent}, ${colors.primary})`,
          backgroundSize: "400% 400%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Overlay pattern */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-30"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 30%, rgba(0,0,0,0.3) 100%)`,
        }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          boxShadow: [
            `0 0 20px ${colors.primary}40, inset 0 0 20px ${colors.secondary}20`,
            `0 0 40px ${colors.secondary}50, inset 0 0 30px ${colors.accent}30`,
            `0 0 20px ${colors.primary}40, inset 0 0 20px ${colors.secondary}20`,
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {showLabel && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span 
            className="font-bold text-white drop-shadow-lg"
            style={{ fontSize: config.fontSize, textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          >
            GRADIENT
          </span>
        </div>
      )}
    </motion.div>
  );

  const renderText = () => {
    const text = "TEXTO";
    return (
      <motion.div
        style={{
          ...baseContainerStyle,
          background: `radial-gradient(circle at center, ${colors.primary}15 0%, transparent 70%)`,
        }}
        className="flex items-center justify-center"
      >
        <div className="flex">
          {text.split("").map((letter, i) => (
            <motion.span
              key={i}
              className="font-bold"
              style={{
                fontSize: size === "xl" ? "2rem" : size === "lg" ? "1.5rem" : "1.25rem",
                color: colors.primary,
                textShadow: `0 0 10px ${colors.primary}, 0 0 20px ${colors.secondary}`,
              }}
              animate={{
                y: [-3, 3, -3],
                color: [colors.primary, colors.secondary, colors.accent, colors.primary],
                textShadow: [
                  `0 0 10px ${colors.primary}`,
                  `0 0 20px ${colors.secondary}`,
                  `0 0 15px ${colors.accent}`,
                  `0 0 10px ${colors.primary}`,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.div>
    );
  };

  const renderImages = () => {
    const imageId = parseInt(effect.id.replace("I-", "")) || 1;
    const animalEmojis = ["🦁", "🐯", "🐻", "🦊", "🐺", "🦄", "🐸", "🦋", "🦅", "🐬"];
    const emoji = animalEmojis[(imageId - 1) % animalEmojis.length];
    
    return (
      <motion.div
        style={baseContainerStyle}
        className="flex items-center justify-center"
      >
        {/* Animated frame */}
        <motion.div
          className="absolute inset-1 rounded-xl"
          style={{ border: `2px solid ${colors.primary}` }}
          animate={{
            borderColor: [colors.primary, colors.secondary, colors.accent, colors.primary],
            boxShadow: [
              `0 0 10px ${colors.primary}40`,
              `0 0 20px ${colors.secondary}50`,
              `0 0 15px ${colors.accent}40`,
              `0 0 10px ${colors.primary}40`,
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Content */}
        <motion.div
          className="flex flex-col items-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-3xl">{emoji}</span>
          {showLabel && (
            <span 
              className="text-xs mt-1 font-medium"
              style={{ color: colors.primary }}
            >
              IMG
            </span>
          )}
        </motion.div>
        
        {/* Glitch lines */}
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{ background: colors.accent, top: "30%" }}
          animate={{ opacity: [0, 1, 0], scaleX: [0, 1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
        />
      </motion.div>
    );
  };

  const renderPreview = () => {
    switch (effect.category) {
      case "glassmorphism":
        return renderGlassmorphism();
      case "neumorphism":
        return renderNeumorphism();
      case "filters":
        return renderFilters();
      case "gradients":
        return renderGradients();
      case "text":
        return renderText();
      case "images":
        return renderImages();
      default:
        return renderGradients();
    }
  };

  return (
    <div
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
      className="relative"
    >
      <AnimatePresence>
        {renderPreview()}
      </AnimatePresence>
    </div>
  );
}
