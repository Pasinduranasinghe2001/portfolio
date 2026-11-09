export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Full-Stack" | "AI & Research" | "Systems & Desktop" | "Embedded & Robotics";
  tags: string[];
  metrics?: string;
  gradient: string;
  featured: boolean;
  demoUrl?: string;
  githubUrl: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    highlight?: boolean;
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  faculty?: string;
  period: string;
  status: string;
  details: string[];
}

export interface Membership {
  role: string;
  organization: string;
  badge?: string;
  status: string;
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
    phone: string;
    bio: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
    image: string;
  };
  education: Education[];
  memberships: Membership[];
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  skills: SkillCategory[];
  projects: Project[];
  research: {
    title: string;
    status: string;
    area: string;
    description: string;
    keyPoints: string[];
    githubUrl: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Pasindu Ranasinghe",
    title: "Software Engineering Intern Candidate",
    tagline: "Computer Engineering Undergraduate at the University of Jaffna with hands-on experience in Full-Stack Web Development, Real-Time Distributed Systems, and AI Research.",
    availability: "Available for Software Engineering Internship Opportunities",
    location: "Sri Lanka",
    timezone: "IST (UTC+5:30)",
    email: "mamepasindu@gmail.com",
    phone: "+94 76 453 8580",
    bio: "Computer Engineering undergraduate at the Faculty of Engineering, University of Jaffna with practical expertise developing full-stack web platforms, client-server architectures, and real-time communication systems. Proficient in Java, Spring Boot, JavaScript, Node.js, Python, and SQL with strong foundations in Data Structures, Algorithms, OOP, and Database Systems. Currently conducting research on deep-learning-based satellite image looting detection.",
    github: "https://github.com/Pasinduranasinghe2001",
    linkedin: "https://linkedin.com/in/pasindu-ranasinghe-9a7315326",
    resumeUrl: "/Pasindu_Ranasinghe_CV.pdf",
    image: "/profile.jpg",
  },
  education: [
    {
      degree: "B.Sc. (Hons) in Computer Engineering",
      institution: "University of Jaffna",
      faculty: "Faculty of Engineering",
      period: "2023 – Present",
      status: "Expected Graduation: 2027",
      details: [
        "Core Coursework: Software Engineering, Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Computer Networks, Operating Systems, Artificial Intelligence, Machine Learning.",
        "Undergraduate Research: Deep Learning for Archaeological Looting Detection using Satellite Imagery.",
      ],
    },
    {
      degree: "G.C.E. Advanced Level – Physical Science",
      institution: "R/ Ananda Maithreya Central College (AMCC)",
      faculty: "Balangoda, Sri Lanka",
      period: "2021",
      status: "Physical Science Stream",
      details: [
        "Physics: B | Chemistry: B | Combined Mathematics: B",
        "Qualified for State University Engineering admission.",
      ],
    },
  ],
  memberships: [
    {
      role: "Student Member",
      organization: "Institute of Electrical and Electronics Engineers (IEEE)",
      badge: "IEEE",
      status: "Active Member (Good Standing)",
    },
    {
      role: "Student Member",
      organization: "Institution of Engineers, Sri Lanka (IESL)",
      badge: "IESL",
      status: "Active Member",
    },
  ],
  stats: [
    { label: "Engineering Degree", value: "B.Sc. (Hons)", sublabel: "Computer Engineering, UoJ" },
    { label: "GitHub Repositories", value: "10+", sublabel: "Open source & active builds" },
    { label: "Core Tech Focus", value: "Full-Stack", sublabel: "Spring Boot, Node.js & React" },
    { label: "Professional Members", value: "IEEE & IESL", sublabel: "Student Member" },
  ],
  research: {
    title: "Looting Detection Using Satellite Images",
    status: "Undergraduate Research – Ongoing",
    area: "Deep Learning & Computer Vision",
    description:
      "Investigating deep-learning architectures for automated archaeological site looting detection from satellite imagery time series, overcoming temporal observation scarcity.",
    keyPoints: [
      "Analyzing the DAFA-LS dataset featuring monthly high-resolution satellite imagery across archaeological sites.",
      "Developing frame-fusion experiments across different temporal frame counts (K = 1, 2, 3, 5, 8).",
      "Benchmarking single-frame, change-based, and short-temporal deep learning approaches.",
      "Evaluating with Precision, Recall, F1-score, ROC-AUC, IoU, and mAP metrics under missing-frame scenarios.",
    ],
    githubUrl: "https://github.com/Pasinduranasinghe2001/Research",
  },
  skills: [
    {
      category: "Programming Languages",
      iconName: "Code",
      skills: [
        { name: "Java", level: "Advanced", highlight: true },
        { name: "JavaScript / TypeScript", level: "Advanced", highlight: true },
        { name: "Python", level: "Advanced", highlight: true },
        { name: "C / C++", level: "Proficient" },
        { name: "PHP", level: "Proficient" },
        { name: "SQL", level: "Advanced", highlight: true },
      ],
    },
    {
      category: "Frameworks & Web Technologies",
      iconName: "Layout",
      skills: [
        { name: "Spring Boot & Spring MVC", level: "Advanced", highlight: true },
        { name: "React & Next.js", level: "Advanced", highlight: true },
        { name: "Node.js & Express", level: "Advanced", highlight: true },
        { name: "WebRTC & Socket.IO", level: "Advanced", highlight: true },
        { name: "RESTful APIs", level: "Advanced", highlight: true },
        { name: "HTML5, CSS3 & Tailwind", level: "Advanced" },
      ],
    },
    {
      category: "Databases & Storage",
      iconName: "Database",
      skills: [
        { name: "MySQL", level: "Advanced", highlight: true },
        { name: "MongoDB", level: "Advanced", highlight: true },
        { name: "Database Design & Normalization", level: "Advanced" },
        { name: "CRUD Operations", level: "Advanced" },
      ],
    },
    {
      category: "Engineering Concepts & Tooling",
      iconName: "Server",
      skills: [
        { name: "Data Structures & Algorithms", level: "Advanced", highlight: true },
        { name: "Object-Oriented Programming (OOP)", level: "Advanced", highlight: true },
        { name: "Client-Server Architecture", level: "Advanced" },
        { name: "Git & GitHub Version Control", level: "Advanced", highlight: true },
        { name: "Postman & API Testing", level: "Advanced" },
        { name: "Maven & IntelliJ IDEA", level: "Proficient" },
      ],
    },
  ],
  projects: [
    {
      id: "equiphub",
      title: "EQuipHub – Equipment Request Platform",
      subtitle: "Enterprise Equipment Management & Approval Workflow System",
      description:
        "Full-stack web application supporting equipment requests, approval hierarchies, user privilege management, and inventory-related operations. Built backend RESTful APIs with Spring Boot and integrated data persistence with MongoDB and MySQL in a 5-member team.",
      category: "Full-Stack",
      tags: ["Spring Boot", "React", "MongoDB", "MySQL", "REST APIs", "Git"],
      metrics: "Collaborative 5-member team delivery with dual SQL/NoSQL data persistence",
      gradient: "from-blue-600/30 via-indigo-600/20 to-purple-700/30",
      featured: true,
      githubUrl: "https://github.com/sasindumal/EquipHub",
    },
    {
      id: "webrtc-platform",
      title: "WebRTC Video Conferencing Platform",
      subtitle: "Real-Time Multi-Party Video & Audio Communication",
      description:
        "Real-time video conferencing application with instant meeting room generation, attendee joining flow, waiting room access control, and low-latency peer-to-peer audio/video streaming via WebRTC with Socket.IO signaling.",
      category: "Full-Stack",
      tags: ["Node.js", "WebRTC", "Socket.IO", "JavaScript", "P2P Streaming"],
      metrics: "Sub-second peer negotiation with real-time room signaling",
      gradient: "from-cyan-600/30 via-teal-600/20 to-indigo-700/30",
      featured: true,
      githubUrl: "https://github.com/Pasinduranasinghe2001/WebRTC",
    },
    {
      id: "apparelflow-erp",
      title: "ApparelFlow-ERP",
      subtitle: "Comprehensive Manufacturing & Production Resource Planning",
      description:
        "Enterprise Resource Planning platform tailored for garment and apparel manufacturing businesses to manage work-in-progress orders, material tracking, employee scheduling, and export compliance.",
      category: "Full-Stack",
      tags: ["Java", "Spring Boot", "MySQL", "REST APIs", "Enterprise ERP"],
      metrics: "Structured modular architecture for garment production workflows",
      gradient: "from-emerald-600/30 via-green-600/20 to-teal-700/30",
      featured: true,
      githubUrl: "https://github.com/Pasinduranasinghe2001/ApparelFlow-ERP",
    },
    {
      id: "research-satellite",
      title: "Archaeological Looting Detection (Research)",
      subtitle: "Deep Learning for Satellite Imagery Time Series",
      description:
        "Undergraduate research project utilizing deep learning models on the DAFA-LS dataset to detect archaeological looting. Implements single-frame, change-based, and short-temporal multi-frame fusion (K = 1, 2, 3, 5, 8).",
      category: "AI & Research",
      tags: ["Python", "Deep Learning", "Computer Vision", "Satellite Imagery", "PyTorch"],
      metrics: "Evaluated using Precision, Recall, F1, ROC-AUC, IoU, and mAP",
      gradient: "from-purple-600/30 via-pink-600/20 to-rose-700/30",
      featured: true,
      githubUrl: "https://github.com/Pasinduranasinghe2001/Research",
    },
    {
      id: "timetabling-optimization",
      title: "Intelligent Timetabling System",
      subtitle: "Automated Constraint Optimization with Simulated Annealing",
      description:
        "Intelligent heuristic scheduling software resolving complex constraint satisfaction problems across lecturer availability, hall capacities, student batches, and course-ordering constraints with a Tkinter GUI.",
      category: "AI & Research",
      tags: ["Python", "Simulated Annealing", "Heuristics", "Constraint Optimization", "Tkinter"],
      metrics: "Iterative temperature cooling algorithm guaranteeing feasible schedules",
      gradient: "from-amber-600/30 via-orange-600/20 to-red-700/30",
      featured: false,
      githubUrl: "https://github.com/Pasinduranasinghe2001/Designing-an-Intelligent-Timetabling-System",
    },
    {
      id: "classchat",
      title: "ClassChat – Socket Chat System",
      subtitle: "Multi-Client Desktop Messaging Application",
      description:
        "Desktop client-server chat application enabling instant multi-user message distribution through robust Java socket programming, concurrent multi-threading, and a customized Java Swing interface.",
      category: "Systems & Desktop",
      tags: ["Java", "Socket Programming", "Multi-threading", "Java Swing", "OOP"],
      metrics: "Concurrent client socket handling with instant message broadcasting",
      gradient: "from-sky-600/30 via-blue-600/20 to-indigo-700/30",
      featured: false,
      githubUrl: "https://github.com/Pasinduranasinghe2001/ClassChat",
    },
    {
      id: "hostel-system",
      title: "Hostel Management System",
      subtitle: "Database-Driven Student Accommodation Management",
      description:
        "Web application managing university residential housing, room allocation, student check-ins, fee records, and administrative actions with structured relational database modeling.",
      category: "Full-Stack",
      tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "CRUD"],
      metrics: "Complete relational normalization and administrative dashboards",
      gradient: "from-teal-600/30 via-cyan-600/20 to-blue-700/30",
      featured: false,
      githubUrl: "https://github.com/Pasinduranasinghe2001/hostel-management-system",
    },
    {
      id: "smart-line-robot",
      title: "Smart Line Follower Robot",
      subtitle: "Autonomous Line Tracking with PID Motor Steering",
      description:
        "Autonomous mobile robot engineered with infrared reflectance sensor arrays, PID feedback control loop, and differential motor drivers for high-speed precision track navigation.",
      category: "Embedded & Robotics",
      tags: ["Arduino", "Embedded C++", "PID Control", "Infrared Sensors", "Robotics"],
      metrics: "Real-time sensor calibration and proportional-integral-derivative control",
      gradient: "from-violet-600/30 via-indigo-600/20 to-cyan-700/30",
      featured: false,
      githubUrl: "https://github.com/Pasinduranasinghe2001/SmartLineFollowerRobot",
    },
    {
      id: "java-game",
      title: "Gold Bomb – Java 2D Game",
      subtitle: "Interactive Arcade Game with AudioSystem Integration",
      description:
        "Object-oriented 2D arcade game built in Java 21 with Swing and AWT. Features randomized item generation, timed event loops, dynamic score tracking, collision detection, and background music via Java Clip APIs.",
      category: "Systems & Desktop",
      tags: ["Java 21", "Java Swing", "AWT", "AudioSystem API", "Game Loop"],
      metrics: "60 FPS event-driven gameplay with real-time collision calculation",
      gradient: "from-yellow-600/30 via-amber-600/20 to-orange-700/30",
      featured: false,
      githubUrl: "https://github.com/Pasinduranasinghe2001/java-Game",
    },
  ],
};
