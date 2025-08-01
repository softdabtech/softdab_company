import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const OutstaffingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamSize: '',
    startDate: '',
    techStack: [],
    expertise: '',
    message: '',
    honeypot: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const technologyOptions = [
    'Python', 'C++', 'JavaScript', 'React', 'Node.js', 'Django', 
    'Flask', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes',
    'Angular', 'Vue.js', 'TypeScript', 'GraphQL', 'Redis', 'Elasticsearch'
  ];

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'teamSize':
        return !value ? 'Please select team size' : '';
      case 'startDate':
        const selectedDate = new Date(value);
        const today = new Date();
        return selectedDate < today ? 'Start date must be in the future' : '';
      case 'expertise':
        return !value ? 'Please select expertise level' : '';
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

  const handleTechStackToggle = (technology) => {
    setFormData(prev => ({
      ...prev,
      techStack: prev.techStack.includes(technology)
        ? prev.techStack.filter(t => t !== technology)
        : [...prev.techStack, technology]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.honeypot) return;

    const newErrors = {};
    ['name', 'email', 'teamSize', 'startDate', 'expertise'].forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    // Validate tech stack selection
    if (formData.techStack.length === 0) {
      newErrors.techStack = 'Please select at least one technology';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Outstaffing form submitted:', formData);
        
        setShowSuccess(true);
        setFormData({
          name: '', email: '', teamSize: '', startDate: '', 
          techStack: [], expertise: '', message: '', honeypot: ''
        });
        
        setTimeout(() => setShowSuccess(false), 5000);
        
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <Card className="outstaffing-form-card">
      <CardHeader>
        <CardTitle className="form-title">Request Dedicated Team</CardTitle>
        <p className="form-subtitle">
          Let us know your requirements, and we'll assemble the perfect team for you.
        </p>
      </CardHeader>
      <CardContent>
        {showSuccess && (
          <div className="success-message">
            <CheckCircle size={20} className="text-green-500" />
            <span>Thank you! We'll review your request and get in touch shortly.</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="outstaffing-form">
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
              <Label>Team Size *</Label>
              <Select onValueChange={(value) => handleSelectChange('teamSize', value)}>
                <SelectTrigger className={errors.teamSize ? 'error' : ''}>
                  <SelectValue placeholder="Select team size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-3">1-3 developers</SelectItem>
                  <SelectItem value="4-7">4-7 developers</SelectItem>
                  <SelectItem value="8+">8+ developers</SelectItem>
                </SelectContent>
              </Select>
              {errors.teamSize && (
                <div className="error-message">
                  <AlertCircle size={16} />
                  <span>{errors.teamSize}</span>
                </div>
              )}
            </div>

            <div className="form-group">
              <Label htmlFor="startDate">Preferred Start Date *</Label>
              <div className="date-input-wrapper">
                <Input
                  id="startDate"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className={errors.startDate ? 'error' : ''}
                  min={today}
                  required
                />
                <Calendar size={18} className="date-icon" />
              </div>
              {errors.startDate && (
                <div className="error-message">
                  <AlertCircle size={16} />
                  <span>{errors.startDate}</span>
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <Label>Level of Expertise *</Label>
            <Select onValueChange={(value) => handleSelectChange('expertise', value)}>
              <SelectTrigger className={errors.expertise ? 'error' : ''}>
                <SelectValue placeholder="Select expertise level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                <SelectItem value="mid">Mid-level (3-5 years)</SelectItem>
                <SelectItem value="senior">Senior (5+ years)</SelectItem>
              </SelectContent>
            </Select>
            {errors.expertise && (
              <div className="error-message">
                <AlertCircle size={16} />
                <span>{errors.expertise}</span>
              </div>
            )}
          </div>

          <div className="form-group">
            <Label>Required Tech Stack * (Select all that apply)</Label>
            <div className="technology-grid">
              {technologyOptions.map(tech => (
                <button
                  key={tech}
                  type="button"
                  onClick={() => handleTechStackToggle(tech)}
                  className={`technology-chip ${formData.techStack.includes(tech) ? 'selected' : ''}`}
                >
                  {tech}
                </button>
              ))}
            </div>
            {errors.techStack && (
              <div className="error-message">
                <AlertCircle size={16} />
                <span>{errors.techStack}</span>
              </div>
            )}
          </div>

          <div className="form-group">
            <Label htmlFor="message">Additional Requirements</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about specific requirements, project details, or any questions..."
              rows={4}
            />
          </div>

          <Button
            type="submit"
            className="btn-primary btn-glow w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending Request...' : 'Request Team'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default OutstaffingForm;