---
# bellezapura-site
# Epic 1: Fundação Digital & Autoridade Institucional
# Story 1.4: Integração de Parceiros Corporativos e Redes Sociais
status: in-progress
---

# Story 1.4: Integração de Parceiros Corporativos e Redes Sociais

## 📖 Story Foundation
**As a** Usuário de rotina web dinâmica,
**I want** ancoragens visuais dinâmicas confirmando chancelas B2B,
**So that** eu ateste facilidade de uso caso possua TotalPass/Wellhub e explore as redes oficiais da marca.

### Acceptance Criteria (BDD)
- **Given** a página central rolável de autoridade após o Topo.
- **When** eu procuro integração corporativa institucional.
- **Then** devo ver selos do TotalPass e Wellhub desenhados para endosso comercial forte (FR04).
- **And** devo localizar hiperlinks organizados para a rede social (Meta Apps / TikTok) impulsionando o canal social da academia (FR23).

---

## 💻 Developer Context & Guardrails

### 1. Technical Requirements & Architecture Compliance
- **Isolamento de Componentes:** Criar `src/components/CorporatePartners.astro` estritamente dedicado às logomarcas (Wellhub / TotalPass). Estes ícones/imagens devem respeitar o design responsivo GSF (uso de SVG ou texto estilizado para simular o "Aceitamos TotalPass").
- **Integração de Links Sociais:** A inclusão das redes sociais será feita primordialmente no `src/components/Footer.astro` para otimizar espaço de tela, mantendo a "área nobre" central livre para argumentação de venda B2C.

### 2. UI/UX Design Requirements
- **Theme:** Contrastes brandos usando tons de cinza ou monocromáticos para os parceiros corporativos. Em UI premium, logomarcas de aceitação (como cartões ou convênios) costumam ser "grayscale" e opacos `opacity-60` `hover:opacity-100` num fundo sólido de repouso ou escuro puro.
- A faixa corporativa deve transicionar suavemente do HeroHeader para a rolagem inferior.

### 3. Execution Plan
- [ ] Criar o componente `CorporatePartners.astro`
- [ ] Editar `Footer.astro` inserindo SVGs/links do Instagram, Facebook e TikTok.
- [ ] Injetar `<CorporatePartners />` em `index.astro` logo abaixo do Hero.

*Ultimate context engine analysis completed - comprehensive developer guide created*
