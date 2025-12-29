import React, { useState } from 'react';
import NavBarapp from '../Components/NavBarapp';
import FooterApp from '../Components/FooterApp';
import {
  ShoppingBag,
  Star,
  Search,
  Truck,
  Shield,
  RefreshCw,
  Headphones,
  ChevronRight,
  Heart,
  Eye,
  ShoppingCart,
  Store as StoreIcon,
  Award,
  TrendingUp,
  Package,
  Zap,
  Sparkles,
  Clock,
  CheckCircle,
  Gift,
  Percent,
  Tag,
  CreditCard,
  Users,
  MapPin,
  ArrowRight
} from 'lucide-react';

export default function PageInitiale() {
  const [viewMode, setViewMode] = useState('grid');
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Données des produits
  const products = [
    {
      id: 1,
      name: "iPhone 14 Pro Max - 512 Go",
      price: 1599.99,
      originalPrice: 1699.99,
      rating: 4.9,
      reviews: 428,
      image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=600&h=600&fit=crop",
      category: "Électronique",
      featured: true,
      badge: "NOUVEAU",
      description: "Smartphone premium avec Dynamic Island et caméra 48MP",
      store: "Apple Premium",
      storeRating: 4.8,
      deliveryTime: "Livraison 24h",
      discount: 6,
      tags: ["Apple", "Premium", "5G", "Pro"]
    },
    {
      id: 2,
      name: "MacBook Pro M3 Max - 16\"",
      price: 3499.99,
      rating: 4.8,
      reviews: 312,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=600&fit=crop",
      category: "Informatique",
      featured: true,
      badge: "TOP VENTE",
      description: "Performance extrême pour les professionnels créatifs",
      store: "TechElite",
      storeRating: 4.9,
      deliveryTime: "2-3 jours",
      tags: ["Apple", "Pro", "Création", "Performance"]
    },
    {
      id: 3,
      name: "Sony PlayStation 5 Pro",
      price: 699.99,
      originalPrice: 749.99,
      rating: 4.7,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=600&fit=crop",
      category: "Gaming",
      featured: true,
      badge: "ÉDITION LIMITÉE",
      description: "Console nouvelle génération 4K 120fps",
      store: "GameUniverse",
      storeRating: 4.7,
      deliveryTime: "3-5 jours",
      discount: 7,
      tags: ["Sony", "Gaming", "4K", "Console"]
    },
    {
      id: 4,
      name: "Nike Air Jordan 1 Retro",
      price: 179.99,
      originalPrice: 219.99,
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      category: "Mode",
      featured: true,
      badge: "PROMOTION",
      description: "Sneakers iconiques collection limitée",
      store: "SneakerHeads",
      storeRating: 4.5,
      deliveryTime: "4-6 jours",
      discount: 18,
      tags: ["Nike", "Sneakers", "Limited", "Sport"]
    },
    {
      id: 5,
      name: "Canon EOS R5 Mark II",
      price: 4299.99,
      rating: 4.9,
      reviews: 94,
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&h=600&fit=crop",
      category: "Photo",
      featured: true,
      badge: "PROFESSIONNEL",
      description: "Caméra plein format 45MP 8K video",
      store: "PhotoPro",
      storeRating: 4.8,
      deliveryTime: "1-2 jours",
      tags: ["Canon", "Photo", "8K", "Pro"]
    },
    {
      id: 6,
      name: "Samsung 85\" QLED 8K TV",
      price: 5499.99,
      originalPrice: 6499.99,
      rating: 4.7,
      reviews: 123,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop",
      category: "TV & Son",
      featured: true,
      badge: "MEILLEUR PRIX",
      description: "Téléviseur QLED 8K avec IA Quantum Processor",
      store: "ElectroWorld",
      storeRating: 4.6,
      deliveryTime: "5-7 jours",
      discount: 15,
      tags: ["Samsung", "TV", "8K", "QLED"]
    },
    {
      id: 7,
      name: "Dyson V15 Detect Absolute",
      price: 799.99,
      rating: 4.8,
      reviews: 267,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
      category: "Maison",
      featured: false,
      badge: "INNOVATION",
      description: "Aspirateur sans fil avec détection laser",
      store: "HomeTech",
      storeRating: 4.9,
      deliveryTime: "2-3 jours",
      tags: ["Dyson", "Maison", "Sans-fil", "Tech"]
    },
    {
      id: 8,
      name: "Rolex Submariner Date",
      price: 12999.99,
      rating: 5.0,
      reviews: 45,
      image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=600&h=600&fit=crop",
      category: "Luxe",
      featured: true,
      badge: "ÉLITE",
      description: "Montre automatique chronomètre certifié",
      store: "LuxeTime",
      storeRating: 5.0,
      deliveryTime: "Sur commande",
      tags: ["Rolex", "Luxe", "Automatique", "Premium"]
    }
  ];

  // Catégories
  const categories = [
    { id: 'all', name: 'Tous', icon: ShoppingBag, count: 48 },
    { id: 'electronics', name: 'Électronique', icon: Zap, count: 12 },
    { id: 'computers', name: 'Informatique', icon: Package, count: 8 },
    { id: 'fashion', name: 'Mode', icon: Award, count: 15 },
    { id: 'home', name: 'Maison', icon: StoreIcon, count: 7 },
    { id: 'gaming', name: 'Gaming', icon: TrendingUp, count: 6 }
  ];

  // Services
  const services = [
    {
      icon: Truck,
      title: 'Livraison Rapide',
      description: 'Livraison sous 24-48h',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Paiement Sécurisé',
      description: 'Transactions 100% sécurisées',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: RefreshCw,
      title: 'Retours Faciles',
      description: '30 jours pour changer d\'avis',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: Headphones,
      title: 'Support 24/7',
      description: 'Assistance client dédiée',
      color: 'from-violet-500 to-purple-500'
    }
  ];

  // Render stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < Math.floor(rating) 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  // Composant pour l'icône Grid
  const GridIcon = () => (
    <div className="h-5 w-5 grid grid-cols-2 gap-1">
      {[...Array(4)].map((_, i) => (
        <div key={i} className={`rounded-sm ${viewMode === 'grid' ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
      ))}
    </div>
  );

  // Composant pour l'icône List
  const ListIcon = () => (
    <div className="h-5 w-5 flex flex-col justify-between">
      {[...Array(3)].map((_, i) => (
        <div key={i} className={`h-0.5 w-full ${viewMode === 'list' ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
      ))}
    </div>
  );

  // Fonction pour obtenir la classe du badge
  const getBadgeClass = (badge) => {
    switch (badge) {
      case 'NOUVEAU':
        return 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white';
      case 'TOP VENTE':
        return 'bg-gradient-to-r from-green-600 to-emerald-500 text-white';
      case 'PROMOTION':
        return 'bg-gradient-to-r from-red-500 to-orange-500 text-white';
      case 'PROFESSIONNEL':
        return 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white';
      case 'MEILLEUR PRIX':
        return 'bg-gradient-to-r from-amber-500 to-yellow-500 text-white';
      case 'ÉLITE':
        return 'bg-gradient-to-r from-gray-800 to-gray-900 text-white';
      case 'INNOVATION':
        return 'bg-gradient-to-r from-violet-500 to-purple-500 text-white';
      case 'ÉDITION LIMITÉE':
        return 'bg-gradient-to-r from-pink-500 to-rose-500 text-white';
      default:
        return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
    }
  };

  // Fonction pour rendre une carte produit
  const renderProductCard = (product) => (
    <div
      key={product.id}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 hover:border-blue-300"
      onMouseEnter={() => setHoveredProduct(product.id)}
      onMouseLeave={() => setHoveredProduct(null)}
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className={`px-2 py-1 rounded text-xs font-bold ${getBadgeClass(product.badge)}`}>
              {product.badge}
            </span>
          </div>
        )}

        {/* Discount Badge */}
        {product.discount && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-1 rounded text-sm font-bold">
            -{product.discount}%
          </div>
        )}

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-sm">
          <Heart className="h-4 w-4 text-gray-600 hover:text-red-500 transition-colors" />
        </button>

        {/* Quick Actions */}
        <div className={`absolute bottom-3 left-0 right-0 flex justify-center space-x-2 transition-all duration-300 ${
          hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center shadow-md">
            <Eye className="h-4 w-4 mr-2" />
            Voir
          </button>
          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Ajouter
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        {/* Category */}
        <div className="mb-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 h-12">
          {product.name}
        </h3>

        {/* Rating & Store */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className="flex">
              {renderStars(product.rating)}
            </div>
            <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <StoreIcon className="h-3.5 w-3.5 mr-1" />
            <span className="truncate max-w-[80px]">{product.store}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-lg font-bold text-gray-900">
              €{product.price.toFixed(2)}
            </div>
            {product.originalPrice && (
              <div className="text-sm text-gray-400 line-through">
                €{product.originalPrice.toFixed(2)}
              </div>
            )}
          </div>
          
          {/* Delivery Info */}
          <div className="flex items-center text-xs text-gray-600">
            <Truck className="h-3.5 w-3.5 mr-1 text-green-500" />
            <span>{product.deliveryTime}</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Fonction pour rendre la vue liste
  const renderListView = (product) => (
    <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200 hover:border-blue-300 p-5">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="w-full md:w-40 h-40 rounded-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex-shrink-0 mb-4 md:mb-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-3"
          />
        </div>
        
        {/* Product Details */}
        <div className="md:ml-6 flex-1">
          <div className="flex flex-col md:flex-row md:items-start justify-between">
            <div className="flex-1">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {product.category}
                </span>
                {product.badge && (
                  <span className={`text-xs font-bold px-2 py-1 rounded ${getBadgeClass(product.badge)}`}>
                    {product.badge}
                  </span>
                )}
                {product.discount && (
                  <span className="text-xs font-bold text-white bg-gradient-to-r from-red-500 to-orange-500 px-2 py-1 rounded">
                    -{product.discount}%
                  </span>
                )}
              </div>
              
              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              
              {/* Rating & Store */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="flex items-center">
                  <div className="flex">
                    {renderStars(product.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">({product.reviews} avis)</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <StoreIcon className="h-3.5 w-3.5 mr-1" />
                  <span>{product.store}</span>
                  <div className="ml-2 flex items-center text-yellow-500">
                    <Star className="h-3 w-3 fill-current" />
                    <span className="ml-1 text-xs">{product.storeRating}</span>
                  </div>
                </div>
              </div>
              
              {/* Info */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <Truck className="h-3.5 w-3.5 mr-1 text-green-500" />
                  <span>{product.deliveryTime}</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-3.5 w-3.5 mr-1 text-blue-500" />
                  <span>Garantie 2 ans</span>
                </div>
              </div>
            </div>
            
            {/* Price & Actions */}
            <div className="mt-4 md:mt-0 md:text-right md:ml-6">
              <div className="mb-4">
                <div className="text-xl font-bold text-gray-900">
                  €{product.price.toFixed(2)}
                </div>
                {product.originalPrice && (
                  <div className="text-sm text-gray-400 line-through">
                    €{product.originalPrice.toFixed(2)}
                  </div>
                )}
              </div>
              
              <div className="flex space-x-2">
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center">
                  <Eye className="h-4 w-4" />
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center">
                  <ShoppingCart className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <NavBarapp />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        {/* Pattern d'arrière-plan */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full text-sm font-medium text-blue-400 mb-6 border border-blue-500/20">
              <Sparkles className="h-4 w-4 mr-2" />
              NOUVELLE COLLECTION 2024
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Des produits <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">exceptionnels</span> à portée de clic
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Découvrez notre sélection premium avec livraison rapide et service client 24/7.
            </p>
            
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Rechercher des produits, marques ou catégories..."
                  className="w-full pl-12 pr-36 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                  Rechercher
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { label: "Produits", value: "10K+", icon: Package },
                { label: "Boutiques", value: "500+", icon: StoreIcon },
                { label: "Clients", value: "95%", icon: Users },
                { label: "Livraisons", value: "2K+", icon: Truck }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-white mb-1 flex items-center">
                    <stat.icon className="h-5 w-5 mr-2 text-blue-400" />
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 p-6 group hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Categories */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Catégories populaires</h2>
              <p className="text-gray-600 mt-2">Explorez nos différentes collections</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative overflow-hidden rounded-lg p-4 text-center transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2 ${
                  activeCategory === category.id
                    ? 'bg-white/20'
                    : 'bg-gradient-to-br from-blue-50 to-cyan-50'
                }`}>
                  <category.icon className={`h-5 w-5 ${
                    activeCategory === category.id ? 'text-white' : 'text-blue-600'
                  }`} />
                </div>
                <div className="font-medium text-sm mb-1">{category.name}</div>
                <div className={`text-xs ${
                  activeCategory === category.id ? 'text-blue-200' : 'text-gray-500'
                }`}>
                  {category.count} produits
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Produits en vedette</h2>
              <p className="text-gray-600 mt-2">Nos meilleures ventes et recommandations</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white rounded-lg border border-gray-200 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <GridIcon />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <ListIcon />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => renderProductCard(product))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-4">
              {products.map((product) => renderListView(product))}
            </div>
          )}

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 group">
              Voir tous les produits
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Promo Banner */}
        <div className="mb-16 rounded-xl overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-cyan-900">
          <div className="px-6 md:px-8 py-10 md:py-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Économisez jusqu'à 50% sur la collection d'hiver
              </h3>
              <p className="text-blue-200 mb-8">
                Profitez de réductions exceptionnelles sur notre sélection de produits premium. Offre limitée dans le temps.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300">
                  Découvrir les offres
                </button>
                <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors duration-300">
                  Voir les nouveautés
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="rounded-xl overflow-hidden bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm">
          <div className="px-6 md:px-8 py-10 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 flex items-center justify-center mx-auto mb-6">
                <Gift className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Recevez nos offres exclusives
              </h3>
              <p className="text-gray-600 mb-6">
                Inscrivez-vous à notre newsletter pour recevoir en avant-première nos promotions et nouveautés.
              </p>
              <div className="max-w-md mx-auto flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-l-none sm:rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="mt-2 sm:mt-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-r-none sm:rounded-r-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                  S'inscrire
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                En vous inscrivant, vous acceptez notre politique de confidentialité.
              </p>
            </div>
          </div>
        </div>
      </main>

      <FooterApp />
    </div>
  );
}