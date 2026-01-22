const API_BASE_URL = 'http://localhost:5000/api';

// Products
export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
};

export const fetchProductById = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  return response.json();
};

export const fetchProductsByCategory = async (category: string) => {
  const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
  if (!response.ok) throw new Error('Failed to fetch products by category');
  return response.json();
};

export const createProduct = async (productData: any) => {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  });
  if (!response.ok) throw new Error('Failed to create product');
  return response.json();
};

export const updateProduct = async (id: string, productData: any) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productData),
  });
  if (!response.ok) throw new Error('Failed to update product');
  return response.json();
};

export const deleteProduct = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete product');
  return response.json();
};

// Orders
export const fetchOrders = async () => {
  const response = await fetch(`${API_BASE_URL}/orders`);
  if (!response.ok) throw new Error('Failed to fetch orders');
  return response.json();
};

export const fetchOrderById = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/orders/${id}`);
  if (!response.ok) throw new Error('Failed to fetch order');
  return response.json();
};

export const createOrder = async (orderData: any) => {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(orderData),
  });
  if (!response.ok) throw new Error('Failed to create order');
  return response.json();
};

export const updateOrderStatus = async (id: string, status: string) => {
  const response = await fetch(`${API_BASE_URL}/orders/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ status }),
  });
  if (!response.ok) throw new Error('Failed to update order');
  return response.json();
};

// Customers
export const fetchCustomers = async () => {
  const response = await fetch(`${API_BASE_URL}/customers`);
  if (!response.ok) throw new Error('Failed to fetch customers');
  return response.json();
};

export const fetchCustomerById = async (id: string) => {
  const response = await fetch(`${API_BASE_URL}/customers/${id}`);
  if (!response.ok) throw new Error('Failed to fetch customer');
  return response.json();
};

export const createCustomer = async (customerData: any) => {
  const response = await fetch(`${API_BASE_URL}/customers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(customerData),
  });
  if (!response.ok) throw new Error('Failed to create customer');
  return response.json();
};

export const updateCustomer = async (id: string, customerData: any) => {
  const response = await fetch(`${API_BASE_URL}/customers/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(customerData),
  });
  if (!response.ok) throw new Error('Failed to update customer');
  return response.json();
};

// Dashboard
export const fetchDashboardKPIs = async () => {
  const response = await fetch(`${API_BASE_URL}/dashboard/kpis`);
  if (!response.ok) throw new Error('Failed to fetch KPIs');
  return response.json();
};

export const fetchRecentOrders = async (limit: number = 5) => {
  const response = await fetch(`${API_BASE_URL}/dashboard/recent-orders?limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch recent orders');
  return response.json();
};

export const fetchSalesData = async () => {
  const response = await fetch(`${API_BASE_URL}/dashboard/sales`);
  if (!response.ok) throw new Error('Failed to fetch sales data');
  return response.json();
};
