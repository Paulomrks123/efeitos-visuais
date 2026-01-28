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
  },
  {
    id: "dark-tech",
    name: "Dark Tech / Futurista",
    subtitle: "Tech • Gaming • Dashboards",
    description: "Tema escuro predominante com fundo preto/grafite. Destaques em azul, roxo ou neon. Visual de painel de controle com cards que possuem glow sutil e microanimações.",
    objective: "Transmitir tecnologia avançada, controle e inteligência artificial.",
    colors: ["#0F172A", "#1E293B", "#06B6D4", "#8B5CF6", "#22D3EE"],
    features: ["Dark Mode", "Neon Glow", "Futurista", "Tech"],
    iconStyle: "Ícones geométricos, estilo tech/futurista, lineares ou semi-fill. Monocromáticos com destaque neon.",
    layoutStyle: "Visual de painel de controle, cards com glow sutil, densidade média-alta de informação.",
    typography: "Geométrica moderna. Inter, Space Grotesk, JetBrains Mono para dados.",
    cssVariables: {
      "--background": "222 47% 11%",
      "--foreground": "210 40% 98%",
      "--primary": "187 94% 43%",
      "--accent": "262 83% 58%",
    },
    sampleCSS: `:root {
  --background: #0F172A;
  --surface: #1E293B;
  --text-primary: #F1F5F9;
  --text-secondary: #94A3B8;
  --primary: #06B6D4;
  --accent: #8B5CF6;
  --glow-primary: 0 0 20px rgba(6, 182, 212, 0.3);
  --glow-accent: 0 0 20px rgba(139, 92, 246, 0.3);
}

.card {
  background: var(--surface);
  border: 1px solid rgba(6, 182, 212, 0.2);
  border-radius: 12px;
  padding: 20px;
  box-shadow: var(--glow-primary);
}

.button-primary {
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 10px 24px;
  border-radius: 8px;
  text-shadow: var(--glow-primary);
  transition: all 0.3s;
}

.button-primary:hover {
  background: var(--primary);
  color: var(--background);
  box-shadow: var(--glow-primary);
}

.data-display {
  font-family: 'JetBrains Mono', monospace;
  color: var(--primary);
}`,
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
    cssVariables: {
      "--background": "0 0% 100%",
      "--foreground": "220 13% 18%",
      "--primary": "220 13% 26%",
      "--accent": "217 91% 60%",
    },
    sampleCSS: `:root {
  --background: #FFFFFF;
  --surface: #F9FAFB;
  --text-primary: #374151;
  --text-secondary: #6B7280;
  --primary: #4B5563;
  --accent: #3B82F6;
  --border: #D1D5DB;
  --radius: 8px;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px;
}

.data-highlight {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-primary);
}

.label {
  font-size: 12px;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.button-primary {
  background: var(--primary);
  color: white;
  padding: 10px 20px;
  border-radius: var(--radius);
  font-weight: 500;
}`,
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
    cssVariables: {
      "--background": "0 0% 100%",
      "--foreground": "220 13% 18%",
      "--primary": "217 91% 60%",
      "--accent": "158 64% 52%",
    },
    sampleCSS: `:root {
  --background: #FFFFFF;
  --surface: #EFF6FF;
  --text-primary: #1E40AF;
  --text-secondary: #3B82F6;
  --primary: #3B82F6;
  --success: #10B981;
  --warning: #F59E0B;
  --border: #BFDBFE;
  --radius: 16px;
}

.card {
  background: linear-gradient(135deg, var(--surface), #FFFFFF);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
}

.icon-box {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: var(--surface);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
}

.button-primary {
  background: var(--primary);
  color: white;
  padding: 12px 24px;
  border-radius: 14px;
  font-weight: 600;
}

.category-chip {
  background: var(--surface);
  color: var(--primary);
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 500;
}`,
  },
];
