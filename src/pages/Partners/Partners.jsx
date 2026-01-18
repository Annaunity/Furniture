import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    { name: 'Acerbis', url: 'www.acerbisinternational.com', logo: 'A' },
    { name: 'Arflex', url: 'www.arflex.com', logo: 'A' },
    { name: 'Arredo 3', url: 'www.arredo3.com', logo: 'A' },
    { name: 'Arte Brotto', url: 'www.artebrotto.it', logo: 'A' },
    { name: 'Arizzi', url: 'www.arizzi.it', logo: 'A' }
  ];

  const sortedPartners = [...partners].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="partners-page">
      <div className="partners-simple-header">
        <div className="container">
          <div className="partners-header-content">
            <h1 className="partners-main-title">Партнеры</h1>
            <div className="partners-title-divider"></div>
          </div>
        </div>
      </div>

      <section className="partners-grid-section">
        <div className="container">
          <div className="partners-grid">
            {sortedPartners.map((partner, index) => (
              <div 
                key={`${partner.name}-${index}`}
                className="partner-card"
              >
                <div className="partner-card-inner">
                  <div className="partner-logo">
                    <div className="partner-logo-letter">{partner.logo}</div>
                  </div>
                  
                  <div className="partner-content">
                    <h4 className="partner-name">{partner.name}</h4>
                    <div className="partner-divider"></div>
                    <p className="partner-website">
                      <a 
                        href={`https://${partner.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="website-link"
                      >
                        {partner.url}
                      </a>
                    </p>
                  </div>
                  
                  <div className="partner-hover-layer">
                    <span className="view-website">Посетить сайт</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;