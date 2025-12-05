import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    // Adjusted footer background for dark mode consistency
    <footer className="bg-gray-800 text-white py-8 mt-12 dark:bg-dark-card-bg">
      <div className="container mx-auto px-4 text-center md:flex md:justify-between md:items-center">
        <div className="mb-4 md:mb-0">
          <p>&copy; {new Date().getFullYear()} SaaS de Validação Telefônica. Todos os direitos reservados.</p>
        </div>
        {/* Adjusted to stack links vertically on small screens and increase touch area */}
        <div className="flex flex-col items-center space-y-2 md:flex-row md:justify-end md:space-y-0 md:space-x-6 mt-4 md:mt-0">
          <NavLink to="/privacy" className="hover:text-primary transition-colors py-2 px-4 md:py-0 md:px-0">
            Política de Privacidade
          </NavLink>
          <NavLink to="/terms" className="hover:text-primary transition-colors py-2 px-4 md:py-0 md:px-0">
            Termos de Serviço
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;