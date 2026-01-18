import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

import project1 from '../../assets/images/project1.jpg';
import project2 from '../../assets/images/project2.jpg';
import project3 from '../../assets/images/project3.jpg';
import project4 from '../../assets/images/project4.jpg';
import project5 from '../../assets/images/project5.jpg';
import project6 from '../../assets/images/project6.jpg';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const galleryTrackRef = useRef(null);
  
  const projectData = {
    title: "Вилла Малибу",
    subtitle: "дизайн и тепло дерева",
    designer: "Dal Lusso Дизайн",
    photos: [
      { 
        id: 1, 
        image: project1, 
        alt: "Вид гостиной с деревянной мебелью",
        ratioClass: 'horizontal'
      },
      { 
        id: 2, 
        image: project2, 
        alt: "Кухонная зона с островом",
        ratioClass: 'square'
      },
      { 
        id: 3, 
        image: project3, 
        alt: "Спальня с панорамными окнами",
        ratioClass: 'vertical'
      },
      { 
        id: 4, 
        image: project4, 
        alt: "Столовая зона с деревянным столом",
        ratioClass: 'square-perfect'
      },
      { 
        id: 5, 
        image: project5, 
        alt: "Библиотека с встроенными полками",
        ratioClass: 'wide'
      },
      { 
        id: 6, 
        image: project6, 
        alt: "Ванная комната с натуральным деревом",
        ratioClass: 'tall'
      }
    ]
  };

  // Дублируем фото для круговой прокрутки
  const galleryPhotos = [
    ...projectData.photos.slice(-2),
    ...projectData.photos,
    ...projectData.photos.slice(0, 2)
  ];

  // Рассчитываем смещение для галереи
  const getGalleryTransform = () => {
    if (!galleryTrackRef.current) return 'translateX(0)';
    
    const slideWidth = getSlideWidth();
    const offset = (currentIndex + 2) * slideWidth;
    return `translateX(-${offset}px)`;
  };

  // Получаем ширину одного слайда
  const getSlideWidth = () => {
    if (!galleryTrackRef.current || !galleryTrackRef.current.children[2]) return 0;
    const slide = galleryTrackRef.current.children[2];
    const slideWidth = slide.offsetWidth;
    const gap = 30;
    return slideWidth + gap;
  };

  // Переход к следующему фото
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(prev => {
      if (prev >= projectData.photos.length - 1) {
        return 0;
      }
      return prev + 1;
    });
    
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Переход к предыдущему фото
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(prev => {
      if (prev <= 0) {
        return projectData.photos.length - 1;
      }
      return prev - 1;
    });
    
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Переход к конкретному фото
  const goToSlide = (index) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex(index);
    
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Обработчик свайпов
  const handleTouchStart = (e) => {
    setAutoPlay(false);
    if (!galleryTrackRef.current) return;
    galleryTrackRef.current.touchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!galleryTrackRef.current || !galleryTrackRef.current.touchStartX) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = galleryTrackRef.current.touchStartX - touchEndX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setTimeout(() => setAutoPlay(true), 5000);
  };

  // Автоматическая круговая прокрутка
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [autoPlay, currentIndex]);

  const handleMouseEnter = () => {
    setAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setAutoPlay(true);
  };

  return (
    <div className="projects-single-page">
      <section className="project-hero-section">
        <div className="container">
          <div className="project-hero-content">
            <h1 className="project-title-main">{projectData.title}</h1>
            <p className="project-subtitle">{projectData.subtitle}</p>
            <div className="project-designer">{projectData.designer}</div>
          </div>
        </div>
      </section>

      {/* Фото листающиеся */}
      <section className="main-gallery-section">
        <div className="gallery-container">
          <div 
            className="gallery-track"
            ref={galleryTrackRef}
            style={{ transform: getGalleryTransform() }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {galleryPhotos.map((photo, index) => (
              <div 
                key={`${photo.id}-${index}`} 
                className={`gallery-slide ${photo.ratioClass} fade-in`}
              >
                <div className="gallery-image-wrapper">
                  <img 
                    src={photo.image} 
                    alt={photo.alt} 
                    className="gallery-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Стрелки навигации */}
        <div className="gallery-controls">
          <div className="gallery-nav">
            <button 
              className="nav-btn" 
              onClick={prevSlide}
              onMouseEnter={handleMouseEnter}
              aria-label="Предыдущее фото"
            >
              ←
            </button>
            
            <button 
              className="nav-btn" 
              onClick={nextSlide}
              onMouseEnter={handleMouseEnter}
              aria-label="Следующее фото"
            >
              →
            </button>
          </div>
          
          {/* Точки*/}
          <div className="slide-indicators">
            {projectData.photos.map((_, index) => (
              <div 
                key={index}
                className={`slide-indicator ${currentIndex === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                onMouseEnter={handleMouseEnter}
                aria-label={`Перейти к фото ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Сетка*/}
      <section className="project-grid-section">
        <div className="project-grid">
          {projectData.photos.map((photo, index) => (
            <div 
              key={`grid-${photo.id}`} 
              className={`grid-item grid-item-${index + 1} fade-in`}
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