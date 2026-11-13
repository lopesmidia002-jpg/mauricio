import React from 'react';
import { ArrowRight, BookOpen, Sparkles, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="livro" className="relative min-h-screen pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-radial-hero">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Strategic Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Academic Credential Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card/80 border border-brand-cyan/30 text-brand-cyan text-xs font-semibold shadow-inner backdrop-blur-md">
              <Award className="w-3.5 h-3.5 text-brand-amber" />
              <span>FGV • Dissertação de Mestrado em Administração</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            </div>

            {/* Main Title & Subtitle */}
            <div className="space-y-2">
              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                CRIANDO AS <br />
                <span className="text-white">
                  MARCAS DO FUTURO
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-brand-cyan font-bold tracking-wide">
                Método A2M SigniTelling™
              </p>
            </div>

            {/* Author Credential Byline */}
            <div className="flex items-center gap-3 text-slate-300 text-sm">
              <span className="font-semibold text-white">Por Maurício Sarmento</span>
              <span className="text-slate-600">•</span>
              <span>Professor ESPM</span>
              <span className="text-slate-600">•</span>
              <span>Diretor de Filmes</span>
            </div>

            {/* Core Epigraph / Quote */}
            <blockquote className="relative p-5 rounded-2xl bg-gradient-to-br from-brand-card/90 to-brand-navy/60 border border-brand-cyan/20 backdrop-blur-md shadow-xl text-slate-200">
              <div className="text-3xl text-brand-amber font-serif leading-none mb-1 opacity-70">“</div>
              <p className="italic text-base sm:text-lg leading-relaxed text-slate-200 pl-3 border-l-2 border-brand-amber">
                Empreender é recusar a ideia de que o mercado precise ser um território de lugares-comuns. É ter inquietação suficiente para sair do mapa sem perder o norte e transformar uma capacidade real em uma diferença que o mercado consiga perceber.
              </p>
            </blockquote>

            {/* Summary bullet highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-1">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span><strong className="text-white">4 Pilares Estratégicos:</strong> Da realidade operacional à narrativa perene.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                <span><strong className="text-white">Assistente AI Incluso:</strong> Prompt oficial pronto para ChatGPT e Claude.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                <span><strong className="text-white">Teste de Rastreabilidade:</strong> Recusa a abstração e adjetivos vazios.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-brand-amber shrink-0 mt-0.5" />
                <span><strong className="text-white">Formatos Amazon:</strong> Edição Capa Comum física e Kindle E-book.</span>
              </div>
            </div>

            {/* Dual Strategic CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#comprar"
                className="px-7 py-3.5 rounded-xl font-heading font-bold text-sm sm:text-base text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-[0.98]"
              >
                <BookOpen className="w-4 h-4 text-slate-950" />
                <span>Garantir Exemplar na Amazon</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#assistente"
                className="px-6 py-3.5 rounded-xl font-heading font-semibold text-sm sm:text-base text-brand-cyan bg-brand-card/70 hover:bg-brand-card border border-brand-cyan/40 hover:border-brand-cyan transition-all flex items-center justify-center gap-2 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-brand-amber" />
                <span>Acessar Assistente AI Grátis</span>
              </a>
            </div>

            {/* Trust assurance */}
            <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Compra 100% Segura via Amazon Brasil • Entrega Rápida Prime</span>
            </div>

          </div>

          {/* Right Column: 3D Book Presentation (img05.png) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Glow halos behind book */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-brand-cyan/25 to-amber-500/20 blur-3xl -z-10 animate-pulse" />
            
            <div className="relative group p-4 sm:p-6 transition-transform duration-500 hover:scale-[1.03]">
              
              {/* Standalone Book Mockup */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-950/70 border border-brand-cyan/20 bg-gradient-to-b from-brand-card/40 to-transparent p-2">
                <img
                  src="/assets/img05.png"
                  alt="Livro Criando as Marcas do Futuro - Método A2M SigniTelling por Maurício Sarmento"
                  className="w-full max-w-[340px] sm:max-w-[400px] h-auto object-contain mx-auto filter drop-shadow-[0_20px_35px_rgba(3,9,23,0.9)]"
                  loading="eager"
                  width={400}
                  height={500}
                />
              </div>

              {/* Floating Badge: Obra Oficial */}
              <div className="absolute -bottom-2 right-2 sm:right-6 glass-card px-4 py-2 rounded-xl flex items-center gap-2.5 shadow-2xl border border-amber-400/40 animate-float">
                <div className="w-7 h-7 rounded-full bg-amber-400/20 border border-amber-400 flex items-center justify-center">
                  <Award className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white uppercase tracking-wider">Edição Oficial</div>
                  <div className="text-[10px] text-amber-300 font-mono">Capa Comum & Kindle</div>
                </div>
              </div>

            </div>

            {/* Quick architectural showcase link */}
            <div className="mt-4 text-center">
              <a 
                href="#showcase" 
                className="text-xs text-slate-400 hover:text-brand-cyan transition-colors inline-flex items-center gap-1.5 underline decoration-slate-600 underline-offset-4"
              >
                <span>Ver presença em grandes palcos e exposições</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

