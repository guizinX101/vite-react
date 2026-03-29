import { motion } from 'motion/react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCart';
import { Link} from 'react-router';

export function Home() {
  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="pt-16 bg-gradient-to-br from-primary to-card">
  {/* Hero Banner */}
      <section className="relative via-primary/90 to-accent text-white overflow-hidden h-screen flex items-center">
        
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-100 mx-auto text-center p-[40px]"
          >
            <h1 className="text-4xl md:text-6xl mb-6">
              Bem-vindo à Axé Umbanda
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Artigos religiosos de qualidade para sua jornada espiritual
            </p>
            
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            Produtos em Destaque
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <Link to="/produtos">
          <h2 className="hover:underline text-3xl md:text-4xl text-center mb-12">Ver Todos Os Produtos</h2>
        </Link>
      </section>
    </div>
  );
}
