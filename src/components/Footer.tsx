import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '../images/an.png';
export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-gold mb-4"><img src={logo} alt="AN Logo" className="h-10 w-auto" /></h3>
            <p className="text-light-gray text-sm leading-relaxed">
              Votre destination pour la mode de luxe. Élégance et sophistication depuis 2024.
            </p>
          </div>

          <div>
            <h4 className="text-light-primary font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-light-gray hover:text-gold transition-colors duration-300 text-sm">Accueil</a></li>
              <li><a href="#collections" className="text-light-gray hover:text-gold transition-colors duration-300 text-sm">Collections</a></li>
              <li><a href="#about" className="text-light-gray hover:text-gold transition-colors duration-300 text-sm">À propos</a></li>
              <li><a href="#contact" className="text-light-gray hover:text-gold transition-colors duration-300 text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-light-primary font-semibold mb-4">Assistance</h4>
            <ul className="space-y-2">
              <li><a href="mailto:contact@anstyle.com" className="text-light-gray hover:text-gold transition-colors duration-300 text-sm">contact@anstyle.com</a></li>
              <li><a href="tel:0540302010" className="text-light-gray hover:text-gold transition-colors duration-300 text-sm">05 40 30 20 10</a></li>
              <li><a href="tel:0540302010" className="text-light-gray hover:text-gold transition-colors duration-300 text-sm">05 40 30 20 10</a></li>
              <li><a href="tel:0540302010" className="text-light-gray hover:text-gold transition-colors duration-300 text-sm">05 40 30 20 10</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-light-primary font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-light-gray hover:text-gold transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-light-gray hover:text-gold transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-light-gray hover:text-gold transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-8 pt-8 text-center">
          <p className="text-light-gray text-sm">
            &copy; 2024 AN Style. Tous droits réservés. Luxury Fashion.
          </p>
        </div>
      </div>
    </footer>
  );
}
