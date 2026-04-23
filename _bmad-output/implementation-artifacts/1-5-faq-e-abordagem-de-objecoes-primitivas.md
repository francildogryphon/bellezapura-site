---
# bellezapura-site
# Epic 1: Fundação Digital & Autoridade Institucional
# Story 1.5: FAQ e Abordagem de Objeções Primitivas
status: in-progress
---

# Story 1.5: FAQ e Abordagem de Objeções Primitivas

## 📖 Story Foundation
**As a** Indeciso/Lead Cauteloso,
**I want** ver minhas dúvidas logísticas principais respondidas rapidamente,
**So that** eu não desista de entrar em contato devido a pequenos atritos "invisíveis".

### Acceptance Criteria (BDD)
- **Given** uma zona de navegação secundária (antes do encerramento com mapas).
- **When** eu observo a lista de dúvidas frequentes e clico em seus cabeçalhos expansíveis (Sanfona).
- **Then** eu leio respostas curtas e objetivas abordando tópicos normativos como Exame Médico, Horários e Idade Mínima (FR05, FR24).
- **And** o comportamento da interface é fluído sem engasgos causados por JavaScript (FR24).

---

## 💻 Developer Context & Guardrails

### 1. Technical Requirements & Architecture Compliance
- **Zero-JS Accordion:** Obrigatoriedade do uso das tags HTML5 nativas `<details>` e `<summary>`. Proibido importar bibliotecas de interação JS como AlpineJS ou Vue apenas para esconder blocos de texto.
- **Micro-interações Tailwind:** Animações via classes Tailwind (`group`, `group-open:rotate-180`, etc.) utilizando as propriedades estendidas nativas para transição de opacidade/altura.
- **Estruturação Padrão:** Componente único `src/components/FaqSection.astro`.

### 2. UI/UX Design Requirements
- **Theme Consistency:** Fundo da seção em `bg-navy-deep` ou uma variante muito próxima (ex. `bg-gray-900`) e os cartões fechados das perguntas com contornos visíveis. Um toque do amarelinho nos hovers para trazer calor.
- **Tipografia:** Perguntas em `font-heading font-medium` (Inter ou Outfit) e respostas em `font-sans text-gray-400 text-sm` para hierarquia óbvia.

### 3. Execution Plan
- [ ] Construir arquivo `FaqSection.astro`.
- [ ] Incorporar Array de dúvidas pré-determinadas (Horários, Idade, Avaliação, Personal trainer, Valores).
- [ ] Injetar `<FaqSection />` em `index.astro` entre a listagem de corporativos e o Mapa de Bairro.

*Ultimate context engine analysis completed - comprehensive developer guide created*
