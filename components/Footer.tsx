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
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/ptmov_eis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light/60 dark:text-text-dark/60 hover:text-primary transition-colors"
                title="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/ptmoveis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light/60 dark:text-text-dark/60 hover:text-primary transition-colors"
                title="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
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