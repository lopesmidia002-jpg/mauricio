import React from 'react';

export const Manifesto: React.FC = () => {
  return (
    <section id="livro" className="py-12 sm:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Book in Hands (img02.png) */}
          <div className="md:col-span-5 flex justify-center">
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl max-w-[420px] w-full">
              <img
                src="/assets/img02.png"
                alt="Criando as Marcas do Futuro - Livro nas Mãos"
                className="w-full h-auto object-cover rounded-2xl sm:rounded-3xl"
                loading="lazy"
                width={600}
                height={600}
              />
            </div>
          </div>

          {/* Right Column: Title and Manifesto Copy */}
          <div className="md:col-span-7 space-y-5 text-gray-800">
            <div>
              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-gray-950 tracking-tight uppercase leading-tight">
                CRIANDO AS MARCAS DO FUTURO.
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 font-medium tracking-wide mt-1">
                Método A2M SigniTelling™
              </p>
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              Empreender é recusar a ideia de que o mercado precise ser um território de lugares-comuns. É ter inquietação suficiente para sair do mapa sem perder o norte e transformar uma capacidade real em uma diferença que o mercado consiga perceber.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-gray-700">
              Em cenários cada vez mais competitivos, saturados e parecidos, fazer bem já não garante diferenciação. Produtos se aproximam, vantagens são copiadas e a inteligência artificial tornou possível produzir mais, mais rápido e com qualidade cada vez semelhante. Nesse contexto, você não precisa ser criativo todos os dias. Precisa saber, todos os dias, o que sua marca deseja significar. Produzir ficou mais fácil. <strong className="font-semibold text-gray-950">Escolher ficou mais valioso.</strong>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
