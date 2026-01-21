import { useState, useMemo } from 'react';
import { Filter, X } from 'lucide-react';
import { products } from '../data/products';

interface ProductsListProps {
  onNavigate: (page: string, data?: string) => void;
  category?: string;
}

export default function ProductsList({ onNavigate, category }: ProductsListProps) {
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const categoryNames: Record<string, string> = {
    all: 'Tous les produits',
    homme: 'Collection Homme',
    femme: 'Collection Femme',
    accessoires: 'Unisexe',
  };

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (category && category !== 'all') {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (priceFilter !== 'all') {
      filtered = filtered.filter((p) => {
        if (priceFilter === 'under300') return p.price < 300;
        if (priceFilter === '300-600') return p.price >= 300 && p.price < 600;
        if (priceFilter === '600-1000') return p.price >= 600 && p.price < 1000;
        if (priceFilter === 'over1000') return p.price >= 1000;
        return true;
      });
    }

    return filtered;
  }, [category, priceFilter]);

  return (
    <div className="min-h-screen bg-dark-primary pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-light-primary mb-2">
              {categoryNames[category || 'all']}
            </h1>
            <p className="text-light-gray">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
            </p>
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center gap-2 bg-dark-secondary text-light-primary px-4 py-2 hover:bg-gold hover:text-dark-primary transition-colors duration-300"
          >
            <Filter className="w-5 h-5" />
            Filtres
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside
            className={`lg:block ${
              showFilters ? 'block' : 'hidden'
            } w-full lg:w-64 flex-shrink-0`}
          >
            <div className="bg-dark-secondary p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-light-primary font-semibold text-lg">Filtres</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden text-light-gray hover:text-gold"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-8">
                <h4 className="text-light-primary font-medium mb-4">Catégorie</h4>
                <div className="space-y-2">
                  {['all', 'homme', 'femme', 'accessoires'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        onNavigate(`products-${cat}`);
                        setShowFilters(false);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded transition-colors duration-300 ${
                        category === cat || (cat === 'all' && !category)
                          ? 'bg-gold text-dark-primary font-medium'
                          : 'text-light-gray hover:text-gold hover:bg-dark-primary'
                      }`}
                    >
                      {categoryNames[cat]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-light-primary font-medium mb-4">Prix</h4>
                <div className="space-y-2">
                  {[
                    { value: 'all', label: 'Tous les prix' },
                    { value: 'under300', label: 'Moins de 300€' },
                    { value: '300-600', label: '300€ - 600€' },
                    { value: '600-1000', label: '600€ - 1000€' },
                    { value: 'over1000', label: 'Plus de 1000€' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setPriceFilter(option.value);
                        setShowFilters(false);
                      }}
                      className={`block w-full text-left px-3 py-2 rounded transition-colors duration-300 ${
                        priceFilter === option.value
                          ? 'bg-gold text-dark-primary font-medium'
                          : 'text-light-gray hover:text-gold hover:bg-dark-primary'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {priceFilter !== 'all' && (
                <button
                  onClick={() => setPriceFilter('all')}
                  className="w-full mt-6 text-gold hover:text-gold-hover text-sm font-medium transition-colors duration-300"
                >
                  Réinitialiser les filtres
                </button>
              )}
            </div>
          </aside>

          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-light-gray text-lg">
                  Aucun produit ne correspond à vos critères
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => onNavigate('product-detail', product.id)}
                    className="group bg-dark-secondary overflow-hidden hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300"
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
          </div>
        </div>
      </div>
    </div>
  );
}
