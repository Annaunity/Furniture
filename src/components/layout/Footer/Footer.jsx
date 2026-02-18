import React, { useState } from 'react';
import './Footer.css';
import ScandolaLogo from '../../ScandolaLogo';

const Footer = ({ visible = true }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'Введите имя';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Введите телефон';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      errors.phone = 'Введите корректный номер';
    }
    
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setSubmitSuccess(true);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    setFormErrors({});
    
    setTimeout(() => setSubmitSuccess(false), 4000);
    setIsSubmitting(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* Колонка 1: Scandola */}
          <div className="footer-column">
            <h3 className="footer-title">
              <ScandolaLogo size={18} className="footer-title-logo" />
              Scandola
            </h3>
            <div className="footer-address">
              <div className="address-lines">
                <p>Улица Труда, 7</p>
                <p>37021 Боско Кьезануова (Верона)</p>
                <p>Электронная почта: info@scandolamobili.it</p>
                <p>Телефон: +39 045 7050215</p>
              </div>
            </div>
          </div>

          {/* Колонка 2: Дилер */}
          <div className="footer-column">
            <h3 className="footer-title">Дилер</h3>
            <div className="footer-address">
              <div className="address-lines">
                <p>Санкт-Петербург</p>
                <p>197198 Зверинская, 12</p>
                <p>Электронная почта: info@scandolamobili.ru</p>
                <p>Телефон: +7 921 7726407</p>
              </div>
            </div>
          </div>

          {/* Колонка 3: Форма */}
          <div className="footer-column">
            <h3 className="footer-title">Связаться с нами</h3>
            <form className="footer-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row-top">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Имя и Фамилия"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`footer-input ${formErrors.firstName ? 'error' : ''}`}
                  />
                  {formErrors.firstName && (
                    <span className="error-message">{formErrors.firstName}</span>
                  )}
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Электронная почта"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="footer-input"
                  />
                </div>
              </div>
              
              <div className="form-row-middle">
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className={`footer-input ${formErrors.phone ? 'error' : ''}`}
                  />
                  {formErrors.phone && (
                    <span className="error-message">{formErrors.phone}</span>
                  )}
                </div>
                
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Сообщение"
                    rows="1"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="footer-textarea"
                  />
                </div>
                
                <div className="form-group">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="footer-submit-btn"
                  >
                    {isSubmitting ? '...' : 'Отправить'}
                  </button>
                </div>
              </div>
              
              <div className="form-row-bottom">
                {submitSuccess && (
                  <p className="footer-success">Сообщение отправлено!</p>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Scandola. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;