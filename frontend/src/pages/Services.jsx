import React from 'react';
import { ArrowRight, CheckCircle, Code, Users, Rocket, Zap, Shield, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { services } from '../data/mock';

const Services = () => {
  const serviceDetails = [
    {
      ...services[0],
      icon: Code,
      benefits: [
        "Full-cycle development from concept to deployment",
        "Scalable architecture designed for growth",
        "Security-first approach with best practices",
        "Modern technologies and frameworks",
        "Ongoing maintenance and support"
      ],
      process: [
        "Requirements Analysis",
        "Technical Architecture",
        "Development & Testing",
        "Deployment & Launch",
        "Maintenance & Support"
      ]
    },
    {
      ...services[1],
      icon: Users,
      benefits: [
        "Pre-vetted senior developers",
        "Seamless integration with your team",
        "Flexible team scaling as needed",
        "Direct communication channels",
        "Transparent progress reporting"
      ],
      process: [
        "Team Requirements",
        "Developer Selection",
        "Integration Setup",
        "Project Kickoff",
        "Ongoing Collaboration"
      ]
    },
    {
      ...services[2],
      icon: Rocket,
      benefits: [
        "Rapid MVP development",
        "Technical consulting and guidance",
        "Proof of concept development",
        "Growth scaling strategies",
        "Market-ready solutions"
      ],
      process: [
        "Idea Validation",
        "MVP Planning",
        "Rapid Development",
        "User Testing",
        "Market Launch"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Zap,
      title: "API Development",
      description: "Robust and scalable API solutions for seamless integrations"
    },
    {
      icon: Shield,
      title: "Security Audits",
      description: "Comprehensive security assessments and vulnerability testing"
    },
    {
      icon: Globe,
      title: "Cloud Migration",
      description: "Smooth transition to cloud platforms with minimal downtime"
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="section-container">
          <div className="services-hero-content">
            <Badge className="hero-badge">
              Comprehensive Solutions
            </Badge>
            <h1 className="page-title">
              Tailored Solutions for Your Business Needs
            </h1>
            <p className="page-subtitle">
              From custom software development to dedicated teams, we provide comprehensive 
              solutions that drive business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services-section">
        <div className="section-container">
          {serviceDetails.map((service, index) => (
            <div key={service.id} className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-content">
                <div className="service-header">
                  <div className="service-icon-large">
                    <service.icon size={48} />
                  </div>
                  <div>
                    <h2 className="service-title-large">{service.title}</h2>
                    <p className="service-subtitle-large">{service.subtitle}</p>
                  </div>
                </div>
                
                <p className="service-description-large">{service.description}</p>
                
                <div className="service-benefits">
                  <h3 className="benefits-title">Key Benefits</h3>
                  <ul className="benefits-list">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="benefit-item">
                        <CheckCircle size={16} className="text-accent" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="btn-primary">
                  Get Started
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </div>

              <div className="service-visual">
                <Card className="process-card">
                  <CardHeader>
                    <CardTitle>Our Process</CardTitle>
                    <CardDescription>How we deliver {service.title.toLowerCase()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="process-steps">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="process-step">
                          <div className="step-number">{idx + 1}</div>
                          <div className="step-name">{step}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Additional Services</h2>
            <p className="section-subtitle">
              Comprehensive support services to complement your development needs
            </p>
          </div>

          <div className="additional-services-grid">
            {additionalServices.map((service, index) => (
              <Card key={index} className="additional-service-card">
                <CardHeader>
                  <div className="service-icon">
                    <service.icon size={32} />
                  </div>
                  <CardTitle className="service-title">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="service-description">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="comparison-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Choose the Right Service</h2>
            <p className="section-subtitle">
              Not sure which service fits your needs? Here's a quick comparison
            </p>
          </div>

          <div className="comparison-table">
            <div className="comparison-header">
              <div className="comparison-cell">Feature</div>
              <div className="comparison-cell">Outsourcing</div>
              <div className="comparison-cell">Outstaffing</div>
              <div className="comparison-cell">Startup Support</div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-cell feature-cell">Project Management</div>
              <div className="comparison-cell">Full Management</div>
              <div className="comparison-cell">Client Managed</div>
              <div className="comparison-cell">Guided Support</div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-cell feature-cell">Team Integration</div>
              <div className="comparison-cell">External Team</div>
              <div className="comparison-cell">Seamless Integration</div>
              <div className="comparison-cell">Collaborative</div>
            </div>
            
            <div className="comparison-row">
              <div className="comparison-cell feature-cell">Best For</div>
              <div className="comparison-cell">Complete Projects</div>
              <div className="comparison-cell">Team Extension</div>
              <div className="comparison-cell">MVPs & Prototypes</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section">
        <div className="section-container">
          <div className="services-cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-subtitle">
              Let's discuss your project requirements and find the perfect solution for your business.
            </p>
            <div className="cta-buttons">
              <Button className="btn-primary">
                Schedule Consultation
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="btn-secondary">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;