---
# bellezapura-site
# Epic 1: Fundação Digital & Autoridade Institucional
# Story 1.3: Seção Hero e Quebra Gelo Institucional
status: ready-for-dev
---

# Story 1.3: Seção Hero e Quebra Gelo Institucional (+30 Anos e Slogan)

## 📖 Story Foundation
**As a** "Mãe/Executivo" em busca de soluções físicas,
**I want** ser recebido por alto impacto visual da tradição da marca e seus benefícios,
**So that** preconceitos com "academias simples de bairro" caiam logo no 1º segundo (LCP).

### Acceptance Criteria (BDD)
- **Given** o render inicial da página.
- **When** eu olho a seção principal visível acima da dobra.
- **Then** devo consumir visualmente através do `HeroHeader` a marca da tradição de 30 anos (Desde 1994) e menções à infraestrutura (FR01, FR02).
- **And** componentes destacando o aviso central de "Não cobramos taxa de matrícula", selos de padronização acadêmica (FR03) e slogan "A queridinha da Cidade 2000" (FR22) em alto contraste com a paleta do sistema (WCAG AA).

---

## 💻 Developer Context & Guardrails

### 1. Technical Requirements & Architecture Compliance
- **Performance (LCP < 2.5s / GSF):** Imagens do Hero (caso use fallback imagético) devem estar altamente compressas (formato ideal: WEBP) integradas de forma passiva do diretório `public/` ou `src/assets/`. Como o Hero Section está acima da dobra de renderização, assets visuais *NÃO devem* sofrer lazy-loading para maximizar pontuação das diretrizes Core Web Vitals (LCP). 
- **Componentização:** Utilização exclusiva de Astro Components `src/components/HeroHeader.astro`. Todo o HTML deve permanecer livre de pacotes `JS` no frontend para reatividade (Astro Islands/Vanilla JS é desnecessário aqui, tudo deve ser HTML+CSS estático/Tailwind puro).

### 2. UI/UX Design Requirements
- **Theme:** Utilizar `bg-navy-deep` como o invólucro primário da Hero. Botões secundários ou selos podem espelhar `sun-yellow` (Amarelo Solar - `#FCD34D`) para o contraste. Letreiros grandes devem usar texturas leves.
- **Tipografia:** Hero Title obrigatoriamente aplica fonte da família `font-heading` (`Outfit`) no tamanho ultra-escala mobile (ex: `text-5xl` ou `text-6xl`). Subtítulos se beneficiam de `font-sans` (Inter).
- **Heroic Heritage Direction:** Sem popups. Todo o conteúdo deve gritar "luxo" usando enorme espaçamento (whitespace). Ausência obrigatória de fotografias genéricas - na simulação utilizaremos textos fortes e ícones abstratos SVG no padrão Hero-Header, até o cliente inserir a mídia real estática.

### 3. Previous Story Intelligence
- O `LocationMap.astro` e `Footer.astro` (Store 1.2) foram desacoplados lindamente sob uma paleta unificada. O `HeroHeader.astro` deve engolir exatamente a div central inicial do `index.astro`, removendo o aviso provisório de "Em construção - Projeto Astro Serverless".

---

## ✅ Story Completion Execution Plan
- [ ] Construir o Componente `HeroHeader.astro` incorporando os FRs e contrastes da UI.
- [ ] Aplicar injeções de slogans "Não Cobramos Taxa de Matrícula" em badges dourados (`bg-sun-yellow text-navy-deep`).
- [ ] Acoplar este cabeçalho na abertura superior do arquivo `src/pages/index.astro`.

*Ultimate context engine analysis completed - comprehensive developer guide created*
