// ── Personal ─────────────────────────────────────────────────
export const PERSONAL = {
  name: 'Gautham Manuru Prabhu',
  shortName: 'Gautham M.P.',
  role: 'Software Engineer II',
  company: 'Cisco Systems',
  team: 'AI Acceleration · Supply Chain',
  location: 'Bengaluru, India',
  email: 'gauthamprabhu9@gmail.com',
  github: 'https://github.com/GauthamPrabhuM',
  linkedin: 'https://www.linkedin.com/in/gautham-prabhu-5b2342192/',
  scholar: 'https://scholar.google.com/citations?user=eFGVT2UAAAAJ&hl=en',
  resume: '/assets/Gautham_Manuru_Prabhu_CV_Nov2026.pdf',
  photo: '/assets/me.png',
}

export const NAV_ITEMS = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'education', label: 'Education' },
  { id: 'stack', label: 'Stack' },
  { id: 'contact', label: 'Contact' },
]

// ── Hero ──────────────────────────────────────────────────────
export const HERO = {
  columns: [
    "I am a Software Engineer II on Cisco's AI Acceleration team, and my work sits on the hardware test and manufacturing side of the supply chain. I am lead developer of an agentic test-triage platform that works out why a hardware test failed on the factory line. It finds root causes for about 70% of previously undiagnosed failures and runs in factories worldwide. Before that I deployed a computer-vision system that checks connectors for edge gaps on assembly lines.",
    'In college I co-founded Project Kalpana, a student radio telescope, and led its software-defined radio and signal processing. I also research temporal graph learning at MiCoSys Lab, San José State University, and I am first author on a poster at the Stanford Graph Learning Workshop (SNAP) 2026. Six of my papers are peer reviewed.',
  ],
}

export const STATS = [
  { value: '2×', label: 'Promotions since 2024' },
  { value: '6', label: 'Papers, peer reviewed' },
  { value: '60+', label: 'Citations on Google Scholar' },
]

// ── Professional experience ───────────────────────────────────
export const WORK_EXPERIENCE = [
  {
    id: 1,
    title: 'Software Engineer II, AI Acceleration',
    company: 'Cisco Systems Inc.',
    location: 'Bengaluru, India',
    from: 'Oct 2025 –',
    to: 'Present',
    isCurrent: true,
    highlights: [
      'When a hardware test fails on a factory line, someone has to work out whether the test script, the test environment or the product itself is at fault. I am lead developer of an agentic test-triage platform (RAG, LLM diagnosis, MCP) that does this. It finds root causes for about 70% of previously undiagnosed failures and runs in factories worldwide.',
      "I contributed to a support-queue agent that resolves 30% of routine requests (MAC address allocation, access issues, expired certificates). Together the two systems cut case volume 35% and MTTR 40%, saving $450,000 a year. I presented the work to Cisco's Chief Supply Chain Officer.",
      "I took the platform from prototype to production with the security, platform, infrastructure and transformation teams, and turned test and quality engineers' manual triage steps into agent workflows. I mentor 5+ junior engineers and have received 25+ Cisco Connected Recognition awards.",
    ],
    stack: ['Python', 'FastAPI', 'Agentic AI', 'LLMs', 'RAG', 'MCP', 'LangChain', 'LangGraph', 'LangSmith', 'Docker', 'Kubernetes', 'OpenShift', 'ArgoCD', 'PostgreSQL', 'Snowflake'],
  },
  {
    id: 2,
    title: 'Software Engineer I, Supply Chain Transformation',
    company: 'Cisco Systems Inc.',
    location: 'Bengaluru, India',
    from: 'Aug 2024 –',
    to: 'Sep 2025',
    isCurrent: false,
    highlights: [
      'I added agentic AI to failure analysis on factory test lines, with a failure-classification suite that groups test failures by likely cause before engineers review them. I also deployed a computer-vision inspection system on assembly lines (see Projects).',
      'I built Quality Transformation metrics engines that track 10+ quality metrics across 200+ product lines, and split legacy monoliths into 10+ FastAPI microservices on Kubernetes across 8 global sites.',
    ],
    stack: ['Python', 'FastAPI', 'Kubernetes', 'Microservices', 'Agentic AI', 'Computer Vision', 'OpenCV'],
  },
  {
    id: 3,
    title: 'Software Engineering Intern, Supply Chain',
    company: 'Cisco Systems Inc.',
    location: 'Bengaluru, India',
    from: 'Jan 2024 –',
    to: 'Jun 2024',
    isCurrent: false,
    highlights: [
      'I rebuilt a Python 2 workflow as microservices with CI/CD, and deployment went from six hours to four minutes.',
      "I built a supplier-name standardisation pipeline across 50,000+ records. It finished second runner-up in Cisco's Intern Case Study Competition.",
    ],
    stack: ['Python', 'Flask', 'Jenkins', 'Docker', 'Kubernetes', 'REST', 'NLP'],
  },
]

// ── Projects ─────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 'connector-inspection',
    title: 'Computer-vision connector inspection',
    org: 'Cisco Systems',
    role: 'Software Engineer I',
    period: '2024 – 2025',
    where: 'Global factories',
    summary:
      'Connectors on the assembly line were checked for edge gaps by eye. I deployed a computer-vision inspection system that flags those gaps from camera images, on assembly lines in multiple global factories, replacing the manual visual checks.',
    stack: ['Computer Vision'],
  },
  {
    id: 'kalpana',
    title: 'Project Kalpana: a student radio telescope',
    org: 'Manipal Institute of Technology',
    role: 'Co-founder & Technical Head',
    period: '2022 – 2023',
    where: 'Manipal, India',
    summary:
      'I co-founded a student group to build a radio telescope. My proposal won the $13,000 university grant, and I led the software-defined radio and signal processing work.',
    stack: ['Software-defined radio', 'Signal processing'],
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
    title: 'Research Intern, MiCoSys Lab',
    institution: 'San José State University',
    location: 'Remote',
    period: 'Mar 2026 – Present',
    advisor: 'Advisor: Dr. Saptarshi Sengupta',
    badge: 'First author',
    summary:
      'First-author poster at the Stanford Graph Learning Workshop (SNAP) 2026. We tested whether LLM-generated semantics improve temporal link prediction once every model is evaluated under one protocol. I reproduced CROSS, a reported state-of-the-art model, matched its published results, and compared it with DyGFormer and a lightweight structure-aware gate over 5 seeds. The gains depend on protocol and dataset: CROSS helps most on unseen nodes but turns seed-dependent on ICEWS1819, and larger text encoders do not help. Full paper in preparation.',
  },
  {
    id: 2,
    title: 'Research Intern, Medical Informatics Lab',
    institution: 'Indian Institute of Technology, Kharagpur',
    location: 'Remote',
    period: 'Summer 2023',
    advisor: 'Advisor: Dr. Subhamoy Mandal',
    summary:
      'I built dual-encoder, cross-attention models to detect macular degeneration from thermal and structural OCT, robust to missing modalities and mixed resolutions. I also compared RGB, HSV and thermal inputs for detection. Presented at the Digital Health Symposium, IIT Kharagpur.',
  },
  {
    id: 3,
    title: 'Undergraduate Researcher, Cybersecurity & Quantum Computing',
    institution: 'Manipal Institute of Technology',
    location: 'Manipal, India',
    period: '2022 – 2023',
    advisor: 'Advisor: Dr. Vivekananda Bhat K.',
    summary:
      'QSVC, Pegasos QSVC and quanvolutional networks for classifying heart disease from ECG images. The quanvolutional model reached 97.31% accuracy, 3.88 points above a comparable CNN. I extended Pegasos QSVC from binary to four-class. Supported by a $10,200 MeitY–AWS QCAL grant, and top 16 of 1,626 teams at the Global Quantum Science and Technology Hackathon.',
  },
  {
    id: 4,
    title: 'Undergraduate Researcher, Biometrics & Software Engineering',
    institution: 'Manipal Institute of Technology',
    location: 'Manipal, India',
    period: '2022 – 2023',
    advisor: 'Advisor: Dr. Srikanth Prabhu',
    summary:
      "Co-developed EyeEncrypt, secure retinal vessel segmentation for 3,000+ fundus images with Diffie–Hellman and AES-256. Demonstrated it to Kasturba Medical College's ophthalmologists. Published at ATIS 2022 and in a review.",
  },
  {
    id: 5,
    title: 'Research Intern, Information & Communication Technology',
    institution: 'Manipal Institute of Technology',
    location: 'Manipal, India',
    period: '2022 – 2023',
    advisor: 'Advisor: Dr. Nisha P. Shetty',
    summary:
      'Fine-tuned BERT and XLNet on the 15,073-tweet ANTi-Vax dataset to separate misinformation from general vaccine discussion. Linked Reddit authors by post-comment cosine similarity and used NetworkX to find misinformation clusters. Published in Procedia Computer Science.',
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
    authorsAfter: ', S. Gupta, M. Choudhary, A. Nagarajan, K. Potika, S. Sengupta',
    venue: 'Stanford Graph Learning Workshop (SNAP) 2026',
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
    quiet: 'IOP Journal',
    citations: null,
    title: 'Exploring Design Optimisation Techniques of a Radio Telescope Using Fixed Costing Constraints',
    authorsBefore: 'A. A. Iyer, ',
    authorsAfter: ', T. Gupta, S. Deshmukh, R. Rivankar',
    venue: 'Journal of Physics: Conference Series',
    ref: ', vol. 2571, p. 012031, 2023',
    doi: '10.1088/1742-6596/2571/1/012031',
    link: 'https://iopscience.iop.org/article/10.1088/1742-6596/2571/1/012031',
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
    items: ['Agentic AI', 'LLMs', 'RAG', 'MCP', 'LangChain', 'LangGraph', 'LangSmith', 'Hugging Face', 'NetworkX', 'OpenCV', 'PyTorch', 'PyTorch Geometric', 'DGL', 'TensorFlow', 'Keras', 'scikit-learn', 'Qiskit', 'GraphML', 'NLP', 'Computer Vision'],
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
  { label: 'Résumé', value: 'PDF, November 2026', href: PERSONAL.resume, external: false, download: true },
]
