import React from 'react';
import './Intro.css';
import introBg from '../../assets/images/intro.jpg';

const Intro = () => {
  return (
    <div className="intro-page">
      <div className="intro-image-column">
        <div className="image-container">
          <img 
            src={introBg} 
            alt="Scandola интерьер" 
            className="main-image"
          />
          <div className="image-overlay"></div>
        </div>
      </div>

      <div className="intro-text-column">
        <div className="text-container">
          
          <div className="quote-mark-top">"</div>
          
          <div className="quote-content">
            <h1 className="quote-title">
              Человек должен понимать, что вкус не является стандартным, нужна сила различать, сосредоточиться.
            </h1>
            
            <div className="quote-divider"></div>
            
            <p className="quote-text">
              Вкус - это оценка порядка и уверенности, а это дается практикой. 
              Эти понятия могут быть воспитаны с помощью образования, путешествий, опыта и жизни. В процессе обучения этим принципам, человек придет к тому, чтобы понять, что комната, любая комната, это просто оболочка пространства и времени для достижения конкретной цели. 
              Задача состоит в том, чтобы знать, что подходит в этом определенном пространстве.
            </p>
            
            <div className="quote-author">
              <div className="author-line"></div>
              <div className="author-content">
                <span className="author-name">Альберт Хедли</span>
              </div>
            </div>
          </div>
          
          <div className="quote-mark-bottom">"</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;