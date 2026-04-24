---
# bellezapura-site
# Epic 2: Catálogo de Modalidades Progressivo e Híbrido
# Story 2.4: Renderização Orgânica de Horários (Edge SSR)
status: in-progress
---

# Story 2.4: Renderização Orgânica de Horários (Edge SSR)

## 📖 Story Foundation
**As a** Engenheiro de Dados / Gestor,
**I want** injetar no componente visual as faixas de horário mais recentes disponíveis para as turmas listadas,
**So that** o usuário possa confirmar virtualmente que tem "Match" de Agenda antes mesmo de clicar no WhatsApp para negociar Valores.

### Acceptance Criteria (BDD)
- **Given** os elementos sanfonados em tela prontas no navegador.
- **When** o Astro processa os cards durante a carga HTML (Edge SSR/SSG).
- **Then** deve compilar a aba `<horários>` sob a descrição de cada turma com as janelas disponíveis (FR14).
- **And** em caso de queda na API base, a interface não dispara erros destrutivos 500, operando de forma invisível.

---

## 💻 Developer Context & Guardrails

### 1. Technical Requirements & Architecture Compliance
- **Isolamento de API:** Construir um utilitário cego (`src/utils/fetchSchedules.ts`) que idealmente busca de JSON/Sheets. Usaremos o "Graceful Degradation" retornando um Mock Local se a API Externa não estiver conectada.
- **Sem penalidade no Cliente:** Como é renderização purista, a array das classes receberá o map injetando elementos de Badge como `<span>Seg e Qua: 18h</span>` puro no dom.

### 2. UI/UX Design Requirements
- **Micro-Badges (Tags):** Os horários descritos devem imitar o design visual de "Tags" de desenvolvimento, pequenas cápsulas circulares ou quadradinhas sutis `bg-navy-deep text-white border border-gray-700 text-xs px-2 py-1 rounded`, para não gerar poluição entre o Texto e o CTA WhatsApp.

### 3. Execution Plan
- [ ] Criar o utilitário `src/utils/schedulesConfig.ts`.
- [ ] Alterar o `ModalitiesCatalog.astro` instanciando o utilitário e injetando as cápsulas temporais dentro de cada laço de mapeamento de turma, antes do botão CTA.
- [ ] Testar quebra de linhas para quando houver mutiplos horários.

*Ultimate context engine analysis completed - comprehensive developer guide created*
