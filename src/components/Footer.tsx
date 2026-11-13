import React from 'react';
import { ArrowUp, BookOpen, Mail, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020612] border-t border-brand-cyan/20 pt-16 pb-12 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-brand-cyan/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-card border border-brand-cyan/30 flex items-center justify-center p-1">
                <img
                  src="/assets/img06.png"
                  alt="A2M SigniTelling Logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <span className="font-heading font-black text-sm text-white tracking-tight block">
                  CRIANDO AS MARCAS DO FUTURO
                </span>
                <span className="text-[11px] font-mono text-brand-cyan tracking-wider font-semibold">
                  MÉTODO A2M SIGNITELLING™
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
              Metodologia de posicionamento de marcas concebida por Maurício Sarmento a partir de sua dissertação de mestrado em Administração na Fundação Getulio Vargas (FGV).
            </p>

            <div className="flex items-center gap-3 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-brand-cyan" />
              <span>Direitos intelectuais protegidos • Metodologia Registrada</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#livro" className="hover:text-brand-cyan transition-colors">O Livro</a></li>
              <li><a href="#manifesto" className="hover:text-brand-cyan transition-colors">O Manifesto</a></li>
              <li><a href="#metodo" className="hover:text-brand-cyan transition-colors">O Método A2M</a></li>
              <li><a href="#publico" className="hover:text-brand-cyan transition-colors">Para Quem É</a></li>
              <li><a href="#autor" className="hover:text-brand-cyan transition-colors">Sobre o Autor</a></li>
              <li><a href="#assistente" className="hover:text-brand-cyan transition-colors">Assistente AI</a></li>
              <li><a href="#termos" className="hover:text-brand-cyan transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          {/* Contact and Purchase */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
              Contato & Aquisição
            </h4>
            
            <a
              href="https://www.amazon.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md w-full justify-center"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Comprar na Amazon</span>
            </a>

            <div className="pt-1 space-y-1">
              <span className="text-[11px] text-slate-300 block">Dúvidas acadêmicas ou licenças:</span>
              <a
                href="mailto:mauricio.sarmento@espm.br"
                className="text-xs font-mono text-brand-cyan hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>mauricio.sarmento@espm.br</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p className="text-center sm:text-left">
            © 2026 Maurício Nunes Sarmento. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-brand-cyan transition-colors p-2 rounded-lg hover:bg-slate-900"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

