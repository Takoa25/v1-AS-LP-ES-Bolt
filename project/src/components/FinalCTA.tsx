import { useEffect, useRef } from 'react';
import { Heart, Sparkles, Flame } from 'lucide-react';
import CTAButton from './CTAButton';

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#059669] via-[#059669] to-[#047857] opacity-0"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Imagina dentro de 7 días...
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <p className="text-white text-lg leading-relaxed">
              Él te mira de esa forma especial que habías olvidado... esa mirada hambrienta de deseo
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <p className="text-white text-lg leading-relaxed">
              Ya no te sientes invisible... ahora eres lo único que ocupa su mente día y noche
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <p className="text-white text-lg leading-relaxed">
              La pasión regresó... y es incluso más intensa que cuando recién empezaron
            </p>
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 sm:p-12 mb-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-[#2D3748] mb-6 leading-relaxed">
              <span className="font-bold text-[#7C3AED]">Él te busca constantemente.</span> Te envía mensajes coquetos durante el día. Te abraza por la espalda cuando estás cocinando. Te mira con esos ojos de "no puedo esperar a estar a solas contigo".
            </p>

            <p className="text-xl sm:text-2xl text-[#2D3748] mb-6 leading-relaxed">
              <span className="font-bold text-[#DC2626]">Tus amigas te preguntan qué hiciste</span> porque notan ese brillo especial en tus ojos. Te sientes deseada, valorada, irresistible.
            </p>

            <p className="text-xl sm:text-2xl text-[#2D3748] mb-8 leading-relaxed">
              <span className="font-bold text-[#7C3AED]">Y todo porque descubriste sus códigos secretos.</span> Porque hablaste su idioma astrológico. Porque te convertiste en la única mujer que realmente lo entiende a nivel profundo.
            </p>

            <div className="bg-gradient-to-r from-[#7C3AED]/10 to-[#E5B299]/10 rounded-xl p-6 sm:p-8 text-center border-l-4 border-[#7C3AED]">
              <p className="text-2xl sm:text-3xl font-bold text-[#2D3748] mb-4">
                Esto puede ser tu realidad en menos de una semana
              </p>
              <p className="text-lg sm:text-xl text-[#2D3748]">
                O puedes quedarte exactamente donde estás: sintiéndote invisible, cuestionándote si él sigue interesado, rogando por migajas de atención...
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-12 mb-12 border-4 border-white/30">
          <div className="text-center">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              La decisión es tuya ahora mismo
            </p>
            <p className="text-white/90 text-xl sm:text-2xl mb-8">
              Por solo <span className="font-bold text-3xl">$4.90</span> puedes tener todo el conocimiento que transformó 2,497 relaciones
            </p>

            <div className="bg-white rounded-xl p-6 mb-8 inline-block">
              <p className="text-[#2D3748] text-lg mb-2">
                <span className="line-through">Valor Total: $211</span>
              </p>
              <p className="text-[#7C3AED] text-5xl font-bold mb-2">
                $4.90
              </p>
              <p className="text-[#2D3748] font-semibold">
                + Garantía de 7 días sin riesgos
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <CTAButton
            text="SÍ, QUIERO TRANSFORMAR MI RELACIÓN AHORA - $4.90"
            size="large"
            className="bg-white text-[#059669] hover:bg-gray-100 text-xl sm:text-2xl py-6 sm:py-8 shadow-2xl"
          />
        </div>

        <div className="text-center">
          <p className="text-white/90 text-lg sm:text-xl mb-4">
            ⏰ Esta página desaparece si la cierras
          </p>
          <p className="text-white/80 text-base sm:text-lg">
            Esta es una oferta exclusiva por tiempo limitado. Si sales, no podrás volver a acceder a este precio especial.
          </p>
        </div>

        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 text-center">
          <p className="text-white text-lg sm:text-xl italic">
            "El momento de actuar es ahora. Tu futuro yo te agradecerá por tomar esta decisión hoy."
          </p>
          <p className="text-white/90 font-bold mt-4">
            - Lucía Salazar
          </p>
        </div>
      </div>
    </section>
  );
}
