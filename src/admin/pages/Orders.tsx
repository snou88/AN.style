import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { mockOrders } from '../data/mockData';

const Orders: React.FC = () => {
  const [orders, setOrders] = useState(mockOrders);

  const handleStatusChange = (id: string, newStatus: string) => {
    setOrders(orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div>
      <h1 className="text-3xl font-display font-bold text-light-primary mb-8">Gestion des Commandes</h1>

      <div className="bg-dark-secondary rounded-lg overflow-hidden">
        <div className="overflow-x-auto ml-4">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-dark-primary">
                <th className="pb-3 text-light-gray">ID</th>
                <th className="pb-3 text-light-gray">Client</th>
                <th className="pb-3 text-light-gray">Date</th>
                <th className="pb-3 text-light-gray">Total</th>
                <th className="pb-3 text-light-gray">Statut</th>
                <th className="pb-3 text-light-gray">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-dark-primary hover:bg-dark-primary transition-colors">
                  <td className="py-3 text-light-primary">{order.id}</td>
                  <td className="py-3 text-light-primary">{order.customer}</td>
                  <td className="py-3 text-light-gray">{order.date}</td>
                  <td className="py-3 text-light-primary">€{order.total}</td>
                  <td className="py-3">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className="bg-dark-primary text-light-primary border border-dark-primary rounded px-2 py-1 text-sm"
                    >
                      <option value="pending">En attente</option>
                      <option value="paid">Payé</option>
                      <option value="shipped">Expédié</option>
                      <option value="delivered">Livré</option>
                    </select>
                  </td>
                  <td className="py-3">
                    <button className="text-light-gray hover:text-light-primary">
                      <Eye className="w-4 h-4" />
                    </button>
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

export default Orders;