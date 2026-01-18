import React, { useState, useEffect } from 'react';
import './Catalog.css';

// Импортируем изображения напрямую
import c1 from '../../assets/images/c1.jpg';
import c1_1 from '../../assets/images/c1.1.jpg';
import c1_2 from '../../assets/images/c1.2.jpg';
import c2 from '../../assets/images/c2.jpg';
import c2_1 from '../../assets/images/c2.1.jpg';
import c2_2 from '../../assets/images/c2.2.jpg';

const Kitchens = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Массив с импортированными изображениями
  const kitchenImages = [
    { id: 1, src: c1, alt: 'Кухня Scandola' },
    { id: 2, src: c1_1, alt: 'Кухня Scandola' },
    { id: 3, src: c1_2, alt: 'Кухня Scandola' },
    { id: 4, src: c2, alt: 'Кухня Scandola' },
    { id: 5, src: c2_1, alt: 'Кухня Scandola' },
    { id: 6, src: c2_2, alt: 'Кухня Scandola' },
  ];

  // Имитация загрузки
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Функция для fallback изображения
  const handleImageError = (e) => {
    console.error('Ошибка загрузки изображения:', e.target.src);
    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f5f5f5"/></svg>';
  };

  if (isLoading) {
    return (
      <div className="catalog-page">
        <div className="container">
          <div className="catalog-loader">
            <div className="loader-spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="catalog-page">
      <div className="container">
        <section className="catalog-hero-section">
          <div className="catalog-hero-content">
            <h1 className="page-title">Кухни</h1>
            <p className="page-subtitle">
              Итальянские кухни от фабрики Scandola
            </p>
          </div>
        </section>
        <div className="catalog-divider"></div>
        <div className="catalog-gallery">
          {kitchenImages.map((image, index) => (
            <div 
              key={image.id}
              className="catalog-item animate-fade-in-scale"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="catalog-image-container">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="catalog-image"
                  onError={handleImageError}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kitchens;