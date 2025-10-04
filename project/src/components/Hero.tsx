import { useEffect, useRef } from 'react';

export default function Hero() {
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
      className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FDFBF7] to-[#F8F5FF] opacity-0"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#7C3AED] leading-tight mb-6 sm:mb-8">
          Descubre cómo hacer que tu pareja vuelva a desearte obsesivamente usando solo los secretos astrológicos de su signo en 5 días o menos
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-[#2D3748] mb-12 sm:mb-16 leading-relaxed max-w-3xl mx-auto">
          No necesitas cambiar quién eres ni competir con otras mujeres. Solo entender los códigos ocultos de su mapa astral
        </p>

        <div className="relative max-w-md mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED] to-[#DC2626] opacity-20 blur-3xl rounded-full"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="w-full h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">✨</div>
                <div className="text-2xl font-bold text-[#7C3AED] mb-2">AstrologicSECRETS</div>
                <div className="text-sm text-[#2D3748]">73 Páginas de Sabiduría Ancestral</div>
                <div className="mt-6 flex justify-center space-x-4">
                  <span className="text-3xl">♈</span>
                  <span className="text-3xl">♉</span>
                  <span className="text-3xl">♊</span>
                  <span className="text-3xl">♋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
