import { Link } from "@tanstack/react-router"
import type React from "react"
import type { ReactNode } from "react"

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
  gap: '1rem'
}

const mainStyles: React.CSSProperties = {
  padding: '2rem'
}


const MainAppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header style={headerStyles}>
        <div style={navStyles}>
          <Link style={{ color: 'white' }} to="/">Dashboard</Link>
          <Link style={{ color: 'white' }} to="/">Settings</Link>
        </div>
      </header>
      <main style={mainStyles}>
        {children}
      </main>
    </div>
  )
}

export default MainAppLayout