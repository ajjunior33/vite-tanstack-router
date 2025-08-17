import { Link } from "@tanstack/react-router"
import type React from "react"
import type { ReactNode } from "react"
import { useAuth } from "../contexts/AuthContext"

const headerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 2rem',
  backgroundColor: '#333',
  color: 'white'
}

const navStyles: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center'
}

const mainStyles: React.CSSProperties = {
  padding: '2rem'
}

const logoutButtonStyles: React.CSSProperties = {
  backgroundColor: '#dc3545',
  color: 'white',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  cursor: 'pointer'
}

const linkStyles: React.CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  transition: 'background-color 0.2s'
}

const MainAppLayout = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <div>
      <header style={headerStyles}>
        <div style={navStyles}>
          <Link style={linkStyles} to="/dashboard">
            📊 Dashboard
          </Link>
          <Link style={linkStyles} to="/settings">
            ⚙️ Configurações
          </Link>
        </div>
        <div style={navStyles}>
          <span>👋 Olá, {auth.user?.name}</span>
          <button style={logoutButtonStyles} onClick={handleLogout}>
            🚪 Sair
          </button>
        </div>
      </header>
      <main style={mainStyles}>
        {children}
      </main>
    </div>
  )
}

export default MainAppLayout