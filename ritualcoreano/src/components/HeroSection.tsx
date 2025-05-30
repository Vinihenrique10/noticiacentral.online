
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            O Segredo das Mulheres Coreanas para{' '}
            <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
              Cuidar da Pele, Corpo e Mente
            </span>{' '}
            em Apenas 10 Minutos por Dia
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-inter animate-slide-in-left">
            Método rápido, prático e poderoso para mulheres que vivem na correria e querem resultados reais
          </p>

          {/* Video Section */}
          <div className="mb-8 animate-slide-in-right">
            <div className="bg-gradient-to-r from-rose-100 to-purple-100 p-8 rounded-2xl shadow-xl">
              <div className="aspect-video bg-white rounded-xl shadow-inner overflow-hidden">
                {/* Vídeo de vendas atualizado */}
                <script 
                  type="text/javascript"
                  dangerouslySetInnerHTML={{
                    __html: `
                      var s=document.createElement("script"); 
                      s.src="https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js", 
                      s.setAttribute("data-id", "6838ec8a6d13465a546e7002"), 
                      s.async=!0,document.head.appendChild(s);
                    `
                  }}
                />
                <div id="ifr_6838ec8a6d13465a546e7002_wrapper" style={{ margin: '0 auto', width: '100%' }}>
                  <div style={{ padding: '56.25% 0 0 0', position: 'relative' }} id="ifr_6838ec8a6d13465a546e7002_aspect">
                    <iframe 
                      frameBorder="0" 
                      allowFullScreen 
                      src="https://scripts.converteai.net/409a3270-e3c6-449c-957d-beb41d42c9f9/players/6838ec8a6d13465a546e7002/embed.html" 
                      id="ifr_6838ec8a6d13465a546e7002" 
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                      referrerPolicy="origin"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={scrollToOffer}
            className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-12 py-6 text-xl font-bold rounded-full hover:from-rose-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 animate-pulse-glow shadow-2xl"
          >
            💎 Quero meu Guia Agora
          </Button>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span>+500 mulheres transformadas</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">🔒</span>
              <span>Compra 100% segura</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">📱</span>
              <span>Acesso imediato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
