import React from 'react';
import { DollarSign, ShoppingCart, Package, Users, TrendingUp } from 'lucide-react';
import { mockKPIs, mockOrders } from '../data/mockData';

const Dashboard: React.FC = () => {
  const kpis = [
    {
      title: 'Chiffre d\'affaires',
      value: `€${mockKPIs.revenue.toLocaleString()}`,
      icon: DollarSign,
      change: '+12.5%',
    },
    {
      title: 'Commandes',
      value: mockKPIs.orders.toString(),
      icon: ShoppingCart,
      change: '+8.2%',
    },
    {
      title: 'Produits',
      value: mockKPIs.products.toString(),
      icon: Package,
      change: '+2.1%',
    },
    {
      title: 'Clients',
      value: mockKPIs.customers.toString(),
      icon: Users,
      change: '+15.3%',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-display font-bold text-light-primary mb-6 md:mb-8">Dashboard</h1>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {kpis.map((kpi, index) => (
          <div key={index} className="bg-dark-secondary rounded-lg p-4 md:p-6 hover:scale-105 transition-transform duration-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-light-gray text-xs md:text-sm">{kpi.title}</p>
                <p className="text-lg md:text-2xl font-bold text-light-primary mt-1">{kpi.value}</p>
                <p className="text-green-400 text-xs md:text-sm mt-1">{kpi.change}</p>
              </div>
              <kpi.icon className="w-6 h-6 md:w-8 md:h-8 text-gold" />
            </div>
          </div>
        ))}
      </div>

      {/* Sales Chart Placeholder */}
      <div className="bg-dark-secondary rounded-lg p-4 md:p-6 mb-6 md:mb-8">
        <h2 className="text-lg md:text-xl font-semibold text-light-primary mb-4">Ventes Mensuelles</h2>
        <div className="h-48 md:h-64 flex items-center justify-center text-light-gray">
          <TrendingUp className="w-8 h-8 md:w-12 md:h-12 mr-2 md:mr-4" />
          <span className="text-sm md:text-base">Graphique des ventes (placeholder)</span>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-dark-secondary rounded-lg p-4 md:p-6">
        <h2 className="text-lg md:text-xl font-semibold text-light-primary mb-4">Dernières Commandes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm md:text-base">
            <thead>
              <tr className="border-b border-dark-primary">
                <th className="pb-2 md:pb-3 text-light-gray text-xs md:text-sm">ID</th>
                <th className="pb-2 md:pb-3 text-light-gray text-xs md:text-sm">Client</th>
                <th className="pb-2 md:pb-3 text-light-gray text-xs md:text-sm">Date</th>
                <th className="pb-2 md:pb-3 text-light-gray text-xs md:text-sm">Total</th>
                <th className="pb-2 md:pb-3 text-light-gray text-xs md:text-sm">Statut</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.slice(0, 5).map((order) => (
                <tr key={order.id} className="border-b border-dark-primary hover:bg-dark-primary transition-colors">
                  <td className="py-2 md:py-3 text-light-primary text-xs md:text-sm">{order.id}</td>
                  <td className="py-2 md:py-3 text-light-primary text-xs md:text-sm">{order.customer}</td>
                  <td className="py-2 md:py-3 text-light-gray text-xs md:text-sm">{order.date}</td>
                  <td className="py-2 md:py-3 text-light-primary text-xs md:text-sm">€{order.total}</td>
                  <td className="py-2 md:py-3">
                    <span className={`px-1 md:px-2 py-1 rounded-full text-xs ${
                      order.status === 'paid' ? 'bg-green-600 text-white' :
                      order.status === 'pending' ? 'bg-yellow-600 text-white' :
                      'bg-blue-600 text-white'
                    }`}>
                      {order.status}
                    </span>
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

export default Dashboard;