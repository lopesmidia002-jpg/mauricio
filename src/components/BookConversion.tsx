import React from 'react';
import { BookOpen, Tablet, CheckCircle, ExternalLink, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export const BookConversion: React.FC = () => {
  return (
    <section id="comprar" className="relative py-24 bg-brand-primary overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-amber/30 text-brand-amber text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-brand-amber" />
            <span>Adquira Seu Exemplar Oficial</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Escolha o Seu Formato
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Disponível na Amazon Brasil com entrega rápida para todo o país em edição física de luxo ou leitura instantânea digital.
          </p>
        </div>

        {/* Main Grid: Book 3D + Format Options */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
          
          {/* Visual Left: 3D Book Mockup (img05.png) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group p-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-cyan/20 to-amber-500/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500" />
              <img
                src="/assets/img05.png"
                alt="Criando as Marcas do Futuro - Capa Comum e Kindle"
                className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] h-auto object-contain filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)] group-hover:scale-[1.03] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Cards Right: Two Formats */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Format 1: Capa Comum */}
            <div className="glass-card glass-card-hover p-6 sm:p-7 rounded-3xl border border-brand-cyan/30 flex flex-col justify-between relative group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                    Físico
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                  Capa Comum
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  Exemplar impresso com papel de alta qualidade, encadernação de arte e acabamento tátil premium para a sua mesa de trabalho.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Edição física oficial impressa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Entrega rápida Amazon Prime</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Diagramação ergonômica de leitura</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Assistente AI incluso</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href="https://www.amazon.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl font-heading font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-[0.98]"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Comprar Capa Comum</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Format 2: Edição Kindle */}
            <div className="glass-card glass-card-hover p-6 sm:p-7 rounded-3xl border border-brand-amber/30 flex flex-col justify-between relative group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-brand-amber">
                    <Tablet className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase font-bold px-2.5 py-1 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30">
                    E-book
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                  Edição Kindle
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  Acesso digital imediato no seu Kindle, smartphone, iPad ou computador através do app gratuito Kindle.
                </p>

                <ul className="space-y-2.5 text-xs text-slate-300 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Download e leitura instantânea</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Sincronização em todos os aparelhos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Destaques e notas compartilháveis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Assistente AI incluso</span>
                  </li>
                </ul>
              </div>

              <div>
                <a
                  href="https://www.amazon.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl font-heading font-semibold text-sm text-brand-amber bg-amber-400/10 hover:bg-amber-400/20 border border-brand-amber/40 hover:border-brand-amber transition-all flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Tablet className="w-4 h-4" />
                  <span>Comprar Edição Kindle</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Amazon Guarantees Bar */}
        <div className="mt-14 max-w-4xl mx-auto p-5 rounded-2xl glass-card border border-brand-cyan/20 flex flex-wrap items-center justify-around gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-brand-cyan" />
            <span>Entrega Rápida com Amazon Prime</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Pagamento 100% Protegido</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-amber" />
            <span>Prompt de IA Oficial Disponível Grátis</span>
          </div>
        </div>

      </div>
    </section>
  );
};

