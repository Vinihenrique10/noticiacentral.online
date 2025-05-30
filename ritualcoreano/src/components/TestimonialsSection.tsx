
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Veja o que nossas alunas{' '}
              <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                estão dizendo
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de transformação que vão te inspirar
            </p>
          </div>

          {/* Video Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Depoimento 1 */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <script 
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                      __html: `
                        var s=document.createElement("script"); 
                        s.src="https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js", 
                        s.setAttribute("data-id", "6838ec91e009b7e9ab8e9c63"), 
                        s.async=!0,document.head.appendChild(s);
                      `
                    }}
                  />
                  <div id="ifr_6838ec91e009b7e9ab8e9c63_wrapper" style={{ margin: '0 auto', width: '100%' }}>
                    <div style={{ padding: '177.77777777777777% 0 0 0', position: 'relative' }} id="ifr_6838ec91e009b7e9ab8e9c63_aspect">
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen 
                        src="https://scripts.converteai.net/409a3270-e3c6-449c-957d-beb41d42c9f9/players/6838ec91e009b7e9ab8e9c63/embed.html" 
                        id="ifr_6838ec91e009b7e9ab8e9c63" 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        referrerPolicy="origin"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-500 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <h3 className="font-bold text-gray-800 mb-2">Marina Santos</h3>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 2 */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <script 
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                      __html: `
                        var s=document.createElement("script"); 
                        s.src="https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js", 
                        s.setAttribute("data-id", "6838ec9a36857476dceb898d"), 
                        s.async=!0,document.head.appendChild(s);
                      `
                    }}
                  />
                  <div id="ifr_6838ec9a36857476dceb898d_wrapper" style={{ margin: '0 auto', width: '100%' }}>
                    <div style={{ padding: '177.77777777777777% 0 0 0', position: 'relative' }} id="ifr_6838ec9a36857476dceb898d_aspect">
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen 
                        src="https://scripts.converteai.net/409a3270-e3c6-449c-957d-beb41d42c9f9/players/6838ec9a36857476dceb898d/embed.html" 
                        id="ifr_6838ec9a36857476dceb898d" 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        referrerPolicy="origin"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-500 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <h3 className="font-bold text-gray-800 mb-2">Carla Oliveira</h3>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 3 */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <script 
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                      __html: `
                        var s=document.createElement("script"); 
                        s.src="https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js", 
                        s.setAttribute("data-id", "6838eca3eeeaa7eee7306a4e"), 
                        s.async=!0,document.head.appendChild(s);
                      `
                    }}
                  />
                  <div id="ifr_6838eca3eeeaa7eee7306a4e_wrapper" style={{ margin: '0 auto', width: '100%' }}>
                    <div style={{ padding: '177.77777777777777% 0 0 0', position: 'relative' }} id="ifr_6838eca3eeeaa7eee7306a4e_aspect">
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen 
                        src="https://scripts.converteai.net/409a3270-e3c6-449c-957d-beb41d42c9f9/players/6838eca3eeeaa7eee7306a4e/embed.html" 
                        id="ifr_6838eca3eeeaa7eee7306a4e" 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        referrerPolicy="origin"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-500 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <h3 className="font-bold text-gray-800 mb-2">Ana Paula</h3>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Video Testimonials */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Depoimento 4 */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <script 
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                      __html: `
                        var s=document.createElement("script"); 
                        s.src="https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js", 
                        s.setAttribute("data-id", "6838ecb7eeeaa7eee7306a64"), 
                        s.async=!0,document.head.appendChild(s);
                      `
                    }}
                  />
                  <div id="ifr_6838ecb7eeeaa7eee7306a64_wrapper" style={{ margin: '0 auto', width: '100%' }}>
                    <div style={{ padding: '177.77777777777777% 0 0 0', position: 'relative' }} id="ifr_6838ecb7eeeaa7eee7306a64_aspect">
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen 
                        src="https://scripts.converteai.net/409a3270-e3c6-449c-957d-beb41d42c9f9/players/6838ecb7eeeaa7eee7306a64/embed.html" 
                        id="ifr_6838ecb7eeeaa7eee7306a64" 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        referrerPolicy="origin"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-500 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <h3 className="font-bold text-gray-800 mb-2">Juliana Costa</h3>
                </div>
              </CardContent>
            </Card>

            {/* Depoimento 5 */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 overflow-hidden rounded-xl">
                  <script 
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                      __html: `
                        var s=document.createElement("script"); 
                        s.src="https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js", 
                        s.setAttribute("data-id", "6838ecadd021f4ff342fe65d"), 
                        s.async=!0,document.head.appendChild(s);
                      `
                    }}
                  />
                  <div id="ifr_6838ecadd021f4ff342fe65d_wrapper" style={{ margin: '0 auto', width: '100%' }}>
                    <div style={{ padding: '177.77777777777777% 0 0 0', position: 'relative' }} id="ifr_6838ecadd021f4ff342fe65d_aspect">
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen 
                        src="https://scripts.converteai.net/409a3270-e3c6-449c-957d-beb41d42c9f9/players/6838ecadd021f4ff342fe65d/embed.html" 
                        id="ifr_6838ecadd021f4ff342fe65d" 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        referrerPolicy="origin"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-500 text-xl mb-2">⭐⭐⭐⭐⭐</div>
                  <h3 className="font-bold text-gray-800 mb-2">Fernanda Lima</h3>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-2xl p-8">
              <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-6">
                Junte-se a mais de 500 mulheres que já transformaram suas vidas!
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-rose-500 mb-2">500+</div>
                  <p className="text-gray-600">Mulheres transformadas</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-500 mb-2">4.9★</div>
                  <p className="text-gray-600">Avaliação média</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold-500 mb-2">95%</div>
                  <p className="text-gray-600">Taxa de satisfação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
