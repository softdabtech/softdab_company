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
    subtitle: "Outsourcing",
    description: "We create scalable, secure, and efficient software tailored to your business goals.",
    features: [
      "Full-cycle development",
      "Scalable architecture",
      "Security-first approach",
      "Modern technologies"
    ],
    icon: "Code"
  },
  {
    id: 2,
    title: "Dedicated Teams",
    subtitle: "Outstaffing",
    description: "Hire top-tier developers to seamlessly integrate into your workflow.",
    features: [
      "Pre-vetted developers",
      "Seamless integration",
      "Flexible team size",
      "Direct communication"
    ],
    icon: "Users"
  },
  {
    id: 3,
    title: "Startup Support",
    subtitle: "Innovation Partners",
    description: "Empowering early-stage startups with innovative solutions and technical expertise.",
    features: [
      "MVP development",
      "Technical consulting",
      "Rapid prototyping",
      "Growth scaling"
    ],
    icon: "Rocket"
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