import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const OutsourcingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    technologies: [],
    message: '',
    honeypot: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const technologyOptions = [
    'Python', 'C++', 'JavaScript', 'React', 'Node.js', 'Django', 
    'Flask', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'projectType':
        return !value ? 'Please select a project type' : '';
      case 'budget':
        return !value ? 'Please select a budget range' : '';
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

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleTechnologyToggle = (technology) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.includes(technology)
        ? prev.technologies.filter(t => t !== technology)
        : [...prev.technologies, technology]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.honeypot) return;

    const newErrors = {};
    ['name', 'email', 'projectType', 'budget'].forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Outsourcing form submitted:', formData);
        
        setShowSuccess(true);
        setFormData({
          name: '', email: '', projectType: '', budget: '', 
          technologies: [], message: '', honeypot: ''
        });
        
        setTimeout(() => setShowSuccess(false), 5000);
        
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <Card className="outsourcing-form-card">
      <CardHeader>
        <CardTitle className="form-title">Request Custom Development</CardTitle>
        <p className="form-subtitle">
          Tell us about your project, and we'll provide a tailored solution.
        </p>
      </CardHeader>
      <CardContent>
        {showSuccess && (
          <div className="success-message">
            <CheckCircle size={20} className="text-green-500" />
            <span>Thank you! Our team will review your request and contact you soon.</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="outsourcing-form">
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
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
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
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
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

          <div className="form-row">
            <div className="form-group">
              <Label>Type of Project *</Label>
              <Select onValueChange={(value) => handleSelectChange('projectType', value)}>
                <SelectTrigger className={errors.projectType ? 'error' : ''}>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.projectType && (
                <div className="error-message">
                  <AlertCircle size={16} />
                  <span>{errors.projectType}</span>
                </div>
              )}
            </div>

            <div className="form-group">
              <Label>Budget Range *</Label>
              <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                <SelectTrigger className={errors.budget ? 'error' : ''}>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-10k">< $10,000</SelectItem>
                  <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                  <SelectItem value="over-50k">$50,000+</SelectItem>
                </SelectContent>
              </Select>
              {errors.budget && (
                <div className="error-message">
                  <AlertCircle size={16} />
                  <span>{errors.budget}</span>
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <Label>Technologies (Select all that apply)</Label>
            <div className="technology-grid">
              {technologyOptions.map(tech => (
                <button
                  key={tech}
                  type="button"
                  onClick={() => handleTechnologyToggle(tech)}
                  className={`technology-chip ${formData.technologies.includes(tech) ? 'selected' : ''}`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <Label htmlFor="message">Project Description</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us more about your project requirements..."
              rows={4}
            />
          </div>

          <Button
            type="submit"
            className="btn-primary btn-glow w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Request...' : 'Request Quote'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default OutsourcingForm;