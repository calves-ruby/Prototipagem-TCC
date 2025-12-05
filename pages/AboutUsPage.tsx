import React from 'react';

const AboutUsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Adjusted text colors for dark mode */}
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4 dark:text-white">
        Sobre Nosso Projeto
      </h1>
      <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto dark:text-gray-300">
        Uma plataforma SaaS de ponta para validação de números de telefone de fornecedores, nascida da pesquisa acadêmica e de uma visão de excelência operacional.
      </p>

      {/* Adjusted background and text colors for dark mode */}
      <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12 dark:bg-dark-card-bg dark:shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 dark:text-white">Nossa Missão</h2>
        <p className="text-lg text-gray-600 mb-4 dark:text-gray-300">
          A missão central deste projeto é abordar o desafio crítico de dados de contato de fornecedores desatualizados e ineficientes.
          Ao aproveitar a tecnologia avançada de IA conversacional, web scraping e técnicas robustas de normalização de dados,
          nosso objetivo é fornecer às empresas uma solução confiável, precisa e compatível para gerenciar suas informações de fornecedores.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Nossa plataforma foi projetada para reduzir significativamente os custos operacionais, otimizar os processos de aquisição,
          e garantir a conformidade com as regulamentações de proteção de dados como a LGPD, promovendo, em última análise, relacionamentos mais fortes com os fornecedores e governança de dados.
        </p>
      </section>

      {/* Adjusted background and text colors for dark mode */}
      <section className="bg-white rounded-lg shadow-xl p-8 md:p-12 dark:bg-dark-card-bg dark:shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center dark:text-white">A Equipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <img
              src="https://picsum.photos/200/200?random=1"
              alt="Bruno Bueno Rodrigues"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Bruno Bueno Rodrigues</h3>
            <p className="text-primary text-sm">Gerente de produto</p>
          </div>
          <div className="text-center">
            <img
              src="https://picsum.photos/200/200?random=2"
              alt="Caik Dias Lacerda"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Caik Dias Lacerda</h3>
            <p className="text-primary text-sm">Desenvolvedor Web</p>
          </div>
          <div className="text-center">
            <img
              src="https://picsum.photos/200/200?random=3"
              alt="Caio Alves da Cruz"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Caio Alves da Cruz</h3>
            <p className="text-primary text-sm">Engenheiro de IA</p>
          </div>
          <div className="text-center">
            <img
              src="https://picsum.photos/200/200?random=4"
              alt="Raul de Melo Vicente"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Raul de Melo Vicente</h3>
            <p className="text-primary text-sm">Desenvolvedor Mobile</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-lg text-gray-600 italic dark:text-gray-300">
            Orientado por Prof. Me. Diego Henrique Negretto
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;