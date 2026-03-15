  color: var(--cor-texto-secundario);
}
`,
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

/* Header */
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
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: calc(var(--espacamento-base) * 2);
}

.nav-links a {
  color: var(--cor-texto-secundario);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--cor-texto);
}

/* Hero Section */
.hero {
  text-align: center;
  padding: calc(var(--espacamento-base) * 6) calc(var(--espacamento-base) * 2);
  max-width: 900px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid var(--cor-borda);
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 0.875rem;
  color: var(--cor-primaria);
  margin-bottom: calc(var(--espacamento-base) * 2);
}

.hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: var(--espacamento-base);
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--cor-texto-secundario);
  margin-bottom: calc(var(--espacamento-base) * 2);
}

/* Buttons */
.button-primary {
  background: var(--cor-primaria);
  color: white;
  border: none;
  padding: 16px 40px;
  border-radius: var(--raio-borda);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: var(--glow);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 60px rgba(59, 130, 246, 0.5);
}

.button-secondary {
  background: transparent;
  color: var(--cor-texto);
  border: 1px solid var(--cor-borda);
  padding: 16px 40px;
  border-radius: var(--raio-borda);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: border-color 0.3s ease, background 0.3s ease;
}

.button-secondary:hover {
  border-color: var(--cor-primaria);
  background: rgba(59, 130, 246, 0.1);
}

/* Cards Grid */
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
}

.feature-card h3 {
  font-weight: 700;
  margin-bottom: 8px;
  font-size: 1.125rem;
}

.feature-card p {
  font-size: 0.875rem;
  color: var(--cor-texto-secundario);
  line-height: 1.5;
}

/* Stats Section */
.stats {
  display: flex;
  justify-content: center;
  gap: calc(var(--espacamento-base) * 4);
  padding: calc(var(--espacamento-base) * 4) calc(var(--espacamento-base) * 2);
  border-top: 1px solid var(--cor-borda);
  border-bottom: 1px solid var(--cor-borda);
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--cor-primaria);
  display: block;
}

.stat-label {
  font-size: 0.875rem;
  color: var(--cor-texto-secundario);
}

/* Footer */
.footer {
  padding: calc(var(--espacamento-base) * 3) calc(var(--espacamento-base) * 2);
  text-align: center;
  font-size: 0.875rem;
  color: var(--cor-texto-secundario);
  border-top: 1px solid var(--cor-borda);
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  .hero h1 {
    font-size: 2.5rem;
  }
  .stats {
    flex-direction: column;
    gap: calc(var(--espacamento-base) * 2);
  }
}`,
  },
];