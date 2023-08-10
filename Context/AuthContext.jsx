import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [authData, setAuthData] = useState(null);

  const setAuth = (data) => {
    setAuthData(data);
  };

  const clearAuth = () => {
    setAuthData(null);
  };

  return (
    <AuthContext.Provider value={{ authData, setAuth, clearAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
