import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';

const TutorialPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 dark:text-white">
          Como Importar e Exportar Arquivos
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto dark:text-gray-300">
          Entenda o fluxo completo: da importação da sua base de fornecedores até a exportação do relatório de validação.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
        {/* Step 1: Import */}
        <div className="order-2 lg:order-1">
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 dark:bg-dark-card-bg dark:border-gray-700">
            {/* Mockup UI for Import */}
            <div className="border-2 border-dashed border-primary/50 rounded-lg p-8 text-center bg-neutral dark:bg-gray-800">
              <svg className="w-16 h-16 mx-auto text-primary mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Arraste e solte seu arquivo aqui</h3>
              <p className="text-sm text-gray-500 my-2 dark:text-gray-400">ou clique para selecionar do computador</p>
              <span className="inline-block px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-xs font-mono dark:bg-gray-700 dark:text-gray-300">.xlsx, .csv</span>
            </div>
            
            {/* Mockup UI for Column Mapping */}
            <div className="mt-6 space-y-3">
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Mapeamento de Colunas Detectado:</div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200 dark:bg-gray-800 dark:border-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Coluna A: <strong>Nome Fantasia</strong></span>
                </div>
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded border border-gray-200 dark:bg-gray-800 dark:border-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Coluna B: <strong>Telefone</strong></span>
                </div>
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="flex items-center mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3">1</span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Importação Simplificada</h2>
          </div>
          <p className="text-lg text-gray-700 mb-6 dark:text-gray-300">
            Comece enviando sua base de fornecedores. Nossa plataforma aceita arquivos <strong>Excel (.xlsx)</strong> ou <strong>CSV</strong>.
          </p>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Identificação automática de colunas (Nome, Telefone, CNPJ).
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Normalização imediata para o padrão ITU-T E.164.
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Remoção automática de duplicatas.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center my-16">
         <svg className="w-12 h-12 text-gray-300 animate-bounce dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
         </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Step 2: Export */}
        <div className="order-1 lg:order-1">
          <div className="flex items-center mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-3">2</span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Exportação Inteligente</h2>
          </div>
          <p className="text-lg text-gray-700 mb-6 dark:text-gray-300">
            Após a validação por IA, baixe os resultados enriquecidos. O arquivo exportado contém não apenas o status de validação, mas também transcrições e metadados.
          </p>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
             <li className="flex items-start">
              <svg className="w-6 h-6 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Status claro: Válido, Inválido, Caixa Postal, Não Atende.
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Link para ouvir o áudio da chamada (Auditável).
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Compatível com ERPs e CRMs.
            </li>
          </ul>
           <div className="mt-8">
            <NavLink to="/register">
                <Button size="lg">Experimentar Agora</Button>
            </NavLink>
          </div>
        </div>

        <div className="order-2 lg:order-2">
          <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-100 dark:bg-dark-card-bg dark:border-gray-700">
             {/* Mockup UI for Result Table */}
            <div className="overflow-hidden rounded-md border border-gray-200 dark:border-gray-600">
              <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 font-semibold text-xs text-gray-500 uppercase flex justify-between dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400">
                <span>Resultados da Validação</span>
                <span>Lote #4092</span>
              </div>
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-300">Nome</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-300">Telefone</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  <tr>
                    <td className="px-3 py-2 text-sm text-gray-900 dark:text-white">Empresa A</td>
                    <td className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">+55 11 99999...</td>
                    <td className="px-3 py-2 text-sm"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Confirmado</span></td>
                  </tr>
                  <tr>
                     <td className="px-3 py-2 text-sm text-gray-900 dark:text-white">Empresa B</td>
                    <td className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">+55 19 33333...</td>
                    <td className="px-3 py-2 text-sm"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Inválido</span></td>
                  </tr>
                   <tr>
                     <td className="px-3 py-2 text-sm text-gray-900 dark:text-white">Empresa C</td>
                    <td className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400">+55 21 98888...</td>
                    <td className="px-3 py-2 text-sm"><span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Correio Voz</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mockup UI for Export Button */}
            <div className="mt-6 flex justify-end">
              <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors shadow-sm">
                 <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                 Exportar para Excel (.xlsx)
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;