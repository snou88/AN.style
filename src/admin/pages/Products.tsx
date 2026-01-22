import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { fetchProducts, deleteProduct } from '../../services/api';

const Products: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const result = await fetchProducts();
        setProducts(result.data);
      } catch (error) {
        console.error('Failed to load products:', error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce produit ?')) {
      try {
        await deleteProduct(id);
        setProducts(products.filter(p => p._id !== id));
      } catch (error) {
        console.error('Failed to delete product:', error);
        alert('Erreur lors de la suppression du produit');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <p className="text-light-gray">Chargement des produits...</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-display font-bold text-light-primary">Gestion des Produits</h1>
        <button className="bg-gold text-dark-primary px-4 py-2 rounded-lg hover:bg-gold-hover transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter un produit
        </button>
      </div>

      <div className="bg-dark-secondary rounded-lg overflow-hidden">
        <div className="overflow-x-auto ml-4">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-dark-primary">
                <th className="pb-3 text-light-gray">Image</th>
                <th className="pb-3 text-light-gray">Nom</th>
                <th className="pb-3 text-light-gray">Prix</th>
                <th className="pb-3 text-light-gray">Stock</th>
                <th className="pb-3 text-light-gray">Statut</th>
                <th className="pb-3 text-light-gray">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id} className="border-b border-dark-primary hover:bg-dark-primary transition-colors">
                  <td className="py-3">
                    <img src={product.images[0]} alt={product.name} className="w-12 h-12 object-cover rounded" />
                  </td>
                  <td className="py-3 text-light-primary">{product.name}</td>
                  <td className="py-3 text-light-primary">
                    €{product.originalPrice || product.price}
                    {product.originalPrice && <span className="text-light-gray line-through ml-2">€{product.price}</span>}
                  </td>
                  <td className="py-3 text-light-primary">{product.stock}</td>
                  <td className="py-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      product.stock > 0 ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                    }`}>
                      {product.stock > 0 ? 'En stock' : 'Rupture'}
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="flex space-x-2">
                      <button className="text-light-gray hover:text-light-primary">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-light-gray hover:text-light-primary">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;