// ── Personal ─────────────────────────────────────────────────
export const PERSONAL = {
  name: 'Gautham Manuru Prabhu',
  shortName: 'Gautham M.P.',
  role: 'Software Engineer 2',
  company: 'Cisco Systems',
  team: 'AI Acceleration · Supply Chain',
  location: 'Bengaluru, India',
  email: 'gauthamprabhu9@gmail.com',
  github: 'https://github.com/GauthamPrabhuM',
  linkedin: 'https://www.linkedin.com/in/gautham-prabhu-5b2342192/',
  scholar: 'https://scholar.google.com/citations?user=GdnOL2wAAAAJ',
  resume: '/assets/GauthamManuruPrabhu_Resume_Apr2026.pdf',
  photo: '/assets/me.png',
}

// ── Hero stats ────────────────────────────────────────────────
export const STATS = [
  { value: '2×', label: 'promotions\nin 18 months' },
  { value: '6', label: 'peer-reviewed\npapers' },
  { value: '50+', label: 'citations\non Scholar' },
  { value: '5k', label: 'engineer-hours\nsaved / quarter' },
]

// ── Professional experience ───────────────────────────────────
export const WORK_EXPERIENCE = [
  {
    id: 1,
    title: 'Software Engineer 2, AI Acceleration',
    company: 'Cisco Systems Inc.',
    location: 'Bengaluru, India',
    period: 'Aug 2025 – Present',
    isCurrent: true,
    highlights: [
      'Ship agentic AI for case resolution and knowledge retrieval: 20% of cases resolved autonomously, case volume down 35%, MTTR down 40%.',
      'Systems save ~5,000 engineer-hours per quarter across global supply chain operations.',
      'Built failure-analysis and predictive-maintenance agents for the Quality Transformation Program.',
      'Own the LLM research-to-production pipeline end to end: retrieval quality, evaluation, guardrails.',
    ],
    stack: ['Python', 'FastAPI', 'LangChain', 'LangGraph', 'LangSmith', 'RAG', 'OpenShift', 'ArgoCD', 'Snowflake', 'Docker', 'Kubernetes'],
  },
  {
    id: 2,
    title: 'Software Engineer 1, Supply Chain Ops',
    company: 'Cisco Systems Inc.',
    location: 'Bengaluru, India',
    period: 'Aug 2024 – Aug 2025',
    isCurrent: false,
    highlights: [
      'Promoted to SE2 within 12 months.',
      'Re-architected legacy failure analysis into event-driven microservices on Kubernetes.',
      'Built ML anomaly detection over manufacturing telemetry, with SLA dashboards and alerting.',
      'Hardened the ingestion and serving layer the current agentic systems run on.',
    ],
    stack: ['FastAPI', 'Cassandra', 'Redis', 'Kubernetes', 'Prometheus', 'Grafana', 'Python'],
  },
  {
    id: 3,
    title: 'SE Intern, Supply Chain Organisation',
    company: 'Cisco Systems Inc.',
    location: 'Bengaluru, India',
    period: 'Jan 2024 – Aug 2024',
    isCurrent: false,
    highlights: [
      'Converted to full-time SE1 in 6 months.',
      'Cut deployment time 99.45% (6 hours → 2 minutes) with Jenkins, Docker, and Kubernetes CI/CD.',
      '2nd Runner-Up, Cisco Intern Case Study, for an NLP supplier-name standardisation across 50,000+ records.',
    ],
    stack: ['Python', 'Flask', 'Jenkins', 'Docker', 'Kubernetes', 'REST APIs', 'NLP'],
  },
]

// ── Research experience ───────────────────────────────────────
export const RESEARCH_EXPERIENCE = [
  {
    id: 1,
    title: 'Research Associate, MiCoSys Lab',
    institution: 'San Jose State University',
    location: 'Remote',
    period: '2025 – Present',
    advisor: 'Dr. Saptarishi Sengupta',
    isCurrent: true,
    highlights: [
      'Efficient training of Temporal Graph Neural Networks over dynamic graphs with millions of edges.',
      'Memory- and compute-optimised TGNN architectures that cut training time at scale.',
    ],
    stack: ['PyTorch Geometric', 'DGL', 'CUDA', 'Distributed Training'],
  },
  {
    id: 2,
    title: 'Deep Learning Research Intern, Medical Informatics Lab',
    institution: 'IIT Kharagpur',
    location: 'Remote',
    period: 'Jun 2023 – Aug 2023',
    advisor: 'Dr. Subhamoy Mandal, Ms. Pragya Gupta',
    isCurrent: false,
    highlights: [
      'Ensemble feature-fusion for anomaly detection in OCT retinal scans.',
      'Contributed to a 3,000+ image annotated dataset; presented at the IIT KGP Digital Health Symposium.',
    ],
    stack: ['PyTorch', 'OpenCV', 'scikit-learn'],
  },
  {
    id: 3,
    title: 'Undergraduate Researcher, Quantum Computing Group',
    institution: 'MIT Manipal',
    location: 'Manipal, India',
    period: 'Feb 2022 – Nov 2023',
    advisor: 'Dr. Vivekananda Bhat',
    isCurrent: false,
    highlights: [
      'Quantum ML models for cardiovascular disease detection at 97% accuracy, 10–14% above classical baselines.',
      'Funded by MeitY (Govt. of India) and AWS; published in IEEE Access (Q1).',
    ],
    stack: ['Qiskit', 'Python', 'Quantum ML'],
  },
  {
    id: 4,
    title: 'Undergraduate Researcher, Biometrics & Software Engineering',
    institution: 'MIT Manipal',
    location: 'Manipal, India',
    period: 'Jul 2022 – Oct 2023',
    advisor: 'Dr. Srikanth Prabhu, Mr. Govardhan Hegde',
    isCurrent: false,
    highlights: [
      'Deep learning pipelines for retinal vessel segmentation across 3,000+ fundus images.',
      'AES-256 secured biomedical imaging deployed with Kasturba Medical College.',
    ],
    stack: ['PyTorch', 'OpenCV', 'Cryptography'],
  },
]

// ── Projects ──────────────────────────────────────────────────
export interface Project {
  id: number
  num: string
  title: string
  tagline: string
  description: string
  impact: string
  stack: string[]
  github?: string
  live?: string
  paper?: string
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    num: '01',
    title: 'SplitSense',
    tagline: 'Analytics layer for Splitwise',
    description:
      'Full-stack platform adding the analytics Splitwise lacks: OAuth 2.0, real-time dashboards, balance forecasting, anomaly detection, and PDF reports.',
    impact: 'Live in production',
    stack: ['FastAPI', 'Next.js', 'TypeScript', 'PostgreSQL', 'OAuth 2.0'],
    github: 'https://github.com/GauthamPrabhuM/SplitSense',
    live: 'https://splitsense.onrender.com',
  },
  {
    id: 2,
    num: '02',
    title: 'QuCardio',
    tagline: 'Quantum ML for cardiology',
    description:
      'QSVC, Pegasos QSVC, and quanvolutional QNNs for cardiovascular disease detection from ECG data, hitting 97% accuracy, 10–14% above classical baselines.',
    impact: 'IEEE Access (Q1) · 50+ citations · MeitY + AWS funded',
    stack: ['Qiskit', 'Python', 'Quantum ML', 'scikit-learn'],
    github: 'https://github.com/GauthamPrabhuM/Quantum-Ecosystem-for-Efficient-Detection-of-Cardiovascular-Diseases',
    paper: 'https://ieeexplore.ieee.org/document/10335179',
  },
  {
    id: 3,
    num: '03',
    title: 'VIKAS',
    tagline: 'Multimodal disaster response',
    description:
      'Real-time platform connecting NDRF responders with disaster victims, using NLP triage, computer vision, and live geolocation. Led a team of six.',
    impact: 'Smart India Hackathon Grand Finalist · Springer CCIS',
    stack: ['React', 'Node.js', 'WebSocket', 'NLP', 'Computer Vision'],
    github: 'https://github.com/GauthamPrabhuM/SIH2K22',
    live: 'https://vikas-066f8f.webflow.io/',
  },
  {
    id: 4,
    num: '04',
    title: 'SatelTensor',
    tagline: 'Tensor methods for satellite data',
    description:
      'Tucker and CP tensor decomposition over satellite image stacks, for dimensionality reduction that preserves spatio-temporal structure.',
    impact: 'TCML Workshop, IISc Bengaluru 2023',
    stack: ['Python', 'NumPy', 'TensorLy'],
  },
]

// ── Skills ────────────────────────────────────────────────────
export const SKILLS = [
  {
    id: 1,
    category: 'AI / ML',
    icon: 'Brain',
    items: ['Agentic AI', 'LLMs', 'RAG', 'LangChain', 'LangGraph', 'LangSmith', 'PyTorch', 'PyTorch Geometric', 'DGL', 'Scikit-learn', 'TensorFlow', 'Qiskit', 'NLP', 'Computer Vision', 'GraphML'],
  },
  {
    id: 2,
    category: 'Languages',
    icon: 'Code',
    items: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    id: 3,
    category: 'Backend & APIs',
    icon: 'Server',
    items: ['FastAPI', 'Flask', 'Django', 'REST APIs', 'gRPC', 'Microservices', 'Celery'],
  },
  {
    id: 4,
    category: 'Data & Storage',
    icon: 'Database',
    items: ['PostgreSQL', 'Snowflake', 'MySQL', 'MongoDB', 'Cassandra', 'Redis', 'Hadoop', 'Spark'],
  },
  {
    id: 5,
    category: 'DevOps & Cloud',
    icon: 'Cloud',
    items: ['Docker', 'Kubernetes', 'OpenShift', 'ArgoCD', 'Jenkins', 'GitHub Actions', 'SplunkAI', 'AWS', 'Azure', 'Prometheus', 'Grafana'],
  },
]

// ── Publications ──────────────────────────────────────────────
export const PUBLICATIONS = [
  {
    id: 1,
    venue: 'IEEE Access (Q1)',
    venueType: 'Q1 Journal',
    title: 'QuCardio: Application of Quantum Machine Learning for Detection of Cardiovascular Diseases',
    authors: 'S. Prabhu, S. Gupta, G. M. Prabhu, A. V. Dhanuka, K. V. Bhat',
    ref: 'IEEE Access, vol. 11, pp. 136122–136135, 2023',
    citations: '50+',
    doi: '10.1109/ACCESS.2023.3338145',
    link: 'https://ieeexplore.ieee.org/document/10335179',
  },
  {
    id: 2,
    venue: 'Procedia Computer Science',
    venueType: 'Conference',
    title: 'Addressing Vaccine Misinformation on Social Media by Leveraging Transformers and User Association Dynamics',
    authors: 'Rao, C., Prabhu, G.M., Kumar, A.R., Gupta, S., Shetty, N.P.',
    ref: 'Procedia CS, vol. 235, pp. 1803–1813, 2024 (ICMLDE 2023)',
    citations: null,
    doi: '10.1016/j.procs.2024.04.171',
    link: 'https://www.sciencedirect.com/science/article/pii/S1877050924008470',
  },
  {
    id: 3,
    venue: 'Springer CCIS',
    venueType: 'Conference',
    title: 'VIKAS: A Multimodal Framework to Aid in Effective Disaster Management',
    authors: 'Prabhu, G.M., Gupta, T., Srujan, M.V., Soumya, A.R., Palorkar, A., Chowdhury, A.',
    ref: 'ATIS 2022, Springer CCIS, vol. 1804, 2023',
    citations: null,
    doi: '10.1007/978-981-99-2264-2_22',
    link: 'https://link.springer.com/chapter/10.1007/978-981-99-2264-2_22',
  },
  {
    id: 4,
    venue: 'Springer CCIS',
    venueType: 'Conference',
    title: 'EyeEncrypt: A Cyber-Secured Framework for Retinal Image Segmentation',
    authors: 'Hegde, G., Gupta, S., Prabhu, G.M., Bhandary, S.V.',
    ref: 'ATIS 2022, Springer CCIS, vol. 1804, 2023',
    citations: null,
    doi: '10.1007/978-981-99-2264-2_9',
    link: 'https://link.springer.com/chapter/10.1007/978-981-99-2264-2_9',
  },
  {
    id: 5,
    venue: 'IOP J. Physics: Conference Series',
    venueType: 'Peer-Reviewed',
    title: 'A Systematic Review of Deep Learning Approaches for Vessel Segmentation in Retinal Fundus Images',
    authors: 'Hegde, G., Prabhu, S., Gupta, S., Prabhu, G.M., et al.',
    ref: 'IOP J. Physics: Conf. Ser., vol. 2571, pp. 012021, 2023',
    citations: null,
    doi: '10.1088/1742-6596/2571/1/012021',
    link: 'https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012021',
  },
  {
    id: 6,
    venue: 'TCML Workshop, IISc',
    venueType: 'Workshop',
    title: 'SatelTensor: Satellite Data Exploration via Tensor Decomposition',
    authors: 'Prabhu, G.M., Gupta, S.',
    ref: 'Tensor Computation & ML Workshop, IISc Bengaluru, 2023',
    citations: null,
    doi: null,
    link: null,
  },
]

// ── Achievements ──────────────────────────────────────────────
export const ACHIEVEMENTS = [
  {
    category: 'Awards & Recognition',
    items: [
      { title: '2nd Runner-Up, Cisco Intern Case Study Competition', detail: 'NLP-based Supplier Name Standardisation pipeline across 50,000+ records. 100+ entries.', year: '2024' },
      { title: 'Thayil Lonappan George Memorial Endowment Award', detail: '3rd rank in All India Senior School Certificate Examination (AISSCE) 2020.', year: '2020' },
      { title: 'Mr. G. Chenthamarakshan Endowment Award', detail: 'Best Project in Computer Science.', year: '2020' },
      { title: 'NTSE State Scholar', detail: 'National Talent Search Examination. Rank 21 out of 151,000+ participants.', year: '2018' },
    ],
  },
  {
    category: 'Hackathons & Competitions',
    items: [
      { title: 'Grand Finalist, Global Quantum Science & Technology Hackathon', detail: 'Top 16 teams from 1,600+ entries across 25+ countries, in the quantum ML track.', year: '2022' },
      { title: 'Grand Finalist, Smart India Hackathon', detail: 'Led a team of 6 to build VIKAS, a multimodal disaster-response platform. Top team from 1,000+ national entries.', year: '2022' },
    ],
  },
  {
    category: 'Leadership',
    items: [
      { title: 'Co-founder & Technical Head, Project Kalpana', detail: 'Secured $13,000 grant; led 8-person team building an affordable radio-astronomy platform for undergraduates.', year: '2022–23' },
      { title: 'General Secretary & Treasurer, ACM Student Chapter, Manipal', detail: 'Organised 12+ workshops and hackathons; grew chapter participation by 35%.', year: '2022–23' },
      { title: 'Technical Head, Astronomy Club of Manipal', detail: 'Led 5+ technical projects; ran outreach sessions reaching 200+ students.', year: '2021–23' },
    ],
  },
  {
    category: 'Schools & Programmes',
    items: [
      { title: 'ACM Winter School on Optimization for ML & OR', detail: 'Selected participant at IIT Goa.', year: '2023' },
      { title: 'Summer School on Dynamic Resource Allocation', detail: 'Center for Networked Intelligence, IISc Bengaluru.', year: '2023' },
      { title: 'Digital Health Symposium', detail: 'Selected presentation at IIT Kharagpur.', year: '2023' },
    ],
  },
]

// ── Education ──────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    school: 'Manipal Institute of Technology',
    location: 'Manipal, Karnataka',
    period: '2020 – 2024',
    grade: '8.91 / 10',
    gradeLabel: 'CGPA',
    note: 'Minor in Big Data Analytics · Top 15% of cohort',
  },
  {
    degree: 'High School (AISSCE)',
    school: 'Little Rock Indian School',
    location: 'Brahmavar, Karnataka',
    period: '2008 – 2020',
    grade: '95.60%',
    gradeLabel: 'Score',
    note: '3rd rank, with two endowment awards · NTSE State Scholar',
  },
]
