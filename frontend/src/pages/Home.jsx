import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Rocket, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { companyInfo, services, technologies } from '../data/mock';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <Badge className="hero-badge">
              {companyInfo.experience} Years of Excellence
            </Badge>
            <h1 className="hero-title">
              {companyInfo.tagline}
            </h1>
            <p className="hero-subtitle">
              {companyInfo.subtagline}
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">{companyInfo.experience}</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{companyInfo.projects}</span>
                <span className="stat-label">Successful Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>

            <div className="hero-cta">
              <Button className="btn-primary">
                Get a Quote
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="btn-secondary">
                Hire a Team
              </Button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-graphic">
              <div className="floating-card">
                <Code size={32} className="text-accent" />
                <span>Custom Development</span>
              </div>
              <div className="floating-card delayed">
                <Users size={32} className="text-accent" />
                <span>Dedicated Teams</span>
              </div>
              <div className="floating-card delayed-2">
                <Rocket size={32} className="text-accent" />
                <span>Startup Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => {
              const IconComponent = service.icon === 'Code' ? Code : service.icon === 'Users' ? Users : Rocket;
              return (
                <Card key={service.id} className="service-card">
                  <CardHeader>
                    <div className="service-icon">
                      <IconComponent size={32} />
                    </div>
                    <CardTitle className="service-title">{service.title}</CardTitle>
                    <CardDescription className="service-subtitle">
                      {service.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-features">
                      {service.features.map((feature, index) => (
                        <li key={index} className="service-feature">
                          <CheckCircle size={16} className="text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="section-cta">
            <Link to="/services">
              <Button className="btn-primary">
                Explore All Services
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Technologies We Master</h2>
            <p className="section-subtitle">
              Cutting-edge tools and frameworks for modern software development
            </p>
          </div>

          <div className="technologies-container">
            {technologies.map((category, categoryIndex) => (
              <div key={categoryIndex} className="tech-category">
                <h3 className="tech-category-title">{category.category}</h3>
                <div className="tech-items">
                  {category.items.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-item">
                      <div className="tech-icon">
                        <Code size={24} />
                      </div>
                      <div className="tech-info">
                        <h4 className="tech-name">{tech.name}</h4>
                        <p className="tech-description">{tech.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-subtitle">
              Let's discuss how we can help bring your vision to life with our expertise and dedication.
            </p>
            <div className="cta-buttons">
              <Button className="btn-primary">
                Get Started Today
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="btn-secondary">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;