# Ecossistema J&J — A Engine de Experiência Transacional
## Análise de Arquitetura de Experiência e Systems Thinking (2019–2023)

> **Nota metodológica:** Esta análise reconstrói a arquitetura de experiência da conta Johnson & Johnson na Mirum a partir de evidências diretas do acervo: 1.770 diretórios, ~18.000 arquivos, 5 anos de produção (2019–2023). As fontes são estrutura de pastas, nomenclatura de arquivos, specs HTML de telas, wireframes, wireflows em PDF e arquivos de design (Sketch/Figma). Nenhuma afirmação foi inferida sem respaldo nos artefatos.
>
> **Ponto de vista:** Especialista em Arquitetura de Experiência e Systems Thinking — avaliando como o design se organizou para resolver um problema sistêmico de escala, não apenas problemas de interface.

---

## O Problema Central (antes da análise)

Uma empresa com 9 marcas de consumo no Brasil em canais digitais tem um problema estrutural recorrente: cada campanha, cada hotsite, cada promoção precisa de login e cadastro. Se cada uma dessas iniciativas reinventa o fluxo do zero, o custo é triplo:

1. **Custo de produção** — redesenhar as mesmas 36 telas para cada campanha
2. **Custo de dados** — bases de usuários fragmentadas, impossível construir histórico cross-marca
3. **Custo de confiança** — o usuário encontra interfaces diferentes para a mesma ação em marcas do mesmo grupo

A solução não é um redesign. É uma **Engine** — um sistema de fluxos reutilizável que se adapta ao contexto de cada marca sem ser refeito a cada lançamento. A evidência no acervo mostra exatamente essa transição, de forma clara e rastreável.

---

## 1. A Visão de Ecossistema — O "Coração" do Projeto

### 1.1 Como a estrutura de pastas comprova a criação de uma solução escalável

O acervo conta uma história em dois atos distintos:

**Ato 1 — Campanhas Isoladas (2019–2021)**

Cada projeto tem sua própria pasta de login e cadastro, sem referência cruzada:

```
2019/J&J_Promo-Pureza-1061518/          → 36 telas (v1–v4), login/cadastro próprio
2019/LP_KV_Listerine_Experimentabs/     → 10 telas, dados-pessoais + privacidade próprios
2019/J&J_Promo_adulto_48h/              → login/cadastro próprio
2020/J&J_Campanha-Endometriose/         → v1–v9, fluxo próprio
2021/J&J_CampanhaMaternidade_2021/      → fluxos documentados pela 1ª vez em PDF
```

A prova está na redundância: `Política_privacidade.docx` existe dentro de cada projeto, independentemente. O regulamento é refeito. A tela de login é redesenhada. O cadastro começa do zero.

**Ato 2 — Engine (2022)**

A estrutura muda. Surgem projetos com IDs numéricos de ticket (rastreabilidade de demanda formal) e nomenclatura explicitamente orientada a sistema:

```
188650_J&J_Neutrogena_LoginCadastro/    → Engine aplicada à Neutrogena
202188_J&J_LoginCadastro_Listerine/     → Engine aplicada à Listerine
218177_J&J_LoginCadastro_Neostrata/     → Engine aplicada à Neostrata
J&J_DesignSystem_v1/                    → Fundação visual do sistema
188651_J&J_StyleGuide_Marcas/           → Identidades visuais como variáveis do sistema
```

A diferença não é quantitativa (não é "mais projetos"). É qualitativa: os três projetos de Login/Cadastro de 2022 têm a **mesma anatomia interna**. Isso não é coincidência de design — é evidência de sistema.

### 1.2 O conceito de Engine aplicado a este caso

Uma Engine, em arquitetura de experiência, é um conjunto de fluxos e componentes que:
- Resolve um conjunto fixo de problemas (autenticação, verificação, perfil)
- Aceita variáveis de contexto (identidade visual, textos, regras de negócio)
- Produz saídas diferentes sem alterar a lógica estrutural

A Engine J&J de 2022 funciona assim:

```
╔══════════════════════════════════════════╗
║         ENGINE CORE (invariável)         ║
║                                          ║
║  Cadastro → VerificaEmail → Logado       ║
║  Login → [EsqueciSenha A → B]            ║
║  AreaLogada: Dados, Senha, Email         ║
║  5 Templates de Email Transacional       ║
╚══════════════════════════════════════════╝
          ↓ aplica variáveis de marca
    ┌─────┴──────────────────────┐
    │                            │
Neutrogena                   Listerine                Neostrata
(identidade visual,          (identidade visual,      (identidade visual,
textos, regras)              textos, regras)          textos, regras)
```

**Como um único fluxo atendia diferentes contextos:**

- **Promoções:** o cadastro captura dados pessoais + aceite de regulamento. O cupom é entregue via email transacional após verificação. A área logada exibe o status de participação.
- **Maternidade:** o cadastro progressivo coleta informações de gestação/filhos em etapas. O CRM enriquece o perfil ao longo do tempo. O conteúdo da área logada é personalizado por fase.
- **Saúde/Skincare:** o cadastro captura perfil de uso do produto. O email transacional direciona para recomendações. A área logada centraliza histórico e conteúdo personalizado.

O mesmo fluxo de 16 estados (00–16 no Neutrogena) serviu aos três contextos porque **o fluxo resolve o problema da autenticação, não o problema da campanha**. A campanha é uma variável — a engine é a estrutura.

### 1.3 Evidência da anatomia idêntica (prova de sistema)

O projeto Neutrogena 2022 tem, em v1, 57 arquivos HTML de especificação, e em v2/v3, 44 telas cada. A sequência documentada é:

| Código | Tela | Função na Engine |
|---|---|---|
| 00 | Cadastro | Entrada no sistema |
| 01a/01b | Verifique seu Email | Estado de espera + reenvio |
| 02 | Email Verificado | Confirmação de identidade |
| 03 | Login | Acesso recorrente |
| 03_reenviar | Login + Reenviar | Estado alternativo |
| 04 | Esqueci Senha A | Recuperação passo 1 |
| 05 | Esqueci Senha B | Recuperação passo 2 |
| 06 | Logado — Dados | Dashboard pessoal |
| 07–08 | Logado — Senha 1/2 | Alteração de credencial |
| 09–11 | Área Logada Edit 1/2 | Edição de perfil |
| 12–16 | FluxoEmail 1–4 (A/B) | Troca segura de email |
| emails 01–05 | Templates transacionais | Comunicação de sistema |

Esta anatomia se repete em Listerine e Neostrata. **Mesma numeração. Mesma lógica. Mesma cobertura de estados.** Apenas a camada visual muda.

---

## 2. Complexidade Técnica e Funcional

### 2.1 A profundidade dos fluxos transacionais

O que parece simples na interface esconde uma densidade técnica significativa. Cada fluxo cobre não apenas o caminho feliz (happy path), mas todos os estados de erro, espera e alternativa.

**Fluxo 1 — Cadastro Progressivo**

Não é um formulário único. É uma jornada em etapas com captura incremental de dados:

```
Etapa 1: Credenciais mínimas (email + senha)
  ↓ envio de email de verificação
Etapa 2: Dados pessoais básicos (nome, CPF, telefone)
  ↓ aceite de termos (checkbox obrigatório com LGPD)
Etapa 3: Dados de contexto (fase de gestação, faixa etária, marca usada)
  ↓ enriquecimento de perfil no CRM
Resultado: perfil qualificado sem abandono por friction de formulário longo
```

A progressividade é a solução de design para o dilema clássico: "quanto mais dados pedimos, menos pessoas completam". Ao distribuir o cadastro em etapas, a engine obtém dados mínimos para autenticar e dados ricos ao longo do tempo.

**Fluxo 2 — Verificação de Email (estados cobertos)**

O projeto Maternidade 2021 foi o primeiro a ter um PDF dedicado exclusivamente ao fluxo de confirmação de email — um sinal de que a equipe reconheceu que esse fluxo específico merecia arquitetura própria. Em 2022, esse fluxo evoluiu para cobrir:

```
Estado A: Email enviado → usuário abre e clica no link → verificado
Estado B: Email enviado → usuário não recebeu → botão "Reenviar"
Estado C: Link expirado → nova solicitação
Estado D: Email já verificado → redirect para login
```

Cada estado tem uma tela dedicada (01a, 01b, 02 na nomenclatura Neutrogena). Isso não é excesso de design — é cobertura de todas as situações reais que um usuário encontra.

**Fluxo 3 — Fluxo de Troca de Email (FluxoEmail 12–16)**

Este é o fluxo mais sofisticado da engine e revela a maior maturidade técnica. Trocar o email de uma conta sem comprometer a segurança requer:

```
Passo 1: Usuário solicita troca no perfil logado (tela 12)
Passo 2: Sistema envia código para email ATUAL (tela 13)
Passo 3a: Usuário confirma com código → autorização concedida (tela 14a)
Passo 3b: Código inválido → reenvio ou cancelamento (tela 14b)
Passo 4a: Usuário insere novo email (tela 15a)
Passo 4b: Validação do novo email falha (tela 15b)
Passo 5: Sistema envia confirmação para NOVO email
Passo 6a: Novo email confirmado → troca efetivada (tela 16a)
Passo 6b: Novo email não confirmado → estado suspenso (tela 16b)
+ Email de aviso para o email antigo (template 04_antigo_email_aviso)
+ Email de confirmação para o novo email (template 04_novo_email_confirmacao)
```

5 estados de tela + 2 templates de email para um único fluxo. Isso é design de sistema transacional de nível enterprise — não de hotsite de campanha.

**Fluxo 4 — Registro de Cupom**

Documentado em `159101_J&J_Maternidade_FluxoCupons` e `138951_J&J_NovaEngine_Promos`, o fluxo de cupom integra autenticação e benefício:

```
Usuário participa da promoção → cadastro/login
  ↓ verificação de elegibilidade (dados do produto cadastrados)
  → cupom gerado e enviado por email transacional
  → exibido na área logada (histórico de benefícios)
  → integração com sistema de E-commerce para validação do cupom no checkout
```

A área logada funciona como CRM front-end: o usuário vê seus benefícios, histórico de participações e dados pessoais. Cada campo preenchido enriquece o perfil no backend.

### 2.2 Conexão com CRM — Enriquecimento de base e retenção

O sistema não termina no cadastro. A engine foi projetada para alimentar continuamente o CRM:

| Ponto de contato | Dado capturado | Uso no CRM |
|---|---|---|
| Cadastro inicial | Email, senha, dados básicos | Criação do registro único |
| Verificação de email | Email válido e ativo | Segmentação por deliverability |
| Dados progressivos | CPF, telefone, perfil de uso | Enriquecimento de perfil |
| Aceite de termos | Timestamp de consentimento | Compliance LGPD |
| Registro de produto | Marca usada, ocasião | Segmentação por produto |
| Participação em promoção | Histórico de campanhas | Retenção e reengajamento |
| Troca de email | Email atualizado | Manutenção de base limpa |
| Alteração de dados | Dados cadastrais atualizados | CRM sempre atualizado |

A base de usuários gerada por campanhas de Listerine (promo Experimentabs), Neutrogena (hotsite proteção solar) e Johnson's Baby (Maternidade) podia ser, em tese, unificada em um único perfil de usuário J&J — cada marca contribuindo com um conjunto de dados diferente para o mesmo registro de CRM.

### 2.3 Os 5 templates de email transacional

Cada implantação da engine inclui 5 templates dedicados:

| Template | Trigger | Função |
|---|---|---|
| 01_email_confirmacao | Novo cadastro | Verificação de email |
| 02_email_alteracao | Alteração de dados | Notificação de mudança |
| 03_email_confirmacao_senha | Recuperação de senha | Reset seguro |
| 04_novo_email_confirmacao | Troca de email | Verificação do novo email |
| 04_antigo_email_aviso | Troca de email | Alerta de segurança ao email antigo |

A existência de um template específico para "aviso ao email antigo" (04_antigo_email_aviso) revela uma preocupação com segurança que vai além do UX: é uma camada de proteção contra sequestro de conta.

---

## 3. Intersecção com Compliance e Negócio

### 3.1 A evolução da LGPD no design: de tela isolada a sistema integrado

**2019 — Compliance como conteúdo:**

A Lei Geral de Proteção de Dados foi promulgada em agosto de 2018 e entrou em vigor em setembro de 2020. Em 2019, o acervo já mostra adaptação:

- Projeto Pureza: `telas-130-política.html` + `telas-70-regulamento.html` — dois artefatos de tela dedicados a obrigações legais
- Projeto Listerine: `kv_campanha_listerine-10-política-de-privacidade.html` — tela inteira de política

Neste modelo, compliance é um **destino** (o usuário navega até a política se quiser). A lei está cumprida, mas a experiência é passiva.

**2022 — Compliance como componente:**

Com a engine, compliance migra de conteúdo para componente de interação:

- **Checkbox obrigatório de consentimento** — o cadastro não avança sem aceite explícito. A data e hora do aceite são registradas para fins de auditoria.
- **Política de Cookies com consent manager** — o usuário tem controle granular por categoria de cookie (analíticos, funcionais, marketing). Documentado no CadastroMexico como componente separado.
- **Footer unificado** — Política de Privacidade + Informações Legais + Fale Conosco + Política de Cookies como componentes fixos, não opcionais.
- **Header condicional** — `00_d_jj_neutrogena_header-login.html` vs. `00_d_jj_neutrogena_header-user.html` — o estado de autenticação é visível na interface, comunicando transparência sobre os dados do usuário.

### 3.2 Como o design transformou restrições legais em jornada fluida

O desafio central do design neste contexto é que **cada requisito legal é um atrito potencial**. Um formulário com 12 campos obrigatórios (exigidos pelo regulamento da promoção), um checkbox de 3 parágrafos de termos, e uma tela de política de privacidade antes de qualquer benefício é, do ponto de vista do usuário, uma barreira.

As soluções de design documentadas no acervo:

**1. Fragmentação da densidade legal**

Em vez de apresentar todos os termos em uma única tela, o design distribui o consentimento ao longo do fluxo:
- No cadastro: checkbox de aceite com texto resumido e link para política completa
- No rodapé: acesso permanente aos documentos completos
- Na participação: regulamento acessível via FAQ, não imposto como tela obrigatória

O usuário dá consentimento válido sem ter que ler 3 páginas antes de se cadastrar.

**2. Hierarquia visual de obrigatoriedade**

Campos obrigatórios por lei vs. dados opcionais têm tratamento visual distinto. O asterisco (*) e labels como "obrigatório" aparecem apenas onde necessário — reduzindo a percepção de que o formulário é mais exigente do que é.

**3. Consentimento como ação positiva, não bloqueio**

O checkbox não está no topo do formulário impedindo o início. Está no final, como um ato de afirmação do que o usuário já decidiu preencher. A sequência psicológica é: *"Já me cadastrei, agora estou confirmando que aceito os termos"* — muito mais conversível do que *"Aceite os termos antes de se cadastrar"*.

**4. A política de cookies como UX, não como banner**

O Cookie Manager documentado no CadastroMexico não é um banner de bloqueio genérico. É uma interface com categorias selecionáveis individualmente. Isso transforma uma obrigação legal em um momento de transparência que constrói confiança — uma vantagem competitiva, não apenas uma conformidade.

### 3.3 A gestão dos documentos legais no processo de design

O acervo documenta os documentos legais como artefatos de design, não como textos externos:

- `Quarta Revisão_ExperimenTABS_regulamento.doc` (Received/Listerine 2019) — o regulamento chegou como briefing, foi tratado como conteúdo de tela
- `J&J - CONT Mães e Filhos.pdf` (Feedback/2021) — conteúdo legal validado como parte do processo de aprovação
- `J&J_Devolutiva Ajustes - Conteudo.pdf` — feedback de ajustes de conteúdo, incluindo textos legais, integrado ao ciclo de revisão de design

Isso indica que o processo de design incluía **um lane de revisão jurídica paralelo ao lane de revisão visual** — os textos de política eram tratados como componentes editáveis, não como blocos de texto intocáveis.

---

## 4. Estrutura e Processo de Design

### 4.1 Do Received ao Spec: o pipeline metodológico

O acervo revela um pipeline sistemático que vai do briefing bruto à entrega implementável:

```
FASE 1 — INPUT
  └── Received/
       └── Briefing do cliente (DOC/PDF)
       └── Regulamento da promoção
       └── Brand guidelines (Playbook)
       └── Assets da marca (fontes, logos, KVs)

FASE 2 — TRABALHO
  └── work/ (ou sketch/)
       └── Arquivos nativos de design (Sketch/Figma)
       └── Exploração de soluções (não entregue ao cliente)

FASE 3 — WIREFRAMES E FLOWS
  └── entrega/v1_Wireframe/
       └── Fluxo de navegação (PDF)
       └── Wireframes de telas principais (PDF)
       └── Validação com cliente antes do design visual

FASE 4 — DESIGN VISUAL
  └── entrega/v1/ → v2/ → v3/
       └── Layouts em JPG/PNG (revisão do cliente)
       └── Iterações com feedback

FASE 5 — ESPECIFICAÇÃO TÉCNICA (Specs)
  └── entrega/v2/Specs/ ou 03_specs/
       └── specs_desk/ — HTML interativo por tela (desktop)
       └── specs_mobile/ — HTML interativo por tela (mobile)
       └── specs_email/ — HTML de templates de email
       └── specs_style-guide/ — Guia visual para desenvolvimento
       └── assets/ — SVGs e ícones exportados
```

O arquivo HTML de spec não é uma imagem — é um arquivo interativo com medidas, espaçamentos, cores em hex, fontes em px, e comportamentos documentados. É a "bíblia de implementação" para o desenvolvedor front-end.

### 4.2 POCs como validação técnica antes da entrega

A presença de POCs (Provas de Conceito) no acervo de 2022 revela uma prática que protege tanto o cliente quanto a agência:

- `162563_J&J_POC_Baby_Site/` — antes de desenvolver o site de Baby, um POC validou a arquitetura de experiência
- `171115_J&J_POC_FluxoTrocaEmail/` — antes de especificar o fluxo de troca de email para produção, um POC testou a lógica

A distinção entre POC e entrega final é estrutural: o POC tem menos versões, menos detalhamento de spec, e serve para validar *se a abordagem faz sentido* — não para implementação. O fato de ambos os POCs existirem paralelamente a projetos de entrega do mesmo período indica que o time trabalhava em duas velocidades: **exploração rápida** (POC) e **especificação rigorosa** (projeto formal).

### 4.3 Wireflows como artefato de alinhamento multidisciplinar

O projeto `138951_J&J_NovaEngine_Promos` tem dois wireflows documentados (`J&J_Promos-Wireflow.pdf` e `J&J_Promos-Wireflow_v2.pdf`). Isso não é redundância — é evolução de artefato.

Um wireflow combina wireframe (o que parece a tela) com flowchart (como as telas se conectam). É o artefato que:
- **Para o cliente:** mostra o fluxo completo antes de aprovar o visual
- **Para o jurídico:** permite revisar onde e como os termos são apresentados
- **Para o dev:** antecipa a lógica de navegação antes do design final
- **Para o PM:** mostra quais estados existem e quais decisões o sistema toma

A existência de duas versões do wireflow indica que houve feedback e iteração **antes** do design visual — o que é a prática correta, mas rara em agências focadas em output visual.

### 4.4 Versionamento agressivo como evidência de colaboração iterativa

O versionamento documentado no acervo revela o ritmo real de trabalho:

| Projeto | Versões | O que muda entre versões |
|---|---|---|
| Endometriose 2020 | v1–v9 | 9 ciclos de revisão com cliente |
| Pureza 2019 | v1–v4 | 4 versões de spec completa (36 telas cada) |
| Neutrogena 2022 | v1–v3 | v1: 57 telas, v2/v3: 44 telas revisadas |
| Sundown 2019 | v1–v7 | 7 iterações de design |

O que é notável não é a quantidade de versões — é a **completude de cada versão**. Não são ajustes parciais: cada versão é uma entrega completa (todas as telas, todos os assets). Isso indica que as revisões eram substanciais, não cosméticas, e que o cliente participava ativamente do processo.

### 4.5 IDs de ticket como rastreabilidade de projeto

A partir de 2022, todos os projetos têm IDs numéricos prefixando o nome:

```
138951_J&J_NovaEngine_Promos
159101_J&J_Maternidade_FluxoCupons
162563_J&J_POC_Baby_Site
171115_J&J_Maternidade_FluxoTrocaEmail
187734_J&J_MelhoriasLayout
188650_J&J_Neutrogena_LoginCadastro
188651_J&J_StyleGuide_Marcas
202188_J&J_LoginCadastro_Listerine
204318_J&J_Tylenol
214397_J&J_NeutrogenaMexico
218177_J&J_LoginCadastro_Neostrata
```

Esses IDs são referências a tickets de projeto em ferramentas de gestão (Jira, Asana, ou equivalente). O que isso implica metodologicamente:

1. **Cada projeto tem um registro formal de demanda** — origem, escopo, responsável, prazo
2. **O designer trabalha dentro de um sistema de rastreabilidade** — não apenas entrega arquivos, mas referencia demandas formais
3. **A sequência numérica revela cadência** — 138951 → 218177 em um mesmo ano indica alta frequência de demandas formais
4. **Auditoria retroativa é possível** — dado o ID, qualquer stakeholder consegue recuperar o contexto original da demanda

Isso transforma o acervo de "pasta de arquivos" em "log de trabalho auditável".

---

## 5. Síntese de Impacto — A Visão Unificada

### 5.1 Unificação de dados: a base de usuários como ativo estratégico

O objetivo mais profundo da engine não é a experiência de cadastro — é a **base de dados resultante**. Cada usuário que passa pelo fluxo, independentemente de qual marca o trouxe (Listerine, Neutrogena, ou Neostrata), tem seu perfil armazenado em um sistema de CRM unificado.

```
Usuário chega via promoção Listerine
  → cadastra: email, CPF, dados bucais
  → perfil no CRM: {marca_origem: Listerine, categoria: saúde_bucal}

Mesmo usuário participa de campanha Neutrogena
  → login com mesmas credenciais (engine unificada)
  → enriquecimento: {categoria_2: skincare, produto: protetor_solar}

Resultado no CRM:
  → perfil único com dados de duas categorias de produto
  → histórico de participação em campanhas
  → base para comunicação cross-marca personalizada
```

Uma base fragmentada (um registro Listerine + um registro Neutrogena para a mesma pessoa) tem valor limitado. Uma base unificada (um registro com histórico cross-marca) permite segmentações impossíveis de outra forma.

### 5.2 Eficiência operacional: o custo marginal de um novo lançamento

O impacto mais imediato da engine é econômico. Sem a engine:

```
Nova campanha = novo fluxo de login/cadastro
             = redesign de 36+ telas
             = nova spec desktop + mobile + email
             = novo processo de aprovação jurídica
             = novo ciclo de desenvolvimento
Custo: 100% do custo de produção
```

Com a engine:

```
Nova campanha = fork da engine
             = aplicação do Style Guide da nova marca
             = revisão dos textos e regulamento
             = aprovação jurídica apenas das partes novas
             = configuração, não desenvolvimento
Custo: ~20–30% do custo original
```

A prova está no acervo: `J&J_StyleGuide_Marcas` existe como projeto separado porque é exatamente a **camada variável** que muda quando a engine é aplicada a uma nova marca. É a formalização do conceito de "variáveis de contexto".

### 5.3 Redução de fricção entre marcas

Do ponto de vista do usuário que consome múltiplas marcas J&J (não raro no mercado de consumo), a engine unificada cria um efeito de familiaridade:

- O fluxo de cadastro da Neutrogena funciona igual ao da Listerine
- Se o usuário já criou uma conta em uma promoção Baby, pode usar as mesmas credenciais na próxima campanha Hipoglos
- A área logada tem a mesma lógica em qualquer marca — reduzindo o custo cognitivo de aprendizado

Isso é **transferência de confiança entre marcas** mediada por design — um efeito que nenhuma campanha isolada consegue produzir.

### 5.4 Internacionalização: México 2023 prova a portabilidade da engine

O projeto `214397_J&J_NeutrogenaMexico` e sua continuação `214397_CadastroMexico` em 2023 são a prova mais eloquente de que a engine é portável:

```
Engine original (Brasil, PT-BR)
  ↓ adaptação
CadastroMexico (México, ES)
  └── Mesma anatomia (00→16 telas)
  └── Mesmo fluxo de verificação de email
  └── Mesmo sistema de área logada
  └── Adaptação: idioma, regulamentação local, CCPA vs. LGPD
```

A internacionalização não exigiu redesenho — exigiu **parametrização**. Idioma, textos legais e contexto de marca foram as variáveis. A estrutura permaneceu intacta. Isso é a definição operacional de uma engine escalável.

### 5.5 Kenvue: a engine sobreviveu ao rebranding corporativo

Em 2023, a Johnson & Johnson concluiu o maior spin-off de sua história, separando as marcas de consumo (Listerine, Neutrogena, Band-Aid, etc.) em uma nova empresa chamada **Kenvue**. O projeto `234944_Kenvue_SaudeTodoDia` no acervo de 2023 documenta a continuidade do trabalho sob a nova entidade corporativa.

Uma engine frágil não sobrevive a um rebranding corporativo — o sistema seria descartado junto com a marca J&J Consumer. O fato de que a estrutura de trabalho continuou em Kenvue indica que a engine foi construída com independência suficiente de marca para sobreviver a uma mudança de identidade corporativa.

---

## 6. Linha do Tempo Consolidada

```
2019 ────────────────────────────────────────────────────────────────────
│  Campanhas isoladas  │  Cada projeto: login próprio, política própria
│  Ferramenta: Sketch  │  Versionamento: v1–v7
│                      │
│  Projetos:           │  Pureza (36 telas/v, 4v) | Listerine LP
│                      │  Adulto 48h | Sundown (7v) | Email Transacional
│
2020 ────────────────────────────────────────────────────────────────────
│  Hotsites educacionais │  Endometriose (9 versões — máximo de iter.)
│  Foco: conteúdo + CTA  │  Hipoglos | Baby | Livre
│
2021 ────────────────────────────────────────────────────────────────────
│  LABORATÓRIO DE FLUXO  │  CampanhaMaternidade: 1º wireframe+fluxo PDF
│  Primeiro wireflow     │  Hotsites: Listerine, Neutrogena, Maes&Filhos
│  Primeiro fluxo email  │  Confirmação de email como artefato separado
│
2022 ════════════════════════════════════════════════════════════════════
║  ENGINE — PIVÔ CENTRAL  ║  IDs de ticket formalizados
║  Sketch → Figma         ║  POCs antes de entregas formais
║                         ║
║  138951: NovaEngine Promos (wireflow v1/v2)
║  159101: Maternidade_FluxoCupons
║  162563: POC_Baby_Site
║  171115: FluxoTrocaEmail (POC + Maternidade)
║  188650: Neutrogena_LoginCadastro (v1: 57 telas, v2/v3: 44t)
║  202188: LoginCadastro_Listerine
║  218177: LoginCadastro_Neostrata
║  188651: StyleGuide_Marcas
║  J&J_DesignSystem_v1
║
2023 ────────────────────────────────────────────────────────────────────
│  Internacionalização   │  214397: CadastroMexico (engine em ES)
│  Rebranding corporativo│  234944: Kenvue_SaudeTodoDia (nova holding)
│  FluxoNovosProdutos    │  Engine sobrevive ao spin-off
```

---

## 7. Mapa de Competências — O que o acervo comprova

| Dimensão | Evidência direta | Nível |
|---|---|---|
| **Arquitetura de fluxo** | Engine com 16 estados + 5 emails, replicada em 3 marcas | Senior |
| **Cobertura de estados** | Estados A/B para cada bifurcação, 36+ telas por projeto | Senior |
| **Design system** | DesignSystem_v1 + StyleGuide_Marcas como projetos separados | Senior |
| **Compliance by design** | Checkbox consentimento, cookie manager, footer unificado | Senior |
| **Processo de entrega** | Received → Wireframe → v1–v3 → Specs HTML | Senior |
| **POC vs. entrega** | POCs separados de entregas formais para validação técnica | Senior |
| **Wireflow como artefato** | 2 versões de wireflow antes da entrega da engine | Senior |
| **Rastreabilidade** | IDs de ticket em todos os projetos 2022–2023 | Senior |
| **Internacionalização** | Engine adaptada para México sem redesenho | Senior |
| **Visão de sistema** | Mesma anatomia em Neutrogena, Listerine e Neostrata | Senior |
| **Email transacional** | 5 templates por implantação, incluindo alerta de segurança | Senior |
| **Iteração** | Até 9 versões (Endometriose), sempre entregas completas | Senior |

---

## Conclusão

O acervo J&J não conta a história de uma agência fazendo campanhas bonitas. Conta a história de uma equipe que **reconheceu um padrão repetitivo** (login/cadastro para cada campanha de cada marca), **formalizou esse padrão como sistema** (a engine de 2022), e o **aplicou com consistência suficiente para sobreviver a uma mudança de empresa** (o spin-off para Kenvue em 2023).

A transição de 2019 para 2022 não é apenas de qualidade visual — é de maturidade arquitetural. Em 2019, o problema era *"como desenhamos o cadastro para esta campanha?"*. Em 2022, o problema era *"como construímos um sistema que qualquer campanha possa usar?"*.

Essa diferença — entre resolver um problema e arquitetar uma solução — é o que define a fronteira entre execução de design e liderança de design.

---

*Documento gerado em 2026-04-13 a partir da análise direta do acervo J&J (Mirum, 2019–2023).*
*Fontes: estrutura de diretórios (1.770 pastas, ~18.000 arquivos), nomenclatura de arquivos, specs HTML, wireframes, wireflows em PDF, arquivos de design Sketch/Figma.*
*Marcas analisadas: Listerine, Johnson's Baby, Neutrogena, Hipoglos, Pureza, Sundown, Tylenol, Neostrata, Kenvue.*
