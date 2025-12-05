import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NavLink } from '../types';
import Button from './Button';
import { useTheme } from '../ThemeContext'; // Import useTheme

const navLinks: NavLink[] = [
  { name: 'Início', path: '/' },
  { name: 'Recursos', path: '/features' }, // Renomeado de Funcionalidades para Recursos
  { name: 'Como Funciona', path: '/tutorial' }, // Link para a nova página de tutorial
  { name: 'Planos', path: '/pricing' },
  { name: 'Sobre Nós', path: '/about' },
  { name: 'Contato', path: '/contact' },
  { name: 'Suporte/FAQ', path: '/support' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme(); // Use theme context

  return (
    // Adjusted header background and shadow for dark mode
    <header className="bg-white shadow-md sticky top-0 z-50 dark:bg-dark-card-bg dark:shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <RouterNavLink to="/" className="text-2xl font-bold text-primary hover:text-secondary">
          📞 SaaS Validate
        </RouterNavLink>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2"> {/* Added flex for theme toggle */}
          <Button variant="ghost" onClick={toggleTheme} aria-label="Alternar tema">
            {theme === 'dark' ? (
              <svg className="w-6 h-6 text-dark-text" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.405 17.296a.75.75 0 01-.51-.158.75.75 0 01-.159-.516l-.203-1.423a.75.75 0 01.737-.803.75.75 0 01.803.737l.203 1.423a.75.75 0 01-.212.671.75.75 0 01-.566.237zM3 12a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V11a.75.75 0 01-.75.75zM17.296 7.405a.75.75 0 01.158-.51.75.75 0 01.516-.159l1.423-.203a.75.75 0 01.803.737.75.75 0 01-.737.803l-1.423.203a.75.75 0 01-.671-.212.75.75 0 01-.237-.566zM12 17.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18a.75.75 0 01.75-.75zM17.296 17.296a.75.75 0 01-.51.158.75.75 0 01-.159-.516l-.203-1.423a.75.75 0 01.737-.803.75.75 0 01.803.737l.203 1.423a.75.75 0 01-.212.671.75.75 0 01-.566.237zM3 12a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V11a.75.75 0 01-.75.75zM7.405 6.704a.75.75 0 01-.51-.158.75.75 0 01-.159-.516l-.203-1.423a.75.75 0 01.737-.803.75.75 0 01.803.737l.203 1.423a.75.75 0 01-.212.671.75.75 0 01-.566.237zM20.25 12a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V11a.75.75 0 01-.75.75zM12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM17.296 7.405a.75.75 0 01.158-.51.75.75 0 01.516-.159l1.423-.203a.75.75 0 01.803.737.75.75 0 01-.737.803l-1.423.203a.75.75 0 01-.671-.212.75.75 0 01-.237-.566zM7.405 6.704a.75.75 0 01-.51-.158.75.75 0 01-.159-.516l-.203-1.423a.75.75 0 01.737-.803.75.75 0 01.803.737l.203 1.423a.75.75 0 01-.212.671.75.75 0 01-.566.237z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-text" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.127.514l.05.324c.732 4.095 3.374 7.649 7.371 9.423a.75.75 0 01.074 1.352 10.42 10.42 0 01-6.101 4.473A10.425 10.425 0 011.72 13.567a.75.75 0 01-.211-.79c.645-3.197 3.012-5.962 6.138-7.854a.75.75 0 01.611.164z" clipRule="evenodd" />
              </svg>
            )}
          </Button>
          <Button variant="ghost" onClick={() => setIsOpen(!isOpen)} aria-label="Abrir/Fechar navegação">
            <svg
              className="w-6 h-6 dark:text-dark-text" // Adjusted icon color for dark mode
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </Button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.name}
              to={link.path}
              // Adjusted NavLink colors for dark mode
              className={({ isActive }) =>
                `text-text hover:text-primary transition-colors dark:text-dark-text dark:hover:text-primary ${
                  isActive ? 'font-bold text-primary dark:text-primary' : ''
                }`
              }
            >
              {link.name}
            </RouterNavLink>
          ))}
          <RouterNavLink to="/login">
            <Button variant="outline">Entrar</Button>
          </RouterNavLink>
          <RouterNavLink to="/register">
            <Button>Registrar</Button>
          </RouterNavLink>
          {/* Theme toggle for desktop */}
          <Button variant="ghost" onClick={toggleTheme} aria-label="Alternar tema">
            {theme === 'dark' ? (
              <svg className="w-6 h-6 text-dark-text" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.405 17.296a.75.75 0 01-.51-.158.75.75 0 01-.159-.516l-.203-1.423a.75.75 0 01.737-.803.75.75 0 01.803.737l.203 1.423a.75.75 0 01-.212.671.75.75 0 01-.566.237zM3 12a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V11a.75.75 0 01-.75.75zM17.296 7.405a.75.75 0 01.158-.51.75.75 0 01.516-.159l1.423-.203a.75.75 0 01.803.737.75.75 0 01-.737.803l-1.423.203a.75.75 0 01-.671-.212.75.75 0 01-.237-.566zM12 17.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V18a.75.75 0 01.75-.75zM17.296 17.296a.75.75 0 01-.51.158.75.75 0 01-.159-.516l-.203-1.423a.75.75 0 01.737-.803.75.75 0 01.803.737l.203 1.423a.75.75 0 01-.212.671.75.75 0 01-.566.237zM3 12a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V11a.75.75 0 01-.75.75zM7.405 6.704a.75.75 0 01-.51-.158.75.75 0 01-.159-.516l-.203-1.423a.75.75 0 01.737-.803.75.75 0 01.803.737l.203 1.423a.75.75 0 01-.212.671.75.75 0 01-.566.237zM20.25 12a.75.75 0 01-.75-.75v-2.25a.75.75 0 011.5 0V11a.75.75 0 01-.75.75z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-text" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.127.514l.05.324c.732 4.095 3.374 7.649 7.371 9.423a.75.75 0 01.074 1.352 10.42 10.42 0 01-6.101 4.473A10.425 10.425 0 011.72 13.567a.75.75 0 01-.211-.79c.645-3.197 3.012-5.962 6.138-7.854a.75.75 0 01.611.164z" clipRule="evenodd" />
              </svg>
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {isOpen && (
        // Adjusted mobile menu panel background and shadow for dark mode
        <div className="md:hidden bg-white shadow-lg pb-4 dark:bg-dark-card-bg dark:shadow-lg">
          <div className="flex flex-col items-center space-y-4 px-4">
            {navLinks.map((link) => (
              <RouterNavLink
                key={link.name}
                to={link.path}
                // Adjusted mobile NavLink colors for dark mode
                className={({ isActive }) =>
                  `text-text hover:text-primary transition-colors w-full text-center py-2 dark:text-dark-text dark:hover:text-primary ${
                    isActive ? 'font-bold text-primary bg-neutral dark:text-primary dark:bg-gray-700' : '' // Adjusted active state background for dark mode
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </RouterNavLink>
            ))}
            <div className="w-full flex flex-col space-y-2 pt-2 border-t border-gray-200 dark:border-gray-700"> {/* Adjusted border for dark mode */}
              <RouterNavLink to="/login" className="w-full" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full">Entrar</Button>
              </RouterNavLink>
              <RouterNavLink to="/register" className="w-full" onClick={() => setIsOpen(false)}>
                <Button className="w-full">Registrar</Button>
              </RouterNavLink>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;