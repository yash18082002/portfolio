'use client'

import { useEffect, useRef, useState } from 'react'

// Data Arrays
const darkMessages = [
  { icon: '🔴', text: 'The dark side is strong with this one.' },
  { icon: '😌', text: 'Welcome back to the dark side.' },
  { icon: '⚔️', text: 'Peace is a lie. There is only passion.' },
  { icon: '😎', text: 'This is the way.' },
  { icon: '🖤', text: 'Good... Let the dark mode flow through you.' },
  { icon: '✨', text: 'You have chosen wisely.' },
  { icon: '🌑', text: 'Embrace the darkness.' },
  { icon: '🛸', text: 'Now THIS is podracing.' },
  { icon: '🌌', text: 'The darkness is strong with you.' },
  { icon: '😈', text: 'Your journey to the dark side is complete.' },
  { icon: '🎭', text: 'Everything is proceeding as I have foreseen.' },
  { icon: '💀', text: 'At last, the dark side.' },
  { icon: '🌙', text: 'The night welcomes you.' },
  { icon: '🦇', text: 'Ah, a person of culture.' },
  { icon: '😴', text: 'Your retinas thank you.' },
  { icon: '🕶️', text: 'Cool people use dark mode.' },
]

const lightMessages = [
  { icon: '🔵', text: 'A Jedi, are you? Hmm.' },
  { icon: '😵', text: 'My eyes! The light burns!' },
  { icon: '😤', text: 'I have a bad feeling about this.' },
  { icon: '🙈', text: 'So uncivilized.' },
  { icon: '☀️', text: 'May the... brightness... be with you?' },
  { icon: '😩', text: 'You were supposed to destroy the light mode!' },
  { icon: '😵‍💫', text: 'A surprise, to be sure, but an unwelcome one.' },
  { icon: '🤢', text: 'I sense a disturbance in the force.' },
  { icon: '😬', text: 'You are a bold one.' },
  { icon: '🏜️', text: "I hate light mode. It's bright and irritating, and now its everywhere." },
  { icon: '💡', text: 'Blinding, this is.' },
  { icon: '😑', text: 'This is not the theme you are looking for.' },
  { icon: '🔦', text: 'Who hurt you?' },
  { icon: '👀', text: 'My precious dark mode... gone.' },
  { icon: '😭', text: 'Why would you do this to me?' },
  { icon: '🧛', text: "I'm melting... MELTING!" },
]

const experiences = [
  {
    date: 'Feb 2026 - Present',
    role: 'Software Engineer',
    company: 'Infinite Options • San Jose, CA',
    summary: "Built an AI-powered mock interview platform with voice conversations under 500ms latency. Scaled from 100 to 10,000+ concurrent users while cutting infrastructure costs by 65%. Nobody likes awkward silences, especially not AI.",
    tech: ['Deepgram', 'Google Gemini', 'Kubernetes', 'Redis'],
  },
  {
    date: 'June 2025 - Sep 2025',
    role: 'Software Engineer Intern',
    company: 'Zof AI • San Francisco, CA',
    summary: "Built the core test orchestration platform from scratch. It ingests requirements, generates test cases, and dispatches them to AI agents. Handles 200+ concurrent test executions without breaking a sweat.",
    tech: ['Node.js', 'Python', 'PostgreSQL', 'Kubernetes'],
  },
  {
    date: 'June 2023 - June 2024',
    role: 'Full Stack Developer Intern',
    company: 'NeuralSpace Inc. • London, UK (Remote)',
    summary: "Built DocAI, a document processing platform with drag-and-drop pipeline builder. Users can correct the AI's predictions, which feeds back into training. Improved extraction accuracy by 20%.",
    tech: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
  },
  {
    date: 'June 2021 - Oct 2021',
    role: 'Software Developer Intern',
    company: 'Klothesera • Remote',
    summary: "Built the frontend for an e-commerce platform that actually loads fast. Cut page load times by 30% and boosted user engagement by 25%. Fixed 10+ browser compatibility issues because apparently not everyone uses Chrome.",
    tech: ['React', 'Bootstrap', 'JavaScript'],
  },
]

const education = [
  {
    icon: '🎓',
    degree: "Master's in Software Engineering",
    school: 'University of California, Irvine',
    details: 'GPA: 3.98/4.0 • Sep 2024 - Dec 2025',
    focus: "Focused on AI Engineering, Distributed Systems, and Cloud Security. One A- away from a perfect 4.0. Yes, I'm still thinking about it.",
  },
  {
    icon: '📚',
    degree: "Bachelor's in Computer Science",
    school: 'Kalinga Institute of Industrial Technology',
    details: 'GPA: 9.01/10.0 • Sep 2020 - May 2024',
    focus: "Where it all began. Four years of learning, building, and realizing that StackOverflow is every developer's best friend.",
  },
]

const projects = [
  {
    icon: '🩺',
    title: 'Project IVA',
    description: "A real-time conversational AI physician avatar with ~500ms response latency. Built a RAG pipeline over 100+ medical documents with vector search and Redis caching. HIPAA-aligned with encrypted data flow and audit logging. Because healthcare AI should actually be secure.",
    tech: ['Next.js', 'FastAPI', 'GraphQL', 'LiveKit', 'AWS', 'RAG'],
    github: 'https://github.com/shlokjain/Capstone',
    demo: '',
  },
  {
    icon: '📡',
    title: 'SynthMon',
    description: "A synthetic monitoring service in Go that keeps watch over your HTTP endpoints like a loyal droid. Tracks latency percentiles, SSL expiry, and availability with less than 30 seconds to detect when things go wrong. Because finding out from Twitter that your site is down is not a good look.",
    tech: ['Go', 'Terraform', 'Prometheus', 'Grafana', 'AWS'],
    github: 'https://github.com/yash18082002/synthmon',
    demo: '',
  },
  {
    icon: '⚡',
    title: 'API Rate Limiter',
    description: "A high-performance rate limiter in C++ that keeps your APIs safe from getting overwhelmed. Handles 50,000+ requests per second across a 3-node cluster with less than 100ms to sync up. Built because sometimes you need to tell eager clients to slow down without being rude about it.",
    tech: ['C++', 'gRPC', 'CMake', 'Protobuf'],
    github: 'https://github.com/yash18082002/distributed-rate-limiter',
    demo: '',
  },
  {
    icon: '🍔',
    title: 'Yelp.com Prototype',
    description: "A full-stack food ordering platform where users browse menus and order food, while restaurant managers handle their operations. JWT authentication keeps everyone in their lane. Improved restaurant management efficiency by 20%.",
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/yash18082002/yelp-clone',
    demo: '',
  },
  {
    icon: '📦',
    title: 'Pack & Move',
    description: "A platform to browse moving companies and get custom price and time estimates. Integrated Mapbox API for distance-based calculations. Responsive design increased user interaction speed by 35%. Moving is stressful enough without a bad website.",
    tech: ['React', 'Node.js', 'MongoDB', 'Mapbox'],
    github: 'https://github.com/yash18082002/MinorProject',
    demo: '',
  },
]

const skills = [
  {
    category: 'Languages & Frameworks',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'Go', 'C++', 'React', 'Next.js', 'GraphQL', 'Moleculer'],
  },
  {
    category: 'AI & Cloud',
    items: ['RAG', 'MCP', 'AWS S3', 'AWS RDS', 'AWS ECS', 'AWS EC2', 'GCP'],
  },
  {
    category: 'DevOps & Tooling',
    items: ['Docker', 'Kubernetes', 'Terraform', 'Linux', 'Git', 'GitHub Actions', 'Prometheus', 'Grafana'],
  },
  {
    category: 'Databases & Systems',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Supabase'],
  },
]

export default function Home() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState({ icon: '', text: '' })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [navScrolled, setNavScrolled] = useState(false)
  
  const cursorRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' || 'dark'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
    const favicon = document.getElementById('favicon') as HTMLLinkElement
    if (favicon) {
      favicon.href = savedTheme === 'dark' ? '/favicon-dark.svg' : '/favicon-light.svg'
    }
  }, [])

  // Cursor follower
  useEffect(() => {
    let mouseX = 0, mouseY = 0
    let cursorX = 0, cursorY = 0
    let animationId: number

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateCursor = () => {
      if (cursorRef.current) {
        cursorX += (mouseX - cursorX) * 0.1
        cursorY += (mouseY - cursorY) * 0.1
        cursorRef.current.style.left = cursorX + 'px'
        cursorRef.current.style.top = cursorY + 'px'
      }
      animationId = requestAnimationFrame(animateCursor)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animateCursor()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Nav scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, index * 100)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.experience-item, .project-card, .skill-category, .education-card').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    
    document.body.classList.add('theme-transitioning')
    
    // Flash overlay effect
    if (overlayRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = ((rect.left + rect.width / 2) / window.innerWidth) * 100
      const y = ((rect.top + rect.height / 2) / window.innerHeight) * 100
      overlayRef.current.style.setProperty('--click-x', x + '%')
      overlayRef.current.style.setProperty('--click-y', y + '%')
      overlayRef.current.classList.remove('to-light', 'to-dark')
      overlayRef.current.classList.add(newTheme === 'light' ? 'to-light' : 'to-dark')
      overlayRef.current.classList.add('flash')
      
      setTimeout(() => {
        overlayRef.current?.classList.remove('flash')
      }, 400)
    }
    
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)

    const favicon = document.getElementById('favicon') as HTMLLinkElement
    if (favicon) {
      favicon.href = newTheme === 'dark' ? '/favicon-dark.svg' : '/favicon-light.svg'
    }
    
    // Show toast
    const messages = newTheme === 'dark' ? darkMessages : lightMessages
    const msg = messages[Math.floor(Math.random() * messages.length)]
    setToastMessage(msg)
    
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current)
    setShowToast(true)
    
    toastTimeoutRef.current = setTimeout(() => {
      setShowToast(false)
      document.body.classList.remove('theme-transitioning')
    }, 2500)
  }

  const handleCursorHover = (hovering: boolean) => {
    if (cursorRef.current) {
      if (hovering) {
        cursorRef.current.classList.add('hovering')
      } else {
        cursorRef.current.classList.remove('hovering')
      }
    }
  }

  return (
    <>
      {/* Noise Overlay */}
      <div className="noise-overlay" />
      
      {/* Custom Cursor */}
      <div className="cursor-follower" ref={cursorRef} />

      {/* Navigation */}
      <nav className={`nav ${navScrolled ? 'scrolled' : ''}`}>
        <a href="#" className="nav-logo" onMouseEnter={() => handleCursorHover(true)} onMouseLeave={() => handleCursorHover(false)}>
          yash<span>.</span>
        </a>
        <ul className="nav-links">
          {['Experience', 'Education', 'Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                onMouseEnter={() => handleCursorHover(true)}
                onMouseLeave={() => handleCursorHover(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
            onMouseEnter={() => handleCursorHover(true)}
            onMouseLeave={() => handleCursorHover(false)}
          >
            <svg className="sun-icon" viewBox="0 0 24 24">
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
            </svg>
            <svg className="moon-icon" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
            </svg>
          </button>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>&times;</button>
        {['Experience', 'Education', 'Projects', 'Skills', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)}>
            {item}
          </a>
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-bg-shape shape-1"></div>
        <div className="hero-bg-shape shape-2"></div>
        <div className="hero-content">
          <p className="hero-greeting">Hello there,</p>
          <h1 className="hero-name">I&apos;m <em>Yash Agarwal</em></h1>
          <p className="hero-title">Software Engineer who builds scalable systems and AI-powered tools that actually work</p>
          <p className="hero-bio">I recently graduated with a Master&apos;s from UC Irvine, where I focused on distributed systems, cloud architecture, and making machines do clever things. When I&apos;m not debugging code at 2 AM or convincing Claude to behave, you&apos;ll find me exploring new technologies and wondering why I didn&apos;t just become a hermit.</p>
          <div className="hero-cta">
            <a 
              href="#projects" 
              className="btn btn-primary"
              onMouseEnter={() => handleCursorHover(true)}
              onMouseLeave={() => handleCursorHover(false)}
            >
              View Projects
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>
            </a>
            <a 
              href="/Resume_YashAgarwal.pdf" 
              download 
              className="btn btn-secondary"
              onMouseEnter={() => handleCursorHover(true)}
              onMouseLeave={() => handleCursorHover(false)}
            >
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
              Download Resume
            </a>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section" id="experience">
        <div className="section-container">
          <div className="section-header">
            <p className="section-label">Career Journey</p>
            <h2 className="section-title">Experience</h2>
          </div>
          <div className="experience-timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <p className="experience-date">{exp.date}</p>
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-summary">{exp.summary}</p>
                <div className="experience-tech">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section" id="education">
        <div className="section-container">
          <div className="section-header">
            <p className="section-label">Academic Path</p>
            <h2 className="section-title">Education</h2>
          </div>
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-icon">{edu.icon}</div>
                <div className="education-content">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-school">{edu.school}</p>
                  <p className="education-details">{edu.details}</p>
                  <p className="education-focus">{edu.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section" id="projects">
        <div className="section-container">
          <div className="section-header">
            <p className="section-label">Featured Work</p>
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article 
                key={index} 
                className="project-card"
                onMouseEnter={() => handleCursorHover(true)}
                onMouseLeave={() => handleCursorHover(false)}
              >
                <div className="project-icon">{project.icon}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                {(project.github || project.demo) && (
                  <div className="project-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section" id="skills">
        <div className="section-container">
          <div className="section-header">
            <p className="section-label">Technical Arsenal</p>
            <h2 className="section-title">Skills & Technologies</h2>
          </div>
          <div className="skills-grid">
            {skills.map((category, index) => (
              <div key={index} className="skill-category">
                <h3 className="skill-category-title">{category.category}</h3>
                <div className="skill-list">
                  {category.items.map((skill, i) => (
                    <span 
                      key={i} 
                      className="skill-item"
                      onMouseEnter={() => handleCursorHover(true)}
                      onMouseLeave={() => handleCursorHover(false)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="section-container">
          <div className="section-header">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Contact</h2>
          </div>
          <div className="contact-content">
            <div className="contact-text">
              <h3>Let&apos;s build something <em style={{ fontFamily: "'Playfair Display', serif", color: 'var(--accent)' }}>amazing</em> together</h3>
              <p>Whether you have a project in mind, want to discuss something over coffee, or just want to debate which trilogy is the best (there&apos;s only one correct answer), I&apos;d love to hear from you.</p>
              <div className="contact-links">
                <a 
                  href="mailto:agarway3@uci.edu" 
                  className="contact-link"
                  onMouseEnter={() => handleCursorHover(true)}
                  onMouseLeave={() => handleCursorHover(false)}
                >
                  <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  <div className="contact-link-content">
                    <span className="contact-link-label">Email</span>
                    <span className="contact-link-value">agarway3@uci.edu</span>
                  </div>
                  <span className="contact-link-arrow">→</span>
                </a>
                <a 
                  href="mailto:yash18082002@gmail.com" 
                  className="contact-link"
                  onMouseEnter={() => handleCursorHover(true)}
                  onMouseLeave={() => handleCursorHover(false)}
                >
                  <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  <div className="contact-link-content">
                    <span className="contact-link-label">Email</span>
                    <span className="contact-link-value">yash18082002@gmail.com</span>
                  </div>
                  <span className="contact-link-arrow">→</span>
                </a>
                <a 
                  href="tel:+19496780139" 
                  className="contact-link"
                  onMouseEnter={() => handleCursorHover(true)}
                  onMouseLeave={() => handleCursorHover(false)}
                >
                  <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  <div className="contact-link-content">
                    <span className="contact-link-label">Phone</span>
                    <span className="contact-link-value">(949) 678-0139</span>
                  </div>
                  <span className="contact-link-arrow">→</span>
                </a>
                <a 
                  href="https://linkedin.com/in/yash-agarwal18" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  onMouseEnter={() => handleCursorHover(true)}
                  onMouseLeave={() => handleCursorHover(false)}
                >
                  <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  <div className="contact-link-content">
                    <span className="contact-link-label">LinkedIn</span>
                    <span className="contact-link-value">Connect with me</span>
                  </div>
                  <span className="contact-link-arrow">→</span>
                </a>
                <a 
                  href="https://github.com/yash18082002" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  onMouseEnter={() => handleCursorHover(true)}
                  onMouseLeave={() => handleCursorHover(false)}
                >
                  <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  <div className="contact-link-content">
                    <span className="contact-link-label">GitHub</span>
                    <span className="contact-link-value">View my code</span>
                  </div>
                  <span className="contact-link-arrow">→</span>
                </a>
              </div>
            </div>
            <div className="contact-visual">
              <div className="contact-shape"></div>
              <div className="contact-shape"></div>
              <div className="contact-shape"></div>
              <span className="contact-cta-text">Say hello!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">© 2026 Yash Agarwal. Built with Claude, caffeine and a sense of humor.</p>
          <div className="footer-socials">
            <a 
              href="https://linkedin.com/in/yash-agarwal18" 
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social" 
              aria-label="LinkedIn"
              onMouseEnter={() => handleCursorHover(true)}
              onMouseLeave={() => handleCursorHover(false)}
            >
              <svg viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a 
              href="https://github.com/yash18082002" 
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social" 
              aria-label="GitHub"
              onMouseEnter={() => handleCursorHover(true)}
              onMouseLeave={() => handleCursorHover(false)}
            >
              <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Theme Toast Notification */}
      <div className={`theme-toast ${showToast ? 'visible' : ''}`}>
        <span className="theme-toast-icon">{toastMessage.icon}</span>
        <span className="theme-toast-text">{toastMessage.text}</span>
      </div>

      {/* Theme Transition Overlay */}
      <div className="theme-overlay" ref={overlayRef}></div>
    </>
  )
}
