import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { BsPerson, BsLock, BsEye, BsEyeSlash } from 'react-icons/bs'; // Impor ikon
import '../components/admin/admin.css'; // Impor file CSS khusus

const AdminLoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginSuccess = login(id, password);
    if (loginSuccess) {
      navigate('/admin/dashboard');
    } else {
      alert('ID atau Password salah!');
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Selamat Datang, Admin</h2>
          <p>Masuk ke Laman Admin BeAppsiswa</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <div className="input-group-custom">
              <BsPerson className="input-icon" />
              <input
                type="text"
                id="username"
                className="input-field"
                placeholder="Masukkan username "
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-custom">
              <BsLock className="input-icon" />
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="input-field"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span 
                onClick={() => setShowPassword(!showPassword)} 
                className="password-toggle-icon"
              >
                {showPassword ? <BsEyeSlash /> : <BsEye />}
              </span>
            </div>
          </div>
          <button type="submit" className="btn-login">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;