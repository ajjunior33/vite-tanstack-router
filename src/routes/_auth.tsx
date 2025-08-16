import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import CenteredFormLayout from '../components/CenteredFormLayout';

export const Route = createFileRoute('/_auth')({
  beforeLoad: ({ context }) => {
    // Se já está autenticado, redireciona para dashboard
    if (context.auth.isAuthenticated) {
      throw redirect({
        to: '/dashboard',
        replace: true,
      });
    }
  },
  component: () => (
    <CenteredFormLayout>
      <Outlet />
    </CenteredFormLayout>
  )
})