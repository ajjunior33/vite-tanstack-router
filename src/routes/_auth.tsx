import { createFileRoute, Outlet } from '@tanstack/react-router';
import CenteredFormLayout from '../components/CenteredFormLayout';

export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
})

function AuthLayout() {
  // Removemos a verificação de autenticação daqui
  // Deixamos cada rota filha lidar com isso
  
  return (
    <CenteredFormLayout>
      <Outlet />
    </CenteredFormLayout>
  );
}