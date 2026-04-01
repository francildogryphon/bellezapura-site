---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-02b-vision', 'step-02c-executive-summary', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish']
classification:
  projectType: Website B2C / Máquina de Geração de Leads
  domain: Saúde, Bem-Estar e Fitness (Negócio Local)
  complexity: Baixa-Média
  projectContext: Greenfield
inputDocuments:
  - "c:\\Dev\\bellezapura-site\\_bmad-output\\planning-artifacts\\product-brief-bellezapura-site.md"
  - "c:\\Dev\\bellezapura-site\\_bmad-output\\planning-artifacts\\product-brief-bellezapura-site-distillate.md"
workflowType: 'prd'
---

# Product Requirements Document - bellezapura-site

**Author:** PM / User
**Date:** 2026-04-01

## Executive Summary

O projeto tem como objetivo construir o motor de conversão digital definitivo para a academia Belleza Pura. A plataforma atuará como um hub central (mobile-first) otimizado para a geração de leads oriundos de tráfego orgânico e tráfego pago (Meta, Google e TikTok Ads). O funil visa conectar clientes em potencial qualificados à equipe comercial através da Meta Business Suite (WhatsApp) com mínima fricção e alta responsividade. 

### Core Differentiators

A plataforma consolida digitalmente mais de 30 anos de infraestrutura (fundação em novembro de 1994) na Cidade 2000. O produto extrai seu principal valor persuasivo através da "Autoridade Conquistada": um corpo docente 100% formalizado e oferta de serviços médicos periféricos (Nutrição/Kinesio Tape). Esse ecossistema atinge alta penetração de mercado por deter a única piscina comercial da região, unindo confortavelmente das necessidades da modalidade "Bebês" à "Melhor Idade".

A estratégia de mercado apoia-se num sistema híbrido de precificação (Preços transparentes para Musculação visando volume rotativo, e "Preços sob Consulta/WhatsApp" para serviços Premium, incentivando o relacionamento de alto ticket e leads engajados). A solução priorizará SEO Local via integração com Google Maps, FAQs preventivos para retenção de sessão orgânica e uma interface baseada em Sistema de Gestão de Conteúdo (CMS) remoto operado via planilhas para agilidade interna na grade de aulas.

## Project Classification

- **Project Type:** Website B2C / Plataforma de Geração de Leads
- **Domain:** Saúde, Bem-Estar e Fitness (Local Business)
- **Complexity:** Baixa-Média (Desafio centrado em performance arquitetural via Web Vitals, usabilidade Frontend adaptável e integrações Edge diretas)
- **Project Context:** Greenfield (Construção estrutural a partir do zero)

## Success Criteria

### User Success
O usuário local localiza o projeto por ranqueamento assertivo, navega de forma instantânea sem travamentos em dispositivos móveis 4G e assimila imediatamente a reputação herdada do estabelecimento (+30 anos / infraestrutura aquática exclusiva). O visitante usufrui da funcionalidade de mapeamento visual, mitiga desconfianças através do *FAQ preventivo* e contata a equipe comercial organicamente acionando *Deep Links* do WhatsApp pré-parametrizados.

### Business Success
Multiplicação tática na extração e aquisição de *Leads* qualificados no CRM orgânico (WhatsApp). Diminuição da carga horária paralela gasta em triagem receptiva de secretárias respondendo pautas básicas (esclarecidas via interface visual). Geração tangível e rastreável de fluxo B2C monetizável.

### Technical Success
- **Alta Disponibilidade e Performance:** Garantia de 90+ no índice *Google Lighthouse* Mobile, com LCP mantido estritamente abaixo de `2.5s`.
- **Governança Zero-Code do Conteúdo:** Independência total dos operadores físicos (Recepção/Gerência) sobre desenvolvedores de *software*, administrando toda a oferta da grade horária unicamente sobre interfaces *Cloud* de planilhas.
- **Rastreabilidade Estrutural:** Adoção unificada precoce e validada de injeções de telemetria Ads (Pixels).

## Product Scope

### MVP - Minimum Viable Product (Phase 1)
- Lançamento de Interface Única (Mobile-First de 1 Página) construída através de geradores estáticos avançados (Framework Astro).
- Categorização isolada de Planos Convencionais versus Planos Premium de barreira consultiva.
- Elementos Interativos Isolados (Astro Islands): Calculadora Dinâmica Modular e Marcadores de Escassez (Vagas em Turmas Críticas).
- Abastecimento contínuo arquitetônico via *Google Sheets API* interligado ao fornecedor Edge de Hospedagem Contínua (Cloudflare Pages).
- Endereçamentos de links e roteamentos de comunicação vinculados transparentemente para as aplicações nativas de WhatsApp.
- Cumprimento de obrigações legais em formato estático local de segurança institucional e FAQs responsivos.

### Growth Features (Phase 2 - Pós-MVP)
- Adoção estendida de mensuração analítica para funis segmentados originários dos formulários do Quiz a fim de otimização automatizada de ROAS.
- Isolamento vertical da estrutura *Single-Page* gerando portfólios URL indexáveis apartados por modalidades estratégicas voltadas primordialmente ao SEO Semântico orgânico (Search Engine Optimization).

### Vision (Phase 3 - Scale)
- Independência técnica do motor auxiliar "Google Sheets" por alocação integral das regras de negócio atreladas a Painéis Autenticados Próprios CMS (*Admin Panel*).
- Parametrização integral das portas de comunicação nativas com acoplamento inteligente a agentes LLMs (Meta AI / Llama) desempenhando funções 24h de Copilot para os operadores humanos.

## User Journeys

### 1. A Mãe Protetora (Jornada Principal de Conversão - Natação Kids)
**Situação e Ação:** Procura soluções esportivas primárias como combate direto ao uso prolongado de eletrônicos por filhos pré-adolescentes. Acessa a infraestrutura visual através de aparelhos *Mobile* sofrendo imediata percepção impositiva de segurança e Tradição ("30 Anos em Operação").
**Clímax:** Direciona-se as vitrines de Natação, observando copywrite impositivo centrado exclusivamente nos ganhos e proteções (crescimento seguro e paz). Suas objeções silenciosas são prontamente engolidas através e módulos de perguntas abertas.
**Resolução:** Converção via clique em acionador principal "Ver Turmas", que automaticamente redige o comando no aplicativo externo: *"Olá, busco informações sobre a Natação Kids!"*. O lead atinge o funil comercial preparado.

### 2. O Executivo Estressado (Jornada de Inversão de Objeção)
**Situação e Ação:** Profissional em estresse grave sem empatia prévia por estabelecimentos do ramo, buscando opções obrigatórias de combate ao IMC elevado fugindo da imagem tradicional focada puramente em hipertrofia.
**Clímax:** Engajando-se com a *Calculadora de Modalidades (Quiz)* ou na sub-vitrine pertinente de *Lutas*, consome imediatamente argumentações que diluem seus traumas de "contato físico bruto", priorizando a comunicação sobre alívio endorfínico e queima severa de 800 kcal na aula (Muay Thai secar).
**Resolução:** Livre do temor de constrangimento e interessado genuinamente na abordagem cirúrgica apresentada, o perfil adquire ticket para aulas preparatórias usando CTAs contextuais dinâmicos.

### 3. Operação Gerencial Interna (Jornada Administrativa)
**Situação e Ação:** Instilações imediatas causadas por rodadas curtas de testes com modalidades transitórias. Ausência de orçamentos técnicos para convocações emergenciais sob agências externas.
**Clímax:** Alterações rápidas realizadas com familiaridade na sintaxe *Spreadsheets* da conta Google corporativa sem visualização de códigos do repositório *GitHub*.
**Resolução:** Recompilação Edge automática efetuada perfeitamente através de reações a webhooks pela arquitetura Cloud base.

## Functional Requirements

### 1. Descoberta de Instituição e Autoridade
- **FR01:** O Visitante pode visualizar os anos de fundação e tradição da academia.
- **FR02:** O Visitante pode investigar a infraestrutura médica acessória da academia.
- **FR03:** O Visitante pode visualizar o selo de padronização acadêmica dos professores.
- **FR04:** O Visitante pode confirmar parcerias ativas (Wellhub/TotalPass).

### 2. Catálogo de Modalidades e Estratégia B2C
- **FR05:** O Visitante inspeciona tabela de preços explícitos fixados para categorias padronizadas de giros rápidos (*Musculação*).
- **FR06:** O Visitante acessa listagem de portfólio restritivo (Aulas Aquáticas, Lutas) sem exibição transparente de tickets para instigação intencional dos canais comerciais.
- **FR07:** O Visitante internaliza leituras orgânicas de argumentação focadas por arquétipo (Muay Thai Adulto VS Infantil, ex: "Secar" versus "Desenvolvimento Motor e Longe de Telas").

### 3. Gamificação Híbrida Leve (Quiz/Calculadora)
- **FR08:** O Visitante interage em módulo progressivo de inputs fornecendo pontos orgânicos de dores/necessidades (ex: Objetivos Físicos e Faixa Etária).
- **FR09:** O Sistema calcula e dispõe modalidades indicadas casadas com os *inputs* submetidos ativamente pela interface prévia (Calculadora de Dor).
- **FR10:** O Sistema atrelará essas sugestões à APIs invisíveis parametrizando chamadas orgânicas do URL WhatsApp.

### 4. Geração Contínua de Leads (Tracking Flow)
- **FR11:** A Interface preserva renderização permanente atrelada à tela visual local (*Viewport*) de botões conversivos principais ("CTA Sticky").
- **FR12:** O Sistema fornece ancoramento via URLs diretas ou esquemas Deep-link abertos aos protocolos instalados da Meta Platforms.
- **FR13:** Os despachos conversivos carregam pré-textos montados automaticamente pelas funções contendo contextos oriundos da posição (Y) inicial em que a visualização originou a chamada.

### 5. Apresentação Dinâmica de Escassez
- **FR14:** O Sistema projeta horários filtrados atrelados às tabelas extraídas do armazenamento *Google Cloud* integrados visualmente.
- **FR15:** O Sistema injeta rótulos limitantes vermelhos de "Vagas Escassas" condicionado à extração nativa de regras preestabelecidas.

### 6. Sistema Base de Conteúdo (CMS)
- **FR16:** Administradores autorizados suprimem visualizações de grade online formatando valores nas suas abas autorizadas de planilhas conectadas.
- **FR17:** Administradores delimitam em colunas separadas as quantidades mínimas necessárias de discentes para o acionamento em UI do limitador (FR15).

### 7. Amparo Legislativo (Compliance Global)
- **FR18:** O Visitante ativa recolhimentos assíncronos da área de Objeções Primitivas localizadas na FAQ (autoajuda sobre infraestrutura).
- **FR19:** Injeção visual inalterada para endereços orgânicos acoplados com navegação estendida gerida visualmente sob bibliotecas/iFrames dos domínios Google Maps em sub-sessões específicas.
- **FR20:** Acoplamento com janelas passivas estáticas informadoras sobre conformidade dos Termos Base (Cookie/Consent) aderentes à LGPD Brasileira.
- **FR21:** Leitura visual transparente disposta no quadro inferir do Layout (Rodapé Fixado) confirmando ativamente razão societária global, CNPJ e endereçamento da empresa sem travamentos a renderização da máquina local.

## Non-Functional Requirements

### Performance & PageSpeed (Métrica de Base)
- **NFR01:** O *Largest Contentful Paint (LCP)* das interfaces entregues pelo framework em dispositivos móveis não excederá `2.5s` transitando sobre testes padrão de conexões empobrecidas via simuladores 4G nativos do Google Chrome.
- **NFR02:** O índice automatizado de Auditoria orgânica (*Google Lighthouse - Mobile Performance Mode*) fixará patamar de retenção obrigatório sustentando avaliações sempre iguais ou superiores à `90/100` pontos.
- **NFR03:** O peso original transferido compactado por compressores server-side obrigatórios originados do Edge (Primeiro Contato Total) obedece à curva tolerada de `< 700 KB`.

### Accessibility (Ergonomia Inclusiva)
- **NFR04:** Elementos de UI dispostos na grade de copy para as hierarquias seniores (Aulas de Pilates/Hidroginástica) estão subordinados universalmente e irrevogavelmente à regulação visual mínima dos níveis **WCAG 2.1 - AA** do Consórcio W3C garantindo um contraste basal (mínimo de 4.5:1 luz sobre dark themes).
- **NFR05:** Componentes tipográficos visuais e importações pictóricas injetam automaticamente as cordas nativas HTML de suporte limpo semântico em atalhos contextuais explícitos (Atributos *`ALT`* text-safe).

### Integrações e SLA
- **NFR06 (O Tempo Limite de Deployment):** Acionamentos provisórios das instâncias remotas atrelados a reações ativas na documentação em tabelas do Google deverão acionar renderizações globais distribuídas (Deploy Edge via Vercel ou Rede Compatível Cloudflare Pages) efetuando encerramentos parciais com estabilização e refletir os novos dados on-line integralizados sob ciclo imperativo absoluto de `T < 180s`.
- **NFR07 (Limiares Paramétricos Móveis):** Gatilhos de submissões criacionistas (URLs Deep-Linking App Intent) deverão responder comandos físicos (Taps UI) nas matrizes originadas dos fluxos estáticos das Ilhas Astro JS com retardo menor ou cravado a `< 300 ms` prevenindo impressões enganosas sobre congelamento local de *DOM*.

### Resiliência Mecânica e Defesa Orgânica
- **NFR08 (Redutor de Atrito Fraudulento):** Interações nativas com chamadores fixos de *WhatsApp Protocol* conterão amarras obstrutivas temporais baseadas em Cooldown ou *Proof of Work* visual para dificultarem inundações por script-bots nos números matrizes da academia.
- **NFR09 (Falha Segura / Graceful Degradability):** Perturbações críticas nas respostas de APIs externas encarregadas do controle CMS original (falhas do servidor *Google*) engatilham processos nativos Front-End ativando Fallback imediato de persistência para as instâncias de Renderização Pré Construída mais novas capturadas outrora, cancelando inteiramente telas atreladas ao jargão *Internal Error*.
- **NFR10 (Escudos de Uptime):** Assenta-se sob obrigação do parceiro Edge de hospedagem as submissões contratuais a acordos limiares (*Service Limit Agreement - SLA*) impositivamente equivalentes aos graus numéricos indexados ao uptime universal da escala orgânica mínima de **99.9% / Mês** preservados e contínuos.
