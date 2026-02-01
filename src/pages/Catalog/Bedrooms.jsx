import React, { useState, useEffect } from 'react';
import './Catalog.css';
import bedroomCatalog from '../../catalogs/bedrooms_catalog.pdf';


const Bedrooms = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bedroomImages, setBedroomImages] = useState([]);

  useEffect(() => {
    // Динамически импортируем все изображения из папки bedroom
    const importAllImages = (r) => {
      return r.keys().map((key, index) => ({
        id: index + 1,
        src: r(key),
        alt: 'Спальня Scandola'
      }));
    };

    // Импортируем все изображения из папки bedroom
    const images = importAllImages(
      require.context('../../assets/images/bedroom', false, /\.(jpg|jpeg|png|gif)$/)
    );
    
    // Сортируем по имени файла
    const sortedImages = images.sort((a, b) => {
      const getNumber = (src) => {
        const match = src.default?.match(/bedroom(\d+)_(\d+)/) || 
                     src.match(/bedroom(\d+)_(\d+)/);
        return match ? parseInt(match[1]) * 1000 + parseInt(match[2]) : 0;
      };
      
      const numA = getNumber(a.src);
      const numB = getNumber(b.src);
      return numA - numB;
    });

    setBedroomImages(sortedImages);
    setIsLoading(false);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = bedroomCatalog;
    link.download = 'Каталог спальные зоны.pdf'; 
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
              Для скачивания каталога спальных зон нажмите на кнопку
            </p>
            <button className="download-button" onClick={handleDownload}>
              <img 
                src="/icons/download.png" 
                alt="Скачать каталог"
                className="download-icon"
              />
              <span>Скачать каталог спален</span>
            </button>
          </div>
        </div>
        
        <section className="catalog-hero-section">
          <h1 className="page-title">СПАЛЬНАЯ ЗОНА</h1>
        </section>
        
        <div className="catalog-gallery">
          {bedroomImages.map((image) => (
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

export default Bedrooms;