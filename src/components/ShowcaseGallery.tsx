import React from 'react';

export const ShowcaseGallery: React.FC = () => {
  return (
    <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm border border-gray-100">
          <img
            src="/assets/img01.png"
            alt="Criando as Marcas do Futuro - Painel Arquitetônico"
            className="w-full h-auto object-cover"
            loading="eager"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </section>
  );
};
