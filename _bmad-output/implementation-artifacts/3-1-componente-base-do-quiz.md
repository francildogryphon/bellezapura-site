---
# bellezapura-site
# Epic 3: Geração Rápida de Demanda via Calculadora (Quiz)
# Story 3.1 e 3.2: Engine Base e Match Lógico (Lottie Authored)
status: in-progress
---

# Story 3.1 e 3.2: Calculadora de Demanda (Quiz Engine)

## 📖 Story Foundation
**As a** Visitante cansado ou indeciso,
**I want** apertar em botões gigantes (Choice Pills) descrevendo minhas frustrações atuais (ex: "Quero fugir da rotina", "Preciso de fôlego"),
**So that** a plataforma escolha com exatidão a modalidade que eu preciso, sem eu precisar preencher formulários longos em teclados minúsculos.

### Acceptance Criteria (BDD)
- **Given** o visitante rolando para uma sessão interativa nova.
- **When** interage com pílulas massivas e táteis, ativando estados visuais.
- **Then** a UI capta seleções em série e as processa numa lógica de "Match".
- **And** exibe uma Tela Final oferecendo a turma perfeita integrando URLs diretas `wa.me/` ricas em parâmetros contextuais (FR10).

---

## 💻 Developer Context & Guardrails

### 1. Technical Requirements & Architecture Compliance
- **Isolamento de Estado (Zero-Frameworks):** Usaremos APIs Nativas da Web (Web Components via Astro Custom Element) isolando a interatividade do Quiz dentro de um pequeno escopo Vanilla JavaScript contido (Ex: `class QuizEngine extends HTMLElement {}`).
- **Nenhuma biblioteca React/Svelte permitida:** A ordem dos NFRs impede inflar a aplicação (NFR03).
- **Integração de Animação Lottie:** Faremos a injeção do Script Player do LottieFiles de forma otimizada para exibir uma animação estonteante em JSON logo na quebra do formulário, aumentando o Fitzen feeling exigido em NFRs de UI sem sobrecarregar GIFs longos.

### 2. UI/UX Design Requirements
- **Lottie Header:** Recomenda-se renderizar um Vector Player do Lottie no topo do componente ilustrando *esforço, pensamento, mente ou bem estar*.
- **Pills Touch Areas:** > 56px para garantir "Finger Ergonomics" total (Norma UX mobile nativa).
- **Match Call-Out:** O bloco final do "Match" é pintado com fundos de alta conversão.

### 3. Execution Plan
- [ ] Construir arquivo `<QuizSection />` em Astro contendo os elementos literais em HTML.
- [ ] Definir a *Tag ScriptLottie* que buscará do LottieFiles de forma assíncrona.
- [ ] Programar `<script>` contendo a lógica de travessia do Flow do Quiz (Pergunta 1 -> Pergunta 2 -> Resultado).
- [ ] Definir a árvore de match: (Se Objetivo=Secar & Gosta_de_Acao=Sim -> "Muay Thai").

*Ultimate context engine analysis completed - comprehensive developer guide created*
