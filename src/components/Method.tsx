import React from 'react';
import { Layers, Database, ShieldCheck, Target, Share2, ArrowRight } from 'lucide-react';

export const Method: React.FC = () => {
  const pillars = [
    {
      number: "01",
      title: "Realidade do Negócio",
      subtitle: "Onde o posicionamento começa de verdade",
      description: "Parte da capacidade operacional instalada, dos processos consolidados e da verdade do produto ou serviço. Sem ilusões, atalhos mágicos ou promessas que a entrega não sustenta.",
      icon: Database,
      highlight: "O que o seu negócio entrega com maestria comprovada hoje?",
      color: "from-blue-500/20 to-brand-card"
    },
    {
      number: "02",
      title: "Representação Legítima",
      subtitle: "A fronteira entre a promessa e a evidência",
      description: "Investiga aquilo que uma oferta pode legitimamente representar perante o público, sem romper a coerência com a sua execução prática no mundo real.",
      icon: ShieldCheck,
      highlight: "Toda afirmação deve passar pelo Teste de Rastreabilidade factual.",
      color: "from-cyan-500/20 to-brand-card"
    },
    {
      number: "03",
      title: "Significado Organizador",
      subtitle: "O centro de gravidade da organização",
      description: "Encontra a ideia central capaz de organizar todas as decisões estratégicas da marca. Unifica produto, equipe, comunicação e cultura em torno de um propósito inegociável.",
      icon: Target,
      highlight: "Quem tenta significar tudo para todos não significa nada para ninguém.",
      color: "from-amber-500/20 to-brand-card"
    },
    {
      number: "04",
      title: "Narrativa & Presença Digital",
      subtitle: "Da estratégia ao conteúdo perene",
      description: "Transforma a escolha estratégica em posicionamento verbal, matriz de narrativa proprietária, linhas editoriais perenes e uma presença digital viva na era da IA.",
      icon: Share2,
      highlight: "Produzir conteúdo com coerência inabalável e relevância contínua.",
      color: "from-emerald-500/20 to-brand-card"
    }
  ];

  return (
    <section id="metodo" className="relative py-24 bg-brand-secondary/40 border-t border-brand-cyan/15 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-cyan/30 text-brand-cyan text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Framework Registrado FGV</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            A Arquitetura do <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-sky-300 to-amber-400">
              Método A2M SigniTelling™
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Uma jornada estruturada em 4 etapas lógicas para sair da dispersão, fundamentar a verdade da sua marca e construir um posicionamento impossível de ser ignorado.
          </p>
        </div>

        {/* Visual: Composition of 4 Books (img03.png) */}
        <div className="mb-20">
          <div className="relative rounded-3xl overflow-hidden border border-brand-cyan/30 shadow-2xl shadow-cyan-950/70 bg-gradient-to-b from-brand-card to-brand-navy p-3 sm:p-5 group">
            <img
              src="/assets/img03.png"
              alt="Composição dos 4 exemplares de Criando as Marcas do Futuro - Método A2M SigniTelling"
              className="w-full h-auto max-h-[500px] object-cover rounded-2xl group-hover:scale-[1.01] transition-transform duration-700 filter brightness-95"
              loading="lazy"
            />
            {/* Cinematic overlay card */}
            <div className="absolute bottom-6 left-6 right-6 sm:left-10 sm:right-auto glass-card p-4 sm:p-5 rounded-2xl border border-brand-cyan/40 backdrop-blur-md max-w-lg shadow-2xl">
              <span className="text-[11px] font-mono font-bold text-brand-amber uppercase tracking-wider block mb-1">
                Fundamentação & Rigor Metodológico
              </span>
              <p className="text-white text-xs sm:text-sm font-medium leading-relaxed">
                "O que o livro oferece é o conhecimento profundo do método, seus fundamentos, sua lógica e a arquitetura que orienta cada etapa do processo."
              </p>
            </div>
          </div>
        </div>

        {/* 4 Pillars Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative p-8 rounded-3xl glass-card glass-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-4xl sm:text-5xl text-brand-cyan/30 group-hover:text-brand-amber/80 transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan group-hover:bg-brand-amber/20 group-hover:border-brand-amber/40 group-hover:text-brand-amber transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-white mb-1 group-hover:text-brand-cyan transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-mono text-brand-amber font-medium mb-4">
                    {pillar.subtitle}
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 font-mono flex items-start gap-2">
                  <span className="text-brand-cyan font-bold">›</span>
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Methodology Bottom Banner: Teste de Rastreabilidade */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-brand-card via-brand-navy to-brand-card border border-brand-cyan/30 text-center max-w-4xl mx-auto shadow-xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-brand-amber font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-brand-amber" />
            <span>Filtro Anti-Abstração</span>
          </div>
          <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-2">
            O Teste de Rastreabilidade
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
            Nenhuma palavra sobrevive no método se não puder ser rastreada até um fato, processo ou entrega palpável na operação da empresa. É o fim dos slogans bonitos que não dizem nada.
          </p>
          <a
            href="#assistente"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-cyan hover:text-white transition-colors underline decoration-brand-cyan/50 underline-offset-4"
          >
            <span>Experimente o teste no Assistente de IA</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

