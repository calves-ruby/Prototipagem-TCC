import React, { useState } from 'react';
import { FAQItem } from '../types';
// @google/genai coding guideline: DO add comment above each fix.
import { NavLink } from 'react-router-dom';
// @google/genai coding guideline: DO add comment above each fix.
import Button from '../components/Button';

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'Qual é a função principal da plataforma SaaS?',
    answer: 'Nossa plataforma SaaS é especializada na validação automatizada de números de telefone de fornecedores usando agentes conversacionais com IA. Ela coleta números via web scraping, os normaliza para o padrão ITU-T E.164 e os verifica por meio de interações de voz.',
  },
  {
    id: 2,
    question: 'Como funciona a validação por voz com IA?',
    answer: 'O sistema utiliza Reconhecimento Automático de Fala (ASR) para entender as respostas, Compreensão de Linguagem Natural (NLU) para interpretar a intenção e Text-to-Speech (TTS) para gerar prompts de voz naturais durante as chamadas automatizadas. Também suporta "barge-in" para uma conversa mais fluida.',
  },
  {
    id: 3,
    question: 'A plataforma está em conformidade com as regulamentações de proteção de dados?',
    answer: 'Sim, a plataforma é projetada com a conformidade com a LGPD (Lei Geral de Proteção de Dados) em mente. Isso inclui comunicação clara da finalidade dos dados, opções de opt-out, retenção mínima de dados e trilhas de auditoria abrangentes para transparência.',
  },
  {
    id: 4,
    question: 'Que tipo de dados posso monitorar no painel?',
    answer: 'O painel web fornece métricas operacionais em tempo real, como taxas de atendimento, taxas de confirmação, latência de ponta a ponta e indicadores de qualidade de dados. Também permite a exportação de relatórios (.xlsx) e acesso a trilhas de auditoria. Um aplicativo móvel oferece visibilidade semelhante em qualquer lugar.',
  },
  {
    id: 5,
    question: 'Posso integrar esta plataforma com meus sistemas existentes?',
    answer: 'O backend é construído com Ruby on Rails e expõe APIs REST/JSON, permitindo integração flexível com vários sistemas externos. Embora este protótipo não demonstre integração direta, a arquitetura a suporta.',
  },
];

const SupportFAQPage: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Adjusted text colors for dark mode */}
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4 dark:text-white">
        Suporte & FAQ
      </h1>
      <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto dark:text-gray-300">
        Encontre respostas para perguntas comuns sobre nossa plataforma e obtenha a ajuda que você precisa.
      </p>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-dark-card-bg dark:shadow-md">
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50 focus:outline-none dark:text-white dark:hover:bg-gray-700"
              onClick={() => toggleFAQ(item.id)}
              aria-expanded={openItem === item.id}
            >
              {item.question}
              <svg
                className={`w-6 h-6 transition-transform duration-300 dark:text-dark-text ${ // Adjusted icon color for dark mode
                  openItem === item.id ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            {openItem === item.id && (
              <div className="px-6 pb-4 pt-2 text-gray-600 text-base border-t border-gray-100 dark:text-gray-300 dark:border-gray-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Adjusted background and text colors for dark mode */}
      <section className="mt-16 text-center bg-white p-8 rounded-lg shadow-xl max-w-3xl mx-auto dark:bg-dark-card-bg dark:shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
          Ainda Precisa de Ajuda?
        </h2>
        <p className="text-lg text-gray-700 mb-6 dark:text-gray-300">
          Se você não encontrou a resposta que procura, sinta-se à vontade para entrar em contato com nossa equipe de suporte.
        </p>
        <NavLink to="/contact">
          <Button size="lg">Entrar em Contato com o Suporte</Button>
        </NavLink>
      </section>
    </div>
  );
};

export default SupportFAQPage;