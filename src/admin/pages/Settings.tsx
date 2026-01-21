import React from 'react';

const Settings: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-display font-bold text-light-primary mb-8">Paramètres</h1>

      <div className="space-y-6">
        {/* Store Information */}
        <div className="bg-dark-secondary rounded-lg p-6">
          <h2 className="text-xl font-semibold text-light-primary mb-4">Informations de la boutique</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-light-gray text-sm mb-2">Nom de la boutique</label>
              <input
                type="text"
                defaultValue="AN Style"
                className="w-full bg-dark-primary border border-dark-primary rounded px-3 py-2 text-light-primary"
              />
            </div>
            <div>
              <label className="block text-light-gray text-sm mb-2">Email</label>
              <input
                type="email"
                defaultValue="contact@anstyle.com"
                className="w-full bg-dark-primary border border-dark-primary rounded px-3 py-2 text-light-primary"
              />
            </div>
          </div>
        </div>

        {/* Promotions */}
        <div className="bg-dark-secondary rounded-lg p-6">
          <h2 className="text-xl font-semibold text-light-primary mb-4">Gestion des promotions</h2>
          <p className="text-light-gray">Fonctionnalité à implémenter</p>
        </div>

        {/* Branding */}
        <div className="bg-dark-secondary rounded-lg p-6">
          <h2 className="text-xl font-semibold text-light-primary mb-4">Couleurs / Branding</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-light-gray text-sm mb-2">Primary (Gold)</label>
              <div className="w-full h-10 bg-gold rounded"></div>
              <p className="text-xs text-light-gray mt-1">#C9A24D</p>
            </div>
            <div>
              <label className="block text-light-gray text-sm mb-2">Background</label>
              <div className="w-full h-10 bg-dark-primary rounded"></div>
              <p className="text-xs text-light-gray mt-1">#0B0B0B</p>
            </div>
            <div>
              <label className="block text-light-gray text-sm mb-2">Secondary</label>
              <div className="w-full h-10 bg-dark-secondary rounded"></div>
              <p className="text-xs text-light-gray mt-1">#121212</p>
            </div>
            <div>
              <label className="block text-light-gray text-sm mb-2">Text</label>
              <div className="w-full h-10 bg-light-primary rounded"></div>
              <p className="text-xs text-light-gray mt-1">#F5F5F5</p>
            </div>
          </div>
        </div>

        {/* Shipping */}
        <div className="bg-dark-secondary rounded-lg p-6">
          <h2 className="text-xl font-semibold text-light-primary mb-4">Paramètres de livraison</h2>
          <p className="text-light-gray">Fonctionnalité à implémenter</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;