import React from 'react';
import '../Catalog/Catalog.css';

import project8_1 from '../../assets/images/project/project8_1.jpg';
import project8_2 from '../../assets/images/project/project8_2.jpg';
import project8_3 from '../../assets/images/project/project8_3.jpg';
import project8_4 from '../../assets/images/project/project8_4.jpg';
import project8_5 from '../../assets/images/project/project8_5.jpg';

const SeefeldTorri = () => {
  const images = [
    { id: 1, src: project8_1 },
    { id: 2, src: project8_2 },
    { id: 3, src: project8_3 },
    { id: 4, src: project8_4 },
    { id: 5, src: project8_5 }
  ];

  return (
    <div className="catalog-page">
      <div className="container">
        <section className="catalog-hero-section">
          <h1 className="page-title">ЗЕЕФЕЛЬД АПАРТ-ОТЕЛЬ TORRI</h1>
        </section>
        
        <div className="catalog-gallery">
          {images.map((image) => (
            <div key={image.id} className="catalog-item">
              <div className="catalog-image-container">
                <img 
                  src={image.src}
                  alt="Зеефельд Торри"
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

export default SeefeldTorri;