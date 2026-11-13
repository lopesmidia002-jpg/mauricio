import React from 'react';
import { Award, GraduationCap, Film, BookOpen, Mail, ExternalLink, Sparkles } from 'lucide-react';

export const AboutAuthor: React.FC = () => {
  const brands = [
    "Nike", "Meta", "Ford", "Havaianas", 
    "Nestlé", "Budweiser", "Bradesco", "Banco BV", 
    "Itaú Cultural", "Dasa", "Eztec", "Alphaville", "Ascenty"
  ];

  return (
    <section id="autor" className="relative py-24 bg-brand-secondary/50 border-t border-brand-cyan/15 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-cyan/30 text-brand-cyan text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5 text-brand-cyan" />
            <span>Trajetória & Autoridade</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Sobre o Autor
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Maurício Sarmento combina formação acadêmica de excelência e vivência prática na direção de filmes e branding de grandes marcas.
          </p>
        </div>

        {/* Main Grid: Portrait (img04.png) + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Column Left: Author Portrait (img04.png) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-brand-cyan/30 shadow-2xl shadow-cyan-950/70 bg-gradient-to-b from-brand-card to-brand-navy p-3">
              <img
                src="/assets/img04.png"
                alt="Maurício Sarmento - Autor do livro Criando as Marcas do Futuro"
                className="w-full h-auto rounded-2xl object-cover group-hover:scale-[1.02] transition-transform duration-500 filter brightness-95"
                loading="lazy"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card border border-brand-cyan/30 backdrop-blur-md">
                <div className="font-heading font-bold text-white text-base">Maurício Sarmento</div>
                <div className="text-xs text-brand-cyan font-mono">Estrategista, Professor & Diretor</div>
              </div>
            </div>
          </div>

          {/* Column Right: Full Academic & Professional Credentials */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                Maurício Sarmento
              </h3>
              <p className="text-brand-amber text-sm font-semibold tracking-wide">
                Estrategista de Marketing e Branded Content • Diretor de Filmes • Professor da ESPM
              </p>
            </div>

            {/* Academic Credential badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl glass-card border border-brand-cyan/20 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">FGV</div>
                  <div className="text-xs text-slate-300">Mestrando em Administração na Fundação Getulio Vargas</div>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card border border-brand-cyan/20 flex items-start gap-3">
                <Award className="w-5 h-5 text-brand-amber shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">ESPM</div>
                  <div className="text-xs text-slate-300">Professor de Marketing, Estratégia e Narrativa de Marca</div>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card border border-brand-cyan/20 flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">USP</div>
                  <div className="text-xs text-slate-300">Especialista em Comunicação e Marketing pela USP</div>
                </div>
              </div>

              <div className="p-4 rounded-xl glass-card border border-brand-cyan/20 flex items-start gap-3">
                <Film className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-wider">NYFA & Maine Media (USA)</div>
                  <div className="text-xs text-slate-300">Estudou Cinematografia na New York Film Academy e Maine Media</div>
                </div>
              </div>
            </div>

            {/* Bio paragraph */}
            <div className="p-6 rounded-2xl bg-brand-card/70 border border-brand-cyan/20 text-slate-300 text-sm sm:text-base leading-relaxed space-y-3">
              <p>
                O livro <em>Criando as Marcas do Futuro</em> é a síntese de duas décadas de atuação na interseção entre pesquisa acadêmica, cinema e criação de valor para grandes marcas.
              </p>
              <p>
                A obra desmistifica o conceito de branding como mera cosmética visual e entrega aos empreendedores e profissionais uma metodologia viva, testada e pronta para a era da inteligência artificial.
              </p>
            </div>

            {/* Direct contact link */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="mailto:mauricio.sarmento@espm.br"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold text-brand-cyan bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/30 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>mauricio.sarmento@espm.br</span>
              </a>
              <span className="text-xs text-slate-400">Palestras, consultorias e docência</span>
            </div>

          </div>

        </div>

        {/* Client & Projects Portfolio Infinite Marquee / Carrossel */}
        <div className="pt-10 border-t border-brand-cyan/15">
          <div className="text-center mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
              Marcas que contaram com a participação de Maurício Sarmento em projetos e campanhas
            </span>
          </div>

          <div className="relative w-full overflow-hidden py-2">
            {/* Gradient Fade Masks on sides */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-brand-secondary to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-brand-secondary to-transparent z-10 pointer-events-none" />

            {/* Marquee Track (Infinite Seamless Loop) */}
            <div className="flex animate-marquee pause-hover gap-3.5 sm:gap-4 items-center w-max">
              {/* First Sequence */}
              {brands.map((brand, i) => (
                <div
                  key={`brand-seq1-${i}`}
                  className="whitespace-nowrap px-5 py-2.5 rounded-2xl bg-brand-card/70 hover:bg-brand-card border border-brand-cyan/25 hover:border-amber-400/60 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md flex items-center gap-2 cursor-default select-none hover:scale-105"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60" />
                  <span>{brand}</span>
                </div>
              ))}

              {/* Second Sequence (Repeated for seamless loop) */}
              {brands.map((brand, i) => (
                <div
                  key={`brand-seq2-${i}`}
                  className="whitespace-nowrap px-5 py-2.5 rounded-2xl bg-brand-card/70 hover:bg-brand-card border border-brand-cyan/25 hover:border-amber-400/60 text-slate-200 hover:text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-md flex items-center gap-2 cursor-default select-none hover:scale-105"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60" />
                  <span>{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

