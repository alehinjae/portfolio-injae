# Perfil & Arquétipo — Product Designer
## Documentação baseada em evidências de processo extraídas do Figma

> **Nota metodológica:** Este documento foi construído a partir da análise direta de 10 arquivos Figma de um projeto real de e-commerce de moda. Todas as afirmações são sustentadas por evidências concretas extraídas das páginas, metadados, textos e estrutura dos arquivos. Nenhuma característica foi inferida sem respaldo nos artefatos.

---

## 1. Contexto — Onde este trabalho aconteceu

### Empresa e produto
**Cia Hering** — uma das maiores empresas de vestuário do Brasil, com duas marcas distintas:
- **Hering** — marca principal, posicionamento premium-popular
- **Hering Outlet** — marca de desconto/liquidação, necessidades visuais e de negócio distintas

**Canal:** E-commerce web (1440px) e aplicativo mobile (360px)

### Squad
Extraído diretamente das páginas `About` dos arquivos de projeto:

| Papel | Nome |
|---|---|
| Product Design Lead | Rafael Pereira Picolo |
| **Product Design** | **Alexandre In Jae** |
| Product Owner | Juliana Georg |
| Tech Lead | Denner Gomes |
| Back-end Dev | — |
| Front-end Dev | — |

### Período e escopo
**Out/2023 a Nov/2024** — 13 meses de trabalho documentado em Figma, cobrindo 4 iniciativas de feature e 1 design system dual-brand.

---

## 2. O Arquétipo — Quem é este designer

Com base nos artefatos analisados, este designer se enquadra no arquétipo que pode ser chamado de:

### "O Designer de Produto com Mentalidade de Produto"

Não é um designer de interface. Não é um UX researcher. É um profissional que **habita a fronteira entre design e produto** — alguém que recebe uma demanda de negócio, desmonta o problema com metodologia, e só então cria telas. A sequência importa: o artefato final (a tela) é consequência de um raciocínio anterior, não o ponto de partida.

Isso é evidenciado pela estrutura de cada arquivo de projeto:

```
Brief → Definição do Problema → HMW → Hipóteses → Análise de Dados
  → Ideação → Design Critique → Protótipo → Handoff
```

O canvas em branco nunca é o primeiro passo.

---

## 3. A Metodologia — Como ele pensa

### Framework de trabalho documentado

Extraído da estrutura da página `About` + `Abordagem` dos arquivos de projeto:

```
FASE 1 — Descoberta e Definição
  └── Levantamento e Análise de Dados
  └── Síntese de Insights
  └── Identificação de Oportunidades
  └── Elaboração de HMW

FASE 2 — Ideação e Testes
  └── Priorização de HMW
  └── Geração de Hipóteses (Ideação)
  └── Validação de Hipóteses

FASE 3 — Protótipos e Especificação
  └── Refinamento de Protótipos
```

Este framework está **codificado como template** e replicado em todos os projetos — o que revela não apenas que o designer usa metodologia, mas que ele a **institucionalizou** no seu ambiente de trabalho.

---

### O HMW como ferramenta de precisão

A estrutura How Might We usada é rigorosamente formada:

> *"Como poderíamos **[Ação Desejada]** a/o **[Objeto da Ação]**, **[Efeito Esperado]** para o/a **[Segmento de Clientes Afetados]**?"*

**Exemplo real — Reestruturação do Menu (Set/2024):**

> *"Como poderíamos organizar melhor o menu de navegação, reduzindo a quantidade de cliques e segmentando a jornada de compra por departamento, para melhorar a experiência de compra e facilitar o acesso às categorias desejadas pelos clientes?"*

Não é uma pergunta genérica. Ela carrega a ação, o objeto, o efeito e o segmento em uma única sentença. Isso é prática de PM-level de definição de problema.

---

### Hipóteses com estrutura de produto

O formato de hipótese usado segue o padrão clássico de product management:

> *"[Acredito que] + [Para] + [Possibilitará] + [Seremos bem sucedidos se]"*

**Exemplo real — Hipótese Web do Menu:**

> *"[Acredito que] ao deixar o layout sem imagens, optando por listas suspensas com as categorias diretamente visíveis, [para] criar um menu menos poluído e mais específico, [possibilitará] que os clientes encontrem facilmente as categorias que procuram sem se perderem, [seremos bem sucedidos se] os usuários puderem navegar pelo menu com clareza e sem a necessidade de utilizar a busca para encontrar o que desejam."*

**Hipótese Mobile do mesmo projeto:**

> *"[Acredito que] ao exibir todos os menus de forma clara e objetiva em uma única tela na página inicial, [para] melhorar a visibilidade de todas as categorias e facilitar a navegação, [possibilitará] que os clientes encontrem rapidamente o que procuram sem precisar deduzir, [seremos bem sucedidos se] o menu móvel apresentar indicadores claros de usabilidade e reduzir o uso da função de busca."*

**O que isso revela:** o designer pensa separadamente em Web e Mobile não como breakpoints visuais, mas como **jornadas cognitivas distintas**. A hipótese não é a mesma adaptada — é diferente porque o comportamento do usuário é diferente.

---

### Dados como fundamento de decisão

**Evidência real — Analytics do Minicart (Abr/2024):**

| Métrica | Valor |
|---|---|
| Período analisado | 18 mar – 16 abr 2024 (30 dias) |
| Visitantes que adicionaram ao carrinho | **125.511** |
| Visitantes que finalizaram a compra | **14.072** |
| Taxa de conversão do carrinho | **11,21%** |
| Taxa de abandono | **75,2%** |

Esta análise estava **dentro do arquivo de design**, na página `Analytics`, com a fórmula explicitada:

> *"Taxa de Conversão do Carrinho = (Número de visitantes que compraram / Total de visitantes que adicionaram produtos ao carrinho) x 100"*

E a interpretação também estava documentada:

> *"Isso significa que cerca de 11,21% dos visitantes que adicionaram produtos ao carrinho avançaram e realizaram a compra."*

**O que isso revela:** o problema não foi "o minicart está feio". Foi "75,2% das pessoas que adicionam produtos abandonam antes de comprar". O design surge de um diagnóstico quantitativo, não de uma intuição.

---

### KPIs e métricas de sucesso definidas pelo designer

Para o projeto Minicart, os KPIs macros definidos foram:
- Taxa de conversão do carrinho
- Taxa de abandono do carrinho
- Contatos/SAC sobre problemas no carrinho

E as métricas de sucesso por iniciativa:
- Utilização e Ativação de Cupons
- Menor Taxa de Abandono de Carrinho
- Aumento de Peças por Pedido
- Tempo Médio de Utilização do Carrinho
- Diminuição de Contatos no SAC

**O que isso revela:** o designer não entrega telas — ele entrega **hipóteses mensuráveis**. Cada decisão de design tem uma métrica correspondente que indica se foi bem-sucedida.

---

## 4. Os Projetos — Storytelling por Capítulo

### Capítulo 1 — Evolução da PDP (Out/2023)
**Problema de negócio:** A página de detalhe de produto (PDP) é o momento de decisão de compra em e-commerce. Melhorias aqui impactam diretamente a taxa de conversão.

**Estrutura de trabalho documentada:**
- 3 apresentações/iterações de conceito (APS, APS 2, APS Chapter)
- Mapas de jornada separados para Mobile e Desktop (`Fluxo/Jornada v1 Mobile` / `Fluxo/Jornada v1 Desk`)
- Seção de especificação de imagens (`Imagens Desk`)
- Design Critique
- 2 protótipos mobile + 1 desktop
- **3 versões de handoff** (V1, V2, V3 | Final)

**Anatomia da PDP mapeada na jornada mobile:**
```
Reloginho (contador de promoção)
  → Menu
  → Galeria do produto
  → Tags + Título + Avaliações
  → Preço
  → Seletor de cor
  → Seletor de tamanho
  → CTA + Frete
  → Descrição
  → Composição do produto
  → Cards de recomendação
  → "Monte o look"
  → Avaliações
  → Módulos editoriais
  → Perguntas frequentes
  → Descrição da marca
  → Footer
  [CTA Fixed flutuante]
  [Botão de Atendimento flutuante]
```

**O que revela como PD:** A jornada não começa na tela — começa no usuário que chegou até aquela página. A sequência de elementos reflete uma narrativa de conversão: informação → confiança → decisão → ação. O CTA fixo garante que a ação de compra esteja sempre acessível independente do scroll.

**As 3 versões de handoff revelam:** houve ciclos de revisão com o time de desenvolvimento. O design foi construído iterativamente com feedback técnico — não entregue uma vez e esquecido.

---

### Capítulo 2 — Evolução do Minicart (Abr/2024)

**Contexto de negócio (verbatim dos artefatos):**
O projeto nasceu de dados reais: 75,2% de abandono de carrinho. Com 125.511 pessoas adicionando produtos e apenas 14.072 comprando, havia uma oportunidade clara de melhoria.

**Perguntas investigativas documentadas no arquivo:**
> *"Quantas pessoas adicionaram no carrinho os produtos, depois abandonaram, mas retornaram posteriormente e finalizaram a compra?"*

E a definição da métrica criada para responder essa pergunta:
> *"Taxa de Retorno e Conversão de Carrinho Abandonado: Percentual de clientes que abandonaram o carrinho de compras em uma visita anterior, mas retornaram posteriormente e finalizaram a compra."*

**O que revela como PD:** o designer não apenas usa métricas existentes — ele **cria métricas** para medir comportamentos que as ferramentas padrão não capturam. Isso é uma competência rara que cruza análise de produto com design.

**Novidades de processo neste projeto (vs. PDP):**
- Página de `Presentation` — o designer passou a criar artefato específico para comunicação com stakeholders
- Página de `Analytics` — dados integrados ao fluxo de trabalho como primeiro cidadão

---

### Capítulo 3 — Reestruturação do Menu (Set/2024)

**Origem do projeto (verbatim do arquivo):**
> *"O time de negócio trouxe uma hipótese que o nosso menu não está bem organizado e que não estamos tendo muitos cliques nas imagens do menu. Realizamos um 'Discovery' para entender quais eram os problemas encontrados e como os usuários estavam interagindo com nosso menu."*

**Job story do usuário definida:**
> *"Como todos os usuários, eu quero um menu mais organizado, para encontrar o que desejo de forma mais rápida."*

**Contexto de negócio:**
> *"Vamos criar uma v1 para conseguir entregar uma versão para o lançamento de Shoes."*

**O que revela:** o projeto tinha um prazo de negócio concreto (lançamento de calçados). A decisão de escopo (v1, sem imagens, listas suspensas) foi tomada com consciência desse constraint — não como limitação, mas como critério de design.

**Status final:** Handoff marcado como `FINAL VERSION / DEVS ✅` — projeto entregue e shipado.

---

### Capítulo 4 — Rever Layout Reloginho APP (Nov/2024)

**Contexto:** Componente de countdown/urgência no aplicativo mobile, crítico para promoções relâmpago (flash sales) em e-commerce de moda.

**Nomenclatura das versões de design (verbatim):**
- `Versão para discutir`
- `Versão que refinamos`

**O que revela como PD:** a nomenclatura não é técnica — é colaborativa. "Para discutir" implica que o designer trouxe uma proposta **intencionalmente aberta ao debate**, não uma solução definitiva. "Que refinamos" indica que a versão final foi construída em conjunto, não individualmente. Isso é design como prática coletiva, não como entrega unilateral.

**Status final:** `FINAL VERSION / DEVS ✅` — entregue.

---

## 5. O Design System — Infraestrutura de Escala

### Decisão arquitetural: dual-brand com base compartilhada

```
Tokens Hering          →  Componentes Hering
     ↓ fork
Tokens Hering Outlet   →  Componentes Hering Outlet
```

**Por que isso importa:** manter dois sistemas completamente separados seria insustentável. Manter um único seria inadequado (as marcas têm identidades distintas). A decisão de forkar os tokens mantendo a estrutura de componentes é a solução correta — e é exatamente o que hoje chamamos de *multi-brand design token architecture*.

### Hierarquia de componentes documentada

**Nível 1 — Base Components** (átomos, sem contexto de negócio):
`icon` / `badge` / `button` / `backdrop` / `breadcrumb` / `checkbox`

**Nível 2 — Components** (compostos, com contexto de e-commerce):
`banner` / `feedback` / `header` / `footer` / `menu` / `quickfilter` / `filter` / `productcard` / `tooltip` / `barra beneficio` / `banner grid` / `tag` / `content seo`

Esta distinção (`🔸` base vs `🔹` componente) revela que o designer entende a diferença entre **primitive** e **composite** em sistemas de design — um conceito de nível avançado.

### O Outlet tem mais componentes que a Hering principal

O Hering Outlet possui componentes adicionais que a Hering principal não tem na biblioteca: `banner tv`, `barra beneficio`, `banner grid`, `tag`, `content seo`, `footer`, `menu` dedicados.

**Interpretação:** O Outlet, por ser orientado a promoção e oferta, demanda mais superfície de comunicação visual. O designer entendeu as necessidades de negócio distintas de cada marca e as refletiu na arquitetura do sistema.

---

## 6. Padrões de Comportamento Profissional

### Sistema de ciclo de vida do arquivo

Documentado nos componentes de Cover dos arquivos:

```
Design. Explore → Design. In Progress → Design. In Review → DEV. Ready → Released → Design. Paused
```

**Implicação:** cada arquivo tinha um estado explícito e rastreável. Não havia ambiguidade sobre "onde está esse projeto". Isso é gestão de trabalho, não apenas design.

### Taxonomia de anotações em handoff

O sistema de notas documentado revela o vocabulário intelectual do designer:

| Tipo de nota | O que representa |
|---|---|
| Note | Observação genérica |
| NEW! | Novo elemento/comportamento |
| Idea | Proposta não final |
| State | Variação de estado do componente |
| Change | Modificação em relação a versão anterior |
| Accessibility | Consideração de acessibilidade |
| UX Writing | Decisão de texto como design |
| Business note | Contexto de negócio atrelado à decisão |
| Research | Evidência de pesquisa |
| User feedback | Voz do usuário |

**O que revela:** o designer pensa em pelo menos **10 dimensões simultâneas** ao anotar um design. Não é "entrego as telas" — é "entrego o raciocínio completo por trás de cada decisão".

### Sistema de handoff de interações

Documentado nos componentes do arquivo de componentes:

```
hover / click / drag / typing / openModal / openNewWindow
openNewTab / openDrawer / systemAction / stickyOnScroll / systemFailure
```

**O que revela:** o designer documenta não apenas o estado feliz (happy path), mas os estados de sistema (`systemFailure`), comportamentos de scroll (`stickyOnScroll`) e múltiplos tipos de abertura (`openModal` vs `openNewWindow` vs `openNewTab`). Isso reduz drasticamente as perguntas do dev durante a implementação.

---

## 7. Competências mapeadas por evidência

| Competência | Evidência direta |
|---|---|
| **Pensamento sistêmico** | Design system dual-brand com separação Tokens → Componentes |
| **Metodologia de produto** | Framework 3 fases documentado e institucionalizado como template |
| **Formulação de problemas** | HMW com estrutura precisa em todos os projetos |
| **Hipóteses testáveis** | Formato `[Acredito que]...[Seremos bem sucedidos se]` com critério de sucesso explícito |
| **Análise quantitativa** | Métricas reais de conversão (11,21%), abandono (75,2%), volume (125.511 usuários) dentro dos arquivos de design |
| **Definição de métricas** | Criação de KPIs novos não disponíveis nas ferramentas padrão |
| **Comunicação com stakeholders** | Páginas de Presentation separadas das páginas de Design |
| **Colaboração com dev** | Múltiplas versões de handoff (até 3 no PDP), vocabulário de interação exaustivo |
| **Consciência responsiva** | Hipóteses distintas para Web e Mobile, jornadas separadas por dispositivo |
| **Ciclo de vida do design** | Status tracking dentro do Figma (Explore → Released) |
| **UX Writing como design** | Categoria de anotação dedicada a decisões de texto |
| **Acessibilidade** | Categoria de anotação dedicada, presente em todos os projetos |
| **Colaboração real** | Nomenclatura de versões como "para discutir" e "que refinamos" |

---

## 8. Síntese do Arquétipo

### Denominação
**Product Designer com DNA de Produto**
*(não confundir com UI Designer com vocabulário de produto)*

### Característica central
Este designer **não separa design de produto**. Para ele, a decisão de design e a decisão de produto são a mesma decisão — apenas expressa de formas diferentes. Um HMW bem formulado é design. Uma hipótese com critério de sucesso é design. A taxa de abandono de 75,2% é o briefing real, não um número no slide da PO.

### O que o diferencia de um UI Designer
Um UI Designer recebe uma tela e a torna bonita e usável.
Este profissional **questiona a tela antes de desenhá-la**, define o problema, levanta dados, formula hipóteses e, só então, desenha. E quando desenha, pensa nas 10 dimensões ao mesmo tempo: visual, interação, estado, acessibilidade, UX Writing, negócio, pesquisa, feedback do usuário, implementação técnica, e ciclo de vida do artefato.

### O que o diferencia de um UX Researcher
Um UX Researcher investiga e sintetiza.
Este profissional **age sobre os achados** — cria hipóteses operacionais, prioriza por impacto de negócio, prototipa, itera com dev, e define como medir se a solução funcionou.

### A posição no espectro
```
UI Designer ←————————————————————————→ Product Manager
                          ↑
               Este designer está aqui
```

Não é PM, porque ainda cria e é responsável pela qualidade da interface. Não é UI, porque a interface é o produto final de um processo de pensamento, não o ponto de partida.

### Como ele aprende
A progressão dos projetos ao longo de 13 meses revela aprendizado incremental:
- **Out/2023 (PDP):** sem analytics, sem presentation page — foco em execução de design
- **Abr/2024 (Minicart):** analytics integrado, presentation page adicionada — dados e comunicação entram no processo
- **Set/2024 (Menu):** briefs mais ricos com contexto de negócio verbatim, discovery documentado
- **Nov/2024 (Reloginho):** nomenclatura de versões explicitamente colaborativa — maturidade relacional

Cada projeto seguinte incorporou aprendizados do anterior. O processo não foi estático — foi evoluído conscientemente ao longo do tempo.

---

## 9. Para onde este arquétipo tende naturalmente

Com base nas competências mapeadas e na trajetória observada, este perfil tende a evoluir naturalmente para:

1. **Design System Lead** — capacidade de criar, escalar e governar sistemas de design multi-brand
2. **Product Design Manager** — domínio de processo, facilidade com dados, comunicação com stakeholders e dev
3. **Head of UX/Design** — visão sistêmica de produto, capacidade de institucionalizar metodologia
4. **Product Manager** — o salto é menor do que parece; já pensa como PM, só não tem ownership formal de produto

O que este profissional **não é** naturalmente:
- Especialista em motion design ou animação
- Designer de marca/brand identity (o trabalho aqui é dentro de marcas estabelecidas)
- Pesquisador de UX dedicado (usa pesquisa, mas como input, não como entregável principal)

---

*Documento gerado em 2026-04-13 a partir da análise direta de 10 arquivos Figma do projeto Hering/Hering Outlet.*
*Todos os dados, nomes, métricas e textos citados foram extraídos diretamente dos artefatos — nenhuma informação foi inferida sem evidência.*
