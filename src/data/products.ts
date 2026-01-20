export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'homme' | 'femme' | 'accessoires';
  images: string[];
  description: string;
  sizes: string[];
  badge?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Veste en Cuir Premium',
    price: 459,
    originalPrice: 599,
    category: 'homme',
    images: [
      'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Veste en cuir véritable de qualité supérieure. Coupe ajustée, doublure en soie. Parfait pour un style urbain sophistiqué.',
    sizes: ['S', 'M', 'L', 'XL'],
    badge: '-23%'
  },
  {
    id: '2',
    name: 'Robe Élégante Noire',
    price: 349,
    category: 'femme',
    images: [
      'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Robe élégante en soie noire. Coupe fluide et féminine. Idéale pour les occasions spéciales.',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '3',
    name: 'Montre Or 24K',
    price: 1299,
    category: 'accessoires',
    images: [
      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Montre de luxe en or 24 carats. Mouvement suisse automatique. Édition limitée.',
    sizes: ['Unique']
  },
  {
    id: '4',
    name: 'Costume Trois Pièces',
    price: 799,
    category: 'homme',
    images: [
      'https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Costume trois pièces en laine mérinos. Coupe sur-mesure italienne. Élégance intemporelle.',
    sizes: ['46', '48', '50', '52', '54']
  },
  {
    id: '5',
    name: 'Sac à Main Luxe',
    price: 899,
    originalPrice: 1199,
    category: 'accessoires',
    images: [
      'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Sac à main en cuir italien. Design contemporain. Multiples compartiments intérieurs.',
    sizes: ['Unique'],
    badge: '-25%'
  },
  {
    id: '6',
    name: 'Chemise Blanche Signature',
    price: 189,
    category: 'homme',
    images: [
      'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Chemise blanche en coton égyptien. Coupe slim. Essentiel du vestiaire masculin.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '7',
    name: 'Robe Cocktail Dorée',
    price: 549,
    category: 'femme',
    images: [
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Robe de cocktail avec détails dorés. Tissu scintillant. Parfaite pour les soirées glamour.',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '8',
    name: 'Ceinture Cuir Premium',
    price: 159,
    category: 'accessoires',
    images: [
      'https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1038000/pexels-photo-1038000.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Ceinture en cuir véritable. Boucle en laiton doré. Finitions artisanales.',
    sizes: ['85', '90', '95', '100', '105']
  },
  {
    id: '9',
    name: 'Blazer Femme Beige',
    price: 429,
    category: 'femme',
    images: [
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Blazer oversize en laine beige. Style contemporain et sophistiqué. Polyvalent.',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '10',
    name: 'Sneakers Luxe Blanches',
    price: 389,
    category: 'homme',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Sneakers en cuir blanc premium. Confort optimal. Design minimaliste épuré.',
    sizes: ['40', '41', '42', '43', '44', '45']
  },
  {
    id: '11',
    name: 'Manteau Long Camel',
    price: 689,
    category: 'femme',
    images: [
      'https://images.pexels.com/photos/1374064/pexels-photo-1374064.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1374064/pexels-photo-1374064.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Manteau long en laine camel. Coupe élégante. Indispensable pour l\'hiver.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '12',
    name: 'Lunettes de Soleil Premium',
    price: 299,
    originalPrice: 399,
    category: 'accessoires',
    images: [
      'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Lunettes de soleil polarisées. Monture en acétate italien. Protection UV 400.',
    sizes: ['Unique'],
    badge: '-25%'
  }
];
