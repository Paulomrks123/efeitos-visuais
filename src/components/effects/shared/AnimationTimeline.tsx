import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimationTimelineProps {
  duration: number; // in seconds
  color?: string;
  isPlaying?: boolean;
  onComplete?: () => void;
  showLabel?: boolean;
}

export function AnimationTimeline({ 
  duration, 
  color = "#00FFFF",
  isPlaying = true,
  onComplete,
  showLabel = true,
}: AnimationTimelineProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("start");

  useEffect(() => {
    if (!isPlaying) {
      setProgress(0);
      setPhase("paused");
      return;
    }

    setProgress(0);
    setPhase("running");
    
    const startTime = Date.now();
    const durationMs = duration * 1000;
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / durationMs) * 100, 100);
      
      setProgress(newProgress);
      
      if (newProgress < 30) setPhase("start");
      else if (newProgress < 70) setPhase("running");
      else if (newProgress < 100) setPhase("ending");
      else setPhase("complete");
      
      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        onComplete?.();
        // Reset for loop
        setTimeout(() => {
          setProgress(0);
          setPhase("start");
        }, 500);
      }
    };
    
    const animationFrame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration, isPlaying, onComplete]);

  const phaseEmoji = {
    start: "▶️",
    running: "⏳",
    ending: "🏁",
    complete: "✅",
    paused: "⏸️",
  };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between items-center mb-1">
          <span className="text-[8px] text-muted-foreground flex items-center gap-1">
            <span>{phaseEmoji[phase as keyof typeof phaseEmoji]}</span>
            <span className="capitalize">{phase}</span>
          </span>
          <span className="text-[8px] font-mono" style={{ color }}>
            {(duration * (progress / 100)).toFixed(1)}s / {duration}s
          </span>
        </div>
      )}
      
      <div 
        className="relative h-1 rounded-full overflow-hidden"
        style={{ background: `${color}20` }}
      >
        {/* Progress bar */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ 
            background: `linear-gradient(90deg, ${color}, ${color}CC)`,
            width: `${progress}%`,
            boxShadow: `0 0 10px ${color}60`,
          }}
          transition={{ duration: 0.1 }}
        />
        
        {/* Glow effect at progress point */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
          style={{
            left: `calc(${progress}% - 4px)`,
            background: color,
            boxShadow: `0 0 8px ${color}, 0 0 16px ${color}80`,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      </div>
    </div>
  );
}
