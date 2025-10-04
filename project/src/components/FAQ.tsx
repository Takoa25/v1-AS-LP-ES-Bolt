import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import CTAButton from './CTAButton';

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const faqs = [
    {
      question: '¿Realmente funciona esto o es solo teoría?',
      answer: 'Este método combina sabiduría astrológica de siglos con psicología moderna de seducción. Más de 2,497 mujeres han transformado sus relaciones usando estos códigos exactos. No es teoría abstracta: son pasos específicos, palabras concretas y técnicas que aplicas inmediatamente. Si sigues el método, verás cambios en 5 días o menos.'
    },
    {
      question: '¿Qué pasa si no sé mucho de astrología?',
      answer: 'Perfecto. Este libro está diseñado para mujeres sin conocimiento previo de astrología. Todo está explicado de forma simple y práctica. Solo necesitas saber el signo de tu pareja (su fecha de nacimiento) y seguir las instrucciones paso a paso. Es tan fácil como seguir una receta de cocina.'
    },
    {
      question: '¿Funciona con todos los signos?',
      answer: 'Sí. El libro cubre los 12 signos del zodiaco con capítulos dedicados a cada uno. Cada signo tiene códigos únicos y todos funcionan cuando se aplican correctamente. Da igual si tu pareja es Aries, Cáncer, Capricornio o cualquier otro signo: encontrarás su mapa completo.'
    },
    {
      question: '¿Cuánto tiempo toma ver resultados?',
      answer: 'La mayoría de nuestras clientas reportan cambios notables en 3-5 días. Algunas ven resultados desde la primera noche de aplicar las técnicas. Todo depende de qué tan consistente seas al aplicar los códigos. El método está diseñado para generar resultados rápidos cuando lo sigues correctamente.'
    },
    {
      question: '¿Cómo recibo el libro después de pagar?',
      answer: 'Inmediatamente después de tu pago, recibirás un email con el acceso al libro en formato PDF más los 2 bonos. Puedes leerlo en tu celular, tablet o computadora. No hay envíos físicos, todo es digital e inmediato. Lo tendrás en menos de 2 minutos.'
    },
    {
      question: '¿Es seguro el pago? ¿Aparece algo raro en mi tarjeta?',
      answer: 'Totalmente seguro. Usamos procesadores de pago con la máxima encriptación. El cargo aparece discretamente en tu tarjeta sin mencionar el contenido específico. Tu privacidad está 100% protegida. Además, tienes garantía de devolución por 7 días si no estás satisfecha.'
    },
    {
      question: '¿Qué pasa si aplico el método y no funciona para mí?',
      answer: 'Tienes 7 días completos de garantía sin preguntas. Si aplicas el método y no ves resultados, envías un email y te devolvemos cada centavo. Ni siquiera necesitas devolver el libro. Sin complicaciones, sin letra pequeña. Tu inversión está protegida al 100%.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FDFBF7] opacity-0"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3748] text-center mb-12 sm:mb-16">
          Preguntas Frecuentes
        </h2>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-[#7C3AED]/20 transition-all duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 sm:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg sm:text-xl font-bold text-[#2D3748] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-[#7C3AED] flex-shrink-0 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 text-[#2D3748] text-base sm:text-lg leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#7C3AED]/10 to-[#E5B299]/10 rounded-xl p-6 sm:p-8 text-center mb-8">
          <p className="text-xl sm:text-2xl font-bold text-[#2D3748] mb-4">
            ¿Tienes otra pregunta?
          </p>
          <p className="text-lg text-[#2D3748]">
            Una vez que adquieras el libro, tendrás acceso a nuestro email de soporte para resolver cualquier duda específica sobre tu caso.
          </p>
        </div>

        <div className="text-center">
          <CTAButton
            text="COMENZAR AHORA - $4.90"
            size="large"
          />
        </div>
      </div>
    </section>
  );
}
