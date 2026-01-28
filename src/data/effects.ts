export interface Effect {
  id: string;
  name: string;
  description: string;
  category: "glassmorphism" | "neumorphism" | "filters" | "gradients";
  cssCode: string;
  htmlExample: string;
  previewColor?: string;
}

export const effectCategories = [
  { id: "all", name: "Todos" },
  { id: "glassmorphism", name: "Glassmorphism" },
  { id: "neumorphism", name: "Neumorphism" },
  { id: "filters", name: "Filtros" },
  { id: "gradients", name: "Gradientes" },
];

export const effects: Effect[] = [
  // ==================== GLASSMORPHISM (20 efeitos) ====================
  {
    id: "G-01",
    name: "Arctic Frost",
    description: "Vidro fosco ártico com tonalidade azul gelado.",
    category: "glassmorphism",
    previewColor: "#E0F7FA",
    htmlExample: `<div class="arctic-frost">Arctic Card</div>`,
    cssCode: `.arctic-frost {
  background: rgba(224, 247, 250, 0.25);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(224, 247, 250, 0.4);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 188, 212, 0.15);
}`,
  },
  {
    id: "G-02",
    name: "Rose Quartz Glass",
    description: "Vidro de quartzo rosa suave e elegante.",
    category: "glassmorphism",
    previewColor: "#FCE4EC",
    htmlExample: `<div class="rose-quartz-glass">Rose Card</div>`,
    cssCode: `.rose-quartz-glass {
  background: rgba(252, 228, 236, 0.3);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(233, 30, 99, 0.2);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(233, 30, 99, 0.1);
}`,
  },
  {
    id: "G-03",
    name: "Emerald Mist",
    description: "Névoa esmeralda translúcida.",
    category: "glassmorphism",
    previewColor: "#E8F5E9",
    htmlExample: `<div class="emerald-mist">Emerald Card</div>`,
    cssCode: `.emerald-mist {
  background: rgba(232, 245, 233, 0.35);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(76, 175, 80, 0.3);
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(76, 175, 80, 0.15);
}`,
  },
  {
    id: "G-04",
    name: "Sunset Haze",
    description: "Neblina de pôr do sol em tons quentes.",
    category: "glassmorphism",
    previewColor: "#FFF3E0",
    htmlExample: `<div class="sunset-haze">Sunset Card</div>`,
    cssCode: `.sunset-haze {
  background: linear-gradient(135deg, rgba(255, 243, 224, 0.4), rgba(255, 183, 77, 0.2));
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 152, 0, 0.3);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(255, 152, 0, 0.2);
}`,
  },
  {
    id: "G-05",
    name: "Lavender Dream",
    description: "Sonho de lavanda com brilho sutil.",
    category: "glassmorphism",
    previewColor: "#F3E5F5",
    htmlExample: `<div class="lavender-dream">Lavender Card</div>`,
    cssCode: `.lavender-dream {
  background: rgba(243, 229, 245, 0.4);
  backdrop-filter: blur(18px) saturate(180%);
  border: 1px solid rgba(156, 39, 176, 0.25);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(156, 39, 176, 0.15);
}`,
  },
  {
    id: "G-06",
    name: "Ocean Depth",
    description: "Profundidade oceânica em azul escuro.",
    category: "glassmorphism",
    previewColor: "#0D47A1",
    htmlExample: `<div class="ocean-depth">Ocean Card</div>`,
    cssCode: `.ocean-depth {
  background: rgba(13, 71, 161, 0.5);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(33, 150, 243, 0.3);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(13, 71, 161, 0.3);
  color: white;
}`,
  },
  {
    id: "G-07",
    name: "Champagne Bubble",
    description: "Bolha de champagne efervescente.",
    category: "glassmorphism",
    previewColor: "#FFF8E1",
    htmlExample: `<div class="champagne-bubble">Champagne Card</div>`,
    cssCode: `.champagne-bubble {
  background: rgba(255, 248, 225, 0.45);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 215, 0, 0.4);
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.2);
}`,
  },
  {
    id: "G-08",
    name: "Midnight Glass",
    description: "Vidro da meia-noite escuro e misterioso.",
    category: "glassmorphism",
    previewColor: "#1A1A2E",
    htmlExample: `<div class="midnight-glass">Midnight Card</div>`,
    cssCode: `.midnight-glass {
  background: rgba(26, 26, 46, 0.7);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(139, 92, 246, 0.2);
  color: #E0E0E0;
}`,
  },
  {
    id: "G-09",
    name: "Coral Reef",
    description: "Recife de coral vibrante.",
    category: "glassmorphism",
    previewColor: "#FF7043",
    htmlExample: `<div class="coral-reef">Coral Card</div>`,
    cssCode: `.coral-reef {
  background: rgba(255, 112, 67, 0.3);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 87, 34, 0.4);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(255, 87, 34, 0.2);
}`,
  },
  {
    id: "G-10",
    name: "Mint Fresh",
    description: "Menta fresca e revigorante.",
    category: "glassmorphism",
    previewColor: "#E0F2F1",
    htmlExample: `<div class="mint-fresh">Mint Card</div>`,
    cssCode: `.mint-fresh {
  background: rgba(224, 242, 241, 0.45);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(0, 150, 136, 0.3);
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 150, 136, 0.15);
}`,
  },
  {
    id: "G-11",
    name: "Cherry Blossom",
    description: "Flor de cerejeira delicada.",
    category: "glassmorphism",
    previewColor: "#F8BBD9",
    htmlExample: `<div class="cherry-blossom">Sakura Card</div>`,
    cssCode: `.cherry-blossom {
  background: rgba(248, 187, 217, 0.35);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(236, 64, 122, 0.3);
  border-radius: 30px;
  box-shadow: 0 8px 32px rgba(236, 64, 122, 0.15);
}`,
  },
  {
    id: "G-12",
    name: "Storm Cloud",
    description: "Nuvem de tempestade dramática.",
    category: "glassmorphism",
    previewColor: "#455A64",
    htmlExample: `<div class="storm-cloud">Storm Card</div>`,
    cssCode: `.storm-cloud {
  background: rgba(69, 90, 100, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(144, 164, 174, 0.3);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(38, 50, 56, 0.4);
  color: white;
}`,
  },
  {
    id: "G-13",
    name: "Honey Glow",
    description: "Brilho de mel dourado.",
    category: "glassmorphism",
    previewColor: "#FFC107",
    htmlExample: `<div class="honey-glow">Honey Card</div>`,
    cssCode: `.honey-glow {
  background: rgba(255, 193, 7, 0.25);
  backdrop-filter: blur(12px);
  border: 2px solid rgba(255, 193, 7, 0.5);
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(255, 193, 7, 0.3);
}`,
  },
  {
    id: "G-14",
    name: "Northern Lights",
    description: "Aurora boreal em movimento.",
    category: "glassmorphism",
    previewColor: "#00E676",
    htmlExample: `<div class="northern-lights">Aurora Card</div>`,
    cssCode: `.northern-lights {
  background: linear-gradient(135deg, rgba(0, 230, 118, 0.2), rgba(0, 188, 212, 0.2), rgba(156, 39, 176, 0.2));
  backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 230, 118, 0.3);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 230, 118, 0.2);
}`,
  },
  {
    id: "G-15",
    name: "Smoky Quartz",
    description: "Quartzo esfumado translúcido.",
    category: "glassmorphism",
    previewColor: "#795548",
    htmlExample: `<div class="smoky-quartz">Smoky Card</div>`,
    cssCode: `.smoky-quartz {
  background: rgba(121, 85, 72, 0.35);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(161, 136, 127, 0.4);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(62, 39, 35, 0.2);
  color: #EFEBE9;
}`,
  },
  {
    id: "G-16",
    name: "Glacier Blue",
    description: "Azul glacial cristalino.",
    category: "glassmorphism",
    previewColor: "#B3E5FC",
    htmlExample: `<div class="glacier-blue">Glacier Card</div>`,
    cssCode: `.glacier-blue {
  background: rgba(179, 229, 252, 0.4);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(3, 169, 244, 0.3);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(3, 169, 244, 0.2);
}`,
  },
  {
    id: "G-17",
    name: "Volcanic Ash",
    description: "Cinza vulcânica escura.",
    category: "glassmorphism",
    previewColor: "#37474F",
    htmlExample: `<div class="volcanic-ash">Volcanic Card</div>`,
    cssCode: `.volcanic-ash {
  background: rgba(55, 71, 79, 0.75);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 87, 34, 0.4);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(255, 87, 34, 0.15);
  color: #ECEFF1;
}`,
  },
  {
    id: "G-18",
    name: "Candy Floss",
    description: "Algodão doce rosa fofo.",
    category: "glassmorphism",
    previewColor: "#F48FB1",
    htmlExample: `<div class="candy-floss">Candy Card</div>`,
    cssCode: `.candy-floss {
  background: rgba(244, 143, 177, 0.3);
  backdrop-filter: blur(18px);
  border: 2px solid rgba(236, 64, 122, 0.3);
  border-radius: 40px;
  box-shadow: 0 8px 32px rgba(236, 64, 122, 0.2);
}`,
  },
  {
    id: "G-19",
    name: "Absinthe Green",
    description: "Verde absinto misterioso.",
    category: "glassmorphism",
    previewColor: "#76FF03",
    htmlExample: `<div class="absinthe-green">Absinthe Card</div>`,
    cssCode: `.absinthe-green {
  background: rgba(118, 255, 3, 0.2);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(118, 255, 3, 0.4);
  border-radius: 16px;
  box-shadow: 0 0 30px rgba(118, 255, 3, 0.2);
}`,
  },
  {
    id: "G-20",
    name: "Nebula Purple",
    description: "Roxo de nebulosa cósmica.",
    category: "glassmorphism",
    previewColor: "#7C4DFF",
    htmlExample: `<div class="nebula-purple">Nebula Card</div>`,
    cssCode: `.nebula-purple {
  background: linear-gradient(135deg, rgba(124, 77, 255, 0.3), rgba(234, 128, 252, 0.2));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(124, 77, 255, 0.4);
  border-radius: 20px;
  box-shadow: 0 8px 40px rgba(124, 77, 255, 0.25);
}`,
  },

  // ==================== NEUMORPHISM (20 efeitos) ====================
  {
    id: "N-01",
    name: "Soft White",
    description: "Neumorfismo branco suave clássico.",
    category: "neumorphism",
    previewColor: "#ECEFF1",
    htmlExample: `<div class="soft-white">Soft Card</div>`,
    cssCode: `.soft-white {
  background: #ECEFF1;
  border-radius: 20px;
  box-shadow: 8px 8px 16px #C5C9CC, -8px -8px 16px #FFFFFF;
}`,
  },
  {
    id: "N-02",
    name: "Ocean Blue Neu",
    description: "Neumorfismo em azul oceano.",
    category: "neumorphism",
    previewColor: "#E3F2FD",
    htmlExample: `<div class="ocean-blue-neu">Ocean Card</div>`,
    cssCode: `.ocean-blue-neu {
  background: #E3F2FD;
  border-radius: 16px;
  box-shadow: 8px 8px 16px #B8C9DA, -8px -8px 16px #FFFFFF;
  color: #1565C0;
}`,
  },
  {
    id: "N-03",
    name: "Forest Green Neu",
    description: "Neumorfismo em verde floresta.",
    category: "neumorphism",
    previewColor: "#E8F5E9",
    htmlExample: `<div class="forest-green-neu">Forest Card</div>`,
    cssCode: `.forest-green-neu {
  background: #E8F5E9;
  border-radius: 20px;
  box-shadow: 8px 8px 16px #BBC9BC, -8px -8px 16px #FFFFFF;
  color: #2E7D32;
}`,
  },
  {
    id: "N-04",
    name: "Sunset Orange Neu",
    description: "Neumorfismo em laranja pôr do sol.",
    category: "neumorphism",
    previewColor: "#FFF3E0",
    htmlExample: `<div class="sunset-orange-neu">Sunset Card</div>`,
    cssCode: `.sunset-orange-neu {
  background: #FFF3E0;
  border-radius: 16px;
  box-shadow: 8px 8px 16px #D9C9B3, -8px -8px 16px #FFFFFF;
  color: #E65100;
}`,
  },
  {
    id: "N-05",
    name: "Lavender Neu",
    description: "Neumorfismo em lavanda suave.",
    category: "neumorphism",
    previewColor: "#F3E5F5",
    htmlExample: `<div class="lavender-neu">Lavender Card</div>`,
    cssCode: `.lavender-neu {
  background: #F3E5F5;
  border-radius: 24px;
  box-shadow: 8px 8px 16px #C9B8CB, -8px -8px 16px #FFFFFF;
  color: #7B1FA2;
}`,
  },
  {
    id: "N-06",
    name: "Dark Mode Neu",
    description: "Neumorfismo em modo escuro.",
    category: "neumorphism",
    previewColor: "#2D2D2D",
    htmlExample: `<div class="dark-mode-neu">Dark Card</div>`,
    cssCode: `.dark-mode-neu {
  background: #2D2D2D;
  border-radius: 20px;
  box-shadow: 8px 8px 16px #1A1A1A, -8px -8px 16px #404040;
  color: #E0E0E0;
}`,
  },
  {
    id: "N-07",
    name: "Rose Neu",
    description: "Neumorfismo em rosa delicado.",
    category: "neumorphism",
    previewColor: "#FCE4EC",
    htmlExample: `<div class="rose-neu">Rose Card</div>`,
    cssCode: `.rose-neu {
  background: #FCE4EC;
  border-radius: 16px;
  box-shadow: 8px 8px 16px #D4B8C0, -8px -8px 16px #FFFFFF;
  color: #C2185B;
}`,
  },
  {
    id: "N-08",
    name: "Slate Neu",
    description: "Neumorfismo em cinza ardósia.",
    category: "neumorphism",
    previewColor: "#CFD8DC",
    htmlExample: `<div class="slate-neu">Slate Card</div>`,
    cssCode: `.slate-neu {
  background: #CFD8DC;
  border-radius: 20px;
  box-shadow: 8px 8px 16px #A5ABB0, -8px -8px 16px #F9FFFF;
  color: #37474F;
}`,
  },
  {
    id: "N-09",
    name: "Teal Neu",
    description: "Neumorfismo em verde-azulado.",
    category: "neumorphism",
    previewColor: "#E0F2F1",
    htmlExample: `<div class="teal-neu">Teal Card</div>`,
    cssCode: `.teal-neu {
  background: #E0F2F1;
  border-radius: 16px;
  box-shadow: 8px 8px 16px #B4C4C3, -8px -8px 16px #FFFFFF;
  color: #00796B;
}`,
  },
  {
    id: "N-10",
    name: "Gold Neu",
    description: "Neumorfismo em dourado luxuoso.",
    category: "neumorphism",
    previewColor: "#FFF8E1",
    htmlExample: `<div class="gold-neu">Gold Card</div>`,
    cssCode: `.gold-neu {
  background: #FFF8E1;
  border-radius: 20px;
  box-shadow: 8px 8px 16px #D9CDB5, -8px -8px 16px #FFFFFF;
  color: #FF8F00;
}`,
  },
  {
    id: "N-11",
    name: "Concave Button",
    description: "Botão côncavo pressionado.",
    category: "neumorphism",
    previewColor: "#E0E5EC",
    htmlExample: `<button class="concave-button">Press</button>`,
    cssCode: `.concave-button {
  background: #E0E5EC;
  border-radius: 12px;
  box-shadow: inset 6px 6px 12px #A3B1C6, inset -6px -6px 12px #FFFFFF;
  border: none;
  padding: 15px 30px;
  color: #5A6C7E;
}`,
  },
  {
    id: "N-12",
    name: "Convex Button Coral",
    description: "Botão convexo em coral.",
    category: "neumorphism",
    previewColor: "#FFCCBC",
    htmlExample: `<button class="convex-coral">Click</button>`,
    cssCode: `.convex-coral {
  background: #FFCCBC;
  border-radius: 12px;
  box-shadow: 6px 6px 12px #D9A89A, -6px -6px 12px #FFFFFF;
  border: none;
  padding: 15px 30px;
  color: #BF360C;
  transition: all 0.2s;
}
.convex-coral:active {
  box-shadow: inset 6px 6px 12px #D9A89A, inset -6px -6px 12px #FFFFFF;
}`,
  },
  {
    id: "N-13",
    name: "Circular Toggle Purple",
    description: "Toggle circular em roxo.",
    category: "neumorphism",
    previewColor: "#EDE7F6",
    htmlExample: `<div class="circular-toggle-purple">⚡</div>`,
    cssCode: `.circular-toggle-purple {
  background: #EDE7F6;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 6px 6px 12px #C5B8D8, -6px -6px 12px #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #7B1FA2;
  cursor: pointer;
}`,
  },
  {
    id: "N-14",
    name: "Input Field Mint",
    description: "Campo de entrada em menta.",
    category: "neumorphism",
    previewColor: "#E0F2F1",
    htmlExample: `<input class="input-mint" placeholder="Type..." />`,
    cssCode: `.input-mint {
  background: #E0F2F1;
  border-radius: 10px;
  box-shadow: inset 4px 4px 8px #B4C4C3, inset -4px -4px 8px #FFFFFF;
  border: none;
  padding: 12px 20px;
  color: #00695C;
  outline: none;
}`,
  },
  {
    id: "N-15",
    name: "Card Amber",
    description: "Cartão em âmbar dourado.",
    category: "neumorphism",
    previewColor: "#FFF8E1",
    htmlExample: `<div class="card-amber">Amber Card</div>`,
    cssCode: `.card-amber {
  background: #FFF8E1;
  border-radius: 20px;
  box-shadow: 10px 10px 20px #D9CDB5, -10px -10px 20px #FFFFFF;
  padding: 30px;
  color: #FF6F00;
}`,
  },
  {
    id: "N-16",
    name: "Icon Button Cyan",
    description: "Botão de ícone em ciano.",
    category: "neumorphism",
    previewColor: "#E0F7FA",
    htmlExample: `<button class="icon-btn-cyan">🔍</button>`,
    cssCode: `.icon-btn-cyan {
  background: #E0F7FA;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  box-shadow: 5px 5px 10px #B4C9CC, -5px -5px 10px #FFFFFF;
  border: none;
  font-size: 20px;
  cursor: pointer;
}`,
  },
  {
    id: "N-17",
    name: "Progress Bar Indigo",
    description: "Barra de progresso em índigo.",
    category: "neumorphism",
    previewColor: "#E8EAF6",
    htmlExample: `<div class="progress-indigo"><div class="fill"></div></div>`,
    cssCode: `.progress-indigo {
  background: #E8EAF6;
  border-radius: 10px;
  box-shadow: inset 4px 4px 8px #C5C7DA, inset -4px -4px 8px #FFFFFF;
  height: 20px;
  overflow: hidden;
}
.progress-indigo .fill {
  background: #3F51B5;
  height: 100%;
  width: 70%;
  border-radius: 10px;
}`,
  },
  {
    id: "N-18",
    name: "Switch Deep Purple",
    description: "Switch em roxo profundo.",
    category: "neumorphism",
    previewColor: "#EDE7F6",
    htmlExample: `<div class="switch-purple"><div class="knob"></div></div>`,
    cssCode: `.switch-purple {
  background: #EDE7F6;
  width: 60px;
  height: 30px;
  border-radius: 15px;
  box-shadow: inset 4px 4px 8px #C5B8D8, inset -4px -4px 8px #FFFFFF;
  position: relative;
}
.switch-purple .knob {
  width: 26px;
  height: 26px;
  background: #7B1FA2;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}`,
  },
  {
    id: "N-19",
    name: "Badge Brown",
    description: "Badge em marrom terra.",
    category: "neumorphism",
    previewColor: "#EFEBE9",
    htmlExample: `<span class="badge-brown">New</span>`,
    cssCode: `.badge-brown {
  background: #EFEBE9;
  padding: 6px 16px;
  border-radius: 20px;
  box-shadow: 3px 3px 6px #C9C1BC, -3px -3px 6px #FFFFFF;
  color: #5D4037;
  font-size: 12px;
  font-weight: bold;
}`,
  },
  {
    id: "N-20",
    name: "Slider Pink",
    description: "Slider em rosa vibrante.",
    category: "neumorphism",
    previewColor: "#FCE4EC",
    htmlExample: `<div class="slider-pink"><div class="track"></div></div>`,
    cssCode: `.slider-pink {
  background: #FCE4EC;
  height: 10px;
  border-radius: 5px;
  box-shadow: inset 2px 2px 4px #D4B8C0, inset -2px -2px 4px #FFFFFF;
  position: relative;
}
.slider-pink .track {
  background: #E91E63;
  height: 100%;
  width: 50%;
  border-radius: 5px;
}`,
  },

  // ==================== FILTERS (20 efeitos) ====================
  {
    id: "F-01",
    name: "Vintage Sepia",
    description: "Filtro sépia vintage clássico.",
    category: "filters",
    previewColor: "#D4A574",
    htmlExample: `<img class="vintage-sepia" src="image.jpg" />`,
    cssCode: `.vintage-sepia {
  filter: sepia(80%) contrast(90%) brightness(95%);
  transition: filter 0.3s;
}
.vintage-sepia:hover {
  filter: sepia(0%);
}`,
  },
  {
    id: "F-02",
    name: "Cyberpunk Duo",
    description: "Duotone ciberpunk ciano-magenta.",
    category: "filters",
    previewColor: "#00FFFF",
    htmlExample: `<div class="cyberpunk-duo">CYBER</div>`,
    cssCode: `.cyberpunk-duo {
  filter: sepia(1) hue-rotate(180deg) saturate(4);
  color: #00FFFF;
  text-shadow: 3px 3px 0 #FF00FF, -3px -3px 0 #00FFFF;
}`,
  },
  {
    id: "F-03",
    name: "Noir Drama",
    description: "Drama noir preto e branco contrastado.",
    category: "filters",
    previewColor: "#333333",
    htmlExample: `<img class="noir-drama" src="image.jpg" />`,
    cssCode: `.noir-drama {
  filter: grayscale(100%) contrast(150%) brightness(90%);
}`,
  },
  {
    id: "F-04",
    name: "Dreamy Blur",
    description: "Desfoque sonhador suave.",
    category: "filters",
    previewColor: "#E8D5E4",
    htmlExample: `<div class="dreamy-blur">Dream</div>`,
    cssCode: `.dreamy-blur {
  filter: blur(1px) brightness(110%) saturate(120%);
  text-shadow: 0 0 10px rgba(232, 213, 228, 0.8);
}`,
  },
  {
    id: "F-05",
    name: "Infrared",
    description: "Efeito infravermelho rosa-vermelho.",
    category: "filters",
    previewColor: "#FF1744",
    htmlExample: `<img class="infrared" src="image.jpg" />`,
    cssCode: `.infrared {
  filter: hue-rotate(180deg) saturate(200%) brightness(90%);
}`,
  },
  {
    id: "F-06",
    name: "Underwater",
    description: "Efeito subaquático azul-verde.",
    category: "filters",
    previewColor: "#00BCD4",
    htmlExample: `<img class="underwater" src="image.jpg" />`,
    cssCode: `.underwater {
  filter: hue-rotate(160deg) saturate(150%) brightness(85%) contrast(110%);
}`,
  },
  {
    id: "F-07",
    name: "Pop Art",
    description: "Estilo pop art saturado.",
    category: "filters",
    previewColor: "#FFEB3B",
    htmlExample: `<img class="pop-art" src="image.jpg" />`,
    cssCode: `.pop-art {
  filter: saturate(300%) contrast(150%) brightness(110%);
}`,
  },
  {
    id: "F-08",
    name: "Faded Memory",
    description: "Memória desbotada nostálgica.",
    category: "filters",
    previewColor: "#B0BEC5",
    htmlExample: `<img class="faded-memory" src="image.jpg" />`,
    cssCode: `.faded-memory {
  filter: grayscale(30%) brightness(110%) contrast(85%) sepia(10%);
  opacity: 0.9;
}`,
  },
  {
    id: "F-09",
    name: "Thermal Vision",
    description: "Visão térmica laranja-amarelo.",
    category: "filters",
    previewColor: "#FF6D00",
    htmlExample: `<img class="thermal-vision" src="image.jpg" />`,
    cssCode: `.thermal-vision {
  filter: hue-rotate(-30deg) saturate(400%) contrast(120%);
}`,
  },
  {
    id: "F-10",
    name: "Night Vision",
    description: "Visão noturna verde militar.",
    category: "filters",
    previewColor: "#00FF00",
    htmlExample: `<div class="night-vision">NIGHT</div>`,
    cssCode: `.night-vision {
  filter: hue-rotate(60deg) saturate(200%) brightness(130%);
  color: #00FF00;
  text-shadow: 0 0 10px #00FF00;
}`,
  },
  {
    id: "F-11",
    name: "Chromatic Split",
    description: "Separação cromática RGB intensa.",
    category: "filters",
    previewColor: "#FFFFFF",
    htmlExample: `<div class="chromatic-split">SPLIT</div>`,
    cssCode: `.chromatic-split {
  color: white;
  text-shadow: -4px 0 #FF0000, 4px 0 #00FFFF;
  filter: drop-shadow(0 0 5px rgba(255,255,255,0.5));
}`,
  },
  {
    id: "F-12",
    name: "Sunset Film",
    description: "Filme de pôr do sol quente.",
    category: "filters",
    previewColor: "#FF8A65",
    htmlExample: `<img class="sunset-film" src="image.jpg" />`,
    cssCode: `.sunset-film {
  filter: sepia(30%) saturate(140%) brightness(105%) hue-rotate(-10deg);
}`,
  },
  {
    id: "F-13",
    name: "Cool Tones",
    description: "Tons frios azulados.",
    category: "filters",
    previewColor: "#64B5F6",
    htmlExample: `<img class="cool-tones" src="image.jpg" />`,
    cssCode: `.cool-tones {
  filter: hue-rotate(20deg) saturate(110%) brightness(105%);
}`,
  },
  {
    id: "F-14",
    name: "High Key",
    description: "Alto contraste luminoso.",
    category: "filters",
    previewColor: "#FAFAFA",
    htmlExample: `<img class="high-key" src="image.jpg" />`,
    cssCode: `.high-key {
  filter: brightness(130%) contrast(90%) saturate(80%);
}`,
  },
  {
    id: "F-15",
    name: "Low Key",
    description: "Baixo contraste dramático.",
    category: "filters",
    previewColor: "#212121",
    htmlExample: `<img class="low-key" src="image.jpg" />`,
    cssCode: `.low-key {
  filter: brightness(70%) contrast(140%) saturate(90%);
}`,
  },
  {
    id: "F-16",
    name: "Vignette Dark",
    description: "Vinheta escura nas bordas.",
    category: "filters",
    previewColor: "#1A1A1A",
    htmlExample: `<div class="vignette-dark">Content</div>`,
    cssCode: `.vignette-dark {
  position: relative;
}
.vignette-dark::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.7) 100%);
  pointer-events: none;
}`,
  },
  {
    id: "F-17",
    name: "Circle Mask",
    description: "Máscara circular reveladora.",
    category: "filters",
    previewColor: "#6200EA",
    htmlExample: `<div class="circle-mask">Hidden</div>`,
    cssCode: `.circle-mask {
  clip-path: circle(50% at 50% 50%);
  background: #6200EA;
  color: white;
  padding: 40px;
}`,
  },
  {
    id: "F-18",
    name: "Diamond Cut",
    description: "Corte em forma de diamante.",
    category: "filters",
    previewColor: "#00BFA5",
    htmlExample: `<div class="diamond-cut">Diamond</div>`,
    cssCode: `.diamond-cut {
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  background: #00BFA5;
  color: white;
  padding: 40px;
}`,
  },
  {
    id: "F-19",
    name: "Hexagon Shape",
    description: "Forma hexagonal moderna.",
    category: "filters",
    previewColor: "#FF4081",
    htmlExample: `<div class="hexagon-shape">Hex</div>`,
    cssCode: `.hexagon-shape {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  background: #FF4081;
  color: white;
  padding: 40px;
}`,
  },
  {
    id: "F-20",
    name: "Star Burst",
    description: "Explosão em forma de estrela.",
    category: "filters",
    previewColor: "#FFD600",
    htmlExample: `<div class="star-burst">★</div>`,
    cssCode: `.star-burst {
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  background: #FFD600;
  color: #333;
  padding: 30px;
  font-size: 24px;
}`,
  },

  // ==================== GRADIENTS (20 efeitos) ====================
  {
    id: "D-01",
    name: "Sunset Paradise",
    description: "Gradiente paraíso do pôr do sol.",
    category: "gradients",
    previewColor: "#FF6B6B",
    htmlExample: `<div class="sunset-paradise">Sunset</div>`,
    cssCode: `.sunset-paradise {
  background: linear-gradient(135deg, #FF6B6B 0%, #FFE66D 50%, #4ECDC4 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
}`,
  },
  {
    id: "D-02",
    name: "Ocean Depths",
    description: "Profundezas do oceano azul.",
    category: "gradients",
    previewColor: "#0077B6",
    htmlExample: `<div class="ocean-depths">Ocean</div>`,
    cssCode: `.ocean-depths {
  background: linear-gradient(180deg, #CAF0F8 0%, #90E0EF 25%, #00B4D8 50%, #0077B6 75%, #03045E 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
}`,
  },
  {
    id: "D-03",
    name: "Aurora Borealis",
    description: "Aurora boreal mágica.",
    category: "gradients",
    previewColor: "#00FF88",
    htmlExample: `<div class="aurora-borealis">Aurora</div>`,
    cssCode: `.aurora-borealis {
  background: linear-gradient(135deg, #0F0C29 0%, #302B63 25%, #24243E 50%, #00FF88 75%, #00D9FF 100%);
  color: #00FF88;
  padding: 20px;
  border-radius: 12px;
}`,
  },
  {
    id: "D-04",
    name: "Candy Rush",
    description: "Explosão de doces coloridos.",
    category: "gradients",
    previewColor: "#FF69B4",
    htmlExample: `<div class="candy-rush">Candy</div>`,
    cssCode: `.candy-rush {
  background: linear-gradient(90deg, #FF69B4 0%, #FFB6C1 25%, #87CEEB 50%, #98FB98 75%, #DDA0DD 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}`,
  },
  {
    id: "D-05",
    name: "Lava Flow",
    description: "Fluxo de lava incandescente.",
    category: "gradients",
    previewColor: "#FF4500",
    htmlExample: `<div class="lava-flow">Lava</div>`,
    cssCode: `.lava-flow {
  background: linear-gradient(180deg, #FFD700 0%, #FF8C00 25%, #FF4500 50%, #8B0000 75%, #2F0000 100%);
  color: #FFD700;
  padding: 20px;
  border-radius: 12px;
}`,
  },
  {
    id: "D-06",
    name: "Midnight Galaxy",
    description: "Galáxia da meia-noite.",
    category: "gradients",
    previewColor: "#9D4EDD",
    htmlExample: `<div class="midnight-galaxy">Galaxy</div>`,
    cssCode: `.midnight-galaxy {
  background: linear-gradient(135deg, #0D0221 0%, #240046 25%, #3C096C 50%, #5A189A 75%, #9D4EDD 100%);
  color: #E0AAFF;
  padding: 20px;
  border-radius: 12px;
}`,
  },
  {
    id: "D-07",
    name: "Spring Meadow",
    description: "Prado primavera florido.",
    category: "gradients",
    previewColor: "#7CB342",
    htmlExample: `<div class="spring-meadow">Spring</div>`,
    cssCode: `.spring-meadow {
  background: linear-gradient(135deg, #F9FBE7 0%, #DCE775 25%, #AED581 50%, #7CB342 75%, #558B2F 100%);
  color: #1B5E20;
  padding: 20px;
  border-radius: 12px;
}`,
  },
  {
    id: "D-08",
    name: "Rose Garden",
    description: "Jardim de rosas romântico.",
    category: "gradients",
    previewColor: "#E91E63",
    htmlExample: `<div class="rose-garden">Rose</div>`,
    cssCode: `.rose-garden {
  background: linear-gradient(135deg, #FCE4EC 0%, #F8BBD9 25%, #F48FB1 50%, #EC407A 75%, #C2185B 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
}`,
  },
  {
    id: "D-09",
    name: "Tropical Paradise",
    description: "Paraíso tropical vibrante.",
    category: "gradients",
    previewColor: "#00BFA5",
    htmlExample: `<div class="tropical-paradise">Tropical</div>`,
    cssCode: `.tropical-paradise {
  background: linear-gradient(135deg, #00BFA5 0%, #00E676 25%, #FFEB3B 50%, #FF9800 75%, #FF5722 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
}`,
  },
  {
    id: "D-10",
    name: "Lavender Fields",
    description: "Campos de lavanda serenos.",
    category: "gradients",
    previewColor: "#AB47BC",
    htmlExample: `<div class="lavender-fields">Lavender</div>`,
    cssCode: `.lavender-fields {
  background: linear-gradient(180deg, #E1BEE7 0%, #CE93D8 25%, #BA68C8 50%, #AB47BC 75%, #7B1FA2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
}`,
  },
  {
    id: "D-11",
    name: "Retro Wave",
    description: "Onda retrô synthwave.",
    category: "gradients",
    previewColor: "#FF0080",
    htmlExample: `<div class="retro-wave">RETRO</div>`,
    cssCode: `.retro-wave {
  background: linear-gradient(180deg, #000428 0%, #004E92 30%, #FF0080 60%, #FF8C00 100%);
  color: #FF0080;
  padding: 20px;
  border-radius: 12px;
  text-shadow: 0 0 10px #FF0080;
}`,
  },
  {
    id: "D-12",
    name: "Arctic Freeze",
    description: "Congelamento ártico gelado.",
    category: "gradients",
    previewColor: "#81D4FA",
    htmlExample: `<div class="arctic-freeze">Arctic</div>`,
    cssCode: `.arctic-freeze {
  background: linear-gradient(135deg, #FFFFFF 0%, #E1F5FE 25%, #81D4FA 50%, #29B6F6 75%, #0277BD 100%);
  color: #01579B;
  padding: 20px;
  border-radius: 12px;
}`,
  },
  {
    id: "D-13",
    name: "Golden Hour",
    description: "Hora dourada fotográfica.",
    category: "gradients",
    previewColor: "#FFB300",
    htmlExample: `<div class="golden-hour">Golden</div>`,
    cssCode: `.golden-hour {
  background: linear-gradient(135deg, #FFF8E1 0%, #FFE082 25%, #FFB300 50%, #FF8F00 75%, #E65100 100%);
  color: #3E2723;
  padding: 20px;
  border-radius: 12px;
}`,
  },
  {
    id: "D-14",
    name: "Forest Mist",
    description: "Névoa da floresta misteriosa.",
    category: "gradients",
    previewColor: "#2E7D32",
    htmlExample: `<div class="forest-mist">Forest</div>`,
    cssCode: `.forest-mist {
  background: linear-gradient(180deg, #E8F5E9 0%, #A5D6A7 25%, #66BB6A 50%, #2E7D32 75%, #1B5E20 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
}`,
  },
  {
    id: "D-15",
    name: "Cherry Blossom",
    description: "Flor de cerejeira japonesa.",
    category: "gradients",
    previewColor: "#F48FB1",
    htmlExample: `<div class="cherry-blossom-grad">Sakura</div>`,
    cssCode: `.cherry-blossom-grad {
  background: linear-gradient(135deg, #FFFFFF 0%, #FCE4EC 25%, #F8BBD9 50%, #F48FB1 75%, #EC407A 100%);
  color: #880E4F;
  padding: 20px;
  border-radius: 12px;
}`,
  },
  {
    id: "D-16",
    name: "Neon Night",
    description: "Noite neon urbana.",
    category: "gradients",
    previewColor: "#00FFFF",
    htmlExample: `<div class="neon-night">NEON</div>`,
    cssCode: `.neon-night {
  background: linear-gradient(135deg, #0D0D0D 0%, #1A1A2E 25%, #16213E 50%, #0F3460 75%, #E94560 100%);
  color: #00FFFF;
  padding: 20px;
  border-radius: 12px;
  text-shadow: 0 0 10px #00FFFF, 0 0 20px #00FFFF;
}`,
  },
  {
    id: "D-17",
    name: "Peacock Feather",
    description: "Pena de pavão iridescente.",
    category: "gradients",
    previewColor: "#00796B",
    htmlExample: `<div class="peacock-feather">Peacock</div>`,
    cssCode: `.peacock-feather {
  background: linear-gradient(135deg, #004D40 0%, #00796B 20%, #009688 40%, #4DB6AC 60%, #80DEEA 80%, #1976D2 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
}`,
  },
  {
    id: "D-18",
    name: "Autumn Leaves",
    description: "Folhas de outono coloridas.",
    category: "gradients",
    previewColor: "#FF6F00",
    htmlExample: `<div class="autumn-leaves">Autumn</div>`,
    cssCode: `.autumn-leaves {
  background: linear-gradient(135deg, #FFEB3B 0%, #FFC107 20%, #FF9800 40%, #FF6F00 60%, #F4511E 80%, #BF360C 100%);
  color: white;
  padding: 20px;
  border-radius: 12px;
}`,
  },
  {
    id: "D-19",
    name: "Unicorn Dream",
    description: "Sonho de unicórnio pastel.",
    category: "gradients",
    previewColor: "#E1BEE7",
    htmlExample: `<div class="unicorn-dream">Unicorn</div>`,
    cssCode: `.unicorn-dream {
  background: linear-gradient(135deg, #FFE0B2 0%, #FFCCBC 20%, #F8BBD9 40%, #E1BEE7 60%, #D1C4E9 80%, #B3E5FC 100%);
  color: #6A1B9A;
  padding: 20px;
  border-radius: 12px;
}`,
  },
  {
    id: "D-20",
    name: "Electric Storm",
    description: "Tempestade elétrica dramática.",
    category: "gradients",
    previewColor: "#651FFF",
    htmlExample: `<div class="electric-storm">Storm</div>`,
    cssCode: `.electric-storm {
  background: linear-gradient(135deg, #0D0D0D 0%, #1A237E 25%, #311B92 50%, #651FFF 75%, #00E5FF 100%);
  color: #00E5FF;
  padding: 20px;
  border-radius: 12px;
  text-shadow: 0 0 15px #00E5FF;
}`,
  },
];
