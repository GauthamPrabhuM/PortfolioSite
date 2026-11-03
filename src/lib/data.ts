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
  resume: '/assets/Gautham_Manuru_Prabhu_CV_EECS_3Nov2026.pdf',
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
    "I am a Software Engineer II on Cisco's AI Acceleration team. As the sole engineer, I designed and built an agentic test-triage platform over 3.5M+ manufacturing test records from switches, routers, line cards and ASIC-based boards. It reads FCT, ICT, JTAG and burn-in logs, traces each failure to the likely board, component or ASIC, and finds root causes for about 70% of test failures that were previously undiagnosed.",
    'Before that I built a failure-classification suite for FCT, ICT and burn-in stations, and deployed automated optical inspection on assembly lines in several global factories. In college I led an 8-person team building a radio telescope. At MiCoSys Lab, San José State University, I work on LLMs for temporal link prediction, and my first-author poster was accepted at Stanford\'s Graph Learning Workshop.',
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
      'As the sole engineer, I designed and built an agentic hardware test-triage platform (RAG, LLM diagnosis, MCP servers) over 3.5M+ manufacturing test records from switches, routers, line cards and ASIC-based boards. It runs in factories worldwide and finds root causes for about 70% of previously undiagnosed test failures, including on new product introductions (NPI) with no failure history.',
      'The agent reads functional test (FCT), in-circuit and boundary-scan (ICT, JTAG) and burn-in (ESS) logs, and traces each failure to the likely board, component or ASIC behind it. I took it from prototype to production with the security, platform, infrastructure and transformation teams, and turned the manual failure-analysis steps of test and quality engineers into agent workflows.',
      "I contributed to a support-queue agent that resolves 30% of routine requests. Together the two systems cut case volume 35% and MTTR 40%, saving $450,000 a year, and I presented the work to Cisco's Chief Supply Chain Officer. I mentor 5+ junior engineers.",
    ],
    stack: ['Python', 'RAG', 'MCP', 'LangGraph', 'LangChain', 'LangSmith', 'FastAPI', 'Docker', 'Kubernetes', 'PostgreSQL'],
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
      'I built a failure-classification suite that groups hardware test failures from FCT, ICT and burn-in stations by likely cause, and added agentic AI to failure analysis on test lines for ASIC-based networking hardware.',
      'I built metrics engines that track 10+ manufacturing quality metrics across 200+ hardware product lines, and split legacy monoliths into 10+ FastAPI microservices on Kubernetes serving 8 global manufacturing sites. I also deployed automated optical inspection on assembly lines, described under Projects.',
    ],
    stack: ['Python', 'FastAPI', 'Kubernetes', 'Microservices', 'OpenCV'],
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
    stack: ['Python', 'Jenkins', 'Docker', 'Kubernetes', 'CI/CD'],
  },
]

// ── Projects ─────────────────────────────────────────────
export const PROJECTS = [
  {
    id: 'aoi',
    title: 'Automated optical inspection for connectors',
    org: 'Cisco Systems',
    role: 'Software Engineer I',
    period: '2024 – 2025',
    where: 'Global factories',
    summary:
      'Connectors on the assembly line were checked for edge gaps by eye. I deployed a computer-vision AOI system that flags those gaps from camera images, on assembly lines in multiple global factories, and it replaced the manual visual checks.',
    stack: ['Computer Vision', 'OpenCV', 'AOI'],
  },
  {
    id: 'kalpana',
    title: 'Project Kalpana: a student radio telescope',
    org: 'Manipal Institute of Technology',
    role: 'Co-founder & Technical Head',
    period: '2022 – 2023',
    where: 'Manipal, India',
    summary:
      'I co-founded a student group to build a radio telescope and led its 8-person team on a $13,000 R&D grant. I led the software-defined radio and signal processing work.',
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
      'We tested whether LLM semantics help temporal link prediction on DTGB graphs (Enron, ICEWS1819) under a common protocol. I reproduced CROSS and compared it with DyGFormer and a structure-aware gate, over 100 negatives and 5 seeds. The gains varied by dataset and showed up mainly on unseen nodes. My first-author poster was accepted at Stanford\'s Graph Learning Workshop (SNAP).',
  },
  {
    id: 2,
    title: 'Research Intern, Medical Informatics Lab',
    institution: 'Indian Institute of Technology, Kharagpur',
    location: 'Remote',
    period: 'Summer 2023',
    advisor: 'Advisor: Dr. Subhamoy Mandal',
    summary:
      'I built dual-encoder, cross-attention vision models to detect age-related macular degeneration from thermal and structural OCT, robust to missing modalities. Presented at the Digital Health Symposium, IIT Kharagpur.',
  },
  {
    id: 3,
    title: 'Undergraduate Researcher, Cybersecurity & Quantum Computing',
    institution: 'Manipal Institute of Technology',
    location: 'Manipal, India',
    period: '2022 – 2023',
    advisor: 'Advisor: Dr. Vivekananda Bhat K.',
    summary:
      'I benchmarked QSVC, Pegasos QSVC (which I extended to four classes) and quanvolutional networks for classifying heart disease from ECG images. The quanvolutional network reached 97.31% accuracy, 3.88 points above a CNN. Funded by a $10,200 MeitY–AWS QCAL grant and published in IEEE Access.',
  },
  {
    id: 4,
    title: 'Undergraduate Researcher, Biometrics & Software Engineering',
    institution: 'Manipal Institute of Technology',
    location: 'Manipal, India',
    period: '2022 – 2023',
    advisor: 'Advisor: Dr. Srikanth Prabhu',
    summary:
      'I co-developed EyeEncrypt, secure retinal vessel segmentation for 3,000+ fundus images using Diffie–Hellman and AES-256, and demonstrated it to ophthalmologists at Kasturba Medical College.',
  },
  {
    id: 5,
    title: 'Research Intern, Information & Communication Technology',
    institution: 'Manipal Institute of Technology',
    location: 'Manipal, India',
    period: '2022 – 2023',
    advisor: 'Advisor: Dr. Nisha P. Shetty',
    summary:
      'I fine-tuned BERT and XLNet on 15,073 anti-vaccine tweets and mapped misinformation clusters in a Reddit user graph. Published in Procedia Computer Science.',
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
    ref: ', Stanford University, 2026 · Poster, first author',
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
      'Top 15% of the cohort. Most of my publications came out of three research labs here.',
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
      'Third rank in school in AISSCE 2020 (Thayil Lonappan George Memorial Endowment Award), and the G. Chenthamarakshan Award for the best computer science project. NTSE state scholar, rank 21 of 151,000.',
  },
]

// ── Stack ─────────────────────────────────────────────────────

export const SKILLS = [
  { id: 1, category: 'Hardware Test', items: ['Manufacturing test (FCT, ICT, boundary scan / JTAG, burn-in / ESS)', 'Hardware failure analysis', 'NPI', 'Board- and ASIC-level test data', 'Automated optical inspection (AOI)'] },
  { id: 2, category: 'Computer Engineering', items: ['Digital logic design', 'Computer architecture', 'Embedded systems', 'Microcontrollers', 'Arduino'] },
  { id: 3, category: 'Languages', items: ['Python', 'C', 'C++', 'Embedded C', 'SQL', 'Bash'] },
  { id: 4, category: 'Systems', items: ['Linux', 'Distributed systems', 'Microservices', 'REST APIs', 'CI/CD', 'FastAPI', 'Next.js'] },
  { id: 5, category: 'Cloud & DevOps', items: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Jenkins', 'GitHub Actions', 'Git'] },
  { id: 6, category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Neo4j'] },
  { id: 7, category: 'LLMs & Agents', items: ['LangChain', 'LangGraph', 'LangSmith', 'MCP', 'RAG', 'Ragas', 'DeepEval', 'Pinecone', 'Weaviate'] },
  { id: 8, category: 'Machine Learning', items: ['PyTorch', 'PyG', 'DGL', 'Hugging Face', 'PEFT (LoRA)', 'scikit-learn', 'OpenCV', 'NetworkX', 'Qiskit'] },
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
