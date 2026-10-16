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
  projects?: string[]; // slugs of case studies built in this role, linked under the bullets
};

export const experience: Experience[] = [
  {
    role: 'AI Engineer',
    company: 'V Gallant (VCIG)',
    period: 'Dec 2025 – Present',
    location: 'Kuala Lumpur',
    summary:
      'Own production AI systems end-to-end — GPU inference infrastructure, RAG, and workflow automation — plus full-stack AI products and client websites.',
    stack: ['vLLM', 'vLLM-Omni', 'Qdrant', 'n8n', 'Manus', 'FastAPI', 'VLMs', 'Next.js', 'PostgreSQL'],
    visible: 4,
    points: [
      'Built and deployed <a href="/projects/vgain-compute"><strong>VGAIN Compute</strong></a>, a multi-model AI API platform with API keys, usage tracking, and credit-based billing.',
      'Built and shipped <strong>multiple production websites</strong> — <a href="/projects/fnb-group">Reveillon Group</a>, <a href="/projects/vci-healthcare">VCI Healthcare</a>, and <a href="/projects/reveillon-creations">Reveillon Creations</a>.',
      'Architected, deployed, and operated a self-hosted <strong>AI creative-generation platform</strong> serving <strong>FLUX 2</strong> image and <strong>LTX 2.3</strong> video models on vLLM-Omni inference infrastructure.',
      'Deployed and managed <strong>DeepSeek V4 Flash</strong> inference across <strong>dual-GPU</strong> servers with vLLM, integrated with Open WebUI.',
      'Built a <strong>multi-tenant vector search</strong> platform on Qdrant with hybrid retrieval (BGE sparse + dense embeddings + reranking) for high-accuracy RAG.',
      'Developed an <strong>AI invoice-processing pipeline</strong> using Vision Language Models to extract structured data from unstructured invoices.',
      'Engineered a <strong>Text-to-SQL</strong> service with query routing between structured SQL databases and unstructured RAG pipelines to improve answer accuracy.',
      'Designed an <strong>async embedding &amp; ingestion</strong> pipeline with job tracking, background workers, and scalable processing for high-volume AI data workflows.',
      'Drove enterprise automation and workflow orchestration with <strong>n8n</strong> and <strong>Manus</strong>, streamlining operational processes and AI-driven workflows.',
      'Implemented backend services and API integrations for AI inference, document processing, retrieval, workflow automation, and enterprise application connectivity.',
    ],
    projects: ['vgain-compute', 'fnb-group', 'vci-healthcare', 'reveillon-creations'],
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

// A full case-study page rendered at /projects/[slug].
export type CaseStudy = {
  tagline: string;
  overview: string[]; // intro paragraphs
  build: { title: string; body: string }[]; // "what I built" groups
  stack: string[]; // full tech list (chips)
  gallery: { src: string; alt: string; caption?: string }[];
};

export type ProjectCategory = 'platform' | 'ai' | 'web' | 'research';

// Groups on the /projects page, in display order.
export const projectCategories: { id: ProjectCategory; title: string; blurb: string }[] = [
  { id: 'platform', title: 'AI Platforms', blurb: 'Full-stack AI products — customer app, API backend, billing, and operations.' },
  { id: 'ai', title: 'AI & Automation', blurb: 'Bots, pipelines, and systems that automate decisions.' },
  { id: 'web', title: 'Websites & Web Apps', blurb: 'Production websites designed, built, and shipped for clients.' },
  { id: 'research', title: 'Research', blurb: 'Published academic work.' },
];

export type Project = {
  name: string;
  category: ProjectCategory;
  highlight?: boolean; // shown in the home-page teaser
  blurb: string;
  points: string[];
  tags: string[];
  links?: { label: string; href: string }[];
  image?: string;
  imageAlt?: string;
  slug?: string; // if set, the card links to /projects/[slug]
  detail?: CaseStudy; // full case-study content for that page
};

export const projects: Project[] = [
  {
    name: 'VGAIN Compute — AI API Platform',
    category: 'platform',
    highlight: true,
    blurb:
      'An AI API platform that gives customers access to multiple text and video models through one service — with accounts, API keys, usage tracking, credit-based billing, and an admin finance dashboard.',
    points: [
      'Built the customer experience, API backend, pricing system, and admin tools — and deployed it to production.',
      'Model pricing from OpenRouter benchmarks and supplier costs, with price comparisons and historical records.',
      'Request-level profitability reporting by customer, API key, and model; release validated by 461 passing tests.',
    ],
    tags: ['Next.js', 'TypeScript', 'Python', 'PostgreSQL', 'Docker'],
    links: [{ label: 'Visit live platform', href: 'https://compute.vgallant.ai' }],
    slug: 'vgain-compute',
    image: '/vgain/home.jpg',
    imageAlt: 'VGAIN Compute landing page — "Many models. One place to build." with a Playground preview.',
    detail: {
      tagline:
        'Built and deployed a multi-model AI API platform end to end — customer app, API backend, pricing, billing, and admin finance tools.',
      overview: [
        'VGAIN Compute is an AI API platform that gives customers access to multiple models through one service. I built the customer experience, API backend, pricing system, and administration tools, and deployed the platform to production.',
        'A central challenge was understanding profitability for each request. I developed reporting that connects customer usage and charges with supplier costs, distinguishes estimates from confirmed billing records, and lets administrators investigate margins by customer, API key, and model.',
      ],
      build: [
        {
          title: 'Customer experience',
          body: 'Customer accounts, a browser Playground for trying models, self-serve API-key management, usage tracking, and spending controls — all in one Next.js + TypeScript workspace.',
        },
        {
          title: 'Multi-model API backend',
          body: 'One API in front of multiple text and video models, with an OpenAI-style chat-completions interface so customers can reuse existing integrations, and credit-based billing applied to every request.',
        },
        {
          title: 'Model pricing system',
          body: 'Prices set from OpenRouter benchmarks and supplier costs, with side-by-side price comparisons and historical pricing records so every change is traceable.',
        },
        {
          title: 'Admin finance & request profitability',
          body: 'A finance dashboard showing customer charges, supplier cost estimates, and gross profit (price spread) per request, broken down by customer, API key, and model — clearly separating estimates from confirmed supplier billing. Figures are gross, before infrastructure and other operating costs.',
        },
        {
          title: 'Production operations',
          body: 'Owned production deployment with Docker, PostgreSQL database migrations, access controls, and encrypted backups. The latest release was validated with 461 passing automated tests.',
        },
      ],
      stack: ['Next.js', 'TypeScript', 'React', 'Python', 'PostgreSQL', 'Docker', 'OpenRouter', 'Automated testing'],
      gallery: [
        { src: '/vgain/overview.jpg', alt: 'Customer workspace overview with getting-started guide', caption: 'Customer workspace — overview, daily limits, and a guided first request.' },
        { src: '/vgain/playground.jpg', alt: 'Playground chat with model selector and configuration panel', caption: 'Playground — try any enabled model, with system prompt and output limits.' },
        { src: '/vgain/models.jpg', alt: 'Model library with text, image, video, and embedding filters', caption: 'Model library — 49 models across text, image, video, and embeddings.' },
        { src: '/vgain/pricing.jpg', alt: 'Admin model pricing table with benchmark, price, and supplier-cost columns', caption: 'Model pricing — benchmark-anchored prices with supplier cost per model. Illustrative data.' },
        { src: '/vgain/usage.jpg', alt: 'Admin usage and requests table across customer workspaces', caption: 'Usage & requests — request metadata across customer workspaces. Illustrative data.' },
        { src: '/vgain/profitability.jpg', alt: 'Request profitability view with charges, supplier cost, price spread, and margin', caption: 'Request profitability — gross price spread per request, confirmed vs estimated costs. Illustrative data.' },
        { src: '/vgain/home.jpg', alt: 'VGAIN Compute landing page hero', caption: 'Landing page — one API, many models.' },
        { src: '/vgain/mobile.jpg', alt: 'Mobile view of the landing page', caption: 'Responsive down to mobile.' },
      ],
    },
  },
  {
    name: 'Quantus — Trading Alert Bot',
    category: 'ai',
    highlight: true,
    blurb: 'A Python bot that scans stocks for double-bottom reversals (daily & weekly), confirms with a volume-backed breakout, and sends Telegram/Discord alerts with annotated charts and position sizing.',
    points: [
      'Walk-forward backtesting engine and parameter sweep with SQLite state and cron/launchd scheduling.',
      'Systematic bear-trap reversal equity strategy: in-sample/out-of-sample validation, R-multiple / profit-factor / drawdown analytics.',
      'ATR-based signal filters, risk-based position sizing, and automated tests.',
    ],
    tags: ['Python', 'Backtesting', 'SQLite', 'Automation'],
    links: [{ label: 'Code', href: 'https://github.com/PsGit801/quantus' }],
    image: '/quantus-alert.png',
    imageAlt:
      'Quantus Telegram alert — FOXA weekly double-bottom chart plus the message: entry, stop, neckline target, reward:risk, and risk-based position sizing.',
  },
  {
    name: 'Reveillon Group — Multi-Brand Marketing Site',
    category: 'web',
    highlight: true,
    blurb:
      'The production marketing website for Reveillon Group, a six-brand lifestyle & hospitality group (MCR, NOWWA, BOWLCRAFTED, X Society, X Office Bar, XVI) — one data-driven template for every brand, a working SMTP contact form, and self-hosted on a Linux VM with a staging → production workflow.',
    points: [
      'Six brand pages rendered from one shared, data-driven Next.js template.',
      'Working contact form with server-side email delivery over SMTP.',
      'Self-hosted on a Linux VM (Nginx, PM2, Cloudflare HTTPS) with a staging → production promotion workflow.',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Nginx', 'Self-hosted'],
    links: [{ label: 'Visit live site', href: 'https://reveillon-group.com' }],
    slug: 'fnb-group',
    image: '/hospitality/cover.jpg',
    imageAlt: 'Brands overview page of the Reveillon Group marketing site.',
    detail: {
      tagline:
        'Designed, built, and self-hosted the production marketing site for Reveillon Group, a multi-brand lifestyle & hospitality group — front end to server.',
      overview: [
        'The production marketing website for Reveillon Group, a Malaysian lifestyle & hospitality group spanning six brands (MCR, NOWWA, BOWLCRAFTED, X Society, X Office Bar, XVI). Every brand page is rendered from one shared, data-driven template, so the whole site stays visually consistent and adding or updating a brand is a content change rather than a rebuild.',
        'I built the front end, wired a working contact form to real email delivery, and self-hosted the whole thing on a Linux VM — with separate staging and production environments and a controlled workflow to promote changes only after they have been reviewed on staging.',
      ],
      build: [
        {
          title: 'Front end & content model',
          body: 'Next.js 15 (App Router) with TypeScript and Tailwind CSS, plus Framer Motion for the animations. A single data-driven component template renders all six brand pages from a shared layout, keeping the design consistent and the code DRY. Fully responsive across desktop, tablet, and mobile.',
        },
        {
          title: 'Contact form with real email delivery',
          body: 'A working contact form that delivers submissions by email server-side over SMTP (Nodemailer). Credentials live in environment variables, kept out of version control.',
        },
        {
          title: 'Self-hosted deployment',
          body: 'Provisioned and deployed to an Ubuntu Linux VM: Nginx as a reverse proxy, PM2 to keep the app running as a persistent service that survives reboots, and Cloudflare-fronted HTTPS in front of it all.',
        },
        {
          title: 'Staging → production workflow',
          body: 'Isolated staging and production environments on the same server — separate ports, folders, and processes — with a controlled promotion step so changes ship to staging for review before they go live.',
        },
        {
          title: 'Repo hygiene',
          body: 'Managed in Git/GitLab, with build artifacts and raw design assets deliberately kept out of tracked source to keep the repository lean.',
        },
      ],
      stack: [
        'Next.js 15',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Node.js',
        'Nodemailer (SMTP)',
        'Nginx',
        'PM2',
        'Ubuntu / Linux',
        'Cloudflare',
        'Git / GitLab',
      ],
      gallery: [
        { src: '/hospitality/home.jpg', alt: 'Homepage hero of the Reveillon Group site', caption: 'Landing page — hero with a rotating brand showcase.' },
        { src: '/hospitality/brands.jpg', alt: 'Brands overview page listing the six brands', caption: 'Brands overview — six brands rendered from one shared template.' },
        { src: '/hospitality/chefs.jpg', alt: 'Our Chefs page', caption: 'Editorial pages (Our Chefs) built from the same design system.' },
        { src: '/hospitality/contact.jpg', alt: 'Contact page with the working form', caption: 'Contact page — the form that emails submissions over SMTP.' },
        { src: '/hospitality/mobile.jpg', alt: 'Mobile view of the homepage', caption: 'Fully responsive down to mobile.' },
      ],
    },
  },
  {
    name: 'VCI Healthcare — Healthcare Concierge Site',
    category: 'web',
    blurb:
      'A premium marketing site for a cross-border healthcare concierge — a calm, editorial design that walks visitors through a six-step care journey, a detailed product page, and a full compliance disclaimer.',
    points: [
      'Static Astro site with a refined editorial design system (serif display type, soft medical palette).',
      'Home → product → contact funnel: six-step journey, retreat package, and science explainers for three cell therapies.',
      'Accessible disclaimer modal covering provider roles, regulatory status, and PDPA 2010 data handling.',
    ],
    tags: ['Astro', 'TypeScript', 'CSS', 'Responsive', 'Accessibility'],
    links: [{ label: 'Visit site (staging)', href: 'https://stg.vcihealthcare.com/' }],
    slug: 'vci-healthcare',
    image: '/vci/home.jpg',
    imageAlt: 'VCI Healthcare homepage hero — "A More Personal Approach to Your Wellness Journey".',
    detail: {
      tagline:
        'Designed and built the marketing site for VCI Healthcare, a Kuala Lumpur–based cross-border healthcare concierge.',
      overview: [
        'VCI Healthcare arranges access to selected healthcare expertise and cellular wellness programmes in China for clients in Malaysia. The site has to do two things at once: feel premium and reassuring to prospective clients, and be scrupulously clear that VCI is a coordination platform — not a medical provider.',
        'I built it as a fast, static Astro site with an editorial design system, structured around a simple funnel — understand the journey, explore the programme, start a conversation — with compliance language surfaced site-wide through an accessible disclaimer modal.',
      ],
      build: [
        {
          title: 'Editorial design system',
          body: 'A calm, premium visual language — serif display headings with italic accents, a soft medical-blue palette, generous whitespace, and rounded cards — applied consistently across every page through shared components.',
        },
        {
          title: 'Journey-led home page',
          body: 'Hero with a single primary call to action, a positioning section, a featured retreat, and a six-step "Curated Around You" journey (assessment → consultation → programme → travel → rejuvenation → continued care) that explains the service at a glance.',
        },
        {
          title: 'Product & science content',
          body: 'An "Our Product" page for the Nansha Rejuvenative Retreat (4D3N / 5D4N) with an itemised inclusion grid, plus explainer sections for Mesenchymal Stem Cells, NK cells, and T cells and a step-by-step "first step" timeline that leads into contact.',
        },
        {
          title: 'Compliance disclaimer modal',
          body: 'A site-wide, keyboard-accessible disclaimer dialog (progressively enhanced — the trigger only renders with JavaScript) covering VCI\'s role, third-party providers, no-medical-advice, regulatory status, outcomes, fees, PDPA 2010 personal-data handling, and liability.',
        },
        {
          title: 'Responsive & performant',
          body: 'Static output with hashed, optimised assets; layouts collapse cleanly to a mobile menu and single-column flow on phones.',
        },
      ],
      stack: ['Astro', 'TypeScript', 'HTML / CSS', 'Responsive design', 'Accessible dialogs', 'Static site generation'],
      gallery: [
        { src: '/vci/home.jpg', alt: 'VCI Healthcare homepage hero', caption: 'Home — hero with a single, clear call to action.' },
        { src: '/vci/steps.jpg', alt: 'Six-step care journey cards', caption: 'The six-step journey that explains the service at a glance.' },
        { src: '/vci/product.jpg', alt: 'Nansha Rejuvenative Retreat product card', caption: 'Our Product — the retreat package with an itemised inclusion grid.' },
        { src: '/vci/cells.jpg', alt: 'Different cells, different functions section', caption: 'Science explainers for three cell types.' },
        { src: '/vci/nk-cells.jpg', alt: 'Natural Killer cells section on a dark band', caption: 'Alternating light/dark bands keep long-form content readable.' },
        { src: '/vci/disclaimer.jpg', alt: 'Disclaimer modal open over the page', caption: 'Site-wide compliance disclaimer, opened as an accessible modal.' },
        { src: '/vci/mobile.jpg', alt: 'Mobile view of the VCI homepage', caption: 'Fully responsive down to mobile.' },
      ],
    },
  },
  {
    name: 'Reveillon Creations — Livestream Talent Landing Page',
    category: 'web',
    blurb:
      'A Chinese-language recruitment landing page for Reveillon Creations, Reveillon Group\'s livestreaming & artist-incubation brand — a bold dark/neon design that turns visitors into streamer applicants.',
    points: [
      'Single-page Next.js funnel: business areas, career ladder, why Douyin, 7 monetisation paths, 7 streamer categories.',
      'Conversion CTAs throughout — Google Form application, WhatsApp, and email — with a video hero.',
      'Shipped as part of the Reveillon Group site and self-hosted behind Cloudflare.',
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Cloudflare', 'Landing page'],
    links: [{ label: 'Visit live site', href: 'https://reveillon-group.com/creations' }],
    slug: 'reveillon-creations',
    image: '/creations/home.jpg',
    imageAlt: 'Reveillon Creations hero — "以直播为起点，成就你的个人 IP" with a phone-framed video.',
    detail: {
      tagline:
        'Designed and built a conversion-focused, Chinese-language landing page to recruit livestream hosts for Reveillon Creations.',
      overview: [
        'Reveillon Creations is the livestreaming and artist-incubation brand of Reveillon Group. It recruits new hosts — mostly for Douyin — and offers a path from streaming into personal IP, brand deals, film, music, and artist groups.',
        'The page is a single, long-scroll recruitment funnel written for a Chinese-speaking audience: each section answers one objection (who are you, why you, why Douyin, how do I earn, is there a niche for me) and ends at a clear "apply now" call to action.',
      ],
      build: [
        {
          title: 'Brand & visual direction',
          body: 'A dark, neon purple-to-pink system that matches the livestream aesthetic, alternating with light sections for data-heavy content, with a phone-framed video in the hero.',
        },
        {
          title: 'Story-driven sections',
          body: 'About (tabbed business areas: livestreaming, film, music, artist incubation), Why Choose Us (a numbered timeline including the host → personal IP → brand → film/music → artist career ladder), Why Douyin (headline stats + algorithm explainer), seven monetisation paths split into "now" and "future", and seven streamer categories.',
        },
        {
          title: 'Conversion funnel',
          body: 'Repeated application CTAs that route to a Google Form, plus WhatsApp click-to-chat and Cloudflare-protected email — a sticky "加入我们" button in the header keeps the action one tap away.',
        },
        {
          title: 'Part of the Reveillon Group platform',
          body: 'Built in the same Next.js codebase as the Reveillon Group site, using Next/Image optimisation and the existing self-hosted Nginx + PM2 deployment behind Cloudflare.',
        },
        {
          title: 'Mobile-first',
          body: 'Most applicants arrive from social apps on their phones, so every section stacks cleanly on mobile with thumb-sized CTAs.',
        },
      ],
      stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Next/Image', 'Google Forms', 'Cloudflare', 'Nginx', 'PM2'],
      gallery: [
        { src: '/creations/home.jpg', alt: 'Reveillon Creations hero with phone-framed video', caption: 'Hero — headline, primary CTA, and a phone-framed video.' },
        { src: '/creations/about.jpg', alt: 'About section with tabbed business areas', caption: 'About — tabbed tour of the four business areas.' },
        { src: '/creations/why-us.jpg', alt: 'Why choose us timeline', caption: 'Why choose us — a numbered timeline including the career ladder.' },
        { src: '/creations/douyin.jpg', alt: 'Why Douyin stats section', caption: 'Why Douyin — headline stats and algorithm explainer.' },
        { src: '/creations/monetization.jpg', alt: 'Seven monetisation paths', caption: 'Seven monetisation paths, split into available now and future.' },
        { src: '/creations/categories.jpg', alt: 'Seven streamer categories', caption: 'Seven streamer categories to help applicants find their niche.' },
        { src: '/creations/mobile.jpg', alt: 'Mobile view of the Creations hero', caption: 'Mobile-first — most applicants arrive from social apps.' },
      ],
    },
  },
  {
    name: 'Published Research Paper — AIBPM',
    category: 'research',
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
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C++', 'C#', 'R'],
  },
  {
    group: 'Web & Frontend',
    items: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    group: 'Backend & Data Engineering',
    items: ['FastAPI', 'Node.js', 'REST API design', 'SMTP / Nodemailer', 'Async pipelines & workers', 'Playwright', 'Selenium', 'BeautifulSoup', 'Streamlit'],
  },
  {
    group: 'ML & Data Science',
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Time-series forecasting', 'NLP & sentiment analysis'],
  },
  {
    group: 'Infrastructure & Deployment',
    items: ['Docker', 'CUDA / GPU optimization', 'Nginx', 'PM2', 'Linux / VM deployment', 'Cloudflare', 'Staging → production workflow', 'Qdrant', 'FAISS', 'n8n', 'Git / GitLab'],
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
