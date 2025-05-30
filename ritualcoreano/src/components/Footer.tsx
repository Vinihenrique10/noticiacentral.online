
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo e descrição */}
            <div className="md:col-span-2">
              <div className="font-playfair text-3xl font-bold bg-gradient-to-r from-rose-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Ritual Coreano
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                Transformando a vida de mulheres ocupadas através do autocuidado inteligente e prático. 
                Descubra como cuidar de si mesma em apenas 10 minutos por dia.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center hover:bg-rose-600 transition-colors">
                  <span className="text-white text-sm">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                  <span className="text-white text-sm">ig</span>
                </a>
                <a href="#" className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <span className="text-white text-sm">yt</span>
                </a>
              </div>
            </div>

            {/* Links rápidos */}
            <div>
              <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#sobre" className="text-gray-300 hover:text-rose-400 transition-colors">
                    Sobre o Método
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="text-gray-300 hover:text-rose-400 transition-colors">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-gray-300 hover:text-rose-400 transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#garantia" className="text-gray-300 hover:text-rose-400 transition-colors">
                    Garantia
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-rose-400">📧</span>
                  <span className="text-gray-300">contato@ritualcoreano.com.br</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">🕐</span>
                  <span className="text-gray-300">Seg-Sex: 9h às 18h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divisor */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                © 2024 Ritual Coreano. Todos os direitos reservados.
              </div>
              
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                  Cancelamento
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 text-xs text-gray-500 text-center max-w-4xl mx-auto">
            <p className="mb-2">
              Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
              Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
            </p>
            <p>
              Os resultados podem variar de pessoa para pessoa. Este produto não substitui 
              orientação médica profissional. Consulte sempre um profissional de saúde.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
