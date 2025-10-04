export default function Footer() {
  return (
    <footer className="bg-[#2D3748] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            <span className="text-[#7C3AED]">Astrologic</span>
            <span className="text-[#DC2626]">SECRETS</span>
          </h2>
          <p className="text-white/70">
            Recupera la pasión usando la sabiduría de los astros
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <h3 className="font-bold text-lg mb-3 text-[#E5B299]">Información</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Reembolso
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-bold text-lg mb-3 text-[#E5B299]">Contacto</h3>
            <ul className="space-y-2 text-white/70">
              <li>soporte@astrologicsecrets.com</li>
              <li>Lunes a Viernes</li>
              <li>9:00 AM - 6:00 PM</li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="font-bold text-lg mb-3 text-[#E5B299]">Garantía</h3>
            <ul className="space-y-2 text-white/70">
              <li>7 Días de Garantía</li>
              <li>Pago 100% Seguro</li>
              <li>Entrega Inmediata</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p className="mb-4">
            © {new Date().getFullYear()} AstrologicSECRETS. Todos los derechos reservados.
          </p>
          <p className="max-w-3xl mx-auto leading-relaxed">
            Descargo de responsabilidad: Los resultados pueden variar de persona a persona. Los testimonios mostrados son experiencias reales de clientas, pero no garantizan resultados idénticos para todos. Este producto es solo para fines educativos e informativos.
          </p>
        </div>
      </div>
    </footer>
  );
}
