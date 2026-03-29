import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div>
                <h3 className="text-lg">Laroiê Guias</h3>
                <p className="text-xs opacity-90">Artigos Religiosos</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Sua loja de confiança para artigos de Umbanda e religiões afro-brasileiras.
            </p>
          </div>

          <div>
            <h4 className="mb-4">Institucional</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <Link to="/sobre" className="hover:text-secondary transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-secondary transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Contato</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                    href="https://wa.me/5517996262224"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    (17) 99626-2224
                  </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contato@axeumbanda.com.br</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/laroyeguias/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>© 2026 Laroiê Guias. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
