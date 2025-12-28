import React, { useState, useEffect } from "react";
import {
  Mic,
  Camera,
  ArrowRight,
  Star,
  ShoppingCart,
  Search,
  X,
  Filter,
  TrendingUp,
  Sparkles,
  Zap,
  Package,
  Clock,
  ChevronRight,
  AlertCircle,
  Tag,
  Heart,
  Eye,
  Grid,
  List,
  SortDesc,
  TrendingDown,
  Shield,
  Truck,
  ThumbsUp,
  Users,
  BarChart3,
  Grid3x3,
  LayoutGrid,
  LayoutList,
  ExternalLink,
  Share2,
  ChevronLeft,
  ChevronDown,
  MapPin,
  Store as StoreIcon
} from "lucide-react";
import NavBarapp from "../Components/NavBarapp";
import FooterApp from "../Components/FooterApp";
import { SearchStore } from "../StateStore/SearchStore";

export default function HomPage() {
  /* ===================== STATES ===================== */
  const { Datasearch, serachImage, search_Text } = SearchStore();
  const [searchText, setSearchText] = useState("");
  const [searchMode, setSearchMode] = useState("text");
  const [imageFile, setImageFile] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("relevance");
  const [isSearching, setIsSearching] = useState(false);

  /* ===================== PRODUITS STATIQUES ===================== */
  const staticProducts = [
    {
      id: 1,
      name: "iPhone 14 Pro - 256 Go",
      price: 1299.99,
      rating: 4.9,
      reviews: 128,
      image_url: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?w=400&h=400&fit=crop",
      category: "Électronique",
      featured: true,
      badge: "Nouveau",
      description: "Smartphone Apple avec écran Super Retina XDR, caméra 48MP et puce A16 Bionic. Conçu pour offrir des performances exceptionnelles et une expérience utilisateur inégalée.",
      delivery: "Livraison gratuite",
      stock: "En stock",
      tags: ["Apple", "Premium", "5G", "Smartphone"],
      store: "Apple Store",
      store_rating: 4.8,
      delivery_time: "2-3 jours",
      return_policy: "30 jours",
      specifications: {
        "Processeur": "A16 Bionic",
        "Mémoire": "256 Go",
        "Écran": "6.1\" Super Retina XDR",
        "Caméra": "48MP + 12MP + 12MP",
        "Batterie": "Jusqu'à 23h"
      }
    },
    {
      id: 2,
      name: "AirPods Pro (2ᵉ génération)",
      price: 279.99,
      rating: 4.7,
      reviews: 89,
      image_url: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=400&h=400&fit=crop",
      category: "Audio",
      featured: true,
      badge: "Best Seller",
      description: "Écouteurs sans fil avec réduction de bruit active et charge MagSafe. Expérience audio immersive avec spatial audio et adaptabilité.",
      delivery: "Livraison express",
      stock: "En stock",
      tags: ["Apple", "Audio", "Sans fil", "Noise Cancelling"],
      store: "AudioTech",
      store_rating: 4.6,
      delivery_time: "24h",
      return_policy: "30 jours",
      specifications: {
        "Autonomie": "6h (avec ANC)",
        "Charge": "MagSafe",
        "Connectivité": "Bluetooth 5.3",
        "Poids": "5.4g par écouteur",
        "Résistance": "IPX4"
      }
    },
    {
      id: 3,
      name: "MacBook Air M2 - 13\"",
      price: 1499.99,
      rating: 4.8,
      reviews: 203,
      image_url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      category: "Informatique",
      featured: true,
      badge: "Recommandé",
      description: "Ordinateur portable ultra-fin avec processeur Apple M2 et écran Retina. Parfait pour la productivité et la créativité.",
      delivery: "Livraison 24h",
      stock: "Limité",
      tags: ["Apple", "Portable", "Performance", "M2"],
      store: "TechStore",
      store_rating: 4.9,
      delivery_time: "1-2 jours",
      return_policy: "14 jours",
      specifications: {
        "Processeur": "Apple M2",
        "RAM": "8 Go",
        "Stockage": "256 Go SSD",
        "Écran": "13.6\" Retina",
        "Poids": "1.24 kg"
      }
    },
    {
      id: 4,
      name: "PlayStation 5 - Edition Standard",
      price: 549.99,
      rating: 4.6,
      reviews: 456,
      image_url: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
      category: "Jeux",
      featured: false,
      badge: "Populaire",
      description: "Console de jeux nouvelle génération avec lecteur Blu-ray Ultra HD. Expérience de jeu immersive en 4K 120fps.",
      delivery: "Livraison gratuite",
      stock: "En stock",
      tags: ["Sony", "Jeux", "4K", "Gaming"],
      store: "GameWorld",
      store_rating: 4.7,
      delivery_time: "3-5 jours",
      return_policy: "30 jours",
      specifications: {
        "Processeur": "AMD Zen 2",
        "GPU": "AMD RDNA 2",
        "Mémoire": "16 Go GDDR6",
        "Stockage": "825 Go SSD",
        "Sortie": "4K 120Hz"
      }
    }
  ];

  /* ===================== MODES ===================== */
  const MODE_SEARCH = {
    TEXT: "text",
    IMAGE: "image",
    VOICE: "voice",
  };

  /* ===================== FILTERS ===================== */
  const filters = [
    { id: "all", label: "Tous", icon: Grid3x3 },
    { id: "featured", label: "Recommandés", icon: Sparkles },
    { id: "trending", label: "Tendances", icon: TrendingUp },
    { id: "new", label: "Nouveautés", icon: Tag },
    { id: "fast", label: "Livraison rapide", icon: Zap },
  ];

  const sortOptions = [
    { id: "relevance", label: "Pertinence" },
    { id: "price_asc", label: "Prix croissant" },
    { id: "price_desc", label: "Prix décroissant" },
    { id: "rating", label: "Meilleures notes" },
    { id: "newest", label: "Plus récents" },
  ];

  /* ===================== SEARCH HANDLERS ===================== */
  const handleTextSearch = async (text) => {
    if (!text.trim()) return;
    setIsLoading(true);
    setIsSearching(true);
    try {
      await search_Text(text);
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  const handleImageSearch = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";

    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setIsLoading(true);
        setIsSearching(true);
        setSearchMode(MODE_SEARCH.IMAGE);
        setImageFile(file);
        serachImage(file);
        setTimeout(() => setIsLoading(false), 500);
      }
    };
    input.click();
  };

  const startVoiceSearch = () => {
    setSearchMode(MODE_SEARCH.VOICE);
    setIsListening(true);

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "fr-FR";

    recognition.onresult = (e) => {
      const text = e.results[0][0].transcript;
      setSearchText(text);
      handleTextSearch(text);
      setIsListening(false);
    };

    recognition.onerror = () => setIsListening(false);
    recognition.start();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchText.trim() && !imageFile) return;
    
    setIsSearching(true);
    switch (searchMode) {
      case MODE_SEARCH.IMAGE:
        if (imageFile) {
          setIsLoading(true);
          serachImage(imageFile);
          setTimeout(() => setIsLoading(false), 500);
        }
        break;
      case MODE_SEARCH.TEXT:
      case MODE_SEARCH.VOICE:
        handleTextSearch(searchText);
        break;
      default:
        break;
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowProductModal(true);
  };

  const clearSearch = () => {
    setSearchText("");
    setIsSearching(false);
  };

  /* ===================== LOADER COMPONENT ===================== */
  const LoadingSpinner = () => (
    <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative inline-block">
          <div className="w-16 h-16 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="mt-4 text-gray-700 font-medium">Recherche en cours...</p>
        <p className="text-sm text-gray-500">Analyse de nos catalogues</p>
      </div>
    </div>
  );

  /* ===================== SEARCH RESULTS MODAL ===================== */
  const SearchResultsModal = () => {
    if (!isSearching || Datasearch.length === 0) return null;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
        <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
          {/* Modal Header */}
          <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Résultats pour "{searchText}"
                </h2>
                <p className="text-gray-600 mt-1">
                  {Datasearch.length} produit{Datasearch.length > 1 ? "s" : ""} trouvé{Datasearch.length > 1 ? "s" : ""}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="text-gray-500 hover:text-gray-700 p-2">
                  <Share2 className="h-5 w-5" />
                </button>
                <button
                  onClick={clearSearch}
                  className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <X className="h-5 w-5 mr-1" />
                  Fermer
                </button>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="p-6">
              {/* Filters Bar */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                  >
                    <LayoutGrid className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg ${viewMode === "list" ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                  >
                    <LayoutList className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="flex items-center space-x-4">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results Grid */}
              {viewMode === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Datasearch.map((product, index) => (
                    <div
                      key={index}
                      onClick={() => handleProductClick(product)}
                      className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                    >
                      <div className="relative h-48 bg-gray-100 overflow-hidden">
                        <img
                          src={`http://localhost:8000${product.image_url}`}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3">
                          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                            <Heart className="h-4 w-4 text-gray-700" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                            {product.category || "Produit"}
                          </span>
                          <div className="flex items-center text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-3 w-3 ${i < (product.rating || 4)
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                  }`}
                              />
                            ))}
                          </div>
                        </div>
                        
                        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-lg font-bold text-blue-600">
                            {product.price} €
                          </div>
                          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                            Voir détails
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {Datasearch.map((product, index) => (
                    <div
                      key={index}
                      onClick={() => handleProductClick(product)}
                      className="group flex items-center bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg p-4 cursor-pointer transition-all duration-300"
                    >
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                          src={`http://localhost:8000${product.image_url}`}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      <div className="ml-6 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">
                              {product.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                              {product.description || "Description du produit"}
                            </p>
                            <div className="flex items-center text-sm text-gray-500">
                              <StoreIcon className="h-4 w-4 mr-1" />
                              <span>{product.store || "Boutique"}</span>
                            </div>
                          </div>
                          
                          <div className="text-right ml-4">
                            <div className="text-xl font-bold text-blue-600">
                              {product.price} €
                            </div>
                            <button className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                              <Eye className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* No Results */}
              {Datasearch.length === 0 && (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Aucun résultat trouvé
                  </h3>
                  <p className="text-gray-500">
                    Essayez d'autres mots-clés ou modifiez vos filtres
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  /* ===================== PRODUCT DETAIL MODAL ===================== */
  const ProductDetailModal = () => {
    if (!selectedProduct) return null;

    const product = selectedProduct;

    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
        <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden">
          {/* Modal Header */}
          <div className="sticky top-0 z-10 bg-white border-b border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <button
                  onClick={() => setShowProductModal(false)}
                  className="mr-4 p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{product.name}</h2>
                  <div className="flex items-center mt-1">
                    <StoreIcon className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-gray-600">{product.store}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setShowProductModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Modal Content */}
          <div className="overflow-y-auto max-h-[calc(95vh-120px)]">
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Images */}
                <div>
                  <div className="rounded-xl overflow-hidden bg-gray-100 mb-4">
                    <img
                      src={product.image_url || `http://localhost:8000${product.image_url}`}
                      alt={product.name}
                      className="w-full h-auto max-h-96 object-contain"
                    />
                  </div>
                  
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="border-2 border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:border-blue-500 transition-colors">
                        <img
                          src={product.image_url || `http://localhost:8000${product.image_url}`}
                          alt={`${product.name} view ${i}`}
                          className="w-full h-20 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Details */}
                <div>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{product.price} €</h3>
                        {product.originalPrice && (
                          <div className="text-lg text-gray-400 line-through">
                            {product.originalPrice} €
                          </div>
                        )}
                      </div>
                      <div className="flex items-center">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${i < (product.rating || 4)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-600">({product.reviews || 0} avis)</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 mb-6">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        {product.stock || "En stock"}
                      </span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                        {product.delivery || "Livraison gratuite"}
                      </span>
                      {product.badge && (
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {product.description || "Description du produit non disponible."}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Caractéristiques</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <Package className="h-5 w-5 text-gray-400 mr-3" />
                        <div>
                          <div className="text-sm text-gray-600">Catégorie</div>
                          <div className="font-medium">{product.category || "Non spécifié"}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Truck className="h-5 w-5 text-gray-400 mr-3" />
                        <div>
                          <div className="text-sm text-gray-600">Livraison</div>
                          <div className="font-medium">{product.delivery_time || "2-3 jours"}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Shield className="h-5 w-5 text-gray-400 mr-3" />
                        <div>
                          <div className="text-sm text-gray-600">Retours</div>
                          <div className="font-medium">{product.return_policy || "30 jours"}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <StoreIcon className="h-5 w-5 text-gray-400 mr-3" />
                        <div>
                          <div className="text-sm text-gray-600">Boutique</div>
                          <div className="font-medium">{product.store || "Vendeur"}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center group">
                      <ShoppingCart className="mr-3" />
                      Ajouter au panier
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <button className="border-2 border-blue-600 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300">
                        Acheter maintenant
                      </button>
                      <button className="border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300">
                        Ajouter aux favoris
                      </button>
                    </div>
                  </div>

                  {/* Tags */}
                  {product.tags && product.tags.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Store Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold mr-4">
                      {product.store?.charAt(0) || "S"}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{product.store || "Boutique"}</h4>
                      <div className="flex items-center mt-1">
                        <div className="flex mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < (product.store_rating || 4)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                                }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">{product.store_rating || 4.5}/5</span>
                      </div>
                    </div>
                  </div>
                  <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                    Visiter la boutique
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  /* ===================== DATA TO DISPLAY ===================== */
  const products = Datasearch?.length > 0 ? Datasearch : staticProducts;
  const displayProducts = isSearching ? [] : staticProducts;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <NavBarapp />
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Découvrez notre <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Marketplace</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Trouvez les meilleurs produits parmi des milliers de boutiques
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 p-2">
            <div className="flex items-center">
              <div className="flex-1 px-4">
                <div className="relative">
                  <Search className="absolute left-0 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch(e)}
                    placeholder="Rechercher des produits, marques ou catégories..."
                    className="w-full pl-10 pr-4 py-4 text-lg border-0 focus:outline-none focus:ring-0 bg-transparent"
                  />
                </div>
              </div>

              <div className="flex items-center border-l border-gray-200 px-4">
                <button
                  onClick={handleImageSearch}
                  className="p-3 text-gray-600 hover:text-blue-600 transition-colors"
                  title="Recherche par image"
                >
                  <Camera className="h-5 w-5" />
                </button>
                
                <button
                  onClick={startVoiceSearch}
                  className={`p-3 ${isListening ? "text-red-500" : "text-gray-600 hover:text-blue-600"} transition-colors`}
                  title="Recherche vocale"
                >
                  <Mic className="h-5 w-5" />
                </button>
                
                <div className="w-px h-6 bg-gray-200 mx-2"></div>
                
                <button
                  onClick={handleSearch}
                  className="ml-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center"
                >
                  <Search className="h-5 w-5 mr-2" />
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section - Only visible when not searching */}
        {!isSearching && (
          <main className="pb-20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Produits populaires</h2>
                <p className="text-gray-600 mt-1">Découvrez nos meilleures ventes</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                >
                  <LayoutGrid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg ${viewMode === "list" ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
                >
                  <LayoutList className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayProducts.map((product, index) => (
                  <div
                    key={product.id || index}
                    onClick={() => handleProductClick(product)}
                    className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <div className="relative h-56 bg-gray-100 overflow-hidden">
                      <img
                        src={product.image_url}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {product.badge && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {product.badge}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-5">
                      <div className="mb-2">
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {product.category}
                        </span>
                      </div>
                      
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>

                      <div className="flex items-center mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < product.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                                }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-500">({product.reviews})</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-xl font-bold text-gray-900">
                          €{product.price.toFixed(2)}
                        </div>
                        <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                          Voir
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* List View */
              <div className="space-y-4">
                {displayProducts.map((product, index) => (
                  <div
                    key={product.id || index}
                    onClick={() => handleProductClick(product)}
                    className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg p-4 cursor-pointer transition-all duration-300"
                  >
                    <div className="flex">
                      <div className="w-32 h-32 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="ml-6 flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                                {product.category}
                              </span>
                              {product.badge && (
                                <span className="text-xs font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 px-2 py-1 rounded">
                                  {product.badge}
                                </span>
                              )}
                            </div>
                            
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                              {product.name}
                            </h3>
                            
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                              {product.description}
                            </p>
                            
                            <div className="flex items-center mb-4">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < product.rating
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-300"
                                      }`}
                                  />
                                ))}
                              </div>
                              <span className="ml-2 text-sm text-gray-500">({product.reviews} avis)</span>
                              <span className="ml-4 text-sm text-gray-500">• {product.store}</span>
                            </div>
                          </div>
                          
                          <div className="text-right ml-4">
                            <div className="text-2xl font-bold text-gray-900">
                              €{product.price.toFixed(2)}
                            </div>
                            <button className="mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                              Voir détails
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        )}
      </div>

      {/* Loading Overlay */}
      {isLoading && <LoadingSpinner />}

      {/* Search Results Modal */}
      <SearchResultsModal />

      {/* Product Detail Modal */}
      {showProductModal && <ProductDetailModal />}

      <FooterApp />
    </div>
  );
}