// ✏️ Tout le contenu du portfolio est dans ce fichier.
export const profile = {
  name: "Grace Darga",
  handle: "@grace",
  title: "Ingénieure Cybersécurité | GRC • Pentest • Réseaux • SOC",
  tagline: "Sécuriser les systèmes. Maîtriser les risques. Garantir la conformité.",
  bio: "Élève ingénieure en dernière année (EMG Rabat), orientée gouvernance, risque et conformité, avec une pratique technique des tests d’intrusion, des réseaux sécurisés et de la détection d’anomalies.",
  status: "Disponible : stage GRC",
  focus: "GRC & Pentest",
  whoami: ["Ingénieure Cybersécurité", "GRC / Pentest / Réseaux"],
  email: "dargagrace1@gmail.com",
  cv: "/cv.pdf", // dépose ton CV dans /public/cv.pdf
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/darga-grace-8ba3a3392/" },
    { label: "GitHub", url: "https://github.com/grace-darga" },
    { label: "TryHackMe", url: "https://tryhackme.com/p/dargagrace1" },
  ],
};

export const projects = [
  { title: "Réseau d’entreprise sécurisé", status: "Terminé", desc: "Segmentation VLAN, ACL avec exception ciblée, NAT/PAT et VPN IPsec site-à-site, validés par des preuves (tunnel actif, paquets chiffrés).", tags: ["Cisco", "VPN IPsec", "ACL", "NAT"] },
  { title: "Détection d’anomalies par logs", status: "Terminé", desc: "Script Python détectant le brute force et le credential spraying dans des logs SSH, avec fenêtre glissante et seuils paramétrables.", tags: ["Python", "SOC", "Analyse de logs"] },
  { title: "Formation TryHackMe", status: "En cours", desc: "22 rooms complétées (réseau, Linux, introduction offensive/défensive, rôle d’analyste SOC), classement Top 25 %.", tags: ["Blue Team", "CTF", "SOC Level 1"], url: "https://tryhackme.com/p/dargagrace1" },
  { title: "MLOps — détection de fraude", status: "Terminé", desc: "Pipeline complet : prétraitement SMOTE, entraînement XGBoost, suivi MLflow, API FastAPI, Docker et CI/CD GitHub Actions.", tags: ["XGBoost", "FastAPI", "Docker", "MLflow"] },
  { title: "DataOps e-commerce", status: "Terminé", desc: "Pipeline dbt + DuckDB en architecture Medallion, avec 49 tests de qualité automatisés.", tags: ["dbt", "DuckDB", "SQL"] },
  { title: "Plateforme de covoiturage", status: "Terminé", desc: "Application web Java EE en couches (DAO, service, servlet), authentification BCrypt, filtres de sécurité et API REST sur base Oracle.", tags: ["Java EE", "JPA", "Oracle", "REST"] },
  { title: "ShopSmart", status: "Terminé", desc: "Application mobile de comparaison de prix : authentification Firebase, catalogue, carte des magasins, liste de courses.", tags: ["Flutter", "Firebase", "Géolocalisation"] },
];

export const education = [
  { year: "2024 — en cours", degree: "Cycle ingénieur — Génie Informatique", school: "EMG — Rabat", note: "Spécialité Cybersécurité & GRC" },
];

export const skills = [
  "Gouvernance, risque et conformité (ISO/IEC 27001, RGPD)",
  "Tests d’intrusion web (Burp Suite, Nmap, OWASP)",
  "Réseaux et infrastructure sécurisés (Cisco)",
  "SOC et détection d’incidents (en cours)",
];

export const training = [
  { name: "Cisco (8 modules)", status: "Terminé" },
  { name: "Cybercriminalité — UNODC", status: "Terminé" },
  { name: "ISO/IEC 27001", status: "En cours" },
  { name: "ISC2 CC", status: "En cours" },
];

export const experience = [
  { period: "Juil. 2026 – Sept. 2026", role: "Stage cybersécurité — tests d’intrusion", org: "IFGICT", points: ["Pentests de deux sites web dans le cadre d’une mission confidentielle", "Utilisation de Burp Suite et de Nmap, méthodologie OWASP", "Analyse de vulnérabilités applicatives"], tags: ["Burp Suite", "Nmap", "Pentest web", "OWASP"] },
  { period: "2025", role: "Stage Data Science", org: "Thot Insights", points: ["Identification des sources de données, collecte et traitement des données"], tags: ["Data", "Python"] },
  { period: "2024", role: "Stage Technicienne Réseaux & Sécurité", org: "Groupe OCP", points: ["Configuration d’OSPF, SSH, DHCP et DNS", "Segmentation VLSM, câblage Ethernet et fibre optique"], tags: ["Cisco", "Réseaux", "Sécurité réseau"] },
];

export const certifications = [
  { issuer: "ISC2", status: "En cours", items: ["CC — Certified in Cybersecurity"] },
  { issuer: "UNODC / Nations Unies", status: "Terminé", items: ["Cybercriminalité"] },
  { issuer: "Cisco", status: "Terminé", items: ["IT Essentials", "Introduction to Cybersecurity", "Network Security", "Introduction to Networks", "Switching, Routing and Wireless Essentials", "Enterprise Networking, Security and Automation", "Python Essentials 1"] },
];
