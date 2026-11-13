# DOCUMENTACAO.md — Documentação Técnica da Landing Page

## 1. Identificação do Projeto
- **Obra**: *Criando as Marcas do Futuro — Método A2M SigniTelling™*
- **Autor**: Maurício Nunes Sarmento (FGV, ESPM, USP, NYFA)
- **Ano de Referência**: 2026
- **Execução**: Conteinerizado 100% no Docker via Nginx Alpine

---

## 2. Estrutura de Diretórios
```
asserts/
├── .dockerignore
├── .env.example       # Modelo de variáveis de ambiente para produção
├── .github/
│   └── workflows/
│       └── deploy.yml # Pipeline de CI/CD (GitHub Actions)
├── .gitignore         # Padrões de exclusão do controle de versão Git
├── CONTEXTO.md
├── docker-compose.yml       # Ambiente de desenvolvimento / preview local (porta 8080)
├── docker-compose.prod.yml  # Perfil de produção (recursos limitados, logs e restart)
├── Dockerfile
├── DOCUMENTACAO.md
├── index.html
├── LANDING-MAURICIO/
│   ├── img01.png a img06.png
│   └── LANDING PAGE LIVRO.pdf
├── nginx.conf
├── package.json
├── PASSOS.md
├── postcss.config.js
├── PRODUCT.md         # Contexto de produto e diretrizes duráveis (Impeccable)
├── public/
│   ├── assets/
│   │   ├── img01.png  # Galeria Arquitetônica / Showcase
│   │   ├── img02.png  # Livro nas Mãos / Manifesto
│   │   ├── img03.png  # Composição dos 4 Livros / Método
│   │   ├── img04.png  # Retrato de Maurício Sarmento / Sobre o Autor
│   │   ├── img05.png  # Mockup 3D do Livro / Hero e Conversão
│   │   └── img06.png  # Escudo Oficial / Navbar e Assistente AI
│   ├── robots.txt     # Rastreamento de busca e IA (GEO)
│   └── sitemap.xml    # Estrutura de rotas e âncoras canônicas
├── README.md          # Documento de apresentação e guia de início rápido
├── src/
│   ├── App.tsx
│   ├── components/
│   │   ├── A2MAssistant.tsx
│   │   ├── AboutAuthor.tsx
│   │   ├── BookConversion.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Manifesto.tsx
│   │   ├── Method.tsx
│   │   ├── Navbar.tsx
│   │   ├── ShowcaseGallery.tsx
│   │   └── TargetAudience.tsx
│   ├── data/
│   │   ├── assistantJson.ts
│   │   └── termsData.ts
│   ├── index.css
│   └── main.tsx
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 3. Mapeamento e Alocação dos Ativos Visuais (6/6 Imagens)
| Arquivo | Resolução Original | Função na Aplicação | Seção |
| :--- | :--- | :--- | :--- |
| `img01.png` | 1920x1080 (1.8MB) | Painel monumental urbano | `ShowcaseGallery.tsx` |
| `img02.png` | 1080x1080 (718KB) | Experiência tátil de leitura | `Manifesto.tsx` |
| `img03.png` | 1920x1080 (1.4MB) | Composição dos 4 volumes | `Method.tsx` |
| `img04.png` | 1080x1080 (457KB) | Retrato oficial do autor | `AboutAuthor.tsx` |
| `img05.png` | 1080x1080 (625KB) | Mockup 3D com iluminação | `Hero.tsx` e `BookConversion.tsx` |
| `img06.png` | 512x512 (39KB) | Selo oficial do Assistente | Favicon, `Navbar.tsx`, `A2MAssistant.tsx`, `Footer.tsx` |

---

## 4. Otimizações de SEO e GEO (Generative Engine Optimization)
- **Schema.org JSON-LD**:
  - `Book`: Metadados completos da obra literária, autor, editora, data de publicação e ofertas (Capa Comum e Kindle).
  - `Person`: Credenciais acadêmicas e profissionais do autor (FGV, ESPM, USP, NYFA).
  - `SoftwareApplication`: Identificação estruturada do Assistente A2M AI SigniTelling™.
- **Rastreadores de IA Autorizados (`robots.txt`)**: GPTBot, ChatGPT-User, Claude-Web, Anthropic-AI, PerplexityBot, Google-Extended e Applebot-Extended.
- **Sitemap XML**: Mapa de URLs e âncoras estratégicas para indexação com prioridades definidas.
- **Performance Core Web Vitals**: Preload prioritário da imagem do Hero (`img05.png`) para otimizar o Largest Contentful Paint (LCP).

---

## 5. Instruções de Execução via Docker (100% Conteinerizado)

### Ciclo de Atualizações e Política Anti-Cache
Como a aplicação opera em arquitetura conteinerizada com Nginx Alpine servindo os arquivos compilados pelo Vite:
1. **Recompilação Necessária**: Toda alteração efetuada nos arquivos de código no host Windows (`src/`) requer o comando `docker compose up -d --build` para gerar o novo bundle e atualizar o container.
2. **Prevenção Ativa de Cache**: O arquivo `nginx.conf` está configurado para emitir `Cache-Control: no-store, no-cache, max-age=0` nas rotas HTML (`/` e `/index.html`) e `Cache-Control: no-cache, must-revalidate` nos assets (`.js`, `.css`), garantindo que o navegador nunca fique preso a versões antigas em memória/disco.

### Ambiente de Preview Local (Porta 8080)
```powershell
docker compose up -d --build --remove-orphans
```
Acesse em: `http://localhost:8080`

### Ambiente de Produção com Limites de Recursos e Logs (`docker-compose.prod.yml`)
```powershell
docker compose -f docker-compose.prod.yml up -d --build
```

### Comandos de Gestão
```powershell
# Verificar containers ativos e status do healthcheck
docker compose ps

# Visualizar logs em tempo real
docker compose logs -f

# Parar e remover containers
docker compose down
```

---

## 6. Procedimento de Deploy e Publicação em Produção

### Opção A: Deploy em VPS Linux (Ubuntu / Debian / AWS EC2) com Docker e Cloudflare
1. Clone o repositório na VPS:
   ```bash
   git clone <URL_DO_REPOSITORIO> /var/www/marcas-do-futuro
   cd /var/www/marcas-do-futuro
   ```
2. Crie o arquivo `.env` com base em `.env.example`:
   ```bash
   cp .env.example .env
   ```
3. Suba o container de produção:
   ```bash
   docker compose -f docker-compose.prod.yml up -d --build
   ```
4. Aponte o domínio no painel do Cloudflare (modo *Proxy* ativo) para o IP da VPS na porta 80. O Cloudflare gerencia automaticamente o certificado SSL/TLS de forma gratuita.

### Opção B: Deploy via Pipeline CI/CD GitHub Actions
O workflow `.github/workflows/deploy.yml` já está configurado. Ao realizar o push para a branch `main`:
1. Valida tipagem TypeScript e gera o build do Vite.
2. Compila a imagem Docker multi-stage com cache inteligente.
3. Executa um container efêmero e verifica o healthcheck HTTP de `/`, `/robots.txt` e `/sitemap.xml`.

---

## 7. Especificações do Assistente A2M AI SigniTelling™
O assistente opera em formato JSON nativo e inclui:
- **Framework de 4 Pilares**:
  - `pillar_01_realidade_do_negocio`: Mapeamento das competências reais e verdade operacional.
  - `pillar_02_representacao_legitima`: Evidências concretas e teste de consistência.
  - `pillar_03_significado_organizador`: Ideia unificadora e renúncias estratégicas.
  - `pillar_04_narrativa_presenca_digital`: Posicionamento verbal, matriz de conteúdo e presença digital.
- **Filtros Mandatórios**:
  - `traceability_test`: Bloqueio a abstrações vazias como "qualidade", "inovação", "excelência".
  - `step_by_step_progression`: Condução faseada, proibindo o avanço sem validação da etapa anterior.
- **Limites e Termos Legais**:
  - 4 limites fundamentais declarados (não-determinismo, impossibilidade de maquiar operação fraca, conformidade em profissões regulamentadas e privacidade de dados).
  - 10 termos integrais de uso e licenciamento com foro em São Paulo/SP e canal oficial `mauricio.sarmento@espm.br`.

---

## 8. Acessibilidade, Responsividade e Fidelidade Estrita ao PDF Oficial
- **Remoção de Linhas de Contorno das Imagens**: Todas as linhas, bordas (`border-gray-100`) ou contornos de container foram eliminados da imagem dos 4 livros (`img03.png`) e foto de leitura (`img02.png`), permitindo que a arte se funda organicamente com o fundo branco da página, reproduzindo 1:1 o layout do PDF original.
- **Hero em Sangria Total (Como no Original)**: A barra de navegação superior foi oculta e a fotografia monumental da obra (`img01.png`) foi expandida para ocupar 100% da largura da tela (sangria total, sem margens ou bordas), abrindo a página de forma contínua e imersiva exatamente como no documento original.
- **Fidelidade 1:1 ao Arquivo `LANDING PAGE LIVRO.pdf`**: Todo o design da página foi calibrado para corresponder com exatidão à diagramação do documento oficial: fundo branco editorial (`#ffffff`), tipografia limpa de alto contraste, bloco escuro exclusivo para a seção do Assistente AI (`#151922`), ausência de balões obstrutivos sobre imagens e alinhamento idêntico de textos, parágrafos, termos e marcas.
- **Exibição Fotográfica Limpa e Desobstruída**: Todas as 6 imagens oficiais (`img01.png` a `img06.png`) ocupam seus lugares originais sem balões ou cartões flutuantes sobrepostos, garantindo total visualização dos 4 livros, da foto de leitura e do retrato do autor tanto em mobile quanto no desktop.
- **Barra de Navegação Minimalista**: O cabeçalho foi redesenhado em tom claro translúcido (`bg-white/90 backdrop-blur-md`) com âncoras para todas as seções e acesso rápido à compra na Amazon.
- **Menu Mobile com Backdrop Blur**: Quando o menu hambúrguer é acionado em telas móveis, um overlay de tela cheia com efeito de embaçamento intenso (`backdrop-blur-xl`) e escurecimento (`bg-[#030917]/85`) é ativado, isolando o foco visual no menu.
- **Scroll Lock**: O scroll do `body` é bloqueado automaticamente enquanto o menu móvel estiver aberto para prevenir rolagem acidental do fundo.
- **Fechamento Acessível**: O menu fecha ao clicar no fundo embaçado, ao selecionar qualquer link ou ao pressionar a tecla `Escape`.
- **Auditoria de Craft e Anti-Patterns**: Conformidade total com o detector mecânico Impeccable (eliminação de gradientes em textos em favor de cores sólidas de alto contraste e substituição de animações bounce por flutuação suave).
- **Resiliência do Clipboard**: Implementado fallback robusto para cópia de prompt JSON com suporte a ambientes sem HTTPS ou webviews restritas.
- **Prevenção de Layout Shift (CLS: 0.00)**: Todas as 6 imagens receberam atributos explícitos de `width` e `height`, além de estratégias balanceadas de `loading="eager"` (Hero/Logo) e `loading="lazy"` (seções inferiores).
- **Contraste e Semântica**: Contraste visual aderente ao padrão WCAG AA/AAA, tags semânticas HTML5 (`header`, `main`, `section`, `blockquote`, `footer`) e textos alternativos em todas as imagens.
- **Navegação por Teclado**: Suporte a foco visual com anel de destaque (`focus:ring-2`) em todos os botões e links.
