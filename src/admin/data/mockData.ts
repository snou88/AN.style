export const mockProducts = [
  {
    id: 1,
    name: 'Elegant Dress',
    description: 'A luxurious dress for special occasions.',
    price: 299.99,
    promoPrice: 249.99,
    category: 'Dresses',
    sizes: ['S', 'M', 'L', 'XL'],
    images: ['/images/dress1.jpg'],
    stock: 50,
    status: 'active',
  },
  {
    id: 2,
    name: 'Classic Blazer',
    description: 'Timeless blazer for professional looks.',
    price: 199.99,
    promoPrice: null,
    category: 'Jackets',
    sizes: ['M', 'L', 'XL'],
    images: ['/images/blazer1.jpg'],
    stock: 30,
    status: 'active',
  },
  // Add more products as needed
];

export const mockOrders = [
  {
    id: 'ORD001',
    customer: 'John Doe',
    email: 'john@example.com',
    date: '2023-10-01',
    total: 549.98,
    status: 'paid',
    items: [
      { productId: 1, name: 'Elegant Dress', quantity: 1, price: 249.99 },
      { productId: 2, name: 'Classic Blazer', quantity: 1, price: 199.99 },
    ],
    address: '123 Main St, City, Country',
    payment: 'Credit Card',
  },
  // Add more orders
];

export const mockCustomers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    ordersCount: 5,
    totalSpent: 1249.95,
  },
  // Add more customers
];

export const mockKPIs = {
  revenue: 15499.50,
  orders: 120,
  products: 45,
  customers: 89,
};