// Single source of truth for all site content.
// Edit anything here and the whole site updates.

export const profile = {
  name: 'Liew Phing Shuin',
  heroName: 'PS Liew',
  role: 'AI Engineer',
  tagline: 'Building scalable, business-driven AI systems.',
  location: 'Kedah, Malaysia',
  summary:
    'AI Engineer specializing in scalable, business-driven AI solutions. Experienced in LLM integration, RAG systems, AI coding agents, and workflow automation to accelerate software delivery and business operations. I build end-to-end AI pipelines — embeddings, vector databases (FAISS, Qdrant), cloud and self-hosted LLM deployments, and agentic workflows — with Python, FastAPI, and Azure OpenAI, delivering production-ready AI platforms and applications.',
  resumeUrl: '/Liew-Phing-Shuin-Resume.pdf',
};

// About section content.
export const about = {
  lead: 'I build end-to-end AI systems that ship to production.',
  body: [
    'AI Engineer specializing in scalable, business-driven AI — LLM integration, RAG systems, AI coding agents, and workflow automation that accelerate software delivery and operations.',
    'I work across the whole pipeline: embeddings, vector databases (FAISS, Qdrant), cloud and self-hosted LLM deployments, and agentic workflows — mostly with Python, FastAPI, and Azure OpenAI.',
  ],
  focus: ['RAG systems', 'LLM serving', 'Agentic workflows', 'Workflow automation', 'Vector search'],
  facts: [
    { label: 'Role', value: 'AI Engineer @ V Gallant' },
    { label: 'Based in', value: 'Kedah, Malaysia' },
    { label: 'Focus', value: 'LLM · RAG · Automation' },
    { label: 'Core stack', value: 'Python · FastAPI · vLLM' },
  ],
};

// Headline metrics shown in the hero. `value` is the number that counts up;
// `prefix`/`suffix` frame it; `label` describes it.
export const stats: { value: number; prefix?: string; suffix?: string; label: string }[] = [
  { value: 70, suffix: '%', label: 'Less manual work via LLM automation' },
  { value: 3, suffix: '+', label: 'Years building AI & ML systems' },
  { value: 10, suffix: '+', label: 'Production AI systems shipped' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/PsGit801', handle: 'github.com/PsGit801' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/phingshuin', handle: 'in/phingshuin' },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  stack: string[];
  visible: number; // bullets shown before "Show more"
  points: string[]; // strongest first; may contain <strong> emphasis (rendered as HTML)
};

export const experience: Experience[] = [
  {
    role: 'AI Engineer',
    company: 'V Gallant (VCIG)',
    period: 'Dec 2025 – Present',
    location: 'Kuala Lumpur',
    summary:
      'Own production AI platforms end-to-end — from GPU inference infrastructure to RAG, automation, and agentic pipelines.',
    stack: ['vLLM', 'vLLM-Omni', 'Qdrant', 'n8n', 'FastAPI', 'Playwright', 'VLMs'],
    visible: 4,
    points: [
      'Architected and operated <strong>Pixel Factory</strong>, a self-hosted creative-generation platform serving <strong>FLUX 2</strong> image and <strong>LTX 2.3</strong> video models on vLLM-Omni.',
      'Deployed <strong>DeepSeek V4 Flash</strong> across <strong>dual-GPU</strong> servers with vLLM + Open WebUI, delivering low-latency Text-as-a-Service.',
      'Built a <strong>multi-tenant vector search</strong> platform on Qdrant with hybrid retrieval (BGE sparse + dense + reranking) for high-accuracy RAG.',
      'Developed an <strong>autonomous invoice pipeline</strong> using Vision Language Models + Playwright to extract data and submit to POS systems.',
      'Led enterprise automation and workflow orchestration with <strong>n8n</strong> across operational processes.',
      'Engineered a <strong>Text-to-SQL</strong> service with query routing between SQL databases and RAG pipelines.',
      'Designed an <strong>async embedding &amp; ingestion</strong> pipeline with job tracking and background workers for high-volume workflows.',
    ],
  },
  {
    role: 'AI/ML Engineer',
    company: 'Keysight Technologies',
    period: 'Mar 2024 – Nov 2025',
    location: 'Penang',
    summary: 'Shipped LLM/RAG tools and automation that cut manual work for R&D teams.',
    stack: ['RAG', 'Whisper', 'llama.cpp', 'CUDA', 'Selenium', 'Streamlit'],
    visible: 3,
    points: [
      'Built a <strong>Document AI Chatbot</strong> (LLM + RAG) over emails, recordings, and slides so R&D engineers could retrieve project knowledge instantly.',
      'Automated news processing with an LLM, <strong>cutting manual analyst workload 70%</strong> (Selenium + BeautifulSoup scraper).',
      'Served LLMs locally with <strong>llama.cpp + CUDA</strong> and added <strong>Whisper</strong> ASR for transcription.',
      'Automated insights extraction and report generation from PDF reports using LLMs.',
      'Developed a product recommender system (Association Rule Mining + Collaborative Filtering).',
      'Built interactive Streamlit apps to test and demo AI/ML prototypes.',
    ],
  },
  {
    role: 'Market Intelligence Analyst',
    company: 'Keysight Technologies',
    period: 'Aug 2023 – Jan 2024',
    location: 'Penang, Malaysia',
    summary: 'Built forecasting and early-warning models for market intelligence.',
    stack: ['Time-series', 'Forecasting', 'Market Basket Analysis'],
    visible: 2,
    points: [
      'Developed <strong>time-series forecasting</strong> models for economic indicators and market trends.',
      'Built an <strong>early-alert system</strong> anticipating market downturns and recoveries.',
      'Delivered analytics and prediction projects using statistical methods and ML.',
      'Researched an inflation simulator and explored Market Basket Analysis for cross-selling.',
      'Volunteered with KEYS2School and GETS (Girls in Engineering &amp; Technologies) to support STEM education.',
    ],
  },
];

export type Project = {
  name: string;
  blurb: string;
  points: string[];
  tags: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: 'Quantus — Trading Alert Bot',
    blurb: 'A Python bot that scans stocks for double-bottom reversals (daily & weekly), confirms with a volume-backed breakout, and sends Telegram/Discord alerts with annotated charts and position sizing.',
    points: [
      'Walk-forward backtesting engine and parameter sweep with SQLite state and cron/launchd scheduling.',
      'Systematic bear-trap reversal equity strategy: in-sample/out-of-sample validation, R-multiple / profit-factor / drawdown analytics.',
      'ATR-based signal filters, risk-based position sizing, and automated tests.',
    ],
    tags: ['Python', 'Backtesting', 'SQLite', 'Automation'],
    links: [{ label: 'Code', href: 'https://github.com/PsGit801/quantus' }],
  },
  {
    name: 'Published Research Paper — AIBPM',
    blurb: 'Peer-reviewed research contribution published on ResearchGate.',
    points: [
      'AIBPM publication covering applied analytics research.',
    ],
    tags: ['Research', 'Analytics'],
    links: [{ label: 'Read paper', href: 'https://www.researchgate.net/publication/366105361' }],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: 'AI / LLM Engineering',
    items: ['RAG', 'Agentic workflows', 'vLLM / vLLM-Omni', 'llama.cpp', 'Open WebUI', 'Vision Language Models', 'Text-to-SQL', 'ASR (Whisper)', 'LangChain', 'Azure OpenAI', 'Prompt engineering'],
  },
  {
    group: 'Languages',
    items: ['Python', 'SQL', 'C++', 'C#', 'R'],
  },
  {
    group: 'Backend & Data Engineering',
    items: ['FastAPI', 'REST API design', 'Async pipelines & workers', 'Playwright', 'Selenium', 'BeautifulSoup', 'Streamlit'],
  },
  {
    group: 'ML & Data Science',
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Time-series forecasting', 'NLP & sentiment analysis'],
  },
  {
    group: 'Infrastructure & Tooling',
    items: ['Docker', 'CUDA / GPU optimization', 'Qdrant', 'FAISS', 'n8n', 'Git'],
  },
  {
    group: 'Data Visualization',
    items: ['Power BI', 'Tableau'],
  },
];

export type Education = {
  credential: string;
  detail: string;
  place: string;
  year: string;
  note?: string;
};

export const education: Education[] = [
  {
    credential: 'Bachelor of Management (Honours), Major in Business Analytics',
    detail: 'Minor in Computer Science',
    place: 'University of Science, Malaysia · Penang',
    year: '2024',
    note: 'CGPA 3.70 — First Class Honours',
  },
  {
    credential: 'Pre-University Programme',
    detail: 'Matriculation',
    place: 'Matriculation College Negeri Sembilan',
    year: '2020',
    note: 'CGPA 4.0',
  },
  {
    credential: 'Secondary Education (Science Stream)',
    detail: 'SMK (CF) Keat Hwa',
    place: 'Kedah, Malaysia',
    year: '2018',
    note: "10 A's",
  },
];

export const certifications: { name: string; issuer: string; year: string }[] = [
  { name: 'Claude Code in Action', issuer: 'Anthropic', year: '2026' },
  { name: 'Fundamentals of AI Agents Using RAG and LangChain', issuer: 'IBM', year: '2025' },
  { name: 'Docker Fundamentals', issuer: 'Packt', year: '2025' },
  { name: 'Generative AI for Data Scientists Specialization', issuer: 'IBM (Coursera)', year: '2024' },
  { name: 'Python for Data Science, AI & Development', issuer: 'IBM', year: '2024' },
  { name: 'Intro to TensorFlow for AI, ML & Deep Learning', issuer: 'DeepLearning.AI', year: '2024' },
];
