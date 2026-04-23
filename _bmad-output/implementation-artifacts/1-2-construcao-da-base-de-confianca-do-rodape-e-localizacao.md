---
# bellezapura-site
# Epic 1: Fundação Digital & Autoridade Institucional
# Story 1.2: Construção da Base de Confiança do Rodapé e Localização
status: ready-for-dev
---

# Story 1.2: Construção da Base de Confiança do Rodapé e Localização

## 📖 Story Foundation
**As a** Visitante de site acadêmico de bairro,
**I want** identificar facilmente a segurança governamental (LGPD, CNPJ) e o pinhole no Maps,
**So that** saiba que se trata de uma corporação física registrada e segura para visita e compra.

### Acceptance Criteria (BDD)
- **Given** o layout base operando.
- **When** eu navego pelas sessões inferiores da Landing Page.
- **Then** eu visualizo informações estáticas LGPD baseadas em cookies passivos e Razão Social validada (FR20, FR21).
- **And** visualizo um iFrame inalterado para o Google Maps em sub-sessões específicas sem travar a thread na carga inicial (FR19).

---

## 💻 Developer Context & Guardrails

### 1. Technical Requirements & Architecture Compliance
- **Performance Absoluta (LCP < 2.5s / GSF < 700KB):** O iFrame do Google Maps deve **obrigatoriamente** utilizar o atributo HTML nativo `loading="lazy"` e `title="Localização da Academia Belleza Pura"`. A thread principal do browser jamais pode ser bloqueada pela carga dos scripts cartográficos do Google.
- **Zero-JS no Cliente:** Nenhuma biblioteca externa de Javascript ou estado assíncrono (como Redux ou libs de cookies massivas) será importada. Os dados LGPD (termos passivos) integrarão os textos estáticos do rodapé (Footer), em pura aderência ao SSR/Static HTML do Astro.
- **File Structure e Organização:**
  - `src/components/LocationMap.astro` (Bloco visual do mapa Google)
  - `src/components/Footer.astro` (Rodapé unificando menções normativas e assinatura física / CNPJ da empresa)
  - Chamada destes blocos na rota `src/pages/index.astro`.

### 2. UI/UX Design Requirements
- **Theme:** Aplicar fielmente os tokens base. O Footer geralmente abriga os tons mais pesados (ex: `bg-navy-deep`).
- **Typography:** As obrigações como CNPJ exigem hierarquia minoritária: fontes da classe `<p>` (Inter/Roboto), preferencialmente em opacidade reduzida ou cinzas controlados garantindo claro contraste textual contra os fundos escuros (WCAG AA). Textos pequenos text-sm.
- **Spacing:** Uso intensivo do sistema "Base-8" do Tailwind (`py-8`, `px-4`). O design repudia rodapés "esmagados".

### 3. Build & Git Intelligence
- O repositório já está engatilhado para deploys via Cloudflare Pages + CI com Playwright.
- Assegurar a compilação fluida local validando se não haverá CLS (Cumulative Layout Shift) originário da falta de largura e altura declaradas na aba do iFrame (Height e Width devem ser informados antecipadamente antes ou nos tokens de container do mapa).

---

## ✅ Story Completion Execution Plan
- [ ] Desenvolver Componente `LocationMap.astro`.
- [ ] Desenvolver Componente `Footer.astro` com dados legais e razões socias.
- [ ] Acoplar os dois componentes na terminação do arquivo `index.astro`.

*Ultimate context engine analysis completed - comprehensive developer guide created*
