import { Routes, Route, useLocation } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Beasiswa from './pages/Beasiswa';
import Perlombaan from './pages/Perlombaan';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import DetailBeasiswa from './pages/DetailBeasiswa'; 
import DetailPerlombaan from './pages/DetailPerlombaan';
import AdminDashboard from './pages/AdminDashboard';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminRoute from './components/admin/AdminRoute';

function App() {
 const location = useLocation();
 const isAdminPage = location.pathname.startsWith('/admin');

  return (
      <div className="app-container">
        {!isAdminPage && <NavbarComponent />}
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Beranda/>} />
            <Route path='/Beasiswa' element={<Beasiswa/>} />
            <Route path='/Perlombaan' element={<Perlombaan/>} />
            <Route path='/beasiswa/:id' element={<DetailBeasiswa/>} />
            <Route path='/lomba/:id' element={<DetailPerlombaan/>} />

            <Route path="/admin" element={<AdminLoginPage />} />
            <Route element={<AdminRoute />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Route>
          </Routes>
        </main>
        <FooterComponent/>

      </div>

  )
}

export default App
