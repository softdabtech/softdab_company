import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Rocket, CheckCircle, Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { companyInfo, services, technologies } from '../data/mock';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechStart Inc.",
      content: "SOFTDAB delivered our MVP in record time. Their dedicated team seamlessly integrated with our workflow.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, InnovateLab",
      content: "Outstanding technical expertise and professional service. They understood our vision perfectly.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP Engineering, DataFlow",
      content: "The quality of code and attention to detail exceeded our expectations. Highly recommended!",
      rating: 5
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="home-page">
      {/* Enhanced Hero Section */}
      <section className="hero-section" id="hero" data-animate>
        <div className="hero-background">
          <div className="animated-gradient"></div>
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        
        <div className="hero-container">
          <div className={`hero-content ${isVisible.hero ? 'animate-in' : ''}`}>
            <Badge className="hero-badge animate-badge">
              {companyInfo.experience} Years of Excellence
            </Badge>
            <h1 className="hero-title">
              Empowering Businesses with 
              <span className="gradient-text"> Custom Software Solutions</span>
            </h1>
            <p className="hero-subtitle">
              Transform your ideas into powerful, scalable applications with our expert development teams. 
              We deliver innovation that drives real business results.
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
              <Button className="btn-primary btn-glow">
                Get Started Today
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="btn-secondary btn-hover">
                Schedule a Call
              </Button>
            </div>
          </div>

          <div className={`hero-visual ${isVisible.hero ? 'animate-in-right' : ''}`}>
            <div className="hero-graphic">
              <div className="tech-orbit">
                <div className="floating-card tech-card">
                  <Code size={32} className="text-accent" />
                  <span>Custom Development</span>
                </div>
                <div className="floating-card tech-card delayed">
                  <Users size={32} className="text-accent" />
                  <span>Dedicated Teams</span>
                </div>
                <div className="floating-card tech-card delayed-2">
                  <Rocket size={32} className="text-accent" />
                  <span>Startup Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Overview */}
      <section className="services-section" id="services" data-animate>
        <div className="section-container">
          <div className={`section-header ${isVisible.services ? 'animate-in' : ''}`}>
            <h2 className="section-title">Our Core Services</h2>
            <p className="section-subtitle">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className={`services-grid ${isVisible.services ? 'animate-in-stagger' : ''}`}>
            {services.map((service, index) => {
              const IconComponent = service.icon === 'Code' ? Code : service.icon === 'Users' ? Users : Rocket;
              return (
                <Card key={service.id} className="service-card interactive-card" style={{animationDelay: `${index * 0.2}s`}}>
                  <CardHeader>
                    <div className="service-icon glow-effect">
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
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="service-feature">
                          <CheckCircle size={16} className="text-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="service-cta">
                      <Button variant="ghost" className="learn-more-btn">
                        Learn More
                        <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="section-cta">
            <Link to="/services">
              <Button className="btn-primary btn-glow">
                Explore All Services
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Technologies Section */}
      <section className="technologies-section" id="technologies" data-animate>
        <div className="section-container">
          <div className={`section-header ${isVisible.technologies ? 'animate-in' : ''}`}>
            <h2 className="section-title">Technologies We Master</h2>
            <p className="section-subtitle">
              Cutting-edge tools and frameworks for modern software development
            </p>
          </div>

          <div className={`technologies-container ${isVisible.technologies ? 'animate-in-stagger' : ''}`}>
            {technologies.map((category, categoryIndex) => (
              <div key={categoryIndex} className="tech-category" style={{animationDelay: `${categoryIndex * 0.3}s`}}>
                <h3 className="tech-category-title">{category.category}</h3>
                <div className="tech-items">
                  {category.items.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-item tooltip-trigger" data-tooltip={tech.description}>
                      <div className="tech-icon">
                        <Code size={24} />
                      </div>
                      <div className="tech-info">
                        <h4 className="tech-name">{tech.name}</h4>
                        <p className="tech-description">{tech.description}</p>
                      </div>
                      <div className="tooltip">{tech.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="testimonials-section" id="testimonials" data-animate>
        <div className="section-container">
          <div className={`section-header ${isVisible.testimonials ? 'animate-in' : ''}`}>
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Trusted by businesses worldwide for exceptional software solutions
            </p>
          </div>

          <div className={`testimonials-carousel ${isVisible.testimonials ? 'animate-in' : ''}`}>
            <div className="testimonial-card">
              <Quote className="quote-icon" size={32} />
              <p className="testimonial-content">
                {testimonials[currentTestimonial].content}
              </p>
              <div className="rating">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} size={16} className="star-filled" />
                ))}
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{testimonials[currentTestimonial].name}</h4>
                  <p className="author-role">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
            
            <div className="carousel-controls">
              <button onClick={prevTestimonial} className="carousel-btn">
                <ChevronLeft size={20} />
              </button>
              <div className="carousel-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
              <button onClick={nextTestimonial} className="carousel-btn">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Placeholder Section */}
      <section className="blog-section" id="blog" data-animate>
        <div className="section-container">
          <div className={`section-header ${isVisible.blog ? 'animate-in' : ''}`}>
            <h2 className="section-title">Insights & Innovation</h2>
            <p className="section-subtitle">
              Stay updated with the latest trends in software development
            </p>
          </div>

          <div className={`blog-placeholder ${isVisible.blog ? 'animate-in' : ''}`}>
            <div className="placeholder-content">
              <div className="placeholder-icon">
                <Code size={64} className="text-accent" />
              </div>
              <h3 className="placeholder-title">Blog Coming Soon</h3>
              <p className="placeholder-description">
                We're preparing insightful articles on software development, industry trends, 
                and case studies from our successful projects.
              </p>
              <Button className="btn-primary" disabled>
                Stay Tuned
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="cta-section" id="cta" data-animate>
        <div className="section-container">
          <div className={`cta-content ${isVisible.cta ? 'animate-in' : ''}`}>
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-subtitle">
              Let's discuss how we can help bring your vision to life with our expertise and dedication. 
              Join the 100+ satisfied clients who trust SOFTDAB.
            </p>
            <div className="cta-buttons">
              <Button className="btn-primary btn-glow">
                Start Your Project
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="btn-secondary btn-hover">
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;