import React from 'react';
import '../Catalog/Catalog.css';

import project4_1 from '../../assets/images/project/project4_1.jpg';
import project4_2 from '../../assets/images/project/project4_2.jpg';
import project4_3 from '../../assets/images/project/project4_3.jpg';
import project4_4 from '../../assets/images/project/project4_4.jpg';
import project4_5 from '../../assets/images/project/project4_5.jpg';
import project4_6 from '../../assets/images/project/project4_6.jpg';
import project4_7 from '../../assets/images/project/project4_7.jpg';

const BibioneApartments = () => {
  const images = [
    { id: 1, src: project4_1 },
    { id: 2, src: project4_2 },
    { id: 3, src: project4_3 },
    { id: 4, src: project4_4 },
    { id: 5, src: project4_5 },
    { id: 6, src: project4_6 },
    { id: 7, src: project4_7 }
  ];

  return (
    <div className="catalog-page">
      <div className="container">
        <section className="catalog-hero-section">
          <h1 className="page-title">БИБИОНЕ АПАРТАМЕНТЫ</h1>
        </section>
        
        <div className="catalog-gallery">
          {images.map((image) => (
            <div key={image.id} className="catalog-item">
              <div className="catalog-image-container">
                <img 
                  src={image.src}
                  alt="Бибионе Апартаменты"
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

export default BibioneApartments;