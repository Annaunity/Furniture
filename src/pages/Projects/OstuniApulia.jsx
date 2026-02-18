import React from 'react';
import '../Catalog/Catalog.css';

import project5_1 from '../../assets/images/project/project5_1.jpg';
import project5_2 from '../../assets/images/project/project5_2.jpg';
import project5_3 from '../../assets/images/project/project5_3.jpg';

const OstuniApulia = () => {
  const images = [
    { id: 1, src: project5_1 },
    { id: 2, src: project5_2 },
    { id: 3, src: project5_3 }
  ];

  return (
    <div className="catalog-page">
      <div className="container">
        <section className="catalog-hero-section">
          <h1 className="page-title">ОСТУНИ АПУЛИЯ</h1>
          <div className="project-details">
            <span className="project-subtitle">Дизайнер Джанпаоло Герра</span>
          </div>
        </section>
        
        <div className="catalog-gallery">
          {images.map((image) => (
            <div key={image.id} className="catalog-item">
              <div className="catalog-image-container">
                <img 
                  src={image.src}
                  alt="Остуни Апулия"
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

export default OstuniApulia;