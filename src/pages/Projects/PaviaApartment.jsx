import React from 'react';
import '../Catalog/Catalog.css';

import project6_1 from '../../assets/images/project/project6_1.jpg';
import project6_2 from '../../assets/images/project/project6_2.jpg';
import project6_3 from '../../assets/images/project/project6_3.jpg';
import project6_4 from '../../assets/images/project/project6_4.jpg';
import project6_5 from '../../assets/images/project/project6_5.jpg';
import project6_6 from '../../assets/images/project/project6_6.jpg';

const PaviaApartment = () => {
  const images = [
    { id: 1, src: project6_1 },
    { id: 2, src: project6_2 },
    { id: 3, src: project6_3 },
    { id: 4, src: project6_4 },
    { id: 5, src: project6_5 },
    { id: 6, src: project6_6 }
  ];

  return (
    <div className="catalog-page">
      <div className="container">
        <section className="catalog-hero-section">
          <h1 className="page-title">ПАВИЯ КВАРТИРА</h1>
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
                  alt="Павия Квартира"
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

export default PaviaApartment;