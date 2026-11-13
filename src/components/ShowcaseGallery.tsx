import React from 'react';

export const ShowcaseGallery: React.FC = () => {
  return (
    <section className="w-full bg-white">
      <div className="w-full overflow-hidden">
        <img
          src="/assets/img01.png"
          alt="Criando as Marcas do Futuro - Painel Arquitetônico"
          className="w-full h-auto object-cover block"
          loading="eager"
          width={1920}
          height={1080}
        />
      </div>
    </section>
  );
};
