---
# bellezapura-site
# Epic 2: Engajamento Visual & Quebra de Objeções Ambientais
# Story 2.1: Desenvolvimento da Vitrine Transparente B2C
status: in-progress
---

# Story 2.1: Desenvolvimento da Vitrine Transparente B2C

## 📖 Story Foundation
**As a** Visitante focado em saúde ou Avaliador de Ambiente,
**I want** visualizar galerias imersivas da infraestrutura (pesos livres, salão e, especialmente, a piscina coberta assinada),
**So that** eu ateste a qualidade e limpeza premium que a academia prega em seu slogan de "30 anos".

### Acceptance Criteria (BDD)
- **Given** rolagem direcional para a "Segunda Dobra" do site (logo após a faixa das parceiras corporativas).
- **When** bato o olho na vitrine.
- **Then** visualizo uma grade imagética (CSS Grid) exibindo os ambientes de forma limpa, direta e sem distorções horizontais ou verticais em mobile/desktop (FR06).
- **And** nenhuma biblioteca interativa externa (ex: SwiperJS, Slick, Glide) travará o scroll natural exigindo scripts JS e violando nossa conformidade ecológica.

---

## 💻 Developer Context & Guardrails

### 1. Technical Requirements & Architecture Compliance
- **Zero-JS CSS Grid Masonry:** É estritamente proibida a importação de bibliotecas de "Carousel". O layout moderno prefere o Scroll nativo horizontal (`overflow-x-auto snap-x`) ou um lindo Grid CSS (`grid-cols-2 md:grid-cols-3` e `gap`). Optaremos pelo Grid Responsivo com base nos design tokens Tailwinds, utilizando CSS Columns se necessário. 
- **Aspect Ratios Naturais:** Forçar Tailwind `aspect-video` ou `aspect-square` garantindo que não ocorra salto no Layout (Cumulative Layout Shift) mesmo quando a CDN estiver atrasada. 

### 2. UI/UX Design Requirements
- **Theme:** Como queremos impacto de portfólio, é permitido usar `bg-gray-900` gerando contraste com a paleta base `navy-deep` para o invólucro do álbum. Imagens devem sofrer `hover:scale-105` ou `brightness-90 hover:brightness-110` mantendo a sinergia viva.
- **Conteúdo de Mock:** Na ausência de fotos originais durante o dev, usaremos URLs descritivas de repositórios dinâmicos focados em esportes, com tags como "gym interior", "swimming pool", simulando o ambiente perfeitamente.

### 3. Execution Plan
- [ ] Criar o componente `ShowcaseGallery.astro` operando puramente sobre CSS Flex/Grid.
- [ ] Injetar placeholders temáticos (Weights, Pool, Treadmills) no template base.
- [ ] Acoplar este Showcase na `index.astro` imediatamente entre `<CorporatePartners />` e `<FaqSection />`.

*Ultimate context engine analysis completed - comprehensive developer guide created*
