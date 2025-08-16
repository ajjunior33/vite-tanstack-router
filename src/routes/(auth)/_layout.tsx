import { createFileRoute, Outlet } from '@tanstack/react-router'
import CenteredFormLayout from '../../components/CenteredFormLayout'

export const Route = createFileRoute('/(auth)/_layout')({
  component: () => (
    <CenteredFormLayout>
      <Outlet />
    </CenteredFormLayout>
  )
})