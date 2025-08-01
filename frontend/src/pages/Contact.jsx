import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

const Contact = () => {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Spam protection
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

  // Real-time validation
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Spam protection - honeypot field should be empty
    if (formData.honeypot) {
      return;
    }

    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (key !== 'honeypot') {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('Contact form submitted:', formData);
        
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '', honeypot: '' });
        
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
        
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero" id="hero" data-animate>
        <div className="section-container">
          <div className={`contact-hero-content ${isVisible.hero ? 'animate-in' : ''}`}>
            <Badge className="hero-badge">
              Get In Touch
            </Badge>
            <h1 className="page-title">
              Let's Build Something
              <span className="gradient-text"> Great Together</span>
            </h1>
            <p className="page-subtitle">
              Ready to start your next project? We'd love to hear from you. 
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="contact-content-section" id="content" data-animate>
        <div className="section-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className={`contact-form-container ${isVisible.content ? 'animate-in' : ''}`}>
              <Card className="contact-form-card">
                <CardHeader>
                  <CardTitle className="form-title">Send us a message</CardTitle>
                  <p className="form-subtitle">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {showSuccess && (
                    <div className="success-message">
                      <CheckCircle size={20} className="text-green-500" />
                      <span>Thank you for reaching out! We'll get back to you shortly.</span>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="contact-form">
                    {/* Honeypot field for spam protection */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      style={{ display: 'none' }}
                      tabIndex="-1"
                      autoComplete="off"
                    />
                    
                    <div className="form-group">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={errors.name ? 'error' : ''}
                        placeholder="Enter your full name"
                        required
                      />
                      {errors.name && (
                        <div className="error-message">
                          <AlertCircle size={16} />
                          <span>{errors.name}</span>
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={errors.email ? 'error' : ''}
                        placeholder="Enter your email address"
                        required
                      />
                      {errors.email && (
                        <div className="error-message">
                          <AlertCircle size={16} />
                          <span>{errors.email}</span>
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className={errors.message ? 'error' : ''}
                        placeholder="Tell us about your project or inquiry..."
                        rows={6}
                        required
                      />
                      {errors.message && (
                        <div className="error-message">
                          <AlertCircle size={16} />
                          <span>{errors.message}</span>
                        </div>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="btn-primary btn-glow w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className={`contact-info-container ${isVisible.content ? 'animate-in-right' : ''}`}>
              <div className="contact-info-content">
                <h2 className="info-title">Get in touch</h2>
                <p className="info-description">
                  We're here to help you bring your vision to life. Whether you need custom software development, 
                  dedicated teams, or startup support, our experts are ready to assist you.
                </p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">
                      <Mail size={24} />
                    </div>
                    <div className="method-content">
                      <h3 className="method-title">Email us</h3>
                      <p className="method-text">hello@softdab.com</p>
                      <span className="method-note">We'll respond within 24 hours</span>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <Phone size={24} />
                    </div>
                    <div className="method-content">
                      <h3 className="method-title">Call us</h3>
                      <p className="method-text">+1 (555) 123-4567</p>
                      <span className="method-note">Mon-Fri 9AM-6PM EST</span>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <MapPin size={24} />
                    </div>
                    <div className="method-content">
                      <h3 className="method-title">Our presence</h3>
                      <p className="method-text">Global Remote Team</p>
                      <span className="method-note">Serving clients worldwide</span>
                    </div>
                  </div>
                </div>

                <div className="response-time-card">
                  <h3 className="response-title">Our Response Time</h3>
                  <div className="response-stats">
                    <div className="response-stat">
                      <span className="stat-number">< 24hrs</span>
                      <span className="stat-label">Average Response</span>
                    </div>
                    <div className="response-stat">
                      <span className="stat-number">100%</span>
                      <span className="stat-label">Response Rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section" id="faq" data-animate>
        <div className="section-container">
          <div className={`section-header ${isVisible.faq ? 'animate-in' : ''}`}>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about our services and process
            </p>
          </div>

          <div className={`faq-grid ${isVisible.faq ? 'animate-in-stagger' : ''}`}>
            <Card className="faq-card">
              <CardContent className="faq-content">
                <h3 className="faq-question">How quickly can you start a project?</h3>
                <p className="faq-answer">
                  We can typically start within 1-2 weeks after project approval. For urgent projects, 
                  we offer expedited onboarding within 3-5 business days.
                </p>
              </CardContent>
            </Card>

            <Card className="faq-card">
              <CardContent className="faq-content">
                <h3 className="faq-question">What's your development process?</h3>
                <p className="faq-answer">
                  We follow Agile methodology with regular sprints, daily standups, and continuous client feedback. 
                  You'll have full visibility into progress through our project management tools.
                </p>
              </CardContent>
            </Card>

            <Card className="faq-card">
              <CardContent className="faq-content">
                <h3 className="faq-question">Do you provide ongoing support?</h3>
                <p className="faq-answer">
                  Yes, we offer comprehensive maintenance and support packages. This includes bug fixes, 
                  security updates, performance optimization, and new feature development.
                </p>
              </CardContent>
            </Card>

            <Card className="faq-card">
              <CardContent className="faq-content">
                <h3 className="faq-question">How do you ensure project quality?</h3>
                <p className="faq-answer">
                  We implement rigorous quality assurance processes including code reviews, automated testing, 
                  security audits, and performance monitoring throughout the development lifecycle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;