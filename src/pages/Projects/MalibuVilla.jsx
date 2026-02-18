import React from 'react';
import '../Catalog/Catalog.css';

import project1_1 from '../../assets/images/project/project1_1.jpg';
import project1_2 from '../../assets/images/project/project1_2.jpg';
import project1_3 from '../../assets/images/project/project1_3.jpg';
import project1_4 from '../../assets/images/project/project1_4.jpg';
import project1_5 from '../../assets/images/project/project1_5.jpg';
import project1_6 from '../../assets/images/project/project1_6.jpg';

const MalibuVilla = () => {
  const images = [
    { id: 1, src: project1_1 },
    { id: 2, src: project1_2 },
    { id: 3, src: project1_3 },
    { id: 4, src: project1_4 },
    { id: 5, src: project1_5 },
    { id: 6, src: project1_6 }
  ];

  return (
    <div className="catalog-page">
      <div className="container">
        <section className="catalog-hero-section">
          <h1 className="page-title">МАЛИБУ ВИЛЛА</h1>
          <div className="project-details">
            <span className="project-subtitle">Студия Dal Lusso Design</span>
          </div>
        </section>
        
        <div className="catalog-gallery">
          {images.map((image) => (
            <div key={image.id} className="catalog-item">
              <div className="catalog-image-container">
                <img 
                  src={image.src}
                  alt="Малибу Вилла"
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

export default MalibuVilla;