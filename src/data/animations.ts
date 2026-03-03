export interface Animation {
  id: string;
  name: string;
  description: string;
  category: "futuristic" | "modern" | "stylish" | "vibrant" | "ui";
  cssCode: string;
  htmlExample: string;
  animationClass: string;
  previewColor?: string;
  useCaseExample?: string;
}

// Exemplos de uso por categoria
export const animationUseCasesByCategory: Record<string, string> = {
  futuristic: "Ideal para interfaces de games, dashboards tech ou sites cyberpunk.",
  modern: "Perfeito para landing pages, portfólios e apps empresariais modernos.",
  stylish: "Excelente para sites de moda, joalherias e marcas de luxo.",
  vibrant: "Ótimo para apps infantis, sites de entretenimento e redes sociais.",
  ui: "Ideal para sistemas de design, bibliotecas de componentes e interfaces profissionais.",
};

// Função para obter exemplo de uso
export function getAnimationUseCase(animation: Animation): string {
  return animation.useCaseExample || animationUseCasesByCategory[animation.category] || "Use em projetos web para adicionar dinamismo visual.";
}

export const categories = [
  { id: "all", name: "Todas" },
  { id: "futuristic", name: "Futurista" },
  { id: "modern", name: "Moderno" },
  { id: "stylish", name: "Estiloso" },
  { id: "vibrant", name: "Colorido Vibrante" },
  { id: "ui", name: "UI Ultra" },
];

export const animations: Animation[] = [
  // ==================== FUTURISTA (25 animações) ====================
  {
    id: "F-01",
    name: "Neon Cyan Pulse",
    description: "Brilho pulsante ciano intenso estilo cyberpunk.",
    category: "futuristic",
    previewColor: "#00FFFF",
    animationClass: "animate-neon-cyan-pulse",
    htmlExample: `<span class="animate-neon-cyan-pulse">NEON</span>`,
    cssCode: `@keyframes neon-cyan-pulse {
  0%, 100% { 
    text-shadow: 0 0 5px #00FFFF, 0 0 10px #00FFFF, 0 0 20px #00FFFF;
    color: #00FFFF;
  }
  50% { 
    text-shadow: 0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 40px #00FFFF, 0 0 80px #00FFFF;
    color: #FFFFFF;
  }
}
.animate-neon-cyan-pulse {
  animation: neon-cyan-pulse 2s ease-in-out infinite;
}`,
  },
  {
    id: "F-02",
    name: "Neon Magenta Flicker",
    description: "Efeito de piscar neon magenta estilo letreiro antigo.",
    category: "futuristic",
    previewColor: "#FF00FF",
    animationClass: "animate-neon-magenta-flicker",
    htmlExample: `<span class="animate-neon-magenta-flicker">FLICKER</span>`,
    cssCode: `@keyframes neon-magenta-flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 0 0 5px #FF00FF, 0 0 10px #FF00FF, 0 0 20px #FF00FF;
    opacity: 1;
  }
  20%, 24%, 55% {
    text-shadow: none;
    opacity: 0.4;
  }
}
.animate-neon-magenta-flicker {
  animation: neon-magenta-flicker 1.5s infinite;
  color: #FF00FF;
}`,
  },
  {
    id: "F-03",
    name: "Electric Blue Zap",
    description: "Descarga elétrica azul com tremor.",
    category: "futuristic",
    previewColor: "#0066FF",
    animationClass: "animate-electric-zap",
    htmlExample: `<div class="animate-electric-zap">⚡</div>`,
    cssCode: `@keyframes electric-zap {
  0%, 100% { 
    transform: translateX(0);
    filter: drop-shadow(0 0 5px #0066FF);
  }
  10%, 30%, 50%, 70%, 90% { 
    transform: translateX(-2px);
    filter: drop-shadow(0 0 15px #0066FF) drop-shadow(0 0 30px #00CCFF);
  }
  20%, 40%, 60%, 80% { 
    transform: translateX(2px);
    filter: drop-shadow(0 0 10px #0066FF);
  }
}
.animate-electric-zap {
  animation: electric-zap 0.3s ease-in-out infinite;
  color: #0066FF;
}`,
  },
  {
    id: "F-04",
    name: "Hologram Shift",
    description: "Mudança holográfica com cores prismáticas.",
    category: "futuristic",
    previewColor: "#00FF88",
    animationClass: "animate-hologram-shift",
    htmlExample: `<div class="animate-hologram-shift">HOLO</div>`,
    cssCode: `@keyframes hologram-shift {
  0% { 
    background-position: 0% 50%;
    filter: hue-rotate(0deg);
  }
  50% { 
    background-position: 100% 50%;
    filter: hue-rotate(180deg);
  }
  100% { 
    background-position: 0% 50%;
    filter: hue-rotate(360deg);
  }
}
.animate-hologram-shift {
  background: linear-gradient(90deg, #00FF88, #00FFFF, #FF00FF, #00FF88);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: hologram-shift 3s ease infinite;
}`,
  },
  {
    id: "F-05",
    name: "Matrix Rain",
    description: "Chuva de dados estilo Matrix em verde fosforescente.",
    category: "futuristic",
    previewColor: "#00FF00",
    animationClass: "animate-matrix-rain",
    htmlExample: `<div class="animate-matrix-rain">01010</div>`,
    cssCode: `@keyframes matrix-rain {
  0% { 
    transform: translateY(-100%);
    opacity: 0;
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { 
    transform: translateY(100%);
    opacity: 0;
  }
}
.animate-matrix-rain {
  animation: matrix-rain 2s linear infinite;
  color: #00FF00;
  text-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00;
  font-family: monospace;
}`,
  },
  {
    id: "F-06",
    name: "Cyber Grid Pulse",
    description: "Grade cyberpunk pulsante em azul e roxo.",
    category: "futuristic",
    previewColor: "#6600FF",
    animationClass: "animate-cyber-grid",
    htmlExample: `<div class="animate-cyber-grid"></div>`,
    cssCode: `@keyframes cyber-grid {
  0%, 100% { 
    box-shadow: inset 0 0 20px #6600FF, 0 0 10px #6600FF;
    border-color: #6600FF;
  }
  50% { 
    box-shadow: inset 0 0 40px #00FFFF, 0 0 20px #00FFFF;
    border-color: #00FFFF;
  }
}
.animate-cyber-grid {
  animation: cyber-grid 2s ease-in-out infinite;
  border: 2px solid #6600FF;
  background: linear-gradient(45deg, transparent 48%, #6600FF22 50%, transparent 52%);
  background-size: 10px 10px;
}`,
  },
  {
    id: "F-07",
    name: "Plasma Orb",
    description: "Esfera de plasma com rotação de cores quentes.",
    category: "futuristic",
    previewColor: "#FF6600",
    animationClass: "animate-plasma-orb",
    htmlExample: `<div class="animate-plasma-orb"></div>`,
    cssCode: `@keyframes plasma-orb {
  0% { 
    background: radial-gradient(circle, #FF6600 0%, #FF0066 50%, #6600FF 100%);
    transform: scale(1);
  }
  33% { 
    background: radial-gradient(circle, #FF0066 0%, #6600FF 50%, #00FFFF 100%);
    transform: scale(1.1);
  }
  66% { 
    background: radial-gradient(circle, #6600FF 0%, #00FFFF 50%, #FF6600 100%);
    transform: scale(0.95);
  }
  100% { 
    background: radial-gradient(circle, #FF6600 0%, #FF0066 50%, #6600FF 100%);
    transform: scale(1);
  }
}
.animate-plasma-orb {
  animation: plasma-orb 4s ease-in-out infinite;
  border-radius: 50%;
}`,
  },
  {
    id: "F-08",
    name: "Scanline Red",
    description: "Linha de varredura vermelha estilo terminal antigo.",
    category: "futuristic",
    previewColor: "#FF0000",
    animationClass: "animate-scanline-red",
    htmlExample: `<div class="animate-scanline-red"></div>`,
    cssCode: `@keyframes scanline-red {
  0% { 
    top: 0%;
    box-shadow: 0 0 10px #FF0000;
  }
  50% { 
    box-shadow: 0 0 20px #FF0000, 0 0 40px #FF6600;
  }
  100% { 
    top: 100%;
    box-shadow: 0 0 10px #FF0000;
  }
}
.animate-scanline-red {
  position: absolute;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, transparent, #FF0000, transparent);
  animation: scanline-red 2s linear infinite;
}`,
  },
  {
    id: "F-09",
    name: "Warp Tunnel",
    description: "Efeito de túnel de dobra espacial em azul-violeta.",
    category: "futuristic",
    previewColor: "#8800FF",
    animationClass: "animate-warp-tunnel",
    htmlExample: `<div class="animate-warp-tunnel"></div>`,
    cssCode: `@keyframes warp-tunnel {
  0% { 
    transform: perspective(500px) rotateX(0deg) scale(1);
    filter: blur(0px);
  }
  50% { 
    transform: perspective(500px) rotateX(15deg) scale(1.5);
    filter: blur(2px);
  }
  100% { 
    transform: perspective(500px) rotateX(0deg) scale(1);
    filter: blur(0px);
  }
}
.animate-warp-tunnel {
  animation: warp-tunnel 3s ease-in-out infinite;
  background: conic-gradient(from 0deg, #8800FF, #00FFFF, #8800FF);
  border-radius: 50%;
}`,
  },
  {
    id: "F-10",
    name: "Digital Rain Gold",
    description: "Chuva digital dourada premium.",
    category: "futuristic",
    previewColor: "#FFD700",
    animationClass: "animate-digital-gold",
    htmlExample: `<div class="animate-digital-gold">$$$</div>`,
    cssCode: `@keyframes digital-gold {
  0%, 100% { 
    text-shadow: 0 0 5px #FFD700, 0 0 10px #FFD700;
    transform: translateY(0);
  }
  25% { 
    text-shadow: 0 0 15px #FFD700, 0 0 30px #FFA500;
    transform: translateY(-5px);
  }
  75% { 
    text-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700;
    transform: translateY(5px);
  }
}
.animate-digital-gold {
  animation: digital-gold 2s ease-in-out infinite;
  color: #FFD700;
}`,
  },
  {
    id: "F-11",
    name: "Quantum Flicker",
    description: "Flutuação quântica com mudança de opacidade.",
    category: "futuristic",
    previewColor: "#00FFCC",
    animationClass: "animate-quantum-flicker",
    htmlExample: `<div class="animate-quantum-flicker">Q</div>`,
    cssCode: `@keyframes quantum-flicker {
  0%, 100% { 
    opacity: 1;
    transform: scale(1);
    filter: drop-shadow(0 0 5px #00FFCC);
  }
  25% { 
    opacity: 0.3;
    transform: scale(0.98);
  }
  50% { 
    opacity: 0.8;
    transform: scale(1.02);
    filter: drop-shadow(0 0 15px #00FFCC);
  }
  75% { 
    opacity: 0.5;
    transform: scale(0.99);
  }
}
.animate-quantum-flicker {
  animation: quantum-flicker 0.8s ease-in-out infinite;
  color: #00FFCC;
}`,
  },
  {
    id: "F-12",
    name: "Laser Beam",
    description: "Feixe de laser vermelho intenso.",
    category: "futuristic",
    previewColor: "#FF0033",
    animationClass: "animate-laser-beam",
    htmlExample: `<div class="animate-laser-beam"></div>`,
    cssCode: `@keyframes laser-beam {
  0% { 
    width: 0%;
    box-shadow: 0 0 10px #FF0033;
  }
  50% { 
    width: 100%;
    box-shadow: 0 0 20px #FF0033, 0 0 40px #FF0033;
  }
  100% { 
    width: 0%;
    box-shadow: 0 0 10px #FF0033;
  }
}
.animate-laser-beam {
  height: 2px;
  background: linear-gradient(90deg, transparent, #FF0033, #FF6666, #FF0033, transparent);
  animation: laser-beam 1.5s ease-in-out infinite;
}`,
  },
  {
    id: "F-13",
    name: "Chrome Reflect",
    description: "Reflexo cromado prateado metálico.",
    category: "futuristic",
    previewColor: "#C0C0C0",
    animationClass: "animate-chrome-reflect",
    htmlExample: `<div class="animate-chrome-reflect">CHROME</div>`,
    cssCode: `@keyframes chrome-reflect {
  0% { 
    background-position: -200% center;
  }
  100% { 
    background-position: 200% center;
  }
}
.animate-chrome-reflect {
  background: linear-gradient(90deg, #666, #FFF, #666, #FFF, #666);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: chrome-reflect 3s linear infinite;
}`,
  },
  {
    id: "F-14",
    name: "Tron Glow Blue",
    description: "Brilho estilo Tron em azul elétrico.",
    category: "futuristic",
    previewColor: "#00D4FF",
    animationClass: "animate-tron-blue",
    htmlExample: `<div class="animate-tron-blue"></div>`,
    cssCode: `@keyframes tron-blue {
  0%, 100% { 
    box-shadow: 0 0 5px #00D4FF, inset 0 0 5px #00D4FF;
    border-color: #00D4FF;
  }
  50% { 
    box-shadow: 0 0 20px #00D4FF, 0 0 40px #00D4FF, inset 0 0 15px #00D4FF;
    border-color: #FFFFFF;
  }
}
.animate-tron-blue {
  border: 2px solid #00D4FF;
  animation: tron-blue 2s ease-in-out infinite;
  background: transparent;
}`,
  },
  {
    id: "F-15",
    name: "Tron Glow Orange",
    description: "Brilho estilo Tron em laranja quente.",
    category: "futuristic",
    previewColor: "#FF6600",
    animationClass: "animate-tron-orange",
    htmlExample: `<div class="animate-tron-orange"></div>`,
    cssCode: `@keyframes tron-orange {
  0%, 100% { 
    box-shadow: 0 0 5px #FF6600, inset 0 0 5px #FF6600;
    border-color: #FF6600;
  }
  50% { 
    box-shadow: 0 0 20px #FF6600, 0 0 40px #FF9900, inset 0 0 15px #FF6600;
    border-color: #FFCC00;
  }
}
.animate-tron-orange {
  border: 2px solid #FF6600;
  animation: tron-orange 2s ease-in-out infinite;
  background: transparent;
}`,
  },
  {
    id: "F-16",
    name: "Binary Stream Green",
    description: "Fluxo binário em verde terminal.",
    category: "futuristic",
    previewColor: "#33FF33",
    animationClass: "animate-binary-green",
    htmlExample: `<div class="animate-binary-green">10110</div>`,
    cssCode: `@keyframes binary-green {
  0%, 100% { 
    opacity: 1;
    text-shadow: 0 0 5px #33FF33;
  }
  25% { 
    opacity: 0.7;
    text-shadow: 0 0 10px #33FF33;
  }
  50% { 
    opacity: 1;
    text-shadow: 0 0 15px #33FF33, 0 0 30px #00FF00;
  }
  75% { 
    opacity: 0.8;
    text-shadow: 0 0 8px #33FF33;
  }
}
.animate-binary-green {
  animation: binary-green 0.5s steps(4) infinite;
  color: #33FF33;
  font-family: 'Courier New', monospace;
}`,
  },
  {
    id: "F-17",
    name: "Reactor Core",
    description: "Núcleo de reator com pulsação azul-branca.",
    category: "futuristic",
    previewColor: "#00CCFF",
    animationClass: "animate-reactor-core",
    htmlExample: `<div class="animate-reactor-core"></div>`,
    cssCode: `@keyframes reactor-core {
  0%, 100% { 
    box-shadow: 0 0 20px #00CCFF, 0 0 40px #00CCFF, inset 0 0 20px #FFFFFF;
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 40px #00CCFF, 0 0 80px #00CCFF, 0 0 120px #0066FF, inset 0 0 40px #FFFFFF;
    transform: scale(1.1);
  }
}
.animate-reactor-core {
  animation: reactor-core 1.5s ease-in-out infinite;
  background: radial-gradient(circle, #FFFFFF 0%, #00CCFF 40%, #0066FF 100%);
  border-radius: 50%;
}`,
  },
  {
    id: "F-18",
    name: "Firewall Red",
    description: "Barreira de firewall em vermelho pulsante.",
    category: "futuristic",
    previewColor: "#FF3300",
    animationClass: "animate-firewall-red",
    htmlExample: `<div class="animate-firewall-red"></div>`,
    cssCode: `@keyframes firewall-red {
  0%, 100% { 
    background: linear-gradient(0deg, #FF3300 0%, transparent 50%, #FF3300 100%);
    opacity: 0.8;
  }
  50% { 
    background: linear-gradient(0deg, #FF6600 0%, #FF3300 50%, #FF6600 100%);
    opacity: 1;
  }
}
.animate-firewall-red {
  animation: firewall-red 0.5s ease-in-out infinite;
  background-size: 100% 10px;
}`,
  },
  {
    id: "F-19",
    name: "Data Packet Purple",
    description: "Pacote de dados viajando em roxo.",
    category: "futuristic",
    previewColor: "#9900FF",
    animationClass: "animate-data-packet",
    htmlExample: `<div class="animate-data-packet"></div>`,
    cssCode: `@keyframes data-packet {
  0% { 
    transform: translateX(-100%) scale(0.5);
    opacity: 0;
    background: #9900FF;
  }
  20% { 
    opacity: 1;
    transform: translateX(0%) scale(1);
  }
  80% { 
    opacity: 1;
    transform: translateX(80%) scale(1);
  }
  100% { 
    transform: translateX(100%) scale(0.5);
    opacity: 0;
    background: #FF00FF;
  }
}
.animate-data-packet {
  animation: data-packet 2s ease-in-out infinite;
  border-radius: 4px;
  box-shadow: 0 0 10px #9900FF;
}`,
  },
  {
    id: "F-20",
    name: "Neural Network",
    description: "Rede neural com pulsos multicoloridos.",
    category: "futuristic",
    previewColor: "#FF00AA",
    animationClass: "animate-neural-net",
    htmlExample: `<div class="animate-neural-net"></div>`,
    cssCode: `@keyframes neural-net {
  0% { 
    box-shadow: 0 0 5px #FF00AA, 5px 5px 10px #00FFFF, -5px -5px 10px #FFFF00;
  }
  33% { 
    box-shadow: 0 0 5px #00FFFF, 5px 5px 10px #FFFF00, -5px -5px 10px #FF00AA;
  }
  66% { 
    box-shadow: 0 0 5px #FFFF00, 5px 5px 10px #FF00AA, -5px -5px 10px #00FFFF;
  }
  100% { 
    box-shadow: 0 0 5px #FF00AA, 5px 5px 10px #00FFFF, -5px -5px 10px #FFFF00;
  }
}
.animate-neural-net {
  animation: neural-net 2s linear infinite;
  background: #111;
  border-radius: 50%;
}`,
  },
  {
    id: "F-21",
    name: "Crypto Shimmer",
    description: "Brilho de criptomoeda em dourado-verde.",
    category: "futuristic",
    previewColor: "#00FF66",
    animationClass: "animate-crypto-shimmer",
    htmlExample: `<div class="animate-crypto-shimmer">₿</div>`,
    cssCode: `@keyframes crypto-shimmer {
  0%, 100% { 
    color: #FFD700;
    text-shadow: 0 0 10px #FFD700;
  }
  50% { 
    color: #00FF66;
    text-shadow: 0 0 20px #00FF66, 0 0 40px #00FF66;
  }
}
.animate-crypto-shimmer {
  animation: crypto-shimmer 3s ease-in-out infinite;
  font-weight: bold;
}`,
  },
  {
    id: "F-22",
    name: "Glitch RGB Split",
    description: "Glitch com separação de canais RGB.",
    category: "futuristic",
    previewColor: "#FFFFFF",
    animationClass: "animate-rgb-split",
    htmlExample: `<div class="animate-rgb-split">SPLIT</div>`,
    cssCode: `@keyframes rgb-split {
  0%, 100% { 
    text-shadow: -2px 0 #FF0000, 2px 0 #00FFFF;
    transform: translate(0);
  }
  25% { 
    text-shadow: 2px 0 #FF0000, -2px 0 #00FFFF;
    transform: translate(-1px, 1px);
  }
  50% { 
    text-shadow: -1px -1px #FF0000, 1px 1px #00FFFF;
    transform: translate(1px, -1px);
  }
  75% { 
    text-shadow: 1px 2px #FF0000, -1px -2px #00FFFF;
    transform: translate(-1px, 0);
  }
}
.animate-rgb-split {
  animation: rgb-split 0.4s steps(2) infinite;
  color: #FFFFFF;
}`,
  },
  {
    id: "F-23",
    name: "Synthwave Sun",
    description: "Sol synthwave com gradiente rosa-laranja.",
    category: "futuristic",
    previewColor: "#FF6B9D",
    animationClass: "animate-synthwave-sun",
    htmlExample: `<div class="animate-synthwave-sun"></div>`,
    cssCode: `@keyframes synthwave-sun {
  0%, 100% { 
    box-shadow: 0 0 20px #FF6B9D, 0 0 40px #FF6B9D;
    background: linear-gradient(180deg, #FF6B9D 0%, #FF8C42 100%);
  }
  50% { 
    box-shadow: 0 0 40px #FF8C42, 0 0 80px #FF6B9D;
    background: linear-gradient(180deg, #FF8C42 0%, #FFD93D 100%);
  }
}
.animate-synthwave-sun {
  animation: synthwave-sun 4s ease-in-out infinite;
  border-radius: 50%;
  clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
}`,
  },
  {
    id: "F-24",
    name: "Vaporwave Grid",
    description: "Grade vaporwave com perspectiva infinita.",
    category: "futuristic",
    previewColor: "#E040FB",
    animationClass: "animate-vaporwave-grid",
    htmlExample: `<div class="animate-vaporwave-grid"></div>`,
    cssCode: `@keyframes vaporwave-grid {
  0% { 
    background-position: 0 0;
    border-color: #E040FB;
  }
  100% { 
    background-position: 0 50px;
    border-color: #00BCD4;
  }
}
.animate-vaporwave-grid {
  background: linear-gradient(#E040FB 1px, transparent 1px),
              linear-gradient(90deg, #E040FB 1px, transparent 1px);
  background-size: 20px 20px;
  animation: vaporwave-grid 1s linear infinite;
  border: 2px solid #E040FB;
}`,
  },
  {
    id: "F-25",
    name: "Cyberpunk Yellow",
    description: "Aviso cyberpunk em amarelo industrial.",
    category: "futuristic",
    previewColor: "#FCE205",
    animationClass: "animate-cyber-yellow",
    htmlExample: `<div class="animate-cyber-yellow">!</div>`,
    cssCode: `@keyframes cyber-yellow {
  0%, 100% { 
    background: repeating-linear-gradient(45deg, #FCE205, #FCE205 10px, #000 10px, #000 20px);
    color: #000;
  }
  50% { 
    background: repeating-linear-gradient(45deg, #000, #000 10px, #FCE205 10px, #FCE205 20px);
    color: #FCE205;
  }
}
.animate-cyber-yellow {
  animation: cyber-yellow 1s steps(1) infinite;
  font-weight: bold;
  padding: 10px;
}`,
  },

  // ==================== MODERNO (25 animações) ====================
  {
    id: "M-01",
    name: "Smooth Scale Mint",
    description: "Escala suave com tom menta refrescante.",
    category: "modern",
    previewColor: "#3EB489",
    animationClass: "animate-scale-mint",
    htmlExample: `<button class="animate-scale-mint">Hover</button>`,
    cssCode: `.animate-scale-mint {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: #3EB489;
  color: white;
}
.animate-scale-mint:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 25px rgba(62, 180, 137, 0.4);
}`,
  },
  {
    id: "M-02",
    name: "Lift Shadow Coral",
    description: "Elevação com sombra coral elegante.",
    category: "modern",
    previewColor: "#FF6F61",
    animationClass: "animate-lift-coral",
    htmlExample: `<div class="animate-lift-coral">Card</div>`,
    cssCode: `.animate-lift-coral {
  transition: all 0.3s ease;
  background: white;
  border: 1px solid #FF6F61;
}
.animate-lift-coral:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px rgba(255, 111, 97, 0.3);
  border-color: #FF6F61;
}`,
  },
  {
    id: "M-03",
    name: "Underline Grow Navy",
    description: "Sublinhado crescente em azul marinho.",
    category: "modern",
    previewColor: "#1E3A5F",
    animationClass: "animate-underline-navy",
    htmlExample: `<a class="animate-underline-navy">Link</a>`,
    cssCode: `.animate-underline-navy {
  position: relative;
  color: #1E3A5F;
}
.animate-underline-navy::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #1E3A5F;
  transition: all 0.3s ease;
}
.animate-underline-navy:hover::after {
  width: 100%;
  left: 0;
}`,
  },
  {
    id: "M-04",
    name: "Fade Slide Lavender",
    description: "Entrada com fade e slide em lavanda.",
    category: "modern",
    previewColor: "#E6E6FA",
    animationClass: "animate-fade-lavender",
    htmlExample: `<div class="animate-fade-lavender">Content</div>`,
    cssCode: `@keyframes fade-lavender {
  0% { 
    opacity: 0;
    transform: translateY(20px);
  }
  100% { 
    opacity: 1;
    transform: translateY(0);
    background: linear-gradient(135deg, #E6E6FA, #DDA0DD);
  }
}
.animate-fade-lavender {
  animation: fade-lavender 0.5s ease-out forwards;
}`,
  },
  {
    id: "M-05",
    name: "Bounce Soft Peach",
    description: "Micro bounce suave em pêssego.",
    category: "modern",
    previewColor: "#FFDAB9",
    animationClass: "animate-bounce-peach",
    htmlExample: `<button class="animate-bounce-peach">🔔</button>`,
    cssCode: `@keyframes bounce-peach {
  0%, 100% { 
    transform: translateY(0);
    background: #FFDAB9;
  }
  50% { 
    transform: translateY(-5px);
    background: #FFE4C4;
    box-shadow: 0 5px 15px rgba(255, 218, 185, 0.5);
  }
}
.animate-bounce-peach {
  animation: bounce-peach 0.6s ease-in-out infinite;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
}`,
  },
  {
    id: "M-06",
    name: "Rotate Subtle Slate",
    description: "Rotação sutil em cinza ardósia.",
    category: "modern",
    previewColor: "#708090",
    animationClass: "animate-rotate-slate",
    htmlExample: `<div class="animate-rotate-slate">⚙️</div>`,
    cssCode: `.animate-rotate-slate {
  transition: transform 0.4s ease;
  color: #708090;
}
.animate-rotate-slate:hover {
  transform: rotate(90deg);
  color: #2F4F4F;
}`,
  },
  {
    id: "M-07",
    name: "Border Pulse Sky",
    description: "Borda pulsante em azul céu.",
    category: "modern",
    previewColor: "#87CEEB",
    animationClass: "animate-border-sky",
    htmlExample: `<input class="animate-border-sky" />`,
    cssCode: `@keyframes border-sky {
  0%, 100% { 
    border-color: #87CEEB;
    box-shadow: 0 0 0 0 rgba(135, 206, 235, 0.4);
  }
  50% { 
    border-color: #00BFFF;
    box-shadow: 0 0 0 4px rgba(135, 206, 235, 0);
  }
}
.animate-border-sky {
  border: 2px solid #87CEEB;
  animation: border-sky 2s ease-in-out infinite;
  padding: 10px;
  border-radius: 6px;
  outline: none;
}`,
  },
  {
    id: "M-08",
    name: "Glow Button Teal",
    description: "Botão com glow em verde-azulado.",
    category: "modern",
    previewColor: "#008080",
    animationClass: "animate-glow-teal",
    htmlExample: `<button class="animate-glow-teal">Action</button>`,
    cssCode: `.animate-glow-teal {
  background: #008080;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.3s ease;
}
.animate-glow-teal:hover {
  box-shadow: 0 0 20px rgba(0, 128, 128, 0.6), 0 0 40px rgba(0, 128, 128, 0.4);
  transform: translateY(-2px);
}`,
  },
  {
    id: "M-09",
    name: "Shimmer Pearl",
    description: "Brilho deslizante perolado.",
    category: "modern",
    previewColor: "#F5F5F5",
    animationClass: "animate-shimmer-pearl",
    htmlExample: `<div class="animate-shimmer-pearl">Loading</div>`,
    cssCode: `@keyframes shimmer-pearl {
  0% { 
    background-position: -200% 0;
  }
  100% { 
    background-position: 200% 0;
  }
}
.animate-shimmer-pearl {
  background: linear-gradient(90deg, #F5F5F5 25%, #FFFFFF 50%, #F5F5F5 75%);
  background-size: 200% 100%;
  animation: shimmer-pearl 1.5s ease-in-out infinite;
  border-radius: 4px;
}`,
  },
  {
    id: "M-10",
    name: "Pop Elastic Rose",
    description: "Pop elástico em rosa suave.",
    category: "modern",
    previewColor: "#FFB6C1",
    animationClass: "animate-pop-rose",
    htmlExample: `<div class="animate-pop-rose">✓</div>`,
    cssCode: `@keyframes pop-rose {
  0% { 
    transform: scale(0);
    background: #FFB6C1;
  }
  50% { 
    transform: scale(1.2);
  }
  100% { 
    transform: scale(1);
    background: #FF69B4;
  }
}
.animate-pop-rose {
  animation: pop-rose 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}`,
  },
  {
    id: "M-11",
    name: "Slide Right Sage",
    description: "Deslize para direita em verde sálvia.",
    category: "modern",
    previewColor: "#9DC183",
    animationClass: "animate-slide-sage",
    htmlExample: `<div class="animate-slide-sage">→</div>`,
    cssCode: `@keyframes slide-sage {
  0% { 
    transform: translateX(-100%);
    opacity: 0;
    background: #9DC183;
  }
  100% { 
    transform: translateX(0);
    opacity: 1;
    background: #7CB342;
  }
}
.animate-slide-sage {
  animation: slide-sage 0.5s ease-out forwards;
}`,
  },
  {
    id: "M-12",
    name: "Blur Enter Sand",
    description: "Entrada com blur em tom areia.",
    category: "modern",
    previewColor: "#C2B280",
    animationClass: "animate-blur-sand",
    htmlExample: `<div class="animate-blur-sand">Content</div>`,
    cssCode: `@keyframes blur-sand {
  0% { 
    filter: blur(10px);
    opacity: 0;
    background: #C2B280;
  }
  100% { 
    filter: blur(0);
    opacity: 1;
    background: #D2B48C;
  }
}
.animate-blur-sand {
  animation: blur-sand 0.6s ease-out forwards;
  padding: 20px;
  border-radius: 8px;
}`,
  },
  {
    id: "M-13",
    name: "Flip Card Indigo",
    description: "Flip de card em índigo profundo.",
    category: "modern",
    previewColor: "#4B0082",
    animationClass: "animate-flip-indigo",
    htmlExample: `<div class="animate-flip-indigo">Flip</div>`,
    cssCode: `@keyframes flip-indigo {
  0% { 
    transform: perspective(600px) rotateY(0deg);
    background: #4B0082;
  }
  100% { 
    transform: perspective(600px) rotateY(180deg);
    background: #6A5ACD;
  }
}
.animate-flip-indigo {
  animation: flip-indigo 0.6s ease-in-out;
  color: white;
  padding: 20px;
  border-radius: 8px;
}`,
  },
  {
    id: "M-14",
    name: "Swing Bell Amber",
    description: "Balanço de sino em âmbar dourado.",
    category: "modern",
    previewColor: "#FFBF00",
    animationClass: "animate-swing-amber",
    htmlExample: `<div class="animate-swing-amber">🔔</div>`,
    cssCode: `@keyframes swing-amber {
  0%, 100% { 
    transform: rotate(0deg);
    color: #FFBF00;
  }
  25% { 
    transform: rotate(15deg);
  }
  50% { 
    transform: rotate(-15deg);
    color: #FFD700;
  }
  75% { 
    transform: rotate(10deg);
  }
}
.animate-swing-amber {
  animation: swing-amber 1s ease-in-out infinite;
  transform-origin: top center;
  display: inline-block;
}`,
  },
  {
    id: "M-15",
    name: "Morph Button Berry",
    description: "Morfismo de botão em tom berry.",
    category: "modern",
    previewColor: "#8E4585",
    animationClass: "animate-morph-berry",
    htmlExample: `<button class="animate-morph-berry">Submit</button>`,
    cssCode: `.animate-morph-berry {
  background: #8E4585;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.4s ease;
}
.animate-morph-berry:hover {
  border-radius: 25px;
  background: #702963;
  padding: 12px 32px;
}`,
  },
  {
    id: "M-16",
    name: "Ripple Ocean",
    description: "Efeito ripple em azul oceano.",
    category: "modern",
    previewColor: "#006994",
    animationClass: "animate-ripple-ocean",
    htmlExample: `<button class="animate-ripple-ocean">Click</button>`,
    cssCode: `@keyframes ripple-ocean {
  0% { 
    box-shadow: 0 0 0 0 rgba(0, 105, 148, 0.4);
  }
  100% { 
    box-shadow: 0 0 0 20px rgba(0, 105, 148, 0);
  }
}
.animate-ripple-ocean {
  background: #006994;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  animation: ripple-ocean 1.5s ease-out infinite;
}`,
  },
  {
    id: "M-17",
    name: "Gradient Shift Sunset",
    description: "Mudança de gradiente pôr do sol.",
    category: "modern",
    previewColor: "#FF7F50",
    animationClass: "animate-gradient-sunset",
    htmlExample: `<div class="animate-gradient-sunset">Sunset</div>`,
    cssCode: `@keyframes gradient-sunset {
  0% { 
    background-position: 0% 50%;
  }
  50% { 
    background-position: 100% 50%;
  }
  100% { 
    background-position: 0% 50%;
  }
}
.animate-gradient-sunset {
  background: linear-gradient(270deg, #FF7F50, #FF6347, #FF4500, #FFD700);
  background-size: 400% 400%;
  animation: gradient-sunset 4s ease infinite;
  padding: 20px;
  border-radius: 8px;
  color: white;
}`,
  },
  {
    id: "M-18",
    name: "Typewriter Charcoal",
    description: "Efeito máquina de escrever em carvão.",
    category: "modern",
    previewColor: "#36454F",
    animationClass: "animate-typewriter-charcoal",
    htmlExample: `<span class="animate-typewriter-charcoal">Typing...</span>`,
    cssCode: `@keyframes typewriter-charcoal {
  0% { 
    width: 0;
    border-right: 2px solid #36454F;
  }
  100% { 
    width: 100%;
    border-right: 2px solid transparent;
  }
}
.animate-typewriter-charcoal {
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter-charcoal 3s steps(20) forwards;
  color: #36454F;
  font-family: monospace;
}`,
  },
  {
    id: "M-19",
    name: "Heartbeat Crimson",
    description: "Batimento cardíaco em carmesim.",
    category: "modern",
    previewColor: "#DC143C",
    animationClass: "animate-heartbeat-crimson",
    htmlExample: `<div class="animate-heartbeat-crimson">❤</div>`,
    cssCode: `@keyframes heartbeat-crimson {
  0%, 100% { 
    transform: scale(1);
    color: #DC143C;
  }
  15% { 
    transform: scale(1.15);
  }
  30% { 
    transform: scale(1);
  }
  45% { 
    transform: scale(1.1);
    color: #FF1744;
  }
  60% { 
    transform: scale(1);
  }
}
.animate-heartbeat-crimson {
  animation: heartbeat-crimson 1.5s ease-in-out infinite;
  display: inline-block;
}`,
  },
  {
    id: "M-20",
    name: "Wobble Olive",
    description: "Oscilação divertida em verde oliva.",
    category: "modern",
    previewColor: "#808000",
    animationClass: "animate-wobble-olive",
    htmlExample: `<div class="animate-wobble-olive">Wobble</div>`,
    cssCode: `@keyframes wobble-olive {
  0%, 100% { 
    transform: translateX(0) rotate(0deg);
    background: #808000;
  }
  15% { 
    transform: translateX(-10px) rotate(-5deg);
  }
  30% { 
    transform: translateX(8px) rotate(3deg);
    background: #6B8E23;
  }
  45% { 
    transform: translateX(-6px) rotate(-3deg);
  }
  60% { 
    transform: translateX(4px) rotate(2deg);
  }
  75% { 
    transform: translateX(-2px) rotate(-1deg);
  }
}
.animate-wobble-olive {
  animation: wobble-olive 1s ease-in-out;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
}`,
  },
  {
    id: "M-21",
    name: "Pulse Ring Azure",
    description: "Anel pulsante em azul azure.",
    category: "modern",
    previewColor: "#007FFF",
    animationClass: "animate-pulse-azure",
    htmlExample: `<div class="animate-pulse-azure"></div>`,
    cssCode: `@keyframes pulse-azure {
  0% { 
    transform: scale(1);
    opacity: 1;
    border-color: #007FFF;
  }
  100% { 
    transform: scale(1.5);
    opacity: 0;
    border-color: #00BFFF;
  }
}
.animate-pulse-azure {
  border: 3px solid #007FFF;
  border-radius: 50%;
  animation: pulse-azure 1.5s ease-out infinite;
}`,
  },
  {
    id: "M-22",
    name: "Jello Tangerine",
    description: "Efeito gelatina em tangerina.",
    category: "modern",
    previewColor: "#FF9966",
    animationClass: "animate-jello-tangerine",
    htmlExample: `<button class="animate-jello-tangerine">Jello</button>`,
    cssCode: `@keyframes jello-tangerine {
  0%, 100% { 
    transform: skewX(0deg);
    background: #FF9966;
  }
  25% { 
    transform: skewX(-10deg);
  }
  50% { 
    transform: skewX(8deg);
    background: #FF7F50;
  }
  75% { 
    transform: skewX(-4deg);
  }
}
.animate-jello-tangerine {
  animation: jello-tangerine 0.8s ease-in-out;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
}`,
  },
  {
    id: "M-23",
    name: "Tada Emerald",
    description: "Animação tada em esmeralda.",
    category: "modern",
    previewColor: "#50C878",
    animationClass: "animate-tada-emerald",
    htmlExample: `<div class="animate-tada-emerald">🎉</div>`,
    cssCode: `@keyframes tada-emerald {
  0%, 100% { 
    transform: scale(1) rotate(0deg);
    background: #50C878;
  }
  10%, 20% { 
    transform: scale(0.9) rotate(-3deg);
  }
  30%, 50%, 70%, 90% { 
    transform: scale(1.1) rotate(3deg);
    background: #3CB371;
  }
  40%, 60%, 80% { 
    transform: scale(1.1) rotate(-3deg);
  }
}
.animate-tada-emerald {
  animation: tada-emerald 1s ease-in-out;
  color: white;
  padding: 20px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}`,
  },
  {
    id: "M-24",
    name: "Rubber Band Plum",
    description: "Efeito elástico em ameixa.",
    category: "modern",
    previewColor: "#DDA0DD",
    animationClass: "animate-rubber-plum",
    htmlExample: `<button class="animate-rubber-plum">Stretch</button>`,
    cssCode: `@keyframes rubber-plum {
  0%, 100% { 
    transform: scaleX(1) scaleY(1);
    background: #DDA0DD;
  }
  30% { 
    transform: scaleX(1.2) scaleY(0.8);
  }
  40% { 
    transform: scaleX(0.85) scaleY(1.15);
    background: #DA70D6;
  }
  50% { 
    transform: scaleX(1.1) scaleY(0.9);
  }
  65% { 
    transform: scaleX(0.95) scaleY(1.05);
  }
  75% { 
    transform: scaleX(1.03) scaleY(0.97);
  }
}
.animate-rubber-plum {
  animation: rubber-plum 0.8s ease;
  color: #4B0082;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
}`,
  },
  {
    id: "M-25",
    name: "Zoom Fade Mauve",
    description: "Zoom com fade em malva.",
    category: "modern",
    previewColor: "#E0B0FF",
    animationClass: "animate-zoom-mauve",
    htmlExample: `<div class="animate-zoom-mauve">Modal</div>`,
    cssCode: `@keyframes zoom-mauve {
  0% { 
    transform: scale(0.8);
    opacity: 0;
    background: #E0B0FF;
  }
  100% { 
    transform: scale(1);
    opacity: 1;
    background: #9966CC;
  }
}
.animate-zoom-mauve {
  animation: zoom-mauve 0.3s ease-out forwards;
  color: white;
  padding: 20px;
  border-radius: 12px;
}`,
  },

  // ==================== ESTILOSO (25 animações) ====================
  {
    id: "S-01",
    name: "Elegant Fade Gold",
    description: "Fade elegante em dourado luxuoso.",
    category: "stylish",
    previewColor: "#D4AF37",
    animationClass: "animate-fade-gold",
    htmlExample: `<div class="animate-fade-gold">Luxury</div>`,
    cssCode: `@keyframes fade-gold {
  0% { 
    opacity: 0;
    color: #D4AF37;
    text-shadow: none;
  }
  100% { 
    opacity: 1;
    color: #FFD700;
    text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  }
}
.animate-fade-gold {
  animation: fade-gold 1s ease-out forwards;
  font-weight: 600;
}`,
  },
  {
    id: "S-02",
    name: "Silk Shimmer Silver",
    description: "Brilho sedoso prateado premium.",
    category: "stylish",
    previewColor: "#C0C0C0",
    animationClass: "animate-silk-silver",
    htmlExample: `<div class="animate-silk-silver">Premium</div>`,
    cssCode: `@keyframes silk-silver {
  0% { 
    background-position: -200% 0;
  }
  100% { 
    background-position: 200% 0;
  }
}
.animate-silk-silver {
  background: linear-gradient(90deg, #C0C0C0 0%, #FFFFFF 25%, #C0C0C0 50%, #FFFFFF 75%, #C0C0C0 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: silk-silver 3s linear infinite;
}`,
  },
  {
    id: "S-03",
    name: "Rose Gold Glow",
    description: "Brilho em rose gold sofisticado.",
    category: "stylish",
    previewColor: "#B76E79",
    animationClass: "animate-rosegold-glow",
    htmlExample: `<div class="animate-rosegold-glow">Elegant</div>`,
    cssCode: `@keyframes rosegold-glow {
  0%, 100% { 
    box-shadow: 0 0 5px #B76E79, 0 0 10px #B76E79;
    border-color: #B76E79;
  }
  50% { 
    box-shadow: 0 0 20px #E8B4B8, 0 0 40px #B76E79;
    border-color: #E8B4B8;
  }
}
.animate-rosegold-glow {
  border: 2px solid #B76E79;
  animation: rosegold-glow 2s ease-in-out infinite;
  padding: 15px 30px;
  border-radius: 30px;
  background: transparent;
  color: #B76E79;
}`,
  },
  {
    id: "S-04",
    name: "Champagne Bubbles",
    description: "Bolhas efervescentes em champagne.",
    category: "stylish",
    previewColor: "#F7E7CE",
    animationClass: "animate-champagne",
    htmlExample: `<div class="animate-champagne">🥂</div>`,
    cssCode: `@keyframes champagne {
  0% { 
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  100% { 
    transform: translateY(-20px) scale(0.8);
    opacity: 0;
  }
}
.animate-champagne {
  animation: champagne 2s ease-out infinite;
  color: #F7E7CE;
  text-shadow: 0 0 10px #D4AF37;
}`,
  },
  {
    id: "S-05",
    name: "Velvet Purple",
    description: "Textura aveludada em roxo profundo.",
    category: "stylish",
    previewColor: "#4A0E4E",
    animationClass: "animate-velvet-purple",
    htmlExample: `<div class="animate-velvet-purple">Velvet</div>`,
    cssCode: `@keyframes velvet-purple {
  0%, 100% { 
    background: linear-gradient(135deg, #4A0E4E 0%, #6B2D75 100%);
  }
  50% { 
    background: linear-gradient(135deg, #6B2D75 0%, #8B4789 100%);
  }
}
.animate-velvet-purple {
  animation: velvet-purple 3s ease-in-out infinite;
  color: #F5F5F5;
  padding: 20px 40px;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 3px;
}`,
  },
  {
    id: "S-06",
    name: "Pearl Iridescent",
    description: "Iridescência de pérola multicolor.",
    category: "stylish",
    previewColor: "#FDEEF4",
    animationClass: "animate-pearl-iridescent",
    htmlExample: `<div class="animate-pearl-iridescent">Pearl</div>`,
    cssCode: `@keyframes pearl-iridescent {
  0% { 
    background: linear-gradient(45deg, #FDEEF4, #E8F5E8, #E8F0FA);
    filter: hue-rotate(0deg);
  }
  50% { 
    background: linear-gradient(45deg, #E8F0FA, #FDEEF4, #FFF9E8);
    filter: hue-rotate(30deg);
  }
  100% { 
    background: linear-gradient(45deg, #FDEEF4, #E8F5E8, #E8F0FA);
    filter: hue-rotate(0deg);
  }
}
.animate-pearl-iridescent {
  animation: pearl-iridescent 4s ease-in-out infinite;
  color: #333;
  padding: 20px;
  border-radius: 50px;
}`,
  },
  {
    id: "S-07",
    name: "Marble Flow",
    description: "Fluxo de mármore em cinza e branco.",
    category: "stylish",
    previewColor: "#E8E8E8",
    animationClass: "animate-marble-flow",
    htmlExample: `<div class="animate-marble-flow">Marble</div>`,
    cssCode: `@keyframes marble-flow {
  0% { 
    background-position: 0% 0%;
  }
  50% { 
    background-position: 100% 100%;
  }
  100% { 
    background-position: 0% 0%;
  }
}
.animate-marble-flow {
  background: linear-gradient(135deg, #E8E8E8 25%, #FFFFFF 25%, #FFFFFF 50%, #E8E8E8 50%, #E8E8E8 75%, #D3D3D3 75%);
  background-size: 40px 40px;
  animation: marble-flow 5s linear infinite;
  color: #333;
  padding: 20px;
  border-radius: 8px;
}`,
  },
  {
    id: "S-08",
    name: "Bronze Patina",
    description: "Pátina de bronze envelhecido.",
    category: "stylish",
    previewColor: "#CD7F32",
    animationClass: "animate-bronze-patina",
    htmlExample: `<div class="animate-bronze-patina">Antique</div>`,
    cssCode: `@keyframes bronze-patina {
  0%, 100% { 
    color: #CD7F32;
    text-shadow: 1px 1px 2px #8B4513;
  }
  50% { 
    color: #B87333;
    text-shadow: 2px 2px 4px #654321, 0 0 10px rgba(205, 127, 50, 0.3);
  }
}
.animate-bronze-patina {
  animation: bronze-patina 3s ease-in-out infinite;
  font-weight: bold;
}`,
  },
  {
    id: "S-09",
    name: "Sapphire Depth",
    description: "Profundidade de safira azul royal.",
    category: "stylish",
    previewColor: "#0F52BA",
    animationClass: "animate-sapphire",
    htmlExample: `<div class="animate-sapphire">Sapphire</div>`,
    cssCode: `@keyframes sapphire {
  0%, 100% { 
    background: linear-gradient(180deg, #0F52BA 0%, #1E3A8A 100%);
    box-shadow: 0 5px 20px rgba(15, 82, 186, 0.4);
  }
  50% { 
    background: linear-gradient(180deg, #1E3A8A 0%, #3B82F6 100%);
    box-shadow: 0 10px 40px rgba(15, 82, 186, 0.6);
  }
}
.animate-sapphire {
  animation: sapphire 3s ease-in-out infinite;
  color: white;
  padding: 20px 40px;
  border-radius: 8px;
}`,
  },
  {
    id: "S-10",
    name: "Ruby Shine",
    description: "Brilho de rubi vermelho intenso.",
    category: "stylish",
    previewColor: "#E0115F",
    animationClass: "animate-ruby-shine",
    htmlExample: `<div class="animate-ruby-shine">Ruby</div>`,
    cssCode: `@keyframes ruby-shine {
  0% { 
    background-position: -100% 0;
  }
  100% { 
    background-position: 200% 0;
  }
}
.animate-ruby-shine {
  background: linear-gradient(90deg, #E0115F 0%, #FF1744 25%, #FFFFFF 50%, #FF1744 75%, #E0115F 100%);
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ruby-shine 2s linear infinite;
  font-weight: bold;
}`,
  },
  {
    id: "S-11",
    name: "Emerald Glow",
    description: "Brilho esmeralda verde profundo.",
    category: "stylish",
    previewColor: "#046307",
    animationClass: "animate-emerald-glow",
    htmlExample: `<div class="animate-emerald-glow">Emerald</div>`,
    cssCode: `@keyframes emerald-glow {
  0%, 100% { 
    box-shadow: 0 0 10px #046307, inset 0 0 5px rgba(4, 99, 7, 0.3);
    background: linear-gradient(135deg, #046307 0%, #0A8A0D 100%);
  }
  50% { 
    box-shadow: 0 0 30px #0A8A0D, 0 0 60px rgba(4, 99, 7, 0.5), inset 0 0 10px rgba(10, 138, 13, 0.5);
    background: linear-gradient(135deg, #0A8A0D 0%, #12B012 100%);
  }
}
.animate-emerald-glow {
  animation: emerald-glow 2.5s ease-in-out infinite;
  color: white;
  padding: 20px 40px;
  border-radius: 8px;
}`,
  },
  {
    id: "S-12",
    name: "Onyx Depth",
    description: "Profundidade ônix preto sofisticado.",
    category: "stylish",
    previewColor: "#353839",
    animationClass: "animate-onyx-depth",
    htmlExample: `<div class="animate-onyx-depth">Onyx</div>`,
    cssCode: `@keyframes onyx-depth {
  0%, 100% { 
    background: linear-gradient(145deg, #353839 0%, #1A1A1A 100%);
    box-shadow: 5px 5px 15px #0D0D0D, -5px -5px 15px #4D4D4D;
  }
  50% { 
    background: linear-gradient(145deg, #4D4D4D 0%, #2A2A2A 100%);
    box-shadow: 8px 8px 20px #0D0D0D, -8px -8px 20px #5A5A5A;
  }
}
.animate-onyx-depth {
  animation: onyx-depth 3s ease-in-out infinite;
  color: #C0C0C0;
  padding: 20px 40px;
  border-radius: 12px;
}`,
  },
  {
    id: "S-13",
    name: "Ivory Elegance",
    description: "Elegância marfim clássica.",
    category: "stylish",
    previewColor: "#FFFFF0",
    animationClass: "animate-ivory-elegance",
    htmlExample: `<div class="animate-ivory-elegance">Ivory</div>`,
    cssCode: `@keyframes ivory-elegance {
  0%, 100% { 
    background: #FFFFF0;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  50% { 
    background: #FAF0E6;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
}
.animate-ivory-elegance {
  animation: ivory-elegance 3s ease-in-out infinite;
  color: #8B4513;
  padding: 20px 40px;
  border-radius: 8px;
  border: 1px solid #DEB887;
}`,
  },
  {
    id: "S-14",
    name: "Amethyst Pulse",
    description: "Pulsação de ametista violeta.",
    category: "stylish",
    previewColor: "#9966CC",
    animationClass: "animate-amethyst-pulse",
    htmlExample: `<div class="animate-amethyst-pulse">Amethyst</div>`,
    cssCode: `@keyframes amethyst-pulse {
  0%, 100% { 
    transform: scale(1);
    background: #9966CC;
    box-shadow: 0 0 10px #9966CC;
  }
  50% { 
    transform: scale(1.05);
    background: #BA55D3;
    box-shadow: 0 0 30px #BA55D3, 0 0 60px #9966CC;
  }
}
.animate-amethyst-pulse {
  animation: amethyst-pulse 2s ease-in-out infinite;
  color: white;
  padding: 20px;
  border-radius: 50%;
}`,
  },
  {
    id: "S-15",
    name: "Copper Warmth",
    description: "Calor de cobre acolhedor.",
    category: "stylish",
    previewColor: "#B87333",
    animationClass: "animate-copper-warmth",
    htmlExample: `<div class="animate-copper-warmth">Copper</div>`,
    cssCode: `@keyframes copper-warmth {
  0%, 100% { 
    background: linear-gradient(135deg, #B87333 0%, #DA8A67 100%);
  }
  50% { 
    background: linear-gradient(135deg, #DA8A67 0%, #CD7F32 100%);
  }
}
.animate-copper-warmth {
  animation: copper-warmth 4s ease-in-out infinite;
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}`,
  },
  {
    id: "S-16",
    name: "Topaz Gleam",
    description: "Fulgor de topázio amarelo.",
    category: "stylish",
    previewColor: "#FFC87C",
    animationClass: "animate-topaz-gleam",
    htmlExample: `<div class="animate-topaz-gleam">Topaz</div>`,
    cssCode: `@keyframes topaz-gleam {
  0% { 
    filter: brightness(1);
    color: #FFC87C;
  }
  50% { 
    filter: brightness(1.3);
    color: #FFD700;
    text-shadow: 0 0 20px #FFC87C;
  }
  100% { 
    filter: brightness(1);
    color: #FFC87C;
  }
}
.animate-topaz-gleam {
  animation: topaz-gleam 2s ease-in-out infinite;
  font-weight: bold;
}`,
  },
  {
    id: "S-17",
    name: "Malachite Swirl",
    description: "Redemoinho de malaquita verde.",
    category: "stylish",
    previewColor: "#0BDA51",
    animationClass: "animate-malachite-swirl",
    htmlExample: `<div class="animate-malachite-swirl">Malachite</div>`,
    cssCode: `@keyframes malachite-swirl {
  0% { 
    background: linear-gradient(0deg, #0BDA51 0%, #046307 50%, #0BDA51 100%);
  }
  100% { 
    background: linear-gradient(360deg, #0BDA51 0%, #046307 50%, #0BDA51 100%);
  }
}
.animate-malachite-swirl {
  animation: malachite-swirl 3s linear infinite;
  color: white;
  padding: 20px;
  border-radius: 8px;
}`,
  },
  {
    id: "S-18",
    name: "Opal Flash",
    description: "Flash de opala multicolorida.",
    category: "stylish",
    previewColor: "#A8C3BC",
    animationClass: "animate-opal-flash",
    htmlExample: `<div class="animate-opal-flash">Opal</div>`,
    cssCode: `@keyframes opal-flash {
  0% { 
    background: #A8C3BC;
    filter: hue-rotate(0deg);
  }
  25% { 
    background: #E6C7C7;
    filter: hue-rotate(60deg);
  }
  50% { 
    background: #C7D1E6;
    filter: hue-rotate(120deg);
  }
  75% { 
    background: #D1E6C7;
    filter: hue-rotate(180deg);
  }
  100% { 
    background: #A8C3BC;
    filter: hue-rotate(360deg);
  }
}
.animate-opal-flash {
  animation: opal-flash 4s ease-in-out infinite;
  color: #333;
  padding: 20px;
  border-radius: 50px;
}`,
  },
  {
    id: "S-19",
    name: "Obsidian Edge",
    description: "Borda afiada de obsidiana.",
    category: "stylish",
    previewColor: "#0B1215",
    animationClass: "animate-obsidian-edge",
    htmlExample: `<div class="animate-obsidian-edge">Obsidian</div>`,
    cssCode: `@keyframes obsidian-edge {
  0%, 100% { 
    box-shadow: 0 0 0 2px #0B1215, 0 0 10px rgba(11, 18, 21, 0.5);
  }
  50% { 
    box-shadow: 0 0 0 4px #2C3E50, 0 0 20px rgba(44, 62, 80, 0.7);
  }
}
.animate-obsidian-edge {
  animation: obsidian-edge 2s ease-in-out infinite;
  background: linear-gradient(135deg, #0B1215 0%, #1A252F 100%);
  color: #7F8C8D;
  padding: 20px 40px;
  border-radius: 4px;
}`,
  },
  {
    id: "S-20",
    name: "Aquamarine Wave",
    description: "Onda de água-marinha refrescante.",
    category: "stylish",
    previewColor: "#7FFFD4",
    animationClass: "animate-aquamarine-wave",
    htmlExample: `<div class="animate-aquamarine-wave">Aqua</div>`,
    cssCode: `@keyframes aquamarine-wave {
  0%, 100% { 
    transform: translateY(0);
    background: linear-gradient(180deg, #7FFFD4 0%, #40E0D0 100%);
  }
  25% { 
    transform: translateY(-3px);
  }
  50% { 
    transform: translateY(0);
    background: linear-gradient(180deg, #40E0D0 0%, #48D1CC 100%);
  }
  75% { 
    transform: translateY(3px);
  }
}
.animate-aquamarine-wave {
  animation: aquamarine-wave 2s ease-in-out infinite;
  color: #004D40;
  padding: 15px 30px;
  border-radius: 25px;
}`,
  },
  {
    id: "S-21",
    name: "Citrine Sparkle",
    description: "Brilho cintilante de citrino.",
    category: "stylish",
    previewColor: "#E4D00A",
    animationClass: "animate-citrine-sparkle",
    htmlExample: `<div class="animate-citrine-sparkle">Citrine</div>`,
    cssCode: `@keyframes citrine-sparkle {
  0%, 100% { 
    text-shadow: 0 0 5px #E4D00A;
    color: #E4D00A;
  }
  25% { 
    text-shadow: 2px -2px 10px #FFD700, -2px 2px 10px #FFA500;
    color: #FFD700;
  }
  50% { 
    text-shadow: 0 0 20px #FFA500, 0 0 40px #E4D00A;
    color: #FFA500;
  }
  75% { 
    text-shadow: -2px -2px 10px #FFD700, 2px 2px 10px #E4D00A;
    color: #FFD700;
  }
}
.animate-citrine-sparkle {
  animation: citrine-sparkle 2s ease-in-out infinite;
  font-weight: bold;
}`,
  },
  {
    id: "S-22",
    name: "Garnet Fire",
    description: "Fogo de granada vermelho escuro.",
    category: "stylish",
    previewColor: "#733635",
    animationClass: "animate-garnet-fire",
    htmlExample: `<div class="animate-garnet-fire">Garnet</div>`,
    cssCode: `@keyframes garnet-fire {
  0%, 100% { 
    background: linear-gradient(180deg, #733635 0%, #8B0000 100%);
    box-shadow: 0 5px 15px rgba(115, 54, 53, 0.5);
  }
  50% { 
    background: linear-gradient(180deg, #8B0000 0%, #B22222 100%);
    box-shadow: 0 10px 30px rgba(139, 0, 0, 0.7), 0 0 20px rgba(178, 34, 34, 0.5);
  }
}
.animate-garnet-fire {
  animation: garnet-fire 2s ease-in-out infinite;
  color: #FFD700;
  padding: 20px 40px;
  border-radius: 8px;
}`,
  },
  {
    id: "S-23",
    name: "Turquoise Calm",
    description: "Calma turquesa relaxante.",
    category: "stylish",
    previewColor: "#40E0D0",
    animationClass: "animate-turquoise-calm",
    htmlExample: `<div class="animate-turquoise-calm">Turquoise</div>`,
    cssCode: `@keyframes turquoise-calm {
  0%, 100% { 
    background: #40E0D0;
    transform: scale(1);
  }
  50% { 
    background: #48D1CC;
    transform: scale(1.02);
    box-shadow: 0 0 30px rgba(64, 224, 208, 0.4);
  }
}
.animate-turquoise-calm {
  animation: turquoise-calm 4s ease-in-out infinite;
  color: #004D40;
  padding: 20px 40px;
  border-radius: 30px;
}`,
  },
  {
    id: "S-24",
    name: "Lapis Lazuli Deep",
    description: "Profundidade de lápis-lazúli.",
    category: "stylish",
    previewColor: "#26619C",
    animationClass: "animate-lapis-deep",
    htmlExample: `<div class="animate-lapis-deep">Lapis</div>`,
    cssCode: `@keyframes lapis-deep {
  0%, 100% { 
    background: linear-gradient(135deg, #26619C 0%, #1E3A5F 50%, #26619C 100%);
    background-size: 200% 200%;
    background-position: 0% 50%;
  }
  50% { 
    background-position: 100% 50%;
  }
}
.animate-lapis-deep {
  animation: lapis-deep 4s ease-in-out infinite;
  color: #FFD700;
  padding: 20px 40px;
  border-radius: 8px;
}`,
  },
  {
    id: "S-25",
    name: "Moonstone Glow",
    description: "Brilho de pedra da lua etéreo.",
    category: "stylish",
    previewColor: "#C4C4C4",
    animationClass: "animate-moonstone-glow",
    htmlExample: `<div class="animate-moonstone-glow">Moonstone</div>`,
    cssCode: `@keyframes moonstone-glow {
  0%, 100% { 
    background: radial-gradient(circle, #FFFFFF 0%, #C4C4C4 50%, #A0A0A0 100%);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
  50% { 
    background: radial-gradient(circle, #E8E8E8 0%, #D4D4D4 50%, #C4C4C4 100%);
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(200, 200, 200, 0.4);
  }
}
.animate-moonstone-glow {
  animation: moonstone-glow 3s ease-in-out infinite;
  color: #333;
  padding: 20px;
  border-radius: 50%;
}`,
  },

  // ==================== VIBRANTE (25 animações) ====================
  {
    id: "V-01",
    name: "Rainbow Cycle",
    description: "Ciclo completo do arco-íris vibrante.",
    category: "vibrant",
    previewColor: "#FF0000",
    animationClass: "animate-rainbow-cycle",
    htmlExample: `<div class="animate-rainbow-cycle">RAINBOW</div>`,
    cssCode: `@keyframes rainbow-cycle {
  0% { color: #FF0000; text-shadow: 0 0 10px #FF0000; }
  16% { color: #FF7F00; text-shadow: 0 0 10px #FF7F00; }
  33% { color: #FFFF00; text-shadow: 0 0 10px #FFFF00; }
  50% { color: #00FF00; text-shadow: 0 0 10px #00FF00; }
  66% { color: #0000FF; text-shadow: 0 0 10px #0000FF; }
  83% { color: #8B00FF; text-shadow: 0 0 10px #8B00FF; }
  100% { color: #FF0000; text-shadow: 0 0 10px #FF0000; }
}
.animate-rainbow-cycle {
  animation: rainbow-cycle 3s linear infinite;
  font-weight: bold;
}`,
  },
  {
    id: "V-02",
    name: "Neon Pink Blast",
    description: "Explosão de rosa neon intenso.",
    category: "vibrant",
    previewColor: "#FF1493",
    animationClass: "animate-pink-blast",
    htmlExample: `<div class="animate-pink-blast">PINK</div>`,
    cssCode: `@keyframes pink-blast {
  0%, 100% { 
    transform: scale(1);
    background: #FF1493;
    box-shadow: 0 0 20px #FF1493;
  }
  50% { 
    transform: scale(1.1);
    background: #FF69B4;
    box-shadow: 0 0 50px #FF1493, 0 0 100px #FF69B4;
  }
}
.animate-pink-blast {
  animation: pink-blast 1s ease-in-out infinite;
  color: white;
  padding: 20px 40px;
  border-radius: 8px;
}`,
  },
  {
    id: "V-03",
    name: "Electric Lime",
    description: "Lima elétrica energizante.",
    category: "vibrant",
    previewColor: "#CCFF00",
    animationClass: "animate-electric-lime",
    htmlExample: `<div class="animate-electric-lime">LIME</div>`,
    cssCode: `@keyframes electric-lime {
  0%, 100% { 
    color: #CCFF00;
    text-shadow: 0 0 10px #CCFF00, 0 0 20px #CCFF00;
  }
  50% { 
    color: #7FFF00;
    text-shadow: 0 0 20px #7FFF00, 0 0 40px #CCFF00, 0 0 60px #7FFF00;
  }
}
.animate-electric-lime {
  animation: electric-lime 1.5s ease-in-out infinite;
  font-weight: bold;
  background: #111;
  padding: 20px;
}`,
  },
  {
    id: "V-04",
    name: "Hot Orange Pulse",
    description: "Pulsação de laranja quente.",
    category: "vibrant",
    previewColor: "#FF4500",
    animationClass: "animate-hot-orange",
    htmlExample: `<div class="animate-hot-orange">🔥</div>`,
    cssCode: `@keyframes hot-orange {
  0%, 100% { 
    color: #FF4500;
    transform: scale(1);
    filter: brightness(1);
  }
  25% { 
    color: #FF6347;
    transform: scale(1.05);
  }
  50% { 
    color: #FF7F50;
    transform: scale(1.1);
    filter: brightness(1.2);
  }
  75% { 
    color: #FF6347;
    transform: scale(1.05);
  }
}
.animate-hot-orange {
  animation: hot-orange 0.8s ease-in-out infinite;
  font-size: 2rem;
}`,
  },
  {
    id: "V-05",
    name: "Vivid Violet",
    description: "Violeta vívido pulsante.",
    category: "vibrant",
    previewColor: "#9400D3",
    animationClass: "animate-vivid-violet",
    htmlExample: `<div class="animate-vivid-violet">VIOLET</div>`,
    cssCode: `@keyframes vivid-violet {
  0%, 100% { 
    background: linear-gradient(135deg, #9400D3 0%, #8A2BE2 100%);
    box-shadow: 0 0 20px #9400D3;
  }
  50% { 
    background: linear-gradient(135deg, #BA55D3 0%, #9400D3 100%);
    box-shadow: 0 0 40px #BA55D3, 0 0 80px #9400D3;
  }
}
.animate-vivid-violet {
  animation: vivid-violet 2s ease-in-out infinite;
  color: white;
  padding: 20px 40px;
  border-radius: 8px;
}`,
  },
  {
    id: "V-06",
    name: "Sunshine Yellow",
    description: "Amarelo sol radiante.",
    category: "vibrant",
    previewColor: "#FFD700",
    animationClass: "animate-sunshine-yellow",
    htmlExample: `<div class="animate-sunshine-yellow">☀️</div>`,
    cssCode: `@keyframes sunshine-yellow {
  0%, 100% { 
    color: #FFD700;
    transform: rotate(0deg) scale(1);
    filter: drop-shadow(0 0 10px #FFD700);
  }
  50% { 
    color: #FFA500;
    transform: rotate(180deg) scale(1.2);
    filter: drop-shadow(0 0 30px #FFD700);
  }
}
.animate-sunshine-yellow {
  animation: sunshine-yellow 3s ease-in-out infinite;
  font-size: 3rem;
  display: inline-block;
}`,
  },
  {
    id: "V-07",
    name: "Ocean Blue Wave",
    description: "Onda de azul oceano profundo.",
    category: "vibrant",
    previewColor: "#0077BE",
    animationClass: "animate-ocean-blue",
    htmlExample: `<div class="animate-ocean-blue">🌊</div>`,
    cssCode: `@keyframes ocean-blue {
  0%, 100% { 
    transform: translateY(0) rotate(0deg);
    color: #0077BE;
  }
  25% { 
    transform: translateY(-10px) rotate(-5deg);
    color: #00BFFF;
  }
  50% { 
    transform: translateY(0) rotate(0deg);
    color: #1E90FF;
  }
  75% { 
    transform: translateY(10px) rotate(5deg);
    color: #00BFFF;
  }
}
.animate-ocean-blue {
  animation: ocean-blue 2s ease-in-out infinite;
  font-size: 2rem;
  display: inline-block;
}`,
  },
  {
    id: "V-08",
    name: "Fiery Red",
    description: "Vermelho de fogo ardente.",
    category: "vibrant",
    previewColor: "#FF0000",
    animationClass: "animate-fiery-red",
    htmlExample: `<div class="animate-fiery-red">FIRE</div>`,
    cssCode: `@keyframes fiery-red {
  0%, 100% { 
    background: linear-gradient(0deg, #FF0000 0%, #FF4500 50%, #FF6347 100%);
    text-shadow: 0 0 10px #FF0000;
  }
  50% { 
    background: linear-gradient(0deg, #FF4500 0%, #FF6347 50%, #FFA500 100%);
    text-shadow: 0 0 30px #FF4500, 0 0 50px #FF0000;
  }
}
.animate-fiery-red {
  animation: fiery-red 1s ease-in-out infinite;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
}`,
  },
  {
    id: "V-09",
    name: "Tropical Teal",
    description: "Verde-azulado tropical vibrante.",
    category: "vibrant",
    previewColor: "#20B2AA",
    animationClass: "animate-tropical-teal",
    htmlExample: `<div class="animate-tropical-teal">TROPIC</div>`,
    cssCode: `@keyframes tropical-teal {
  0% { 
    background: linear-gradient(90deg, #20B2AA, #48D1CC, #40E0D0, #20B2AA);
    background-position: 0% 50%;
  }
  100% { 
    background: linear-gradient(90deg, #20B2AA, #48D1CC, #40E0D0, #20B2AA);
    background-position: 100% 50%;
  }
}
.animate-tropical-teal {
  animation: tropical-teal 2s linear infinite;
  background-size: 300% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
}`,
  },
  {
    id: "V-10",
    name: "Candy Pink",
    description: "Rosa doce açucarado.",
    category: "vibrant",
    previewColor: "#FF6EC7",
    animationClass: "animate-candy-pink",
    htmlExample: `<div class="animate-candy-pink">CANDY</div>`,
    cssCode: `@keyframes candy-pink {
  0%, 100% { 
    background: #FF6EC7;
    transform: rotate(-2deg);
  }
  50% { 
    background: #FF85D0;
    transform: rotate(2deg);
    box-shadow: 0 0 30px #FF6EC7;
  }
}
.animate-candy-pink {
  animation: candy-pink 1s ease-in-out infinite;
  color: white;
  padding: 15px 30px;
  border-radius: 20px;
  font-weight: bold;
}`,
  },
  {
    id: "V-11",
    name: "Grape Burst",
    description: "Explosão de uva intensa.",
    category: "vibrant",
    previewColor: "#6F2DA8",
    animationClass: "animate-grape-burst",
    htmlExample: `<div class="animate-grape-burst">🍇</div>`,
    cssCode: `@keyframes grape-burst {
  0%, 100% { 
    transform: scale(1);
    color: #6F2DA8;
    filter: drop-shadow(0 0 5px #6F2DA8);
  }
  50% { 
    transform: scale(1.3);
    color: #9932CC;
    filter: drop-shadow(0 0 20px #9932CC);
  }
}
.animate-grape-burst {
  animation: grape-burst 0.8s ease-in-out infinite;
  font-size: 2rem;
}`,
  },
  {
    id: "V-12",
    name: "Mango Glow",
    description: "Brilho de manga tropical.",
    category: "vibrant",
    previewColor: "#FF8243",
    animationClass: "animate-mango-glow",
    htmlExample: `<div class="animate-mango-glow">🥭</div>`,
    cssCode: `@keyframes mango-glow {
  0%, 100% { 
    background: radial-gradient(circle, #FF8243 0%, #FF6600 100%);
    box-shadow: 0 0 20px #FF8243;
  }
  50% { 
    background: radial-gradient(circle, #FFAB00 0%, #FF8243 100%);
    box-shadow: 0 0 40px #FFAB00, 0 0 60px #FF8243;
  }
}
.animate-mango-glow {
  animation: mango-glow 2s ease-in-out infinite;
  padding: 30px;
  border-radius: 50%;
  font-size: 2rem;
}`,
  },
  {
    id: "V-13",
    name: "Cherry Pop",
    description: "Estalo de cereja vermelho vibrante.",
    category: "vibrant",
    previewColor: "#DE3163",
    animationClass: "animate-cherry-pop",
    htmlExample: `<div class="animate-cherry-pop">🍒</div>`,
    cssCode: `@keyframes cherry-pop {
  0% { 
    transform: scale(0.8);
    opacity: 0.5;
    color: #DE3163;
  }
  50% { 
    transform: scale(1.2);
    opacity: 1;
    color: #FF1744;
  }
  100% { 
    transform: scale(1);
    opacity: 1;
    color: #DE3163;
  }
}
.animate-cherry-pop {
  animation: cherry-pop 0.6s ease-in-out infinite;
  font-size: 2rem;
}`,
  },
  {
    id: "V-14",
    name: "Kiwi Fresh",
    description: "Frescor de kiwi verde.",
    category: "vibrant",
    previewColor: "#8EE53F",
    animationClass: "animate-kiwi-fresh",
    htmlExample: `<div class="animate-kiwi-fresh">🥝</div>`,
    cssCode: `@keyframes kiwi-fresh {
  0%, 100% { 
    background: radial-gradient(circle, #8EE53F 30%, #6B8E23 100%);
    transform: rotate(0deg);
  }
  50% { 
    background: radial-gradient(circle, #ADFF2F 30%, #8EE53F 100%);
    transform: rotate(10deg);
  }
}
.animate-kiwi-fresh {
  animation: kiwi-fresh 2s ease-in-out infinite;
  padding: 25px;
  border-radius: 50%;
  font-size: 2rem;
}`,
  },
  {
    id: "V-15",
    name: "Blueberry Bounce",
    description: "Salto de mirtilo azul.",
    category: "vibrant",
    previewColor: "#4F86F7",
    animationClass: "animate-blueberry-bounce",
    htmlExample: `<div class="animate-blueberry-bounce">🫐</div>`,
    cssCode: `@keyframes blueberry-bounce {
  0%, 100% { 
    transform: translateY(0);
    color: #4F86F7;
  }
  25% { 
    transform: translateY(-15px);
    color: #6495ED;
  }
  50% { 
    transform: translateY(0);
    color: #4169E1;
  }
  75% { 
    transform: translateY(-8px);
    color: #6495ED;
  }
}
.animate-blueberry-bounce {
  animation: blueberry-bounce 1s ease-in-out infinite;
  font-size: 2rem;
  display: inline-block;
}`,
  },
  {
    id: "V-16",
    name: "Watermelon Wave",
    description: "Onda de melancia suculenta.",
    category: "vibrant",
    previewColor: "#FF3B58",
    animationClass: "animate-watermelon-wave",
    htmlExample: `<div class="animate-watermelon-wave">🍉</div>`,
    cssCode: `@keyframes watermelon-wave {
  0%, 100% { 
    background: linear-gradient(180deg, #FF3B58 0%, #FF6B8A 50%, #7CB342 100%);
    transform: rotate(-5deg);
  }
  50% { 
    background: linear-gradient(180deg, #FF6B8A 0%, #FF3B58 50%, #8BC34A 100%);
    transform: rotate(5deg);
  }
}
.animate-watermelon-wave {
  animation: watermelon-wave 1.5s ease-in-out infinite;
  padding: 25px;
  border-radius: 50%;
  font-size: 2rem;
}`,
  },
  {
    id: "V-17",
    name: "Lemon Zest",
    description: "Zest de limão refrescante.",
    category: "vibrant",
    previewColor: "#FFF44F",
    animationClass: "animate-lemon-zest",
    htmlExample: `<div class="animate-lemon-zest">🍋</div>`,
    cssCode: `@keyframes lemon-zest {
  0%, 100% { 
    color: #FFF44F;
    filter: drop-shadow(0 0 5px #FFF44F);
    transform: scale(1) rotate(0deg);
  }
  25% { 
    transform: scale(1.1) rotate(-10deg);
  }
  50% { 
    color: #F0E68C;
    filter: drop-shadow(0 0 15px #FFF44F);
    transform: scale(1) rotate(0deg);
  }
  75% { 
    transform: scale(1.1) rotate(10deg);
  }
}
.animate-lemon-zest {
  animation: lemon-zest 1.2s ease-in-out infinite;
  font-size: 2rem;
  display: inline-block;
}`,
  },
  {
    id: "V-18",
    name: "Peach Fuzz",
    description: "Fofura de pêssego suave.",
    category: "vibrant",
    previewColor: "#FFBE98",
    animationClass: "animate-peach-fuzz",
    htmlExample: `<div class="animate-peach-fuzz">🍑</div>`,
    cssCode: `@keyframes peach-fuzz {
  0%, 100% { 
    background: radial-gradient(circle, #FFBE98 0%, #FF8C69 100%);
    box-shadow: 0 0 10px rgba(255, 190, 152, 0.5);
  }
  50% { 
    background: radial-gradient(circle, #FFDAB9 0%, #FFBE98 100%);
    box-shadow: 0 0 30px rgba(255, 218, 185, 0.8);
  }
}
.animate-peach-fuzz {
  animation: peach-fuzz 2s ease-in-out infinite;
  padding: 25px;
  border-radius: 40% 40% 50% 50%;
  font-size: 2rem;
}`,
  },
  {
    id: "V-19",
    name: "Strawberry Shake",
    description: "Shake de morango delicioso.",
    category: "vibrant",
    previewColor: "#FF4D6D",
    animationClass: "animate-strawberry-shake",
    htmlExample: `<div class="animate-strawberry-shake">🍓</div>`,
    cssCode: `@keyframes strawberry-shake {
  0%, 100% { 
    transform: translateX(0) rotate(0deg);
    color: #FF4D6D;
  }
  10% { transform: translateX(-5px) rotate(-5deg); }
  20% { transform: translateX(5px) rotate(5deg); }
  30% { transform: translateX(-5px) rotate(-5deg); }
  40% { transform: translateX(5px) rotate(5deg); }
  50% { 
    transform: translateX(0) rotate(0deg);
    color: #FF6B8A;
  }
}
.animate-strawberry-shake {
  animation: strawberry-shake 0.8s ease-in-out infinite;
  font-size: 2rem;
  display: inline-block;
}`,
  },
  {
    id: "V-20",
    name: "Avocado Roll",
    description: "Rolagem de abacate cremoso.",
    category: "vibrant",
    previewColor: "#568203",
    animationClass: "animate-avocado-roll",
    htmlExample: `<div class="animate-avocado-roll">🥑</div>`,
    cssCode: `@keyframes avocado-roll {
  0% { 
    transform: rotate(0deg) translateX(0);
    background: linear-gradient(135deg, #568203 0%, #90EE90 100%);
  }
  25% { 
    transform: rotate(90deg) translateX(10px);
  }
  50% { 
    transform: rotate(180deg) translateX(0);
    background: linear-gradient(135deg, #90EE90 0%, #568203 100%);
  }
  75% { 
    transform: rotate(270deg) translateX(-10px);
  }
  100% { 
    transform: rotate(360deg) translateX(0);
  }
}
.animate-avocado-roll {
  animation: avocado-roll 3s linear infinite;
  font-size: 2rem;
  display: inline-block;
  padding: 20px;
  border-radius: 50%;
}`,
  },
  {
    id: "V-21",
    name: "Coconut Spin",
    description: "Giro de coco tropical.",
    category: "vibrant",
    previewColor: "#C4A35A",
    animationClass: "animate-coconut-spin",
    htmlExample: `<div class="animate-coconut-spin">🥥</div>`,
    cssCode: `@keyframes coconut-spin {
  0% { 
    transform: rotateY(0deg);
    filter: brightness(1);
  }
  50% { 
    transform: rotateY(180deg);
    filter: brightness(1.2);
  }
  100% { 
    transform: rotateY(360deg);
    filter: brightness(1);
  }
}
.animate-coconut-spin {
  animation: coconut-spin 2s ease-in-out infinite;
  font-size: 2rem;
  display: inline-block;
}`,
  },
  {
    id: "V-22",
    name: "Pineapple Twist",
    description: "Torção de abacaxi tropical.",
    category: "vibrant",
    previewColor: "#FFD700",
    animationClass: "animate-pineapple-twist",
    htmlExample: `<div class="animate-pineapple-twist">🍍</div>`,
    cssCode: `@keyframes pineapple-twist {
  0%, 100% { 
    transform: rotate(-10deg) scale(1);
    filter: saturate(1);
  }
  25% { 
    transform: rotate(10deg) scale(1.05);
  }
  50% { 
    transform: rotate(-10deg) scale(1.1);
    filter: saturate(1.3);
  }
  75% { 
    transform: rotate(10deg) scale(1.05);
  }
}
.animate-pineapple-twist {
  animation: pineapple-twist 1.5s ease-in-out infinite;
  font-size: 2rem;
  display: inline-block;
}`,
  },
  {
    id: "V-23",
    name: "Dragon Fruit Glow",
    description: "Brilho de pitaya exótico.",
    category: "vibrant",
    previewColor: "#FF1493",
    animationClass: "animate-dragonfruit-glow",
    htmlExample: `<div class="animate-dragonfruit-glow">🐉</div>`,
    cssCode: `@keyframes dragonfruit-glow {
  0%, 100% { 
    background: radial-gradient(circle, #FF1493 0%, #8B008B 100%);
    box-shadow: 0 0 20px #FF1493;
  }
  50% { 
    background: radial-gradient(circle, #FF69B4 0%, #FF1493 100%);
    box-shadow: 0 0 40px #FF1493, 0 0 60px #FF69B4;
  }
}
.animate-dragonfruit-glow {
  animation: dragonfruit-glow 2s ease-in-out infinite;
  padding: 30px;
  border-radius: 50%;
  font-size: 2rem;
}`,
  },
  {
    id: "V-24",
    name: "Passion Fruit Pulse",
    description: "Pulsação de maracujá vibrante.",
    category: "vibrant",
    previewColor: "#9B30FF",
    animationClass: "animate-passionfruit-pulse",
    htmlExample: `<div class="animate-passionfruit-pulse">💜</div>`,
    cssCode: `@keyframes passionfruit-pulse {
  0%, 100% { 
    transform: scale(1);
    color: #9B30FF;
    filter: drop-shadow(0 0 5px #9B30FF);
  }
  25% { 
    transform: scale(1.15);
    color: #DA70D6;
  }
  50% { 
    transform: scale(1);
    filter: drop-shadow(0 0 20px #9B30FF);
  }
  75% { 
    transform: scale(1.1);
    color: #BA55D3;
  }
}
.animate-passionfruit-pulse {
  animation: passionfruit-pulse 1s ease-in-out infinite;
  font-size: 2rem;
}`,
  },
  {
    id: "V-25",
    name: "Starfruit Shine",
    description: "Brilho de carambola estelar.",
    category: "vibrant",
    previewColor: "#FFFF00",
    animationClass: "animate-starfruit-shine",
    htmlExample: `<div class="animate-starfruit-shine">⭐</div>`,
    cssCode: `@keyframes starfruit-shine {
  0%, 100% { 
    transform: rotate(0deg) scale(1);
    color: #FFFF00;
    filter: drop-shadow(0 0 5px #FFFF00);
  }
  25% { 
    transform: rotate(72deg) scale(1.1);
    color: #FFD700;
  }
  50% { 
    transform: rotate(144deg) scale(1);
    color: #FFFF00;
    filter: drop-shadow(0 0 15px #FFFF00);
  }
  75% { 
    transform: rotate(216deg) scale(1.1);
    color: #FFD700;
  }
}
.animate-starfruit-shine {
  animation: starfruit-shine 2s linear infinite;
  font-size: 2.5rem;
  display: inline-block;
}`,
  },
];
