export const translations = {
  fr: {
    // ── Navbar ───────────────────────────────────────────────────
    nav: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      experience: 'Expériences',
      projects: 'Projets',
      contact: 'Contact',
      cta: 'Me contacter',
    },

    // ── Hero ─────────────────────────────────────────────────────
    hero: {
      available: 'Disponible pour de nouvelles opportunités',
      subtitle: 'Développeur Fullstack · Backend, Data (ML)',
      tagline:
        "Je conçois des systèmes à la croisée du logiciel, des données et de l'IA : APIs robustes, pipelines de données, modèles de machine learning mis en production.",
      cta_contact: 'Me contacter',
      cta_cv: 'Télécharger CV',
    },

    // ── About ────────────────────────────────────────────────────
    about: {
      tag: 'Qui suis-je ?',
      title: 'À propos de moi',
      stats: [
        { value: '3', label: "Années d'expérience", sub: 'dev, data, cyber' },
        { value: '9', label: 'Projets livrés', sub: 'web, IA & data' },
        { value: '3', label: 'Domaines', sub: 'Backend · Data/IA · Sécu' },
      ],
      paragraphs: [
        "Développeur Fullstack avec une appétence pour le backend, je m'intéresse à la conception de systèmes à la croisée du logiciel, des données et de l'intelligence artificielle.",
        "Mon expérience m'a amené à travailler sur le développement web et les APIs, ainsi que sur des pipelines de données et le déploiement de modèles de machine learning. À EPITECH, j'ai formé et accompagné des étudiants sur des projets Full Stack, Data et IA.",
        "J'aime transformer des problématiques complexes en solutions concrètes, robustes et maintenables.",
      ],
      highlights: [
        {
          title: 'Backend-first',
          text: "Node.js (Express, NestJS), Python (FastAPI, Flask), PHP (Laravel), des APIs REST robustes, testées et documentées.",
        },
        {
          title: 'Data & Machine Learning',
          text: "Pandas, Scikit-learn, TensorFlow/Keras, NLP, Kafka; des pipelines de données et des modèles jusqu'à la mise en production.",
        },
        {
          title: 'Pédagogie & Cybersécurité',
          text: "Deux ans et demi d'accompagnement pédagogique à EPITECH et analyste cybersécurité pour comprendre la sécurité des systèmes d'information.",
        },
      ],
      linkedin_cta: 'Connectons-nous sur LinkedIn',
    },

    // ── Skills ───────────────────────────────────────────────────
    skills: {
      tag: 'Stack technique',
      title: 'Mes compétences',
      subtitle:
        "Technologies que j'utilise pour concevoir des applications robustes, de l'API jusqu'à l'interface, et des données jusqu'au modèle.",
      categories: {
        Backend: { label: 'Backend', description: 'APIs REST, architecture serveur' },
        Frontend: { label: 'Frontend', description: 'Interfaces & expériences utilisateur' },
        'Data & ML': { label: 'Data & ML', description: 'Analyse, modèles supervisés, NLP, deep learning' },
        'IA & Automatisation': { label: 'IA & Automatisation', description: 'Pipelines RAG, agents IA, automatisation no-code' },
        'Bases de données': { label: 'Bases de données', description: 'Relationnel, documents, vectoriel' },
        'DevOps & Qualité': { label: 'DevOps & Qualité', description: 'Déploiement, tests, sécurité applicative' },
      },
    },

    // ── Experience ───────────────────────────────────────────────
    experience: {
      tag: 'Parcours professionnel',
      title: 'Mon Parcours',
      subtitle: 'Mon évolution professionnelle et mes expériences',
      items: {
        1: {
          position: 'Développeur Web & Accompagnateur Pédagogique Data/IA et Fullstack',
          description: [
            "Conception et animation de formations sur des projets Full Stack, Data et IA : développement web et APIs REST, EDA, NLP, machine learning supervisé, deep learning",
            "Développement d'outils pédagogiques et d'applications internes en MERN, Python et FastAPI, dont une API REST de streaming simulé pour l'entraînement d'un modèle d'analyse de sentiments",
            "Évaluation de projets étudiants (pipelines ETL, modèles Scikit-learn / Keras, APIs, applications fullstack) et revues de code : qualité, architecture, bonnes pratiques",
            'BlueLock CTF App (MERN) : plateforme CTF, gestion des challenges, scoreboard en temps réel',
            "Dashboard (Node.js, Express.js) : backend d'un système de suivi académique interne",
            "Administration et maintenance du réseau informatique et des systèmes de contrôle d'accès",
          ],
        },
        2: {
          position: 'Formateur Automatisation No.Code',
          description: [
            "Conception et animation d'un bootcamp d'automatisation no-code (Zapier + Baserow) pour des PMs juniors",
            "Création de cas pratiques métier : automatisation de flux de données, synchronisation d'applications, gestion d'emails et de notifications",
          ],
        },
        3: {
          position: 'Analyste Cybersécurité',
          description: [
            'Réalisation de tests d\'intrusion sur applications web',
            'Rédaction de bulletins d\'alerte et de rapports SOC',
            'Monitoring d\'outils de surveillance (FortiSIEM)',
            'Veille de vulnérabilités',
            "Formation d'initiation à la cybersécurité à un public cible",
          ],
        },
        4: {
          position: 'Technicien Réseaux',
          description: [
            "Installation de systèmes d'exploitation",
            "Gestion et configuration d'équipements réseau",
            'Câblage réseau',
            "Configuration et Mise en place d'un proxy cache (Artica Proxy) pour le contrôle des utilisateurs.",
          ],
        },
      },
    },

    // ── Projects ─────────────────────────────────────────────────
    projects: {
      tag: 'Réalisations',
      title: 'Mes Projets',
      // subtitle: 'Découvrez une sélection de mes réalisations récentes',
      filter_all: 'Tous',
      filter_featured: 'Favoris',
      filter_web: 'Web',
      filter_ia: 'IA / Data',
      view_project: 'Voir le projet',
      view_github: 'GitHub',
      click_hint: 'Cliquer pour les détails',
      no_projects: 'Aucun projet à afficher.',
      items: {
        1: {
          title: 'Bluelock',
          description:
            "Plateforme de challenges CTF développée pour EPITECH Bénin, inspirée de HackTheBox. Elle intègre un système de score, un classement, la création de challenges personnalisés et une interface d'administration. Les règles du jeu sont inspirées du manga Blue Lock afin de rendre l'expérience plus immersive et originale.",
        },
        2: {
          title: 'RAG RH Assistant',
          description:
            "Chatbot RH basé sur un pipeline RAG : ingestion de documents RH (Notion), chunking, embeddings vectoriels OpenAI, stockage ChromaDB, interrogation par LLM. Déployé sur Hugging Face Spaces, migration pgvector/Supabase.",
        },
        3: {
          title: 'Hemosafe',
          description:
            "Conception et développement d'une application e-santé pour la gestion des demandes de transfusions sanguines dans les hôpitaux béninois.",
        },
        4: {
          title: 'Dashboard',
          description:
            "Développement collaboratif d'un système interne de suivi académique à EPITECH Bénin (structuration et backend).",
        },
        5: {
          title: 'United Kizdom World Congres',
          description:
            "Une plateforme internationale dédiée au rayonnement des danses afro-latines, au travers d'un congrès à Cotonou avec intégration de moyen de paiement.",
        },
        6: {
          title: 'NearYou',
          description:
            "Application web/mobile géolocalisée connectant les utilisateurs avec des prestataires de services locaux (artisans, plombiers, électriciens...) en Afrique de l'Ouest. Modèle communautaire : n'importe qui peut créer une fiche, le prestataire la revendique via OTP SMS. Intègre une carte interactive (Leaflet + OpenStreetMap), un bot WhatsApp et un système d'avis.",
        },
        8: {
          title: 'Arbitrage Strongman 2026 — FIBDA',
          description:
            "Logiciel d'arbitrage du Championnat National de Strongman (Fédération Ivoirienne de Bodybuilding), utilisé en direct le jour de la compétition : athlètes, pesée, ordre de passage, chronomètre, validation des performances, classement recalculé à chaque affichage, impressions officielles et neuf écrans publics pour le mur LED. Journal d'audit sur toute action qui touche un résultat.",
        },
        9: {
          title: 'FIBDA Bodybuilding — Compétition',
          description:
            "Application de jugement et de régie pour une compétition fédérale de bodybuilding : préparation des inscriptions et des catégories, bulletins de jugement sur téléphone avec accusé de réception serveur, classements et finales par discipline, régie et écrans publics, documents imprimables. API serverless TypeScript (Hono) sur Vercel, base Turso, écriture optimiste versionnée, 200+ tests automatisés.",
        },
      },
    },

    // ── Education ────────────────────────────────────────────────
    education: {
      tag: 'Formation',
      title: 'Mon Parcours Académique',
      // subtitle: 'Mon parcours académique et mes diplômes',
      items: {
        3: { degree: 'Master Conception et Développement de Solutions Informatiques', period: 'En cours' },
        1: { degree: 'Certificat Concepteur et Développeur Web & Mobile (RNCP Niveau 5)' },
        2: { degree: 'Licence Informatique, Réseaux et Télécommunications, option Systèmes, Réseaux et Sécurité' },
      },
    },

    // ── Certifications ───────────────────────────────────────────
    certifications: {
      tag: 'Certifications',
      title: 'Certifications',
      // subtitle: 'Mes certifications professionnelles et formations continues',
      click_hint: 'Cliquer pour les détails',
      modal: {
        issuer: 'Organisme',
        year: 'Année',
        status: 'Statut',
        obtained: 'Obtenue',
        view_link: 'Voir la certification',
        no_link: 'Lien de vérification non disponible',
      },
    },

    // ── Contact ──────────────────────────────────────────────────
    contact: {
      tag: 'Contact',
      title: 'Contactez-moi',
      subtitle: "Une question ? Un projet ? N'hésitez pas à me contacter !",
      info_title: 'Informations de Contact',
      email_label: 'Email',
      location_label: 'Localisation',
      phone_label: 'Téléphone',
      whatsapp_label: 'WhatsApp',
      whatsapp_sub: 'Discutons directement !',
      follow_title: 'Suivez-moi',
      whatsapp_msg: 'Bonjour {{name}}, je vous contacte depuis votre portfolio.',
      form: {
        name: 'Nom complet',
        name_placeholder: 'John Doe',
        email: 'Email',
        email_placeholder: 'john.doe@example.com',
        subject: 'Sujet',
        subject_placeholder: 'Objet de votre message',
        message: 'Message',
        message_placeholder: 'Votre message...',
        submit: 'Envoyer le message',
        submitting: 'Envoi en cours...',
        success: 'Message envoyé avec succès ! Je vous répondrai bientôt.',
        error_fields: 'Veuillez remplir tous les champs.',
        error_send: 'Une erreur est survenue. Réessayez ou contactez-moi directement par email.',
      },
    },

    // ── Footer ───────────────────────────────────────────────────
    footer: {
      quick_links: 'Liens Rapides',
      contact: 'Contact',
      made_with: 'Fait avec',
      and: 'et React',
      links: [
        { label: 'Accueil', href: '#home' },
        { label: 'À propos', href: '#about' },
        { label: 'Projets', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  },

  // ════════════════════════════════════════════════════════════
  en: {
    // ── Navbar ───────────────────────────────────────────────────
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      cta: 'Contact me',
    },

    // ── Hero ─────────────────────────────────────────────────────
    hero: {
      available: 'Available for new opportunities',
      subtitle: 'Fullstack Developer · Backend, Data (ML)',
      tagline:
        'I design systems at the crossroads of software, data and AI: robust APIs, data pipelines, and machine learning models shipped to production.',
      cta_contact: 'Contact me',
      cta_cv: 'Download Resume',
    },

    // ── About ────────────────────────────────────────────────────
    about: {
      tag: 'Who am I',
      title: 'About me',
      stats: [
        { value: '3', label: 'Years of experience', sub: 'dev, data, security' },
        { value: '9', label: 'Projects delivered', sub: 'web, AI & data' },
        { value: '3', label: 'Fields', sub: 'Backend · Data/AI · Sec' },
      ],
      paragraphs: [
        'Fullstack developer with a strong backend focus, I am drawn to designing systems where software, data and artificial intelligence meet.',
        'My experience spans web development and APIs, as well as data pipelines and the deployment of machine learning models. At EPITECH, I trained and mentored students on Full Stack, Data and AI projects.',
        'I enjoy turning complex problems into concrete, robust and maintainable solutions — with a certified pentester\'s eye on security.',
      ],
      highlights: [
        {
          title: 'Backend-first',
          text: 'Node.js (Express, NestJS), Python (FastAPI, Flask), PHP (Laravel) — robust, tested and documented REST APIs.',
        },
        {
          title: 'Data & Machine Learning',
          text: 'Pandas, Scikit-learn, TensorFlow/Keras, NLP, Kafka — data pipelines and models all the way to production, including RAG systems.',
        },
        {
          title: 'Teaching & Cybersecurity',
          text: 'Two and a half years of teaching assistance at EPITECH; CAP and CNSP certified cybersecurity analyst.',
        },
      ],
      linkedin_cta: 'Connect on LinkedIn',
    },

    // ── Skills ───────────────────────────────────────────────────
    skills: {
      tag: 'Tech stack',
      title: 'My skills',
      subtitle:
        'Technologies I use to build robust applications, from the API layer to the interface, and from data to model.',
      categories: {
        Backend: { label: 'Backend', description: 'REST APIs, server architecture' },
        Frontend: { label: 'Frontend', description: 'Interfaces & user experiences' },
        'Data & ML': { label: 'Data & ML', description: 'Analysis, supervised models, NLP, deep learning' },
        'IA & Automatisation': { label: 'AI & Automation', description: 'RAG pipelines, AI agents, no-code automation' },
        'Bases de données': { label: 'Databases', description: 'Relational, document, vector' },
        'DevOps & Qualité': { label: 'DevOps & Quality', description: 'Deployment, testing, application security' },
      },
    },

    // ── Experience ───────────────────────────────────────────────
    experience: {
      tag: 'Career',
      title: 'My Journey',
      subtitle: 'My professional evolution and enriching experiences',
      items: {
        1: {
          position: 'Web Developer & Teaching Assistant, Data/AI and Fullstack',
          description: [
            'Design and delivery of training on Full Stack, Data and AI projects: web development and REST APIs, EDA, NLP, supervised machine learning, deep learning',
            'Development of teaching tools and internal applications in MERN, Python and FastAPI — including a simulated streaming REST API used to train a sentiment analysis model',
            'Evaluation of student projects (ETL pipelines, Scikit-learn / Keras models, APIs, fullstack applications) and code reviews: quality, architecture, best practices',
            'BlueLock CTF App (MERN): CTF platform, challenge management, real-time scoreboard',
            'Dashboard (Node.js, Express.js): backend of an internal academic tracking system',
            'Administration and maintenance of the IT network and access control systems',
          ],
        },
        2: {
          position: 'No-Code Automation Trainer',
          description: [
            'Design and facilitation of a no-code automation bootcamp (Zapier + Baserow) for junior PMs',
            'Creation of practical business use cases: data flow automation, application synchronization, email and notification management',
          ],
        },
        3: {
          position: 'Cybersecurity Analyst',
          description: [
            'Penetration testing on web applications',
            'Writing security bulletins and SOC reports',
            'Monitoring surveillance tools (FortiSIEM)',
            'Vulnerability watch',
            'Cybersecurity introduction training for target audiences',
          ],
        },
        4: {
          position: 'Network Technician',
          description: [
            'Operating system installation',
            'Management and configuration of network equipment',
            'Network cabling',
            'Configuration and deployment of a proxy cache (Artica Proxy) for user control',
          ],
        },
      },
    },

    // ── Projects ─────────────────────────────────────────────────
    projects: {
      tag: 'Work',
      title: 'My Projects',
      subtitle: 'A selection of my recent work',
      filter_all: 'All',
      filter_featured: 'Featured',
      filter_web: 'Web',
      filter_ia: 'AI / Data',
      view_project: 'View project',
      view_github: 'GitHub',
      click_hint: 'Click for details',
      no_projects: 'No projects to display.',
      items: {
        1: {
          title: 'Bluelock',
          description:
            'CTF challenge platform developed for EPITECH Benin, inspired by HackTheBox. It features a scoring system, leaderboard, custom challenge creation and an admin interface. Game rules inspired by the Blue Lock manga for a more immersive experience.',
        },
        2: {
          title: 'RAG HR Assistant',
          description:
            'HR chatbot built on a RAG pipeline: ingestion of HR documents (Notion), chunking, OpenAI vector embeddings, ChromaDB storage, LLM querying. Deployed on Hugging Face Spaces, migrating to pgvector/Supabase.',
        },
        3: {
          title: 'Hemosafe',
          description:
            'Design and development of an e-health application for managing blood transfusion requests in Beninese hospitals.',
        },
        4: {
          title: 'Dashboard',
          description:
            'Collaborative development of an internal academic tracking system at EPITECH Benin (data structuring and backend).',
        },
        5: {
          title: 'United Kizdom World Congress',
          description:
            'An international platform dedicated to promoting Afro-Latin dances through a congress in Cotonou, featuring integrated payment processing.',
        },
        6: {
          title: 'NearYou',
          description:
            'Geolocated web/mobile app connecting users with local service providers (craftsmen, plumbers, electricians...) in West Africa. Community model: anyone can create a provider profile, which the provider can claim via SMS OTP. Features an interactive map (Leaflet + OpenStreetMap), a WhatsApp bot and a review system.',
        },
        7: {
          title: 'Sentiment Analysis API',
          description:
            'Simulated streaming API serving 5,000 pre-generated comments per title (30 Netflix series), with gzip compression and a deterministic time cursor. Built to train and evaluate sentiment analysis models under realistic conditions.',
        },
        8: {
          title: 'Strongman 2026 Judging — FIBDA',
          description:
            "Judging software for the Ivorian National Strongman Championship (Ivorian Bodybuilding Federation), used live on competition day: athletes, weigh-in, running order, timer, performance validation, rankings recomputed on every display, official printouts and nine public screens for the LED wall. Audit log on every action that touches a result.",
        },
        9: {
          title: 'FIBDA Bodybuilding — Competition',
          description:
            "Judging and stage-management app for a federal bodybuilding competition: entries and categories, judges' ballots on their phones with server acknowledgement, rankings and finals per discipline, stage control and public screens, printable documents. Serverless TypeScript API (Hono) on Vercel, Turso database, versioned optimistic writes, 200+ automated tests.",
        },
      },
    },

    // ── Education ────────────────────────────────────────────────
    education: {
      tag: 'Education',
      title: 'Academic Background',
      subtitle: 'My academic journey and degrees',
      items: {
        3: { degree: "Master's in Software Solutions Design and Development", period: 'In progress' },
        1: { degree: 'Certificate in Web & Mobile Application Design and Development (RNCP Level 5)' },
        2: { degree: "Bachelor's Degree in Computer Science, Networks and Telecommunications, Systems, Networks and Security track" },
      },
    },

    // ── Certifications ───────────────────────────────────────────
    certifications: {
      tag: 'Certifications',
      title: 'Certifications',
      subtitle: 'My professional certifications and continuing education',
      click_hint: 'Click for details',
      modal: {
        issuer: 'Issuer',
        year: 'Year',
        status: 'Status',
        obtained: 'Earned',
        view_link: 'View certification',
        no_link: 'Verification link not available',
      },
    },

    // ── Contact ──────────────────────────────────────────────────
    contact: {
      tag: 'Get in touch',
      title: 'Contact me',
      subtitle: 'A question? A project? Feel free to reach out!',
      info_title: 'Contact Information',
      email_label: 'Email',
      location_label: 'Location',
      phone_label: 'Phone',
      whatsapp_label: 'WhatsApp',
      whatsapp_sub: "Let's chat directly!",
      follow_title: 'Follow me',
      whatsapp_msg: 'Hello {{name}}, I am contacting you from your portfolio.',
      form: {
        name: 'Full name',
        name_placeholder: 'John Doe',
        email: 'Email',
        email_placeholder: 'john.doe@example.com',
        subject: 'Subject',
        subject_placeholder: 'Subject of your message',
        message: 'Message',
        message_placeholder: 'Your message...',
        submit: 'Send message',
        submitting: 'Sending...',
        success: 'Message sent successfully! I will get back to you soon.',
        error_fields: 'Please fill in all fields.',
        error_send: 'An error occurred. Please try again or contact me directly by email.',
      },
    },

    // ── Footer ───────────────────────────────────────────────────
    footer: {
      quick_links: 'Quick Links',
      contact: 'Contact',
      made_with: 'Made with',
      and: 'and React',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
    },
  },
};
