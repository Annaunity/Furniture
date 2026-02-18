import React from 'react';
import '../Catalog/Catalog.css';

import project2_1 from '../../assets/images/project/project2_1.jpg';
import project2_2 from '../../assets/images/project/project2_2.jpg';
import project2_3 from '../../assets/images/project/project2_3.jpg';
import project2_4 from '../../assets/images/project/project2_4.jpg';
import project2_5 from '../../assets/images/project/project2_5.jpg';
import project2_6 from '../../assets/images/project/project2_6.jpg';

const MilanBar = () => {
  const images = [
    { id: 1, src: project2_1 },
    { id: 2, src: project2_2 },
    { id: 3, src: project2_3 },
    { id: 4, src: project2_4 },
    { id: 5, src: project2_5 },
    { id: 6, src: project2_6 }
  ];

  return (
    <div className="catalog-page">
      <div className="container">
        <section className="catalog-hero-section">
          <h1 className="page-title">МИЛАН БАР REMEDY WINE&SPIRITS</h1>
          <div className="project-details">
            <span className="project-subtitle">Архитектор Аннализа Маццорати</span>
          </div>
        </section>
        
        <div className="catalog-gallery">
          {images.map((image) => (
            <div key={image.id} className="catalog-item">
              <div className="catalog-image-container">
                <img 
                  src={image.src}
                  alt="Милан Бар"
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

export default MilanBar;