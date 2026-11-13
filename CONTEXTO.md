# CONTEXTO.md — Landing Page "Criando as Marcas do Futuro"

## 1. Visão Geral do Projeto
Desenvolvimento e publicação da Landing Page oficial de alta conversão, autoridade institucional e apelo visual cinematográfico para o livro **"Criando as Marcas do Futuro — Método A2M SigniTelling™"**, de autoria de **Maurício Sarmento**.

O projeto integra a fundamentação teórica acadêmica da dissertação de mestrado em Administração do autor na **FGV (Fundação Getulio Vargas)**, sua experiência como professor da **ESPM**, especialista em comunicação pela **USP**, formação em cinema na **NYFA (New York Film Academy)** e portfólio prático com marcas globais líderes de mercado.

---

## 2. Tecnologias e Arquitetura
- **Frontend Core**: React 18 com TypeScript e Vite.
- **Navegação & Header**: Cápsula flutuante suspensa (`rounded-2xl` com glassmorphism), links alinhados estritamente lado a lado sem quebra de linhas (`whitespace-nowrap`) e menu mobile com backdrop-blur-xl e scroll lock.
- **Portfólio de Marcas**: Carrossel infinito horizontal (*marquee* contínuo com pausa no hover e degradês de transição lateral) com as 13 marcas atendidas pelo autor.
- **Navegação & Header**: Cápsula flutuante suspensa (`rounded-2xl` com glassmorphism), links alinhados estritamente lado a lado sem quebra de linhas (`whitespace-nowrap`) e menu mobile com backdrop-blur-xl e scroll lock.
- **Portfólio de Marcas**: Carrossel infinito horizontal (*marquee* contínuo com pausa no hover e degradês de transição lateral) com as 13 marcas atendidas pelo autor.
- **Estilização**: Tailwind CSS v3 com paleta customizada Deep Blue (`#030917`, `#071329`, `rgba(13, 33, 68, 0.55)`), ciano elétrico (`#38BDF8`) e âmbar/ouro (`#F59E0B`).
- **Fontes**: *Plus Jakarta Sans* (títulos de autoridade), *Inter* (corpo de texto de alta legibilidade) e *JetBrains Mono* (terminal de código JSON).
- **Ícones**: Lucide React.
- **Infraestrutura**: 100% conteinerizado em Docker com imagem multi-stage (`node:20-alpine` para build e `nginx:1.27-alpine` como runtime de alto desempenho).
- **Ambiente Local / Preview**: Mapeado na porta `http://localhost:8080`.
- **Governança de Design (Impeccable)**: Inicializado via `/impeccable init` com documentação durável de produto em `PRODUCT.md` e guia de referência em `README.md`.
- **CI/CD e Deploy de Produção**: Pipeline do GitHub Actions configurado em `.github/workflows/deploy.yml`, perfil de produção em `docker-compose.prod.yml` e arquivo `.gitignore` configurado.

---

## 3. Ativos Visuais Integrados (100% Utilizados)
Em cumprimento à diretriz expressa do usuário (*"ultilize todasa as imagens"*), todos os 6 ativos foram alocados estrategicamente na experiência:
1. `public/assets/img01.png`: Painel arquitetônico monumental em galeria/exposição urbana, conferindo grandiosidade e escala institucional na seção *ShowcaseGallery*.
2. `public/assets/img02.png`: Close-up do livro físico nas mãos do leitor, transmitindo materialidade e densidade reflexiva no *Manifesto*.
3. `public/assets/img03.png`: Composição dos 4 exemplares (capas e contracapas) dispostos horizontalmente, ilustrando a jornada dos 4 pilares do *Método A2M SigniTelling™*.
4. `public/assets/img04.png`: Retrato profissional de alta resolução de Maurício Sarmento na seção *Sobre o Autor*.
5. `public/assets/img05.png`: Mockup 3D premium do livro com reflexo de luz e aura dourada no *Hero* e na seção de *Conversão (Capa Comum & Kindle)*.
6. `public/assets/img06.png`: Selo e escudo oficial *"ASSISTENTE A2M SIGNITELLING™ AI"*, utilizado no favicon, na identidade visual da *Navbar* e no topo da seção interativa do *Assistente AI*.

---

## 4. Otimizações de SEO e GEO (Generative Engine Optimization)
- **Schema.org estruturado em JSON-LD** com entidades `Book`, `Person` (Maurício Sarmento, FGV/ESPM/USP) e `SoftwareApplication` (Assistente AI gratuito).
- **robots.txt** configurado para buscadores tradicionais e agentes de IA (ChatGPT, Claude, Perplexity, Applebot).
- **sitemap.xml** com estrutura de rotas e âncoras canônicas.
- **Preload de LCP** para renderização acelerada do mockup 3D do Hero.
- **Auditoria de Craft e Estabilidade**: Eliminação de anti-patterns de gradientes decorativos em títulos (detector Impeccable zerado), garantia de cópia resiliente em qualquer browser e CLS 0.00 através de dimensões fixadas.

---

## 5. Estrutura de Conteúdo e Rastreabilidade
- **Sem textos genéricos ou lorem ipsum**: Todo o conteúdo verbal foi integralmente extraído e alinhado com a obra e as diretrizes do autor contidas em `LANDING PAGE LIVRO.pdf`.
- **Diferenciação Crítica**: Contraste analítico entre o que posicionamento NÃO é (slogan bonito, adjetivos empilhados, ficha técnica) e o que É (diferença provada, significado organizador, renúncia e rastreabilidade).
- **Prompt Oficial em JSON**: Prompt estruturado para modelos de linguagem (ChatGPT, Claude, Gemini, Copilot) com cópia em 1 clique e notificação toast.
- **Conformidade Legal 2026**: Exibição dos 4 limites mandatórios do assistente e dos 10 termos integrais de uso e licenciamento com canal de contato direto institucional (`mauricio.sarmento@espm.br`).
