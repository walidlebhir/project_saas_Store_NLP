import React from 'react';
import {
  ChartBarIcon,
  ShoppingBagIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  TrendingUpIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  CubeIcon,
  TruckIcon
} from '@heroicons/react/outline';

export default function DashbordAdmin() {
  // Données statistiques
  const stats = [
    {
      title: "Chiffre d'affaires",
      value: "€24,580",
      change: "+12.5%",
      trend: "up",
      icon: CurrencyDollarIcon,
      color: "bg-green-500",
      textColor: "text-green-500"
    },
    {
      title: "Commandes",
      value: "1,248",
      change: "+8.2%",
      trend: "up",
      icon: ShoppingBagIcon,
      color: "bg-blue-500",
      textColor: "text-blue-500"
    },
    {
      title: "Clients",
      value: "5,621",
      change: "+5.7%",
      trend: "up",
      icon: UsersIcon,
      color: "bg-purple-500",
      textColor: "text-purple-500"
    },
    {
      title: "Produits",
      value: "845",
      change: "-2.3%",
      trend: "down",
      icon: CubeIcon,
      color: "bg-yellow-500",
      textColor: "text-yellow-500"
    }
  ];

  // Commandes récentes
  const recentOrders = [
    {
      id: "#ORD-7841",
      customer: "Jean Dupont",
      amount: "€149.99",
      status: "livrée",
      date: "12 Nov 2023"
    },
    {
      id: "#ORD-7840",
      customer: "Marie Martin",
      amount: "€299.50",
      status: "en cours",
      date: "11 Nov 2023"
    },
    {
      id: "#ORD-7839",
      customer: "Pierre Durand",
      amount: "€89.99",
      status: "annulée",
      date: "11 Nov 2023"
    },
    {
      id: "#ORD-7838",
      customer: "Sophie Lambert",
      amount: "€450.00",
      status: "livrée",
      date: "10 Nov 2023"
    },
    {
      id: "#ORD-7837",
      customer: "Thomas Bernard",
      amount: "€199.99",
      status: "en attente",
      date: "10 Nov 2023"
    }
  ];

  // Produits populaires
  const popularProducts = [
    {
      name: "iPhone 14 Pro",
      category: "Électronique",
      sales: "125",
      revenue: "€87,500",
      stock: "42"
    },
    {
      name: "Basket Nike Air Max",
      category: "Mode",
      sales: "89",
      revenue: "€12,460",
      stock: "15"
    },
    {
      name: "Canon EOS R6",
      category: "Photo",
      sales: "34",
      revenue: "€81,600",
      stock: "8"
    },
    {
      name: "Laptop Dell XPS 13",
      category: "Informatique",
      sales: "27",
      revenue: "€40,500",
      stock: "3"
    }
  ];

  // Statut de livraison
  const deliveryStatus = [
    { status: "Livrées", count: 45, color: "bg-green-500", percentage: 60 },
    { status: "En cours", count: 25, color: "bg-blue-500", percentage: 33 },
    { status: "Retardées", count: 5, color: "bg-yellow-500", percentage: 7 }
  ];

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Tableau de bord</h1>
          <p className="text-gray-600 mt-1">Bienvenue dans votre espace d'administration</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 flex items-center">
            <TrendingUpIcon className="h-5 w-5 mr-2" />
            Générer rapport
          </button>
        </div>
      </div>

      {/* Cartes statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm font-medium">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</p>
                <div className="flex items-center mt-2">
                  {stat.trend === "up" ? (
                    <ArrowUpIcon className={`h-4 w-4 ${stat.textColor} mr-1`} />
                  ) : (
                    <ArrowDownIcon className="h-4 w-4 text-red-500 mr-1" />
                  )}
                  <span className={`text-sm font-medium ${stat.trend === "up" ? stat.textColor : "text-red-500"}`}>
                    {stat.change}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">vs mois dernier</span>
                </div>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Graphique et informations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Graphique principal */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Ventes sur 30 jours</h2>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm">
              <option>30 derniers jours</option>
              <option>90 derniers jours</option>
              <option>Cette année</option>
            </select>
          </div>
          
          {/* Graphique simplifié */}
          <div className="h-64 flex items-end space-x-2 pt-8">
            {[40, 60, 75, 90, 85, 95, 100, 85, 70, 65, 80, 95].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg"
                  style={{ height: `${height}%` }}
                ></div>
                <span className="text-xs text-gray-500 mt-2">{index + 1}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-500">
            <span>1 Nov</span>
            <span>30 Nov</span>
          </div>
        </div>

        {/* Statut des livraisons */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">Statut des livraisons</h2>
          <div className="space-y-4">
            {deliveryStatus.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">{item.status}</span>
                  <span className="text-sm text-gray-600">{item.count} ({item.percentage}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${item.color} h-2 rounded-full`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center text-gray-600">
              <TruckIcon className="h-5 w-5 mr-2" />
              <span className="text-sm">Livraison moyenne : <strong>2.4 jours</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Commandes récentes et produits populaires */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Commandes récentes */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Commandes récentes</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Commande</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Montant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentOrders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{order.id}</div>
                        <div className="text-sm text-gray-500">{order.date}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{order.customer}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      {order.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        order.status === "livrée" ? "bg-green-100 text-green-800" :
                        order.status === "en cours" ? "bg-blue-100 text-blue-800" :
                        order.status === "en attente" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-gray-200 text-center">
            <a href="/admin/orders" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Voir toutes les commandes →
            </a>
          </div>
        </div>

        {/* Produits populaires */}
        <div className="bg-white rounded-xl shadow-md border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Produits populaires</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {popularProducts.map((product, index) => (
              <div key={index} className="p-4 flex items-center hover:bg-gray-50">
                <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <CubeIcon className="h-6 w-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">{product.revenue}</div>
                      <div className="text-sm text-gray-500">{product.sales} ventes</div>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${(parseInt(product.sales) / 125) * 100}%` }}
                      ></div>
                    </div>
                    <div className="ml-4 text-sm">
                      <span className={`px-2 py-1 rounded-full ${
                        parseInt(product.stock) > 10 ? 'bg-green-100 text-green-800' :
                        parseInt(product.stock) > 5 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        Stock: {product.stock}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 text-center">
            <a href="/admin/products" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              Voir tous les produits →
            </a>
          </div>
        </div>
      </div>

      {/* Actions rapides */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Actions rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition duration-200 text-center">
            <div className="h-10 w-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <ShoppingBagIcon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-gray-700">Nouvelle commande</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition duration-200 text-center">
            <div className="h-10 w-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <CubeIcon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-gray-700">Ajouter produit</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition duration-200 text-center">
            <div className="h-10 w-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <UsersIcon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-gray-700">Ajouter client</span>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition duration-200 text-center">
            <div className="h-10 w-10 bg-yellow-100 text-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-2">
              <ChartBarIcon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-gray-700">Voir rapports</span>
          </button>
        </div>
      </div>
    </div>
  );
}