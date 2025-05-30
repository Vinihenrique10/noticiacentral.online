
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: "O método realmente funciona em apenas 10 minutos por dia?",
      answer: "Sim! O Ritual Coreano foi desenvolvido especificamente para mulheres ocupadas. As técnicas são práticas, rápidas e eficazes. Você verá resultados já na primeira semana seguindo o método corretamente."
    },
    {
      question: "Preciso comprar produtos caros para seguir o método?",
      answer: "Não! Uma das vantagens do nosso método é que ele utiliza ingredientes simples e acessíveis. Muitas das receitas e técnicas podem ser feitas com produtos que você já tem em casa."
    },
    {
      question: "Funciona para todos os tipos de pele?",
      answer: "Sim! O guia inclui adaptações para diferentes tipos de pele (oleosa, seca, mista, sensível). Cada pessoa pode personalizar as rotinas de acordo com suas necessidades específicas."
    },
    {
      question: "E se eu não tiver tempo nem para 10 minutos?",
      answer: "O guia inclui rotinas ainda mais rápidas de 3-5 minutos para dias muito corridos. O importante é a consistência, não a duração. Sempre há uma alternativa que se encaixa na sua agenda."
    },
    {
      question: "Quanto tempo demora para ver resultados?",
      answer: "Muitas alunas relatam mudanças na primeira semana, especialmente no bem-estar mental. Para resultados mais visíveis na pele, o ideal são 21-30 dias de prática consistente."
    },
    {
      question: "O acesso é vitalício mesmo?",
      answer: "Sim! Você paga uma única vez e tem acesso para sempre a todo o material e futuras atualizações. Sem mensalidades ou taxas escondidas."
    },
    {
      question: "E se eu não gostar do método?",
      answer: "Você tem 15 dias de garantia total. Se por qualquer motivo não estiver satisfeita, devolvemos 100% do seu investimento, sem perguntas."
    },
    {
      question: "O método funciona para homens também?",
      answer: "Embora tenha sido desenvolvido pensando nas mulheres, os princípios de autocuidado e bem-estar funcionam para qualquer pessoa. Muitos maridos de nossas alunas adotaram algumas práticas!"
    },
    {
      question: "Posso fazer o método se tenho alguma condição de pele específica?",
      answer: "O guia é educativo e inclui dicas gerais de cuidados. Porém, se você tem condições específicas de pele, recomendamos consultar um dermatologista antes de iniciar qualquer nova rotina."
    },
    {
      question: "Como recebo o material após a compra?",
      answer: "Após a confirmação do pagamento, você recebe um email com o link de acesso à área de membros em até 5 minutos. Todo o material fica disponível para download imediato."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Perguntas{' '}
              <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Esclarecemos suas dúvidas para que você se sinta 100% segura
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-xl px-6 hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-rose-600 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact info */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-2xl p-8">
              <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-gray-600 mb-6">
                Nossa equipe está pronta para te ajudar! Entre em contato conosco.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-rose-500">📧</span>
                  <span className="text-gray-700">contato@ritualcoreano.com.br</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-500">📱</span>
                  <span className="text-gray-700">(11) 99999-9999</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
