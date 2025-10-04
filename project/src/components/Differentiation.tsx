import { useEffect, useRef } from 'react';
import { X, Check } from 'lucide-react';

export default function Differentiation() {
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
          Por qué esto funciona cuando todo lo demás falló
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-xl overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-[#7C3AED] to-[#DC2626]">
                <th className="px-4 sm:px-6 py-4 text-left text-white font-bold text-sm sm:text-base">
                  Método
                </th>
                <th className="px-4 sm:px-6 py-4 text-center text-white font-bold text-sm sm:text-base">
                  Personalizado
                </th>
                <th className="px-4 sm:px-6 py-4 text-center text-white font-bold text-sm sm:text-base">
                  Precio
                </th>
                <th className="px-4 sm:px-6 py-4 text-center text-white font-bold text-sm sm:text-base">
                  Resultado
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="px-4 sm:px-6 py-4 font-semibold text-sm sm:text-base">
                  Consejos genéricos
                </td>
                <td className="px-4 sm:px-6 py-4 text-center">
                  <X className="w-6 h-6 text-[#DC2626] mx-auto" />
                </td>
                <td className="px-4 sm:px-6 py-4 text-center text-sm sm:text-base">
                  Gratis
                </td>
                <td className="px-4 sm:px-6 py-4 text-center">
                  <X className="w-6 h-6 text-[#DC2626] mx-auto" />
                </td>
              </tr>

              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="px-4 sm:px-6 py-4 font-semibold text-sm sm:text-base">
                  Terapia de pareja
                </td>
                <td className="px-4 sm:px-6 py-4 text-center">
                  <X className="w-6 h-6 text-[#DC2626] mx-auto" />
                </td>
                <td className="px-4 sm:px-6 py-4 text-center text-sm sm:text-base">
                  $150/sesión
                </td>
                <td className="px-4 sm:px-6 py-4 text-center">
                  <span className="text-xs sm:text-sm">Lento</span>
                </td>
              </tr>

              <tr className="border-b border-gray-200">
                <td className="px-4 sm:px-6 py-4 font-semibold text-sm sm:text-base">
                  Otros libros
                </td>
                <td className="px-4 sm:px-6 py-4 text-center">
                  <X className="w-6 h-6 text-[#DC2626] mx-auto" />
                </td>
                <td className="px-4 sm:px-6 py-4 text-center text-sm sm:text-base">
                  $20-$50
                </td>
                <td className="px-4 sm:px-6 py-4 text-center">
                  <span className="text-xs sm:text-sm">Genérico</span>
                </td>
              </tr>

              <tr className="bg-gradient-to-r from-[#059669]/10 to-[#059669]/5 border-4 border-[#059669]">
                <td className="px-4 sm:px-6 py-6 font-bold text-[#059669] text-sm sm:text-base">
                  AstrologicSECRETS
                </td>
                <td className="px-4 sm:px-6 py-6 text-center">
                  <Check className="w-8 h-8 text-[#059669] mx-auto font-bold" strokeWidth={3} />
                </td>
                <td className="px-4 sm:px-6 py-6 text-center font-bold text-[#059669] text-sm sm:text-base">
                  $4.90
                </td>
                <td className="px-4 sm:px-6 py-6 text-center">
                  <div className="flex flex-col items-center">
                    <Check className="w-8 h-8 text-[#059669] font-bold" strokeWidth={3} />
                    <span className="text-xs sm:text-sm font-bold text-[#059669] mt-1">
                      5 días
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#7C3AED]/10 to-[#E5B299]/10 rounded-xl p-6 sm:p-8 text-center">
          <p className="text-xl sm:text-2xl font-bold text-[#2D3748] mb-4">
            La diferencia está en la personalización
          </p>
          <p className="text-lg text-[#2D3748] leading-relaxed">
            No existe una fórmula universal para todos los hombres. Lo que funciona con un Aries no funciona con un Cáncer. <span className="font-bold text-[#7C3AED]">Este método se adapta específicamente al signo de TU pareja</span>, por eso los resultados son tan rápidos y poderosos.
          </p>
        </div>
      </div>
    </section>
  );
}
