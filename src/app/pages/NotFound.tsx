import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-md mx-auto">
        <div className="text-8xl mb-6">🔮</div>
        <h1 className="text-4xl mb-4">Página não encontrada</h1>
        <p className="text-muted-foreground mb-8">
          A página que você procura não existe ou foi movida para outro lugar.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Home className="w-5 h-5" />
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}
