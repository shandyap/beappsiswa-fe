import {Route, Routes} from 'react-router-dom';
import Beranda from './pages/Beranda';
import Beasiswa from './pages/Beasiswa';
import Perlombaan from './pages/Perlombaan';
import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

function App() {

  return (
    <div>
      <NavbarComponent/>
      <Routes>
        <Route path='/' element={<Beranda/>} />
        <Route path='/Beasiswa' element={<Beasiswa/>} />
        <Route path='/Perlombaan' element={<Perlombaan/>} />
      </Routes>
      <FooterComponent/>

    </div>
  )
}

export default App
