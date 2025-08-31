import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="heroff-content">
          <h1 className="hero-title">SoftServe</h1>
          <p className="hero-subtitle">
            Boost your team with Soft Serve's digital-first solutions
          </p>
          <button className="hero-cta">Get Started</button>
        </div>
        <div className="hero-image">
          <div className="phone-mockup">
            <div className="phone-screen">📱</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
