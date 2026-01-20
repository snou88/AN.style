import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  onNavigate: (page: string) => void;
}

export default function Cart({ onNavigate }: CartProps) {
  const { items, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const handleCheckout = () => {
    alert('Redirection vers le paiement...\nFonctionnalité à implémenter');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-dark-primary pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ShoppingBag className="w-24 h-24 text-gold/30 mx-auto mb-6" />
          <h1 className="font-display text-4xl font-bold text-light-primary mb-4">
            Votre panier est vide
          </h1>
          <p className="text-light-gray mb-8">
            Découvrez notre collection et ajoutez des produits à votre panier
          </p>
          <button
            onClick={() => onNavigate('products-all')}
            className="inline-flex items-center bg-gold hover:bg-gold-hover text-dark-primary px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Découvrir les produits
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-primary pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-light-primary mb-12">
          Panier ({items.length})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="bg-dark-secondary p-6 flex flex-col sm:flex-row gap-6"
              >
                <div className="w-full sm:w-40 h-48 sm:h-40 flex-shrink-0 overflow-hidden">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-light-primary font-semibold text-xl mb-2">
                      {item.product.name}
                    </h3>
                    <p className="text-light-gray text-sm mb-3">
                      Taille: <span className="text-gold font-medium">{item.size}</span>
                    </p>
                    <p className="text-gold font-bold text-2xl">
                      {item.product.price}€
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity - 1)
                        }
                        className="w-10 h-10 border-2 border-gold/30 text-light-primary hover:border-gold hover:bg-gold/10 transition-all duration-300"
                      >
                        -
                      </button>
                      <span className="text-light-primary text-lg font-medium w-12 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.size, item.quantity + 1)
                        }
                        className="w-10 h-10 border-2 border-gold/30 text-light-primary hover:border-gold hover:bg-gold/10 transition-all duration-300"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id, item.size)}
                      className="text-light-gray hover:text-red-500 transition-colors duration-300"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="sm:text-right">
                  <p className="text-light-primary font-bold text-xl">
                    {(item.product.price * item.quantity).toFixed(2)}€
                  </p>
                  <p className="text-light-gray text-sm mt-1">
                    Total
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-dark-secondary p-6 sticky top-24">
              <h2 className="text-light-primary font-semibold text-2xl mb-6">
                Récapitulatif
              </h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-gold/20">
                <div className="flex justify-between text-light-gray">
                  <span>Sous-total</span>
                  <span>{getTotalPrice().toFixed(2)}€</span>
                </div>
                <div className="flex justify-between text-light-gray">
                  <span>Livraison</span>
                  <span className="text-gold">Gratuite</span>
                </div>
              </div>

              <div className="flex justify-between text-light-primary text-2xl font-bold mb-8">
                <span>Total</span>
                <span className="text-gold">{getTotalPrice().toFixed(2)}€</span>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-gold hover:bg-gold-hover text-dark-primary py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 mb-4"
              >
                Passer au paiement
              </button>

              <button
                onClick={() => onNavigate('products-all')}
                className="w-full border-2 border-gold text-gold hover:bg-gold hover:text-dark-primary py-3 text-base font-medium transition-all duration-300"
              >
                Continuer mes achats
              </button>

              <div className="mt-6 space-y-3 pt-6 border-t border-gold/20">
                <p className="text-light-gray text-sm flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  Paiement sécurisé
                </p>
                <p className="text-light-gray text-sm flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  Livraison suivie
                </p>
                <p className="text-light-gray text-sm flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  Retour sous 30 jours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
