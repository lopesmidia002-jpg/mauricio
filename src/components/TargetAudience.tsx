import React from 'react';
import { Briefcase, Building, Megaphone, UserCheck, HeartHandshake } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const audiences = [
    {
      title: "Empreendedores & Fundadores",
      description: "Que recusam a ideia de que seu negócio precise ser uma cópia e buscam transformar capacidade operacional real em uma marca diferenciada e perene.",
      icon: Briefcase,
      tag: "Crescimento & Verdade"
    },
    {
      title: "Executivos & Líderes C-Level",
      description: "Responsáveis por unificar estratégia de produto, cultura corporativa e comunicação sob um Significado Organizador claro e sustentável.",
      icon: Building,
      tag: "Direção Estratégica"
    },
    {
      title: "Profissionais de Marketing & Branding",
      description: "Consultores, estrategistas e criativos que necessitam de um framework rigoroso (FGV) para interromper saltos abstratos e defender escolhas com seus clientes.",
      icon: Megaphone,
      tag: "Rigor Metodológico"
    },
    {
      title: "Profissionais Liberais & Especialistas",
      description: "Médicos, advogados, consultores, psicólogos, engenheiros e especialistas que desejam construir ou reencontrar um centro claro para sua autoridade de mercado.",
      icon: UserCheck,
      tag: "Autoridade Autêntica"
    }
  ];

  return (
    <section id="publico" className="relative py-24 bg-brand-primary overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-cyan/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-cyan/30 text-brand-cyan text-xs font-semibold">
            <HeartHandshake className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Perfil do Leitor</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Para Quem Foi Escrita Esta Obra?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Para líderes, criadores e especialistas que compreendem que o verdadeiro valor de uma marca nasce da clareza de suas escolhas.
          </p>
        </div>

        {/* 4 Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {audiences.map((aud, index) => {
            const Icon = aud.icon;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-navy border border-brand-cyan/30 flex items-center justify-center text-brand-cyan mb-5 group-hover:bg-brand-amber/20 group-hover:border-brand-amber/40 group-hover:text-brand-amber transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider block mb-2 font-semibold">
                    {aud.tag}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-white mb-3 group-hover:text-brand-cyan transition-colors">
                    {aud.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {aud.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emotional and Philosophical Author Note */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-secondary via-brand-card to-brand-secondary border border-brand-cyan/30 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-brand-amber/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative text-center space-y-4">
            <span className="text-4xl font-serif text-brand-amber">“</span>
            <p className="text-lg sm:text-xl md:text-2xl text-white font-medium italic leading-relaxed">
              Porque as marcas do futuro continuarão sendo criadas por pessoas. <br className="hidden sm:inline" />
              Pessoas fazendo escolhas, vivendo experiências, construindo relações e decidindo o que merece permanecer.
            </p>
            <div className="pt-2 text-xs font-mono text-brand-cyan tracking-wider uppercase">
              — Maurício Sarmento, Criando as Marcas do Futuro
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

