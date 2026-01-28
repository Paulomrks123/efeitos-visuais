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
];

export const categories = [
  { id: "all", name: "Todas", color: "foreground" },
  { id: "futuristic", name: "Futurista", color: "neon-cyan" },
  { id: "modern", name: "Moderno", color: "neon-green" },
  { id: "stylish", name: "Estiloso", color: "neon-purple" },
  { id: "vibrant", name: "Colorido Vibrante", color: "neon-magenta" },
] as const;
