
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const features = [
    {
      icon: '⏰',
      title: 'Estratégias práticas e rápidas',
      description: 'Autocuidado físico e mental mesmo com agendas lotadas'
    },
    {
      icon: '🌸',
      title: 'Rotinas diárias express',
      description: 'Menos de 10 minutos para promover saúde e bem-estar'
    },
    {
      icon: '🧘‍♀️',
      title: 'Autocuidado profundo',
      description: 'Sugestões semanais e mensais para cuidar de si mesma'
    },
    {
      icon: '🧠',
      title: 'Meditação rápida',
      description: 'Sessões express para reduzir o estresse do dia a dia'
    },
    {
      icon: '🥗',
      title: 'Alimentação saudável',
      description: 'Planos simples e rápidos que cabem na sua rotina'
    },
    {
      icon: '🤸‍♀️',
      title: 'Exercícios de alongamento',
      description: 'Fáceis de fazer durante o dia, em qualquer lugar'
    },
    {
      icon: '📋',
      title: 'Checklists e lembretes',
      description: 'Para garantir a prática regular do autocuidado'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Transforme sua Vida com o{' '}
              <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                Ritual Coreano
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Um guia prático desenvolvido especialmente para mulheres ocupadas que querem incorporar 
              o autocuidado em suas rotinas diárias, sem precisar de horas livres que você não tem.
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                alt="Mulher coreana cuidando da pele" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-rose-50 to-purple-50"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {feature.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Content */}
          <div className="mt-16 bg-gradient-to-r from-rose-100 to-purple-100 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-4">
                  Por que o método coreano funciona?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As mulheres coreanas são conhecidas mundialmente por sua pele perfeita e equilíbrio 
                  mental, mesmo vivendo em uma das sociedades mais aceleradas do mundo.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  O segredo está na consistência de pequenos rituais diários que se tornam hábitos 
                  poderosos, transformando não apenas a aparência, mas toda a qualidade de vida.
                </p>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                  alt="Mulher meditando" 
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
