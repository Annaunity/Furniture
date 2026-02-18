import React from 'react';
import '../Catalog/Catalog.css';

import project11_1 from '../../assets/images/project/project11_1.jpg';
import project11_2 from '../../assets/images/project/project11_2.jpg';
import project11_3 from '../../assets/images/project/project11_3.jpg';
import project11_4 from '../../assets/images/project/project11_4.jpg';
import project11_5 from '../../assets/images/project/project11_5.jpg';
import project11_6 from '../../assets/images/project/project11_6.jpg';
import project11_7 from '../../assets/images/project/project11_7.jpg';

const ConcoAntico = () => {
  const images = [
    { id: 1, src: project11_1 },
    { id: 2, src: project11_2 },
    { id: 3, src: project11_3 },
    { id: 4, src: project11_4 },
    { id: 5, src: project11_5 },
    { id: 6, src: project11_6 },
    { id: 7, src: project11_7 }

  ];

  return (
    <div className="catalog-page">
      <div className="container">
        <section className="catalog-hero-section">
          <h1 className="page-title">CONCO ОТЕЛЬ ANTICO BORGO BRUNELLI</h1>
        </section>
        
        <div className="catalog-gallery">
          {images.map((image) => (
            <div key={image.id} className="catalog-item">
              <div className="catalog-image-container">
                <img 
                  src={image.src}
                  alt="Конко Антико"
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

export default ConcoAntico;