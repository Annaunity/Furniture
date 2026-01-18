import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
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
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitSuccess(true);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    setFormErrors({});
    
    setTimeout(() => setSubmitSuccess(false), 5000);
    setIsSubmitting(false);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          
          {/* Колонка 1: Scandola */}
          <div className="footer-column">
            <h3 className="footer-title">Scandola</h3>
            <div className="footer-address">
              <div className="address-lines">
                <p>Улица Труда, 7</p>
                <p>37021 Боско Кьезануова (Верона)</p>
              </div>
              <div className="contact-lines">
                <p className="footer-contact">Электронная почта: info@scandolamobili.it</p>
                <p className="footer-contact">Телефон: +39 045 7050215</p>
                <p className="footer-contact">Факс: +39 045 6780374</p>
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
              </div>
              <div className="contact-lines">
                <p className="footer-contact">Электронная почта: info@scandolamobili.ru</p>
                <p className="footer-contact">Телефон: 8 921 7726407</p>
                <p className="footer-contact">Факс: 8 921 7726407</p>
              </div>
            </div>
          </div>

          {/* Колонка 3: Форма */}
          <div className="footer-column">
            <h3 className="footer-title">Связаться с нами</h3>
            <form className="footer-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Имя"
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
                    type="text"
                    name="lastName"
                    placeholder="Фамилия"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    className="footer-input"
                  />
                </div>
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
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="footer-textarea"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="footer-submit-btn"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить'}
              </button>
              
              {submitSuccess && (
                <p className="footer-success">Сообщение отправлено!</p>
              )}
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