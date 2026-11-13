# PASSOS.md — Planejamento e Rastreamento de Execução

> **Regra de Execução**: Só inicie o próximo passo de `PASSOS.md` quando o usuário solicitar explicitamente.

---

### [x] Passo 1: Extração de Dados e Estruturação dos Ativos
- **Status**: Concluído
- **Entregáveis**:
  - Extração completa de textos, termos e credenciais do arquivo `LANDING PAGE LIVRO.pdf`.
  - Cópia e organização das 6 imagens (`img01.png` a `img06.png`) no diretório `public/assets/`.
  - Mapeamento e estruturação de `termsData.ts` (4 limites e 10 termos legais) e `assistantJson.ts` (prompt de sistema completo).

---

### [x] Passo 2: Desenvolvimento da Interface Visual e Componentes React
- **Status**: Concluído
- **Entregáveis**:
  - Setup do projeto com Vite, React 18, TypeScript e Tailwind CSS v3 (paleta Deep Blue, Ciano Elétrico e Ouro/Âmbar).
  - Componente `Navbar.tsx` incorporado de forma contínua ao topo da seção Hero (eliminando visual de cápsula solta e sobreposição de textos em viewports intermediários), links de menu rigorosamente alinhados lado a lado (`whitespace-nowrap`), botões de ação e backdrop-blur com bloqueio de scroll no mobile.
  - Componente `Hero.tsx` com badge FGV, epígrafe do autor, CTAs estratégicos e mockup 3D `img05.png`.
  - Componente `ShowcaseGallery.tsx` integrando o painel arquitetônico monumental `img01.png`.
  - Componente `Manifesto.tsx` com foto tátil `img02.png`, reflexões sobre o mercado na era da IA e quadro comparativo (O que NÃO é vs O que É).
  - Componente `Method.tsx` com os 4 pilares estratégicos e visual `img03.png`.
  - Componente `TargetAudience.tsx` com os 4 perfis de leitor e fecho filosófico.
  - Componente `AboutAuthor.tsx` com retrato `img04.png`, credenciais (FGV, ESPM, USP, NYFA) e carrossel infinito (marquee) com todas as marcas lado a lado e pausa no hover.
  - Componente `BookConversion.tsx` com opções Capa Comum e Kindle na Amazon.
  - Componente `A2MAssistant.tsx` com terminal de código JSON interativo, cópia com 1 clique, toast feedback, 4 limites e 10 termos de uso.
  - Componente `Footer.tsx` com créditos, navegação, contato e copyright 2026.
  - Ajuste de Refinamento: Eliminação de colisões de texto na navegação desktop e incorporação fluida da barra ao fundo radial do Hero com degradê de fusão.
  - Ajuste Mobile UX em Cards de Imagem: Reposicionamento responsivo dos balões informativos nos cards visuais (`Method.tsx`, `ShowcaseGallery.tsx`, `Manifesto.tsx` e `AboutAuthor.tsx`). No mobile, os balões se posicionam logo abaixo das imagens (`mt-3`), desobstruindo 100% das fotos sem cobrir os 4 livros ou painéis, mantendo a sobreposição flutuante elegante apenas no desktop (`sm:absolute`).
  - Alinhamento Integral e Fidelidade 1:1 ao Arquivo `LANDING PAGE LIVRO.pdf`: Reestruturação completa do layout para refletir rigorosamente a diagramação do documento oficial (fundo branco editorial, tipografia limpa de alto contraste, seção escura exclusiva do Assistente AI, eliminação de balões sobre fotos e posicionamento exato das 6 imagens e textos do autor).
  - Ocultação da Barra Superior e Hero em Sangria Total (Como no Original): Remoção da barra de navegação superior e ampliação de `img01.png` para sangria total (100% de largura, sem margens ou bordas arredondadas), iniciando imediatamente no topo da página exatamente como no PDF original.
  - Remoção da Linha de Contorno dos Livros (Exatamente Igual ao Original): Exclusão de qualquer moldura, borda (`border-gray-100`) ou contorno de container na imagem dos 4 livros (`img03.png`) e foto de leitura (`img02.png`), integrando os ativos perfeitamente ao fundo branco contínuo do documento original.

---

### [x] Passo 3: Conteinerização Multi-Stage Docker e Validação de Ambiente
- **Status**: Concluído
- **Entregáveis**:
  - `Dockerfile` multi-stage (`node:20-alpine` para build e `nginx:1.27-alpine` para runtime com compressão gzip e cache).
  - `nginx.conf` com suporte a SPA, cabeçalhos de segurança e política anti-cache para preview local (`no-store, no-cache` para HTML e `no-cache, must-revalidate` para assets JS/CSS, garantindo que atualizações reflitam instantaneamente).
  - `docker-compose.yml` mapeando a porta `8080:80` com healthcheck ativo e limpeza de containers órfãos (`--remove-orphans`).
  - `.dockerignore` configurado.
  - Build e execução do container `mauricio-landing-page` via `docker compose`.
  - Verificação de resposta HTTP 200 em `http://localhost:8080` com novos cabeçalhos de revalidação ativa.
  - Diagnóstico documentado: esclarecimento do ciclo de vida em Docker estático e eliminação de cache retido pelo navegador.

---

### [x] Passo 4: Otimizações Adicionais de SEO, Acessibilidade e Métricas de Performance
- **Status**: Concluído
- **Entregáveis**:
  - Implementação de Schema.org estruturado em JSON-LD (`@graph` com entidades `Book`, `Person` e `SoftwareApplication` para o Assistente A2M AI).
  - Criação de `public/robots.txt` otimizado para Googlebot, Bingbot e rastreadores generativos de IA (GPTBot, ChatGPT-User, Claude-Web, Anthropic-AI, PerplexityBot).
  - Geração de `public/sitemap.xml` com rotas canônicas e prioridades.
  - Meta tags completas de OpenGraph e Twitter Cards (summary_large_image).
  - Preload da imagem de maior impacto visual (`/assets/img05.png`) para otimização de LCP (Largest Contentful Paint).
  - Auditoria completa e correção de anti-patterns de design (detector Impeccable zerado), fallback universal de clipboard e atributos explícitos de largura/altura para CLS zero.
  - Rebuild e deploy no Docker com validação de status HTTP 200 em `/robots.txt`, `/sitemap.xml` e `/`.

---

### [x] Passo 5: Publicação e Deploy em Ambiente de Produção ou Staging
- **Status**: Concluído
- **Entregáveis**:
  - Pipeline de CI/CD automatizado via GitHub Actions em `.github/workflows/deploy.yml` (validação de build TypeScript, compilação de imagem Docker e teste de healthcheck em container).
  - Perfil de produção Docker Compose em `docker-compose.prod.yml` com limites de recursos (CPUs/Memória), rotação de logs e política de restart contínuo (`always`).
  - Criação do template de variáveis de ambiente de produção em `.env.example`.
  - Configuração do arquivo `.gitignore` com exclusão de dependências, artefatos de build, variáveis sensíveis e logs.
  - Inicialização do padrão Impeccable (`/impeccable init`) com geração de `PRODUCT.md` alinhado à visão estratégica do autor.
  - Criação do `README.md` oficial com visão geral, arquitetura, comandos Docker e guia da metodologia A2M.
  - Guia detalhado de deploy para VPS, Cloudflare Tunnel, AWS ou Railway documentado em `DOCUMENTACAO.md`.
