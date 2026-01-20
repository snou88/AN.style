import { useState, useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductsList from './pages/ProductsList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

interface Route {
  page: string;
  data?: string;
}

function AppContent() {
  const [currentRoute, setCurrentRoute] = useState<Route>({ page: 'home' });
  const { getTotalItems } = useCart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentRoute]);

  const handleNavigate = (page: string, data?: string) => {
    setCurrentRoute({ page, data });
  };

  const renderPage = () => {
    const { page, data } = currentRoute;

    if (page === 'home') {
      return <Home onNavigate={handleNavigate} />;
    }

    if (page.startsWith('products-')) {
      const category = page.replace('products-', '');
      return <ProductsList onNavigate={handleNavigate} category={category} />;
    }

    if (page === 'product-detail' && data) {
      return <ProductDetail productId={data} onNavigate={handleNavigate} />;
    }

    if (page === 'cart') {
      return <Cart onNavigate={handleNavigate} />;
    }

    return <Home onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen bg-dark-primary">
      <Navbar
        cartItemsCount={getTotalItems()}
        onNavigate={handleNavigate}
        currentPage={currentRoute.page}
      />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
