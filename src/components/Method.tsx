import React from 'react';

export const Method: React.FC = () => {
  return (
    <section id="metodo" className="py-12 sm:py-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Center: Composition of 4 Books (img03.png) */}
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100 mb-10 sm:mb-12">
          <img
            src="/assets/img03.png"
            alt="Criando as Marcas do Futuro - Método A2M SigniTelling (4 Volumes)"
            className="w-full h-auto object-cover"
            loading="lazy"
            width={1920}
            height={1080}
          />
        </div>

        {/* Text Block: 4 Editorial Paragraphs */}
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
          <p>
            O livro <strong className="font-semibold text-gray-950">Criando as Marcas do Futuro</strong> apresenta o <strong className="font-semibold text-gray-950">Método A2M SigniTelling™</strong>, um framework nascido a partir da dissertação de mestrado do autor em Administração da FGV. Sua proposta é conduzir uma jornada estruturada que parte da realidade do negócio, investiga aquilo que uma oferta pode legitimamente representar, encontra um significado capaz de organizar a marca e transforma essa escolha em posicionamento, narrativa, conteúdo e presença digital. A obra inclui ainda um Assistente de IA para acompanhar o leitor na aplicação do método.
          </p>

          <p>
            Posicionamento, aqui, não é criar um slogan bonito, empilhar adjetivos ou transformar a comunicação numa ficha técnica infinita. É construir uma diferença que possa ser percebida, provada e sustentada.
          </p>

          <p>
            Para empreendedores, executivos, profissionais e estudantes de Marketing, Comunicação, Administração e Branding, profissionais liberais e especialistas que desejam construir ou reencontrar um centro claro para seus negócios.
          </p>

          <p>
            Porque as marcas do futuro continuarão sendo criadas por pessoas. Pessoas fazendo escolhas, vivendo experiências, construindo relações e decidindo o que merece permanecer.
          </p>
        </div>

      </div>
    </section>
  );
};
