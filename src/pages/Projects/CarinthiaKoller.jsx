import React from 'react';
import '../Catalog/Catalog.css';

import project10_1 from '../../assets/images/project/project10_1.jpg';
import project10_2 from '../../assets/images/project/project10_2.jpg';
import project10_3 from '../../assets/images/project/project10_3.jpg';

const CarinthiaKoller = () => {
  const images = [
    { id: 1, src: project10_1 },
    { id: 2, src: project10_2 },
    { id: 3, src: project10_3 }
  ];

  return (
    <div className="catalog-page">
      <div className="container">
        <section className="catalog-hero-section">
          <h1 className="page-title">КАРИНТИЯ ОТЕЛЬ KOLLER</h1>
          <div className="project-details">
            <span className="project-subtitle">Компания Prader Interior</span>
          </div>
        </section>
        
        <div className="catalog-gallery">
          {images.map((image) => (
            <div key={image.id} className="catalog-item">
              <div className="catalog-image-container">
                <img 
                  src={image.src}
                  alt="Каринтия Коллер"
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

export default CarinthiaKoller;