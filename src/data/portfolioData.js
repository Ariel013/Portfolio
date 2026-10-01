export const personalInfo = {
  name: "Ariel Kevin SODJINOU",
  email: "kevin.sodjinou@epitech.eu",
  phone: "+33 0759554925",
  whatsapp: "22961566704",
  location: "Noisy-le-Grand, France",
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

// Profil unique — aligné sur le CV (public/Ariel-Kevin-SODJINOU.pdf).
// Les textes (sous-titre, accroche, à propos) vivent dans src/i18n/translations.js
// pour être traduits ; ici, seulement ce qui ne se traduit pas.
export const profile = {
  resumeUrl: import.meta.env.BASE_URL + 'Ariel-Kevin-SODJINOU.pdf',
  stackPills: [
    { label: 'Node.js', color: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' },
    { label: 'Python', color: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20' },
    { label: 'Next.js', color: 'bg-gray-500/10 text-gray-700 dark:text-gray-300 border-gray-500/20' },
    { label: 'PostgreSQL', color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
    { label: 'RAG', color: 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20' },
  ],
};

// Compétences — six catégories, celles du tableau du CV
export const skills = [
  // Backend
  { name: "Node.js", category: "Backend", icon: "FaNodeJs" },
  { name: "Express.js", category: "Backend", icon: "SiExpress" },
  { name: "NestJS", category: "Backend", icon: "SiNestjs" },
  { name: "Python", category: "Backend", icon: "FaPython" },
  { name: "FastAPI", category: "Backend", icon: "SiFastapi" },
  { name: "Flask", category: "Backend", icon: "SiFlask" },
  { name: "PHP / Laravel", category: "Backend", icon: "SiLaravel" },
  { name: "REST API", category: "Backend", icon: "FaCode" },
  // Frontend
  { name: "JavaScript", category: "Frontend", icon: "FaJs" },
  { name: "TypeScript", category: "Frontend", icon: "SiTypescript" },
  { name: "React", category: "Frontend", icon: "FaReact" },
  { name: "Next.js", category: "Frontend", icon: "SiNextdotjs" },
  { name: "Vue.js / Nuxt", category: "Frontend", icon: "SiVuedotjs" },
  { name: "Tailwind CSS", category: "Frontend", icon: "SiTailwindcss" },
  { name: "HTML/CSS", category: "Frontend", icon: "FaHtml5" },
  // Data & ML
  { name: "Pandas", category: "Data & ML", icon: "SiPandas" },
  { name: "NumPy", category: "Data & ML", icon: "SiNumpy" },
  { name: "Scikit-learn", category: "Data & ML", icon: "SiScikitlearn" },
  { name: "TensorFlow", category: "Data & ML", icon: "SiTensorflow" },
  { name: "Keras", category: "Data & ML", icon: "SiKeras" },
  { name: "NLP (TF-IDF, LSA)", category: "Data & ML", icon: "FaLanguage" },
  { name: "Apache Kafka", category: "Data & ML", icon: "SiApachekafka" },
  // IA & Automatisation
  { name: "Pipelines RAG", category: "IA & Automatisation", icon: "FaRobot" },
  { name: "OpenAI Embeddings", category: "IA & Automatisation", icon: "SiOpenai" },
  { name: "Agents IA", category: "IA & Automatisation", icon: "FaRobot" },
  { name: "n8n", category: "IA & Automatisation", icon: "FaCode" },
  { name: "Zapier", category: "IA & Automatisation", icon: "SiZapier" },
  // Bases de données
  { name: "PostgreSQL", category: "Bases de données", icon: "SiPostgresql" },
  { name: "MySQL", category: "Bases de données", icon: "SiMysql" },
  { name: "MongoDB", category: "Bases de données", icon: "SiMongodb" },
  { name: "SQLite", category: "Bases de données", icon: "SiSqlite" },
  { name: "ChromaDB", category: "Bases de données", icon: "FaDatabase" },
  { name: "pgvector", category: "Bases de données", icon: "SiPostgresql" },
  // DevOps & Qualité
  { name: "Git / GitHub", category: "DevOps & Qualité", icon: "FaGitAlt" },
  { name: "Linux", category: "DevOps & Qualité", icon: "FaLinux" },
  { name: "Docker", category: "DevOps & Qualité", icon: "FaDocker" },
  { name: "Render", category: "DevOps & Qualité", icon: "SiRender" },
  { name: "Railway", category: "DevOps & Qualité", icon: "SiRailway" },
  { name: "Vercel", category: "DevOps & Qualité", icon: "SiVercel" },
  { name: "Jest", category: "DevOps & Qualité", icon: "SiJest" },
  { name: "Postman", category: "DevOps & Qualité", icon: "SiPostman" },
  { name: "Selenium", category: "DevOps & Qualité", icon: "SiSelenium" },
  { name: "OWASP", category: "DevOps & Qualité", icon: "SiOwasp" },
];

export const experiences = [
  {
    id: 1,
    company: "EPITECH",
    position: "Développeur Web & Accompagnateur Pédagogique Data/IA et Fullstack",
    period: "Janvier 2024 - Juillet 2026",
    location: "Cotonou, Lomé, Abidjan",
    description: [
      "Conception et animation de formations sur des projets Full Stack, Data et IA : développement web et APIs REST, EDA, NLP, machine learning supervisé, deep learning",
      "Développement d'outils pédagogiques et d'applications internes en MERN, Python et FastAPI — dont une API REST de streaming simulé pour l'entraînement d'un modèle d'analyse de sentiments",
      "Évaluation de projets étudiants (pipelines ETL, modèles Scikit-learn / Keras, APIs, applications fullstack) et revues de code : qualité, architecture, bonnes pratiques",
      "BlueLock CTF App (MERN) : plateforme CTF, gestion des challenges, scoreboard en temps réel",
      "Dashboard (Node.js, Express.js) : backend d'un système de suivi académique interne",
      "Administration et maintenance du réseau informatique et des systèmes de contrôle d'accès",
    ],
    technologies: ["MERN", "Python", "FastAPI", "Data/IA", "Pédagogie", "NLP", "Machine Learning"]
  },
  {
    id: 2,
    company: "African Education and Innovation Group (AEIG) / Programme We.Code",
    position: "Formateur Automatisation No-Code",
    period: "Mai 2026",
    location: "Abidjan, Côte d'Ivoire",
    description: [
      "Conception et animation d'un bootcamp d'automatisation no-code (Zapier + Baserow) pour des PMs juniors",
      "Création de cas pratiques métier : automatisation de flux de données et synchronisation d'applications",
    ],
    technologies: ["Automatisation", "No Code", "Zapier", "Baserow"]
  },
  {
    id: 3,
    company: "Agence des Systèmes d'Information et du Numérique (ASIN)",
    position: "Analyste Cybersécurité",
    period: "Décembre 2022 - Mai 2023",
    location: "Cotonou, Bénin",
    description: [
      "Réalisation de tests d'intrusion sur applications web : identification de failles de sécurité",
      "Rédaction de rapports SOC, veille de vulnérabilité et threat intelligence sur l'écosystème web béninois",
      "Monitoring d'outils de surveillance (FortiSIEM)",
    ],
    technologies: ["Pentest", "FortiSIEM", "Shell Scripting", "OWASP"]
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
      "Configuration et mise en place d'un proxy cache (Artica Proxy) pour le contrôle des utilisateurs",
    ],
    technologies: ["Packet Tracer", "Voix IP", "Réseaux"]
  }
];

export const projects = [
  {
    id: 8,
    title: "Arbitrage Strongman 2026 — FIBDA",
    description: "Logiciel d'arbitrage du Championnat National de Strongman (Fédération Ivoirienne de Bodybuilding), utilisé en direct le jour de la compétition : athlètes, pesée, ordre de passage, chronomètre, validation des performances, classement recalculé à chaque affichage, impressions officielles et neuf écrans publics pour le mur LED. Journal d'audit sur toute action qui touche un résultat.",
    image: import.meta.env.BASE_URL + "projets/strongman.webp",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Vercel"],
    liveUrl: "https://strongman-pied.vercel.app/",
    type: "WEB APP",
    date: "Sept. 2026",
    featured: true
  },
  {
    id: 9,
    title: "FIBDA Bodybuilding — Compétition",
    description: "Application de jugement et de régie pour une compétition fédérale de bodybuilding : préparation des inscriptions et des catégories, bulletins de jugement sur téléphone avec accusé de réception serveur, classements et finales par discipline, régie et écrans publics, documents imprimables. API serverless TypeScript (Hono) sur Vercel, base Turso, écriture optimiste versionnée, 200+ tests automatisés.",
    image: import.meta.env.BASE_URL + "projets/fibda.webp",
    technologies: ["React", "TypeScript", "Hono", "Turso", "Vercel"],
    liveUrl: "https://fibda-bodybuilding.vercel.app/",
    type: "WEB APP",
    date: "Sept. 2026",
    featured: true
  },
  {
    id: 1,
    title: "Bluelock",
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
    description: "Chatbot RH basé sur un pipeline RAG : ingestion de documents RH (Notion), chunking, embeddings vectoriels OpenAI, stockage ChromaDB, interrogation par LLM. Déployé sur Hugging Face Spaces, migration pgvector/Supabase.",
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
    description: "API de streaming simulé servant 5 000 commentaires pré-générés par film (30 séries Netflix), avec compression gzip et curseur temporel déterministe. Conçue pour entraîner et évaluer des modèles d'analyse de sentiments en conditions réalistes.",
    image: "https://placehold.co/600x400/7c3aed/ffffff?text=Sentiment+Analysis",
    technologies: ["Python", "FastAPI"],
    liveUrl: "https://movie-stream-api-bidi.onrender.com/",
    type: "IA / DATA",
    date: "Déc. 2024",
    featured: false
  },];

export const education = [
  {
    id: 3,
    degree: "Master Conception et Développement de Solutions Informatiques",
    school: "INSTA",
    period: "En cours",
  },
  {
    id: 1,
    degree: "Certificat Concepteur et Développeur Web & Mobile (RNCP Niveau 5)",
    school: "EPITECH Bénin",
    period: "2023 - 2024",
  },
  {
    id: 2,
    degree: "Licence Informatique, Réseaux et Télécommunications, option Systèmes, Réseaux et Sécurité",
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
