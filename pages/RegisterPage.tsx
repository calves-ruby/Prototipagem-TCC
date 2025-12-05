import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const validate = () => {
    const newErrors: {
      name?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};
    if (!name) newErrors.name = 'O nome é obrigatório';
    if (!email) {
      newErrors.email = 'O e-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'O endereço de e-mail é inválido';
    }
    if (!password) {
      newErrors.password = 'A senha é obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'A senha deve ter pelo menos 6 caracteres';
    }
    if (!confirmPassword) {
      newErrors.confirmPassword = 'A confirmação de senha é obrigatória';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // Simulate registration API call
      console.log('Registration attempt with:', { name, email, password });
      alert('Cadastro simulado! Verifique o console para detalhes.');
      // In a real app, you'd send this to a backend and handle the response
    }
  };

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Adjusted background and text colors for dark mode */}
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-xl dark:bg-dark-card-bg dark:shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Criar uma conta
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            label="Nome Completo"
            placeholder="João Silva"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name}
          />
          <Input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            label="Endereço de e-mail"
            placeholder="joao.silva@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            label="Senha"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
          <Input
            id="confirm-password"
            name="confirm-password"
            type="password"
            autoComplete="new-password"
            required
            label="Confirmar Senha"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
          />

          <div>
            <Button type="submit" className="w-full">
              Registrar
            </Button>
          </div>
        </form>
        {/* Adjusted text color for dark mode */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-300">
          Já tem uma conta?{' '}
          <NavLink to="/login" className="font-medium text-primary hover:text-secondary">
            Faça login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;