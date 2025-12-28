import React, { useState } from 'react';
import NavBarapp from '../Components/NavBarapp';
import FooterApp from '../Components/FooterApp';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    // Ici vous ajouterez la logique d'inscription
    alert('Inscription en cours...');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBarapp />
      
      <main className="flex-grow flex items-center justify-center p-4 md:p-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden">
            
            {/* Formulaire à gauche */}
            <div className="lg:w-1/2 p-8 md:p-12">
              <div className="max-w-md mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  Créez votre compte
                </h1>
                <p className="text-gray-600 mb-8">
                  Rejoignez notre communauté et découvrez toutes nos fonctionnalités
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Champ Full Name */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Nom complet
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Champ Email */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Adresse email
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Champ Password */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Mot de passe
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-200"
                        placeholder="••••••••"
                        minLength="6"
                      />
                    </div>
                  </div>

                  {/* Checkbox Conditions */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                      J'accepte les{' '}
                      <a href="/terms" className="text-blue-600 hover:text-blue-800 font-medium">
                        conditions d'utilisation
                      </a>
                    </label>
                  </div>

                  {/* Bouton d'inscription */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    S'inscrire gratuitement
                  </button>

                  {/* Lien connexion */}
                  <div className="text-center">
                    <p className="text-gray-600">
                      Déjà un compte?{' '}
                      <a href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                        Se connecter
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            {/* Image à droite */}
            <div className="lg:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-black opacity-10"></div>
              
              <div className="relative h-full p-8 md:p-12 flex flex-col justify-center text-white">
                <div className="max-w-md mx-auto">
                  <div className="mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm mb-6">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Store Application
                    </h2>
                    <p className="text-blue-100 text-lg">
                      Rejoignez notre plateforme de commerce en ligne et profitez d'une expérience d'achat exceptionnelle
                    </p>
                  </div>

                  {/* Points forts */}
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Accès à des milliers de produits</span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Livraison rapide et sécurisée</span>
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Support client 24/7</span>
                    </div>
                  </div>

                  {/* Illustration */}
                  <div className="mt-12 relative">
                    <div className="relative z-10 bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                          <div key={item} className="bg-white/20 rounded-lg h-20"></div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="h-4 bg-white/30 rounded w-24 mb-2"></div>
                          <div className="h-3 bg-white/20 rounded w-16"></div>
                        </div>
                        <div className="h-10 w-10 bg-white/30 rounded-full"></div>
                      </div>
                    </div>
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