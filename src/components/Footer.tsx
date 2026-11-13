import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-10 text-gray-500 text-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gray-900 flex items-center justify-center p-0.5">
            <img
              src="/assets/img06.png"
              alt="Logo A2M"
              className="w-full h-full object-contain"
              loading="lazy"
              width={24}
              height={24}
            />
          </div>
          <div>
            <span className="font-heading font-bold text-gray-900 block">CRIANDO AS MARCAS DO FUTURO</span>
            <span className="text-[11px] text-gray-500">Método A2M SigniTelling™</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:mauricio.sarmento@espm.br"
            className="hover:text-gray-900 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>mauricio.sarmento@espm.br</span>
          </a>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-gray-900 transition-colors p-1"
            aria-label="Voltar ao topo"
          >
            <span>Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
