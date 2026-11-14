import React from 'react';

export const BookConversion: React.FC = () => {
  return (
    <section id="comprar" className="py-14 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Purchase Details & Button */}
          <div className="md:col-span-6 lg:col-span-7 space-y-6 sm:space-y-7 text-black">
            <div>
              <h2 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl xl:text-[2rem] text-black uppercase tracking-tight leading-tight whitespace-normal sm:whitespace-nowrap">
                CRIANDO AS MARCAS DO FUTURO.
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-black font-normal mt-1">
                Autor: Maurício Sarmento
              </p>
            </div>

            <div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-black tracking-wide">
                AMAZON
              </h3>
            </div>

            <div className="space-y-1.5">
              <span className="text-sm sm:text-base text-black block font-normal">
                Formatos:
              </span>
              <div className="font-heading font-bold text-sm sm:text-base text-black space-y-0.5 tracking-wide">
                <div>CAPA COMUM</div>
                <div>KINDLE</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://www.amazon.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-12 sm:px-14 py-3 sm:py-3.5 rounded-full bg-[#BBC9D6] hover:bg-[#a9bac8] active:scale-[0.98] text-black font-heading font-extrabold sm:font-black text-sm sm:text-base uppercase tracking-wider transition-all"
              >
                COMPRAR
              </a>
            </div>
          </div>

          {/* Right Column: 3D Book Mockup (img05.png) - Sem borda ou drop shadow artificial */}
          <div className="md:col-span-6 lg:col-span-5 flex justify-center md:justify-end">
            <div className="max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] w-full">
              <img
                src="/assets/img05.png"
                alt="Criando as Marcas do Futuro - Capa Comum e Kindle na Amazon"
                className="w-full h-auto object-contain block"
                loading="lazy"
                width={1000}
                height={1033}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
