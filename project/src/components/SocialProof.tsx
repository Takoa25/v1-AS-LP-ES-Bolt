import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

export default function SocialProof() {
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

  const testimonials = [
    {
      name: 'María González',
      age: 32,
      partnerSign: 'Escorpio',
      text: 'Estaba a punto de rendirme. Llevábamos 7 años juntos y sentía que éramos compañeros de casa, no amantes. Después de leer AstrologicSECRETS y aplicar los códigos de Escorpio, en menos de una semana él volvió a ser el hombre apasionado que conocí. Ahora me busca TODO el tiempo.',
      rating: 5
    },
    {
      name: 'Carmen Rodríguez',
      age: 28,
      partnerSign: 'Leo',
      text: 'Mi Leo se había vuelto frío y distante. Pensé que me estaba siendo infiel. Cuando descubrí sus zonas erógenas secretas y las palabras exactas que lo activan... todo cambió. Ahora soy su obsesión. Hasta canceló una salida con amigos para quedarse conmigo.',
      rating: 5
    },
    {
      name: 'Sofía Martínez',
      age: 35,
      partnerSign: 'Tauro',
      text: 'Los consejos genéricos nunca funcionaron con mi Tauro terco. Este método me enseñó exactamente qué hacer diferente. En 5 días pasamos de tener intimidad una vez al mes a casi todos los días. Y lo mejor: él es quien me busca ahora.',
      rating: 5
    },
    {
      name: 'Andrea López',
      age: 29,
      partnerSign: 'Géminis',
      text: 'Mi Géminis parecía aburrido de mí. Probé de todo: lencería, juguetes, sorpresas... nada funcionaba. Cuando apliqué las fantasías secretas de Géminis que describe el libro, quedó TAN impactado que me dijo: "¿Quién eres y qué hiciste con mi novia?" En el buen sentido. Ahora no puede quitarme las manos de encima.',
      rating: 5
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8F5FF] to-[#FDFBF7] opacity-0"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3748] text-center mb-6">
          Mujeres reales que salvaron sus relaciones
        </h2>

        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-[#7C3AED] to-[#DC2626] text-white px-6 py-3 rounded-full font-bold text-lg">
            <Star className="w-5 h-5 mr-2 fill-current" />
            2,497+ transformaciones comprobadas
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#E5B299] flex items-center justify-center text-white text-2xl font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-[#2D3748] text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-[#2D3748]/70 text-sm">
                    {testimonial.age} años • Pareja {testimonial.partnerSign}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#DC2626] fill-current" />
                ))}
              </div>

              <p className="text-[#2D3748] leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl sm:text-2xl text-[#2D3748] font-semibold">
            ¿Serás tú la próxima en transformar tu relación?
          </p>
        </div>
      </div>
    </section>
  );
}
