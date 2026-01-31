import { motion } from "framer-motion";

interface LiveBadgeProps {
  color?: string;
  size?: "sm" | "md";
}

export function LiveBadge({ color = "#00FF88", size = "sm" }: LiveBadgeProps) {
  const sizes = {
    sm: { container: "px-2 py-0.5", dot: "w-1.5 h-1.5", text: "text-[8px]" },
    md: { container: "px-2.5 py-1", dot: "w-2 h-2", text: "text-[10px]" },
  };

  return (
    <motion.div
      className={`flex items-center gap-1.5 rounded-full backdrop-blur-md ${sizes[size].container}`}
      style={{
        background: `${color}15`,
        border: `1px solid ${color}40`,
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={`${sizes[size].dot} rounded-full`}
        style={{ background: color, boxShadow: `0 0 8px ${color}` }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.6, 1],
        }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className={`${sizes[size].text} font-bold uppercase tracking-wider`} style={{ color }}>
        Live
      </span>
    </motion.div>
  );
}
