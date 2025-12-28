import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Shield,
  Truck,
  Headphones,
  Heart,
  ShoppingBag,
  Send
} from 'lucide-react';

export default function FooterApp() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, label: "Facebook", url: "#" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", url: "#" },
    { icon: <Instagram className="h-5 w-5" />, label: "Instagram", url: "#" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", url: "#" },
    { icon: <Youtube className="h-5 w-5" />, label: "YouTube", url: "#" },
  ];

  const quickLinks = [
    { name: "À propos de nous", path: "/about" },
    { name: "Nos services", path: "/services" },
    { name: "Contactez-nous", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
  ];

  const customerService = [
    { name: "Centre d'aide", path: "/help" },
    { name: "Suivi de commande", path: "/track-order" },
    { name: "Livraison", path: "/shipping" },
    { name: "Retours & Échanges", path: "/returns" },
    { name: "Guides d'achat", path: "/guides" },
  ];

  const legalLinks = [
    { name: "Politique de confidentialité", path: "/privacy" },
    { name: "Conditions d'utilisation", path: "/terms" },
    { name: "Politique de cookies", path: "/cookies" },
    { name: "Mentions légales", path: "/legal" },
  ];

  const features = [
    {
      icon: <Truck className="h-8 w-8 text-blue-600" />,
      title: "Livraison Rapide",
      description: "Livraison en 24-48h"
    },
    {
      icon: <CreditCard className="h-8 w-8 text-blue-600" />,
      title: "Paiement Sécurisé",
      description: "100% sécurisé"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Garantie Satisfait",
      description: "30 jours de retour"
    },
    {
      icon: <Headphones className="h-8 w-8 text-blue-600" />,
      title: "Support 24/7",
      description: "Assistance dédiée"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Bande supérieure avec features */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-gray-700 p-3 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contenu principal du footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1: À propos */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <ShoppingBag className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">Shop<span className="text-blue-500">Now</span></span>
            </div>
            <p className="text-gray-300 mb-6">
              Votre destination shopping en ligne préférée. Nous offrons les meilleurs produits avec qualité garantie et service client exceptionnel.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2: Liens rapides */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700">Liens Rapides</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Service client */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700">Service Client</h3>
            <ul className="space-y-3">
              {customerService.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4: Newsletter et contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700">Restez Informé</h3>
            <p className="text-gray-300 mb-4">
              Abonnez-vous à notre newsletter pour recevoir les dernières offres et nouveautés.
            </p>
            
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg transition-colors duration-300 flex items-center">
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <span>contact@shopnow.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-5 w-5 mr-3 text-blue-400 mt-1" />
                <span>123 Avenue des Champs-Élysées<br />75008 Paris, France</span>
              </div>
            </div>
          </div>
        </div>

        {/* Moyens de paiement */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-semibold mb-4 text-center">Moyens de Paiement Acceptés</h4>
          <div className="flex justify-center space-x-6">
            {['Visa', 'MasterCard', 'PayPal', 'Apple Pay', 'Google Pay'].map((method, index) => (
              <div key={index} className="bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <span className="font-medium">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer inférieur */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">
                &copy; {currentYear} ShopNow. Tous droits réservés.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center space-x-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center text-gray-400">
              <Heart className="h-4 w-4 mr-2 text-red-500 animate-pulse" />
              <span>Construit avec passion pour vos achats en ligne</span>
            </div>
          </div>
          
          {/* Mentions */}
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              ShopNow est une plateforme e-commerce fictive créée à des fins démonstratives.
              Les images et produits sont à titre illustratif.
            </p>
          </div>
        </div>
      </div>

      {/* Bouton retour en haut */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Retour en haut"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}