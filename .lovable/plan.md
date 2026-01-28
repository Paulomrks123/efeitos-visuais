

# Plano: Animações Automáticas com Preview ao Vivo

## Problema Identificado

Atualmente, as animações não funcionam automaticamente nos cards porque:
1. O CSS das animações está apenas como texto no campo `cssCode` dos dados
2. As classes como `animate-neon-cyan-pulse` não existem realmente no sistema
3. O preview usa apenas cor estática com `previewColor`

## Solução

Injetar dinamicamente os @keyframes e classes CSS, e criar componentes de preview que renderizam as animações reais funcionando ao vivo.

---

## Arquitetura da Solução

```text
┌─────────────────────────────────────────────────────────────┐
│                    CARDS COM ANIMAÇÕES AO VIVO              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │   Card 1    │ │   Card 2    │ │   Card 3    │           │
│  │  ┌───────┐  │ │  ┌───────┐  │ │  ┌───────┐  │           │
│  │  │ ████  │  │ │  │ ████  │  │ │  │ ████  │  │           │
│  │  │PULSANDO│ │ │  │PISCANDO│ │ │  │GIRANDO│  │           │
│  │  └───────┘  │ │  └───────┘  │ │  └───────┘  │           │
│  │  Neon Cyan  │ │  Magenta    │ │  Electric   │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
│                                                             │
│  [CSS injetado via <style> tag com useEffect]              │
└─────────────────────────────────────────────────────────────┘
```

---

## Implementação em 3 Etapas

### Etapa 1: Componente de Injeção de CSS Global

**Arquivo novo:** `src/components/AnimationStyles.tsx`

Este componente injeta todos os @keyframes e classes CSS das animações no `<head>` da página usando `useEffect`. Assim, todas as classes como `.animate-neon-cyan-pulse` funcionarão automaticamente.

Funcionalidades:
- Extrai @keyframes e classes de cada animação
- Cria uma tag `<style>` única no head
- Remove ao desmontar para evitar memory leaks

### Etapa 2: Componentes de Preview Animado

**Arquivo novo:** `src/components/LivePreview.tsx`

Componentes específicos que renderizam cada tipo de animação funcionando em tempo real:

- **AnimationLivePreview**: Aplica a classe CSS real ao elemento
- **EffectLivePreview**: Renderiza efeitos glassmorphism, neumorphism, filtros e gradientes
- **ButtonLivePreview**: Botões com hover/pulse funcionando

Cada preview:
- Usa a `animationClass` direta do dado
- Aplica `previewColor` via CSS variables
- Mostra a animação rodando automaticamente

### Etapa 3: Atualização dos Cards

**Arquivos modificados:**
- `AnimationCardWithPlayground.tsx`
- `EffectCardWithPlayground.tsx`
- `ButtonCardWithPlayground.tsx`

Mudanças:
- Importar o `LivePreview` correspondente
- Substituir `renderPreview()` pelo componente de preview ao vivo
- Garantir que `isPlaying` controla se a animação roda ou pausa

---

## Detalhes Técnicos

### Injeção de CSS (AnimationStyles.tsx)

```typescript
// Extrai e agrupa todos os CSS das animações
const allCSS = animations.map(a => a.cssCode).join('\n');

// Injeta no head
useEffect(() => {
  const style = document.createElement('style');
  style.id = 'animation-library-styles';
  style.textContent = allCSS;
  document.head.appendChild(style);
  return () => style.remove();
}, []);
```

### Preview Ao Vivo (LivePreview.tsx)

```typescript
// Aplica a classe real de animação
<div 
  className={`${isPlaying ? animation.animationClass : ''}`}
  style={{
    '--animation-color': animation.previewColor,
    background: animation.previewColor,
  }}
/>
```

### Variáveis CSS Dinâmicas

Para permitir personalização de cores:
```css
.animate-neon-cyan-pulse {
  animation: neon-cyan-pulse 2s ease-in-out infinite;
  color: var(--animation-color, #00FFFF);
}
```

---

## Arquivos a Criar/Modificar

| Arquivo | Ação | Descrição |
|---------|------|-----------|
| `src/components/AnimationStyles.tsx` | CRIAR | Injeta CSS global das animações |
| `src/components/LivePreview.tsx` | CRIAR | Componentes de preview ao vivo |
| `src/App.tsx` | MODIFICAR | Adicionar `<AnimationStyles />` |
| `src/components/cards/AnimationCardWithPlayground.tsx` | MODIFICAR | Usar LivePreview |
| `src/components/cards/EffectCardWithPlayground.tsx` | MODIFICAR | Usar LivePreview |
| `src/components/cards/ButtonCardWithPlayground.tsx` | MODIFICAR | Usar LivePreview |
| `src/index.css` | MODIFICAR | Adicionar keyframes base que faltam |

---

## Resultado Esperado

Ao abrir a biblioteca, você verá:
- Todos os 100 cards de animação funcionando automaticamente
- Quadrados coloridos pulsando, girando, tremendo, brilhando
- Cada animação com sua cor única
- Sem necessidade de clicar - tudo ao vivo na tela
- Botão de pause/play para controlar individualmente
- Playground ainda disponível para customização

