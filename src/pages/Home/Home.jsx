import './Home.css';
import homeImage from '../../assets/images/home.jpg';

const Home = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="home">
      <div className="home-background">
        <img 
          src={homeImage} 
          alt="Дизайнерский интерьер" 
          className="home-background-image"
        />
        
        {/* Стрелка для скролла вниз */}
        <div className="scroll-down-arrow" onClick={scrollToContent}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
            <path d="M12 7a1 1 0 0 0-1 1v5.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l4 4a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0-1.42-1.42L13 13.59V8a1 1 0 0 0-1-1z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Home;