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
  scholar: 'https://scholar.google.com/citations?user=eFGVT2UAAAAJ&hl=en',
  resume: '/assets/GauthamManuruPrabhu_Resume_Apr2026.pdf',
  photo: '/assets/me.png',
}

export const NAV_ITEMS = [
  { id: 'experience', label: 'Experience' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'education', label: 'Education' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]

// ── Hero ──────────────────────────────────────────────────────
export const HERO = {
  columns: [
    "I work on Cisco's AI Acceleration team, in Supply Chain Operations. I led an agentic suite that root-causes 70% of previously undiagnosed hardware test failures and now runs in factories worldwide. I joined as an intern in January 2024 and was promoted twice in 18 months.",
    'At MiCoSys Lab, San José State University, I work with Dr. Saptarshi Sengupta on when LLM text features help temporal link prediction. I am first author on our poster at the Stanford Graph Learning Workshop 2026. Six of my papers are peer reviewed.',
  ],
}

export const STATS = [
  { value: '2×', label: 'Promotions in 18 months' },
  { value: '6', label: 'Papers, peer reviewed' },
  { value: '60+', label: 'Citations on Google Scholar' },
]

// ── Professional experience ───────────────────────────────────
export const WORK_EXPERIENCE = [
  {
    id: 1,
    title: 'Software Engineer 2, AI Acceleration',
    company: 'Cisco Systems Inc.',
    location: 'Bengaluru, India',
    from: 'Aug 2025 –',
    to: 'Present',
    isCurrent: true,
    highlights: [
      'When a hardware test fails, someone has to work out whether the script, the environment or the product is at fault, usually with no past data to go on. I led an agentic suite that does this with MCP tool calls over troubleshooting knowledge and engineering tools. It root-causes 70% of previously undiagnosed failures and runs in factories worldwide.',
      "I contributed to a support-queue agent that closes 30% of routine requests (MAC address allocation, access issues, expired certificates) on its own. Case volume is down 35% and mean time to resolution down 40%. The two systems save an estimated $450,000 a year, and I presented them to Cisco's Chief Supply Chain Officer.",
      'Found coverage gaps in Paladin edge connectors across 10 production lines, and added SplunkAI observability to legacy systems that had none.',
    ],
    stack: ['Python', 'FastAPI', 'Agentic AI', 'LLMs', 'RAG', 'LangChain', 'LangGraph', 'LangSmith', 'SplunkAI', 'Docker', 'Kubernetes', 'OpenShift', 'ArgoCD', 'PostgreSQL', 'Snowflake'],
  },
  {
    id: 2,
    title: 'Software Engineer 1, Supply Chain Operations',
    company: 'Cisco Systems Inc.',
    location: 'Bengaluru, India',
    from: 'Aug 2024 –',
    to: 'Aug 2025',
    isCurrent: false,
    highlights: [
      'Moved legacy failure-analysis workflows to event-driven microservices on Kubernetes (FastAPI, Cassandra, Redis), added anomaly detection over manufacturing telemetry, and built SLA dashboards in Prometheus and Grafana.',
      'Promoted to SE2 in 12 months.',
    ],
    stack: ['FastAPI', 'Cassandra', 'Redis', 'Kubernetes', 'Prometheus', 'Grafana', 'Python', 'Microservices'],
  },
  {
    id: 3,
    title: 'Software Engineering Intern, Supply Chain',
    company: 'Cisco Systems Inc.',
    location: 'Bengaluru, India',
    from: 'Jan 2024 –',
    to: 'Aug 2024',
    isCurrent: false,
    highlights: [
      'Rebuilt a hand-deployed Python 2 manufacturing service as containerized code on Jenkins, Docker and Kubernetes. Deploys went from about six hours to four minutes. Converted to SE1 in six months.',
      "Built an NLP pipeline that standardised supplier names across 50,000 records for Cisco's intern case study competition. Second runner-up of 100+ entries.",
    ],
    stack: ['Python', 'Flask', 'Jenkins', 'Docker', 'Kubernetes', 'REST', 'OpenAPI', 'NLP'],
  },
]

// ── Research experience ─────────────────────────────────────
// `badge` shows under the dates, like "Current" on work entries.
export const RESEARCH_EXPERIENCE: {
  id: number
  title: string
  institution: string
  location: string
  period: string
  advisor: string
  summary: string
  badge?: string
}[] = [
  {
    id: 1,
    title: 'Research Associate, MiCoSys Lab',
    institution: 'San José State University',
    location: 'Remote',
    period: '2025 – Present',
    advisor: 'Advisor: Dr. Saptarshi Sengupta',
    badge: 'First author',
    summary:
      'First-author poster at the Stanford Graph Learning Workshop 2026 (Nov 3). Recent methods report large gains from adding LLM summaries to temporal graph networks. We reproduced one, CROSS (NeurIPS 2025), then ranked it against 100 sampled negatives instead of in-batch ones. Most of its lead over a text-aware baseline disappeared. Text still helped on new nodes, and a text encoder 15 times larger lowered accuracy. Full paper in preparation.',
  },
  {
    id: 2,
    title: 'Deep Learning Research Intern, Medical Informatics Lab',
    institution: 'Indian Institute of Technology, Kharagpur',
    location: 'Remote',
    period: 'Jun – Aug 2023',
    advisor: 'Advisors: Dr. Subhamoy Mandal, Ms. Pragya Gupta',
    summary:
      'Retinal scans for macular degeneration came in at mixed resolutions, and many patients were missing a modality. I encoded each modality separately before fusing features, and gave the model each scan in several colour spaces. Presented at the Digital Health Symposium, IIT Kharagpur.',
  },
  {
    id: 3,
    title: 'Undergraduate Researcher, Cybersecurity & Quantum Computing',
    institution: 'Manipal Institute of Technology',
    location: 'Manipal, India',
    period: 'Feb 2022 – Nov 2023',
    advisor: 'Mentor: Dr. Vivekananda Bhat',
    summary:
      'Quantum models against classical baselines for detecting heart disease from ECG images. QSVC, Pegasos QSVC and a quanvolutional neural network reached 97% accuracy, 10 to 14 points above the classical models. Funded by MeitY and AWS, and top 16 of 1,600 teams at the QETCI hackathon.',
  },
  {
    id: 4,
    title: 'Research Assistant, Biometrics & Software Engineering',
    institution: 'Manipal Institute of Technology',
    location: 'Manipal, India',
    period: 'Jul 2022 – Oct 2023',
    advisor: 'Mentors: Dr. Srikanth Prabhu, Mr. Govardhan Hegde',
    summary:
      "Retinal vessel segmentation on 3,000 fundus images with CLAHE, Gaussian blur and edge detection. The images left Kasturba Medical College's network, so the pipeline encrypts them with Diffie–Hellman and AES-256. Published in Springer CCIS.",
  },
  {
    id: 5,
    title: 'Undergraduate Researcher, NLP & Social Graph Analysis',
    institution: 'Manipal Institute of Technology',
    location: 'Manipal, India',
    period: 'Sep 2022 – Jul 2023',
    advisor: 'Mentor: Dr. Nisha P. Shetty',
    summary:
      'Vaccine misinformation detection with BERT and XLNet over 10,000 posts, plus a graph of who repeats whom. Over 90% F1. Published in Procedia Computer Science.',
  },
]

// ── Publications ──────────────────────────────────────────────
export const PUBLICATIONS = [
  {
    id: 0,
    num: '01',
    mark: 'Poster · Stanford',
    quiet: null,
    citations: null,
    title:
      'On Link Prediction Using Node-Pair LLM Semantics and Structure in Temporal Text-Attributed Graphs',
    authorsBefore: '',
    authorsAfter: ', S. Gupta, A. Nagarajan, M. Choudhary, K. Potika, S. Sengupta',
    venue: 'Stanford Graph Learning Workshop 2026',
    ref: ', Stanford University, Nov 2026 · Poster, first author',
    doi: null,
    link: null,
  },
  {
    id: 1,
    num: '02',
    mark: 'Q1 · IEEE Access',
    quiet: null,
    citations: '60+ citations',
    title:
      'QuCardio: Application of Quantum Machine Learning for Detection of Cardiovascular Diseases',
    authorsBefore: 'S. Prabhu, S. Gupta, ',
    authorsAfter: ', A. V. Dhanuka, K. V. Bhat',
    venue: 'IEEE Access',
    ref: ', vol. 11, pp. 136122–136135, 2023',
    doi: '10.1109/ACCESS.2023.3338145',
    link: 'https://ieeexplore.ieee.org/document/10335179',
  },
  {
    id: 2,
    num: '03',
    mark: null,
    quiet: 'Journal · Elsevier',
    citations: null,
    title:
      'Addressing Vaccine Misinformation on Social Media by Leveraging Transformers and User Association Dynamics',
    authorsBefore: 'C. Rao, ',
    authorsAfter: ', A. R. Kumar, S. Gupta, N. P. Shetty',
    venue: 'Procedia Computer Science',
    ref: ' (ICMLDE 2023), vol. 235, pp. 1803–1813, 2024',
    doi: '10.1016/j.procs.2024.04.171',
    link: 'https://www.sciencedirect.com/science/article/pii/S1877050924008470',
  },
  {
    id: 3,
    num: '04',
    mark: null,
    quiet: 'Springer CCIS',
    citations: null,
    title: 'VIKAS: A Multimodal Framework to Aid in Effective Disaster Management',
    authorsBefore: '',
    authorsAfter: ', T. Gupta, M. V. Srujan, A. R. Soumya, A. Palorkar, A. Chowdhury',
    venue: 'ATIS 2022',
    ref: ', Springer CCIS, vol. 1804, 2023',
    doi: '10.1007/978-981-99-2264-2_22',
    link: 'https://link.springer.com/chapter/10.1007/978-981-99-2264-2_22',
  },
  {
    id: 4,
    num: '05',
    mark: null,
    quiet: 'Springer CCIS',
    citations: null,
    title: 'EyeEncrypt: A Cyber-Secured Framework for Retinal Image Segmentation',
    authorsBefore: 'G. Hegde, S. Gupta, ',
    authorsAfter: ', S. V. Bhandary',
    venue: 'ATIS 2022',
    ref: ', Springer CCIS, vol. 1804, 2023',
    doi: '10.1007/978-981-99-2264-2_9',
    link: 'https://link.springer.com/chapter/10.1007/978-981-99-2264-2_9',
  },
  {
    id: 5,
    num: '06',
    mark: null,
    quiet: 'IOP Journal',
    citations: null,
    title:
      'A Systematic Review of Deep Learning Approaches for Vessel Segmentation in Retinal Fundus Images',
    authorsBefore: 'G. Hegde, S. Prabhu, S. Gupta, ',
    authorsAfter: ', A. Palorkar, M. V. Srujan, S. V. Bhandary',
    venue: 'Journal of Physics: Conference Series',
    ref: ', vol. 2571, p. 012021, 2023',
    doi: '10.1088/1742-6596/2571/1/012021',
    link: 'https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012021',
  },
  {
    id: 6,
    num: '07',
    mark: null,
    quiet: 'Workshop · IISc',
    citations: null,
    title: 'SatelTensor: Satellite Data Exploration via Tensor Decomposition',
    authorsBefore: '',
    authorsAfter: ', S. Gupta',
    venue: 'TCML Workshop',
    ref: ', Indian Institute of Science, Bengaluru, 2023',
    doi: null,
    link: null,
  },
]

// ── Education ─────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: 'B.Tech, Computer Science & Engineering',
    school: 'Manipal Institute of Technology',
    location: 'Manipal, Karnataka',
    period: '2020 – 2024',
    grade: '8.91',
    gradeLabel: 'CGPA / 10',
    note: 'Minor in Big Data Analytics',
    summary:
      'Top 15% of the cohort. Coursework in AI, quantum computing, deep learning, algorithms and distributed systems. Most of my publications came out of three research labs here.',
  },
  {
    degree: 'All India Senior School Certificate',
    school: 'Little Rock Indian School',
    location: 'Brahmavar, Karnataka',
    period: '2008 – 2020',
    grade: '95.6%',
    gradeLabel: 'Aggregate',
    note: 'Physics, Chemistry, Mathematics & Computer Science',
    summary:
      'Third rank nationally in AISSCE 2020 (Thayil Lonappan George Memorial Endowment Award), and the G. Chenthamarakshan Award for the best computer science project. NTSE state scholar, rank 21 of 151,000.',
  },
]

// ── Stack ─────────────────────────────────────────────────────
const L = (name: string, file: string) => ({ name, src: '/assets/logos/' + file })

export const SKILLS = [
  {
    id: 1,
    category: 'Machine Learning',
    logos: [L('PyTorch', 'pytorch.png'), L('scikit-learn', 'scikit.png'), L('NumPy', 'numpy.png'), L('pandas', 'pandas.png')],
    items: ['Agentic AI', 'LLMs', 'RAG', 'LangChain', 'LangGraph', 'LangSmith', 'PyTorch', 'PyTorch Geometric', 'DGL', 'TensorFlow', 'Keras', 'scikit-learn', 'Qiskit', 'GraphML', 'NLP', 'Computer Vision'],
  },
  {
    id: 2,
    category: 'Languages',
    logos: [L('Python', 'python.png'), L('C++', 'cpp.png'), L('Java', 'java.png'), L('JavaScript', 'js.png'), L('TypeScript', 'typescript.png')],
    items: ['Python', 'C++', 'C', 'Java', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    id: 3,
    category: 'Services & APIs',
    logos: [L('FastAPI', 'fastapi.png'), L('Django', 'django.png'), L('React', 'react.png'), L('Next.js', 'next.png')],
    items: ['FastAPI', 'Flask', 'Django', 'REST', 'gRPC', 'OpenAPI', 'Event-driven microservices', 'React', 'Next.js'],
  },
  {
    id: 4,
    category: 'Data Stores',
    logos: [L('PostgreSQL', 'postgres.png'), L('MongoDB', 'mongodb.png'), L('MySQL', 'mysql.png')],
    items: ['PostgreSQL', 'Snowflake', 'Cassandra', 'Redis', 'MongoDB', 'MySQL', 'Spark', 'Hadoop', 'Celery'],
  },
  {
    id: 5,
    category: 'Infrastructure',
    logos: [L('Docker', 'docker.png'), L('Amazon Web Services', 'aws.png'), L('Git', 'git.png'), L('MATLAB', 'matlab.png')],
    items: ['Docker', 'Kubernetes', 'OpenShift', 'ArgoCD', 'Jenkins', 'GitHub Actions', 'SplunkAI', 'Prometheus', 'Grafana', 'AWS', 'Azure', 'CUDA'],
  },
]

// ── Contact ───────────────────────────────────────────────────
export const CONTACT = {
  lede:
    'Email reaches me fastest. If it is about one of the papers, tell me which one and I will send the code.',
}

export const CHANNELS = [
  { label: 'Email', value: PERSONAL.email, href: 'mailto:' + PERSONAL.email, external: false, download: false },
  { label: 'LinkedIn', value: 'gautham-prabhu-5b2342192', href: PERSONAL.linkedin, external: true, download: false },
  { label: 'Google Scholar', value: 'Publication record', href: PERSONAL.scholar, external: true, download: false },
  { label: 'GitHub', value: '@GauthamPrabhuM', href: PERSONAL.github, external: true, download: false },
  { label: 'Résumé', value: 'PDF, April 2026', href: PERSONAL.resume, external: false, download: true },
]
