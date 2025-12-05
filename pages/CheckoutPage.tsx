import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';

const CheckoutPage: React.FC = () => {
  // This is a placeholder for a checkout page.
  // In a real SaaS application focusing on phone number validation,
  // "checkout" would typically involve finalizing a subscription plan,
  // payment for service credits, or reviewing an order for a custom solution.
  // For this prototype, it's a simple informational page.

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Adjusted background and text colors for dark mode */}
      <div className="max-w-2xl w-full text-center space-y-8 bg-white p-8 rounded-lg shadow-xl dark:bg-dark-card-bg dark:shadow-lg">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 dark:text-white">
          Finalizar Pedido
        </h1>
        <p className="text-lg text-gray-700 mb-6 dark:text-gray-300">
          Esta página representa o passo final para a assinatura de um plano.
        </p>

        {/* Adjusted border and text colors for dark mode */}
        <div className="border-t border-b border-gray-200 py-6 my-6 dark:border-gray-700">
          <p className="text-xl font-semibold text-gray-800 dark:text-white">
            Nenhum plano selecionado.
          </p>
          <p className="text-md text-gray-600 mt-2 dark:text-gray-300">
            Por favor, selecione um <NavLink to="/pricing" className="text-primary hover:text-secondary underline">plano</NavLink> para prosseguir com a assinatura.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
          <NavLink to="/pricing">
            <Button variant="primary" className="w-full sm:w-auto">
              Ver Planos Disponíveis
            </Button>
          </NavLink>
          <NavLink to="/">
            <Button variant="outline" className="w-full sm:w-auto">
              Voltar ao Início
            </Button>
          </NavLink>
        </div>
        <img
          src="https://picsum.photos/600/300?random=7"
          alt="Ilustração de checkout"
          className="rounded-lg mx-auto mt-8 shadow-md"
        />
      </div>
    </div>
  );
};

export default CheckoutPage;