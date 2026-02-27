import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

import ScandolaLogo from '../../ScandolaLogo';
import downloadPdfIcon from '../../../assets/images/download_pdf.svg';

// Импортируем PDF файлы
import kitchensCatalog1 from '../../../catalogs/kitchens_catalog_1.pdf';
import kitchensCatalog2 from '../../../catalogs/kitchens_catalog_2.pdf';
import livingCatalog from '../../../catalogs/living_catalog.pdf';
import bedroomsCatalog from '../../../catalogs/bedrooms_catalog.pdf';
import bathroomsCatalog from '../../../catalogs/bathrooms_catalog.pdf';
import additionalCatalog from '../../../catalogs/additional_catalog.pdf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileCatalogOpen, setIsMobileCatalogOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [pdfFiles, setPdfFiles] = useState([]);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрываем мобильное меню при смене страницы
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileCatalogOpen(false);
    setIsMobileProjectsOpen(false);
  }, [location]);

  // Список проектов для дропдауна
  const projects = [
    { id: 'malibu-villa', name: 'Малибу Вилла' },
    { id: 'milan-bar', name: 'Милан Бар' },
    { id: 'forte-dei-marmi', name: 'Форте-деи-Марми' },
    { id: 'bibione-apartments', name: 'Бибионе Апартаменты' },
    { id: 'ostuni-apulia', name: 'Остуни Апулия' },
    { id: 'pavia-apartment', name: 'Павия Квартира' },
    { id: 'verona', name: 'Верона' },
    { id: 'seefeld-torri', name: 'Зеефельд Торри' },
    { id: 'champoluc-relais', name: 'Шамполюк Реле' },
    { id: 'carinthia-koller', name: 'Каринтия Коллер' },
    { id: 'conco-antico', name: 'Конко Антико' },
    { id: 'escalon-villa', name: 'Эскалон Вилла' }
  ];

  // Определяем какие PDF скачивать в зависимости от текущей страницы
  useEffect(() => {
    const path = location.pathname;
    
    if (path.startsWith('/catalog')) {
      if (path.startsWith('/catalog/kitchens')) {
        setPdfFiles([
          { file: kitchensCatalog1, name: 'Каталог кухонь ель.pdf' },
          { file: kitchensCatalog2, name: 'Каталог кухонь дуб.pdf' }
        ]);
      } 
      else if (path.startsWith('/catalog/living')) {
        setPdfFiles([{ file: livingCatalog, name: 'Каталог дневной зоны.pdf' }]);
      } 
      else if (path.startsWith('/catalog/bedrooms')) {
        setPdfFiles([{ file: bedroomsCatalog, name: 'Каталог спален.pdf' }]);
      } 
      else if (path.startsWith('/catalog/bathrooms')) {
        setPdfFiles([{ file: bathroomsCatalog, name: 'Каталог ванных комнат.pdf' }]);
      } 
      else if (path.startsWith('/catalog/additional')) {
        setPdfFiles([{ file: additionalCatalog, name: 'Каталог дополнительных предметов.pdf' }]);
      } 
      else {
        setPdfFiles([]);
      }
    } else {
      setPdfFiles([]);
    }
  }, [location.pathname]);

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCatalogClick = (e) => {
    if (location.pathname.startsWith('/catalog')) {
      e.preventDefault();
      setIsCatalogOpen(!isCatalogOpen);
    } else {
      navigate('/catalog/kitchens');
      setIsCatalogOpen(false);
    }
  };

  const handleProjectsClick = (e) => {
    if (location.pathname.startsWith('/projects')) {
      e.preventDefault();
      setIsProjectsOpen(!isProjectsOpen);
    } else {
      navigate('/projects/malibu-villa');
      setIsProjectsOpen(false);
    }
  };

  const catalogItems = [
    { name: 'Кухни', path: '/catalog/kitchens' },
    { name: 'Дневная зона', path: '/catalog/living' },
    { name: 'Спальная зона', path: '/catalog/bedrooms' },
    { name: 'Ванные комнаты', path: '/catalog/bathrooms' },
    { name: 'Дополнительно', path: '/catalog/additional' },
  ];

  const handleDownloadPDF = () => {
    if (pdfFiles.length === 0) return;
    
    pdfFiles.forEach((pdf, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = pdf.file;
        link.download = pdf.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 500);
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={handleLogoClick}>
            <ScandolaLogo size={33} /> 
            <span className="logo-text">Scandola</span>
          </Link>
          
          {/* Десктопная навигация */}
          <nav className="nav">
            <Link to="/intro" className={`nav-link ${location.pathname === '/intro' ? 'active' : ''}`}>
              Введение
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
              О бренде
            </Link>

            <div 
              className="nav-dropdown"
              onMouseEnter={() => setIsCatalogOpen(true)}
              onMouseLeave={() => setIsCatalogOpen(false)}
            >
              <Link 
                to="/catalog/kitchens" 
                className={`nav-link ${location.pathname.startsWith('/catalog') ? 'active' : ''}`}
                onClick={handleCatalogClick}
              >
                Каталог
                <span className="dropdown-arrow">▼</span>
              </Link>
              {isCatalogOpen && (
                <div className="dropdown-menu">
                  {catalogItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="dropdown-item"
                      onClick={() => {
                        setIsCatalogOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div 
              className="nav-dropdown"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <Link 
                to="/projects/malibu-villa" 
                className={`nav-link ${location.pathname.startsWith('/projects') ? 'active' : ''}`}
                onClick={handleProjectsClick}
              >
                Проекты
                <span className="dropdown-arrow">▼</span>
              </Link>
              {isProjectsOpen && (
                <div className="dropdown-menu">
                  {projects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/projects/${project.id}`}
                      className="dropdown-item"
                      onClick={() => {
                        setIsProjectsOpen(false);
                      }}
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/partners" className={`nav-link ${location.pathname === '/partners' ? 'active' : ''}`}>
              Партнеры
            </Link>
            <Link to="/contacts" className={`nav-link ${location.pathname === '/contacts' ? 'active' : ''}`}>
              Контакты
            </Link>
          </nav>

          <div className="header-actions">
            <button 
              onClick={handleDownloadPDF} 
              className="header-pdf-btn" 
              title={pdfFiles.length > 0 ? `Скачать ${pdfFiles.length} файл(ов)` : 'Нет доступных каталогов'}
              disabled={pdfFiles.length === 0}
              style={{ opacity: pdfFiles.length === 0 ? 0.3 : 1 }}
            >
              <img src={downloadPdfIcon} alt="Download PDF" className="pdf-icon" />
            </button>
            
            <div className="header-contacts">
              <a href="tel:+79217726407" className="header-phone">+7 921 7726407</a>
              <a href="mailto:info@scandola.ru" className="header-email">info@scandola.ru</a>
            </div>

            {/* Кнопка бургер-меню */}
            <button 
              className={`burger-btn ${isMenuOpen ? 'open' : ''}`} 
              onClick={toggleMenu}
              aria-label="Меню"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav">
            <Link to="/intro" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Введение
            </Link>
            <Link to="/about" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              О бренде
            </Link>

            <div className="mobile-dropdown">
              <button 
                className="mobile-dropdown-header"
                onClick={() => setIsMobileCatalogOpen(!isMobileCatalogOpen)}
              >
                Каталог
                <span className={`mobile-dropdown-arrow ${isMobileCatalogOpen ? 'open' : ''}`}>▼</span>
              </button>
              {isMobileCatalogOpen && (
                <div className="mobile-dropdown-menu">
                  {catalogItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="mobile-dropdown-item"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="mobile-dropdown">
              <button 
                className="mobile-dropdown-header"
                onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
              >
                Проекты
                <span className={`mobile-dropdown-arrow ${isMobileProjectsOpen ? 'open' : ''}`}>▼</span>
              </button>
              {isMobileProjectsOpen && (
                <div className="mobile-dropdown-menu">
                  {projects.map((project) => (
                    <Link
                      key={project.id}
                      to={`/projects/${project.id}`}
                      className="mobile-dropdown-item"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/partners" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Партнеры
            </Link>
            <Link to="/contacts" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              Контакты
            </Link>

            <div className="mobile-contacts">
              <a href="tel:+79217726407" className="mobile-phone">+7 921 7726407</a>
              <a href="mailto:info@scandola.ru" className="mobile-email">info@scandola.ru</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;