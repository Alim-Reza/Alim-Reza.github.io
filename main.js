import './style.css';
import AOS from 'aos';
// import 'aos/dist/aos.css';

// Initialize AOS
AOS.init();

const experience = [
  {
    title: 'Senior Software Developer',
    company: 'Kona Software Lab',
    period: '2022 - Present',
    description: 'Developed a high-performance cryptocurrency trading platform with <b>Next.js</b> and built a secure fintech system portal using <b>Spring Boot</b>,  and actively participated in code reviews while following <b>TDD</b> principles.',
    achievements: [
      'Reduced API call load on the server by 60% and improved user experience through effective caching strategies.',
      'Enhanced frontend security by preventing XSS attacks and implementing DOMPurify for safe HTML rendering.',
      'Optimized the web notification service, improving performance and delivery speed by 50%.'
    ]
  },
  {
    title: 'Software Developer',
    company: 'RedDot Digital Ltd.',
    period: '2021 - 2022',
    description: 'Developed and maintained multiple telecom applications using <b>Spring Boot</b>.',
    achievements: [
      "Delivered projects that served over 100,000+ daily active users",
      "Managed server security with regular SSL/TLS updates and YUM patches."
    ]
  },
  {
    title: 'Software Developer',
    company: 'CoKreates Limited',
    period: '2019 - 2021',
    description: 'Built eGRP, an ERP system for the Bangladesh government, supporting two ministries with <b>Spring Boot</b> and <b>Angular</b>.',
    achievements: [
      'Automated deployment pipeline with Jenkins.',
      'Reduced development time and nuisances with task automation using bash scripts.',
      'Covered 75% E2E testing with protractor.'
    ]
  }
]

const education = [
  // {
  //   degree: 'Master of Computer Science',
  //   school: 'Tech University',
  //   period: '2014 - 2016',
  //   description: 'Specialized in Software Engineering and Distributed Systems',
  //   achievements: [
  //     'Published research paper on distributed systems',
  //     'Led student development team',
  //     'GPA: 3.9/4.0'
  //   ]
  // },
  {
    degree: 'Bachelor of Computer Science & Engineering',
    school: 'American International University - Bangladesh',
    period: '2016 - 2020',
    description: 'Focus on Core Computer Science and Engineer',
    achievements: [
      "Published thesis, titled <b><i>An Automated Model using Deep Convolutional Neural Network for Retinal Image Classification to Detect Diabetic Retinopathy</i></b> on <i>https://dl.acm.org/doi/abs/10.1145/3377049.3377067</i>"
      // 'Dean\'s List all semesters',
      // 'President of Computing Society',
      // 'First Class Honors'
    ]
  }
]

const skills = {
  frontend: ['ReactJS', 'NextJS', 'Angular', 'TypeScript', 'Tailwind CSS'],
  backend: ['Spring Boot', 'Django', 'PostgreSQL', "MariaDB", 'Microservice Architecture', 'REST API', 'Kafka', 'Redis'],
  devops: ['Linux', 'Jenkins', 'Docker'],
  tools: ['Git', 'SonarQube', 'Jira', 'Figma']
}

const projects = [
  {
    title: 'e-GRP',
    description: 'Full-stack ERP solution for the Goivernment of Bangladesh',
    tech: ['Angular', 'Spring-Boot', 'PostgreSQL'],
    type: 'Full Stack'
  },
  {
    title: 'Shadhinota Campaign',
    description: 'Telco solution for rewarding mobile auto-recharge merchants.',
    tech: ['Spring Boot', 'Kafka', 'PostgreSQL'],
    type: 'Backend'
  },
  {
    title: 'Cryptokona.io',
    description: 'Crypto currency trading platform.',
    tech: ['ReactJS', 'NextJS'],
    type: 'Frontend'
  },
  ,
  {
    title: 'Kona Integrated Platform - Portal',
    description: 'Highly customizable portal platform for Fintech Solution ',
    tech: ['Spring Boot', 'Kafka', 'MariaDB'],
    type: 'Backend'
  },
]

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen">
    <!-- Header -->
    <header class="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm z-50">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <h1 class="text-xl font-bold text-gray-800 dark:text-white">Alim Ahmed Reza</h1>
          <div class="space-x-6">
            <a href="#about" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">About</a>
            <a href="#experience" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Experience</a>
            <a href="#education" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Education</a>
            <a href="#skills" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Skills</a>
            <a href="#projects" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Projects</a>
            <a href="#contact" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-6">
      <div class="container mx-auto text-center" data-aos="fade-up">
        <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Full Stack Developer
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Building robust and scalable applications with modern technologies.
          Passionate about creating exceptional user experiences and efficient backend solutions.
        </p>
        <div class="flex justify-center gap-4">
          <a href="#contact" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get in Touch
          </a>
          <a href="/alim_ahmed_reza-5yoe.pdf" 
             download 
             class="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white" data-aos="fade-up">
          Professional Experience
        </h2>
        <div class="space-y-12">
          ${experience.map((job, index) => `
            <div class="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="${index * 100}">
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">${job.title}</h3>
                  <p class="text-blue-600 dark:text-blue-400">${job.company}</p>
                </div>
                <span class="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">${job.period}</span>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-4">${job.description}</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                ${job.achievements.map(achievement => `
                  <li>${achievement}</li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white" data-aos="fade-up">
          Education
        </h2>
        <div class="space-y-12">
          ${education.map((edu, index) => `
            <div class="max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="${index * 100}">
              <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">${edu.degree}</h3>
                  <p class="text-blue-600 dark:text-blue-400">${edu.school}</p>
                </div>
                <span class="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">${edu.period}</span>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-4">${edu.description}</p>
              <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                ${edu.achievements.map(achievement => `
                  <li>${achievement}</li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-white dark:bg-gray-900">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white" data-aos="fade-up">
          Skills & Expertise
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          ${Object.entries(skills).map(([category, items]) => `
            <div class="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg" data-aos="fade-up">
              <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white capitalize">
                ${category}
              </h3>
              <div class="space-y-2">
                ${items.map(skill => `
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-gray-700 dark:text-gray-300">${skill}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-gray-100 dark:bg-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-aos="fade-up">
          Featured Projects
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${projects.map((project, index) => `
            <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6" data-aos="fade-up" data-aos-delay="${index * 100}">
              <span class="text-sm font-medium text-blue-600 dark:text-blue-400">${project.type}</span>
              <h3 class="text-xl font-bold mt-2 mb-3 text-gray-900 dark:text-white">${project.title}</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">${project.description}</p>
              <div class="flex flex-wrap gap-2">
                ${project.tech.map(tech => `
                  <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-600 dark:text-gray-300">
                    ${tech}
                  </span>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white" data-aos="fade-up">
          Let's Work Together
        </h2>
        <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto" data-aos="fade-up">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <div class="flex justify-center gap-6" data-aos="fade-up">
          <a href="mailto:reza.alimahmed@gmail.com" class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Email
          </a>
          <a href="https://github.com/alim-reza" target="_blank" class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
          <a href="https://linkedin.com/in/alim-ahmed-reza-asif/" target="_blank" class="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-100 dark:bg-gray-800 py-8">
      <div class="container mx-auto px-6 text-center text-gray-600 dark:text-gray-300">
        © ${new Date().getFullYear()} Alim Ahmed Reza. All rights reserved.
      </div>
    </footer>
  </div>
`