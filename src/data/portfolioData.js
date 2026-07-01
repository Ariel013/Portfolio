export const personalInfo = {
  name: "Ariel Kevin SODJINOU",
  email: "kevin.sodjinou@epitech.eu",
  phone: "+225 0502407474",
  whatsapp: "22961566704",
  location: "Abidjan, Côte-d'Ivoire",
  avatar: "https://res.cloudinary.com/dywgshhwp/image/upload/v1774098701/Identity_uql9xt.png",
  social: {
    linkedin: "https://www.linkedin.com/in/ariel-kevin-sodjinou/",
    github: "https://github.com/Ariel013",
    twitter: "https://twitter.com/aarielkev",
    discord: "https://discord.com/users/931712339793821746",
    codingame: "https://www.codingame.com/profile/33efd4d25f08a990da64f683baf3a3385218355",
    portfolio: "https://ariel013.github.io/portfolio_dev/"
  },
};

// Données spécifiques par profil
export const profileData = {
  dev: {
    title: 'Développeur Fullstack',
    subtitle: 'Backend first · Node.js · APIs REST',
    tagline: "Je conçois des APIs robustes et des applications web performantes — du backend Node.js jusqu'à l'intégration de services tiers.",
    resumeUrl: import.meta.env.BASE_URL + 'Ariel-Kevin-SODJINOU.pdf',
    stackPills: [
      { label: 'Node.js', color: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' },
      { label: 'React', color: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20' },
      { label: 'MongoDB', color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20' },
      { label: 'Next.js', color: 'bg-gray-500/10 text-gray-700 dark:text-gray-300 border-gray-500/20' },
      { label: 'Docker', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
    ],
    about: {
      paragraphs: [
        "Développeur Full Stack avec une préférence marquée pour le backend (Node.js, architecture MERN), je conçois des applications web robustes et performantes orientées vers la résolution de vrais problèmes.",
        "Accompagnateur à EPITECH, j'accompagne des étudiants en développement web fullstack et bonnes pratiques logicielles, alliant technique et pédagogie.",
        "Curieux par nature, je m'investis également dans la cybersécurité et l'intelligence artificielle, deux domaines qui enrichissent ma vision du développement logiciel.",
      ],
      highlights: [
        {
          title: 'Développeur Backend-first',
          text: "Node.js, Express, architecture MERN — je conçois des APIs robustes orientées scalabilité.",
        },
        {
          title: 'Pédagogue & Mentor',
          text: "Accompagnateur Epitech : revues de code, modules de formation, mentorat technique pour +200 étudiants.",
        },
        {
          title: 'Curiosité Cyber & IA',
          text: "Analyste cybersécurité certifié (CAP/CNSP), je nourris aussi ma vision avec l'intelligence artificielle.",
        },
      ],
      stats: [
        { value: '3+', label: "Années d'expérience", sub: 'en production' },
        { value: '5+', label: 'Projets livrés', sub: 'fullstack & IA' },
        { value: '200+', label: 'Étudiants formés', sub: 'fullstack & data' },
      ],
    },
  },
  data: {
    title: 'Data Analyst & ML Practitioner',
    subtitle: 'Python · Scikit-learn · Pandas · FastAPI',
    tagline: "Je construis des pipelines de données, des modèles de machine learning et des systèmes RAG orientés production.",
    resumeUrl: import.meta.env.BASE_URL + 'Ariel Kevin SODJINOU.pdf',
    stackPills: [
      { label: 'Python', color: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20' },
      { label: 'Pandas', color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' },
      { label: 'Scikit-learn', color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20' },
      { label: 'FastAPI', color: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20' },
      { label: 'ChromaDB', color: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20' },
    ],
    about: {
      paragraphs: [
        "Développeur Python et formateur data, je joins une compréhension pratique des algorithmes ML à une capacité de livrer des solutions complètes orientées production.",
        "J'ai conçu et animé des modules de data science (EDA, NLP, ML supervisé, deep learning, Kafka) pour +200 étudiants à EPITECH Afrique.",
        "Profil hybride dev/data, je suis particulièrement à l'aise avec la mise en production d'APIs de données et de modèles de machine learning.",
      ],
      highlights: [
        {
          title: 'Machine Learning & NLP',
          text: "Scikit-learn, TensorFlow/Keras, NLTK — classification, régression, topic modeling, analyse de sentiments.",
        },
        {
          title: 'Accompagnateur Pédagogique Data & IA',
          text: "+150 étudiants formés en EDA, NLP, ML supervisé, deep learning et architecture Kafka.",
        },
        {
          title: 'Pipelines RAG & IA',
          text: "ChromaDB, OpenAI Embeddings, FastAPI — systèmes RAG déployés sur Hugging Face et Supabase.",
        },
      ],
      stats: [
        { value: '3+', label: "Années d'expérience", sub: 'data & ML' },
        { value: '150+', label: 'Étudiants formés', sub: 'EDA, NLP, ML' },
        { value: '3', label: 'Projets IA', sub: 'RAG, NLP, API' },
      ],
    },
  },
};

// Compétences — tagguées par profil
export const skills = [
  // === PROFIL DEV ===
  { name: "React", category: "Frontend", icon: "FaReact", profile: "dev" },
  { name: "Next.js", category: "Frontend", icon: "SiNextdotjs", profile: "dev" },
  { name: "TypeScript", category: "Frontend", icon: "SiTypescript", profile: "dev" },
  { name: "Tailwind CSS", category: "Frontend", icon: "SiTailwindcss", profile: "dev" },
  { name: "JavaScript", category: "Frontend", icon: "FaJs", profile: "dev" },
  { name: "HTML/CSS", category: "Frontend", icon: "FaHtml5", profile: "dev" },
  { name: "Node.js", category: "Backend", icon: "FaNodeJs", profile: "dev" },
  { name: "Express.js", category: "Backend", icon: "SiExpress", profile: "dev" },
  { name: "MongoDB", category: "Backend", icon: "SiMongodb", profile: "dev" },
  { name: "PostgreSQL", category: "Backend", icon: "SiPostgresql", profile: "dev" },
  { name: "REST API", category: "Backend", icon: "FaCode", profile: "dev" },
  { name: "Git", category: "Outils", icon: "FaGitAlt", profile: "dev" },
  { name: "Docker", category: "Outils", icon: "FaDocker", profile: "dev" },
  { name: "Jest / Mocha", category: "Outils", icon: "FaCode", profile: "dev" },
  // === PROFIL DATA ===
  // Python & Data
  { name: "Python", category: "Python & Data", icon: "FaPython", profile: "data" },
  { name: "Pandas", category: "Python & Data", icon: "SiPandas", profile: "data" },
  { name: "NumPy", category: "Python & Data", icon: "SiNumpy", profile: "data" },
  { name: "SQL", category: "Python & Data", icon: "SiPostgresql", profile: "data" },
  { name: "Web Scraping", category: "Python & Data", icon: "FaSpider", profile: "data" },
  // ML & IA
  { name: "Scikit-learn", category: "ML & IA", icon: "SiScikitlearn", profile: "data" },
  { name: "TensorFlow", category: "ML & IA", icon: "SiTensorflow", profile: "data" },
  { name: "Keras", category: "ML & IA", icon: "SiKeras", profile: "data" },
  { name: "NLTK / NLP", category: "ML & IA", icon: "FaLanguage", profile: "data" },
  { name: "ChromaDB", category: "ML & IA", icon: "FaDatabase", profile: "data" },
  { name: "OpenAI API", category: "ML & IA", icon: "SiOpenai", profile: "data" },
  // Pipelines & Viz
  { name: "FastAPI", category: "Pipelines & Viz", icon: "SiFastapi", profile: "data" },
  { name: "Apache Kafka", category: "Pipelines & Viz", icon: "SiApachekafka", profile: "data" },
  { name: "Plotly", category: "Pipelines & Viz", icon: "SiPlotly", profile: "data" },
  { name: "Matplotlib", category: "Pipelines & Viz", icon: "FaCode", profile: "data" },
  { name: "n8n / Zapier", category: "Pipelines & Viz", icon: "SiZapier", profile: "data" },
];

export const experiences = [
  {
    id: 1,
    company: "EPITECH",
    position: "Accompagnateur Pédagogique Epitech",
    period: "Janvier 2024 - Présent",
    location: "Abidjan, Côte-d'Ivoire",
    description: [
      "Conception de supports et animation de modules de formation",
      "Suivi pédagogique et évaluation de la progression",
      "Revue de code, assistance technique et mentorat",
      "Développement d'outils internes améliorant les processus pédagogiques avec MongoDB, Express, React et Node.js",
      "Formation et accompagnement d'étudiants en développement web fullstack et bonnes pratiques logicielles",
      "Supervision du réseau et résolution des incidents techniques",
      "Administration de système de contrôle d'accès (badgeuse, gestion des utilisateurs)",
    ],
    profileDescriptions: {
      dev: [
        "Développement d'outils pédagogiques MERN pour le suivi et l'accompagnement des étudiants",
        "Revues de code : qualité, cohérence, architecture, bonnes pratiques",
        "Formation de +200 étudiants sur des projets fullstack (programme WECODE)",
        "Développement d'une Streaming API (Python, FastAPI) pour entraîner un modèle d'analyse de sentiments",
        "Administration et maintenance du réseau informatique et des systèmes de contrôle d'accès",
      ],
      data: [
        "Conception et animation de modules data pour +200 étudiants : EDA, web scraping, NLP, ML supervisé, deep learning et architecture Kafka",
        "Évaluation des projets étudiants : pipelines ETL, modèles Scikit-learn/Keras, dashboards et APIs de données",
        "Développement d'une API REST (FastAPI) pour l'analyse de sentiments — outil pédagogique de démonstration NLP",
        "Création d'une Streaming API servant 5 000 commentaires pré-générés pour entraîner des modèles",
        "Administration et maintenance du réseau informatique et des systèmes de contrôle d'accès",
      ],
    },
    technologies: ["Développement Web", "Backend", "Data/IA", "Pédagogie", "Machine Learning", "NLP", "Data Analysis"]
  },
  {
    id: 2,
    company: "Digital Valley / We.Code",
    position: "Formateur Automatisation No.Code",
    period: "Mai 2026",
    location: "Abidjan, Côte d'Ivoire",
    description: [
      "Conception et animation d'un bootcamp d'automatisation no-code (Zapier + Baserow) pour une vingtaine de PMs juniors",
      "Création de cas pratiques métier : automatisation de flux de données, synchronisation d'applications, gestion d'emails et de notifications",
    ],
    technologies: ["Automatisation", "Outils No Code", "Zapier", "Baserow"]
  },
  {
    id: 3,
    company: "Agence des Systèmes d'Informations et du Numérique (ASIN)",
    position: "Analyste Cybersécurité",
    period: "Décembre 2022 - Mai 2023",
    location: "Cotonou, Bénin",
    description: [
      "Réalisation de tests d'intrusion sur applications web ",
      "Rédaction de bulletins d'alerte et de rapports SOC",
      "Monitoring d'outils de surveillance (FortiSIEM)",
      "Veille de vulnérabilités",
      "Formation d'initiation à la cybersécurité à un public cible"
    ],
    technologies: ["Pentest","FortiSIEM", "Shell Scripting"]
  },
  {
    id: 4,
    company: "MA-INFO",
    position: "Technicien Réseaux",
    period: "Avril 2022 - Septembre 2022",
    location: "Cotonou, Bénin",
    description: [
      "Installation de systèmes d'exploitation",
      "Gestion et configuration d'équipements réseau",
      "Câblage réseau",
      "Configuration et Mise en place d'un proxy cache (Artica Proxy) pour le contrôle des utilisateurs."
    ],
    technologies: ["Packet Tracer", "Voix IP", "Réseaux"]
  }
];

export const projects = [
  {
    id: 1,
    title: "Bluelock",
    profile: "both",
    description: "Plateforme de challenges CTF développée pour EPITECH Bénin, inspirée de HackTheBox. Elle intègre un système de score, un classement, la création de challenges personnalisés et une interface d'administration. Les règles du jeu sont inspirées du manga Blue Lock afin de rendre l'expérience plus immersive et originale.",
    image: "https://res.cloudinary.com/dywgshhwp/image/upload/bluelock_dnrkfh.png",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind", "Docker"],
    liveUrl: "https://epi-bluelock.bj/",
    type: "WEB APP",
    date: "Jan. 2025",
    featured: true
  },
  {
    id: 2,
    title: "RAG RH Assistant",
    profile: "both",
    description: "Chatbot basé sur la méthode RAG (Retriever-Augmented Generation) pour répondre aux questions courantes des employés concernant les ressources humaines (politiques internes, avantages, congés, etc.).",
    descriptions: {
      dev: "API FastAPI déployée sur Hugging Face Spaces. Architecture RAG complète avec ChromaDB pour le stockage vectoriel et OpenAI pour la génération. Migration pgvector/Supabase en cours pour la montée en charge.",
      data: "Pipeline RAG complet : ingestion de documents RH (Notion), chunking, embeddings vectoriels OpenAI, stockage ChromaDB, interrogation par LLM. Déployé sur Hugging Face Spaces — migration pgvector/Supabase planifiée.",
    },
    image: "https://res.cloudinary.com/dywgshhwp/image/upload/rag_kyoa3y.png",
    technologies: ["FastAPI", "ChromaDB", "Python"],
    liveUrl: "https://arieldev13-assistant-rh-rag.hf.space",
    githubUrl: "https://github.com/Ariel013/Rag-RH.git",
    type: "IA / DATA",
    date: "Mar. 2025",
    featured: true
  },
  {
    id: 3,
    title: "Hemosafe",
    profile: "both",
    description: "Conception et développement d'une application e-santé pour la gestion des demandes de transfusions sanguines dans les hôpitaux béninois.",
    image: "https://res.cloudinary.com/dywgshhwp/image/upload/hemosafe_dc8cle.png",
    technologies: ["Next", "Nest", "Prisma", "Postgresql"],
    type: "WEB APP",
    date: "Fév. 2024",
    featured: false
  },
  {
    id: 4,
    title: "Dashboard EPITECH",
    profile: "both",
    description: "Développement collaboratif d'un système interne de suivi académique à EPITECH Bénin (structuration et backend).",
    image: "https://placehold.co/600x400/1e40af/ffffff?text=Dashboard",
    technologies: ["React", "Node.js", "MongoDB"],
    type: "WEB APP",
    date: "Oct. 2024",
    featured: false
  },
  {
    id: 5,
    title: "United Kizdom World Congres",
    profile: "both",
    description: "Une plateforme internationale dédiée au rayonnement des danses afro-latines, au travers d'un congrès à Cotonou avec intégration de moyen de paiement",
    image: "https://res.cloudinary.com/dywgshhwp/image/upload/v1776611686/Capture_d_%C3%A9cran_2026-04-19_151135_iuvwc3.png",
    technologies: ["Laravel", "Nuxt.js", "Mysql"],
    liveUrl: "https://unitedkizdom.com",
    type: "WEB APP",
    date: "Avr. 2026",
    featured: false
  },
  {
    id: 6,
    title: "NearYou",
    profile: "both",
    description: "Application web (PWA) géolocalisée connectant les utilisateurs avec des prestataires de services locaux (artisans, plombiers, électriciens...) en Afrique de l'Ouest. Modèle communautaire : n'importe qui peut créer une fiche, le prestataire la revendique via OTP SMS. Intègre une carte interactive (Leaflet + OpenStreetMap), un bot WhatsApp et un système d'avis.",
    image: "https://res.cloudinary.com/dywgshhwp/image/upload/v1781879602/Capture_d_%C3%A9cran_2026-06-19_143201_xe4fvh.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://near-you-lovat.vercel.app/",
    githubUrl: "https://github.com/Ariel013/NearYou",
    type: "WEB APP",
    date: "Juin. 2026",
    featured: false
  },
  {
    id: 7,
    title: "API Sentiment Analysis",
    profile: "data",
    description: "API de streaming simulé servant 5 000 commentaires pré-générés par film (30 séries Netflix), avec compression gzip et curseur temporel déterministe. Conçue pour entraîner et évaluer des modèles d'analyse de sentiments en conditions réalistes.",
    image: "https://placehold.co/600x400/7c3aed/ffffff?text=Sentiment+Analysis",
    technologies: ["Python", "FastAPI"],
    liveUrl: "https://movie-stream-api-bidi.onrender.com/",
    type: "DATA / IA",
    date: "Déc. 2024",
    featured: false
  },
];

export const education = [
  {
    id: 1,
    degree: "Certificat concepteur développeur Web et Mobile (RNCP Niveau 5)",
    school: "EPITECH Bénin",
    period: "2022 - 2023",
  },
  {
    id: 2,
    degree: "Licence en Informatique, Réseaux et Télécommunications, Option Systèmes, Réseeaux et Sécurité",
    school: "ESGIS Bénin",
    period: "2019 - 2022",
  }
];

export const certifications = [
  {
    id: 1,
    name: "Certified Application Pentester (CAP)",
    issuer: "SecOps Group",
    date: "Aout. 2023",
    image: "https://res.cloudinary.com/dywgshhwp/image/upload/v1778554792/cap_rnzxld.png",
  },
  {
    id: 2,
    name: "Certified Network Security Practitioner (CNSP)",
    issuer: "SecOps Group",
    date: "Aout. 2023",
    image: "https://res.cloudinary.com/dywgshhwp/image/upload/v1778554792/cnsp_mq2dji.png",
  },
  {
    id: 3,
    name: "Postman Student Expert",
    issuer: "Postman",
    date: "Sep. 2023",
    url: "https://api.badgr.io/public/assertions/NZjEI44kSFWvECEOHSaDkw"
  },
  {
    id: 4,
    name: "Network Security Expert 1 & 2",
    issuer: "Fortinet",
    date: "Nov. 2022",
  },
  {
    id: 5,
    name: "Certification CodinGame - Python3",
    issuer: "CodinGame",
    date: "Mar. 2026",
    image: "https://res.cloudinary.com/dywgshhwp/image/upload/v1778554012/codingame_rnjttu.png",
    url: "https://www.codingame.com/certification/ZD-U-UVUtL22OVlXF4NkBg"
  },
  {
    id: 6,
    name: "Certification CodinGame - CODING_SPEED - GOLD",
    issuer: "CodinGame",
    date: "Sept. 2025",
    image: "https://res.cloudinary.com/dywgshhwp/image/upload/v1778554012/codingame_rnjttu.png",
    url: "https://www.codingame.com/certification/U1dAoKbgdFjJVarMwG_ZYA"
  },
  {
    id: 7,
    name: "Duolingo English Test",
    issuer: "Duolingo",
    date: "Janv. 2025",
    image: "https://res.cloudinary.com/dywgshhwp/image/upload/v1778554792/duolingo_mwtcsn.png",
    url: "https://certs.duolingo.com/vudjh2uyr0wdd35b"
  },
  {
    id: 8,
    name: "Parcours de Formation PMP",
    issuer: "GoMyCode",
    date: "2026",
    image: "https://res.cloudinary.com/dywgshhwp/image/upload/v1778556543/gomycode_v62qew.png",
    url: "https://res.cloudinary.com/dywgshhwp/image/upload/v1778845859/GOMYCODE_Certif_page-0001_zieixj.jpg",
  }
];

export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
