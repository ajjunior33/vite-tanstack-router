import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/dashboard')({
  component: DashboardComponent,
});

function DashboardComponent() {
  const { auth } = Route.useRouteContext();
  
  return (
    <div>
      <h1>Dashboard Principal</h1>
      <p>Bem-vindo de volta, <strong>{auth.user?.name}</strong>!</p>
      
      <div style={{ marginTop: '2rem' }}>
        <h2>Estatísticas Rápidas</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1rem', 
          marginTop: '1rem' 
        }}>
          <div style={{ 
            padding: '1.5rem', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#495057' }}>Usuários Ativos</h3>
            <p style={{ fontSize: '2rem', margin: '0.5rem 0', color: '#007bff', fontWeight: 'bold' }}>1,234</p>
            <span style={{ fontSize: '0.875rem', color: '#6c757d' }}>↑ 12% este mês</span>
          </div>
          <div style={{ 
            padding: '1.5rem', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#495057' }}>Vendas Hoje</h3>
            <p style={{ fontSize: '2rem', margin: '0.5rem 0', color: '#28a745', fontWeight: 'bold' }}>R$ 15,678</p>
            <span style={{ fontSize: '0.875rem', color: '#6c757d' }}>↑ 8% desde ontem</span>
          </div>
          <div style={{ 
            padding: '1.5rem', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '8px',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#495057' }}>Pedidos</h3>
            <p style={{ fontSize: '2rem', margin: '0.5rem 0', color: '#ffc107', fontWeight: 'bold' }}>89</p>
            <span style={{ fontSize: '0.875rem', color: '#6c757d' }}>↓ 3% hoje</span>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2>Ações Rápidas</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Novo Pedido
          </button>
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Ver Relatórios
          </button>
          <button style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#ffc107',
            color: '#212529',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}>
            Gerenciar Usuários
          </button>
        </div>
      </div>
    </div>
  );
}