import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

const HomeContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.honeypot) return;

    const newErrors = {};
    ['name', 'email', 'message'].forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Home contact form submitted:', formData);
        
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '', honeypot: '' });
        
        setTimeout(() => setShowSuccess(false), 5000);
        
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Card className="home-contact-form-card">
      <CardHeader className="text-center">
        <CardTitle className="form-title">Get In Touch</CardTitle>
        <p className="form-subtitle">
          Ready to start your project? Send us a message and we'll respond within 24 hours.
        </p>
      </CardHeader>
      <CardContent>
        {showSuccess && (
          <div className="success-message">
            <CheckCircle size={20} className="text-green-500" />
            <span>Thank you for reaching out! We'll get back to you shortly.</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="home-contact-form">
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleInputChange}
            style={{ display: 'none' }}
            tabIndex="-1"
            autoComplete="off"
          />
          
          <div className="form-row">
            <div className="form-group">
              <Label htmlFor="home-name">Full Name *</Label>
              <Input
                id="home-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={errors.name ? 'error' : ''}
                placeholder="Enter your name"
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
              <Label htmlFor="home-email">Email Address *</Label>
              <Input
                id="home-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? 'error' : ''}
                placeholder="Enter your email"
                required
              />
              {errors.email && (
                <div className="error-message">
                  <AlertCircle size={16} />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <Label htmlFor="home-message">Message *</Label>
            <Textarea
              id="home-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className={errors.message ? 'error' : ''}
              placeholder="Tell us about your project or inquiry..."
              rows={4}
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
            {isSubmitting ? 'Sending...' : (
              <>
                Send Message
                <Send className="ml-2" size={18} />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default HomeContactForm;