import { Link } from 'react-router-dom';
import { Product } from '../data/products';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {

  return (
    <Link to={`/produto/${product.id}`} className="group">
      <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow pt-[80px]">
        <div className="aspect-square overflow-hidden bg-muted">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 line-clamp-2 min-h-[3rem]">{product.name}</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl text-foreground">
                R$ {product.price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
