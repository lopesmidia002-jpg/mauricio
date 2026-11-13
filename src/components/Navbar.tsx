import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Sparkles, BookOpen } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'O Livro', href: '#livro' },
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Método A2M', href: '#metodo' },
    { label: 'Para Quem É', href: '#publico' },
    { label: 'O Autor', href: '#autor' },
    { label: 'Assistente AI', href: '#assistente' },
    { label: 'Termos de Uso', href: '#termos' }
  ];

  return (
    <>
      {/* Full-screen Backdrop Blur Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#030917]/85 backdrop-blur-xl transition-all duration-300 lg:hidden animate-in fade-in"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
        <div 
          className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
            scrolled || isOpen
              ? 'bg-[#030917]/90 backdrop-blur-2xl border border-brand-cyan/25 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.85)] py-2.5 px-4 sm:px-6'
              : 'bg-[#071329]/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] py-3 px-4 sm:px-6'
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Brand Identity & Logo */}
            <a 
              href="#" 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 shrink-0 group focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 rounded-xl p-1"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden bg-brand-navy/90 border border-brand-cyan/40 p-1 flex items-center justify-center shadow-md group-hover:border-amber-400/70 transition-colors">
                <img 
                  src="/assets/img06.png" 
                  alt="Escudo Oficial A2M SigniTelling AI" 
                  className="w-full h-full object-contain filter drop-shadow"
                  loading="eager"
                />
              </div>
              
              <div className="flex flex-col whitespace-nowrap leading-tight">
                <span className="font-heading font-black text-xs sm:text-sm tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  CRIANDO AS MARCAS DO FUTURO
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-brand-cyan font-bold tracking-widest uppercase">
                  MÉTODO A2M SIGNITELLING™
                </span>
              </div>
            </a>

            {/* Center: Desktop Navigation Links (Always on a single line, whitespace-nowrap) */}
            <nav 
              className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 shrink min-w-0" 
              aria-label="Navegação Principal"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.08] active:bg-brand-cyan/15 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Quick Action CTAs */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0">
              <a
                href="#assistente"
                className="whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-brand-cyan bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/35 hover:border-brand-cyan transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Prompt AI</span>
              </a>

              <a
                href="https://www.amazon.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap px-4 py-2 rounded-xl text-xs font-heading font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-500/25 flex items-center gap-1.5 focus:ring-2 focus:ring-amber-400 hover:scale-[1.02] active:scale-[0.98]"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Comprar na Amazon</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>

            {/* Mobile Hamburger Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-200 hover:text-white bg-slate-900/70 hover:bg-slate-800/90 border border-brand-cyan/30 focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all"
              aria-label={isOpen ? 'Fechar Menu de Navegação' : 'Abrir Menu de Navegação'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

          {/* Mobile Dropdown Drawer */}
          {isOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-brand-cyan/20 space-y-3 animate-in fade-in slide-in-from-top-3 duration-200">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 active:bg-brand-cyan/15 transition-all flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-brand-cyan/60">›</span>
                  </a>
                ))}
              </nav>

              <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
                <a
                  href="#assistente"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2.5 rounded-xl text-center text-xs font-mono font-semibold text-brand-cyan bg-brand-cyan/10 hover:bg-brand-cyan/20 border border-brand-cyan/30 transition-colors flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Acessar Assistente AI Grátis</span>
                </a>
                
                <a
                  href="https://www.amazon.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-3 rounded-xl text-center text-xs font-heading font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 transition-colors shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Garantir Exemplar na Amazon</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>
          )}

        </div>
      </header>
    </>
  );
};
