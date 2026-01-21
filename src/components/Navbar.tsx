import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../images/an.png';
interface NavbarProps {
  cartItemsCount: number;
  onNavigate: (page: string, data?: string) => void;
  currentPage: string;
}

export default function Navbar({ cartItemsCount, onNavigate, currentPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', id: 'home' },
    { name: 'Homme', id: 'products-homme' },
    { name: 'Femme', id: 'products-femme' },
    { name: 'Unisexe', id: 'products-accessoires' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/95 backdrop-blur-sm border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => onNavigate('home')}
            className="font-display text-3xl font-bold text-gold hover:text-gold-hover transition-colors duration-300"
          >
            <a href="#"><img src={logo} alt="AN Logo" className="h-10 w-auto" /></a>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-sm font-medium transition-colors duration-300 ${
                  currentPage === link.id
                    ? 'text-gold'
                    : 'text-light-primary hover:text-gold'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 text-light-primary hover:text-gold transition-colors duration-300"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-dark-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-light-primary hover:text-gold transition-colors duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-dark-secondary border-t border-gold/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded transition-colors duration-300 ${
                  currentPage === link.id
                    ? 'text-gold bg-gold/10'
                    : 'text-light-primary hover:text-gold hover:bg-gold/5'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
