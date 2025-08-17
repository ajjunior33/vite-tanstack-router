import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router';
import { useEffect } from 'react';
import MainAppLayout from '../components/MainAppLayout';
import { useAuth } from '../contexts/AuthContext';

export const Route = createFileRoute('/_app')({
  component: AppLayout,
});

function AppLayout() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Se não está autenticado, redireciona para login
    if (!auth.isAuthenticated) {
      navigate({ to: '/login', replace: true });
    }
  }, [auth.isAuthenticated, navigate]);

  // Se não está autenticado, mostra loading enquanto redireciona
  if (!auth.isAuthenticated) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔐</div>
          <div>Verificando autenticação...</div>
        </div>
      </div>
    );
  }

  return (
    <MainAppLayout>
      <Outlet />
    </MainAppLayout>
  );
}