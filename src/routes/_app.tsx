import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import MainAppLayout from '../components/MainAppLayout';

export const Route = createFileRoute('/_app')({
  beforeLoad: ({ context }) => {
    // Agora funciona! ✅
    if (!context.auth.isAuthenticated()) {
      throw redirect({
        to: '/login',
        search: { redirect: location.href },
      });
    }
  },
  component: AppLayout,
});

function AppLayout() {
  return (
    <MainAppLayout>
      <Outlet />
    </MainAppLayout>
  );
}