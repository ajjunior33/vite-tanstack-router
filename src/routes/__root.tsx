import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AuthProvider, useAuth } from '../contexts/AuthContext';

interface MyRouterContext {
  auth: ReturnType<typeof useAuth>;
}

function RootComponent() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const auth = useAuth();
  return (
    <>
      <Outlet context={{ auth }} />
      <TanStackRouterDevtools />
    </>
  );
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
});