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
}

export const buttonAnimations: ButtonAnimation[] = [
  // ========== SCALE ANIMATIONS (30) - Cada uma única ==========
  {
    id: "scale-1",
    name: "Bounce Up",
    category: "scale",
    description: "Escala com bounce para cima",
    duration: "0.4s",
    intensity: "1.1x",
    cssCode: `.bounce-up:hover { 
  animation: bounceUp 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55); 
}
@keyframes bounceUp { 
  0% { transform: scale(1) translateY(0); } 
  50% { transform: scale(1.1) translateY(-5px); } 
  100% { transform: scale(1) translateY(0); } 
}`,
    htmlCode: `<button className="bounce-up">Hover Me</button>`
  },
  {
    id: "scale-2",
    name: "Rotate Grow",
    category: "scale",
    description: "Rotação com crescimento",
    duration: "0.5s",
    intensity: "1.08x + 5deg",
    cssCode: `.rotate-grow:hover { 
  animation: rotateGrow 0.5s ease-out; 
}
@keyframes rotateGrow { 
  0% { transform: scale(1) rotate(0deg); } 
  50% { transform: scale(1.08) rotate(5deg); } 
  100% { transform: scale(1) rotate(0deg); } 
}`,
    htmlCode: `<button className="rotate-grow">Hover Me</button>`
  },
  {
    id: "scale-3",
    name: "Skew Pop",
    category: "scale",
    description: "Distorção com pop",
    duration: "0.35s",
    intensity: "1.05x + skew",
    cssCode: `.skew-pop:hover { 
  animation: skewPop 0.35s ease-in-out; 
}
@keyframes skewPop { 
  0% { transform: scale(1) skewX(0); } 
  25% { transform: scale(1.05) skewX(-3deg); } 
  75% { transform: scale(1.05) skewX(3deg); } 
  100% { transform: scale(1) skewX(0); } 
}`,
    htmlCode: `<button className="skew-pop">Hover Me</button>`
  },
  {
    id: "scale-4",
    name: "3D Flip Lite",
    category: "scale",
    description: "Flip 3D sutil",
    duration: "0.6s",
    intensity: "rotateX 15deg",
    cssCode: `.flip-lite:hover { 
  animation: flipLite 0.6s ease-in-out; 
  transform-style: preserve-3d;
}
@keyframes flipLite { 
  0% { transform: perspective(400px) rotateX(0); } 
  50% { transform: perspective(400px) rotateX(15deg) scale(1.05); } 
  100% { transform: perspective(400px) rotateX(0); } 
}`,
    htmlCode: `<button className="flip-lite">Hover Me</button>`
  },
  {
    id: "scale-5",
    name: "Squeeze X",
    category: "scale",
    description: "Compressão horizontal",
    duration: "0.3s",
    intensity: "scaleX 0.95",
    cssCode: `.squeeze-x:hover { 
  animation: squeezeX 0.3s ease-out; 
}
@keyframes squeezeX { 
  0% { transform: scaleX(1) scaleY(1); } 
  50% { transform: scaleX(0.95) scaleY(1.05); } 
  100% { transform: scaleX(1) scaleY(1); } 
}`,
    htmlCode: `<button className="squeeze-x">Hover Me</button>`
  },
  {
    id: "scale-6",
    name: "Jello Shake",
    category: "scale",
    description: "Efeito gelatina tremendo",
    duration: "0.7s",
    intensity: "skew ±10deg",
    cssCode: `.jello-shake:hover { 
  animation: jelloShake 0.7s ease-in-out; 
}
@keyframes jelloShake { 
  0%, 100% { transform: scale(1) skewX(0); } 
  20% { transform: scale(1.05) skewX(-8deg); } 
  40% { transform: scale(1.05) skewX(6deg); } 
  60% { transform: scale(1.05) skewX(-4deg); } 
  80% { transform: scale(1.05) skewX(2deg); } 
}`,
    htmlCode: `<button className="jello-shake">Hover Me</button>`
  },
  {
    id: "scale-7",
    name: "Heartbeat Scale",
    category: "scale",
    description: "Batimento cardíaco",
    duration: "0.8s",
    intensity: "1.15x duplo",
    cssCode: `.heartbeat-scale:hover { 
  animation: heartbeatScale 0.8s ease-in-out; 
}
@keyframes heartbeatScale { 
  0%, 100% { transform: scale(1); } 
  15% { transform: scale(1.15); } 
  30% { transform: scale(1); } 
  45% { transform: scale(1.1); } 
  60% { transform: scale(1); } 
}`,
    htmlCode: `<button className="heartbeat-scale">Hover Me</button>`
  },
  {
    id: "scale-8",
    name: "Rubber Band",
    category: "scale",
    description: "Efeito elástico extremo",
    duration: "0.6s",
    intensity: "1.25x elastic",
    cssCode: `.rubber-band:hover { 
  animation: rubberBand 0.6s ease; 
}
@keyframes rubberBand { 
  0% { transform: scale(1); } 
  30% { transform: scaleX(1.25) scaleY(0.75); } 
  40% { transform: scaleX(0.75) scaleY(1.25); } 
  50% { transform: scaleX(1.15) scaleY(0.85); } 
  65% { transform: scaleX(0.95) scaleY(1.05); } 
  100% { transform: scale(1); } 
}`,
    htmlCode: `<button className="rubber-band">Hover Me</button>`
  },
  {
    id: "scale-9",
    name: "Swing Scale",
    category: "scale",
    description: "Balanço com escala",
    duration: "0.5s",
    intensity: "rotate ±15deg",
    cssCode: `.swing-scale:hover { 
  animation: swingScale 0.5s ease-in-out; 
  transform-origin: top center;
}
@keyframes swingScale { 
  0% { transform: scale(1) rotate(0); } 
  20% { transform: scale(1.05) rotate(15deg); } 
  40% { transform: scale(1.05) rotate(-10deg); } 
  60% { transform: scale(1.05) rotate(5deg); } 
  100% { transform: scale(1) rotate(0); } 
}`,
    htmlCode: `<button className="swing-scale">Hover Me</button>`
  },
  {
    id: "scale-10",
    name: "Tada",
    category: "scale",
    description: "Celebração animada",
    duration: "0.8s",
    intensity: "1.1x + rotate",
    cssCode: `.tada-scale:hover { 
  animation: tadaScale 0.8s ease-in-out; 
}
@keyframes tadaScale { 
  0%, 100% { transform: scale(1) rotate(0); } 
  10%, 20% { transform: scale(0.9) rotate(-3deg); } 
  30%, 50%, 70%, 90% { transform: scale(1.1) rotate(3deg); } 
  40%, 60%, 80% { transform: scale(1.1) rotate(-3deg); } 
}`,
    htmlCode: `<button className="tada-scale">Hover Me</button>`
  },
  {
    id: "scale-11",
    name: "Wobble",
    category: "scale",
    description: "Oscilação lateral",
    duration: "0.7s",
    intensity: "translateX ±25%",
    cssCode: `.wobble-scale:hover { 
  animation: wobbleScale 0.7s ease-in-out; 
}
@keyframes wobbleScale { 
  0%, 100% { transform: scale(1) translateX(0); } 
  15% { transform: scale(1.02) translateX(-20%) rotate(-5deg); } 
  30% { transform: scale(1.02) translateX(15%) rotate(3deg); } 
  45% { transform: scale(1.02) translateX(-10%) rotate(-3deg); } 
  60% { transform: scale(1.02) translateX(5%) rotate(2deg); } 
  75% { transform: scale(1.01) translateX(-2%) rotate(-1deg); } 
}`,
    htmlCode: `<button className="wobble-scale">Hover Me</button>`
  },
  {
    id: "scale-12",
    name: "Push Down",
    category: "scale",
    description: "Empurrão para baixo",
    duration: "0.25s",
    intensity: "0.95x press",
    cssCode: `.push-down:hover { 
  animation: pushDown 0.25s ease-out; 
}
@keyframes pushDown { 
  0% { transform: scale(1) translateY(0); } 
  50% { transform: scale(0.95) translateY(3px); } 
  100% { transform: scale(1) translateY(0); } 
}`,
    htmlCode: `<button className="push-down">Hover Me</button>`
  },
  {
    id: "scale-13",
    name: "Float Up",
    category: "scale",
    description: "Flutuação suave",
    duration: "0.4s",
    intensity: "translateY -8px",
    cssCode: `.float-up:hover { 
  animation: floatUp 0.4s ease-out forwards; 
}
@keyframes floatUp { 
  0% { transform: scale(1) translateY(0); box-shadow: 0 2px 5px rgba(0,0,0,0.2); } 
  100% { transform: scale(1.03) translateY(-8px); box-shadow: 0 15px 25px rgba(0,0,0,0.15); } 
}`,
    htmlCode: `<button className="float-up">Hover Me</button>`
  },
  {
    id: "scale-14",
    name: "Pulse Scale",
    category: "scale",
    description: "Pulsação tripla",
    duration: "0.6s",
    intensity: "1.08x triple",
    cssCode: `.pulse-scale:hover { 
  animation: pulseScale 0.6s ease-in-out; 
}
@keyframes pulseScale { 
  0%, 100% { transform: scale(1); } 
  25% { transform: scale(1.08); } 
  50% { transform: scale(1.02); } 
  75% { transform: scale(1.06); } 
}`,
    htmlCode: `<button className="pulse-scale">Hover Me</button>`
  },
  {
    id: "scale-15",
    name: "Tilt 3D",
    category: "scale",
    description: "Inclinação 3D realista",
    duration: "0.4s",
    intensity: "rotateY 10deg",
    cssCode: `.tilt-3d:hover { 
  animation: tilt3D 0.4s ease-out forwards; 
  transform-style: preserve-3d;
}
@keyframes tilt3D { 
  0% { transform: perspective(500px) rotateY(0) rotateX(0); } 
  100% { transform: perspective(500px) rotateY(10deg) rotateX(5deg) scale(1.05); } 
}`,
    htmlCode: `<button className="tilt-3d">Hover Me</button>`
  },
  {
    id: "scale-16",
    name: "Morphing",
    category: "scale",
    description: "Mudança de forma",
    duration: "0.5s",
    intensity: "border-radius",
    cssCode: `.morphing:hover { 
  animation: morphing 0.5s ease-in-out; 
}
@keyframes morphing { 
  0%, 100% { transform: scale(1); border-radius: 8px; } 
  50% { transform: scale(1.05); border-radius: 20px; } 
}`,
    htmlCode: `<button className="morphing">Hover Me</button>`
  },
  {
    id: "scale-17",
    name: "Shake Horizontal",
    category: "scale",
    description: "Tremor horizontal",
    duration: "0.5s",
    intensity: "±10px shake",
    cssCode: `.shake-h:hover { 
  animation: shakeH 0.5s ease-in-out; 
}
@keyframes shakeH { 
  0%, 100% { transform: translateX(0); } 
  10%, 50%, 90% { transform: translateX(-10px); } 
  30%, 70% { transform: translateX(10px); } 
}`,
    htmlCode: `<button className="shake-h">Hover Me</button>`
  },
  {
    id: "scale-18",
    name: "Shake Vertical",
    category: "scale",
    description: "Tremor vertical",
    duration: "0.4s",
    intensity: "±8px shake",
    cssCode: `.shake-v:hover { 
  animation: shakeV 0.4s ease-in-out; 
}
@keyframes shakeV { 
  0%, 100% { transform: translateY(0); } 
  20%, 60% { transform: translateY(-8px); } 
  40%, 80% { transform: translateY(8px); } 
}`,
    htmlCode: `<button className="shake-v">Hover Me</button>`
  },
  {
    id: "scale-19",
    name: "Zoom Rotate",
    category: "scale",
    description: "Zoom com rotação completa",
    duration: "0.6s",
    intensity: "1.15x + 360deg",
    cssCode: `.zoom-rotate:hover { 
  animation: zoomRotate 0.6s ease-out; 
}
@keyframes zoomRotate { 
  0% { transform: scale(1) rotate(0deg); } 
  50% { transform: scale(1.15) rotate(180deg); } 
  100% { transform: scale(1) rotate(360deg); } 
}`,
    htmlCode: `<button className="zoom-rotate">Hover Me</button>`
  },
  {
    id: "scale-20",
    name: "Expand Contract",
    category: "scale",
    description: "Expansão e contração",
    duration: "0.45s",
    intensity: "1.12x wave",
    cssCode: `.expand-contract:hover { 
  animation: expandContract 0.45s ease-in-out; 
}
@keyframes expandContract { 
  0%, 100% { transform: scale(1); } 
  25% { transform: scale(1.12); } 
  50% { transform: scale(0.98); } 
  75% { transform: scale(1.06); } 
}`,
    htmlCode: `<button className="expand-contract">Hover Me</button>`
  },
  {
    id: "scale-21",
    name: "Slide Right",
    category: "scale",
    description: "Deslize para direita",
    duration: "0.3s",
    intensity: "translateX 10px",
    cssCode: `.slide-right:hover { 
  animation: slideRight 0.3s ease-out forwards; 
}
@keyframes slideRight { 
  0% { transform: translateX(0) scale(1); } 
  100% { transform: translateX(10px) scale(1.02); } 
}`,
    htmlCode: `<button className="slide-right">Hover Me</button>`
  },
  {
    id: "scale-22",
    name: "Bounce In",
    category: "scale",
    description: "Entrada com bounce",
    duration: "0.5s",
    intensity: "elastic bounce",
    cssCode: `.bounce-in:hover { 
  animation: bounceIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55); 
}
@keyframes bounceIn { 
  0% { transform: scale(1); } 
  40% { transform: scale(1.2); } 
  60% { transform: scale(0.95); } 
  80% { transform: scale(1.08); } 
  100% { transform: scale(1); } 
}`,
    htmlCode: `<button className="bounce-in">Hover Me</button>`
  },
  {
    id: "scale-23",
    name: "Flash Scale",
    category: "scale",
    description: "Flash com escala",
    duration: "0.6s",
    intensity: "opacity flash",
    cssCode: `.flash-scale:hover { 
  animation: flashScale 0.6s ease-in-out; 
}
@keyframes flashScale { 
  0%, 50%, 100% { opacity: 1; transform: scale(1); } 
  25%, 75% { opacity: 0.5; transform: scale(1.08); } 
}`,
    htmlCode: `<button className="flash-scale">Hover Me</button>`
  },
  {
    id: "scale-24",
    name: "Spring Jump",
    category: "scale",
    description: "Pulo de mola",
    duration: "0.5s",
    intensity: "spring effect",
    cssCode: `.spring-jump:hover { 
  animation: springJump 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); 
}
@keyframes springJump { 
  0% { transform: scale(1) translateY(0); } 
  30% { transform: scale(0.95) translateY(5px); } 
  60% { transform: scale(1.1) translateY(-15px); } 
  100% { transform: scale(1) translateY(0); } 
}`,
    htmlCode: `<button className="spring-jump">Hover Me</button>`
  },
  {
    id: "scale-25",
    name: "Flip X",
    category: "scale",
    description: "Flip horizontal",
    duration: "0.6s",
    intensity: "rotateX 180deg",
    cssCode: `.flip-x:hover { 
  animation: flipX 0.6s ease-in-out; 
  transform-style: preserve-3d;
}
@keyframes flipX { 
  0% { transform: perspective(400px) rotateX(0); } 
  50% { transform: perspective(400px) rotateX(90deg) scale(1.05); } 
  100% { transform: perspective(400px) rotateX(0); } 
}`,
    htmlCode: `<button className="flip-x">Hover Me</button>`
  },
  {
    id: "scale-26",
    name: "Flip Y",
    category: "scale",
    description: "Flip vertical",
    duration: "0.6s",
    intensity: "rotateY 180deg",
    cssCode: `.flip-y:hover { 
  animation: flipY 0.6s ease-in-out; 
  transform-style: preserve-3d;
}
@keyframes flipY { 
  0% { transform: perspective(400px) rotateY(0); } 
  50% { transform: perspective(400px) rotateY(90deg) scale(1.05); } 
  100% { transform: perspective(400px) rotateY(0); } 
}`,
    htmlCode: `<button className="flip-y">Hover Me</button>`
  },
  {
    id: "scale-27",
    name: "Rotate In",
    category: "scale",
    description: "Rotação de entrada",
    duration: "0.5s",
    intensity: "rotate 360deg",
    cssCode: `.rotate-in:hover { 
  animation: rotateIn 0.5s ease-out; 
}
@keyframes rotateIn { 
  0% { transform: rotate(0deg) scale(1); opacity: 1; } 
  50% { transform: rotate(180deg) scale(1.1); } 
  100% { transform: rotate(360deg) scale(1); opacity: 1; } 
}`,
    htmlCode: `<button className="rotate-in">Hover Me</button>`
  },
  {
    id: "scale-28",
    name: "Grow Shadow",
    category: "scale",
    description: "Crescimento com sombra",
    duration: "0.35s",
    intensity: "1.05x + shadow",
    cssCode: `.grow-shadow:hover { 
  animation: growShadow 0.35s ease-out forwards; 
}
@keyframes growShadow { 
  0% { transform: scale(1); box-shadow: 0 2px 4px rgba(0,0,0,0.1); } 
  100% { transform: scale(1.05); box-shadow: 0 10px 20px rgba(0,0,0,0.2); } 
}`,
    htmlCode: `<button className="grow-shadow">Hover Me</button>`
  },
  {
    id: "scale-29",
    name: "Wiggle",
    category: "scale",
    description: "Movimento de wiggle",
    duration: "0.4s",
    intensity: "rotate ±3deg fast",
    cssCode: `.wiggle:hover { 
  animation: wiggle 0.4s ease-in-out; 
}
@keyframes wiggle { 
  0%, 100% { transform: rotate(0deg); } 
  20% { transform: rotate(3deg); } 
  40% { transform: rotate(-3deg); } 
  60% { transform: rotate(3deg); } 
  80% { transform: rotate(-3deg); } 
}`,
    htmlCode: `<button className="wiggle">Hover Me</button>`
  },
  {
    id: "scale-30",
    name: "Power Surge",
    category: "scale",
    description: "Surto de energia extremo",
    duration: "0.8s",
    intensity: "1.3x extreme",
    cssCode: `.power-surge:hover { 
  animation: powerSurge 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55); 
}
@keyframes powerSurge { 
  0% { transform: scale(1); filter: brightness(1); } 
  25% { transform: scale(1.3); filter: brightness(1.5); } 
  50% { transform: scale(0.9); filter: brightness(0.8); } 
  75% { transform: scale(1.15); filter: brightness(1.3); } 
  100% { transform: scale(1); filter: brightness(1); } 
}`,
    htmlCode: `<button className="power-surge">Hover Me</button>`
  },

  // ========== PULSE ANIMATIONS (30) - Cada uma única ==========
  {
    id: "pulse-1",
    name: "Neon Glow",
    category: "pulse",
    description: "Brilho neon pulsante cyan",
    duration: "1.5s",
    intensity: "glow 20px",
    cssCode: `.neon-glow { 
  animation: neonGlow 1.5s infinite ease-in-out; 
}
@keyframes neonGlow { 
  0%, 100% { box-shadow: 0 0 5px hsl(180, 100%, 50%), 0 0 10px hsl(180, 100%, 50%); } 
  50% { box-shadow: 0 0 20px hsl(180, 100%, 50%), 0 0 40px hsl(180, 100%, 50%), 0 0 60px hsl(180, 100%, 50%); } 
}`,
    htmlCode: `<button className="neon-glow">Clique</button>`
  },
  {
    id: "pulse-2",
    name: "Ring Expand",
    category: "pulse",
    description: "Anel que se expande",
    duration: "1.2s",
    intensity: "ring 15px",
    cssCode: `.ring-expand { 
  animation: ringExpand 1.2s infinite; 
  position: relative;
}
@keyframes ringExpand { 
  0% { box-shadow: 0 0 0 0 rgba(255, 0, 255, 0.7); } 
  70% { box-shadow: 0 0 0 15px rgba(255, 0, 255, 0); } 
  100% { box-shadow: 0 0 0 0 rgba(255, 0, 255, 0); } 
}`,
    htmlCode: `<button className="ring-expand">Clique</button>`
  },
  {
    id: "pulse-3",
    name: "Double Ring",
    category: "pulse",
    description: "Dois anéis pulsantes",
    duration: "1.8s",
    intensity: "dual rings",
    cssCode: `.double-ring { 
  animation: doubleRing 1.8s infinite; 
}
@keyframes doubleRing { 
  0% { box-shadow: 0 0 0 0 rgba(0, 255, 128, 0.6), 0 0 0 0 rgba(0, 128, 255, 0.4); } 
  50% { box-shadow: 0 0 0 10px rgba(0, 255, 128, 0), 0 0 0 20px rgba(0, 128, 255, 0.3); } 
  100% { box-shadow: 0 0 0 0 rgba(0, 255, 128, 0), 0 0 0 0 rgba(0, 128, 255, 0); } 
}`,
    htmlCode: `<button className="double-ring">Clique</button>`
  },
  {
    id: "pulse-4",
    name: "Heartbeat",
    category: "pulse",
    description: "Batimento cardíaco realista",
    duration: "1.3s",
    intensity: "1.15x heart",
    cssCode: `.heartbeat { 
  animation: heartbeat 1.3s infinite; 
}
@keyframes heartbeat { 
  0%, 100% { transform: scale(1); } 
  14% { transform: scale(1.15); } 
  28% { transform: scale(1); } 
  42% { transform: scale(1.1); } 
  70% { transform: scale(1); } 
}`,
    htmlCode: `<button className="heartbeat">Clique</button>`
  },
  {
    id: "pulse-5",
    name: "Border Glow",
    category: "pulse",
    description: "Borda brilhante animada",
    duration: "2s",
    intensity: "border glow",
    cssCode: `.border-glow { 
  animation: borderGlow 2s infinite; 
}
@keyframes borderGlow { 
  0%, 100% { border-color: hsl(320, 100%, 60%); box-shadow: 0 0 5px hsl(320, 100%, 60%); } 
  50% { border-color: hsl(180, 100%, 50%); box-shadow: 0 0 20px hsl(180, 100%, 50%); } 
}`,
    htmlCode: `<button className="border-glow border-2">Clique</button>`
  },
  {
    id: "pulse-6",
    name: "Rainbow Ring",
    category: "pulse",
    description: "Anel com cores do arco-íris",
    duration: "3s",
    intensity: "rainbow cycle",
    cssCode: `.rainbow-ring { 
  animation: rainbowRing 3s infinite linear; 
}
@keyframes rainbowRing { 
  0% { box-shadow: 0 0 0 4px hsl(0, 100%, 50%); } 
  16% { box-shadow: 0 0 0 4px hsl(60, 100%, 50%); } 
  33% { box-shadow: 0 0 0 4px hsl(120, 100%, 50%); } 
  50% { box-shadow: 0 0 0 4px hsl(180, 100%, 50%); } 
  66% { box-shadow: 0 0 0 4px hsl(240, 100%, 50%); } 
  83% { box-shadow: 0 0 0 4px hsl(300, 100%, 50%); } 
  100% { box-shadow: 0 0 0 4px hsl(360, 100%, 50%); } 
}`,
    htmlCode: `<button className="rainbow-ring">Clique</button>`
  },
  {
    id: "pulse-7",
    name: "Breathing",
    category: "pulse",
    description: "Respiração suave",
    duration: "4s",
    intensity: "1.05x slow",
    cssCode: `.breathing { 
  animation: breathing 4s infinite ease-in-out; 
}
@keyframes breathing { 
  0%, 100% { transform: scale(1); opacity: 0.9; } 
  50% { transform: scale(1.05); opacity: 1; } 
}`,
    htmlCode: `<button className="breathing">Clique</button>`
  },
  {
    id: "pulse-8",
    name: "Sonar",
    category: "pulse",
    description: "Efeito sonar radar",
    duration: "1.5s",
    intensity: "sonar wave",
    cssCode: `.sonar { 
  animation: sonar 1.5s infinite; 
}
@keyframes sonar { 
  0% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.7); } 
  40% { box-shadow: 0 0 0 20px rgba(0, 255, 255, 0.3); } 
  80%, 100% { box-shadow: 0 0 0 40px rgba(0, 255, 255, 0); } 
}`,
    htmlCode: `<button className="sonar">Clique</button>`
  },
  {
    id: "pulse-9",
    name: "Electric Spark",
    category: "pulse",
    description: "Faísca elétrica",
    duration: "0.8s",
    intensity: "electric flash",
    cssCode: `.electric-spark { 
  animation: electricSpark 0.8s infinite; 
}
@keyframes electricSpark { 
  0%, 100% { box-shadow: 0 0 5px rgba(0, 200, 255, 0.5); filter: brightness(1); } 
  50% { box-shadow: 0 0 20px rgba(0, 200, 255, 1), 0 0 40px rgba(0, 200, 255, 0.5); filter: brightness(1.3); } 
}`,
    htmlCode: `<button className="electric-spark">Clique</button>`
  },
  {
    id: "pulse-10",
    name: "Fire Glow",
    category: "pulse",
    description: "Brilho de fogo",
    duration: "1.2s",
    intensity: "fire effect",
    cssCode: `.fire-glow { 
  animation: fireGlow 1.2s infinite; 
}
@keyframes fireGlow { 
  0%, 100% { box-shadow: 0 0 10px rgba(255, 100, 0, 0.6), 0 0 20px rgba(255, 50, 0, 0.3); } 
  50% { box-shadow: 0 0 20px rgba(255, 150, 0, 0.8), 0 0 40px rgba(255, 100, 0, 0.5), 0 0 60px rgba(255, 50, 0, 0.3); } 
}`,
    htmlCode: `<button className="fire-glow">Clique</button>`
  },
  {
    id: "pulse-11",
    name: "Ice Glow",
    category: "pulse",
    description: "Brilho gelado",
    duration: "2s",
    intensity: "ice effect",
    cssCode: `.ice-glow { 
  animation: iceGlow 2s infinite ease-in-out; 
}
@keyframes iceGlow { 
  0%, 100% { box-shadow: 0 0 10px rgba(150, 220, 255, 0.5); filter: hue-rotate(0deg); } 
  50% { box-shadow: 0 0 25px rgba(150, 220, 255, 0.8), 0 0 50px rgba(200, 240, 255, 0.4); filter: hue-rotate(20deg); } 
}`,
    htmlCode: `<button className="ice-glow">Clique</button>`
  },
  {
    id: "pulse-12",
    name: "Toxic Green",
    category: "pulse",
    description: "Verde tóxico radioativo",
    duration: "1s",
    intensity: "toxic glow",
    cssCode: `.toxic-green { 
  animation: toxicGreen 1s infinite; 
}
@keyframes toxicGreen { 
  0%, 100% { box-shadow: 0 0 5px rgba(0, 255, 0, 0.5); } 
  50% { box-shadow: 0 0 15px rgba(0, 255, 0, 0.8), 0 0 30px rgba(100, 255, 0, 0.4), 0 0 45px rgba(0, 255, 0, 0.2); } 
}`,
    htmlCode: `<button className="toxic-green">Clique</button>`
  },
  {
    id: "pulse-13",
    name: "Golden Shine",
    category: "pulse",
    description: "Brilho dourado luxuoso",
    duration: "1.6s",
    intensity: "gold shimmer",
    cssCode: `.golden-shine { 
  animation: goldenShine 1.6s infinite; 
}
@keyframes goldenShine { 
  0%, 100% { box-shadow: 0 0 10px rgba(255, 200, 50, 0.5); } 
  50% { box-shadow: 0 0 20px rgba(255, 200, 50, 0.8), 0 0 40px rgba(255, 220, 100, 0.4); } 
}`,
    htmlCode: `<button className="golden-shine">Clique</button>`
  },
  {
    id: "pulse-14",
    name: "Purple Aura",
    category: "pulse",
    description: "Aura roxa mística",
    duration: "1.8s",
    intensity: "purple aura",
    cssCode: `.purple-aura { 
  animation: purpleAura 1.8s infinite ease-in-out; 
}
@keyframes purpleAura { 
  0%, 100% { box-shadow: 0 0 10px rgba(150, 0, 255, 0.4); } 
  50% { box-shadow: 0 0 25px rgba(150, 0, 255, 0.7), 0 0 50px rgba(200, 100, 255, 0.3); } 
}`,
    htmlCode: `<button className="purple-aura">Clique</button>`
  },
  {
    id: "pulse-15",
    name: "Sunset Pulse",
    category: "pulse",
    description: "Pulsação por do sol",
    duration: "2.2s",
    intensity: "sunset gradient",
    cssCode: `.sunset-pulse { 
  animation: sunsetPulse 2.2s infinite; 
}
@keyframes sunsetPulse { 
  0%, 100% { box-shadow: 0 0 10px rgba(255, 100, 50, 0.5); } 
  33% { box-shadow: 0 0 20px rgba(255, 50, 100, 0.6); } 
  66% { box-shadow: 0 0 20px rgba(255, 150, 50, 0.6); } 
}`,
    htmlCode: `<button className="sunset-pulse">Clique</button>`
  },
  {
    id: "pulse-16",
    name: "Ocean Wave",
    category: "pulse",
    description: "Onda oceânica",
    duration: "2.5s",
    intensity: "ocean effect",
    cssCode: `.ocean-wave { 
  animation: oceanWave 2.5s infinite ease-in-out; 
}
@keyframes oceanWave { 
  0%, 100% { box-shadow: 0 0 10px rgba(0, 100, 200, 0.5); transform: translateY(0); } 
  50% { box-shadow: 0 0 25px rgba(0, 150, 255, 0.7); transform: translateY(-3px); } 
}`,
    htmlCode: `<button className="ocean-wave">Clique</button>`
  },
  {
    id: "pulse-17",
    name: "Danger Alert",
    category: "pulse",
    description: "Alerta de perigo rápido",
    duration: "0.5s",
    intensity: "danger flash",
    cssCode: `.danger-alert { 
  animation: dangerAlert 0.5s infinite; 
}
@keyframes dangerAlert { 
  0%, 100% { box-shadow: 0 0 5px rgba(255, 0, 0, 0.5); background-color: rgba(255, 0, 0, 0.1); } 
  50% { box-shadow: 0 0 20px rgba(255, 0, 0, 0.8); background-color: rgba(255, 0, 0, 0.2); } 
}`,
    htmlCode: `<button className="danger-alert">Clique</button>`
  },
  {
    id: "pulse-18",
    name: "Success Glow",
    category: "pulse",
    description: "Brilho de sucesso",
    duration: "1.4s",
    intensity: "success green",
    cssCode: `.success-glow { 
  animation: successGlow 1.4s infinite; 
}
@keyframes successGlow { 
  0%, 100% { box-shadow: 0 0 5px rgba(50, 200, 100, 0.5); } 
  50% { box-shadow: 0 0 15px rgba(50, 200, 100, 0.8), 0 0 30px rgba(50, 200, 100, 0.4); } 
}`,
    htmlCode: `<button className="success-glow">Clique</button>`
  },
  {
    id: "pulse-19",
    name: "Warning Blink",
    category: "pulse",
    description: "Piscar de aviso",
    duration: "0.8s",
    intensity: "warning amber",
    cssCode: `.warning-blink { 
  animation: warningBlink 0.8s infinite; 
}
@keyframes warningBlink { 
  0%, 100% { box-shadow: 0 0 5px rgba(255, 180, 0, 0.6); opacity: 1; } 
  50% { box-shadow: 0 0 20px rgba(255, 180, 0, 0.9); opacity: 0.8; } 
}`,
    htmlCode: `<button className="warning-blink">Clique</button>`
  },
  {
    id: "pulse-20",
    name: "Info Pulse",
    category: "pulse",
    description: "Pulsação informativa",
    duration: "1.5s",
    intensity: "info blue",
    cssCode: `.info-pulse { 
  animation: infoPulse 1.5s infinite; 
}
@keyframes infoPulse { 
  0%, 100% { box-shadow: 0 0 5px rgba(0, 150, 255, 0.5); } 
  50% { box-shadow: 0 0 15px rgba(0, 150, 255, 0.8); } 
}`,
    htmlCode: `<button className="info-pulse">Clique</button>`
  },
  {
    id: "pulse-21",
    name: "WhatsApp Green",
    category: "pulse",
    description: "Verde WhatsApp autêntico",
    duration: "1.2s",
    intensity: "whatsapp effect",
    cssCode: `.whatsapp-green { 
  animation: whatsappGreen 1.2s infinite; 
}
@keyframes whatsappGreen { 
  0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); transform: scale(1); } 
  70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); transform: scale(1.05); } 
  100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); transform: scale(1); } 
}`,
    htmlCode: `<button className="whatsapp-green">Clique</button>`
  },
  {
    id: "pulse-22",
    name: "Outline Expand",
    category: "pulse",
    description: "Contorno que se expande",
    duration: "1.3s",
    intensity: "outline grow",
    cssCode: `.outline-expand { 
  animation: outlineExpand 1.3s infinite; 
}
@keyframes outlineExpand { 
  0%, 100% { outline: 2px solid transparent; outline-offset: 0px; } 
  50% { outline: 2px solid hsl(180, 100%, 50%); outline-offset: 6px; } 
}`,
    htmlCode: `<button className="outline-expand">Clique</button>`
  },
  {
    id: "pulse-23",
    name: "Shadow Dance",
    category: "pulse",
    description: "Sombra dançante",
    duration: "1.6s",
    intensity: "shadow move",
    cssCode: `.shadow-dance { 
  animation: shadowDance 1.6s infinite ease-in-out; 
}
@keyframes shadowDance { 
  0%, 100% { box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3); } 
  25% { box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.3); } 
  50% { box-shadow: -5px -5px 15px rgba(0, 0, 0, 0.3); } 
  75% { box-shadow: 5px -5px 15px rgba(0, 0, 0, 0.3); } 
}`,
    htmlCode: `<button className="shadow-dance">Clique</button>`
  },
  {
    id: "pulse-24",
    name: "Gradient Shift",
    category: "pulse",
    description: "Mudança de gradiente",
    duration: "3s",
    intensity: "gradient cycle",
    cssCode: `.gradient-shift { 
  animation: gradientShift 3s infinite linear; 
  background: linear-gradient(90deg, hsl(180, 100%, 50%), hsl(320, 100%, 60%), hsl(180, 100%, 50%));
  background-size: 200% 100%;
}
@keyframes gradientShift { 
  0% { background-position: 0% 50%; } 
  100% { background-position: 200% 50%; } 
}`,
    htmlCode: `<button className="gradient-shift">Clique</button>`
  },
  {
    id: "pulse-25",
    name: "Brightness Pulse",
    category: "pulse",
    description: "Pulsação de brilho",
    duration: "1.5s",
    intensity: "brightness 1.3x",
    cssCode: `.brightness-pulse { 
  animation: brightnessPulse 1.5s infinite ease-in-out; 
}
@keyframes brightnessPulse { 
  0%, 100% { filter: brightness(1); } 
  50% { filter: brightness(1.3); } 
}`,
    htmlCode: `<button className="brightness-pulse">Clique</button>`
  },
  {
    id: "pulse-26",
    name: "Saturate Wave",
    category: "pulse",
    description: "Onda de saturação",
    duration: "2s",
    intensity: "saturate 1.5x",
    cssCode: `.saturate-wave { 
  animation: saturateWave 2s infinite ease-in-out; 
}
@keyframes saturateWave { 
  0%, 100% { filter: saturate(1); } 
  50% { filter: saturate(1.5); } 
}`,
    htmlCode: `<button className="saturate-wave">Clique</button>`
  },
  {
    id: "pulse-27",
    name: "Hue Rotate",
    category: "pulse",
    description: "Rotação de matiz",
    duration: "4s",
    intensity: "hue 360deg",
    cssCode: `.hue-rotate-pulse { 
  animation: hueRotatePulse 4s infinite linear; 
}
@keyframes hueRotatePulse { 
  0% { filter: hue-rotate(0deg); } 
  100% { filter: hue-rotate(360deg); } 
}`,
    htmlCode: `<button className="hue-rotate-pulse">Clique</button>`
  },
  {
    id: "pulse-28",
    name: "Neon Border",
    category: "pulse",
    description: "Borda neon animada",
    duration: "1.2s",
    intensity: "neon border",
    cssCode: `.neon-border { 
  animation: neonBorder 1.2s infinite; 
  border: 2px solid transparent;
}
@keyframes neonBorder { 
  0%, 100% { 
    border-color: hsl(180, 100%, 50%); 
    box-shadow: 0 0 5px hsl(180, 100%, 50%), inset 0 0 5px hsl(180, 100%, 50%); 
  } 
  50% { 
    border-color: hsl(320, 100%, 60%); 
    box-shadow: 0 0 15px hsl(320, 100%, 60%), inset 0 0 10px hsl(320, 100%, 60%); 
  } 
}`,
    htmlCode: `<button className="neon-border">Clique</button>`
  },
  {
    id: "pulse-29",
    name: "Ripple Effect",
    category: "pulse",
    description: "Efeito ondulação",
    duration: "1s",
    intensity: "ripple waves",
    cssCode: `.ripple-effect { 
  animation: rippleEffect 1s infinite; 
  position: relative;
}
@keyframes rippleEffect { 
  0% { box-shadow: 0 0 0 0 rgba(0, 255, 255, 0.4), 0 0 0 0 rgba(0, 255, 255, 0.3), 0 0 0 0 rgba(0, 255, 255, 0.2); } 
  100% { box-shadow: 0 0 0 10px rgba(0, 255, 255, 0), 0 0 0 20px rgba(0, 255, 255, 0), 0 0 0 30px rgba(0, 255, 255, 0); } 
}`,
    htmlCode: `<button className="ripple-effect">Clique</button>`
  },
  {
    id: "pulse-30",
    name: "Mega Glow",
    category: "pulse",
    description: "Brilho mega extremo",
    duration: "2s",
    intensity: "mega effect",
    cssCode: `.mega-glow { 
  animation: megaGlow 2s infinite; 
}
@keyframes megaGlow { 
  0%, 100% { 
    transform: scale(1); 
    box-shadow: 0 0 10px rgba(255, 0, 255, 0.5), 0 0 20px rgba(0, 255, 255, 0.3); 
    filter: brightness(1);
  } 
  50% { 
    transform: scale(1.08); 
    box-shadow: 0 0 30px rgba(255, 0, 255, 0.8), 0 0 60px rgba(0, 255, 255, 0.5), 0 0 90px rgba(255, 255, 0, 0.3); 
    filter: brightness(1.2);
  } 
}`,
    htmlCode: `<button className="mega-glow">Clique</button>`
  }
];

export const buttonCategories = [
  { id: "all", label: "Todos", count: 60 },
  { id: "scale", label: "Scale", count: 30 },
  { id: "pulse", label: "Pulse", count: 30 }
];
