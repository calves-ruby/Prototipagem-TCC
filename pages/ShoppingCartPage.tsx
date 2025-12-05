import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';

const ShoppingCartPage: React.FC = () => {
  // This is a placeholder for a shopping cart page.
  // In a real SaaS application focusing on phone number validation,
  // a "shopping cart" might refer to selecting service tiers,
  // purchasing validation credits, or managing subscriptions.
  // For this prototype, it's a simple informational page.

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Adjusted background and text colors for dark mode */}
      <div className="max-w-2xl w-full text-center space-y-8 bg-white p-8 rounded-lg shadow-xl dark:bg-dark-card-bg dark:shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 dark:text-white">
          Seu Carrinho de Compras
        </h1>
        <p className="text-lg text-gray-700 mb-6 dark:text-gray-300">
          Embora nosso SaaS principal se concentre na validação automatizada de números de telefone, esta página serve como um placeholder para possíveis planos de assinatura, compra de créditos de validação ou upgrades de serviço.
        </p>

        {/* Adjusted border and text colors for dark mode */}
        <div className="border-t border-b border-gray-200 py-6 my-6 dark:border-gray-700">
          <p className="text-xl font-semibold text-gray-800 dark:text-white">
            Atualmente, seu carrinho está vazio.
          </p>
          <p className="text-md text-gray-600 mt-2 dark:text-gray-300">
            Explore nossos <NavLink to="/features" className="text-primary hover:text-secondary underline">recursos</NavLink> ou confira nossos <NavLink to="/pricing" className="text-primary hover:text-secondary underline">planos de preços</NavLink> (não implementado neste protótipo) para adicionar serviços.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          <NavLink to="/">
            <Button variant="outline" className="w-full sm:w-auto">
              Continuar Navegando
            </Button>
          </NavLink>
          <NavLink to="/checkout">
            <Button className="w-full sm:w-auto" disabled>
              Ir para o Checkout (Desabilitado)
            </Button>
          </NavLink>
        </div>
        <img
          src="https://picsum.photos/600/300?random=6"
          alt="Ilustração de carrinho vazio"
          className="rounded-lg mx-auto mt-8 shadow-md"
        />
      </div>
    </div>
  );
};

export default ShoppingCartPage;