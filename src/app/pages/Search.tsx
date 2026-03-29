import { useSearchParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCart";
import { Search as SearchIcon, ArrowLeft } from "lucide-react";

export function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="pl-4 flex flex-row items-center justify-between pt-[140px]">
        <Link
          to="/"
          className="inline-flex items-center gap- hover:underline mb-6 text-foreground text-3xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <SearchIcon className="w-8 h-8 text-foreground" />
            <div>
              <h1 className="text-3xl md:text-4xl">Resultados da Busca</h1>
              <p className="text-foreground">
                {filteredProducts.length} produto(s) encontrado(s) para "{query}
                "
              </p>
            </div>
          </div>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <SearchIcon className="w-20 h-20 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl mb-2">Nenhum produto encontrado</h2>
          <p className="text-muted-foreground mb-6">
            Não encontramos produtos com o termo "{query}"
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Ver Todos os Produtos
          </Link>
        </div>
      )}
    </div>
  );
}
