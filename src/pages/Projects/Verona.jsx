import React from 'react';
import '../Catalog/Catalog.css';

import project7_1 from '../../assets/images/project/project7_1.jpg';
import project7_2 from '../../assets/images/project/project7_2.jpg';
import project7_3 from '../../assets/images/project/project7_3.jpg';
import project7_4 from '../../assets/images/project/project7_4.jpg';
import project7_5 from '../../assets/images/project/project7_5.jpg';
import project7_6 from '../../assets/images/project/project7_6.jpg';

const Verona = () => {
  const images = [
    { id: 1, src: project7_1 },
    { id: 2, src: project7_2 },
    { id: 3, src: project7_3 },
    { id: 4, src: project7_4 },
    { id: 5, src: project7_5 },
    { id: 6, src: project7_6 }
  ];

  return (
    <div className="catalog-page">
      <div className="container">
        <section className="catalog-hero-section">
          <h1 className="page-title">ВЕРОНА</h1>
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
                  alt="Верона"
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

export default Verona;