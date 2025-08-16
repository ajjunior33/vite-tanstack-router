import { createContext, useContext, useState, type ReactNode } from "react";

const loginApi = async (user: string, pass: string): Promise<{ name: string }> => {
  console.log("Authenticated: ", user, pass)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === "admin" && pass === "password") {
        resolve({ name: "User Admin" })
      } else {
        reject(new Error("Credential invalid."))
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

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const isAuthenticated = !!user;


  const login = async (username: string, password: string) => {
    const userData = await loginApi(username, password);

    setUser(userData)
  }

  const logout = () => {
    setUser(null)
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

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth not used in AuthProvider");
  }

  return context
}