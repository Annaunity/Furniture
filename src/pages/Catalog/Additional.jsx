import React, { useState, useEffect } from 'react';
import './Catalog.css';

const Additional = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [additionalImages, setAdditionalImages] = useState([]);

  useEffect(() => {
    // Динамически импортируем все изображения из папки additional
    const importAllImages = (r) => {
      return r.keys().map((key, index) => ({
        id: index + 1,
        src: r(key),
        alt: 'Дополнительно Scandola'
      }));
    };

    // Импортируем все изображения из папки additional
    const images = importAllImages(
      require.context('../../assets/images/additional', false, /\.(jpg|jpeg|png|gif)$/)
    );
    
    // Сортируем по имени файла
    const sortedImages = images.sort((a, b) => {
      const getNumber = (src) => {
        const match = src.default?.match(/(\d+)_(\d+)/) || 
                     src.match(/(\d+)_(\d+)/);
        return match ? parseInt(match[1]) * 1000 + parseInt(match[2]) : 0;
      };
      
      const numA = getNumber(a.src);
      const numB = getNumber(b.src);
      return numA - numB;
    });

    setAdditionalImages(sortedImages);
    setIsLoading(false);
  }, []);

  // Группируем фото по сериям (первое число в имени)
  const groupBySeries = (images) => {
    const groups = {};
    
    images.forEach(image => {
      const match = (image.src.default?.match(/(\d+)_(\d+)/) || 
                    image.src.match(/(\d+)_(\d+)/));
      
      if (match) {
        const series = parseInt(match[1]);
        if (!groups[series]) {
          groups[series] = [];
        }
        groups[series].push(image);
      }
    });
    
    return groups;
  };

  const seriesTitles = {
    1: "ШКАФЫ",
    2: "КРОВАТИ",
    3: "КОМОДЫ",
    4: "ТУМБОЧКИ",
    5: "СТОЛЫ ПИСЬМЕННЫЕ",
    6: "СТОЛЫ",
    7: "ЖУРНАЛЬНЫЕ СТОЛИКИ",
    8: "СУНДУКИ",
    9: "СТУЛЬЯ И ТАБУРЕТЫ",
    10: "БУФЕТЫ И ПРИЛАВКИ",
    11: "ПОЛКИ"
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

  // Группируем фото по сериям
  const groupedBySeries = groupBySeries(additionalImages);
  const sections = [];

  // Создаем разделы для каждой серии
  Object.keys(groupedBySeries)
    .sort((a, b) => parseInt(a) - parseInt(b))
    .forEach(series => {
      const images = groupedBySeries[series];
      const title = seriesTitles[series] || `Серия ${series}`;
      
      sections.push({
        title,
        images
      });
    });

  return (
    <div className="catalog-page">
      <div className="container">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="catalog-section">
            <section className="catalog-hero-section">
              <h1 className="page-title-additional">{section.title}</h1>
            </section>
            
            <div className="catalog-gallery">
              {section.images.map((image) => (
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
        ))}
      </div>
    </div>
  );
};

export default Additional;