import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] flex flex-col items-center justify-center p-4">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 max-w-4xl mx-auto">
        {/* Adjusted text colors for dark mode */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight dark:text-white">
          Validação Inteligente de Telefones para Fornecedores
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 md:px-8 dark:text-gray-300">
          Revolucione a qualidade dos dados de seus fornecedores com validação por voz impulsionada por IA.
          Nossa plataforma SaaS automatiza a coleta, normalização e verificação de números de telefone
          para garantir informações de contato precisas e atualizadas.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <NavLink to="/features">
            <Button size="lg" className="w-full sm:w-auto">Saiba Mais</Button>
          </NavLink>
          <NavLink to="/register">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">Comece Grátis</Button>
          </NavLink>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-16 max-w-6xl mx-auto dark:bg-dark-card-bg dark:shadow-lg">
        {/* Adjusted text colors for dark mode */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 dark:text-white">Por que Escolher Nosso SaaS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-primary mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.276a11.01 11.01 0 010 14.552c-4.706 4.707-12.318 4.707-17.024 0-4.706-4.706-4.706-12.318 0-17.024s12.318-4.706 17.024 0z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Validação Automatizada</h3>
            <p className="text-gray-600 dark:text-gray-300">Aproveite a IA e agentes conversacionais para validar números de telefone através de chamadas automatizadas.</p>
          </div>
          <div className="text-center">
            <div className="text-primary mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Qualidade de Dados Aprimorada</h3>
            <p className="text-gray-600 dark:text-gray-300">Garanta conformidade (LGPD) e reduza custos operacionais com dados limpos e normalizados (ITU-T E.164).</p>
          </div>
          <div className="text-center">
            <div className="text-primary mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 21h7a2 2 0 002-2V9a2 2 0 00-2-2h-7a2 2 0 00-2 2v10a2 2 0 002 2z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 17H4a2 2 0 01-2-2V7a2 2 0 012-2h2.5L10 2h4l3.5 3H20a2 2 0 012 2v6a2 2 0 01-2 2h-2"></path></svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Monitoramento em Tempo Real</h3>
            <p className="text-gray-600 dark:text-gray-300">Acesse métricas chave, logs e análises de custo através de um painel web intuitivo e aplicativo móvel.</p>
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="bg-primary text-white py-16 w-full text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para Transformar os Dados dos Seus Fornecedores?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Junte-se às empresas líderes que estão melhorando a precisão de seus dados e a eficiência operacional.
          Comece seu teste gratuito hoje e experimente a diferença.
        </p>
        <NavLink to="/register">
          <Button variant="secondary" size="lg">Iniciar Teste Gratuito</Button>
        </NavLink>
      </section>
    </div>
  );
};

export default HomePage;