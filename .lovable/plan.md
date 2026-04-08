
Problema encontrado
- Hoje o botão “Ver Exemplo” abre `style.exampleUrl`, e quase todos os estilos estão apontando para o mesmo `https://pv-turn.lovable.app`.
- O preview atual do modal (`StylePreviewFull`) também usa um único layout React com estilos inline; ele não aplica de verdade o `sampleCSS` de cada card.
- Resultado: os exemplos ficam praticamente iguais, porque o CSS real de cada estilo não está controlando a página.

Plano de correção
1. Trocar o comportamento de “Ver Exemplo”
   - Substituir o link externo por uma rota interna, por exemplo `/showcase/example/:styleId`.
   - Se existir um site de referência real para algum card, ele vira um link secundário (“Referência original”), não o preview principal.

2. Fazer o preview usar o CSS real do card
   - Criar um componente de preview em `iframe/srcDoc`.
   - Injetar dentro dele o `sampleCSS` do estilo selecionado.
   - Isso resolve dois problemas ao mesmo tempo:
     - aplica o CSS verdadeiro do card
     - evita vazamento de CSS para o resto da plataforma

3. Recriar a página-modelo do pv-turn como template reutilizável
   - Montar uma página-base com a estrutura do site-modelo: header, hero, benefícios, experiências, planos, passos e CTA final.
   - Nos elementos, usar classes que os próprios cards já definem no CSS, como:
     - layout: `header`, `hero`, `features-grid`, `projects-grid`, `dashboard`, `article`
     - cards: `card`, `feature-card`, `project-card`, `offer-box`, `testimonial-card`
     - botões: `button-primary`, `btn`, `cta-button`, `hero-btn`
   - Assim o conteúdo-base permanece o mesmo, mas cada card “veste” a página com seu próprio CSS.

4. Adicionar variantes leves para estilos especiais
   - Alguns estilos têm elementos únicos que precisam existir no HTML para o visual aparecer de verdade, como:
     - `aurora-waves`
     - `matrix-rain`
     - `retro-sun`
     - `glass-orb`
     - `watercolor-splash`
     - `marquee`
   - Vou criar uma camada pequena de variantes por família/estilo para esses casos, sem duplicar 33 páginas diferentes.

5. Unificar o preview do modal e o preview em tela cheia
   - O modal passa a usar o mesmo renderer real.
   - O botão “Ver Exemplo” abre a versão completa.
   - Isso elimina a inconsistência atual entre “modal” e “exemplo”.

6. Ajustar a experiência para mobile
   - Como sua viewport atual é muito estreita, o preview será mobile-first:
     - grids viram 1 coluna em telas pequenas
     - títulos e espaçamentos reduzem
     - botão de voltar fixo
     - preview ocupa largura total
   - Isso é importante porque hoje o modal não é ideal para comparar estilos no mobile.

Arquivos principais
- `src/components/showcase/StyleCard.tsx`
- `src/App.tsx`
- novo `src/pages/StyleExample.tsx`
- novo `src/components/showcase/StyleExampleFrame.tsx`
- opcional: helper como `src/components/showcase/stylePreviewVariants.ts`

Detalhes técnicos
- Vou parar de depender só de `style.colors` para “simular” diferenças; o visual passará a vir principalmente do `sampleCSS`.
- O `iframe` é a solução mais segura aqui porque vários cards usam CSS global (`:root`, `body`, `@keyframes`, classes próprias).
- Para os poucos cards cujo `sampleCSS` não está pronto para navegador puro (ex.: trechos com `@tailwind`), vou normalizar esse CSS ou criar fallback específico, para que eles também fiquem realmente diferentes.

Validação
- Testar estilos bem diferentes entre si, por exemplo:
  - `premium-minimal`
  - `dark-tech`
  - `brutalist`
  - `glass-3d`
  - `matrix-hacker`
  - `loris-portfolio`
  - `slush-fintech`
  - `organic-premium`
- Confirmar:
  - “Ver Exemplo” não abre mais a mesma página para todos
  - cada estilo muda visual, botões, cards e atmosfera
  - não há vazamento de CSS entre exemplos
  - a visualização funciona no mobile
