---
title: "Product Brief Distillate: bellezapura-site"
type: llm-distillate
source: "product-brief-bellezapura-site.md"
created: "2026-03-31T14:42:00"
purpose: "Token-efficient context for downstream PRD creation"
---

* **Requirements hints:**
  * Exibição completa da **Grade de Horários**, cobrindo todas as aulas diversas: Natação (bebês, kids, adulto), Hidroginástica, Muay Thai, Pilates solo, Baby Class, Sapateado, Jazz, Hip hop, Funcional, Baby Tap.
  * **Gestão Dinâmica de Modalidades (CMS/Config Simplificada)**: O site DEVE ser preparado para fácil inclusão, edição ou exclusão de modalidades (algumas danças estão em fase de teste de 3 meses). Isso exigirá uma arquitetura que permita que o conteúdo da grade e ofertas seja editável pela equipe da academia sem precisar de um desenvolvedor avançado.
  * **Estratégia Mista de Preços**: Apenas os planos de **Musculação** (Em Dupla R$80, Mensal R$90, Trimestral R$210, Semestral R$350, Anual R$582) terão seus valores exibidos abertamente. Para as **todas as outras modalidades** (Natação, Hidro, Lutas, Danças, Pilates), os preços não serão listados no site, sendo substituídos por Call-to-Actions (ex: "Consultar Valores" ou "Agendar Aula Teste") que direcionem o visitante diretamente para o WhatsApp, configurando uma isca forte para o time de vendas.
  * Elementos obrigatórios de interface de usuário (UI): Uma seção integrada de **Google Maps** para garantir visibilidade nas buscas estritamente locais do bairro e guiar o tráfego físico.
  * Seção obrigatória de **FAQ (Perguntas Frequentes)** visando o autoatendimento básico e quebrando grandes objeções antes do cliente clicar no WhatsApp.
  * Botões de CTA ancorados para enviar o visitante ao WhatsApp de vendas de forma nativa (Número da clínica: 558599699439). De preferência com mensagens parametrizadas pela modalidade selecionada.
  * Necessidade de áreas de destaque para promover ganhos do "Combo Família" e programas de indicação (Traga um parente/amigo).
  * Seção obrigatória de parcerias corporativas, dando amplo destaque aos parceiros recém validados: **TotalPass** e **Wellhub**.

* **Technical context:**
  * O design visual e o *UI Kit* devem derivar estritamente da herança visual do Logo original: tons de Vermelho, Amarelo, Azul Claro e Azul Escuro. Uso de motivos visuais que liguem o mundo fitness (halter) com as disciplinas aquáticas (nadador).
  * Desenvolvimento da interface da grade de horários obrigatoriamente **Mobile-first** para combater o atrito diário de alunos conferindo aulas no celular.

* **Competitive intelligence:**
  * A academia é um monumento histórico regional: Fundada em novembro de 1994, primeira academia da Cidade 2000.
  * Maior *Moat* (fosso competitivo) da região: É a **única** academia que dispõe de uma piscina em todo o bairro.
  * Ambiente focado na comunidade e na família, criando altíssima retenção anti-redes low-cost.

* **Open questions / Scope signals:**
  * O PRD precisará definir se os preços da planilha serão abertos escancaradamente no site (reduz leads curiosos, aumenta qualificação) ou se a vitrine atuará como "isca" ("Fale com um consultor para saber valores").
  * Decisão pendente para o PRD/Arquiteto sobre o escopo estrutural: Lançar como *One-Page* enxuta focada em conversão rápida ou como *Multi-page* já visando o cerco asilo de tráfego SEO Local e sub-páginas dedicadas (ex: "Academia com Piscina Cidade 2000").
  * O PRD definirá se o pacote "Combo Família" demanda uma Landing Page isolada para impulsionamento de tráfego orgânico/pago.
