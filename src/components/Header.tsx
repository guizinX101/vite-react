import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/busca?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-[#0000005d] backdrop-blur  text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4 pl-9">
          <Link to="/" className="flex items-center gap-2">
            <div>
              <h1 className="text-foreground md:text-2xl">Laroiê Guias</h1>
              <p className="text-foreground opacity-90">Artigos Religiosos</p>
            </div>
          </Link>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full ">
              <input
                type="text"
                placeholder="Buscar produtos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-10 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="md:hidden pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pr-10 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </form>

        {/* Desktop Navigation */}
        <nav className="hidden md:block border-t border-white/20 py-3">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link to="/" className="hover:text-secondary transition-colors">
                Início
              </Link>
            </li>
            
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
            <li>
              <Link to="/produtos" className="hover:text-secondary transition-colors">
                Produtos
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-white/20 py-4">
            <ul className="text-foreground space-y-3">
              <li className="text-foreground">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
