---
# bellezapura-site
# Epic 2: Catálogo de Modalidades Progressivo e Híbrido
# Story 2.2: Construção da Grade em Sanfona Oculta
status: in-progress
---

# Story 2.2: Construção da Grade em Sanfona Oculta (Aulas, Danças e Lutas)

## 📖 Story Foundation
**As a** Visitante atraído pelas "Modalidades Extra" (ex: procurando natação pro filho ou luta para si),
**I want** encontrar as ramificações de aulas segmentadas em uma interface sanfonada,
**So that** eu investigue o portfólio sem lidar com a "claustrofobia visual" de tabelas complexas gigantescas.

### Acceptance Criteria (BDD)
- **Given** o catálogo profundo contendo inúmeras lutas, danças e faixas aquáticas da Academia.
- **When** o usuário desliza pela página e encontra as chancelas (Categorias principais: Aquático, Lutas, Danças, Corpo Saudável).
- **Then** um toque na "pílula/card" expande uma gaveta natural exibindo cada modalidade específica listada para a chancela.
- **And** há CTAs de transbordo explícitos para o WhatsApp solicitando preços/teste ("Falar com Consultor" ao invés de R$ 99,00) (FR06).

---

## 💻 Developer Context & Guardrails

### 1. Technical Requirements & Architecture Compliance
- **Zero-JS Accordion Oculto:** Tal como fizemos na FAQ, a grade das modalidades usará estritamente `<details>` e `<summary>`. O state de abertura é manipulado pelo DOM Nativo, garantindo performance GSF extrema.
- **Abstração Lógica Backend-Ready:** Os dados devem ser mapeados em constantes JSON no front matter (Astro) para que na **Story 2.4** (Injeção via Google Sheets SSR) a substituição seja puramente "Plug & Play", sem danificar CSS.
- **Mobile First Focus:** Evite margens explosivas; as sanfonas devem parecer listas modernas de Single-Page Applications (SPA), similares a itens do "Configurações" do iOS.

### 2. UI/UX Design Requirements
- **Theme:** Fundo base integrando as zonas escuras (`bg-navy-deep`).
- **Cards e Headers:** Os campos tocáveis das Categorias da Sanfona ficarão no estilo de botões ou divisórias com fundo leve (ex: `bg-blue-900/40`), para guiar o toque do polegar (UX Hitbox confortável).

### 3. Execution Plan
- [ ] Criar o Artefato deste épico no Tracker (`2-2-construcao-da-grade-em-sanfona-oculta.md`).
- [ ] Criar arquivo `ModalitiesCatalog.astro` com dados mockados em árvore (Category -> Classes) listando todas as prioridades base (Natação bebê/kids/adulto, Hidro, Ballet, Tap, Muay Thai, Pilates Solo, etc.).
- [ ] Criar a integração com CSS puro manipulando o `<details>` e `<summary>` para a galeria de treinos.
- [ ] Aplicar botões de CTA ("Agendar Aula Teste") dentro de cada sanfona.
- [ ] Injetar no fluxo da página home após a vitrine e a musculação.

*Ultimate context engine analysis completed - comprehensive developer guide created*
