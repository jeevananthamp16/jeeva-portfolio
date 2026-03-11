import { useState, useEffect } from "react";

// Data
const personalInfo = {
  name: "Jeevanantham P",
  title: "Site Reliability Engineer | DevOps Engineer",
  company: "Cisco Systems",
  email: "jeevananthamp16@gmail.com",
  linkedin: "https://linkedin.com/in/jeevananthamp16",
  github: "https://github.com/jeevananthamp16",
  portfolio: "https://jeevananthamp16.github.io/my-portfolio",
  location: "Bangalore, India",
  summary: `Site Reliability Engineer with 6+ years of expertise in building and maintaining resilient, high-availability systems for enterprise-scale platforms. Currently ensuring 99.99% uptime for Cisco Webex Meetings, managing 50+ Kubernetes clusters across global data centers. Reduced MTTD by 40% and MTTR by 35% through proactive monitoring and automation. Skilled in CI/CD orchestration, infrastructure as code, and cloud platforms (AWS, Azure). Passionate about GenAI and AIOps innovation.`,
};

const experience = [
  {
    role: "Site Reliability Engineer",
    company: "Cisco Systems",
    team: "Webex Meetings",
    period: "2023 - Present",
    location: "Bangalore, India",
    highlights: [
      "Maintain 99.99% uptime for Cisco Webex Meetings, managing 50+ Kubernetes clusters across 8 global data centers",
      "Automate CI/CD workflows using Jenkins, GitLab CI/CD, GitHub Actions, ArgoCD, reducing deployment time by 40%",
      "Design 25+ Grafana dashboards tracking service availability, error rates, latency, and capacity metrics",
      "Leverage AppDynamics for transaction tracing; ThousandEyes for monitoring global endpoint reachability",
      "Reduce MTTD by 40% and MTTR by 35% through proactive alerting and automated runbooks",
      "Develop 20+ Python and Bash automation scripts saving 15+ hours weekly in manual operations",
      "Conduct RCA for 100+ production incidents, reducing repeat incidents by 60%",
      "Built and published 'Copilot Chat History Search' VS Code extension on VS Code Marketplace",
      "Lead AIOps initiatives integrating ML models for anomaly detection",
    ],
  },
  {
    role: "Software Engineer",
    company: "Torry Harris Integration Solutions",
    team: "Enterprise Solutions",
    period: "Sep 2021 - 2023",
    location: "Bangalore, India",
    highlights: [
      "Developed 10+ enterprise Java applications using AWS SDK for cloud integrations",
      "Built CI/CD pipelines using Jenkins and Docker, achieving 95% deployment success rate",
      "Designed Kafka clusters processing 500K+ messages daily on Kubernetes",
      "Built PDF Q&A chatbot using LangChain and LLM models with 85% query accuracy",
      "Integrated Hugging Face models for NLP tasks, reducing document processing time by 50%",
      "Optimized deployment workflows, reducing release cycles by 30%",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Torry Harris Integration Solutions",
    team: "Cloud & Automation",
    period: "Aug 2019 - Sep 2021",
    location: "Bangalore, India",
    highlights: [
      "Provisioned Azure cloud infrastructure using Terraform, reducing provisioning time by 60%",
      "Containerized 15+ Kafka applications using Docker for consistent deployments",
      "Implemented configuration management standardizing infrastructure across 3 environments",
      "Developed 10+ RPA automation workflows using UiPath, automating 200+ hours monthly",
      "Participated in agile development with 95% sprint completion rate",
    ],
  },
];

const skills = {
  "Cloud Platforms": ["AWS (EC2, EKS, VPC, IAM, ECR)", "Azure (DevOps, AKS, VMs)"],
  "Containers & Orchestration": ["Docker", "Kubernetes", "ArgoCD", "Helm"],
  "CI/CD": ["Jenkins", "GitLab CI/CD", "GitHub Actions"],
  "Infrastructure as Code": ["Terraform", "Ansible"],
  "Monitoring & Observability": ["Prometheus", "Grafana", "ELK Stack", "EFK Stack", "AppDynamics", "ThousandEyes"],
  "Programming": ["Python", "Bash", "Shell Scripting", "Java"],
  "Version Control": ["Git", "GitHub", "GitLab"],
  "Operating Systems": ["Linux (RHEL, Ubuntu, CentOS)", "System Administration"],
  "Messaging": ["Apache Kafka"],
};

const projects = [
  {
    name: "Cloud Instance Manager (CIM)",
    description: "Full-stack application with Spring Boot backend using AWS SDK for EC2 instance lifecycle management. Features JWT-based authentication with RBAC, instance start/stop/reboot, security groups management, and multi-region AWS resource management.",
    tech: ["Java", "Spring Boot", "AWS SDK", "MySQL", "JWT", "REST API"],
  },
  {
    name: "Copilot Chat History Search",
    description: "VS Code extension for GitHub Copilot chat history management. Published on VS Code Marketplace for enhanced developer productivity.",
    tech: ["TypeScript", "VS Code API", "Node.js"],
  },
  {
    name: "PDF Q&A Chatbot",
    description: "AI-powered chatbot using LangChain and LLM models for PDF document analysis. Implements document chunking, embedding generation, and vector store for semantic search with natural language Q&A capabilities.",
    tech: ["Python", "LangChain", "OpenAI/LLM", "Hugging Face", "Vector DB", "Streamlit"],
  },
  {
    name: "SLO Dashboards & Observability Platform",
    description: "Comprehensive SLO/SLI dashboards in Grafana for tracking service reliability metrics. Includes error budget burn-rate alerts, availability tracking, and custom PromQL queries for SLO compliance.",
    tech: ["Grafana", "Prometheus", "PromQL", "AlertManager"],
  },
];

const education = [
  {
    degree: "Bachelor of Engineering - Computer Science",
    institution: "Velammal Engineering College, Anna University",
    period: "Jun 2015 - May 2019",
    location: "Chennai, India",
    gpa: "74%",
  },
  {
    degree: "High School",
    institution: "Adhiyaman Matric H.R. Secondary School",
    period: "Jun 2014 - Apr 2015",
    location: "Uthangarai, India",
    gpa: "94%",
  },
];

const interests = ["Open Source", "GenAI & LLMs", "AIOps", "Cloud-Native Technologies", "Technical Writing"];

// Icons
const Icons = {
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Linkedin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Download: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  ),
  X: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  ),
  ExternalLink: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" x2="21" y1="14" y2="3" />
    </svg>
  ),
};

// Components
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["About", "Experience", "Skills", "Projects", "Contact"];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-white">
          <span className="text-cyan-400">J</span>P
        </a>
        
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className={`transition-colors font-medium ${scrolled ? "text-slate-300 hover:text-cyan-400" : "text-white/90 hover:text-white"}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className={`md:hidden p-2 ${scrolled ? "text-white" : "text-white"}`}>
          {isOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
          <ul className="flex flex-col p-4">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="block py-3 text-slate-300 hover:text-cyan-400 font-medium">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="pt-20">
      {/* Dark Gradient Header - Like HTML Resume */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-wide">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-cyan-400 font-light mb-8">
            {personalInfo.title}
          </h2>
          
          {/* Contact Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
              <Icons.Mail /> {personalInfo.email}
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
              <Icons.Linkedin /> LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
              <Icons.Github /> GitHub
            </a>
            <span className="flex items-center gap-2 text-blue-200">
              <Icons.MapPin /> {personalInfo.location}
            </span>
          </div>
        </div>
      </div>

      {/* Summary Section - Matching Other Sections Style */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900 pb-3 mb-8 border-b-4 border-blue-900 uppercase tracking-wider">
            Professional Summary
          </h2>
          <p className="text-slate-700 leading-relaxed text-lg mb-8">
            {personalInfo.summary}
          </p>
          
          {/* Resume Download */}
          <div className="flex flex-wrap gap-4">
            <a href={`${import.meta.env.BASE_URL}Jeevanantham_P_Resume_2026.html`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all shadow-md hover:shadow-lg font-medium">
              <Icons.ExternalLink /> View Resume
            </a>
            <a href={`${import.meta.env.BASE_URL}Jeevanantham_P_Resume_2026.txt`} download="Jeevanantham_P_Resume_2026.txt"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-all font-medium border border-slate-200">
              <Icons.Download /> Download TXT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 pb-3 mb-10 border-b-4 border-blue-900 uppercase tracking-wider">
          Experience
        </h2>
        
        <div className="space-y-8">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-slate-200 last:pb-0">
              {/* Timeline Dot */}
              <div className="absolute -left-[7px] top-1 w-3 h-3 bg-blue-900 rounded-full ring-4 ring-blue-100" />
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                    <p className="text-blue-700 font-semibold">{job.company} · {job.team}</p>
                  </div>
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mb-4 flex items-center gap-1">
                  <Icons.MapPin /> {job.location}
                </p>
                
                <ul className="space-y-2">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="text-slate-600 text-sm pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:font-bold">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 pb-3 mb-10 border-b-4 border-blue-900 uppercase tracking-wider">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-5">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <h3 className="text-blue-900 font-bold mb-3 text-sm uppercase tracking-wide">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm bg-blue-50 text-blue-800 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 pb-3 mb-10 border-b-4 border-blue-900 uppercase tracking-wider">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200">
              <h3 className="text-lg font-bold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                {project.name}
              </h3>
              <p className="text-slate-600 text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-full border border-blue-100 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Education */}
        <h2 className="text-2xl font-bold text-slate-900 pb-3 mb-10 border-b-4 border-blue-900 uppercase tracking-wider">
          Education
        </h2>
        
        <div className="space-y-4 mb-12">
          {education.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                  <p className="text-blue-700 font-semibold">{edu.institution}</p>
                  <p className="text-slate-500 text-sm flex items-center gap-2 mt-1">
                    <Icons.MapPin /> {edu.location}
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">{edu.period}</span>
                  <p className="text-slate-600 text-sm mt-2 font-medium">GPA: {edu.gpa}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interests */}
        <h2 className="text-2xl font-bold text-slate-900 pb-3 mb-10 border-b-4 border-blue-900 uppercase tracking-wider">
          Interests
        </h2>
        
        <div className="flex flex-wrap gap-3">
          {interests.map((interest, index) => (
            <span key={index} className="px-5 py-2.5 bg-gradient-to-r from-slate-800 to-blue-900 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow">
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-blue-200 mb-10 max-w-xl mx-auto text-lg">
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and SRE practices.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-blue-50 rounded-xl transition-all shadow-lg hover:shadow-xl font-semibold">
            <Icons.Mail /> Send Email
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-blue-300 text-blue-200 hover:bg-blue-900/50 hover:border-white hover:text-white rounded-xl transition-all font-semibold">
            <Icons.Linkedin /> Connect on LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-blue-300 text-blue-200 hover:bg-blue-900/50 hover:border-white hover:text-white rounded-xl transition-all font-semibold">
            <Icons.Github /> View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 bg-slate-900 text-slate-400">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-sm">
          Built with <span className="text-cyan-400">Astro</span> & <span className="text-cyan-400">React</span>
        </p>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
