export interface Effect {
  id: string;
  name: string;
  description: string;
  category: "glassmorphism" | "neumorphism" | "filters" | "gradients";
  cssCode: string;
  htmlExample: string;
}

export const effects: Effect[] = [
  // CATEGORIA 1: GLASSMORPHISM & TRANSPARÊNCIA
  {
    id: "G-01",
    name: "Frosted Card",
    description: "Cartão com fundo transparente e efeito de desfoque estilo vidro fosco.",
    category: "glassmorphism",
    htmlExample: `<div className="backdrop-blur-xl bg-white/15 
  border border-white/20 rounded-2xl p-6">
  Conteúdo
</div>`,
    cssCode: `.frosted-card {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}

/* Tailwind */
className="backdrop-blur-xl bg-white/15 
  border border-white/20 rounded-2xl"`,
  },
  {
    id: "G-02",
    name: "Layered Glass",
    description: "Múltiplas camadas de vidro com diferentes níveis de desfoque.",
    category: "glassmorphism",
    htmlExample: `<div className="relative">
  <div className="absolute inset-0 backdrop-blur-sm 
    bg-white/5 rounded-xl" />
  <div className="relative backdrop-blur-xl 
    bg-white/10 rounded-xl p-6">
    Conteúdo
  </div>
</div>`,
    cssCode: `.layer-1 {
  backdrop-filter: blur(5px);
  background: rgba(255, 255, 255, 0.05);
}

.layer-2 {
  backdrop-filter: blur(15px);
  background: rgba(255, 255, 255, 0.1);
}`,
  },
  {
    id: "G-03",
    name: "Glass Button",
    description: "Botão transparente com brilho sutil ao passar o mouse.",
    category: "glassmorphism",
    htmlExample: `<button className="backdrop-blur-xl bg-white/10 
  border border-white/20 px-6 py-3 rounded-xl
  hover:bg-white/20 transition-all">
  Ação
</button>`,
    cssCode: `.glass-button {
  background: linear-gradient(
    135deg, 
    rgba(255, 255, 255, 0.1), 
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.glass-button:hover {
  background: rgba(255, 255, 255, 0.2);
}`,
  },
  {
    id: "G-04",
    name: "Neon Glass",
    description: "Efeito de vidro com borda de brilho neon.",
    category: "glassmorphism",
    htmlExample: `<div className="backdrop-blur-xl bg-white/10 
  rounded-xl p-6 border border-cyan-400/30
  shadow-[0_0_15px_rgba(0,255,255,0.3)]
  hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]
  transition-shadow">
  Neon Glass
</div>`,
    cssCode: `.neon-glass {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.3);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
}

.neon-glass:hover {
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.5);
}`,
  },
  {
    id: "G-05",
    name: "3D Glass Tilt",
    description: "Cartão de vidro que se inclina em 3D ao passar o mouse.",
    category: "glassmorphism",
    htmlExample: `<div className="backdrop-blur-xl bg-white/10 
  rounded-xl p-6 transition-transform duration-300
  hover:[transform:perspective(1000px)_rotateX(5deg)_rotateY(5deg)]">
  3D Tilt
</div>`,
    cssCode: `.glass-tilt {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}

.glass-tilt:hover {
  transform: perspective(1000px) 
    rotateX(5deg) rotateY(5deg);
}`,
  },
  {
    id: "G-06",
    name: "Sidebar Blur",
    description: "Barra lateral que desfoca o conteúdo por trás.",
    category: "glassmorphism",
    htmlExample: `<aside className="fixed left-0 top-0 h-full w-64
  backdrop-blur-2xl bg-black/20 
  border-r border-white/10">
  Menu
</aside>`,
    cssCode: `.sidebar-blur {
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}`,
  },
  {
    id: "G-07",
    name: "Transparent Text",
    description: "Texto vazado que revela o fundo desfocado.",
    category: "glassmorphism",
    htmlExample: `<h1 className="text-6xl font-bold text-transparent
  [-webkit-text-stroke:2px_rgba(255,255,255,0.5)]">
  GLASS
</h1>`,
    cssCode: `.transparent-text {
  color: transparent;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.5);
  font-size: 4rem;
  font-weight: bold;
}`,
  },
  {
    id: "G-08",
    name: "Reflective Stripe",
    description: "Faixa de luz branca que desliza sobre o vidro.",
    category: "glassmorphism",
    htmlExample: `<div className="relative overflow-hidden backdrop-blur-xl 
  bg-white/10 rounded-xl p-6">
  <span className="absolute inset-0 -translate-x-full
    bg-gradient-to-r from-transparent via-white/30 to-transparent
    animate-[shimmer_2s_infinite]" />
  Conteúdo
</div>`,
    cssCode: `.reflective-stripe::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  to { transform: translateX(200%); }
}`,
  },
  {
    id: "G-09",
    name: "Circular Glass",
    description: "Efeito de vidro aplicado a um elemento circular.",
    category: "glassmorphism",
    htmlExample: `<div className="w-24 h-24 rounded-full 
  backdrop-blur-xl bg-white/15 
  border border-white/20
  flex items-center justify-center">
  🔮
</div>`,
    cssCode: `.circular-glass {
  border-radius: 50%;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.2);
}`,
  },
  {
    id: "G-10",
    name: "Glass Popover",
    description: "Popover ou tooltip com fundo de vidro.",
    category: "glassmorphism",
    htmlExample: `<div className="backdrop-blur-lg bg-white/10 
  rounded-lg p-4 shadow-2xl
  border border-white/20">
  Popover Content
</div>`,
    cssCode: `.glass-popover {
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
  border-radius: 8px;
}`,
  },
  
  // CATEGORIA 2: NEUMORPHISM & SOFT UI
  {
    id: "N-21",
    name: "Convex Card",
    description: "Cartão que parece 'saltar' para fora da superfície.",
    category: "neumorphism",
    htmlExample: `<div className="bg-[#e0e0e0] rounded-2xl p-6
  shadow-[8px_8px_15px_#a7a7a7,-8px_-8px_15px_#ffffff]">
  Convex Card
</div>`,
    cssCode: `.neumorphic-card {
  background: #e0e0e0;
  border-radius: 16px;
  box-shadow: 
    8px 8px 15px #a7a7a7,
    -8px -8px 15px #ffffff;
}`,
  },
  {
    id: "N-22",
    name: "Concave Input",
    description: "Campo de entrada que parece 'afundar' na superfície.",
    category: "neumorphism",
    htmlExample: `<input 
  className="bg-[#e0e0e0] rounded-xl px-4 py-3
    shadow-[inset_5px_5px_10px_#a7a7a7,inset_-5px_-5px_10px_#ffffff]
    outline-none" 
  placeholder="Digite aqui..."
/>`,
    cssCode: `.neumorphic-input {
  background: #e0e0e0;
  border-radius: 12px;
  box-shadow: 
    inset 5px 5px 10px #a7a7a7,
    inset -5px -5px 10px #ffffff;
  outline: none;
  border: none;
}`,
  },
  {
    id: "N-23",
    name: "Pressed Button",
    description: "Botão que simula estado pressionado.",
    category: "neumorphism",
    htmlExample: `<button className="bg-[#e0e0e0] rounded-xl px-6 py-3
  shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
  Pressed
</button>`,
    cssCode: `.pressed-button {
  background: #e0e0e0;
  border-radius: 12px;
  box-shadow: 
    inset 6px 6px 12px #bebebe,
    inset -6px -6px 12px #ffffff;
}`,
  },
  {
    id: "N-24",
    name: "Raised Button",
    description: "Botão elevado com sombra externa suave.",
    category: "neumorphism",
    htmlExample: `<button className="bg-[#e0e0e0] rounded-xl px-6 py-3
  shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]
  active:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]
  transition-shadow">
  Raised
</button>`,
    cssCode: `.raised-button {
  background: #e0e0e0;
  border-radius: 12px;
  box-shadow: 
    6px 6px 12px #bebebe,
    -6px -6px 12px #ffffff;
  transition: box-shadow 0.2s ease;
}

.raised-button:active {
  box-shadow: 
    inset 6px 6px 12px #bebebe,
    inset -6px -6px 12px #ffffff;
}`,
  },
  {
    id: "N-25",
    name: "Circular Toggle",
    description: "Botão de alternância redondo com efeito de pressionar.",
    category: "neumorphism",
    htmlExample: `<div className="w-16 h-16 rounded-full bg-[#e0e0e0]
  shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]
  flex items-center justify-center cursor-pointer
  active:shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
  ⚡
</div>`,
    cssCode: `.circular-toggle {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #e0e0e0;
  box-shadow: 
    6px 6px 12px #bebebe,
    -6px -6px 12px #ffffff;
  cursor: pointer;
}

.circular-toggle:active {
  box-shadow: 
    inset 6px 6px 12px #bebebe,
    inset -6px -6px 12px #ffffff;
}`,
  },
  {
    id: "N-26",
    name: "Soft Icon",
    description: "Ícone com sombra suave que o destaca.",
    category: "neumorphism",
    htmlExample: `<div className="text-4xl text-gray-600
  [filter:drop-shadow(2px_2px_2px_#bebebe)_drop-shadow(-2px_-2px_2px_#ffffff)]">
  ⭐
</div>`,
    cssCode: `.soft-icon {
  filter: 
    drop-shadow(2px 2px 2px #bebebe) 
    drop-shadow(-2px -2px 2px #ffffff);
}`,
  },
  {
    id: "N-27",
    name: "Neumorphic Ring",
    description: "Anel de progresso com efeito de profundidade.",
    category: "neumorphism",
    htmlExample: `<div className="w-24 h-24 rounded-full bg-[#e0e0e0]
  shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]
  flex items-center justify-center">
  <div className="w-16 h-16 rounded-full bg-[#e0e0e0]
    shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff]" />
</div>`,
    cssCode: `.neumorphic-ring {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: #e0e0e0;
  box-shadow: 
    inset 4px 4px 8px #bebebe,
    inset -4px -4px 8px #ffffff;
}

.neumorphic-ring-inner {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #e0e0e0;
  box-shadow: 
    4px 4px 8px #bebebe,
    -4px -4px 8px #ffffff;
}`,
  },
  {
    id: "N-29",
    name: "Neumorphic Text",
    description: "Texto que parece esculpido na superfície.",
    category: "neumorphism",
    htmlExample: `<h1 className="text-4xl font-bold text-[#e0e0e0]
  [text-shadow:2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff]">
  SOFT
</h1>`,
    cssCode: `.neumorphic-text {
  color: #e0e0e0;
  text-shadow: 
    2px 2px 4px #bebebe,
    -2px -2px 4px #ffffff;
}`,
  },
  {
    id: "N-31",
    name: "Neumorphic Avatar",
    description: "Imagem de perfil em círculo côncavo.",
    category: "neumorphism",
    htmlExample: `<div className="w-20 h-20 rounded-full bg-[#e0e0e0] p-1
  shadow-[inset_5px_5px_10px_#bebebe,inset_-5px_-5px_10px_#ffffff]">
  <div className="w-full h-full rounded-full bg-gradient-to-br 
    from-cyan-400 to-blue-500" />
</div>`,
    cssCode: `.neumorphic-avatar {
  border-radius: 50%;
  background: #e0e0e0;
  padding: 4px;
  box-shadow: 
    inset 5px 5px 10px #bebebe,
    inset -5px -5px 10px #ffffff;
}`,
  },
  {
    id: "N-37",
    name: "Neumorphic Badge",
    description: "Etiqueta com efeito de relevo suave.",
    category: "neumorphism",
    htmlExample: `<span className="bg-[#e0e0e0] px-3 py-1 rounded-full text-sm
  shadow-[2px_2px_4px_#bebebe,-2px_-2px_4px_#ffffff]">
  Novo
</span>`,
    cssCode: `.neumorphic-badge {
  background: #e0e0e0;
  padding: 4px 12px;
  border-radius: 9999px;
  box-shadow: 
    2px 2px 4px #bebebe,
    -2px -2px 4px #ffffff;
}`,
  },

  // CATEGORIA 3: FILTROS E MÁSCARAS
  {
    id: "F-41",
    name: "Duotone Filter",
    description: "Imagem com filtro de duas cores (ciano e magenta).",
    category: "filters",
    htmlExample: `<img 
  src="/image.jpg"
  className="[filter:sepia(1)_hue-rotate(200deg)_saturate(3)]"
/>`,
    cssCode: `.duotone-filter {
  filter: sepia(1) hue-rotate(200deg) saturate(3);
}

/* Variações */
.duotone-purple {
  filter: sepia(1) hue-rotate(260deg) saturate(2);
}

.duotone-gold {
  filter: sepia(1) hue-rotate(10deg) saturate(2);
}`,
  },
  {
    id: "F-42",
    name: "Chromatic Aberration",
    description: "Desvio de cor sutil (vermelho/ciano) em um elemento.",
    category: "filters",
    htmlExample: `<div className="text-4xl font-bold
  [filter:drop-shadow(2px_0_0_red)_drop-shadow(-2px_0_0_cyan)]">
  CHROMATIC
</div>`,
    cssCode: `.chromatic-aberration {
  filter: 
    drop-shadow(2px 0 0 red) 
    drop-shadow(-2px 0 0 cyan);
}

/* Variação intensa */
.chromatic-intense {
  filter: 
    drop-shadow(4px 0 0 rgba(255,0,0,0.8)) 
    drop-shadow(-4px 0 0 rgba(0,255,255,0.8));
}`,
  },
  {
    id: "F-43",
    name: "Image Clip Circle",
    description: "Imagem recortada em formato circular.",
    category: "filters",
    htmlExample: `<img 
  src="/image.jpg"
  className="[clip-path:circle(50%_at_50%_50%)]"
/>`,
    cssCode: `.clip-circle {
  clip-path: circle(50% at 50% 50%);
}

/* Variações */
.clip-ellipse {
  clip-path: ellipse(40% 60% at 50% 50%);
}`,
  },
  {
    id: "F-44",
    name: "Clip Path Reveal",
    description: "Elemento revelado através de forma animada.",
    category: "filters",
    htmlExample: `<div className="animate-[reveal_0.5s_ease-out_forwards]
  [clip-path:inset(50%)]">
  Revealed Content
</div>

/* Em CSS */
@keyframes reveal {
  to { clip-path: inset(0%); }
}`,
    cssCode: `@keyframes clip-reveal {
  from { clip-path: inset(50%); }
  to { clip-path: inset(0%); }
}

.clip-reveal {
  animation: clip-reveal 0.5s ease-out forwards;
}

/* Variação circular */
@keyframes circle-reveal {
  from { clip-path: circle(0% at 50% 50%); }
  to { clip-path: circle(100% at 50% 50%); }
}`,
  },
  {
    id: "F-45",
    name: "Hover Grayscale",
    description: "Imagem que fica em escala de cinza ao passar o mouse.",
    category: "filters",
    htmlExample: `<img 
  src="/image.jpg"
  className="grayscale-0 hover:grayscale 
    transition-[filter] duration-300"
/>`,
    cssCode: `.hover-grayscale {
  filter: grayscale(0);
  transition: filter 0.3s ease;
}

.hover-grayscale:hover {
  filter: grayscale(100%);
}

/* Inverso: começa cinza */
.hover-colorize {
  filter: grayscale(100%);
}
.hover-colorize:hover {
  filter: grayscale(0);
}`,
  },
  {
    id: "F-47",
    name: "Polygonal Mask",
    description: "Recorte de imagem em formato poligonal.",
    category: "filters",
    htmlExample: `<img 
  src="/image.jpg"
  className="[clip-path:polygon(0_0,100%_0,100%_75%,50%_100%,0_75%)]"
/>`,
    cssCode: `.polygonal-mask {
  clip-path: polygon(
    0 0, 
    100% 0, 
    100% 75%, 
    50% 100%, 
    0 75%
  );
}

/* Hexágono */
.hexagon {
  clip-path: polygon(
    50% 0%, 100% 25%, 100% 75%, 
    50% 100%, 0% 75%, 0% 25%
  );
}`,
  },
  {
    id: "F-49",
    name: "Text Clip Gradient",
    description: "Texto preenchido com gradiente de cor.",
    category: "filters",
    htmlExample: `<h1 className="text-4xl font-bold bg-gradient-to-r 
  from-cyan-400 via-purple-500 to-pink-500 
  bg-clip-text text-transparent">
  Gradient Text
</h1>`,
    cssCode: `.text-clip-gradient {
  background: linear-gradient(
    to right,
    #00ffff,
    #a855f7,
    #ec4899
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}`,
  },
  {
    id: "F-53",
    name: "Hover Invert",
    description: "Inversão de cores ao passar o mouse.",
    category: "filters",
    htmlExample: `<div className="invert-0 hover:invert 
  transition-[filter] duration-300 p-4 rounded-lg">
  Hover to Invert
</div>`,
    cssCode: `.hover-invert {
  filter: invert(0);
  transition: filter 0.3s ease;
}

.hover-invert:hover {
  filter: invert(100%);
}`,
  },
  {
    id: "F-56",
    name: "Image Vignette",
    description: "Efeito de vinheta (escurecimento das bordas).",
    category: "filters",
    htmlExample: `<div className="relative">
  <img src="/image.jpg" className="w-full" />
  <div className="absolute inset-0 
    [background:radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.7))]" />
</div>`,
    cssCode: `.vignette::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at center,
    transparent 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  pointer-events: none;
}`,
  },
  {
    id: "F-60",
    name: "Backdrop Hue Rotate",
    description: "Rotação de matiz no fundo desfocado.",
    category: "filters",
    htmlExample: `<div className="[backdrop-filter:blur(10px)_hue-rotate(90deg)]
  bg-white/10 p-6 rounded-xl">
  Hue Rotated Backdrop
</div>`,
    cssCode: `.backdrop-hue-rotate {
  backdrop-filter: blur(10px) hue-rotate(90deg);
  background: rgba(255, 255, 255, 0.1);
}

/* Variações */
.backdrop-saturate {
  backdrop-filter: blur(10px) saturate(200%);
}`,
  },

  // CATEGORIA 4: GRADIENTES E FUNDOS DINÂMICOS
  {
    id: "D-61",
    name: "Animated Rainbow BG",
    description: "Fundo com gradiente arco-íris em movimento.",
    category: "gradients",
    htmlExample: `<div className="bg-gradient-to-r 
  from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500
  bg-[length:400%_400%] animate-[gradient-shift_3s_ease_infinite]">
  Rainbow
</div>`,
    cssCode: `@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.rainbow-bg {
  background: linear-gradient(
    to right,
    red, orange, yellow, green, blue, purple, red
  );
  background-size: 400% 400%;
  animation: gradient-shift 3s ease infinite;
}`,
  },
  {
    id: "D-62",
    name: "3D Gradient Sphere",
    description: "Simulação de esfera 3D com gradiente radial.",
    category: "gradients",
    htmlExample: `<div className="w-32 h-32 rounded-full
  bg-[radial-gradient(circle_at_30%_30%,#fff,#00ffff,#0066ff,#000)]" />`,
    cssCode: `.gradient-sphere {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 30% 30%,
    #ffffff,
    #00ffff,
    #0066ff,
    #000000
  );
}`,
  },
  {
    id: "D-63",
    name: "Vibrant Blob BG",
    description: "Formas orgânicas que se movem e se fundem.",
    category: "gradients",
    htmlExample: `<div className="relative h-64 overflow-hidden">
  <div className="absolute w-64 h-64 rounded-full 
    bg-cyan-400 blur-3xl opacity-50 
    animate-[float_8s_ease-in-out_infinite]" />
  <div className="absolute right-0 w-64 h-64 rounded-full 
    bg-purple-500 blur-3xl opacity-50 
    animate-[float_6s_ease-in-out_infinite_reverse]" />
</div>`,
    cssCode: `.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.5;
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, -30px); }
}`,
  },
  {
    id: "D-65",
    name: "Mesh Gradient",
    description: "Gradiente complexo com múltiplos pontos de cor.",
    category: "gradients",
    htmlExample: `<div className="h-64
  bg-[radial-gradient(at_40%_20%,#ff00ff_0px,transparent_50%),radial-gradient(at_80%_0%,#00ffff_0px,transparent_50%),radial-gradient(at_0%_50%,#00ff00_0px,transparent_50%)]
  bg-background" />`,
    cssCode: `.mesh-gradient {
  background: 
    radial-gradient(at 40% 20%, #ff00ff 0px, transparent 50%),
    radial-gradient(at 80% 0%, #00ffff 0px, transparent 50%),
    radial-gradient(at 0% 50%, #00ff00 0px, transparent 50%),
    radial-gradient(at 80% 50%, #ff6600 0px, transparent 50%),
    radial-gradient(at 0% 100%, #0066ff 0px, transparent 50%);
}`,
  },
  {
    id: "D-66",
    name: "Diagonal Stripes",
    description: "Fundo com listras diagonais animadas.",
    category: "gradients",
    htmlExample: `<div className="h-32
  bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]
  animate-[stripe-move_1s_linear_infinite]" />`,
    cssCode: `@keyframes stripe-move {
  to { background-position: 28px 0; }
}

.diagonal-stripes {
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(255, 255, 255, 0.1) 10px,
    rgba(255, 255, 255, 0.1) 20px
  );
  animation: stripe-move 1s linear infinite;
}`,
  },
  {
    id: "D-70",
    name: "Retro Grid BG",
    description: "Fundo com grade de perspectiva retrô.",
    category: "gradients",
    htmlExample: `<div className="relative h-64 overflow-hidden 
  bg-gradient-to-b from-purple-900 to-black">
  <div className="absolute bottom-0 left-0 right-0 h-48
    bg-[linear-gradient(rgba(255,0,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.3)_1px,transparent_1px)]
    bg-[size:40px_40px]
    [transform:perspective(200px)_rotateX(60deg)]
    [transform-origin:bottom]" />
</div>`,
    cssCode: `.retro-grid {
  background: 
    linear-gradient(rgba(255, 0, 255, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 0, 255, 0.3) 1px, transparent 1px);
  background-size: 40px 40px;
  transform: perspective(200px) rotateX(60deg);
  transform-origin: bottom;
}`,
  },
  {
    id: "D-71",
    name: "Floating Elements",
    description: "Elementos que flutuam lentamente na tela.",
    category: "gradients",
    htmlExample: `<div className="relative h-48">
  {['⭐', '💫', '✨'].map((icon, i) => (
    <span 
      key={i}
      className="absolute animate-float text-2xl"
      style={{ 
        left: \`\${i * 30 + 20}%\`,
        animationDelay: \`\${i * 0.5}s\` 
      }}
    >
      {icon}
    </span>
  ))}
</div>`,
    cssCode: `@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.floating-element {
  animation: float 4s ease-in-out infinite;
}

/* Com rotação */
@keyframes float-rotate {
  0%, 100% { 
    transform: translateY(0) rotate(0deg); 
  }
  50% { 
    transform: translateY(-20px) rotate(10deg); 
  }
}`,
  },
  {
    id: "D-73",
    name: "Text Highlight Pan",
    description: "Destaque de texto com gradiente que se move.",
    category: "gradients",
    htmlExample: `<h1 className="text-4xl font-bold
  bg-gradient-to-r from-foreground via-primary to-foreground
  bg-[length:200%_100%] bg-clip-text text-transparent
  animate-[highlight-pan_3s_linear_infinite]">
  Highlighted Text
</h1>`,
    cssCode: `@keyframes highlight-pan {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}

.highlight-pan {
  background: linear-gradient(
    to right,
    currentColor,
    #00ffff,
    currentColor
  );
  background-size: 200% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: highlight-pan 3s linear infinite;
}`,
  },
  {
    id: "D-77",
    name: "Circular Reveal",
    description: "Conteúdo revelado por círculo que se expande.",
    category: "gradients",
    htmlExample: `<div className="animate-[circle-reveal_0.5s_ease-out_forwards]
  [clip-path:circle(0%_at_50%_50%)]">
  Revealed Content
</div>

@keyframes circle-reveal {
  to { clip-path: circle(100% at 50% 50%); }
}`,
    cssCode: `@keyframes circle-reveal {
  from { 
    clip-path: circle(0% at 50% 50%); 
  }
  to { 
    clip-path: circle(100% at 50% 50%); 
  }
}

.circular-reveal {
  animation: circle-reveal 0.5s ease-out forwards;
}

/* Revelar do canto */
@keyframes corner-reveal {
  from { clip-path: circle(0% at 0% 0%); }
  to { clip-path: circle(150% at 0% 0%); }
}`,
  },
  {
    id: "D-80",
    name: "Radial Glow",
    description: "Brilho radial que pulsa no centro do elemento.",
    category: "gradients",
    htmlExample: `<div className="w-32 h-32 rounded-full 
  bg-gradient-to-br from-purple-500 to-pink-500
  animate-[radial-glow_2s_ease-in-out_infinite]
  shadow-[0_0_30px_rgba(168,85,247,0.5)]" />`,
    cssCode: `@keyframes radial-glow {
  0%, 100% { 
    box-shadow: 0 0 30px rgba(168, 85, 247, 0.5);
  }
  50% { 
    box-shadow: 0 0 60px rgba(168, 85, 247, 0.8),
                0 0 100px rgba(168, 85, 247, 0.4);
  }
}

.radial-glow {
  animation: radial-glow 2s ease-in-out infinite;
}`,
  },
];

export const effectCategories = [
  { id: "all", name: "Todos", color: "foreground" },
  { id: "glassmorphism", name: "Glassmorphism", color: "neon-cyan" },
  { id: "neumorphism", name: "Neumorphism", color: "neon-green" },
  { id: "filters", name: "Filtros", color: "neon-purple" },
  { id: "gradients", name: "Gradientes", color: "neon-magenta" },
] as const;
