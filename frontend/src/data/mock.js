// Mock data for SOFTDAB website
export const companyInfo = {
  name: "SOFTDAB",
  tagline: "Custom Software Development & Dedicated Teams for Your Business Success",
  subtagline: "Empowering businesses with innovative software solutions for over 5 years.",
  experience: "5+",
  projects: "20+",
  markets: ["Europe", "USA"]
};

export const services = [
  {
    id: 1,
    title: "Custom Software Development",
    subtitle: "End-to-end solutions for your unique business needs",
    description: "From concept to launch, we build robust, scalable, and secure software tailored to your specific requirements. Our expertise covers web, mobile, and cloud-native applications.",
    features: [
      "Full-cycle product engineering",
      "Scalable architecture design",
      "Modern tech stack implementation",
      "Quality assurance & testing"
    ]
  },
  {
    id: 2,
    title: "Dedicated Development Teams",
    subtitle: "Extend your in-house capabilities with top-tier talent",
    description: "Seamlessly integrate our expert engineers into your existing team. We provide flexible, dedicated resources that align with your project goals and company culture.",
    features: [
      "Access to senior engineers",
      "Flexible team scaling",
      "Transparent communication",
      "Cost-effective talent acquisition"
    ]
  },
  {
    id: 3,
    title: "Startup & MVP Development",
    subtitle: "Bring your innovative ideas to market, fast",
    description: "We partner with startups to build Minimum Viable Products (MVPs) quickly and efficiently, helping you validate concepts and secure early market traction. Focus on your vision, we handle the tech.",
    features: [
      "Rapid prototyping & MVP",
      "Product strategy & roadmap",
      "Scalability planning",
      "Post-launch support"
    ]
  }
];

export const technologies = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", icon: "FileCode", description: "Versatile backend development" },
      { name: "C++", icon: "Cpu", description: "High-performance applications" },
      { name: "JavaScript", icon: "Globe", description: "Modern web development" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Django", icon: "Server", description: "Robust web framework" },
      { name: "React", icon: "Component", description: "Interactive user interfaces" },
      { name: "Node.js", icon: "Zap", description: "Server-side JavaScript" },
      { name: "Qt", icon: "Monitor", description: "Cross-platform applications" }
    ]
  },
  {
    category: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: "Container", description: "Containerization platform" },
      { name: "Kubernetes", icon: "Layers", description: "Container orchestration" },
      { name: "AWS", icon: "Cloud", description: "Amazon Web Services" },
      { name: "Azure", icon: "CloudLightning", description: "Microsoft Azure" }
    ]
  }
];

export const aboutStats = [
  { number: "5+", label: "Years Experience", description: "Delivering excellence since 2019" },
  { number: "20+", label: "Projects Completed", description: "Successful implementations worldwide" },
  { number: "100%", label: "Client Satisfaction", description: "Building trust and long-term partnerships" },
  { number: "24/7", label: "Support Available", description: "Always here when you need us" }
];

export const internalProjects = [
  {
    name: "SnapSafe",
    description: "Secure file management solution",
    category: "Security"
  },
  {
    name: "TYKE",
    description: "Modern development toolkit",
    category: "Development Tools"
  },
  {
    name: "OptoCrypto",
    description: "Cryptocurrency optimization platform",
    category: "FinTech"
  }
];

export const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Technologies", path: "/technologies" },
  { name: "Contact", path: "/contact" }
];