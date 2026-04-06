export type ButtonCategory = "scale" | "pulse" | "glow" | "fill" | "3d" | "icon";

export interface ButtonAnimation {
  id: string;
  name: string;
  category: ButtonCategory;
  description: string;
  cssCode: string;
  htmlCode: string;
  duration: string;
  intensity: string;
  previewColor?: string;
  useCaseExample?: string;
}

// Exemplos de uso por categoria
export const buttonUseCasesByCategory: Record<string, string> = {
  scale: "Ideal para CTAs, botões de ação e interações de destaque.",
  pulse: "Perfeito para notificações, alertas e elementos que precisam chamar atenção.",
  glow: "Excelente para botões premium, games e interfaces futuristas.",
  fill: "Ótimo para menus, navegação e botões com feedback visual claro.",
  "3d": "Use em interfaces imersivas, jogos e experiências interativas.",
  icon: "Aplique em botões com ícones, redes sociais e ações rápidas.",
};

// Função para obter exemplo de uso
export function getButtonUseCase(button: ButtonAnimation): string {
  return button.useCaseExample || buttonUseCasesByCategory[button.category] || "Use em botões e elementos interativos do seu projeto.";
}

export const buttonCategories = [
  { id: "all", name: "Todos" },
  { id: "scale", name: "Scale" },
  { id: "pulse", name: "Pulse" },
  { id: "glow", name: "Glow" },
  { id: "fill", name: "Fill" },
  { id: "3d", name: "3D" },
  { id: "icon", name: "Icon" },
];

export const buttonAnimations: ButtonAnimation[] = [
  // ==================== SCALE ANIMATIONS (30) ====================
  {
    id: "scale-01",
    name: "Mint Pop",
    category: "scale",
    description: "Pop suave em verde menta",
    duration: "0.3s",
    intensity: "1.08x",
    previewColor: "#3EB489",
    cssCode: `.mint-pop {
  background: rgba(62,180,137,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #3EB489;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: mintPop 0.3s ease-out;
}
.mint-pop:hover {
  background: rgba(62,180,137,0.25);
  border-color: rgba(62,180,137,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(62,180,137,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes mintPop { 
  0% { transform: scale(1); }`,
    htmlCode: `<button class="mint-pop">Mint Pop</button>`
  },
  {
    id: "scale-02",
    name: "Coral Bounce",
    category: "scale",
    description: "Bounce energético em coral",
    duration: "0.4s",
    intensity: "1.1x",
    previewColor: "#FF6F61",
    cssCode: `.coral-bounce {
  background: rgba(255,111,97,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #FF6F61;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: coralBounce 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.coral-bounce:hover {
  background: rgba(255,111,97,0.25);
  border-color: rgba(255,111,97,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,111,97,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes coralBounce { 
  0% { transform: scale(1) translateY(0); }`,
    htmlCode: `<button class="coral-bounce">Coral Bounce</button>`
  },
  {
    id: "scale-03",
    name: "Navy Lift",
    category: "scale",
    description: "Elevação elegante em azul marinho",
    duration: "0.35s",
    intensity: "1.05x + shadow",
    previewColor: "#1E3A5F",
    cssCode: `.navy-lift {
  background: rgba(30,58,95,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #1E3A5F;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: navyLift 0.35s ease-out forwards;
}
.navy-lift:hover {
  background: rgba(30,58,95,0.25);
  border-color: rgba(30,58,95,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(30,58,95,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes navyLift { 
  0% { transform: scale(1) translateY(0); box-shadow: 0 2px 5px rgba(30,58,95,0.3); }`,
    htmlCode: `<button class="navy-lift">Navy Lift</button>`
  },
  {
    id: "scale-04",
    name: "Lavender Squeeze",
    category: "scale",
    description: "Squeeze suave em lavanda",
    duration: "0.3s",
    intensity: "scaleX 1.1",
    previewColor: "#9575CD",
    cssCode: `.lavender-squeeze {
  background: rgba(149,117,205,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #9575CD;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: lavenderSqueeze 0.3s ease-out;
}
.lavender-squeeze:hover {
  background: rgba(149,117,205,0.25);
  border-color: rgba(149,117,205,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(149,117,205,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes lavenderSqueeze { 
  0% { transform: scaleX(1) scaleY(1); }`,
    htmlCode: `<button class="lavender-squeeze">Lavender Squeeze</button>`
  },
  {
    id: "scale-05",
    name: "Peach Jelly",
    category: "scale",
    description: "Efeito gelatina em pêssego",
    duration: "0.5s",
    intensity: "skew ±5deg",
    previewColor: "#FFAB91",
    cssCode: `.peach-jelly {
  background: rgba(255,171,145,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #3E2723;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: peachJelly 0.5s ease-in-out;
}
.peach-jelly:hover {
  background: rgba(255,171,145,0.25);
  border-color: rgba(255,171,145,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,171,145,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes peachJelly { 
  0%, 100% { transform: scale(1) skewX(0); }`,
    htmlCode: `<button class="peach-jelly">Peach Jelly</button>`
  },
  {
    id: "scale-06",
    name: "Teal 3D Flip",
    category: "scale",
    description: "Flip 3D em verde-azulado",
    duration: "0.6s",
    intensity: "rotateX 15deg",
    previewColor: "#009688",
    cssCode: `.teal-3d-flip {
  background: rgba(0,150,136,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #009688;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: teal3DFlip 0.6s ease-in-out;
}
.teal-3d-flip:hover {
  background: rgba(0,150,136,0.25);
  border-color: rgba(0,150,136,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(0,150,136,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes teal3DFlip { 
  0% { transform: perspective(400px) rotateX(0) scale(1); }`,
    htmlCode: `<button class="teal-3d-flip">Teal 3D Flip</button>`
  },
  {
    id: "scale-07",
    name: "Gold Heartbeat",
    category: "scale",
    description: "Batimento cardíaco em dourado",
    duration: "0.8s",
    intensity: "1.15x duplo",
    previewColor: "#FFD700",
    cssCode: `.gold-heartbeat {
  background: rgba(255,215,0,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #333;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: goldHeartbeat 0.8s ease-in-out;
}
.gold-heartbeat:hover {
  background: rgba(255,215,0,0.25);
  border-color: rgba(255,215,0,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,215,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes goldHeartbeat { 
  0%, 100% { transform: scale(1); }`,
    htmlCode: `<button class="gold-heartbeat">Gold Heartbeat</button>`
  },
  {
    id: "scale-08",
    name: "Berry Rubber",
    category: "scale",
    description: "Efeito elástico em berry",
    duration: "0.6s",
    intensity: "elastic 1.2x",
    previewColor: "#8E4585",
    cssCode: `.berry-rubber {
  background: rgba(142,69,133,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8E4585;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: berryRubber 0.6s ease;
}
.berry-rubber:hover {
  background: rgba(142,69,133,0.25);
  border-color: rgba(142,69,133,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(142,69,133,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes berryRubber { 
  0% { transform: scale(1); }`,
    htmlCode: `<button class="berry-rubber">Berry Rubber</button>`
  },
  {
    id: "scale-09",
    name: "Slate Swing",
    category: "scale",
    description: "Balanço sutil em ardósia",
    duration: "0.5s",
    intensity: "rotate ±10deg",
    previewColor: "#607D8B",
    cssCode: `.slate-swing {
  background: rgba(96,125,139,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #607D8B;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: slateSwing 0.5s ease-in-out;
}
.slate-swing:hover {
  background: rgba(96,125,139,0.25);
  border-color: rgba(96,125,139,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(96,125,139,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes slateSwing { 
  0%, 100% { transform: rotate(0deg); }`,
    htmlCode: `<button class="slate-swing">Slate Swing</button>`
  },
  {
    id: "scale-10",
    name: "Ocean Tada",
    category: "scale",
    description: "Celebração em azul oceano",
    duration: "0.8s",
    intensity: "1.1x + rotate",
    previewColor: "#0077BE",
    cssCode: `.ocean-tada {
  background: rgba(0,119,190,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #0077BE;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: oceanTada 0.8s ease-in-out;
}
.ocean-tada:hover {
  background: rgba(0,119,190,0.25);
  border-color: rgba(0,119,190,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(0,119,190,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes oceanTada { 
  0%, 100% { transform: scale(1) rotate(0); }`,
    htmlCode: `<button class="ocean-tada">Ocean Tada</button>`
  },
  {
    id: "scale-11",
    name: "Sunset Wobble",
    category: "scale",
    description: "Oscilação em pôr do sol",
    duration: "0.7s",
    intensity: "translateX ±15px",
    previewColor: "#FF7043",
    cssCode: `.sunset-wobble {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: sunsetWobble 0.7s ease-in-out;
}
.sunset-wobble:hover {
  background: rgba(139,92,246,0.25);
  border-color: rgba(139,92,246,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(139,92,246,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes sunsetWobble { 
  0%, 100% { transform: translateX(0) rotate(0); }`,
    htmlCode: `<button class="sunset-wobble">Sunset Wobble</button>`
  },
  {
    id: "scale-12",
    name: "Emerald Press",
    category: "scale",
    description: "Pressão em esmeralda",
    duration: "0.2s",
    intensity: "0.95x press",
    previewColor: "#2E7D32",
    cssCode: `.emerald-press {
  background: rgba(46,125,50,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #2E7D32;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: emeraldPress 0.2s ease-out;
}
.emerald-press:hover {
  background: rgba(46,125,50,0.25);
  border-color: rgba(46,125,50,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(46,125,50,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes emeraldPress { 
  0% { transform: scale(1) translateY(0); }`,
    htmlCode: `<button class="emerald-press">Emerald Press</button>`
  },
  {
    id: "scale-13",
    name: "Rose Float",
    category: "scale",
    description: "Flutuação em rosa",
    duration: "0.4s",
    intensity: "translateY -10px",
    previewColor: "#E91E63",
    cssCode: `.rose-float {
  background: rgba(233,30,99,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #E91E63;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: roseFloat 0.4s ease-out forwards;
}
.rose-float:hover {
  background: rgba(233,30,99,0.25);
  border-color: rgba(233,30,99,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(233,30,99,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes roseFloat { 
  0% { transform: translateY(0) scale(1); box-shadow: 0 4px 10px rgba(233,30,99,0.3); }`,
    htmlCode: `<button class="rose-float">Rose Float</button>`
  },
  {
    id: "scale-14",
    name: "Amber Triple",
    category: "scale",
    description: "Triplo pulso em âmbar",
    duration: "0.6s",
    intensity: "1.08x triple",
    previewColor: "#FF8F00",
    cssCode: `.amber-triple {
  background: rgba(255,143,0,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #FF8F00;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: amberTriple 0.6s ease-in-out;
}
.amber-triple:hover {
  background: rgba(255,143,0,0.25);
  border-color: rgba(255,143,0,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,143,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes amberTriple { 
  0%, 100% { transform: scale(1); }`,
    htmlCode: `<button class="amber-triple">Amber Triple</button>`
  },
  {
    id: "scale-15",
    name: "Indigo Tilt",
    category: "scale",
    description: "Inclinação 3D em índigo",
    duration: "0.4s",
    intensity: "rotateY 12deg",
    previewColor: "#3F51B5",
    cssCode: `.indigo-tilt {
  background: rgba(63,81,181,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #3F51B5;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: indigoTilt 0.4s ease-out forwards;
}
.indigo-tilt:hover {
  background: rgba(63,81,181,0.25);
  border-color: rgba(63,81,181,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(63,81,181,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes indigoTilt { 
  0% { transform: perspective(500px) rotateY(0) rotateX(0); }`,
    htmlCode: `<button class="indigo-tilt">Indigo Tilt</button>`
  },
  {
    id: "scale-16",
    name: "Cyan Morph",
    category: "scale",
    description: "Morfismo em ciano",
    duration: "0.5s",
    intensity: "border-radius change",
    previewColor: "#00BCD4",
    cssCode: `.cyan-morph {
  background: rgba(0,188,212,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #00BCD4;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: cyanMorph 0.5s ease-in-out forwards;
}
.cyan-morph:hover {
  background: rgba(0,188,212,0.25);
  border-color: rgba(0,188,212,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(0,188,212,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes cyanMorph { 
  0% { transform: scale(1); border-radius: 8px; }`,
    htmlCode: `<button class="cyan-morph">Cyan Morph</button>`
  },
  {
    id: "scale-17",
    name: "Crimson Shake",
    category: "scale",
    description: "Tremor horizontal em carmesim",
    duration: "0.5s",
    intensity: "±8px shake",
    previewColor: "#DC143C",
    cssCode: `.crimson-shake {
  background: rgba(220,20,60,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #DC143C;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: crimsonShake 0.5s ease-in-out;
}
.crimson-shake:hover {
  background: rgba(220,20,60,0.25);
  border-color: rgba(220,20,60,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(220,20,60,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes crimsonShake { 
  0%, 100% { transform: translateX(0); }`,
    htmlCode: `<button class="crimson-shake">Crimson Shake</button>`
  },
  {
    id: "scale-18",
    name: "Olive Vertical",
    category: "scale",
    description: "Tremor vertical em oliva",
    duration: "0.4s",
    intensity: "±6px vertical",
    previewColor: "#808000",
    cssCode: `.olive-vertical {
  background: rgba(128,128,0,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #808000;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: oliveVertical 0.4s ease-in-out;
}
.olive-vertical:hover {
  background: rgba(128,128,0,0.25);
  border-color: rgba(128,128,0,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(128,128,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes oliveVertical { 
  0%, 100% { transform: translateY(0); }`,
    htmlCode: `<button class="olive-vertical">Olive Vertical</button>`
  },
  {
    id: "scale-19",
    name: "Purple Zoom",
    category: "scale",
    description: "Zoom com rotação em roxo",
    duration: "0.6s",
    intensity: "1.15x + 180deg",
    previewColor: "#9C27B0",
    cssCode: `.purple-zoom {
  background: rgba(156,39,176,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #9C27B0;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: purpleZoom 0.6s ease-out;
}
.purple-zoom:hover {
  background: rgba(156,39,176,0.25);
  border-color: rgba(156,39,176,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(156,39,176,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes purpleZoom { 
  0% { transform: scale(1) rotate(0deg); }`,
    htmlCode: `<button class="purple-zoom">Purple Zoom</button>`
  },
  {
    id: "scale-20",
    name: "Lime Expand",
    category: "scale",
    description: "Expansão em lima",
    duration: "0.45s",
    intensity: "1.12x wave",
    previewColor: "#CDDC39",
    cssCode: `.lime-expand {
  background: rgba(205,220,57,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #333;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: limeExpand 0.45s ease-in-out;
}
.lime-expand:hover {
  background: rgba(205,220,57,0.25);
  border-color: rgba(205,220,57,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(205,220,57,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes limeExpand { 
  0%, 100% { transform: scale(1); }`,
    htmlCode: `<button class="lime-expand">Lime Expand</button>`
  },
  {
    id: "scale-21",
    name: "Brown Slide",
    category: "scale",
    description: "Deslize em marrom",
    duration: "0.3s",
    intensity: "translateX 12px",
    previewColor: "#795548",
    cssCode: `.brown-slide {
  background: rgba(121,85,72,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #795548;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: brownSlide 0.3s ease-out forwards;
}
.brown-slide:hover {
  background: rgba(121,85,72,0.25);
  border-color: rgba(121,85,72,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(121,85,72,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes brownSlide { 
  0% { transform: translateX(0) scale(1); }`,
    htmlCode: `<button class="brown-slide">Brown Slide</button>`
  },
  {
    id: "scale-22",
    name: "Pink Bounce In",
    category: "scale",
    description: "Bounce elástico em rosa",
    duration: "0.5s",
    intensity: "elastic 1.2x",
    previewColor: "#FF4081",
    cssCode: `.pink-bounce-in {
  background: rgba(255,64,129,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #FF4081;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: pinkBounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.pink-bounce-in:hover {
  background: rgba(255,64,129,0.25);
  border-color: rgba(255,64,129,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,64,129,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes pinkBounceIn { 
  0% { transform: scale(1); }`,
    htmlCode: `<button class="pink-bounce-in">Pink Bounce In</button>`
  },
  {
    id: "scale-23",
    name: "Gray Flash",
    category: "scale",
    description: "Flash em cinza",
    duration: "0.6s",
    intensity: "opacity flash",
    previewColor: "#9E9E9E",
    cssCode: `.gray-flash {
  background: rgba(158,158,158,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #9E9E9E;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: grayFlash 0.6s ease-in-out;
}
.gray-flash:hover {
  background: rgba(158,158,158,0.25);
  border-color: rgba(158,158,158,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(158,158,158,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes grayFlash { 
  0%, 50%, 100% { opacity: 1; transform: scale(1); }`,
    htmlCode: `<button class="gray-flash">Gray Flash</button>`
  },
  {
    id: "scale-24",
    name: "Red Spring",
    category: "scale",
    description: "Pulo de mola em vermelho",
    duration: "0.5s",
    intensity: "spring jump",
    previewColor: "#F44336",
    cssCode: `.red-spring {
  background: rgba(244,67,54,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #F44336;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: redSpring 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.red-spring:hover {
  background: rgba(244,67,54,0.25);
  border-color: rgba(244,67,54,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(244,67,54,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes redSpring { 
  0% { transform: scale(1) translateY(0); }`,
    htmlCode: `<button class="red-spring">Red Spring</button>`
  },
  {
    id: "scale-25",
    name: "Blue Flip X",
    category: "scale",
    description: "Flip horizontal em azul",
    duration: "0.6s",
    intensity: "rotateX 90deg",
    previewColor: "#2196F3",
    cssCode: `.blue-flip-x {
  background: rgba(33,150,243,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #2196F3;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: blueFlipX 0.6s ease-in-out;
}
.blue-flip-x:hover {
  background: rgba(33,150,243,0.25);
  border-color: rgba(33,150,243,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(33,150,243,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes blueFlipX { 
  0% { transform: perspective(400px) rotateX(0); }`,
    htmlCode: `<button class="blue-flip-x">Blue Flip X</button>`
  },
  {
    id: "scale-26",
    name: "Green Flip Y",
    category: "scale",
    description: "Flip vertical em verde",
    duration: "0.6s",
    intensity: "rotateY 90deg",
    previewColor: "#4CAF50",
    cssCode: `.green-flip-y {
  background: rgba(76,175,80,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #4CAF50;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: greenFlipY 0.6s ease-in-out;
}
.green-flip-y:hover {
  background: rgba(76,175,80,0.25);
  border-color: rgba(76,175,80,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(76,175,80,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes greenFlipY { 
  0% { transform: perspective(400px) rotateY(0); }`,
    htmlCode: `<button class="green-flip-y">Green Flip Y</button>`
  },
  {
    id: "scale-27",
    name: "Orange Rotate",
    category: "scale",
    description: "Rotação completa em laranja",
    duration: "0.5s",
    intensity: "rotate 360deg",
    previewColor: "#FF9800",
    cssCode: `.orange-rotate {
  background: rgba(255,152,0,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #FF9800;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: orangeRotate 0.5s ease-out;
}
.orange-rotate:hover {
  background: rgba(255,152,0,0.25);
  border-color: rgba(255,152,0,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,152,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes orangeRotate { 
  0% { transform: rotate(0deg) scale(1); }`,
    htmlCode: `<button class="orange-rotate">Orange Rotate</button>`
  },
  {
    id: "scale-28",
    name: "Violet Shadow",
    category: "scale",
    description: "Crescimento com sombra violeta",
    duration: "0.35s",
    intensity: "1.05x + shadow",
    previewColor: "#7C4DFF",
    cssCode: `.violet-shadow {
  background: rgba(124,77,255,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #7C4DFF;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: violetShadow 0.35s ease-out forwards;
}
.violet-shadow:hover {
  background: rgba(124,77,255,0.25);
  border-color: rgba(124,77,255,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(124,77,255,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes violetShadow { 
  0% { transform: scale(1); box-shadow: 0 4px 10px rgba(124,77,255,0.3); }`,
    htmlCode: `<button class="violet-shadow">Violet Shadow</button>`
  },
  {
    id: "scale-29",
    name: "Magenta Glow",
    category: "scale",
    description: "Brilho intenso em magenta",
    duration: "0.4s",
    intensity: "glow expand",
    previewColor: "#E040FB",
    cssCode: `.magenta-glow {
  background: rgba(224,64,251,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #E040FB;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: magentaGlow 0.4s ease-out forwards;
}
.magenta-glow:hover {
  background: rgba(224,64,251,0.25);
  border-color: rgba(224,64,251,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(224,64,251,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes magentaGlow { 
  0% { transform: scale(1); box-shadow: 0 0 0 rgba(224,64,251,0); }`,
    htmlCode: `<button class="magenta-glow">Magenta Glow</button>`
  },
  {
    id: "scale-30",
    name: "Gradient Shift",
    category: "scale",
    description: "Mudança de gradiente multicolor",
    duration: "0.5s",
    intensity: "gradient + scale",
    previewColor: "#FF6B6B",
    cssCode: `.gradient-shift {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: gradientShift 0.5s ease-out forwards;
}
.gradient-shift:hover {
  background: rgba(139,92,246,0.25);
  border-color: rgba(139,92,246,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(139,92,246,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes gradientShift { 
  0% { background-position: 0% 0%; transform: scale(1); }`,
    htmlCode: `<button class="gradient-shift">Gradient Shift</button>`
  },

  // ==================== PULSE ANIMATIONS (30) ====================
  {
    id: "pulse-01",
    name: "Neon Cyan Pulse",
    category: "pulse",
    description: "Pulsação neon ciano infinita",
    duration: "1.5s",
    intensity: "1.05x + glow",
    previewColor: "#00FFFF",
    cssCode: `.neon-cyan-pulse {
  background: rgba(0,255,255,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #111;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: neonCyanPulse 1.5s ease-in-out infinite;
}
@keyframes neonCyanPulse { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 10px #00FFFF; }`,
    htmlCode: `<button class="neon-cyan-pulse">Neon Cyan</button>`
  },
  {
    id: "pulse-02",
    name: "Neon Magenta Pulse",
    category: "pulse",
    description: "Pulsação neon magenta vibrante",
    duration: "1.2s",
    intensity: "1.08x + glow",
    previewColor: "#FF00FF",
    cssCode: `.neon-magenta-pulse {
  background: rgba(255,0,255,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #FF00FF;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: neonMagentaPulse 1.2s ease-in-out infinite;
}
@keyframes neonMagentaPulse { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 10px #FF00FF; }`,
    htmlCode: `<button class="neon-magenta-pulse">Neon Magenta</button>`
  },
  {
    id: "pulse-03",
    name: "Green Ring Pulse",
    category: "pulse",
    description: "Anel verde expansivo",
    duration: "2s",
    intensity: "ring expand",
    previewColor: "#00FF00",
    cssCode: `.green-ring-pulse {
  background: rgba(0,255,0,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #111;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: greenRingPulse 2s ease-out infinite;
}
@keyframes greenRingPulse { 
  0% { box-shadow: 0 0 0 0 rgba(0,255,0,0.7); }`,
    htmlCode: `<button class="green-ring-pulse">Green Ring</button>`
  },
  {
    id: "pulse-04",
    name: "Red Alert Pulse",
    category: "pulse",
    description: "Alerta vermelho piscante",
    duration: "0.8s",
    intensity: "1.1x flash",
    previewColor: "#FF0000",
    cssCode: `.red-alert-pulse {
  background: rgba(255,0,0,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #FF0000;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: redAlertPulse 0.8s ease-in-out infinite;
}
@keyframes redAlertPulse { 
  0%, 100% { transform: scale(1); opacity: 1; background: #FF0000; }`,
    htmlCode: `<button class="red-alert-pulse">Red Alert</button>`
  },
  {
    id: "pulse-05",
    name: "Gold Glow Pulse",
    category: "pulse",
    description: "Brilho dourado luxuoso",
    duration: "2s",
    intensity: "1.03x + glow",
    previewColor: "#FFD700",
    cssCode: `.gold-glow-pulse {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #333;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: goldGlowPulse 2s ease-in-out infinite;
}
@keyframes goldGlowPulse { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(255,215,0,0.5); }`,
    htmlCode: `<button class="gold-glow-pulse">Gold Glow</button>`
  },
  {
    id: "pulse-06",
    name: "WhatsApp Green",
    category: "pulse",
    description: "Estilo WhatsApp promocional",
    duration: "1.5s",
    intensity: "1.05x + shadow",
    previewColor: "#25D366",
    cssCode: `.whatsapp-green {
  background: rgba(37,211,102,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #25D366;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: whatsappGreen 1.5s ease-in-out infinite;
}
@keyframes whatsappGreen { 
  0%, 100% { transform: scale(1); box-shadow: 0 5px 15px rgba(37,211,102,0.4); }`,
    htmlCode: `<button class="whatsapp-green">📱 WhatsApp</button>`
  },
  {
    id: "pulse-07",
    name: "Purple Sonar",
    category: "pulse",
    description: "Sonar roxo expansivo",
    duration: "1.8s",
    intensity: "sonar ring",
    previewColor: "#9C27B0",
    cssCode: `.purple-sonar {
  background: rgba(156,39,176,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #9C27B0;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: purpleSonar 1.8s ease-out infinite;
}
@keyframes purpleSonar { 
  0% { box-shadow: 0 0 0 0 rgba(156,39,176,0.7); transform: scale(1); }`,
    htmlCode: `<button class="purple-sonar">Purple Sonar</button>`
  },
  {
    id: "pulse-08",
    name: "Blue Heartbeat",
    category: "pulse",
    description: "Batimento cardíaco azul",
    duration: "1.2s",
    intensity: "heartbeat 1.15x",
    previewColor: "#2196F3",
    cssCode: `.blue-heartbeat {
  background: rgba(33,150,243,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #2196F3;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: blueHeartbeat 1.2s ease-in-out infinite;
}
@keyframes blueHeartbeat { 
  0%, 100% { transform: scale(1); }`,
    htmlCode: `<button class="blue-heartbeat">Blue Heartbeat</button>`
  },
  {
    id: "pulse-09",
    name: "Orange Breathe",
    category: "pulse",
    description: "Respiração suave em laranja",
    duration: "3s",
    intensity: "1.02x breathe",
    previewColor: "#FF9800",
    cssCode: `.orange-breathe {
  background: rgba(255,152,0,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #FF9800;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: orangeBreathe 3s ease-in-out infinite;
}
@keyframes orangeBreathe { 
  0%, 100% { transform: scale(1); opacity: 0.9; }`,
    htmlCode: `<button class="orange-breathe">Orange Breathe</button>`
  },
  {
    id: "pulse-10",
    name: "Teal Wave",
    category: "pulse",
    description: "Onda pulsante em teal",
    duration: "2s",
    intensity: "wave 1.05x",
    previewColor: "#009688",
    cssCode: `.teal-wave {
  background: rgba(0,150,136,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #009688;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: tealWave 2s ease-in-out infinite;
}
@keyframes tealWave { 
  0%, 100% { transform: scale(1) translateY(0); }`,
    htmlCode: `<button class="teal-wave">Teal Wave</button>`
  },
  {
    id: "pulse-11",
    name: "Pink Double",
    category: "pulse",
    description: "Duplo pulso em rosa",
    duration: "1s",
    intensity: "double 1.1x",
    previewColor: "#E91E63",
    cssCode: `.pink-double {
  background: rgba(233,30,99,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #E91E63;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: pinkDouble 1s ease-in-out infinite;
}
@keyframes pinkDouble { 
  0%, 100% { transform: scale(1); }`,
    htmlCode: `<button class="pink-double">Pink Double</button>`
  },
  {
    id: "pulse-12",
    name: "Indigo Glow",
    category: "pulse",
    description: "Brilho profundo em índigo",
    duration: "2.5s",
    intensity: "1.03x + deep glow",
    previewColor: "#3F51B5",
    cssCode: `.indigo-glow {
  background: rgba(63,81,181,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #3F51B5;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: indigoGlow 2.5s ease-in-out infinite;
}
@keyframes indigoGlow { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(63,81,181,0.3); }`,
    htmlCode: `<button class="indigo-glow">Indigo Glow</button>`
  },
  {
    id: "pulse-13",
    name: "Lime Bounce",
    category: "pulse",
    description: "Bounce energético em lima",
    duration: "1.5s",
    intensity: "bounce 1.08x",
    previewColor: "#CDDC39",
    cssCode: `.lime-bounce {
  background: rgba(205,220,57,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #333;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: limeBounce 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}
@keyframes limeBounce { 
  0%, 100% { transform: scale(1) translateY(0); }`,
    htmlCode: `<button class="lime-bounce">Lime Bounce</button>`
  },
  {
    id: "pulse-14",
    name: "Brown Warm",
    category: "pulse",
    description: "Calor acolhedor em marrom",
    duration: "3s",
    intensity: "warm 1.02x",
    previewColor: "#795548",
    cssCode: `.brown-warm {
  background: rgba(121,85,72,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #795548;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: brownWarm 3s ease-in-out infinite;
}
@keyframes brownWarm { 
  0%, 100% { transform: scale(1); background: #795548; }`,
    htmlCode: `<button class="brown-warm">Brown Warm</button>`
  },
  {
    id: "pulse-15",
    name: "Cyan Electric",
    category: "pulse",
    description: "Elétrico pulsante em ciano",
    duration: "0.8s",
    intensity: "electric 1.1x",
    previewColor: "#00BCD4",
    cssCode: `.cyan-electric {
  background: rgba(0,188,212,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #00BCD4;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: cyanElectric 0.8s ease-in-out infinite;
}
@keyframes cyanElectric { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 5px #00BCD4; }`,
    htmlCode: `<button class="cyan-electric">Cyan Electric</button>`
  },
  {
    id: "pulse-16",
    name: "Deep Purple Nebula",
    category: "pulse",
    description: "Nebulosa em roxo profundo",
    duration: "2.5s",
    intensity: "nebula 1.05x",
    previewColor: "#673AB7",
    cssCode: `.deep-purple-nebula {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: deepPurpleNebula 2.5s ease-in-out infinite;
}
@keyframes deepPurpleNebula { 
  0%, 100% { transform: scale(1); filter: brightness(1); }`,
    htmlCode: `<button class="deep-purple-nebula">Purple Nebula</button>`
  },
  {
    id: "pulse-17",
    name: "Amber Fire",
    category: "pulse",
    description: "Fogo pulsante em âmbar",
    duration: "1s",
    intensity: "fire 1.08x",
    previewColor: "#FFC107",
    cssCode: `.amber-fire {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #333;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: amberFire 1s ease-in-out infinite;
}
@keyframes amberFire { 
  0%, 100% { transform: scale(1) translateY(0); box-shadow: 0 0 10px rgba(255,193,7,0.5); }`,
    htmlCode: `<button class="amber-fire">Amber Fire</button>`
  },
  {
    id: "pulse-18",
    name: "Coral Soft",
    category: "pulse",
    description: "Pulsação suave em coral",
    duration: "2.5s",
    intensity: "soft 1.03x",
    previewColor: "#FF7043",
    cssCode: `.coral-soft {
  background: rgba(255,112,67,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #FF7043;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: coralSoft 2.5s ease-in-out infinite;
}
@keyframes coralSoft { 
  0%, 100% { transform: scale(1); opacity: 0.95; }`,
    htmlCode: `<button class="coral-soft">Coral Soft</button>`
  },
  {
    id: "pulse-19",
    name: "Silver Metallic",
    category: "pulse",
    description: "Metálico prateado premium",
    duration: "2s",
    intensity: "metallic 1.02x",
    previewColor: "#9E9E9E",
    cssCode: `.silver-metallic {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #333;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: silverMetallic 2s ease-in-out infinite;
}
@keyframes silverMetallic { 
  0%, 100% { transform: scale(1); background-position: 0% 50%; }`,
    htmlCode: `<button class="silver-metallic">Silver Metallic</button>`
  },
  {
    id: "pulse-20",
    name: "Emerald Shine",
    category: "pulse",
    description: "Brilho de esmeralda",
    duration: "1.8s",
    intensity: "shine 1.05x",
    previewColor: "#2E7D32",
    cssCode: `.emerald-shine {
  background: rgba(46,125,50,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #2E7D32;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: emeraldShine 1.8s ease-in-out infinite;
}
@keyframes emeraldShine { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(46,125,50,0.3); }`,
    htmlCode: `<button class="emerald-shine">Emerald Shine</button>`
  },
  {
    id: "pulse-21",
    name: "Ruby Glow",
    category: "pulse",
    description: "Brilho de rubi intenso",
    duration: "1.5s",
    intensity: "glow 1.06x",
    previewColor: "#D32F2F",
    cssCode: `.ruby-glow {
  background: rgba(211,47,47,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #D32F2F;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: rubyGlow 1.5s ease-in-out infinite;
}
@keyframes rubyGlow { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(211,47,47,0.4); }`,
    htmlCode: `<button class="ruby-glow">Ruby Glow</button>`
  },
  {
    id: "pulse-22",
    name: "Sapphire Deep",
    category: "pulse",
    description: "Safira profunda brilhante",
    duration: "2s",
    intensity: "deep 1.04x",
    previewColor: "#1565C0",
    cssCode: `.sapphire-deep {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: sapphireDeep 2s ease-in-out infinite;
}
@keyframes sapphireDeep { 
  0%, 100% { transform: scale(1); box-shadow: 0 5px 15px rgba(21,101,192,0.3); }`,
    htmlCode: `<button class="sapphire-deep">Sapphire Deep</button>`
  },
  {
    id: "pulse-23",
    name: "Sunset Gradient",
    category: "pulse",
    description: "Gradiente pôr do sol pulsante",
    duration: "2.5s",
    intensity: "gradient shift",
    previewColor: "#FF6B6B",
    cssCode: `.sunset-gradient-pulse {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: sunsetGradientPulse 2.5s ease-in-out infinite;
}
@keyframes sunsetGradientPulse { 
  0%, 100% { background-position: 0% 50%; transform: scale(1); }`,
    htmlCode: `<button class="sunset-gradient-pulse">Sunset Gradient</button>`
  },
  {
    id: "pulse-24",
    name: "Aurora Pulse",
    category: "pulse",
    description: "Aurora boreal pulsante",
    duration: "3s",
    intensity: "aurora 1.05x",
    previewColor: "#00E676",
    cssCode: `.aurora-pulse {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: auroraPulse 3s ease-in-out infinite;
}
@keyframes auroraPulse { 
  0%, 100% { background-position: 0% 50%; transform: scale(1); }`,
    htmlCode: `<button class="aurora-pulse">Aurora Pulse</button>`
  },
  {
    id: "pulse-25",
    name: "Neon Rainbow",
    category: "pulse",
    description: "Arco-íris neon pulsante",
    duration: "2s",
    intensity: "rainbow hue",
    previewColor: "#FF0080",
    cssCode: `.neon-rainbow {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: neonRainbow 2s linear infinite;
}
@keyframes neonRainbow { 
  0% { background-position: 0% 50%; transform: scale(1); }`,
    htmlCode: `<button class="neon-rainbow">Neon Rainbow</button>`
  },
  {
    id: "pulse-26",
    name: "Matrix Green",
    category: "pulse",
    description: "Verde matrix digital",
    duration: "1.2s",
    intensity: "digital 1.08x",
    previewColor: "#00FF00",
    cssCode: `.matrix-green {
  background: rgba(17,17,17,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #00FF00;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: matrixGreen 1.2s ease-in-out infinite;
}
@keyframes matrixGreen { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 10px #00FF00, inset 0 0 10px rgba(0,255,0,0.1); }`,
    htmlCode: `<button class="matrix-green">Matrix Green</button>`
  },
  {
    id: "pulse-27",
    name: "Lava Orange",
    category: "pulse",
    description: "Lava incandescente laranja",
    duration: "1.5s",
    intensity: "lava 1.06x",
    previewColor: "#FF5722",
    cssCode: `.lava-orange {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: lavaOrange 1.5s ease-in-out infinite;
}
@keyframes lavaOrange { 
  0%, 100% { transform: scale(1); box-shadow: 0 5px 15px rgba(255,87,34,0.4); }`,
    htmlCode: `<button class="lava-orange">Lava Orange</button>`
  },
  {
    id: "pulse-28",
    name: "Ice Blue",
    category: "pulse",
    description: "Gelo azul cristalino",
    duration: "2.5s",
    intensity: "ice 1.03x",
    previewColor: "#81D4FA",
    cssCode: `.ice-blue {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #01579B;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: iceBlue 2.5s ease-in-out infinite;
}
@keyframes iceBlue { 
  0%, 100% { transform: scale(1); box-shadow: 0 5px 15px rgba(129,212,250,0.3); }`,
    htmlCode: `<button class="ice-blue">Ice Blue</button>`
  },
  {
    id: "pulse-29",
    name: "Toxic Purple",
    category: "pulse",
    description: "Roxo tóxico vibrante",
    duration: "1s",
    intensity: "toxic 1.1x",
    previewColor: "#AA00FF",
    cssCode: `.toxic-purple {
  background: rgba(170,0,255,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #AA00FF;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: toxicPurple 1s ease-in-out infinite;
}
@keyframes toxicPurple { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 10px #AA00FF; }`,
    htmlCode: `<button class="toxic-purple">Toxic Purple</button>`
  },
  {
    id: "pulse-30",
    name: "CTA Ultimate",
    category: "pulse",
    description: "CTA definitivo multi-efeito",
    duration: "2s",
    intensity: "ultimate combo",
    previewColor: "#FF1744",
    cssCode: `.cta-ultimate {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: ctaUltimate 2s ease-in-out infinite;
}
@keyframes ctaUltimate { 
  0%, 100% { transform: scale(1); box-shadow: 0 5px 20px rgba(255,23,68,0.4); }`,
    htmlCode: `<button class="cta-ultimate">🔥 COMPRE AGORA</button>`
  },

  // ==================== GLOW ANIMATIONS (15) ====================
  {
    id: "glow-01",
    name: "Neon Hover Glow",
    category: "glow",
    description: "Brilho neon flutuante ao passar o mouse",
    duration: "1.5s",
    intensity: "blur glow",
    previewColor: "#00FFFF",
    cssCode: `.neon-hover-glow {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #000;
  position: relative;
  z-index: 1;
  overflow: hidden;
}
.neon-hover-glow::before {
  content: '';
  position: absolute;
  top: -2px; left: -2px; right: -2px; bottom: -2px;
  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  animation: glowing 1.5s linear infinite;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.neon-hover-glow:hover::before {
  opacity: 1;
}
@keyframes glowing {
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
}`,
    htmlCode: `<button class="neon-hover-glow">Neon Glow</button>`
  },
  {
    id: "glow-02",
    name: "Rainbow Border Glow",
    category: "glow",
    description: "Borda arco-íris brilhante animada",
    duration: "3s",
    intensity: "rainbow border",
    previewColor: "#FF00FF",
    cssCode: `.rainbow-border-glow {
  background: rgba(26,26,46,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  border: 3px solid transparent;
  background-clip: padding-box;
  position: relative;
}
.rainbow-border-glow::before {
  content: '';
  position: absolute;
  inset: -3px;
  background: linear-gradient(90deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #ff00c8);
  background-size: 300% 100%;
  border-radius: inherit;
  z-index: -1;
  animation: rainbowMove 3s linear infinite;
}
@keyframes rainbowMove {
  0% { background-position: 0% 50%; }
  100% { background-position: 300% 50%; }
}`,
    htmlCode: `<button class="rainbow-border-glow">Rainbow Border</button>`
  },
  {
    id: "glow-03",
    name: "Pulse Glow Blue",
    category: "glow",
    description: "Pulso azul brilhante contínuo",
    duration: "2s",
    intensity: "pulse shadow",
    previewColor: "#00BFFF",
    cssCode: `.pulse-glow-blue {
  background: rgba(0,191,255,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #00BFFF;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: pulseGlowBlue 2s ease-in-out infinite;
}
@keyframes pulseGlowBlue {
  0%, 100% { box-shadow: 0 0 5px #00BFFF, 0 0 10px #00BFFF; }`,
    htmlCode: `<button class="pulse-glow-blue">Pulse Glow</button>`
  },
  {
    id: "glow-04",
    name: "Electric Purple",
    category: "glow",
    description: "Roxo elétrico com faísca",
    duration: "0.8s",
    intensity: "electric spark",
    previewColor: "#9400D3",
    cssCode: `.electric-purple {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  position: relative;
  overflow: hidden;
}
.electric-purple::after {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  width: 0; height: 0;
  background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}
.electric-purple:hover::after {
  width: 300px; height: 300px;
  animation: electricSpark 0.8s ease-out;
}
@keyframes electricSpark {
  0% { opacity: 1; }
  100% { opacity: 0; }
}`,
    htmlCode: `<button class="electric-purple">Electric Purple</button>`
  },
  {
    id: "glow-05",
    name: "Neon Green Flicker",
    category: "glow",
    description: "Verde neon com efeito de cintilação",
    duration: "0.5s",
    intensity: "flicker",
    previewColor: "#39FF14",
    cssCode: `.neon-green-flicker {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #39FF14;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: neonFlicker 0.5s ease-in-out infinite;
}
.neon-green-flicker:hover {
  background: rgba(139,92,246,0.25);
  border-color: rgba(139,92,246,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(139,92,246,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes neonFlicker {
  0%, 100% { opacity: 1; text-shadow: 0 0 10px #39FF14, 0 0 20px #39FF14; }`,
    htmlCode: `<button class="neon-green-flicker">Neon Flicker</button>`
  },
  {
    id: "glow-06",
    name: "Fire Glow",
    category: "glow",
    description: "Brilho de fogo intenso",
    duration: "1.5s",
    intensity: "fire shadow",
    previewColor: "#FF4500",
    cssCode: `.fire-glow {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: fireGlow 1.5s ease-in-out infinite;
}
@keyframes fireGlow {
  0%, 100% { box-shadow: 0 0 10px #FF4500, 0 0 20px #FF8C00; }`,
    htmlCode: `<button class="fire-glow">Fire Glow</button>`
  },
  {
    id: "glow-07",
    name: "Ice Blue Glow",
    category: "glow",
    description: "Brilho gelado azul claro",
    duration: "2s",
    intensity: "ice pulse",
    previewColor: "#87CEEB",
    cssCode: `.ice-blue-glow {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #001a33;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: iceBlueGlow 2s ease-in-out infinite;
}
@keyframes iceBlueGlow {
  0%, 100% { box-shadow: 0 0 10px rgba(135,206,235,0.5); }`,
    htmlCode: `<button class="ice-blue-glow">Ice Glow</button>`
  },
  {
    id: "glow-08",
    name: "Plasma Pink",
    category: "glow",
    description: "Rosa plasma vibrante",
    duration: "1.8s",
    intensity: "plasma wave",
    previewColor: "#FF1493",
    cssCode: `.plasma-pink {
  background: rgba(255,20,147,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #FF1493;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: plasmaPink 1.8s ease-in-out infinite;
}
@keyframes plasmaPink {
  0%, 100% { 
    box-shadow: 0 0 15px #FF1493; 
    transform: scale(1);
  }`,
    htmlCode: `<button class="plasma-pink">Plasma Pink</button>`
  },
  {
    id: "glow-09",
    name: "Gold Shimmer",
    category: "glow",
    description: "Brilho dourado luxuoso",
    duration: "2s",
    intensity: "shimmer gold",
    previewColor: "#FFD700",
    cssCode: `.gold-shimmer {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #1a1a1a;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: goldShimmer 2s linear infinite;
}
@keyframes goldShimmer {
  0% { background-position: 200% 50%; box-shadow: 0 0 10px rgba(255,215,0,0.3); }`,
    htmlCode: `<button class="gold-shimmer">Gold Shimmer</button>`
  },
  {
    id: "glow-10",
    name: "Cyber Cyan",
    category: "glow",
    description: "Ciano cyberpunk futurista",
    duration: "1s",
    intensity: "cyber pulse",
    previewColor: "#00FFFF",
    cssCode: `.cyber-cyan {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #00FFFF;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: cyberCyan 1s ease-in-out infinite;
}
@keyframes cyberCyan {
  0%, 100% { box-shadow: 0 0 10px #00FFFF, inset 0 0 10px rgba(0,255,255,0.1); }`,
    htmlCode: `<button class="cyber-cyan">Cyber Cyan</button>`
  },
  {
    id: "glow-11",
    name: "Lava Glow",
    category: "glow",
    description: "Brilho de lava incandescente",
    duration: "2.5s",
    intensity: "lava flow",
    previewColor: "#FF6347",
    cssCode: `.lava-glow {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: lavaGlow 2.5s ease-in-out infinite;
}
@keyframes lavaGlow {
  0%, 100% { box-shadow: 0 5px 15px rgba(255,99,71,0.4); }`,
    htmlCode: `<button class="lava-glow">Lava Glow</button>`
  },
  {
    id: "glow-12",
    name: "Aurora Borealis",
    category: "glow",
    description: "Aurora boreal animada",
    duration: "4s",
    intensity: "aurora shift",
    previewColor: "#00FF7F",
    cssCode: `.aurora-borealis {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: auroraBorealis 4s ease infinite;
}
@keyframes auroraBorealis {
  0% { background-position: 0% 50%; box-shadow: 0 0 20px rgba(0,255,127,0.5); }`,
    htmlCode: `<button class="aurora-borealis">Aurora</button>`
  },
  {
    id: "glow-13",
    name: "Sunset Gradient Glow",
    category: "glow",
    description: "Gradiente pôr do sol brilhante",
    duration: "3s",
    intensity: "sunset pulse",
    previewColor: "#FF6B6B",
    cssCode: `.sunset-gradient-glow {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #1a1a1a;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: sunsetGradientGlow 3s ease infinite;
}
@keyframes sunsetGradientGlow {
  0% { background-position: 0% 50%; box-shadow: 0 0 15px rgba(255,107,107,0.4); }`,
    htmlCode: `<button class="sunset-gradient-glow">Sunset Glow</button>`
  },
  {
    id: "glow-14",
    name: "Toxic Green",
    category: "glow",
    description: "Verde tóxico radioativo",
    duration: "1.2s",
    intensity: "toxic pulse",
    previewColor: "#7FFF00",
    cssCode: `.toxic-green {
  background: rgba(127,255,0,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #1a1a1a;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: toxicGreen 1.2s ease-in-out infinite;
}
@keyframes toxicGreen {
  0%, 100% { box-shadow: 0 0 10px #7FFF00, 0 0 20px rgba(127,255,0,0.3); }`,
    htmlCode: `<button class="toxic-green">Toxic Green</button>`
  },
  {
    id: "glow-15",
    name: "Deep Space",
    category: "glow",
    description: "Espaço profundo com estrelas",
    duration: "3s",
    intensity: "space glow",
    previewColor: "#191970",
    cssCode: `.deep-space {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  position: relative;
  overflow: hidden;
  animation: deepSpaceGlow 3s ease-in-out infinite;
}
.deep-space::before {
  content: '✦';
  position: absolute;
  font-size: 8px;
  animation: twinkle 1.5s ease-in-out infinite;
}
@keyframes deepSpaceGlow {
  0%, 100% { box-shadow: 0 0 15px rgba(75,0,130,0.5); }
  50% { box-shadow: 0 0 30px rgba(75,0,130,0.8), 0 0 50px rgba(0,0,128,0.3); }
}
@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}`,
    htmlCode: `<button class="deep-space">Deep Space</button>`
  },

  // ==================== FILL ANIMATIONS (15) ====================
  {
    id: "fill-01",
    name: "Slide Fill Left",
    category: "fill",
    description: "Preenchimento deslizante da esquerda",
    duration: "0.4s",
    intensity: "left slide",
    previewColor: "#3498DB",
    cssCode: `.slide-fill-left {
  background: rgba(52,152,219,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #3498DB;
  border: 2px solid #3498DB;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease;
}
.slide-fill-left::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: #3498DB;
  z-index: -1;
  transition: left 0.4s ease;
}
.slide-fill-left:hover {
  color: white;
}
.slide-fill-left:hover::before {
  left: 0;
}`,
    htmlCode: `<button class="slide-fill-left">Slide Left</button>`
  },
  {
    id: "fill-02",
    name: "Slide Fill Right",
    category: "fill",
    description: "Preenchimento deslizante da direita",
    duration: "0.4s",
    intensity: "right slide",
    previewColor: "#E74C3C",
    cssCode: `.slide-fill-right {
  background: rgba(231,76,60,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #E74C3C;
  border: 2px solid #E74C3C;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease;
}
.slide-fill-right::before {
  content: '';
  position: absolute;
  top: 0; right: -100%;
  width: 100%; height: 100%;
  background: #E74C3C;
  z-index: -1;
  transition: right 0.4s ease;
}
.slide-fill-right:hover {
  color: white;
}
.slide-fill-right:hover::before {
  right: 0;
}`,
    htmlCode: `<button class="slide-fill-right">Slide Right</button>`
  },
  {
    id: "fill-03",
    name: "Slide Fill Up",
    category: "fill",
    description: "Preenchimento deslizante de baixo para cima",
    duration: "0.4s",
    intensity: "up slide",
    previewColor: "#2ECC71",
    cssCode: `.slide-fill-up {
  background: rgba(46,204,113,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #2ECC71;
  border: 2px solid #2ECC71;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease;
}
.slide-fill-up::before {
  content: '';
  position: absolute;
  left: 0; bottom: -100%;
  width: 100%; height: 100%;
  background: #2ECC71;
  z-index: -1;
  transition: bottom 0.4s ease;
}
.slide-fill-up:hover {
  color: white;
}
.slide-fill-up:hover::before {
  bottom: 0;
}`,
    htmlCode: `<button class="slide-fill-up">Slide Up</button>`
  },
  {
    id: "fill-04",
    name: "Slide Fill Down",
    category: "fill",
    description: "Preenchimento deslizante de cima para baixo",
    duration: "0.4s",
    intensity: "down slide",
    previewColor: "#9B59B6",
    cssCode: `.slide-fill-down {
  background: rgba(155,89,182,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #9B59B6;
  border: 2px solid #9B59B6;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease;
}
.slide-fill-down::before {
  content: '';
  position: absolute;
  left: 0; top: -100%;
  width: 100%; height: 100%;
  background: #9B59B6;
  z-index: -1;
  transition: top 0.4s ease;
}
.slide-fill-down:hover {
  color: white;
}
.slide-fill-down:hover::before {
  top: 0;
}`,
    htmlCode: `<button class="slide-fill-down">Slide Down</button>`
  },
  {
    id: "fill-05",
    name: "Center Expand",
    category: "fill",
    description: "Expansão do centro para fora",
    duration: "0.4s",
    intensity: "center expand",
    previewColor: "#F39C12",
    cssCode: `.center-expand {
  background: rgba(243,156,18,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #F39C12;
  border: 2px solid #F39C12;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease;
}
.center-expand::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  width: 0; height: 0;
  background: #F39C12;
  z-index: -1;
  transition: all 0.4s ease;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.center-expand:hover {
  color: white;
}
.center-expand:hover::before {
  width: 300%; height: 300%;
}`,
    htmlCode: `<button class="center-expand">Center Expand</button>`
  },
  {
    id: "fill-06",
    name: "Diagonal Fill",
    category: "fill",
    description: "Preenchimento diagonal",
    duration: "0.5s",
    intensity: "diagonal sweep",
    previewColor: "#1ABC9C",
    cssCode: `.diagonal-fill {
  background: rgba(26,188,156,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #1ABC9C;
  border: 2px solid #1ABC9C;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s ease;
}
.diagonal-fill::before {
  content: '';
  position: absolute;
  top: 0; left: -150%;
  width: 150%; height: 100%;
  background: #1ABC9C;
  z-index: -1;
  transform: skewX(-20deg);
  transition: left 0.5s ease;
}
.diagonal-fill:hover {
  color: white;
}
.diagonal-fill:hover::before {
  left: 0;
}`,
    htmlCode: `<button class="diagonal-fill">Diagonal Fill</button>`
  },
  {
    id: "fill-07",
    name: "Double Fill",
    category: "fill",
    description: "Preenchimento duplo das laterais",
    duration: "0.4s",
    intensity: "double slide",
    previewColor: "#E91E63",
    cssCode: `.double-fill {
  background: rgba(233,30,99,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #E91E63;
  border: 2px solid #E91E63;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.4s ease;
}
.double-fill::before, .double-fill::after {
  content: '';
  position: absolute;
  top: 0;
  width: 50%; height: 100%;
  background: #E91E63;
  z-index: -1;
  transition: transform 0.4s ease;
}
.double-fill::before { left: 0; transform: translateX(-100%); }
.double-fill::after { right: 0; transform: translateX(100%); }
.double-fill:hover { color: white; }
.double-fill:hover::before { transform: translateX(0); }
.double-fill:hover::after { transform: translateX(0); }`,
    htmlCode: `<button class="double-fill">Double Fill</button>`
  },
  {
    id: "fill-08",
    name: "Corner Fill",
    category: "fill",
    description: "Preenchimento do canto",
    duration: "0.5s",
    intensity: "corner expand",
    previewColor: "#673AB7",
    cssCode: `.corner-fill {
  background: rgba(103,58,183,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #673AB7;
  border: 2px solid #673AB7;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s ease;
}
.corner-fill::before {
  content: '';
  position: absolute;
  top: -50%; left: -50%;
  width: 0; height: 0;
  background: #673AB7;
  z-index: -1;
  transition: all 0.5s ease;
  transform: rotate(45deg);
}
.corner-fill:hover {
  color: white;
}
.corner-fill:hover::before {
  width: 300%; height: 300%;
}`,
    htmlCode: `<button class="corner-fill">Corner Fill</button>`
  },
  {
    id: "fill-09",
    name: "Shutter Open",
    category: "fill",
    description: "Efeito persiana abrindo",
    duration: "0.5s",
    intensity: "shutter vertical",
    previewColor: "#00BCD4",
    cssCode: `.shutter-open {
  background: rgba(0,188,212,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #00BCD4;
  border: 2px solid #00BCD4;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s ease;
}
.shutter-open::before, .shutter-open::after {
  content: '';
  position: absolute;
  left: 0;
  width: 100%; height: 50%;
  background: #00BCD4;
  z-index: -1;
  transition: transform 0.5s ease;
}
.shutter-open::before { top: 0; transform: translateY(-100%); }
.shutter-open::after { bottom: 0; transform: translateY(100%); }
.shutter-open:hover { color: white; }
.shutter-open:hover::before { transform: translateY(0); }
.shutter-open:hover::after { transform: translateY(0); }`,
    htmlCode: `<button class="shutter-open">Shutter Open</button>`
  },
  {
    id: "fill-10",
    name: "Stripe Fill",
    category: "fill",
    description: "Preenchimento em listras",
    duration: "0.6s",
    intensity: "striped",
    previewColor: "#FF5722",
    cssCode: `.stripe-fill {
  background: rgba(255,87,34,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #FF5722;
  border: 2px solid #FF5722;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.6s ease;
}
.stripe-fill::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: repeating-linear-gradient(90deg, #FF5722 0px, #FF5722 10px, transparent 10px, transparent 20px);
  z-index: -1;
  transition: left 0.6s ease;
}
.stripe-fill:hover::before { left: 0; }
.stripe-fill:hover { color: white; background: #FF5722; }`,
    htmlCode: `<button class="stripe-fill">Stripe Fill</button>`
  },
  {
    id: "fill-11",
    name: "Liquid Fill",
    category: "fill",
    description: "Preenchimento líquido ondulante",
    duration: "0.8s",
    intensity: "liquid wave",
    previewColor: "#2196F3",
    cssCode: `.liquid-fill {
  background: rgba(33,150,243,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #2196F3;
  border: 2px solid #2196F3;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.8s ease;
}
.liquid-fill::before {
  content: '';
  position: absolute;
  bottom: -100%; left: 0;
  width: 200%; height: 200%;
  background: #2196F3;
  z-index: -1;
  border-radius: 40%;
  transition: bottom 0.8s ease;
  animation: liquidWave 2s linear infinite;
}
@keyframes liquidWave { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
.liquid-fill:hover { color: white; }
.liquid-fill:hover::before { bottom: -50%; }`,
    htmlCode: `<button class="liquid-fill">Liquid Fill</button>`
  },
  {
    id: "fill-12",
    name: "Gradient Sweep",
    category: "fill",
    description: "Varredura de gradiente",
    duration: "0.5s",
    intensity: "gradient sweep",
    previewColor: "#FF6B6B",
    cssCode: `.gradient-sweep {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #FF6B6B;
  border: 2px solid #FF6B6B;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s ease;
}
.gradient-sweep::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, #FF6B6B, #FFE66D);
  z-index: -1;
  transition: left 0.5s ease;
}
.gradient-sweep:hover { color: #1a1a1a; }
.gradient-sweep:hover::before { left: 0; }`,
    htmlCode: `<button class="gradient-sweep">Gradient Sweep</button>`
  },
  {
    id: "fill-13",
    name: "Zoom Fill",
    category: "fill",
    description: "Preenchimento com zoom interno",
    duration: "0.4s",
    intensity: "zoom in",
    previewColor: "#4CAF50",
    cssCode: `.zoom-fill {
  background: rgba(76,175,80,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #4CAF50;
  border: 2px solid #4CAF50;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 0.4s ease;
}
.zoom-fill::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  width: 0; height: 0;
  background: #4CAF50;
  z-index: -1;
  transition: all 0.4s ease;
  transform: translate(-50%, -50%);
}
.zoom-fill:hover { color: white; transform: scale(1.05); }
.zoom-fill:hover::before { width: 120%; height: 120%; }`,
    htmlCode: `<button class="zoom-fill">Zoom Fill</button>`
  },
  {
    id: "fill-14",
    name: "Spotlight Fill",
    category: "fill",
    description: "Preenchimento com spotlight",
    duration: "0.5s",
    intensity: "spotlight",
    previewColor: "#795548",
    cssCode: `.spotlight-fill {
  background: rgba(121,85,72,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  position: relative;
  overflow: hidden;
}
.spotlight-fill::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  width: 0; height: 0;
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  transition: all 0.5s ease;
}
.spotlight-fill:hover::before {
  width: 300%; height: 300%;
}`,
    htmlCode: `<button class="spotlight-fill">Spotlight</button>`
  },
  {
    id: "fill-15",
    name: "X Fill",
    category: "fill",
    description: "Preenchimento em X cruzado",
    duration: "0.5s",
    intensity: "cross fill",
    previewColor: "#607D8B",
    cssCode: `.x-fill {
  background: rgba(96,125,139,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #607D8B;
  border: 2px solid #607D8B;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: color 0.5s ease;
}
.x-fill::before, .x-fill::after {
  content: '';
  position: absolute;
  width: 150%; height: 0;
  background: #607D8B;
  z-index: -1;
  transition: height 0.5s ease;
}
.x-fill::before { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(45deg); }
.x-fill::after { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-45deg); }
.x-fill:hover { color: white; }
.x-fill:hover::before, .x-fill:hover::after { height: 150%; }`,
    htmlCode: `<button class="x-fill">X Fill</button>`
  },

  // ==================== 3D ANIMATIONS (15) ====================
  {
    id: "3d-01",
    name: "3D Press",
    category: "3d",
    description: "Efeito de pressão 3D realista",
    duration: "0.15s",
    intensity: "press depth",
    previewColor: "#4A90D9",
    cssCode: `.btn-3d-press {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.btn-3d-press:active {
  transform: translateY(1px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.2), inset 0 2px 4px rgba(0,0,0,0.1);
}`,
    htmlCode: `<button class="btn-3d-press">3D Press</button>`
  },
  {
    id: "3d-02",
    name: "Flip Card",
    category: "3d",
    description: "Flip horizontal 3D no hover",
    duration: "0.6s",
    intensity: "180deg flip",
    previewColor: "#E74C3C",
    cssCode: `.flip-card-btn {
  background: rgba(231,76,60,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #E74C3C;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.flip-card-btn:hover {
  background: rgba(231,76,60,0.25);
  border-color: rgba(231,76,60,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(231,76,60,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="flip-card-btn">Flip Card</button>`
  },
  {
    id: "3d-03",
    name: "Tilt Hover",
    category: "3d",
    description: "Inclinação 3D suave no hover",
    duration: "0.3s",
    intensity: "10deg tilt",
    previewColor: "#27AE60",
    cssCode: `.tilt-hover {
  background: rgba(39,174,96,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #27AE60;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.tilt-hover:hover {
  background: rgba(39,174,96,0.25);
  border-color: rgba(39,174,96,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(39,174,96,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="tilt-hover">Tilt Hover</button>`
  },
  {
    id: "3d-04",
    name: "Push Down",
    category: "3d",
    description: "Empurrar para baixo com sombra",
    duration: "0.2s",
    intensity: "push shadow",
    previewColor: "#8E44AD",
    cssCode: `.push-down {
  background: rgba(142,68,173,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8E44AD;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.push-down:active {
  transform: translateY(1px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.2), inset 0 2px 4px rgba(0,0,0,0.1);
}`,
    htmlCode: `<button class="push-down">Push Down</button>`
  },
  {
    id: "3d-05",
    name: "Rotate X",
    category: "3d",
    description: "Rotação no eixo X",
    duration: "0.5s",
    intensity: "20deg rotateX",
    previewColor: "#16A085",
    cssCode: `.rotate-x {
  background: rgba(22,160,133,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #16A085;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.rotate-x:hover {
  background: rgba(22,160,133,0.25);
  border-color: rgba(22,160,133,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(22,160,133,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="rotate-x">Rotate X</button>`
  },
  {
    id: "3d-06",
    name: "Rotate Y",
    category: "3d",
    description: "Rotação no eixo Y",
    duration: "0.5s",
    intensity: "20deg rotateY",
    previewColor: "#D35400",
    cssCode: `.rotate-y {
  background: rgba(211,84,0,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #D35400;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.rotate-y:hover {
  background: rgba(211,84,0,0.25);
  border-color: rgba(211,84,0,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(211,84,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="rotate-y">Rotate Y</button>`
  },
  {
    id: "3d-07",
    name: "Layered Shadow",
    category: "3d",
    description: "Múltiplas camadas de sombra 3D",
    duration: "0.3s",
    intensity: "multi-layer",
    previewColor: "#2C3E50",
    cssCode: `.layered-shadow {
  background: rgba(44,62,80,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #2C3E50;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.layered-shadow:hover {
  background: rgba(44,62,80,0.25);
  border-color: rgba(44,62,80,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(44,62,80,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="layered-shadow">Layered 3D</button>`
  },
  {
    id: "3d-08",
    name: "Cube Rotate",
    category: "3d",
    description: "Rotação de cubo 3D",
    duration: "0.6s",
    intensity: "cube spin",
    previewColor: "#9B59B6",
    cssCode: `.cube-rotate {
  background: rgba(155,89,182,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #9B59B6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.cube-rotate:hover {
  background: rgba(155,89,182,0.25);
  border-color: rgba(155,89,182,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(155,89,182,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="cube-rotate">Cube Rotate</button>`
  },
  {
    id: "3d-09",
    name: "Float Up",
    category: "3d",
    description: "Flutuar para cima com sombra",
    duration: "0.4s",
    intensity: "float shadow",
    previewColor: "#3498DB",
    cssCode: `.float-up-3d {
  background: rgba(52,152,219,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #3498DB;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.float-up-3d:hover {
  background: rgba(52,152,219,0.25);
  border-color: rgba(52,152,219,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(52,152,219,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="float-up-3d">Float Up</button>`
  },
  {
    id: "3d-10",
    name: "Squeeze 3D",
    category: "3d",
    description: "Efeito de apertar 3D",
    duration: "0.3s",
    intensity: "squeeze transform",
    previewColor: "#E91E63",
    cssCode: `.squeeze-3d {
  background: rgba(233,30,99,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #E91E63;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.squeeze-3d:active {
  transform: translateY(1px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.2), inset 0 2px 4px rgba(0,0,0,0.1);
}`,
    htmlCode: `<button class="squeeze-3d">Squeeze 3D</button>`
  },
  {
    id: "3d-11",
    name: "Slide Depth",
    category: "3d",
    description: "Deslizar com profundidade",
    duration: "0.4s",
    intensity: "depth slide",
    previewColor: "#00BCD4",
    cssCode: `.slide-depth {
  background: rgba(0,188,212,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #00BCD4;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.slide-depth:hover {
  background: rgba(0,188,212,0.25);
  border-color: rgba(0,188,212,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(0,188,212,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="slide-depth">Slide Depth</button>`
  },
  {
    id: "3d-12",
    name: "Fold Open",
    category: "3d",
    description: "Efeito de dobra abrindo",
    duration: "0.5s",
    intensity: "fold",
    previewColor: "#FF9800",
    cssCode: `.fold-open {
  background: rgba(255,152,0,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #FF9800;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.fold-open:hover {
  background: rgba(255,152,0,0.25);
  border-color: rgba(255,152,0,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,152,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="fold-open">Fold Open</button>`
  },
  {
    id: "3d-13",
    name: "Pop Out",
    category: "3d",
    description: "Pop para fora da tela",
    duration: "0.3s",
    intensity: "pop forward",
    previewColor: "#673AB7",
    cssCode: `.pop-out-3d {
  background: rgba(103,58,183,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #673AB7;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.pop-out-3d:hover {
  background: rgba(103,58,183,0.25);
  border-color: rgba(103,58,183,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(103,58,183,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="pop-out-3d">Pop Out</button>`
  },
  {
    id: "3d-14",
    name: "Swing Door",
    category: "3d",
    description: "Porta balançando 3D",
    duration: "0.5s",
    intensity: "door swing",
    previewColor: "#795548",
    cssCode: `.swing-door {
  background: rgba(121,85,72,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #795548;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.swing-door:hover {
  background: rgba(121,85,72,0.25);
  border-color: rgba(121,85,72,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(121,85,72,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="swing-door">Swing Door</button>`
  },
  {
    id: "3d-15",
    name: "Emboss Press",
    category: "3d",
    description: "Efeito emboss pressionado",
    duration: "0.2s",
    intensity: "emboss",
    previewColor: "#607D8B",
    cssCode: `.emboss-press {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.emboss-press:active {
  transform: translateY(1px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.2), inset 0 2px 4px rgba(0,0,0,0.1);
}`,
    htmlCode: `<button class="emboss-press">Emboss</button>`
  },

  // ==================== ICON ANIMATIONS (15) ====================
  {
    id: "icon-01",
    name: "Arrow Slide",
    category: "icon",
    description: "Seta deslizante no hover",
    duration: "0.3s",
    intensity: "arrow slide",
    previewColor: "#3498DB",
    cssCode: `.arrow-slide {
  background: rgba(52,152,219,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  overflow: hidden;
}
.arrow-slide .icon {
  transition: transform 0.3s ease;
}
.arrow-slide:hover .icon {
  transform: translateX(5px);
}`,
    htmlCode: `<button class="arrow-slide">
  Próximo <span class="icon">→</span>
</button>`
  },
  {
    id: "icon-02",
    name: "Icon Bounce",
    category: "icon",
    description: "Ícone quicando no hover",
    duration: "0.5s",
    intensity: "bounce icon",
    previewColor: "#E74C3C",
    cssCode: `.icon-bounce {
  background: rgba(231,76,60,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.icon-bounce .icon {
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.icon-bounce:hover .icon {
  animation: iconBounce 0.5s ease;
}
@keyframes iconBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}`,
    htmlCode: `<button class="icon-bounce">
  <span class="icon">⭐</span> Favoritar
</button>`
  },
  {
    id: "icon-03",
    name: "Icon Spin",
    category: "icon",
    description: "Ícone girando no hover",
    duration: "0.6s",
    intensity: "360deg spin",
    previewColor: "#27AE60",
    cssCode: `.icon-spin {
  background: rgba(39,174,96,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.icon-spin .icon {
  transition: transform 0.6s ease;
}
.icon-spin:hover .icon {
  transform: rotate(360deg);
}`,
    htmlCode: `<button class="icon-spin">
  <span class="icon">⚙️</span> Configurar
</button>`
  },
  {
    id: "icon-04",
    name: "Icon Scale",
    category: "icon",
    description: "Ícone crescendo no hover",
    duration: "0.3s",
    intensity: "scale 1.3x",
    previewColor: "#9B59B6",
    cssCode: `.icon-scale {
  background: rgba(155,89,182,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.icon-scale .icon {
  transition: transform 0.3s ease;
}
.icon-scale:hover .icon {
  transform: scale(1.3);
}`,
    htmlCode: `<button class="icon-scale">
  <span class="icon">❤️</span> Curtir
</button>`
  },
  {
    id: "icon-05",
    name: "Icon Shake",
    category: "icon",
    description: "Ícone tremendo no hover",
    duration: "0.5s",
    intensity: "shake x",
    previewColor: "#F39C12",
    cssCode: `.icon-shake {
  background: rgba(243,156,18,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.icon-shake:hover .icon {
  animation: iconShake 0.5s ease-in-out;
}
@keyframes iconShake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-3px); }
  40%, 80% { transform: translateX(3px); }
}`,
    htmlCode: `<button class="icon-shake">
  <span class="icon">🔔</span> Notificações
</button>`
  },
  {
    id: "icon-06",
    name: "Icon Pulse",
    category: "icon",
    description: "Ícone pulsando continuamente",
    duration: "1s",
    intensity: "pulse infinite",
    previewColor: "#E91E63",
    cssCode: `.icon-pulse {
  background: rgba(233,30,99,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.icon-pulse .icon {
  animation: iconPulse 1s ease-in-out infinite;
}
@keyframes iconPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.8; }
}`,
    htmlCode: `<button class="icon-pulse">
  <span class="icon">🔴</span> Ao Vivo
</button>`
  },
  {
    id: "icon-07",
    name: "Icon Flip",
    category: "icon",
    description: "Ícone virando no hover",
    duration: "0.6s",
    intensity: "flip Y",
    previewColor: "#00BCD4",
    cssCode: `.icon-flip {
  background: rgba(0,188,212,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.icon-flip .icon {
  transition: transform 0.6s ease;
}
.icon-flip:hover .icon {
  transform: rotateY(180deg);
}`,
    htmlCode: `<button class="icon-flip">
  <span class="icon">🔄</span> Atualizar
</button>`
  },
  {
    id: "icon-08",
    name: "Icon Slide In",
    category: "icon",
    description: "Ícone aparecendo no hover",
    duration: "0.4s",
    intensity: "slide reveal",
    previewColor: "#673AB7",
    cssCode: `.icon-slide-in {
  background: rgba(103,58,183,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 0;
  overflow: hidden;
}
.icon-slide-in .icon {
  width: 0;
  overflow: hidden;
  transition: all 0.4s ease;
}
.icon-slide-in:hover .icon {
  width: 24px;
  margin-left: 8px;
}`,
    htmlCode: `<button class="icon-slide-in">
  Download <span class="icon">📥</span>
</button>`
  },
  {
    id: "icon-09",
    name: "Icon Swing",
    category: "icon",
    description: "Ícone balançando no hover",
    duration: "0.5s",
    intensity: "swing rotate",
    previewColor: "#FF5722",
    cssCode: `.icon-swing {
  background: rgba(255,87,34,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.icon-swing:hover .icon {
  animation: iconSwing 0.5s ease-in-out;
  transform-origin: top center;
}
@keyframes iconSwing {
  0% { transform: rotate(0deg); }
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}`,
    htmlCode: `<button class="icon-swing">
  <span class="icon">🔑</span> Acessar
</button>`
  },
  {
    id: "icon-10",
    name: "Icon Float",
    category: "icon",
    description: "Ícone flutuando suavemente",
    duration: "2s",
    intensity: "float infinite",
    previewColor: "#2196F3",
    cssCode: `.icon-float {
  background: rgba(33,150,243,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.icon-float .icon {
  animation: iconFloat 2s ease-in-out infinite;
}
@keyframes iconFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}`,
    htmlCode: `<button class="icon-float">
  <span class="icon">☁️</span> Cloud
</button>`
  },
  {
    id: "icon-11",
    name: "Icon Jelly",
    category: "icon",
    description: "Ícone com efeito gelatina",
    duration: "0.6s",
    intensity: "jelly wobble",
    previewColor: "#4CAF50",
    cssCode: `.icon-jelly {
  background: rgba(76,175,80,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.icon-jelly:hover .icon {
  animation: iconJelly 0.6s ease;
}
@keyframes iconJelly {
  0% { transform: scale(1, 1); }
  30% { transform: scale(1.25, 0.75); }
  40% { transform: scale(0.75, 1.25); }
  50% { transform: scale(1.15, 0.85); }
  65% { transform: scale(0.95, 1.05); }
  75% { transform: scale(1.05, 0.95); }
  100% { transform: scale(1, 1); }
}`,
    htmlCode: `<button class="icon-jelly">
  <span class="icon">🎯</span> Alvo
</button>`
  },
  {
    id: "icon-12",
    name: "Icon Sparkle",
    category: "icon",
    description: "Ícone com brilho cintilante",
    duration: "1.5s",
    intensity: "sparkle glow",
    previewColor: "#FFD700",
    cssCode: `.icon-sparkle {
  background: rgba(255,215,0,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #1a1a1a;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.icon-sparkle .icon {
  animation: iconSparkle 1.5s ease-in-out infinite;
}
@keyframes iconSparkle {
  0%, 100% { filter: brightness(1); transform: scale(1); }
  50% { filter: brightness(1.5); transform: scale(1.1); }
}`,
    htmlCode: `<button class="icon-sparkle">
  <span class="icon">✨</span> Premium
</button>`
  },
  {
    id: "icon-13",
    name: "Icon Rocket",
    category: "icon",
    description: "Ícone decolando no hover",
    duration: "0.5s",
    intensity: "launch up",
    previewColor: "#1565C0",
    cssCode: `.icon-rocket {
  background: rgba(21,101,192,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.icon-rocket .icon {
  transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.icon-rocket:hover .icon {
  transform: translateY(-8px) rotate(-45deg);
}`,
    htmlCode: `<button class="icon-rocket">
  <span class="icon">🚀</span> Lançar
</button>`
  },
  {
    id: "icon-14",
    name: "Icon Wave",
    category: "icon",
    description: "Ícone acenando",
    duration: "1s",
    intensity: "wave rotate",
    previewColor: "#FF9800",
    cssCode: `.icon-wave {
  background: rgba(255,152,0,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.icon-wave:hover .icon {
  animation: iconWave 1s ease-in-out;
  transform-origin: 70% 70%;
}
@keyframes iconWave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}`,
    htmlCode: `<button class="icon-wave">
  <span class="icon">👋</span> Olá
</button>`
  },
  {
    id: "icon-15",
    name: "Icon Heart Beat",
    category: "icon",
    description: "Coração batendo",
    duration: "1.2s",
    intensity: "heartbeat",
    previewColor: "#E91E63",
    cssCode: `.icon-heartbeat {
  background: rgba(233,30,99,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.icon-heartbeat .icon {
  animation: iconHeartbeat 1.2s ease-in-out infinite;
}
@keyframes iconHeartbeat {
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
}`,
    htmlCode: `<button class="icon-heartbeat">
  <span class="icon">❤️</span> Amor
</button>`
  },

  // ==================== SPECIAL EFFECTS (30 novos efeitos únicos) ====================
  
  // Neon Glow Effects
  {
    id: "glow-11",
    name: "Neon Pulse Core",
    category: "glow",
    description: "Núcleo pulsante com múltiplas camadas neon",
    duration: "2s",
    intensity: "extreme glow",
    previewColor: "#00FFFF",
    cssCode: `.neon-pulse-core {
  background: rgba(10,10,10,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #00FFFF;
  border: 2px solid #00FFFF;
  position: relative;
  overflow: hidden;
}
.neon-pulse-core::before {
  content: '';
  position: absolute;
  inset: -50%;
  background: conic-gradient(from 0deg, transparent, #00FFFF, transparent 30%);
  animation: neonRotate 2s linear infinite;
}
.neon-pulse-core::after {
  content: '';
  position: absolute;
  inset: 3px;
  background: #0a0a0a;
  border-radius: inherit;
}
.neon-pulse-core span { position: relative; z-index: 1; }
@keyframes neonRotate {
  to { transform: rotate(360deg); }
}`,
    htmlCode: `<button class="neon-pulse-core"><span>Cyber Core</span></button>`
  },
  {
    id: "glow-12",
    name: "Electric Storm",
    category: "glow",
    description: "Tempestade elétrica com raios",
    duration: "0.3s",
    intensity: "lightning flash",
    previewColor: "#FFFF00",
    cssCode: `.electric-storm {
  background: rgba(26,26,46,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #FFFF00;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: electricStorm 0.3s ease-out;
}
.electric-storm:hover {
  background: rgba(26,26,46,0.25);
  border-color: rgba(26,26,46,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(26,26,46,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes electricStorm {
  0%, 100% { filter: brightness(1); }`,
    htmlCode: `<button class="electric-storm">⚡ Storm</button>`
  },
  {
    id: "glow-13",
    name: "Plasma Wave",
    category: "glow",
    description: "Onda de plasma fluindo",
    duration: "3s",
    intensity: "flowing plasma",
    previewColor: "#FF00FF",
    cssCode: `.plasma-wave {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: plasmaFlow 3s ease-in-out infinite;
}
@keyframes plasmaFlow {
  0%, 100% { background-position: 0% 50%; }`,
    htmlCode: `<button class="plasma-wave">Plasma</button>`
  },
  {
    id: "glow-14",
    name: "Aurora Borealis",
    category: "glow",
    description: "Aurora boreal animada",
    duration: "4s",
    intensity: "aurora shift",
    previewColor: "#00FF88",
    cssCode: `.aurora-borealis {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: auroraShift 4s ease-in-out infinite;
}
@keyframes auroraShift {
  0%, 100% { background-position: 0% 50%; }`,
    htmlCode: `<button class="aurora-borealis">Aurora</button>`
  },
  {
    id: "glow-15",
    name: "Holographic Shine",
    category: "glow",
    description: "Brilho holográfico iridescente",
    duration: "2s",
    intensity: "holo shine",
    previewColor: "#C0C0C0",
    cssCode: `.holographic-shine {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  background-size: 300% 300%;
  color: white;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
  animation: holoShine 2s linear infinite;
  -webkit-background-clip: padding-box;
  border: 2px solid transparent;
  position: relative;
}
.holographic-shine::before {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  filter: blur(15px);
  opacity: 0.5;
  z-index: -1;
}
@keyframes holoShine {
  0% { background-position: 0% 0%; }
  100% { background-position: 300% 300%; }
}`,
    htmlCode: `<button class="holographic-shine">Holographic</button>`
  },

  // Glass Morph Effects
  {
    id: "fill-11",
    name: "Glass Morph",
    category: "fill",
    description: "Glassmorphism com blur dinâmico",
    duration: "0.4s",
    intensity: "glass blur",
    previewColor: "#FFFFFF",
    cssCode: `.glass-morph {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.glass-morph:hover {
  background: rgba(139,92,246,0.25);
  border-color: rgba(139,92,246,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(139,92,246,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="glass-morph">Glass</button>`
  },
  {
    id: "fill-12",
    name: "Frosted Crystal",
    category: "fill",
    description: "Cristal fosco com reflexo",
    duration: "0.5s",
    intensity: "crystal refract",
    previewColor: "#E0F7FA",
    cssCode: `.frosted-crystal {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  backdrop-filter: blur(15px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.3);
  color: #0097A7;
  position: relative;
  overflow: hidden;
}
.frosted-crystal::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent);
  transform: rotate(45deg) translateY(-100%);
  transition: transform 0.5s;
}
.frosted-crystal:hover::before {
  transform: rotate(45deg) translateY(100%);
}`,
    htmlCode: `<button class="frosted-crystal">Crystal</button>`
  },
  {
    id: "fill-13",
    name: "Liquid Metal",
    category: "fill",
    description: "Metal líquido fluindo",
    duration: "2s",
    intensity: "mercury flow",
    previewColor: "#B0BEC5",
    cssCode: `.liquid-metal {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: liquidMetal 2s ease infinite;
}
@keyframes liquidMetal {
  0%, 100% { background-position: 0% 50%; }`,
    htmlCode: `<button class="liquid-metal">Mercury</button>`
  },
  {
    id: "fill-14",
    name: "Magnetic Pull",
    category: "fill",
    description: "Efeito de atração magnética",
    duration: "0.3s",
    intensity: "magnetic force",
    previewColor: "#3F51B5",
    cssCode: `.magnetic-pull {
  background: rgba(63,81,181,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  position: relative;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}
.magnetic-pull::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), 
    rgba(255,255,255,0.3) 0%, 
    transparent 50%
  );
  opacity: 0;
  transition: opacity 0.3s;
}
.magnetic-pull:hover::before { opacity: 1; }
.magnetic-pull:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 40px rgba(63,81,181,0.4);
}`,
    htmlCode: `<button class="magnetic-pull">Magnetic</button>`
  },
  {
    id: "fill-15",
    name: "Gradient Sweep",
    category: "fill",
    description: "Varredura de gradiente diagonal",
    duration: "0.6s",
    intensity: "sweep diagonal",
    previewColor: "#9C27B0",
    cssCode: `.gradient-sweep {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.gradient-sweep:hover {
  background: rgba(139,92,246,0.25);
  border-color: rgba(139,92,246,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(139,92,246,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="gradient-sweep">Sweep</button>`
  },

  // 3D Effects
  {
    id: "3d-11",
    name: "Cube Flip",
    category: "3d",
    description: "Cubo 3D girando",
    duration: "0.6s",
    intensity: "full flip",
    previewColor: "#FF5722",
    cssCode: `.cube-flip {
  background: rgba(255,87,34,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #FF5722;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: cubeFlip 0.6s ease-out;
}
.cube-flip:hover {
  background: rgba(255,87,34,0.25);
  border-color: rgba(255,87,34,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,87,34,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
@keyframes cubeFlip {
  0% { transform: rotateX(0) rotateY(0); }`,
    htmlCode: `<button class="cube-flip">Cube</button>`
  },
  {
    id: "3d-12",
    name: "Depth Push",
    category: "3d",
    description: "Profundidade com push 3D",
    duration: "0.3s",
    intensity: "deep push",
    previewColor: "#4CAF50",
    cssCode: `.depth-push {
  background: rgba(76,175,80,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #4CAF50;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.depth-push:hover {
  background: rgba(76,175,80,0.25);
  border-color: rgba(76,175,80,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(76,175,80,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
.depth-push:active {
  transform: translateY(1px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.2), inset 0 2px 4px rgba(0,0,0,0.1);
}`,
    htmlCode: `<button class="depth-push">Push Me</button>`
  },
  {
    id: "3d-13",
    name: "Floating Card",
    category: "3d",
    description: "Card flutuante com sombra dinâmica",
    duration: "0.4s",
    intensity: "float shadow",
    previewColor: "#2196F3",
    cssCode: `.floating-card {
  background: rgba(33,150,243,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #2196F3;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.floating-card:hover {
  background: rgba(33,150,243,0.25);
  border-color: rgba(33,150,243,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(33,150,243,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="floating-card">Float</button>`
  },
  {
    id: "3d-14",
    name: "Perspective Tilt",
    category: "3d",
    description: "Inclinação perspectiva interativa",
    duration: "0.3s",
    intensity: "tilt 15deg",
    previewColor: "#673AB7",
    cssCode: `.perspective-tilt {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #8b5cf6;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.perspective-tilt:hover {
  background: rgba(139,92,246,0.25);
  border-color: rgba(139,92,246,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(139,92,246,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="perspective-tilt">Tilt</button>`
  },
  {
    id: "3d-15",
    name: "Extruded Text",
    category: "3d",
    description: "Texto 3D extrudado",
    duration: "0.4s",
    intensity: "text extrude",
    previewColor: "#795548",
    cssCode: `.extruded-text {
  background: rgba(121,85,72,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #795548;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.extruded-text:hover {
  background: rgba(121,85,72,0.25);
  border-color: rgba(121,85,72,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(121,85,72,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="extruded-text">Extrude</button>`
  },

  // Particle & Special Effects
  {
    id: "pulse-31",
    name: "Particle Burst",
    category: "pulse",
    description: "Explosão de partículas",
    duration: "0.8s",
    intensity: "burst particles",
    previewColor: "#E91E63",
    cssCode: `.particle-burst {
  background: rgba(233,30,99,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  position: relative;
  overflow: visible;
}
.particle-burst::before,
.particle-burst::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #E91E63;
  opacity: 0;
}
.particle-burst:hover::before {
  animation: particleBurst1 0.8s ease-out;
}
.particle-burst:hover::after {
  animation: particleBurst2 0.8s ease-out 0.1s;
}
@keyframes particleBurst1 {
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  100% { transform: translate(-40px, -40px) scale(0); opacity: 0; }
}
@keyframes particleBurst2 {
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  100% { transform: translate(40px, -30px) scale(0); opacity: 0; }
}`,
    htmlCode: `<button class="particle-burst">✨ Burst</button>`
  },
  {
    id: "pulse-32",
    name: "Ripple Echo",
    category: "pulse",
    description: "Ondas concêntricas em eco",
    duration: "1.5s",
    intensity: "triple ripple",
    previewColor: "#00BCD4",
    cssCode: `.ripple-echo {
  background: rgba(0,188,212,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  position: relative;
  overflow: visible;
}
.ripple-echo::before,
.ripple-echo::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 2px solid #00BCD4;
  opacity: 0;
}
.ripple-echo:hover::before {
  animation: rippleEcho 1.5s ease-out infinite;
}
.ripple-echo:hover::after {
  animation: rippleEcho 1.5s ease-out 0.5s infinite;
}
@keyframes rippleEcho {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2.5); opacity: 0; }
}`,
    htmlCode: `<button class="ripple-echo">Ripple</button>`
  },
  {
    id: "pulse-33",
    name: "Heartbeat Glow",
    category: "pulse",
    description: "Batimento com aura brilhante",
    duration: "1.5s",
    intensity: "heart glow",
    previewColor: "#F44336",
    cssCode: `.heartbeat-glow {
  background: rgba(244,67,54,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #F44336;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: heartbeatGlow 1.5s ease-in-out infinite;
}
@keyframes heartbeatGlow {
  0%, 100% { 
    transform: scale(1); 
    box-shadow: 0 0 0 0 rgba(244,67,54,0.7);
  }`,
    htmlCode: `<button class="heartbeat-glow">❤️ Beat</button>`
  },
  {
    id: "pulse-34",
    name: "Sonar Ping",
    category: "pulse",
    description: "Ping de sonar detectando",
    duration: "2s",
    intensity: "sonar detect",
    previewColor: "#4CAF50",
    cssCode: `.sonar-ping {
  background: rgba(76,175,80,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  position: relative;
}
.sonar-ping::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: #4CAF50;
  animation: sonarPing 2s ease-out infinite;
  z-index: -1;
}
@keyframes sonarPing {
  0% { transform: scale(1); opacity: 0.8; }
  70% { transform: scale(1.8); opacity: 0; }
  100% { transform: scale(1.8); opacity: 0; }
}`,
    htmlCode: `<button class="sonar-ping">📡 Sonar</button>`
  },
  {
    id: "pulse-35",
    name: "Energy Core",
    category: "pulse",
    description: "Núcleo de energia pulsante",
    duration: "2s",
    intensity: "core energy",
    previewColor: "#FFEB3B",
    cssCode: `.energy-core {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #333;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: energyCore 2s ease-in-out infinite;
}
@keyframes energyCore {
  0%, 100% { 
    transform: scale(1);
    box-shadow: 0 0 20px rgba(255,235,59,0.5);
    filter: brightness(1);
  }`,
    htmlCode: `<button class="energy-core">⚡ Energy</button>`
  },

  // Cyberpunk Effects
  {
    id: "scale-31",
    name: "Cyber Glitch",
    category: "scale",
    description: "Glitch cyberpunk intenso",
    duration: "0.5s",
    intensity: "glitch shift",
    previewColor: "#FF0080",
    cssCode: `.cyber-glitch {
  background: rgba(26,26,46,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #FF0080;
  border: 2px solid #FF0080;
  position: relative;
}
.cyber-glitch:hover {
  animation: cyberGlitch 0.5s steps(10) infinite;
}
.cyber-glitch::before,
.cyber-glitch::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
}
.cyber-glitch:hover::before {
  color: #00FFFF;
  animation: glitchLeft 0.3s steps(3) infinite;
  clip-path: polygon(0 0, 100% 0, 100% 35%, 0 35%);
  opacity: 1;
}
.cyber-glitch:hover::after {
  color: #FF0080;
  animation: glitchRight 0.3s steps(3) infinite reverse;
  clip-path: polygon(0 65%, 100% 65%, 100% 100%, 0 100%);
  opacity: 1;
}
@keyframes cyberGlitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(3px, -3px); }
  60% { transform: translate(-2px, -2px); }
  80% { transform: translate(2px, 2px); }
}
@keyframes glitchLeft {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(-5px); }
}
@keyframes glitchRight {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}`,
    htmlCode: `<button class="cyber-glitch" data-text="GLITCH">GLITCH</button>`
  },
  {
    id: "scale-32",
    name: "Matrix Rain",
    category: "scale",
    description: "Chuva matrix digital",
    duration: "3s",
    intensity: "matrix flow",
    previewColor: "#00FF00",
    cssCode: `.matrix-rain {
  background: rgba(10,10,10,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #00FF00;
  border: 1px solid #00FF00;
  font-family: monospace;
  position: relative;
  overflow: hidden;
}
.matrix-rain::before {
  content: '10101010';
  position: absolute;
  top: -100%;
  left: 0;
  width: 100%;
  font-size: 8px;
  color: rgba(0,255,0,0.3);
  animation: matrixRain 3s linear infinite;
}
@keyframes matrixRain {
  0% { top: -100%; opacity: 1; }
  100% { top: 100%; opacity: 0; }
}`,
    htmlCode: `<button class="matrix-rain">MATRIX</button>`
  },
  {
    id: "scale-33",
    name: "Neon Sign",
    category: "scale",
    description: "Letreiro neon piscando",
    duration: "2s",
    intensity: "neon flicker",
    previewColor: "#FF1493",
    cssCode: `.neon-sign {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #FF1493;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
  animation: neonSign 2s ease-in-out infinite;
}
@keyframes neonSign {
  0%, 100% { opacity: 1; filter: brightness(1); }`,
    htmlCode: `<button class="neon-sign">OPEN</button>`
  },
  {
    id: "scale-34",
    name: "Laser Scan",
    category: "scale",
    description: "Varredura laser horizontal",
    duration: "1.5s",
    intensity: "scan line",
    previewColor: "#00BFFF",
    cssCode: `.laser-scan {
  background: rgba(26,26,46,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #00BFFF;
  border: 1px solid #00BFFF;
  position: relative;
  overflow: hidden;
}
.laser-scan::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(0,191,255,0.4), 
    transparent
  );
  animation: laserScan 1.5s ease-in-out infinite;
}
@keyframes laserScan {
  0% { left: -50%; }
  100% { left: 150%; }
}`,
    htmlCode: `<button class="laser-scan">SCAN</button>`
  },
  {
    id: "scale-35",
    name: "Retro Arcade",
    category: "scale",
    description: "Estilo arcade retrô",
    duration: "0.3s",
    intensity: "pixel press",
    previewColor: "#FF6B6B",
    cssCode: `.retro-arcade {
  background: rgba(255,107,107,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #FF6B6B;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.retro-arcade:hover {
  background: rgba(255,107,107,0.25);
  border-color: rgba(255,107,107,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(255,107,107,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}
.retro-arcade:active {
  transform: translateY(1px);
  box-shadow: 0 4px 16px rgba(0,0,0,0.2), inset 0 2px 4px rgba(0,0,0,0.1);
}`,
    htmlCode: `<button class="retro-arcade">PLAY</button>`
  },

  // Premium Effects
  {
    id: "icon-16",
    name: "Diamond Sparkle",
    category: "icon",
    description: "Diamante com brilho premium",
    duration: "2s",
    intensity: "diamond shine",
    previewColor: "#E0E0E0",
    cssCode: `.diamond-sparkle {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #333;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
  overflow: hidden;
}
.diamond-sparkle .icon {
  animation: diamondSparkle 2s ease-in-out infinite;
}
.diamond-sparkle::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent 40%,
    rgba(255,255,255,0.8) 50%,
    transparent 60%
  );
  animation: diamondShine 3s linear infinite;
}
@keyframes diamondSparkle {
  0%, 100% { transform: scale(1) rotate(0deg); }
  50% { transform: scale(1.2) rotate(180deg); }
}
@keyframes diamondShine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}`,
    htmlCode: `<button class="diamond-sparkle">
  <span class="icon">💎</span> Premium
</button>`
  },
  {
    id: "icon-17",
    name: "Fire Trail",
    category: "icon",
    description: "Rastro de fogo animado",
    duration: "1s",
    intensity: "fire trail",
    previewColor: "#FF5722",
    cssCode: `.fire-trail {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
}
.fire-trail .icon {
  animation: fireTrail 1s ease-in-out infinite;
  filter: drop-shadow(0 0 5px #FF5722);
}
@keyframes fireTrail {
  0%, 100% { 
    transform: translateY(0) scale(1);
    filter: drop-shadow(0 0 5px #FF5722);
  }
  50% { 
    transform: translateY(-5px) scale(1.2);
    filter: drop-shadow(0 0 15px #FF9800) drop-shadow(0 5px 10px #FF5722);
  }
}`,
    htmlCode: `<button class="fire-trail">
  <span class="icon">🔥</span> Hot Deal
</button>`
  },
  {
    id: "icon-18",
    name: "Lightning Bolt",
    category: "icon",
    description: "Raio com flash elétrico",
    duration: "0.8s",
    intensity: "electric flash",
    previewColor: "#FFC107",
    cssCode: `.lightning-bolt {
  background: rgba(26,26,46,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #FFC107;
  border: 2px solid #FFC107;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.lightning-bolt .icon {
  animation: lightningBolt 0.8s ease-in-out infinite;
}
.lightning-bolt:hover {
  box-shadow: 0 0 30px rgba(255,193,7,0.5);
}
@keyframes lightningBolt {
  0%, 100% { 
    transform: scale(1);
    filter: brightness(1);
  }
  10% { filter: brightness(3); transform: scale(1.3); }
  20% { filter: brightness(0.8); transform: scale(1); }
  30% { filter: brightness(2); transform: scale(1.2); }
  40% { filter: brightness(1); transform: scale(1); }
}`,
    htmlCode: `<button class="lightning-bolt">
  <span class="icon">⚡</span> Fast
</button>`
  },
  {
    id: "icon-19",
    name: "Magic Wand",
    category: "icon",
    description: "Varinha mágica com estrelas",
    duration: "1.5s",
    intensity: "magic sparkle",
    previewColor: "#9C27B0",
    cssCode: `.magic-wand {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
  overflow: visible;
}
.magic-wand .icon {
  animation: magicWand 1.5s ease-in-out infinite;
}
@keyframes magicWand {
  0%, 100% { 
    transform: rotate(0deg) scale(1);
    filter: drop-shadow(0 0 3px #FFD700);
  }
  25% { transform: rotate(-20deg) scale(1.1); }
  50% { 
    transform: rotate(20deg) scale(1.2);
    filter: drop-shadow(0 0 15px #FFD700) drop-shadow(0 0 30px #FF69B4);
  }
  75% { transform: rotate(-10deg) scale(1.1); }
}`,
    htmlCode: `<button class="magic-wand">
  <span class="icon">✨</span> Magic
</button>`
  },
  {
    id: "icon-20",
    name: "Rocket Launch",
    category: "icon",
    description: "Foguete decolando com chamas",
    duration: "1s",
    intensity: "launch thrust",
    previewColor: "#3F51B5",
    cssCode: `.rocket-launch {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}
.rocket-launch .icon {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.rocket-launch:hover {
  box-shadow: 0 10px 30px rgba(63,81,181,0.4);
}
.rocket-launch:hover .icon {
  transform: translateY(-15px) rotate(-45deg);
  filter: drop-shadow(0 10px 10px rgba(255,87,34,0.6));
}`,
    htmlCode: `<button class="rocket-launch">
  <span class="icon">🚀</span> Launch
</button>`
  },

  // ==================== UI ULTRA - BUTTON STYLES (6 botões) ====================
  {
    id: "B-UI-01",
    name: "Glass Button",
    description: "Botão com efeito glassmorphism premium, backdrop blur e borda sutil.",
    category: "glow",
    cssCode: `.ui-btn-glass {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.ui-btn-glass:hover {
  background: rgba(139,92,246,0.25);
  border-color: rgba(139,92,246,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(139,92,246,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="ui-btn-glass">Glass Button</button>`,
    duration: "0.3s",
    intensity: "medium",
    previewColor: "#6366f1",
    useCaseExample: "Botões em overlays, modais e interfaces com fundo escuro.",
  },
  {
    id: "B-UI-02",
    name: "Neon Border Button",
    description: "Botão com borda neon brilhante e shadow glow, estilo cyberpunk.",
    category: "glow",
    cssCode: `.ui-btn-neon {
  background: rgba(17,17,17,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.ui-btn-neon:hover {
  background: rgba(17,17,17,0.25);
  border-color: rgba(17,17,17,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(17,17,17,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="ui-btn-neon">Neon Button</button>`,
    duration: "0.3s",
    intensity: "high",
    previewColor: "#6366f1",
    useCaseExample: "CTAs em sites futuristas, games e interfaces tech.",
  },
  {
    id: "B-UI-03",
    name: "Gradient Flow Button",
    description: "Botão com gradiente fluido e transição suave, visual premium moderno.",
    category: "fill",
    cssCode: `.ui-btn-gradient {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.ui-btn-gradient:hover {
  background: rgba(139,92,246,0.25);
  border-color: rgba(139,92,246,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(139,92,246,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="ui-btn-gradient">Gradient Button</button>`,
    duration: "0.3s",
    intensity: "medium",
    previewColor: "#6366f1",
    useCaseExample: "CTAs principais, botões hero e ações de destaque.",
  },
  {
    id: "B-UI-04",
    name: "Expand Fill Button",
    description: "Botão com preenchimento expandido ao hover via pseudo-elemento ::before.",
    category: "fill",
    cssCode: `.ui-btn-expand {
  display: inline-block;
  padding: 14px 36px;
  border-radius: 999px;
  background: rgba(99,102,241,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #fff;
  font-weight: 600;
  border: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
}
.ui-btn-expand::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #fff;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(.16,.8,.24,1);
  border-radius: 999px;
}
.ui-btn-expand:hover::before {
  transform: scaleX(1);
}
.ui-btn-expand span {
  position: relative;
  z-index: 1;
}
.ui-btn-expand:hover span {
  color: #6366f1;
}`,
    htmlCode: `<button class="ui-btn-expand"><span>Expand Fill</span></button>`,
    duration: "0.4s",
    intensity: "high",
    previewColor: "#6366f1",
    useCaseExample: "Botões com feedback visual forte em landing pages.",
  },
  {
    id: "B-UI-05",
    name: "Outline Minimal Button",
    description: "Botão outline minimalista com transição de preenchimento ao hover.",
    category: "scale",
    cssCode: `.ui-btn-outline {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.ui-btn-outline:hover {
  background: rgba(139,92,246,0.25);
  border-color: rgba(139,92,246,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(139,92,246,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="ui-btn-outline">Outline Button</button>`,
    duration: "0.3s",
    intensity: "low",
    previewColor: "#f5f5f7",
    useCaseExample: "Botões secundários, links de navegação e ações complementares.",
  },
  {
    id: "B-UI-06",
    name: "Lift Shadow Button",
    description: "Botão com elevação dramática e sombra profunda ao hover, sensação tridimensional.",
    category: "3d",
    cssCode: `.ui-btn-lift {
  background: rgba(99,102,241,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.15);
  box-shadow: 0 8px 32px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}
.ui-btn-lift:hover {
  background: rgba(99,102,241,0.25);
  border-color: rgba(99,102,241,0.4);
  box-shadow: 0 12px 40px rgba(0,0,0,0.3), 0 0 20px rgba(99,102,241,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
  transform: translateY(-2px);
}`,
    htmlCode: `<button class="ui-btn-lift">Lift Button</button>`,
    duration: "0.3s",
    intensity: "high",
    previewColor: "#6366f1",
    useCaseExample: "Botões de destaque com efeito 3D em interfaces modernas.",
  },
  {
    id: "btn-metallic-3d",
    name: "3D Metallic Shine",
    category: "3d",
    description: "Botão metálico 3D com gradiente roxo, sombra profunda e efeito shimmer ao hover.",
    cssCode: `.btn-metallic-3d {
  background: rgba(139,92,246,0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #fff;
  padding: 12px 32px;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow:
    0 4px 0px 0px #5b21b6,
    0 10px 30px -5px rgba(124, 58, 237, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  transition: all 0.1s ease;
}
.btn-metallic-3d:hover {
  transform: translateY(-2px);
  box-shadow:
    0 6px 0px 0px #5b21b6,
    0 15px 40px -5px rgba(124, 58, 237, 0.7),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  filter: brightness(1.1);
}
.btn-metallic-3d:active {
  transform: translateY(2px);
  box-shadow:
    0 0px 0px 0px #5b21b6,
    inset 0 2px 5px rgba(0, 0, 0, 0.2);
}
.btn-metallic-3d::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%);
  transform: rotate(30deg);
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
}
.btn-metallic-3d:hover::after {
  opacity: 1;
  animation: shimmer 0.8s forwards;
}
@keyframes shimmer {
  from { transform: translateX(-100%) rotate(30deg); }
  to { transform: translateX(100%) rotate(30deg); }
}`,
    htmlCode: `<button class="btn-metallic-3d">Metallic 3D</button>`,
    duration: "0.8s",
    intensity: "high",
    previewColor: "#8b5cf6",
    useCaseExample: "CTAs premium com efeito metálico 3D e brilho shimmer.",
  },
];
