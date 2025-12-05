
import React, { useState } from 'react';
import Logo from './Logo';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="w-full border-b border-solid border-b-text-light/10 dark:border-b-text-dark/10 relative z-50 bg-background-light dark:bg-background-dark">
      <div className="flex w-full max-w-[1440px] mx-auto items-center justify-between whitespace-nowrap px-4 sm:px-8 py-2">
        {/* Brand */}
        <div className="flex items-center">
          <Logo className="h-16 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 justify-center md:flex h-full">
          <nav className="flex items-center gap-8 h-full">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group h-full flex items-center">
                <a
                  className="text-sm font-medium leading-normal hover:text-primary transition-colors flex items-center gap-1 py-4"
                  href={link.href}
                >
                  {link.label}
                  {link.subcategories && (
                    <span className="material-symbols-outlined text-[16px]">expand_more</span>
                  )}
                </a>
                
                {/* Desktop Dropdown */}
                {link.subcategories && (
                  <div className="absolute top-full left-0 hidden group-hover:block pt-2 w-56 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="bg-background-light dark:bg-background-dark border border-text-light/10 dark:border-text-dark/10 shadow-xl rounded-lg overflow-hidden flex flex-col p-2">
                      {link.subcategories.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="text-sm px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5 hover:text-primary transition-colors rounded text-left"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Icons & Mobile Toggle */}
        <div className="flex items-center gap-2">
          
          {/* Search Component */}
          <div className="flex items-center">
            {isSearchOpen ? (
              <div className="flex items-center bg-text-light/5 dark:bg-text-dark/5 rounded-lg border border-text-light/10 dark:border-text-dark/10 overflow-hidden animate-in fade-in slide-in-from-right-4 duration-200">
                <input 
                  type="text" 
                  placeholder="Buscar..." 
                  className="bg-transparent border-none focus:ring-0 text-sm px-3 py-2 w-32 sm:w-48 text-text-light dark:text-text-dark placeholder-text-light/50 dark:placeholder-text-dark/50 outline-none"
                  autoFocus
                />
                <button 
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-text-light/10 dark:hover:bg-text-dark/10 text-text-light dark:text-text-dark transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] block">close</span>
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)}
                className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-text-light/10 dark:bg-text-dark/10 text-text-light dark:text-text-dark hover:bg-primary/20 transition-colors"
              >
                <span className="material-symbols-outlined">search</span>
              </button>
            )}
          </div>

          {/* Social Icons (Replacing User Icon) */}
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-text-light/10 dark:bg-text-dark/10 text-text-light dark:text-text-dark hover:bg-primary/20 hover:text-primary transition-colors"
            title="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-text-light/10 dark:bg-text-dark/10 text-text-light dark:text-text-dark hover:bg-primary/20 hover:text-primary transition-colors"
            title="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-text-light/10 dark:bg-text-dark/10 text-text-light dark:text-text-dark hover:bg-primary/20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-background-light dark:bg-background-dark border-b border-text-light/10 dark:border-b-text-dark/10 p-4 md:hidden shadow-lg flex flex-col gap-2 z-50 max-h-[80vh] overflow-y-auto">
             {NAV_LINKS.map((link) => (
               <div key={link.label} className="flex flex-col">
                  <a
                    className="text-base font-medium leading-normal hover:text-primary transition-colors block py-2 px-2 rounded hover:bg-black/5 dark:hover:bg-white/5"
                    href={link.href}
                    onClick={() => !link.subcategories && setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                  {link.subcategories && (
                    <div className="pl-6 flex flex-col border-l border-text-light/10 dark:border-text-dark/10 ml-2">
                       {link.subcategories.map(sub => (
                         <a 
                           key={sub.label} 
                           href={sub.href}
                           className="text-sm py-2 px-2 text-text-light/80 dark:text-text-dark/80 hover:text-primary block"
                           onClick={() => setMobileMenuOpen(false)}
                         >
                           {sub.label}
                         </a>
                       ))}
                    </div>
                  )}
               </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
