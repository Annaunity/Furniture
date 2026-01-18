import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  useEffect(() => {
    setIsMenuOpen(false);
    setIsCatalogOpen(false);
  }, [location]);

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

  const catalogItems = [
    { name: 'Кухни', path: '/catalog/kitchens' },
    { name: 'Дневная зона', path: '/catalog/living' },
    { name: 'Спальная зона', path: '/catalog/bedrooms' },
    { name: 'Ванные комнаты', path: '/catalog/bathrooms' },
    { name: 'Дополнительно', path: '/catalog/additional' },
  ];

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={handleLogoClick}>
            <span className="logo-text">SCANDOLA</span>
          </Link>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
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
                        setIsMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`}>
              Проекты
            </Link>
            <Link to="/partners" className={`nav-link ${location.pathname === '/partners' ? 'active' : ''}`}>
              Партнеры
            </Link>
            <Link to="/contacts" className={`nav-link ${location.pathname === '/contacts' ? 'active' : ''}`}>
              Контакты
            </Link>
          </nav>

          <div className="header-contacts">
            <a href="tel:89217726407" className="header-phone">8 921 7726407</a>
            <a href="mailto:info@scandola.ru" className="header-email">info@scandola.ru</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;