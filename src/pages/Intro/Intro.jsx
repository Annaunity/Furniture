import React from 'react';
import './Intro.css';
import introBg from '../../assets/images/intro.jpg';

const Intro = () => {
  return (
    <div className="intro-page">
      {/* Левая часть с фото */}
      <div className="intro-image-column">
        <div className="image-container">
          <img 
            src={introBg} 
            alt="Scandola интерьер" 
            className="main-image"
          />
        </div>
      </div>

      {/* Правая часть с текстом */}
      <div className="intro-text-column">
        <div className="text-container">
          <div className="quote-content">
            <div className="quote-text">
              <p>
                Человек должен понимать, что вкус не является стандартным, нужна сила различать, сосредоточиться.
              </p>
              <p>
                Вкус - это оценка порядка и уверенности, а это дается практикой. 
                Эти понятия могут быть воспитаны с помощью образования, путешествий, опыта и жизни. В процессе обучения этим принципам, человек придет к тому, чтобы понять, что комната, любая комната, это просто оболочка пространства и времени для достижения конкретной цели. 
              </p>
              <p>
                Задача состоит в том, чтобы знать, что подходит в этом определенном пространстве.
              </p>
            </div>
            
            <div className="quote-author">
              <div className="author-content">
                <span className="author-name">— Альберт Хедли</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;