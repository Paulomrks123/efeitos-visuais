import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { ButtonAnimation } from "@/data/buttons";
import { LiveBadge, AnimationTimeline } from "../shared";

interface RealisticButtonCardProps {
  button: ButtonAnimation;
  isPlaying?: boolean;
}

export function RealisticButtonCard({ button, isPlaying = true }: RealisticButtonCardProps) {
  const [replayKey, setReplayKey] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const previewColor = button.previewColor || "#00FFFF";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isPlaying || !isVisible) return;
    const interval = setInterval(() => setReplayKey(prev => prev + 1), 4000);
    return () => clearInterval(interval);
  }, [isPlaying, isVisible]);

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
    return { animation: `${animName} ${button.duration} infinite ease-in-out` };
  };

  // Generate stable random bubbles
  const bubbles = useMemo(() => 
    Array.from({ length: 6 }, (_, i) => ({
      size: 12 + (i * 7) % 20,
      x: 10 + (i * 17) % 80,
      delay: i * 0.6,
      duration: 3 + (i * 0.5) % 2,
      opacity: 0.15 + (i * 0.05) % 0.2,
    })), []
  );

  const orbs = useMemo(() => 
    Array.from({ length: 3 }, (_, i) => ({
      size: 40 + i * 25,
      x: 20 + i * 30,
      y: 30 + (i * 20) % 40,
      delay: i * 1.2,
    })), []
  );

  return (
    <div ref={containerRef} className="flex flex-col gap-2 w-full">
      {/* Top bar */}
      <div className="flex items-center justify-between px-2">
        <LiveBadge color={previewColor} size="sm" />
        <motion.div
          className="text-[10px] font-mono px-2 py-0.5 rounded-full"
          style={{
            background: `${previewColor}15`,
            color: previewColor,
            border: `1px solid ${previewColor}30`,
            backdropFilter: 'blur(8px)',
          }}
        >
          {button.category.toUpperCase()}
        </motion.div>
      </div>

      <div className="relative w-full h-full min-h-[120px] overflow-hidden rounded-2xl">
        <style>{getInlineKeyframes()}</style>

        {/* === GLASSMORPHISM BACKGROUND === */}
        {/* Base dark glass layer */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)`,
            backdropFilter: 'blur(20px)',
          }}
        />

        {/* Soft color orbs behind glass */}
        {orbs.map((orb, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle, ${previewColor}30, transparent 70%)`,
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              filter: 'blur(15px)',
            }}
            animate={{
              x: [0, 15, -10, 0],
              y: [0, -10, 8, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: orb.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Floating glass bubbles */}
        {bubbles.map((bubble, i) => (
          <motion.div
            key={`bubble-${i}`}
            className="absolute rounded-full"
            style={{
              width: bubble.size,
              height: bubble.size,
              background: `linear-gradient(135deg, rgba(255,255,255,${bubble.opacity}), rgba(255,255,255,0.02))`,
              border: `1px solid rgba(255,255,255,0.08)`,
              backdropFilter: 'blur(4px)',
              left: `${bubble.x}%`,
              bottom: -10,
            }}
            animate={{
              y: [0, -140],
              x: [0, (i % 2 === 0 ? 15 : -15)],
              opacity: [0, bubble.opacity + 0.1, 0],
              scale: [0.5, 1, 0.7],
            }}
            transition={{
              duration: bubble.duration,
              repeat: Infinity,
              delay: bubble.delay,
              ease: "easeOut",
            }}
          />
        ))}

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(0deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            opacity: 0.5,
          }}
        />

        {/* Glass border glow */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            border: `1px solid ${previewColor}20`,
            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.05), 0 0 30px ${previewColor}08`,
          }}
        />

        {/* Refraction light streak */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.04) 45%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 55%, transparent 65%)`,
          }}
          animate={{ x: ['-100%', '200%'] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 2,
          }}
        />

        {/* === MAIN BUTTON PREVIEW === */}
        <div className="relative z-10 flex items-center justify-center h-full min-h-[120px]">
          <motion.button
            key={replayKey}
            className="relative overflow-hidden font-semibold text-sm"
            style={{
              padding: '12px 28px',
              borderRadius: '14px',
              background: `linear-gradient(135deg, ${previewColor}20, ${previewColor}08)`,
              backdropFilter: 'blur(12px)',
              border: `1px solid ${previewColor}40`,
              color: previewColor,
              boxShadow: `
                0 0 20px ${previewColor}15,
                0 8px 32px rgba(0,0,0,0.3),
                inset 0 1px 0 rgba(255,255,255,0.1)
              `,
              ...getPreviewStyle(),
            }}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.06 }}
          >
            {/* Inner glass shine */}
            <div
              className="absolute inset-0 rounded-[14px] pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 50%)',
              }}
            />
            <span className="relative flex items-center gap-2">
              {button.category === "icon" && <span>✨</span>}
              {button.name.split(' ').slice(0, 2).join(' ')}
            </span>
          </motion.button>
        </div>
      </div>

      {/* Timeline */}
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
