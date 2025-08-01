import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Code, Users, Rocket, Zap, Shield, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';
import { services } from '../data/mock';

const Services = () => {
  const [isVisible, setIsVisible] = useState({});
  const [openSections, setOpenSections] = useState({});

  // Enhanced service details with collapsible sections
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
        "Requirements Analysis & Planning",
        "Technical Architecture Design",
        "Agile Development & Testing",
        "Deployment & Go-Live",
        "Maintenance & Support"
      ],
      technologies: ["Python", "React", "Node.js", "PostgreSQL", "AWS"],
      pricing: "Starting from $5,000",
      timeline: "4-12 weeks"
    },
    {
      ...services[1],
      icon: Users,
      benefits: [
        "Pre-vetted senior developers with 5+ years experience",
        "Seamless integration with your existing workflow",
        "Flexible team scaling as your needs grow",
        "Direct communication channels and daily standups",
        "Transparent progress reporting and time tracking"
      ],
      process: [
        "Team Requirements Analysis",
        "Developer Selection & Vetting",
        "Integration & Onboarding",
        "Project Kickoff & Setup",
        "Ongoing Collaboration & Management"
      ],
      technologies: ["Your Choice", "Full Stack", "Specialized Skills", "Remote First"],
      pricing: "$2,500-$4,500/month per developer",
      timeline: "1-2 weeks to start"
    },
    {
      ...services[2],
      icon: Rocket,
      benefits: [
        "Rapid MVP development in 4-8 weeks",
        "Technical consulting and strategic guidance",
        "Proof of concept and prototype development",
        "Growth scaling strategies and architecture",
        "Market-ready solutions with user feedback integration"
      ],
      process: [
        "Idea Validation & Market Research",
        "MVP Planning & Feature Prioritization",
        "Rapid Development & Iteration",
        "User Testing & Feedback Integration",
        "Market Launch & Growth Support"
      ],
      technologies: ["Modern Stack", "Cloud Native", "Mobile Ready", "Scalable"],
      pricing: "$3,000-$15,000 for MVP",
      timeline: "2-8 weeks"
    }
  ];

  const additionalServices = [
    {
      icon: Zap,
      title: "API Development & Integration",
      description: "Robust and scalable API solutions for seamless third-party integrations and microservices architecture.",
      features: ["RESTful & GraphQL APIs", "Third-party integrations", "Microservices architecture", "API documentation"]
    },
    {
      icon: Shield,
      title: "Security Audits & Testing",
      description: "Comprehensive security assessments, vulnerability testing, and compliance consulting for your applications.",
      features: ["Penetration testing", "Code security review", "GDPR compliance", "Security best practices"]
    },
    {
      icon: Globe,
      title: "Cloud Migration & DevOps",
      description: "Smooth transition to cloud platforms with minimal downtime and optimized infrastructure management.",
      features: ["AWS/Azure migration", "CI/CD pipelines", "Infrastructure as Code", "Performance optimization"]
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Transformation",
      client: "European Retail Chain",
      challenge: "Legacy system modernization",
      solution: "Microservices migration to AWS",
      results: ["300% performance improvement", "50% cost reduction", "99.9% uptime achieved"],
      status: "Coming Soon"
    },
    {
      title: "FinTech Mobile Application",
      client: "US Financial Startup",
      challenge: "Secure payment processing",
      solution: "React Native + Node.js API",
      results: ["100K+ users onboarded", "PCI DSS compliant", "4.8 app store rating"],
      status: "Coming Soon"
    },
    {
      title: "Healthcare Management System",
      client: "Medical Practice Group",
      challenge: "Patient data management",
      solution: "HIPAA-compliant web platform",
      results: ["40% admin time saved", "HIPAA compliant", "Real-time reporting"],
      status: "Coming Soon"
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

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

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