export const profile = {
  name: 'Sumair Soomro',
  title: 'Software Engineer',
  email: 'sumairsoomro@umass.edu',
  linkedin: 'https://www.linkedin.com/in/sumair-soomro',
  github: 'https://github.com/SumairSoomro',
  bio: 'Passionate about building products that create real-world impact, with a particular interest in distributed systems and AI/ML.',
};

export const education = {
  institution: 'University of Massachusetts Amherst',
  degree: 'Bachelor of Science in Computer Science',
  graduation: '2025',
  coursework: [
    'Data Structures & Algorithms',
    'Programming Methodology',
    'Scalable Web Systems',
    'Software Engineering',
    'Algorithms',
    'Operating Systems',
    'Artificial Intelligence',
    'Search Engines',
    'Applications of Databases',
  ],
};

export const research = {
  lab: 'Center for Research in Computer Vision',
  institution: 'University of Central Florida',
  role: 'Research Intern',
  period: 'Nov 2025 – Jan 2026',
  location: 'Remote / Orlando',
  description:
    'Developed a multi-modal benchmark dataset for responsible AI.',
  conference: 'IJCNN 2026',
};

export const techStack = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Swift / SwiftUI', 'HTML / CSS'],
  frameworks: ['Spring Boot', 'React', 'Next.js', 'Node.js', 'Express.js', 'Django', 'FastAPI'],
  databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'NoSQL', 'Pinecone'],
  tools: ['Figma', 'Docker', 'AWS', 'Git', 'Postman', 'Jira', 'Linux', 'Kubernetes'],
};

export const projects: {
  id: string;
  title: string;
  description: string;
  github: string | null;
  live: string | null;
}[] = [
  {
    id: '01',
    title: 'Legal Probe',
    description:
      'An advanced AI-powered legal document analysis system designed to help law students and legal professionals efficiently analyze legal documents through intelligent Q&A interactions. Leverages RAG technology with adaptive chunking to provide precise answers with document citations.',
    github: 'https://github.com/SumairSoomro/LAW_RAG',
    live: null,
  },
  {
    id: '02',
    title: 'SpecLens: AI-Powered API Documentation Assistant',
    description:
      'Building an AI assistant for API documentation using NLP and embeddings with a React + TypeScript frontend and Node.js/Supabase backend. Will be deployed on an AWS EC2 instance.',
    github: null,
    live: null,
  },
  {
    id: '03',
    title: 'Outreach Bot',
    description:
      'A dynamic application designed to facilitate connections with large groups of people tailored by specific criteria. Ideal for recruiting employees, connecting with alumni, job searching, or engaging with potential contacts for professional needs.',
    github: 'https://github.com/cyrilbouharb/Outreach-Bot',
    live: null,
  },
  {
    id: '04',
    title: 'Prayer Lock: App Blocker',
    description:
      'Collaborated on the development of a specialized iOS productivity tool, implementing features to reduce digital distractions and foster spiritual discipline during prayer and meditation.',
    github: null,
    live: null,
  },
  {
    id: '05',
    title: 'Rate My University',
    description:
      'A comprehensive web application designed to help students review and rate universities based on various criteria.',
    github: 'https://github.com/SumairSoomro/RateMyUniversity',
    live: null,
  },
];

export const experience = [
  {
    role: 'Software Engineer Intern',
    company: 'LawBandit',
    type: 'Internship',
    period: 'Sep 2025 – Jan 2026',
    location: 'Orlando, FL · Remote',
    description:
      'Developed a Retrieval-Augmented Generation (RAG) system tailored for law students, enabling high-accuracy, context-aware responses to complex legal queries by indexing specific case law and course materials.',
  },
  {
    role: 'Resident Assistant',
    company: 'University of Massachusetts Amherst',
    type: 'Part-time',
    period: 'Aug 2023 – May 2025',
    location: 'Amherst, MA · On-site',
    description:
      'Supported 700 residents by building an inclusive community, mediating conflicts, and coordinating events while strengthening leadership and communication skills.',
  },
  {
    role: 'Undergraduate Course Assistant, CICS110',
    company: 'Manning CICS, UMass Amherst',
    type: 'Part-time',
    period: 'Sep 2024 – Dec 2024',
    location: 'Amherst, MA · On-site',
    description:
      'Held weekly office hours for 350+ students, graded exams and homework, and simplified complex Python concepts to strengthen problem-solving skills.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Visionet Systems Inc.',
    type: 'Internship',
    period: 'May 2024 – Aug 2024',
    location: 'Cedar Brook, NJ · Hybrid',
    description:
      'Redesigned Canada Goose\'s website using primarily TypeScript, improving mobile traffic by 22%, reducing server response time by 40% with Node.js and Express, and increasing order accuracy by 18% through MongoDB integration.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Paysys Labs',
    type: 'Internship',
    period: 'Dec 2023 – Jan 2024',
    location: 'On-site',
    description:
      'Built and optimized Spring Boot backend services for core payment infrastructure, integrating RESTful APIs, Dockerized deployments, and MySQL query improvements to ensure secure, reliable transactions and boost backend performance by 12%.',
  },
];

export const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    org: 'Amazon Web Services',
    url: 'https://www.credly.com/badges/62b2d545-56d2-4bd4-9cef-f661e31fcfec/public_url',
  },
];
