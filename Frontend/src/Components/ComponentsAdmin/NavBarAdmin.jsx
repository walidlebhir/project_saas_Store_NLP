import React, { useState, useRef, useEffect } from 'react';
import { BellIcon, ChevronDownIcon, SearchIcon, MoonIcon, SunIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { LogoutIcon, CogIcon, UserIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/solid';

export default function NavBarAdmin() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [notifications] = useState(3);
  const [adminName] = useState('Admin Store');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark'); // 'dark', 'blue', 'purple', 'green', 'red'
  const profileRef = useRef(null);

  // Fermer les dropdowns quand on clique à l'extérieur
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Initiales pour l'avatar
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Définir les couleurs selon le thème
  const getThemeColors = () => {
    const themes = {
      dark: {
        bg: 'from-gray-900 to-gray-800',
        border: 'border-gray-700',
        avatar: 'from-blue-500 to-cyan-400',
        logo: 'text-blue-400',
        hover: 'hover:bg-gray-700',
        dropdown: 'bg-gray-800 border-gray-700',
        dropdownHover: 'hover:bg-gray-700',
        text: 'text-white',
        muted: 'text-gray-300'
      },
      
    };
    return themes[theme];
  };

  const colors = getThemeColors();

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r ${colors.bg} shadow-xl border-b ${colors.border}`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo et nom de la plateforme */}
          <div className="flex items-center">
            {/* Bouton menu mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 mr-2"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>

            <div className="flex-shrink-0 flex items-center">
              <div className={`h-10 w-10 bg-gradient-to-r ${colors.avatar} rounded-xl flex items-center justify-center mr-3 shadow-lg transform hover:scale-105 transition-transform duration-200`}>
                <ShieldCheckIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className={`text-xl font-bold ${colors.text} hidden md:block`}>
                  Admin <span className={colors.logo}>Store</span>
                </h1>
                <h1 className={`text-xl font-bold ${colors.text} md:hidden`}>
                  <span className={colors.logo}>A</span>S
                </h1>
                <p className="text-xs text-gray-400 hidden md:block">Dashboard v2.1</p>
              </div>
            </div>

            {/* Menu navigation desktop */}
            
          </div>

          {/* Menu mobile */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 border-b border-gray-700 shadow-lg">
              
              
            </div>
          )}

          {/* Barre de recherche et actions */}
          <div className="flex items-center space-x-4">
            

           
            

            {/* Notification Bell */}
            <div className="relative">
              <button className={`p-2 ${colors.muted} ${colors.hover} rounded-full transition duration-200 relative`}>
                <BellIcon className="h-5 w-5" />
                {notifications > 0 && (
                  <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
                )}
              </button>
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-lg font-medium">
                  {notifications}
                </span>
              )}
            </div>

            {/* Bouton aide */}
            

            {/* Bouton plein écran */}
            

            {/* Profil Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={`flex items-center space-x-3 p-1.5 ${colors.hover} rounded-xl transition duration-200 group border border-transparent hover:border-gray-600`}
              >
                {/* Avatar avec initiales */}
                <div className={`h-9 w-9 bg-gradient-to-r ${colors.avatar} rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg group-hover:shadow-xl transition-shadow duration-200 relative`}>
                  {getInitials(adminName)}
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800"></span>
                </div>
                
                {/* Nom et rôle */}
                <div className="hidden lg:block text-left">
                  <p className={`text-sm font-medium ${colors.text}`}>
                    {adminName.split(' ')[0]}
                  </p>
                  <p className={`text-xs ${colors.muted}`}>Super Admin</p>
                </div>
                
                <ChevronDownIcon 
                  className={`h-5 w-5 ${colors.muted} transition-transform duration-200 ${
                    isProfileOpen ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className={`absolute right-0 mt-2 w-64 ${colors.dropdown} rounded-xl shadow-2xl border ${colors.border} py-2 z-50 backdrop-blur-sm bg-opacity-95`}>
                  <div className="px-4 py-3 border-b border-gray-700">
                    <div className="flex items-center">
                      <div className={`h-10 w-10 bg-gradient-to-r ${colors.avatar} rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3`}>
                        {getInitials(adminName)}
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${colors.text}`}>{adminName}</p>
                        <p className={`text-xs ${colors.muted}`}>admin@store.com</p>
                        <div className="flex items-center mt-1">
                          <span className="text-xs bg-blue-900 text-blue-300 px-2 py-0.5 rounded-full">Pro Plan</span>
                          <span className="ml-2 text-xs bg-green-900 text-green-300 px-2 py-0.5 rounded-full flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1"></span>
                            En ligne
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="py-2">
                    <a
                      href="/admin/profile"
                      className={`flex items-center px-4 py-2 text-sm ${colors.muted} ${colors.dropdownHover} hover:text-white transition duration-150 group`}
                    >
                      <UserIcon className="h-4 w-4 mr-3 text-gray-400 group-hover:text-blue-400" />
                      <span>Mon Profil</span>
                      <span className="ml-auto text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">Pro</span>
                    </a>
                    
                    <a
                      href="/admin/analytics"
                      className={`flex items-center px-4 py-2 text-sm ${colors.muted} ${colors.dropdownHover} hover:text-white transition duration-150 group`}
                    >
                      <ChartBarIcon className="h-4 w-4 mr-3 text-gray-400 group-hover:text-green-400" />
                      Analytics
                    </a>
                    
                    <a
                      href="/admin/settings"
                      className={`flex items-center px-4 py-2 text-sm ${colors.muted} ${colors.dropdownHover} hover:text-white transition duration-150 group`}
                    >
                      <CogIcon className="h-4 w-4 mr-3 text-gray-400 group-hover:text-purple-400" />
                      Paramètres
                    </a>
                  </div>
                  
                  <div className="px-4 py-2 border-t border-gray-700">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-400">Stockage</span>
                      <span className="text-xs font-medium text-white">65%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-green-400 to-blue-500 h-1.5 rounded-full" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-700 pt-2">
                    <button
                      onClick={() => {
                        console.log('Déconnexion');
                        setIsProfileOpen(false);
                      }}
                      className={`flex items-center w-full px-4 py-2 text-sm text-red-400 ${colors.dropdownHover} hover:text-red-300 transition duration-150 group`}
                    >
                      <LogoutIcon className="h-4 w-4 mr-3" />
                      Déconnexion
                      <span className="ml-auto text-xs text-gray-500">⌘Q</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}