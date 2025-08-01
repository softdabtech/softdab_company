import React from 'react';
import { CheckCircle, Award, Target, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { aboutStats, internalProjects, companyInfo } from '../data/mock';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="section-container">
          <div className="about-hero-content">
            <Badge className="hero-badge">
              Founded in 2019
            </Badge>
            <h1 className="page-title">
              5 Years of Excellence in Software Development
            </h1>
            <p className="page-subtitle">
              SOFTDAB was founded with a mission to deliver high-quality, custom software solutions 
              to businesses worldwide. Over the past 5 years, we've successfully completed 20+ projects 
              for clients in Europe and the USA, building a reputation for reliability, innovation, and technical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            {aboutStats.map((stat, index) => (
              <Card key={index} className="stat-card">
                <CardContent className="stat-content">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mission-section">
        <div className="section-container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2 className="section-title">Our Mission</h2>
              <p className="mission-text">
                "At SOFTDAB, we don't just build software — we build trust and long-term partnerships."
              </p>
              <p className="mission-description">
                Our team is dedicated to helping businesses grow by providing tailored software solutions 
                and highly skilled development teams. We believe in the power of technology to transform 
                businesses and create lasting impact.
              </p>
              
              <div className="values-list">
                <div className="value-item">
                  <Award className="value-icon" size={24} />
                  <div>
                    <h3 className="value-title">Excellence</h3>
                    <p className="value-description">Delivering superior quality in every project</p>
                  </div>
                </div>
                <div className="value-item">
                  <Target className="value-icon" size={24} />
                  <div>
                    <h3 className="value-title">Innovation</h3>
                    <p className="value-description">Staying ahead with cutting-edge technologies</p>
                  </div>
                </div>
                <div className="value-item">
                  <Heart className="value-icon" size={24} />
                  <div>
                    <h3 className="value-title">Partnership</h3>
                    <p className="value-description">Building long-term relationships with our clients</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mission-visual">
              <div className="experience-card">
                <div className="experience-number">{companyInfo.experience}</div>
                <div className="experience-label">Years of Experience</div>
                <div className="experience-markets">
                  Serving clients in {companyInfo.markets.join(' & ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Projects */}
      <section className="projects-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Innovation in Action</h2>
            <p className="section-subtitle">
              Our internal projects showcase our commitment to innovation and market involvement
            </p>
          </div>

          <div className="projects-grid">
            {internalProjects.map((project, index) => (
              <Card key={index} className="project-card">
                <CardHeader>
                  <div className="project-category">
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="project-name">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="project-description">{project.description}</p>
                  <div className="project-status">
                    <CheckCircle size={16} className="text-accent" />
                    <span>Active Development</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-container">
          <div className="team-content">
            <h2 className="section-title">Our Global Team</h2>
            <p className="team-description">
              We've assembled a diverse team of talented developers, designers, and project managers 
              from around the world. Our remote-first approach allows us to tap into global talent 
              while providing flexible, cost-effective solutions to our clients.
            </p>
            
            <div className="team-highlights">
              <div className="highlight-item">
                <div className="highlight-number">50+</div>
                <div className="highlight-label">Team Members</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">15+</div>
                <div className="highlight-label">Countries</div>
              </div>
              <div className="highlight-item">
                <div className="highlight-number">24/7</div>
                <div className="highlight-label">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;