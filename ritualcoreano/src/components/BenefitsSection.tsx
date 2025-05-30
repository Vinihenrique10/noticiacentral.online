
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: '⏱️',
      title: 'Autocuidado em 10 minutos por dia',
      description: 'Rotinas práticas que se encaixam perfeitamente na sua agenda corrida',
      gradient: 'from-rose-400 to-pink-500'
    },
    {
      icon: '✨',
      title: 'Pele de porcelana e mente equilibrada',
      description: 'Técnicas coreanas para uma pele radiante e paz interior duradoura',
      gradient: 'from-purple-400 to-indigo-500'
    },
    {
      icon: '🧘‍♀️',
      title: 'Exercícios e meditações express',
      description: 'Práticas rápidas e eficazes para aliviar o estresse instantaneamente',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      icon: '📋',
      title: 'Checklists e planilhas prontas',
      description: 'Ferramentas organizadas para facilitar e manter sua nova rotina',
      gradient: 'from-green-400 to-emerald-500'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Transforme sua Vida com{' '}
              <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                Resultados Reais
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como o Ritual Coreano vai revolucionar seu autocuidado e sua qualidade de vida
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white overflow-hidden group"
              >
                <CardContent className="p-8 relative">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.gradient}`}></div>
                  
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${benefit.gradient} text-white text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover effect background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Success Stories Preview */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-6">
                O que nossas alunas estão dizendo:
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-yellow-500 text-2xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-600 italic mb-2">
                    "Finalmente consegui uma rotina que funciona!"
                  </p>
                  <p className="text-sm text-gray-500">- Marina, 32 anos</p>
                </div>
                
                <div className="text-center">
                  <div className="text-yellow-500 text-2xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-600 italic mb-2">
                    "Minha pele nunca esteve tão bonita!"
                  </p>
                  <p className="text-sm text-gray-500">- Carla, 28 anos</p>
                </div>
                
                <div className="text-center">
                  <div className="text-yellow-500 text-2xl mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-600 italic mb-2">
                    "Me sinto mais calma e equilibrada."
                  </p>
                  <p className="text-sm text-gray-500">- Ana, 35 anos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
