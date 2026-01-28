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
  // ========== SCALE ANIMATIONS (30) ==========
  {
    id: "scale-1",
    name: "Scale Suave",
    category: "scale",
    description: "Escala sutil e rápida",
    duration: "0.3s",
    intensity: "1.05x",
    cssCode: `.scale-1:hover { animation: scale1 0.3s ease; }
@keyframes scale1 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.05); } 
}`,
    htmlCode: `<button className="scale-1">Hover Me</button>`
  },
  {
    id: "scale-2",
    name: "Scale Médio",
    category: "scale",
    description: "Escala média com timing suave",
    duration: "0.4s",
    intensity: "1.08x",
    cssCode: `.scale-2:hover { animation: scale2 0.4s ease; }
@keyframes scale2 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.08); } 
}`,
    htmlCode: `<button className="scale-2">Hover Me</button>`
  },
  {
    id: "scale-3",
    name: "Scale Bounce",
    category: "scale",
    description: "Escala com efeito de bounce",
    duration: "0.5s",
    intensity: "1.1x",
    cssCode: `.scale-3:hover { animation: scale3 0.5s ease-in-out; }
@keyframes scale3 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.1); } 
}`,
    htmlCode: `<button className="scale-3">Hover Me</button>`
  },
  {
    id: "scale-4",
    name: "Scale Elástico",
    category: "scale",
    description: "Escala com efeito elástico",
    duration: "0.6s",
    intensity: "1.12x",
    cssCode: `.scale-4:hover { animation: scale4 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
@keyframes scale4 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.12); } 
}`,
    htmlCode: `<button className="scale-4">Hover Me</button>`
  },
  {
    id: "scale-5",
    name: "Scale Grande",
    category: "scale",
    description: "Escala mais pronunciada",
    duration: "0.7s",
    intensity: "1.15x",
    cssCode: `.scale-5:hover { animation: scale5 0.7s ease; }
@keyframes scale5 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.15); } 
}`,
    htmlCode: `<button className="scale-5">Hover Me</button>`
  },
  {
    id: "scale-6",
    name: "Scale Rápido",
    category: "scale",
    description: "Escala muito rápida",
    duration: "0.2s",
    intensity: "1.03x",
    cssCode: `.scale-6:hover { animation: scale6 0.2s ease; }
@keyframes scale6 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.03); } 
}`,
    htmlCode: `<button className="scale-6">Hover Me</button>`
  },
  {
    id: "scale-7",
    name: "Scale Dramático",
    category: "scale",
    description: "Escala dramática com timing lento",
    duration: "0.8s",
    intensity: "1.18x",
    cssCode: `.scale-7:hover { animation: scale7 0.8s ease-out; }
@keyframes scale7 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.18); } 
}`,
    htmlCode: `<button className="scale-7">Hover Me</button>`
  },
  {
    id: "scale-8",
    name: "Scale Pop",
    category: "scale",
    description: "Efeito pop com overshoot",
    duration: "0.35s",
    intensity: "1.2x",
    cssCode: `.scale-8:hover { animation: scale8 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
@keyframes scale8 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.2); } 
}`,
    htmlCode: `<button className="scale-8">Hover Me</button>`
  },
  {
    id: "scale-9",
    name: "Scale Micro",
    category: "scale",
    description: "Escala muito sutil",
    duration: "0.25s",
    intensity: "1.02x",
    cssCode: `.scale-9:hover { animation: scale9 0.25s ease; }
@keyframes scale9 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.02); } 
}`,
    htmlCode: `<button className="scale-9">Hover Me</button>`
  },
  {
    id: "scale-10",
    name: "Scale Smooth",
    category: "scale",
    description: "Escala suave e fluida",
    duration: "0.45s",
    intensity: "1.07x",
    cssCode: `.scale-10:hover { animation: scale10 0.45s ease-in-out; }
@keyframes scale10 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.07); } 
}`,
    htmlCode: `<button className="scale-10">Hover Me</button>`
  },
  {
    id: "scale-11",
    name: "Scale Spring",
    category: "scale",
    description: "Escala com efeito de mola",
    duration: "0.5s",
    intensity: "1.13x",
    cssCode: `.scale-11:hover { animation: scale11 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); }
@keyframes scale11 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.13); } 
}`,
    htmlCode: `<button className="scale-11">Hover Me</button>`
  },
  {
    id: "scale-12",
    name: "Scale Gentle",
    category: "scale",
    description: "Escala gentil e lenta",
    duration: "0.65s",
    intensity: "1.06x",
    cssCode: `.scale-12:hover { animation: scale12 0.65s ease; }
@keyframes scale12 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.06); } 
}`,
    htmlCode: `<button className="scale-12">Hover Me</button>`
  },
  {
    id: "scale-13",
    name: "Scale Bold",
    category: "scale",
    description: "Escala ousada",
    duration: "0.55s",
    intensity: "1.22x",
    cssCode: `.scale-13:hover { animation: scale13 0.55s ease-out; }
@keyframes scale13 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.22); } 
}`,
    htmlCode: `<button className="scale-13">Hover Me</button>`
  },
  {
    id: "scale-14",
    name: "Scale Snap",
    category: "scale",
    description: "Escala com snap rápido",
    duration: "0.28s",
    intensity: "1.09x",
    cssCode: `.scale-14:hover { animation: scale14 0.28s ease-out; }
@keyframes scale14 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.09); } 
}`,
    htmlCode: `<button className="scale-14">Hover Me</button>`
  },
  {
    id: "scale-15",
    name: "Scale Wobble",
    category: "scale",
    description: "Escala com leve oscilação",
    duration: "0.6s",
    intensity: "1.14x",
    cssCode: `.scale-15:hover { animation: scale15 0.6s ease-in-out; }
@keyframes scale15 { 
  0%, 100% { transform: scale(1); } 
  25% { transform: scale(1.14); }
  75% { transform: scale(0.98); }
}`,
    htmlCode: `<button className="scale-15">Hover Me</button>`
  },
  {
    id: "scale-16",
    name: "Scale Punch",
    category: "scale",
    description: "Escala com punch forte",
    duration: "0.3s",
    intensity: "1.25x",
    cssCode: `.scale-16:hover { animation: scale16 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
@keyframes scale16 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.25); } 
}`,
    htmlCode: `<button className="scale-16">Hover Me</button>`
  },
  {
    id: "scale-17",
    name: "Scale Breath",
    category: "scale",
    description: "Escala como respiração",
    duration: "0.75s",
    intensity: "1.08x",
    cssCode: `.scale-17:hover { animation: scale17 0.75s ease-in-out; }
@keyframes scale17 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.08); } 
}`,
    htmlCode: `<button className="scale-17">Hover Me</button>`
  },
  {
    id: "scale-18",
    name: "Scale Zoom",
    category: "scale",
    description: "Zoom intenso",
    duration: "0.4s",
    intensity: "1.18x",
    cssCode: `.scale-18:hover { animation: scale18 0.4s ease-out; }
@keyframes scale18 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.18); } 
}`,
    htmlCode: `<button className="scale-18">Hover Me</button>`
  },
  {
    id: "scale-19",
    name: "Scale Burst",
    category: "scale",
    description: "Explosão de escala",
    duration: "0.35s",
    intensity: "1.28x",
    cssCode: `.scale-19:hover { animation: scale19 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
@keyframes scale19 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.28); } 
}`,
    htmlCode: `<button className="scale-19">Hover Me</button>`
  },
  {
    id: "scale-20",
    name: "Scale Subtle",
    category: "scale",
    description: "Escala muito sutil",
    duration: "0.5s",
    intensity: "1.04x",
    cssCode: `.scale-20:hover { animation: scale20 0.5s ease; }
@keyframes scale20 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.04); } 
}`,
    htmlCode: `<button className="scale-20">Hover Me</button>`
  },
  {
    id: "scale-21",
    name: "Scale Double",
    category: "scale",
    description: "Dupla escala",
    duration: "0.6s",
    intensity: "1.1x",
    cssCode: `.scale-21:hover { animation: scale21 0.6s ease-in-out; }
@keyframes scale21 { 
  0%, 100% { transform: scale(1); } 
  25% { transform: scale(1.1); }
  50% { transform: scale(1.05); }
  75% { transform: scale(1.1); }
}`,
    htmlCode: `<button className="scale-21">Hover Me</button>`
  },
  {
    id: "scale-22",
    name: "Scale Pulse Mix",
    category: "scale",
    description: "Escala com pulsação",
    duration: "0.7s",
    intensity: "1.12x",
    cssCode: `.scale-22:hover { animation: scale22 0.7s ease-in-out; }
@keyframes scale22 { 
  0%, 100% { transform: scale(1); } 
  30% { transform: scale(1.12); }
  60% { transform: scale(1.06); }
}`,
    htmlCode: `<button className="scale-22">Hover Me</button>`
  },
  {
    id: "scale-23",
    name: "Scale Jelly",
    category: "scale",
    description: "Efeito gelatina",
    duration: "0.5s",
    intensity: "1.15x",
    cssCode: `.scale-23:hover { animation: scale23 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); }
@keyframes scale23 { 
  0%, 100% { transform: scale(1); } 
  30% { transform: scale(1.15); }
  60% { transform: scale(0.95); }
}`,
    htmlCode: `<button className="scale-23">Hover Me</button>`
  },
  {
    id: "scale-24",
    name: "Scale Snappy",
    category: "scale",
    description: "Escala snappy",
    duration: "0.25s",
    intensity: "1.11x",
    cssCode: `.scale-24:hover { animation: scale24 0.25s ease-out; }
@keyframes scale24 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.11); } 
}`,
    htmlCode: `<button className="scale-24">Hover Me</button>`
  },
  {
    id: "scale-25",
    name: "Scale Slow",
    category: "scale",
    description: "Escala lenta e suave",
    duration: "0.9s",
    intensity: "1.1x",
    cssCode: `.scale-25:hover { animation: scale25 0.9s ease-in-out; }
@keyframes scale25 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.1); } 
}`,
    htmlCode: `<button className="scale-25">Hover Me</button>`
  },
  {
    id: "scale-26",
    name: "Scale Power",
    category: "scale",
    description: "Escala poderosa",
    duration: "0.4s",
    intensity: "1.2x",
    cssCode: `.scale-26:hover { animation: scale26 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
@keyframes scale26 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.2); } 
}`,
    htmlCode: `<button className="scale-26">Hover Me</button>`
  },
  {
    id: "scale-27",
    name: "Scale Flick",
    category: "scale",
    description: "Escala com flick",
    duration: "0.3s",
    intensity: "1.16x",
    cssCode: `.scale-27:hover { animation: scale27 0.3s ease-out; }
@keyframes scale27 { 
  0%, 100% { transform: scale(1); } 
  60% { transform: scale(1.16); } 
}`,
    htmlCode: `<button className="scale-27">Hover Me</button>`
  },
  {
    id: "scale-28",
    name: "Scale Grow",
    category: "scale",
    description: "Crescimento gradual",
    duration: "0.55s",
    intensity: "1.13x",
    cssCode: `.scale-28:hover { animation: scale28 0.55s ease; }
@keyframes scale28 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.13); } 
}`,
    htmlCode: `<button className="scale-28">Hover Me</button>`
  },
  {
    id: "scale-29",
    name: "Scale Bounce Back",
    category: "scale",
    description: "Escala com bounce back",
    duration: "0.65s",
    intensity: "1.17x",
    cssCode: `.scale-29:hover { animation: scale29 0.65s cubic-bezier(0.68, -0.55, 0.265, 1.55); }
@keyframes scale29 { 
  0%, 100% { transform: scale(1); } 
  40% { transform: scale(1.17); }
  70% { transform: scale(0.97); }
}`,
    htmlCode: `<button className="scale-29">Hover Me</button>`
  },
  {
    id: "scale-30",
    name: "Scale Extreme",
    category: "scale",
    description: "Escala extrema",
    duration: "1s",
    intensity: "1.3x",
    cssCode: `.scale-30:hover { animation: scale30 1s linear; }
@keyframes scale30 { 
  0%, 100% { transform: scale(1); } 
  50% { transform: scale(1.3); } 
}`,
    htmlCode: `<button className="scale-30">Hover Me</button>`
  },

  // ========== PULSE ANIMATIONS (30) ==========
  {
    id: "pulse-1",
    name: "Pulse Básico",
    category: "pulse",
    description: "Pulsação básica com sombra",
    duration: "1s",
    intensity: "1.05x",
    cssCode: `.pulse-1 { animation: pulse1 1s infinite; }
@keyframes pulse1 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,255,255,0.7); } 
  70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(0,255,255,0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,255,255,0); } 
}`,
    htmlCode: `<button className="pulse-1">Clique</button>`
  },
  {
    id: "pulse-2",
    name: "Pulse Suave",
    category: "pulse",
    description: "Pulsação suave e lenta",
    duration: "1.5s",
    intensity: "1.08x",
    cssCode: `.pulse-2 { animation: pulse2 1.5s infinite; }
@keyframes pulse2 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,0,255,0.5); } 
  70% { transform: scale(1.08); box-shadow: 0 0 0 15px rgba(255,0,255,0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,0,255,0); } 
}`,
    htmlCode: `<button className="pulse-2">Clique</button>`
  },
  {
    id: "pulse-3",
    name: "Pulse Grande",
    category: "pulse",
    description: "Pulsação com sombra grande",
    duration: "2s",
    intensity: "1.1x",
    cssCode: `.pulse-3 { animation: pulse3 2s infinite ease-in-out; }
@keyframes pulse3 { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,255,0,0.7); } 
  50% { transform: scale(1.1); box-shadow: 0 0 0 20px rgba(0,255,0,0); } 
}`,
    htmlCode: `<button className="pulse-3">Clique</button>`
  },
  {
    id: "pulse-4",
    name: "Pulse Neon Cyan",
    category: "pulse",
    description: "Pulsação com brilho cyan",
    duration: "1.2s",
    intensity: "1.06x",
    cssCode: `.pulse-4 { animation: pulse4 1.2s infinite; }
@keyframes pulse4 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 hsl(180, 100%, 50%, 0.7); } 
  70% { transform: scale(1.06); box-shadow: 0 0 0 12px hsl(180, 100%, 50%, 0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 hsl(180, 100%, 50%, 0); } 
}`,
    htmlCode: `<button className="pulse-4">Clique</button>`
  },
  {
    id: "pulse-5",
    name: "Pulse Neon Magenta",
    category: "pulse",
    description: "Pulsação com brilho magenta",
    duration: "1.3s",
    intensity: "1.07x",
    cssCode: `.pulse-5 { animation: pulse5 1.3s infinite; }
@keyframes pulse5 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 hsl(320, 100%, 60%, 0.7); } 
  70% { transform: scale(1.07); box-shadow: 0 0 0 14px hsl(320, 100%, 60%, 0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 hsl(320, 100%, 60%, 0); } 
}`,
    htmlCode: `<button className="pulse-5">Clique</button>`
  },
  {
    id: "pulse-6",
    name: "Pulse Rápido",
    category: "pulse",
    description: "Pulsação muito rápida",
    duration: "0.5s",
    intensity: "1.04x",
    cssCode: `.pulse-6 { animation: pulse6 0.5s infinite; }
@keyframes pulse6 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,255,0,0.6); } 
  70% { transform: scale(1.04); box-shadow: 0 0 0 8px rgba(255,255,0,0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,255,0,0); } 
}`,
    htmlCode: `<button className="pulse-6">Clique</button>`
  },
  {
    id: "pulse-7",
    name: "Pulse Lento",
    category: "pulse",
    description: "Pulsação muito lenta",
    duration: "2.5s",
    intensity: "1.12x",
    cssCode: `.pulse-7 { animation: pulse7 2.5s infinite ease-in-out; }
@keyframes pulse7 { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,255,255,0.5); } 
  50% { transform: scale(1.12); box-shadow: 0 0 0 25px rgba(0,255,255,0); } 
}`,
    htmlCode: `<button className="pulse-7">Clique</button>`
  },
  {
    id: "pulse-8",
    name: "Pulse Double Ring",
    category: "pulse",
    description: "Pulsação com anel duplo",
    duration: "1.4s",
    intensity: "1.05x",
    cssCode: `.pulse-8 { animation: pulse8 1.4s infinite; }
@keyframes pulse8 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,0,128,0.6), 0 0 0 0 rgba(128,0,255,0.4); } 
  70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(255,0,128,0), 0 0 0 20px rgba(128,0,255,0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,0,128,0), 0 0 0 0 rgba(128,0,255,0); } 
}`,
    htmlCode: `<button className="pulse-8">Clique</button>`
  },
  {
    id: "pulse-9",
    name: "Pulse Glow",
    category: "pulse",
    description: "Pulsação com brilho intenso",
    duration: "1.1s",
    intensity: "1.06x",
    cssCode: `.pulse-9 { animation: pulse9 1.1s infinite; }
@keyframes pulse9 { 
  0% { transform: scale(1); box-shadow: 0 0 5px rgba(0,255,128,0.8); } 
  50% { transform: scale(1.06); box-shadow: 0 0 20px rgba(0,255,128,0.6), 0 0 40px rgba(0,255,128,0.3); } 
  100% { transform: scale(1); box-shadow: 0 0 5px rgba(0,255,128,0.8); } 
}`,
    htmlCode: `<button className="pulse-9">Clique</button>`
  },
  {
    id: "pulse-10",
    name: "Pulse Heartbeat",
    category: "pulse",
    description: "Pulsação estilo batimento cardíaco",
    duration: "1.5s",
    intensity: "1.15x",
    cssCode: `.pulse-10 { animation: pulse10 1.5s infinite; }
@keyframes pulse10 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,50,50,0.7); } 
  14% { transform: scale(1.15); box-shadow: 0 0 0 5px rgba(255,50,50,0.5); } 
  28% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,50,50,0.3); } 
  42% { transform: scale(1.1); box-shadow: 0 0 0 8px rgba(255,50,50,0.2); } 
  70% { transform: scale(1); box-shadow: 0 0 0 15px rgba(255,50,50,0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,50,50,0); } 
}`,
    htmlCode: `<button className="pulse-10">Clique</button>`
  },
  {
    id: "pulse-11",
    name: "Pulse Rainbow",
    category: "pulse",
    description: "Pulsação com cores do arco-íris",
    duration: "2s",
    intensity: "1.08x",
    cssCode: `.pulse-11 { animation: pulse11 2s infinite; }
@keyframes pulse11 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,0,0,0.6); } 
  25% { transform: scale(1.04); box-shadow: 0 0 0 5px rgba(255,255,0,0.4); } 
  50% { transform: scale(1.08); box-shadow: 0 0 0 10px rgba(0,255,0,0.2); } 
  75% { transform: scale(1.04); box-shadow: 0 0 0 15px rgba(0,0,255,0.1); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,0,255,0); } 
}`,
    htmlCode: `<button className="pulse-11">Clique</button>`
  },
  {
    id: "pulse-12",
    name: "Pulse Soft",
    category: "pulse",
    description: "Pulsação muito suave",
    duration: "1.8s",
    intensity: "1.03x",
    cssCode: `.pulse-12 { animation: pulse12 1.8s infinite ease-in-out; }
@keyframes pulse12 { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(200,200,200,0.4); } 
  50% { transform: scale(1.03); box-shadow: 0 0 0 12px rgba(200,200,200,0); } 
}`,
    htmlCode: `<button className="pulse-12">Clique</button>`
  },
  {
    id: "pulse-13",
    name: "Pulse Electric",
    category: "pulse",
    description: "Pulsação elétrica",
    duration: "0.8s",
    intensity: "1.1x",
    cssCode: `.pulse-13 { animation: pulse13 0.8s infinite; }
@keyframes pulse13 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,200,255,0.8); } 
  50% { transform: scale(1.1); box-shadow: 0 0 15px rgba(0,200,255,0.6), 0 0 0 10px rgba(0,200,255,0.3); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,200,255,0); } 
}`,
    htmlCode: `<button className="pulse-13">Clique</button>`
  },
  {
    id: "pulse-14",
    name: "Pulse Fire",
    category: "pulse",
    description: "Pulsação de fogo",
    duration: "1s",
    intensity: "1.08x",
    cssCode: `.pulse-14 { animation: pulse14 1s infinite; }
@keyframes pulse14 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,100,0,0.7); } 
  50% { transform: scale(1.08); box-shadow: 0 0 20px rgba(255,50,0,0.5), 0 0 0 12px rgba(255,200,0,0.3); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,100,0,0); } 
}`,
    htmlCode: `<button className="pulse-14">Clique</button>`
  },
  {
    id: "pulse-15",
    name: "Pulse Ice",
    category: "pulse",
    description: "Pulsação de gelo",
    duration: "1.6s",
    intensity: "1.05x",
    cssCode: `.pulse-15 { animation: pulse15 1.6s infinite ease-in-out; }
@keyframes pulse15 { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(150,220,255,0.6); } 
  50% { transform: scale(1.05); box-shadow: 0 0 15px rgba(150,220,255,0.4), 0 0 0 15px rgba(200,240,255,0); } 
}`,
    htmlCode: `<button className="pulse-15">Clique</button>`
  },
  {
    id: "pulse-16",
    name: "Pulse Toxic",
    category: "pulse",
    description: "Pulsação tóxica verde",
    duration: "1.2s",
    intensity: "1.07x",
    cssCode: `.pulse-16 { animation: pulse16 1.2s infinite; }
@keyframes pulse16 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(100,255,0,0.7); } 
  70% { transform: scale(1.07); box-shadow: 0 0 0 12px rgba(100,255,0,0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(100,255,0,0); } 
}`,
    htmlCode: `<button className="pulse-16">Clique</button>`
  },
  {
    id: "pulse-17",
    name: "Pulse Gold",
    category: "pulse",
    description: "Pulsação dourada",
    duration: "1.4s",
    intensity: "1.06x",
    cssCode: `.pulse-17 { animation: pulse17 1.4s infinite; }
@keyframes pulse17 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,200,50,0.6); } 
  70% { transform: scale(1.06); box-shadow: 0 0 10px rgba(255,200,50,0.4), 0 0 0 14px rgba(255,200,50,0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,200,50,0); } 
}`,
    htmlCode: `<button className="pulse-17">Clique</button>`
  },
  {
    id: "pulse-18",
    name: "Pulse Purple",
    category: "pulse",
    description: "Pulsação roxa intensa",
    duration: "1.1s",
    intensity: "1.09x",
    cssCode: `.pulse-18 { animation: pulse18 1.1s infinite; }
@keyframes pulse18 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(150,0,255,0.7); } 
  70% { transform: scale(1.09); box-shadow: 0 0 0 11px rgba(150,0,255,0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(150,0,255,0); } 
}`,
    htmlCode: `<button className="pulse-18">Clique</button>`
  },
  {
    id: "pulse-19",
    name: "Pulse Sunset",
    category: "pulse",
    description: "Pulsação por do sol",
    duration: "1.7s",
    intensity: "1.08x",
    cssCode: `.pulse-19 { animation: pulse19 1.7s infinite ease-in-out; }
@keyframes pulse19 { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,100,50,0.5); } 
  50% { transform: scale(1.08); box-shadow: 0 0 0 18px rgba(255,50,100,0); } 
}`,
    htmlCode: `<button className="pulse-19">Clique</button>`
  },
  {
    id: "pulse-20",
    name: "Pulse Ocean",
    category: "pulse",
    description: "Pulsação oceânica",
    duration: "2.2s",
    intensity: "1.06x",
    cssCode: `.pulse-20 { animation: pulse20 2.2s infinite ease-in-out; }
@keyframes pulse20 { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,100,200,0.5); } 
  50% { transform: scale(1.06); box-shadow: 0 0 0 20px rgba(0,150,255,0); } 
}`,
    htmlCode: `<button className="pulse-20">Clique</button>`
  },
  {
    id: "pulse-21",
    name: "Pulse Danger",
    category: "pulse",
    description: "Pulsação de perigo",
    duration: "0.6s",
    intensity: "1.12x",
    cssCode: `.pulse-21 { animation: pulse21 0.6s infinite; }
@keyframes pulse21 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,0,0,0.8); } 
  70% { transform: scale(1.12); box-shadow: 0 0 0 8px rgba(255,0,0,0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,0,0,0); } 
}`,
    htmlCode: `<button className="pulse-21">Clique</button>`
  },
  {
    id: "pulse-22",
    name: "Pulse Success",
    category: "pulse",
    description: "Pulsação de sucesso",
    duration: "1.3s",
    intensity: "1.05x",
    cssCode: `.pulse-22 { animation: pulse22 1.3s infinite; }
@keyframes pulse22 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(50,200,100,0.7); } 
  70% { transform: scale(1.05); box-shadow: 0 0 0 13px rgba(50,200,100,0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(50,200,100,0); } 
}`,
    htmlCode: `<button className="pulse-22">Clique</button>`
  },
  {
    id: "pulse-23",
    name: "Pulse Warning",
    category: "pulse",
    description: "Pulsação de aviso",
    duration: "0.9s",
    intensity: "1.08x",
    cssCode: `.pulse-23 { animation: pulse23 0.9s infinite; }
@keyframes pulse23 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,180,0,0.7); } 
  70% { transform: scale(1.08); box-shadow: 0 0 0 10px rgba(255,180,0,0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,180,0,0); } 
}`,
    htmlCode: `<button className="pulse-23">Clique</button>`
  },
  {
    id: "pulse-24",
    name: "Pulse Info",
    category: "pulse",
    description: "Pulsação informativa",
    duration: "1.5s",
    intensity: "1.04x",
    cssCode: `.pulse-24 { animation: pulse24 1.5s infinite; }
@keyframes pulse24 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,150,255,0.6); } 
  70% { transform: scale(1.04); box-shadow: 0 0 0 15px rgba(0,150,255,0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,150,255,0); } 
}`,
    htmlCode: `<button className="pulse-24">Clique</button>`
  },
  {
    id: "pulse-25",
    name: "Pulse WhatsApp",
    category: "pulse",
    description: "Pulsação verde WhatsApp",
    duration: "1.2s",
    intensity: "1.1x",
    cssCode: `.pulse-25 { animation: pulse25 1.2s infinite; }
@keyframes pulse25 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37,211,102,0.7); } 
  70% { transform: scale(1.1); box-shadow: 0 0 0 12px rgba(37,211,102,0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37,211,102,0); } 
}`,
    htmlCode: `<button className="pulse-25">Clique</button>`
  },
  {
    id: "pulse-26",
    name: "Pulse Mega",
    category: "pulse",
    description: "Pulsação mega grande",
    duration: "2s",
    intensity: "1.2x",
    cssCode: `.pulse-26 { animation: pulse26 2s infinite ease-in-out; }
@keyframes pulse26 { 
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,0,255,0.5); } 
  50% { transform: scale(1.2); box-shadow: 0 0 0 25px rgba(255,0,255,0); } 
}`,
    htmlCode: `<button className="pulse-26">Clique</button>`
  },
  {
    id: "pulse-27",
    name: "Pulse Mini",
    category: "pulse",
    description: "Pulsação mini sutil",
    duration: "0.7s",
    intensity: "1.02x",
    cssCode: `.pulse-27 { animation: pulse27 0.7s infinite; }
@keyframes pulse27 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(100,100,100,0.5); } 
  70% { transform: scale(1.02); box-shadow: 0 0 0 6px rgba(100,100,100,0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(100,100,100,0); } 
}`,
    htmlCode: `<button className="pulse-27">Clique</button>`
  },
  {
    id: "pulse-28",
    name: "Pulse Neon Mix",
    category: "pulse",
    description: "Pulsação neon multicolor",
    duration: "1.6s",
    intensity: "1.08x",
    cssCode: `.pulse-28 { animation: pulse28 1.6s infinite; }
@keyframes pulse28 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,255,255,0.6); } 
  35% { box-shadow: 0 0 0 8px rgba(255,0,255,0.3); } 
  70% { transform: scale(1.08); box-shadow: 0 0 0 16px rgba(255,255,0,0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,255,255,0); } 
}`,
    htmlCode: `<button className="pulse-28">Clique</button>`
  },
  {
    id: "pulse-29",
    name: "Pulse Intense",
    category: "pulse",
    description: "Pulsação intensa",
    duration: "0.8s",
    intensity: "1.15x",
    cssCode: `.pulse-29 { animation: pulse29 0.8s infinite; }
@keyframes pulse29 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,50,150,0.8); } 
  50% { transform: scale(1.15); box-shadow: 0 0 20px rgba(255,50,150,0.5), 0 0 0 10px rgba(255,50,150,0.3); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255,50,150,0); } 
}`,
    htmlCode: `<button className="pulse-29">Clique</button>`
  },
  {
    id: "pulse-30",
    name: "Pulse Extreme",
    category: "pulse",
    description: "Pulsação extrema máxima",
    duration: "3s",
    intensity: "1.5x",
    cssCode: `.pulse-30 { animation: pulse30 3s infinite linear; }
@keyframes pulse30 { 
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,255,0,0.4); } 
  70% { transform: scale(1.5); box-shadow: 0 0 0 30px rgba(0,255,0,0); } 
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(0,255,0,0); } 
}`,
    htmlCode: `<button className="pulse-30">Clique</button>`
  }
];

export const buttonCategories = [
  { id: "all", label: "Todos", count: 60 },
  { id: "scale", label: "Scale", count: 30 },
  { id: "pulse", label: "Pulse", count: 30 }
];
