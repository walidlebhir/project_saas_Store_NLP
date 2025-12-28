import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Search, 
  Menu, 
  X, 
  User,
  ChevronDown
} from 'lucide-react';

export default function NavBarapp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { name: 'Électronique', path: '/category/electronics' },
    { name: 'Mode', path: '/category/fashion' },
    { name: 'Maison', path: '/category/home' },
    { name: 'Beauté', path: '/category/beauty' },
    { name: 'Sport', path: '/category/sports' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo et nom de la plateforme */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <ShoppingCart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-800">Shop<span className="text-blue-600"></span></span>
            </Link>
          </div>

          {/* Navigation pour desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Lien Accueil */}
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Accueil
            </Link>

            {/* Produits */}
            <Link 
              to="/page/Hom" 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              Hom
            </Link>

            {/* Catégories avec dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300"
              >
                Catégories
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* À propos / Story */}
            
          </div>

          {/* Barre de recherche pour desktop */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Rechercher des produits..."
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* CTA et Panier pour desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-300">
              <ShoppingCart className="h-6 w-6" />
              <span className="ml-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            
            <Link
              to="/login"
              className="px-4 py-2 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300"
            >
              Connexion
            </Link>
            
            <Link
              to="/register"
              className="px-6 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              S'inscrire
            </Link>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600">
              <ShoppingCart className="h-6 w-6" />
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-4 pb-3 space-y-3">
            {/* Barre de recherche mobile */}
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            {/* Liens mobiles */}
            <Link
              to="/"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            
            <Link
              to="/products"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Produits
            </Link>
            
            <div className="px-4 py-2">
              <div className="font-medium text-gray-700 mb-2">Catégories</div>
              <div className="space-y-1 ml-2">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.path}
                    className="block px-2 py-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              to="/about"
              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Notre Histoire
            </Link>

            {/* Boutons mobiles */}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              <Link
                to="/login"
                className="block w-full text-center px-4 py-2 text-blue-600 border border-blue-600 rounded-full hover:bg-blue-50 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Connexion
              </Link>
              
              <Link
                to="/register"
                className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Overlay pour fermer le dropdown en cliquant à l'extérieur */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
    </nav>
  );
}