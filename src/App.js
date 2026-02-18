import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './assets/styles/globals.css';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';
import Intro from './pages/Intro/Intro';
import About from './pages/About/About';
import Partners from './pages/Partners/Partners';
import Contacts from './pages/Contacts/Contacts';

// Каталоги
import Additional from './pages/Catalog/Additional';
import Bathrooms from './pages/Catalog/Bathrooms';
import Bedrooms from './pages/Catalog/Bedrooms';
import Kitchens from './pages/Catalog/Kitchens';
import Living from './pages/Catalog/Living';

// Проекты
import MalibuVilla from './pages/Projects/MalibuVilla';
import MilanBar from './pages/Projects/MilanBar';
import ForteDeiMarmi from './pages/Projects/ForteDeiMarmi';
import BibioneApartments from './pages/Projects/BibioneApartments';
import OstuniApulia from './pages/Projects/OstuniApulia';
import PaviaApartment from './pages/Projects/PaviaApartment';
import Verona from './pages/Projects/Verona';
import SeefeldTorri from './pages/Projects/SeefeldTorri';
import ChampolucRelais from './pages/Projects/ChampolucRelais';
import CarinthiaKoller from './pages/Projects/CarinthiaKoller';
import ConcoAntico from './pages/Projects/ConcoAntico';
import EscalonVilla from './pages/Projects/EscalonVilla';

const AppContent = () => {
  const location = useLocation();
  const showFooter = location.pathname !== '/contacts';
  
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          {/* Основные страницы */}
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contacts" element={<Contacts />} />
          
          {/* Каталоги */}
          <Route path="/catalog/additional" element={<Additional />} />
          <Route path="/catalog/bathrooms" element={<Bathrooms />} />
          <Route path="/catalog/bedrooms" element={<Bedrooms />} />
          <Route path="/catalog/kitchens" element={<Kitchens />} />
          <Route path="/catalog/living" element={<Living />} />
          
          {/* Проекты */}
          <Route path="/projects/malibu-villa" element={<MalibuVilla />} />
          <Route path="/projects/milan-bar" element={<MilanBar />} />
          <Route path="/projects/forte-dei-marmi" element={<ForteDeiMarmi />} />
          <Route path="/projects/bibione-apartments" element={<BibioneApartments />} />
          <Route path="/projects/ostuni-apulia" element={<OstuniApulia />} />
          <Route path="/projects/pavia-apartment" element={<PaviaApartment />} />
          <Route path="/projects/verona" element={<Verona />} />
          <Route path="/projects/seefeld-torri" element={<SeefeldTorri />} />
          <Route path="/projects/champoluc-relais" element={<ChampolucRelais />} />
          <Route path="/projects/carinthia-koller" element={<CarinthiaKoller />} />
          <Route path="/projects/conco-antico" element={<ConcoAntico />} />
          <Route path="/projects/escalon-villa" element={<EscalonVilla />} />
        </Routes>
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;