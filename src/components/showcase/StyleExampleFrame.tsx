import { useMemo } from "react";

interface StyleExampleFrameProps {
  sampleCSS: string;
  styleName: string;
  className?: string;
}

const BASE_HTML_TEMPLATE = `
<nav class="header" style="padding:14px 20px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border-color, rgba(128,128,128,0.2))">
  <div style="display:flex;align-items:center;gap:10px">
    <div class="icon-box icon-container" style="width:32px;height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px">T</div>
    <span style="font-weight:700;font-size:15px" class="glitch-text" data-text="TurnX">TurnX</span>
  </div>
  <div style="display:flex;gap:16px;font-size:11px;opacity:0.6">
    <span>Sobre</span><span>Planos</span><span>Contato</span>
  </div>
</nav>

<section class="hero scanlines" style="padding:48px 24px 40px;text-align:center">
  <div class="tag status-badge" style="display:inline-block;padding:6px 16px;border-radius:20px;font-size:10px;font-weight:600;margin-bottom:16px;letter-spacing:1px;text-transform:uppercase;border:1px solid var(--accent-border, rgba(128,128,128,0.3))">
    ✦ Somente Convidados
  </div>
  <h1 class="section-title rainbow-text text-gradient" style="font-size:28px;font-weight:800;line-height:1.15;margin:0 0 14px;letter-spacing:-0.03em">
    Sua rede define<br><span class="text-accent">seu futuro</span>
  </h1>
  <p style="font-size:13px;opacity:0.6;max-width:360px;margin:0 auto 20px;line-height:1.7">
    O clube exclusivo que conecta empresários de alta performance através de experiências únicas e networking estratégico.
  </p>
  <button class="button-primary btn btn-primary cta-button hero-btn" style="padding:12px 32px;border:none;font-size:13px;font-weight:700;cursor:pointer;border-radius:10px">
    Quero meu convite →
  </button>
</section>

<section style="padding:24px">
  <h2 class="section-title section-header" style="font-size:20px;font-weight:800;text-align:center;margin:0 0 6px;letter-spacing:-0.02em">O que é o Clube?</h2>
  <p style="font-size:11px;opacity:0.5;text-align:center;margin:0 0 20px">Conexões genuínas e experiências transformadoras</p>
  <div class="features-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
    <div class="card feature-card">
      <div style="font-size:22px;margin-bottom:8px">🤝</div>
      <div style="font-size:12px;font-weight:700;margin-bottom:4px">Networking</div>
      <div class="text-body" style="font-size:10px;opacity:0.6;line-height:1.5">Conexões com empresários de alto nível</div>
    </div>
    <div class="card feature-card">
      <div style="font-size:22px;margin-bottom:8px">🎪</div>
      <div style="font-size:12px;font-weight:700;margin-bottom:4px">Eventos</div>
      <div class="text-body" style="font-size:10px;opacity:0.6;line-height:1.5">Jantares, expedições e encontros</div>
    </div>
    <div class="card feature-card">
      <div style="font-size:22px;margin-bottom:8px">💼</div>
      <div style="font-size:12px;font-weight:700;margin-bottom:4px">Marketplace</div>
      <div class="text-body" style="font-size:10px;opacity:0.6;line-height:1.5">Oportunidades entre membros</div>
    </div>
    <div class="card feature-card">
      <div style="font-size:22px;margin-bottom:8px">📱</div>
      <div style="font-size:12px;font-weight:700;margin-bottom:4px">Conteúdo</div>
      <div class="text-body" style="font-size:10px;opacity:0.6;line-height:1.5">Feed exclusivo e podcast</div>
    </div>
  </div>
</section>

<section style="padding:16px 24px 24px">
  <h2 class="section-title" style="font-size:20px;font-weight:800;text-align:center;margin:0 0 6px">Experiências que transformam</h2>
  <p style="font-size:11px;opacity:0.5;text-align:center;margin:0 0 20px">Vivências que criam vínculos reais</p>
  <div class="projects-grid" style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
    <div class="card project-card" style="text-align:center;padding:16px 8px">
      <div style="font-size:28px;margin-bottom:8px">🍷</div>
      <div style="font-size:11px;font-weight:700">Jantares</div>
    </div>
    <div class="card project-card" style="text-align:center;padding:16px 8px">
      <div style="font-size:28px;margin-bottom:8px">🏔️</div>
      <div style="font-size:11px;font-weight:700">Expedições</div>
    </div>
    <div class="card project-card" style="text-align:center;padding:16px 8px">
      <div style="font-size:28px;margin-bottom:8px">🎙️</div>
      <div style="font-size:11px;font-weight:700">Podcast</div>
    </div>
  </div>
</section>

<section style="padding:16px 24px 24px">
  <h2 class="section-title" style="font-size:20px;font-weight:800;text-align:center;margin:0 0 6px">Escolha seu plano</h2>
  <p style="font-size:11px;opacity:0.5;text-align:center;margin:0 0 20px">Comece grátis ou desbloqueie tudo</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
    <div class="card offer-box" style="position:relative">
      <div style="font-size:12px;font-weight:700;margin-bottom:6px">Gratuito</div>
      <div style="font-size:24px;font-weight:800;margin-bottom:8px">R$ 0<span style="font-size:10px;font-weight:400;opacity:0.5">/mês</span></div>
      <div style="font-size:10px;opacity:0.6;line-height:1.7;margin-bottom:14px">
        • Feed de conteúdo<br>• 2 eventos online/mês<br>• Visualizar marketplace
      </div>
      <button class="btn button-action" style="width:100%;padding:8px;border-radius:8px;font-size:11px;font-weight:600;cursor:pointer;background:transparent;border:1px solid currentColor">Solicitar</button>
    </div>
    <div class="card offer-box testimonial-card" style="position:relative">
      <div class="status-badge tag" style="position:absolute;top:-8px;right:10px;padding:3px 10px;border-radius:8px;font-size:9px;font-weight:700">Recomendado</div>
      <div style="font-size:12px;font-weight:700;margin-bottom:6px" class="text-accent">TurnX-Around</div>
      <div style="font-size:24px;font-weight:800;margin-bottom:8px">R$ 229<span style="font-size:10px;font-weight:400;opacity:0.5">/mês</span></div>
      <div style="font-size:10px;opacity:0.6;line-height:1.7;margin-bottom:14px">
        • Eventos ilimitados<br>• Marketplace completo<br>• Jantares e expedições
      </div>
      <button class="button-primary btn btn-primary" style="width:100%;padding:8px;border:none;border-radius:8px;font-size:11px;font-weight:700;cursor:pointer">Quero ser membro</button>
    </div>
  </div>
</section>

<section style="padding:16px 24px 24px">
  <h2 class="section-title" style="font-size:20px;font-weight:800;text-align:center;margin:0 0 6px">Como funciona</h2>
  <p style="font-size:11px;opacity:0.5;text-align:center;margin:0 0 20px">3 passos simples</p>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px">
    <div class="card" style="text-align:center;padding:14px 8px">
      <div class="text-accent" style="font-size:22px;font-weight:800;margin-bottom:6px">01</div>
      <div style="font-size:11px;font-weight:700;margin-bottom:4px">Receba o convite</div>
      <div style="font-size:9px;opacity:0.5">Acesso por indicação</div>
    </div>
    <div class="card" style="text-align:center;padding:14px 8px">
      <div class="text-accent" style="font-size:22px;font-weight:800;margin-bottom:6px">02</div>
      <div style="font-size:11px;font-weight:700;margin-bottom:4px">Escolha seu plano</div>
      <div style="font-size:9px;opacity:0.5">Grátis ou completo</div>
    </div>
    <div class="card" style="text-align:center;padding:14px 8px">
      <div class="text-accent" style="font-size:22px;font-weight:800;margin-bottom:6px">03</div>
      <div style="font-size:11px;font-weight:700;margin-bottom:4px">Conecte-se</div>
      <div style="font-size:9px;opacity:0.5">Networking e negócios</div>
    </div>
  </div>
</section>

<footer style="padding:24px;text-align:center;border-top:1px solid var(--border-color, rgba(128,128,128,0.2))">
  <div style="font-size:16px;font-weight:800;margin-bottom:6px">Vagas limitadas</div>
  <div style="font-size:11px;opacity:0.5;margin-bottom:14px">Cada novo membro é selecionado para garantir excelência</div>
  <button class="button-primary btn btn-primary cta-button" style="padding:12px 32px;border:none;font-size:13px;font-weight:700;cursor:pointer;border-radius:10px">
    Solicitar Convite →
  </button>
</footer>
`;

function buildSrcDoc(sampleCSS: string, styleName: string): string {
  // Normalize CSS: ensure it has sensible defaults if sampleCSS doesn't cover body/basics
  const hasBodyRule = sampleCSS.includes('body') || sampleCSS.includes(':root');
  
  const fallbackCSS = `
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      background: var(--background, #0a0a0a);
      color: var(--text-primary, var(--foreground, #e5e5e5));
      overflow-x: hidden;
    }
    .text-accent { color: var(--accent, var(--primary, #3b82f6)); }
    .card {
      background: var(--surface, rgba(255,255,255,0.05));
      border: 1px solid var(--border, rgba(128,128,128,0.15));
      border-radius: var(--radius, 12px);
      padding: 16px;
    }
    .button-primary, .btn-primary {
      background: var(--accent, var(--primary, #3b82f6));
      color: var(--button-text, #fff);
      border-radius: var(--radius, 10px);
    }
    .status-badge, .tag {
      background: var(--accent, var(--primary, #3b82f6));
      color: var(--button-text, #fff);
    }
    /* Entrance animations */
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }
    section, nav, footer {
      animation: fadeSlideUp 0.5s ease-out both;
    }
    section:nth-child(2) { animation-delay: 0.05s; }
    section:nth-child(3) { animation-delay: 0.1s; }
    section:nth-child(4) { animation-delay: 0.15s; }
    section:nth-child(5) { animation-delay: 0.2s; }
    section:nth-child(6) { animation-delay: 0.25s; }
    section:nth-child(7) { animation-delay: 0.3s; }
    footer { animation-delay: 0.35s; }
  `;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${styleName}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
${fallbackCSS}
/* ===== STYLE-SPECIFIC CSS ===== */
${sampleCSS}
</style>
</head>
<body>
${BASE_HTML_TEMPLATE}
</body>
</html>`;
}

export function StyleExampleFrame({ sampleCSS, styleName, className = "" }: StyleExampleFrameProps) {
  const srcDoc = useMemo(() => buildSrcDoc(sampleCSS, styleName), [sampleCSS, styleName]);

  return (
    <iframe
      srcDoc={srcDoc}
      title={`Preview: ${styleName}`}
      className={className}
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        borderRadius: "inherit",
      }}
      sandbox="allow-same-origin"
    />
  );
}

export { buildSrcDoc };
