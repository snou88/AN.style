import React, { useState } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { BarChart3, Package, ShoppingCart, Users, Settings, Menu, Search, User } from 'lucide-react';
import Dashboard from '../pages/Dashboard';
import Products from '../pages/Products';
import Orders from '../pages/Orders';
import Customers from '../pages/Customers';
import SettingsPage from '../pages/Settings';
import logo from '../../images/an.png';

const AdminLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/admin', icon: BarChart3, label: 'Dashboard' },
    { path: '/admin/products', icon: Package, label: 'Produits' },
    { path: '/admin/orders', icon: ShoppingCart, label: 'Commandes' },
    { path: '/admin/customers', icon: Users, label: 'Clients' },
    { path: '/admin/settings', icon: Settings, label: 'Paramètres' },
  ];

  return (
    <div className="min-h-screen bg-dark-primary text-light-primary">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-dark-secondary transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex items-center justify-center h-16 bg-dark-primary">
          <h1 className="text-2xl font-display font-bold text-gold"><a href="#"><img src={logo} alt="AN Logo" className="h-10 w-auto" /></a></h1>
        </div>
        <nav className="mt-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? 'bg-gold text-dark-primary'
                  : 'text-light-gray hover:bg-dark-primary hover:text-light-primary'
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 lg:relative bottom-[316px]">
        {/* Header */}
        <header className="bg-dark-secondary shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-light-gray hover:text-light-primary"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-light-gray" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  className="w-full pl-10 pr-4 py-2 bg-dark-primary border border-dark-primary rounded-lg text-light-primary placeholder-light-gray focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-dark-primary" />
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;