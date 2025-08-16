import { createFileRoute, useRouter } from '@tanstack/react-router';
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

export const Route = createFileRoute('/(auth)/login')({
  component: LoginComponent,
});

function LoginComponent() {
  const auth = useAuth();
  const router = useRouter();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await auth.login(username, password);
      await router.invalidate(); // Garante que o estado do router seja atualizado
      // Tenta navegar para a página de onde o usuário veio, ou para o dashboard
      const redirectTo = Route.useSearch<{ redirect?: string }>().redirect || '/dashboard';
      router.navigate({ to: redirectTo });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro');
    }
  };

  return (
    <div>
      <h2>Acessar o Sistema</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label htmlFor="username">Usuário</label>
          <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}