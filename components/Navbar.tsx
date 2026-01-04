import React, { useState, useEffect } from 'react';
import { Menu, X, Building2, ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Properties', value: 'properties' },
    { label: 'Services', value: 'services' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  // Logic: 
  // If Scrolled & Menu Closed -> White BG, Navy Text
  // If Top & Menu Closed -> Transparent BG, White Text (assuming dark hero)
  // If Menu Open -> Transparent BG (shows menu overlay), White Text
  const isDarkText = isScrolled && !isMobileMenuOpen;
  const showWhiteBg = isScrolled && !isMobileMenuOpen;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${
        showWhiteBg
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
        {/* Logo */}
        <button 
          onClick={() => { setPage('home'); setIsMobileMenuOpen(false); }} 
          className="flex items-center gap-2 group"
        >
          <div className={`p-2 rounded-sm transition-colors duration-300 ${
            isDarkText 
              ? 'bg-aurelia-navy text-white' 
              : 'bg-white text-aurelia-navy'
          }`}>
            <Building2 size={24} strokeWidth={1.5} />
          </div>
          <span className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${
            isDarkText ? 'text-aurelia-navy' : 'text-white'
          }`}>
            Aurelia
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => setPage(link.value)}
              className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-aurelia-gold relative group ${
                currentPage === link.value 
                  ? 'text-aurelia-gold' 
                  : isDarkText ? 'text-slate-600' : 'text-slate-200'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-aurelia-gold transition-all duration-300 group-hover:w-full ${currentPage === link.value ? 'w-full' : ''}`}></span>
            </button>
          ))}
          <button 
            onClick={() => setPage('contact')}
            className={`px-6 py-2.5 text-sm font-medium rounded-sm transition-all duration-300 border ${
              isDarkText 
                ? 'border-aurelia-navy text-aurelia-navy hover:bg-aurelia-navy hover:text-white' 
                : 'border-white text-white hover:bg-white hover:text-aurelia-navy'
            }`}
          >
            Book a Stay
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 -mr-2 focus:outline-none transition-colors duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen 
            ? <X size={28} className="text-white" /> 
            : <Menu size={28} className={isDarkText ? 'text-aurelia-navy' : 'text-white'} />
          }
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-900 z-40 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        {/* Background Decorative Gradient */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="h-full flex flex-col pt-28 px-8 pb-10 overflow-y-auto">
            <div className="flex flex-col space-y-6">
            {navLinks.map((link, idx) => (
                <button
                key={link.value}
                onClick={() => {
                    setPage(link.value);
                    setIsMobileMenuOpen(false);
                }}
                style={{ transitionDelay: `${100 + idx * 50}ms` }}
                className={`text-3xl font-serif font-medium text-left transition-all duration-500 transform ${
                    isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                } ${currentPage === link.value ? 'text-aurelia-gold' : 'text-white hover:text-aurelia-gold'}`}
                >
                {link.label}
                </button>
            ))}
            </div>

            <div 
                style={{ transitionDelay: '400ms' }}
                className={`mt-auto pt-12 border-t border-white/10 transition-all duration-500 transform ${
                    isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <button 
                    onClick={() => { setPage('contact'); setIsMobileMenuOpen(false); }}
                    className="w-full bg-white text-aurelia-navy py-4 rounded-sm font-medium flex items-center justify-center group mb-8 hover:bg-aurelia-gold hover:text-white transition-colors duration-300"
                >
                    Book a Stay
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="space-y-3 text-slate-400 text-sm font-light tracking-wide">
                    <p>hello@aurelia-stays.com</p>
                    <p>+44 (0) 20 1234 5678</p>
                </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;