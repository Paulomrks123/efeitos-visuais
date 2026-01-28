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

  // ========== 50 NOVOS EFEITOS VISUAIS ÉPICOS ==========
  
  // GLASSMORPHISM AVANÇADO (12)
  {
    id: "G-21",
    name: "Frosted Aurora",
    description: "Vidro fosco com aurora boreal por trás.",
    category: "glassmorphism",
    htmlExample: `<div className="relative overflow-hidden backdrop-blur-2xl bg-white/10 rounded-2xl p-8">
  <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 opacity-30 animate-pulse" />
  <span className="relative z-10">Aurora Glass</span>
</div>`,
    cssCode: `.frosted-aurora {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}
.frosted-aurora::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, #22c55e, #3b82f6, #a855f7);
  opacity: 0.3;
  animation: aurora-shift 5s ease-in-out infinite;
}
@keyframes aurora-shift {
  0%, 100% { transform: translateX(-50%); }
  50% { transform: translateX(50%); }
}`
  },
  {
    id: "G-22",
    name: "Crystal Clear",
    description: "Cristal transparente com reflexos dinâmicos.",
    category: "glassmorphism",
    htmlExample: `<div className="backdrop-blur-3xl bg-gradient-to-br from-white/20 to-white/5 border border-white/30 rounded-2xl p-6 shadow-2xl">
  Crystal Clear
</div>`,
    cssCode: `.crystal-clear {
  backdrop-filter: blur(30px);
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%);
  border: 1px solid rgba(255,255,255,0.3);
  box-shadow: 
    0 25px 50px -12px rgba(0,0,0,0.25),
    inset 0 1px 0 rgba(255,255,255,0.2);
}`
  },
  {
    id: "G-23",
    name: "Smoke Glass",
    description: "Vidro com efeito de fumaça sutil.",
    category: "glassmorphism",
    htmlExample: `<div className="backdrop-blur-xl bg-black/30 rounded-xl p-6 border border-white/5">
  Smoke Glass
</div>`,
    cssCode: `.smoke-glass {
  backdrop-filter: blur(10px) saturate(150%);
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}`
  },
  {
    id: "G-24",
    name: "Holographic Glass",
    description: "Vidro com efeito holográfico iridescente.",
    category: "glassmorphism",
    htmlExample: `<div className="backdrop-blur-xl rounded-xl p-6" style={{background: "linear-gradient(135deg, rgba(255,0,255,0.1), rgba(0,255,255,0.1), rgba(255,255,0,0.1))"}}>
  Holographic
</div>`,
    cssCode: `.holographic-glass {
  backdrop-filter: blur(15px);
  background: linear-gradient(
    135deg,
    rgba(255, 0, 255, 0.1) 0%,
    rgba(0, 255, 255, 0.1) 50%,
    rgba(255, 255, 0, 0.1) 100%
  );
  animation: holo-shift 3s ease-in-out infinite;
}
@keyframes holo-shift {
  0%, 100% { filter: hue-rotate(0deg); }
  50% { filter: hue-rotate(30deg); }
}`
  },
  {
    id: "G-25",
    name: "Diamond Cut",
    description: "Bordas facetadas como diamante.",
    category: "glassmorphism",
    htmlExample: `<div className="backdrop-blur-xl bg-white/10 p-6" style={{clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)"}}>
  Diamond
</div>`,
    cssCode: `.diamond-cut {
  backdrop-filter: blur(15px);
  background: rgba(255, 255, 255, 0.1);
  clip-path: polygon(
    20% 0%, 80% 0%, 100% 20%, 100% 80%,
    80% 100%, 20% 100%, 0% 80%, 0% 20%
  );
  box-shadow: inset 0 0 30px rgba(255,255,255,0.2);
}`
  },
  {
    id: "G-26",
    name: "Ripple Glass",
    description: "Vidro com efeito de ondulação na água.",
    category: "glassmorphism",
    htmlExample: `<div className="backdrop-blur-xl bg-cyan-500/10 rounded-full w-32 h-32 flex items-center justify-center animate-pulse">
  💧
</div>`,
    cssCode: `.ripple-glass {
  backdrop-filter: blur(10px);
  background: rgba(0, 200, 255, 0.1);
  border-radius: 50%;
  animation: ripple-effect 2s ease-out infinite;
}
@keyframes ripple-effect {
  0% { box-shadow: 0 0 0 0 rgba(0, 200, 255, 0.4); }
  100% { box-shadow: 0 0 0 30px rgba(0, 200, 255, 0); }
}`
  },
  {
    id: "G-27",
    name: "Plasma Glass",
    description: "Vidro com plasma colorido flutuante.",
    category: "glassmorphism",
    htmlExample: `<div className="relative backdrop-blur-xl bg-purple-500/10 rounded-xl p-6 overflow-hidden">
  <div className="absolute inset-0 bg-gradient-conic from-pink-500 via-purple-500 to-pink-500 opacity-20 animate-spin" style={{animationDuration: "10s"}} />
  Plasma
</div>`,
    cssCode: `.plasma-glass {
  backdrop-filter: blur(15px);
  background: rgba(168, 85, 247, 0.1);
  position: relative;
  overflow: hidden;
}
.plasma-glass::before {
  content: '';
  position: absolute;
  inset: -50%;
  background: conic-gradient(from 0deg, #ec4899, #8b5cf6, #ec4899);
  opacity: 0.2;
  animation: plasma-spin 10s linear infinite;
}
@keyframes plasma-spin { to { transform: rotate(360deg); } }`
  },
  {
    id: "G-28",
    name: "Nebula Glass",
    description: "Vidro com nebulosa espacial.",
    category: "glassmorphism",
    htmlExample: `<div className="backdrop-blur-2xl bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 rounded-xl p-6 border border-purple-500/20">
  Nebula
</div>`,
    cssCode: `.nebula-glass {
  backdrop-filter: blur(20px);
  background: linear-gradient(
    135deg,
    rgba(88, 28, 135, 0.3) 0%,
    rgba(131, 24, 67, 0.2) 50%,
    rgba(30, 58, 138, 0.3) 100%
  );
  border: 1px solid rgba(168, 85, 247, 0.2);
}`
  },
  {
    id: "G-29",
    name: "Ice Glass",
    description: "Vidro congelado com cristais.",
    category: "glassmorphism",
    htmlExample: `<div className="backdrop-blur-xl bg-cyan-100/20 rounded-xl p-6 border border-cyan-200/30 shadow-lg shadow-cyan-500/20">
  ❄️ Ice
</div>`,
    cssCode: `.ice-glass {
  backdrop-filter: blur(12px) brightness(1.1);
  background: rgba(224, 247, 250, 0.2);
  border: 1px solid rgba(224, 247, 250, 0.3);
  box-shadow: 0 10px 40px rgba(0, 188, 212, 0.2);
}`
  },
  {
    id: "G-30",
    name: "Prism Glass",
    description: "Vidro com divisão de luz prismática.",
    category: "glassmorphism",
    htmlExample: `<div className="backdrop-blur-xl rounded-xl p-6 overflow-hidden" style={{background: "linear-gradient(90deg, rgba(255,0,0,0.1), rgba(255,127,0,0.1), rgba(255,255,0,0.1), rgba(0,255,0,0.1), rgba(0,0,255,0.1), rgba(139,0,255,0.1))"}}>
  Prism
</div>`,
    cssCode: `.prism-glass {
  backdrop-filter: blur(15px);
  background: linear-gradient(
    90deg,
    rgba(255,0,0,0.1), rgba(255,127,0,0.1),
    rgba(255,255,0,0.1), rgba(0,255,0,0.1),
    rgba(0,0,255,0.1), rgba(139,0,255,0.1)
  );
  border: 1px solid rgba(255,255,255,0.2);
}`
  },
  {
    id: "G-31",
    name: "Mercury Glass",
    description: "Vidro espelhado como mercúrio líquido.",
    category: "glassmorphism",
    htmlExample: `<div className="backdrop-blur-xl bg-gradient-to-br from-gray-300/30 via-white/40 to-gray-400/30 rounded-xl p-6 border border-white/40">
  Mercury
</div>`,
    cssCode: `.mercury-glass {
  backdrop-filter: blur(15px);
  background: linear-gradient(
    135deg,
    rgba(200, 200, 200, 0.3) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(180, 180, 180, 0.3) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: inset 0 0 20px rgba(255,255,255,0.3);
}`
  },
  {
    id: "G-32",
    name: "Obsidian Glass",
    description: "Vidro escuro como obsidiana vulcânica.",
    category: "glassmorphism",
    htmlExample: `<div className="backdrop-blur-xl bg-black/50 rounded-xl p-6 border border-purple-900/30 shadow-2xl shadow-purple-900/20">
  Obsidian
</div>`,
    cssCode: `.obsidian-glass {
  backdrop-filter: blur(15px) brightness(0.8);
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(88, 28, 135, 0.3);
  box-shadow: 0 25px 50px rgba(88, 28, 135, 0.2);
}`
  },
  
  // NEUMORPHISM AVANÇADO (12)
  {
    id: "N-41",
    name: "Dark Neumorph",
    description: "Neumorfismo para temas escuros.",
    category: "neumorphism",
    htmlExample: `<div className="bg-gray-900 rounded-2xl p-6 shadow-[8px_8px_16px_#0d0d0d,-8px_-8px_16px_#1a1a1a]">
  Dark Mode
</div>`,
    cssCode: `.dark-neumorph {
  background: #171717;
  border-radius: 16px;
  box-shadow: 
    8px 8px 16px #0d0d0d,
    -8px -8px 16px #1f1f1f;
}`
  },
  {
    id: "N-42",
    name: "Colored Neumorph",
    description: "Neumorfismo com cores vibrantes.",
    category: "neumorphism",
    htmlExample: `<div className="bg-blue-500 rounded-2xl p-6 shadow-[8px_8px_16px_#1d4ed8,-8px_-8px_16px_#60a5fa]">
  Colored
</div>`,
    cssCode: `.colored-neumorph {
  background: #3b82f6;
  border-radius: 16px;
  box-shadow: 
    8px 8px 16px #1d4ed8,
    -8px -8px 16px #60a5fa;
}`
  },
  {
    id: "N-43",
    name: "Neumorph Glow",
    description: "Neumorfismo com brilho neon.",
    category: "neumorphism",
    htmlExample: `<div className="bg-gray-200 rounded-2xl p-6 shadow-[6px_6px_12px_#b8b8b8,-6px_-6px_12px_#ffffff,0_0_20px_rgba(0,255,255,0.3)]">
  Glowing
</div>`,
    cssCode: `.neumorph-glow {
  background: #e5e5e5;
  border-radius: 16px;
  box-shadow: 
    6px 6px 12px #b8b8b8,
    -6px -6px 12px #ffffff,
    0 0 20px rgba(0, 255, 255, 0.3);
}`
  },
  {
    id: "N-44",
    name: "Neumorph Gradient",
    description: "Neumorfismo com fundo gradiente.",
    category: "neumorphism",
    htmlExample: `<div className="bg-gradient-to-br from-gray-100 to-gray-300 rounded-2xl p-6 shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]">
  Gradient
</div>`,
    cssCode: `.neumorph-gradient {
  background: linear-gradient(135deg, #f5f5f5 0%, #d4d4d4 100%);
  border-radius: 16px;
  box-shadow: 
    8px 8px 16px #bebebe,
    -8px -8px 16px #ffffff;
}`
  },
  {
    id: "N-45",
    name: "Floating Neumorph",
    description: "Neumorfismo que parece flutuar.",
    category: "neumorphism",
    htmlExample: `<div className="bg-gray-200 rounded-2xl p-6 shadow-[12px_12px_24px_#a3a3a3,-12px_-12px_24px_#ffffff] transform hover:-translate-y-2 transition-transform">
  Floating
</div>`,
    cssCode: `.floating-neumorph {
  background: #e5e5e5;
  border-radius: 16px;
  box-shadow: 
    12px 12px 24px #a3a3a3,
    -12px -12px 24px #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.floating-neumorph:hover {
  transform: translateY(-8px);
  box-shadow: 
    16px 16px 32px #a3a3a3,
    -16px -16px 32px #ffffff;
}`
  },
  {
    id: "N-46",
    name: "Pill Neumorph",
    description: "Forma de pílula neumórfica.",
    category: "neumorphism",
    htmlExample: `<div className="bg-gray-200 rounded-full px-8 py-4 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]">
  Pill Shape
</div>`,
    cssCode: `.pill-neumorph {
  background: #e5e5e5;
  border-radius: 9999px;
  padding: 16px 32px;
  box-shadow: 
    6px 6px 12px #bebebe,
    -6px -6px 12px #ffffff;
}`
  },
  {
    id: "N-47",
    name: "Neumorph Dial",
    description: "Mostrador circular neumórfico.",
    category: "neumorphism",
    htmlExample: `<div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]">
  <div className="w-24 h-24 bg-gray-200 rounded-full shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]" />
</div>`,
    cssCode: `.neumorph-dial-outer {
  width: 128px; height: 128px;
  background: #e5e5e5;
  border-radius: 50%;
  box-shadow: inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff;
}
.neumorph-dial-inner {
  width: 96px; height: 96px;
  background: #e5e5e5;
  border-radius: 50%;
  box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff;
}`
  },
  {
    id: "N-48",
    name: "Neumorph Keyboard Key",
    description: "Tecla de teclado neumórfica.",
    category: "neumorphism",
    htmlExample: `<div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] transition-shadow cursor-pointer">
  A
</div>`,
    cssCode: `.neumorph-key {
  width: 48px; height: 48px;
  background: #e5e5e5;
  border-radius: 8px;
  box-shadow: 4px 4px 8px #bebebe, -4px -4px 8px #ffffff;
  transition: box-shadow 0.1s ease;
  cursor: pointer;
}
.neumorph-key:active {
  box-shadow: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff;
}`
  },
  {
    id: "N-49",
    name: "Neumorph Progress",
    description: "Barra de progresso neumórfica.",
    category: "neumorphism",
    htmlExample: `<div className="w-full h-4 bg-gray-200 rounded-full shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]">
  <div className="h-full w-3/4 bg-cyan-400 rounded-full shadow-[2px_2px_4px_#06b6d4]" />
</div>`,
    cssCode: `.neumorph-progress-track {
  width: 100%; height: 16px;
  background: #e5e5e5;
  border-radius: 9999px;
  box-shadow: inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff;
}
.neumorph-progress-fill {
  height: 100%;
  background: #22d3ee;
  border-radius: 9999px;
  box-shadow: 2px 2px 4px #06b6d4;
}`
  },
  {
    id: "N-50",
    name: "Neumorph Card Stack",
    description: "Pilha de cartões neumórficos.",
    category: "neumorphism",
    htmlExample: `<div className="relative">
  <div className="absolute top-4 left-4 w-full h-full bg-gray-200 rounded-xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] opacity-50" />
  <div className="absolute top-2 left-2 w-full h-full bg-gray-200 rounded-xl shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] opacity-70" />
  <div className="relative bg-gray-200 rounded-xl p-6 shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff]">Top Card</div>
</div>`,
    cssCode: `.neumorph-card-stack {
  position: relative;
}
.neumorph-card {
  background: #e5e5e5;
  border-radius: 12px;
  box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff;
}`
  },
  {
    id: "N-51",
    name: "Neumorph Meter",
    description: "Medidor semicircular neumórfico.",
    category: "neumorphism",
    htmlExample: `<div className="w-32 h-16 bg-gray-200 rounded-t-full overflow-hidden shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]">
  <div className="w-full h-full bg-gradient-to-r from-green-400 to-red-400 opacity-50" />
</div>`,
    cssCode: `.neumorph-meter {
  width: 128px; height: 64px;
  background: #e5e5e5;
  border-radius: 64px 64px 0 0;
  overflow: hidden;
  box-shadow: inset 6px 6px 12px #bebebe, inset -6px -6px 12px #ffffff;
}`
  },
  {
    id: "N-52",
    name: "Neumorph Switch Track",
    description: "Trilho de switch neumórfico.",
    category: "neumorphism",
    htmlExample: `<div className="w-16 h-8 bg-gray-200 rounded-full p-1 shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]">
  <div className="w-6 h-6 bg-cyan-400 rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.2)]" />
</div>`,
    cssCode: `.neumorph-switch-track {
  width: 64px; height: 32px;
  background: #e5e5e5;
  border-radius: 9999px;
  padding: 4px;
  box-shadow: inset 4px 4px 8px #bebebe, inset -4px -4px 8px #ffffff;
}
.neumorph-switch-thumb {
  width: 24px; height: 24px;
  background: #22d3ee;
  border-radius: 50%;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
}`
  },
  
  // FILTROS AVANÇADOS (13)
  {
    id: "F-61",
    name: "CRT Monitor",
    description: "Efeito de monitor CRT vintage.",
    category: "filters",
    htmlExample: `<div className="relative overflow-hidden rounded-lg">
  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.15)_0px,rgba(0,0,0,0.15)_1px,transparent_1px,transparent_2px)]" />
  <img src="/image.jpg" className="filter saturate-150 contrast-110" />
</div>`,
    cssCode: `.crt-monitor {
  position: relative;
  overflow: hidden;
}
.crt-monitor::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0px,
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
}
.crt-monitor img {
  filter: saturate(1.5) contrast(1.1);
}`
  },
  {
    id: "F-62",
    name: "VHS Distortion",
    description: "Distorção de fita VHS.",
    category: "filters",
    htmlExample: `<div className="relative" style={{animation: "vhs-distort 0.5s infinite"}}>
  <span className="absolute text-red-500 opacity-70" style={{left: "-2px"}}>VHS</span>
  <span className="absolute text-blue-500 opacity-70" style={{left: "2px"}}>VHS</span>
  <span className="relative">VHS</span>
</div>`,
    cssCode: `.vhs-distortion {
  position: relative;
}
.vhs-distortion::before,
.vhs-distortion::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
}
.vhs-distortion::before {
  left: -2px;
  color: #ff0000;
  opacity: 0.7;
}
.vhs-distortion::after {
  left: 2px;
  color: #0000ff;
  opacity: 0.7;
}
@keyframes vhs-distort {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(2px) skewX(1deg); }
}`
  },
  {
    id: "F-63",
    name: "Thermal Vision",
    description: "Visão térmica infravermelha.",
    category: "filters",
    htmlExample: `<img src="/image.jpg" className="[filter:sepia(1)_hue-rotate(-50deg)_saturate(6)_contrast(1.2)]" />`,
    cssCode: `.thermal-vision {
  filter: sepia(1) hue-rotate(-50deg) saturate(6) contrast(1.2);
}
/* Alternativa com cores mais quentes */
.thermal-hot {
  filter: sepia(1) hue-rotate(330deg) saturate(4) contrast(1.3);
}`
  },
  {
    id: "F-64",
    name: "X-Ray Effect",
    description: "Efeito de raio-X médico.",
    category: "filters",
    htmlExample: `<img src="/image.jpg" className="[filter:invert(1)_brightness(1.2)_contrast(2)_grayscale(1)]" />`,
    cssCode: `.xray-effect {
  filter: invert(1) brightness(1.2) contrast(2) grayscale(1);
  background: #000;
}`
  },
  {
    id: "F-65",
    name: "Infrared",
    description: "Fotografia infravermelha.",
    category: "filters",
    htmlExample: `<img src="/image.jpg" className="[filter:hue-rotate(180deg)_saturate(2)_brightness(1.1)]" />`,
    cssCode: `.infrared {
  filter: hue-rotate(180deg) saturate(2) brightness(1.1);
}`
  },
  {
    id: "F-66",
    name: "Neon Edges",
    description: "Bordas com brilho neon.",
    category: "filters",
    htmlExample: `<div className="text-4xl font-bold text-transparent [-webkit-text-stroke:2px_#00ffff] [filter:drop-shadow(0_0_10px_#00ffff)]">
  NEON
</div>`,
    cssCode: `.neon-edges {
  color: transparent;
  -webkit-text-stroke: 2px #00ffff;
  filter: drop-shadow(0 0 10px #00ffff);
}
/* Para elementos */
.neon-edges-box {
  border: 2px solid #00ffff;
  box-shadow: 0 0 10px #00ffff, inset 0 0 10px #00ffff;
  background: transparent;
}`
  },
  {
    id: "F-67",
    name: "Film Grain",
    description: "Granulação de filme fotográfico.",
    category: "filters",
    htmlExample: `<div className="relative overflow-hidden">
  <img src="/image.jpg" />
  <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('data:image/svg+xml,...')]" />
</div>`,
    cssCode: `.film-grain {
  position: relative;
}
.film-grain::after {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.2;
  mix-blend-mode: overlay;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E");
  animation: grain 0.5s steps(10) infinite;
}`
  },
  {
    id: "F-68",
    name: "Posterize",
    description: "Redução de cores estilo poster.",
    category: "filters",
    htmlExample: `<img src="/image.jpg" className="[filter:contrast(1.5)_saturate(1.5)]" style={{imageRendering: "pixelated"}} />`,
    cssCode: `.posterize {
  filter: contrast(1.5) saturate(1.5);
}
/* SVG filter para posterização real */
/* Use feComponentTransfer com feFuncR/G/B type="discrete" */`
  },
  {
    id: "F-69",
    name: "Vintage Sepia",
    description: "Foto vintage com sepia e vinheta.",
    category: "filters",
    htmlExample: `<div className="relative overflow-hidden rounded-lg">
  <img src="/image.jpg" className="[filter:sepia(0.8)_contrast(0.9)_brightness(1.1)]" />
  <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
</div>`,
    cssCode: `.vintage-sepia {
  filter: sepia(0.8) contrast(0.9) brightness(1.1);
}
.vintage-vignette::after {
  content: '';
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 100px rgba(0, 0, 0, 0.5);
  pointer-events: none;
}`
  },
  {
    id: "F-70",
    name: "Cross Process",
    description: "Efeito de processamento cruzado.",
    category: "filters",
    htmlExample: `<img src="/image.jpg" className="[filter:contrast(1.2)_saturate(1.3)_hue-rotate(15deg)]" />`,
    cssCode: `.cross-process {
  filter: contrast(1.2) saturate(1.3) hue-rotate(15deg);
}
/* Variação mais intensa */
.cross-process-strong {
  filter: contrast(1.4) saturate(1.5) hue-rotate(30deg) brightness(1.1);
}`
  },
  {
    id: "F-71",
    name: "Cyberpunk",
    description: "Estética cyberpunk neon.",
    category: "filters",
    htmlExample: `<img src="/image.jpg" className="[filter:contrast(1.3)_saturate(1.5)_hue-rotate(-10deg)] shadow-[0_0_30px_rgba(0,255,255,0.5)]" />`,
    cssCode: `.cyberpunk {
  filter: contrast(1.3) saturate(1.5) hue-rotate(-10deg);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
}
.cyberpunk-text {
  text-shadow: 
    0 0 10px #00ffff,
    0 0 20px #ff00ff,
    0 0 30px #00ffff;
}`
  },
  {
    id: "F-72",
    name: "Glowing Outline",
    description: "Contorno brilhante animado.",
    category: "filters",
    htmlExample: `<div className="text-4xl font-bold [filter:drop-shadow(0_0_5px_#ff00ff)_drop-shadow(0_0_10px_#ff00ff)_drop-shadow(0_0_20px_#ff00ff)]">
  GLOW
</div>`,
    cssCode: `.glowing-outline {
  filter: 
    drop-shadow(0 0 5px #ff00ff)
    drop-shadow(0 0 10px #ff00ff)
    drop-shadow(0 0 20px #ff00ff);
  animation: glow-pulse 2s ease-in-out infinite;
}
@keyframes glow-pulse {
  0%, 100% { filter: drop-shadow(0 0 5px #ff00ff); }
  50% { filter: drop-shadow(0 0 20px #ff00ff) drop-shadow(0 0 40px #ff00ff); }
}`
  },
  {
    id: "F-73",
    name: "Split RGB",
    description: "Separação de canais RGB.",
    category: "filters",
    htmlExample: `<div className="relative text-4xl font-bold">
  <span className="absolute text-red-500 opacity-50" style={{left: "-3px", top: "-1px"}}>RGB</span>
  <span className="absolute text-green-500 opacity-50">RGB</span>
  <span className="absolute text-blue-500 opacity-50" style={{left: "3px", top: "1px"}}>RGB</span>
  <span className="relative text-white">RGB</span>
</div>`,
    cssCode: `.split-rgb {
  position: relative;
}
.split-rgb .red {
  position: absolute;
  color: red;
  opacity: 0.5;
  left: -3px;
  top: -1px;
}
.split-rgb .green {
  position: absolute;
  color: green;
  opacity: 0.5;
}
.split-rgb .blue {
  position: absolute;
  color: blue;
  opacity: 0.5;
  left: 3px;
  top: 1px;
}`
  },
  
  // GRADIENTES DINÂMICOS (13)
  {
    id: "D-81",
    name: "Liquid Gradient",
    description: "Gradiente líquido com movimento orgânico.",
    category: "gradients",
    htmlExample: `<div className="w-full h-32 rounded-xl animate-[liquid_10s_ease-in-out_infinite]" style={{background: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96e6a1)", backgroundSize: "400% 400%"}} />`,
    cssCode: `@keyframes liquid {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.liquid-gradient {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96e6a1);
  background-size: 400% 400%;
  animation: liquid 10s ease-in-out infinite;
}`
  },
  {
    id: "D-82",
    name: "Sunset Gradient",
    description: "Pôr do sol com cores quentes.",
    category: "gradients",
    htmlExample: `<div className="w-full h-32 rounded-xl bg-gradient-to-b from-yellow-400 via-orange-500 via-red-500 to-purple-900" />`,
    cssCode: `.sunset-gradient {
  background: linear-gradient(
    to bottom,
    #fbbf24 0%,
    #f97316 25%,
    #ef4444 50%,
    #7c3aed 100%
  );
}`
  },
  {
    id: "D-83",
    name: "Northern Lights",
    description: "Aurora boreal com verdes e roxos.",
    category: "gradients",
    htmlExample: `<div className="w-full h-32 rounded-xl bg-gradient-to-r from-green-400 via-cyan-500 via-blue-600 to-purple-600 animate-[aurora_8s_ease-in-out_infinite]" style={{backgroundSize: "300% 100%"}} />`,
    cssCode: `@keyframes aurora {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.northern-lights {
  background: linear-gradient(90deg, #4ade80, #06b6d4, #2563eb, #9333ea);
  background-size: 300% 100%;
  animation: aurora 8s ease-in-out infinite;
}`
  },
  {
    id: "D-84",
    name: "Ocean Depth",
    description: "Profundidade oceânica azul.",
    category: "gradients",
    htmlExample: `<div className="w-full h-32 rounded-xl bg-gradient-to-b from-cyan-300 via-blue-500 via-blue-700 to-slate-900" />`,
    cssCode: `.ocean-depth {
  background: linear-gradient(
    to bottom,
    #67e8f9 0%,
    #3b82f6 30%,
    #1d4ed8 60%,
    #0f172a 100%
  );
}`
  },
  {
    id: "D-85",
    name: "Candy Swirl",
    description: "Redemoinho de doces coloridos.",
    category: "gradients",
    htmlExample: `<div className="w-32 h-32 rounded-full bg-[conic-gradient(from_0deg,#ff6b6b,#feca57,#48dbfb,#ff9ff3,#ff6b6b)]" />`,
    cssCode: `.candy-swirl {
  background: conic-gradient(
    from 0deg,
    #ff6b6b,
    #feca57,
    #48dbfb,
    #ff9ff3,
    #ff6b6b
  );
  border-radius: 50%;
}`
  },
  {
    id: "D-86",
    name: "Metallic Gold",
    description: "Gradiente metálico dourado.",
    category: "gradients",
    htmlExample: `<div className="w-full h-16 rounded-lg bg-gradient-to-r from-yellow-600 via-yellow-400 via-yellow-200 via-yellow-400 to-yellow-600" />`,
    cssCode: `.metallic-gold {
  background: linear-gradient(
    90deg,
    #b45309 0%,
    #fbbf24 25%,
    #fef3c7 50%,
    #fbbf24 75%,
    #b45309 100%
  );
}`
  },
  {
    id: "D-87",
    name: "Chrome Reflection",
    description: "Reflexo cromado espelhado.",
    category: "gradients",
    htmlExample: `<div className="w-full h-16 rounded-lg bg-gradient-to-r from-gray-600 via-gray-300 via-white via-gray-300 to-gray-600" />`,
    cssCode: `.chrome-reflection {
  background: linear-gradient(
    90deg,
    #4b5563 0%,
    #d1d5db 30%,
    #ffffff 50%,
    #d1d5db 70%,
    #4b5563 100%
  );
}`
  },
  {
    id: "D-88",
    name: "Neon Grid",
    description: "Grade com linhas neon sobre fundo escuro.",
    category: "gradients",
    htmlExample: `<div className="w-full h-32 rounded-xl bg-gray-900" style={{backgroundImage: "linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px"}} />`,
    cssCode: `.neon-grid {
  background-color: #111827;
  background-image: 
    linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}`
  },
  {
    id: "D-89",
    name: "Retro Synthwave",
    description: "Estilo synthwave retrô 80s.",
    category: "gradients",
    htmlExample: `<div className="w-full h-32 rounded-xl bg-gradient-to-b from-purple-900 via-pink-600 to-orange-400" />`,
    cssCode: `.retro-synthwave {
  background: linear-gradient(
    to bottom,
    #581c87 0%,
    #db2777 50%,
    #fb923c 100%
  );
}`
  },
  {
    id: "D-90",
    name: "Cosmic Nebula",
    description: "Nebulosa cósmica roxa e azul.",
    category: "gradients",
    htmlExample: `<div className="w-full h-32 rounded-xl bg-gradient-to-br from-violet-900 via-purple-800 via-pink-700 to-orange-600" />`,
    cssCode: `.cosmic-nebula {
  background: linear-gradient(
    135deg,
    #4c1d95 0%,
    #7e22ce 25%,
    #be185d 50%,
    #ea580c 100%
  );
}`
  },
  {
    id: "D-91",
    name: "Frosted Rainbow",
    description: "Arco-íris com efeito de geada.",
    category: "gradients",
    htmlExample: `<div className="w-full h-16 rounded-lg backdrop-blur-sm bg-gradient-to-r from-red-500/50 via-yellow-500/50 via-green-500/50 via-blue-500/50 to-purple-500/50" />`,
    cssCode: `.frosted-rainbow {
  backdrop-filter: blur(4px);
  background: linear-gradient(
    90deg,
    rgba(239, 68, 68, 0.5),
    rgba(234, 179, 8, 0.5),
    rgba(34, 197, 94, 0.5),
    rgba(59, 130, 246, 0.5),
    rgba(168, 85, 247, 0.5)
  );
}`
  },
  {
    id: "D-92",
    name: "Hologram Foil",
    description: "Efeito de folha holográfica.",
    category: "gradients",
    htmlExample: `<div className="w-full h-16 rounded-lg animate-[holo_3s_linear_infinite]" style={{background: "linear-gradient(135deg, #ff0080, #00ffff, #ff00ff, #00ff00, #ff0080)", backgroundSize: "400% 400%"}} />`,
    cssCode: `@keyframes holo {
  0% { background-position: 0% 50%; filter: hue-rotate(0deg); }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; filter: hue-rotate(360deg); }
}
.hologram-foil {
  background: linear-gradient(135deg, #ff0080, #00ffff, #ff00ff, #00ff00, #ff0080);
  background-size: 400% 400%;
  animation: holo 3s linear infinite;
}`
  },
  {
    id: "D-93",
    name: "Glass Morphism BG",
    description: "Fundo para interfaces glassmorphism.",
    category: "gradients",
    htmlExample: `<div className="w-full h-32 rounded-xl bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 backdrop-blur-3xl" />`,
    cssCode: `.glass-bg {
  background: linear-gradient(
    135deg,
    rgba(168, 85, 247, 0.3) 0%,
    rgba(236, 72, 153, 0.2) 50%,
    rgba(59, 130, 246, 0.3) 100%
  );
  backdrop-filter: blur(30px);
}`
  }
];

export const effectCategories = [
  { id: "all", name: "Todos", color: "foreground" },
  { id: "glassmorphism", name: "Glassmorphism", color: "neon-cyan" },
  { id: "neumorphism", name: "Neumorphism", color: "neon-green" },
  { id: "filters", name: "Filtros", color: "neon-purple" },
  { id: "gradients", name: "Gradientes", color: "neon-magenta" },
] as const;
