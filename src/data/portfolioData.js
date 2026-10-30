export const personalInfo = {
  name: "CHIBOUB Amine",
  initials: "AC",
  status: "Consultant technico-fonctionnel ERP · Master 2 MIAGE",
  titles: [
    "Consultant technico-fonctionnel ERP",
    "Dolibarr · Odoo",
    "Gestion de projet SI"
  ],
  location: "Bordeaux, France",
  mobility: "Mobile Nouvelle-Aquitaine / Île-de-France / Toulouse",
  email: "chiboub.mohamed.amine1@gmail.com",
  phone: "",
  linkedin: "https://www.linkedin.com/in/mohamed-amine-chiboub/",
  github: "https://github.com/AmineCHIBOUB",
  availability: "Actuellement consultant ERP chez AeroDIODE, en parallèle de mon Master 2 MIAGE.",
  about: `Un ERP bien paramétré fait gagner du temps à toute l'entreprise. Mal pensé, il en fait perdre.

Consultant technico-fonctionnel ERP, je transforme les besoins métier en solutions qui fonctionnent, avec un pied dans le métier et un pied dans la technique. Je suis les projets de bout en bout : analyse, paramétrage, développement, recette et formation des utilisateurs.

En parallèle, je suis en Master 2 MIAGE à l'Université de Bordeaux.`
};

export const projects = [
  {
    id: 1,
    title: "Consultant technico-fonctionnel ERP",
    company: "AeroDIODE",
    period: "Octobre 2026 – aujourd'hui",
    location: "Bègles, France",
    context: "Consultant ERP au sein d'une PME industrielle en croissance : je fais évoluer Dolibarr pour accompagner les équipes métier (finance, achats, stock, commerce).",
    missions: [
      "Paramétrage de Dolibarr et développement de modules sur mesure (PHP, SQL, hooks, triggers), sans toucher au cœur de l'ERP",
      "Migration vers une nouvelle version majeure de Dolibarr, préparée et testée sur un environnement de recette pour ne pas interrompre l'activité",
      "Mise en place de la facture électronique (Factur-X), en vue de l'obligation de 2027",
      "Automatisation des virements fournisseurs au format SEPA et amélioration du suivi des restes à payer",
      "Gestion d'un environnement multi-sociétés",
      "Déploiements fiables : recette sur clone, Git, GitLab et CI/CD, documentation et démonstrations aux utilisateurs"
    ],
    result: "Des évolutions livrées sans interrompre l'activité, grâce à une recette systématique sur un environnement de test avant chaque mise en production.",
    stack: ["Dolibarr", "PHP", "SQL", "Factur-X", "SEPA", "Git", "GitLab", "CI/CD"]
  },
  {
    id: 2,
    title: "Consultant ERP / AMOA SI",
    company: "RAKOPS SOLUTIONS",
    period: "Mai 2026 – Août 2026",
    context: "Déploiement de l'ERP Odoo pour la gestion interne de l'entreprise.",
    missions: [
      "Recueil et analyse des besoins métier lors d'ateliers avec les utilisateurs, puis rédaction du cahier des charges",
      "Paramétrage des modules Facturation et Ressources Humaines : workflows, droits utilisateurs, données de référence",
      "Conception et exécution des tests fonctionnels, suivi des anomalies jusqu'à leur correction",
      "Interface entre les équipes métier et techniques : traduction des besoins en spécifications claires pour les développeurs"
    ],
    result: "Modules Facturation et Ressources Humaines d'Odoo paramétrés et testés pour la gestion interne de l'entreprise.",
    stack: ["Odoo", "ERP", "AMOA", "Cahier des charges", "Tests fonctionnels"]
  },
  {
    id: 3,
    title: "Assistant Chef de Projet IT",
    company: "RAKOPS SOLUTIONS",
    period: "Mai 2025 – Août 2025",
    location: "Casablanca, Maroc",
    context: "Pilotage d'une application web de gestion des ressources humaines (RH) : gestion des congés, absences, évaluations et fiches de paie. Projet mené en binôme avec le chef de projet au sein d'une équipe de 3 développeurs.",
    missions: [
      "Planification et suivi de sprints Scrum : grooming du backlog, animation des daily meetings, reporting client",
      "Rédaction de spécifications fonctionnelles et techniques à partir des besoins métier",
      "Développement full stack de nouvelles fonctionnalités (Laravel / AngularJS / MySQL)",
      "Mise en place de tests unitaires et procédures d'assurance qualité"
    ],
    result: "Livraison d'un module de gestion des congés et absences dans les délais, adopté par plus de 50 collaborateurs. Taux de satisfaction client élevé et amélioration de la fluidité des processus RH.",
    stack: ["Laravel", "AngularJS", "MySQL", "Jira", "Scrum"]
  },
  {
    id: 4,
    title: "Développeur Full Stack",
    company: "Yulia Group",
    period: "Janvier 2024 – Juin 2024",
    location: "Casablanca, Maroc",
    context: "Développement d'une application web full stack pour la gestion de chantiers : suivi des tâches, planification des équipes, gestion des matériaux et reporting d'avancement.",
    missions: [
      "Développement du frontend avec React.js (architecture de composants, state management)",
      "Conception et implémentation d'API RESTful avec Laravel",
      "Modélisation et optimisation d'une base de données MySQL",
      "Déploiement sur AWS EC2 avec Docker, intégration continue avec Git"
    ],
    result: "Application déployée en production, utilisée par une dizaine de chefs de chantier et conducteurs de travaux. Gain de temps significatif dans le suivi quotidien et la communication entre équipes.",
    stack: ["React.js", "Laravel", "MySQL", "Docker", "AWS EC2", "Git"]
  },
  {
    id: 5,
    title: "Développeur Full Stack",
    company: "RADEETA",
    period: "Avril 2023 – Mai 2023",
    location: "Taza, Maroc",
    context: "Conception et développement d'une application web full stack pour la gestion du parc informatique d'un établissement public (inventaire, affectation, suivi).",
    missions: [
      "Développement full stack avec React.js (frontend) et Laravel (backend API REST)",
      "Modélisation UML / MERISE et implémentation d'une base de données MySQL",
      "Mise en place d'un système d'authentification et de gestion des rôles (admin, technicien, utilisateur)",
      "Participation au cycle complet (dev → tests → recette) et déploiement en environnement de test"
    ],
    result: "Application livrée et validée, réduisant les erreurs de saisie de 80 % et offrant un suivi en temps réel du matériel. En cours d'intégration au SI de l'établissement.",
    stack: ["React.js", "Laravel", "MySQL", "UML", "Git"]
  }
];

export const skills = {
  erp: {
    title: "ERP & Conseil",
    items: [
      "Dolibarr", "Odoo", "ERP", "AMOA", "Analyse des besoins", "Cahier des charges",
      "Spécifications fonctionnelles", "Tests fonctionnels", "Recette", "Facture électronique (Factur-X)",
      "SEPA", "Multi-sociétés", "Formation des utilisateurs", "Documentation"
    ]
  },
  development: {
    title: "Développement & Programmation",
    items: [
      "PHP", "SQL", "Python", "Java", "JavaScript ES6+", "TypeScript", "Kotlin",
      "Laravel", "Symfony", "React.js", "Angular", "Vue.js", "Node.js", "Express.js", "Flask", "Spring Boot",
      "Bootstrap", "Material-UI", "MVC", "API REST", "Microservices", "Client-Serveur", "3-tiers"
    ]
  },
  data: {
    title: "Data & Bases de données",
    items: [
      "MySQL", "PostgreSQL", "Oracle", "SQL Server", "MongoDB", "Firebase", "Airtable",
      "UML/MERISE", "ETL", "Data Pipeline", "Data Warehousing", "Data Lake",
      "Data Cleaning", "Data Transformation", "Power BI", "Tableaux de bord"
    ]
  },
  project: {
    title: "Gestion de projet & DevOps",
    items: [
      "Agile", "Scrum", "Kanban", "Cycle en V", "ITIL", "User stories",
      "Jira", "Confluence", "Trello", "Git", "GitHub", "GitLab",
      "Docker", "CI/CD", "AWS", "Linux", "Tests unitaires/intégration"
    ]
  },
  business: {
    title: "Compétences métier",
    items: [
      "Finance et comptabilité", "Achats", "Stock", "Supply Chain", "CRM", "SIRH", "SAP",
      "Contrôle de gestion", "Analyse financière", "Audit SI", "Digitalisation", "QHSE", "Support utilisateur"
    ]
  }
};

export const education = [
  {
    degree: "Master 2 MIAGE",
    institution: "Université de Bordeaux",
    period: "2026 – 2027",
    location: "Bordeaux, France",
    description: "Méthodes Informatiques Appliquées à la Gestion des Entreprises"
  },
  {
    degree: "Master 1 MIAGE",
    institution: "Université de Bordeaux",
    period: "2025 – 2026",
    location: "Bordeaux, France"
  },
  {
    degree: "Bachelor en Développement d'Applications",
    institution: "ECE Paris – École d'Ingénieurs",
    period: "2024 – 2025",
    location: "Paris, France"
  },
  {
    degree: "Licence Professionnelle – Ingénierie Logicielle",
    institution: "ENSA",
    period: "2023 – 2024",
    location: "Kénitra, Maroc"
  },
  {
    degree: "Technicien Spécialisé – Développement Digital (WFS)",
    institution: "ISTA",
    period: "2021 – 2023",
    location: "Taza, Maroc"
  }
];

export const certifications = [
  "Introduction to ITIL",
  "Building Data Workflows with No-Code Platforms",
  "Airtable Examen Mi Parcours TechAway niv2",
  "PCAP – Certified Associate in Python Programming",
  "JavaScript Essentials – Cisco Networking Academy"
];

export const certificationLinks = [
  "https://simpli-web.app.link/e/IlI4T0aOxXb",
  "https://github.com/AmineCHIBOUB/certificats/blob/main/Building%20Data%20Workflows%20with%20No-Code.pdf",
  "https://github.com/AmineCHIBOUB/certificats/blob/main/Airtable%20Examen%20Mi%20Parcours%20TechAway%20niv2%20(FR).pdf",
  "https://github.com/AmineCHIBOUB/certificats/blob/main/PCAP%20Programming%20Essentials%20in%20Python.pdf",
  "https://github.com/AmineCHIBOUB/certificats/blob/main/JavaScript%20Essentials.pdf"
];

export const languages = [
  { name: "Français", level: "Courant", flag: "🇫🇷" },
  { name: "Anglais", level: "Intermédiaire (B2)", flag: "🇺🇸" },
  { name: "Arabe", level: "Langue maternelle", flag: "🇲🇦" }
];

export const contact = {
  email: "chiboub.mohamed.amine1@gmail.com",
  phone: "",
  location: "Bordeaux, France",
  mobility: "Nouvelle-Aquitaine / Île-de-France / Toulouse"
};
