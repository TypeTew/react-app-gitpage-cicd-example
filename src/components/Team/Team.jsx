import React from 'react';
import './Team.css';

function Team() {
  return (
    <section className="team">
      <div className="team-container">
        <div className="team-header">
          <h2>Meet Our Team</h2>
          <p>Talented professionals passionate about creating exceptional digital experiences</p>
        </div>
        
        <div className="team-grid">
          <div className="team-member">
            <div className="member-photo">
              <div className="member-avatar">👨‍💻</div>
            </div>
            <h3>Alex Johnson</h3>
            <p className="member-role">Lead Developer</p>
            <p className="member-bio">Full-stack developer with 8+ years experience in React, Node.js, and cloud architecture.</p>
          </div>
          
          <div className="team-member">
            <div className="member-photo">
              <div className="member-avatar">👩‍🎨</div>
            </div>
            <h3>Sarah Chen</h3>
            <p className="member-role">UX/UI Designer</p>
            <p className="member-bio">Creative designer focused on user-centered design and creating intuitive digital experiences.</p>
          </div>
          
          <div className="team-member">
            <div className="member-photo">
              <div className="member-avatar">👨‍💼</div>
            </div>
            <h3>Michael Rodriguez</h3>
            <p className="member-role">Project Manager</p>
            <p className="member-bio">Agile project manager ensuring smooth delivery and exceptional client communication.</p>
          </div>
          
          <div className="team-member">
            <div className="member-photo">
              <div className="member-avatar">👩‍💻</div>
            </div>
            <h3>Emily Davis</h3>
            <p className="member-role">Backend Specialist</p>
            <p className="member-bio">Expert in database design, API development, and scalable backend solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
