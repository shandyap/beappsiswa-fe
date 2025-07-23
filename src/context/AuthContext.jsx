import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // State untuk menyimpan status login admin
  const [isAdmin, setIsAdmin] = useState(false);

  // Fungsi untuk login
  const login = (id, password) => {
    const ADMIN_ID = "admin";
    const ADMIN_PASSWORD = "password123";

    if (id === ADMIN_ID && password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      return true; // Login berhasil
    }
    return false; // Login gagal
  };

  // Fungsi untuk logout
  const logout = () => {
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};