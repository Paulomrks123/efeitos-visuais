export interface Effect {
  id: string;
  name: string;
  description: string;
  category: "glassmorphism" | "neumorphism" | "filters" | "gradients" | "text";
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
  { id: "text", name: "Efeitos de Texto" },
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

  // ==================== TEXT EFFECTS (30 efeitos) ====================
  {
    id: "T-01",
    name: "Cascata Neon",
    description: "Letras caem em cascata uma por uma com brilho neon.",
    category: "text",
    previewColor: "#FF0080",
    htmlExample: `<div class="cascata-neon">
  <span style="--i:1">C</span>
  <span style="--i:2">A</span>
  <span style="--i:3">S</span>
  <span style="--i:4">C</span>
  <span style="--i:5">A</span>
  <span style="--i:6">T</span>
  <span style="--i:7">A</span>
</div>`,
    cssCode: `.cascata-neon {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.cascata-neon span {
  color: #FF0080;
  text-shadow: 0 0 10px #FF0080, 0 0 20px #FF0080, 0 0 40px #FF0080;
  animation: cascataDrop 2s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes cascataDrop {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(-20px); opacity: 0.5; }
}`,
  },
  {
    id: "T-02",
    name: "Espiral Galáctica",
    description: "Letras giram em espiral como uma galáxia.",
    category: "text",
    previewColor: "#9400D3",
    htmlExample: `<div class="espiral-galactica">
  <span style="--i:1">E</span>
  <span style="--i:2">S</span>
  <span style="--i:3">P</span>
  <span style="--i:4">I</span>
  <span style="--i:5">R</span>
  <span style="--i:6">A</span>
  <span style="--i:7">L</span>
</div>`,
    cssCode: `.espiral-galactica {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
  perspective: 500px;
}
.espiral-galactica span {
  background: linear-gradient(135deg, #9400D3, #FF00FF, #00FFFF);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: spiralRotate 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.15s);
  transform-origin: center;
}
@keyframes spiralRotate {
  0% { transform: rotateY(0deg) scale(1); }
  50% { transform: rotateY(180deg) scale(1.2); }
  100% { transform: rotateY(360deg) scale(1); }
}`,
  },
  {
    id: "T-03",
    name: "Onda do Mar",
    description: "Letras ondulam como ondas do oceano.",
    category: "text",
    previewColor: "#00CED1",
    htmlExample: `<div class="onda-mar">
  <span style="--i:1">O</span>
  <span style="--i:2">N</span>
  <span style="--i:3">D</span>
  <span style="--i:4">A</span>
  <span style="--i:5">S</span>
</div>`,
    cssCode: `.onda-mar {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.onda-mar span {
  color: #00CED1;
  text-shadow: 0 0 15px #00CED1, 0 5px 20px rgba(0,206,209,0.5);
  animation: waveMotion 2s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes waveMotion {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-15px) rotate(-5deg); }
  75% { transform: translateY(10px) rotate(5deg); }
}`,
  },
  {
    id: "T-04",
    name: "Digitação Hacker",
    description: "Letras aparecem uma por uma como digitação de terminal.",
    category: "text",
    previewColor: "#00FF00",
    htmlExample: `<div class="digitacao-hacker">
  <span style="--i:1">H</span>
  <span style="--i:2">A</span>
  <span style="--i:3">C</span>
  <span style="--i:4">K</span>
  <span style="--i:5">E</span>
  <span style="--i:6">R</span>
</div>`,
    cssCode: `.digitacao-hacker {
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Courier New', monospace;
  display: flex;
}
.digitacao-hacker span {
  color: #00FF00;
  text-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00;
  opacity: 0;
  animation: typeReveal 3s steps(1) infinite;
  animation-delay: calc(var(--i) * 0.3s);
}
@keyframes typeReveal {
  0%, 15% { opacity: 0; }
  16%, 100% { opacity: 1; }
}`,
  },
  {
    id: "T-05",
    name: "Explosão de Fogo",
    description: "Letras explodem do centro com chamas.",
    category: "text",
    previewColor: "#FF4500",
    htmlExample: `<div class="explosao-fogo">
  <span style="--i:1">F</span>
  <span style="--i:2">O</span>
  <span style="--i:3">G</span>
  <span style="--i:4">O</span>
</div>`,
    cssCode: `.explosao-fogo {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
  gap: 5px;
}
.explosao-fogo span {
  background: linear-gradient(180deg, #FFFF00, #FF8C00, #FF4500, #8B0000);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 20px #FF4500, 0 -10px 30px #FF8C00;
  animation: fireExplode 1.5s ease-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes fireExplode {
  0% { transform: scale(0) translateY(50px); opacity: 0; }
  50% { transform: scale(1.3) translateY(-10px); opacity: 1; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}`,
  },
  {
    id: "T-06",
    name: "Nuvem Flutuante",
    description: "Letras flutuam suavemente como nuvens.",
    category: "text",
    previewColor: "#87CEEB",
    htmlExample: `<div class="nuvem-flutuante">
  <span style="--i:1">N</span>
  <span style="--i:2">U</span>
  <span style="--i:3">V</span>
  <span style="--i:4">E</span>
  <span style="--i:5">M</span>
</div>`,
    cssCode: `.nuvem-flutuante {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.nuvem-flutuante span {
  color: #87CEEB;
  text-shadow: 0 0 20px rgba(135,206,235,0.8), 0 0 40px rgba(255,255,255,0.5);
  animation: cloudFloat 4s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.2s);
}
@keyframes cloudFloat {
  0%, 100% { transform: translateY(0) translateX(0); opacity: 0.8; }
  25% { transform: translateY(-10px) translateX(5px); opacity: 1; }
  50% { transform: translateY(-5px) translateX(-5px); opacity: 0.9; }
  75% { transform: translateY(-15px) translateX(3px); opacity: 1; }
}`,
  },
  {
    id: "T-07",
    name: "Pulso Cardíaco",
    description: "Letras pulsam como batimentos do coração.",
    category: "text",
    previewColor: "#DC143C",
    htmlExample: `<div class="pulso-cardiaco">
  <span style="--i:1">❤</span>
  <span style="--i:2">P</span>
  <span style="--i:3">U</span>
  <span style="--i:4">L</span>
  <span style="--i:5">S</span>
  <span style="--i:6">O</span>
</div>`,
    cssCode: `.pulso-cardiaco {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.pulso-cardiaco span {
  color: #DC143C;
  text-shadow: 0 0 10px #DC143C, 0 0 30px #FF0000;
  animation: heartPulse 1s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes heartPulse {
  0%, 100% { transform: scale(1); }
  15% { transform: scale(1.3); }
  30% { transform: scale(1); }
  45% { transform: scale(1.2); }
  60% { transform: scale(1); }
}`,
  },
  {
    id: "T-08",
    name: "Flip 3D",
    description: "Letras giram em 3D uma após a outra.",
    category: "text",
    previewColor: "#FFD700",
    htmlExample: `<div class="flip-3d">
  <span style="--i:1">F</span>
  <span style="--i:2">L</span>
  <span style="--i:3">I</span>
  <span style="--i:4">P</span>
</div>`,
    cssCode: `.flip-3d {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
  perspective: 1000px;
}
.flip-3d span {
  background: linear-gradient(180deg, #FFF9C4, #FFD700, #FFA000);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  animation: flip3d 2s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.2s);
  transform-style: preserve-3d;
}
@keyframes flip3d {
  0%, 100% { transform: rotateX(0deg); }
  50% { transform: rotateX(360deg); }
}`,
  },
  {
    id: "T-09",
    name: "Elástico Bounce",
    description: "Letras saltam com efeito elástico.",
    category: "text",
    previewColor: "#FF69B4",
    htmlExample: `<div class="elastico-bounce">
  <span style="--i:1">B</span>
  <span style="--i:2">O</span>
  <span style="--i:3">U</span>
  <span style="--i:4">N</span>
  <span style="--i:5">C</span>
  <span style="--i:6">E</span>
</div>`,
    cssCode: `.elastico-bounce {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.elastico-bounce span {
  color: #FF69B4;
  text-shadow: 0 0 15px #FF69B4;
  animation: elasticBounce 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes elasticBounce {
  0%, 100% { transform: translateY(0) scaleY(1); }
  30% { transform: translateY(-30px) scaleY(1.1); }
  50% { transform: translateY(0) scaleY(0.9); }
  70% { transform: translateY(-15px) scaleY(1.05); }
}`,
  },
  {
    id: "T-10",
    name: "Glitch Cyberpunk",
    description: "Letras com glitch cyberpunk intenso.",
    category: "text",
    previewColor: "#39FF14",
    htmlExample: `<div class="glitch-cyber">
  <span style="--i:1">G</span>
  <span style="--i:2">L</span>
  <span style="--i:3">I</span>
  <span style="--i:4">T</span>
  <span style="--i:5">C</span>
  <span style="--i:6">H</span>
</div>`,
    cssCode: `.glitch-cyber {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.glitch-cyber span {
  color: #39FF14;
  text-shadow: 2px 0 #FF0080, -2px 0 #00FFFF;
  animation: glitchLetter 0.5s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.05s);
}
@keyframes glitchLetter {
  0%, 100% { transform: translate(0); text-shadow: 2px 0 #FF0080, -2px 0 #00FFFF; }
  20% { transform: translate(-2px, 2px); text-shadow: -2px 0 #FF0080, 2px 0 #00FFFF; }
  40% { transform: translate(2px, -2px); clip-path: inset(30% 0 40% 0); }
  60% { transform: translate(-1px, 1px); clip-path: inset(50% 0 20% 0); }
  80% { transform: translate(1px, -1px); clip-path: inset(10% 0 60% 0); }
}`,
  },
  {
    id: "T-11",
    name: "Fade Sequencial",
    description: "Letras aparecem em fade uma por uma.",
    category: "text",
    previewColor: "#E0E7FF",
    htmlExample: `<div class="fade-sequencial">
  <span style="--i:1">F</span>
  <span style="--i:2">A</span>
  <span style="--i:3">D</span>
  <span style="--i:4">E</span>
</div>`,
    cssCode: `.fade-sequencial {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.fade-sequencial span {
  background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: fadeIn 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.3s);
}
@keyframes fadeIn {
  0%, 20% { opacity: 0; transform: translateY(20px); }
  30%, 70% { opacity: 1; transform: translateY(0); }
  80%, 100% { opacity: 0; transform: translateY(-20px); }
}`,
  },
  {
    id: "T-12",
    name: "Rotação Orbital",
    description: "Letras orbitam em círculo.",
    category: "text",
    previewColor: "#00BFFF",
    htmlExample: `<div class="rotacao-orbital">
  <span style="--i:1">O</span>
  <span style="--i:2">R</span>
  <span style="--i:3">B</span>
  <span style="--i:4">I</span>
  <span style="--i:5">T</span>
</div>`,
    cssCode: `.rotacao-orbital {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
  gap: 5px;
}
.rotacao-orbital span {
  color: #00BFFF;
  text-shadow: 0 0 15px #00BFFF, 0 0 30px #1E90FF;
  animation: orbitalSpin 4s linear infinite;
  animation-delay: calc(var(--i) * 0.2s);
}
@keyframes orbitalSpin {
  0% { transform: rotate(0deg) translateY(0); }
  25% { transform: rotate(10deg) translateY(-10px); }
  50% { transform: rotate(0deg) translateY(0); }
  75% { transform: rotate(-10deg) translateY(10px); }
  100% { transform: rotate(0deg) translateY(0); }
}`,
  },
  {
    id: "T-13",
    name: "Zoom Explosivo",
    description: "Letras crescem do nada com zoom.",
    category: "text",
    previewColor: "#FF4500",
    htmlExample: `<div class="zoom-explosivo">
  <span style="--i:1">Z</span>
  <span style="--i:2">O</span>
  <span style="--i:3">O</span>
  <span style="--i:4">M</span>
</div>`,
    cssCode: `.zoom-explosivo {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.zoom-explosivo span {
  background: linear-gradient(180deg, #FF4500, #FF8C00, #FFD700);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 20px #FF4500;
  animation: zoomExplode 2s ease-out infinite;
  animation-delay: calc(var(--i) * 0.15s);
}
@keyframes zoomExplode {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.5); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
}`,
  },
  {
    id: "T-14",
    name: "Shake Terremoto",
    description: "Letras tremem como terremoto.",
    category: "text",
    previewColor: "#8B4513",
    htmlExample: `<div class="shake-terremoto">
  <span style="--i:1">S</span>
  <span style="--i:2">H</span>
  <span style="--i:3">A</span>
  <span style="--i:4">K</span>
  <span style="--i:5">E</span>
</div>`,
    cssCode: `.shake-terremoto {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.shake-terremoto span {
  color: #8B4513;
  text-shadow: 2px 2px 4px #654321;
  animation: earthquake 0.3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.05s);
}
@keyframes earthquake {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(-3px, 2px) rotate(-2deg); }
  50% { transform: translate(3px, -2px) rotate(2deg); }
  75% { transform: translate(-2px, -3px) rotate(-1deg); }
}`,
  },
  {
    id: "T-15",
    name: "Slide Lateral",
    description: "Letras deslizam da esquerda para posição.",
    category: "text",
    previewColor: "#9370DB",
    htmlExample: `<div class="slide-lateral">
  <span style="--i:1">S</span>
  <span style="--i:2">L</span>
  <span style="--i:3">I</span>
  <span style="--i:4">D</span>
  <span style="--i:5">E</span>
</div>`,
    cssCode: `.slide-lateral {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.slide-lateral span {
  color: #9370DB;
  text-shadow: 0 0 15px #9370DB, 0 0 30px #8A2BE2;
  animation: slideIn 3s ease-out infinite;
  animation-delay: calc(var(--i) * 0.2s);
}
@keyframes slideIn {
  0%, 10% { transform: translateX(-100px); opacity: 0; }
  20%, 80% { transform: translateX(0); opacity: 1; }
  90%, 100% { transform: translateX(100px); opacity: 0; }
}`,
  },
  {
    id: "T-16",
    name: "Jelly Gelatina",
    description: "Letras balançam como gelatina.",
    category: "text",
    previewColor: "#FF1493",
    htmlExample: `<div class="jelly-gelatina">
  <span style="--i:1">J</span>
  <span style="--i:2">E</span>
  <span style="--i:3">L</span>
  <span style="--i:4">L</span>
  <span style="--i:5">Y</span>
</div>`,
    cssCode: `.jelly-gelatina {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.jelly-gelatina span {
  color: #FF1493;
  text-shadow: 0 0 10px #FF1493, 0 0 20px #FF69B4;
  animation: jellyWobble 1.5s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes jellyWobble {
  0%, 100% { transform: scaleX(1) scaleY(1); }
  25% { transform: scaleX(1.2) scaleY(0.8); }
  50% { transform: scaleX(0.9) scaleY(1.1); }
  75% { transform: scaleX(1.1) scaleY(0.9); }
}`,
  },
  {
    id: "T-17",
    name: "Swing Pêndulo",
    description: "Letras balançam como pêndulos.",
    category: "text",
    previewColor: "#20B2AA",
    htmlExample: `<div class="swing-pendulo">
  <span style="--i:1">S</span>
  <span style="--i:2">W</span>
  <span style="--i:3">I</span>
  <span style="--i:4">N</span>
  <span style="--i:5">G</span>
</div>`,
    cssCode: `.swing-pendulo {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.swing-pendulo span {
  color: #20B2AA;
  text-shadow: 0 0 10px #20B2AA;
  transform-origin: top center;
  animation: pendulumSwing 2s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes pendulumSwing {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  75% { transform: rotate(-15deg); }
}`,
  },
  {
    id: "T-18",
    name: "Pop Bolha",
    description: "Letras aparecem como bolhas estourando.",
    category: "text",
    previewColor: "#87CEEB",
    htmlExample: `<div class="pop-bolha">
  <span style="--i:1">P</span>
  <span style="--i:2">O</span>
  <span style="--i:3">P</span>
</div>`,
    cssCode: `.pop-bolha {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
  gap: 5px;
}
.pop-bolha span {
  color: #87CEEB;
  text-shadow: 0 0 20px rgba(135,206,235,0.8);
  animation: bubblePop 2s ease-out infinite;
  animation-delay: calc(var(--i) * 0.3s);
}
@keyframes bubblePop {
  0% { transform: scale(0); opacity: 0; border-radius: 50%; }
  50% { transform: scale(1.3); opacity: 1; }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); opacity: 1; }
}`,
  },
  {
    id: "T-19",
    name: "Máquina Escrever",
    description: "Efeito typewriter com cursor piscando.",
    category: "text",
    previewColor: "#00FF00",
    htmlExample: `<div class="maquina-escrever">
  <span style="--i:1">T</span>
  <span style="--i:2">Y</span>
  <span style="--i:3">P</span>
  <span style="--i:4">E</span>
  <span class="cursor">|</span>
</div>`,
    cssCode: `.maquina-escrever {
  font-size: 3rem;
  font-weight: 400;
  font-family: 'Courier New', monospace;
  display: flex;
}
.maquina-escrever span {
  color: #00FF00;
  text-shadow: 0 0 10px #00FF00;
  opacity: 0;
  animation: typeChar 4s steps(1) infinite;
  animation-delay: calc(var(--i) * 0.4s);
}
.maquina-escrever .cursor {
  animation: blinkCursor 0.5s infinite;
}
@keyframes typeChar {
  0%, 20% { opacity: 0; }
  25%, 100% { opacity: 1; }
}
@keyframes blinkCursor {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}`,
  },
  {
    id: "T-20",
    name: "Raio Elétrico",
    description: "Letras com descarga elétrica entre elas.",
    category: "text",
    previewColor: "#FFFF00",
    htmlExample: `<div class="raio-eletrico">
  <span style="--i:1">⚡</span>
  <span style="--i:2">Z</span>
  <span style="--i:3">A</span>
  <span style="--i:4">P</span>
  <span style="--i:5">⚡</span>
</div>`,
    cssCode: `.raio-eletrico {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.raio-eletrico span {
  color: #FFFF00;
  text-shadow: 0 0 10px #FFFF00, 0 0 20px #FFD700, 0 0 40px #FFA500;
  animation: electricZap 0.2s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.05s);
}
@keyframes electricZap {
  0%, 100% { transform: translateX(0); filter: brightness(1); }
  25% { transform: translateX(-2px); filter: brightness(1.5); }
  50% { transform: translateX(2px); filter: brightness(2); }
  75% { transform: translateX(-1px); filter: brightness(1.3); }
}`,
  },
  {
    id: "T-21",
    name: "Fumaça Subindo",
    description: "Letras sobem e dissipam como fumaça.",
    category: "text",
    previewColor: "#696969",
    htmlExample: `<div class="fumaca-subindo">
  <span style="--i:1">S</span>
  <span style="--i:2">M</span>
  <span style="--i:3">O</span>
  <span style="--i:4">K</span>
  <span style="--i:5">E</span>
</div>`,
    cssCode: `.fumaca-subindo {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.fumaca-subindo span {
  color: #696969;
  animation: smokeRise 4s ease-out infinite;
  animation-delay: calc(var(--i) * 0.2s);
}
@keyframes smokeRise {
  0% { transform: translateY(0); opacity: 1; filter: blur(0); }
  50% { transform: translateY(-30px); opacity: 0.6; filter: blur(1px); }
  100% { transform: translateY(-60px); opacity: 0; filter: blur(3px); }
}`,
  },
  {
    id: "T-22",
    name: "Arco-Íris Dança",
    description: "Letras dançam com cores arco-íris.",
    category: "text",
    previewColor: "#FF0000",
    htmlExample: `<div class="arco-iris-danca">
  <span style="--i:1; --c:#FF0000">D</span>
  <span style="--i:2; --c:#FF7F00">A</span>
  <span style="--i:3; --c:#FFFF00">N</span>
  <span style="--i:4; --c:#00FF00">C</span>
  <span style="--i:5; --c:#0000FF">E</span>
</div>`,
    cssCode: `.arco-iris-danca {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.arco-iris-danca span {
  color: var(--c);
  text-shadow: 0 0 10px var(--c), 0 0 20px var(--c);
  animation: rainbowDance 1s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes rainbowDance {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-15px) rotate(-10deg); }
  50% { transform: translateY(0) rotate(0deg); }
  75% { transform: translateY(-10px) rotate(10deg); }
}`,
  },
  {
    id: "T-23",
    name: "Gotejamento",
    description: "Letras pingam como líquido.",
    category: "text",
    previewColor: "#8B0000",
    htmlExample: `<div class="gotejamento">
  <span style="--i:1">D</span>
  <span style="--i:2">R</span>
  <span style="--i:3">I</span>
  <span style="--i:4">P</span>
</div>`,
    cssCode: `.gotejamento {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.gotejamento span {
  background: linear-gradient(180deg, #DC143C, #8B0000, #4A0000);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: dripDown 3s ease-in infinite;
  animation-delay: calc(var(--i) * 0.3s);
}
@keyframes dripDown {
  0%, 20% { transform: translateY(-20px); opacity: 0; }
  40% { transform: translateY(5px); opacity: 1; }
  60% { transform: translateY(-3px); }
  80%, 100% { transform: translateY(0); opacity: 1; }
}`,
  },
  {
    id: "T-24",
    name: "Cristal Gelo",
    description: "Letras cristalizam como gelo.",
    category: "text",
    previewColor: "#E0FFFF",
    htmlExample: `<div class="cristal-gelo">
  <span style="--i:1">I</span>
  <span style="--i:2">C</span>
  <span style="--i:3">E</span>
</div>`,
    cssCode: `.cristal-gelo {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.cristal-gelo span {
  color: #E0FFFF;
  text-shadow: 0 0 10px #00CED1, 0 0 20px #87CEEB, 0 0 30px #E0FFFF;
  animation: iceForm 2s ease-out infinite;
  animation-delay: calc(var(--i) * 0.2s);
}
@keyframes iceForm {
  0% { transform: scale(0.5); opacity: 0; filter: blur(5px); }
  50% { transform: scale(1.1); opacity: 1; filter: blur(0); }
  100% { transform: scale(1); opacity: 1; filter: blur(0) brightness(1.2); }
}`,
  },
  {
    id: "T-25",
    name: "Helicóptero",
    description: "Letras giram caindo como hélice.",
    category: "text",
    previewColor: "#32CD32",
    htmlExample: `<div class="helicoptero">
  <span style="--i:1">H</span>
  <span style="--i:2">E</span>
  <span style="--i:3">L</span>
  <span style="--i:4">I</span>
</div>`,
    cssCode: `.helicoptero {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.helicoptero span {
  color: #32CD32;
  text-shadow: 0 0 10px #32CD32;
  animation: heliSpin 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.2s);
}
@keyframes heliSpin {
  0% { transform: translateY(-50px) rotate(0deg); opacity: 0; }
  50% { transform: translateY(0) rotate(360deg); opacity: 1; }
  100% { transform: translateY(50px) rotate(720deg); opacity: 0; }
}`,
  },
  {
    id: "T-26",
    name: "Explosão Estrelas",
    description: "Letras explodem como estrelas.",
    category: "text",
    previewColor: "#FFD700",
    htmlExample: `<div class="explosao-estrelas">
  <span style="--i:1">★</span>
  <span style="--i:2">S</span>
  <span style="--i:3">T</span>
  <span style="--i:4">A</span>
  <span style="--i:5">R</span>
  <span style="--i:6">★</span>
</div>`,
    cssCode: `.explosao-estrelas {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.explosao-estrelas span {
  color: #FFD700;
  text-shadow: 0 0 10px #FFD700, 0 0 20px #FFA500, 0 0 40px #FF8C00;
  animation: starBurst 2s ease-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes starBurst {
  0% { transform: scale(0) rotate(0deg); opacity: 0; }
  50% { transform: scale(1.5) rotate(180deg); opacity: 1; }
  100% { transform: scale(1) rotate(360deg); opacity: 1; }
}`,
  },
  {
    id: "T-27",
    name: "Dominó Queda",
    description: "Letras caem como peças de dominó.",
    category: "text",
    previewColor: "#1E90FF",
    htmlExample: `<div class="domino-queda">
  <span style="--i:1">D</span>
  <span style="--i:2">O</span>
  <span style="--i:3">M</span>
  <span style="--i:4">I</span>
  <span style="--i:5">N</span>
  <span style="--i:6">O</span>
</div>`,
    cssCode: `.domino-queda {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.domino-queda span {
  color: #1E90FF;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  transform-origin: bottom center;
  animation: dominoFall 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.15s);
}
@keyframes dominoFall {
  0%, 20% { transform: rotateX(-90deg); opacity: 0; }
  30%, 70% { transform: rotateX(0deg); opacity: 1; }
  80%, 100% { transform: rotateX(90deg); opacity: 0; }
}`,
  },
  {
    id: "T-28",
    name: "Píxel Formando",
    description: "Letras se formam de pixels.",
    category: "text",
    previewColor: "#00FF00",
    htmlExample: `<div class="pixel-formando">
  <span style="--i:1">P</span>
  <span style="--i:2">I</span>
  <span style="--i:3">X</span>
  <span style="--i:4">E</span>
  <span style="--i:5">L</span>
</div>`,
    cssCode: `.pixel-formando {
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Courier New', monospace;
  display: flex;
}
.pixel-formando span {
  color: #00FF00;
  text-shadow: 0 0 5px #00FF00;
  animation: pixelForm 2s steps(5) infinite;
  animation-delay: calc(var(--i) * 0.2s);
}
@keyframes pixelForm {
  0% { opacity: 0; filter: blur(10px); transform: scale(2); }
  25% { opacity: 0.3; filter: blur(5px); transform: scale(1.5); }
  50% { opacity: 0.6; filter: blur(2px); transform: scale(1.2); }
  75% { opacity: 0.9; filter: blur(1px); transform: scale(1.05); }
  100% { opacity: 1; filter: blur(0); transform: scale(1); }
}`,
  },
  {
    id: "T-29",
    name: "Relâmpago Flash",
    description: "Letras brilham como relâmpagos.",
    category: "text",
    previewColor: "#FFFFFF",
    htmlExample: `<div class="relampago-flash">
  <span style="--i:1">⚡</span>
  <span style="--i:2">F</span>
  <span style="--i:3">L</span>
  <span style="--i:4">A</span>
  <span style="--i:5">S</span>
  <span style="--i:6">H</span>
</div>`,
    cssCode: `.relampago-flash {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.relampago-flash span {
  color: #FFFFFF;
  text-shadow: 0 0 10px #FFFFFF, 0 0 20px #87CEEB, 0 0 40px #00BFFF;
  animation: lightningFlash 2s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes lightningFlash {
  0%, 90%, 100% { opacity: 0.3; filter: brightness(0.5); }
  5%, 15%, 25% { opacity: 1; filter: brightness(2); }
  10%, 20% { opacity: 0.5; filter: brightness(0.8); }
}`,
  },
  {
    id: "T-30",
    name: "Galáxia Espiral",
    description: "Letras em espiral cósmica.",
    category: "text",
    previewColor: "#9400D3",
    htmlExample: `<div class="galaxia-espiral">
  <span style="--i:1">G</span>
  <span style="--i:2">A</span>
  <span style="--i:3">L</span>
  <span style="--i:4">A</span>
  <span style="--i:5">X</span>
  <span style="--i:6">Y</span>
</div>`,
    cssCode: `.galaxia-espiral {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
  perspective: 800px;
}
.galaxia-espiral span {
  background: linear-gradient(135deg, #9400D3, #4B0082, #00BFFF, #9400D3);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 20px rgba(148,0,211,0.5);
  animation: galaxySpin 5s ease-in-out infinite, galaxyColor 3s ease infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes galaxySpin {
  0% { transform: rotateZ(0deg) rotateY(0deg) translateZ(0); }
  25% { transform: rotateZ(90deg) rotateY(180deg) translateZ(20px); }
  50% { transform: rotateZ(180deg) rotateY(360deg) translateZ(0); }
  75% { transform: rotateZ(270deg) rotateY(180deg) translateZ(-20px); }
  100% { transform: rotateZ(360deg) rotateY(0deg) translateZ(0); }
}
@keyframes galaxyColor {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
  },

  // ==================== TEXT APPEARANCE EFFECTS (20 efeitos) ====================
  {
    id: "T-31",
    name: "Portal Dimensional",
    description: "Letras emergem de um portal mágico.",
    category: "text",
    previewColor: "#8A2BE2",
    htmlExample: `<div class="portal-dimensional">
  <span style="--i:1">P</span>
  <span style="--i:2">O</span>
  <span style="--i:3">R</span>
  <span style="--i:4">T</span>
  <span style="--i:5">A</span>
  <span style="--i:6">L</span>
</div>`,
    cssCode: `.portal-dimensional {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
  perspective: 1000px;
}
.portal-dimensional span {
  color: #8A2BE2;
  text-shadow: 0 0 20px #8A2BE2, 0 0 40px #9400D3;
  animation: portalEmerge 3s ease-out infinite;
  animation-delay: calc(var(--i) * 0.15s);
}
@keyframes portalEmerge {
  0% { transform: translateZ(-500px) rotateY(720deg) scale(0); opacity: 0; filter: blur(20px); }
  50% { transform: translateZ(50px) rotateY(360deg) scale(1.2); opacity: 1; filter: blur(0); }
  100% { transform: translateZ(0) rotateY(0deg) scale(1); opacity: 1; }
}`,
  },
  {
    id: "T-32",
    name: "Hologram Scan",
    description: "Texto aparece com linhas de varredura holográfica.",
    category: "text",
    previewColor: "#00FFFF",
    htmlExample: `<div class="hologram-scan">
  <span style="--i:1">H</span>
  <span style="--i:2">O</span>
  <span style="--i:3">L</span>
  <span style="--i:4">O</span>
</div>`,
    cssCode: `.hologram-scan {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
  position: relative;
}
.hologram-scan span {
  color: #00FFFF;
  text-shadow: 0 0 10px #00FFFF, 0 0 20px #00CED1;
  background: repeating-linear-gradient(
    0deg,
    transparent 0px,
    transparent 2px,
    rgba(0,255,255,0.1) 2px,
    rgba(0,255,255,0.1) 4px
  );
  -webkit-background-clip: text;
  animation: holoScan 2s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes holoScan {
  0% { opacity: 0; transform: translateY(20px); clip-path: inset(100% 0 0 0); }
  50% { opacity: 0.7; clip-path: inset(50% 0 0 0); }
  100% { opacity: 1; transform: translateY(0); clip-path: inset(0 0 0 0); }
}`,
  },
  {
    id: "T-33",
    name: "DNA Helix",
    description: "Letras formam uma espiral de DNA.",
    category: "text",
    previewColor: "#00FF7F",
    htmlExample: `<div class="dna-helix">
  <span style="--i:1">D</span>
  <span style="--i:2">N</span>
  <span style="--i:3">A</span>
</div>`,
    cssCode: `.dna-helix {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
  gap: 10px;
  perspective: 500px;
}
.dna-helix span {
  color: #00FF7F;
  text-shadow: 0 0 15px #00FF7F, 0 0 30px #32CD32;
  animation: dnaSpiral 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.3s);
}
@keyframes dnaSpiral {
  0% { transform: rotateX(0deg) translateY(0) translateZ(0); }
  25% { transform: rotateX(90deg) translateY(-20px) translateZ(30px); }
  50% { transform: rotateX(180deg) translateY(0) translateZ(0); }
  75% { transform: rotateX(270deg) translateY(20px) translateZ(-30px); }
  100% { transform: rotateX(360deg) translateY(0) translateZ(0); }
}`,
  },
  {
    id: "T-34",
    name: "Partículas Magnéticas",
    description: "Partículas se juntam formando letras.",
    category: "text",
    previewColor: "#FF6347",
    htmlExample: `<div class="particulas-magneticas">
  <span style="--i:1; --x:-50px; --y:-30px">M</span>
  <span style="--i:2; --x:40px; --y:-40px">A</span>
  <span style="--i:3; --x:-30px; --y:50px">G</span>
  <span style="--i:4; --x:60px; --y:30px">N</span>
  <span style="--i:5; --x:-40px; --y:-50px">E</span>
  <span style="--i:6; --x:50px; --y:40px">T</span>
</div>`,
    cssCode: `.particulas-magneticas {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.particulas-magneticas span {
  color: #FF6347;
  text-shadow: 0 0 10px #FF6347, 0 0 20px #FF4500;
  animation: magneticPull 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes magneticPull {
  0% { transform: translate(var(--x, 0), var(--y, 0)) rotate(360deg) scale(0); opacity: 0; }
  50% { transform: translate(calc(var(--x, 0) / 2), calc(var(--y, 0) / 2)) rotate(180deg) scale(1.3); opacity: 1; }
  100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
}`,
  },
  {
    id: "T-35",
    name: "Gravidade Zero",
    description: "Letras flutuam em gravidade zero.",
    category: "text",
    previewColor: "#E0E0E0",
    htmlExample: `<div class="gravidade-zero">
  <span style="--i:1; --r:5deg">Z</span>
  <span style="--i:2; --r:-3deg">E</span>
  <span style="--i:3; --r:4deg">R</span>
  <span style="--i:4; --r:-6deg">O</span>
</div>`,
    cssCode: `.gravidade-zero {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.gravidade-zero span {
  color: #E0E0E0;
  text-shadow: 0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(200,200,200,0.5);
  animation: zeroGravity 6s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.5s);
}
@keyframes zeroGravity {
  0%, 100% { transform: translateY(0) rotate(var(--r, 0)); }
  25% { transform: translateY(-20px) rotate(calc(var(--r, 0) * -1)); }
  50% { transform: translateY(10px) rotate(var(--r, 0)); }
  75% { transform: translateY(-15px) rotate(calc(var(--r, 0) * 2)); }
}`,
  },
  {
    id: "T-36",
    name: "Cortina Revelação",
    description: "Texto revelado como cortina abrindo.",
    category: "text",
    previewColor: "#FFD700",
    htmlExample: `<div class="cortina-revelacao">
  <span style="--i:1">C</span>
  <span style="--i:2">O</span>
  <span style="--i:3">R</span>
  <span style="--i:4">T</span>
  <span style="--i:5">I</span>
  <span style="--i:6">N</span>
  <span style="--i:7">A</span>
</div>`,
    cssCode: `.cortina-revelacao {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.cortina-revelacao span {
  background: linear-gradient(180deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  animation: curtainReveal 4s ease-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes curtainReveal {
  0% { clip-path: polygon(0 0, 0 0, 0 100%, 0 100%); transform: scaleX(0); }
  50% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); transform: scaleX(1); }
  100% { clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%); transform: scaleX(1); }
}`,
  },
  {
    id: "T-37",
    name: "Explosão Supernova",
    description: "Letras explodem como uma supernova.",
    category: "text",
    previewColor: "#FF4500",
    htmlExample: `<div class="explosao-supernova">
  <span style="--i:1">N</span>
  <span style="--i:2">O</span>
  <span style="--i:3">V</span>
  <span style="--i:4">A</span>
</div>`,
    cssCode: `.explosao-supernova {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.explosao-supernova span {
  background: linear-gradient(135deg, #FFFF00, #FF8C00, #FF4500, #FF0000);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 30px #FF4500, 0 0 60px #FF8C00;
  animation: supernovaExplode 2s ease-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes supernovaExplode {
  0% { transform: scale(0); opacity: 0; filter: brightness(0); }
  30% { transform: scale(2); opacity: 1; filter: brightness(3); }
  60% { transform: scale(0.8); filter: brightness(1.5); }
  100% { transform: scale(1); opacity: 1; filter: brightness(1); }
}`,
  },
  {
    id: "T-38",
    name: "Onda Sísmica",
    description: "Texto aparece com ondas sísmicas.",
    category: "text",
    previewColor: "#8B4513",
    htmlExample: `<div class="onda-sismica">
  <span style="--i:1">Q</span>
  <span style="--i:2">U</span>
  <span style="--i:3">A</span>
  <span style="--i:4">K</span>
  <span style="--i:5">E</span>
</div>`,
    cssCode: `.onda-sismica {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.onda-sismica span {
  color: #8B4513;
  text-shadow: 3px 3px 6px rgba(0,0,0,0.5);
  animation: seismicWave 1.5s ease-out infinite;
  animation-delay: calc(var(--i) * 0.08s);
}
@keyframes seismicWave {
  0% { transform: translateY(100px) scaleY(0); opacity: 0; }
  20% { transform: translateY(-20px) scaleY(1.3); opacity: 1; }
  40% { transform: translateY(10px) scaleY(0.9); }
  60% { transform: translateY(-5px) scaleY(1.1); }
  80% { transform: translateY(3px) scaleY(0.95); }
  100% { transform: translateY(0) scaleY(1); opacity: 1; }
}`,
  },
  {
    id: "T-39",
    name: "Teletransporte",
    description: "Letras teletransportam com efeito sci-fi.",
    category: "text",
    previewColor: "#00CED1",
    htmlExample: `<div class="teletransporte">
  <span style="--i:1">B</span>
  <span style="--i:2">E</span>
  <span style="--i:3">A</span>
  <span style="--i:4">M</span>
</div>`,
    cssCode: `.teletransporte {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.teletransporte span {
  color: #00CED1;
  text-shadow: 0 0 20px #00CED1, 0 0 40px #00FFFF;
  animation: teleportBeam 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.2s);
}
@keyframes teleportBeam {
  0% { transform: scaleY(0) translateY(-50px); opacity: 0; filter: blur(10px); }
  30% { transform: scaleY(3) translateY(0); opacity: 0.5; filter: blur(5px); }
  50% { transform: scaleY(1) translateY(0); opacity: 1; filter: blur(0); }
  100% { transform: scaleY(1) translateY(0); opacity: 1; filter: blur(0); }
}`,
  },
  {
    id: "T-40",
    name: "Origami Dobra",
    description: "Letras se desdobram como origami.",
    category: "text",
    previewColor: "#FF69B4",
    htmlExample: `<div class="origami-dobra">
  <span style="--i:1">F</span>
  <span style="--i:2">O</span>
  <span style="--i:3">L</span>
  <span style="--i:4">D</span>
</div>`,
    cssCode: `.origami-dobra {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
  perspective: 800px;
}
.origami-dobra span {
  color: #FF69B4;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  transform-origin: left center;
  animation: origamiFold 3s ease-out infinite;
  animation-delay: calc(var(--i) * 0.2s);
}
@keyframes origamiFold {
  0% { transform: rotateY(-90deg); opacity: 0; }
  50% { transform: rotateY(20deg); opacity: 1; }
  70% { transform: rotateY(-10deg); }
  100% { transform: rotateY(0deg); opacity: 1; }
}`,
  },
  {
    id: "T-41",
    name: "Buraco Negro",
    description: "Letras emergem de um buraco negro.",
    category: "text",
    previewColor: "#4B0082",
    htmlExample: `<div class="buraco-negro">
  <span style="--i:1">V</span>
  <span style="--i:2">O</span>
  <span style="--i:3">I</span>
  <span style="--i:4">D</span>
</div>`,
    cssCode: `.buraco-negro {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
  perspective: 1000px;
}
.buraco-negro span {
  background: linear-gradient(135deg, #4B0082, #8A2BE2, #9400D3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 30px #4B0082;
  animation: blackHoleEmerge 4s ease-out infinite;
  animation-delay: calc(var(--i) * 0.2s);
}
@keyframes blackHoleEmerge {
  0% { transform: scale(0) rotate(720deg) translateZ(-200px); opacity: 0; filter: blur(20px); }
  50% { transform: scale(1.3) rotate(360deg) translateZ(50px); opacity: 1; filter: blur(0); }
  100% { transform: scale(1) rotate(0deg) translateZ(0); opacity: 1; }
}`,
  },
  {
    id: "T-42",
    name: "Código Matrix",
    description: "Letras caem como código Matrix.",
    category: "text",
    previewColor: "#00FF00",
    htmlExample: `<div class="codigo-matrix">
  <span style="--i:1; --d:0.3s">M</span>
  <span style="--i:2; --d:0.6s">A</span>
  <span style="--i:3; --d:0.1s">T</span>
  <span style="--i:4; --d:0.8s">R</span>
  <span style="--i:5; --d:0.4s">I</span>
  <span style="--i:6; --d:0.2s">X</span>
</div>`,
    cssCode: `.codigo-matrix {
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Courier New', monospace;
  display: flex;
}
.codigo-matrix span {
  color: #00FF00;
  text-shadow: 0 0 10px #00FF00, 0 0 20px #00FF00, 0 0 40px #00FF00;
  animation: matrixFall 2s linear infinite;
  animation-delay: var(--d, 0s);
}
@keyframes matrixFall {
  0% { transform: translateY(-100px); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100px); opacity: 0; }
}`,
  },
  {
    id: "T-43",
    name: "Cristalização",
    description: "Letras cristalizam do nada.",
    category: "text",
    previewColor: "#E0FFFF",
    htmlExample: `<div class="cristalizacao">
  <span style="--i:1">C</span>
  <span style="--i:2">R</span>
  <span style="--i:3">Y</span>
  <span style="--i:4">S</span>
  <span style="--i:5">T</span>
  <span style="--i:6">A</span>
  <span style="--i:7">L</span>
</div>`,
    cssCode: `.cristalizacao {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.cristalizacao span {
  color: #E0FFFF;
  text-shadow: 0 0 10px #E0FFFF, 0 0 20px #87CEEB, 0 0 40px #00CED1;
  animation: crystalForm 3s ease-out infinite;
  animation-delay: calc(var(--i) * 0.15s);
}
@keyframes crystalForm {
  0% { transform: scale(0) rotate(-45deg); opacity: 0; filter: blur(10px) brightness(3); }
  30% { transform: scale(1.2) rotate(10deg); opacity: 1; filter: blur(0) brightness(2); }
  50% { transform: scale(0.9) rotate(-5deg); filter: brightness(1.5); }
  70% { transform: scale(1.05) rotate(2deg); filter: brightness(1.2); }
  100% { transform: scale(1) rotate(0deg); opacity: 1; filter: brightness(1); }
}`,
  },
  {
    id: "T-44",
    name: "Fenda Temporal",
    description: "Letras emergem de uma fenda no tempo.",
    category: "text",
    previewColor: "#FF00FF",
    htmlExample: `<div class="fenda-temporal">
  <span style="--i:1">T</span>
  <span style="--i:2">I</span>
  <span style="--i:3">M</span>
  <span style="--i:4">E</span>
</div>`,
    cssCode: `.fenda-temporal {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.fenda-temporal span {
  color: #FF00FF;
  text-shadow: 0 0 15px #FF00FF, 0 0 30px #8A2BE2, -3px 0 #00FFFF, 3px 0 #FF0000;
  animation: timeRift 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.15s);
}
@keyframes timeRift {
  0% { transform: scaleX(0) skewX(45deg); opacity: 0; filter: hue-rotate(0deg); }
  30% { transform: scaleX(1.3) skewX(-10deg); opacity: 1; filter: hue-rotate(180deg); }
  60% { transform: scaleX(0.9) skewX(5deg); filter: hue-rotate(360deg); }
  100% { transform: scaleX(1) skewX(0deg); opacity: 1; filter: hue-rotate(0deg); }
}`,
  },
  {
    id: "T-45",
    name: "Implosão Cósmica",
    description: "Letras implodem de todas as direções.",
    category: "text",
    previewColor: "#1E90FF",
    htmlExample: `<div class="implosao-cosmica">
  <span style="--i:1; --x:-100px; --y:-80px; --r:180deg">C</span>
  <span style="--i:2; --x:90px; --y:-60px; --r:-90deg">O</span>
  <span style="--i:3; --x:-80px; --y:70px; --r:270deg">S</span>
  <span style="--i:4; --x:100px; --y:90px; --r:-180deg">M</span>
  <span style="--i:5; --x:-60px; --y:-100px; --r:90deg">O</span>
  <span style="--i:6; --x:70px; --y:80px; --r:-270deg">S</span>
</div>`,
    cssCode: `.implosao-cosmica {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.implosao-cosmica span {
  color: #1E90FF;
  text-shadow: 0 0 20px #1E90FF, 0 0 40px #00BFFF;
  animation: cosmicImplode 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes cosmicImplode {
  0% { transform: translate(var(--x), var(--y)) rotate(var(--r)) scale(0); opacity: 0; }
  60% { transform: translate(0, 0) rotate(0deg) scale(1.2); opacity: 1; }
  100% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
}`,
  },
  {
    id: "T-46",
    name: "Aurora Mágica",
    description: "Letras brilham com aurora boreal.",
    category: "text",
    previewColor: "#00FF7F",
    htmlExample: `<div class="aurora-magica">
  <span style="--i:1">A</span>
  <span style="--i:2">U</span>
  <span style="--i:3">R</span>
  <span style="--i:4">O</span>
  <span style="--i:5">R</span>
  <span style="--i:6">A</span>
</div>`,
    cssCode: `.aurora-magica {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.aurora-magica span {
  background: linear-gradient(180deg, #00FF7F, #00CED1, #9370DB, #FF69B4);
  background-size: 100% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: auroraGlow 4s ease-in-out infinite, auroraAppear 3s ease-out infinite;
  animation-delay: calc(var(--i) * 0.2s);
}
@keyframes auroraGlow {
  0%, 100% { background-position: 0% 0%; filter: brightness(1); }
  50% { background-position: 0% 100%; filter: brightness(1.5); }
}
@keyframes auroraAppear {
  0% { transform: translateY(30px) scaleY(0); opacity: 0; }
  50% { transform: translateY(-10px) scaleY(1.2); opacity: 1; }
  100% { transform: translateY(0) scaleY(1); opacity: 1; }
}`,
  },
  {
    id: "T-47",
    name: "Ondas Sonoras",
    description: "Letras vibram como ondas de som.",
    category: "text",
    previewColor: "#FF1493",
    htmlExample: `<div class="ondas-sonoras">
  <span style="--i:1">S</span>
  <span style="--i:2">O</span>
  <span style="--i:3">U</span>
  <span style="--i:4">N</span>
  <span style="--i:5">D</span>
</div>`,
    cssCode: `.ondas-sonoras {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.ondas-sonoras span {
  color: #FF1493;
  text-shadow: 0 0 10px #FF1493, 0 0 20px #FF69B4;
  animation: soundWave 0.8s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.05s);
}
@keyframes soundWave {
  0%, 100% { transform: scaleY(1); }
  25% { transform: scaleY(1.5); }
  50% { transform: scaleY(0.7); }
  75% { transform: scaleY(1.3); }
}`,
  },
  {
    id: "T-48",
    name: "Redemoinho",
    description: "Letras giram em um redemoinho.",
    category: "text",
    previewColor: "#20B2AA",
    htmlExample: `<div class="redemoinho">
  <span style="--i:1">S</span>
  <span style="--i:2">P</span>
  <span style="--i:3">I</span>
  <span style="--i:4">N</span>
</div>`,
    cssCode: `.redemoinho {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
  perspective: 500px;
}
.redemoinho span {
  color: #20B2AA;
  text-shadow: 0 0 15px #20B2AA, 0 0 30px #40E0D0;
  animation: vortexSpin 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.2s);
}
@keyframes vortexSpin {
  0% { transform: rotate(720deg) scale(0) translateY(-50px); opacity: 0; }
  50% { transform: rotate(360deg) scale(1.3) translateY(10px); opacity: 1; }
  100% { transform: rotate(0deg) scale(1) translateY(0); opacity: 1; }
}`,
  },
  {
    id: "T-49",
    name: "Cartas Viradas",
    description: "Letras viram como cartas de baralho.",
    category: "text",
    previewColor: "#DC143C",
    htmlExample: `<div class="cartas-viradas">
  <span style="--i:1">C</span>
  <span style="--i:2">A</span>
  <span style="--i:3">R</span>
  <span style="--i:4">D</span>
  <span style="--i:5">S</span>
</div>`,
    cssCode: `.cartas-viradas {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
  perspective: 1000px;
}
.cartas-viradas span {
  color: #DC143C;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  background: linear-gradient(135deg, #FFFFFF, #F0F0F0);
  -webkit-background-clip: text;
  animation: cardFlip 2s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.15s);
  transform-style: preserve-3d;
}
@keyframes cardFlip {
  0% { transform: rotateY(-180deg) translateZ(-50px); opacity: 0; }
  50% { transform: rotateY(-90deg) translateZ(0); opacity: 0.5; }
  100% { transform: rotateY(0deg) translateZ(0); opacity: 1; }
}`,
  },
  {
    id: "T-50",
    name: "Fragmentos Quânticos",
    description: "Letras se materializam de fragmentos quânticos.",
    category: "text",
    previewColor: "#7B68EE",
    htmlExample: `<div class="fragmentos-quanticos">
  <span style="--i:1">Q</span>
  <span style="--i:2">U</span>
  <span style="--i:3">A</span>
  <span style="--i:4">N</span>
  <span style="--i:5">T</span>
  <span style="--i:6">U</span>
  <span style="--i:7">M</span>
</div>`,
    cssCode: `.fragmentos-quanticos {
  font-size: 3rem;
  font-weight: 900;
  display: flex;
}
.fragmentos-quanticos span {
  background: linear-gradient(135deg, #7B68EE, #9370DB, #BA55D3, #FF00FF);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 20px rgba(123,104,238,0.5);
  animation: quantumForm 3s ease-out infinite, quantumColor 2s ease infinite;
  animation-delay: calc(var(--i) * 0.1s);
}
@keyframes quantumForm {
  0% { transform: scale(0) rotate(0deg); opacity: 0; filter: blur(20px); }
  30% { transform: scale(0.5) rotate(180deg); opacity: 0.3; filter: blur(10px); }
  60% { transform: scale(1.2) rotate(360deg); opacity: 0.8; filter: blur(2px); }
  100% { transform: scale(1) rotate(360deg); opacity: 1; filter: blur(0); }
}
@keyframes quantumColor {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
  },
];
