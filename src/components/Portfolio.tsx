import { useState, useEffect } from "react";

// ============================================================
// DATA — sourced from Jeevanantham P Resume 2026
// ============================================================

// Career start: first company (Torry Harris) joining date — Aug 2019.
// Total years of experience auto-updates to today's date.
const CAREER_START_DATE = new Date("2019-08-01");
const yearsOfExperience = Math.floor(
  (Date.now() - CAREER_START_DATE.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
);

const personalInfo = {
  name: "Jeevanantham P",
  firstName: "Jeevanantham",
  title: "Site Reliability Engineer",
  company: "Cisco Systems",
  companyUrl: "https://www.cisco.com/",
  email: "jeevananthamp16@gmail.com",
  phone: "+91 9445354054",
  linkedin: "https://linkedin.com/in/jeevananthamp16",
  github: "https://github.com/jeevananthamp16",
  location: "Chennai, India",
  summary: `Site Reliability Engineer with ${yearsOfExperience}+ years ensuring 99.99% uptime for Cisco Webex Meetings across 50+ Kubernetes clusters and 8 global data centers serving 100M+ users. Drove 40% MTTD reduction and 35% MTTR reduction through automation and continuous monitoring. Expertise in Kubernetes, CI/CD, IaC, and cloud platforms (AWS, Azure).`,
};

const stats = [
  { value: `${yearsOfExperience}+`, label: "Years Experience" },
  { value: "99.99%", label: "Uptime Delivered" },
  { value: "50+", label: "K8s Clusters" },
  { value: "100M+", label: "Users Served" },
];

const experience = [
  {
    role: "Site Reliability Engineer",
    company: "Cisco Systems (Contract)",
    companyUrl: "https://www.cisco.com/",
    note: "Adecco India (Jan 2024 – May 2026) · Tekgence India (May 2026 – Present)",
    period: "Jan 2024 – Present",
    location: "Chennai, India",
    highlights: [
      "Maintained 99.99% uptime for Webex Meetings by managing 50+ K8s clusters across 8 DCs serving 100M+ users",
      "Cut infrastructure costs by 25% through HPA scale-down stabilization and time-based cronjob scaling",
      "Enabled zero-downtime deployments using PodDisruptionBudgets during cluster maintenance",
      "Managed Helm charts for 50+ microservices with HPA, PDB, resource quotas, and sidecar patterns",
      "Resolved 95% of pod failures within SLA by debugging CrashLoopBackOff, OOMKilled, ImagePullBackOff issues",
      "Saved 15+ hours weekly by developing 20+ Python/Bash automation scripts for operations",
      "Slashed deployment time by 60% with Python Kubernetes Client tools for parallel execution across clusters",
      "Built Grafana dashboard propagation tool for consistent deployment across 8+ data centers",
      "Developed cluster auth automation with HashiCorp Vault integration for secure token management",
      "Lowered MTTD by 40% by designing 25+ Grafana dashboards for availability, error rates, latency metrics",
      "Decreased MTTR by 35% through automated alerting and runbook execution",
      "Conducted RCA for 100+ incidents, trimming repeat incidents by 60%",
      "Led AIOps initiatives integrating ML models, improving anomaly detection by 40%",
      "Published 'Copilot Chat History Search' VS Code extension on Marketplace",
    ],
  },
  {
    role: "Software Engineer",
    company: "Torry Harris Integration Solutions",
    companyUrl: "https://www.torryharris.com/",
    period: "Sep 2021 – Jan 2024",
    location: "Bangalore, India",
    highlights: [
      "Delivered 10+ enterprise Java applications with AWS SDK for cloud integrations",
      "Achieved 95% deployment success rate with Jenkins and Docker-based CI/CD pipelines",
      "Designed Kafka clusters processing 500K+ messages daily on Kubernetes and Helm charts",
      "Built PDF Q&A chatbot using LangChain/LLM with 85% query accuracy",
      "Integrated Hugging Face models, cutting document processing time by 50%",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Torry Harris Integration Solutions",
    companyUrl: "https://www.torryharris.com/",
    period: "Aug 2019 – Sep 2021",
    location: "Bangalore, India",
    highlights: [
      "Shortened provisioning time by 60% using Terraform for Azure infrastructure",
      "Containerized 15+ Kafka applications using Docker for consistent deployments",
      "Developed 10+ UiPath RPA workflows, automating 200+ hours monthly",
    ],
  },
];

const skillGroups = [
  {
    category: "Cloud",
    icon: "☁️",
    items: ["AWS", "EC2", "EKS", "VPC", "IAM", "Azure DevOps", "AKS", "Azure OpenAI"],
  },
  {
    category: "Containers & Orchestration",
    icon: "🐳",
    items: ["Docker", "Kubernetes", "ArgoCD", "Helm", "HPA", "VPA", "PDB"],
  },
  {
    category: "CI/CD",
    icon: "🔄",
    items: ["Jenkins", "GitLab CI/CD", "GitHub Actions"],
  },
  {
    category: "Infrastructure as Code",
    icon: "🏗️",
    items: ["Terraform", "Ansible"],
  },
  {
    category: "Observability",
    icon: "📊",
    items: ["Prometheus", "Grafana", "ELK Stack", "AppDynamics", "ThousandEyes"],
  },
  {
    category: "Languages",
    icon: "💻",
    items: ["Python", "Bash", "Java"],
  },
  {
    category: "Other",
    icon: "🔧",
    items: ["HashiCorp Vault", "Kafka", "LangChain", "MCP", "Git"],
  },
];

const projects = [
  {
    name: "Cloud Instance Manager",
    description:
      "AWS EC2 management platform built with Spring Boot featuring JWT authentication, RBAC, instance lifecycle control, security-group management, and multi-region support.",
    tech: ["Java", "Spring Boot", "AWS SDK", "MySQL", "JWT", "REST API"],
    link: "https://github.com/jeevananthamp16",
    accent: "from-cyan-500/20 to-blue-500/20",
  },
  {
    name: "Copilot Chat History Search",
    description:
      "VS Code extension for searching GitHub Copilot conversations, published on the VS Code Marketplace for enhanced developer productivity.",
    tech: ["TypeScript", "VS Code API", "Node.js"],
    link: "https://github.com/jeevananthamp16",
    badge: "Published",
    accent: "from-teal-500/20 to-emerald-500/20",
  },
  {
    name: "PDF Q&A Chatbot",
    description:
      "LangChain-based AI chatbot with vector search for document analysis. Implements chunking, embeddings, and semantic search for natural-language Q&A.",
    tech: ["Python", "LangChain", "LLM", "Hugging Face", "Vector DB", "Streamlit"],
    link: "https://github.com/jeevananthamp16",
    accent: "from-violet-500/20 to-fuchsia-500/20",
  },
  {
    name: "SLO Dashboards",
    description:
      "Grafana SLO/SLI dashboards with error-budget burn-rate alerts, availability tracking, and custom PromQL queries integrated with Prometheus.",
    tech: ["Grafana", "Prometheus", "PromQL", "AlertManager"],
    link: "https://github.com/jeevananthamp16",
    accent: "from-amber-500/20 to-orange-500/20",
  },
];

const education = [
  {
    degree: "B.E. Computer Science",
    institution: "Velammal Engineering College, Anna University",
    period: "2015 – 2019",
    location: "Chennai, India",
    grade: "74/100",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Adhiyaman Matric Hr. Sec. School",
    period: "2014 – 2015",
    location: "Uthangarai, India",
    grade: "94/100",
  },
];

// ============================================================
// ICONS
// ============================================================
const Icons = {
  Mail: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Phone: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  Linkedin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
  Github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  MapPin: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Download: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  Cap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  ),
};

// ============================================================
// NAV ITEMS
// ============================================================
const navItems = ["Home", "Skills", "Experience", "Projects", "Education", "Contact"];

// ============================================================
// COMPONENTS
// ============================================================
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60" : "bg-transparent"}`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-white tracking-tight">
          <span className="text-cyan-400">&lt;</span>JP<span className="text-cyan-400">/&gt;</span>
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors uppercase tracking-wide">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`${import.meta.env.BASE_URL}/Jeevanantham_P_Resume_2026.html`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
        >
          <Icons.Download /> Resume
        </a>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white">
          {isOpen ? <Icons.X /> : <Icons.Menu />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-slate-800/60">
          <ul className="flex flex-col p-4">
            {navItems.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="block py-3 text-slate-300 hover:text-cyan-400 font-medium uppercase text-sm tracking-wide">
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      {/* Themed grid background */}
      <div className="absolute inset-0 bg-grid-theme" />
      {/* Background glow orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.08),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="text-center md:text-left animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/60 border border-slate-700 text-xs font-medium text-cyan-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Available for opportunities
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              {personalInfo.firstName}
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl text-slate-300 font-light mb-6">
            {personalInfo.title}{" "}
            <a href={personalInfo.companyUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-medium hover:underline">
              @{personalInfo.company}
            </a>
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
            {personalInfo.summary}
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
              <Icons.Linkedin /> LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-200 font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all">
              <Icons.Github /> GitHub
            </a>
            <a href={`${import.meta.env.BASE_URL}/Jeevanantham_P_Resume_2026.html`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-200 font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all">
              <Icons.ExternalLink /> Resume
            </a>
          </div>
        </div>

        {/* Right: avatar */}
        <div className="flex justify-center md:justify-end animate-fade-up-delay">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 blur-2xl opacity-40 animate-pulse-slow" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-tr from-cyan-400 via-sky-500 to-blue-600">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpeg`}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-full select-none"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center rounded-xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm py-3">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {s.value}
              </div>
              <div className="text-xs text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-14">
      <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{title}</h2>
      {subtitle && <p className="text-slate-400 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600" />
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Technical Expertise"
          title="Skills & Tools"
          subtitle="A curated stack I use to build scalable, reliable, and observable cloud-native systems."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="group rounded-2xl bg-slate-900/50 border border-slate-800 p-6 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 text-sm rounded-lg bg-slate-800/70 text-slate-300 border border-slate-700/60 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors">
                    {item}
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

function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading eyebrow="Career" title="Work Experience" subtitle="My professional journey and contributions across SRE, DevOps, and software engineering." />
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/60 via-slate-700 to-transparent md:-translate-x-1/2" />
          <div className="space-y-10">
            {experience.map((job, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="absolute left-0 md:left-1/2 top-2 w-3.5 h-3.5 rounded-full bg-cyan-400 ring-4 ring-cyan-500/20 md:-translate-x-1/2" />
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 hover:border-cyan-500/40 transition-all">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{job.period}</span>
                      <span className="text-xs text-slate-500 inline-flex items-center gap-1"><Icons.MapPin /> {job.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{job.role}</h3>
                    <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-semibold text-sm hover:underline inline-flex items-center gap-1">
                      {job.company} <Icons.ExternalLink />
                    </a>
                    {job.note && <p className="text-xs text-slate-500 mt-1">{job.note}</p>}
                    <ul className="mt-4 space-y-2">
                      {job.highlights.map((h, i) => (
                        <li key={i} className="text-slate-400 text-sm pl-5 relative before:content-['▹'] before:absolute before:left-0 before:text-cyan-400">
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading eyebrow="Portfolio" title="Featured Projects" subtitle="A selection of tools and applications I've designed and built." />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.name} className="group relative rounded-2xl bg-slate-900/50 border border-slate-800 p-7 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
              <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${project.accent} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                  {project.badge && (
                    <span className="shrink-0 px-2.5 py-1 text-xs rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">{project.badge}</span>
                  )}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-slate-800/70 text-cyan-300 border border-slate-700/60">{t}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors">
                  <Icons.Github /> View on GitHub
                </a>
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
    <section id="education" className="py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading eyebrow="Academics" title="Education Journey" subtitle="My academic foundation in computer science and technology." />
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 hover:border-cyan-500/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Icons.Cap />
                </div>
                <span className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700">{edu.period}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
              <p className="text-cyan-400 font-medium text-sm mt-1">{edu.institution}</p>
              <div className="flex items-center justify-between mt-4 text-sm">
                <span className="text-slate-500 inline-flex items-center gap-1"><Icons.MapPin /> {edu.location}</span>
                <span className="text-slate-300 font-semibold">Grade: {edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <SectionHeading eyebrow="Contact" title="Get In Touch" subtitle="Have a project idea, an opportunity, or just want to say hi? Feel free to reach out." />

        <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 rounded-xl bg-slate-900/60 border border-slate-800 p-4 hover:border-cyan-500/40 transition-all">
            <span className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400"><Icons.Mail /></span>
            <div>
              <div className="text-xs text-slate-500">Email</div>
              <div className="text-sm text-slate-200">{personalInfo.email}</div>
            </div>
          </a>
          <a href={`tel:${personalInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-xl bg-slate-900/60 border border-slate-800 p-4 hover:border-cyan-500/40 transition-all">
            <span className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400"><Icons.Phone /></span>
            <div>
              <div className="text-xs text-slate-500">Phone</div>
              <div className="text-sm text-slate-200">{personalInfo.phone}</div>
            </div>
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all">
            <Icons.Mail /> Send Email
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-200 font-semibold hover:bg-slate-800 transition-all">
            <Icons.Linkedin /> LinkedIn
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/60 border border-slate-700 text-slate-200 font-semibold hover:bg-slate-800 transition-all">
            <Icons.Github /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        <p className="text-sm text-slate-500">
          Built with <span className="text-cyan-400">Astro</span> & <span className="text-cyan-400">React</span>
        </p>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
