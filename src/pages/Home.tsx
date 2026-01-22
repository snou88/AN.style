import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import logo from '../images/an_w.png';

interface HomeProps {
  onNavigate: (page: string, data?: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = await fetchProducts();
        setProducts(result.data.slice(0, 6));
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const categories = [
    {
      id: 'homme',
      name: 'Collection Homme',
      image: 'https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'femme',
      name: 'Collection Femme',
      image: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 'accessoires',
      name: 'Accessoires',
      image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="bg-dark-primary">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-dark-primary/70 via-dark-primary/50 to-dark-primary"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-gold mr-3" />
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              Luxury Fashion
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl font-bold text-light-primary mb-6 leading-tight flex justify-center">
            <img src={logo} alt="AN_w Logo" className="h-20 w-auto" />
          </h1>
          <p className="text-xl md:text-2xl text-light-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            L'élégance redéfinie. Découvrez notre collection exclusive de vêtements Streetwear premium.
          </p>
          <button
            onClick={() => onNavigate('products-all')}
            className="group inline-flex items-center bg-gold hover:bg-gold-hover text-dark-primary px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Découvrir la collection
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        <div className="absolute bottom-8 transform -translate-x-1/2 animate-bounce flex flex-col justify-center items-center space-y-2">
          <div className="text-gold text-sm font-medium">SCROLL</div>
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-gold rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-light-primary mb-4">
              Collections
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onNavigate(`products-${category.id}`)}
                className="group relative h-96 overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-primary via-dark-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="transform group-hover:translate-y-[-8px] transition-transform duration-300">
                    <h3 className="font-display text-3xl font-bold text-light-primary mb-2">
                      {category.name}
                    </h3>
                    <div className="flex items-center text-gold">
                      <span className="text-sm font-medium">Explorer</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-dark-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-light-primary mb-4">
              Produits Populaires
            </h2>
            <div className="w-24 h-1 bg-gold mx-auto mb-4"></div>
            <p className="text-light-gray text-lg">
              Les favoris de notre clientèle
            </p>
          </div>

          {loading ? (
            <div className="text-center text-light-gray">Chargement des produits...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <button
                  key={product._id}
                  onClick={() => onNavigate('product-detail', product._id)}
                  className="group bg-dark-primary overflow-hidden hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {product.badge && (
                      <div className="absolute top-4 right-4 bg-gold text-dark-primary px-3 py-1 text-sm font-bold">
                        {product.badge}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-dark-primary/0 group-hover:bg-dark-primary/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-light-primary font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        Voir le produit
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-light-primary font-semibold text-lg mb-2 group-hover:text-gold transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-gold font-bold text-xl">
                          {product.price}€
                        </span>
                        {product.originalPrice && (
                          <span className="text-light-gray text-sm line-through ml-2">
                            {product.originalPrice}€
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('products-all')}
              className="inline-flex items-center text-gold hover:text-gold-hover font-medium transition-colors duration-300"
            >
              Voir tous les produits
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="bg-dark-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-display font-bold text-gold mb-8">Contactez-nous</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-light-primary mb-2">Nom complet</label>
              <input
                type="text"
                className="w-full bg-dark-primary border border-gold/20 text-light-primary px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-300"
              />
            </div>
            <div>
              <label className="block text-light-primary mb-2">Email</label>
              <input
                type="email"
                className="w-full bg-dark-primary border border-gold/20 text-light-primary px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-300"
              />
            </div>
            <div>
              <label className="block text-light-primary mb-2">Message</label>
              <textarea
                className="w-full bg-dark-primary border border-gold/20 text-light-primary px-4 py-3 focus:outline-none focus:border-gold transition-colors duration-300 h-32 resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-gold hover:bg-gold-hover text-dark-primary py-3 font-medium transition-colors duration-300">
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
