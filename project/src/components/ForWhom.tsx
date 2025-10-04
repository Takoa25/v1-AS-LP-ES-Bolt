import { useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';
import CTAButton from './CTAButton';

export default function ForWhom() {
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
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8F5FF] to-[#FDFBF7] opacity-0"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3748] text-center mb-12 sm:mb-16">
          Este método es para mujeres que se niegan a aceptar una relación tibia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-[#059669] mb-6 flex items-center">
              <Check className="w-8 h-8 mr-3" />
              Es para ti si:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-[#059669] mr-3 mt-1 flex-shrink-0" />
                <span className="text-[#2D3748]">
                  Quieres recuperar la pasión sin rogar ni suplicar
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-[#059669] mr-3 mt-1 flex-shrink-0" />
                <span className="text-[#2D3748]">
                  Estás dispuesta a probar algo diferente que realmente funcione
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-[#059669] mr-3 mt-1 flex-shrink-0" />
                <span className="text-[#2D3748]">
                  Quieres que ÉL sea quien te busque obsesivamente
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-[#059669] mr-3 mt-1 flex-shrink-0" />
                <span className="text-[#2D3748]">
                  Crees en la sabiduría ancestral de los astros
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-[#059669] mr-3 mt-1 flex-shrink-0" />
                <span className="text-[#2D3748]">
                  Estás lista para ser la mujer más irresistible para él
                </span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-[#059669] mr-3 mt-1 flex-shrink-0" />
                <span className="text-[#2D3748]">
                  Valoras una inversión mínima de $4.90 para salvar tu relación
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-[#DC2626] mb-6 flex items-center">
              <X className="w-8 h-8 mr-3" />
              NO es para ti si:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <X className="w-5 h-5 text-[#DC2626] mr-3 mt-1 flex-shrink-0" />
                <span className="text-[#2D3748]">
                  Prefieres conformarte con una relación sin pasión
                </span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-[#DC2626] mr-3 mt-1 flex-shrink-0" />
                <span className="text-[#2D3748]">
                  No crees en la astrología ni en sabiduría ancestral
                </span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-[#DC2626] mr-3 mt-1 flex-shrink-0" />
                <span className="text-[#2D3748]">
                  Esperas resultados sin aplicar lo que aprendes
                </span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-[#DC2626] mr-3 mt-1 flex-shrink-0" />
                <span className="text-[#2D3748]">
                  No sabes el signo zodiacal de tu pareja
                </span>
              </li>
              <li className="flex items-start">
                <X className="w-5 h-5 text-[#DC2626] mr-3 mt-1 flex-shrink-0" />
                <span className="text-[#2D3748]">
                  Buscas una solución mágica instantánea sin esfuerzo
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#7C3AED]/10 to-[#E5B299]/10 rounded-xl p-6 sm:p-8 text-center mb-8">
          <p className="text-xl sm:text-2xl font-bold text-[#2D3748] mb-4">
            La pregunta real es:
          </p>
          <p className="text-lg sm:text-xl text-[#2D3748] leading-relaxed">
            ¿Prefieres seguir sintiéndote invisible en tu relación... o convertirte en la única mujer que ocupa su mente día y noche?
          </p>
        </div>

        <div className="text-center">
          <CTAButton
            text="QUIERO CONVERTIRME EN SU OBSESIÓN - $4.90"
            size="large"
          />
        </div>
      </div>
    </section>
  );
}
