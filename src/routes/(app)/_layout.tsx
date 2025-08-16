import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';
import MainAppLayout from '../../components/MainAppLayout';

export const Route = createFileRoute('/(app)/_layout')({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: () => (
    <MainAppLayout>
      <Outlet />
    </MainAppLayout>
  ),
});