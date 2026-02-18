import React, { useState, useEffect } from 'react';
import './Catalog.css';

const Living = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [livingImages, setLivingImages] = useState([]);

  useEffect(() => {
    // Динамически импортируем все изображения из папки living
    const importAllImages = (r) => {
      return r.keys().map((key, index) => ({
        id: index + 1,
        src: r(key),
        alt: 'Дневная зона Scandola'
      }));
    };

    // Импортируем все изображения из папки living
    const images = importAllImages(
      require.context('../../assets/images/living', false, /\.(jpg|jpeg|png|gif)$/)
    );
    
    // Сортируем по имени файла
    const sortedImages = images.sort((a, b) => {
      const getNumber = (src) => {
        const match = src.default?.match(/living(\d+)_(\d+)/) || 
                     src.match(/living(\d+)_(\d+)/);
        return match ? parseInt(match[1]) * 1000 + parseInt(match[2]) : 0;
      };
      
      const numA = getNumber(a.src);
      const numB = getNumber(b.src);
      return numA - numB;
    });

    setLivingImages(sortedImages);
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
          <h1 className="page-title">ДНЕВНАЯ ЗОНА</h1>
        </section>
        
        <div className="catalog-gallery">
          {livingImages.map((image) => (
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

export default Living;