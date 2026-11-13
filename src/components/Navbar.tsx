import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Sparkles, BookOpen } from 'lucide-react';

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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-2xl py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 rounded-lg p-1">
            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-brand-navy/60 border border-brand-cyan/30 flex items-center justify-center p-1 group-hover:border-brand-amber/60 transition-colors">
              <img 
                src="/assets/img06.png" 
                alt="Escudo Oficial A2M SigniTelling AI" 
                className="w-full h-full object-contain filter drop-shadow"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-brand-amber transition-colors">
                CRIANDO AS MARCAS DO FUTURO
              </span>
              <span className="text-[11px] font-mono text-brand-cyan font-medium tracking-wider flex items-center gap-1">
                MÉTODO A2M SIGNITELLING™
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navegação Principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-cyan hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#assistente"
              className="px-3.5 py-2 rounded-lg text-xs font-semibold text-brand-cyan border border-brand-cyan/30 hover:bg-brand-cyan/10 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Prompt AI</span>
            </a>
            <a
              href="https://www.amazon.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-lg shadow-amber-500/20 flex items-center gap-1.5 focus:ring-2 focus:ring-amber-400"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Comprar na Amazon</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
            aria-label={isOpen ? 'Fechar Menu' : 'Abrir Menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden glass-nav border-t border-brand-cyan/10 mt-3 px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a
              href="#assistente"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 rounded-lg text-center text-sm font-semibold text-brand-cyan border border-brand-cyan/30 hover:bg-brand-cyan/10 transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Acessar Assistente AI Grátis
            </a>
            <a
              href="https://www.amazon.com.br"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 rounded-lg text-center text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 transition-colors flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Garantir Exemplar na Amazon
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

