import React, { type ReactNode } from 'react';

const styles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f0f2f5',
};


const formContainerStyles: React.CSSProperties = {
  padding: "2rem",
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  minWidth: '300px'
}

const CenteredFormLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div style={styles}>
      <div style={formContainerStyles}>
        {children}
      </div>
    </div>
  )
}

export default CenteredFormLayout;