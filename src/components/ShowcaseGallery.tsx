import React from 'react';
import { Eye, Building2, Sparkles, TrendingUp } from 'lucide-react';

export const ShowcaseGallery: React.FC = () => {
  return (
    <section id="showcase" className="relative py-20 bg-brand-secondary/60 border-y border-brand-cyan/15 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Presença Institucional & Grandiosidade</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Uma Metodologia Pensada para os Maiores Desafios do Mercado
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            O Método A2M SigniTelling™ une a pesquisa acadêmica de ponta na FGV à vivência prática no design estratégico das marcas mais admiradas do país e do mundo.
          </p>
        </div>

        {/* Monumental Billboard Display (img01.png) */}
        <div className="relative group rounded-3xl overflow-hidden border border-brand-cyan/30 shadow-2xl shadow-cyan-950/60 bg-gradient-to-b from-brand-card to-brand-primary">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <img
              src="/assets/img01.png"
              alt="Painel arquitetônico monumental - Criando as Marcas do Futuro por Maurício Sarmento"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 filter brightness-95 contrast-105"
              loading="lazy"
              width={1920}
              height={1080}
            />
            {/* Cinematic overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-transparent to-black/20" />
            
            {/* Floating Tag in the visual */}
            <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-auto glass-card px-5 py-3 rounded-2xl border border-brand-cyan/40 backdrop-blur-md max-w-md shadow-2xl">
              <div className="flex items-center gap-2 text-brand-amber font-mono text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-amber" />
                <span>Espaço de Expressão & Visão Estratégica</span>
              </div>
              <p className="text-white text-xs sm:text-sm font-medium leading-snug">
                "Não basta ter uma mensagem; é preciso ocupar o espaço com legitimidade, verdade operacional e potência narrativa."
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Impact Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="glass-card p-6 rounded-2xl border border-brand-cyan/20 flex flex-col gap-2">
            <div className="w-10 h-10 rounded-xl bg-brand-cyan/15 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mb-2">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white">Rigor FGV</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Base teórica fundamentada na dissertação de mestrado em Administração pela Fundação Getulio Vargas.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-brand-cyan/20 flex flex-col gap-2">
            <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-brand-amber mb-2">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white">IA Integrada</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Assistente de IA com prompt proprietário em JSON pronto para rodar em qualquer modelo de ponta.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-brand-cyan/20 flex flex-col gap-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-2">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white">Prática Global</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Casos e abordagens testadas junto a marcas de liderança como Nike, Ford, Meta, Havaianas e Nestlé.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

