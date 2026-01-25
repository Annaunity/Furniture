import React, { useState, useEffect } from 'react';
import './Catalog.css';

const Kitchens = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [kitchenImages, setKitchenImages] = useState([]);

  useEffect(() => {
    // Динамически импортируем все изображения из папки kitchen
    const importAllImages = (r) => {
      return r.keys().map((key, index) => ({
        id: index + 1,
        src: r(key),
        alt: 'Кухня Scandola'
      }));
    };

    // Импортируем все изображения из папки kitchen
    const images = importAllImages(
      require.context('../../assets/images/kitchen', false, /\.(jpg|jpeg|png|gif)$/)
    );
    
    // Сортируем по имени файла, если нужно
    const sortedImages = images.sort((a, b) => {
      const getNumber = (src) => {
        const match = src.default?.match(/kitchen(\d+)_(\d+)/) || 
                     src.match(/kitchen(\d+)_(\d+)/);
        return match ? parseInt(match[1]) * 1000 + parseInt(match[2]) : 0;
      };
      
      const numA = getNumber(a.src);
      const numB = getNumber(b.src);
      return numA - numB;
    });

    setKitchenImages(sortedImages);
    setIsLoading(false);
  }, []);

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
          <h1 className="page-title">КУХНИ</h1>
        </section>
        
        <div className="catalog-gallery">
          {kitchenImages.map((image) => (
            <div key={image.id} className="catalog-item">
              <div className="catalog-image-container">
                <img 
                  src={image.src.default || image.src}
                  alt={image.alt}
                  className="catalog-image"
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