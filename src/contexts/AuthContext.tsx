import { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // Em produção, isso seria hash
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Usuários fictícios para demonstração
const USERS: User[] = [
  { id: '1', name: 'Ariane', email: 'ariane@assessoria.com', password: 'ariane123' },
  { id: '2', name: 'Amanda', email: 'amanda@assessoria.com', password: 'amanda123' },
  { id: '3', name: 'Tayná', email: 'tayna@assessoria.com', password: 'tayna123' },
  { id: '4', name: 'Thauana', email: 'thauana@assessoria.com', password: 'thauana123' },
  { id: '5', name: 'Marcella', email: 'marcella@assessoria.com', password: 'marcella123' },
  { id: '6', name: 'Erika', email: 'erika@assessoria.com', password: 'erika123' },
  { id: '7', name: 'Michelle', email: 'michelle@assessoria.com', password: 'michelle123' },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Verificar se há usuário salvo no localStorage
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (email: string, password: string): boolean => {
    const foundUser = USERS.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

