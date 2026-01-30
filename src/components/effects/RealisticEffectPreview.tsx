import { Effect } from "@/data/effects";
import {
  GlassmorphismCard,
  NeumorphismCard,
  GradientCard,
  FilterCard,
  TextEffectCard,
  ImageEffectCard,
} from "./ui-templates";

interface RealisticEffectPreviewProps {
  effect: Effect;
  size?: "sm" | "md" | "lg";
}

export function RealisticEffectPreview({ effect, size = "md" }: RealisticEffectPreviewProps) {
  switch (effect.category) {
    case "glassmorphism":
      return <GlassmorphismCard effect={effect} size={size} />;
    
    case "neumorphism":
      return <NeumorphismCard effect={effect} size={size} />;
    
    case "gradients":
      return <GradientCard effect={effect} size={size} />;
    
    case "filters":
      return <FilterCard effect={effect} size={size} />;
    
    case "text":
      return <TextEffectCard effect={effect} size={size} />;
    
    case "images":
      return <ImageEffectCard effect={effect} size={size} />;
    
    default:
      return <GradientCard effect={effect} size={size} />;
  }
}
