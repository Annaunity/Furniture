import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/globals.css';

import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Home from './pages/Home/Home';
import Intro from './pages/Intro/Intro';
import About from './pages/About/About';
import Partners from './pages/Partners/Partners';
import Contacts from './pages/Contacts/Contacts';
import Projects from './pages/Projects/Projects';
import Additional from './pages/Catalog/Additional';
import Bathrooms from './pages/Catalog/Bathrooms';
import Bedrooms from './pages/Catalog/Bedrooms';
import Kitchens from './pages/Catalog/Kitchens';
import Living from './pages/Catalog/Living';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/catalog/additional" element={<Additional />} />
            <Route path="/catalog/bathrooms" element={<Bathrooms />} />
            <Route path="/catalog/bedrooms" element={<Bedrooms />} />
            <Route path="/catalog/kitchens" element={<Kitchens />} />
            <Route path="/catalog/living" element={<Living />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;