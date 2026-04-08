import stylePremiumMinimal from "@/assets/showcase/style-premium-minimal.jpg";
import styleIllustratedCartoon from "@/assets/showcase/style-illustrated-cartoon.jpg";
import styleDarkTech from "@/assets/showcase/style-dark-tech.jpg";
import styleRetroModern from "@/assets/showcase/style-retro-modern.jpg";
import styleIndustrial from "@/assets/showcase/style-industrial.jpg";
import styleHybrid from "@/assets/showcase/style-hybrid.jpg";
import styleHybridSerious from "@/assets/showcase/style-hybrid-serious.jpg";
import styleHybridFriendly from "@/assets/showcase/style-hybrid-friendly.jpg";
// New 10 styles
import styleCyberpunkNeon from "@/assets/showcase/style-cyberpunk-neon.jpg";
import styleAuroraBorealis from "@/assets/showcase/style-aurora-borealis.jpg";
import styleBrutalist from "@/assets/showcase/style-brutalist.jpg";
import styleVaporwave from "@/assets/showcase/style-vaporwave.jpg";
import styleLuxuryGold from "@/assets/showcase/style-luxury-gold.jpg";
import styleCandyPop from "@/assets/showcase/style-candy-pop.jpg";
import styleMatrixHacker from "@/assets/showcase/style-matrix-hacker.jpg";
import styleWatercolorArt from "@/assets/showcase/style-watercolor-art.jpg";
import styleGlass3D from "@/assets/showcase/style-glass-3d.jpg";
import styleNatureOrganic from "@/assets/showcase/style-nature-organic.jpg";
// Vizion Layout style
import styleVizionLayout from "@/assets/showcase/style-vizion-layout.jpg";
// Futuristic style
import styleFuturistic from "@/assets/showcase/style-futuristic.jpg";
// New tech study styles
import styleSilentTech from "@/assets/showcase/style-silent-tech.jpg";
import styleTechFocusFlow from "@/assets/showcase/style-tech-focus-flow.jpg";
import styleMinimalTechIntelligence from "@/assets/showcase/style-minimal-tech-intelligence.jpg";
// Loris Portfolio style
import styleLorisPortfolio from "@/assets/showcase/style-loris-portfolio.jpg";
// Slush Fintech style
import styleSlushFintech from "@/assets/showcase/style-slush-fintech.jpg";
// 8 Premium styles
import styleSaasAnthropic from "@/assets/showcase/style-saas-anthropic.jpg";
import styleBlogEditorial from "@/assets/showcase/style-blog-editorial.jpg";
import styleDashboardAnalytics from "@/assets/showcase/style-dashboard-analytics.jpg";
import styleMinimalistPremium from "@/assets/showcase/style-minimalist-premium.jpg";
import styleVibrantPremium from "@/assets/showcase/style-vibrant-premium.jpg";
import styleFuturisticPremium from "@/assets/showcase/style-futuristic-premium.jpg";
import styleClassicPremium from "@/assets/showcase/style-classic-premium.jpg";
import styleOrganicPremium from "@/assets/showcase/style-organic-premium.jpg";

import { StyleDefinition } from "@/components/showcase/StyleCard";

export const designStyles: StyleDefinition[] = [
  {
    id: "premium-minimal",
    name: "Premium Minimalista",
    subtitle: "SaaS Moderno • Tecnologia • Finanças",
    description: "Visual clean e sofisticado com paleta neutra, tipografia moderna sem serifa e layout baseado em grid com espaçamentos amplos. Cards com bordas sutis e sombras leves transmitem profissionalismo.",
    objective: "Transmitir profissionalismo, tecnologia e confiança — ideal para SaaS financeiro e B2B.",
    colors: ["#FFFFFF", "#F5F5F5", "#1A1A1A", "#6B7280", "#3B82F6"],
    features: ["Clean", "Grid Layout", "Monocromático", "Sombras Sutis"],
    iconStyle: "Ícones lineares minimalistas, monocromáticos, traço fino e consistente. Sem ilustrações ou cores chamativas.",
    layoutStyle: "Grid rígido, espaçamentos amplos, hierarquia clara. Cards com bordas sutis.",
    typography: "Inter, SF Pro, sans-serif. Hierarquia clara entre títulos e corpo.",
    previewImage: stylePremiumMinimal,
    cssVariables: {
      "--background": "0 0% 100%",
      "--foreground": "0 0% 10%",
      "--primary": "221 83% 53%",
      "--muted": "210 40% 96%",
    },
    sampleCSS: `:root {
  --background: #FFFFFF;
  --surface: #F9FAFB;
  --text-primary: #111827;
  --text-secondary: #6B7280;
  --accent: #3B82F6;
  --border: #E5E7EB;
  --shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow);
}

.button-primary {
  background: var(--text-primary);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
}`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "illustrated-cartoon",
    name: "Ilustrado / Cartoon",
    subtitle: "Food App • Popular • Acessível",
    description: "Layout colorido, leve e acessível com paleta vibrante. Bordas arredondadas, cards grandes e chamativos. Ícones ilustrados em flat design com cores sólidas.",
    objective: "Criar uma experiência divertida, fácil de usar e visualmente memorável — ideal para apps de alimentação e público geral.",
    colors: ["#FFF7ED", "#FB923C", "#EF4444", "#FBBF24", "#22C55E"],
    features: ["Colorido", "Arredondado", "Flat Design", "Amigável"],
    iconStyle: "Ícones ilustrados estilo cartoon, flat design, cores sólidas e vivas, sem contorno externo.",
    layoutStyle: "Cards grandes e chamativos, bordas muito arredondadas, visual acolhedor.",
    typography: "Rounded, amigável. Poppins, Nunito ou similar.",
    previewImage: styleIllustratedCartoon,
    cssVariables: {
      "--background": "30 100% 98%",
      "--foreground": "20 80% 20%",
      "--primary": "25 95% 55%",
      "--accent": "45 93% 58%",
    },
    sampleCSS: `:root {
  --background: #FFF7ED;
  --surface: #FFFFFF;
  --text-primary: #7C2D12;
  --primary: #FB923C;
  --secondary: #EF4444;
  --accent: #FBBF24;
  --success: #22C55E;
  --radius: 20px;
}

.card {
  background: var(--surface);
  border: 2px solid #FED7AA;
  border-radius: var(--radius);
  padding: 20px;
}

.button-primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 14px 28px;
  border-radius: 16px;
  font-weight: 700;
  box-shadow: 0 4px 15px rgba(251, 146, 60, 0.4);
}

.icon-container {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  display: flex;
  align-items: center;
  justify-content: center;
}`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "dark-tech",
    name: "Dark Tech / Futurista",
    subtitle: "Tech • Gaming • Dashboards",
    description: "Tema escuro predominante com fundo preto/grafite. Destaques em azul, roxo ou neon. Visual de painel de controle com cards que possuem glow sutil, efeitos de glitch e scan lines animadas.",
    objective: "Transmitir tecnologia avançada, controle e inteligência artificial.",
    colors: ["#0F172A", "#1E293B", "#06B6D4", "#8B5CF6", "#22D3EE"],
    features: ["Dark Mode", "Neon Glow", "Glitch Effects", "Scan Lines"],
    iconStyle: "Ícones geométricos, estilo tech/futurista, lineares ou semi-fill. Monocromáticos com destaque neon.",
    layoutStyle: "Visual de painel de controle, cards com glow sutil, densidade média-alta de informação.",
    typography: "Geométrica moderna. Inter, Space Grotesk, JetBrains Mono para dados.",
    previewImage: styleDarkTech,
    cssVariables: {
      "--background": "222 47% 11%",
      "--foreground": "210 40% 98%",
      "--primary": "187 94% 43%",
      "--accent": "262 83% 58%",
    },
    sampleCSS: `:root {
  --background: #0F172A;
  --surface: #1E293B;
  --surface-glow: #1E293B;
  --text-primary: #F1F5F9;
  --text-secondary: #94A3B8;
  --primary: #06B6D4;
  --accent: #8B5CF6;
  --danger: #EF4444;
  --glow-primary: 0 0 20px rgba(6, 182, 212, 0.3);
  --glow-accent: 0 0 20px rgba(139, 92, 246, 0.3);
  --glow-intense: 0 0 40px rgba(6, 182, 212, 0.5);
}

/* ===== GLITCH TEXT EFFECT ===== */
.glitch-text {
  position: relative;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.glitch-text::before,
.glitch-text::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch-text::before {
  color: var(--primary);
  animation: glitchLeft 0.3s infinite;
  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-2px, -1px);
}

.glitch-text::after {
  color: var(--accent);
  animation: glitchRight 0.3s infinite;
  clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
  transform: translate(2px, 1px);
}

@keyframes glitchLeft {
  0%, 100% { transform: translate(-2px, -1px); }
  20% { transform: translate(2px, 1px); }
  40% { transform: translate(-1px, -2px); }
  60% { transform: translate(1px, 2px); }
  80% { transform: translate(-2px, 1px); }
}

@keyframes glitchRight {
  0%, 100% { transform: translate(2px, 1px); }
  20% { transform: translate(-2px, -1px); }
  40% { transform: translate(1px, 2px); }
  60% { transform: translate(-1px, -2px); }
  80% { transform: translate(2px, -1px); }
}

/* ===== SCAN LINE OVERLAY ===== */
.scanlines {
  position: relative;
  overflow: hidden;
}

.scanlines::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.1) 2px,
    rgba(0, 0, 0, 0.1) 4px
  );
  pointer-events: none;
  z-index: 10;
}

.scanlines::after {
  content: '';
  position: absolute;
  top: -100%;
  left: 0;
  right: 0;
  height: 200%;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(6, 182, 212, 0.03) 50%,
    transparent 100%
  );
  animation: scanMove 4s linear infinite;
  pointer-events: none;
  z-index: 11;
}

@keyframes scanMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(50%); }
}

/* ===== ANIMATED BORDER CARD ===== */
.card {
  background: var(--surface);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 12px;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
  animation: borderScan 3s linear infinite;
}

@keyframes borderScan {
  0% { left: -100%; }
  100% { left: 100%; }
}

/* ===== GLOWING BUTTON ===== */
.button-primary {
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.button-primary::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: var(--primary);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.4s ease, height 0.4s ease;
  z-index: -1;
}

.button-primary:hover::before {
  width: 300px;
  height: 300px;
}

.button-primary:hover {
  color: var(--background);
  box-shadow: var(--glow-intense);
}

/* ===== DATA TERMINAL ===== */
.data-display {
  font-family: 'JetBrains Mono', monospace;
  color: var(--primary);
  background: rgba(6, 182, 212, 0.05);
  border-left: 3px solid var(--primary);
  padding: 16px;
  position: relative;
}

.data-display::before {
  content: '>';
  position: absolute;
  left: 8px;
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* ===== HUD CORNERS ===== */
.hud-frame {
  position: relative;
  padding: 20px;
}

.hud-frame::before,
.hud-frame::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-color: var(--primary);
  border-style: solid;
}

.hud-frame::before {
  top: 0;
  left: 0;
  border-width: 2px 0 0 2px;
}

.hud-frame::after {
  bottom: 0;
  right: 0;
  border-width: 0 2px 2px 0;
}

/* ===== FLICKERING NEON ===== */
.neon-flicker {
  animation: flicker 2s infinite;
  text-shadow: var(--glow-primary);
}

@keyframes flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 
      0 0 4px var(--primary),
      0 0 11px var(--primary),
      0 0 19px var(--primary);
  }
  20%, 24%, 55% {
    text-shadow: none;
  }
}`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "retro-modern",
    name: "Retrô Moderno",
    subtitle: "Vintage • Artesanal • Diferenciado",
    description: "Inspiração em design vintage com usabilidade moderna. Paleta quente (laranja, bege, marrom, verde oliva). Cards com aparência de papel e texturas leves.",
    objective: "Criar identidade forte, memorável e diferenciada no mercado.",
    colors: ["#FEF3C7", "#D97706", "#92400E", "#78716C", "#84CC16"],
    features: ["Vintage", "Quente", "Artesanal", "Memorável"],
    iconStyle: "Ícones ilustrados retrô, flat com personalidade, cores suaves. Coerência total entre ícones.",
    layoutStyle: "Cards com aparência de papel, texturas leves, bordas arredondadas médias.",
    typography: "Com personalidade moderada. Playfair Display para títulos, Source Sans para corpo.",
    previewImage: styleRetroModern,
    cssVariables: {
      "--background": "48 96% 89%",
      "--foreground": "28 80% 25%",
      "--primary": "32 95% 44%",
      "--accent": "84 81% 44%",
    },
    sampleCSS: `:root {
  --background: #FFFBEB;
  --surface: #FEF3C7;
  --text-primary: #78350F;
  --text-secondary: #92400E;
  --primary: #D97706;
  --accent: #84CC16;
  --border: #FCD34D;
}

.card {
  background: linear-gradient(135deg, #FFFBEB, #FEF3C7);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(120, 53, 15, 0.1);
}

.button-primary {
  background: var(--primary);
  color: #FFFBEB;
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(217, 119, 6, 0.3);
}

h1, h2, h3 {
  font-family: 'Playfair Display', serif;
  color: var(--text-primary);
}`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "industrial",
    name: "Industrial / Operacional",
    subtitle: "Controle • Eficiência • Produtividade",
    description: "Visual funcional e direto. Layout denso e informativo. Poucas cores com foco em contraste e legibilidade. Interface otimizada para leitura rápida.",
    objective: "Maximizar produtividade, leitura rápida e controle de operações — função sobre estética.",
    colors: ["#F3F4F6", "#374151", "#1F2937", "#10B981", "#EF4444"],
    features: ["Funcional", "Denso", "Alto Contraste", "Eficiente"],
    iconStyle: "Ícones funcionais e claros, estilo sólido ou semi-line. Alto contraste, foco em leitura rápida.",
    layoutStyle: "Layout denso, grid informativo, separação clara de áreas. Visual de sistema de controle.",
    typography: "Simples e objetiva. Roboto, Arial. Tamanhos consistentes.",
    previewImage: styleIndustrial,
    cssVariables: {
      "--background": "220 14% 96%",
      "--foreground": "220 13% 18%",
      "--primary": "217 91% 60%",
      "--success": "158 64% 52%",
      "--danger": "0 84% 60%",
    },
    sampleCSS: `:root {
  --background: #F3F4F6;
  --surface: #FFFFFF;
  --text-primary: #1F2937;
  --text-secondary: #6B7280;
  --primary: #3B82F6;
  --success: #10B981;
  --warning: #F59E0B;
  --danger: #EF4444;
  --border: #D1D5DB;
}

.card {
  background: var(--surface);
  border: 2px solid var(--border);
  padding: 16px;
}

.status-badge {
  padding: 4px 12px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
}

.status-ok { background: var(--success); color: white; }
.status-warn { background: var(--warning); color: white; }
.status-error { background: var(--danger); color: white; }

.button-action {
  background: var(--primary);
  color: white;
  padding: 10px 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "hybrid",
    name: "Híbrido Equilibrado",
    subtitle: "Operacional + Ilustrado • Versátil",
    description: "Sistema operacional profissional com linguagem visual amigável. Prioridade em clareza, organização e velocidade de uso. Visual moderno, limpo e acessível.",
    objective: "Criar um sistema robusto e confiável, mas visualmente agradável — evitando aparência infantil ou excessivamente técnica.",
    colors: ["#FFFFFF", "#F9FAFB", "#3B82F6", "#10B981", "#F59E0B"],
    features: ["Versátil", "Equilibrado", "Profissional", "Acessível"],
    iconStyle: "Ícones ilustrados simples (flat), estilo consistente, cores sólidas sem gradientes. Claros em tamanhos pequenos.",
    layoutStyle: "Cards funcionais, grid bem definido, bordas levemente arredondadas. Sem excesso de sombras.",
    typography: "Sem serifa moderna, hierarquia clara. Inter, Nunito Sans.",
    previewImage: styleHybrid,
    cssVariables: {
      "--background": "0 0% 100%",
      "--foreground": "220 13% 18%",
      "--primary": "217 91% 60%",
      "--success": "158 64% 52%",
      "--warning": "38 92% 50%",
    },
    sampleCSS: `:root {
  --background: #FFFFFF;
  --surface: #F9FAFB;
  --text-primary: #1F2937;
  --text-secondary: #6B7280;
  --primary: #3B82F6;
  --success: #10B981;
  --warning: #F59E0B;
  --border: #E5E7EB;
  --radius: 12px;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
}

.category-card {
  background: linear-gradient(135deg, #EFF6FF, #FFFFFF);
  border: 1px solid #BFDBFE;
  border-radius: var(--radius);
  padding: 16px;
}

.icon-box {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #F3F4F6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.button-primary {
  background: var(--primary);
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 500;
}`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "hybrid-serious",
    name: "Híbrido Sério",
    subtitle: "Variação A • Operacional Dominante",
    description: "Sistema sério, confiável e direto. Visual limpo sem elementos decorativos desnecessários. Interface voltada para uso contínuo e profissional.",
    objective: "Passar confiança, controle e profissionalismo — foco em controle, dinheiro, pedidos, fluxo e equipe.",
    colors: ["#FFFFFF", "#F3F4F6", "#374151", "#4B5563", "#3B82F6"],
    features: ["Sério", "Confiável", "Controle", "Profissional"],
    iconStyle: "Ilustrados simples porém discretos, pouca saturação. Ícones nunca chamam mais atenção que os dados.",
    layoutStyle: "Cards retangulares com leve arredondamento, grid rígido e previsível. Densidade média.",
    typography: "Neutra e funcional. Inter, Roboto.",
    previewImage: styleHybridSerious,
    cssVariables: {
      "--background": "0 0% 100%",
      "--foreground": "220 13% 18%",
      "--primary": "220 13% 26%",
      "--accent": "217 91% 60%",
    },
    sampleCSS: `:root {
  --background: #F8F9FA;
  --surface: #FFFFFF;
  --text-primary: #374151;
  --text-secondary: #6B7280;
  --primary: #4B5563;
  --accent: #3B82F6;
  --border: #D1D5DB;
  --border-color: #D1D5DB;
}

body {
  background: var(--background);
  color: var(--text-primary);
  font-family: 'Inter', 'Roboto', sans-serif;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px;
  border-left: 3px solid var(--primary);
}

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: var(--primary) !important;
  color: white !important;
  border-radius: 6px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-size: 12px;
}

.status-badge, .tag {
  background: var(--primary) !important;
  color: white !important;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 10px;
}

.text-accent { color: var(--accent); }
.icon-container { background: var(--primary) !important; color: white !important; border-radius: 6px !important; }

h1, h2, h3 { color: var(--text-primary); font-weight: 700; }

.data-highlight { font-size: 28px; font-weight: 700; color: var(--text-primary); }
.label { font-size: 11px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "hybrid-friendly",
    name: "Híbrido Amigável",
    subtitle: "Variação B • Ilustrado Dominante",
    description: "Interface amigável, leve e acolhedora. Sensação de simplicidade e fluidez. Visual convidativo sem parecer infantil.",
    objective: "Reduzir atrito de uso e facilitar aprendizado — foco em experiência, público leigo e facilidade de uso.",
    colors: ["#FFFFFF", "#EFF6FF", "#3B82F6", "#10B981", "#F59E0B"],
    features: ["Amigável", "Leve", "Acolhedor", "Intuitivo"],
    iconStyle: "Ícones ilustrados mais expressivos, cores um pouco mais saturadas. Ajudam na compreensão rápida.",
    layoutStyle: "Cards mais arredondados, espaçamentos generosos, menos densidade visual. Interface respirável.",
    typography: "Friendly e acessível. Nunito, Poppins.",
    previewImage: styleHybridFriendly,
    cssVariables: {
      "--background": "0 0% 100%",
      "--foreground": "220 13% 18%",
      "--primary": "217 91% 60%",
      "--accent": "158 64% 52%",
    },
    sampleCSS: `:root {
  --background: #F0F7FF;
  --surface: #FFFFFF;
  --text-primary: #1E40AF;
  --text-secondary: #3B82F6;
  --primary: #3B82F6;
  --success: #10B981;
  --warning: #F59E0B;
  --border: #BFDBFE;
  --border-color: #BFDBFE;
}

body {
  background: linear-gradient(135deg, #F0F7FF, #EDE9FE);
  color: #1E293B;
  font-family: 'Nunito', 'Poppins', sans-serif;
}

.card {
  background: linear-gradient(135deg, #FFFFFF, #F0F7FF);
  border: 2px solid var(--border);
  border-radius: 20px !important;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(59,130,246,0.08);
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(59,130,246,0.12);
  border-color: var(--primary);
}

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: var(--primary) !important;
  color: white !important;
  border: none !important;
  border-radius: 16px !important;
  font-weight: 700;
  box-shadow: 0 4px 14px rgba(59,130,246,0.25);
}

.status-badge, .tag {
  background: linear-gradient(135deg, var(--primary), #818CF8) !important;
  color: white !important;
  border-radius: 20px;
}

.text-accent { color: var(--primary); }
.icon-container { background: linear-gradient(135deg, #DBEAFE, #EDE9FE) !important; border-radius: 16px !important; }

h1, h2, h3 { color: #1E3A5F; font-weight: 800; }

.category-chip { background: #EFF6FF; color: var(--primary); padding: 8px 16px; border-radius: 20px; font-weight: 600; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  
  // ==================== 10 NOVOS ESTILOS SURPREENDENTES ====================

  {
    id: "cyberpunk-neon",
    name: "Cyberpunk Neon",
    subtitle: "Sci-Fi • Gaming • Night City",
    description: "Estética cyberpunk intensa com neons vibrantes em magenta e ciano. Efeitos de glitch, hologramas e HUD futurista. Perfeito para interfaces de jogos e aplicações de alta tecnologia.",
    objective: "Criar imersão total em um universo cyberpunk, transmitindo tecnologia avançada, rebeldia e futurismo intenso.",
    colors: ["#0D0D0D", "#FF00FF", "#00FFFF", "#FF0080", "#8B00FF"],
    features: ["Neon Intenso", "Glitch Effects", "Holográfico", "Sci-Fi"],
    iconStyle: "Ícones com glow neon intenso, traços finos com efeito de digitalização. Animações de glitch e scan lines.",
    layoutStyle: "Cards flutuantes com bordas neon, efeitos de hologramas, HUD style com cantos cortados.",
    typography: "Futurista com glow. Orbitron, Rajdhani, Audiowide.",
    previewImage: styleCyberpunkNeon,
    cssVariables: {
      "--background": "0 0% 5%",
      "--foreground": "300 100% 50%",
      "--primary": "300 100% 50%",
      "--accent": "180 100% 50%",
    },
    sampleCSS: `:root {
  --background: #0D0D0D;
  --surface: #1A1A2E;
  --text-primary: #E0E0FF;
  --neon-pink: #FF00FF;
  --neon-cyan: #00FFFF;
  --neon-purple: #8B00FF;
  --border-color: rgba(255,0,255,0.3);
}

body {
  background: var(--background);
  color: var(--text-primary);
  font-family: 'Orbitron', 'Rajdhani', sans-serif;
}

.card {
  background: linear-gradient(135deg, #1A1A2E 0%, #16213E 100%);
  border: 1px solid var(--neon-pink);
  border-radius: 4px;
  padding: 20px;
  position: relative;
  box-shadow: 0 0 15px rgba(255,0,255,0.2), inset 0 0 30px rgba(255,0,255,0.05);
}

.card:hover {
  box-shadow: 0 0 25px var(--neon-pink), 0 0 50px rgba(255,0,255,0.15);
}

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: transparent;
  border: 2px solid var(--neon-cyan) !important;
  color: var(--neon-cyan) !important;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 700;
  box-shadow: 0 0 10px rgba(0,255,255,0.3);
  position: relative;
  overflow: hidden;
}

.button-primary:hover, .btn:hover {
  background: var(--neon-cyan);
  color: var(--background) !important;
  box-shadow: 0 0 30px var(--neon-cyan);
}

.status-badge, .tag {
  background: var(--neon-pink) !important;
  color: #000 !important;
  box-shadow: 0 0 10px rgba(255,0,255,0.5);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.text-accent { color: var(--neon-cyan); text-shadow: 0 0 10px rgba(0,255,255,0.5); }

h1, h2, h3 { text-transform: uppercase; letter-spacing: 0.05em; }

.icon-container {
  background: linear-gradient(135deg, var(--neon-pink), var(--neon-purple)) !important;
  box-shadow: 0 0 15px rgba(255,0,255,0.4);
}

/* Glitch effect */
.glitch-text { position: relative; }
.glitch-text::before, .glitch-text::after {
  content: attr(data-text); position: absolute; top: 0; left: 0; width: 100%; height: 100%;
}
.glitch-text::before { color: var(--neon-cyan); animation: cyberGlitch1 0.3s infinite; clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%); }
.glitch-text::after { color: var(--neon-pink); animation: cyberGlitch2 0.3s infinite; clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%); }
@keyframes cyberGlitch1 { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-3px)} 40%{transform:translateX(3px)} }
@keyframes cyberGlitch2 { 0%,100%{transform:translateX(0)} 20%{transform:translateX(3px)} 40%{transform:translateX(-3px)} }

/* Scanlines */
.scanlines::before {
  content:''; position:absolute; inset:0; pointer-events:none; z-index:10;
  background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px);
}`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "aurora-borealis",
    name: "Aurora Borealis",
    subtitle: "Cosmic • Ethereal • Mystical",
    description: "Inspirado nas auroras boreais com gradientes fluidos em verde, roxo e azul. Ondas animadas e efeitos etéreos que criam uma atmosfera mágica e cósmica.",
    objective: "Transmitir misticismo, natureza cósmica e beleza etérea — ideal para apps de meditação, wellness e espiritualidade.",
    colors: ["#0F0C29", "#302B63", "#24243E", "#00FF88", "#8B5CF6"],
    features: ["Gradientes Fluidos", "Ondas Animadas", "Cósmico", "Etéreo"],
    iconStyle: "Ícones com gradientes sutis, traços suaves com efeito de brilho etéreo. Animações de pulso suave.",
    layoutStyle: "Cards com fundo de gradiente ondulante, bordas suaves com glow, efeito de profundidade cósmica.",
    typography: "Elegante e leve. Quicksand, Comfortaa, Montserrat Light.",
    previewImage: styleAuroraBorealis,
    cssVariables: {
      "--background": "238 37% 10%",
      "--foreground": "151 100% 50%",
      "--primary": "151 100% 50%",
      "--accent": "262 83% 58%",
    },
    sampleCSS: `:root {
  --background: #0F0C29;
  --surface: rgba(48, 43, 99, 0.5);
  --text-primary: #E0E0FF;
  --aurora-green: #00FF88;
  --aurora-purple: #8B5CF6;
  --aurora-blue: #06B6D4;
  --border-color: rgba(139,92,246,0.25);
}

body {
  background: linear-gradient(180deg, #0F0C29 0%, #302B63 50%, #24243E 100%);
  color: var(--text-primary);
  font-family: 'Quicksand', 'Comfortaa', sans-serif;
  position: relative;
  overflow-x: hidden;
}

body::before {
  content:''; position:fixed; width:200%; height:100%; top:0; left:-50%;
  background: linear-gradient(180deg, transparent 0%, rgba(0,255,136,0.08) 30%, rgba(139,92,246,0.1) 50%, rgba(6,182,212,0.06) 70%, transparent 100%);
  animation: auroraWave 8s ease-in-out infinite; pointer-events:none; z-index:0;
}
@keyframes auroraWave {
  0%,100%{ transform:translateX(-25%) rotate(-5deg); opacity:0.5; }
  50%{ transform:translateX(0%) translateY(-20px) rotate(5deg); opacity:1; }
}

.card {
  background: rgba(48,43,99,0.3);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(139,92,246,0.25);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 8px 32px rgba(0,255,136,0.06), inset 0 0 40px rgba(139,92,246,0.06);
}

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: linear-gradient(135deg, var(--aurora-purple), var(--aurora-green)) !important;
  color: white !important;
  border: none !important;
  border-radius: 30px;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(139,92,246,0.35);
}

.status-badge, .tag {
  background: linear-gradient(135deg, var(--aurora-purple), var(--aurora-blue)) !important;
  color: white !important;
  border-radius: 20px;
}

.text-accent { color: var(--aurora-green); }
.icon-container { background: linear-gradient(135deg, var(--aurora-green), var(--aurora-purple)) !important; }

h1, h2 { letter-spacing: -0.02em; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "brutalist",
    name: "Brutalist Raw",
    subtitle: "Anti-Design • Bold • Impactful",
    description: "Design brutalist cru com tipografia massiva, layouts quebrados e estética anti-design. Preto e branco com acentos agressivos. Impacto visual máximo.",
    objective: "Quebrar convenções, causar impacto imediato e transmitir autenticidade crua — ideal para portfolios artísticos e marcas ousadas.",
    colors: ["#FFFFFF", "#000000", "#FF0000", "#FFFF00", "#0000FF"],
    features: ["Anti-Design", "Bold Typography", "Raw", "Impactante"],
    iconStyle: "Ícones sólidos, grossos, sem refinamento. Formas geométricas brutas. Sem gradientes ou sombras suaves.",
    layoutStyle: "Grids quebrados, sobreposições, tipografia gigante. Bordas duras, sem arredondamento.",
    typography: "Massiva e crua. Impact, Helvetica Bold, Arial Black. Tamanhos exagerados.",
    previewImage: styleBrutalist,
    cssVariables: {
      "--background": "0 0% 100%",
      "--foreground": "0 0% 0%",
      "--primary": "0 100% 50%",
      "--accent": "60 100% 50%",
    },
    sampleCSS: `:root {
  --background: #FFFFFF;
  --text: #000000;
  --accent-red: #FF0000;
  --accent-yellow: #FFFF00;
  --accent-blue: #0000FF;
  --border-color: #000;
}

body {
  background: var(--background);
  color: var(--text);
  font-family: 'Arial Black', 'Helvetica Neue', Arial, sans-serif;
}

.card {
  background: var(--background);
  border: 4px solid var(--text) !important;
  border-radius: 0 !important;
  padding: 20px;
  position: relative;
}

.card::before {
  content:''; position:absolute; top:6px; left:6px; right:-6px; bottom:-6px;
  background: var(--accent-red); z-index:-1;
}

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: var(--text) !important;
  color: var(--background) !important;
  border: 3px solid var(--text) !important;
  border-radius: 0 !important;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.button-primary:hover, .btn:hover {
  background: var(--accent-yellow) !important;
  color: var(--text) !important;
  transform: translate(-4px, -4px);
  box-shadow: 4px 4px 0 var(--text);
}

.status-badge, .tag {
  background: var(--accent-red) !important;
  color: white !important;
  border-radius: 0 !important;
  font-weight: 900;
  text-transform: uppercase;
}

.text-accent { color: var(--accent-red); }
.icon-container { background: var(--accent-yellow) !important; color: var(--text) !important; border-radius: 0 !important; }

h1, h2, h3 {
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.04em;
}

h1 { font-size: 42px !important; line-height: 0.9 !important; }

nav, footer { border-color: var(--text) !important; border-width: 3px !important; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "vaporwave",
    name: "Vaporwave Dreams",
    subtitle: "Retro 80s • Synthwave • Nostalgic",
    description: "Estética vaporwave nostálgica com gradientes rosa/roxo/ciano, pôr do sol retrô, grids de perspectiva e palmeiras. Viagem no tempo para os anos 80.",
    objective: "Evocar nostalgia, criar atmosfera onírica e transportar para um universo retrofuturista — ideal para projetos criativos e musicais.",
    colors: ["#2E0854", "#FF6AD5", "#C774E8", "#AD8CFF", "#00FFFF"],
    features: ["Retrowave", "Sunset Grid", "Nostálgico", "Synthwave"],
    iconStyle: "Ícones com gradientes sunset, contornos brilhantes. Estética arcade retrô. Glows suaves.",
    layoutStyle: "Grids de perspectiva, elementos flutuantes, sol retrô. Bordas com glow colorido.",
    typography: "Retro-futurista. VCR OSD Mono, Lazer84, Streamster.",
    previewImage: styleVaporwave,
    cssVariables: {
      "--background": "270 60% 18%",
      "--foreground": "317 100% 70%",
      "--primary": "317 100% 70%",
      "--accent": "180 100% 50%",
    },
    sampleCSS: `:root {
  --bg-dark: #2E0854;
  --bg-purple: #120458;
  --neon-pink: #FF6AD5;
  --neon-purple: #C774E8;
  --neon-cyan: #00FFFF;
  --sunset-orange: #FF8C00;
  --border-color: rgba(255,106,213,0.3);
}

body {
  background: linear-gradient(180deg, #2E0854 0%, #120458 50%, #FF1493 85%, #FF8C00 100%);
  color: #FFE0F0;
  font-family: 'VCR OSD Mono', 'Courier New', monospace;
}

.card {
  background: rgba(46,8,84,0.7);
  border: 2px solid var(--neon-pink);
  border-radius: 0;
  padding: 20px;
  box-shadow: 0 0 20px rgba(255,106,213,0.2), inset 0 0 20px rgba(255,106,213,0.05);
}

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: linear-gradient(90deg, var(--neon-pink), var(--neon-purple)) !important;
  color: white !important;
  border: none !important;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  box-shadow: 0 4px 20px rgba(255,106,213,0.4);
  animation: vaporGlow 2s ease-in-out infinite alternate;
}

@keyframes vaporGlow {
  from { box-shadow: 0 4px 20px var(--neon-pink); }
  to { box-shadow: 0 4px 40px var(--neon-cyan); }
}

.status-badge, .tag {
  background: var(--neon-cyan) !important;
  color: #120458 !important;
  font-weight: 700;
  text-transform: uppercase;
}

.text-accent { color: var(--neon-pink); text-shadow: 0 0 10px rgba(255,106,213,0.6); }
.icon-container { background: linear-gradient(135deg, var(--neon-pink), var(--sunset-orange)) !important; border-radius: 0 !important; }

h1, h2 { text-transform: uppercase; letter-spacing: 0.08em; }

/* Rainbow text */
.rainbow-text, .text-gradient {
  background: linear-gradient(90deg, var(--neon-pink), var(--neon-cyan), var(--neon-purple), var(--neon-pink));
  background-size: 200% auto;
  -webkit-background-clip: text; background-clip: text; color: transparent;
  animation: vaporRainbow 3s linear infinite;
}
@keyframes vaporRainbow { to { background-position: 200% center; } }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "luxury-gold",
    name: "Luxury Gold",
    subtitle: "Premium • Elegant • High-End",
    description: "Design luxuoso com dourado e preto, texturas de mármore e tipografia sofisticada. Elegância máxima para marcas premium e experiências exclusivas.",
    objective: "Transmitir exclusividade, sofisticação e status — ideal para joalheria, moda de luxo e serviços premium.",
    colors: ["#0A0A0A", "#1A1A1A", "#D4AF37", "#FFD700", "#B8860B"],
    features: ["Luxuoso", "Dourado", "Elegante", "Premium"],
    iconStyle: "Ícones finos e refinados, dourados com shimmer sutil. Linhas elegantes e sofisticadas.",
    layoutStyle: "Espaçamento generoso, hierarquia clara. Bordas finas douradas, texturas de mármore.",
    typography: "Serifada elegante. Playfair Display, Cormorant Garamond, Bodoni.",
    previewImage: styleLuxuryGold,
    cssVariables: {
      "--background": "0 0% 4%",
      "--foreground": "45 59% 53%",
      "--primary": "45 59% 53%",
      "--accent": "51 100% 50%",
    },
    sampleCSS: `:root {
  --bg-black: #0A0A0A;
  --bg-dark: #1A1A1A;
  --gold: #D4AF37;
  --gold-light: #FFD700;
  --gold-dark: #B8860B;
  --border-color: rgba(212,175,55,0.25);
}

body {
  background: var(--bg-black);
  color: #F5F0E5;
  font-family: 'Playfair Display', 'Georgia', serif;
}

.card {
  background: linear-gradient(135deg, var(--bg-dark), var(--bg-black));
  border: 1px solid var(--gold);
  padding: 24px;
  position: relative;
  overflow: hidden;
}

.card::before {
  content:''; position:absolute; top:-50%; left:-50%; width:200%; height:200%;
  background: linear-gradient(45deg, transparent 30%, rgba(212,175,55,0.08) 50%, transparent 70%);
  animation: luxShimmer 3s ease-in-out infinite;
}
@keyframes luxShimmer { 0%{transform:translateX(-100%) rotate(45deg)} 100%{transform:translateX(100%) rotate(45deg)} }

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: linear-gradient(135deg, var(--gold-dark), var(--gold-light), var(--gold-dark)) !important;
  background-size: 200% 200%;
  color: var(--bg-black) !important;
  border: none !important;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  animation: goldShine 3s ease-in-out infinite;
}
@keyframes goldShine { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }

.status-badge, .tag {
  background: var(--gold) !important;
  color: var(--bg-black) !important;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.text-accent { 
  background: linear-gradient(135deg, var(--gold-dark), var(--gold-light), var(--gold));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.icon-container { background: linear-gradient(135deg, var(--gold), var(--gold-dark)) !important; color: var(--bg-black) !important; }

h1, h2, h3 { font-family: 'Playfair Display', serif; color: var(--gold); }

nav, footer { border-color: rgba(212,175,55,0.2) !important; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "candy-pop",
    name: "Candy Pop",
    subtitle: "Playful • Sweet • Kawaii",
    description: "Estética doce e colorida com tons pastel, formas arredondadas e animações bouncy. Perfeito para apps infantis, jogos casuais e marcas divertidas.",
    objective: "Criar alegria, diversão e acessibilidade — ideal para público jovem, apps infantis e marcas lúdicas.",
    colors: ["#FFF0F5", "#FFB6C1", "#87CEEB", "#DDA0DD", "#98FB98"],
    features: ["Pastel", "Bouncy", "Kawaii", "Divertido"],
    iconStyle: "Ícones fofos e arredondados, cores pastel vibrantes. Animações bouncy e playful.",
    layoutStyle: "Cards muito arredondados, sombras coloridas suaves. Espaçamento generoso e alegre.",
    typography: "Rounded e friendly. Quicksand, Nunito, Varela Round.",
    previewImage: styleCandyPop,
    cssVariables: {
      "--background": "340 100% 97%",
      "--foreground": "340 60% 70%",
      "--primary": "340 60% 70%",
      "--accent": "197 71% 73%",
    },
    sampleCSS: `:root {
  --bg-pink: #FFF0F5;
  --candy-pink: #FFB6C1;
  --candy-blue: #87CEEB;
  --candy-purple: #DDA0DD;
  --candy-green: #98FB98;
  --candy-yellow: #FFFACD;
  --border-color: rgba(255,182,193,0.5);
}

body {
  background: linear-gradient(135deg, var(--bg-pink), #E6E6FA);
  color: #5D3A6E;
  font-family: 'Quicksand', 'Nunito', sans-serif;
}

.card {
  background: white;
  border-radius: 24px !important;
  border: 3px solid var(--candy-pink) !important;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(255,182,193,0.25);
  transition: all 0.3s cubic-bezier(0.175,0.885,0.32,1.275);
}

.card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 20px 40px rgba(221,160,221,0.3);
  border-color: var(--candy-purple) !important;
}

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: linear-gradient(135deg, var(--candy-pink), var(--candy-purple)) !important;
  color: white !important;
  border: none !important;
  border-radius: 50px !important;
  font-weight: 700;
  box-shadow: 0 6px 20px rgba(221,160,221,0.35);
}

.button-primary:hover, .btn:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 25px rgba(255,182,193,0.5);
}

.status-badge, .tag {
  background: linear-gradient(135deg, var(--candy-blue), var(--candy-purple)) !important;
  color: white !important;
  border-radius: 20px;
  font-weight: 700;
}

.text-accent { color: #FF69B4; }
.icon-container { background: linear-gradient(135deg, var(--candy-pink), var(--candy-blue)) !important; border-radius: 50% !important; }

/* Rainbow text */
.rainbow-text, .text-gradient {
  background: linear-gradient(90deg, var(--candy-pink), var(--candy-purple), var(--candy-blue), var(--candy-green), var(--candy-pink));
  background-size: 200% auto;
  -webkit-background-clip: text; background-clip: text; color: transparent;
  animation: candyRainbow 3s linear infinite;
}
@keyframes candyRainbow { to { background-position: 200% center; } }

h1, h2, h3 { color: #5D3A6E; font-weight: 800; }
nav, footer { border-color: rgba(255,182,193,0.3) !important; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "matrix-hacker",
    name: "Matrix Hacker",
    subtitle: "Terminal • Cybersecurity • Code",
    description: "Estética de terminal hacker com verde fosforescente sobre preto, código caindo estilo Matrix e interface de linha de comando. Para devs e entusiastas de segurança.",
    objective: "Transmitir poder técnico, segurança cibernética e atmosfera de hacking — ideal para ferramentas de dev e segurança.",
    colors: ["#000000", "#0D0D0D", "#00FF00", "#00CC00", "#003300"],
    features: ["Terminal", "Code Rain", "Hacker", "Monospace"],
    iconStyle: "Ícones ASCII ou pixel art, verde fosforescente. Estética de terminal DOS/Unix.",
    layoutStyle: "Interface de terminal, grids de dados, scanlines. Bordas finas verde sobre preto.",
    typography: "Monospace estrita. Fira Code, JetBrains Mono, Consolas.",
    previewImage: styleMatrixHacker,
    cssVariables: {
      "--background": "0 0% 0%",
      "--foreground": "120 100% 50%",
      "--primary": "120 100% 50%",
      "--accent": "120 100% 40%",
    },
    sampleCSS: `:root {
  --bg-black: #000000;
  --bg-dark: #0D0D0D;
  --matrix-green: #00FF00;
  --matrix-dim: #00CC00;
  --matrix-dark: #003300;
  --border-color: rgba(0,255,0,0.2);
}

body {
  background: var(--bg-black);
  color: var(--matrix-green);
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
  position: relative;
}

body::after {
  content:''; position:fixed; inset:0; pointer-events:none; z-index:100;
  background: repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.2) 2px, rgba(0,0,0,0.2) 4px);
}

.card {
  background: var(--bg-dark);
  border: 1px solid rgba(0,255,0,0.3);
  border-radius: 0 !important;
  padding: 20px;
}

.card::before { content: '> '; color: var(--matrix-green); font-weight: 700; }

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: transparent !important;
  border: 1px solid var(--matrix-green) !important;
  color: var(--matrix-green) !important;
  border-radius: 0 !important;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-family: inherit;
}

.button-primary:hover, .btn:hover {
  background: var(--matrix-green) !important;
  color: var(--bg-black) !important;
  box-shadow: 0 0 20px var(--matrix-green);
}

.status-badge, .tag {
  background: transparent !important;
  border: 1px solid var(--matrix-green);
  color: var(--matrix-green) !important;
  border-radius: 0;
  text-transform: uppercase;
  font-family: inherit;
}

.text-accent { color: var(--matrix-green); text-shadow: 0 0 8px rgba(0,255,0,0.5); }
.icon-container { background: var(--bg-dark) !important; border: 1px solid var(--matrix-green); border-radius: 0 !important; color: var(--matrix-green) !important; }

h1, h2, h3 { color: var(--matrix-green); font-family: inherit; text-transform: uppercase; }

/* Blinking cursor */
footer::after { content: '_'; animation: matrixBlink 1s step-end infinite; }
@keyframes matrixBlink { 0%,50%{opacity:1} 51%,100%{opacity:0} }

nav, footer { border-color: rgba(0,255,0,0.2) !important; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "watercolor-art",
    name: "Watercolor Art",
    subtitle: "Artistic • Soft • Creative",
    description: "Design artístico com texturas de aquarela, cores fluidas e bordas orgânicas. Perfeito para portfolios criativos, galerias de arte e marcas artesanais.",
    objective: "Transmitir criatividade, sensibilidade artística e originalidade — ideal para artistas, designers e marcas handmade.",
    colors: ["#FFF8F0", "#FFB4A2", "#E5989B", "#B5838D", "#6D6875"],
    features: ["Aquarela", "Artístico", "Orgânico", "Soft"],
    iconStyle: "Ícones com efeito de aquarela, bordas suaves e imperfeitas. Traços artísticos manuais.",
    layoutStyle: "Cards com bordas orgânicas, manchas de aquarela como decoração. Layout fluido.",
    typography: "Manuscrita elegante combinada com sans-serif leve. Dancing Script, Satisfy + Lato.",
    previewImage: styleWatercolorArt,
    cssVariables: {
      "--background": "30 100% 97%",
      "--foreground": "316 18% 40%",
      "--primary": "8 80% 75%",
      "--accent": "352 40% 60%",
    },
    sampleCSS: `:root {
  --bg-cream: #FFF8F0;
  --watercolor-peach: #FFB4A2;
  --watercolor-rose: #E5989B;
  --watercolor-mauve: #B5838D;
  --watercolor-gray: #6D6875;
  --border-color: rgba(229,152,155,0.3);
}

body {
  background: var(--bg-cream);
  color: var(--watercolor-gray);
  font-family: 'Lato', 'Segoe UI', sans-serif;
  position: relative;
}

body::before {
  content:''; position:fixed; width:300px; height:300px; top:10%; right:-50px;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  background: linear-gradient(135deg, rgba(255,180,162,0.2), rgba(229,152,155,0.15), transparent);
  filter: blur(20px);
  animation: waterBlob 8s ease-in-out infinite; pointer-events:none;
}
@keyframes waterBlob {
  0%,100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%}
  50%{border-radius:50% 50% 40% 60%/40% 50% 50% 60%}
}

.card {
  background: rgba(255,255,255,0.7);
  border: none !important;
  border-radius: 20px 60px 20px 60px !important;
  padding: 24px;
  box-shadow: 0 10px 40px rgba(181,131,141,0.1);
}

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: linear-gradient(135deg, var(--watercolor-peach), var(--watercolor-rose)) !important;
  color: white !important;
  border: none !important;
  border-radius: 30px 10px 30px 10px !important;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(229,152,155,0.3);
}

.button-primary:hover, .btn:hover {
  transform: scale(1.05) rotate(-2deg);
  border-radius: 10px 30px 10px 30px !important;
}

.status-badge, .tag {
  background: var(--watercolor-rose) !important;
  color: white !important;
  border-radius: 20px;
}

.text-accent { color: var(--watercolor-rose); }
.icon-container { background: linear-gradient(135deg, var(--watercolor-peach), var(--watercolor-rose)) !important; border-radius: 50% !important; }

h1, h2, h3 { font-family: 'Dancing Script', 'Georgia', cursive; color: var(--watercolor-mauve); }

nav, footer { border-color: rgba(229,152,155,0.2) !important; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "glass-3d",
    name: "Glassmorphism 3D",
    subtitle: "Glass • Depth • Modern iOS",
    description: "Glassmorphism avançado com camadas de profundidade, blur intenso e gradientes vibrantes ao fundo. Estilo iOS moderno com cards flutuantes transparentes.",
    objective: "Criar profundidade visual e modernidade — ideal para dashboards, apps de produtividade e interfaces premium.",
    colors: ["#667EEA", "#764BA2", "#F093FB", "#F5576C", "#4FACFE"],
    features: ["Glass Effect", "3D Depth", "Blur", "Modern"],
    iconStyle: "Ícones SF Symbols style, lineares com fill sutil. Cores adaptativas ao fundo.",
    layoutStyle: "Cards de vidro flutuantes em múltiplas camadas. Fundo com gradientes vibrantes animados.",
    typography: "SF Pro Display style. Inter, -apple-system.",
    previewImage: styleGlass3D,
    cssVariables: {
      "--background": "237 65% 66%",
      "--foreground": "0 0% 100%",
      "--primary": "237 65% 66%",
      "--accent": "313 78% 78%",
    },
    sampleCSS: `:root {
  --gradient-1: #667EEA;
  --gradient-2: #764BA2;
  --gradient-3: #F093FB;
  --gradient-4: #F5576C;
  --glass-bg: rgba(255,255,255,0.1);
  --glass-border: rgba(255,255,255,0.2);
  --border-color: rgba(255,255,255,0.15);
}

body {
  background: linear-gradient(-45deg, #667EEA, #764BA2, #F093FB, #F5576C);
  background-size: 400% 400%;
  animation: glassGradient 15s ease infinite;
  color: white;
  font-family: -apple-system, 'Inter', sans-serif;
}
@keyframes glassGradient { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }

.card {
  background: rgba(255,255,255,0.1) !important;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.2) !important;
  border-radius: 20px !important;
  padding: 24px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255,255,255,0.08);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: rgba(255,255,255,0.2) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3) !important;
  border-radius: 14px !important;
  color: white !important;
  font-weight: 600;
}

.button-primary:hover, .btn:hover {
  background: rgba(255,255,255,0.3) !important;
  transform: scale(1.05);
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

.status-badge, .tag {
  background: rgba(255,255,255,0.2) !important;
  backdrop-filter: blur(8px);
  color: white !important;
  border: 1px solid rgba(255,255,255,0.25);
}

.text-accent { color: rgba(255,255,255,0.9); }
.icon-container { background: rgba(255,255,255,0.15) !important; backdrop-filter: blur(8px); }

nav { background: rgba(255,255,255,0.05) !important; backdrop-filter: blur(10px); }
nav, footer { border-color: rgba(255,255,255,0.1) !important; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "nature-organic",
    name: "Nature Organic",
    subtitle: "Eco • Natural • Sustainable",
    description: "Design inspirado na natureza com tons terrosos, texturas de madeira e folhagens. Formas orgânicas e curvas naturais para marcas sustentáveis.",
    objective: "Transmitir sustentabilidade, conexão com a natureza e consciência ambiental — ideal para marcas eco-friendly.",
    colors: ["#F5E6D3", "#2D5016", "#4A7C23", "#8B4513", "#D4A574"],
    features: ["Eco-Friendly", "Orgânico", "Natural", "Terroso"],
    iconStyle: "Ícones de folhas, plantas e elementos naturais. Traços orgânicos, cores terrosas.",
    layoutStyle: "Cards com bordas orgânicas irregulares. Texturas de papel reciclado e madeira.",
    typography: "Natural e friendly. Merriweather para títulos, Open Sans para corpo.",
    previewImage: styleNatureOrganic,
    cssVariables: {
      "--background": "30 45% 91%",
      "--foreground": "93 53% 20%",
      "--primary": "93 53% 20%",
      "--accent": "93 53% 30%",
    },
    sampleCSS: `:root {
  --bg-cream: #F5E6D3;
  --forest-dark: #2D5016;
  --forest-light: #4A7C23;
  --wood-brown: #8B4513;
  --sand: #D4A574;
  --border-color: rgba(45,80,22,0.2);
}

body {
  background: var(--bg-cream);
  color: #3D2B1F;
  font-family: 'Merriweather', 'Georgia', serif;
}

.card {
  background: linear-gradient(135deg, #FFFEF9, var(--bg-cream));
  border: 2px solid var(--forest-dark) !important;
  border-radius: 20px 5px 20px 5px !important;
  padding: 20px;
  box-shadow: 4px 4px 0 var(--forest-dark), 0 10px 30px rgba(45,80,22,0.08);
}

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: var(--forest-dark) !important;
  color: var(--bg-cream) !important;
  border: none !important;
  border-radius: 30px 10px 30px 10px !important;
  font-weight: 600;
}

.button-primary:hover, .btn:hover {
  background: var(--forest-light) !important;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(45,80,22,0.3);
}

.status-badge, .tag {
  background: var(--forest-dark) !important;
  color: var(--bg-cream) !important;
  border-radius: 20px;
}

.text-accent { color: var(--forest-light); }
.icon-container { background: var(--forest-dark) !important; color: var(--bg-cream) !important; border-radius: 50% !important; }

h1, h2, h3 { font-family: 'Merriweather', serif; color: var(--forest-dark); }

nav, footer { border-color: var(--forest-dark) !important; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },

  // ==================== VIZION LAYOUT - CONVERSION STYLE ====================

  {
    id: "vizion-layout",
    name: "Vizion Layout",
    subtitle: "Conversão • Landing Page • Dark SaaS",
    description: "Design de alta conversão com estética dark tech. Fundo preto profundo com destaques em verde neon, elementos de escassez, prova social e comparativos visuais. Otimizado para landing pages de vendas.",
    objective: "Maximizar conversões com visual impactante, urgência e prova social. Ideal para landing pages de produtos digitais e SaaS.",
    colors: ["#000000", "#0F172A", "#00FF88", "#FFFFFF", "#6B7280"],
    features: ["Alta Conversão", "Dark Mode", "Neon Green", "Urgency Elements"],
    iconStyle: "Ícones lineares com glow verde neon, minimalistas e modernos. Foco em clareza e impacto visual.",
    layoutStyle: "Hero centralizado com headline massiva, cards com bordas glowing, grid de prova social, comparativos visuais.",
    typography: "Inter ou Space Grotesk para títulos bold, JetBrains Mono para código e dados.",
    previewImage: styleVizionLayout,
    cssVariables: {
      "--background": "0 0% 0%",
      "--foreground": "0 0% 100%",
      "--primary": "150 100% 50%",
      "--accent": "220 14% 10%",
    },
    sampleCSS: `:root {
  --background: #000000;
  --surface: #0F172A;
  --surface-light: #1E293B;
  --text-primary: #FFFFFF;
  --text-secondary: #94A3B8;
  --neon-green: #00FF88;
  --glow-green: 0 0 20px rgba(0, 255, 136, 0.4);
  --glow-green-intense: 0 0 40px rgba(0, 255, 136, 0.6);
}

body {
  background: var(--background);
  background-image: 
    radial-gradient(circle at 50% 0%, rgba(0, 255, 136, 0.05) 0%, transparent 50%),
    linear-gradient(rgba(0, 255, 136, 0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 136, 0.02) 1px, transparent 1px);
  background-size: 100% 100%, 50px 50px, 50px 50px;
}

.hero-headline {
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  color: var(--text-primary);
}

.hero-headline .highlight {
  color: var(--neon-green);
  text-shadow: var(--glow-green);
}

.offer-box {
  background: var(--surface);
  border: 2px solid var(--neon-green);
  border-radius: 16px;
  padding: 32px;
  box-shadow: var(--glow-green);
  position: relative;
  overflow: hidden;
}

.cta-button {
  background: linear-gradient(135deg, var(--neon-green), #00CC6A);
  color: #000000;
  font-weight: 700;
  padding: 16px 40px;
  border-radius: 12px;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  box-shadow: var(--glow-green);
}

.cta-button:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: var(--glow-green-intense);
}

.testimonial-card {
  background: var(--surface);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
}

.countdown-number {
  font-family: 'JetBrains Mono', monospace;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--neon-green);
  text-shadow: var(--glow-green);
}`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "futuristic",
    name: "Futuristic",
    subtitle: "Cyber UI • Neon Glow • Modern SaaS",
    description: "Estética dark futurística com canvas escuro, acentos neon em cyan e magenta. Cards com efeito glass/blur, orbes flutuantes com gradientes, grid pattern overlay e sombras neon. Design moderno para SaaS e dashboards com visual cyber.",
    objective: "Transmitir inovação, tecnologia de ponta e sofisticação digital — ideal para produtos tech, AI e startups modernas.",
    colors: ["#0C1220", "#141B2B", "#00D4FF", "#FF3399", "#1E293B"],
    features: ["Dark Canvas", "Neon Glow", "Glassmorphism", "Cyber Aesthetic"],
    iconStyle: "Ícones geométricos com glow neon, estilo futurista, preferencialmente outline com bordas brilhantes.",
    layoutStyle: "Cards glass com blur, orbes flutuantes, grid sheen overlay, hierarquia visual por brilho.",
    typography: "Space Grotesk para títulos, Inter para corpo. JetBrains Mono para dados e código.",
    previewImage: styleFuturistic,
    cssVariables: {
      "--background": "215 44% 8%",
      "--foreground": "210 40% 96%",
      "--primary": "189 100% 50%",
      "--accent": "330 100% 65%",
    },
    sampleCSS: `:root {
  --background: #0C1220;
  --surface: #141B2B;
  --text-primary: #E2E8F0;
  --text-secondary: #94A3B8;
  --primary: #00D4FF;
  --accent: #FF3399;
  --border: rgba(0,212,255,0.12);
  --border-color: rgba(0,212,255,0.12);
  --glow-primary: 0 0 30px rgba(0,212,255,0.25);
  --glow-accent: 0 0 30px rgba(255,51,153,0.25);
}

body {
  background: var(--background);
  color: var(--text-primary);
  font-family: 'Space Grotesk', 'Inter', sans-serif;
  background-image:
    radial-gradient(900px 450px at 30% 20%, rgba(0,212,255,0.12), transparent 55%),
    radial-gradient(700px 380px at 85% 30%, rgba(255,51,153,0.08), transparent 60%);
}

.card {
  background: rgba(20,27,43,0.8);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 60px -30px rgba(0,212,255,0.15);
}

.card:hover {
  border-color: var(--primary);
  box-shadow: var(--glow-primary);
}

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: linear-gradient(135deg, var(--primary), #0891B2) !important;
  color: var(--background) !important;
  border: none !important;
  border-radius: 12px;
  font-weight: 700;
  box-shadow: 0 4px 20px rgba(0,212,255,0.3);
}

.button-primary:hover, .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0,212,255,0.4);
}

.status-badge, .tag {
  background: linear-gradient(135deg, var(--primary), var(--accent)) !important;
  color: white !important;
}

.text-accent {
  background: linear-gradient(90deg, var(--primary), var(--accent));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}

.text-gradient {
  background: linear-gradient(90deg, var(--primary), var(--accent));
  -webkit-background-clip: text; background-clip: text; color: transparent;
}

.icon-container { background: rgba(0,212,255,0.1) !important; border: 1px solid rgba(0,212,255,0.2); }

/* Grid overlay */
section:first-of-type::before {
  content:''; position:absolute; inset:0; pointer-events:none;
  background-image: linear-gradient(to right, rgba(0,212,255,0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,212,255,0.02) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(55% 45% at 50% 35%, black 20%, transparent 72%);
}

nav, footer { border-color: rgba(0,212,255,0.1) !important; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  // ===== NEW TECH STUDY STYLES =====
  {
    id: "silent-tech",
    name: "Tecnologia Silenciosa",
    subtitle: "Estudos • Focus • Tech Avançado",
    description: "Estética de tecnologia silenciosa, racional e de alta precisão para usuários tecnicamente sofisticados. Paleta neutra de alto controle com uma única cor de acento digital aplicada de forma funcional.",
    objective: "Transmitir: 'este sistema respeita minha inteligência e meu foco' — ideal para apps de estudos e produtividade avançada.",
    colors: ["#FAFAFA", "#F5F5F4", "#E7E5E4", "#78716C", "#3B82F6"],
    features: ["Minimalista", "Neutro", "Racional", "Precisão"],
    iconStyle: "Ícones lineares ultra-finos, monocromáticos, sem preenchimento. Consistência absoluta no traço.",
    layoutStyle: "Interface densa em significado com amplo respiro visual. Uma única ação dominante por tela.",
    typography: "Contemporânea de leitura contínua. Inter, SF Pro, System UI. Excelente rendering em longas sessões.",
    previewImage: styleSilentTech,
    cssVariables: {
      "--background": "0 0% 98%",
      "--foreground": "20 6% 25%",
      "--primary": "217 91% 60%",
      "--muted": "20 6% 90%",
    },
    sampleCSS: `:root {
  /* Paleta Tecnologia Silenciosa */
  --background: #FAFAFA;
  --surface: #FFFFFF;
  --surface-elevated: #F5F5F4;
  --text-primary: #292524;
  --text-secondary: #78716C;
  --text-muted: #A8A29E;
  --accent: #3B82F6;
  --accent-subtle: rgba(59, 130, 246, 0.08);
  --border: #E7E5E4;
  --border-subtle: #F5F5F4;
  
  /* Sombras Precisas */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 2px 8px rgba(0,0,0,0.06);
  --shadow-focus: 0 0 0 2px var(--accent-subtle);
}

/* Card Silencioso */
.card-silent {
  background: var(--surface);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 24px;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s ease;
}

.card-silent:hover {
  box-shadow: var(--shadow-md);
}

/* Botão Funcional */
.button-functional {
  background: var(--text-primary);
  color: var(--background);
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.01em;
  transition: opacity 0.15s ease;
}

.button-functional:hover {
  opacity: 0.9;
}

/* Acento Digital */
.accent-indicator {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}

/* Input Preciso */
.input-precise {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 14px;
  color: var(--text-primary);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.input-precise:focus {
  border-color: var(--accent);
  box-shadow: var(--shadow-focus);
  outline: none;
}

/* Grid Preciso */
.grid-layout {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
}

/* Tipografia Hierárquica */
.heading-primary {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.text-body {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Divisor Sutil */
.divider {
  height: 1px;
  background: var(--border-subtle);
  margin: 24px 0;
}`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "tech-focus-flow",
    name: "Tech Focus Flow",
    subtitle: "Dark Mode • Fluxo • Imersão",
    description: "App de estudos para usuários de alta proficiência técnica, projetado para induzir estado de fluxo prolongado. Paleta escura profissional com contrastes matematicamente equilibrados.",
    objective: "Comunicar: 'entre, produza, avance — sem fricção' — perfeito para sessões longas de estudo e trabalho focado.",
    colors: ["#0F172A", "#1E293B", "#334155", "#94A3B8", "#6366F1"],
    features: ["Dark Mode", "Foco", "Imersão", "Profissional"],
    iconStyle: "Ícones geométricos, semi-fill, tons de cinza com destaque único na ação principal.",
    layoutStyle: "Interface extremamente enxuta, sem cards inflados ou widgets redundantes. Continuidade temporal e progresso mensurável.",
    typography: "Funcional e precisa. Inter, SF Pro Mono para dados. Pesos otimizados para escaneamento rápido.",
    previewImage: styleTechFocusFlow,
    cssVariables: {
      "--background": "222 47% 11%",
      "--foreground": "210 40% 96%",
      "--primary": "239 84% 67%",
      "--muted": "215 20% 25%",
    },
    sampleCSS: `:root {
  /* Paleta Tech Focus Flow */
  --background: #0F172A;
  --surface: #1E293B;
  --surface-elevated: #334155;
  --text-primary: #F1F5F9;
  --text-secondary: #94A3B8;
  --text-muted: #64748B;
  --accent: #6366F1;
  --accent-glow: rgba(99, 102, 241, 0.15);
  --success: #22C55E;
  --border: #334155;
  --border-subtle: rgba(148, 163, 184, 0.1);
  
  /* Sombras Profundas */
  --shadow-depth: 0 4px 24px rgba(0,0,0,0.4);
  --shadow-glow: 0 0 20px var(--accent-glow);
}

/* Card de Fluxo */
.card-flow {
  background: var(--surface);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 20px;
  transition: border-color 0.2s ease;
}

.card-flow:hover {
  border-color: var(--accent);
}

/* Barra de Progresso */
.progress-bar {
  height: 4px;
  background: var(--border);
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), #818CF8);
  border-radius: 2px;
  transition: width 0.3s ease;
}

/* Botão de Ação Primária */
.button-action {
  background: var(--accent);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  box-shadow: var(--shadow-glow);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.button-action:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 30px var(--accent-glow);
}

/* Métricas de Tempo */
.time-display {
  font-family: 'SF Mono', 'JetBrains Mono', monospace;
  font-size: 32px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.time-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-muted);
}

/* Indicador de Status */
.status-active {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--success);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: currentColor;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Sidebar Minimalista */
.sidebar-minimal {
  width: 64px;
  background: var(--background);
  border-right: 1px solid var(--border-subtle);
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.nav-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: var(--text-muted);
  transition: color 0.15s ease, background 0.15s ease;
}

.nav-icon:hover,
.nav-icon.active {
  color: var(--text-primary);
  background: var(--surface);
}`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "minimal-tech-intelligence",
    name: "Minimal Tech Intelligence",
    subtitle: "Modular • Previsível • Inteligente",
    description: "Linguagem visual minimalista, previsível e intelectualmente honesta para mentes técnicas e analíticas. Layout modular que facilita aprendizado rápido da interface.",
    objective: "A sensação final: 'isso amplifica minha capacidade de raciocínio' — construído por engenheiros, para engenheiros.",
    colors: ["#FFFFFF", "#F8FAFC", "#E2E8F0", "#64748B", "#0EA5E9"],
    features: ["Modular", "Lógico", "Previsível", "Inteligente"],
    iconStyle: "Ícones funcionais sem ornamentação, estilo outline consistente. Sem metáforas visuais óbvias.",
    layoutStyle: "Layout modular, lógico e repetível. Grid consistente, hierarquia clara, zero surpresas visuais.",
    typography: "Sistema UI nativo. -apple-system, Inter. Hierarquia através de peso, não tamanho.",
    previewImage: styleMinimalTechIntelligence,
    cssVariables: {
      "--background": "0 0% 100%",
      "--foreground": "215 20% 30%",
      "--primary": "199 89% 48%",
      "--muted": "210 40% 96%",
    },
    sampleCSS: `:root {
  /* Paleta Minimal Tech Intelligence */
  --background: #FFFFFF;
  --surface: #F8FAFC;
  --surface-alt: #F1F5F9;
  --text-primary: #1E293B;
  --text-secondary: #64748B;
  --text-muted: #94A3B8;
  --accent: #0EA5E9;
  --accent-light: rgba(14, 165, 233, 0.1);
  --success: #10B981;
  --warning: #F59E0B;
  --border: #E2E8F0;
  --border-focus: var(--accent);
  
  /* Espaçamento Modular (8px base) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 24px;
  --space-6: 32px;
}

/* Card Modular */
.card-modular {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: var(--space-5);
}

/* Seção de Conteúdo */
.content-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--border);
}

.section-title {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted);
}

/* Lista de Items */
.item-list {
  display: flex;
  flex-direction: column;
}

.item-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3) 0;
  border-bottom: 1px solid var(--border);
}

.item-row:last-child {
  border-bottom: none;
}

.item-label {
  font-size: 14px;
  color: var(--text-primary);
}

.item-value {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
}

/* Botão Inteligente */
.button-smart {
  background: var(--accent);
  color: white;
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 13px;
  transition: background 0.15s ease;
}

.button-smart:hover {
  background: #0284C7;
}

.button-secondary {
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border);
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: 500;
  font-size: 13px;
  transition: border-color 0.15s ease, color 0.15s ease;
}

.button-secondary:hover {
  border-color: var(--text-secondary);
  color: var(--text-primary);
}

/* Badge de Status */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
}

.status-success {
  background: rgba(16, 185, 129, 0.1);
  color: var(--success);
}

.status-warning {
  background: rgba(245, 158, 11, 0.1);
  color: var(--warning);
}

/* Grid Previsível */
.grid-predictable {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
}

/* Métrica Modular */
.metric-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: var(--space-4);
  text-align: center;
}

.metric-value {
  font-size: 28px;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1;
}

.metric-label {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: var(--space-2);
}`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "loris-portfolio",
    name: "Dark Portfolio Minimal",
    subtitle: "Portfólio Criativo • Agência • Design Gráfico",
    description: "Estética ultra-minimalista com fundo preto puro, tipografia branca limpa e elementos 3D flutuantes. Inspirado em portfólios de designers premium como lorisbukvic.graphics. Layout centrado com hero impactante e grid de projetos.",
    objective: "Criar uma presença digital sofisticada e memorável para criativos, designers e agências — foco total no trabalho visual.",
    colors: ["#000000", "#0A0A0A", "#FFFFFF", "#6B7280", "#1F2937"],
    features: ["Ultra-Minimal", "Fundo Preto", "Tipografia Clean", "3D Elements", "Portfolio Grid"],
    iconStyle: "Ícones finos e minimalistas em branco sobre preto. Estilo geométrico e abstrato.",
    layoutStyle: "Hero centralizado com tipografia grande, grid assimétrico de projetos, navegação ultra-simples com logo + contato.",
    typography: "System fonts (-apple-system, BlinkMacSystemFont, Segoe UI). Peso 800 para títulos, 400 para corpo.",
    previewImage: styleLorisPortfolio,
    exampleUrl: "https://www.lorisbukvic.graphics/",
    cssVariables: {
      "--background": "0 0% 0%",
      "--foreground": "0 0% 100%",
      "--primary": "0 0% 100%",
      "--muted": "0 0% 6%",
    },
    sampleCSS: `:root {
  /* Paleta de cores — Dark Portfolio Minimal */
  --cor-fundo: #000000;
  --cor-superficie: #0a0a0a;
  --cor-texto: #ffffff;
  --cor-texto-secundario: #6b7280;
  --cor-borda: #1f2937;
  --cor-accent: #ffffff;

  /* Tipografia */
  --fonte-principal: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --fonte-mono: 'Courier New', monospace;

  /* Espaçamentos */
  --espacamento-base: 16px;
  --raio-borda: 8px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--fonte-principal);
  color: var(--cor-texto);
  background: var(--cor-fundo);
  line-height: 1.6;
}

/* Header — navegação ultra-simples */
.header {
  border-bottom: 1px solid var(--cor-borda);
  padding: var(--espacamento-base) calc(var(--espacamento-base) * 2);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo {
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--cor-texto);
}

.header-nav {
  display: flex;
  gap: calc(var(--espacamento-base) * 1.5);
}

.header-nav a {
  color: var(--cor-texto-secundario);
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.3s ease;
}

.header-nav a:hover {
  color: var(--cor-texto);
}

/* Hero Section — impacto visual */
.hero {
  padding: calc(var(--espacamento-base) * 5) calc(var(--espacamento-base) * 2);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: var(--espacamento-base);
  color: var(--cor-texto);
}

.hero p {
  font-size: 1.125rem;
  color: var(--cor-texto-secundario);
  margin-bottom: calc(var(--espacamento-base) * 2);
}

.hero-btn {
  background: var(--cor-texto);
  color: var(--cor-fundo);
  border: none;
  padding: 12px 32px;
  border-radius: var(--raio-borda);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.hero-btn:hover {
  opacity: 0.85;
}

/* Grid de projetos */
.projects-grid {
  padding: calc(var(--espacamento-base) * 3) calc(var(--espacamento-base) * 2);
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--espacamento-base) * 1.5);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .hero h1 {
    font-size: 1.75rem;
  }
}

.project-card {
  border: 1px solid var(--cor-borda);
  border-radius: var(--raio-borda);
  padding: calc(var(--espacamento-base) * 1.5);
  transition: border-color 0.3s ease;
}

.project-card:hover {
  border-color: var(--cor-texto-secundario);
}

.project-card h3 {
  font-weight: 600;
  margin-bottom: 8px;
}

.project-card p {
  font-size: 0.875rem;
  color: var(--cor-texto-secundario);
}

/* Footer */
.footer {
  border-top: 1px solid var(--cor-borda);
  padding: calc(var(--espacamento-base) * 2);
  text-align: center;
  font-size: 0.75rem;
  color: var(--cor-texto-secundario);
}`,
  },
  {
    id: "slush-fintech",
    name: "Slush Fintech",
    subtitle: "Crypto • DeFi • Moderno 3D",
    description: "Interface financeira moderna com fundo navy profundo (#0A1628), destaques em azul elétrico (#3B82F6) e elementos 3D texturizados. Design premium para fintechs e apps de crypto com visual profissional e confiável.",
    objective: "Transmitir confiança, inovação financeira e tecnologia avançada — ideal para DeFi, crypto wallets e fintechs premium.",
    colors: ["#0A1628", "#1E3A5F", "#3B82F6", "#60A5FA", "#FFFFFF"],
    features: ["Dark Navy", "Azul Elétrico", "3D Elements", "Finance"],
    iconStyle: "Ícones modernos com acabamento 3D sutil, gradientes azuis e contornos glow. Estilo tech-finance premium.",
    layoutStyle: "Cards com bordas sutis e glow azul, grid organizado, espaçamentos generosos. Hero impactante com elementos 3D.",
    typography: "SF Pro Display, Inter ou similar. Pesos fortes para headlines, clara hierarquia de dados.",
    previewImage: styleSlushFintech,
    cssVariables: {
      "--background": "215 60% 8%",
      "--foreground": "210 40% 98%",
      "--primary": "217 91% 60%",
      "--accent": "213 100% 70%",
      "--surface": "215 50% 15%",
    },
    sampleCSS: `:root {
  --cor-fundo: #0A1628;
  --cor-superficie: #1E3A5F;
  --cor-texto: #FFFFFF;
  --cor-texto-secundario: #94A3B8;
  --cor-primaria: #3B82F6;
  --cor-destaque: #60A5FA;
  --cor-borda: rgba(59, 130, 246, 0.2);
  --glow: 0 0 40px rgba(59, 130, 246, 0.3);
  --fonte-principal: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --espacamento-base: 16px;
  --raio-borda: 12px;
}

body {
  background: var(--cor-fundo);
  color: var(--cor-texto);
  font-family: var(--fonte-principal);
  line-height: 1.6;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--espacamento-base) calc(var(--espacamento-base) * 2);
  border-bottom: 1px solid var(--cor-borda);
}

.logo {
  font-weight: 800;
  font-size: 1.5rem;
  background: linear-gradient(135deg, var(--cor-primaria), var(--cor-destaque));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero {
  text-align: center;
  padding: calc(var(--espacamento-base) * 6) calc(var(--espacamento-base) * 2);
  max-width: 900px;
  margin: 0 auto;
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.button-primary {
  background: var(--cor-primaria);
  color: white;
  border: none;
  padding: 16px 40px;
  border-radius: var(--raio-borda);
  font-weight: 600;
  box-shadow: var(--glow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 60px rgba(59, 130, 246, 0.5);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--espacamento-base) * 1.5);
  max-width: 1000px;
  margin: 0 auto;
  padding: calc(var(--espacamento-base) * 3) calc(var(--espacamento-base) * 2);
}

.feature-card {
  background: var(--cor-superficie);
  border: 1px solid var(--cor-borda);
  border-radius: var(--raio-borda);
  padding: calc(var(--espacamento-base) * 2);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  border-color: var(--cor-primaria);
  box-shadow: var(--glow);
}`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  // ===== 8 NEW PREMIUM STYLES =====
  {
    id: "saas-anthropic",
    name: "SaaS Premium Anthropic",
    subtitle: "Landing Page • SaaS • AI Product",
    description: "Layout premium para landing page SaaS inspirada na Anthropic: tipografia expressiva, paleta sofisticada escura, animações sutis e microinterações elegantes. Visual moderno sem ser genérico.",
    objective: "Transmitir inovação, confiança e sofisticação tecnológica — ideal para produtos SaaS e AI.",
    colors: ["#0D0D0D", "#1A1A2E", "#F5F0EB", "#D4A574", "#8B7355"],
    features: ["Tipografia Expressiva", "Paleta Sofisticada", "Microinterações", "Anti-Genérico"],
    iconStyle: "Ícones custom com traço médio, monocromáticos com acento warm. Sem ilustrações cartoon.",
    layoutStyle: "Hero assimétrico com grid fluido. Seções com breathing room generoso. Cards com profundidade sutil.",
    typography: "Sora ou Plus Jakarta Sans para títulos. Inter para corpo. Contraste forte de peso.",
    previewImage: styleSaasAnthropic,
    cssVariables: {
      "--background": "240 20% 6%",
      "--foreground": "30 20% 95%",
      "--primary": "30 40% 65%",
      "--muted": "240 10% 15%",
    },
    sampleCSS: `:root {
  --bg: #0D0D0D;
  --surface: #1A1A2E;
  --text: #F5F0EB;
  --text-muted: #8B8B8B;
  --accent: #D4A574;
  --accent-hover: #E8C49A;
  --border: rgba(255,255,255,0.06);
  --border-color: rgba(255,255,255,0.06);
  --glow: 0 0 40px rgba(212,165,116,0.12);
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.4s cubic-bezier(.4,0,.2,1);
}

.card:hover { border-color: var(--accent); box-shadow: var(--glow); transform: translateY(-2px); }

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: var(--accent) !important;
  color: var(--bg) !important;
  border: none !important;
  border-radius: 12px;
  font-weight: 600;
}

.button-primary:hover, .btn:hover { background: var(--accent-hover) !important; transform: translateY(-1px); }

.status-badge, .tag {
  background: rgba(212,165,116,0.15) !important;
  color: var(--accent) !important;
  border: 1px solid rgba(212,165,116,0.3);
}

.text-accent { color: var(--accent); }
.icon-container { background: rgba(212,165,116,0.1) !important; border: 1px solid rgba(212,165,116,0.2); }

h1 { font-size: 36px !important; font-weight: 700; letter-spacing: -0.03em; }
nav, footer { border-color: rgba(255,255,255,0.06) !important; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "blog-editorial",
    name: "Blog Editorial Premium",
    subtitle: "Editorial • Blog • Magazine",
    description: "Layout premium para blog editorial com serifas refinadas, background customizado, microinterações suaves. Ambiente sofisticado e editorial que convida à leitura profunda.",
    objective: "Criar uma experiência de leitura imersiva e sofisticada — ideal para blogs editoriais e revistas digitais.",
    colors: ["#FDFAF6", "#F5EDE3", "#2C2320", "#8B6F5E", "#C4956A"],
    features: ["Serifas Refinadas", "Editorial Layout", "Warm Tones", "Leitura Imersiva"],
    iconStyle: "Ícones minimalistas com traço fino, tons terrosos. Ilustrações editoriais opcionais.",
    layoutStyle: "Layout de revista com colunas. Imagens grandes com overlap. Tipografia como elemento visual.",
    typography: "Playfair Display ou Fraunces para títulos. Lora ou Source Serif para corpo. Ritmo vertical perfeito.",
    previewImage: styleBlogEditorial,
    cssVariables: {
      "--background": "30 30% 97%",
      "--foreground": "20 20% 15%",
      "--primary": "25 40% 60%",
      "--muted": "30 20% 92%",
    },
    sampleCSS: `:root {
  --bg: #FDFAF6;
  --surface: #F5EDE3;
  --text: #2C2320;
  --text-muted: #8B6F5E;
  --accent: #C4956A;
  --border: #E8DDD0;
  --border-color: #E8DDD0;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Source Serif Pro', 'Georgia', serif;
}

h1, h2, h3 { font-family: 'Playfair Display', serif; color: var(--text); letter-spacing: -0.02em; }
h1 { font-size: 32px !important; font-weight: 700; }

.card {
  background: var(--surface);
  border: none !important;
  border-radius: 12px;
  padding: 24px;
  transition: transform 0.3s ease;
}

.card:hover { transform: translateY(-4px); }

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: var(--text) !important;
  color: var(--bg) !important;
  border: none !important;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  letter-spacing: 0.03em;
}

.status-badge, .tag {
  background: var(--accent) !important;
  color: white !important;
  border-radius: 20px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.text-accent { color: var(--accent); }
.icon-container { background: var(--surface) !important; border: 1px solid var(--border); }

p { line-height: 1.8; }
nav, footer { border-color: var(--border) !important; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "dashboard-analytics",
    name: "Dashboard Analytics Premium",
    subtitle: "Dashboard • Analytics • Data",
    description: "Layout premium para dashboard de análise com paleta escura, efeitos de blur, microinterações premium. Visual sofisticado e responsivo para interfaces de dados complexas.",
    objective: "Apresentar dados complexos de forma clara e elegante — ideal para dashboards e plataformas de analytics.",
    colors: ["#0A0A1A", "#12122B", "#7C3AED", "#06B6D4", "#1E1E3F"],
    features: ["Dark Theme", "Glassmorphism", "Data-Driven", "Blur Effects"],
    iconStyle: "Ícones lineares com glow sutil. Cores de acento para estados ativos. Phosphor Icons ou similar.",
    layoutStyle: "Grid dashboard com sidebar. Cards com glassmorphism. Gráficos com gradientes suaves.",
    typography: "Inter ou DM Sans para interface. JetBrains Mono para dados numéricos. Pesos variados.",
    previewImage: styleDashboardAnalytics,
    cssVariables: {
      "--background": "240 40% 7%",
      "--foreground": "210 40% 96%",
      "--primary": "263 70% 58%",
      "--muted": "240 30% 15%",
    },
    sampleCSS: `:root {
  --bg: #0A0A1A;
  --surface: rgba(18,18,43,0.8);
  --text: #E2E8F0;
  --text-muted: #64748B;
  --primary: #7C3AED;
  --secondary: #06B6D4;
  --border: rgba(255,255,255,0.06);
  --border-color: rgba(124,58,237,0.15);
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Sans', 'Inter', sans-serif;
}

.card {
  background: var(--surface);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 20px;
}

.card:hover { border-color: var(--primary); box-shadow: 0 0 30px rgba(124,58,237,0.12); }

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: linear-gradient(135deg, var(--primary), #9333EA) !important;
  color: white !important;
  border: none !important;
  border-radius: 12px;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(124,58,237,0.25);
}

.status-badge, .tag {
  background: var(--primary) !important;
  color: white !important;
}

.text-accent { color: var(--secondary); }
.icon-container { background: rgba(124,58,237,0.15) !important; border: 1px solid rgba(124,58,237,0.25); }

h1, h2, h3 { font-weight: 700; }

/* Metric style */
.card:first-child { border-top: 2px solid var(--primary); }

nav, footer { border-color: rgba(124,58,237,0.1) !important; }
nav { background: rgba(10,10,26,0.9); backdrop-filter: blur(10px); }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "minimalist-premium",
    name: "Minimalista Premium",
    subtitle: "Minimal • Clean • Sofisticado",
    description: "Interface profissional baseada no estilo minimalista com tipografia refinada, paleta neutra, microinterações suaves e animações elegantes. Menos é mais, com propósito.",
    objective: "Transmitir sofisticação através da simplicidade — ideal para portfólios, agências e produtos premium.",
    colors: ["#FFFFFF", "#FAFAFA", "#111111", "#888888", "#E5E5E5"],
    features: ["Ultra Clean", "White Space", "Micro-Animations", "Tipografia Forte"],
    iconStyle: "Ícones de traço ultrafino (1px). Monocromáticos. Apenas o essencial.",
    layoutStyle: "Grid minimalista com espaçamento exagerado. Cada elemento respira. Assimetria intencional.",
    typography: "Outfit ou Satoshi para títulos. Inter para corpo. Tracking amplo em labels.",
    previewImage: styleMinimalistPremium,
    cssVariables: {
      "--background": "0 0% 100%",
      "--foreground": "0 0% 7%",
      "--primary": "0 0% 7%",
      "--muted": "0 0% 96%",
    },
    sampleCSS: `:root {
  --bg: #FFFFFF;
  --surface: #FAFAFA;
  --text: #111111;
  --text-muted: #888888;
  --border: #E5E5E5;
  --accent: #111111;
  --border-color: #E5E5E5;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Outfit', 'Inter', sans-serif;
}

h1 { font-size: 36px !important; font-weight: 300 !important; letter-spacing: -0.04em; }
h2, h3 { font-weight: 400; letter-spacing: -0.02em; }

.card {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 32px;
  background: transparent;
  transition: all 0.5s cubic-bezier(.4,0,.2,1);
}

.card:hover { border-color: var(--accent); }

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: transparent !important;
  border: 1px solid var(--accent) !important;
  color: var(--accent) !important;
  border-radius: 0 !important;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 11px;
}

.button-primary:hover, .btn:hover {
  background: var(--accent) !important;
  color: white !important;
}

.status-badge, .tag {
  background: transparent !important;
  border: 1px solid var(--text);
  color: var(--text) !important;
  border-radius: 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 9px;
}

.text-accent { color: var(--text); }
.icon-container { background: transparent !important; border: 1px solid var(--border); }

nav, footer { border-color: var(--border) !important; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "vibrant-premium",
    name: "Vibrante Premium",
    subtitle: "Colorful • Dynamic • Bold",
    description: "Interface profissional com cores vibrantes, tipografia bold, microinterações dinâmicas e transições chamativas. Energia e personalidade sem perder consistência e responsividade.",
    objective: "Capturar atenção e transmitir energia — ideal para startups, apps criativos e marcas jovens.",
    colors: ["#FF006E", "#8338EC", "#FFBE0B", "#FB5607", "#3A86FF"],
    features: ["Gradientes Vivos", "Bold Typography", "Transições Dinâmicas", "High Energy"],
    iconStyle: "Ícones filled com cores vibrantes. Duo-tone ou multi-color. Emojis como complemento.",
    layoutStyle: "Layout dinâmico com elementos overlapping. Cards com gradientes. Seções com formas orgânicas.",
    typography: "Clash Display ou Cabinet Grotesk para títulos. Nunito para corpo. Pesos extremos.",
    previewImage: styleVibrantPremium,
    cssVariables: {
      "--background": "280 60% 4%",
      "--foreground": "0 0% 100%",
      "--primary": "340 100% 50%",
      "--muted": "280 30% 12%",
    },
    sampleCSS: `:root {
  --bg: #0F0118;
  --text: #FFFFFF;
  --text-muted: #B8A9C9;
  --gradient-1: linear-gradient(135deg, #FF006E, #8338EC);
  --gradient-2: linear-gradient(135deg, #FB5607, #FFBE0B);
  --border-color: rgba(255,0,110,0.2);
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Cabinet Grotesk', 'Nunito', sans-serif;
}

h1 {
  font-size: 36px !important; font-weight: 800;
  background: linear-gradient(135deg, #FF006E, #8338EC);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}

.card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 24px !important;
  padding: 24px;
}

.card:hover { transform: scale(1.02) rotate(-0.5deg); border-color: #FF006E; }

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: linear-gradient(135deg, #FF006E, #8338EC) !important;
  color: white !important;
  border: none !important;
  border-radius: 50px !important;
  font-weight: 700;
  box-shadow: 0 8px 30px rgba(255,0,110,0.3);
}

.button-primary:hover, .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(255,0,110,0.5);
}

.status-badge, .tag {
  background: linear-gradient(135deg, #FB5607, #FFBE0B) !important;
  color: #0F0118 !important;
  font-weight: 700;
  border-radius: 20px;
}

.text-accent { color: #FF006E; }
.icon-container { background: linear-gradient(135deg, #8338EC, #3A86FF) !important; }

nav, footer { border-color: rgba(255,0,110,0.15) !important; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "futuristic-premium",
    name: "Futurista Premium",
    subtitle: "Sci-Fi • Metallic • High-Tech",
    description: "Interface profissional com elementos futuristas, gradientes metálicos, animações fluídas e paleta ciano/prata. Alta performance garantida em todos os dispositivos.",
    objective: "Evocar tecnologia de ponta e inovação — ideal para tech companies, crypto e produtos futuristas.",
    colors: ["#030712", "#111827", "#06B6D4", "#94A3B8", "#1E293B"],
    features: ["Metallic Gradients", "Glow Effects", "Sci-Fi UI", "Fluid Animations"],
    iconStyle: "Ícones com glow ciano. Estilo HUD/sci-fi. Linhas finas com brilho.",
    layoutStyle: "Layout com grid técnico. Borders com glow. Cards com reflexo metálico. HUD elements.",
    typography: "Exo 2 ou Orbitron para títulos. IBM Plex Sans para corpo. Monospace para dados.",
    previewImage: styleFuturisticPremium,
    cssVariables: {
      "--background": "222 47% 3%",
      "--foreground": "210 40% 96%",
      "--primary": "189 94% 43%",
      "--muted": "217 33% 12%",
    },
    sampleCSS: `:root {
  --bg: #030712;
  --surface: #111827;
  --text: #E2E8F0;
  --text-muted: #64748B;
  --cyan: #06B6D4;
  --silver: #94A3B8;
  --border: rgba(6,182,212,0.15);
  --border-color: rgba(6,182,212,0.15);
  --glow: 0 0 40px rgba(6,182,212,0.15);
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Exo 2', 'Inter', sans-serif;
  background-image: radial-gradient(600px circle at 50% 0%, rgba(6,182,212,0.06), transparent);
}

h1, h2 { font-family: 'Orbitron', sans-serif; color: var(--cyan); text-shadow: 0 0 15px rgba(6,182,212,0.3); }

.card {
  background: linear-gradient(135deg, rgba(6,182,212,0.04), transparent);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 20px;
}

.card:hover { border-color: var(--cyan); box-shadow: var(--glow); }

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: linear-gradient(135deg, var(--cyan), #0891B2) !important;
  color: var(--bg) !important;
  border: none !important;
  border-radius: 8px;
  font-weight: 700;
  box-shadow: 0 4px 20px rgba(6,182,212,0.3);
}

.status-badge, .tag {
  background: rgba(6,182,212,0.15) !important;
  border: 1px solid rgba(6,182,212,0.3);
  color: var(--cyan) !important;
}

.text-accent { color: var(--cyan); text-shadow: 0 0 10px rgba(6,182,212,0.3); }
.icon-container { background: rgba(6,182,212,0.1) !important; border: 1px solid var(--border); }

nav, footer { border-color: rgba(6,182,212,0.1) !important; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "classic-premium",
    name: "Clássico Premium",
    subtitle: "Elegant • Timeless • Luxury",
    description: "Interface profissional com estilo clássico, tipografia serifada, paleta escura navy/dourado, microinterações discretas e ritmo mais lento nas animações. Elegância atemporal.",
    objective: "Transmitir tradição, confiança e luxo — ideal para marcas premium, escritórios de advocacia e finanças.",
    colors: ["#0C1524", "#1A2744", "#D4AF37", "#F5F0E8", "#2C3E5A"],
    features: ["Serif Typography", "Gold Accents", "Slow Animations", "Timeless"],
    iconStyle: "Ícones clássicos com traço médio. Dourado como cor de destaque. Ornamentos sutis.",
    layoutStyle: "Layout simétrico e balanceado. Margens generosas. Hierarquia rígida. Divisores decorativos.",
    typography: "Cormorant Garamond ou Libre Baskerville para títulos. Crimson Text para corpo. Elegante.",
    previewImage: styleClassicPremium,
    cssVariables: {
      "--background": "218 45% 9%",
      "--foreground": "36 30% 94%",
      "--primary": "43 76% 52%",
      "--muted": "218 30% 18%",
    },
    sampleCSS: `:root {
  --bg: #0C1524;
  --surface: #1A2744;
  --text: #F5F0E8;
  --text-muted: #8B9DC3;
  --gold: #D4AF37;
  --gold-light: #E8D48B;
  --border: rgba(212,175,55,0.15);
  --border-color: rgba(212,175,55,0.15);
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Libre Baskerville', 'Georgia', serif;
}

h1, h2, h3 { font-family: 'Cormorant Garamond', serif; color: var(--gold); letter-spacing: 0.02em; }
h1 { font-size: 34px !important; font-weight: 600; }

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
  transition: all 0.5s ease;
}

.card:hover { border-color: var(--gold); }

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: transparent !important;
  border: 2px solid var(--gold) !important;
  color: var(--gold) !important;
  border-radius: 0 !important;
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.button-primary:hover, .btn:hover {
  background: var(--gold) !important;
  color: var(--bg) !important;
}

.status-badge, .tag {
  background: var(--gold) !important;
  color: var(--bg) !important;
  border-radius: 0;
  letter-spacing: 0.1em;
}

.text-accent { color: var(--gold); }
.icon-container { background: rgba(212,175,55,0.1) !important; border: 1px solid var(--border); }

/* Decorative divider */
section + section::before {
  content: ''; display: block; height: 1px; margin: 0 auto;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}

nav, footer { border-color: rgba(212,175,55,0.12) !important; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
  {
    id: "organic-premium",
    name: "Orgânico Premium",
    subtitle: "Nature • Earthy • Warm",
    description: "Interface profissional com texturas naturais, paleta suave com tons terrosos (sage, terracotta, areia), e microinterações inspiradas em movimento orgânico e fluido.",
    objective: "Conectar com a natureza e transmitir calma e autenticidade — ideal para wellness, sustentabilidade e lifestyle.",
    colors: ["#F7F3ED", "#E8DFD3", "#5C7C5E", "#C4704B", "#8B7355"],
    features: ["Earthy Tones", "Organic Shapes", "Natural Textures", "Fluid Motion"],
    iconStyle: "Ícones orgânicos com cantos suaves. Tons terrosos. Ilustrações botânicas como complemento.",
    layoutStyle: "Layout com formas orgânicas (blob shapes). Cantos extra arredondados. Sobreposições suaves.",
    typography: "DM Serif Display para títulos. Nunito Sans para corpo. Warm e acolhedor.",
    previewImage: styleOrganicPremium,
    cssVariables: {
      "--background": "33 25% 95%",
      "--foreground": "25 20% 20%",
      "--primary": "130 20% 42%",
      "--muted": "30 20% 88%",
    },
    sampleCSS: `:root {
  --bg: #F7F3ED;
  --surface: #FFFFFF;
  --text: #3D3228;
  --text-muted: #8B7355;
  --sage: #5C7C5E;
  --terracotta: #C4704B;
  --sand: #E8DFD3;
  --border: #DDD5C8;
  --border-color: #DDD5C8;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: 'Nunito Sans', 'Inter', sans-serif;
}

h1, h2, h3 { font-family: 'DM Serif Display', serif; color: var(--text); letter-spacing: -0.01em; }

.card {
  background: var(--surface);
  border: none !important;
  border-radius: 24px !important;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.04);
}

.card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.08); }

.button-primary, .btn, .btn-primary, .cta-button, .hero-btn {
  background: var(--sage) !important;
  color: white !important;
  border: none !important;
  border-radius: 50px !important;
  font-weight: 600;
}

.button-primary:hover, .btn:hover {
  background: var(--terracotta) !important;
  transform: translateY(-1px);
}

.status-badge, .tag {
  background: var(--sage) !important;
  color: white !important;
  border-radius: 20px;
}

.text-accent { color: var(--terracotta); }
.icon-container { background: var(--sand) !important; border-radius: 50% !important; }

nav, footer { border-color: var(--border) !important; }`,
    exampleUrl: "https://pv-turn.lovable.app",
  },
];
