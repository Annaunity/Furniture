import React, { useState } from 'react';
import './Contacts.css';

const Contacts = () => {
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
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    
    if (!formData.firstName.trim()) {
      errors.firstName = 'Пожалуйста, введите имя';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Пожалуйста, введите телефон';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      errors.phone = 'Пожалуйста, введите корректный телефон';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Телефон должен содержать минимум 10 цифр';
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
    
    try {
      console.log('Форма отправлена:', formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setFormErrors({});
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      setFormErrors({ submit: 'Произошла ошибка при отправке. Попробуйте позже.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contacts-page">
      <section className="contact-section">
        <div className="container">
          <div className="contact-header text-center">
            <h2 className="contact-title">СВЯЖИТЕСЬ С НАМИ</h2>
          </div>

          <div className="contact-content">
            <div className="contact-info-side">
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-detail-content">
                    <div className="contact-label">Адрес</div>
                    <div className="contact-value">
                      г. Санкт-Петербург, ул. Зверинская, д. 12
                    </div>
                  </div>
                </div>
                
                <div className="contact-detail-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-detail-content">
                    <div className="contact-label">Телефон</div>
                    <div className="contact-value">8 921 7726407</div>
                  </div>
                </div>
                
                <div className="contact-detail-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-detail-content">
                    <div className="contact-label">Email</div>
                    <div className="contact-value">info@scandolamobili.ru</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-side">
              <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="firstName" className="form-label">
                        Имя <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className={`form-input ${formErrors.firstName ? 'error' : ''}`}
                        placeholder="Иван"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                      {formErrors.firstName && (
                        <span className="error-message">{formErrors.firstName}</span>
                      )}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="lastName" className="form-label">
                        Фамилия
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-input"
                        placeholder="Иванов"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-input ${formErrors.email ? 'error' : ''}`}
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                      />
                      {formErrors.email && (
                        <span className="error-message">{formErrors.email}</span>
                      )}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Телефон <span className="required">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={`form-input ${formErrors.phone ? 'error' : ''}`}
                        placeholder="8 921 7726407"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                      {formErrors.phone && (
                        <span className="error-message">{formErrors.phone}</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      placeholder="Расскажите подробнее о вашем вопросе"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    ></textarea>
                  </div>

                  <div className="form-submit">
                    <button 
                      type="submit" 
                      className="btn btn-primary btn-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                    </button>
                    
                    {submitSuccess && (
                      <div className="success-message">
                        Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.
                      </div>
                    )}
                    
                    {formErrors.submit && (
                      <div className="error-message" style={{ textAlign: 'center', marginTop: '10px' }}>
                        {formErrors.submit}
                      </div>
                    )}
                    
                    <p className="form-note">
                      Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;