import React from 'react';
import { ExternalLink } from 'lucide-react';

export const BookConversion: React.FC = () => {
  return (
    <section id="comprar" className="py-12 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Purchase Details & Button */}
          <div className="md:col-span-6 space-y-6 text-gray-900">
            <div>
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl lg:text-3xl text-gray-950 uppercase tracking-tight leading-tight">
                CRIANDO AS MARCAS DO FUTURO.
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-medium mt-1">
                Autor: Maurício Sarmento
              </p>
            </div>

            <div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-gray-950 tracking-wider">
                AMAZON
              </h3>
            </div>

            <div className="space-y-1">
              <span className="text-xs sm:text-sm text-gray-600 block">
                Formatos:
              </span>
              <div className="font-heading font-extrabold text-sm sm:text-base text-gray-950 space-y-0.5 tracking-wide">
                <div>CAPA COMUM</div>
                <div>KINDLE</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.amazon.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-10 py-3.5 rounded-full bg-[#9BB2C9] hover:bg-[#859EBA] active:scale-[0.98] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-widest shadow-sm transition-all"
              >
                <span>COMPRAR</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Book Mockup (img05.png) */}
          <div className="md:col-span-6 flex justify-center">
            <div className="max-w-[340px] sm:max-w-[380px] w-full">
              <img
                src="/assets/img05.png"
                alt="Criando as Marcas do Futuro - Capa Comum e Kindle na Amazon"
                className="w-full h-auto object-contain filter drop-shadow-xl"
                loading="lazy"
                width={380}
                height={480}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
