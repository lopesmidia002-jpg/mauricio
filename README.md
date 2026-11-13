# Criando as Marcas do Futuro — Método A2M SigniTelling™

> **Landing Page Oficial, Metodologia de Posicionamento e Assistente de Inteligência Artificial**  
> Obra de **Maurício Nunes Sarmento** (FGV / ESPM / USP / NYFA).  
> *"Produzir ficou mais fácil. Escolher ficou mais valioso."*

---

## 📌 Sumário
- [Visão Geral](#-visão-geral)
- [A Metodologia A2M SigniTelling™](#-a-metodologia-a2m-signitelling)
- [O Assistente A2M AI SigniTelling™](#-o-assistente-a2m-ai-signitelling)
- [Stack Tecnológico](#-stack-tecnológico)
- [Como Executar no Docker](#-como-executar-no-docker)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Ativos Visuais Integrados](#-ativos-visuais-integrados)
- [SEO, GEO e Metadados Estruturados](#-seo-geo-e-metadados-estruturados)
- [Sobre o Autor](#-sobre-o-autor)
- [Licença e Propriedade Intelectual](#-licença-e-propriedade-intelectual)

---

## 📖 Visão Geral

Esta aplicação é a Landing Page oficial de alta conversão, autoridade institucional e apelo visual cinematográfico para o livro **"Criando as Marcas do Futuro — Método A2M SigniTelling™"**.

A plataforma integra:
1. **Apresentação e Aquisição da Obra**: Links diretos e especificações para as edições **Capa Comum** (física impressa) e **Kindle** (eBook) na Amazon Brasil.
2. **Framework Acadêmico**: Fundamentação nascida da dissertação de mestrado em Administração do autor na **FGV (Fundação Getulio Vargas)**.
3. **Assistente de IA Gratuito**: Terminal interativo com prompt de sistema oficial em formato JSON estruturado, pronto para execução em qualquer modelo de linguagem (ChatGPT, Claude, Gemini, Copilot).
4. **Governança Legal e Ética**: 4 limites declarados da inteligência artificial e 10 termos integrais de licenciamento e uso (© 2026).

---

## 🧭 A Metodologia A2M SigniTelling™

O método foi estruturado para romper com o marketing de lugares-comuns, adjetivos genéricos ("inovação", "qualidade", "excelência") e fichas técnicas sem valor. É guiado por 4 pilares:

- **01. Realidade do Negócio**: Parte da capacidade operacional real, competências instaladas e modelo de entrega concreta. Sem ilusões.
- **02. Representação Legítima**: Investiga o que a oferta pode legitimamente representar sem romper a coerência com a execução física.
- **03. Significado Organizador**: Encontra a ideia central unificadora que organiza todas as decisões da marca, unindo produto, time e cliente.
- **04. Narrativa & Presença Digital**: Transforma a escolha estratégica em posicionamento verbal, storytelling proprietário, conteúdo perene e presença digital relevante na era da IA.

> **O Teste de Rastreabilidade**: Nenhuma promessa de marca é admitida se não puder ser comprovada em fatos, métricas ou processos concretos na operação.

---

## 🤖 O Assistente A2M AI SigniTelling™

O assistente foi concebido para democratizar o acesso a um processo rigoroso de posicionamento estratégico:
- **Código JSON Pronto para Cópia**: O usuário clica em *"Copiar Código JSON"* e cola diretamente na IA de sua preferência.
- **Diferenciação Clara**: O assistente conduz o percurso diagnóstico, mas o livro oferece a profundidade dos fundamentos e a razão pela qual é preciso renunciar ao excesso. A decisão final continua sendo humana.
- **Transparência e Limites**: Advertências explícitas sobre não-determinismo de LLMs, normas em profissões regulamentadas (saúde, direito, psicologia) e privacidade de dados confidenciais.

---

## 🛠️ Stack Tecnológico

| Camada | Tecnologia | Descrição |
| :--- | :--- | :--- |
| **Frontend** | React 18 + TypeScript | Componentização tipada de alto desempenho |
| **Build Tool** | Vite 5 | Empacotamento rápido e otimização de bundles |
| **Estilização** | Tailwind CSS v3 | Design system customizado (*Deep Blue*, *Ciano Elétrico*, *Âmbar Ouro*) |
| **Tipografia** | Google Fonts | *Plus Jakarta Sans* (títulos), *Inter* (corpo) e *JetBrains Mono* (código) |
| **Ícones** | Lucide React | Conjunto de ícones minimalistas e acessíveis |
| **Animações** | Framer Motion & CSS | Microinterações, efeitos de vidro (*glassmorphism*) e auras radiais |
| **Infraestrutura** | Docker (Multi-stage) | `node:20-alpine` (build) + `nginx:1.27-alpine` (runtime web) |
| **Servidor Web** | Nginx Alpine | Compressão Gzip, cache imutável (1 ano) e roteamento SPA |

---

## 🐳 Como Executar no Docker

O projeto foi concebido para execução **100% conteinerizada** sem dependência de ambientes Node instalados no host.

### Pré-requisitos
- [Docker](https://www.docker.com/) e Docker Compose instalados e em execução.

### 1. Iniciar o Ambiente de Desenvolvimento / Preview (Porta 8080)
```powershell
docker compose up -d --build
```
Após o build, acesse a Landing Page no navegador:
👉 **[http://localhost:8080](http://localhost:8080)**

### 2. Verificar Status e Healthcheck do Container
```powershell
docker compose ps
```

### 3. Visualizar Logs do Servidor Nginx
```powershell
docker compose logs -f
```

### 4. Parar os Containers
```powershell
docker compose down
```

### 5. Executar com Perfil de Produção (`docker-compose.prod.yml`)
```powershell
docker compose -f docker-compose.prod.yml up -d --build
```

---

## 📂 Estrutura do Projeto

```
asserts/
├── .dockerignore
├── .env.example              # Modelo de variáveis de ambiente para produção
├── .github/
│   └── workflows/
│       └── deploy.yml        # Pipeline de CI/CD automatizado (GitHub Actions)
├── .gitignore                # Regras de exclusão do Git
├── CONTEXTO.md               # Contexto estratégico e histórico da aplicação
├── docker-compose.yml        # Setup Docker de preview local (porta 8080)
├── docker-compose.prod.yml   # Perfil de produção com limites e rotação de logs
├── Dockerfile                # Build multi-stage (Node.js 20 Alpine -> Nginx Alpine)
├── DOCUMENTACAO.md           # Documentação técnica e arquitetura de engenharia
├── index.html                # Ponto de entrada com SEO, OpenGraph e Schema.org JSON-LD
├── nginx.conf                # Configuração do Nginx com gzip, headers e cache
├── package.json              # Dependências e scripts do projeto
├── PASSOS.md                 # Rastreamento de entregáveis por etapas
├── postcss.config.js         # Processador de estilos PostCSS
├── PRODUCT.md                # Diretrizes duráveis de produto (Padrão Impeccable)
├── public/
│   ├── assets/               # Os 6 ativos visuais do projeto
│   │   ├── img01.png         # Painel arquitetônico urbano / Showcase
│   │   ├── img02.png         # Livro físico nas mãos do leitor / Manifesto
│   │   ├── img03.png         # Composição dos 4 volumes / Método
│   │   ├── img04.png         # Retrato oficial do autor / Sobre o Autor
│   │   ├── img05.png         # Mockup 3D premium do livro / Hero e Conversão
│   │   └── img06.png         # Selo oficial do Assistente / Navbar, AI e Favicon
│   ├── robots.txt            # Regras de indexação de busca e IA (GEO)
│   └── sitemap.xml           # Mapeamento canônico de páginas e âncoras
├── README.md                 # Este documento de referência
├── src/
│   ├── App.tsx               # Montagem das seções da Landing Page
│   ├── main.tsx              # Bootstrap React do DOM
│   ├── index.css             # Camadas Tailwind e utilitários visuais
│   ├── components/
│   │   ├── Navbar.tsx        # Navegação com logo, links e botão Amazon
│   │   ├── Hero.tsx          # Seção de impacto com badge FGV e mockup 3D
│   │   ├── ShowcaseGallery.tsx # Painel arquitetônico e escala institucional
│   │   ├── Manifesto.tsx     # O novo cenário na era da IA e quadro comparativo
│   │   ├── Method.tsx        # Os 4 pilares da jornada A2M SigniTelling
│   │   ├── TargetAudience.tsx # Os 4 perfis de público e fecho reflexivo
│   │   ├── AboutAuthor.tsx   # Biografia, credenciais e portfólio de marcas
│   │   ├── BookConversion.tsx # Formatos Capa Comum e Kindle na Amazon
│   │   ├── A2MAssistant.tsx  # Terminal JSON interativo, limites e termos
│   │   └── Footer.tsx        # Rodapé institucional, links e copyright 2026
│   └── data/
│       ├── assistantJson.ts  # Prompt de sistema oficial estruturado em JSON
│       └── termsData.ts      # Dados dos limites e termos de uso integrais
├── tailwind.config.js        # Configuração de tokens e temas do Tailwind
├── tsconfig.json             # Configuração do TypeScript
├── tsconfig.node.json        # Configuração TypeScript para Vite/Node
└── vite.config.ts            # Configuração do bundler Vite
```

---

## 🖼️ Ativos Visuais Integrados

Todos os 6 ativos fornecidos foram alocados estrategicamente na experiência:

| Arquivo | Localização | Papel Visual e Narrativo |
| :--- | :--- | :--- |
| **img01.png** | [ShowcaseGallery.tsx](file:///c:/Users/Nilto/OneDrive/Documentos/Projetos%20novembro/mauricio/asserts/src/components/ShowcaseGallery.tsx) | Painel monumental urbano de escala arquitetônica |
| **img02.png** | [Manifesto.tsx](file:///c:/Users/Nilto/OneDrive/Documentos/Projetos%20novembro/mauricio/asserts/src/components/Manifesto.tsx) | Registro tátil de leitura do livro físico nas mãos |
| **img03.png** | [Method.tsx](file:///c:/Users/Nilto/OneDrive/Documentos/Projetos%20novembro/mauricio/asserts/src/components/Method.tsx) | Composição dos 4 volumes alinhados (capas e contracapas) |
| **img04.png** | [AboutAuthor.tsx](file:///c:/Users/Nilto/OneDrive/Documentos/Projetos%20novembro/mauricio/asserts/src/components/AboutAuthor.tsx) | Retrato oficial de alta resolução de Maurício Sarmento |
| **img05.png** | [Hero.tsx](file:///c:/Users/Nilto/OneDrive/Documentos/Projetos%20novembro/mauricio/asserts/src/components/Hero.tsx) e [BookConversion.tsx](file:///c:/Users/Nilto/OneDrive/Documentos/Projetos%20novembro/mauricio/asserts/src/components/BookConversion.tsx) | Mockup 3D premium do livro com reflexo de luz e aura |
| **img06.png** | Favicon, [Navbar.tsx](file:///c:/Users/Nilto/OneDrive/Documentos/Projetos%20novembro/mauricio/asserts/src/components/Navbar.tsx) e [A2MAssistant.tsx](file:///c:/Users/Nilto/OneDrive/Documentos/Projetos%20novembro/mauricio/asserts/src/components/A2MAssistant.tsx) | Escudo e selo oficial *"ASSISTENTE A2M SIGNITELLING™ AI"* |

---

## 🔍 SEO, GEO e Metadados Estruturados

- **Schema.org JSON-LD**: Grafo completo contendo as entidades `Book` (com ofertas Capa Comum e Kindle), `Person` (Maurício Sarmento, FGV, ESPM, USP) e `SoftwareApplication` (Assistente de IA gratuito).
- **GEO (Generative Engine Optimization)**: Arquivo `robots.txt` autorizando rastreadores de inteligência artificial generativa (`GPTBot`, `ChatGPT-User`, `Claude-Web`, `Anthropic-AI`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`).
- **Sitemap XML**: Mapeamento estruturado das seções canônicas em `sitemap.xml`.
- **Preload de LCP**: Pré-carregamento otimizado da imagem hero 3D do livro para assegurar métricas de Core Web Vitals de ponta.

---

## 👤 Sobre o Autor

**Maurício Sarmento** é estrategista de marketing e branded content, diretor de filmes e professor da **ESPM**. É mestrando em Administração na **FGV (Fundação Getulio Vargas)** e especialista em Comunicação e Marketing pela **USP**. Estudou Cinematografia na **NYFA (New York Film Academy)** e na **Maine Media College** (USA).

Participou do desenvolvimento de projetos e campanhas estratégicas para marcas de liderança global e nacional, tais como:
*Nike, Meta, Ford, Havaianas, Nestlé, Budweiser, Bradesco, Banco BV, Itaú Cultural, Dasa, Eztec, Alphaville e Ascenty.*

- **Contato Institucional**: [mauricio.sarmento@espm.br](mailto:mauricio.sarmento@espm.br)

---

## ⚖️ Licença e Propriedade Intelectual

- Obra: *Criando as Marcas do Futuro — Método A2M SigniTelling™*
- Direitos Autorais: **© 2026 Maurício Nunes Sarmento**. Todos os direitos reservados.
- O Assistente de IA é concedido gratuitamente para uso pessoal e aplicação direta no próprio negócio, com atribuição obrigatória (*"A2M AI SigniTelling™, de Maurício Nunes Sarmento"*). É expressamente proibida a revenda, sublicenciamento, redistribuição ou incorporação em ferramentas pagas de terceiros sem autorização prévia.
- Foro eleito: Comarca de São Paulo/SP, República Federativa do Brasil.
