export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: "Full-Stack" | "Frontend" | "Backend / AI" | "DevOps & Cloud";
  tags: string[];
  metrics?: string;
  image?: string;
  gradient: string;
  featured: boolean;
  demoUrl: string;
  githubUrl: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: string; // e.g. "Advanced", "Proficient"
    highlight?: boolean;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string; // "Full-time", "Contract", etc.
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    availability: string;
    location: string;
    timezone: string;
    email: string;
    bio: string;
    github: string;
    linkedin: string;
    twitter: string;
    resumeUrl: string;
  };
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  skills: SkillCategory[];
  projects: Project[];
  experiences: Experience[];
  quickFacts: {
    icon: string;
    label: string;
    value: string;
  }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Pasindu Ranasinghe",
    title: "Full-Stack Software Engineer",
    tagline: "Architecting resilient distributed systems and crafting immersive, fluid web experiences.",
    availability: "Available for new opportunities & freelance projects",
    location: "Colombo, Sri Lanka / Remote",
    timezone: "IST / GMT+5:30",
    email: "mamepasindu@gmail.com",
    bio: "Passionate full-stack developer with extensive experience building scalable web applications, robust cloud APIs, and modern interactive user interfaces. Dedicated to clean architecture, high performance, and great user experiences.",
    github: "https://github.com/Pasinduranasinghe2001",
    linkedin: "https://linkedin.com/in/pasinduranasinghe",
    twitter: "https://twitter.com",
    resumeUrl: "#contact",
  },
  stats: [
    { label: "Years of Experience", value: "6+", sublabel: "Continuous engineering" },
    { label: "Production Apps Shipped", value: "32+", sublabel: "From 0 to 1 at scale" },
    { label: "Monthly Active Users", value: "250K+", sublabel: "Across distributed systems" },
    { label: "Code Reliability", value: "99.98%", sublabel: "Uptime & test coverage" },
  ],
  skills: [
    {
      category: "Frontend Architecture",
      iconName: "Layout",
      skills: [
        { name: "React 19 / Next.js 15", level: "Advanced", highlight: true },
        { name: "TypeScript", level: "Advanced", highlight: true },
        { name: "Tailwind CSS & Shadcn", level: "Advanced", highlight: true },
        { name: "Framer Motion & WebGL", level: "Proficient" },
        { name: "State Management (Zustand/Redux)", level: "Advanced" },
        { name: "Web Vitals & Performance", level: "Advanced" },
      ],
    },
    {
      category: "Backend & Systems",
      iconName: "Server",
      skills: [
        { name: "Node.js & Bun", level: "Advanced", highlight: true },
        { name: "Go (Golang)", level: "Proficient", highlight: true },
        { name: "Python / FastAPI", level: "Advanced" },
        { name: "RESTful & GraphQL APIs", level: "Advanced" },
        { name: "gRPC & Protocol Buffers", level: "Proficient" },
        { name: "WebSocket & SSE Real-Time", level: "Advanced" },
      ],
    },
    {
      category: "Databases & Storage",
      iconName: "Database",
      skills: [
        { name: "PostgreSQL & pgvector", level: "Advanced", highlight: true },
        { name: "Redis & Upstash Caching", level: "Advanced", highlight: true },
        { name: "MongoDB & DocumentDB", level: "Proficient" },
        { name: "Prisma & Drizzle ORM", level: "Advanced" },
        { name: "Supabase & Firebase", level: "Advanced" },
        { name: "Elasticsearch", level: "Proficient" },
      ],
    },
    {
      category: "Cloud, DevOps & Tooling",
      iconName: "Cloud",
      skills: [
        { name: "Docker & Containerization", level: "Advanced", highlight: true },
        { name: "AWS (ECS, Lambda, S3, RDS)", level: "Advanced", highlight: true },
        { name: "Kubernetes & Helm", level: "Working Knowledge" },
        { name: "GitHub Actions CI/CD", level: "Advanced" },
        { name: "Terraform Infrastructure as Code", level: "Proficient" },
        { name: "Datadog & OpenTelemetry Monitoring", level: "Proficient" },
      ],
    },
  ],
  projects: [
    {
      id: "project-1",
      title: "DevPulse Platform",
      subtitle: "Real-Time Observability & Incident Response Hub",
      description:
        "High-performance distributed telemetry collector and visual incident triaging workspace processing over 10M events per day with real-time WebSocket streams.",
      category: "Full-Stack",
      tags: ["Next.js 15", "TypeScript", "Go", "PostgreSQL", "Kafka", "Tailwind CSS"],
      metrics: "Reduced mean time to resolve (MTTR) by 42% for engineering teams",
      gradient: "from-blue-600/30 via-indigo-600/20 to-purple-700/30",
      featured: true,
      demoUrl: "https://example.com/devpulse",
      githubUrl: "https://github.com/example/devpulse",
    },
    {
      id: "project-2",
      title: "HyperFlow AI",
      subtitle: "Multi-Agent Workflow Automation Canvas",
      description:
        "Interactive node-based canvas for orchestrating autonomous LLM pipelines, connecting APIs, vector embeddings, and background workers with sub-100ms UI responsiveness.",
      category: "Full-Stack",
      tags: ["React Flow", "Next.js", "Python FastAPI", "LangChain", "Redis", "Pinecone"],
      metrics: "Empowered 12,000+ active automations with 99.99% queue success rate",
      gradient: "from-emerald-600/30 via-teal-600/20 to-cyan-700/30",
      featured: true,
      demoUrl: "https://example.com/hyperflow",
      githubUrl: "https://github.com/example/hyperflow",
    },
    {
      id: "project-3",
      title: "OmniPay Core",
      subtitle: "Zero-Downtime Multi-Currency Settlement Engine",
      description:
        "PCI-DSS compliant payment gateway adapter with distributed lock synchronization, idempotency guarantees, and automated webhook retries.",
      category: "Backend / AI",
      tags: ["Go", "gRPC", "PostgreSQL", "Docker", "Prometheus", "Tailwind CSS"],
      metrics: "Processed $14M+ in transaction volume with zero duplicate charges",
      gradient: "from-amber-600/30 via-orange-600/20 to-red-700/30",
      featured: true,
      demoUrl: "https://example.com/omnipay",
      githubUrl: "https://github.com/example/omnipay",
    },
    {
      id: "project-4",
      title: "Aura UI Design System",
      subtitle: "Accessible, Tokenized Component Suite for Modern Web",
      description:
        "Comprehensive open-source React component library featuring 40+ primitives, dark-mode first aesthetic, full keyboard navigation, and micro-interactions.",
      category: "Frontend",
      tags: ["React 19", "Tailwind CSS", "Framer Motion", "Storybook", "TypeScript"],
      metrics: "Over 3,500 GitHub stars and 80k weekly NPM downloads",
      gradient: "from-fuchsia-600/30 via-pink-600/20 to-rose-700/30",
      featured: false,
      demoUrl: "https://example.com/aura-ui",
      githubUrl: "https://github.com/example/aura-ui",
    },
    {
      id: "project-5",
      title: "KubePilot Dashboard",
      subtitle: "Intelligent Cluster Cost & Health Visualizer",
      description:
        "Lightweight Kubernetes cluster observer that pinpoints resource bottlenecks, orphaned volumes, and optimizes cloud spending through actionable heuristics.",
      category: "DevOps & Cloud",
      tags: ["TypeScript", "Next.js", "Kubernetes API", "Chart.js", "Tailwind"],
      metrics: "Average 28% reduction in monthly cloud infrastructure spend",
      gradient: "from-cyan-600/30 via-sky-600/20 to-blue-700/30",
      featured: false,
      demoUrl: "https://example.com/kubepilot",
      githubUrl: "https://github.com/example/kubepilot",
    },
    {
      id: "project-6",
      title: "Synthetix Voice Studio",
      subtitle: "Browser-based Real-time Audio Processing & Synthesis",
      description:
        "Low-latency WebAudio engine for multi-track waveform manipulation, AI voice modulation, and instant lossless export directly on the client edge.",
      category: "Frontend",
      tags: ["Web Audio API", "WebAssembly", "TypeScript", "Tailwind CSS", "Canvas"],
      metrics: "Under 12ms audio buffer latency on standard desktop browsers",
      gradient: "from-violet-600/30 via-purple-600/20 to-indigo-800/30",
      featured: false,
      demoUrl: "https://example.com/synthetix",
      githubUrl: "https://github.com/example/synthetix",
    },
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Lead Full-Stack Engineer",
      company: "Veloce Technologies",
      location: "San Francisco, CA (Remote)",
      type: "Full-time",
      period: "2023 - Present",
      description:
        "Spearheading the core product architecture, managing end-to-end delivery of customer-facing dashboards and high-throughput ingestion pipelines.",
      achievements: [
        "Led migration from legacy monolith to Next.js 15 App Router and microservices, slashing initial page load times by 55%.",
        "Engineered real-time collaboration engine using WebSockets and Redis Pub/Sub, supporting 10,000 concurrent sessions.",
        "Mentored a team of 7 engineers, instituted automated CI/CD checks, and achieved 92% unit/integration test coverage.",
      ],
      technologies: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Redis", "Docker", "AWS"],
    },
    {
      id: "exp-2",
      role: "Senior Software Engineer",
      company: "Strata Cloud Systems",
      location: "Austin, TX",
      type: "Full-time",
      period: "2021 - 2023",
      description:
        "Designed and maintained resilient REST and GraphQL APIs powering the enterprise multi-tenant analytics suite.",
      achievements: [
        "Architected an asynchronous job queue processing 5M+ background tasks daily with zero message loss.",
        "Optimized complex PostgreSQL database queries and indexing strategies, decreasing P99 query latency from 850ms to 95ms.",
        "Built dynamic data visualization components with D3 and React that enabled real-time cluster monitoring.",
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "GraphQL", "Docker", "Terraform"],
    },
    {
      id: "exp-3",
      role: "Full-Stack Developer",
      company: "Nexus Labs",
      location: "San Jose, CA",
      type: "Full-time",
      period: "2019 - 2021",
      description:
        "Built modern web applications, client portals, and internal developer tooling for venture-backed startup clients.",
      achievements: [
        "Delivered 14 production web applications on strict timelines with 100% on-schedule delivery rate.",
        "Integrated third-party payment gateways (Stripe, PayPal) and identity providers (OAuth2, Auth0).",
        "Pioneered component library standards that reduced frontend development time by 30% across projects.",
      ],
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    },
  ],
  quickFacts: [
    { icon: "Terminal", label: "Favorite Stack", value: "Next.js + TypeScript + Go + Postgres" },
    { icon: "Sparkles", label: "Philosophy", value: "Simple interfaces, robust systems" },
    { icon: "Coffee", label: "Coffee Fuel", value: "3 cups of dark roast / day" },
    { icon: "MapPin", label: "Base", value: "San Francisco & Remote" },
  ],
};
