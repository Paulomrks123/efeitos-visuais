/** Self-contained CSS shared by the copy action and the isolated example. */
function constellation(seed: number): string {
  let state = seed;
  const random = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
  const palette = ['hsl(256 100% 66%)', 'hsl(40 100% 58%)', 'hsl(168 73% 30%)', 'hsl(310 85% 64%)', 'hsl(205 95% 64%)'];
  const paths: string[] = [];
  for (let i = 0; i < 2100; i++) {
    const x = random() * 1000;
    const y = random() * 650;
    const left = ((x - 380) / 245) ** 2 + ((y - 310) / 225) ** 2;
    const right = ((x - 625) / 220) ** 2 + ((y - 325) / 205) ** 2;
    if (Math.min(left, right) > 1 && random() > 0.045) continue;
    const size = 1.5 + random() * 3;
    paths.push(`<path d="M${x.toFixed(1)} ${y.toFixed(1)}l${size.toFixed(1)} ${(size * 1.7).toFixed(1)}h-${(size * 2).toFixed(1)}Z" stroke="${palette[i % palette.length]}" opacity="${(0.3 + random() * 0.7).toFixed(2)}"/>`);
  }
  return `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 650"><g fill="none" stroke-width="0.8">${paths.join('')}</g></svg>`)}`;
}

export const dalaArtwork = [constellation(11), constellation(29), constellation(47)];

export function createDalaCSS(variant: 0 | 1 | 2): string {
  const compositions = [
    `.hero { text-align:left !important; }
.hero h1, .hero p { margin-left:0 !important; max-width:650px !important; }
.hero::before { background-position:85% 45%; }
.hero h1 { max-width:750px !important; }
@media (min-width:900px) { section:not(.hero) { display:grid; grid-template-columns:1fr 1fr; column-gap:96px; } section:not(.hero)>h2 { grid-column:1; } section:not(.hero)>p { grid-column:1; } section:not(.hero)>div { grid-column:2; grid-row:1 / span 3; } }`,
    `.hero { text-align:center !important; padding-top:260px !important; }
.hero::before { background-position:50% -70px; background-size:650px auto; opacity:0.85; }
.hero h1 { max-width:900px !important; margin-inline:auto !important; }
section:not(.hero) { max-width:980px; text-align:center; }
section:not(.hero)>div { justify-content:center; }
@media (max-width:600px) { .hero { padding-top:210px !important; } .hero::before { background-size:480px auto; } }`,
    `.hero { text-align:right !important; }
.hero h1, .hero p { margin-left:auto !important; margin-right:0 !important; max-width:700px !important; }
.hero::before { background-position:5% 40%; animation:dalaDrift 16s ease-in-out infinite alternate-reverse; }
section:not(.hero)>h2 { text-align:left !important; }
@media (min-width:900px) { section:not(.hero) { display:grid; grid-template-columns:1.2fr 1fr; gap:36px 96px; } section:not(.hero)>h2, section:not(.hero)>p { grid-column:2; } section:not(.hero)>div { grid-column:1; grid-row:1 / span 3; } }`
  ];
  return `/* Dala — ${['Void / assimétrico', 'Constellation / central', 'Neural / invertido'][variant]}
   CSS puro: copie integralmente. A arte procedural está incluída, sem arquivos externos.
   PPNeueMontreal quando disponível; Inter como alternativa. */
:root {
  --color-void: hsl(0 0% 0%);
  --color-bone-white: hsl(0 0% 100%);
  --color-ash-gray: hsl(0 0% 60.4%);
  --color-silver-mist: hsl(0 0% 74.1%);
  --color-electric-iris: hsl(256 100% 66.1%);
  --color-saffron-spark: hsl(40 100% 58%);
  --color-deep-verdant: hsl(168 72.5% 30%);
  --font-ppneuemontreal: 'PPNeueMontreal', 'Inter', sans-serif;
  --radius-buttons: 24px;
  --spacing-unit: 6px;
  --page-max-width: 1280px;
  --background: var(--color-void);
  --surface: var(--color-void);
  --text-primary: var(--color-bone-white);
  --text-secondary: var(--color-silver-mist);
  --accent: var(--color-electric-iris);
  --primary: var(--color-electric-iris);
  --button-text: var(--color-bone-white);
  --border: transparent;
  --border-color: transparent;
  --constellation-image: url("${dalaArtwork[variant]}");
}
* { box-sizing:border-box; letter-spacing:0 !important; }
body { margin:0; background:var(--color-void); color:var(--text-primary); font-family:var(--font-ppneuemontreal); font-weight:200; font-feature-settings:"ss01"; overflow-x:hidden; }
nav.header { max-width:var(--page-max-width); margin:auto; padding:30px 36px !important; border:0 !important; background:transparent; }
nav.header>div:last-child { font-size:14px !important; opacity:1 !important; color:var(--color-ash-gray); }
.icon-box.icon-container { background:var(--color-electric-iris); color:var(--color-bone-white); border-radius:0 !important; clip-path:polygon(50% 0,100% 100%,0 100%); }
section, footer { position:relative; max-width:var(--page-max-width); margin:0 auto; padding:96px 36px !important; border:0 !important; background:var(--color-void); animation:dalaReveal 900ms ease-out both; }
.hero { isolation:isolate; min-height:690px; padding-top:120px !important; padding-bottom:96px !important; }
.hero::before { content:""; position:absolute; inset:0; z-index:-1; background-image:var(--constellation-image); background-repeat:no-repeat; background-size:900px auto; opacity:0.65; pointer-events:none; animation:dalaDrift 12s ease-in-out infinite alternate; }
h1, h2, .section-title { font-weight:400 !important; color:var(--color-bone-white); line-height:1.1 !important; text-shadow:none; }
.hero h1 { font-size:78px !important; margin-bottom:30px !important; }
section>h2 { font-size:48px !important; text-align:left !important; margin-bottom:24px !important; }
p, .text-body { font-size:18px !important; font-weight:200 !important; line-height:1.5 !important; color:var(--color-silver-mist); opacity:1 !important; }
.hero p { max-width:480px !important; margin-bottom:36px !important; }
.text-accent { color:var(--color-saffron-spark); }
.tag, .status-badge { background:transparent !important; color:var(--color-saffron-spark) !important; border:0 !important; font-size:12px !important; font-weight:600 !important; padding:0 !important; margin-bottom:24px !important; }
.card, .feature-card, .project-card, .offer-box, .testimonial-card { background:transparent; border:0; box-shadow:none; border-radius:0; padding:24px 0 !important; }
section>div, .features-grid, .projects-grid { display:flex !important; flex-direction:column; gap:30px !important; }
.card>div { font-size:18px !important; font-weight:200 !important; line-height:1.5; }
.card>div:first-child { font-size:24px !important; font-weight:400 !important; }
.offer-box>div:nth-child(2) { font-size:48px !important; font-weight:400 !important; }
.card .status-badge { position:static !important; }
button, .btn { font-family:var(--font-ppneuemontreal); font-size:14px !important; font-weight:400 !important; background:transparent !important; color:var(--color-bone-white) !important; border:0 !important; box-shadow:none; border-radius:var(--radius-buttons) !important; padding:14px 24px !important; width:auto !important; transition:transform 200ms ease, opacity 200ms ease; cursor:pointer; }
.hero .button-primary, footer .cta-button { background:var(--color-electric-iris) !important; }
button:hover { transform:translateY(-2px); opacity:0.85; }
.offer-box button { color:var(--color-saffron-spark) !important; padding-left:0 !important; text-decoration:underline; text-underline-offset:6px; }
footer { text-align:left !important; }
footer>div:first-child { font-size:48px !important; font-weight:400 !important; }
footer>div:nth-child(2) { font-size:18px !important; font-weight:200; opacity:1 !important; color:var(--color-silver-mist); margin:24px 0 36px !important; }
@keyframes dalaReveal { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
@keyframes dalaDrift { from { transform:translateY(-8px) rotate(-2deg); } to { transform:translateY(10px) rotate(2deg); } }
${compositions[variant]}
@media (min-width:1200px) { .hero h1 { font-size:113px !important; } }
@media (max-width:600px) {
  nav.header { padding:24px 18px !important; gap:18px; flex-wrap:wrap; }
  nav.header>div:last-child { font-size:12px !important; gap:12px !important; }
  section, footer { padding:60px 24px !important; }
  .hero { min-height:600px; padding-top:96px !important; text-align:left !important; }
  .hero::before { background-size:650px auto; background-position:center; opacity:0.4; }
  .hero h1 { font-size:48px !important; max-width:100% !important; overflow-wrap:break-word; }
  section>h2, footer>div:first-child { font-size:36px !important; }
  section>div { gap:18px !important; }
}
@media (prefers-reduced-motion:reduce) { *, *::before, *::after { animation:none !important; transition:none !important; } }
`;
}
