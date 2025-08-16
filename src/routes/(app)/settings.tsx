import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/(app)/settings')({
  component: SettingsComponent,
});

function SettingsComponent() {
  const { auth } = Route.useRouteContext();
  return (
    <div>
      <h1>Configurações da Conta</h1>
      <p>Olá, {auth.user?.name}. Aqui você poderá alterar suas configurações.</p>
    </div>
  );
}