import React from 'react';
import '../Catalog/Catalog.css';

import project12_1 from '../../assets/images/project/project12_1.jpg';
import project12_2 from '../../assets/images/project/project12_2.jpg';
import project12_3 from '../../assets/images/project/project12_3.jpg';
import project12_4 from '../../assets/images/project/project12_4.jpg';

const EscalonVilla = () => {
  const images = [
    { id: 1, src: project12_1 },
    { id: 2, src: project12_2 },
    { id: 3, src: project12_3 },
    { id: 4, src: project12_4 }
  ];

  return (
    <div className="catalog-page">
      <div className="container">
        <section className="catalog-hero-section">
          <h1 className="page-title">ЭСКАЛОН ВИЛЛА КАЛИФОРНИЯ</h1>
          <div className="project-details">
            <span className="project-subtitle">Студия Design</span>
          </div>
        </section>
        
        <div className="catalog-gallery">
          {images.map((image) => (
            <div key={image.id} className="catalog-item">
              <div className="catalog-image-container">
                <img 
                  src={image.src}
                  alt="Эскалон Вилла"
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

export default EscalonVilla;