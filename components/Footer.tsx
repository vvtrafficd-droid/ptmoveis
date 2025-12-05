import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F5F5F5] dark:bg-[#1a170f] text-[#666666] dark:text-[#a0a0a0] mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <Logo className="h-20 w-auto" />
            </div>
            <p className="text-sm max-w-sm">
              Móveis Premium com Design Contemporâneo para transformar o seu
              espaço.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-text-light dark:text-text-dark">Contato</h3>
            <div className="flex flex-col gap-2 text-sm">
              <p className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-lg">mail</span>{' '}
                ptmoveisgeral@gmail.com
              </p>
              <p className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-lg">call</span>{' '}
                +351 939 076 117
              </p>
              <p className="flex items-start gap-2 hover:text-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-lg mt-0.5">
                  location_on
                </span>{' '}
                <span>
                  Rua do Parque, nº 459,
                  <br />
                  Penamaior, Paços de Ferreira,
                  <br />
                  Portugal, 4595-302
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-[#DDDDDD] dark:border-white/10 text-center text-sm">
          <p>© 2025 PT Móveis. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;