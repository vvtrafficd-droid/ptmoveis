import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="@container">
      <div className="@[480px]:p-0">
        <div
          className="flex min-h-[520px] w-full flex-col items-center justify-center gap-6 rounded-xl bg-cover bg-center bg-no-repeat p-4 @[480px]:gap-8 shadow-xl"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDF18TJ3wkoiIoHzdiJPjgdbi2_fhyEX0OUWpln55n-MVqfpASlV8E0isljRdJ5WyRsRLtRkVDntULLSJkad6mRtWYNOXRQxN_GkXdz2e-xZiYPTZSQpdYFUB1hYdGv_REIVyvfKxIorTWgI86Gcb3gok6fOTwmOnqiU2IO374gipsoK4c03wpr3Luy0xb1IzaMM0m28Q4RVLuixtcvRaezKuz5FHzkaFA9LvYPACkXqocZa22PoyrpFgEk7gYTrlclF3SWqG4jRzs")',
          }}
        >
          <div className="flex max-w-2xl flex-col gap-2 text-center animate-fade-in-up">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl drop-shadow-md">
              Móveis Premium com Design Contemporâneo
            </h1>
            <p className="text-white text-sm font-normal leading-normal @[480px]:text-base drop-shadow-sm max-w-lg mx-auto">
              Descubra peças exclusivas que combinam artesanato de qualidade,
              materiais nobres e estilo único para transformar o seu espaço.
            </p>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:brightness-110 hover:scale-105 transition-all shadow-lg active:scale-95">
            <span className="truncate">Explorar Coleções</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;