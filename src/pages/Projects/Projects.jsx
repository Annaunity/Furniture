import React from 'react';
import './Projects.css';

import project1 from '../../assets/images/project1.jpg';
import project2 from '../../assets/images/project2.jpg';
import project3 from '../../assets/images/project3.jpg';
import project4 from '../../assets/images/project4.jpg';
import project5 from '../../assets/images/project5.jpg';
import project6 from '../../assets/images/project6.jpg';

const Projects = () => {
  return (
    <div className="projects-single-page">
      <section className="project-hero-section">
        <div className="container">
          <div className="project-hero-content">
            <h1 className="project-title-main">ВИЛЛА МАЛИБУ</h1>
            <div className="project-details">
              <span className="project-subtitle">дизайн и тепло дерева,</span>
              <span className="project-designer">Dal Lusso Дизайн</span>
            </div>
          </div>
        </div>
      </section>

      {/* Сетка 6 фото */}
      <section className="project-grid-section">
        <div className="project-grid">
          {[
            { id: 1, image: project1, alt: "Вид гостиной с деревянной мебелью" },
            { id: 2, image: project2, alt: "Кухонная зона с островом" },
            { id: 3, image: project3, alt: "Спальня с панорамными окнами" },
            { id: 4, image: project4, alt: "Столовая зона с деревянным столом" },
            { id: 5, image: project5, alt: "Библиотека с встроенными полками" },
            { id: 6, image: project6, alt: "Ванная комната с натуральным деревом" }
          ].map((photo, index) => (
            <div 
              key={`grid-${photo.id}`} 
              className={`grid-item grid-item-${index + 1}`}
            >
              <img 
                src={photo.image} 
                alt={photo.alt} 
                className="grid-image"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;