import React from 'react';
import { XCircle, CheckCircle, ShieldAlert, Zap, Compass, Sparkles } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="relative py-24 bg-brand-primary overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-card border border-brand-cyan/30 text-brand-cyan text-xs font-semibold">
            <Compass className="w-3.5 h-3.5 text-brand-cyan" />
            <span>O Manifesto da Marca Autêntica</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Produzir Ficou Mais Fácil. <br />
            <span className="text-amber-400">
              Escolher Ficou Mais Valioso.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Em um mundo hiperacelerado pela inteligência artificial, a verdadeira vantagem competitiva não está na velocidade de execução, mas na clareza inegociável do significado.
          </p>
        </div>

        {/* Central Content: Book in Hands (img02.png) + Author Context */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Visual: Book Held in Hands (img02.png) */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-brand-cyan/30 shadow-2xl shadow-cyan-950/70 bg-gradient-to-br from-brand-card to-brand-navy p-3">
              <img
                src="/assets/img02.png"
                alt="Leitor segurando o livro Criando as Marcas do Futuro"
                className="w-full h-auto rounded-2xl object-cover group-hover:scale-[1.02] transition-transform duration-500 filter brightness-95"
                loading="lazy"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay note */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card border border-brand-cyan/30 backdrop-blur-md">
                <p className="text-xs sm:text-sm text-slate-200 italic">
                  "Quem lê o livro entende por que ele interrompe um salto abstrato, por que exige prova e por que recomenda renunciar."
                </p>
              </div>
            </div>
          </div>

          {/* Text block: Authentic Author's Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-card/80 to-brand-secondary/90 border border-brand-cyan/20 space-y-4">
              <h3 className="font-heading font-extrabold text-2xl text-white">
                Fazer bem já não garante diferenciação.
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Em cenários cada vez mais competitivos, saturados e parecidos, produtos se aproximam, vantagens operacionais são copiadas com velocidade vertiginosa e a inteligência artificial tornou possível produzir mais, mais rápido e com qualidade cada vez semelhante.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nesse contexto, <strong className="text-white">você não precisa ser criativo todos os dias</strong>. Precisa saber, todos os dias, o que sua marca deseja significar.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 to-brand-card border border-brand-amber/30 space-y-3">
              <div className="flex items-center gap-2 text-brand-amber text-xs font-mono font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>O Princípio Central do A2M</span>
              </div>
              <blockquote className="text-base sm:text-lg text-white font-medium italic border-l-2 border-brand-amber pl-4">
                "Posicionamento, aqui, não é criar um slogan bonito, empilhar adjetivos ou transformar a comunicação numa ficha técnica infinita. É construir uma diferença que possa ser percebida, provada e sustentada."
              </blockquote>
            </div>

          </div>

        </div>

        {/* Comparative Grid: O que Posicionamento NÃO é vs O que É */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card: O Que NÃO É */}
          <div className="p-8 rounded-3xl bg-red-950/20 border border-red-500/30 backdrop-blur-md space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl text-white">O Que Posicionamento NÃO É</h4>
                <p className="text-xs text-red-300/80">Os erros e armadilhas que o mercado insiste em repetir</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span><strong>Criar um slogan bonito:</strong> Frases de efeito desconectadas da verdade do produto ou da entrega real.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span><strong>Empilhar adjetivos genéricos:</strong> Proclamar "inovação", "excelência", "qualidade" e "foco no cliente" que qualquer concorrente pode assinar.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span><strong>Ficha técnica infinita:</strong> Afogar o cliente em especificações mecânicas sem explicar o valor que transforma sua realidade.</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span><strong>Salto abstrato sem provas:</strong> Prometer transformações milagrosas sem respaldo nos processos e na infraestrutura do negócio.</span>
              </li>
            </ul>
          </div>

          {/* Card: O Que É */}
          <div className="p-8 rounded-3xl bg-emerald-950/20 border border-emerald-500/30 backdrop-blur-md space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-xl text-white">O Que Posicionamento É</h4>
                <p className="text-xs text-emerald-300/80">O rigor metodológico do Método A2M SigniTelling™</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Diferença percebida, provada e sustentada:</strong> Lastreada na capacidade operacional do dia a dia da organização.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Significado Organizador:</strong> Uma ideia unificadora que orienta desde o atendimento até a tomada de decisão da diretoria.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>A coragem de renunciar:</strong> Ter clareza sobre o que o negócio NÃO faz para proteger sua identidade única.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Teste de Rastreabilidade constante:</strong> Cada afirmação de marketing deve poder ser comprovada em 10 segundos na operação.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

