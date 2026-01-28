

# Plano: Efeitos Visuais Funcionando ao Vivo na Tela

## Problema Atual

Os previews mostram apenas quadrados/elementos coloridos estáticos. As animações CSS estão definidas no código mas os efeitos visuais não são aplicados diretamente nos previews de forma visível. Você quer ver:
- Quadrados pulsando com brilho neon
- Elementos piscando
- Rotações e transformações acontecendo
- Glassmorphism com blur real
- Gradientes animados mudando de cor

## Solução

Melhorar drasticamente o componente `LivePreview.tsx` para aplicar os estilos CSS reais diretamente nos elementos de preview, usando inline styles dinâmicos que reproduzem fielmente cada animação.

---

## Mudanças Detalhadas

### 1. AnimationLivePreview - Animações Funcionando

Aplicar os @keyframes diretamente via style inline para cada tipo de animação:

| Tipo de Animação | Efeito Visual |
|-----------------|---------------|
| Pulse/Glow | Quadrado com box-shadow pulsante |
| Flicker | Elemento piscando rapidamente |
| Rotate/Spin | Rotação contínua |
| Bounce | Saltando para cima e para baixo |
| Shake/Zap | Tremendo lateralmente |
| Scale | Crescendo e diminuindo |
| Color Shift | Mudança de cor suave |

Exemplo de implementação:

```text
┌────────────────────────────────────────┐
│  ANTES: Quadrado colorido estático     │
│  ┌──────┐                              │
│  │ ████ │  ← Apenas cor sólida         │
│  └──────┘                              │
├────────────────────────────────────────┤
│  DEPOIS: Animação ao vivo              │
│  ┌──────┐                              │
│  │ ████ │ → Pulsando com glow neon     │
│  └──────┘   box-shadow animado         │
│             opacity mudando            │
│             transform ativo            │
└────────────────────────────────────────┘
```

### 2. EffectLivePreview - Efeitos Visuais Reais

Para cada categoria de efeito:

**Glassmorphism:**
- backdrop-filter: blur() real
- Background translúcido com gradiente
- Borda com transparência
- Fundo com padrão para mostrar o blur

**Neumorphism:**
- Box-shadow duplo (luz e sombra)
- Efeito 3D pressionável
- Hover com inversão de sombras

**Filtros:**
- Aplicar filter CSS real (saturate, contrast, hue-rotate)
- Animação de mudança de filtro

**Gradientes:**
- Background animado com background-position mudando
- Gradiente se movendo continuamente

### 3. Keyframes Inline

Para cada preview, injetar os @keyframes diretamente no elemento:

```css
/* Exemplo para Neon Pulse */
animation: neonPulse 2s ease-in-out infinite;

@keyframes neonPulse {
  0%, 100% { box-shadow: 0 0 5px color, 0 0 10px color; }
  50% { box-shadow: 0 0 20px color, 0 0 40px color, 0 0 60px color; }
}
```

---

## Arquivos a Modificar

| Arquivo | Mudança |
|---------|---------|
| `src/components/LivePreview.tsx` | Reescrever completamente com animações inline |
| `src/index.css` | Adicionar keyframes globais para preview |

---

## Detalhes da Implementação LivePreview.tsx

### AnimationLivePreview Melhorado

Cada animação terá seu próprio estilo inline baseado na categoria:

1. **Animações de Glow/Pulse**: box-shadow animado com cores neon
2. **Animações de Movimento**: transform com rotate, scale, translate
3. **Animações de Cor**: background e color mudando via keyframes
4. **Animações de Opacidade**: fade in/out

O componente irá:
- Detectar o tipo de animação pelo `animationClass` ou `id`
- Aplicar o estilo inline correspondente
- Usar CSS variables para cores dinâmicas
- Respeitar o estado `isPlaying` (pausar animação)

### EffectLivePreview Melhorado

Para efeitos visuais:

1. **Glassmorphism**: Container com backdrop-blur real sobre um fundo com padrão/imagem
2. **Neumorphism**: Elemento com sombras suaves e hover interativo
3. **Filtros**: Elemento com filter CSS aplicado e animação
4. **Gradientes**: Background com animation de movimento

---

## Resultado Esperado

Ao abrir a biblioteca, você verá:
- 100 animações diferentes rodando simultaneamente
- Quadrados brilhando, pulsando, girando, tremendo
- Efeitos glassmorphism com blur real visível
- Gradientes animados mudando de cor
- Tudo funcionando automaticamente sem clicar
- Experiência visual impressionante e profissional

