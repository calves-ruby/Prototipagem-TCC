import React, { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import { ContactFormData } from '../types';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'O nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'O e-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'O endereço de e-mail é inválido';
    }
    if (!formData.subject.trim()) newErrors.subject = 'O assunto é obrigatório';
    if (!formData.message.trim()) newErrors.message = 'A mensagem é obrigatória';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log('Contact form submitted:', formData);
      setIsSubmitted(true);
      // In a real app, send this to your backend
    }
  };

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Adjusted background and text colors for dark mode */}
      <div className="max-w-xl w-full space-y-8 bg-white p-8 rounded-lg shadow-xl dark:bg-dark-card-bg dark:shadow-lg">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4 dark:text-white">
          Entre em Contato
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8 dark:text-gray-300">
          Tem dúvidas ou quer saber mais? Envie-nos uma mensagem!
        </p>

        {isSubmitted ? (
          <div className="text-center text-green-600 font-semibold text-xl">
            <p>Obrigado pela sua mensagem! Entraremos em contato em breve.</p>
            <img
              src="https://picsum.photos/400/250?random=5"
              alt="Obrigado"
              className="rounded-lg mx-auto mt-6 shadow-md"
            />
          </div>
        ) : (
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <Input
              id="name"
              name="name"
              label="Seu Nome"
              type="text"
              placeholder="João Silva"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <Input
              id="email"
              name="email"
              label="Seu E-mail"
              type="email"
              placeholder="joao.silva@exemplo.com"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <Input
              id="subject"
              name="subject"
              label="Assunto"
              type="text"
              placeholder="Consulta sobre recursos do SaaS"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
            />
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 dark:text-dark-text">
                Sua Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                // Adjusted textarea colors for dark mode: background, text, border, placeholder
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm dark:bg-gray-700 dark:text-dark-text dark:border-gray-600 dark:placeholder-gray-400"
                placeholder="Digite sua mensagem aqui..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>
            <div>
              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;