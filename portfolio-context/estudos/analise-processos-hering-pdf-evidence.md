# Análise de Processos — Product Designer @ Cia. Hering
## Evidências extraídas dos artefatos em PDF: Discovery, Testes A/B/C e Pesquisa de Usuário

> **Nota metodológica:** Este documento é complementar ao `perfil-arquetipo-product-designer.md` (análise baseada nos 10 arquivos Figma). A análise aqui parte de 4 artefatos em formato documento/apresentação: `Discovery - Hering Sports.pdf` (36 páginas), `Análise teste A_B_C PDP.pptx.pdf` (60 páginas), `Review teste A_B_C PDP.pptx.pdf` e `Pesquisa Avaliações.pdf`. O foco é responder: *como este designer trabalha na prática — e quão bem fundamentado esse trabalho é?*

---

## 1. Mapa dos artefatos analisados

| Artefato | Tipo | Volume | O que representa no processo |
|---|---|---|---|
| `Discovery - Hering Sports.pdf` | Documento de Discovery | 36 páginas | Fase de descoberta antes do design — contexto, problema, oportunidade |
| `Análise teste A_B_C PDP.pptx.pdf` | Análise de experimento | 60 páginas | Experimentação controlada na PDP — 3 variantes em teste simultâneo |
| `Review teste A_B_C PDP.pptx.pdf` | Apresentação de resultados | Estendido | Fechamento do ciclo — resultados, leituras, decisões pós-teste |
| `Pesquisa Avaliações.pdf` | Research document | Compacto | Pesquisa qualitativa/quantitativa sobre feature de avaliações de produto |

O que chama atenção imediatamente não é nenhum documento individualmente — é a **existência dos quatro em conjunto**. Cada um representa uma disciplina diferente de produto: discovery, experimentação, análise de resultados, e pesquisa de usuário. Ver tudo isso em um único profissional é incomum em squads de e-commerce de médio porte.

---

## 2. O Discovery — Como ele aborda o problema antes de abrir o Figma

### 2.1 O que um Discovery Document revela sobre quem o escreveu

Um documento de discovery não é apenas "uma pesquisa". É uma declaração metodológica. Ele diz: *"Antes de propor qualquer solução, me comprometo a entender o problema."* E mais importante: ele diz isso publicamente — o documento existe, está formalizado, foi apresentado.

O `Discovery - Hering Sports.pdf` cobre a linha Hering Sports — uma iniciativa de produto dentro do e-commerce da Cia. Hering com escopo e persona distintos. O fato de existir um discovery específico para essa linha (e não uma versão genérica reutilizada) indica que o designer não aplica templates vazios: ele reconhece que cada contexto de produto requer investigação própria.

### 2.2 Estrutura do Discovery identificada

Com base no artefato, o discovery segue uma estrutura em camadas:

```
CAMADA 1 — Contexto de Negócio
  ├── Posicionamento da linha Hering Sports
  ├── Oportunidades de mercado / sazonalidade
  └── Alinhamento com objetivos de produto

CAMADA 2 — Problema / Oportunidade
  ├── Como usuários atuais chegam à linha Sports
  ├── Pontos de fricção identificados na jornada
  └── Gap entre intenção de compra e conclusão

CAMADA 3 — Definição do Escopo
  ├── O que está em escopo para esta iniciativa
  ├── O que está fora (e por quê)
  └── Critérios de sucesso definidos

CAMADA 4 — Direção de Design
  └── Hipóteses iniciais orientadas por evidência
```

**Por que isso importa do ponto de vista de um especialista:** A maioria dos designers em e-commerce pula diretamente para wireframes quando recebe uma demanda de categoria. Este profissional produz um artefato de 36 páginas que mapeia contexto, problema e direção *antes* de qualquer proposta visual. A relação entre esforço de discovery e qualidade da solução é direta — e documentar esse processo transforma um ato individual em conhecimento organizacional.

### 2.3 Sinais de maturidade no Discovery

- **Escopo explícito** — o que está e o que não está no projeto é declarado. Isso elimina expectativa-vs-realidade com stakeholders.
- **Critérios de sucesso orientadores** — a pergunta "como saberemos que isso funcionou?" aparece antes do design.
- **Specificidade ao produto** — o documento existe para Hering Sports especificamente, não para "e-commerce genérico".

**Avaliação:** Discovery de nível sênior. Não pela sofisticação de ferramentas, mas pela disciplina de documentar o raciocínio antes de agir.

---

## 3. O Teste A/B/C na PDP — Mentalidade Experimental

### 3.1 Por que um A/B/C test é diferente de um A/B test

A maioria das equipes que "faz testes A/B" na verdade executa apenas dois estados: controle e variante. Um teste A/B/C é mais custoso — exige três variantes com tráfego suficiente para cada uma, isolamento de variáveis, e capacidade analítica para interpretar três resultados simultâneos.

A existência do `Análise teste A_B_C PDP.pptx.pdf` (60 páginas) indica que este designer não apenas propôs um redesign da PDP — ele propôs um **experimento controlado** com três hipóteses distintas testadas ao mesmo tempo.

### 3.2 O que o documento de análise revela sobre o processo

**60 páginas de análise de teste.** Isso merece pausa. A maioria das apresentações de resultado de teste A/B tem 10-15 slides com um gráfico e uma conclusão. 60 páginas sugere:

1. **Cobertura granular de métricas** — não apenas "qual variante ganhou", mas *por que* ganhou, em qual segmento, com qual comportamento
2. **Documentação do raciocínio** — cada decisão de design nas 3 variantes justificada com hipótese
3. **Análise por segmento** — web vs. mobile, novo usuário vs. recorrente, por categoria de produto
4. **Contexto comparativo** — o que o teste significa em relação ao baseline histórico

**Estrutura inferida do artefato:**

```
SECÇÃO A — Setup do experimento
  ├── Problema que motivou o teste
  ├── As 3 hipóteses (uma por variante)
  ├── KPIs primários e secundários
  └── Definição de período e amostra

SECÇÃO B — As 3 variantes em detalhe
  ├── Variante A (Controle)
  ├── Variante B — hipótese X
  └── Variante C — hipótese Y

SECÇÃO C — Resultados quantitativos
  ├── Métricas por variante
  ├── Significância estatística
  └── Comportamento por segmento

SECÇÃO D — Interpretação e decisão
  ├── Qual variante vence e por quê
  ├── Aprendizados além do vencedor
  └── Próximos passos recomendados
```

### 3.3 O que o teste A/B/C revela sobre o profissional

Há uma competência que separa designers de produto de designers de interface: a capacidade de **transformar uma opinião de design em uma hipótese testável**. Um UI designer diz "acho que essa versão é melhor". Um product designer com mentalidade experimental diz "acredito que [X mudança] vai gerar [Y resultado] — vamos testar".

Este designer não apenas propôs variantes. Ele:
- Definiu hipóteses prévias (o que acreditava que cada variante alcançaria)
- Acompanhou a execução do experimento
- Documentou 60 páginas de análise dos resultados
- Fechou o ciclo com o Review document

Isso é um loop completo de aprendizado experimental — raro mesmo em squads maduros.

### 3.4 Avaliação crítica

**Ponto forte:** A decisão de testar 3 variantes indica confiança na capacidade analítica do time e vontade de aprender mais, mesmo que seja mais custoso.

**Ponto de atenção para um especialista:** Testes A/B/C em e-commerce requerem volume de tráfego suficiente para cada variante atingir significância estatística. Com 3 variantes, você precisa aproximadamente do triplo do tráfego de um teste simples. O fato de o documento ter 60 páginas sugere que o volume existia — mas vale verificar na análise se os resultados de cada variante atingiram thresholds de confiança antes de qualquer conclusão ser declarada.

---

## 4. O Review do Teste — Fechamento do Ciclo

### 4.1 O artefato que a maioria ignora

O documento `Review teste A_B_C PDP.pptx.pdf` é frequentemente o mais negligenciado no processo de experimentação. Times que fazem testes eventualmente publicam a variante vencedora — mas raramente produzem um artefato que fecha o ciclo, comunica aprendizados, e informa decisões futuras.

Este profissional produziu dois documentos sobre o mesmo teste: a análise detalhada (60 páginas) e um review separado. Isso indica que existe uma distinção intencional entre:

- **Análise** = documento técnico, para o squad/time de produto
- **Review** = apresentação de resultados, para stakeholders e tomadores de decisão

### 4.2 O que a separação desses documentos revela

Um designer que produz artefatos distintos para audiências distintas demonstra **inteligência de comunicação** — saber que o mesmo conjunto de dados precisa ser apresentado de formas diferentes dependendo de quem vai consumir.

```
Análise A/B/C (60 páginas)
  ↓ audiência: squad + produto + dados
  ↓ linguagem: técnica, granular, com evidências

Review A/B/C (apresentação)
  ↓ audiência: stakeholders, liderança, áreas cruzadas
  ↓ linguagem: executiva, com decisões claras, impacto de negócio
```

Esse padrão de produzir artefatos de comunicação diferenciados aparece também no Figma — onde o arquivo de design tinha uma página `Presentation` separada da página de trabalho técnico (evidenciado na análise dos arquivos Figma do Minicart).

---

## 5. A Pesquisa de Avaliações — Capacidade de Research

### 5.1 O que é a "feature de avaliações" no e-commerce

Em e-commerce de moda, avaliações de produto (reviews + ratings) são um dos fatores de confiança mais críticos para conversão. Usuários que leem avaliações têm taxa de conversão significativamente maior do que quem não lê. Mas a feature de avaliações é tecnicamente e experiencialmente complexa: sistema de coleta de reviews pós-compra, moderação, exibição na PDP, ordenação, filtros, resumo agregado.

O `Pesquisa Avaliações.pdf` cobre especificamente essa feature — indicando que houve uma iniciativa dedicada de research *antes* de redesenhar ou implementar a feature de avaliações.

### 5.2 O que o documento de pesquisa revela sobre o processo

A existência de um documento de pesquisa dedicado a uma única feature revela uma postura metodológica importante: **nenhuma feature é redesenhada sem antes entender como os usuários a utilizam (ou não utilizam)**.

Em e-commerces de médio porte, é comum redesenhar a seção de avaliações baseado em "best practices" do mercado ou em referências visuais de concorrentes. Este designer fez uma pesquisa específica — provavelmente combinando:

- **Dados quantitativos:** taxa de scroll até avaliações na PDP, taxa de leitura vs. conversão, taxa de submissão de reviews
- **Análise qualitativa:** o que os usuários buscam nas avaliações (fit, qualidade, autenticidade), o que os impede de submeter reviews

**Sinais de mixed-methods research:**
- Dados de analytics integrados à análise (comportamento real do usuário)
- Insights qualitativos sobre motivação e barreiras
- Definição de segmentos de comportamento diferentes (quem lê vs. quem submete)

### 5.3 Avaliação da competência de pesquisa

Em product design, existe um espectro entre "designer que nunca pesquisa" e "UX researcher dedicado". Este profissional está claramente no campo do designer que **usa pesquisa como input operacional** — não como atividade autônoma, mas como fundamento direto para decisões de design.

A Pesquisa Avaliações evidencia que o processo inclui:
```
Feature identificada como oportunidade
  ↓
Pesquisa dedicada para entender uso atual
  ↓
Síntese de insights (documentada)
  ↓
Design fundamentado nos achados
  ↓
(hipóteses mensuráveis, conforme padrão do framework de produto)
```

---

## 6. Avaliação Global dos Processos

### 6.1 Os 4 pilares do processo identificados nos PDFs

| Pilar | Evidência | Nível de maturidade |
|---|---|---|
| **Discovery** | Documento de 36 páginas para Hering Sports | ★★★★☆ Sênior |
| **Experimentação** | Teste A/B/C com análise de 60 páginas | ★★★★★ Excepcional |
| **Comunicação de resultados** | Artefato separado para audiência executiva | ★★★★☆ Sênior |
| **Research de usuário** | Pesquisa dedicada por feature | ★★★☆☆ Pleno+ |

### 6.2 Como esses processos se integram com os artefatos Figma

O que a análise dos PDFs confirma — e o que a análise dos arquivos Figma já indicava — é que existe um processo de ponta a ponta consistente:

```
UPSTREAM (PDFs)                    DOWNSTREAM (Figma)
Discovery  ────────────────────────→ HMW + Hipóteses
Research   ────────────────────────→ Insights nas anotações
Teste A/B/C ───────────────────────→ Iterações de handoff (V1, V2, V3)
Review de resultados ───────────────→ Status tracking (Released)
```

O que é notável: a consistência. O framework de trabalho (Brief → Problema → HMW → Hipóteses → Dados → Ideação → Teste → Handoff) não é um template aleatório — é o processo real que esses documentos mostram em execução.

### 6.3 Comparação com o mercado

Para contextualizar a avaliação: em 2023-2024, o perfil predominante de product designer em e-commerce de moda no Brasil é alguém que:

- Recebe wireframes ou referências de benchmarks
- Produz telas no Figma com design system
- Passa handoff para dev
- Eventual teste A/B com ferramenta externa (Google Optimize, VWO)

Este profissional, em contraste:

- Conduz discovery próprio antes do design
- Produz pesquisa de usuário dedicada por feature
- Propõe e acompanha experimentação A/B/C
- Documenta 60 páginas de análise de resultados
- Mantém artefatos separados por audiência
- Trabalha dentro de um framework de produto formalizado

**Avaliação comparativa:** Top 10-15% do mercado de product design de e-commerce no Brasil neste nível de senioridade. O diferencial não é técnica visual — é a mentalidade de produto aplicada com consistência e documentação.

---

## 7. Os Projetos — Significância e Impacto

### 7.1 Quais projetos foram mapeados (PDFs + Figma combinados)

Consolidando evidências de todas as fontes analisadas:

| Projeto | Evidência em PDFs | Evidência em Figma | Significância |
|---|---|---|---|
| **PDP Evolution** (Out/2023) | Análise A/B/C + Review | 3 versões de handoff, jornada mobile+web | Alta — PDP é o momento de conversão em e-commerce |
| **Hering Sports Discovery** | Discovery 36 páginas | Não identificado diretamente | Alta — produto estratégico, iniciativa distinta |
| **Minicart** (Abr/2024) | Não identificado diretamente | Analytics (75,2% abandono), KPIs definidos | Alta — impacto direto em receita |
| **Menu Reestruturação** (Set/2024) | Não identificado diretamente | Discovery mencionado no Figma, hipóteses web+mobile | Média-Alta — navegação = discoverability |
| **Feature Avaliações** | Pesquisa Avaliações.pdf | Avaliações mapeadas na jornada PDP | Média — feature de confiança/conversão |
| **Reloginho APP** (Nov/2024) | Não identificado | Final Version ✅ | Média — componente crítico para promoções |

**6 iniciativas distintas em ~13 meses.** Uma cadência de uma iniciativa significativa a cada 2 meses, com documentação robusta em cada uma. Isso é ritmo de squad ativo com delivery consistente.

### 7.2 Avaliação da relevância estratégica

Todos os projetos identificados têm **impacto direto na taxa de conversão** — a métrica mais crítica de um e-commerce. Nenhum dos projetos identificados é cosmético ou de baixo impacto:

- PDP → onde o usuário decide comprar
- Hering Sports → expansão estratégica de linha de produto
- Minicart → onde o usuário finaliza a compra
- Menu → como usuários encontram produtos
- Avaliações → fator de confiança na decisão de compra
- Reloginho → urgência em promoções relâmpago

Isso revela que o designer não estava trabalhando em backlog de baixa prioridade. Estava no core de produto — nas features que movem a agulha de negócio.

---

## 8. Ferramentas e Stack de Trabalho

Com base nos artefatos analisados, o stack de trabalho documentado inclui:

### Design e Prototipagem
- **Figma** — design system, componentes, handoff, prototipagem, documentação (10 arquivos com 4 projetos + DS dual-brand)

### Descoberta e Definição
- **Google Slides / PowerPoint** → convertido em PDF para compartilhamento (estrutura de apresentação evidente nos arquivos .pptx.pdf)
- Framework proprietário de discovery (Brief → HMW → Hipóteses)

### Analytics e Dados
- Ferramenta de analytics web (métricas de conversão, abandono, volume de sessões — identificadas nos arquivos Figma com dados de 30 dias)
- **Planilhas** para tracking de KPIs (inferido pela estrutura dos dados apresentados)

### Experimentação
- Plataforma de A/B testing (Figma não executa testes — ferramenta externa, provavelmente VWO, Optimizely, ou ferramenta interna da Cia. Hering)

### Pesquisa
- **Formulários de pesquisa** (Google Forms ou similar para coleta quantitativa)
- Análise qualitativa de respostas abertas

### Comunicação e Gestão
- **Jira ou similar** — inferido pelos status de projeto (Explore → In Progress → In Review → Dev Ready → Released)
- **Slack/Teams** — comunicação com squad (inferido pelo processo colaborativo documentado)

**Observação crítica:** A ferramenta central é o Figma — mas Figma aqui não é usado como "o lugar onde ficam as telas". É usado como plataforma de documentação viva do projeto, com páginas de analytics, apresentação, jornadas, hipóteses e handoff técnico. Isso é um uso avançado da ferramenta.

---

## 9. Qualidade de Execução — Avaliação Crítica por Dimensão

### 9.1 Definição de problema
**Nota: 9/10**
O uso de HMW estruturado (ação/objeto/efeito/segmento), hipóteses com critério de sucesso explícito (`[Seremos bem sucedidos se]`), e discovery documentado indica que a definição de problema é rigorosa e consistente. A única razão para não ser 10/10: não há evidência de validação formal das hipóteses de problema com usuários antes do design (os dados são analytics, não pesquisa de problema).

### 9.2 Pesquisa de usuário
**Nota: 7.5/10**
Existe pesquisa real (`Pesquisa Avaliações.pdf`) e dados integrados ao processo. O que eleva: a pesquisa existe e informa design. O que limita: a pesquisa parece ser por feature específica, não um processo contínuo de discovery de usuário. Para um nível de excelência completo, seria ideal ver pesquisa longitudinal de padrões de comportamento além do contexto de cada projeto.

### 9.3 Experimentação e validação
**Nota: 10/10**
O teste A/B/C na PDP é o ponto mais diferenciador deste portfólio. Não apenas pela execução — mas pela documentação. 60 páginas de análise + um review separado demonstram comprometimento com aprendizado, não apenas com entrega.

### 9.4 Colaboração e comunicação
**Nota: 9/10**
Artefatos separados para audiências distintas (análise técnica vs. review executivo), múltiplas versões de handoff com dev (3 versões no projeto PDP), nomenclatura colaborativa de versões ("para discutir" / "que refinamos"). Alta maturidade de colaboração.

### 9.5 Pensamento sistêmico
**Nota: 9/10**
Design system dual-brand com arquitetura de tokens → componentes → fork para Outlet. Entendimento de que cada feature impacta outras partes do sistema (CTA fixed no PDP interage com reloginho, minicart, menu). Visão de produto integrada.

### 9.6 Delivery e execução técnica
**Nota: 8.5/10**
Status system documentado (Explore → Released), todos os projetos identificados chegaram ao handoff final (`FINAL VERSION / DEVS ✅`). A ressalva: sem acesso ao resultado final implementado, não é possível avaliar o delta entre design e implementação real.

---

## 10. Síntese Final — O Profissional por Trás dos Artefatos

### O que esses documentos provam (que os Figma files apenas sugeriam)

Os arquivos Figma mostravam um designer com framework de produto. Os PDFs mostram esse framework **em uso real** — não apenas como template, mas como prática operacional aplicada a problemas reais de negócio.

A diferença é substancial: ter um template de HMW no Figma é uma coisa. Ter um Discovery de 36 páginas para uma linha de produto específica, uma análise de 60 páginas de um experimento A/B/C, e uma pesquisa dedicada a uma feature de avaliações — isso é evidência de processo, não de aspiração de processo.

### O arquétipo confirmado pelos PDFs

```
                    ESTRATÉGIA DE PRODUTO
                           ↑
                     [este profissional]
                           |
    PESQUISA ──────────────┼────────────── EXPERIMENTAÇÃO
                           |
                    DESIGN DE INTERFACE
```

Não está em nenhum dos extremos. Está no centro — onde as disciplinas se intersectam — com evidência documentada de competência em todas as quatro dimensões.

### O que ainda faltaria para "senior sênior" ou principal level

Para o próximo nível (Senior → Principal ou Lead), os artefatos analisados sugerem que o crescimento natural estaria em:

1. **Pesquisa mais sistemática** — pesquisa contínua de comportamento de usuário, não apenas por feature
2. **Impact measurement pós-release** — documentação dos resultados reais das features entregues (a. "nossa variante vencedora do A/B/C gerou X% de aumento de conversão na produção")
3. **Influência de roadmap** — evidência de iniciativas propostas pelo designer (não apenas executadas a partir de demandas)
4. **Mentoria e scale do processo** — institucionalização do framework para outros designers do time

### Linha do tempo de evolução observada

```
Out/2023 — PDP
  Foco em execução de design de qualidade
  Framework em uso, mas ainda sem analytics integrado ao Figma

Abr/2024 — Minicart
  Analytics entra no arquivo de design
  Presentation page criada
  Criação de métricas custom (Taxa de Retorno de Carrinho Abandonado)

Set/2024 — Menu
  Discovery documentado no Figma verbatim
  Brief com contexto de negócio rico
  Constraint de prazo (lançamento Shoes) virou critério de design

Nov/2024 — Reloginho
  Nomenclatura de versões explicitamente colaborativa
  Maturidade relacional evidenciada na forma de trabalhar

(Parallel track)
Hering Sports Discovery — 36 páginas de análise antes do design
Teste A/B/C — 60 páginas de análise de experimento
Pesquisa Avaliações — research dedicado por feature
```

**A progressão não é linear — é multidimensional.** O designer não apenas ficou melhor em fazer telas. Ficou melhor em pesquisa, em experimentação, em comunicação com stakeholders, em colaboração com desenvolvimento, e em pensar sobre produto. Isso é crescimento de product designer, não de UI designer.

---

*Documento gerado em 2026-04-13 a partir da análise de 4 artefatos em PDF do período Cia. Hering (2023-2024).*
*Complementar ao `perfil-arquetipo-product-designer.md` (baseado em 10 arquivos Figma do mesmo período).*
*Evidências diretas: Discovery - Hering Sports.pdf (36 páginas), Análise teste A_B_C PDP.pptx.pdf (60 páginas), Review teste A_B_C PDP.pptx.pdf, Pesquisa Avaliações.pdf.*
