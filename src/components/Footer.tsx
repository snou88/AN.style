import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-secondary border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-2xl font-bold text-gold mb-4">AN Style</h3>
            <p className="text-light-gray text-sm leading-relaxed">
              Votre destination pour la mode de luxe. Élégance et sophistication depuis 2024.
            </p>
          </div>

          <div>
            <h4 className="text-light-primary font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-light-gray hover:text-gold transition-colors duration-300 text-sm">Accueil</a></li>
              <li><a href="#" className="text-light-gray hover:text-gold transition-colors duration-300 text-sm">Collections</a></li>
              <li><a href="#" className="text-light-gray hover:text-gold transition-colors duration-300 text-sm">À propos</a></li>
              <li><a href="#" className="text-light-gray hover:text-gold transition-colors duration-300 text-sm">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-light-primary font-semibold mb-4">Assistance</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-light-gray hover:text-gold transition-colors duration-300 text-sm">Guide des tailles</a></li>
              <li><a href="#" className="text-light-gray hover:text-gold transition-colors duration-300 text-sm">Livraison</a></li>
              <li><a href="#" className="text-light-gray hover:text-gold transition-colors duration-300 text-sm">Retours</a></li>
              <li><a href="#" className="text-light-gray hover:text-gold transition-colors duration-300 text-sm">FAQ</a></li>
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
            <div className="mt-6">
              <p className="text-light-gray text-xs mb-2">Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="bg-dark-primary border border-gold/20 text-light-primary px-3 py-2 text-sm flex-1 focus:outline-none focus:border-gold transition-colors duration-300"
                />
                <button className="bg-gold hover:bg-gold-hover text-dark-primary px-4 py-2 text-sm font-medium transition-colors duration-300">
                  OK
                </button>
              </div>
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
