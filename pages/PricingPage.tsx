import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description: string;
  features: PlanFeature[];
  ctaText: string;
  ctaLink: string;
  variant: 'outline' | 'primary' | 'secondary';
  highlight?: boolean;
}

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Básico',
    price: 'Grátis',
    description: 'Ideal para testar a plataforma e pequenas validações.',
    features: [
      { text: '100 validações por mês', included: true },
      { text: 'Normalização E.164', included: true },
      { text: 'Painel Web Básico', included: true },
      { text: 'Web Scraping Automatizado', included: false },
      { text: 'Exportação em Excel', included: false },
      { text: 'Acesso ao App Mobile', included: false },
    ],
    ctaText: 'Começar Grátis',
    ctaLink: '/register',
    variant: 'outline',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 'R$ 199',
    period: '/mês',
    description: 'Para empresas que precisam de automação e volume.',
    features: [
      { text: '5.000 validações por mês', included: true },
      { text: 'Normalização E.164', included: true },
      { text: 'Painel Web Avançado', included: true },
      { text: 'Web Scraping Automatizado', included: true },
      { text: 'Exportação em Excel (.xlsx)', included: true },
      { text: 'Acesso ao App Mobile', included: false },
    ],
    ctaText: 'Assinar Pro',
    ctaLink: '/register?plan=pro',
    variant: 'primary',
    highlight: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Sob Consulta',
    description: 'Solução completa para grandes operações e gestão móvel.',
    features: [
      { text: 'Validações Ilimitadas', included: true },
      { text: 'Normalização E.164', included: true },
      { text: 'Painel Web Completo + API', included: true },
      { text: 'Web Scraping Ilimitado', included: true },
      { text: 'Exportação e Relatórios Customizados', included: true },
      { text: 'Acesso Exclusivo ao App Mobile', included: true }, // Key requirement
    ],
    ctaText: 'Fale Conosco',
    ctaLink: '/contact',
    variant: 'secondary',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 dark:text-white">
          Escolha o Plano Ideal para Sua Empresa
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto dark:text-gray-300">
          De validações pontuais a gestão completa via aplicativo móvel, temos a solução certa para garantir a qualidade dos seus dados.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative flex flex-col p-8 rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2 dark:bg-dark-card-bg ${
              plan.highlight
                ? 'bg-white border-2 border-primary ring-4 ring-primary/10 z-10 scale-105 md:scale-110'
                : 'bg-white border border-gray-200 dark:border-gray-700'
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                Mais Popular
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
              <p className="text-gray-500 mt-2 text-sm dark:text-gray-400">{plan.description}</p>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-extrabold text-gray-900 dark:text-white">{plan.price}</span>
              {plan.period && <span className="text-gray-500 font-medium dark:text-gray-400">{plan.period}</span>}
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  {feature.included ? (
                    <svg className="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-300 mr-3 mt-1 flex-shrink-0 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  <span className={`${feature.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-600'}`}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <NavLink to={plan.ctaLink} className="w-full">
              <Button variant={plan.variant} className="w-full" size="lg">
                {plan.ctaText}
              </Button>
            </NavLink>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-gray-50 rounded-xl p-8 dark:bg-gray-800">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Dúvidas sobre o App Mobile?</h3>
        <p className="text-gray-700 mb-6 dark:text-gray-300">
          O aplicativo móvel exclusivo do plano Enterprise permite monitorar KPIs, receber alertas em tempo real e visualizar logs de qualquer lugar.
        </p>
        <NavLink to="/contact">
          <Button variant="ghost">Falar com um Especialista</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default PricingPage;