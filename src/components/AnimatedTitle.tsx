import { useMemo } from "react";

interface AnimatedTitleProps {
  text: string;
  variant: "fire" | "neon" | "rainbow";
}

export function AnimatedTitle({ text, variant }: AnimatedTitleProps) {
  const letters = useMemo(() => text.split(''), [text]);
  
  const getClassName = () => {
    switch (variant) {
      case "fire":
        return "animated-title-fire";
      case "neon":
        return "animated-title-neon";
      case "rainbow":
        return "animated-title-rainbow";
      default:
        return "animated-title-fire";
    }
  };
  
  return (
    <h1 className={getClassName()}>
      {letters.map((letter, index) => (
        <span
          key={index}
          style={{ '--i': index + 1 } as React.CSSProperties}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </h1>
  );
}
