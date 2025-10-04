import { useEffect, useRef } from 'react';
import { Award, Heart, Users } from 'lucide-react';
import CTAButton from './CTAButton';

export default function AboutAuthor() {
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
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3748] text-center mb-12 sm:mb-16">
          Conoce a Lucía Salazar
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-[#7C3AED] to-[#DC2626] rounded-2xl p-1">
              <div className="bg-white rounded-xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#E5B299] mx-auto flex items-center justify-center text-white text-5xl font-bold mb-4">
                    LS
                  </div>
                  <h3 className="text-2xl font-bold text-[#2D3748]">Lucía Salazar</h3>
                  <p className="text-[#7C3AED] font-semibold">Astróloga & Terapeuta</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <p className="text-lg text-[#2D3748] mb-4 leading-relaxed">
                Hace 15 años, Lucía casi pierde a su esposo por la misma razón por la que tú estás aquí: <span className="font-bold">la rutina había matado la pasión</span>.
              </p>
              <p className="text-lg text-[#2D3748] mb-4 leading-relaxed">
                Desesperada, recurrió a su abuela, una sabia astróloga cubana que le reveló los secretos que las mujeres de su familia habían guardado por generaciones. En menos de una semana, su matrimonio se transformó completamente.
              </p>
              <p className="text-lg text-[#2D3748] mb-4 leading-relaxed">
                Fascinada por los resultados, Lucía dedicó los siguientes 15 años a estudiar astrología, psicología de parejas y seducción ancestral. Obtuvo su certificación como terapeuta de parejas y astróloga profesional.
              </p>
              <p className="text-lg text-[#2D3748] leading-relaxed">
                Desde entonces, ha ayudado a más de <span className="font-bold text-[#7C3AED]">2,497 mujeres</span> a recuperar la pasión en sus relaciones usando este método exacto.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-[#7C3AED]/10 to-[#7C3AED]/5 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-[#7C3AED]" />
            </div>
            <h4 className="text-xl font-bold text-[#2D3748] mb-2">15 Años</h4>
            <p className="text-[#2D3748]">de experiencia en astrología aplicada a relaciones</p>
          </div>

          <div className="bg-gradient-to-br from-[#E5B299]/10 to-[#E5B299]/5 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-[#E5B299]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-[#E5B299]" />
            </div>
            <h4 className="text-xl font-bold text-[#2D3748] mb-2">2,497+</h4>
            <p className="text-[#2D3748]">parejas transformadas y relaciones salvadas</p>
          </div>

          <div className="bg-gradient-to-br from-[#DC2626]/10 to-[#DC2626]/5 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-[#DC2626]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#DC2626]" />
            </div>
            <h4 className="text-xl font-bold text-[#2D3748] mb-2">Certificada</h4>
            <p className="text-[#2D3748]">en terapia de parejas y astrología profesional</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#7C3AED]/10 to-[#E5B299]/10 rounded-xl p-6 sm:p-8 mb-8">
          <p className="text-xl sm:text-2xl font-bold text-[#2D3748] text-center mb-4">
            "Mi misión es simple:"
          </p>
          <p className="text-lg sm:text-xl text-[#2D3748] text-center italic leading-relaxed">
            "Que ninguna mujer tenga que conformarse con una relación tibia cuando puede tener a un hombre que la desee obsesivamente cada día. Este conocimiento cambió mi vida... y ahora es tu turno."
          </p>
          <p className="text-right text-[#7C3AED] font-bold mt-4 text-lg">
            - Lucía Salazar
          </p>
        </div>

        <div className="text-center">
          <CTAButton
            text="QUIERO APLICAR EL MÉTODO DE LUCÍA - $4.90"
            size="large"
          />
        </div>
      </div>
    </section>
  );
}
