import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(app)/dashboard')({
  component: DashboardComponent,
});

function DashboardComponent() {
  const { auth } = Route.useRouteContext();
  return (
    <div>
      <h1>Dashboard Principal</h1>
      <p>Bem-vindo de volta, <strong>{auth.user?.name}</strong>!</p>
      <p>Seu e-mail registrado é: {auth.user?.email}</p>
    </div>
  );
}