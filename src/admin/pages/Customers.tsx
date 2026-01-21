import React from 'react';
import { Eye } from 'lucide-react';
import { mockCustomers } from '../data/mockData';

const Customers: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-display font-bold text-light-primary mb-8">Gestion des Clients</h1>

      <div className="bg-dark-secondary rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-dark-primary">
                <th className="pb-3 text-light-gray">Nom</th>
                <th className="pb-3 text-light-gray">Email</th>
                <th className="pb-3 text-light-gray">Commandes</th>
                <th className="pb-3 text-light-gray">Total dépensé</th>
                <th className="pb-3 text-light-gray">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockCustomers.map((customer) => (
                <tr key={customer.id} className="border-b border-dark-primary hover:bg-dark-primary transition-colors">
                  <td className="py-3 text-light-primary">{customer.name}</td>
                  <td className="py-3 text-light-primary">{customer.email}</td>
                  <td className="py-3 text-light-primary">{customer.ordersCount}</td>
                  <td className="py-3 text-light-primary">€{customer.totalSpent}</td>
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

export default Customers;