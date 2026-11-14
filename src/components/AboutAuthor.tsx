import React from 'react';

export const AboutAuthor: React.FC = () => {
  return (
    <section id="autor" className="w-full bg-[#E7E7E7] py-14 sm:py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-14 items-center">
          
          {/* Left: Author Portrait (img04.png) - Sem moldura ou sombra, direto no fundo cinza */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <img
              src="/assets/img04.png"
              alt="Maurício Sarmento - Autor do livro Criando as Marcas do Futuro"
              className="w-full max-w-[380px] lg:max-w-[440px] h-auto object-contain block"
              loading="lazy"
              width={555}
              height={605}
            />
          </div>

          {/* Right: Bio & Credentials */}
          <div className="md:col-span-7 space-y-5 sm:space-y-6 text-black">
            <div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-black uppercase tracking-tight leading-tight">
                SOBRE O AUTOR.
              </h2>
              <h3 className="font-heading font-normal text-xl sm:text-2xl text-black mt-1">
                Maurício Sarmento
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-[1.05rem] leading-relaxed text-black font-normal">
              <p>
                Estrategista de Marketing e Branded Content | Diretor de Filmes | Professor da ESPM | Mestrando em Administração na FGV | Especialista em Comunicação e Marketing pela USP.
              </p>

              <div className="space-y-3">
                <p>
                  Estudou Cinematografia na NYFA - New York Film Academy e na Maine Media College (USA).
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
