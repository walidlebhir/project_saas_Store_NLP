import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Store, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  BarChart3,
  ArrowRight,
  Star,
  CheckCircle,
  ShoppingCart,
  Heart,
  Eye,
  Package,
  Truck,
  CreditCard,
  Globe,
  Smartphone,
  Headphones,
  Sparkles,
  Award,
  ThumbsUp,
  ChevronRight,
  Play,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Tag,
  TrendingDown,
  Timer,
  RefreshCw,
  Lock,
  BadgeCheck,
  ArrowUpRight
} from 'lucide-react';
import NavBarapp from '../Components/NavBarapp';
import FooterApp from '../Components/FooterApp';
import { Link } from 'react-router-dom';

export default function PageInitiale() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=900&fit=crop",
      title: "Lancez Votre Boutique En Ligne",
      subtitle: "Créez votre e-commerce professionnel en 5 minutes",
      buttonText: "Commencer Gratuitement",
      color: "from-emerald-600 to-teal-700"
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop",
      title: "Vendez dans le Monde Entier",
      subtitle: "Atteignez des millions de clients avec notre marketplace",
      buttonText: "Explorer le Marketplace",
      color: "from-violet-600 to-purple-700"
    },
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&h=900&fit=crop",
      title: "Outils Puissants pour Votre Business",
      subtitle: "Analytics, marketing automation et gestion simplifiée",
      buttonText: "Découvrir les Fonctionnalités",
      color: "from-orange-600 to-red-600"
    }
  ];

  const categories = [
    { 
      name: "Mode & Accessoires", 
      icon: "👕", 
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
      count: "12,450 produits",
      bgColor: "bg-pink-500"
    },
    { 
      name: "Électronique", 
      icon: "📱", 
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
      count: "8,920 produits",
      bgColor: "bg-blue-500"
    },
    { 
      name: "Maison & Déco", 
      icon: "🏠", 
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop",
      count: "7,650 produits",
      bgColor: "bg-amber-500"
    },
    { 
      name: "Beauté & Santé", 
      icon: "💄", 
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop",
      count: "5,430 produits",
      bgColor: "bg-rose-500"
    },
    { 
      name: "Sport & Loisirs", 
      icon: "⚽", 
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=300&fit=crop",
      count: "4,320 produits",
      bgColor: "bg-emerald-500"
    },
    { 
      name: "Jouets & Jeux", 
      icon: "🎮", 
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
      count: "3,210 produits",
      bgColor: "bg-indigo-500"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Nike Air Max 270 React",
      category: "Chaussures de Sport",
      price: 149.99,
      originalPrice: 199.99,
      discount: 25,
      rating: 4.8,
      reviews: 428,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      badge: "Best Seller",
      tags: ["Running", "Confort", "Nouveau"],
      stock: "En stock",
      delivery: "Livraison gratuite",
      storeRating: 4.7
    },
    {
      id: 2,
      name: "iPhone 14 Pro Max 256GB",
      category: "Smartphones Premium",
      price: 1299.99,
      originalPrice: 1399.99,
      discount: 7,
      rating: 4.9,
      reviews: 1203,
      image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=400&h=400&fit=crop",
      badge: "Nouveau",
      tags: ["Apple", "5G", "Camera Pro"],
      stock: "En stock",
      delivery: "Livraison express",
      storeRating: 4.9
    },
    {
      id: 3,
      name: "Samsung Galaxy Watch 6 Classic",
      category: "Montres Connectées",
      price: 329.99,
      originalPrice: 399.99,
      discount: 18,
      rating: 4.7,
      reviews: 567,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      badge: "Tendance",
      tags: ["Santé", "Sport", "Connecté"],
      stock: "Limité",
      delivery: "Livraison rapide",
      storeRating: 4.6
    },
    {
      id: 4,
      name: "Dyson V15 Detect Absolute",
      category: "Aspirateurs Intelligents",
      price: 749.99,
      originalPrice: 899.99,
      discount: 17,
      rating: 4.9,
      reviews: 289,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      badge: "Premium",
      tags: ["Technologie", "Maison", "Intelligent"],
      stock: "En stock",
      delivery: "Livraison gratuite",
      storeRating: 4.8
    }
  ];

  const stats = [
    { value: "15K+", label: "Boutiques Actives", icon: Store, color: "text-emerald-600", bgColor: "bg-emerald-50" },
    { value: "2M+", label: "Produits Vendus", icon: ShoppingBag, color: "text-blue-600", bgColor: "bg-blue-50" },
    { value: "€500M+", label: "Volume de Ventes", icon: TrendingUp, color: "text-violet-600", bgColor: "bg-violet-50" },
    { value: "95%", label: "Satisfaction Client", icon: ThumbsUp, color: "text-orange-600", bgColor: "bg-orange-50" }
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Mise en ligne instantanée",
      description: "Créez votre boutique en moins de 5 minutes, sans compétences techniques",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Sécurité maximale",
      description: "Paiements cryptés SSL 256-bit et protection des données",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analytics avancés",
      description: "Tableaux de bord en temps réel pour optimiser vos ventes",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Marketplace globale",
      description: "Vendez dans 50+ pays avec une gestion simplifiée",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Application mobile",
      description: "Gérez votre boutique depuis n'importe où",
      color: "from-rose-500 to-pink-500"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Support premium 24/7",
      description: "Notre équipe vous accompagne à chaque étape",
      color: "from-sky-500 to-cyan-500"
    }
  ];

  const testimonials = [
    {
      name: "Marie Laurent",
      role: "Fondatrice, BelleMode Paris",
      content: "En 6 mois, j'ai multiplié mes ventes par 5. La plateforme est intuitive et le support exceptionnel.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      sales: "+400% CA",
      store: "bellemode-paris",
      verified: true
    },
    {
      name: "Thomas Dubois",
      role: "PDG, TechGadget Pro",
      content: "La migration depuis Shopify a été transparente. Les outils d'analyse sont bien plus complets.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      sales: "€50K/mois",
      store: "techgadget-pro",
      verified: true
    },
    {
      name: "Sophie Martin",
      role: "Artiste & Créatrice",
      content: "Je peux me concentrer sur ma création pendant que la plateforme gère tout le technique. Parfait !",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      sales: "1,000+ ventes",
      store: "creations-ml",
      verified: true
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <NavBarapp />
      
      {/* Hero Slider - Style Amazon/Shopify */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="relative h-[85vh] min-h-[700px]">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800/95 to-gray-900"></div>
          
          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-full flex items-center">
              <div className="max-w-2xl text-white">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                  <BadgeCheck className="h-4 w-4 text-emerald-400 mr-2" />
                  <span className="text-sm font-medium">Plateforme E-commerce N°1 en France</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Votre Business
                  <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    En Ligne
                  </span>
                  <span className="block text-3xl md:text-4xl mt-6 text-gray-300">
                    Tout ce dont vous avez besoin pour réussir
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
                  Créez, gérez et développez votre boutique e-commerce avec nos outils professionnels.
                  Simple, puissant, efficace.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/register"
                    className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center"
                  >
                    <Store className="mr-3 h-5 w-5" />
                    Créer ma boutique gratuite
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                    <Play className="mr-3 h-5 w-5" />
                    Voir la démo
                  </button>
                </div>
                
                {/* Stats Mini */}
                <div className="flex items-center gap-6 mt-10">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />
                    <span className="text-gray-300">Aucune commission</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />
                    <span className="text-gray-300">14 jours gratuits</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-emerald-400 mr-2" />
                    <span className="text-gray-300">Support 24/7</span>
                  </div>
                </div>
              </div>
              
              {/* Hero Illustration */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 hidden lg:block">
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 shadow-2xl">
                    {/* Dashboard Preview */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                            <TrendingUp className="h-5 w-5 text-white" />
                          </div>
                          <div className="ml-3">
                            <div className="text-white font-semibold">+42% ventes</div>
                            <div className="text-gray-400 text-sm">Ce mois-ci</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                          <div className="text-2xl font-bold text-white">€2,845</div>
                          <div className="text-gray-400 text-sm">Ventes aujourd'hui</div>
                        </div>
                        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                          <div className="text-2xl font-bold text-white">1.2K</div>
                          <div className="text-gray-400 text-sm">Visiteurs</div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-4 border border-emerald-500/20">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <ShoppingBag className="h-4 w-4 text-emerald-400" />
                          </div>
                          <div className="ml-3">
                            <div className="text-white font-medium">3 nouvelles commandes</div>
                            <div className="text-emerald-400 text-sm">À traiter</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronRight className="h-6 w-6 text-gray-300 rotate-90" />
          </div>
        </div>
      </section>

      {/* Stats Bar - Style Professionnel */}
      <div className="relative z-10 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 lg:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${stat.bgColor} mb-3`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className={`text-2xl lg:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-gray-600 text-sm lg:text-base">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products - Style E-commerce Premium */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 lg:mb-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Produits <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Tendance</span>
              </h2>
              <p className="text-gray-600 mt-1">Les meilleures ventes du moment</p>
            </div>
            <Link 
              to="/products"
              className="hidden lg:flex items-center text-gray-700 hover:text-emerald-600 font-medium"
            >
              Voir tous les produits
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {featuredProducts.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Product Image */}
                <div className="relative h-48 lg:h-56 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x400";
                    }}
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 text-xs font-bold rounded ${
                        product.badge === "Best Seller" ? "bg-amber-500 text-white" :
                        product.badge === "Nouveau" ? "bg-emerald-500 text-white" :
                        product.badge === "Tendance" ? "bg-violet-500 text-white" :
                        "bg-blue-500 text-white"
                      }`}>
                        {product.badge}
                      </span>
                    </div>
                  )}
                  
                  {/* Discount */}
                  {product.discount && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-red-500 text-white text-sm font-bold rounded">
                        -{product.discount}%
                      </span>
                    </div>
                  )}
                  
                  {/* Quick Actions */}
                  <div className={`absolute inset-x-3 bottom-3 flex justify-center space-x-2 transition-all duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    <button className="bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105">
                      <ShoppingCart className="h-4 w-4 text-gray-700" />
                    </button>
                    <button className="bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105">
                      <Heart className="h-4 w-4 text-gray-700" />
                    </button>
                    <button className="bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105">
                      <Eye className="h-4 w-4 text-gray-700" />
                    </button>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-gray-500">{product.category}</span>
                  </div>
                  
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 h-12">
                    {product.name}
                  </h3>

                  {/* Rating & Store */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < Math.floor(product.rating)
                              ? "text-amber-400 fill-amber-400"
                              : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-xs text-gray-500">({product.reviews})</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Star className="h-3 w-3 text-amber-400 fill-amber-400 mr-1" />
                      {product.storeRating}
                    </div>
                  </div>
                  
                  {/* Price & Stock */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline">
                        <span className="text-lg lg:text-xl font-bold text-gray-900">
                          €{product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="ml-2 text-sm text-gray-400 line-through">
                            €{product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center mt-1">
                        <div className={`w-2 h-2 rounded-full mr-2 ${
                          product.stock === "En stock" ? "bg-emerald-500" : "bg-amber-500"
                        }`}></div>
                        <span className="text-xs text-gray-500">{product.stock}</span>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                      Ajouter
                    </button>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mt-3">
                    {product.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 lg:hidden">
            <Link 
              to="/products"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Voir tous les produits
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories - Style Moderne */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Explorez nos <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">catégories</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Des milliers de produits triés par catégorie
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/category/${category.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="text-2xl mr-3">{category.icon}</span>
                          <h3 className="text-lg lg:text-xl font-bold">{category.name}</h3>
                        </div>
                        <p className="text-gray-200 text-sm">{category.count}</p>
                      </div>
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features - Style Professionnel */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Pourquoi choisir <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">MarketPro</span> ?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Des outils professionnels conçus pour votre succès
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-xl border border-gray-200 p-6 hover:border-gray-300 hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} mb-4`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <span className="text-emerald-600 font-medium text-sm flex items-center hover:text-emerald-700 transition-colors cursor-pointer">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Style Épuré */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Ils nous font <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">confiance</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Les témoignages de nos marchands partenaires
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="relative bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-start mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                      onError={(e) => {
                        e.target.src = "https://via.placeholder.com/150";
                      }}
                    />
                    <div className="ml-4 flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-600">{testimonial.role}</div>
                        </div>
                        {testimonial.verified && (
                          <BadgeCheck className="h-5 w-5 text-emerald-500" />
                        )}
                      </div>
                      <div className="mt-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium inline-block">
                        {testimonial.sales}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <Store className="h-4 w-4 mr-2" />
                        <span className="font-medium">{testimonial.store}</span>
                      </div>
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final - Style Impactant */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            <div className="relative p-8 lg:p-12 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">
                Prêt à lancer votre business ?
              </h2>
              
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Rejoignez des milliers d'entrepreneurs qui font confiance à notre plateforme.
                Essai gratuit de 14 jours, aucun engagement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/register"
                  className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
                >
                  <Store className="mr-3 h-5 w-5" />
                  Créer un compte gratuit
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300">
                  Planifier une démo
                </button>
              </div>
              
              {/* Trust Badges */}
              <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-300">
                <div className="flex items-center">
                  <Lock className="h-4 w-4 mr-2 text-emerald-400" />
                  <span>Paiements 100% sécurisés</span>
                </div>
                <div className="flex items-center">
                  <Headphones className="h-4 w-4 mr-2 text-emerald-400" />
                  <span>Support 24/7</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="h-4 w-4 mr-2 text-emerald-400" />
                  <span>Aucune carte requise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterApp />
    </div>
  );
}