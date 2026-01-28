import { useEffect } from "react";
import { animations } from "@/data/animations";
import { effects } from "@/data/effects";
import { buttonAnimations } from "@/data/buttons";

/**
 * Componente que injeta dinamicamente todos os CSS das animações no <head>
 * para que as classes funcionem automaticamente em toda a aplicação
 */
export function AnimationStyles() {
  useEffect(() => {
    // Combina todos os CSS das animações
    const animationCSS = animations.map((a) => a.cssCode).join("\n\n");
    const effectCSS = effects.map((e) => e.cssCode).join("\n\n");
    const buttonCSS = buttonAnimations.map((b) => b.cssCode).join("\n\n");

    const allCSS = `
/* ======================== */
/* ANIMATION LIBRARY STYLES */
/* ======================== */

/* === ANIMATIONS === */
${animationCSS}

/* === EFFECTS === */
${effectCSS}

/* === BUTTONS === */
${buttonCSS}
`;

    // Verifica se já existe uma tag de estilos
    const existingStyle = document.getElementById("animation-library-styles");
    if (existingStyle) {
      existingStyle.textContent = allCSS;
      return;
    }

    // Cria nova tag de estilos
    const style = document.createElement("style");
    style.id = "animation-library-styles";
    style.textContent = allCSS;
    document.head.appendChild(style);

    // Cleanup ao desmontar
    return () => {
      const styleTag = document.getElementById("animation-library-styles");
      if (styleTag) {
        styleTag.remove();
      }
    };
  }, []);

  return null;
}
