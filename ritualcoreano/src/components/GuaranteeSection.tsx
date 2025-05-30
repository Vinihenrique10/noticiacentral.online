
import React from 'react';
import { Button } from '@/components/ui/button';

const GuaranteeSection = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('oferta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="garantia" className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Selo de garantia grande */}
          <div className="mb-12">
            <div className="inline-block relative animate-float">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl transform rotate-12">
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">🛡️</div>
                  <div className="font-bold text-xl">GARANTIA</div>
                  <div className="font-bold text-2xl">15 DIAS</div>
                  <div className="text-sm">100% Segura</div>
                </div>
              </div>
              
              {/* Efeito de brilho */}
              <div className="absolute inset-0 w-48 h-48 mx-auto bg-gradient-to-br from-green-300/30 to-emerald-500/30 rounded-full animate-pulse"></div>
            </div>
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Garantia Total
            </span>{' '}
            de 15 dias!
          </h2>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mb-12">
            <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              "Se você não gostar de <span className="text-red-500">qualquer coisa</span>, 
              até a cor da área de membros, devolvemos seu dinheiro 
              <span className="text-green-600"> sem enrolação</span>."
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-bold text-gray-800 mb-2">Acesso Instantâneo</h3>
                <p className="text-gray-600">Receba o material em até 5 minutos</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="font-bold text-gray-800 mb-2">100% Seguro</h3>
                <p className="text-gray-600">Pagamento protegido e criptografado</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="font-bold text-gray-800 mb-2">Reembolso Garantido</h3>
                <p className="text-gray-600">15 dias para testar sem risco</p>
              </div>
            </div>
          </div>

          {/* Como funciona a garantia */}
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-8 mb-12">
            <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-6">
              Como funciona nossa garantia:
            </h3>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Compre agora</h4>
                  <p className="text-gray-700 text-sm">Faça seu pedido com total segurança</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Teste por 15 dias</h4>
                  <p className="text-gray-700 text-sm">Use todo o material sem pressa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Não gostou?</h4>
                  <p className="text-gray-700 text-sm">Devolvemos 100% do seu dinheiro</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Final - Melhorado para mobile */}
          <div className="text-center px-4">
            <p className="text-xl text-gray-700 mb-8">
              Você não tem <strong>nada a perder</strong> e uma vida transformada a ganhar!
            </p>

            <Button 
              onClick={scrollToOffer}
              className="w-full max-w-md mx-auto bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white px-4 py-6 text-base md:text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 animate-pulse-glow shadow-2xl leading-tight"
            >
              <span className="block md:inline">
                🚀 Quero Começar Minha<br className="block md:hidden" /> Transformação AGORA!
              </span>
            </Button>

            <p className="text-sm text-gray-500 mt-4">
              ✅ Sem pegadinhas • ✅ Sem taxa de cancelamento • ✅ Suporte completo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
