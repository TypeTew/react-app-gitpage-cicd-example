import React from 'react'
import './About.css'

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Our Vision</h2>
          <p>
            In a globalized, technology-driven world, we envision a future where soft 
            skills unlock people's potential.
          </p>
        </div>
        
        <div className="about-grid">
          <div className="about-image">
            <div className="poster-card">
              <div className="poster-content">
                <h4>Innovation</h4>
                <p>Technology Leader</p>
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <div className="feature-card">
              <h3>Digital-first approach</h3>
              <p>
                Explore our newest fit-out initiative exploring and 
                investing in the future of the developing world. Our 
                people are great at generating new ideas and it's
                superb targets here.
              </p>
            </div>
          </div>
        </div>
        
        <div className="about-grid reverse">
          <div className="about-content">
            <div className="feature-card">
              <h3>Global Excellence</h3>
              <p>
                We deliver world-class solutions across multiple industries,
                combining local expertise with international standards to
                create exceptional value for our clients worldwide.
              </p>
            </div>
          </div>
          
          <div className="about-image">
            <div className="poster-card">
              <div className="poster-content">
                <h4>Excellence</h4>
                <p>Quality Standards</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="about-grid">
          <div className="about-image">
            <div className="poster-card">
              <div className="poster-content">
                <h4>Future</h4>
                <p>Next Generation</p>
              </div>
            </div>
          </div>
          
          <div className="about-content">
            <div className="feature-card">
              <h3>Sustainable Growth</h3>
              <p>
                Building for the future with sustainable practices and 
                innovative technologies that ensure long-term success
                and positive impact on communities and environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
