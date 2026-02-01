import React, { useState, useEffect } from 'react';
import './Catalog.css';
import bathroomsCatalog from '../../catalogs/bathrooms_catalog.pdf';

const Bathrooms = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bathroomImages, setBathroomImages] = useState([]);

  useEffect(() => {
    // Динамически импортируем все изображения из папки bathroom
    const importAllImages = (r) => {
      return r.keys().map((key, index) => ({
        id: index + 1,
        src: r(key),
        alt: 'Ванная Scandola'
      }));
    };

    // Импортируем все изображения из папки bathroom
    const images = importAllImages(
      require.context('../../assets/images/bathroom', false, /\.(jpg|jpeg|png|gif)$/)
    );
    
    // Сортируем по имени файла
    const sortedImages = images.sort((a, b) => {
      const getNumber = (src) => {
        const match = src.default?.match(/bathroom(\d+)_(\d+)/) || 
                     src.match(/bathroom(\d+)_(\d+)/);
        return match ? parseInt(match[1]) * 1000 + parseInt(match[2]) : 0;
      };
      
      const numA = getNumber(a.src);
      const numB = getNumber(b.src);
      return numA - numB;
    });

    setBathroomImages(sortedImages);
    setIsLoading(false);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = bathroomsCatalog;
    link.download = 'Каталог ванные комнаты.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <div className="catalog-download-block">
          <div className="download-content">
            <p className="download-description">
              Для скачивания каталога ванных комнат нажмите на кнопку
            </p>
            <button className="download-button" onClick={handleDownload}>
              <img 
                src="/icons/download.png" 
                alt="Скачать каталог"
                className="download-icon"
              />
              <span>Скачать каталог ванных комнат</span>
            </button>
          </div>
        </div>
        
        <section className="catalog-hero-section">
          <h1 className="page-title">ВАННЫЕ КОМНАТЫ</h1>
        </section>
        
        <div className="catalog-gallery">
          {bathroomImages.map((image) => (
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

export default Bathrooms;