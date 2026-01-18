import './Home.css';
import homeImage from '../../assets/images/home.jpg';

const Home = () => {
  return (
    <div className="home">
      <div className="home-background">
        <img 
          src={homeImage} 
          alt="Дизайнерский интерьер" 
          className="home-background-image"
        />
      </div>
    </div>
  );
};

export default Home;