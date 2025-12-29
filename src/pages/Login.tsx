import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogIn, Lock, Mail, X } from 'lucide-react';
import logoWide from '../../logo-ariane-wide.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simular um pequeno delay para melhor UX
    setTimeout(() => {
      const success = login(email, password);
      
      if (success) {
        navigate('/sistema/dashboard');
      } else {
        setError('Email ou senha incorretos. Tente novamente.');
      }
      
      setIsLoading(false);
    }, 500);
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-beige via-brand-off-white to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft-lg p-8 md:p-10 border border-brand-olive/20">
          {/* Logo */}
          <div className="text-center mb-8">
            <img
              src={logoWide}
              alt="Logo Ariane Andrade"
              className="h-16 mx-auto mb-4 object-contain"
            />
            <h1 className="text-2xl md:text-3xl font-bold text-brand-brown mb-2">
              Sistema Interno
            </h1>
            <p className="text-brand-olive/70 text-sm">
              Registro Diário de Atendimento
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-brown mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-olive/50 w-5 h-5" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-brand-olive/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive bg-white text-brand-brown placeholder:text-brand-olive/40"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-brand-brown mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-olive/50 w-5 h-5" />
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-brand-olive/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-olive/50 focus:border-brand-olive bg-white text-brand-brown placeholder:text-brand-olive/40"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Erro */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={isLoading}
                className="flex-1 bg-gradient-to-r from-brand-brown to-brand-olive text-white py-3 rounded-lg font-semibold hover:from-brand-brown/90 hover:to-brand-olive/90 transition-all duration-200 shadow-soft-lg hover:shadow-soft-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Entrando...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    Entrar
                  </>
                )}
              </button>
              
              <button
                type="button"
                onClick={handleCancel}
                disabled={isLoading}
                className="flex-1 sm:flex-initial bg-white border-2 border-brand-olive/30 text-brand-brown py-3 px-6 rounded-lg font-semibold hover:bg-brand-beige/50 hover:border-brand-olive/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <X className="w-5 h-5" />
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

