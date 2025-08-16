import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/settings')({
  component: SettingsComponent,
});

function SettingsComponent() {
  const { auth } = Route.useRouteContext();
  
  return (
    <div>
      <h1>Configurações da Conta</h1>
      <p>Olá, <strong>{auth.user?.name}</strong>. Aqui você pode alterar suas configurações.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginBottom: '1rem'
        }}>
          <h3>Informações da Conta</h3>
          <div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Nome:
              </label>
              <input 
                type="text" 
                defaultValue={auth.user?.name}
                style={{ 
                  width: '100%', 
                  padding: '0.5rem', 
                  border: '1px solid #ccc', 
                  borderRadius: '4px',
                  maxWidth: '300px'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Email:
              </label>
              <input 
                type="email" 
                placeholder="usuario@exemplo.com"
                style={{ 
                  width: '100%', 
                  padding: '0.5rem', 
                  border: '1px solid #ccc', 
                  borderRadius: '4px',
                  maxWidth: '300px'
                }}
              />
            </div>
          </div>
        </div>

        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '1.5rem', 
          borderRadius: '8px',
          marginBottom: '1rem'
        }}>
          <h3>Preferências</h3>
          <div style={{ marginTop: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" defaultChecked />
              Receber notificações por email
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
              <input type="checkbox" />
              Modo escuro
            </label>
          </div>
        </div>

        <button style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Salvar Alterações
        </button>
      </div>
    </div>
  );
}