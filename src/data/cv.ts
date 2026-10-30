export const profile = {
  name: 'Roberto Ciancio',
  role: 'Junior Fullstack Developer',
  city: 'Roma, Italia',
  email: 'ciancioroberto181@gmail.com',
  phone: '+39 328 978 1813',
  linkedin: 'linkedin.com/in/roberto-ciancio',
  linkedinUrl: 'https://linkedin.com/in/roberto-ciancio',
  github: 'github.com/Roberto2ciancio',
  githubUrl: 'https://github.com/Roberto2ciancio',
  cvFile: '/Roberto_Ciancio_CV.pdf',
}

export const intro = {
  paragraph:
    "Sviluppatore fullstack junior con formazione intensiva EPICODE ed esperienza sul campo nel supporto IT. Unisco competenze frontend (React, TypeScript) e backend (Java, Spring) a capacità pratiche maturate tra ticket, cablaggi e postazioni di lavoro. Attualmente impegnato in progetti IT per il Comando Generale dei Carabinieri, cerco di crescere contribuendo a prodotti software reali.",
  facts: [
    { label: 'Sede', value: 'Roma (RM), Italia' },
    { label: 'Ruolo', value: 'Junior Fullstack Developer' },
    { label: 'Lingue', value: 'Italiano · Inglese B1' },
  ],
  education: [
    { name: 'Laurea in Informatica Aziende Digitali', value: 'In corso' },
    { name: 'Master Full Stack Developer', value: '2025' },
    { name: 'Diploma di Scienze Umane', value: '2023' },
  ],
  softSkills: [
    'Problem solving',
    'Teamwork e comunicazione',
    'Project management',
    'Pianificazione e organizzazione',
    'Attenzione ai dettagli',
  ],
}

export const experience = [
  {
    role: 'Supporto Tecnico',
    place: 'Comando Generale dei Carabinieri · per conto di Intellitronika',
    period: 'giu 2026 – oggi',
    description:
      "Gestione dei ticket di assistenza e supporto agli utenti finali, configurazione hardware e software delle postazioni, collaudi e stress test dei dispositivi prima della distribuzione, coordinamento con il team Intellitronika per la risoluzione di problemi on-site.",
  },
  {
    role: "Tecnico dell'Assistenza",
    place: 'Intellitronika S.r.l.',
    period: 'nov 2025 – oggi',
    description:
      'Assistenza tecnica hardware e software su postazioni client e server, gestione e tracciamento dei ticket su JIRA, installazione e manutenzione di sistemi Windows, cablaggi e apparati di rete, supporto Help Desk di primo e secondo livello.',
  },
  {
    role: 'IT Promoter',
    place: 'Pardgroup',
    period: '2024–2025',
    description:
      'Supporto e promozione di prodotti Google e Microsoft presso i punti vendita, consulenza tecnica ai clienti e demo di prodotto, sviluppo di capacità commerciali e comunicative in contesto retail.',
  },
  {
    role: 'Tecnico Informatico',
    place: 'C&D PC Solution',
    period: 'mag–ott 2023',
    description:
      'Riparazione di PC fissi e portatili, risoluzione di problemi tecnici e assistenza on-site.',
  },
]

export const skills = [
  { label: 'Frontend', detail: 'React · TypeScript · Redux · SASS' },
  { label: 'Backend', detail: 'Java · Spring · PostgreSQL' },
  { label: 'DevOps', detail: 'Git · GitHub Actions · CI/CD' },
  { label: 'IT & supporto', detail: 'JIRA · Help Desk · Reti' },
]

export const contactRows = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copy: profile.email },
  { label: 'Telefono', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, copy: profile.phone },
  { label: 'LinkedIn', value: profile.linkedin, href: profile.linkedinUrl, copy: null },
  { label: 'GitHub', value: profile.github, href: profile.githubUrl, copy: null },
]
