import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

const loginApi = async (user: string, pass: string): Promise<{ name: string }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === "admin" && pass === "password") {
        resolve({ name: "Administrador" })
      } else {
        reject(new Error("Credenciais inválidas."))
      }
    }, 2000);
  })
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: { name: string } | null;
  login: (user: string, pass: string) => Promise<void>;
  logout: () => void;
}

const LOCALSTORAGE_USER = "@_USER"

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const isAuthenticated = !!user;

  const login = async (username: string, password: string) => {
    const userData = await loginApi(username, password);
    localStorage.setItem(LOCALSTORAGE_USER, JSON.stringify(userData))
    setUser(userData);
  }

  useEffect(() => {
    const user = localStorage.getItem(LOCALSTORAGE_USER);
    if (user) {
      setUser(JSON.parse(user))
    }

  }, [])

  const logout = () => {
    setUser(null);
    localStorage.removeItem(LOCALSTORAGE_USER)
    window.location.href = '/login';
  }

  return (
    <AuthContext.Provider value={{
      isAuthenticated,
      user,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de AuthProvider");
  }
  return context;
}

// Export do tipo para usar em outros arquivos
export type { AuthContextType };
