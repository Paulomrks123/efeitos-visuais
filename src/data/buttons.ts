export type ButtonCategory = "scale" | "pulse";

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
}

export const buttonCategories = [
  { id: "all", name: "Todos" },
  { id: "scale", name: "Scale" },
  { id: "pulse", name: "Pulse" },
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
  background: #3EB489; color: white; 
}
.mint-pop:hover { 
  animation: mintPop 0.3s ease-out; 
}
@keyframes mintPop { 
  0% { transform: scale(1); } 
  50% { transform: scale(1.08); box-shadow: 0 0 20px rgba(62,180,137,0.5); } 
  100% { transform: scale(1.05); } 
}`,
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
  background: #FF6F61; color: white; 
}
.coral-bounce:hover { 
  animation: coralBounce 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55); 
}
@keyframes coralBounce { 
  0% { transform: scale(1) translateY(0); } 
  50% { transform: scale(1.1) translateY(-8px); } 
  100% { transform: scale(1.05) translateY(0); } 
}`,
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
  background: #1E3A5F; color: white; 
}
.navy-lift:hover { 
  animation: navyLift 0.35s ease-out forwards; 
}
@keyframes navyLift { 
  0% { transform: scale(1) translateY(0); box-shadow: 0 2px 5px rgba(30,58,95,0.3); } 
  100% { transform: scale(1.05) translateY(-5px); box-shadow: 0 15px 30px rgba(30,58,95,0.4); } 
}`,
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
  background: #9575CD; color: white; 
}
.lavender-squeeze:hover { 
  animation: lavenderSqueeze 0.3s ease-out; 
}
@keyframes lavenderSqueeze { 
  0% { transform: scaleX(1) scaleY(1); } 
  50% { transform: scaleX(1.1) scaleY(0.95); } 
  100% { transform: scaleX(1.02) scaleY(1); } 
}`,
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
  background: #FFAB91; color: #3E2723; 
}
.peach-jelly:hover { 
  animation: peachJelly 0.5s ease-in-out; 
}
@keyframes peachJelly { 
  0%, 100% { transform: scale(1) skewX(0); } 
  25% { transform: scale(1.05) skewX(-5deg); } 
  50% { transform: scale(1.05) skewX(5deg); } 
  75% { transform: scale(1.05) skewX(-3deg); } 
}`,
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
  background: #009688; color: white; transform-style: preserve-3d;
}
.teal-3d-flip:hover { 
  animation: teal3DFlip 0.6s ease-in-out; 
}
@keyframes teal3DFlip { 
  0% { transform: perspective(400px) rotateX(0) scale(1); } 
  50% { transform: perspective(400px) rotateX(15deg) scale(1.05); } 
  100% { transform: perspective(400px) rotateX(0) scale(1.02); } 
}`,
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
  background: #FFD700; color: #333; 
}
.gold-heartbeat:hover { 
  animation: goldHeartbeat 0.8s ease-in-out; 
}
@keyframes goldHeartbeat { 
  0%, 100% { transform: scale(1); } 
  15% { transform: scale(1.15); box-shadow: 0 0 25px rgba(255,215,0,0.6); } 
  30% { transform: scale(1); } 
  45% { transform: scale(1.1); } 
  60% { transform: scale(1); } 
}`,
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
  background: #8E4585; color: white; 
}
.berry-rubber:hover { 
  animation: berryRubber 0.6s ease; 
}
@keyframes berryRubber { 
  0% { transform: scale(1); } 
  30% { transform: scaleX(1.2) scaleY(0.8); } 
  40% { transform: scaleX(0.85) scaleY(1.15); } 
  50% { transform: scaleX(1.1) scaleY(0.9); } 
  65% { transform: scaleX(0.98) scaleY(1.02); } 
  100% { transform: scale(1.02); } 
}`,
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
  background: #607D8B; color: white; transform-origin: top center;
}
.slate-swing:hover { 
  animation: slateSwing 0.5s ease-in-out; 
}
@keyframes slateSwing { 
  0%, 100% { transform: rotate(0deg); } 
  20% { transform: rotate(10deg); } 
  40% { transform: rotate(-8deg); } 
  60% { transform: rotate(5deg); } 
  80% { transform: rotate(-3deg); } 
}`,
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
  background: #0077BE; color: white; 
}
.ocean-tada:hover { 
  animation: oceanTada 0.8s ease-in-out; 
}
@keyframes oceanTada { 
  0%, 100% { transform: scale(1) rotate(0); } 
  10%, 20% { transform: scale(0.95) rotate(-3deg); } 
  30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); } 
  40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); } 
}`,
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
  background: linear-gradient(135deg, #FF7043, #FFCA28); color: white; 
}
.sunset-wobble:hover { 
  animation: sunsetWobble 0.7s ease-in-out; 
}
@keyframes sunsetWobble { 
  0%, 100% { transform: translateX(0) rotate(0); } 
  15% { transform: translateX(-15px) rotate(-5deg); } 
  30% { transform: translateX(12px) rotate(3deg); } 
  45% { transform: translateX(-8px) rotate(-3deg); } 
  60% { transform: translateX(5px) rotate(2deg); } 
  75% { transform: translateX(-3px) rotate(-1deg); } 
}`,
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
  background: #2E7D32; color: white; 
}
.emerald-press:hover { 
  animation: emeraldPress 0.2s ease-out; 
}
@keyframes emeraldPress { 
  0% { transform: scale(1) translateY(0); } 
  50% { transform: scale(0.95) translateY(2px); box-shadow: 0 2px 5px rgba(46,125,50,0.5); } 
  100% { transform: scale(1) translateY(0); } 
}`,
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
  background: #E91E63; color: white; 
}
.rose-float:hover { 
  animation: roseFloat 0.4s ease-out forwards; 
}
@keyframes roseFloat { 
  0% { transform: translateY(0) scale(1); box-shadow: 0 4px 10px rgba(233,30,99,0.3); } 
  100% { transform: translateY(-10px) scale(1.03); box-shadow: 0 20px 40px rgba(233,30,99,0.4); } 
}`,
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
  background: #FF8F00; color: white; 
}
.amber-triple:hover { 
  animation: amberTriple 0.6s ease-in-out; 
}
@keyframes amberTriple { 
  0%, 100% { transform: scale(1); } 
  20% { transform: scale(1.08); box-shadow: 0 0 15px rgba(255,143,0,0.5); } 
  40% { transform: scale(1.02); } 
  60% { transform: scale(1.06); } 
  80% { transform: scale(1.02); } 
}`,
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
  background: #3F51B5; color: white; transform-style: preserve-3d;
}
.indigo-tilt:hover { 
  animation: indigoTilt 0.4s ease-out forwards; 
}
@keyframes indigoTilt { 
  0% { transform: perspective(500px) rotateY(0) rotateX(0); } 
  100% { transform: perspective(500px) rotateY(12deg) rotateX(5deg) scale(1.05); } 
}`,
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
  background: #00BCD4; color: white; border-radius: 8px;
}
.cyan-morph:hover { 
  animation: cyanMorph 0.5s ease-in-out forwards; 
}
@keyframes cyanMorph { 
  0% { transform: scale(1); border-radius: 8px; } 
  50% { transform: scale(1.05); border-radius: 25px; } 
  100% { transform: scale(1.02); border-radius: 15px; } 
}`,
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
  background: #DC143C; color: white; 
}
.crimson-shake:hover { 
  animation: crimsonShake 0.5s ease-in-out; 
}
@keyframes crimsonShake { 
  0%, 100% { transform: translateX(0); } 
  10%, 50%, 90% { transform: translateX(-8px); } 
  30%, 70% { transform: translateX(8px); } 
}`,
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
  background: #808000; color: white; 
}
.olive-vertical:hover { 
  animation: oliveVertical 0.4s ease-in-out; 
}
@keyframes oliveVertical { 
  0%, 100% { transform: translateY(0); } 
  20%, 60% { transform: translateY(-6px); } 
  40%, 80% { transform: translateY(6px); } 
}`,
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
  background: #9C27B0; color: white; 
}
.purple-zoom:hover { 
  animation: purpleZoom 0.6s ease-out; 
}
@keyframes purpleZoom { 
  0% { transform: scale(1) rotate(0deg); } 
  50% { transform: scale(1.15) rotate(180deg); box-shadow: 0 0 30px rgba(156,39,176,0.6); } 
  100% { transform: scale(1.05) rotate(360deg); } 
}`,
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
  background: #CDDC39; color: #333; 
}
.lime-expand:hover { 
  animation: limeExpand 0.45s ease-in-out; 
}
@keyframes limeExpand { 
  0%, 100% { transform: scale(1); } 
  25% { transform: scale(1.12); box-shadow: 0 0 20px rgba(205,220,57,0.5); } 
  50% { transform: scale(0.98); } 
  75% { transform: scale(1.06); } 
}`,
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
  background: #795548; color: white; 
}
.brown-slide:hover { 
  animation: brownSlide 0.3s ease-out forwards; 
}
@keyframes brownSlide { 
  0% { transform: translateX(0) scale(1); } 
  100% { transform: translateX(12px) scale(1.02); } 
}`,
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
  background: #FF4081; color: white; 
}
.pink-bounce-in:hover { 
  animation: pinkBounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); 
}
@keyframes pinkBounceIn { 
  0% { transform: scale(1); } 
  40% { transform: scale(1.2); } 
  60% { transform: scale(0.95); } 
  80% { transform: scale(1.08); } 
  100% { transform: scale(1.02); } 
}`,
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
  background: #9E9E9E; color: white; 
}
.gray-flash:hover { 
  animation: grayFlash 0.6s ease-in-out; 
}
@keyframes grayFlash { 
  0%, 50%, 100% { opacity: 1; transform: scale(1); } 
  25%, 75% { opacity: 0.5; transform: scale(1.08); background: #616161; } 
}`,
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
  background: #F44336; color: white; 
}
.red-spring:hover { 
  animation: redSpring 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); 
}
@keyframes redSpring { 
  0% { transform: scale(1) translateY(0); } 
  30% { transform: scale(0.95) translateY(5px); } 
  60% { transform: scale(1.1) translateY(-15px); box-shadow: 0 15px 30px rgba(244,67,54,0.4); } 
  100% { transform: scale(1.02) translateY(0); } 
}`,
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
  background: #2196F3; color: white; transform-style: preserve-3d;
}
.blue-flip-x:hover { 
  animation: blueFlipX 0.6s ease-in-out; 
}
@keyframes blueFlipX { 
  0% { transform: perspective(400px) rotateX(0); } 
  50% { transform: perspective(400px) rotateX(90deg) scale(1.05); } 
  100% { transform: perspective(400px) rotateX(0) scale(1.02); } 
}`,
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
  background: #4CAF50; color: white; transform-style: preserve-3d;
}
.green-flip-y:hover { 
  animation: greenFlipY 0.6s ease-in-out; 
}
@keyframes greenFlipY { 
  0% { transform: perspective(400px) rotateY(0); } 
  50% { transform: perspective(400px) rotateY(90deg) scale(1.05); } 
  100% { transform: perspective(400px) rotateY(0) scale(1.02); } 
}`,
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
  background: #FF9800; color: white; 
}
.orange-rotate:hover { 
  animation: orangeRotate 0.5s ease-out; 
}
@keyframes orangeRotate { 
  0% { transform: rotate(0deg) scale(1); } 
  50% { transform: rotate(180deg) scale(1.1); } 
  100% { transform: rotate(360deg) scale(1.02); } 
}`,
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
  background: #7C4DFF; color: white; 
}
.violet-shadow:hover { 
  animation: violetShadow 0.35s ease-out forwards; 
}
@keyframes violetShadow { 
  0% { transform: scale(1); box-shadow: 0 4px 10px rgba(124,77,255,0.3); } 
  100% { transform: scale(1.05); box-shadow: 0 15px 35px rgba(124,77,255,0.5); } 
}`,
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
  background: #E040FB; color: white; 
}
.magenta-glow:hover { 
  animation: magentaGlow 0.4s ease-out forwards; 
}
@keyframes magentaGlow { 
  0% { transform: scale(1); box-shadow: 0 0 0 rgba(224,64,251,0); } 
  100% { transform: scale(1.05); box-shadow: 0 0 30px rgba(224,64,251,0.7), 0 0 60px rgba(224,64,251,0.4); } 
}`,
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
  background: linear-gradient(135deg, #FF6B6B, #4ECDC4); color: white; background-size: 200% 200%;
}
.gradient-shift:hover { 
  animation: gradientShift 0.5s ease-out forwards; 
}
@keyframes gradientShift { 
  0% { background-position: 0% 0%; transform: scale(1); } 
  100% { background-position: 100% 100%; transform: scale(1.05); } 
}`,
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
  background: #00FFFF; color: #111; 
  animation: neonCyanPulse 1.5s ease-in-out infinite; 
}
@keyframes neonCyanPulse { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 10px #00FFFF; } 
  50% { transform: scale(1.05); box-shadow: 0 0 30px #00FFFF, 0 0 60px #00FFFF; } 
}`,
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
  background: #FF00FF; color: white; 
  animation: neonMagentaPulse 1.2s ease-in-out infinite; 
}
@keyframes neonMagentaPulse { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 10px #FF00FF; } 
  50% { transform: scale(1.08); box-shadow: 0 0 40px #FF00FF, 0 0 80px rgba(255,0,255,0.5); } 
}`,
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
  background: #00FF00; color: #111; position: relative;
  animation: greenRingPulse 2s ease-out infinite; 
}
@keyframes greenRingPulse { 
  0% { box-shadow: 0 0 0 0 rgba(0,255,0,0.7); } 
  70% { box-shadow: 0 0 0 20px rgba(0,255,0,0); } 
  100% { box-shadow: 0 0 0 0 rgba(0,255,0,0); } 
}`,
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
  background: #FF0000; color: white; 
  animation: redAlertPulse 0.8s ease-in-out infinite; 
}
@keyframes redAlertPulse { 
  0%, 100% { transform: scale(1); opacity: 1; background: #FF0000; } 
  50% { transform: scale(1.1); opacity: 0.8; background: #CC0000; box-shadow: 0 0 30px #FF0000; } 
}`,
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
  background: linear-gradient(135deg, #FFD700, #FFA500); color: #333; 
  animation: goldGlowPulse 2s ease-in-out infinite; 
}
@keyframes goldGlowPulse { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(255,215,0,0.5); } 
  50% { transform: scale(1.03); box-shadow: 0 0 30px rgba(255,215,0,0.8), 0 0 50px rgba(255,165,0,0.4); } 
}`,
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
  background: #25D366; color: white; 
  animation: whatsappGreen 1.5s ease-in-out infinite; 
}
@keyframes whatsappGreen { 
  0%, 100% { transform: scale(1); box-shadow: 0 5px 15px rgba(37,211,102,0.4); } 
  50% { transform: scale(1.05); box-shadow: 0 10px 30px rgba(37,211,102,0.6); } 
}`,
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
  background: #9C27B0; color: white; 
  animation: purpleSonar 1.8s ease-out infinite; 
}
@keyframes purpleSonar { 
  0% { box-shadow: 0 0 0 0 rgba(156,39,176,0.7); transform: scale(1); } 
  50% { transform: scale(1.02); } 
  70% { box-shadow: 0 0 0 25px rgba(156,39,176,0); } 
  100% { box-shadow: 0 0 0 0 rgba(156,39,176,0); transform: scale(1); } 
}`,
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
  background: #2196F3; color: white; 
  animation: blueHeartbeat 1.2s ease-in-out infinite; 
}
@keyframes blueHeartbeat { 
  0%, 100% { transform: scale(1); } 
  14% { transform: scale(1.15); } 
  28% { transform: scale(1); } 
  42% { transform: scale(1.1); } 
  70% { transform: scale(1); } 
}`,
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
  background: #FF9800; color: white; 
  animation: orangeBreathe 3s ease-in-out infinite; 
}
@keyframes orangeBreathe { 
  0%, 100% { transform: scale(1); opacity: 0.9; } 
  50% { transform: scale(1.02); opacity: 1; box-shadow: 0 0 20px rgba(255,152,0,0.4); } 
}`,
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
  background: #009688; color: white; 
  animation: tealWave 2s ease-in-out infinite; 
}
@keyframes tealWave { 
  0%, 100% { transform: scale(1) translateY(0); } 
  25% { transform: scale(1.02) translateY(-3px); } 
  50% { transform: scale(1.05) translateY(0); box-shadow: 0 10px 25px rgba(0,150,136,0.4); } 
  75% { transform: scale(1.02) translateY(3px); } 
}`,
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
  background: #E91E63; color: white; 
  animation: pinkDouble 1s ease-in-out infinite; 
}
@keyframes pinkDouble { 
  0%, 100% { transform: scale(1); } 
  20% { transform: scale(1.1); } 
  40% { transform: scale(1); } 
  60% { transform: scale(1.08); } 
  80% { transform: scale(1); } 
}`,
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
  background: #3F51B5; color: white; 
  animation: indigoGlow 2.5s ease-in-out infinite; 
}
@keyframes indigoGlow { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(63,81,181,0.3); } 
  50% { transform: scale(1.03); box-shadow: 0 0 40px rgba(63,81,181,0.6), 0 0 80px rgba(63,81,181,0.3); } 
}`,
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
  background: #CDDC39; color: #333; 
  animation: limeBounce 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite; 
}
@keyframes limeBounce { 
  0%, 100% { transform: scale(1) translateY(0); } 
  50% { transform: scale(1.08) translateY(-8px); box-shadow: 0 15px 25px rgba(205,220,57,0.4); } 
}`,
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
  background: #795548; color: white; 
  animation: brownWarm 3s ease-in-out infinite; 
}
@keyframes brownWarm { 
  0%, 100% { transform: scale(1); background: #795548; } 
  50% { transform: scale(1.02); background: #8D6E63; box-shadow: 0 0 25px rgba(121,85,72,0.4); } 
}`,
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
  background: #00BCD4; color: white; 
  animation: cyanElectric 0.8s ease-in-out infinite; 
}
@keyframes cyanElectric { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 5px #00BCD4; } 
  25% { transform: scale(1.05); box-shadow: 0 0 15px #00BCD4, 0 0 30px rgba(0,188,212,0.5); } 
  50% { transform: scale(1.1); box-shadow: 0 0 25px #00BCD4, 0 0 50px rgba(0,188,212,0.7); } 
  75% { transform: scale(1.05); } 
}`,
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
  background: linear-gradient(135deg, #673AB7, #9C27B0); color: white; 
  animation: deepPurpleNebula 2.5s ease-in-out infinite; 
}
@keyframes deepPurpleNebula { 
  0%, 100% { transform: scale(1); filter: brightness(1); } 
  50% { transform: scale(1.05); filter: brightness(1.2); box-shadow: 0 0 40px rgba(103,58,183,0.6); } 
}`,
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
  background: linear-gradient(180deg, #FFC107, #FF9800); color: #333; 
  animation: amberFire 1s ease-in-out infinite; 
}
@keyframes amberFire { 
  0%, 100% { transform: scale(1) translateY(0); box-shadow: 0 0 10px rgba(255,193,7,0.5); } 
  25% { transform: scale(1.03) translateY(-2px); } 
  50% { transform: scale(1.08) translateY(-4px); box-shadow: 0 10px 30px rgba(255,152,0,0.6); } 
  75% { transform: scale(1.03) translateY(-2px); } 
}`,
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
  background: #FF7043; color: white; 
  animation: coralSoft 2.5s ease-in-out infinite; 
}
@keyframes coralSoft { 
  0%, 100% { transform: scale(1); opacity: 0.95; } 
  50% { transform: scale(1.03); opacity: 1; box-shadow: 0 0 20px rgba(255,112,67,0.4); } 
}`,
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
  background: linear-gradient(135deg, #9E9E9E, #E0E0E0, #9E9E9E); color: #333; 
  animation: silverMetallic 2s ease-in-out infinite; 
}
@keyframes silverMetallic { 
  0%, 100% { transform: scale(1); background-position: 0% 50%; } 
  50% { transform: scale(1.02); background-position: 100% 50%; box-shadow: 0 5px 20px rgba(158,158,158,0.5); } 
}`,
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
  background: #2E7D32; color: white; 
  animation: emeraldShine 1.8s ease-in-out infinite; 
}
@keyframes emeraldShine { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(46,125,50,0.3); } 
  50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(46,125,50,0.6), 0 0 60px rgba(76,175,80,0.3); } 
}`,
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
  background: #D32F2F; color: white; 
  animation: rubyGlow 1.5s ease-in-out infinite; 
}
@keyframes rubyGlow { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(211,47,47,0.4); } 
  50% { transform: scale(1.06); box-shadow: 0 0 40px rgba(211,47,47,0.7), 0 0 80px rgba(244,67,54,0.4); } 
}`,
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
  background: linear-gradient(135deg, #1565C0, #1976D2); color: white; 
  animation: sapphireDeep 2s ease-in-out infinite; 
}
@keyframes sapphireDeep { 
  0%, 100% { transform: scale(1); box-shadow: 0 5px 15px rgba(21,101,192,0.3); } 
  50% { transform: scale(1.04); box-shadow: 0 10px 35px rgba(21,101,192,0.5), 0 0 50px rgba(25,118,210,0.3); } 
}`,
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
  background: linear-gradient(135deg, #FF6B6B, #FFE66D); color: white; background-size: 200% 200%;
  animation: sunsetGradientPulse 2.5s ease-in-out infinite; 
}
@keyframes sunsetGradientPulse { 
  0%, 100% { background-position: 0% 50%; transform: scale(1); } 
  50% { background-position: 100% 50%; transform: scale(1.03); box-shadow: 0 10px 30px rgba(255,107,107,0.4); } 
}`,
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
  background: linear-gradient(135deg, #00E676, #00BCD4, #7C4DFF); color: white; background-size: 300% 300%;
  animation: auroraPulse 3s ease-in-out infinite; 
}
@keyframes auroraPulse { 
  0%, 100% { background-position: 0% 50%; transform: scale(1); } 
  50% { background-position: 100% 50%; transform: scale(1.05); box-shadow: 0 0 40px rgba(0,230,118,0.4); } 
}`,
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
  background: linear-gradient(90deg, #FF0080, #FF8C00, #FFD700, #00FF00, #00BFFF, #8A2BE2); 
  background-size: 300% 100%; color: white;
  animation: neonRainbow 2s linear infinite; 
}
@keyframes neonRainbow { 
  0% { background-position: 0% 50%; transform: scale(1); } 
  50% { transform: scale(1.03); box-shadow: 0 0 30px rgba(255,0,128,0.5); } 
  100% { background-position: 100% 50%; transform: scale(1); } 
}`,
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
  background: #111; color: #00FF00; border: 2px solid #00FF00;
  animation: matrixGreen 1.2s ease-in-out infinite; 
}
@keyframes matrixGreen { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 10px #00FF00, inset 0 0 10px rgba(0,255,0,0.1); } 
  50% { transform: scale(1.08); box-shadow: 0 0 30px #00FF00, 0 0 60px rgba(0,255,0,0.5), inset 0 0 20px rgba(0,255,0,0.2); } 
}`,
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
  background: linear-gradient(180deg, #FF5722, #E64A19); color: white;
  animation: lavaOrange 1.5s ease-in-out infinite; 
}
@keyframes lavaOrange { 
  0%, 100% { transform: scale(1); box-shadow: 0 5px 15px rgba(255,87,34,0.4); } 
  50% { transform: scale(1.06); box-shadow: 0 10px 30px rgba(255,87,34,0.6), 0 0 50px rgba(230,74,25,0.3); } 
}`,
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
  background: linear-gradient(135deg, #81D4FA, #4FC3F7); color: #01579B;
  animation: iceBlue 2.5s ease-in-out infinite; 
}
@keyframes iceBlue { 
  0%, 100% { transform: scale(1); box-shadow: 0 5px 15px rgba(129,212,250,0.3); } 
  50% { transform: scale(1.03); box-shadow: 0 10px 30px rgba(79,195,247,0.5), 0 0 40px rgba(129,212,250,0.3); } 
}`,
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
  background: #AA00FF; color: white;
  animation: toxicPurple 1s ease-in-out infinite; 
}
@keyframes toxicPurple { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 10px #AA00FF; } 
  50% { transform: scale(1.1); box-shadow: 0 0 40px #AA00FF, 0 0 80px rgba(170,0,255,0.5); } 
}`,
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
  background: linear-gradient(135deg, #FF1744, #F50057); color: white; font-weight: bold;
  animation: ctaUltimate 2s ease-in-out infinite; 
}
@keyframes ctaUltimate { 
  0%, 100% { transform: scale(1); box-shadow: 0 5px 20px rgba(255,23,68,0.4); } 
  25% { transform: scale(1.02) translateY(-2px); } 
  50% { transform: scale(1.08) translateY(-5px); box-shadow: 0 15px 40px rgba(255,23,68,0.6), 0 0 60px rgba(245,0,87,0.4); } 
  75% { transform: scale(1.02) translateY(-2px); } 
}`,
    htmlCode: `<button class="cta-ultimate">🔥 COMPRE AGORA</button>`
  },
];
