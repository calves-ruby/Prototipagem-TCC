import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FeaturesPage from './pages/FeaturesPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import CheckoutPage from './pages/CheckoutPage';
import SupportFAQPage from './pages/SupportFAQPage';
import PricingPage from './pages/PricingPage';
import TutorialPage from './pages/TutorialPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/support" element={<SupportFAQPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/tutorial" element={<TutorialPage />} />
            {/* Add placeholder routes for privacy and terms if needed by Footer */}
            {/* Adjusted placeholder text colors for dark mode */}
            <Route path="/privacy" element={<div className="container mx-auto py-12 text-center text-xl dark:text-dark-text">Página de Política de Privacidade (Placeholder)</div>} />
            <Route path="/terms" element={<div className="container mx-auto py-12 text-center text-xl dark:text-dark-text">Página de Termos de Serviço (Placeholder)</div>} />
            {/* Fallback for unknown routes */}
            <Route path="*" element={<div className="container mx-auto py-12 text-center text-xl dark:text-dark-text">404: Página Não Encontrada</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;