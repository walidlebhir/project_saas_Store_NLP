import React, { useState } from 'react';
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Store, 
  Smartphone,
  Facebook,
  AlertCircle,
  CheckCircle,
  Shield,
  Sparkles,
  ShoppingBag,
  BarChart3,
  CreditCard,
  Users,
  ChevronRight,
  Star,
  TrendingUp,
  Package,
  Settings,
  DollarSign,
  Truck,
  RefreshCw,
  Heart,
  Search,
  User,
  Bell,
  Home,
  Grid,
  ShoppingCart,
  Tag
} from 'lucide-react';
import NavBarapp from '../Components/NavBarapp';
import FooterApp from '../Components/FooterApp';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthStore } from '../StateStore/AuthStore';
import toast from 'react-hot-toast';

export default function LoginPage() {
    const Navigate = useNavigate(); 
    const {Login} = AuthStore() ; 
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const newErrors = {};
    if (!email) newErrors.email = "L'email est requis";
    if (!password) newErrors.password = "Le mot de passe est requis";
    
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setIsLoading(false);
        return;
    }

    const user_auth = Login(email , password) ; 
    if(user_auth){
        if(user_auth.role = "store_admin"){
            toast.success("Bien venue dans votre espace ") ; 
            Navigate("/dashbord/Admin/store");
        }
        else{
            Navigate("/espace/client") ; 
        }
    }else{
        console.log("Porblemme dans le retourn de user "+user_auth) ; 
    }
    
    
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
  };

  // Photos réelles d'e-commerce (remplacez par vos URLs)
  const productImages = [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop", // Chaussures
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w-400&h-300&fit-crop", // iPhone
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w-400&h-300&fit-crop", // Écouteurs
  ];

  const dashboardImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Dashboard
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop", // Analytics
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <NavBarapp />
      
      <main className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Login Form avec Background Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full translate-y-32 -translate-x-32"></div>
              
              <div className="relative bg-white/95 backdrop-blur-sm border border-gray-200 p-8 sm:p-10 lg:p-12">
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                        <Lock className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <div>
                      <span className="text-2xl font-bold text-gray-900">Connexion sécurisée</span>
                      <p className="text-sm text-gray-600 mt-1">Accédez à votre espace marchand</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mr-3">
                          <Mail className="h-4 w-4 text-blue-600" />
                        </div>
                        Adresse email professionnelle
                      </div>
                    </label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setErrors({...errors, email: null});
                        }}
                        className={`block w-full pl-10 pr-3 py-4 text-base border ${
                          errors.email 
                            ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                            : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                        } rounded-xl shadow-sm placeholder-gray-400 focus:outline-none transition duration-200 bg-white/50 backdrop-blur-sm`}
                        placeholder="votre@entreprise.com"
                      />
                    </div>
                    {errors.email && (
                      <div className="mt-2 flex items-center text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
                        <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                        {errors.email}
                      </div>
                    )}
                  </div>

                  {/* Password Field */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <label className="block text-sm font-semibold text-gray-700">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mr-3">
                            <Lock className="h-4 w-4 text-blue-600" />
                          </div>
                          Mot de passe
                        </div>
                      </label>
                      <Link 
                        to="/forgot-password" 
                        className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center"
                      >
                        <RefreshCw className="h-3 w-3 mr-1" />
                        Mot de passe oublié ?
                      </Link>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setErrors({...errors, password: null});
                        }}
                        className={`block w-full pl-10 pr-10 py-4 text-base border ${
                          errors.password 
                            ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                            : 'border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                        } rounded-xl shadow-sm placeholder-gray-400 focus:outline-none transition duration-200 bg-white/50 backdrop-blur-sm`}
                        placeholder="••••••••••••"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <div className="mt-2 flex items-center text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">
                        <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                        {errors.password}
                      </div>
                    )}
                    <div className="mt-2 flex items-center text-xs text-gray-500">
                      <Shield className="h-3 w-3 mr-1" />
                      Minimum 8 caractères avec chiffres et lettres
                    </div>
                  </div>

                  {/* Remember Me & Terms */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center group cursor-pointer">
                      <div className="relative">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                          rememberMe 
                            ? 'bg-blue-600 border-blue-600' 
                            : 'bg-white border-gray-300 group-hover:border-blue-400'
                        }`}>
                          {rememberMe && <CheckCircle className="h-3 w-3 text-white" />}
                        </div>
                      </div>
                      <span className="ml-3 text-sm text-gray-700">Se souvenir de moi</span>
                    </label>
                    
                    <div className="flex items-center text-xs text-gray-500">
                      <input type="checkbox" id="terms" className="mr-2" />
                      <label htmlFor="terms" className="cursor-pointer">
                        J'accepte les <Link to="/terms" className="text-blue-600 hover:underline">conditions</Link>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-base font-semibold text-white ${
                      isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-[0.98]'
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 group`}
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                        Connexion en cours...
                      </>
                    ) : (
                      <>
                        <span className="flex items-center">
                          <Lock className="h-5 w-5 mr-3" />
                          Se connecter à mon compte
                        </span>
                        <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  {/* Social Login */}
                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-center text-sm text-gray-600 mb-4">Ou connectez-vous avec</p>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => handleSocialLogin('google')}
                        className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-xl hover:border-gray-400 hover:shadow-sm transition-all duration-200 group"
                      >
                        <img 
                          src="https://www.google.com/favicon.ico" 
                          alt="Google" 
                          className="w-5 h-5 mr-3"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentNode.querySelector('.fallback').style.display = 'flex';
                          }}
                        />
                        <div className="fallback hidden items-center">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-xs">G</span>
                          </div>
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-gray-900">Google</span>
                      </button>
                      
                      <button
                        onClick={() => handleSocialLogin('facebook')}
                        className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-xl hover:border-blue-500 hover:shadow-sm transition-all duration-200 group"
                      >
                        <img 
                          src="https://www.facebook.com/favicon.ico" 
                          alt="Facebook" 
                          className="w-5 h-5 mr-3"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentNode.querySelector('.fallback').style.display = 'flex';
                          }}
                        />
                        <div className="fallback hidden items-center">
                          <Facebook className="w-5 h-5 text-blue-600 mr-3" />
                        </div>
                        <span className="text-gray-700 font-medium group-hover:text-blue-600">Facebook</span>
                      </button>
                    </div>
                  </div>
                </form>

                {/* Sign Up Link */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-center text-sm text-gray-600">
                    Nouveau sur notre plateforme ?{' '}
                    <Link 
                      to="/register" 
                      className="font-semibold text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center"
                    >
                      Créer un compte marchand
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Dashboard Live Preview avec Images Réelles */}
            <div className="space-y-8">
              {/* Main Dashboard Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center shadow-lg">
                          <Store className="h-5 w-5 text-white" />
                        </div>
                        <div className="ml-4">
                          <span className="text-white font-semibold">Boutique FashionShop</span>
                          <div className="text-xs text-gray-300 flex items-center">
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                            Connecté • Mode vendeur
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                          <Bell className="h-4 w-4 text-gray-300" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                          <Settings className="h-4 w-4 text-gray-300" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Navigation */}
                  <div className="px-6 py-3 bg-gray-50 border-b border-gray-200">
                    <div className="flex items-center space-x-4 overflow-x-auto">
                      <button className="flex items-center px-3 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium">
                        <Home className="h-4 w-4 mr-2" />
                        Tableau de bord
                      </button>
                      <button className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 text-sm font-medium transition-colors">
                        <ShoppingBag className="h-4 w-4 mr-2" />
                        Produits
                      </button>
                      <button className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 text-sm font-medium transition-colors">
                        <Package className="h-4 w-4 mr-2" />
                        Commandes
                      </button>
                      <button className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 text-sm font-medium transition-colors">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Ventes
                      </button>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-6">
                    {/* Stats Overview */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-2xl font-bold text-blue-800">€2,845</div>
                            <div className="text-sm text-blue-600 font-medium">Ventes aujourd'hui</div>
                          </div>
                          <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            <TrendingUp className="h-5 w-5 text-blue-600" />
                          </div>
                        </div>
                        <div className="mt-2 text-xs text-blue-700 flex items-center">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full mr-2">+12.5%</span>
                          vs hier
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-2xl font-bold text-green-800">42</div>
                            <div className="text-sm text-green-600 font-medium">Nouvelles commandes</div>
                          </div>
                          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                            <ShoppingBag className="h-5 w-5 text-green-600" />
                          </div>
                        </div>
                        <div className="mt-2 text-xs text-green-700">
                          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">En attente: 3</span>
                        </div>
                      </div>
                    </div>

                    {/* Recent Orders */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">Commandes récentes</h4>
                        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                          Voir tout →
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden">
                            <img 
                              src={productImages[0]} 
                              alt="Produit" 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = "https://via.placeholder.com/150";
                              }}
                            />
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-sm font-medium text-gray-900">#ORD-4231</div>
                                <div className="text-xs text-gray-500">Nike Air Max 270 • Client: Jean Dupont</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-bold text-gray-900">€149</div>
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  Payé
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                          <div className="flex-shrink-0 w-10 h-10 rounded-lg overflow-hidden">
                            <img 
                              src={productImages[1]} 
                              alt="Produit" 
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = "https://via.placeholder.com/150";
                              }}
                            />
                          </div>
                          <div className="ml-3 flex-1">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-sm font-medium text-gray-900">#ORD-4230</div>
                                <div className="text-xs text-gray-500">iPhone 14 Pro • Client: Marie Martin</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-bold text-gray-900">€1,299</div>
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                  En préparation
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-3 gap-3">
                      <button className="flex flex-col items-center justify-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors">
                        <Tag className="h-5 w-5 text-purple-600 mb-2" />
                        <span className="text-xs font-medium text-purple-800">Promotions</span>
                      </button>
                      <button className="flex flex-col items-center justify-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors">
                        <Truck className="h-5 w-5 text-orange-600 mb-2" />
                        <span className="text-xs font-medium text-orange-800">Livraison</span>
                      </button>
                      <button className="flex flex-col items-center justify-center p-3 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                        <BarChart3 className="h-5 w-5 text-cyan-600 mb-2" />
                        <span className="text-xs font-medium text-cyan-800">Rapports</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Platform Features */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Fonctionnalités Premium</h3>
                  <Sparkles className="h-5 w-5" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mb-2">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <div className="text-sm font-medium">Paiements</div>
                    <div className="text-xs opacity-80">20+ méthodes</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mb-2">
                      <Shield className="h-6 w-6" />
                    </div>
                    <div className="text-sm font-medium">Sécurité</div>
                    <div className="text-xs opacity-80">SSL 256-bit</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 mb-2">
                      <Smartphone className="h-6 w-6" />
                    </div>
                    <div className="text-sm font-medium">Mobile</div>
                    <div className="text-xs opacity-80">App iOS/Android</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section avec Photos Réelles */}
          <div className="mt-16 lg:mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Rejoignez 15,000+ marchands
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Découvrez pourquoi les entrepreneurs choisissent notre plateforme
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Marie Laurent",
                  role: "Fondatrice de Mode & Style",
                  content: "En 6 mois, mon chiffre d'affaires a augmenté de 300%. La plateforme est intuitive et le support exceptionnel.",
                  rating: 5,
                  image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
                  sales: "+300%"
                },
                {
                  name: "Thomas Dubois",
                  role: "PDG de TechGadget",
                  content: "La migration depuis Shopify a été transparente. Les outils d'analyse sont bien plus complets et les frais réduits.",
                  rating: 5,
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                  sales: "€50K/mois"
                },
                {
                  name: "Sophie Martin",
                  role: "Artiste & Créatrice",
                  content: "Je peux me concentrer sur ma création pendant que la plateforme gère tout le technique. Service client réactif 24/7.",
                  rating: 5,
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                  sales: "1000+ ventes"
                }
              ].map((testimonial, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl transform group-hover:scale-[1.02] transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                  <div className="relative bg-white rounded-2xl border border-gray-200 p-6 shadow-sm group-hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/150";
                        }}
                      />
                      <div className="ml-4">
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="mt-1 px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold inline-block">
                          {testimonial.sales}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 italic mb-6">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Store className="h-4 w-4 mr-2" />
                          Boutique certifiée
                        </div>
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="mt-16 lg:mt-24 relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop" 
                alt="Background" 
                className="w-full h-full object-cover opacity-20"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-600/90"></div>
            </div>
            
            <div className="relative p-8 md:p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-6">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                  Lancez votre boutique en ligne
                  <span className="block text-blue-200">en moins de 5 minutes</span>
                </h2>
                
                <p className="text-gray-200 mb-8">
                  Aucune compétence technique requise. Créez, gérez et développez 
                  votre business e-commerce avec nos outils professionnels.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/register"
                    className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                  >
                    <Store className="h-5 w-5 mr-3" />
                    Créer ma boutique gratuite
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  
                  <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                    Voir les démos
                  </button>
                </div>
                
                <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-white/80">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Aucun engagement</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>Support 24/7</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>14 jours gratuits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterApp />
    </div>
  );
}