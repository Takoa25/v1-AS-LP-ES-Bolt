import { useEffect, useRef } from 'react';
import { Shield, RefreshCcw } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Guarantee() {
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
        <div className="text-center mb-12">
          <div className="inline-block">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#DC2626] rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-[#7C3AED] to-[#DC2626] rounded-full flex items-center justify-center">
                <Shield className="w-16 h-16 text-white" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3748] mb-6">
            Garantía Incondicional de 7 Días
          </h2>

          <p className="text-xl sm:text-2xl text-[#7C3AED] font-bold mb-4">
            Tu Inversión Está 100% Protegida
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 mb-12">
          <div className="text-center mb-8">
            <RefreshCcw className="w-16 h-16 text-[#059669] mx-auto mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold text-[#2D3748] mb-6">
              Riesgo CERO para ti
            </h3>
          </div>

          <div className="space-y-6 text-lg text-[#2D3748] leading-relaxed">
            <p>
              Estoy tan segura de que AstrologicSECRETS transformará tu relación que te ofrezco esta garantía sin preguntas:
            </p>

            <div className="bg-gradient-to-r from-[#059669]/10 to-[#059669]/5 rounded-xl p-6 border-l-4 border-[#059669]">
              <p className="font-bold text-xl mb-3">
                Si en los próximos 7 días aplicas el método y no ves resultados...
              </p>
              <p>
                Simplemente envía un email y te devolveré cada centavo de tu inversión. Sin preguntas incómodas. Sin complicaciones. Sin letra pequeña.
              </p>
            </div>

            <p>
              Ni siquiera necesitas devolver el libro. Quédatelo como mi regalo, porque confío en que cuando lo apliques, los resultados hablarán por sí solos.
            </p>

            <div className="bg-[#7C3AED]/5 rounded-xl p-6 text-center">
              <p className="text-xl font-bold text-[#7C3AED]">
                O funciona y recuperas la pasión...
              </p>
              <p className="text-xl font-bold text-[#7C3AED]">
                O recuperas tu dinero.
              </p>
              <p className="text-lg mt-4 text-[#2D3748]">
                Tú decides. Sin riesgos.
              </p>
            </div>

            <p className="text-center font-semibold text-xl">
              El único riesgo real es quedarte en la misma situación dolorosa en la que estás ahora.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-[#7C3AED]/10 to-white rounded-xl p-6 border-2 border-[#7C3AED]/20">
            <h4 className="text-xl font-bold text-[#2D3748] mb-3">✓ Acceso Inmediato</h4>
            <p className="text-[#2D3748]">
              Recibe el libro en tu email en menos de 2 minutos después del pago
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#E5B299]/10 to-white rounded-xl p-6 border-2 border-[#E5B299]/20">
            <h4 className="text-xl font-bold text-[#2D3748] mb-3">✓ Soporte Incluido</h4>
            <p className="text-[#2D3748]">
              Si tienes dudas, nuestro equipo está disponible para ayudarte
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#DC2626]/10 to-white rounded-xl p-6 border-2 border-[#DC2626]/20">
            <h4 className="text-xl font-bold text-[#2D3748] mb-3">✓ Pago Seguro</h4>
            <p className="text-[#2D3748]">
              Procesamos pagos con la más alta seguridad y encriptación
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#059669]/10 to-white rounded-xl p-6 border-2 border-[#059669]/20">
            <h4 className="text-xl font-bold text-[#2D3748] mb-3">✓ Total Privacidad</h4>
            <p className="text-[#2D3748]">
              El cargo aparece discretamente en tu tarjeta. Total confidencialidad
            </p>
          </div>
        </div>

        <div className="text-center">
          <CTAButton
            text="SÍ, QUIERO COMENZAR SIN RIESGO - $4.90"
            size="large"
          />
          <p className="text-sm text-[#2D3748]/70 mt-4">
            Garantía de devolución de dinero por 7 días completos
          </p>
        </div>
      </div>
    </section>
  );
}
