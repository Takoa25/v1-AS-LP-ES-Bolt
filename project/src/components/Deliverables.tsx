import { useEffect, useRef } from 'react';
import { Book, Gift, Lock, Mail, CreditCard } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Deliverables() {
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
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] opacity-0"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3748] text-center mb-12 sm:mb-16">
          Todo lo que recibirás hoy
        </h2>

        <div className="space-y-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-[#7C3AED]">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-[#7C3AED]/10 rounded-xl flex items-center justify-center mr-4">
                <Book className="w-8 h-8 text-[#7C3AED]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D3748] mb-2">
                  Guía completa AstrologicSECRETS
                </h3>
                <p className="text-[#2D3748] mb-2">
                  73 páginas de sabiduría astrológica aplicada. Descubre los códigos sexuales, zonas erógenas secretas, palabras de poder y fantasías ocultas de los 12 signos del zodiaco.
                </p>
                <p className="text-[#7C3AED] font-bold">
                  Valor: $97
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#E5B299]/20 to-[#7C3AED]/10 rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-[#E5B299]">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-[#E5B299]/20 rounded-xl flex items-center justify-center mr-4">
                <Gift className="w-8 h-8 text-[#E5B299]" />
              </div>
              <div className="flex-1">
                <div className="inline-block bg-[#DC2626] text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                  BONO 1
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D3748] mb-2">
                  48 Mensajes de Texto Específicos por Signo
                </h3>
                <p className="text-[#2D3748] mb-2">
                  Mensajes exactos, palabra por palabra, que puedes copiar y enviar para activar su deseo durante el día. Incluye mensajes de buenos días, tarde y noche.
                </p>
                <p className="text-[#E5B299] font-bold">
                  Valor: $47
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#DC2626]/10 to-[#7C3AED]/10 rounded-xl shadow-lg p-6 sm:p-8 border-l-4 border-[#DC2626]">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-[#DC2626]/10 rounded-xl flex items-center justify-center mr-4">
                <Gift className="w-8 h-8 text-[#DC2626]" />
              </div>
              <div className="flex-1">
                <div className="inline-block bg-[#DC2626] text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                  BONO 2
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2D3748] mb-2">
                  Posiciones Íntimas Ilustradas por Signo
                </h3>
                <p className="text-[#2D3748] mb-2">
                  Guía visual discreta con las posiciones favoritas de cada signo basadas en su elemento astrológico. Elegantes ilustraciones que te guiarán paso a paso.
                </p>
                <p className="text-[#DC2626] font-bold">
                  Valor: $67
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#7C3AED] to-[#DC2626] rounded-2xl p-8 sm:p-12 text-center mb-12">
          <p className="text-white/80 text-xl mb-2 line-through">
            Valor Total: $211
          </p>
          <p className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hoy Solo: $4.90 USD
          </p>
          <p className="text-white text-xl sm:text-2xl font-semibold mb-2">
            Ahorras: $206.10
          </p>
          <p className="text-white/90 text-lg">
            (Descuento del 98%)
          </p>
        </div>

        <div className="text-center mb-8">
          <CTAButton
            text="SÍ, QUIERO SER LA MUJER IRRESISTIBLE PARA ÉL - $4.90"
            size="large"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-[#2D3748]">
          <div className="flex items-center">
            <Lock className="w-5 h-5 mr-2 text-[#059669]" />
            <span className="font-semibold">Pago 100% Seguro</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-2 text-[#059669]" />
            <span className="font-semibold">Entrega Inmediata</span>
          </div>
          <div className="flex items-center">
            <CreditCard className="w-5 h-5 mr-2 text-[#059669]" />
            <span className="font-semibold">Pago Fácil</span>
          </div>
        </div>
      </div>
    </section>
  );
}
