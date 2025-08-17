import { createFileRoute, useNavigate } from '@tanstack/react-router';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

type LoginSearch = {
  redirect?: string;
}

export const Route = createFileRoute('/_auth/login')({
  validateSearch: (search: Record<string, unknown>): LoginSearch => {
    return {
      redirect: search.redirect as string || '/dashboard'
    }
  },
  component: LoginComponent,
});

function LoginComponent() {
  const auth = useAuth();
  const navigate = useNavigate();
  const search = Route.useSearch();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Se já está autenticado, redireciona imediatamente
  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate({ to: search.redirect, replace: true });
    }
  }, [auth.isAuthenticated, navigate, search.redirect]);

  // Se já está autenticado, mostra loading enquanto redireciona
  if (auth.isAuthenticated) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Já está logado!</h2>
        <p>Redirecionando para o dashboard...</p>
      </div>
    );
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await auth.login(username, password);
      // O useEffect acima vai lidar com o redirect após o login
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Acessar o Sistema</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <label htmlFor="username">Usuário:</label>
          <input 
            id="username" 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
            style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          <label htmlFor="password">Senha:</label>
          <input 
            id="password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        {error && <p style={{ color: 'red', margin: '0.5rem 0' }}>{error}</p>}
        <button 
          type="submit" 
          disabled={isLoading}
          style={{
            padding: '0.75rem',
            backgroundColor: isLoading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isLoading ? 'not-allowed' : 'pointer'
          }}
        >
          {isLoading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
      <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: '#666' }}>
        <p><strong>Credenciais de teste:</strong></p>
        <p>Usuário: admin</p>
        <p>Senha: password</p>
      </div>
    </div>
  );
}