import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, BookOpen } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    { label: 'O Método', href: '#metodo' },
    { label: 'Sobre o Autor', href: '#autor' },
    { label: 'Amazon', href: '#comprar' },
    { label: 'Assistente AI', href: '#assistente' },
    { label: 'Termos de Uso', href: '#termos' }
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-all duration-300 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isOpen
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-gray-100 py-3.5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between gap-4">
            
            {/* Left: Brand Identity */}
            <a
              href="#livro"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 shrink-0 group focus:outline-none focus:ring-2 focus:ring-slate-400 rounded-lg p-1"
            >
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center p-0.5">
                <img
                  src="/assets/img06.png"
                  alt="A2M SigniTelling Logo"
                  className="w-full h-full object-contain"
                  loading="eager"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex flex-col whitespace-nowrap leading-tight">
                <span className="font-heading font-black text-xs sm:text-sm tracking-tight text-gray-950 group-hover:text-slate-700 transition-colors uppercase">
                  CRIANDO AS MARCAS DO FUTURO
                </span>
                <span className="text-[10px] sm:text-[11px] text-gray-500 font-medium tracking-wide">
                  Método A2M SigniTelling™
                </span>
              </div>
            </a>

            {/* Center: Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0"
              aria-label="Navegação Principal"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 hover:text-gray-950 hover:bg-gray-100/80 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: CTA Button */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href="#comprar"
                className="whitespace-nowrap px-4 py-2 rounded-full text-xs font-heading font-bold text-white bg-[#8fa7bf] hover:bg-[#7a95b0] transition-colors shadow-sm flex items-center gap-1.5 uppercase tracking-wider"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Comprar</span>
                <ExternalLink className="w-3 h-3 opacity-80" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-gray-950 hover:bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-colors"
              aria-label={isOpen ? 'Fechar Menu' : 'Abrir Menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

          {/* Mobile Drawer */}
          {isOpen && (
            <div className="lg:hidden mt-3 pt-3 border-t border-gray-100 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="whitespace-nowrap px-3 py-2 rounded-lg text-sm font-semibold text-gray-800 hover:bg-gray-100 transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-gray-400">›</span>
                  </a>
                ))}
              </nav>

              <div className="pt-2 border-t border-gray-100">
                <a
                  href="#comprar"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2.5 rounded-full text-center text-xs font-heading font-bold text-white bg-[#8fa7bf] hover:bg-[#7a95b0] transition-colors shadow-sm flex items-center justify-center gap-1.5 uppercase tracking-wider"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Comprar na Amazon</span>
                </a>
              </div>
            </div>
          )}

        </div>
      </header>
    </>
  );
};
