import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};
    if (!email) {
      newErrors.email = 'O e-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'O endereço de e-mail é inválido';
    }
    if (!password) {
      newErrors.password = 'A senha é obrigatória';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      // Simulate login API call
      console.log('Login attempt with:', { email, password });
      alert('Login simulado! Verifique o console para detalhes.');
      // In a real app, you'd send this to a backend and handle the response
    }
  };

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Adjusted background and text colors for dark mode */}
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-xl dark:bg-dark-card-bg dark:shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Faça login na sua conta
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
            autoComplete="current-password"
            required
            label="Senha"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                // Adjusted checkbox text color for dark mode
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded dark:border-gray-600 dark:bg-gray-700"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-dark-text">
                Lembrar-me
              </label>
            </div>

            <div className="text-sm">
              <NavLink to="/forgot-password" className="font-medium text-primary hover:text-secondary">
                Esqueceu sua senha?
              </NavLink>
            </div>
          </div>

          <div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </div>
        </form>
        {/* Adjusted text color for dark mode */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-300">
          Não tem uma conta?{' '}
          <NavLink to="/register" className="font-medium text-primary hover:text-secondary">
            Cadastre-se
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;