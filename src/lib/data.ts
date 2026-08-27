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
  standfirst:
    'Agentic AI in production at Cisco. Temporal graph learning in the lab at San José State.',
  columns: [
    "I work on Cisco's AI Acceleration team, inside Supply Chain Operations. I own retrieval quality, evaluation and guardrails for LLM-backed agents that now close 35% of incoming support cases with no human in the loop, and brought mean time to resolution down by 40%. I joined as an intern in January 2024 and was promoted twice in the 18 months that followed.",
    'I work with Dr. Saptarishi Sengupta at MiCoSys Lab, San José State University, on training Temporal Graph Neural Networks over dynamic graphs under a fixed memory and compute budget. Six of my papers are peer reviewed, across quantum machine learning, retinal imaging and NLP.',
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
      'Four agents run in production today: service-request resolution, knowledge-base indexing, case follow-up, and proactive alerting. Between them they close 35% of incoming cases with no human in the loop, took 40% off mean time to resolution, and return roughly 10,000 engineer-hours a quarter to the supply chain organisation.',
      'Under the Quality Transformation Program I built failure-analysis and predictive-maintenance agents for the manufacturing side. They root-caused 70% of failures that previously went undiagnosed, improved upstream defect detection and brought down repeat failure rates across global sites.',
      'I also found coverage gaps in Paladin edge connectors across 10 production lines, and wired SplunkAI observability into legacy systems that had none. I now own the research-to-production path for these agents end to end: retrieval quality, evaluation, guardrails.',
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
      'Promoted from SE1 to SE2 in 12 months, the second promotion on the same team inside 18.',
      'The year was a rewrite. Legacy failure-analysis workflows became event-driven microservices on Kubernetes, built with FastAPI, Cassandra and Redis. I added anomaly detection over manufacturing telemetry, and SLA dashboards in Prometheus and Grafana so that an on-call engineer saw a breach before the customer did.',
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
      'I converted from intern to SE1 in six months. I built microservices with circuit breakers and retry logic, and a release pipeline automated with Jenkins, Docker and Kubernetes that took deployments from six hours to two minutes.',
      "For Cisco's intern case study competition I built an NLP pipeline that standardised supplier names across 50,000 records, and it placed third of more than 100 entries.",
    ],
    stack: ['Python', 'Flask', 'Jenkins', 'Docker', 'Kubernetes', 'REST', 'OpenAPI', 'NLP'],
  },
]

// ── Research experience ─────────────────────────────────────
export const RESEARCH_EXPERIENCE = [
  {
    id: 1,
    title: 'Research Associate, MiCoSys Lab',
    institution: 'San José State University',
    location: 'Remote',
    period: '2025 – Present',
    advisor: 'Advisor: Dr. Saptarishi Sengupta',
    summary:
      'The problem is adaptation: models are trained once on a snapshot, and real graphs keep moving. I work on training Temporal Graph Neural Networks over dynamic graphs with millions of edges, under a fixed memory and compute budget, using PyTorch Geometric, DGL and CUDA across several GPUs.',
  },
  {
    id: 2,
    title: 'Deep Learning Research Intern, Medical Informatics Lab',
    institution: 'Indian Institute of Technology, Kharagpur',
    location: 'Remote',
    period: 'Jun – Aug 2023',
    advisor: 'Advisors: Dr. Subhamoy Mandal, Ms. Pragya Gupta',
    summary:
      'Optical coherence tomography scans are noisy and the classes are badly unbalanced. I proposed an ensemble feature-fusion approach for anomaly detection, tuning preprocessing, augmentation and colour-space features against a multi-class benchmark, and contributed to a set of 3,000 annotated retinal scans.',
  },
  {
    id: 3,
    title: 'Undergraduate Researcher, Cybersecurity & Quantum Computing',
    institution: 'Manipal Institute of Technology',
    location: 'Manipal, India',
    period: 'Feb 2022 – Nov 2023',
    advisor: 'Mentor: Dr. Vivekananda Bhat',
    summary:
      'We tested whether quantum models could beat classical baselines at detecting cardiovascular disease from ECG images. QSVC, Pegasos QSVC and a quanvolutional neural network reached 97% accuracy, 10 to 14 points above the classical baselines we trained ourselves. The work was funded by a MeitY and AWS grant, and took us to the top 16 of 1,600 teams at the QETCI hackathon.',
  },
  {
    id: 4,
    title: 'Research Assistant, Biometrics & Software Engineering',
    institution: 'Manipal Institute of Technology',
    location: 'Manipal, India',
    period: 'Jul 2022 – Oct 2023',
    advisor: 'Mentors: Dr. Srikanth Prabhu, Mr. Govardhan Hegde',
    summary:
      "Retinal vessel segmentation across 3,000 fundus images, combining CLAHE, Gaussian blur and edge detection. Because the images left Kasturba Medical College's network, we also had to encrypt them properly, so the pipeline carries Diffie–Hellman key exchange and AES-256. Published in Springer LNCS and presented at ATIS.",
  },
  {
    id: 5,
    title: 'Undergraduate Researcher, NLP & Social Graph Analysis',
    institution: 'Manipal Institute of Technology',
    location: 'Manipal, India',
    period: 'Sep 2022 – Jul 2023',
    advisor: 'Mentor: Dr. Nisha P. Shetty',
    summary:
      'We modelled how vaccine misinformation travels, running BERT and XLNet over a corpus of 10,000 posts alongside a graph model of who repeats whom. Classification passed 90% F1 on the benchmark. The user-association signal did more work than the language model did.',
  },
]

// ── Publications ──────────────────────────────────────────────
export const PUBLICATIONS = [
  {
    id: 1,
    num: '01',
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
    num: '02',
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
    num: '03',
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
    num: '04',
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
    num: '05',
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
    num: '06',
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
      'I graduated in the top 15% of the cohort, with coursework in artificial intelligence, quantum computing, deep learning, algorithms and distributed systems. I spent most of the four years inside three research labs, which is where the publications came from and where I learned to read a paper properly.',
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
      'Third rank nationally in the AISSCE 2020 examinations, which carried the Thayil Lonappan George Memorial Endowment Award, and the G. Chenthamarakshan Award for the best computer science project. NTSE state scholar, ranked 21 of 151,000 candidates.',
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
    'I am open to collaborations on agentic AI, graph machine learning and applied ML. Email reaches me fastest. If you are writing about one of the papers, say which one and I will send the code.',
}

export const CHANNELS = [
  { label: 'Email', value: PERSONAL.email, href: 'mailto:' + PERSONAL.email, external: false, download: false },
  { label: 'LinkedIn', value: 'gautham-prabhu-5b2342192', href: PERSONAL.linkedin, external: true, download: false },
  { label: 'Google Scholar', value: 'Publication record', href: PERSONAL.scholar, external: true, download: false },
  { label: 'GitHub', value: '@GauthamPrabhuM', href: PERSONAL.github, external: true, download: false },
  { label: 'Résumé', value: 'PDF, April 2026', href: PERSONAL.resume, external: false, download: true },
]
