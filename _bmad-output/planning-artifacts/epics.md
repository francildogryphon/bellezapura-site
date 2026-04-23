---
stepsCompleted: ['step-01-validate-prerequisites', 'step-02-design-epics', 'step-03-create-stories', 'step-04-final-validation']
inputDocuments:
  - 'c:\Dev\bellezapura-site\_bmad-output\planning-artifacts\prd.md'
  - 'c:\Dev\bellezapura-site\_bmad-output\planning-artifacts\architecture.md'
  - 'c:\Dev\bellezapura-site\_bmad-output\planning-artifacts\ux-design-specification.md'
---

# bellezapura-site - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for bellezapura-site, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

FR01: O Visitante pode visualizar os anos de fundação e tradição da academia.
FR02: O Visitante pode investigar a infraestrutura médica acessória da academia.
FR03: O Visitante pode visualizar o selo de padronização acadêmica dos professores.
FR04: O Visitante pode confirmar parcerias ativas (Wellhub/TotalPass).
FR05: O Visitante inspeciona tabela de preços explícitos fixados para categorias padronizadas de giros rápidos (Musculação).
FR06: O Visitante acessa listagem de portfólio restritivo (Aulas Aquáticas, Lutas) sem exibição transparente de tickets para instigação intencional dos canais comerciais.
FR07: O Visitante internaliza leituras orgânicas de argumentação focadas por arquétipo (Muay Thai Adulto VS Infantil, ex: "Secar" versus "Desenvolvimento Motor").
FR08: O Visitante interage em módulo progressivo de inputs fornecendo pontos orgânicos de dores/necessidades (Calculadora de Dor).
FR09: O Sistema calcula e dispõe modalidades indicadas casadas com os inputs submetidos ativamente pela interface prévia.
FR10: O Sistema atrelará essas sugestões à APIs invisíveis parametrizando chamadas orgânicas do URL WhatsApp.
FR11: A Interface preserva renderização permanente atrelada à tela visual local (Viewport) de botões conversivos principais ("CTA Sticky").
FR12: O Sistema fornece ancoramento via URLs diretas ou esquemas Deep-link abertos aos protocolos instalados da Meta Platforms.
FR13: Os despachos conversivos carregam pré-textos montados automaticamente pelas funções contendo contextos.
FR14: O Sistema projeta horários filtrados atrelados às tabelas extraídas do armazenamento Google Cloud integrados visualmente.
FR15: O Sistema injeta rótulos limitantes vermelhos de "Vagas Escassas" condicionado à extração nativa de regras preestabelecidas.
FR16: Administradores autorizados suprimem visualizações de grade online formatando valores nas planilhas conectadas.
FR17: Administradores delimitam em colunas separadas as quantidades mínimas necessárias de discentes para o acionamento em UI do limitador (FR15).
FR18: O Visitante ativa recolhimentos assíncronos da área de Objeções Primitivas localizadas na FAQ.
FR19: Injeção visual inalterada para endereços orgânicos acoplados com navegação sob bibliotecas/iFrames dos domínios Google Maps.
FR20: Acoplamento com janelas passivas estáticas informadoras sobre conformidade dos Termos Base (LGPD Brasileira).
FR21: Leitura visual (Rodapé Fixado) confirmando ativamente razão societária, CNPJ e endereçamento da empresa.
FR22 (novo): O Visitante interage com elementos e CTAs visualizando o slogan "A queridinha da Cidade 2000" e "Não cobramos taxa de matrícula".
FR23 (novo): O Visitante visualiza ícones linkados que fluem o público-alvo para as redes sociais (Facebook, Instagram) e vice-versa, prevendo futuras integrações (Meta Threads e TikTok).
FR24 (novo): O Visitante, ao interagir com fluxos de turmas esgotadas ou de pré-lançamento (teste de interesse), é engatilhado para cair numa "Lista de Espera" e avisado de que a transição de contato reflete um posicionamento oficial na reserva.

### NonFunctional Requirements

NFR01: O Largest Contentful Paint (LCP) das interfaces entregues pelo framework não excederá 2.5s em conexões móveis empobrecidas.
NFR02: Google Lighthouse Mobile Performance Mode igual ou superior à 90/100 pontos.
NFR03: O peso original compactado de primeiro contato obedece à curva tolerada de < 700 KB (Princípios GSF).
NFR04: Regulação visual atende fielmente WCAG 2.1 - AA (garantindo contraste luz sob dark theme, especialmente útil para Melhor Idade).
NFR05: Componentes pictóricos com injeção automática nativa de atributos HTML ALT.
NFR06: Ciclo de deployment imperativo (Edge via Cloudflare Pages) reflete Google Sheets em menos de 180s.
NFR07: Resposta física de UI para requisições de gatilhos (urls tel/wa.me) cravados em < 300ms prevenindo impressão de atraso local.
NFR08: A interface dispõe de redutor de atrito fraudulento para spam-bots no direcionador do WhatsApp.
NFR09: Graceful Degradation / Falha Segura. Perturbações do Sheets Server desativam badges limitantes mas deixam o UI de agendamento estável. Teto invisível de fallbacks para evitar mensagens explícitas de erro.
NFR10: Uptime do servidor garantido com SLA 99.9%.

### Additional Requirements

- O projeto exige a inicialização rigorosa baseada no Starter Template "Astro CLI" usando a via `minimal` aliado a `tailwind` e `cloudflare`. Inicialização na Epic 1, Story 1 é OBRIGATÓRIA usando: `npm create astro@latest bellezapura-site -- --template minimal` e `npx astro add tailwind cloudflare --yes`.
- Adição da dependência `Playwright` na estruturação do setup (Epic 1 / Story 1) para Testes CI Automáticos e End-to-End validando engatilhos de escassez sem ferir a leveza da base.
- Toda lógica arquitetural usa um limite claro: fetch das planilhas e scripts lógicos do CMS rodam em "Server Edge SWR" (Astro SSR - utils/sheetsParser.ts cache por 10min) preservando os princípios zero-runtime no lado do cliente.
- Arquitetura repudia veementemente CSS in JS, arquivos CSS dispersos, bibliotecas React/Redux e pacotes pesados; manipulando interatividade do Quiz via JavaScript Vanilla (DOM Native) integrado ao HTML.
- Obrigatório ordenação unificada de classes usando auto-preenchimento do *prettier-plugin-tailwindcss*.

### UX Design Requirements

UX-DR1: Desenvolver o sistema Visual Fundacional temático "Premium Dark Mode": Marinho (Navy Deep #1E3A8A) para background, amarelo maciço (Sun Energy Yellow #FCD34D) em CTAs, carmim de atenção em labels urgentes (Crimson #DC2626). 
UX-DR2: Tipografia composta pela fonte moderna geométrica (Outfit) nos Headers (H1, H2) e fonte web ágil (Inter ou Roboto) para conteúdo de corpo e parágrafos.
UX-DR3: Abandono completo de tabelas e grids pesados. Exigência do padrão "Progressive Disclosure": Accordions/Sanfonas devem ser desenvolvidos para mostrar a grade expandindo apenas os blocos focais ativados por tap.
UX-DR4: O Funil Secundário "Quiz Reativo" deve adotar "One-Tap Choice Pills" com hitboxes >= 56px de preenchimento mínimo operados integralmente sem intervenção de subidas do teclado (keyboard popup) pelo OS do celular do cliente.
UX-DR5: Inject "Scarcity Badge" autênticos de turmas de modo charmoso sem agressividade predatória (Urgência Suave e Elegante, Padrão Airbnb).
UX-DR6: Construir Componentes Sticky/Escape Hatch como header superior aderente para voltar velozmente ao início da navegação e evitar rolagem reversa infinita.
UX-DR7: Construir Fallback Visual Elegante para lidar com a omissão da comunicação Edge caso algo interrompa os dados.
UX-DR8 (novo): Construção de layout adaptável que enfatiza elementos físicos, informações de parceiros (TotalPass/Wellhub) e a imponente integração social orgânica para transbordar a curiosidade de audiência do Site às mídias sociais corporativas.

### FR Coverage Map

FR01: Epic 1 - Visualização dos anos de tradição.
FR02: Epic 1 - Exibição da infraestrutura (piscina/médica).
FR03: Epic 1 - Selo de padronização acadêmica visível.
FR04: Epic 1 - Confirmação visual de parceiros Wellhub e TotalPass.
FR05: Epic 2 - Tabela transparente de musculação.
FR06: Epic 2 - Lista sanfonada de portfólio restritivo (Lutas/Piscinas).
FR07: Epic 2 - Copywriting focado em dores nas vitrines de aula.
FR08: Epic 3 - Pílulas táteis do Quiz para indicar dor atual.
FR09: Epic 3 - Calculadora revela a modalidade baseada nos inputs do Quiz.
FR10: Epic 3 - O resultado engatilha a carga do link pro CTA.
FR11: Epic 4 - O CTA primário de conversão ao fim do funil ou sticky.
FR12: Epic 4 - Estruturação dos Deep Links abrindo o WhatsApp nativo.
FR13: Epic 4 - Pré-preenchimento automático da mensagem baseada no Quiz/Grade.
FR14: Epic 2 - Carregamento do HTML com horários das tabelas do servidor.
FR15: Epic 5 - Badge estético de "Vagas Escassas" ativo nos cards.
FR16: Epic 5 - Supressão via painel invisível via Sheets (se apagado, some do app).
FR17: Epic 5 - Regra de limiar mínimo para ativar badge limitador (ex: só liga se < 3 vagas).
FR18: Epic 1 - FAQ interativo reduzindo de fricção primária.
FR19: Epic 1 - Google Maps Footer e Embed.
FR20: Epic 1 - Avisos LGPD estáticos base.
FR21: Epic 1 - Assinatura Footer (Razão Social).
FR22: Epic 1 - Destaque de slogan 2000 e Matrícula Grátis.
FR23: Epic 1 - Direcionadores orgânicos para Redes Sociais.
FR24: Epic 4 - Fluxo alternativo "Lista de Espera" quando produto na planilha estiver esgotado.

## Epic List

### Epic 1: Fundação Digital & Autoridade Institucional
O visitante instantaneamente é impactado pela escala e tradição (+30 anos) e entende que encontrou um ambiente completo. Ele explora sua navegação através de parcerias corporativas, tira dúvidas e conecta com redes externas em uma plataforma ultra-veloz.
**FRs covered:** FR01, FR02, FR03, FR04, FR18, FR19, FR20, FR21, FR22, FR23

### Epic 2: Catálogo de Modalidades Progressivo e Híbrido
O visitante analisa o preçário direto e transparente da Musculação e as vitrines em sanfona de Aulas e Lutas, consumindo textos amparados aos seus arquétipos emocionais (Dor de Mãe x Dor Executiva) sem sentir claustrofobia visual.
**FRs covered:** FR05, FR06, FR07, FR14

### Epic 3: Geração Rápida de Demanda via Calculadora (Quiz)
O Visitante é conduzido a descobrir a modalidade ideal tocando botões confortáveis que reagem as suas dores reais, recebendo sua prescrição sugerida sem nunca precisar utilizar formulários manuais do teclado.
**FRs covered:** FR08, FR09, FR10

### Epic 4: Motor Web-to-WhatsApp Flow e Lista de Espera
O Visitante faz um contato humano imediato, recebendo o conforto do "WhatsApp Pré-Digitado" atrelado à categoria que pesquisa. Caso haja escassez em uma turma super exclusiva, ele se qualifica entrando positivamente numa "Lista de Regresso/Espera".
**FRs covered:** FR11, FR12, FR13, FR24

### Epic 5: Urgência e CMS Dinâmico Zero-Code (Google Sheets SWR)
Os administradores regulam com familiaridade o volume de vagas e disponibilidade de agendas das turmas via Google Sheets e o usuário da ponta é arrebatado por gatilhos autênticos ativados na cor vermelha ("Só Restam 2 Vagas") sem intervenção humana no código fonte.
**FRs covered:** FR15, FR16, FR17

## Epic 1: Fundação Digital & Autoridade Institucional

O visitante instantaneamente é impactado pela escala e tradição (+30 anos) e entende que encontrou um ambiente completo. Ele explora sua navegação através de parcerias corporativas, tira dúvidas e conecta com redes externas em uma plataforma ultra-veloz.

### Story 1.1: Inicialização do Repositório e Design Tokens (Setup Arquitetural)

As a Engenheiro de Sistema B2C,
I want iniciar a raiz do projeto Astro Minimal e estabelecer os tokens visuais,
So that o desenvolvimento de componentes respeite os rigores de performance da Cloudflare, limites GSF e fidelidade ao Premium Dark Theme.

**Acceptance Criteria:**

**Given** um ambiente de desenvolvimento vazio.
**When** eu insiro o comando nativo Astro `minimal`.
**Then** o vite compila os pacotes Tailwind, Cloudflare adapter e Playwright para e2e, e o `tailwind.config.mjs` espelha as cores padronizadas (Navy Deep #1E3A8A, Sun Yellow #FCD34D, Crimson #DC2626).
**And** é garantida a fundação leve para LCP < 2.5s.

### Story 1.2: Construção da Base de Confiança do Rodapé e Localização

As a Visitante de site acadêmico de bairro,
I want identificar facilmente a segurança governamental (LGPD, CNPJ) e o pinhole no Maps,
So that saiba que se trata de uma corporação física registrada e segura para visita e compra.

**Acceptance Criteria:**

**Given** o layout base operando.
**When** eu navego pelas sessões inferiores.
**Then** eu visualizo informações estáticas LGPD baseadas em cookies passivos e Razão Social validada (FR20, FR21).
**And** visualizo um iFrame inalterado para o Google Maps em sub-sessões específicas sem travar a thread na carga inicial (FR19).

### Story 1.3: Seção Hero e Quebra Gelo Institucional (+30 Anos e Slogan)

As a "Mãe/Executivo" em busca de soluções físicas,
I want ser recebido por alto impacto visual da tradição da marca e seus benefícios,
So that preconceitos com "academias simples de bairro" caiam logo no 1º segundo (LCP).

**Acceptance Criteria:**

**Given** o render inicial da página.
**When** eu olho a seção acima da dobra.
**Then** devo consumir (HeroHeader) imagens otimizadas da infraestrutura aquática/médica e os 30 anos (FR01, FR02).
**And** o aviso central de "Não cobramos taxa de matrícula", selos acadêmicos (FR03) e slogan "A queridinha da Cidade 2000" (FR22) devem estar com altíssimo contraste (WCAG AA).

### Story 1.4: Integração de Parceiros Corporativos e Redes Sociais

As a Usuário de rotina web dinâmica,
I want ancoragens visuais dinâmicas confirmando chancelas,
So that haja fluxo visual entre minhas redes e facilidade do TotalPass/Wellhub.

**Acceptance Criteria:**

**Given** a página central rolável de autoridade.
**When** eu procuro aprovação corporativa B2B.
**Then** devo ver selos do TotalPass e Wellhub com consistência modular (FR04).
**And** devo localizar hiperlinks orgânicos apontando para ícones de Meta Apps e TikTok impulsionando o canal social corporativo (FR23).

### Story 1.5: FAQ e Abordagem de Objeções Primitivas

As a Visitante desconfiado sobre infraestruturas,
I want encontrar respostas rápidas sanfonadas para perguntas repetitivas de vestiário e rotina,
So that exista redução de fricção e tempo perdido ao chegar no atendente comercial.

**Acceptance Criteria:**

**Given** restrições corriqueiras em academias comuns apontando dúvidas base.
**When** eu toco num FAQ element base para questionar a "Objeção Primitiva".
**Then** o container expõe dados sem recarregar a tela (FR18).
**And** ele opera nativamente sobre JS/Tailwind sem pesar mais que a tolerância global (Princípio UX Híbrido).

## Epic 2: Catálogo de Modalidades Progressivo e Híbrido

O visitante analisa o preçário direto e transparente da Musculação e as vitrines em sanfona de Aulas e Lutas, consumindo textos amparados aos seus arquétipos emocionais (Dor de Mãe x Dor Executiva) sem sentir claustrofobia visual.

### Story 2.1: Desenvolvimento da Vitrine Transparente B2C (Musculação)

As a Visitante focado em exercícios de giro rápido,
I want visualizar o preçário fixado explícito de musculação sem obstáculos,
So that eu compreenda rapidamente a tabela padrão base e perceba transparência operacional.

**Acceptance Criteria:**

**Given** a descida orgânica do visitante pelo layout principal.
**When** eu acessar a linha divisória de ofertas primárias.
**Then** eu visualizo a estrutura isolada de pacotes mensais e anuais apenas para Musculação (FR05).
**And** este bloco deve possuir CTAs que encaminham à conversão direta de venda "Quero treinar hoje".

### Story 2.2: Construção da Grade em Sanfona Oculta (Aulas e Lutas)

As a Visitante de modalidade específica (Aulas Aquáticas/Lutas),
I want selecionar abas sanfonadas (Accordions) evitando planilhões gigantes de horários,
So that inspecione as minhas modalidades sem que dados irrelevantes esmaguem minha tela mobile.

**Acceptance Criteria:**

**Given** o catálogo restritivo do portfólio.
**When** eu interajo com a aba (pill/card) tocando para expandir uma categoria com o polegar.
**Then** a interface abre e fecha suavemente em "Sanfona", revelando a disciplina restrita sem recarregar o sistema.
**And** os preços dessas sessões estritas de maior valor são intencionalmente omitidos ou ofuscados, exigindo contato futuro (FR06).

### Story 2.3: Injeção de Copywriting Estratégico por Arquétipo

As a Visitante lendo a grade sanfonada,
I want internalizar resumos dinâmicos focados na minha dor emocional,
So that eu sinta que a academia resolve minha aflição real.

**Acceptance Criteria:**

**Given** os elementos de sanfona abertos na tela.
**When** eu passar os olhos nos blocos descritivos.
**Then** devo ler copies injetados que alinhem exatamente a modalidade a um arquétipo de dor (FR07).
**And** nenhuma linha explodirá os limites seguros de conforto visual por excesso textual prolongado.

### Story 2.4: Renderização Orgânica de Horários (Edge SSR)

As a Engenheiro de Dados Frontend,
I want que o Astro requisite no servidor a última atualização da grade tabelada da Academia,
So that a interface tátil exiba os horários reais mais recentes sem colocar 1 byte extra no celular do visitante.

**Acceptance Criteria:**

**Given** o processo de carga das sanfonas e tabelas nas sessões do Epic 2.
**When** o Astro Edge compilar essas subpartes para HTML.
**Then** o sistema deve realizar bind visual dos horários (FR14) extraídos da API ou arquivo base sem necessidade de JS rodar no cliente.
**And** falhas no Data Source não quebrarão a interface (Graceful Degradation).

## Epic 3: Geração Rápida de Demanda via Calculadora (Quiz)

O Visitante é conduzido a descobrir a modalidade ideal tocando botões confortáveis que reagem as suas dores reais, recebendo sua prescrição sugerida sem nunca precisar utilizar formulários manuais do teclado.

### Story 3.1: Componente Base do Quiz (Choice Pills Interativas)

As a Visitante avesso a formulários cansativos,
I want interagir com botões gigantes e amigáveis baseados nas minhas dores reais,
So that eu consiga mapear minha necessidade sem nunca precisar abrir o teclado nativo celular.

**Acceptance Criteria:**

**Given** a sessão ativa do Quiz na Landing Page.
**When** eu observo a tela solicitando inputs ("O que você busca hoje?").
**Then** eu visualizo e toco em pílulas massivas (hitboxes >= 56px) estéticas operando ocultamente como seletores (FR08).
**And** a seleção ilumina instantaneamente via estado no Vanilla DOM/Tailwind sem recarregar a tela.

### Story 3.2: Engenharia Lógica do "Match de Modalidades"

As a Engenheiro Logístico da Aplicação,
I want aplicar um mapeamento nativo direto no front para parear escolhas do visitante com portfólios,
So that possamos expor a "solução" baseada na dor clicada, de forma instantânea.

**Acceptance Criteria:**

**Given** que o visitante concluiu as etapas de seleção (Story 3.1).
**When** o ciclo de avaliação cessa o tracking da dor.
**Then** a engine interna apaga as perguntas e renderiza a resposta recomendada.
**And** o layout exibe explicitamente a melhor modalidade calculada unida ao bloco de conversão (FR09).

### Story 3.3: Injeção de Parâmetros Contextuais de Venda

As a Estrategista Comercial,
I want que o sistema traduza instantaneamente o "Match" (Story 3.2) em argumentos codificados na URL do botão final,
So that o usuário pule para o WhatsApp carregando nativamente todo o contexto da dor dele.

**Acceptance Criteria:**

**Given** o resultado calculativo visível na tela (A modalidade ideal revelada).
**When** a interface expõe o botão final de ação ("Conhecer agora").
**Then** o sistema injeta nativamente o Hyperlink do WhatsApp `wa.me/xxx?text=...` contendo pré-texturação baseada nos cliques dados no passado (FR10).
**And** não exige uso adicional de servidor para essa conclusão.

## Epic 4: Motor Web-to-WhatsApp Flow e Lista de Espera

O Visitante faz um contato humano imediato, recebendo o conforto do "WhatsApp Pré-Digitado" atrelado à categoria que pesquisa. Caso haja escassez em uma turma super exclusiva, ele se qualifica entrando positivamente numa "Lista de Regresso/Espera".

### Story 4.1: Componente Base Conversivo (WhatsApp Sticky Action)

As a Visitante convencido no meio da navegação da página,
I want encontrar um botão claro e ininterrupto para iniciar o contato no WhatsApp,
So that eu não precise rolar tudo de volta para o topo (fricção) caso deseje agir.

**Acceptance Criteria:**

**Given** a descida da rolagem da página pelo visitante.
**When** ele navega por blocos extensos de grade/aulas.
**Then** um Float Action Button (CTA Sticky) permanece elegante nas bordas inferiores preservando espaço da interface (FR11).
**And** este CTA aplica ancoragem blindada contra span-bots para URLs `wa.me/` do Meta (FR12 & NFR08).

### Story 4.2: Acoplamento de Contexto Geográfico (Location Fill)

As a Consultor de Vendas do corporativo,
I want que os links espalhados pelas vitrines do site enviem mensagens relatando em que botão o usuário clicou,
So that eu atenda diretamente à intenção sem perder tempo investigando a origem.

**Acceptance Criteria:**

**Given** instâncias independentes de links do WhatsApp mapeadas pelas vitrines cruzadas.
**When** o usuário interagir nestes botões isolados.
**Then** as funções engatilharão Textos Deep-link orquestrados com o contexto visual de onde estavam (FR13).
**And** a latência de clique respeitará rigores de carregamento mobile (< 300ms).

### Story 4.3: UX de Transbordamento para Lista de Espera

As a Usuário cobiçando aula lotada ou teste de grade,
I want clareza visual de que posso garantir meu nome para o futuro,
So that eu não vá para concorrência desistindo prematuramente.

**Acceptance Criteria:**

**Given** uma modalidade provida sem limite extra de vagas na fonte de dados.
**When** o usuário processar a janela dessa entidade esgotada.
**Then** o botão CTA primário se altera convertendo e notificando sobre aderência à "Lista de Espera".
**And** ao acionar a rotina do WhatsApp, envia a sintaxe correta "Gostaria de entrar na lista de espera..." retendo o lead fiel (FR24).

## Epic 5: Urgência e CMS Dinâmico Zero-Code (Google Sheets SWR)

Os administradores regulam com familiaridade o volume de vagas e disponibilidade de agendas das turmas via Google Sheets e o usuário da ponta é arrebatado por gatilhos autênticos ativados na cor vermelha ("Só Restam 2 Vagas") sem intervenção humana no código fonte.

### Story 5.1: Scaffold do Servidor de Borda (Edge SWR Fetching)

As a Desenvolvedor Nuvem,
I want construir uma ligação assíncrona blindada entre a Astro Engine e a planilha pública,
So that os dados tabulares da recepção sejam processados antes de chegar ao celular do usuário.

**Acceptance Criteria:**

**Given** a URL contendo o export CSV público do Google Sheets.
**When** o framework Astro invoca a geração/requisição via arquitetura Edge SWR (Cloudflare).
**Then** os utilitários de parser (`sheetsParser.ts`) convertem as linhas para objetos JSON nativos tipados.
**And** engatilham o mecanismo de cache server-side (Stale-while-revalidate 5 a 10 min) preservando velocidade celular e evitando gargalos (FR15).

### Story 5.2: Injeção Visual da Urgência (Scarcity Badges)

As a Lead com dificuldade em tomar decisão,
I want ser notificado de escassez caso a turma almejada possua alta ocupação de modo integrado e responsivo,
So that eu ceda ao impulso positivo e garanta a ocupação via Chat.

**Acceptance Criteria:**

**Given** os Cards Sanfonados já montados nas entregas do Epic 2.
**When** o objeto consumido pela Story 5.1 revelar estoque baixo (de acordo com Limiares declarativos no Sheets).
**Then** A aura visual do Crachá de Urgência espelhará a quantidade real informando que uma oportunidade orgânica existe (FR17).
**And** respeitará a regra rigorosa da Estética Premium Dark contra vermelhos "tipo ERRO", priorizando Vermelhos-Sangue baseadas no Logotipo Clássico (Crimson Action).

### Story 5.3: Lógicas de Supressão Cega (Interface Tolerante a Erros)

As a Operacional comum de balcão (Zero-Code Admin),
I want a segurança de poder remover pautas de horários que esvaziaram do painel da nuvem planilhado,
So that no dia seguinte a Landing Page silenciosamente pare de expor sessões não operacionais sem intervenções da equipe externa de codificadores.

**Acceptance Criteria:**

**Given** a ausência de células preenchidas, ou quebra de coluna de cabeçalho na planinha original do Google, apagando dados.
**When** o componente Astro Edge tentar capturar esta lacuna e reconstruir o Front-End para os visitantes.
**Then** os elementos faltantes apenas evaporam da estrutura sanfonada (Fallback de Omissão/Supressão).
**And** não expõe as variáveis Nulas na tela (null or undefined) nem exibe o assustador Internal Error para o público, mantendo credibilidade comercial contínua (FR16).
