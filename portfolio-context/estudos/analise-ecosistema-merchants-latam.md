# Análise de Ecosistema: Portal Merchants Rappi — Arquitetura de Produto e Processo de Design

**Empresa:** Rappi (super-app LATAM, unicórnio, 9 países)  
**Designer responsável:** Alexandre In Jae (presente em todos os 13 arquivos)  
**Design System:** Mustache Design System — Components v8.0 (design.rappi.com)  
**Período:** 2024 | **Plataforma:** Web (portal B2B para parceiros merchants)

---

## 0. Cabeçalho e nota metodológica

Este documento analisa `13` arquivos Figma do **Portal Merchants da Rappi** — a interface B2B usada por restaurantes e lojistas parceiros para gerenciar sua presença no super-app.

**Equipe identificada nas covers:**
- Designer principal: **Alexandre In Jae** (todos os arquivos)
- Co-designers: Mateo Espinosa (Onboarding), Rafael Guimarães e Pedro Borges (Administrar Personalización)
- PMs: **Luciana Sleeper** (Mi Cuenta, AI, Financiero, Onboarding), **Luciano Gaspar** (Menu), Nicolás Morales (Personalización)

**Sistema de status evidenciado nas covers:**

| Badge | Significado |
|-------|-------------|
| `DSGN: Exploration` | Fase de descoberta / conceituação |
| `DSGN: Final designs` | Aprovado pelo produto, pronto para review |
| `DSGN: Ready for Dev` | Handoff completo, apto para implementação |

Base de inspeção utilizada:

- `get_metadata` como camada inicial (revelou apenas a Cover page);
- `get_screenshot` em todas as 12 covers de design — confirmou equipe, status e plataforma;
- `get_figjam` no board de pesquisa — retornou conteúdo completo das 4 entrevistas;
- `get_design_context` em nós cirúrgicos para estrutura de páginas e frames internos.

Os arquivos analisados formam um ecossistema de produto coerente, não um conjunto avulso de telas:

1. `Onboarding y Partners - Post Onboarding`
2. `Mi Cuenta - Representante Legal y Fiscal`
3. `Mi cuenta - Cambio de Cuenta Bancaria`
4. `Mi Cuenta - Cambio de Razón Social`
5. `Mi cuenta - Cambio de nombre de marca`
6. `Merchants library`
7. `Menu - Playground H2`
8. `Menu - Playground Discovery Entrevistas` (FigJam)
9. `Menu - Handoff 📐`
10. `Matching Productos AI`
11. `Financiero - Tax Certificates`
12. `Core - Mobile Responsive`
13. `Administrar Personalización - Handoff 📐`

Observação importante:

- o arquivo `#9 Menu - Handoff` expôs estrutura programática, mas os screenshots por nó falharam com erro de ID inválido;
- para análise visual de handoff do mesmo cluster, foi usado `#13 Administrar Personalización - Handoff`, cuja estrutura retornou como espelho operacional do domínio de menu/personalizações.

## 1. Contexto do Produto

**Esta é a Rappi** — o maior super-app da América Latina. Fundada em 2015 em Bogotá, Colombia, unicórnio avaliado em ~US$5.25 bilhões (SoftBank, 2021), operando em 9 países: Colombia, México, Brasil, Argentina, Chile, Peru, Equador, Costa Rica e Uruguai.

O produto analisado é o **Portal Merchants (partners.rappi.com)** — confirmado por:
- URL `partners.rappi.com/my-account` visível no `design_context` do arquivo Mi Cuenta;
- Seções `Rappi Aliados (Gestión de Órdenes)` e `Portal Partners` no arquivo de Onboarding;
- Cover da Merchants library revelando o **Mustache Design System** com o ícone do bigode (marca registrada da Rappi), `Components v8.0` e `design.rappi.com`.

Os domínios funcionais recorrentes são `Mi Cuenta`, `Financiero`, `Menu`, `Personalizaciones`, `Tax Certificates`, `Users & Permissions`, `Matching Productos AI`.

Isso sugere uma plataforma operacional para estabelecimentos, com cobertura de:

- onboarding e pós-onboarding;
- gestão legal e fiscal da conta;
- troca de conta bancária;
- alteração de razão social;
- alteração de nome comercial;
- gestão de menu e personalizações;
- componentes financeiros e certificados tributários;
- camadas de IA para importação/matching de catálogo;
- base comum de design system e responsividade mobile.

### Leitura de escopo de negócio

Este não parece ser um produto de marketing nem uma experiência de vitrine. É um sistema operacional de backoffice/comércio, onde o merchant precisa:

- configurar o próprio negócio;
- manter conformidade cadastral e tributária;
- operar catálogo e menu;
- administrar customizações e grupos de opções;
- entender fluxos que afetam pedidos, vendas e integrações;
- fazer isso em contexto multi-país e multi-breakpoint.

### Sinal regional LATAM

Há evidências de desenho regionalizado:

- arquivos em espanhol;
- menção explícita a `Brasil` em `Cambio Cuenta Bancaria`;
- presença de `🇨🇴` na mesma página;
- variações de fluxos por país e shell financeiro;
- coexistência de inglês em algumas estruturas de library/core, indicando operação entre squads, design system e produto com documentação mais internacionalizada.

## 2. Arquitetura de Informação e Fluxos

O ecossistema está organizado em torno de grandes domínios de produto, cada um com seus fluxos próprios, mas com forte reutilização de componentes, shells e padrões.

## 2.1 Onboarding e entrada no portal

O arquivo `#1 Onboarding y Partners - Post Onboarding` mostra um produto já além do cadastro inicial. As páginas encontradas foram:

- `↳ Login Contraseña → Órdenes`
- `↳ Cards y Beneficios`
- `Test`
- `↳ Local Templates`
- `↳ Helpers`

As seções mais importantes incluem:

- `Onboarding → Portal Partners`
- `Portal Partners → Intern Page → Rappi Aliados (Gestión de Órdenes)`
- `Portal Partners → Intern Page → Contraseña incorrecta`
- `ALIADOS ANTIGUOS _ Portal Partners → Intern Page → Cambiar Contraseña`

O screenshot do corte principal mostra uma faixa sequencial de telas desktop e mobile ligando login, erro de senha, ordens e troca de senha. Isso sugere um fluxo de entrada e transição de status entre parceiros antigos e novos, com forte preocupação em experiência de autenticação e acesso ao ambiente operacional.

### Leitura

O onboarding aqui não é só aquisição. Ele já encosta na ativação de uso do portal, gestão de credenciais e transição para a operação de pedidos.

## 2.2 Mi Cuenta como domínio central

Os arquivos `#2`, `#3`, `#4` e `#5` não são variações decorativas. Eles compõem um subproduto claro de gestão de conta.

### `#2 Mi Cuenta - Representante Legal y Fiscal`

Páginas principais:

- `↳ Representante Legal y Fiscal`

Seções:

- `Persona Natural → Representante Legal y Fiscal → Subir Documentos`
- `Datos Fiscales y Representante → Confirmar datos`
- `Mi Cuenta → Cambio de Representante Legal y Fiscal`
- `Persona Juridica → Representante Legal y Fiscal → Subir Documentos`
- `Datos de contacto y Facturación → Confirmar datos`
- `Confirmación de Datos → Confirmar Cambio`
- `Historial de Solicitudes`

O `design_context` mostrou algo ainda mais importante: a arquitetura de navegação de `Mi Cuenta` contém um hub com cartões de:

- `Cuenta Bancaria`
- `Representante legal y fiscal`
- `Cambiar nombre de marca`
- `Historial de solicitudes`
- `Usuarios y permisos`

Ou seja: os arquivos de conta não são fluxos isolados. Eles são subfluxos de um centro administrativo unificado.

### `#3 Mi Cuenta - Cambio de Cuenta Bancaria`

Páginas e seções:

- `↳ Cambio Cuenta Bancaria`
- `01. Entry Points`
- `02. Select Bank Account - Use cases`
- `03. Upload document - Use cases`
- `04. Document review - Use cases - Brasil`
- `04. Completing the process - Use cases`

O screenshot mostra um fluxo de seleção de conta bancária, revisão e confirmação, com variantes de erro/estado e menção explícita a país.

### `#4 Mi Cuenta - Cambio de Razón Social`

Páginas e seções:

- `↳ Cambio de Razón Social`
- `Mi Cuenta → Cambio de Razón Social`
- `Selección más de un contrato (1/5) → Tiendas asociadas`
- `Selección de un contrato (1/5) → Tiendas asociadas`
- `Cargar documentos (2/5)`

Esse arquivo mostra um fluxo claramente mais complexo, com múltiplos contratos, múltiplas lojas associadas e processo em etapas.

### `#5 Mi Cuenta - Cambio de nombre de marca`

Páginas e seções:

- `↳ Cambio Nombre de Marca`
- `Mi cuenta`
- `Solicitud de cambio → Antes`
- `Cambio nombre de marca`
- `Solicitud de cambio → Después`
- `Cambio de nombre → En proceso`
- `Cambio de nombre → Done`
- `Notificaciones → Cambio de nombre concluido`

Aqui há um desenho muito claro de lifecycle do pedido administrativo, incluindo antes, durante, depois e notificação.

### Leitura consolidada de Mi Cuenta

`Mi Cuenta` parece ser um domínio robusto de self-service B2B, cobrindo:

- dados legais;
- documentos;
- conta bancária;
- identidade comercial;
- histórico de solicitações;
- usuários e permissões.

Isso aponta para arquitetura de produto madura, em que o merchant não depende só de suporte humano para mudanças sensíveis.

## 2.3 Menu, personalizações e operação do catálogo

Os arquivos `#7`, `#8`, `#9` e `#13` formam um cluster muito forte.

### `#7 Menu - Playground H2`

Páginas encontradas:

- `↳ Menú Personalización`
- `↳ Reordenar Personalización en productos`
- `↳ Bench Menú (Mejorias)`
- `↳ ReWork Menú`
- `↳ Menú IA`
- `↳ Cambio Personalizacion`
- `↳ Smart Menu Upload (AI)`

Isso mostra uma frente de design claramente viva, com:

- exploração;
- benchmark;
- retrabalho estruturado;
- reordenação;
- upload inteligente de menu;
- camada de IA aplicada ao domínio.

Há também observações textuais dentro do próprio arquivo, como:

- dúvidas sobre a diferença entre criar produto e personalização;
- confusão terminológica;
- necessidade de scaffolding para usuários novatos.

### `#8 FigJam - Discovery Entrevistas`

O board é uma evidência de processo muito forte. Ele registra entrevistas com merchants e decompõe momentos de confusão em linguagem de usabilidade.

Entre os pontos documentados:

- dificuldade em adicionar e nomear opções;
- confusão com o botão principal `Agregar`;
- dificuldade em editar nome de personalização;
- dificuldade em reutilizar personalizações existentes;
- lista extensa e pouco filtrável;
- dificuldade em entender a aba `Personalizaciones`;
- confusão em configurar `Min.` e `Max.` para combos;
- baixa descoberta de funcionalidades como `Crear varios productos`.

O board ainda qualifica as dores com heurísticas como:

- `Consistência e padrões`
- `Controle e liberdade do usuário`
- `Visibilidade do estado do sistema`
- `Mapeamento entre controles e ações`
- `Reconhecimento em vez de memorização`
- `Prevenção de erros`

### `#9 Menu - Handoff 📐`

Mesmo sem screenshot válido por nó, a inspeção programática mostrou estrutura muito semelhante a `#13`, com páginas como:

- `↳ Menú Personalización`
- `↳ Menú Personalización v3`
- `↳ Menú Personalización v2`
- `↳ Menú Personalización v1`
- `↳ Exploration`

Isso mostra trilha de evolução, versões, exploração e handoff formal do mesmo problema.

### `#13 Administrar Personalización - Handoff 📐`

Esse arquivo foi a prova mais clara de design de operação de menu em estágio de entrega. As seções principais incluem:

- `Grupo de Opciones → Crear Grupo de Opciones`
- `User Flow`
- `Crear Combos → Configurar`
- `Sub-Nivel → Configurar`
- `Productos → Crear nuevo grupo de opciones`
- `Vincular productos`
- `Personalización Existente`
- `Crear Extras o Personalización → Configurar`

Além disso, a página `v1` guarda um bloco de comentários internos com observações como:

- nome de personalizações era confuso;
- usuários não entendiam o exemplo visual;
- fluxo com texto foi percebido como mais claro;
- foi sugerido colocar numeradores para indicar etapas do fluxo.

### Leitura consolidada do domínio Menu

O domínio `Menu` é, provavelmente, o coração operacional da plataforma. Ele combina:

- criação de produtos;
- grupos de opções;
- combos;
- subníveis;
- vínculo entre personalizações e produtos;
- reordenação;
- reutilização;
- gestão centralizada vs. edição contextual;
- IA aplicada à criação ou importação de menu.

Esse cluster mostra design de um problema altamente sistêmico, onde IA, arquitetura da informação, terminologia, eficiência operacional e descoberta de funcionalidades se encontram.

## 2.4 Financiero

O arquivo `#11 Financiero - Tax Certificates` tem escopo mais focado, mas muito representativo.

Página principal:

- `↳ Tax Certificate`

No screenshot, aparecem várias telas do mesmo fluxo:

- visão com dados e certificados;
- tabela/lista de documentos;
- estados vazios;
- filtros/organização;
- navegação dentro do shell financeiro.

Ele não é apenas um documento isolado. O arquivo `#12 Core - Mobile Responsive` reforça a existência de um domínio financeiro maior, com seções como:

- `Financiero → Breakpoints`
- `Financiero → Valores a Recibir y Data`
- `Financiero → Reportes y Certificados`
- `Financiero → Frecuencia de pago`
- `Financiero → Pagos en el periodo`

### Leitura

O produto não trata financeiro como tela única. Trata como módulo completo, com dados, pagamentos, certificados e responsividade.

## 2.5 Matching Productos AI

O arquivo `#10 Matching Productos AI` é um dos diferenciais mais fortes do conjunto.

Páginas identificadas:

- `↳ Matching Productos`
- `↳ 26 / Q1 / SP1 - Current & JTBD`

Frames relevantes:

- `CatalogImportFlow`
- múltiplos frames `Create menu system design`
- `Container`

O screenshot do `CatalogImportFlow` mostra a etapa:

- `Cargar productos faltantes`
- `Revisar y importar productos (2/2)`
- lista de produtos encontrados no catálogo mas ainda não presentes na plataforma;
- aprovação individual por item;
- possibilidade de importar produtos faltantes ao menu.

### Leitura

Isso indica uso de IA ou matching assistido para reconciliar catálogo externo e menu da plataforma. O problema aqui já não é mais só CRUD de item: é confiança na automação, revisão humana, reconciliação e confirmação antes de atualização do sistema.

## 3. Maturidade do Processo de Design

O conjunto dos arquivos mostra um processo de design maduro e com trilhas distintas de trabalho:

- discovery;
- playground;
- handoff;
- library;
- core responsivo;
- templates e helpers.

## 3.1 Discovery explícito

O FigJam `#8` é a peça mais forte de discovery.

Ele documenta:

- entrevistas múltiplas (`Entrevista 1`, `Entrevista 2`, `Entrevista 3`, `Entrevista 4`);
- timestamps;
- tentativa do usuário;
- ação executada;
- dor/confusão;
- heurística envolvida;
- hipóteses sobre terminologia e modelo mental.

Isso não é brainstorming genérico. É análise de comportamento e síntese de observações com linguagem de UX madura.

## 3.2 Playground como espaço de exploração estruturada

Os arquivos `#7 Menu - Playground H2` e `#10 Matching Productos AI` mostram que a exploração não era feita “por fora” do processo. Ela era organizada em páginas nomeadas, sprints e trilhas de conceituação.

Exemplos:

- `Q4 - Sprint 5/6`
- `Q4 - Sprint 3/6`
- `Q1 / SP1 - Current & JTBD`
- `Bench Menú (Mejorias)`
- `ReWork Menú`
- `Smart Menu Upload (AI)`

Isso sugere design operando em ciclos reais de produto, com recorte temporal, hipótese e refinamento.

## 3.3 Handoff documentado

Os arquivos `#9` e `#13` mostram uma passagem clara da exploração para entrega formal:

- `User Flow`
- múltiplas versões (`v1`, `v2`, `v3`);
- fluxos nomeados etapa a etapa;
- `READY FOR DEV`;
- páginas auxiliares de `Local Templates` e `Helpers`.

Esse tipo de organização mostra que o design não parava no “ideal conceitual”. Ele era traduzido em sequências operacionais compreensíveis para implementação.

## 3.4 Nomenclatura como evidência de método

A própria nomenclatura dos arquivos é um forte sinal de método:

- `Playground`
- `Discovery Entrevistas`
- `Handoff`
- `Library`
- `Core - Mobile Responsive`
- `READY FOR DEV`
- `Local Templates`
- `Helpers`

Isso indica uma separação consciente entre:

- exploração;
- pesquisa;
- sistema;
- framework;
- entrega.

## 4. Design System e Biblioteca

Dois arquivos são centrais aqui:

- `#6 Merchants library`
- `#12 Core - Mobile Responsive`

## 4.1 Mustache Design System — a revelação da cover

A cover do arquivo `#6` revelou a identidade completa da infraestrutura de design:

```
Nome:      Mustache Design System
Versão:    Components v8.0
Portal:    design.rappi.com
Libs:      design.rappi.com/libraries
Badge:     2024 · DEV · PRODUCT · DESIGN
```

O nome **Mustache** é uma referência direta ao ícone do bigode da Rappi. Na versão **v8.0**, o sistema está em maturidade avançada — múltiplas gerações de evolução, documentação pública, contribuição de vários times. Além do Mustache (global), a **Merchants Library** é uma biblioteca de nível de produto — uma camada composta que herda do Mustache e encapsula padrões específicos do domínio B2B Merchants.

O arquivo `#6` é claramente um design system vivo e amplo.

Páginas e grupos encontrados:

- `❖ Foundational`
- `❖ Checklist`
- `❖ Atoms`
- `❖ Molecules [En construcción]`
- `❖ Organisms - [En construccion]`

Além disso, há uma convenção explícita de status:

- `✅ Done`
- `⚠️ Fixing`
- `⊕ New`

Os componentes e blocos encontrados incluem:

- buttons
- links
- fields
- text area
- select
- checkbox/radio
- switch
- badges
- avatars
- loaders
- tags
- chips
- divider
- search
- filters
- tabs
- tooltips
- toast notification
- snackbar
- segmented control
- counter/stepper
- menu list
- accordion
- list-item
- banners
- ai-suggestions
- table
- navigation-bars
- tab-bar
- modal-sheets
- dialog
- drawer
- combobox

Também há:

- `Responsive Specifications`
- `Typography Specifications`
- `Breakpoints Rules`
- auditoria de repositório e Storybook.

### Leitura

Isso não é só uma biblioteca de UI. É uma base de governança, qualidade e evolução contínua, com sinal claro de:

- componentização;
- documentação;
- status de manutenção;
- conexão com desenvolvimento;
- escalabilidade do sistema.

## 4.2 Core - Mobile Responsive

O arquivo `#12` funciona como framework de adaptação do produto para responsividade e mobile.

Páginas-chave:

- `↳ 1. Tipografia . Grid . Breakpoints`
- `↳ 2. Tiendas . Filtros . Sidebar . Header`
- `↳ 3. Visión general`
- `↳ 3. Ventas`
- `↳ 4. Horarios`
- `↳ 5. Financiero`
- `↳ 6. Bottom Sheet y Modales`
- `↳ 7. Historial de Órdenes`

O `design_context` da seção `Layout - New values` explicita princípios estruturais:

- sistema de grid como base do front-end;
- classes de janela e ranges típicos;
- sistema espacial de `8pt grid`;
- `4pt baseline grid` para tipografia;
- definição de colunas, margens, gutters e max-width;
- recomendação de breakpoints com uso em design.

Há inclusive recomendações explícitas como:

- `Small < 768`
- `Medium 768 to 1239`
- `Large 1240 to 1279`
- `X-Large 1920 ≤ width`

### Leitura

O arquivo mostra um trabalho de sistema realmente forte:

- design responsivo com racional explícito;
- amarração entre tipografia, grid e breakpoints;
- tradução do sistema para domínios concretos (`Tiendas`, `Ventas`, `Financiero`, `Órdenes`);
- biblioteca local de componentes para mobile.

## 4.3 Evidência de reutilização entre arquivos

Há forte sinal de reutilização e padrão entre todos os arquivos:

- páginas recorrentes `READY FOR DEV`, `Local Templates`, `Helpers`, `Cover`;
- instâncias como `Header project`, `Section Header`, `slides 2.0`, `Caption`;
- relação clara entre `Merchants library`, `Core - Mobile Responsive` e os handoffs do domínio de menu e conta.

Isso indica que o sistema não está apartado do produto. Ele parece ser consumido pelos fluxos reais.

## 5. Projetos Diferenciais

## 5.1 Matching Productos AI

Este é o projeto mais distintivo do conjunto porque introduz IA em uma dor operacional concreta: reconciliação de catálogo e menu.

O fluxo não é mágico nem opaco. Ele coloca a IA sob supervisão:

- identifica itens faltantes;
- agrupa por categoria;
- permite aprovar ou rejeitar item a item;
- explica que o merchant poderá editar nome/preço depois da importação.

Isso mostra um padrão interessante: IA como acelerador assistido, não substituto cego do controle humano.

## 5.2 Menu Playground H2

O `Playground H2` é importante porque mostra o design trabalhando em hipóteses, não só em entrega. Ele contém:

- benchmark;
- rework;
- IA aplicada ao menu;
- mudança de personalizações;
- upload inteligente;
- comentários sobre scaffolding, ambiguidade terminológica e compreensão do modelo.

Ou seja: a evolução do produto está documentada como processo de conceituação.

## 5.3 Administrar Personalización

`Administrar Personalización - Handoff` é um bom indicador de complexidade porque reúne:

- grupos de opções;
- vinculação com produtos;
- combos;
- subníveis;
- personalização existente;
- criação de extras;
- fluxo completo e multi-etapas.

Esse tipo de problema exige muito mais do que desenhar um formulário. Exige desenhar um modelo operacional compreensível para quem administra catálogo sob pressão e com pouca margem para erro.

## 6. Síntese de Competências

## 6.1 Habilidades evidenciadas

Os arquivos evidenciam um repertório muito sólido em:

- arquitetura de informação para backoffice B2B;
- desenho de fluxos administrativos sensíveis;
- gestão de conta, documentos e conformidade;
- design de sistema e design system;
- responsividade com racional estruturado;
- operação de menu/catálogo em contexto complexo;
- design assistido por pesquisa e entrevistas;
- integração entre discovery, playground e handoff;
- desenho de experiência com IA aplicada a processo operacional.

## 6.2 Maturidade inferida

O conjunto mostra uma prática de design claramente acima de produção isolada de interface.

Os sinais mais fortes são:

- presença simultânea de discovery, playground, handoff e library;
- uso de linguagem de heurística e hipótese no board de entrevistas;
- existência de framework responsivo explícito;
- biblioteca com níveis de atoms, molecules e organisms;
- domínios de produto conectados entre si;
- detalhamento de fluxos multi-step e multi-entidade.

Em termos de maturidade de prática, isso se aproxima muito mais de uma atuação de produto/sistema do que de design de feature desconectada.

## 6.3 Comparação com padrões de mercado

Comparando com o que costuma aparecer em mercados B2B/marketplace:

- é comum encontrar bibliotecas desconectadas do produto; aqui há sinais de integração real entre library/core e handoffs;
- é comum discovery ficar fora do Figma; aqui ele aparece documentado e traduzido em decisões de interface;
- é comum IA aparecer só como “buzzword”; aqui ela aparece aplicada a um caso de uso operacional claro;
- é comum responsividade virar adaptação superficial; aqui existe framework de grid, baseline, breakpoints e aplicação por domínio.

Isso coloca o conjunto em um patamar bastante robusto de documentação e racional de design.

## 7. Linha do Tempo / Mapa de Projetos

Sem datas absolutas confiáveis para todos os arquivos, o melhor mapa é estrutural:

### Camada de base

- `#6 Merchants library`
- `#12 Core - Mobile Responsive`

Esses dois arquivos parecem sustentar o sistema de componentes, guidelines e responsividade consumidos pelos demais.

### Camada de domínio de conta e conformidade

- `#2 Mi Cuenta - Representante Legal y Fiscal`
- `#3 Cambio de Cuenta Bancaria`
- `#4 Cambio de Razón Social`
- `#5 Cambio de nombre de marca`
- `#11 Financiero - Tax Certificates`

Essa camada desenha a infraestrutura administrativa do merchant.

### Camada de operação comercial

- `#1 Onboarding y Partners - Post Onboarding`
- `#7 Menu - Playground H2`
- `#9 Menu - Handoff`
- `#13 Administrar Personalización - Handoff`

Essa camada cobre ativação no portal e gestão operacional do menu.

### Camada de pesquisa e diferenciação

- `#8 Menu - Playground Discovery Entrevistas`
- `#10 Matching Productos AI`

Essa camada mostra como discovery e IA alimentam a evolução do produto.

## Conclusão

O conjunto dos 13 arquivos mostra um ecossistema de produto B2B regionalizado para merchants, com forte densidade em:

- self-service administrativo;
- operação de catálogo/menu;
- componentes financeiros;
- onboarding;
- responsividade;
- design system;
- IA aplicada a uma dor operacional real.

Do ponto de vista de processo, o material é forte porque não mostra apenas telas prontas. Mostra:

- discovery com entrevistas;
- playground e benchmark;
- handoff formal;
- core responsivo;
- library com estados de manutenção;
- helpers e templates reutilizáveis.

Do ponto de vista de produto, a principal leitura é que se trata de uma plataforma sistêmica, não um conjunto de features isoladas. `Mi Cuenta`, `Financiero`, `Menu`, `Personalizaciones`, `Tax Certificates`, `Users & Permissions` e `Matching AI` se encaixam como partes de uma mesma operação.

Do ponto de vista de maturidade de design, o traço mais marcante é a coexistência de três camadas trabalhando juntas:

- **pesquisa e entendimento do problema**;
- **arquitetura e fluxos de produto**;
- **sistema visual e entrega pronta para desenvolvimento**.

Isso torna este acervo especialmente valioso como evidência de design de produto para plataformas operacionais complexas na América Latina.

---

## 8. Alexandre In Jae na Rappi — Posição e Impacto

### Confirmação de autoria

As covers de todos os 13 arquivos mostram **Alexandre In Jae** como designer responsável — do exploratório (`DSGN: Exploration`) ao pronto para desenvolvimento (`DSGN: Ready for Dev`). Ele não é apenas um executor de telas: conduz entrevistas de usabilidade (FigJam com 4 merchants reais), faz benchmark, gera hipóteses, itera e entrega handoff técnico.

### Escala de impacto

Trabalhar no Portal Merchants da Rappi significa que as decisões de design afetam diretamente:
- **Centenas de milhares de merchants** ativos nos 9 países da plataforma
- O **GMV (Gross Merchandise Value)** da Rappi — qualidade do catálogo = mais conversão = mais vendas
- A **eficiência operacional de micro e pequenos negócios** que dependem do portal para operar

O Administrar Personalización, por exemplo, é o sistema de modificadores que define como um restaurante configura seus "extras" e combos — uma funcionalidade que impacta cada pedido que passa pela plataforma.

### Frase de síntese

> *Product Designer atuando em contexto de escala unicórnio na Rappi, com domínio integral do ciclo de design — da pesquisa com merchants à especificação técnica —, especialização em produtos B2B regulatórios e com IA, e capacidade comprovada de projetar sistemas operacionais complexos para o mercado LATAM.*
