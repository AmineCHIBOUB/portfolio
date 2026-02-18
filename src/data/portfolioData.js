export const personalInfo = {
  name: "CHIBOUB Amine",
  initials: "AC",
  status: "Étudiant en Master 1 MIAGE",
  titles: [
    "Assistant Chef de Projet IT",
    "Développeur Full Stack",
    "Data Engineering"
  ],
  location: "Bordeaux, France",
  mobility: "Mobile Nouvelle-Aquitaine / Île-de-France / Toulouse",
  email: "chiboub.mohamed.amine1@gmail.com",
  phone: "06 34 40 25 24",
  linkedin: "https://www.linkedin.com/in/mohamed-amine-chiboub/",
  github: "https://github.com/AmineCHIBOUB",
  availability: "Je suis à la recherche d'un stage à partir du premier mai 2026.",
  about: `À la recherche d'un stage de 4 mois à partir de mai 2026, je suis actuellement en Master 1 MIAGE à l'Université de Bordeaux. J'y développe une triple compétence en développement full stack, ingénierie des données et gestion de projet Agile, consolidée au fil de trois expériences de stage.

Convaincu que la performance technique doit répondre à des enjeux métier, je prends plaisir à concevoir des applications robustes et à exploiter la donnée pour éclairer la décision. Rigoureux, force de proposition et attaché au travail en équipe, je m'épanouis dans des environnements collaboratifs où chaque détail compte.

Aujourd'hui, je souhaite mettre cette polyvalence au service d'une entreprise innovante pour contribuer à des projets à fort impact, de la conception au déploiement.`
};

export const projects = [
  {
    id: 1,
    title: "Assistant Chef de Projet IT",
    company: "RAK0PS SOLUTIONS",
    period: "Mai 2025 – Août 2025",
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
    id: 2,
    title: "Développeur Full Stack",
    company: "Yulia Group",
    period: "Février 2024 – Juin 2024",
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
    id: 3,
    title: "Développeur Full Stack",
    company: "RADEETA",
    period: "Avril 2023 – Mai 2023",
    context: "Conception et développement d'une application web full stack pour la gestion du parc informatique d'un établissement public (inventaire, affectation, suivi).",
    missions: [
      "Développement full stack avec React.js (frontend) et Laravel (backend API REST)",
      "Modélisation UML / MERISE et implémentation d'une base de données MySQL",
      "Mise en place d'un système d'authentification et de gestion des rôles (admin, technicien, utilisateur)",
      "Participation au cycle complet (dev → tests → recette) et déploiement en environnement de test"
    ],
    result: "Application livrée et validée, réduisant les erreurs de saisie de 80 % et offrant un suivi en temps réel du matériel. En cours d'intégration au SI de l'établissement.",
    stack: ["React.js", "Laravel", "MySQL", "UML", "Git"]
  }
];

export const skills = {
  development: {
    title: "💻 Développement & Programmation",
    items: [
      "Java", "Python", "PHP", "JavaScript ES6+", "TypeScript", "Kotlin",
      "React.js", "Angular", "Vue.js", "Bootstrap", "Material-UI",
      "Laravel", "Symfony", "Node.js", "Express.js", "Flask", "Spring Boot",
      "MVC", "API REST", "Microservices", "Client-Serveur", "3-tiers"
    ]
  },
  data: {
    title: "📊 Data Engineering & Bases de données",
    items: [
      "ETL", "Data Pipeline", "Data Warehousing", "Data Lake", "UML/MERISE",
      "Power BI", "Tableaux de bord", "Data Cleaning", "Data Transformation",
      "MySQL", "PostgreSQL", "Oracle", "SQL Server",
      "MongoDB", "Firebase", "Airtable"
    ]
  },
  project: {
    title: "⚙️ Gestion de projet, DevOps & Réseaux",
    items: [
      "Agile", "Scrum", "Sprint", "Daily", "Kanban", "Cycle en V",
      "Jira", "Confluence", "Trello", "GitHub", "GitLab",
      "Docker", "CI/CD", "AWS", "Linux", "Tests unitaires/intégration",
      "TCP/UDP", "HTTP/HTTPS", "API REST", "Client-Serveur", "Java NIO"
    ]
  },
  business: {
    title: "🧠 Compétences métier & Management",
    items: [
      "ERP", "SAP", "CRM", "SIRH", "Systèmes comptables/financiers",
      "Contrôle de gestion", "Analyse financière", "Marketing digital", "GRH", "Supply Chain",
      "Audit SI", "Digitalisation", "QHSE", "Support utilisateur", "Formation"
    ]
  }
};

export const education = [
  {
    degree: "Master 1 MIAGE",
    institution: "Université de Bordeaux",
    period: "2025 – aujourd'hui",
    location: "Bordeaux, France",
    description: "Méthodes Informatiques Appliquées à la Gestion des Entreprises"
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
  phone: "06 34 40 25 24",
  location: "Bordeaux, France",
  mobility: "Nouvelle-Aquitaine / Île-de-France / Toulouse"
};