import React from 'react';

export const AboutAuthor: React.FC = () => {
  return (
    <section id="autor" className="py-12 sm:py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Gray Container Card (as seen in PDF) */}
        <div className="bg-[#EFEFEF] rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Author Portrait (img04.png) */}
            <div className="md:col-span-5 flex justify-center">
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm max-w-[320px] w-full">
                <img
                  src="/assets/img04.png"
                  alt="Maurício Sarmento - Autor do livro Criando as Marcas do Futuro"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  width={600}
                  height={600}
                />
              </div>
            </div>

            {/* Right: Bio & Credentials */}
            <div className="md:col-span-7 space-y-4 text-gray-800">
              <div>
                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-gray-950 uppercase tracking-tight">
                  SOBRE O AUTOR.
                </h2>
                <h3 className="font-heading font-bold text-lg sm:text-xl text-gray-900 mt-1">
                  Maurício Sarmento
                </h3>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed text-gray-700 font-medium">
                Estrategista de Marketing e Branded Content | Diretor de Filmes | Professor da ESPM | Mestrando em Administração na FGV | Especialista em Comunicação e Marketing pela USP.
              </p>

              <div className="space-y-3 text-xs sm:text-sm leading-relaxed text-gray-700">
                <p>
                  Estudou Cinematografia na NYFA – New York Film Academy e na Maine Media College (USA).
                </p>
                <p>
                  Participou de projetos e campanhas para marcas como Nike, Meta, Ford, Havaianas, Nestlé, Budweiser, Bradesco, Banco BV, Itaú Cultural, Dasa, Eztec, Alphaville e Ascenty.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
