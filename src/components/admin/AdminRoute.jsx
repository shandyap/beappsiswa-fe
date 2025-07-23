import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const AdminRoute = () => {
  const { isAdmin } = useAuth();

  // Jika state isAdmin adalah true, tampilkan konten halaman admin (Outlet).
  // Jika false, tolak pengguna kembali ke halaman login admin.
  return isAdmin ? <Outlet /> : <Navigate to="/admin" />;
};

export default AdminRoute;