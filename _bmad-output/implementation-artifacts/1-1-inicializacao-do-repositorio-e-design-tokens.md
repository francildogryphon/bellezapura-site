# Story 1.1: Inicialização do Repositório e Design Tokens (Setup Arquitetural)

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a Engenheiro de Sistema B2C,
I want iniciar a raiz do projeto Astro Minimal e estabelecer os tokens visuais,
so that o desenvolvimento de componentes respeite os rigores de performance da Cloudflare, limites GSF e fidelidade ao Premium Dark Theme.

## Acceptance Criteria

1. **Given** um ambiente de desenvolvimento vazio ou contendo arquivos base pré-existentes.
2. **When** eu insiro o comando nativo Astro `minimal`.
3. **Then** o vite compila os pacotes Tailwind, Cloudflare adapter e Playwright para e2e, e o `tailwind.config.mjs` espelha as cores padronizadas (Navy Deep #1E3A8A, Sun Yellow #FCD34D, Crimson #DC2626).
4. **And** é garantida a fundação leve para LCP < 2.5s.

## Tasks / Subtasks

- [x] Task 1: Executar setup inicial do projeto Astro e dependências
  - [x] Certificar-se que o repositório possua os arquivos base necessários para Astro.
  - [x] O projeto já está na pasta `bellezapura-site`, adicionar `npx astro add tailwind cloudflare --yes`. Em caso de diretório não vazio, adaptar a inicialização usando pacotes npm para espelhar a baseline do minimal.
  - [x] Adicionar o Playwright end-to-end nas dependências.
  - [x] Adicionar plugin auto-ordenador do tailwind `prettier-plugin-tailwindcss`.
- [x] Task 2: Configurar o Tailwind CSS e Design Tokens
  - [x] Ajustar `tailwind.config.mjs` incluindo `navy-deep` (#1E3A8A), `sun-yellow` (#FCD34D) e `crimson-action` (#DC2626).
  - [x] Configurar família de fontes (moderna geométrica Outfit para Headers, Inter/Roboto para Corpo).
- [x] Task 3: Criar Estrutura de Pastas e Arquivos Principais
  - [x] Criar estruturação em `src/components/`, `src/layouts/`, `src/pages/`, `src/styles/` e `src/utils/`.
  - [x] Remover conteúdo supérfluo para garantir que a build inicial atenda os princípios da Green Software Foundation (zero bloat, <700KB compactado).
  - [x] Criar `src/styles/global.css`.
- [x] Task 4: Criar Scripts Github Actions base
  - [x] Criar o fluxo de pipeline para Testes CI do Playwright (`.github/workflows/playwright.yml`).

## Dev Notes

- **Technical Stack:** Astro JS, Tailwind CSS, Cloudflare Pages Worker (`@astrojs/cloudflare`).
- **Zero-JS no Client:** Estritamente proibido incluir bibliotecas UI com heavy state management (como React ou Redux).
- Respeite as padronizações estipuladas na Architecture:
  - Nomes de componentes astro e layouts sempre em `PascalCase.astro`.
  - Rotas e diretórios de assets sempre em `kebab-case`.
- A estilização ocorrerá prioritariamente com as classes do Tailwind, não criar `.css` secundários (Exceto o central global configurando os layers).

### Project Structure Notes

- Alignment with unified project structure: toda conexão remota a ser feita depois (com Google Sheets via SSR) se concentrará em `src/utils/`, garanta que este framework esteja em compliance.

### References

- [Source: planning-artifacts/epics.md#Epic-1] (Epic 1: Fundação Digital & Autoridade Institucional)
- [Source: planning-artifacts/architecture.md#Starter-Template-Evaluation] (Decision: Astro Minimal + Playwright)

## Dev Agent Record

### Agent Model Used

Gemini 3.1 Pro (High)

### Debug Log References

- Resolvido conflito de versão de peer dependencies downgrading to Astro 4 (`astro@4.16.15`, `@astrojs/cloudflare@11.0.0`, `@astrojs/tailwind@5.1.0`)
- Configuração do tailwind design tokens (navy-deep, sun-yellow, crimson-action)
- Build Astro validado sucesso ✅

### Completion Notes List

- Todos os Acceptance Criteria foram executados.
- ASTRO Base Files & Playwright dependencies instalados via CLI adaptado.
- Build atinge as constraints do design usando `astro.config.mjs` + `tailwind.config.mjs`.

### File List

- `package.json`
- `astro.config.mjs`
- `tailwind.config.mjs`
- `prettier.config.mjs`
- `src/env.d.ts`
- `src/styles/global.css`
- `.github/workflows/playwright.yml`
- `src/layouts/Layout.astro`
- `src/pages/index.astro`
