import React, { useEffect, useRef } from 'react';
import './About.css';

import aboutHero from '../../assets/images/about.jpg';
import about1 from '../../assets/images/about1.jpg';
import about2 from '../../assets/images/about2.jpg';
import certificate1 from '../../assets/images/certificate1.jpg';
import certificate2 from '../../assets/images/certificate2.jpg';
import certificate3 from '../../assets/images/certificate3.jpg';
import wood from '../../assets/images/wood.jpg';
import tradition from '../../assets/images/tradition.jpg';
import quality from '../../assets/images/quality.jpg';

const About = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const checkVisibility = () => {
      sectionsRef.current.forEach((section) => {
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
          section.classList.add('about-animate-visible');
        }
      });
    };

    sectionsRef.current = document.querySelectorAll('.about-animate-on-scroll');
    
    checkVisibility();
    
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    
    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, []);

  // Данные для деревянных карточек с фоновыми изображениями
  const woodFeatures = [
    { 
      id: 1,
      title: 'Экологичность', 
      text: 'Использование только сертифицированной древесины',
      bgImage: wood,
      accentColor: '#8B7355'
    },
    { 
      id: 2,
      title: 'Традиции', 
      text: 'Итальянское мастерство обработки дерева',
      bgImage: tradition,
      accentColor: '#A67C52'
    },
    { 
      id: 3,
      title: 'Качество', 
      text: 'Искусные изделия, которые прослужат долгие годы',
      bgImage: quality,
      accentColor: '#C4A484'
    }
  ];

  // Данные для сертификатов в порядке 1-3-2
  const certificates = [
    { id: 1, image: certificate1, alt: 'Сертификат качества 1' },
    { id: 3, image: certificate3, alt: 'Сертификат качества 3' },
    { id: 2, image: certificate2, alt: 'Сертификат качества 2' }
  ];

  return (
    <div className="about-page">
      {/* Герой секция */}
      <section className="about-hero-section">
        <div className="about-hero-image-container">
          <img 
            src={aboutHero} 
            alt="Scandola фабрика" 
            className="about-hero-image"
          />
          <div className="about-hero-overlay"></div>
        </div>
        
        <div className="about-hero-content">
          <div className="about-hero-text-content">
            <div className="about-hero-subtitle">О бренде</div>
            <h1 className="about-hero-title">SCANDOLA</h1>
            <div className="about-hero-divider"></div>
            <p className="about-hero-description">
              50 лет итальянского мастерства и инноваций в производстве мебели
            </p>
          </div>
        </div>
      </section>

      {/* Секция 1: Начало пути */}
      <section className="about-content-section about-section-1">
        <div className="container">
          <div className="about-section-grid">
            <div className="about-section-content about-animate-on-scroll">
              <div className="year-large">1976</div>
              <h2 className="about-section-title">НАЧАЛО ПУТИ</h2>
              <div className="about-section-divider"></div>
              <div className="about-text-content">
                <p className="about-lead-text">
                  1976 – это год, когда Карло Скандола открывает свою мастерскую, объединяя два основных ингредиента: опыт, накопленный в ремесленных мастерских Веронезе, и готовность превозносить территорию вокруг него.
                </p>
                <p>
                  Он инвестирует все свои сбережения в этот проект - свою первую штаб-квартиру в Боско Кьезануова, в горах Лессини, в окрестностях Вероны, на высоте 1100 метров.
                </p>
              </div>
            </div>
            
            <div className="about-section-image about-animate-on-scroll">
              <div className="image-container-clean">
                <img 
                  src={about1} 
                  alt="История Scandola" 
                  className="about-section-img"
                />
                <div className="image-corner-1"></div>
                <div className="image-corner-2"></div>
                <div className="image-corner-3"></div>
                <div className="image-corner-4"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция 2: Развитие */}
      <section className="about-content-section about-section-2">
        <div className="container">
          <div className="about-section-grid about-reverse-grid">
            <div className="about-section-image about-animate-on-scroll">
              <div className="image-container-clean">
                <img 
                  src={about2} 
                  alt="Развитие компании" 
                  className="about-section-img"
                />
                <div className="image-corner-1"></div>
                <div className="image-corner-2"></div>
                <div className="image-corner-3"></div>
                <div className="image-corner-4"></div>
              </div>
            </div>
            
            <div className="about-section-content about-animate-on-scroll">
              <h2 className="about-section-title">РОСТ И РАЗВИТИЕ</h2>
              <div className="about-section-divider"></div>
              <div className="about-text-content">
                <p>
                    Первый шаг - каталоги для продажи на местном уровне до расширения в Италии и за рубежом, амбициозные проекты, которые смотрят в будущее.
                </p>
                <div className="about-highlight-text">
                  <p>
                    Стилистические исследования Карло Скандола, какими бы инновационными они ни были, никогда не забывают традиции: корни всегда являются основой новых идей.
                  </p>
                </div>
                <p>
                  Карло Скандола начинает сотрудничество с известными и ценными дизайнерами, открывая компанию новым вызовам и границам.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция 3: Философия */}
      <section className="about-content-section about-full-width">
        <div className="container">
          <div className="about-philosophy-content about-animate-on-scroll">
            <h2 className="about-philosophy-title">ФИЛОСОФИЯ БРЕНДА</h2>
            <div className="about-philosophy-divider"></div>
            <p className="about-philosophy-text">
              Scandola благодаря Карло - компания, которая делает ставку на 100% итальянское ремесло и искусство, любит и ценит природу, творит каждый день и с огромной страстью. 
            </p>
            
            <div className="about-philosophy-stats">
              <div className="about-stat-item">
                <div className="about-stat-number">50</div>
                <div className="about-stat-label">лет истории</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-number">10,000<span className="stat-unit">м²</span></div>
                <div className="about-stat-label">штаб-квартира</div>
              </div>
              <div className="about-stat-item">
                <div className="about-stat-number">7</div>
                <div className="about-stat-label">стран присутствия</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция 4: Дерево */}
      <section className="about-content-section about-section-4">
        <div className="container">
          <div className="about-wood-section">
            <h2 className="about-wood-title about-animate-on-scroll">ДЕРЕВО - ГЛАВНЫЙ ГЕРОЙ</h2>
            <div className="about-wood-divider"></div>
            <p className="about-wood-text about-animate-on-scroll">
              В течение 50 лет дерево – это главный герой для мебельной компании Scandola, сознательный и ответственный выбор драгоценного природного дара.
            </p>
            
            <div className="about-wood-grid">
              {woodFeatures.map((feature) => (
                <div 
                  key={feature.id}
                  className="about-wood-card about-animate-on-scroll"
                  style={{ 
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url(${feature.bgImage})`,
                    borderLeftColor: feature.accentColor
                  }}
                >
                  <div className="card-blur-layer"></div>
                  <div className="wood-card-content">
                    <h3 className="wood-card-title">{feature.title}</h3>
                    <p>{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Секция 5: Сертификаты */}
      <section className="about-content-section about-section-5">
        <div className="container">
          <div className="about-certificates-section">
            <h2 className="about-certificates-title about-animate-on-scroll">СЕРТИФИКАТЫ</h2>
            <div className="about-certificates-divider"></div>
            {/* <p className="about-certificates-description about-animate-on-scroll">
              Наша приверженность качеству подтверждена международными сертификатами
            </p> */}
            
            <div className="about-certificates-grid">
              {certificates.map((cert, index) => (
                <div 
                  key={cert.id} 
                  className={`about-certificate-card about-animate-on-scroll certificate-item-${index}`}
                >
                  <div className="certificate-image-container">
                    <div className="certificate-image-wrapper">
                      <img 
                        src={cert.image} 
                        alt={cert.alt} 
                        className="certificate-img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;