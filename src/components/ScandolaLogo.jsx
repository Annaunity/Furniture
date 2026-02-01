import scandolaLogo from '../assets/images/scandola.svg'; 

const ScandolaLogo = ({ size = 24, color = '#1a1a1a', className = '' }) => {
  return (
    <img 
      src={scandolaLogo} 
      alt="Scandola" 
      style={{ width: size, height: size, color: color }}
      className={className}
    />
  );
};

export default ScandolaLogo;