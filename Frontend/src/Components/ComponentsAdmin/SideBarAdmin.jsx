import React, { useState } from 'react';
import { 
  ShoppingBagIcon, 
  CubeIcon, 
  ClipboardListIcon, 
  TruckIcon, 
  ChartBarIcon,
  UsersIcon,
  TagIcon,
  HomeIcon,
  CogIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/outline';
import { Link, useLocation } from 'react-router-dom';

export default function SideBarAdmin() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Menu items avec icônes et routes
  const menuItems = [
    {
      name: 'Tableau de bord',
      icon: HomeIcon,
      path: '/admin/dashboard',
      badge: null
    },
    {
      name: 'Produits',
      icon: CubeIcon,
      path: '/admin/products',
      badge: '12',
      subItems: [
        { name: 'Tous les produits', path: '/admin/products' },
        { name: 'Catégories', path: '/admin/products/categories' },
        { name: 'Inventaire', path: '/admin/products/inventory' }
      ]
    },
    {
      name: 'Commandes',
      icon: ShoppingBagIcon,
      path: '/admin/orders',
      badge: '5'
    },
    {
      name: 'Clients',
      icon: UsersIcon,
      path: '/admin/customers',
      badge: null
    },
    {
      name: 'Livraisons',
      icon: TruckIcon,
      path: '/admin/deliveries',
      badge: '3'
    },
    {
      name: 'Promotions',
      icon: TagIcon,
      path: '/admin/promotions',
      badge: null
    },
    {
      name: 'Rapports',
      icon: ChartBarIcon,
      path: '/admin/reports',
      badge: null
    },
    {
      name: 'Paramètres',
      icon: CogIcon,
      path: '/admin/settings',
      badge: null
    }
  ];

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  return (
    <aside className={`fixed top-14 left-0 h-[calc(100vh-3.5rem)] bg-white border-r border-gray-200 shadow-sm transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    } z-40`}>
      {/* Bouton de collapse/expand */}
      

      {/* Logo mini */}
      

      {/* Navigation */}
      <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100%-5rem)]">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <div key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center px-3 py-3 rounded-lg transition duration-200 ${
                  active 
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                } ${isCollapsed ? 'justify-center' : 'justify-between'}`}
              >
                <div className={`flex items-center ${isCollapsed ? '' : 'flex-1'}`}>
                  <Icon className={`h-5 w-5 ${active ? 'text-blue-600' : 'text-gray-500'}`} />
                  {!isCollapsed && (
                    <span className="ml-3 text-sm font-medium">{item.name}</span>
                  )}
                </div>
                
                {/* Badge */}
                {item.badge && !isCollapsed && (
                  <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
              </Link>
              
              {/* Sous-menu (visible uniquement quand non-collapsed) */}
              {item.subItems && !isCollapsed && active && (
                <div className="ml-9 mt-1 space-y-1">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="flex items-center px-3 py-2 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition duration-150"
                    >
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Pied de sidebar */}
      <div className={`absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 ${isCollapsed ? 'text-center' : ''}`}>
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : ''}`}>
          <div className={`rounded-full bg-gradient-to-r from-green-400 to-blue-500 p-0.5 ${isCollapsed ? 'w-6 h-6' : 'w-8 h-8'}`}>
            <div className="bg-white rounded-full w-full h-full flex items-center justify-center">
              <span className="text-xs font-bold text-gray-800">V</span>
            </div>
          </div>
          {!isCollapsed && (
            <div className="ml-3">
              <p className="text-xs font-medium text-gray-800">v2.1.0</p>
              <p className="text-xs text-gray-500">Version actuelle</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}