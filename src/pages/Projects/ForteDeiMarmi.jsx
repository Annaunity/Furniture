import React from 'react';
import '../Catalog/Catalog.css';

import project3_1 from '../../assets/images/project/project3_1.jpg';
import project3_2 from '../../assets/images/project/project3_2.jpg';
import project3_3 from '../../assets/images/project/project3_3.jpg';
import project3_4 from '../../assets/images/project/project3_4.jpg';
import project3_5 from '../../assets/images/project/project3_5.jpg';
import project3_6 from '../../assets/images/project/project3_6.jpg';
import project3_7 from '../../assets/images/project/project3_7.jpg';
import project3_8 from '../../assets/images/project/project3_8.jpg';

const ForteDeiMarmi = () => {
  const images = [
    { id: 1, src: project3_1 },
    { id: 2, src: project3_2 },
    { id: 3, src: project3_3 },
    { id: 4, src: project3_4 },
    { id: 5, src: project3_5 },
    { id: 6, src: project3_6 },
    { id: 7, src: project3_7 },
    { id: 8, src: project3_8 }
  ];

  return (
    <div className="catalog-page">
      <div className="container">
        <section className="catalog-hero-section">
          <h1 className="page-title">ФОРТЕ-ДЕИ-МАРМИ ОТЕЛЬ VILLA GREY</h1>
          <div className="project-details">
            <span className="project-subtitle">Архитектор Alessandro Agrati</span>
          </div>
        </section>
        
        <div className="catalog-gallery">
          {images.map((image) => (
            <div key={image.id} className="catalog-item">
              <div className="catalog-image-container">
                <img 
                  src={image.src}
                  alt="Форте-деи-Марми"
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

export default ForteDeiMarmi;