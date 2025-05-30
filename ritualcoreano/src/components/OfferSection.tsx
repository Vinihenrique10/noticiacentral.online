
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import CountdownTimer from '@/components/CountdownTimer';

const OfferSection = () => {
  return (
    <section id="oferta" className="py-20 bg-gradient-to-br from-rose-50 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Escolha a oferta{' '}
              <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                perfeita para você
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Comece sua transformação hoje mesmo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Oferta 1 - Básica */}
            <Card className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-2">
                    Guia Digital
                  </h3>
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    R$ 14,90
                  </div>
                  <p className="text-gray-600">Apenas o essencial</p>
                </div>

                <div className="space-y-4 mb-8 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">Guia Digital Completo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">Acesso imediato ao conteúdo</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">Rotinas de 10 minutos</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gray-600 hover:bg-gray-700 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                  onClick={() => window.open('https://lastlink.com/p/C1E6323FF/checkout-payment/', '_blank')}
                >
                  Quero só o Guia
                </Button>
              </CardContent>
            </Card>

            {/* Oferta 2 - Completa (Destacada) */}
            <Card className="border-4 border-gradient-to-r from-rose-500 to-purple-600 shadow-2xl transform scale-105 relative overflow-hidden">
              {/* Badge de destaque */}
              <div className="absolute top-0 right-0 bg-gradient-to-r from-gold-400 to-gold-600 text-white px-6 py-3 rounded-bl-2xl text-sm font-bold animate-pulse z-10">
                MAIS POPULAR
              </div>

              <CardContent className="p-8 text-center relative pt-16">
                <div className="mb-6">
                  <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-2">
                    Transformação Completa
                  </h3>
                  <div className="text-4xl font-bold bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent mb-2">
                    R$ 29,90
                  </div>
                  <p className="text-gray-600">Tudo que você precisa</p>
                </div>

                {/* Destaque de conteúdo em vídeo */}
                <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-xl text-sm font-bold mb-6 inline-flex items-center gap-2">
                  🎥 TODO CONTEÚDO EM VÍDEO
                </div>

                <div className="space-y-3 mb-6 text-left">
                  <div className="bg-gradient-to-r from-rose-50 to-purple-50 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">Guia Digital COMPLETO:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Estratégias rápidas para rotinas diárias, semanais e mensais</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Sessões de meditação express</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Planos de alimentação simples e saudáveis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Exercícios de alongamento fáceis</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>Checklists e lembretes personalizados</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gold-50 to-gold-100 p-4 rounded-xl">
                    <h4 className="font-bold text-gray-800 mb-2">5 Bônus Exclusivos:</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gold-500">🎁</span>
                        <span>Mini-Curso 5 Dias de Ritual Coreano Express</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gold-500">🎁</span>
                        <span>Grupo VIP no Telegram com suporte diário</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gold-500">🎁</span>
                        <span>Kit Digital de Receitas Rápidas Coreanas</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gold-500">🎁</span>
                        <span>Áudio Guia de Meditação Anti-Stress</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gold-500">🎁</span>
                        <span>Planner de Autocuidado Personalizado</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-purple-500 text-xl">∞</span>
                      <span className="text-gray-700 font-medium">Acesso vitalício ao material e bônus</span>
                    </div>
                  </div>
                </div>

                {/* Garantia destacada */}
                <div className="bg-green-100 border-2 border-green-300 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-green-600 text-2xl">🛡️</span>
                    <span className="font-bold text-green-800">GARANTIA DE 15 DIAS</span>
                  </div>
                  <p className="text-green-700 text-sm">
                    Teste sem risco! Se não gostar, devolvemos seu dinheiro
                  </p>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-rose-500 to-purple-600 hover:from-rose-600 hover:to-purple-700 text-white py-6 text-xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 animate-pulse-glow shadow-2xl"
                  onClick={() => window.open('https://lastlink.com/p/C5A467E36/checkout-payment/', '_blank')}
                >
                  💎 Quero tudo e mais!
                </Button>

                <p className="text-xs text-gray-500 mt-4">
                  Acesso liberado em até 5 minutos após a confirmação do pagamento
                </p>
              </CardContent>

              {/* Efeito de brilho */}
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-purple-600/10 pointer-events-none"></div>
            </Card>
          </div>

          {/* Urgência e escassez com cronômetro */}
          <div className="text-center mt-12">
            <div className="bg-red-100 border-2 border-red-300 rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="font-bold text-red-800 mb-4">⚠️ Oferta por tempo limitado! O valor vai subir para R$97,00 em 2 horas!</h3>
              <CountdownTimer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
