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
  // Mettre le chemin du PDF (ex. "/cv-amine-chiboub.pdf" dans public/) pour afficher le bouton
  cv: "",
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
    stack: ["Dolibarr", "ERP", "PHP", "SQL", "Analyse des besoins", "Git", "GitLab"]
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
    stack: ["Odoo", "ERP", "AMOA", "Analyse des besoins", "Tests fonctionnels"]
  },
  {
    id: 3,
    title: "Assistant chef de projet IT",
    company: "RAKOPS SOLUTIONS",
    period: "Mai 2025 – Août 2025",
    location: "Casablanca, Maroc",
    context: "Pilotage d'un projet de développement d'application métier en méthode Agile.",
    missions: [
      "Animation du projet en Scrum : planification des sprints, backlog, réunions quotidiennes et rétrospectives",
      "Rédaction de plus de 30 user stories et spécifications fonctionnelles à partir d'ateliers utilisateurs",
      "Participation au développement de l'application (Laravel, Angular, MySQL, API REST)",
      "Mise en place de tests unitaires et rédaction de la documentation technique et utilisateur",
      "Formation de plus de 10 utilisateurs à la prise en main de l'outil"
    ],
    stack: ["Gestion de projet", "Scrum", "User stories", "Spécifications fonctionnelles", "Formation des utilisateurs"]
  },
  {
    id: 4,
    title: "Développeur Full Stack",
    company: "Yulia Group",
    period: "Janvier 2024 – Juin 2024",
    location: "Casablanca, Maroc",
    context: "Conception d'une application web de gestion de chantiers.",
    missions: [
      "Développement de l'application : React.js côté interface, Laravel côté serveur, MySQL pour les données",
      "Conception du modèle de données et optimisation des requêtes",
      "Création d'API REST sécurisées, documentées avec Postman",
      "Interfaces adaptées à l'ordinateur, la tablette et le mobile",
      "Travail en équipe Agile (Jira, Miro) et déploiement sur AWS avec Docker et Git"
    ],
    stack: ["Laravel", "React.js", "MySQL", "API REST", "Docker"]
  },
  {
    id: 5,
    title: "Développeur Web Full Stack",
    company: "RADEETA",
    period: "Avril 2023 – Mai 2023",
    location: "Taza, Maroc",
    context: "Développement d'une application de gestion du matériel informatique.",
    missions: [
      "Analyse du besoin et modélisation de la base de données avec UML et MERISE",
      "Développement de l'application avec Laravel (PHP) et React.js",
      "Livraison d'une application fonctionnelle et utilisée en production"
    ],
    stack: ["PHP", "Laravel", "MySQL", "UML", "MERISE"]
  }
];

// Compétences issues des expériences professionnelles
export const skills = {
  erp: {
    title: "ERP & Conseil",
    items: [
      "Dolibarr", "Odoo", "ERP", "AMOA", "Analyse des besoins", "Cahier des charges",
      "Spécifications fonctionnelles", "Tests fonctionnels", "Recette",
      "Facture électronique (Factur-X)", "Virements SEPA", "Multi-sociétés"
    ]
  },
  project: {
    title: "Gestion de projet",
    items: [
      "Gestion de projet", "Scrum", "Méthodes agiles", "User stories", "Ateliers utilisateurs",
      "Documentation", "Formation des utilisateurs", "ITIL", "Jira", "Miro"
    ]
  },
  development: {
    title: "Développement",
    items: [
      "PHP", "SQL", "Laravel", "React.js", "Angular", "API REST", "Python",
      "Hooks et triggers Dolibarr", "Tests unitaires"
    ]
  },
  data: {
    title: "Données & DevOps",
    items: [
      "MySQL", "UML", "MERISE", "Git", "GitLab", "CI/CD", "Docker", "AWS", "Postman"
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

// Chiffres clés (issus du profil LinkedIn)
export const stats = [
  { value: 5, suffix: "", label: "expériences professionnelles" },
  { value: 2, suffix: "", label: "ERP : Dolibarr et Odoo" },
  { value: 30, suffix: "+", label: "user stories rédigées" },
  { value: 10, suffix: "+", label: "utilisateurs formés" }
];

// Méthode de travail sur un projet ERP
export const method = [
  { step: "Analyse", text: "Ateliers avec les équipes métier, recueil des besoins et cahier des charges" },
  { step: "Paramétrage", text: "Configuration de l'ERP : workflows, droits utilisateurs, données de référence" },
  { step: "Développement", text: "Modules sur mesure en PHP et SQL, sans toucher au cœur de l'ERP" },
  { step: "Recette", text: "Tests fonctionnels sur un environnement de test avant chaque mise en production" },
  { step: "Formation", text: "Documentation, démonstrations et accompagnement des utilisateurs" }
];

// Projets personnels publiés sur GitHub
export const realisations = [
  {
    title: "Gestion de chantier",
    description: "Application de gestion de chantiers : équipes, affectations, pointage, congés et habilitations, avec une API sécurisée par jeton JWT.",
    stack: ["Laravel", "React", "MySQL", "JWT"],
    repo: "https://github.com/AmineCHIBOUB/gestion-chantier"
  },
  {
    title: "Gestion RH",
    description: "Application RH avec espaces administrateur, RH et employé : congés, pointage, bulletins de paie en PDF et rapports.",
    stack: ["Laravel", "Angular", "MySQL", "Sanctum"],
    repo: "https://github.com/AmineCHIBOUB/-gestion-RH-"
  },
  {
    title: "Portfolio",
    description: "Ce site : présentation de mon parcours, déployé automatiquement sur Netlify à chaque mise à jour.",
    stack: ["React", "Vite", "Netlify"],
    repo: "https://github.com/AmineCHIBOUB/portfolio"
  }
];
