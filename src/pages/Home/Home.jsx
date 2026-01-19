import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import homeImage from '../../assets/images/home.jpg';
import aboutImage from '../../assets/images/about.jpg';
import nataliaImage from '../../assets/images/natalia.jpg';

const Home = () => {
  return (
    <div className="home">
      {/* Просто фотка */}
      <div className="home-background">
        <img 
          src={homeImage} 
          alt="Дизайнерский интерьер" 
          className="home-background-image"
        />
        
        {/* Эффект стекла */}
        <div className="home-glass-effect"></div>
        
        {/* Логотип - два отдельных элемента */}
        <div className="home-logo">
          <span className="home-scan">SCAN</span>
          <span className="home-dola">DOLA</span>
        </div>

        {/* Кнопки на главном экране */}
        <div className="home-buttons">
          <Link to="/contacts" className="home-button">
            Контакты
          </Link>
          <Link to="/catalog/kitchens" className="home-button home-button-primary">
            Каталог
          </Link>
        </div>
      </div>

      {/* Секция 1: О нас*/}
      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-subtitle text-uppercase text-gold">О нас</span>
              <h2 className="section-title">
                Scandola
              </h2>
              <div className="divider-short"></div>
              <p className="text-lead">
                Создаём мебель, которая становится частью вашей жизни. 
                Наша философия — сочетание итальянского дизайна, превосходного качества 
                и индивидуального подхода к каждому клиенту.
              </p>
              <p>
                Мы используем только экологичные материалы и современные технологии, 
                чтобы создавать мебель, которая прослужит долгие годы и будет радовать 
                вас каждый день.
              </p>
              <Link to="/about" className="btn">
                Узнать больше
                <span className="btn-arrow">→</span>
              </Link>
            </div>
            <div className="about-image">
              <img 
                src={aboutImage} 
                alt="Команда Scandola" 
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Секция 2: О Наталье Чопик */}
      <section className="section founder-section bg-white">
        <div className="container">
          <div className="founder-grid">
            <div className="founder-image">
              <div className="founder-image-container">
                <img 
                  src={nataliaImage} 
                  alt="Наталья Чопик - основатель и дизайнер бренда Scandola" 
                  className="founder-img"
                />
              </div>
            </div>
            
            <div className="founder-content">
              <span className="section-subtitle text-uppercase text-gold">Дистрибьютер бренда</span>
              <h2 className="section-title">Наталья Чопик</h2>
              <div className="divider-short"></div>
              <div className="founder-description">
                <p className="text-lead">
                  Профессионал с многолетним опытом работы в сфере дизайна интерьеров, 
                  создаёт пространства, которые становятся сердцем каждого дома.
                </p>
                <p>
                  Её философия заключается в гармоничном сочетании функциональности, 
                  эстетики и индивидуальности. Каждый проект — это результат тщательного 
                  анализа потребностей клиента и внимания к деталям.
                </p>
                <p>
                  Наталья лично контролирует каждый этап работы: от первой консультации 
                  до финальной установки, гарантируя безупречный результат.
                </p>
              </div>
              <div className="founder-quote">
                <div className="quote-icon">"</div>
                <p className="quote-text">
                  Мой подход к дизайну — это создание не просто красивых интерьеров, 
                  а пространств, которые отражают характер своих владельцев и создают 
                  атмосферу уюта и гармонии.
                </p>
              </div>
              <Link to="/about" className="btn">
                Подробнее о бренде
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;