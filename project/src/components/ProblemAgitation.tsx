import { useEffect, useRef } from 'react';

export default function ProblemAgitation() {
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
          La rutina mató la pasión y él ya no te desea como antes
        </h2>

        <div className="space-y-6 sm:space-y-8 mb-12">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC2626] flex items-center justify-center text-white font-bold">
              ✗
            </div>
            <p className="text-lg sm:text-xl text-[#2D3748]">
              Él prefiere quedarse pegado al celular que abrazarte en la cama
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC2626] flex items-center justify-center text-white font-bold">
              ✗
            </div>
            <p className="text-lg sm:text-xl text-[#2D3748]">
              Las noches de pasión se convirtieron en besos automáticos y rutina aburrida
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC2626] flex items-center justify-center text-white font-bold">
              ✗
            </div>
            <p className="text-lg sm:text-xl text-[#2D3748]">
              Compraste lencería cara pero apenas la notó... y eso te dolió en el alma
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC2626] flex items-center justify-center text-white font-bold">
              ✗
            </div>
            <p className="text-lg sm:text-xl text-[#2D3748]">
              Sientes un nudo en el estómago preguntándote: "¿Estará interesado en otra mujer?"
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#DC2626] flex items-center justify-center text-white font-bold">
              ✗
            </div>
            <p className="text-lg sm:text-xl text-[#2D3748]">
              Los consejos genéricos de revistas y amigas no funcionan para TU hombre específico
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#E5B299]/20 to-[#7C3AED]/10 border-l-4 border-[#E5B299] p-6 sm:p-8 rounded-r-lg">
          <p className="text-xl sm:text-2xl font-bold text-[#2D3748] mb-4">
            Aquí está la verdad que nadie te dice:
          </p>
          <p className="text-lg sm:text-xl text-[#2D3748] leading-relaxed">
            El problema no eres tú. Es que nadie te enseñó su <span className="font-bold text-[#7C3AED]">idioma sexual astrológico</span>. Cada signo tiene códigos únicos que despiertan su deseo primitivo... y tú estás usando el idioma equivocado.
          </p>
        </div>
      </div>
    </section>
  );
}
