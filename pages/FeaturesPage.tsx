import React from 'react';
import { Feature } from '../types';

// Icons using SVG for demonstration
const WebScrapingIcon: React.FC = () => (
  <svg className="w-16 h-16 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
);

const VoiceValidationIcon: React.FC = () => (
  <svg className="w-16 h-16 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
);

const DataNormalizationIcon: React.FC = () => (
  <svg className="w-16 h-16 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 002-2h-2a2 2 0 00-2 2m0 0V5h-2M9 7h2m0 10h2"></path></svg>
);

const DashboardIcon: React.FC = () => (
  <svg className="w-16 h-16 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2zm0 0h-2M7 17h10M13 5a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2V5z"></path></svg>
);

const MobileAppIcon: React.FC = () => (
  <svg className="w-16 h-16 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
);

const ComplianceIcon: React.FC = () => (
  <svg className="w-16 h-16 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.276a11.01 11.01 0 010 14.552c-4.706 4.707-12.318 4.707-17.024 0-4.706-4.706-4.706-12.318 0-17.024s12.318-4.706 17.024 0z"></path></svg>
);

const features: Feature[] = [
  {
    id: 1,
    title: 'Web Scraping Automatizado',
    description: 'Colete automaticamente números de telefone de fornecedores de fontes públicas online para enriquecer e atualizar seu banco de dados.',
    icon: <WebScrapingIcon />,
  },
  {
    id: 2,
    title: 'Validação por Voz com IA',
    description: 'Utilize ASR, NLU e TTS avançados para realizar chamadas automatizadas, confirmando e corrigindo números de telefone com IA conversacional.',
    icon: <VoiceValidationIcon />,
  },
  {
    id: 3,
    title: 'Normalização ITU-T E.164',
    description: 'Padronize todos os números de telefone para o formato internacional ITU-T E.164, garantindo consistência e deduplicação.',
    icon: <DataNormalizationIcon />,
  },
  {
    id: 4,
    title: 'Painel Web Abrangente',
    description: 'Monitore métricas operacionais, acompanhe o progresso da validação, visualize trilhas de auditoria e exporte relatórios em tempo real.',
    icon: <DashboardIcon />,
  },
  {
    id: 5,
    title: 'Aplicativo Móvel para Visibilidade',
    description: 'Acesse indicadores chave de desempenho, gráficos, logs e relatórios de consumo em trânsito para tomadas de decisão rápidas.',
    icon: <MobileAppIcon />,
  },
  {
    id: 6,
    title: 'Conformidade com a LGPD',
    description: 'Garanta total aderência às regulamentações da LGPD com princípios de privacidade desde o design, incluindo consentimento, opt-out e políticas de retenção de dados.',
    icon: <ComplianceIcon />,
  },
];

const FeaturesPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Adjusted text colors for dark mode */}
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4 dark:text-white">
        Nossos Recursos Principais
      </h1>
      <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto dark:text-gray-300">
        Descubra como nossa plataforma SaaS inteligente otimiza a validação de números de telefone de fornecedores,
        melhorando a qualidade dos dados e a eficiência operacional.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            // Adjusted background and shadow for dark mode
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 dark:bg-dark-card-bg dark:shadow-lg dark:hover:shadow-2xl"
          >
            <div className="mb-4">{feature.icon}</div>
            {/* Adjusted text colors for dark mode */}
            <h2 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">{feature.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <img
          src="https://picsum.photos/1200/600"
          alt="Captura de tela do Painel"
          // Adjusted shadow for dark mode
          className="rounded-lg shadow-xl mx-auto mb-8 max-w-full h-auto dark:shadow-2xl"
        />
        {/* Adjusted text color for dark mode */}
        <p className="text-lg text-gray-700 max-w-3xl mx-auto dark:text-gray-300">
          Nosso painel intuitivo oferece uma visão clara dos seus processos de validação,
          permitindo que você tome decisões informadas e mantenha alta qualidade de dados sem esforço.
        </p>
      </div>
    </div>
  );
};

export default FeaturesPage;