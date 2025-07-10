import {Route, Routes} from 'react-router-dom';
import Beranda from './pages/Beranda';
import Beasiswa from './pages/Beasiswa';
import Perlombaan from './pages/Perlombaan';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';
import DetailBeasiswa from './pages/DetailBeasiswa'; 
import DetailPerlombaan from './pages/DetailPerlombaan';

function App() {

  return (
    <div>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<Beranda/>} />
        <Route path='/Beasiswa' element={<Beasiswa/>} />
        <Route path='/Perlombaan' element={<Perlombaan/>} />
        <Route path='/beasiswa/:id' element={<DetailBeasiswa/>} />
        <Route path='/lomba/:id' element={<DetailPerlombaan/>} />
        {/* Tambahkan route lain sesuai kebutuhan */}
      </Routes>
      <FooterComponent/>

    </div>
  )
}

export default App
