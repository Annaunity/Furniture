import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projectImages, setProjectImages] = useState([]);
  const [projectsData, setProjectsData] = useState({});

  useEffect(() => {
    const importAllImages = (r) => {
      return r.keys().map((key, index) => ({
        id: index + 1,
        src: r(key),
        alt: 'Проект Scandola',
        filename: key.replace('./', '')
      }));
    };

    const images = importAllImages(
      require.context('../../assets/images/project', false, /\.(jpg|jpeg|png|gif)$/)
    );
    
    const groupByProject = (images) => {
      const groups = {};
      
      images.forEach(image => {
        const match = image.filename.match(/project(\d+)_(\d+)\./);
        
        if (match) {
          const projectNum = parseInt(match[1]);
          if (!groups[projectNum]) {
            groups[projectNum] = [];
          }
          groups[projectNum].push({
            ...image,
            photoNum: parseInt(match[2])
          });
        }
      });
      
      Object.keys(groups).forEach(projectNum => {
        groups[projectNum].sort((a, b) => a.photoNum - b.photoNum);
      });
      
      return groups;
    };

    const projectsData = {
      1: {
        title: "МАЛИБУ ВИЛЛА",
        subtitle: "Студия Dal Lusso Design"
      },
      2: {
        title: "МИЛАН БАР REMEDY WINE&SPIRITS",
        subtitle: "Архитектор Аннализа Маццорати"
      },
      3: {
        title: "ФОРТЕ-ДЕИ-МАРМИ ОТЕЛЬ VILLA GREY",
        subtitle: "Архитектор Alessandro Agrati"
      },
      4: {
        title: "БИБИОНЕ АПАРТАМЕНТЫ",
        subtitle: ""
      },
      5: {
        title: "ОСТУНИ АПУЛИЯ",
        subtitle: "Дизайнер Джанпаоло Герра"
      },
      6: {
        title: "ПАВИЯ КВАРТИРА",
        subtitle: "Студия Startup"
      },
      7: {
        title: "ВЕРОНА",
        subtitle: "Архитектор Alessandro Agrati"
      },
      8: {
        title: "ЗЕЕФЕЛЬД АПАРТ-ОТЕЛЬ TORRI",
        subtitle: ""
      },
      9: {
        title: "ШАМПОЛЮК ОТЕЛЬ RELAIS DES GLACIERS",
        subtitle: "Студия Startup"
      },
      10: {
        title: "КАРИНТИЯ ОТЕЛЬ KOLLER",
        subtitle: "Компания Prader Interior"
      },
      11: {
        title: "CONCO ОТЕЛЬ ANTICO BORGO BRUNELLI",
        subtitle: ""
      },
      12: {
        title: "ЭСКАЛОН ВИЛЛА КАЛИФОРНИЯ",
        subtitle: "Студия Design"
      }
    };

    const groupedByProject = groupByProject(images);
    setProjectsData(projectsData);
    
    const sections = Object.keys(groupedByProject)
      .sort((a, b) => parseInt(a) - parseInt(b))
      .map(projectNum => ({
        id: parseInt(projectNum),
        title: projectsData[projectNum]?.title || `Проект ${projectNum}`,
        subtitle: projectsData[projectNum]?.subtitle || '',
        images: groupedByProject[projectNum]
      }));

    setProjectImages(sections);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="projects-single-page">
        <div className="container">
          <div className="catalog-loader">
            <div className="loader-spinner"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-single-page">
      <div className="container">
        {projectImages.map((project, sectionIndex) => (
          <div key={sectionIndex} className="project-section">
            <section className="project-hero-section">
              <div className="project-hero-content">
                <h1 className="project-title-main">{project.title}</h1>
                {project.subtitle && (
                  <div className="project-details">
                    <span className="project-subtitle">{project.subtitle}</span>
                  </div>
                )}
              </div>
            </section>
            
            <div className="project-grid">
              {project.images.map((image) => (
                <div key={`${project.id}_${image.photoNum}`} className="grid-item">
                  <img 
                    src={image.src.default || image.src}
                    alt={`${project.title} - фото ${image.photoNum}`}
                    className="grid-image"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;