import { useState } from 'react';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

interface ProductDetailProps {
  productId: string;
  onNavigate: (page: string, data?: string) => void;
}

export default function ProductDetail({ productId, onNavigate }: ProductDetailProps) {
  const product = products.find((p) => p.id === productId);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-dark-primary flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-light-primary text-2xl mb-4">Produit non trouvé</h1>
          <button
            onClick={() => onNavigate('home')}
            className="text-gold hover:text-gold-hover"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Veuillez sélectionner une taille');
      return;
    }
    addToCart(product, selectedSize, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('Veuillez sélectionner une taille');
      return;
    }
    addToCart(product, selectedSize, quantity);
    onNavigate('cart');
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-dark-primary pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => onNavigate(`products-${product.category}`)}
          className="flex items-center text-light-gray hover:text-gold transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour aux produits
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <div className="space-y-4">
            <div className="relative aspect-[3/4] overflow-hidden bg-dark-secondary">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-6 right-6 bg-gold text-dark-primary px-4 py-2 text-sm font-bold">
                  {product.badge}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-6">
              <span className="text-light-gray text-sm uppercase tracking-widest">
                {product.category}
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-light-primary mt-2 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-gold font-bold text-3xl">{product.price}€</span>
                {product.originalPrice && (
                  <span className="text-light-gray text-xl line-through">
                    {product.originalPrice}€
                  </span>
                )}
              </div>
            </div>

            <div className="border-t border-b border-gold/20 py-6 mb-6">
              <p className="text-light-gray leading-relaxed">{product.description}</p>
            </div>

            <div className="mb-6">
              <label className="block text-light-primary font-medium mb-3">
                Sélectionner une taille
              </label>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-center border-2 transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-gold bg-gold text-dark-primary font-semibold'
                        : 'border-gold/30 text-light-primary hover:border-gold hover:bg-gold/10'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-light-primary font-medium mb-3">
                Quantité
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 border-2 border-gold/30 text-light-primary hover:border-gold hover:bg-gold/10 transition-all duration-300"
                >
                  -
                </button>
                <span className="text-light-primary text-xl font-medium w-12 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 border-2 border-gold/30 text-light-primary hover:border-gold hover:bg-gold/10 transition-all duration-300"
                >
                  +
                </button>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <button
                onClick={handleBuyNow}
                className="w-full bg-gold hover:bg-gold-hover text-dark-primary py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Acheter maintenant
              </button>
              <button
                onClick={handleAddToCart}
                className="w-full border-2 border-gold text-gold hover:bg-gold hover:text-dark-primary py-4 text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                {addedToCart ? (
                  <>
                    <Check className="w-5 h-5" />
                    Ajouté au panier
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    Ajouter au panier
                  </>
                )}
              </button>
            </div>

            <div className="bg-dark-secondary p-6 space-y-3">
              <div className="flex items-center text-light-gray text-sm">
                <Check className="w-5 h-5 text-gold mr-3" />
                Livraison gratuite à partir de 100€
              </div>
              <div className="flex items-center text-light-gray text-sm">
                <Check className="w-5 h-5 text-gold mr-3" />
                Retour gratuit sous 30 jours
              </div>
              <div className="flex items-center text-light-gray text-sm">
                <Check className="w-5 h-5 text-gold mr-3" />
                Paiement sécurisé
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-light-primary mb-8">
              Vous aimerez aussi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <button
                  key={relatedProduct.id}
                  onClick={() => onNavigate('product-detail', relatedProduct.id)}
                  className="group bg-dark-secondary overflow-hidden hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <img
                      src={relatedProduct.images[0]}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-light-primary font-semibold mb-2 group-hover:text-gold transition-colors duration-300">
                      {relatedProduct.name}
                    </h3>
                    <span className="text-gold font-bold">{relatedProduct.price}€</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
