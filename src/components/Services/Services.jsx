import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Our Services</h2>
          <p>We deliver comprehensive digital solutions that transform businesses and create value for our clients</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3>Digital Transformation</h3>
            <p>Accelerate your business with cutting-edge digital solutions that streamline operations and enhance customer experiences.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Software Development</h3>
            <p>Custom software solutions built with modern technologies to meet your specific business requirements and objectives.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Mobile Applications</h3>
            <p>Native and cross-platform mobile apps that deliver exceptional user experiences across all devices and platforms.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">☁️</div>
            <h3>Cloud Solutions</h3>
            <p>Scalable cloud infrastructure and migration services that optimize performance while reducing operational costs.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>User-centered design solutions that create intuitive interfaces and memorable digital experiences for your customers.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>Technical Consulting</h3>
            <p>Expert technical guidance and strategic consulting to help you make informed technology decisions and optimize your systems.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
