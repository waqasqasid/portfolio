export const PROFILE = {
  name: 'Waqas Ali Shah',
  role: 'DevOps Engineer',
  roles: ['DevOps Engineer', 'Cloud Engineer'],
  location: 'Karachi, Pakistan',
  email: 'waqasqasid@gmail.com',
  phone: '+923042620412',
  phoneDisplay: '+92 304 2620412',
  github: 'https://github.com/waqasqasid',
  linkedin: 'https://www.linkedin.com/in/waqasqasid/',
  summary:
    "DevOps Engineer with hands-on experience in cloud infrastructure, CI/CD pipelines, automation, system monitoring, and troubleshooting. Skilled in streamlining deployment processes, improving system reliability, and implementing efficient DevOps practices. Passionate about building scalable, automated, and reliable infrastructure while continuously improving cloud and DevOps solutions.",
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
  { label: 'Months as System Administrator', value: 6, suffix: '+' },
]

export const SKILL_GROUPS = [
  {
    category: 'Linux',
    icon: 'Terminal',
    skills: ['User Management', 'Group Management','File Management','Server Monitering & Management','Disk Management', 'FTP',  'Samba Servers' , 'Apache'],
  },
  {
    category: 'Docker',
    icon: 'Container',
    skills: ['Containerization', 'Dockerfile Creation','Container Management', 'Image Management'],
  },
  {
    category: 'AWS',
    icon: 'Cloud',
    skills: ['EC2', 'ECS', 'ECR','EBS' , 'VPC','ELB' ,'S3','Auto Scaling', 'Security Groups', 'NACLs'],
  },
  {
    category: 'Virtualization',
    icon: 'Layers',
    skills: ['VMware', 'VirtualBox', 'Virtual Machine Provisioning'],
  },
  {
    category: 'Networking',
    icon: 'Network',
    skills: ['Network Access Control Lists', 'subnet', 'Security Groups', 'File & Print Sharing (Samba)' ,'OSI Model'],
  },
  {
    category: 'CI/CD & Automation',
    icon: 'Workflow',
    skills: ['CI/CD Pipeline', 'Deployment Automation', 'Github Action'],
  },
]

export const EXPERIENCE = [
  {
    role: 'DevOps Engineer',
    company: 'SNJ Global',
    period: '2026 – Present',
    points: [
      'Working as a DevOps Engineer, supporting development, deployment, and infrastructure operations.',
      'Managing and maintaining CI/CD workflows to streamline application build, testing, and deployment processes.',
      'Working with Linux environments for server management, configuration, and troubleshooting.',
      'Using Git and GitHub for source control and collaborative development workflows.',
      'Working with Docker to containerize applications and maintain consistent deployment environments.',
      'Assisting with cloud infrastructure, deployment automation, monitoring, and system maintenance.',
      'Troubleshooting deployment, configuration, and environment-related issues in collaboration with development teams.',
      'Creating scripts and automations to reduce repetitive operational tasks and improve workflow efficiency.',
      'Automated routine operational tasks using Bash/Python to improve efficiency and reduce manual intervention.',
      'Managed Git repositories, branching strategies, code integration, and deployment workflows across development environments.',
      'Applied security best practices including IAM, access control, secrets management, and secure infrastructure configurations.',
    ],
  },
  {
    role: 'System Administrator',
    company: 'Al-Nafi International College',
    period: 'System Administration',
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
    period: '6 Years',
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
    github: PROFILE.github,
    demo: '',
  },
  {
    title: 'AWS EC2 Lab Infrastructure',
    description:
      'Provisioned and configured EC2 instances on AWS, including security group rules and NACLs to control inbound/outbound traffic.',
    stack: ['AWS EC2', 'Security Groups', 'NACLs'],
    github: PROFILE.github,
    demo: '',
  },
  {
    title: 'Container Registry Workflow',
    description:
      'Built and pushed container images to Amazon ECR, then deployed them to an ECS-managed environment for a repeatable release flow.',
    stack: ['ECR', 'ECS', 'Docker'],
    github: PROFILE.github,
    demo: '',
  },
  {
    title: 'Linux Server Administration',
    description:
      'Administered Ubuntu, AlmaLinux, and CentOS systems, handling user management, permissions, and day-to-day command-line operations.',
    stack: ['Ubuntu', 'AlmaLinux', 'CentOS'],
    github: PROFILE.github,
    demo: '',
  },
  {
    title: 'Samba File & Print Sharing Setup',
    description:
      'Configured Samba servers to enable cross-platform file sharing and printing services across mixed operating system environments.',
    stack: ['Samba', 'Linux', 'Networking'],
    github: PROFILE.github,
    demo: '',
  },
  {
    title: 'Virtual Lab Environment',
    description:
      'Built an isolated virtual lab using VMware and VirtualBox to safely practice Linux administration and networking scenarios.',
    stack: ['VMware', 'VirtualBox', 'Virtualization'],
    github: PROFILE.github,
    demo: '',
  },
  {
    title: 'CI/CD Pipeline Fundamentals',
    description:
      'Explored CI/CD concepts end-to-end while working as a System Administrator, mapping out an automated build-to-deploy pipeline for a sample app.',
    stack: ['CI/CD', 'Automation', 'Docker'],
    github: PROFILE.github,
    demo: '',
  },
  {
    title: 'Cloud Deployment Practice',
    description:
      'Practiced deploying containerized workloads to the cloud, tying together EC2 provisioning, image builds, and network security in one flow.',
    stack: ['AWS', 'Docker', 'EC2'],
    github: PROFILE.github,
    demo: '',
  },
]
