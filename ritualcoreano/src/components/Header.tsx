
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-r from-rose-50 to-purple-50'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair text-2xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
            Ritual Coreano
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('beneficios')}
              className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('oferta')}
              className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
            >
              Oferta
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('garantia')}
              className="text-gray-700 hover:text-rose-500 transition-colors font-medium"
            >
              Garantia
            </button>
          </nav>

          <Button 
            onClick={() => scrollToSection('oferta')}
            className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Quero Agora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
