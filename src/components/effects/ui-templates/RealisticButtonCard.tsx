import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ButtonAnimation } from "@/data/buttons";
import { LiveBadge, CSSPropertyIndicator, AnimationTimeline } from "../shared";

interface RealisticButtonCardProps {
  button: ButtonAnimation;
  isPlaying?: boolean;
}

export function RealisticButtonCard({ button, isPlaying = true }: RealisticButtonCardProps) {
  const [replayKey, setReplayKey] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const previewColor = button.previewColor || "#00FFFF";

  // Intersection Observer for performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-replay animation every 4 seconds (paused when not visible)
  useEffect(() => {
    if (!isPlaying || !isVisible) return;
    const interval = setInterval(() => {
      setReplayKey(prev => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, isVisible]);
  // Extract keyframes from CSS code and inject
  const getInlineKeyframes = () => {
    const keyframesMatch = button.cssCode.match(/@keyframes\s+(\w+)\s*\{([^}]+\{[^}]+\})+\s*\}/g);
    return keyframesMatch ? keyframesMatch.join('\n') : "";
  };

  const getAnimationName = () => {
    const match = button.cssCode.match(/@keyframes\s+(\w+)/);
    return match ? match[1] : "";
  };

  const getPreviewStyle = (): React.CSSProperties => {
    const animName = getAnimationName();
    if (!animName || !isPlaying) return {};
    
    return {
      animation: `${animName} ${button.duration} infinite ease-in-out`,
    };
  };

  // Category-specific background effects
  const getCategoryEffects = () => {
    switch (button.category) {
      case "glow":
        return (
          <>
            {/* Pulsing glow rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 80 + i * 30,
                  height: 80 + i * 30,
                  border: `2px solid ${previewColor}`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Glow particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: 4 + Math.random() * 4,
                  height: 4 + Math.random() * 4,
                  background: previewColor,
                  filter: `blur(1px)`,
                }}
                animate={{
                  x: [0, Math.sin(i * 45 * Math.PI / 180) * 60],
                  y: [0, Math.cos(i * 45 * Math.PI / 180) * 60],
                  opacity: [0.8, 0],
                  scale: [1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut",
                }}
                initial={{ left: '50%', top: '50%', x: 0, y: 0 }}
              />
            ))}
          </>
        );

      case "fill":
        return (
          <>
            {/* Liquid wave background */}
            <motion.div
              className="absolute bottom-0 left-0 right-0"
              style={{
                height: '60%',
                background: `linear-gradient(180deg, transparent, ${previewColor}22)`,
                borderRadius: '100% 100% 0 0',
              }}
              animate={{
                scaleX: [1, 1.1, 0.9, 1],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Rising bubbles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 6 + i * 2,
                  height: 6 + i * 2,
                  background: `${previewColor}66`,
                  left: `${20 + i * 15}%`,
                  bottom: 0,
                }}
                animate={{
                  y: [0, -80],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 2 + i * 0.3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut",
                }}
              />
            ))}
          </>
        );

      case "3d":
        return (
          <>
            {/* Perspective grid */}
            <div
              className="absolute inset-0"
              style={{
                background: `
                  linear-gradient(90deg, ${previewColor}11 1px, transparent 1px),
                  linear-gradient(0deg, ${previewColor}11 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                transform: 'perspective(500px) rotateX(60deg)',
                transformOrigin: 'bottom center',
                opacity: 0.5,
              }}
            />
            {/* Floating depth layers */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-lg"
                style={{
                  width: 60 - i * 10,
                  height: 30 - i * 5,
                  background: `${previewColor}${(10 + i * 5).toString(16)}`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: i,
                }}
                animate={{
                  z: [0, -20, 0],
                  rotateX: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </>
        );

      case "pulse":
        return (
          <>
            {/* Heartbeat monitor line */}
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 200 100"
              style={{ opacity: 0.4 }}
            >
              <motion.path
                d="M0,50 L30,50 L40,30 L50,70 L60,20 L70,80 L80,50 L100,50 L200,50"
                fill="none"
                stroke={previewColor}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </svg>
            {/* Pulse circles */}
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 60,
                  height: 60,
                  border: `2px solid ${previewColor}`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  scale: [1, 2],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.75,
                  ease: "easeOut",
                }}
              />
            ))}
          </>
        );

      case "scale":
        return (
          <>
            {/* Zoom lines */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  width: 2,
                  height: 20,
                  background: `linear-gradient(to top, transparent, ${previewColor})`,
                  left: '50%',
                  top: '50%',
                  transformOrigin: 'center 50px',
                  rotate: `${i * 45}deg`,
                }}
                animate={{
                  scaleY: [0.5, 1.5, 0.5],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
            {/* Expanding squares */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`square-${i}`}
                className="absolute"
                style={{
                  width: 40,
                  height: 40,
                  border: `1px solid ${previewColor}`,
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 45, 0],
                  opacity: [0.4, 0.1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </>
        );

      case "icon":
        return (
          <>
            {/* Orbiting icons */}
            {["⚡", "✨", "🔥", "💫"].map((emoji, i) => (
              <motion.div
                key={i}
                className="absolute text-sm"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                animate={{
                  rotate: [0, 360],
                  x: [0, Math.cos(i * 90 * Math.PI / 180) * 50],
                  y: [0, Math.sin(i * 90 * Math.PI / 180) * 50],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "linear",
                }}
              >
                {emoji}
              </motion.div>
            ))}
            {/* Magic sparkles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute"
                style={{
                  width: 4,
                  height: 4,
                  background: previewColor,
                  borderRadius: '50%',
                  left: `${20 + i * 12}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </>
        );

      default:
        return (
          <>
            {/* Default animated background */}
            <motion.div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${previewColor}22, transparent 70%)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        );
    }
  };

  return (
    <div ref={containerRef} className="flex flex-col gap-2 w-full">
      {/* Top bar with Live badge and CSS properties */}
      <div className="flex items-center justify-between px-2">
        <LiveBadge color={previewColor} size="sm" />
        <CSSPropertyIndicator cssCode={button.cssCode} color={previewColor} maxProperties={2} />
      </div>
      
      <div className="relative w-full h-full min-h-[120px] overflow-hidden rounded-xl">
      {/* Inject keyframes */}
      <style>{getInlineKeyframes()}</style>

      {/* Animated background based on category */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, ${previewColor}15, transparent 70%)`,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Category-specific effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        {getCategoryEffects()}
      </div>

      {/* Corner accents */}
      {[0, 1, 2, 3].map((corner) => (
        <motion.div
          key={corner}
          className="absolute w-6 h-6"
          style={{
            borderColor: previewColor,
            borderWidth: 2,
            borderStyle: 'solid',
            borderRadius: 2,
            ...(corner === 0 ? { top: 8, left: 8, borderRight: 'none', borderBottom: 'none' } : {}),
            ...(corner === 1 ? { top: 8, right: 8, borderLeft: 'none', borderBottom: 'none' } : {}),
            ...(corner === 2 ? { bottom: 8, left: 8, borderRight: 'none', borderTop: 'none' } : {}),
            ...(corner === 3 ? { bottom: 8, right: 8, borderLeft: 'none', borderTop: 'none' } : {}),
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: corner * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main button preview */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.button
          key={replayKey}
          className="px-6 py-3 rounded-lg font-semibold text-sm border-2 shadow-lg"
          style={{
            background: `linear-gradient(135deg, ${previewColor}, ${previewColor}88)`,
            borderColor: `${previewColor}66`,
            color: '#0A0A0F',
            boxShadow: `0 0 20px ${previewColor}44, 0 4px 12px rgba(0,0,0,0.3)`,
            ...getPreviewStyle(),
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
          }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="flex items-center gap-2">
            {button.category === "icon" && <span>✨</span>}
            {button.name.split(' ').slice(0, 2).join(' ')}
          </span>
        </motion.button>
      </div>

      {/* Shine sweep effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(105deg, transparent 40%, ${previewColor}22 45%, ${previewColor}44 50%, ${previewColor}22 55%, transparent 60%)`,
        }}
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 1,
        }}
      />

      {/* Category badge */}
      <motion.div
        className="absolute top-2 right-2 text-[10px] font-mono px-2 py-0.5 rounded"
        style={{
          background: `${previewColor}22`,
          color: previewColor,
          border: `1px solid ${previewColor}44`,
        }}
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {button.category.toUpperCase()}
      </motion.div>
      </div>
      
      {/* Animation timeline */}
      <div className="px-2">
        <AnimationTimeline 
          duration={4} 
          color={previewColor} 
          isPlaying={isPlaying && isVisible}
          showLabel={false}
        />
      </div>
    </div>
  );
}
