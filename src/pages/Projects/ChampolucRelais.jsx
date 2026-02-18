import React from 'react';
import '../Catalog/Catalog.css';

import project9_1 from '../../assets/images/project/project9_1.jpg';
import project9_2 from '../../assets/images/project/project9_2.jpg';
import project9_3 from '../../assets/images/project/project9_3.jpg';
import project9_4 from '../../assets/images/project/project9_4.jpg';
import project9_5 from '../../assets/images/project/project9_5.jpg';
import project9_6 from '../../assets/images/project/project9_6.jpg';
import project9_7 from '../../assets/images/project/project9_7.jpg';

const ChampolucRelais = () => {
  const images = [
    { id: 1, src: project9_1 },
    { id: 2, src: project9_2 },
    { id: 3, src: project9_3 },
    { id: 4, src: project9_4 },
    { id: 5, src: project9_5 },
    { id: 6, src: project9_6 },
    { id: 7, src: project9_7 }
  ];

  return (
    <div className="catalog-page">
      <div className="container">
        <section className="catalog-hero-section">
          <h1 className="page-title">ШАМПОЛЮК ОТЕЛЬ RELAIS DES GLACIERS</h1>
          <div className="project-details">
            <span className="project-subtitle">Студия Startup</span>
          </div>
        </section>
        
        <div className="catalog-gallery">
          {images.map((image) => (
            <div key={image.id} className="catalog-item">
              <div className="catalog-image-container">
                <img 
                  src={image.src}
                  alt="Шамполюк Реле"
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

export default ChampolucRelais;