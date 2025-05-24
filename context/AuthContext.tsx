import React, { createContext, useContext, useState, ReactNode } from 'react';

type User = { email: string; password: string };

type AuthCtx = {
  user: User | null;
  register: (email: string, password: string) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthCtx | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const register = (email: string, password: string) => setUser({ email, password });

  const login = (email: string, password: string) => {
    if (user && user.email === email && user.password === password) return true;
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside <AuthProvider>');
  return ctx;
}
