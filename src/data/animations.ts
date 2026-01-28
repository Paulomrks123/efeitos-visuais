export interface Animation {
  id: string;
  name: string;
  description: string;
  category: "futuristic" | "modern" | "stylish" | "vibrant";
  cssCode: string;
  htmlExample: string;
  animationClass: string;
}

export const animations: Animation[] = [
  // CATEGORIA 1: FUTURISTA
  {
    id: "F-01",
    name: "Neon Pulse",
    description: "Brilho pulsante em texto ou borda com efeito neon cyberpunk.",
    category: "futuristic",
    animationClass: "animate-neon-pulse text-primary",
    htmlExample: `<span className="animate-neon-pulse text-primary text-4xl font-bold">
  NEON
</span>`,
    cssCode: `@keyframes neon-pulse {
  0%, 100% { 
    filter: drop-shadow(0 0 2px #0ff) 
            drop-shadow(0 0 8px #0ff); 
  }
  50% { 
    filter: drop-shadow(0 0 4px #0ff) 
            drop-shadow(0 0 20px #0ff); 
  }
}

.animate-neon-pulse {
  animation: neon-pulse 2s ease-in-out infinite;
}`,
  },
  {
    id: "F-02",
    name: "Glitch Text",
    description: "Efeito de falha digital em texto, estilo cyberpunk.",
    category: "futuristic",
    animationClass: "animate-glitch",
    htmlExample: `<span className="animate-glitch text-4xl font-bold relative">
  GLITCH
</span>`,
    cssCode: `@keyframes glitch {
  0%, 100% { 
    clip-path: inset(40% 0 40% 0);
    transform: translate(0);
  }
  20% { 
    clip-path: inset(20% 0 60% 0);
    transform: translate(-2px, 2px);
  }
  40% { 
    clip-path: inset(60% 0 10% 0);
    transform: translate(2px, -2px);
  }
  60% { 
    clip-path: inset(10% 0 70% 0);
    transform: translate(-1px, 1px);
  }
  80% { 
    clip-path: inset(80% 0 5% 0);
    transform: translate(1px, -1px);
  }
}

.animate-glitch {
  animation: glitch 0.5s infinite;
}`,
  },
  {
    id: "F-03",
    name: "Data Stream",
    description: "Linhas de dados em movimento contínuo vertical.",
    category: "futuristic",
    animationClass: "animate-data-stream",
    htmlExample: `<div className="animate-data-stream w-full h-32 
  bg-gradient-to-b from-primary/0 via-primary to-primary/0 
  bg-[length:100%_200%]" />`,
    cssCode: `@keyframes data-stream {
  0% { background-position: 0 0; }
  100% { background-position: 0 100%; }
}

.animate-data-stream {
  animation: data-stream 2s linear infinite;
  background: linear-gradient(
    to bottom,
    transparent,
    hsl(var(--primary)),
    transparent
  );
  background-size: 100% 200%;
}`,
  },
  {
    id: "F-05",
    name: "Holographic",
    description: "Efeito holográfico com gradiente em movimento.",
    category: "futuristic",
    animationClass: "animate-holographic",
    htmlExample: `<div className="animate-holographic w-32 h-32 rounded-xl
  bg-gradient-to-r from-primary via-secondary to-accent 
  bg-[length:200%_200%]" />`,
    cssCode: `@keyframes holographic {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-holographic {
  animation: holographic 3s ease infinite;
  background: linear-gradient(
    to right,
    hsl(var(--primary)),
    hsl(var(--secondary)),
    hsl(var(--accent))
  );
  background-size: 200% 200%;
}`,
  },
  {
    id: "F-06",
    name: "3D Spin",
    description: "Rotação 3D contínua no eixo Y.",
    category: "futuristic",
    animationClass: "animate-spin-3d",
    htmlExample: `<div className="animate-spin-3d w-20 h-20 
  bg-primary rounded-lg" 
  style={{ transformStyle: 'preserve-3d' }} />`,
    cssCode: `@keyframes spin-3d {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

.animate-spin-3d {
  animation: spin-3d 3s linear infinite;
  transform-style: preserve-3d;
}`,
  },
  {
    id: "F-08",
    name: "Scanline Effect",
    description: "Linha horizontal que varre o elemento.",
    category: "futuristic",
    animationClass: "animate-scanline",
    htmlExample: `<div className="relative w-full h-32 bg-card overflow-hidden">
  <div className="animate-scanline absolute w-full h-1 
    bg-primary/50 left-0" />
</div>`,
    cssCode: `@keyframes scanline {
  0%, 100% { top: 0; }
  50% { top: 100%; }
}

.animate-scanline {
  animation: scanline 2s linear infinite;
}`,
  },
  {
    id: "F-09",
    name: "Warp Speed",
    description: "Transição rápida de escala e desfoque para efeito de velocidade.",
    category: "futuristic",
    animationClass: "animate-warp-speed",
    htmlExample: `<div className="animate-warp-speed w-20 h-20 
  bg-primary rounded-full" />`,
    cssCode: `@keyframes warp-speed {
  0% { 
    transform: scale(1); 
    filter: blur(0); 
    opacity: 1; 
  }
  100% { 
    transform: scale(1.5); 
    filter: blur(8px); 
    opacity: 0; 
  }
}

.animate-warp-speed {
  animation: warp-speed 0.5s ease-out forwards;
}`,
  },
  {
    id: "F-11",
    name: "Floating Orb",
    description: "Objeto flutuante com movimento lento e suave.",
    category: "futuristic",
    animationClass: "animate-float",
    htmlExample: `<div className="animate-float w-16 h-16 
  bg-gradient-to-br from-primary to-secondary 
  rounded-full shadow-lg" />`,
    cssCode: `@keyframes float {
  0%, 100% { 
    transform: translateY(0) rotate(0deg); 
  }
  25% { 
    transform: translateY(-10px) rotate(5deg); 
  }
  50% { 
    transform: translateY(0) rotate(0deg); 
  }
  75% { 
    transform: translateY(10px) rotate(-5deg); 
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}`,
  },
  {
    id: "F-12",
    name: "Digital Pulse",
    description: "Círculo que se expande rapidamente e desaparece.",
    category: "futuristic",
    animationClass: "animate-digital-pulse",
    htmlExample: `<div className="relative flex items-center justify-center">
  <div className="animate-digital-pulse absolute w-16 h-16 
    bg-primary/30 rounded-full" />
  <div className="w-8 h-8 bg-primary rounded-full z-10" />
</div>`,
    cssCode: `@keyframes digital-pulse {
  0% { 
    transform: scale(0.8); 
    opacity: 1; 
  }
  100% { 
    transform: scale(2); 
    opacity: 0; 
  }
}

.animate-digital-pulse {
  animation: digital-pulse 1s ease-out infinite;
}`,
  },
  {
    id: "F-13",
    name: "Binary Blink",
    description: "Texto que pisca em padrão binário digital.",
    category: "futuristic",
    animationClass: "animate-binary-blink",
    htmlExample: `<span className="animate-binary-blink font-mono 
  text-primary text-2xl">
  01001010
</span>`,
    cssCode: `@keyframes binary-blink {
  0%, 50% { opacity: 1; }
  25%, 75% { opacity: 0.3; }
  100% { opacity: 1; }
}

.animate-binary-blink {
  animation: binary-blink 0.5s step-end infinite;
}`,
  },
  
  // CATEGORIA 2: MODERNO
  {
    id: "M-21",
    name: "Smooth Hover Scale",
    description: "Aumento de escala suave ao passar o mouse.",
    category: "modern",
    animationClass: "transition-transform duration-300 hover:scale-110",
    htmlExample: `<button className="transition-transform duration-300 
  hover:scale-110 bg-primary text-primary-foreground 
  px-6 py-3 rounded-lg">
  Hover Me
</button>`,
    cssCode: `.smooth-hover-scale {
  transition: transform 0.3s ease-out;
}

.smooth-hover-scale:hover {
  transform: scale(1.1);
}

/* Tailwind equivalent */
className="transition-transform duration-300 
  hover:scale-110"`,
  },
  {
    id: "M-22",
    name: "Underline Grow",
    description: "Linha de sublinhado que cresce do centro para as bordas.",
    category: "modern",
    animationClass: "group",
    htmlExample: `<a className="relative group text-foreground">
  Menu Item
  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 
    bg-primary transition-all duration-300 
    group-hover:w-full group-hover:left-0" />
</a>`,
    cssCode: `.underline-grow {
  position: relative;
}

.underline-grow::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: hsl(var(--primary));
  transition: all 0.3s ease;
}

.underline-grow:hover::after {
  width: 100%;
  left: 0;
}`,
  },
  {
    id: "M-23",
    name: "Fade In Down",
    description: "Elemento que surge do topo com opacidade.",
    category: "modern",
    animationClass: "animate-fade-in-down",
    htmlExample: `<div className="animate-fade-in-down 
  bg-card p-6 rounded-lg">
  Conteúdo animado
</div>`,
    cssCode: `@keyframes fade-in-down {
  0% { 
    opacity: 0; 
    transform: translateY(-20px); 
  }
  100% { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.animate-fade-in-down {
  animation: fade-in-down 0.5s ease-out;
}`,
  },
  {
    id: "M-24",
    name: "Micro Bounce",
    description: "Pequeno salto em um ícone ou botão.",
    category: "modern",
    animationClass: "animate-micro-bounce",
    htmlExample: `<button className="animate-micro-bounce 
  text-2xl bg-card p-4 rounded-full">
  🔔
</button>`,
    cssCode: `@keyframes micro-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-4px); }
}

.animate-micro-bounce {
  animation: micro-bounce 0.3s ease-in-out;
}`,
  },
  {
    id: "M-32",
    name: "Image Zoom In",
    description: "Imagem que aumenta de escala sutilmente ao carregar.",
    category: "modern",
    animationClass: "animate-zoom-in",
    htmlExample: `<img 
  src="/placeholder.svg" 
  className="animate-zoom-in w-full h-48 
    object-cover rounded-lg" 
/>`,
    cssCode: `@keyframes zoom-in {
  0% { 
    transform: scale(1.1); 
    opacity: 0; 
  }
  100% { 
    transform: scale(1); 
    opacity: 1; 
  }
}

.animate-zoom-in {
  animation: zoom-in 0.5s ease-out;
}`,
  },
  {
    id: "M-35",
    name: "Rotate on Hover",
    description: "Rotação leve em um elemento ao passar o mouse.",
    category: "modern",
    animationClass: "transition-transform duration-300 hover:rotate-3",
    htmlExample: `<div className="transition-transform duration-300 
  hover:rotate-3 bg-card p-6 rounded-lg">
  Hover to rotate
</div>`,
    cssCode: `.rotate-on-hover {
  transition: transform 0.3s ease;
}

.rotate-on-hover:hover {
  transform: rotate(3deg);
}

/* Tailwind equivalent */
className="transition-transform duration-300 
  hover:rotate-3"`,
  },
  {
    id: "M-36",
    name: "Skew on Hover",
    description: "Inclinação sutil em um elemento ao passar o mouse.",
    category: "modern",
    animationClass: "transition-transform duration-300 hover:skew-x-3",
    htmlExample: `<div className="transition-transform duration-300 
  hover:skew-x-3 bg-card p-6 rounded-lg">
  Hover to skew
</div>`,
    cssCode: `.skew-on-hover {
  transition: transform 0.3s ease;
}

.skew-on-hover:hover {
  transform: skewX(3deg);
}

/* Tailwind equivalent */
className="transition-transform duration-300 
  hover:skew-x-3"`,
  },
  {
    id: "M-40",
    name: "Slide Up",
    description: "Elemento que desliza de baixo para cima.",
    category: "modern",
    animationClass: "animate-slide-up",
    htmlExample: `<div className="animate-slide-up 
  bg-card p-6 rounded-lg">
  Sliding content
</div>`,
    cssCode: `@keyframes slide-up {
  0% { 
    transform: translateY(100%); 
    opacity: 0; 
  }
  100% { 
    transform: translateY(0); 
    opacity: 1; 
  }
}

.animate-slide-up {
  animation: slide-up 0.5s ease-out;
}`,
  },
  {
    id: "M-41",
    name: "Blur In",
    description: "Elemento que aparece com efeito de desfoque.",
    category: "modern",
    animationClass: "animate-blur-in",
    htmlExample: `<div className="animate-blur-in 
  bg-card p-6 rounded-lg text-2xl">
  Blur Effect
</div>`,
    cssCode: `@keyframes blur-in {
  0% { 
    filter: blur(20px); 
    opacity: 0; 
  }
  100% { 
    filter: blur(0); 
    opacity: 1; 
  }
}

.animate-blur-in {
  animation: blur-in 0.5s ease-out;
}`,
  },
  {
    id: "M-42",
    name: "Pop",
    description: "Elemento que aparece com efeito de pop elástico.",
    category: "modern",
    animationClass: "animate-pop",
    htmlExample: `<div className="animate-pop 
  bg-primary text-primary-foreground 
  p-4 rounded-full w-16 h-16 
  flex items-center justify-center">
  ✓
</div>`,
    cssCode: `@keyframes pop {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.animate-pop {
  animation: pop 0.3s ease-out;
}`,
  },

  // CATEGORIA 3: ESTILOSO
  {
    id: "E-42",
    name: "Text Wave",
    description: "Cada letra de uma palavra se move em uma onda.",
    category: "stylish",
    animationClass: "animate-text-wave",
    htmlExample: `<div className="flex">
  {'WAVE'.split('').map((letter, i) => (
    <span 
      key={i}
      className="animate-text-wave text-3xl font-bold"
      style={{ animationDelay: \`\${i * 0.1}s\` }}
    >
      {letter}
    </span>
  ))}
</div>`,
    cssCode: `@keyframes text-wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.animate-text-wave {
  animation: text-wave 1s ease-in-out infinite;
  display: inline-block;
}

/* Apply delay to each letter */
.letter:nth-child(1) { animation-delay: 0s; }
.letter:nth-child(2) { animation-delay: 0.1s; }
.letter:nth-child(3) { animation-delay: 0.2s; }
/* etc... */`,
  },
  {
    id: "E-52",
    name: "Bouncing Loader",
    description: "Três bolas que quicam em sequência.",
    category: "stylish",
    animationClass: "animate-bouncing",
    htmlExample: `<div className="flex gap-2">
  {[0, 1, 2].map((i) => (
    <div 
      key={i}
      className="animate-bouncing w-4 h-4 
        bg-primary rounded-full"
      style={{ animationDelay: \`\${i * 0.15}s\` }}
    />
  ))}
</div>`,
    cssCode: `@keyframes bouncing {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-bouncing {
  animation: bouncing 0.6s ease-in-out infinite;
}

/* Stagger with delays */
.ball:nth-child(1) { animation-delay: 0s; }
.ball:nth-child(2) { animation-delay: 0.15s; }
.ball:nth-child(3) { animation-delay: 0.3s; }`,
  },
  {
    id: "E-55",
    name: "Infinite Scroll",
    description: "Elementos que se movem em loop contínuo horizontal.",
    category: "stylish",
    animationClass: "animate-scroll-left",
    htmlExample: `<div className="overflow-hidden w-full">
  <div className="animate-scroll-left flex gap-8 w-max">
    {/* Duplicate items for seamless loop */}
    {items.concat(items).map((item, i) => (
      <div key={i}>{item}</div>
    ))}
  </div>
</div>`,
    cssCode: `@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll-left {
  animation: scroll-left 10s linear infinite;
}

/* Container must have overflow: hidden */
/* Content must be duplicated for seamless loop */`,
  },
  {
    id: "E-56",
    name: "Morph Shape",
    description: "Forma orgânica que se transforma continuamente.",
    category: "stylish",
    animationClass: "animate-morph",
    htmlExample: `<div className="animate-morph w-32 h-32 
  bg-gradient-to-br from-primary to-secondary" />`,
    cssCode: `@keyframes morph {
  0%, 100% { 
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; 
  }
  50% { 
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; 
  }
}

.animate-morph {
  animation: morph 8s ease-in-out infinite;
}`,
  },
  {
    id: "E-57",
    name: "Flip Card",
    description: "Cartão que gira 360 graus no eixo Y.",
    category: "stylish",
    animationClass: "animate-flip",
    htmlExample: `<div 
  className="animate-flip w-32 h-32 
    bg-card rounded-lg flex items-center 
    justify-center text-2xl"
  style={{ transformStyle: 'preserve-3d' }}
>
  🎴
</div>`,
    cssCode: `@keyframes flip {
  0% { 
    transform: perspective(400px) rotateY(0); 
  }
  100% { 
    transform: perspective(400px) rotateY(360deg); 
  }
}

.animate-flip {
  animation: flip 1s ease-in-out;
  transform-style: preserve-3d;
}`,
  },
  {
    id: "E-58",
    name: "Swing",
    description: "Elemento que balança como um pêndulo.",
    category: "stylish",
    animationClass: "animate-swing origin-top",
    htmlExample: `<div className="animate-swing origin-top 
  bg-card p-4 rounded-lg inline-block">
  🔔 Notification
</div>`,
    cssCode: `@keyframes swing {
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

.animate-swing {
  animation: swing 1s ease-in-out;
  transform-origin: top center;
}`,
  },
  {
    id: "E-59",
    name: "Jello",
    description: "Efeito elástico de gelatina tremendo.",
    category: "stylish",
    animationClass: "animate-jello",
    htmlExample: `<button className="animate-jello 
  bg-primary text-primary-foreground 
  px-6 py-3 rounded-lg">
  Jello Effect
</button>`,
    cssCode: `@keyframes jello {
  0%, 100% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1.25, 0.75, 1); }
  40% { transform: scale3d(0.75, 1.25, 1); }
  50% { transform: scale3d(1.15, 0.85, 1); }
  65% { transform: scale3d(0.95, 1.05, 1); }
  75% { transform: scale3d(1.05, 0.95, 1); }
}

.animate-jello {
  animation: jello 1s ease-in-out;
}`,
  },
  {
    id: "E-60",
    name: "Tada",
    description: "Animação de celebração com escala e rotação.",
    category: "stylish",
    animationClass: "animate-tada",
    htmlExample: `<div className="animate-tada text-4xl">
  🎉
</div>`,
    cssCode: `@keyframes tada {
  0% { transform: scale3d(1, 1, 1); }
  10%, 20% { 
    transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg); 
  }
  30%, 50%, 70%, 90% { 
    transform: scale3d(1.1, 1.1, 1.1) rotate(3deg); 
  }
  40%, 60%, 80% { 
    transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg); 
  }
  100% { transform: scale3d(1, 1, 1); }
}

.animate-tada {
  animation: tada 1s ease-in-out;
}`,
  },
  {
    id: "E-61",
    name: "Wobble",
    description: "Balanço lateral que diminui gradualmente.",
    category: "stylish",
    animationClass: "animate-wobble",
    htmlExample: `<div className="animate-wobble 
  bg-card p-6 rounded-lg inline-block">
  Wobble Effect
</div>`,
    cssCode: `@keyframes wobble {
  0% { transform: translateX(0%); }
  15% { transform: translateX(-25%) rotate(-5deg); }
  30% { transform: translateX(20%) rotate(3deg); }
  45% { transform: translateX(-15%) rotate(-3deg); }
  60% { transform: translateX(10%) rotate(2deg); }
  75% { transform: translateX(-5%) rotate(-1deg); }
  100% { transform: translateX(0%); }
}

.animate-wobble {
  animation: wobble 1s ease-in-out;
}`,
  },
  {
    id: "E-62",
    name: "Rubber Band",
    description: "Efeito elástico de esticar e voltar.",
    category: "stylish",
    animationClass: "animate-rubber-band",
    htmlExample: `<button className="animate-rubber-band 
  bg-secondary text-secondary-foreground 
  px-6 py-3 rounded-lg">
  Stretch!
</button>`,
    cssCode: `@keyframes rubber-band {
  0% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1.25, 0.75, 1); }
  40% { transform: scale3d(0.75, 1.25, 1); }
  50% { transform: scale3d(1.15, 0.85, 1); }
  65% { transform: scale3d(0.95, 1.05, 1); }
  75% { transform: scale3d(1.05, 0.95, 1); }
  100% { transform: scale3d(1, 1, 1); }
}

.animate-rubber-band {
  animation: rubber-band 1s ease-in-out;
}`,
  },

  // CATEGORIA 4: COLORIDO VIBRANTE
  {
    id: "V-61",
    name: "Rainbow Gradient",
    description: "Gradiente de fundo que muda de cor continuamente.",
    category: "vibrant",
    animationClass: "animate-rainbow",
    htmlExample: `<div className="animate-rainbow w-full h-32 rounded-xl
  bg-gradient-to-r from-red-500 via-yellow-500 
  via-green-500 via-blue-500 to-purple-500 
  bg-[length:200%_200%]" />`,
    cssCode: `@keyframes rainbow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-rainbow {
  animation: rainbow 3s ease infinite;
  background: linear-gradient(
    to right,
    red, orange, yellow, green, blue, purple, red
  );
  background-size: 200% 200%;
}`,
  },
  {
    id: "V-62",
    name: "Pulsating Glow",
    description: "Brilho de cor que pulsa e se espalha.",
    category: "vibrant",
    animationClass: "animate-pulsating-glow",
    htmlExample: `<div className="animate-pulsating-glow 
  w-32 h-32 bg-accent rounded-full" />`,
    cssCode: `@keyframes pulsating-glow {
  0%, 100% { 
    box-shadow: 0 0 10px hsl(var(--accent)), 
                0 0 20px hsl(var(--accent)); 
  }
  50% { 
    box-shadow: 0 0 20px hsl(var(--accent)), 
                0 0 40px hsl(var(--accent)), 
                0 0 60px hsl(var(--accent)); 
  }
}

.animate-pulsating-glow {
  animation: pulsating-glow 2s ease-in-out infinite;
}`,
  },
  {
    id: "V-65",
    name: "Hue Rotate",
    description: "Rotação contínua de matiz nas cores.",
    category: "vibrant",
    animationClass: "animate-hue-rotate",
    htmlExample: `<div className="animate-hue-rotate 
  w-32 h-32 bg-gradient-to-br from-primary to-secondary 
  rounded-xl" />`,
    cssCode: `@keyframes hue-rotate {
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
}

.animate-hue-rotate {
  animation: hue-rotate 3s linear infinite;
}`,
  },
  {
    id: "V-73",
    name: "Shimmer",
    description: "Brilho que varre o elemento da esquerda para direita.",
    category: "vibrant",
    animationClass: "animate-shimmer",
    htmlExample: `<div className="animate-shimmer 
  w-full h-16 rounded-lg
  bg-gradient-to-r from-muted via-muted-foreground/20 
  to-muted bg-[length:200%_100%]" />`,
    cssCode: `@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.animate-shimmer {
  animation: shimmer 2s linear infinite;
  background: linear-gradient(
    to right,
    hsl(var(--muted)),
    hsl(var(--muted-foreground) / 0.2),
    hsl(var(--muted))
  );
  background-size: 200% 100%;
}`,
  },
  {
    id: "V-78",
    name: "Color Cycle",
    description: "Elemento que passa por um ciclo de cores sólidas.",
    category: "vibrant",
    animationClass: "animate-color-cycle",
    htmlExample: `<div className="animate-color-cycle 
  w-32 h-32 rounded-xl" />`,
    cssCode: `@keyframes color-cycle {
  0%, 100% { background-color: hsl(var(--primary)); }
  33% { background-color: hsl(var(--secondary)); }
  66% { background-color: hsl(var(--accent)); }
}

.animate-color-cycle {
  animation: color-cycle 3s ease infinite;
}`,
  },
  {
    id: "V-74",
    name: "Heartbeat",
    description: "Animação de batimento cardíaco pulsante.",
    category: "vibrant",
    animationClass: "animate-heartbeat",
    htmlExample: `<div className="animate-heartbeat text-5xl">
  ❤️
</div>`,
    cssCode: `@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
}

.animate-heartbeat {
  animation: heartbeat 1.5s ease-in-out infinite;
}`,
  },
  {
    id: "V-75",
    name: "Shake",
    description: "Vibração lateral rápida.",
    category: "vibrant",
    animationClass: "animate-shake",
    htmlExample: `<button className="animate-shake 
  bg-destructive text-destructive-foreground 
  px-6 py-3 rounded-lg">
  Error!
</button>`,
    cssCode: `@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { 
    transform: translateX(-5px); 
  }
  20%, 40%, 60%, 80% { 
    transform: translateX(5px); 
  }
}

.animate-shake {
  animation: shake 0.5s ease-in-out;
}`,
  },
  {
    id: "V-76",
    name: "Rotate Continuous",
    description: "Rotação contínua infinita.",
    category: "vibrant",
    animationClass: "animate-rotate",
    htmlExample: `<div className="animate-rotate 
  w-16 h-16 border-4 border-primary 
  border-t-transparent rounded-full" />`,
    cssCode: `@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-rotate {
  animation: rotate 2s linear infinite;
}`,
  },
  {
    id: "V-79",
    name: "Pulse Ring",
    description: "Anel que se expande e desaparece do centro.",
    category: "vibrant",
    animationClass: "animate-pulse-ring",
    htmlExample: `<div className="relative flex items-center justify-center">
  <div className="animate-pulse-ring absolute w-12 h-12 
    border-2 border-primary rounded-full" />
  <div className="w-4 h-4 bg-primary rounded-full" />
</div>`,
    cssCode: `@keyframes pulse-ring {
  0% { 
    transform: scale(0.8); 
    opacity: 1; 
  }
  100% { 
    transform: scale(2.5); 
    opacity: 0; 
  }
}

.animate-pulse-ring {
  animation: pulse-ring 1.5s 
    cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}`,
  },
  {
    id: "V-80",
    name: "Gradient Border",
    description: "Borda com gradiente animado em movimento.",
    category: "vibrant",
    animationClass: "animate-gradient-border",
    htmlExample: `<div className="p-[3px] rounded-xl animate-gradient-border
  bg-gradient-to-r from-primary via-secondary to-accent 
  bg-[length:200%_200%]">
  <div className="bg-background rounded-lg p-6">
    Gradient Border
  </div>
</div>`,
    cssCode: `@keyframes gradient-border {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-gradient-border {
  animation: gradient-border 3s ease infinite;
  background: linear-gradient(
    to right,
    hsl(var(--primary)),
    hsl(var(--secondary)),
    hsl(var(--accent))
  );
  background-size: 200% 200%;
}`,
  },

  // ========== 50 NOVAS ANIMAÇÕES ÉPICAS ==========
  
  // CYBERPUNK & SCI-FI (10)
  {
    id: "F-81",
    name: "Matrix Rain",
    category: "futuristic",
    description: "Código caindo estilo Matrix com brilho verde.",
    animationClass: "animate-matrix-rain",
    htmlExample: `<div className="animate-matrix-rain font-mono text-green-400">010110</div>`,
    cssCode: `@keyframes matrix-rain {
  0% { transform: translateY(-100%); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
}
.animate-matrix-rain {
  animation: matrix-rain 2s linear infinite;
  text-shadow: 0 0 10px currentColor;
}`
  },
  {
    id: "F-82",
    name: "Portal Vortex",
    category: "futuristic",
    description: "Vórtice espiral de portal dimensional.",
    animationClass: "animate-portal-vortex",
    htmlExample: `<div className="animate-portal-vortex w-20 h-20 rounded-full border-4 border-dashed border-primary" />`,
    cssCode: `@keyframes portal-vortex {
  0% { transform: rotate(0deg) scale(1); border-width: 4px; }
  50% { transform: rotate(180deg) scale(1.2); border-width: 2px; }
  100% { transform: rotate(360deg) scale(1); border-width: 4px; }
}
.animate-portal-vortex {
  animation: portal-vortex 3s ease-in-out infinite;
}`
  },
  {
    id: "F-83",
    name: "Cyber Glitch RGB",
    category: "futuristic",
    description: "Glitch avançado com separação cromática RGB.",
    animationClass: "animate-cyber-glitch",
    htmlExample: `<span className="animate-cyber-glitch text-4xl font-bold">CYBER</span>`,
    cssCode: `@keyframes cyber-glitch {
  0%, 100% { transform: translate(0); text-shadow: -2px 0 #ff0000, 2px 0 #00ffff; }
  20% { transform: translate(-3px, 3px); text-shadow: 3px 0 #ff0000, -3px 0 #00ffff; }
  40% { transform: translate(3px, -3px); text-shadow: -3px 0 #ff0000, 3px 0 #00ffff; }
  60% { transform: translate(-2px, 2px); text-shadow: 2px 0 #ff0000, -2px 0 #00ffff; }
  80% { transform: translate(2px, -2px); text-shadow: -2px 0 #ff0000, 2px 0 #00ffff; }
}
.animate-cyber-glitch { animation: cyber-glitch 0.3s infinite; }`
  },
  {
    id: "F-84",
    name: "Hologram Flicker",
    category: "futuristic",
    description: "Holograma sci-fi com cintilação realista.",
    animationClass: "animate-hologram-flicker",
    htmlExample: `<div className="animate-hologram-flicker text-cyan-400 text-4xl">HOLOGRAM</div>`,
    cssCode: `@keyframes hologram-flicker {
  0%, 100% { opacity: 1; filter: brightness(1); }
  10% { opacity: 0.8; filter: brightness(1.5); }
  30% { opacity: 0.6; filter: brightness(2); }
  50% { opacity: 0.9; filter: brightness(1.2); }
  70% { opacity: 0.7; filter: brightness(1.8); }
}
.animate-hologram-flicker {
  animation: hologram-flicker 2s infinite;
  text-shadow: 0 0 10px currentColor, 0 0 20px currentColor;
}`
  },
  {
    id: "F-85",
    name: "Energy Shield",
    category: "futuristic",
    description: "Campo de força energético pulsante.",
    animationClass: "animate-energy-shield",
    htmlExample: `<div className="animate-energy-shield w-24 h-24 rounded-full border-2 border-cyan-400" />`,
    cssCode: `@keyframes energy-shield {
  0%, 100% { 
    box-shadow: 0 0 10px rgba(0,255,255,0.5), inset 0 0 20px rgba(0,255,255,0.2);
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 30px rgba(0,255,255,0.8), inset 0 0 40px rgba(0,255,255,0.4), 0 0 60px rgba(0,255,255,0.3);
    transform: scale(1.05);
  }
}
.animate-energy-shield { animation: energy-shield 2s ease-in-out infinite; }`
  },
  {
    id: "F-86",
    name: "Warp Drive",
    category: "futuristic",
    description: "Dobra espacial estilo Star Trek.",
    animationClass: "animate-warp-drive",
    htmlExample: `<div className="animate-warp-drive w-4 h-32 bg-gradient-to-b from-transparent via-primary to-transparent" />`,
    cssCode: `@keyframes warp-drive {
  0% { transform: scaleY(0.1) scaleX(1); opacity: 0; }
  50% { transform: scaleY(1) scaleX(0.1); opacity: 1; }
  100% { transform: scaleY(0.1) scaleX(1); opacity: 0; }
}
.animate-warp-drive { animation: warp-drive 0.5s ease-in-out infinite; }`
  },
  {
    id: "F-87",
    name: "Quantum Particles",
    category: "futuristic",
    description: "Partículas quânticas em movimento aleatório.",
    animationClass: "animate-quantum-particles",
    htmlExample: `<div className="animate-quantum-particles w-3 h-3 rounded-full bg-primary" />`,
    cssCode: `@keyframes quantum-particles {
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  25% { transform: translate(20px, -30px) scale(0.8); opacity: 0.7; }
  50% { transform: translate(-10px, 20px) scale(1.2); opacity: 0.9; }
  75% { transform: translate(15px, 10px) scale(0.6); opacity: 0.5; }
  100% { transform: translate(0, 0) scale(1); opacity: 1; }
}
.animate-quantum-particles { animation: quantum-particles 3s ease-in-out infinite; }`
  },
  {
    id: "F-88",
    name: "Neural Network",
    category: "futuristic",
    description: "Conexões neurais pulsando em rede.",
    animationClass: "animate-neural-network",
    htmlExample: `<div className="animate-neural-network w-4 h-4 rounded-full bg-primary" />`,
    cssCode: `@keyframes neural-network {
  0%, 100% { box-shadow: 30px 0 0 -2px currentColor, -30px 0 0 -2px currentColor, 0 30px 0 -2px currentColor, 0 -30px 0 -2px currentColor; }
  50% { box-shadow: 30px 0 0 2px currentColor, -30px 0 0 2px currentColor, 0 30px 0 2px currentColor, 0 -30px 0 2px currentColor; }
}
.animate-neural-network { animation: neural-network 1.5s ease-in-out infinite; }`
  },
  {
    id: "F-89",
    name: "Plasma Ball",
    category: "futuristic",
    description: "Esfera de plasma com raios dinâmicos.",
    animationClass: "animate-plasma-ball",
    htmlExample: `<div className="animate-plasma-ball w-20 h-20 rounded-full bg-purple-600" />`,
    cssCode: `@keyframes plasma-ball {
  0%, 100% { background: radial-gradient(circle at 30% 30%, white 0%, #8b5cf6 40%, #4c1d95 100%); }
  33% { background: radial-gradient(circle at 60% 40%, white 0%, #8b5cf6 40%, #4c1d95 100%); }
  66% { background: radial-gradient(circle at 40% 60%, white 0%, #8b5cf6 40%, #4c1d95 100%); }
}
.animate-plasma-ball { animation: plasma-ball 2s ease-in-out infinite; box-shadow: 0 0 20px #8b5cf6, inset 0 0 30px rgba(255,255,255,0.5); }`
  },
  {
    id: "F-90",
    name: "Time Warp",
    category: "futuristic",
    description: "Distorção temporal com rotação e blur.",
    animationClass: "animate-time-warp",
    htmlExample: `<div className="animate-time-warp text-4xl">⏱️</div>`,
    cssCode: `@keyframes time-warp {
  0% { transform: rotate(0deg) scale(1); filter: blur(0); }
  25% { transform: rotate(90deg) scale(0.8); filter: blur(2px); }
  50% { transform: rotate(180deg) scale(1.2); filter: blur(0); }
  75% { transform: rotate(270deg) scale(0.9); filter: blur(1px); }
  100% { transform: rotate(360deg) scale(1); filter: blur(0); }
}
.animate-time-warp { animation: time-warp 4s ease-in-out infinite; }`
  },
  
  // MODERN PREMIUM (10)
  {
    id: "M-81",
    name: "Liquid Morph",
    category: "modern",
    description: "Forma líquida orgânica em transformação.",
    animationClass: "animate-liquid-morph",
    htmlExample: `<div className="animate-liquid-morph w-24 h-24 bg-gradient-to-br from-primary to-secondary" />`,
    cssCode: `@keyframes liquid-morph {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
  50% { border-radius: 50% 50% 40% 60% / 40% 50% 60% 50%; }
  75% { border-radius: 40% 60% 50% 50% / 60% 40% 50% 50%; }
}
.animate-liquid-morph { animation: liquid-morph 8s ease-in-out infinite; }`
  },
  {
    id: "M-82",
    name: "Magnetic Hover",
    category: "modern",
    description: "Flutuação magnética com sombra dinâmica.",
    animationClass: "animate-magnetic-hover",
    htmlExample: `<button className="animate-magnetic-hover bg-primary px-6 py-3 rounded-lg">Magnetic</button>`,
    cssCode: `@keyframes magnetic-hover {
  0%, 100% { transform: translateY(0) scale(1); box-shadow: 0 5px 15px rgba(0,0,0,0.2); }
  50% { transform: translateY(-5px) scale(1.02); box-shadow: 0 15px 30px rgba(0,0,0,0.3); }
}
.animate-magnetic-hover { animation: magnetic-hover 2s ease-in-out infinite; }`
  },
  {
    id: "M-83",
    name: "Elastic Pull",
    category: "modern",
    description: "Estiramento elástico como borracha.",
    animationClass: "animate-elastic-pull",
    htmlExample: `<div className="animate-elastic-pull w-16 h-16 bg-primary rounded-xl" />`,
    cssCode: `@keyframes elastic-pull {
  0%, 100% { transform: scaleX(1) scaleY(1); }
  25% { transform: scaleX(1.2) scaleY(0.8); }
  50% { transform: scaleX(0.9) scaleY(1.1); }
  75% { transform: scaleX(1.05) scaleY(0.95); }
}
.animate-elastic-pull { animation: elastic-pull 1s ease-in-out infinite; }`
  },
  {
    id: "M-84",
    name: "Depth Push 3D",
    category: "modern",
    description: "Profundidade 3D com perspectiva realista.",
    animationClass: "animate-depth-push",
    htmlExample: `<div className="animate-depth-push bg-card p-6 rounded-xl">3D Depth</div>`,
    cssCode: `@keyframes depth-push {
  0%, 100% { transform: perspective(500px) translateZ(0); box-shadow: 0 5px 20px rgba(0,0,0,0.2); }
  50% { transform: perspective(500px) translateZ(30px); box-shadow: 0 20px 40px rgba(0,0,0,0.4); }
}
.animate-depth-push { animation: depth-push 3s ease-in-out infinite; }`
  },
  {
    id: "M-85",
    name: "Smooth Reveal",
    category: "modern",
    description: "Revelação com máscara deslizante elegante.",
    animationClass: "animate-smooth-reveal",
    htmlExample: `<div className="animate-smooth-reveal bg-card p-6 rounded-xl">Revealed!</div>`,
    cssCode: `@keyframes smooth-reveal {
  0% { clip-path: inset(0 100% 0 0); opacity: 0; }
  100% { clip-path: inset(0 0 0 0); opacity: 1; }
}
.animate-smooth-reveal { animation: smooth-reveal 0.8s ease-out forwards; }`
  },
  {
    id: "M-86",
    name: "Typewriter Cursor",
    category: "modern",
    description: "Cursor de máquina de escrever piscando.",
    animationClass: "animate-typewriter-cursor",
    htmlExample: `<span className="animate-typewriter-cursor border-r-2 border-primary pr-1">Typing...</span>`,
    cssCode: `@keyframes typewriter-cursor {
  0%, 50% { border-color: currentColor; }
  51%, 100% { border-color: transparent; }
}
.animate-typewriter-cursor { animation: typewriter-cursor 1s step-end infinite; }`
  },
  {
    id: "M-87",
    name: "Card Lift",
    category: "modern",
    description: "Cartão se elevando com perspectiva 3D.",
    animationClass: "animate-card-lift",
    htmlExample: `<div className="animate-card-lift bg-card p-6 rounded-xl">Lift Me</div>`,
    cssCode: `@keyframes card-lift {
  0% { transform: translateY(0) rotateX(0); box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
  100% { transform: translateY(-10px) rotateX(5deg); box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
}
.animate-card-lift { animation: card-lift 0.3s ease-out forwards; transform-style: preserve-3d; }`
  },
  {
    id: "M-88",
    name: "Focus Ring",
    category: "modern",
    description: "Anel de foco animado para acessibilidade.",
    animationClass: "animate-focus-ring",
    htmlExample: `<input className="animate-focus-ring bg-muted px-4 py-2 rounded-lg" />`,
    cssCode: `@keyframes focus-ring {
  0% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(0, 255, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0); }
}
.animate-focus-ring:focus { animation: focus-ring 0.8s ease-out; box-shadow: 0 0 0 3px rgba(0, 255, 255, 0.3); }`
  },
  {
    id: "M-89",
    name: "Stagger Fade",
    category: "modern",
    description: "Fade sequencial para listas e grids.",
    animationClass: "animate-stagger-fade",
    htmlExample: `<div className="animate-stagger-fade">Item</div>`,
    cssCode: `@keyframes stagger-fade {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-stagger-fade { animation: stagger-fade 0.5s ease-out forwards; }
/* Delays: nth-child(1) 0.1s, nth-child(2) 0.2s, etc. */`
  },
  {
    id: "M-90",
    name: "Smooth Collapse",
    category: "modern",
    description: "Colapso suave de altura para accordions.",
    animationClass: "animate-smooth-collapse",
    htmlExample: `<div className="animate-smooth-collapse overflow-hidden">Content</div>`,
    cssCode: `@keyframes smooth-collapse {
  0% { max-height: 500px; opacity: 1; }
  100% { max-height: 0; opacity: 0; }
}
.animate-smooth-collapse { animation: smooth-collapse 0.3s ease-out forwards; }`
  },
  
  // STYLISH PREMIUM (10)
  {
    id: "S-81",
    name: "Spotlight Effect",
    category: "stylish",
    description: "Holofote que ilumina o elemento dinamicamente.",
    animationClass: "animate-spotlight",
    htmlExample: `<div className="animate-spotlight bg-card p-6 rounded-xl overflow-hidden">Spotlight</div>`,
    cssCode: `@keyframes spotlight {
  0% { background: radial-gradient(circle at 0% 0%, rgba(255,255,255,0.3) 0%, transparent 50%); }
  50% { background: radial-gradient(circle at 100% 100%, rgba(255,255,255,0.3) 0%, transparent 50%); }
  100% { background: radial-gradient(circle at 0% 0%, rgba(255,255,255,0.3) 0%, transparent 50%); }
}
.animate-spotlight { animation: spotlight 4s ease-in-out infinite; }`
  },
  {
    id: "S-82",
    name: "Neon Sign",
    category: "stylish",
    description: "Letreiro neon com flicker realista.",
    animationClass: "animate-neon-sign",
    htmlExample: `<div className="animate-neon-sign text-4xl font-bold text-pink-500">OPEN</div>`,
    cssCode: `@keyframes neon-sign {
  0%, 100% { text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor; opacity: 1; }
  42% { opacity: 0.8; }
  43% { opacity: 1; }
  45% { opacity: 0.3; }
  46% { opacity: 1; }
}
.animate-neon-sign { animation: neon-sign 3s ease-in-out infinite; }`
  },
  {
    id: "S-83",
    name: "Glass Refraction",
    category: "stylish",
    description: "Luz se refratando através de vidro.",
    animationClass: "animate-glass-refraction",
    htmlExample: `<div className="animate-glass-refraction backdrop-blur-xl bg-white/10 p-6 rounded-xl">Glass</div>`,
    cssCode: `@keyframes glass-refraction {
  0%, 100% { background-position: 0% 50%; backdrop-filter: blur(10px) hue-rotate(0deg); }
  50% { background-position: 100% 50%; backdrop-filter: blur(15px) hue-rotate(10deg); }
}
.animate-glass-refraction { animation: glass-refraction 5s ease-in-out infinite; background-size: 200% 200%; }`
  },
  {
    id: "S-84",
    name: "Metallic Shine",
    category: "stylish",
    description: "Brilho metálico deslizante luxuoso.",
    animationClass: "animate-metallic-shine",
    htmlExample: `<div className="animate-metallic-shine text-4xl font-bold">METAL</div>`,
    cssCode: `@keyframes metallic-shine {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}
.animate-metallic-shine { animation: metallic-shine 3s linear infinite; background: linear-gradient(90deg, #888 0%, #fff 25%, #888 50%, #fff 75%, #888 100%); background-size: 200% 100%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; }`
  },
  {
    id: "S-85",
    name: "Diamond Sparkle",
    category: "stylish",
    description: "Brilho cintilante de diamante.",
    animationClass: "animate-diamond-sparkle",
    htmlExample: `<div className="animate-diamond-sparkle text-4xl">💎</div>`,
    cssCode: `@keyframes diamond-sparkle {
  0%, 100% { filter: brightness(1) drop-shadow(0 0 5px white); transform: scale(1); }
  25% { filter: brightness(1.5) drop-shadow(0 0 15px white); transform: scale(1.1); }
  50% { filter: brightness(1) drop-shadow(0 0 5px white); transform: scale(1); }
  75% { filter: brightness(1.3) drop-shadow(0 0 10px white); transform: scale(1.05); }
}
.animate-diamond-sparkle { animation: diamond-sparkle 2s ease-in-out infinite; }`
  },
  {
    id: "S-86",
    name: "Luxury Fade",
    category: "stylish",
    description: "Fade premium com espaçamento dourado.",
    animationClass: "animate-luxury-fade",
    htmlExample: `<div className="animate-luxury-fade text-amber-400 text-4xl font-bold">LUXURY</div>`,
    cssCode: `@keyframes luxury-fade {
  0% { opacity: 0; letter-spacing: 0.5em; filter: blur(10px); }
  50% { opacity: 1; filter: blur(0); }
  100% { opacity: 1; letter-spacing: 0.2em; }
}
.animate-luxury-fade { animation: luxury-fade 2s ease-out forwards; }`
  },
  {
    id: "S-87",
    name: "Velvet Hover",
    category: "stylish",
    description: "Gradiente aveludado suave.",
    animationClass: "animate-velvet-hover",
    htmlExample: `<button className="animate-velvet-hover bg-purple-900 px-6 py-3 rounded-lg text-white">Velvet</button>`,
    cssCode: `@keyframes velvet-hover {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-velvet-hover { animation: velvet-hover 4s ease-in-out infinite; background: linear-gradient(135deg, #4a1d6b 0%, #7c3aed 50%, #4a1d6b 100%); background-size: 200% 200%; }`
  },
  {
    id: "S-88",
    name: "Ink Drop",
    category: "stylish",
    description: "Gota de tinta se expandindo organicamente.",
    animationClass: "animate-ink-drop",
    htmlExample: `<div className="animate-ink-drop w-4 h-4 bg-primary rounded-full" />`,
    cssCode: `@keyframes ink-drop {
  0% { transform: scale(0); opacity: 1; border-radius: 50%; }
  50% { transform: scale(1); opacity: 0.8; border-radius: 45% 55% 50% 50%; }
  100% { transform: scale(3); opacity: 0; border-radius: 40% 60% 55% 45%; }
}
.animate-ink-drop { animation: ink-drop 1s ease-out forwards; }`
  },
  {
    id: "S-89",
    name: "Ribbon Wave",
    category: "stylish",
    description: "Fita decorativa ondulando suavemente.",
    animationClass: "animate-ribbon-wave",
    htmlExample: `<div className="animate-ribbon-wave w-full h-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />`,
    cssCode: `@keyframes ribbon-wave {
  0%, 100% { transform: scaleY(1) translateY(0); border-radius: 0; }
  25% { transform: scaleY(1.5) translateY(-2px); border-radius: 50% 0 50% 0; }
  50% { transform: scaleY(1) translateY(0); border-radius: 0; }
  75% { transform: scaleY(1.5) translateY(2px); border-radius: 0 50% 0 50%; }
}
.animate-ribbon-wave { animation: ribbon-wave 2s ease-in-out infinite; }`
  },
  {
    id: "S-90",
    name: "Crystal Rotate",
    category: "stylish",
    description: "Cristal girando com reflexos prismáticos.",
    animationClass: "animate-crystal-rotate",
    htmlExample: `<div className="animate-crystal-rotate w-16 h-16 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400" style={{clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"}} />`,
    cssCode: `@keyframes crystal-rotate {
  0% { transform: rotate(0deg); filter: hue-rotate(0deg) brightness(1); }
  50% { transform: rotate(180deg); filter: hue-rotate(180deg) brightness(1.2); }
  100% { transform: rotate(360deg); filter: hue-rotate(360deg) brightness(1); }
}
.animate-crystal-rotate { animation: crystal-rotate 5s linear infinite; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }`
  },
  
  // VIBRANT EXTREME (20)
  {
    id: "V-81",
    name: "Fireworks Burst",
    category: "vibrant",
    description: "Explosão de fogos de artifício coloridos.",
    animationClass: "animate-fireworks-burst",
    htmlExample: `<div className="animate-fireworks-burst w-4 h-4 rounded-full bg-yellow-400" />`,
    cssCode: `@keyframes fireworks-burst {
  0% { transform: scale(0); opacity: 1; box-shadow: 0 0 0 0 #f59e0b, 0 0 0 0 #ef4444, 0 0 0 0 #10b981, 0 0 0 0 #3b82f6; }
  50% { transform: scale(1); box-shadow: 30px -30px 0 0 #f59e0b, -30px -30px 0 0 #ef4444, 30px 30px 0 0 #10b981, -30px 30px 0 0 #3b82f6; }
  100% { transform: scale(1); opacity: 0; box-shadow: 50px -50px 0 -5px #f59e0b, -50px -50px 0 -5px #ef4444, 50px 50px 0 -5px #10b981, -50px 50px 0 -5px #3b82f6; }
}
.animate-fireworks-burst { animation: fireworks-burst 1s ease-out infinite; }`
  },
  {
    id: "V-82",
    name: "Aurora Borealis",
    category: "vibrant",
    description: "Aurora boreal com cores dançantes.",
    animationClass: "animate-aurora-borealis",
    htmlExample: `<div className="animate-aurora-borealis w-full h-32 rounded-xl" />`,
    cssCode: `@keyframes aurora-borealis {
  0%, 100% { background: linear-gradient(45deg, #00ff87, #60efff, #ff00ff, #00ff87); background-size: 400% 400%; background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-aurora-borealis { animation: aurora-borealis 8s ease-in-out infinite; filter: blur(30px); opacity: 0.7; }`
  },
  {
    id: "V-83",
    name: "Disco Ball",
    category: "vibrant",
    description: "Bola de discoteca com luzes coloridas.",
    animationClass: "animate-disco-ball",
    htmlExample: `<div className="animate-disco-ball w-20 h-20 rounded-full bg-gradient-to-br from-white to-gray-300" />`,
    cssCode: `@keyframes disco-ball {
  0% { transform: rotateY(0deg); box-shadow: -20px -10px 0 0 #ff0000, 20px -10px 0 0 #00ff00, 0px 20px 0 0 #0000ff; }
  33% { box-shadow: 20px -10px 0 0 #ff0000, 0px 20px 0 0 #00ff00, -20px -10px 0 0 #0000ff; }
  66% { box-shadow: 0px 20px 0 0 #ff0000, -20px -10px 0 0 #00ff00, 20px -10px 0 0 #0000ff; }
  100% { transform: rotateY(360deg); }
}
.animate-disco-ball { animation: disco-ball 3s linear infinite; }`
  },
  {
    id: "V-84",
    name: "Lava Lamp",
    category: "vibrant",
    description: "Bolhas de lava flutuantes.",
    animationClass: "animate-lava-lamp",
    htmlExample: `<div className="animate-lava-lamp w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500" />`,
    cssCode: `@keyframes lava-lamp {
  0%, 100% { transform: translateY(0) scale(1); border-radius: 50%; }
  25% { transform: translateY(-50px) scale(0.8); border-radius: 40% 60% 50% 50%; }
  50% { transform: translateY(-100px) scale(1.2); border-radius: 50%; }
  75% { transform: translateY(-50px) scale(0.9); border-radius: 60% 40% 45% 55%; }
}
.animate-lava-lamp { animation: lava-lamp 5s ease-in-out infinite; }`
  },
  {
    id: "V-85",
    name: "Electric Storm",
    category: "vibrant",
    description: "Tempestade elétrica com raios.",
    animationClass: "animate-electric-storm",
    htmlExample: `<div className="animate-electric-storm text-4xl font-bold text-yellow-400">⚡</div>`,
    cssCode: `@keyframes electric-storm {
  0%, 90%, 100% { opacity: 1; filter: brightness(1); text-shadow: 0 0 5px currentColor; }
  5% { opacity: 0.3; filter: brightness(3); text-shadow: 0 0 20px currentColor, 0 0 40px currentColor; }
  15% { opacity: 0.5; filter: brightness(2); }
}
.animate-electric-storm { animation: electric-storm 2s infinite; }`
  },
  {
    id: "V-86",
    name: "Confetti Pop",
    category: "vibrant",
    description: "Confetes coloridos explodindo.",
    animationClass: "animate-confetti-pop",
    htmlExample: `<div className="animate-confetti-pop w-2 h-2 bg-pink-500 rounded" />`,
    cssCode: `@keyframes confetti-pop {
  0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
  100% { transform: translateY(-200px) rotate(720deg) scale(0); opacity: 0; }
}
.animate-confetti-pop { animation: confetti-pop 1s ease-out forwards; }`
  },
  {
    id: "V-87",
    name: "Prism Split",
    category: "vibrant",
    description: "Luz se dividindo em arco-íris.",
    animationClass: "animate-prism-split",
    htmlExample: `<div className="animate-prism-split w-24 h-8 bg-white" />`,
    cssCode: `@keyframes prism-split {
  0% { background: white; box-shadow: none; }
  50% { background: linear-gradient(90deg, #ff0000 0%, #ff7f00 16%, #ffff00 33%, #00ff00 50%, #0000ff 66%, #4b0082 83%, #9400d3 100%); box-shadow: 0 0 20px rgba(255,255,255,0.5); }
  100% { background: white; box-shadow: none; }
}
.animate-prism-split { animation: prism-split 3s ease-in-out infinite; }`
  },
  {
    id: "V-88",
    name: "Neon Tubes",
    category: "vibrant",
    description: "Tubos de neon ligando em sequência.",
    animationClass: "animate-neon-tubes",
    htmlExample: `<div className="animate-neon-tubes h-1 w-full bg-cyan-400 rounded-full" />`,
    cssCode: `@keyframes neon-tubes {
  0%, 100% { box-shadow: 0 0 5px currentColor, 0 0 10px currentColor; opacity: 0.3; }
  50% { box-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 40px currentColor, 0 0 80px currentColor; opacity: 1; }
}
.animate-neon-tubes { animation: neon-tubes 1.5s ease-in-out infinite; }`
  },
  {
    id: "V-89",
    name: "Supernova",
    category: "vibrant",
    description: "Explosão de supernova cósmica.",
    animationClass: "animate-supernova",
    htmlExample: `<div className="animate-supernova w-4 h-4 rounded-full bg-white" />`,
    cssCode: `@keyframes supernova {
  0% { transform: scale(0); box-shadow: 0 0 0 0 white; background: white; }
  30% { transform: scale(1); box-shadow: 0 0 20px 10px white, 0 0 40px 20px #ffc800; }
  60% { transform: scale(0.5); box-shadow: 0 0 60px 30px #ff6600; background: #ff6600; }
  100% { transform: scale(0); box-shadow: 0 0 200px 100px transparent; background: transparent; }
}
.animate-supernova { animation: supernova 2s ease-out forwards; }`
  },
  {
    id: "V-90",
    name: "Black Hole",
    category: "vibrant",
    description: "Buraco negro sugando luz.",
    animationClass: "animate-black-hole",
    htmlExample: `<div className="animate-black-hole w-20 h-20 rounded-full bg-black" />`,
    cssCode: `@keyframes black-hole {
  0%, 100% { box-shadow: inset 0 0 30px rgba(255,255,255,0.1), 0 0 50px 20px rgba(128,0,255,0.3); transform: rotate(0deg); }
  50% { box-shadow: inset 0 0 50px rgba(255,255,255,0.05), 0 0 80px 30px rgba(128,0,255,0.5); transform: rotate(180deg); }
}
.animate-black-hole { animation: black-hole 6s ease-in-out infinite; background: radial-gradient(circle at 30% 30%, rgba(50,0,100,1) 0%, black 50%); }`
  },
  {
    id: "V-91",
    name: "Galaxy Spiral",
    category: "vibrant",
    description: "Espiral galáctica com estrelas.",
    animationClass: "animate-galaxy-spiral",
    htmlExample: `<div className="animate-galaxy-spiral w-24 h-24 rounded-full" />`,
    cssCode: `@keyframes galaxy-spiral {
  0% { transform: rotate(0deg); background: conic-gradient(from 0deg, #1a0533, #4a0080, #00ffff, #ff00ff, #1a0533); }
  100% { transform: rotate(360deg); }
}
.animate-galaxy-spiral { animation: galaxy-spiral 20s linear infinite; box-shadow: 0 0 30px rgba(128,0,255,0.5), inset 0 0 20px rgba(255,255,255,0.1); }`
  },
  {
    id: "V-92",
    name: "Neon Heartbeat",
    category: "vibrant",
    description: "Coração neon pulsando.",
    animationClass: "animate-neon-heartbeat",
    htmlExample: `<div className="animate-neon-heartbeat text-4xl text-red-500">❤️</div>`,
    cssCode: `@keyframes neon-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px #ff0000); }
  15% { transform: scale(1.3); filter: drop-shadow(0 0 20px #ff0000) drop-shadow(0 0 40px #ff0000); }
  30% { transform: scale(1); filter: drop-shadow(0 0 5px #ff0000); }
  45% { transform: scale(1.2); filter: drop-shadow(0 0 15px #ff0000); }
}
.animate-neon-heartbeat { animation: neon-heartbeat 1.5s ease-in-out infinite; }`
  },
  {
    id: "V-93",
    name: "Rainbow Wave",
    category: "vibrant",
    description: "Onda de arco-íris atravessando.",
    animationClass: "animate-rainbow-wave",
    htmlExample: `<div className="animate-rainbow-wave w-full h-4 rounded-full" />`,
    cssCode: `@keyframes rainbow-wave {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
.animate-rainbow-wave { animation: rainbow-wave 2s linear infinite; background: linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000); background-size: 200% 100%; }`
  },
  {
    id: "V-94",
    name: "Particle Explosion",
    category: "vibrant",
    description: "Explosão de partículas em 360°.",
    animationClass: "animate-particle-explosion",
    htmlExample: `<div className="animate-particle-explosion w-2 h-2 bg-primary rounded-full" />`,
    cssCode: `@keyframes particle-explosion {
  0% { box-shadow: 0 0 0 0 currentColor; }
  100% { box-shadow: 
    0 -50px 0 -3px currentColor, 50px 0 0 -3px currentColor, 
    0 50px 0 -3px currentColor, -50px 0 0 -3px currentColor,
    35px -35px 0 -3px currentColor, 35px 35px 0 -3px currentColor,
    -35px 35px 0 -3px currentColor, -35px -35px 0 -3px currentColor;
    opacity: 0;
  }
}
.animate-particle-explosion { animation: particle-explosion 0.8s ease-out infinite; }`
  },
  {
    id: "V-95",
    name: "Cyber Wave",
    category: "vibrant",
    description: "Onda cibernética digital.",
    animationClass: "animate-cyber-wave",
    htmlExample: `<div className="animate-cyber-wave h-1 w-full bg-cyan-400" />`,
    cssCode: `@keyframes cyber-wave {
  0% { transform: scaleX(0); transform-origin: left; }
  50% { transform: scaleX(1); transform-origin: left; }
  50.01% { transform-origin: right; }
  100% { transform: scaleX(0); transform-origin: right; }
}
.animate-cyber-wave { animation: cyber-wave 2s ease-in-out infinite; box-shadow: 0 0 10px currentColor; }`
  },
  {
    id: "V-96",
    name: "Fire Blaze",
    category: "vibrant",
    description: "Chamas de fogo ardentes.",
    animationClass: "animate-fire-blaze",
    htmlExample: `<div className="animate-fire-blaze text-4xl">🔥</div>`,
    cssCode: `@keyframes fire-blaze {
  0%, 100% { transform: scale(1) rotate(-2deg); filter: brightness(1); }
  25% { transform: scale(1.1) rotate(2deg); filter: brightness(1.2); }
  50% { transform: scale(0.95) rotate(-1deg); filter: brightness(0.9); }
  75% { transform: scale(1.05) rotate(1deg); filter: brightness(1.1); }
}
.animate-fire-blaze { animation: fire-blaze 0.5s ease-in-out infinite; }`
  },
  {
    id: "V-97",
    name: "Ice Crystals",
    category: "vibrant",
    description: "Cristais de gelo formando.",
    animationClass: "animate-ice-crystals",
    htmlExample: `<div className="animate-ice-crystals text-4xl text-cyan-300">❄️</div>`,
    cssCode: `@keyframes ice-crystals {
  0%, 100% { transform: rotate(0deg) scale(1); filter: drop-shadow(0 0 5px #00ffff); }
  50% { transform: rotate(180deg) scale(1.2); filter: drop-shadow(0 0 15px #00ffff) brightness(1.3); }
}
.animate-ice-crystals { animation: ice-crystals 3s ease-in-out infinite; }`
  },
  {
    id: "V-98",
    name: "Energy Surge",
    category: "vibrant",
    description: "Surto de energia pulsando.",
    animationClass: "animate-energy-surge",
    htmlExample: `<div className="animate-energy-surge w-16 h-16 rounded-full bg-yellow-400" />`,
    cssCode: `@keyframes energy-surge {
  0%, 100% { box-shadow: 0 0 10px #fbbf24, 0 0 20px #fbbf24; transform: scale(1); }
  50% { box-shadow: 0 0 30px #fbbf24, 0 0 60px #f59e0b, 0 0 90px #d97706; transform: scale(1.1); }
}
.animate-energy-surge { animation: energy-surge 1s ease-in-out infinite; }`
  },
  {
    id: "V-99",
    name: "Plasma Wave",
    category: "vibrant",
    description: "Onda de plasma fluindo.",
    animationClass: "animate-plasma-wave",
    htmlExample: `<div className="animate-plasma-wave w-full h-8" />`,
    cssCode: `@keyframes plasma-wave {
  0% { background: linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff); background-position: 0% 50%; }
  50% { background: linear-gradient(90deg, #00ffff, #ff00ff, #00ffff); background-position: 100% 50%; }
  100% { background: linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff); background-position: 0% 50%; }
}
.animate-plasma-wave { animation: plasma-wave 3s ease-in-out infinite; background-size: 200% 100%; border-radius: 4px; }`
  },
  {
    id: "V-100",
    name: "Cosmic Dust",
    category: "vibrant",
    description: "Poeira cósmica brilhando.",
    animationClass: "animate-cosmic-dust",
    htmlExample: `<div className="animate-cosmic-dust w-2 h-2 bg-white rounded-full" />`,
    cssCode: `@keyframes cosmic-dust {
  0%, 100% { opacity: 0.3; transform: scale(1); box-shadow: 0 0 5px white; }
  50% { opacity: 1; transform: scale(1.5); box-shadow: 0 0 15px white, 0 0 30px rgba(255,255,255,0.5); }
}
.animate-cosmic-dust { animation: cosmic-dust 2s ease-in-out infinite; }
/* Use múltiplos com delays diferentes para efeito de campo estelar */`
  }
];

export const categories = [
  { id: "all", name: "Todas", color: "foreground" },
  { id: "futuristic", name: "Futurista", color: "neon-cyan" },
  { id: "modern", name: "Moderno", color: "neon-green" },
  { id: "stylish", name: "Estiloso", color: "neon-purple" },
  { id: "vibrant", name: "Colorido Vibrante", color: "neon-magenta" },
] as const;
