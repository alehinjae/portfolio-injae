# Estudos de Leitura dos Projetos em Figma sob a Ótica de Product Design

## Objetivo

Este documento reconstrói, a partir dos arquivos em Figma e FigJam fornecidos, quais tipos de projeto, fluxo, processo e impacto de produto você provavelmente conduziu como Product Designer.

O foco aqui não é apenas descrever telas. A proposta é interpretar cada artefato como evidência de trabalho de produto: qual problema estava sendo atacado, que jornada foi desenhada, quais decisões de UX e negócio precisaram ser acomodadas e que impacto isso tende a gerar.

## Nota metodológica

Esta análise mistura dois níveis de leitura:

- Evidência direta: o que aparece claramente em telas, wireflows, boards, copy, estados, componentes e anotações.
- Inferência de Product Design: o que um especialista concluiria como trabalho provável a partir desses artefatos.

Sempre que uma inferência for feita, ela deve ser lida como "muito provável", e não como afirmação absoluta sobre o processo real.

Também há arquivos que parecem ser cópias, variações de marca ou capas sem conteúdo suficiente para análise profunda. Nesses casos, a leitura foi consolidada por cluster de projeto.

## Panorama Geral

O conjunto dos arquivos sugere um repertório forte em seis frentes:

1. Campanhas digitais com alto grau de fluxo, cadastro, login, área logada e relacionamento contínuo.
2. Estruturação de engines reutilizáveis para múltiplas marcas, especialmente em autenticação, consentimento e CRM.
3. Sites institucionais e narrativas de marca com viés de confiança, reputação e prova social.
4. Design systems, bibliotecas, tokens, grids e governança visual com preocupação explícita com acessibilidade.
5. Páginas de aquisição e jornadas de conversão para produtos digitais e marketing B2B.
6. Descoberta, debriefing e estruturação de arquitetura de informação antes da interface final.

## 1. Programa Johnson's / J&J Maternidade

### Evidências observadas

Os arquivos `Johnson's - Hotsite Maternidade`, `Campanha de Maternidade J&J`, `Fluxo - Campanha de Maternidade J-J`, `Johnson's Maternidade Wireflow`, `J-J Baby Site - Wireflow (POC)` e `Wireframe - J-J Maternidade` formam um mesmo programa de produto.

Há evidência clara de:

- landing page pública de campanha;
- cadastro e login;
- recuperação de senha;
- confirmação e validação de e-mail;
- coleta progressiva de dados da usuária e do bebê;
- preferências de campanhas;
- área logada;
- páginas de agradecimento;
- e-mails transacionais;
- lógica de continuidade para futuras campanhas.

Nos boards aparecem ainda anotações estratégicas importantes: proposta de uma nova engine, dúvidas sobre reuso entre campanhas, preocupações com qualidade dos dados, validação por SMS, regras de participação, LGPD, benefícios para a usuária e relação entre conteúdo, produto, cupom, kit e cadastro.

### Leitura de Product Design

Este não parece ser apenas um hotsite promocional. O material sugere a concepção de um ecossistema de aquisição e relacionamento, no qual a campanha funciona como porta de entrada para um vínculo mais longo com a marca.

Do ponto de vista de Product Design, você provavelmente teve que desenhar:

- a jornada de entrada da usuária, equilibrando valor percebido e fricção de cadastro;
- a progressão do onboarding, definindo o que pedir em cada etapa;
- a arquitetura entre conteúdo, campanha, identidade da marca e área autenticada;
- os estados críticos do fluxo, como erro, validação, senha, confirmação e retorno;
- a lógica de continuidade, para que a experiência não terminasse no primeiro acesso.

### Fluxos que você provavelmente desenvolveu

- descoberta da campanha até cadastro;
- login de usuária já existente;
- recuperação e redefinição de senha;
- confirmação de e-mail;
- enriquecimento cadastral;
- coleta de dados do bebê e perfil da usuária;
- seleção de interesses e preferências;
- acesso à área logada e acompanhamento de benefícios ou campanhas;
- recebimento de e-mails de suporte ao fluxo.

### Processos de design sugeridos pelos artefatos

- mapeamento do fluxo atual e do fluxo futuro;
- estruturação de wireflows antes da UI final;
- uso de proto-persona para orientar linguagem e valor da proposta;
- alinhamento entre experiência, CRM, dados e restrições legais;
- exploração de engine reutilizável em vez de solução isolada;
- detalhamento de edge cases e estados transacionais.

### Impacto de produto que esse trabalho tende a ter

- aumento de conversão de cadastro;
- melhoria da qualidade dos dados coletados;
- redução de abandono em etapas críticas;
- fortalecimento de retenção e recorrência em campanhas;
- menor dependência de iniciativas avulsas, graças à lógica de engine;
- melhor conexão entre aquisição, relacionamento e CRM.

### O que isso revela do seu repertório

Esse cluster sugere capacidade de atuar além da interface. Há sinais de raciocínio de serviço, jornada, engine, dado, regra de negócio e continuidade de relacionamento. É um tipo de atuação muito próximo de Product Design com forte interface com marketing, CRM, tecnologia e operação.

## 2. Engine de Login, Cadastro e Área Logada para múltiplas marcas

### Evidências observadas

Os arquivos `LoginCadastro_Neutrogena_J-J`, `Tylenol_LoginCadastro`, `218177_LoginCadastro_Neostrata_J-J` e variações próximas mostram uma mesma família de solução adaptada para marcas diferentes.

Há recorrência de:

- cadastro desktop e mobile;
- regras explícitas de senha;
- aceite de políticas e comunicações;
- login;
- recuperação de senha;
- alteração de e-mail;
- alteração de senha;
- e-mails de confirmação;
- estados de sucesso, erro e conta verificada;
- área logada com dados pessoais.

### Leitura de Product Design

Aqui o principal valor não está na criação de uma tela isolada, mas na padronização de uma capability de produto: autenticação e gestão de conta como infraestrutura reaproveitável entre marcas.

Isso sugere que você provavelmente trabalhou em:

- normalização de regras de autenticação;
- compatibilização entre branding e consistência de fluxo;
- desenho de consentimento e comunicação com atenção regulatória;
- modelagem de estados para reduzir suporte e erro operacional;
- criação de uma base escalável para futuras campanhas e programas.

### Fluxos que você provavelmente desenvolveu

- cadastro de novo usuário;
- login de recorrência;
- recuperação de acesso;
- confirmação e troca de e-mail;
- alteração de senha em área autenticada;
- gestão de dados cadastrais;
- tratamento de validações e mensagens de feedback.

### Processos de design sugeridos

- transformação de um fluxo em padrão replicável;
- adaptação de um mesmo backbone para marcas com diferenças de linguagem;
- desenho de formulários orientados a completude e conformidade;
- especificação de estados para handoff consistente;
- organização de e-mails e interações cross-channel como parte da experiência.

### Impacto potencial

- consistência de experiência entre marcas;
- diminuição de retrabalho de produto e desenvolvimento;
- melhoria de conversão em cadastro e retorno;
- redução de tickets ligados a acesso e credenciais;
- base mais sólida para CRM e personalização.

### O que isso revela do seu repertório

Esse grupo aponta para um pensamento de plataforma. Em vez de resolver apenas a interface de cada campanha, você parece ter trabalhado a experiência como sistema reutilizável, o que é um marcador importante de maturidade em Product Design.

## 3. Vivaz / Instituto Cyrela: site institucional e narrativa de impacto

### Evidências observadas

Os arquivos `Vivaz - Site Cyrela Institucional` e `179923_Vivaz_Site_InstitutoCyrela` mostram um site centrado em narrativa institucional, impacto social e prova de marca.

A estrutura observada inclui:

- hero institucional;
- storytelling sobre transformação social;
- apresentação de iniciativas e ações;
- vídeo e conteúdo editorial;
- presença em diferentes regiões;
- prova de atuação concreta;
- reforço de marca e reputação.

### Leitura de Product Design

Este projeto parece menos voltado a "transação imediata" e mais a construção de confiança, legitimidade e percepção de valor institucional.

Do ponto de vista de Product Design, isso sugere trabalho em:

- arquitetura de informação para narrativa institucional;
- hierarquia entre propósito, ações e prova;
- desenho de páginas orientadas a credibilidade;
- equilíbrio entre branding, conteúdo e clareza;
- tradução de uma agenda social em experiência digital compreensível.

### Fluxos que você provavelmente desenvolveu

- entrada no site e compreensão rápida da proposta institucional;
- navegação por iniciativas e ações;
- aprofundamento em conteúdo e prova;
- consumo de mídia e conteúdo rico;
- conexão entre marca, projeto social e percepção de impacto.

### Processos de design sugeridos

- síntese de conteúdo institucional para linguagem digital;
- definição de hierarquia editorial;
- desenho de módulos reutilizáveis para páginas de conteúdo;
- alinhamento entre marketing, marca e experiência.

### Impacto potencial

- fortalecimento de reputação;
- aumento de confiança e afinidade com a marca;
- melhor entendimento público da atuação social;
- base mais consistente para comunicação institucional e ESG.

### O que isso revela do seu repertório

Esse material mostra habilidade para trabalhar em produtos de conteúdo e marca, não apenas fluxos utilitários. Há sensibilidade para narrativa, clareza, credibilidade e construção de percepção.

## 4. Pin-it Library e Mirum Design: design system, acessibilidade e governança

### Evidências observadas

Os arquivos `Pin-it - Layout - Library` e `MIRUM-DESIGN` possuem sinais muito claros de trabalho estrutural de design system.

Entre as evidências mais fortes estão:

- documentação de cores da marca;
- tokens e escalas;
- tipografia;
- grids e breakpoints para desktop, tablet e mobile;
- orientações de uso e não uso;
- padrões de componentes;
- inventário visual;
- referências explícitas a WCAG e critérios de acessibilidade.

### Leitura de Product Design

Esse trabalho sugere atuação em design ops e fundações de produto, não apenas entrega de interface final. O objetivo aparente era criar consistência, escalabilidade, previsibilidade e melhor qualidade de implementação.

Você provavelmente precisou desenvolver:

- sistema de regras para uso repetível em múltiplos projetos;
- estrutura responsiva com racional claro;
- documentação para tomada de decisão por outros designers e devs;
- critérios de acessibilidade incorporados à base do sistema;
- governança visual para evitar desvios e retrabalho.

### Fluxos e processos que esse tipo de projeto implica

- definição de foundations antes de telas finais;
- organização de bibliotecas compartilhadas;
- sistematização de grids e comportamento responsivo;
- padronização de componentes e estados;
- formalização de diretrizes de contraste, espaçamento e legibilidade;
- apoio ao handoff e à manutenção ao longo do tempo.

### Impacto potencial

- aceleração de produção de telas;
- maior consistência entre produtos;
- redução de inconsistência visual e técnica;
- melhoria de acessibilidade;
- base mais forte para evolução contínua do ecossistema digital.

### O que isso revela do seu repertório

Esse grupo é um marcador forte de senioridade. Design system bem estruturado costuma exigir visão sistêmica, negociação entre squads ou clientes, domínio de padrões e capacidade de transformar conhecimento tácito em regra explícita.

## 5. Magrathea: landing page e ecossistema de aquisição B2B

### Evidências observadas

Embora o arquivo esteja nomeado como `Portifólio`, o conteúdo observado se refere a um projeto `Magrathea`, com landing page extensa e peças de e-mail marketing associadas.

As telas indicam:

- proposta de valor de produto digital ligado a dados;
- narrativa de benefício para marketing e analistas;
- explicação de conectores e integração;
- prova tecnológica;
- seções de pricing, suporte e formulário;
- e-mails de relacionamento e ativação.

### Leitura de Product Design

Esse projeto sugere um trabalho de aquisição e educação de mercado para produto digital mais complexo, possivelmente B2B ou tech-enabled.

Aqui você provavelmente atuou em:

- tradução de proposta técnica em linguagem de valor;
- construção de uma landing page orientada a entendimento e conversão;
- segmentação de mensagens para públicos distintos;
- integração entre página principal e comunicações de e-mail;
- redução da carga cognitiva de um produto potencialmente abstrato.

### Fluxos que você provavelmente desenvolveu

- descoberta do produto;
- entendimento da proposta de valor;
- comparação implícita de capacidades;
- consideração comercial;
- captação de lead ou contato;
- continuidade via e-mail marketing.

### Processos de design sugeridos

- síntese de produto complexo em narrativa simples;
- trabalho conjunto com marketing e negócio;
- organização de blocos de prova, benefício e CTA;
- desenho de funil com pontos de continuidade fora da landing page.

### Impacto potencial

- aumento de clareza sobre o produto;
- melhor taxa de conversão de leads;
- reforço de confiança em solução técnica complexa;
- alinhamento entre branding, marketing e produto.

### O que isso revela do seu repertório

Esse projeto sugere versatilidade. Você não aparece apenas em fluxos operacionais, mas também em contextos de proposta de valor, posicionamento e conversão para produto mais sofisticado.

## 6. Intelbras: debriefing, arquitetura de informação e definição de escopo

### Evidências observadas

O arquivo `Intelbras` mostra um artefato muito diferente dos demais: um canvas de debriefing com perguntas, hipóteses, estrutura de página e decisões ainda em aberto.

As anotações indicam preocupações como:

- escopo real da página;
- necessidade ou não de páginas complementares;
- categorias e cards;
- segmentação por públicos;
- comportamento esperado da navegação;
- possíveis abas ou formas de organizar soluções;
- leitura de níveis de solução como essencial, intermediária, avançada e customizada.

### Leitura de Product Design

Esse material aponta fortemente para trabalho de descoberta e framing do problema antes da solução visual. Em vez de só produzir tela, você estava ajudando a estruturar a pergunta certa.

Isso sugere atuação em:

- debriefing com cliente ou stakeholder;
- mapeamento de incertezas;
- definição de arquitetura de informação;
- estruturação de oferta e taxonomia;
- antecipação de decisões que impactariam conteúdo, navegação e escopo.

### Fluxos e processos que esse projeto sugere

- investigação do modelo mental do negócio;
- organização inicial da informação;
- exploração de alternativas de navegação;
- alinhamento de expectativa antes da interface final;
- documentação de hipóteses e gaps.

### Impacto potencial

- redução de retrabalho em etapas posteriores;
- melhor definição do que realmente precisa ser desenhado;
- ganho de clareza para negócio e time;
- maior coerência entre conteúdo, solução e navegação.

### O que isso revela do seu repertório

Esse arquivo é importante porque mostra raciocínio estratégico. Ele evidencia uma atuação que antecede a UI e reforça um perfil de Product Designer que ajuda a dar forma ao problema, e não apenas à interface.

## Leitura consolidada do seu repertório como Product Designer

O conjunto total dos arquivos sugere um perfil com as seguintes forças:

- forte domínio de fluxos complexos de entrada, autenticação e continuidade;
- capacidade de ligar campanha, CRM, conteúdo e área logada em uma mesma jornada;
- pensamento sistêmico e reutilizável, com sinais de engine e plataforma;
- competência em design system, responsividade e acessibilidade;
- habilidade para trabalhar tanto em narrativa institucional quanto em conversão;
- maturidade em discovery, framing e estruturação de escopo;
- atenção a estados, regras, validações e dependências cross-functional.

Em termos de senioridade, os arquivos sinalizam alguém que não atua apenas no layer visual. Há muitos indícios de trabalho em:

- definição de fluxo;
- arquitetura de informação;
- priorização de etapas;
- mediação entre necessidade do usuário e restrição do negócio;
- desenho de sistemas reutilizáveis;
- alinhamento entre interface e operação.

## Arquivos com leitura parcial, duplicada ou sem evidência suficiente

Alguns links não renderam material suficiente para um estudo profundo isolado:

- `Vivaz - Melhorias Site Acessibilidade`: o arquivo não retornou um nó analisável na inspeção técnica.
- `J-J_Campanha21Dias` e `J-J_Campanha21Dias_LISTERINE`: em alguns links só foi possível visualizar capa ou estrutura muito superficial.
- algumas versões com sufixo `Copy` parecem duplicar projetos já analisados ou representar snapshots intermediários.

Isso não reduz o valor do conjunto. Pelo contrário: reforça a leitura de que havia programas maiores com múltiplas iterações, marcas derivadas e reaproveitamento estrutural entre entregas.

## Conclusão

Se eu tivesse que sintetizar sua atuação a partir desses Figma files, eu diria o seguinte:

Você não aparece apenas como alguém que desenha telas. Você aparece como uma Product Designer que estrutura jornadas, organiza regras, transforma campanhas em sistemas, aproxima comunicação de negócio da experiência real e cria base para escala.

Os projetos mais fortes do conjunto sugerem três eixos de maturidade:

- design de fluxos complexos com visão de ciclo de vida;
- design sistêmico com reutilização e governança;
- discovery e enquadramento estratégico do problema antes da interface final.

Em linguagem de portfólio, a melhor leitura não seria "fiz telas para campanhas e sites". A melhor leitura seria: você desenhou experiências digitais que conectam aquisição, relacionamento, estrutura operacional e consistência de produto.
