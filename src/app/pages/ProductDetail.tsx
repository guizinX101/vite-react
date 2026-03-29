import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl mb-4">Produto não encontrado</h1>
        <Link to="/" className="text-primary hover:underline">
          Voltar para a página inicial
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-[110px] pb-10">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-primary hover:underline mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Voltar
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Image */}
        <div className="bg-muted rounded-lg overflow-hidden aspect-square max-w-[400px] mx-auto">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-evenly items-start h-full">
          <div>
            <h1 className="text-3xl md:text-4xl mb-4">{product.name}</h1>

            <div className="mb-6">
              <p className="text-4xl text-foreground mb-2">
                R$ {product.price.toFixed(2)}
              </p>
            </div>
          </div>

          <button>
            <a
              href="https://wa.me/5517996262224"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline bg-[#ffffff4b] py-8 px-12 rounded-2xl hover:bg-[#00000027]"
            >
              Pedir
            </a>
          </button>

          {/* Aqui você pode adicionar botões de ação, descrições, etc */}
        </div>
      </div>
    </div>
  );
}
