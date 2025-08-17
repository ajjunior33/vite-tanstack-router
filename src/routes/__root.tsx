import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { AuthProvider, type AuthContextType } from '../contexts/AuthContext';

interface MyRouterContext {
  auth: AuthContextType;
}

function RootWithContext() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}

function RootComponent() {
  return (
    <AuthProvider>
      <RootWithContext />
    </AuthProvider>
  );
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
  beforeLoad: () => {
    return {};
  },
  context: ({ context }) => {
    return context;
  }
});