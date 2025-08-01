import React, { useState, useEffect } from 'react';
import { CheckCircle, Award, Target, Heart, Calendar, MapPin, Users, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { aboutStats, internalProjects, companyInfo } from '../data/mock';

const About = () => {
  const [isVisible, setIsVisible] = useState({});

  // Timeline data
  const timeline = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'SOFTDAB was established with a vision to deliver exceptional software solutions.',
      milestone: 'Beginning'
    },
    {
      year: '2020',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise-level project in the European market.',
      milestone: '5 Projects'
    },
    {
      year: '2021',
      title: 'US Market Entry',
      description: 'Expanded operations to serve clients in the United States market.',
      milestone: '10 Projects'
    },
    {
      year: '2022',
      title: 'Team Growth',
      description: 'Scaled our team to 30+ developers and expanded service offerings.',
      milestone: '15 Projects'
    },
    {
      year: '2023',
      title: 'Innovation Focus',
      description: 'Launched internal R&D projects and started developing proprietary solutions.',
      milestone: '20+ Projects'
    }
  ];

  // Team members data
  const teamMembers = [
    {
      name: 'Alex Thompson',
      role: 'CTO & Co-founder',
      expertise: 'Full-stack Architecture, DevOps',
      experience: '8+ years',
      avatar: '/api/placeholder/150/150'
    },
    {
      name: 'Maria Garcia',
      role: 'Head of Development',
      expertise: 'Python, React, Team Leadership',
      experience: '6+ years',
      avatar: '/api/placeholder/150/150'
    },
    {
      name: 'David Kim',
      role: 'Senior C++ Developer',
      expertise: 'System Programming, Performance',
      experience: '7+ years',
      avatar: '/api/placeholder/150/150'
    },
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      expertise: 'Agile, Client Relations',
      experience: '5+ years',
      avatar: '/api/placeholder/150/150'
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

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" id="hero" data-animate>
        <div className="section-container">
          <div className={`about-hero-content ${isVisible.hero ? 'animate-in' : ''}`}>
            <Badge className="hero-badge">
              Founded in 2019
            </Badge>
            <h1 className="page-title">
              5 Years of Excellence in 
              <span className="gradient-text"> Software Development</span>
            </h1>
            <p className="page-subtitle">
              SOFTDAB was founded with a mission to deliver high-quality, custom software solutions 
              to businesses worldwide. Over the past 5 years, we've successfully completed 20+ projects 
              for clients in Europe and the USA, building a reputation for reliability, innovation, and technical expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="stats-section" id="stats" data-animate>
        <div className="section-container">
          <div className={`stats-grid ${isVisible.stats ? 'animate-in-stagger' : ''}`}>
            {aboutStats.map((stat, index) => (
              <Card key={index} className="stat-card interactive-card" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="stat-content">
                  <div className="stat-number glow-text">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section" id="timeline" data-animate>
        <div className="section-container">
          <div className={`section-header ${isVisible.timeline ? 'animate-in' : ''}`}>
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle">
              From startup to trusted partner - tracking our milestones and achievements
            </p>
          </div>

          <div className={`timeline-container ${isVisible.timeline ? 'animate-in' : ''}`}>
            {timeline.map((item, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{item.year}</div>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                  <Badge variant="secondary" className="timeline-milestone">
                    {item.milestone}
                  </Badge>
                </div>
                <div className="timeline-dot">
                  <Calendar size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="mission-section" id="mission" data-animate>
        <div className="section-container">
          <div className="mission-grid">
            <div className={`mission-content ${isVisible.mission ? 'animate-in' : ''}`}>
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

            <div className={`mission-visual ${isVisible.mission ? 'animate-in-right' : ''}`}>
              <div className="experience-card">
                <div className="experience-number">{companyInfo.experience}</div>
                <div className="experience-label">Years of Experience</div>
                <div className="experience-markets">
                  <MapPin size={16} className="inline mr-2" />
                  Serving clients in {companyInfo.markets.join(' & ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" id="team" data-animate>
        <div className="section-container">
          <div className={`section-header ${isVisible.team ? 'animate-in' : ''}`}>
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Experienced professionals dedicated to delivering exceptional software solutions
            </p>
          </div>

          <div className={`team-grid ${isVisible.team ? 'animate-in-stagger' : ''}`}>
            {teamMembers.map((member, index) => (
              <Card key={index} className="team-card interactive-card" style={{animationDelay: `${index * 0.15}s`}}>
                <CardHeader className="team-card-header">
                  <div className="team-avatar">
                    <Users size={48} className="text-accent" />
                  </div>
                  <CardTitle className="team-name">{member.name}</CardTitle>
                  <p className="team-role">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <div className="team-expertise">
                    <h4 className="expertise-title">Expertise</h4>
                    <p className="expertise-text">{member.expertise}</p>
                  </div>
                  <div className="team-experience">
                    <Briefcase size={16} className="text-accent" />
                    <span>{member.experience}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Projects */}
      <section className="projects-section" id="projects" data-animate>
        <div className="section-container">
          <div className={`section-header ${isVisible.projects ? 'animate-in' : ''}`}>
            <h2 className="section-title">Innovation in Action</h2>
            <p className="section-subtitle">
              Our internal projects showcase our commitment to innovation and market involvement
            </p>
          </div>

          <div className={`projects-grid ${isVisible.projects ? 'animate-in-stagger' : ''}`}>
            {internalProjects.map((project, index) => (
              <Card key={index} className="project-card interactive-card" style={{animationDelay: `${index * 0.2}s`}}>
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

      {/* Global Presence */}
      <section className="global-section" id="global" data-animate>
        <div className="section-container">
          <div className={`global-content ${isVisible.global ? 'animate-in' : ''}`}>
            <h2 className="section-title">Our Global Reach</h2>
            <p className="global-description">
              We've assembled a diverse team of talented developers, designers, and project managers 
              from around the world. Our remote-first approach allows us to tap into global talent 
              while providing flexible, cost-effective solutions to our clients.
            </p>
            
            <div className="global-highlights">
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