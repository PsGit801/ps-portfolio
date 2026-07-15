// Single source of truth for all site content.
// Edit anything here and the whole site updates.

export const profile = {
  name: 'Liew Phing Shuin',
  heroName: 'PS Liew',
  role: 'AI Engineer',
  tagline: 'Building scalable, business-driven AI systems.',
  location: 'Kedah, Malaysia',
  email: 'jacksonliew08@gmail.com',
  phone: '+60 19-578 6488',
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
  { label: 'Email', href: 'mailto:jacksonliew08@gmail.com', handle: 'jacksonliew08@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/PsGit801', handle: 'github.com/PsGit801' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/phingshuin', handle: 'in/phingshuin' },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: 'AI Engineer',
    company: 'V Gallant (VCIG)',
    period: 'Dec 2025 – Present',
    location: 'Kuala Lumpur',
    points: [
      'Led enterprise automation and workflow orchestration using n8n, streamlining operational processes and AI-driven workflows.',
      'Architected, deployed, and operated a self-hosted AI creative generation platform (Pixel Factory) serving FLUX 2 image generation and LTX 2.3 video generation models through vLLM-Omni inference infrastructure.',
      'Deployed and managed DeepSeek V4 Flash inference across dual-GPU servers using vLLM, integrating with Open WebUI to deliver scalable Text-as-a-Service (TaaS) with optimized throughput and low-latency inference.',
      'Developed an AI-powered invoice processing pipeline using Vision Language Models (VLMs) to extract structured data from unstructured invoices, combined with Playwright browser automation for autonomous POS submission.',
      'Built a multi-tenant vector search platform on Qdrant with hybrid retrieval (BGE sparse embeddings, dense embeddings, and reranking) to support high-accuracy RAG systems.',
      'Engineered a Text-to-SQL service with query routing between structured SQL databases and unstructured RAG pipelines to optimize response accuracy and relevance.',
      'Designed an asynchronous embedding and ingestion pipeline with job tracking, background workers, and scalable processing for high-volume AI data workflows.',
    ],
  },
  {
    role: 'AI/ML Engineer',
    company: 'Keysight Technologies',
    period: 'Mar 2024 – Nov 2025',
    location: 'Penang',
    points: [
      'Built a Document AI Chatbot (LLM + RAG) over emails, meeting recordings, and slides, helping R&D engineers retrieve technical insights and project knowledge efficiently.',
      'Implemented video transcription (ASR) with OpenAI Whisper for chatbot data.',
      'Set up and served LLMs locally using llama.cpp with CUDA GPU optimization.',
      'Built a scalable news scraping tool (Selenium, BeautifulSoup) and automated titles, keywords, and summaries with an LLM — reducing manual analyst workload by 70%.',
      'Automated insights extraction and report generation from PDF reports using LLMs.',
      'Developed a product recommender system (Association Rule Mining + Collaborative Filtering).',
      'Built interactive Streamlit web apps to test and demonstrate AI/ML prototypes.',
    ],
  },
  {
    role: 'Market Intelligence Analyst',
    company: 'Keysight Technologies',
    period: 'Aug 2023 – Jan 2024',
    location: 'Penang, Malaysia',
    points: [
      'Delivered analytics, prediction, and forecasting projects using statistical methods and machine learning.',
      'Developed time-series forecasting models to predict economic indicators and market trends.',
      'Built data models for an early-alert system anticipating market downturns and recoveries.',
      'Researched an inflation simulator model for forecasting inflation scenarios and explored Market Basket Analysis for cross-selling strategies.',
      'Volunteered with KEYS2School and GETS (Girls in Engineering & Technologies) to support STEM education.',
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
