import React, { useState, useEffect } from 'react';
import './Catalog.css';
import kitchenCatalog1 from '../../catalogs/kitchens_catalog_1.pdf';
import kitchenCatalog2 from '../../catalogs/kitchens_catalog_2.pdf';


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

  const handleDownloadCatalog1 = () => {
    const link = document.createElement('a');
    link.href = kitchenCatalog1;
    link.download = 'Каталог кухни ель.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCatalog2 = () => {
    const link = document.createElement('a');
    link.href = kitchenCatalog2;
    link.download = 'Каталог кухни дуб.pdf';
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
              Для скачивания каталога кухонь нажмите на кнопку
            </p>
            <div className="kitchen-download-buttons">
              <button className="download-button-kitchen" onClick={handleDownloadCatalog1}>
                <img 
                  src="/icons/download.png" 
                  alt="Скачать каталог"
                  className="download-icon"
                />
                <span>Каталог кухонь ель</span>
              </button>
              <button className="download-button-kitchen" onClick={handleDownloadCatalog2}>
                <img 
                  src="/icons/download.png" 
                  alt="Скачать каталог"
                  className="download-icon"
                />
                <span>Каталог кухонь дуб</span>
              </button>
            </div>
          </div>
        </div>
        
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