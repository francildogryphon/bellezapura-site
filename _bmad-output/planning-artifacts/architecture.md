---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
lastStep: 8
status: 'complete'
completedAt: '2026-04-16'
inputDocuments: 
  - "c:\\Dev\\bellezapura-site\\_bmad-output\\planning-artifacts\\prd.md"
  - "c:\\Dev\\bellezapura-site\\_bmad-output\\planning-artifacts\\ux-design-specification.md"
  - "c:\\Dev\\bellezapura-site\\_bmad-output\\planning-artifacts\\product-brief-bellezapura-site.md"
  - "c:\\Dev\\bellezapura-site\\_bmad-output\\planning-artifacts\\product-brief-bellezapura-site-distillate.md"
workflowType: 'architecture'
project_name: 'bellezapura-site'
user_name: 'FranCILDO'
date: '2026-04-16'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
- **Motor de Conversão (Mobile-First):** Funil de leads com seções táteis ("Quiz de Dor/Benefício") culminando no WhatsApp pré-preenchido sem formulários difíceis.
- **Gestão Zero-Code (CMS Leve):** Atualização via Google Sheets que carrega *tags* de escassez (ex: "Restam 2 Vagas") integradas dinamicamente sem dor.
- **Exibição Híbrida:** Disclosure progressivo (Sanfonas) blindando a poluição visual de dezenas de horários.

**Non-Functional Requirements:**
- **Extrema Performance:** Lighthouse > 90/100, LCP < 2.5s, e UI acessível WCAG 2.1 AA.
- **Sustentabilidade de Software (Green Software Foundation - GSF):**
  - *Eficiência de Energia/Hardware:* Uso de Ilhas Estáticas (Astro), banindo JavaScript de runtime desnecessário, economizando bateria do dispositivo final e permitindo funcionamento mesmo em celulares defasados.
  - *Eficiência de Rede / Carbono:* Carga útil `< 700 KB` inicial, compressão pesada de imagens para priorizar transmissão super leve.
- **Resiliência (Graceful Degradation):** Se a planilha do Google sair do ar ou ocorrer erro no link, o site vai ignorar a tag de vagas mas manterá seu layout Premium intacto, anulando problemas como mensagens vermelhas de erro no front-end.

**Scale & Complexity:**
- Primary domain: Web B2C Frontend Edge / Serverless (Hospedado no Cloudflare Pages).
- Complexity level: Baixa/Média (Design limpo, mas alto rigor de integração Edge e SEO Maps).
- Estimated architectural components: ~8 principais (Hero, Quiz Interativo, Dynamic Cards/Sanfonas, Crachás de Escassez, FAQ Tátil, Maps Embed, Core Lead Generation CTA / WhatsApp).

### Technical Constraints & Dependencies

- **Astro e Tailwind CSS:** Zero Runtime base garantido. Componentização estrita para UX.
- **WhatsApp (`wa.me`):** Único funil primário de retenção e ação comercial.
- **Infraestrutura Zero Custo (GitHub + Cloudflare Pages):** Servido mundialmente com CDN potente, amparando os princípios éticos da nuvem sustentável em conformidade com as diretrizes da GSF.

### Cross-Cutting Concerns Identified

- **Compromisso de Performance x Custos Cloudflare (O Fator SWR):** 
Para contornar os rígidos limites do plano gratuito da Cloudflare Pages (500 builds/mês de pipeline) e não consumir CPU/Processamento exagerado por poluição de rede (ferindo as regras GSF), o motor arquitetural acoplará a tecnologia `@astrojs/cloudflare` atuando explicitamente em **Edge SSR** usando o padrão **SWR (Stale-While-Revalidate)**. O Cloudflare Worker rodará o parse da planilha em nuvem e vai ordenar que esse dado seja posto em *Edge Cache* rigorosamente entre 5 a 10 minutos. Isso assegura custos e consumo cravados em zero e resiliência de UI (LCP instantâneo), sendo um Trade-off acordado versus exibir a tag de escassez com alguns minutinhos de delay, mas ganhando velocidade espetacular no Mobile.

## Starter Template Evaluation

### Primary Technology Domain

Web B2C Frontend Edge / Serverless, focado em performance absoluta (LCP < 2.5s) e renderização "Zero Runtime" no cliente.

### Starter Options Considered

Avaliamos templates geradores baseados nos requisitos de "Green Software", SEO e hospedagem Cloudflare Edge:
- **Next.js:** Descartado devido ao peso intrínseco do runtime React.
- **Vite Padrão (React/Vue SPA):** Descartado, pois *Single Page Applications* atrapalhariam a extração agressiva de SEO Local necessitada pela academia.
- **Astro CLI:** **Vencedor.** Arquitetura focada em Ilhas (*Islands*), retornando HTML puro e usando JS só quando absolutamente necessário para a Calculadora/Quiz.

### Selected Starter: Astro (Minimal) + Tailwind + Cloudflare

**Rationale for Selection (Astro Minimal contra HTML Nativo):**
Embora o uso de HTML/CSS "baunilha" seja a "Pura Essência" de performance ecológica, os custos de manutenção para codificar conectores Server Edge "do zero" destruiriam os cronogramas. O Astro Minimal Template é a via média perfeita: entrega o mesmo HTML limpo de zero processamento da programação "pura", mas injeta as alavancas pesadas por trás dos panos (`@astrojs/cloudflare`) que garantem facilidade absoluta para Server-Side (Workers).

**Initialization Command:**

```bash
npm create astro@latest bellezapura-site -- --template minimal
cd bellezapura-site
npx astro add tailwind cloudflare --yes
```

**Architectural Decisions Provided by Starter:**

**Language & Runtime:**
TypeScript por padrão. UI em HTML estático (Astro Components), com 0 JS inserido ao navegador sem consentimento, respeitando o princípio de eficiência GSF.

**Styling Solution:**
Tailwind CSS provido nativamente. Habilita manipulação visual diretamente sem a penalidade computacional extra do *CSS-in-JS* no frontend.

**Build Tooling:**
Motor *Vite* embutido. Rápida compilação e Hot Reloading durante o desenvolvimento.

**Testing Framework & Escalabilidade de Negócios (Alinhamento de Stakeholders):**
Embora a instalação utilize a rota primitiva (Template Minimal), acorda-se formalmente que **a primeira história de desenvolvimento (Setup) estenderá o pacote instalando o Playwright**. A equipe usará para testes End-to-End validando engatilhos de escassez (Edge vs Sheets). O Astro nos protege contra *Vendor Lock-in*, garantindo transição natural do Sheets para um relacional SQL no futuro (se houver expansão física).

**Code Organization:**
File-based routing em `src/pages` e componentes isolados em `src/components`.

**Note:** Project initialization using this command should be the first implementation story.

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- **Data Source Pública:** O CMS primário é atrelado nativamente a URLs de planilhas CSV geradas pelo Google Sheets.
- **Edge Routing & Caching:** Obrigatório o uso do SWR via Cloudflare para proteger as métricas de GSF.

**Important Decisions (Shape Architecture):**
- **JavaScript Limpo:** O estado do Quiz e da Sanfona no front-end será guiado usando estritamente o modelo de `<script>` nativo (Vanilla) embarcado nos blocos do Astro, banindo bibliotecas pesadas de State Management (como Redux) que quebrariam o pacote de < 700KB.

**Deferred Decisions (Post-MVP):**
- Autenticação e painel de Admin proprietário (deferido inteiramente, contando com os acessos do Google para permissões de equipe).
- Banco de dados relacional clássico (como PostgreSQL).

### Data Architecture
- **Data Source:** Google Workspace (Sheets publish CSV). Escolhido por zero fricção operacional.
- **Data Validation:** A tipagem nativa do TypeScript dentro da chamada do componente `.astro` tratará os dados nulos do CSV (ex: se apagarem a aula inteira na linha da tabela) para renderizar graciosamente ou omitir do layout.
- **Caching Strategy:** SWR implementado no cabeçalho do Edge Worker (Expira a cada 10 minutos).

### Authentication & Security
- **Autenticação:** O sistema B2C é público (Lead Gen). Leituras do painel fluirão através de *URLs Secretas de Acesso* providas pelo Google, blindando read-only. Permissões de escrita são geridas pelas regras ISO do Google Workspace.
- **Segurança de API:** Configuração de CORS na Cloudflare para não permitir hotlinking ou consumo de nossos Endpoints por terceiros maliciosos.

### API & Communication Patterns
- **Protocolo:** *Fetch nativo do Node/Edge* executado sempre em SSR (no `<script>` do server dentro do Astro). O cliente (celular) nunca faz o *fetch* da planilha, mantendo o tráfego oculto e incrivelmente rápido.

### Frontend Architecture
- **State Management (Gerenciamento de Estado):** "Signals" não são precisos. Abordagem *Vanilla DOM Manipulation* contida para a Calculadora/Quiz de dores, garantindo UI fluida sem bibliotecas.
- **Routing:** Híbrido, baseado no `src/pages` do ecossistema nativo do Astro.

### Infrastructure & Deployment
- **Hospedagem:** Cloudflare Pages
- **Pipeline CI/CD:** Interligação direta do Cloudflare App com a branch `main` do repositório no GitHub para os códigos estruturais estáticos (Astro).

## Implementation Patterns & Consistency Rules

### Pattern Categories Defined

**Critical Conflict Points Identified:**
Identificamos 4 áreas cruciais onde Agentes de IA/Desenvolvedores poderiam tomar decisões divergentes nesta stack (Astro + Tailwind + CSV Fetch), o que poderia quebrar a padronização e ferir nossa meta inicial de extrema performance e SEO B2C.

### Naming Patterns

**Code Naming Conventions:**
- **Componentes Astro (`src/components`):** É obrigatório o formato `PascalCase.astro` (Ex: `ScarcityBadge.astro`).
- **Rotas e Páginas (`src/pages`):** É obrigatório o formato `kebab-case.astro` para manter a URL otimizada estruturalmente para SEO orgânico local (Ex: `nossas-aulas.astro`).
- **Nomenclatura Variável (JS/TS):** Estrito `camelCase` sempre (Ex: `const remainingSpots = 2;`).

### Structure Patterns

**File Structure Patterns:**
- **Estilos Visuais:** Proibida a criação de arquivos `.css` avulsos (excetuando-se um `global.css` central). Todo estilo deve residir *inline* usando as classes utilitárias semânticas do Tailwind, amarrado aos NFRs (Non-Functional Requirements) de UX.
- **Isolamento de Lógica Cega:** Toda lógica matemática, tratamentos de erro pesado, formatação de data ou *parse textual* (CSV) devem ser jogados em em raiz `/src/utils/` desatrelada do componente de renderização, maximizando os testes unitários da equipe de QA (Quinn).

### Format Patterns

**API Response Formats (A Extração do CSV):**
Sempre que a aplicação Astro acionar o Cloudflare SSR para devorar os dados do Google Sheets, ele passará pelo padrão unificado:
`{ success: boolean, data: Array<Object>, error?: string }`.
A interface nunca exporá "logs abertos"; falhas internas simplesmente forçam omissões elegantes (*Graceful Degradation*), retornando apenas HTML premium limpo sem as informações de urgência se quebrarem.

### Process Patterns

**Quality Assurance / Tailwind Ordenation:**
- Para impedir caça ao tesouro de estilos pela UX (Sally) ou conflitos de código com dezenas de utilitárias mistas, toda classe web **deve adotar auto-ordenação canônica**. Forçaremos a base do `prettier-plugin-tailwindcss` no ecossistema central, tornando ilegais classes perdidas.

### Enforcement Guidelines

**All AI Agents MUST:**
- ⚠️ Jamais utilizar e descrever comandos `fetch()` assíncronos no client-side explícito (`<script>`), alocando rigorosamente todas requisições seguras para a abertura `---` *Frontmatter* no Astro (Renderização de Servidor/Edge).
- ⚠️ Ignorar pacotes colossais típicos da indústria atual (ReactHooks/Redux). Sustentar 100% da renderização do formulário interativo de dor valendo-se das mecânicas limpas do DOM via Scripts Vanillas e Astro HTML.

### Pattern Examples

**Good Examples:**
```astro
---
// ✅ Busca segura no Edge. Lógicas enxutas via Utilitários isolados da renderização.
import { fetchClassVacancies } from '@/utils/fetchClasses';
import ScarcityBadge from '@/components/ScarcityBadge.astro';

const { data, success } = await fetchClassVacancies(import.meta.env.SHEET_URL);
---
<div class="flex items-center justify-center p-4"> <!-- ✅ Tailwind auto-ordenado por Prettier -->
  {success && data.spots <= 2 && <ScarcityBadge spots={data.spots} />}
</div>
```

**Anti-Patterns (Forbid):**
```astro <!-- ❌ Proibido: Fetch feito no cliente afundando o Ponto Focal de Custo Zero (Edge SSR) -->
<script>
  fetch('http://googe.sheets...').then(res => applyBadge(res))
</script>
<!-- ❌ Proibido: Classes visualmente anárquicas impossibilitando a leitura UX futura -->
<div class="p-4 justify-center items-center flex md:text-xl text-red-500 hover:bg-slate-200">
```

## Project Structure & Boundaries

### Complete Project Directory Structure

```text
bellezapura-site/
├── .github/
│   └── workflows/
│       └── playwright.yml       # Testes CI contínuos do Github
├── public/
│   ├── favicon.svg              
│   └── images/                  # Imagens brutas, webp para bater metas GSF
├── src/
│   ├── components/              
│   │   ├── ScarcityBadge.astro  # Componente crítico de FOMO/Vagas (SWR)
│   │   ├── InteractiveQuiz.astro# Funil Tátil B2C
│   │   ├── ClassAccordion.astro # Tabela progressiva de modalidades
│   │   └── HeroHeader.astro     
│   ├── layouts/
│   │   └── BaseLayout.astro     # Configs HTML base, Meta Tags Otimizadas locais (SEO Local)
│   ├── pages/
│   │   ├── index.astro          # Rota única da LP (Zero rotas inúteis)
│   │   └── 404.astro            # Degradação de rotas
│   ├── styles/
│   │   └── global.css           # Repositório único de utilitários Tailwind
│   └── utils/
│       └── sheetsParser.ts      # Fronteira Lógica: Módulos de conexão Cloudflare Worker/Fetch CSV
├── tests/
│   └── e2e/                     
│       └── scarcity-badge.spec.ts # Teste visual contra falsa escassez garantindo UX
├── astro.config.mjs             # Acoplamento de: Integração Tailwind e Cloudflare Adapter (SSR)
├── tailwind.config.mjs          # Tokens de design base (Navy Deep, Sun Action)
├── tsconfig.json
├── package.json
└── README.md
```

### Architectural Boundaries

**API Boundaries (Limites de Nuvem):**
- **Extração Segregada:** As requisições para o Google Sheets limitam-se fisicamente ao diretório `src/utils/`. Componentes UI em `src/components/` estão expressamente proibidos de chamar endpoints externos por conta própria.

**Component Boundaries (Front-end):**
- Padrão **Smart vs Dumb**: O arquivo `index.astro` atua como Controlador Mestre (Smart), ele usa o Edge SSR para resolver o `sheetsParser` e injeta apenas as variáveis puras para dentro do componente `ScarcityBadge.astro` (Dumb), que cuida de apenas renderizar cores.

### Requirements to Structure Mapping

**Feature/Epic Mapping:**
- Motor de Conversão Tátil / UX Pragmático -> `src/components/InteractiveQuiz.astro`
- Gestão Zero-Code (Crachá de Escassez SWR) -> `src/utils/sheetsParser.ts` integrado em `src/components/ScarcityBadge.astro`.
- Qualidade Visual Escura Padrão Ouro -> `tailwind.config.mjs` amarrado ao `global.css`.

**Cross-Cutting Concerns:**
- Tolerância a Falhas do Sheets -> A lógica reside no topo do `index.astro` com blocos globais de Try/Catch antes de acionar componentes filhos.
- Sustentabilidade Web (GSF <700kb) -> Assets estritamente vigiados pelo motor nativo de Compressão do Astro disparado nas pastas `src/`.

### Integration Points

**External Integrations:**
- O servidor Edge fará ponte apenas de leitura (GET) assíncrona ao End-Point de formato CSV exportado do Google Cloud Workspace, sob a janela do SWR de 10 minutos. Nenhuma chave secreta em `.env` é mandatória dado o formato CSV Open.

**Data Flow (O Ciclo da Informação):**
1. O Cliente (mãe acessando mobile) dispara `GET /` -> Nuvem Edge Cloudflare.
2. `index.astro` (No Edge) intercepta; Se o Cache de 10m expirou, ele invoca `utils/sheetsParser.ts`.
3. `sheetsParser` devora o CSV do Google e transforma em Typescript.
4. `index.astro` monta a interface UI e cospe apenas o HTML/Tailwind minificado final.
5. O pacote voa `< 700KB` até o cliente via CDN super-rápida.

### Development Workflow Integration

- **Development Server:** Ambiente super ágil gerado localmente pelo Vite no terminal através do `npm run dev`.
- **Testes (QA Boundaries):** O Playwright agirá simulando instâncias de navegadores invisíveis sob os scripts no diretório `/tests`.
- **Automated Deployment:** O desenvolvedor faz um `git push origin main`. A Cloudflare atua como "Listener" contínuo.

## Architecture Validation Results

### Coherence Validation ✅

**Decision Compatibility:**
Todas as decisões tecnológicas demonstram coesão absoluta. O uso nativo do Astro para processar Ilhas (*Islands*) em SSR complementa os limites da Green Software Foundation (GSF - Zero Processamento Inútil). O compilador Vite e a estrutura do Tailwind também são agnósticos e ultra-compatíveis com nosso host (Cloudflare).

**Pattern Consistency:**
Padrões de manipulação estritos na pasta `src/utils` blindam o ecossistema Astro de lógicas redundantes, assegurando que o SWR no Edge do Cloudflare funcione isoladamente da renderização de Interface.

**Structure Alignment:**
A estrutura de arquivos reflete a decisão de blindar a aplicação contra dependências lentas.

### Requirements Coverage Validation ✅

**Epic/Feature Coverage:**
O PRD e UX Design requeriam "Motor de Conversão" sem fricção. Os componentes em `src/components` (Quiz e Hero) amparam estruturalmente isso.

**Functional Requirements Coverage:**
CMS Leve e "Zero-code" para a recepcionista validado com sucesso através da tática engenhosa de Google Sheets gerando CSV consumido passivamente pelo Edge Worker. 

**Non-Functional Requirements Coverage:**
- *NFR (GSF e LCP < 2.5s):* Completamente atendido pela exclusão mandatória de bibliotecas corporativas pesadas em favor da carga utilitarista < 700KB.

### Implementation Readiness Validation ✅

**Decision Completeness:**
Utilizaremos `npm create astro@latest`. Nenhuma ambiguidade sobrou para a IA de desenvolvimento adivinhar.

**Structure Completeness:**
A matriz do Workspace já está documentada pasta a pasta, travando improvisações perigosas.

### Gap Analysis Results

Não há Gaps (Brechas) arquiteturais críticos hoje.
*Gap Importante para Observação:* Como estamos injetando dados publicamente a partir do Google Sheets CSV, caso um administrador remova as permissões do arquivo "sem querer", a conexão SWR falhará. Embora tenhamos desenhado o *Graceful Degradation* para a UI não quebrar, o desenvolvimento silencioso de telemetria/erros (Sentry logs) foi transferido ao Pos-MVP para não poluir o JavaScript inicial.

### Architecture Completeness Checklist

**✅ Requirements Analysis**
- [x] Context analysis (Sustentabilidade/LCP alinhados)
- [x] Technical constraints identified (Limites diários do Cloudflare contornados)

**✅ Architectural Decisions**
- [x] Omissão estrita documentada
- [x] Integration patterns defined (Google Workspace via CSV)

**✅ Implementation Patterns**
- [x] Naming conventions established (Kebab vs Pascal vs CamelCase)
- [x] Process patterns documented (Ordenação canônica do Tailwind)

**✅ Project Structure**
- [x] Directory structure defined (`utils`, `components`, `tests`)
- [x] Component boundaries established (Smart components SSR vs Dumb Components)

### Architecture Readiness Assessment

**Overall Status:** READY FOR IMPLEMENTATION

**Confidence Level:** HIGH - A eliminação pragmática de lógicas desnecessárias e o rebaixamento de operações de banco de dados para leituras primitivas Edge SSR confere alta rigidez contra o caos no Front-end.

**Key Strengths:**
- Custo de servidor na casa do zero absoluto duradouro.
- Altíssima autonomia para operadoras não-técnicas através de planilhas locais.
- Interface hiper responsiva.

### Implementation Handoff

**AI Agent Guidelines:**
- Follow all architectural decisions exactly as documented (Zero-React, Zero-Redux).
- Use implementation patterns consistently across all components (`PascalCase.astro`, etc).
- Respect project structure and boundaries (Pure logic exclusively in `src/utils`).
- Refer to this document for all architectural questions.

**First Implementation Priority:**
Executar a história de instalação estrita: `npm create astro@latest bellezapura-site -- --template minimal`, seguido da instalação paralela `npx astro add tailwind cloudflare --yes` isolada em branch.
