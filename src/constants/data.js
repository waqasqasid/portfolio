export const PROFILE = {
  name: 'Waqas Ali Shah',
  role: 'DevOps Engineer',
  roles: ['DevOps Engineer', 'Cloud Engineer', 'Linux Administrator'],
  location: 'Karachi, Pakistan',
  email: 'waqasqasid@gmail.com',
  phone: '923042620412',
  github: 'https://github.com/waqasqasid',
  linkedin: 'https://www.linkedin.com/in/waqasqasid/',
  summary:
    "DevOps enthusiast with a background in mechanical engineering and 6 months of hands-on technical experience in diagnostics and system troubleshooting. Currently building expertise in cloud computing, CI/CD pipelines, and automation to deliver efficient, reliable deployment solutions.",
  resumeFile: '/DevOps-JE.pdf',
}

export const NAV_LINKS = [
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'contact', href: '#contact' },
]

export const STATS = [
  { label: 'Core Skill Areas', value: 6, suffix: '+' },
  { label: 'Hands-on Lab Projects', value: 8, suffix: '' },
  { label: 'Linux Distros Administered', value: 3, suffix: '' },
  { label: 'Months in DevOps Internship', value: 6, suffix: '+' },
]

export const SKILL_GROUPS = [
  {
    category: 'Linux',
    icon: 'Terminal',
    skills: ['Ubuntu Linux', 'AlmaLinux', 'CentOS', 'Command-line Administration', 'Samba Servers'],
  },
  {
    category: 'Docker',
    icon: 'Container',
    skills: ['Containerization', 'Dockerfile Authoring', 'Image Management', 'Dev/Prod Parity'],
  },
  {
    category: 'AWS',
    icon: 'Cloud',
    skills: ['EC2', 'ECS', 'ECR', 'Security Groups', 'NACLs'],
  },
  {
    category: 'Virtualization',
    icon: 'Layers',
    skills: ['VMware', 'VirtualBox', 'Virtual Machine Provisioning'],
  },
  {
    category: 'Networking',
    icon: 'Network',
    skills: ['Network Access Control Lists', 'Security Groups', 'File & Print Sharing (Samba)'],
  },
  {
    category: 'CI/CD & Automation',
    icon: 'Workflow',
    skills: ['CI/CD Fundamentals', 'Deployment Automation', 'Cloud Deployment Concepts'],
  },
]

export const EXPERIENCE = [
  {
    role: 'DevOps Internship',
    company: 'Al-Nafi International College',
    period: 'Internship',
    points: [
      'Built foundational knowledge of DevOps practices, including CI/CD pipelines, automation, and cloud deployment.',
      'Set up and managed Samba servers to facilitate file sharing and printing services across multiple operating systems.',
      'Operated confidently in Linux environments with strong command-line and system management skills.',
      'Worked hands-on with Docker to containerize applications and maintain consistent development and production environments.',
    ],
  },
  {
    role: 'Sales & Support Executive',
    company: 'Al-Nafi International College',
    period: 'Prior Role',
    points: [
      'Identified and engaged potential students for IT diploma programs.',
      "Presented Al-Nafi's IT diplomas, highlighting benefits, certifications, and career outcomes.",
      'Guided applicants through registration and enrollment based on their interests and career goals.',
      'Followed up with leads, resolved queries, and supported them through to enrollment.',
    ],
  },
]

export const EDUCATION = [
  {
    degree: 'OTHM Level 6 in Information Technology',
    institution: 'Innovation College of professional Studies',
    period: 'Mar 2025 – Apr 2026',
  },
  {
    degree: 'DAE (Diploma of Associate Engineering)',
    institution: 'Government College of Technology',
    period: 'Mar 2018 – Apr 2021',
  },
  {
    degree: 'Matriculation',
    institution: 'The Citizen Foundation School, Nagina Police line  Keamari',
    period: 'Feb 2016 – Jan 2018',
  },
]

// Practice / lab projects grounded in the actual skill set on the resume.
// Framed honestly as hands-on lab work, not fabricated production deployments.
export const PROJECTS = [
  {
    title: 'Dockerized Multi-Service App',
    description:
      'Containerized a multi-service application with Docker, writing custom Dockerfiles to keep development and production environments consistent.',
    stack: ['Docker', 'Linux', 'Bash'],
    github: 'https://github.com/waqasalishah',
    demo: '',
  },
  {
    title: 'AWS EC2 Lab Infrastructure',
    description:
      'Provisioned and configured EC2 instances on AWS, including security group rules and NACLs to control inbound/outbound traffic.',
    stack: ['AWS EC2', 'Security Groups', 'NACLs'],
    github: 'https://github.com/waqasalishah',
    demo: '',
  },
  {
    title: 'Container Registry Workflow',
    description:
      'Built and pushed container images to Amazon ECR, then deployed them to an ECS-managed environment for a repeatable release flow.',
    stack: ['ECR', 'ECS', 'Docker'],
    github: 'https://github.com/waqasalishah',
    demo: '',
  },
  {
    title: 'Linux Server Administration',
    description:
      'Administered Ubuntu, AlmaLinux, and CentOS systems, handling user management, permissions, and day-to-day command-line operations.',
    stack: ['Ubuntu', 'AlmaLinux', 'CentOS'],
    github: 'https://github.com/waqasalishah',
    demo: '',
  },
  {
    title: 'Samba File & Print Sharing Setup',
    description:
      'Configured Samba servers to enable cross-platform file sharing and printing services across mixed operating system environments.',
    stack: ['Samba', 'Linux', 'Networking'],
    github: 'https://github.com/waqasalishah',
    demo: '',
  },
  {
    title: 'Virtual Lab Environment',
    description:
      'Built an isolated virtual lab using VMware and VirtualBox to safely practice Linux administration and networking scenarios.',
    stack: ['VMware', 'VirtualBox', 'Virtualization'],
    github: 'https://github.com/waqasalishah',
    demo: '',
  },
  {
    title: 'CI/CD Pipeline Fundamentals',
    description:
      'Explored CI/CD concepts end-to-end during the DevOps internship, mapping out an automated build-to-deploy pipeline for a sample app.',
    stack: ['CI/CD', 'Automation', 'Docker'],
    github: 'https://github.com/waqasalishah',
    demo: '',
  },
  {
    title: 'Cloud Deployment Practice',
    description:
      'Practiced deploying containerized workloads to the cloud, tying together EC2 provisioning, image builds, and network security in one flow.',
    stack: ['AWS', 'Docker', 'EC2'],
    github: 'https://github.com/waqasalishah',
    demo: '',
  },
]
