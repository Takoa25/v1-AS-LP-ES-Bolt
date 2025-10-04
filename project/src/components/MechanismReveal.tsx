import { useEffect, useRef } from 'react';
import { Sparkles, Heart, MapPin, MessageCircle, Moon, Flame } from 'lucide-react';

export default function MechanismReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

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

    if (benefitsRef.current) {
      const benefits = benefitsRef.current.querySelectorAll('.benefit-item');
      benefits.forEach((benefit, index) => {
        setTimeout(() => {
          benefit.classList.add('animate-fade-in-up');
        }, index * 150);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8F5FF] to-[#FDFBF7] opacity-0"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#7C3AED] text-center mb-8 sm:mb-12 leading-tight">
          Existe un método secreto basado en la sabiduría milenaria de los astros
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg sm:text-xl text-[#2D3748] mb-6 leading-relaxed">
            Por siglos, mujeres sabias han usado la astrología para mantener el deseo ardiendo en sus relaciones. No es magia... es <span className="font-bold text-[#7C3AED]">ciencia ancestral</span>.
          </p>

          <p className="text-lg sm:text-xl text-[#2D3748] mb-6 leading-relaxed">
            Cada hombre tiene <span className="font-bold text-[#DC2626]">3 códigos astrológicos ocultos</span> en su carta natal. Cuando estos códigos se activan correctamente, su mente primitiva no puede evitar sentir obsesión por ti.
          </p>

          <p className="text-lg sm:text-xl text-[#2D3748] leading-relaxed">
            Lucía Salazar, astróloga y terapeuta de parejas con 15 años de experiencia, ha sistematizado este conocimiento en un método simple que cualquier mujer puede aplicar... incluso si nunca has estudiado astrología.
          </p>
        </div>

        <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="benefit-item opacity-0 bg-white rounded-xl shadow-lg p-6 sm:p-8 border-t-4 border-[#7C3AED] hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#7C3AED]/10 rounded-full flex items-center justify-center mr-4">
                <Sparkles className="w-6 h-6 text-[#7C3AED]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D3748]">Los 3 Códigos Sexuales</h3>
            </div>
            <p className="text-[#2D3748]">
              Descubre los 3 disparadores psicológicos únicos de su signo que activan su deseo animal por ti
            </p>
          </div>

          <div className="benefit-item opacity-0 bg-white rounded-xl shadow-lg p-6 sm:p-8 border-t-4 border-[#E5B299] hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#E5B299]/10 rounded-full flex items-center justify-center mr-4">
                <MapPin className="w-6 h-6 text-[#E5B299]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D3748]">Zonas Erógenas Secretas</h3>
            </div>
            <p className="text-[#2D3748]">
              Las zonas ocultas específicas de su signo que nadie más sabe tocar... pero tú sí
            </p>
          </div>

          <div className="benefit-item opacity-0 bg-white rounded-xl shadow-lg p-6 sm:p-8 border-t-4 border-[#DC2626] hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#DC2626]/10 rounded-full flex items-center justify-center mr-4">
                <MessageCircle className="w-6 h-6 text-[#DC2626]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D3748]">Palabras Exactas</h3>
            </div>
            <p className="text-[#2D3748]">
              Las frases y palabras precisas que encienden su imaginación y hacen que te desee sin control
            </p>
          </div>

          <div className="benefit-item opacity-0 bg-white rounded-xl shadow-lg p-6 sm:p-8 border-t-4 border-[#059669] hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#059669]/10 rounded-full flex items-center justify-center mr-4">
                <Moon className="w-6 h-6 text-[#059669]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D3748]">Ambiente Perfecto</h3>
            </div>
            <p className="text-[#2D3748]">
              Cómo crear el ambiente ideal según su elemento astrológico para que se sienta irresistiblemente atraído
            </p>
          </div>

          <div className="benefit-item opacity-0 bg-white rounded-xl shadow-lg p-6 sm:p-8 border-t-4 border-[#7C3AED] hover:shadow-2xl transition-shadow duration-300 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#7C3AED]/10 rounded-full flex items-center justify-center mr-4">
                <Flame className="w-6 h-6 text-[#7C3AED]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D3748]">Fantasías Prohibidas</h3>
            </div>
            <p className="text-[#2D3748]">
              Las fantasías secretas de cada signo que él nunca te ha confesado... pero que hará que pierda la cabeza si las cumples
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
