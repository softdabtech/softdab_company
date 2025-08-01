import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Code, Users, Rocket, Zap, Shield, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../components/ui/collapsible';
import OutsourcingForm from '../components/OutsourcingForm';
import OutstaffingForm from '../components/OutstaffingForm';
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
      <section className="services-hero" id="hero" data-animate>
        <div className="section-container">
          <div className={`services-hero-content ${isVisible.hero ? 'animate-in' : ''}`}>
            <Badge className="hero-badge">
              Comprehensive Solutions
            </Badge>
            <h1 className="page-title">
              Tailored Solutions for
              <span className="gradient-text"> Your Business Needs</span>
            </h1>
            <p className="page-subtitle">
              From custom software development to dedicated teams, we provide comprehensive 
              solutions that drive business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services with Forms */}
      <section className="main-services-section" id="services" data-animate>
        <div className="section-container">
          {serviceDetails.map((service, index) => (
            <div key={service.id} className={`service-detail ${index % 2 === 1 ? 'reverse' : ''} ${isVisible.services ? 'animate-in' : ''}`}>
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
                
                <Collapsible 
                  open={openSections[`benefits-${service.id}`]} 
                  onOpenChange={() => toggleSection(`benefits-${service.id}`)}
                >
                  <CollapsibleTrigger className="collapsible-trigger">
                    <span>Key Benefits</span>
                    {openSections[`benefits-${service.id}`] ? 
                      <ChevronUp size={20} /> : <ChevronDown size={20} />
                    }
                  </CollapsibleTrigger>
                  <CollapsibleContent className="collapsible-content">
                    <ul className="benefits-list">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="benefit-item">
                          <CheckCircle size={16} className="text-accent" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>

                <div className="service-pricing-info">
                  <div className="pricing-item">
                    <span className="pricing-label">Starting Price:</span>
                    <span className="pricing-value">{service.pricing}</span>
                  </div>
                  <div className="pricing-item">
                    <span className="pricing-label">Timeline:</span>
                    <span className="pricing-value">{service.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Service-specific Forms */}
              <div className="service-form">
                {service.id === 1 && <OutsourcingForm />}
                {service.id === 2 && <OutstaffingForm />}
                {service.id === 3 && (
                  <Card className="startup-form-card">
                    <CardHeader>
                      <CardTitle className="form-title">Startup Support Request</CardTitle>
                      <p className="form-subtitle">
                        Let's discuss your startup idea and how we can help bring it to life.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="startup-cta-content">
                        <p className="startup-description">
                          Every successful startup begins with a great idea and the right technical partner. 
                          We specialize in turning innovative concepts into market-ready products.
                        </p>
                        <div className="startup-features">
                          <div className="startup-feature">
                            <CheckCircle size={16} className="text-accent" />
                            <span>Free initial consultation</span>
                          </div>
                          <div className="startup-feature">
                            <CheckCircle size={16} className="text-accent" />
                            <span>Technical feasibility assessment</span>
                          </div>
                          <div className="startup-feature">
                            <CheckCircle size={16} className="text-accent" />
                            <span>MVP development roadmap</span>
                          </div>
                        </div>
                        <Button className="btn-primary btn-glow w-full">
                          Schedule Free Consultation
                          <ArrowRight className="ml-2" size={18} />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="additional-services-section" id="additional" data-animate>
        <div className="section-container">
          <div className={`section-header ${isVisible.additional ? 'animate-in' : ''}`}>
            <h2 className="section-title">Additional Services</h2>
            <p className="section-subtitle">
              Comprehensive support services to complement your development needs
            </p>
          </div>

          <div className={`additional-services-grid ${isVisible.additional ? 'animate-in-stagger' : ''}`}>
            {additionalServices.map((service, index) => (
              <Card key={index} className="additional-service-card interactive-card" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="service-icon glow-effect">
                    <service.icon size={32} />
                  </div>
                  <CardTitle className="service-title">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="service-description">{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="service-feature">
                        <CheckCircle size={14} className="text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Placeholder */}
      <section className="case-studies-section" id="case-studies" data-animate>
        <div className="section-container">
          <div className={`section-header ${isVisible['case-studies'] ? 'animate-in' : ''}`}>
            <h2 className="section-title">Success Stories</h2>
            <p className="section-subtitle">
              Real projects, real results - see how we've helped businesses transform
            </p>
          </div>

          <div className={`case-studies-grid ${isVisible['case-studies'] ? 'animate-in-stagger' : ''}`}>
            {caseStudies.map((study, index) => (
              <Card key={index} className="case-study-card" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <Badge variant="secondary" className="case-study-badge">
                    {study.status}
                  </Badge>
                  <CardTitle className="case-study-title">{study.title}</CardTitle>
                  <p className="case-study-client">{study.client}</p>
                </CardHeader>
                <CardContent>
                  <div className="case-study-details">
                    <div className="case-study-section">
                      <h4 className="case-study-label">Challenge</h4>
                      <p className="case-study-text">{study.challenge}</p>
                    </div>
                    <div className="case-study-section">
                      <h4 className="case-study-label">Solution</h4>
                      <p className="case-study-text">{study.solution}</p>
                    </div>
                    <div className="case-study-section">
                      <h4 className="case-study-label">Results</h4>
                      <ul className="case-study-results">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="case-study-result">
                            <CheckCircle size={14} className="text-accent" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="comparison-section" id="comparison" data-animate>
        <div className="section-container">
          <div className={`section-header ${isVisible.comparison ? 'animate-in' : ''}`}>
            <h2 className="section-title">Choose the Right Service</h2>
            <p className="section-subtitle">
              Not sure which service fits your needs? Here's a quick comparison
            </p>
          </div>

          <div className={`comparison-table ${isVisible.comparison ? 'animate-in' : ''}`}>
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

            <div className="comparison-row">
              <div className="comparison-cell feature-cell">Timeline</div>
              <div className="comparison-cell">4-12 weeks</div>
              <div className="comparison-cell">1-2 weeks to start</div>
              <div className="comparison-cell">2-8 weeks</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta-section" id="cta" data-animate>
        <div className="section-container">
          <div className={`services-cta-content ${isVisible.cta ? 'animate-in' : ''}`}>
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-subtitle">
              Let's discuss your project requirements and find the perfect solution for your business.
            </p>
            <div className="cta-buttons">
              <Button className="btn-primary btn-glow">
                Schedule Consultation
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="btn-secondary btn-hover">
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