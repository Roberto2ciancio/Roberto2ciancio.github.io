import type { ImageKey } from '../assets-src'

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
  bio:
    "Roberto Ciancio è uno sviluppatore fullstack junior a Roma: dal supporto IT sul campo al codice, con l'obiettivo di completare la laurea in Informatica e proseguire con una magistrale in Cybersecurity.",
  facts: [
    { label: 'Sede', value: 'Roma (RM), Italia' },
    { label: 'Formazione', value: 'EPICODE, 2025' },
    { label: 'Laurea', value: 'In corso' },
  ],
}

export const experience = [
  {
    role: 'Supporto Tecnico',
    place: 'Comando Generale dei Carabinieri',
    period: 'giu 2026 – oggi',
    description:
      "Gestione dei ticket di assistenza e supporto agli utenti finali, configurazione hardware e software delle postazioni, collaudi e stress test dei dispositivi prima della distribuzione, coordinamento con il team Intellitronika per la risoluzione di problemi on-site.",
    image: 'circuitMacro' as ImageKey,
    imageAlt: 'Primo piano di un microcontrollore su circuito stampato',
  },
  {
    role: "Tecnico dell'Assistenza",
    place: 'Intellitronika S.r.l.',
    period: 'nov 2025 – oggi',
    description:
      'Assistenza tecnica hardware e software su postazioni client e server, gestione e tracciamento dei ticket su JIRA, installazione e manutenzione di sistemi Windows, cablaggi e apparati di rete, supporto Help Desk di primo e secondo livello.',
    image: 'switchAndNest' as ImageKey,
    imageAlt: 'Switch di rete avvolto in un nido di cavi Cat5',
  },
  {
    role: 'IT Promoter',
    place: 'Pardgroup',
    period: '2024–2025',
    description:
      'Supporto e promozione di prodotti Google e Microsoft presso i punti vendita, consulenza tecnica ai clienti e demo di prodotto, sviluppo di capacità commerciali e comunicative in contesto retail.',
    image: 'electronicsShop' as ImageKey,
    imageAlt: 'Corsia di un negozio di elettronica con scaffali di componenti',
  },
  {
    role: 'Tecnico Informatico',
    place: 'C&D PC Solution',
    period: 'mag–ott 2023',
    description:
      'Riparazione di PC fissi e portatili, risoluzione di problemi tecnici e assistenza on-site.',
    image: 'disassembledLaptop' as ImageKey,
    imageAlt: 'Un portatile smontato con i componenti interni a vista',
  },
]

export const skills = [
  { label: 'Frontend', detail: 'React · TypeScript · Redux · SASS' },
  { label: 'Backend', detail: 'Java · Spring · PostgreSQL' },
  { label: 'DevOps', detail: 'Git · GitHub Actions · CI/CD' },
  { label: 'IT & supporto', detail: 'JIRA · Help Desk · Reti' },
]

export const aiCertifications = [
  {
    date: '27 apr 2026',
    title: 'AI Capabilities and Limitations',
    verifyUrl: 'https://verify.skilljar.com/c/jvr8dn5dtvpu',
  },
  {
    date: '27 apr 2026',
    title: 'Introduction to Agent Skills',
    verifyUrl: 'https://verify.skilljar.com/c/3e3qj2xqizk4',
  },
  {
    date: '27 apr 2026',
    title: 'AI Fluency for Nonprofits',
    verifyUrl: 'https://verify.skilljar.com/c/f7ja79uy69gh',
  },
  {
    date: '27 apr 2026',
    title: 'Teaching AI Fluency',
    verifyUrl: 'https://verify.skilljar.com/c/khxuuss2nzdk',
  },
  {
    date: '27 apr 2026',
    title: 'Introduction to Subagents',
    verifyUrl: 'https://verify.skilljar.com/c/daczrvoif3oe',
  },
  {
    date: '27 apr 2026',
    title: 'Claude on Google Cloud',
    verifyUrl: 'https://verify.skilljar.com/c/4fkxdfzorf58',
  },
  {
    date: '24 apr 2026',
    title: 'Introduction to Model Context Protocol',
    verifyUrl: 'https://verify.skilljar.com/c/grtb69z6x8b2',
  },
  {
    date: '24 apr 2026',
    title: 'AI Fluency for Educators',
    verifyUrl: 'https://verify.skilljar.com/c/ekuyyu2rs9tv',
  },
  {
    date: '23 apr 2026',
    title: 'AI Fluency: Framework & Foundations',
    verifyUrl: 'https://verify.skilljar.com/c/twkunrnm5goq',
  },
  {
    date: '23 apr 2026',
    title: 'Building with the Claude API',
    verifyUrl: 'https://verify.skilljar.com/c/y9rtt6hmgh37',
  },
  {
    date: '17 apr 2026',
    title: 'Introduction to Claude Cowork',
    verifyUrl: 'https://verify.skilljar.com/c/9ri4k78747gf',
  },
  {
    date: '17 apr 2026',
    title: 'Claude Code in Action',
    verifyUrl: 'https://verify.skilljar.com/c/c5c3g38ud95x',
  },
  {
    date: '15 apr 2026',
    title: 'Claude Code 101',
    verifyUrl: 'https://verify.skilljar.com/c/k6hu89o4crnm',
  },
  {
    date: '9 apr 2026',
    title: 'Claude 101',
    verifyUrl: 'https://verify.skilljar.com/c/jscouhoy47ws',
  },
]

export const fullstackDiploma = {
  title: 'Full-Stack Developer',
  issuer: 'EPICODE',
  date: 'agosto 2025',
  verifyUrl: 'https://certificates.epicode.com/0d0abddf-03fe-4b7c-81aa-7f72ea2b174b',
  pdfUrl: '/Certificato_FullStack_EPICODE.pdf',
}

export const fullstackModules = [
  {
    date: '07/02/2025',
    module: 'M1',
    track: 'Frontend',
    skills: 'CSS3, HTML5',
    verifyUrl: 'https://certificates.epicode.com/9c01f0fc-0d84-4d4b-b970-22767951d5fd',
  },
  {
    date: '14/02/2025',
    module: 'M2',
    track: 'Frontend',
    skills: 'Functions, Objects, Arrays, Conditionals, Loops, Variables',
    verifyUrl: 'https://certificates.epicode.com/a95dfb92-efad-4b47-b308-245b3f1be1e9',
  },
  {
    date: '21/02/2025',
    module: 'M3',
    track: 'Frontend',
    skills: 'HTML Forms, BOM, ES6, DOM, JavaScript',
    verifyUrl: 'https://certificates.epicode.com/cb515890-db7f-4bd4-98a8-c10525016ee5',
  },
  {
    date: '07/03/2025',
    module: 'M4',
    track: 'Frontend',
    skills: 'Animations, CSS3, HTML5, Flexbox',
    verifyUrl: 'https://certificates.epicode.com/f0210533-6b97-459c-b77a-46c7d8a375ff',
  },
  {
    date: '14/03/2025',
    module: 'M5',
    track: 'Frontend',
    skills: 'Sass, Bootstrap',
    verifyUrl: 'https://certificates.epicode.com/322899eb-e75e-4c8a-a49a-04c69f7dc5d1',
  },
  {
    date: '21/03/2025',
    module: 'M6',
    track: 'Frontend',
    skills: 'OOP, AJAX, Promises, Fetch, CRUD, Async/await',
    verifyUrl: 'https://certificates.epicode.com/2a29fa47-1149-49bc-9bbf-7179a74d9da2',
  },
  {
    date: '04/04/2025',
    module: 'M1',
    track: 'React',
    skills: 'State Management, Component Lifecycle, SPA, React',
    verifyUrl: 'https://certificates.epicode.com/d7674548-6625-425a-9508-a06fd2f9b9ac',
  },
  {
    date: '11/04/2025',
    module: 'M2',
    track: 'React',
    skills: 'React Testing, State Elevation, React Router, Redux',
    verifyUrl: 'https://certificates.epicode.com/c265b2fc-e120-4d2c-bd1d-ed737d6d70e6',
  },
  {
    date: '18/04/2025',
    module: 'M3',
    track: 'React',
    skills: 'Reducers, Redux, TypeScript',
    verifyUrl: 'https://certificates.epicode.com/76f14b29-594a-45f5-bb0c-17e590cfcd29',
  },
  {
    date: '09/05/2025',
    module: 'M1',
    track: 'Java',
    skills: 'OOP, Java',
    verifyUrl: 'https://certificates.epicode.com/4595a707-5f8d-4a74-8e49-4dfbfb5dca56',
  },
  {
    date: '16/05/2025',
    module: 'M2',
    track: 'Java',
    skills: 'Collections, Java Streams & Lambda, File Handling',
    verifyUrl: 'https://certificates.epicode.com/1ac3e8a6-caa3-47f1-a351-420fd0703471',
  },
  {
    date: '24/05/2025',
    module: 'M3',
    track: 'Java',
    skills: 'JPA, PostgreSQL, SQL',
    verifyUrl: 'https://certificates.epicode.com/c944f6c6-c886-4d76-a738-62f944bfd07b',
  },
  {
    date: '08/06/2025',
    module: 'M4',
    track: 'Java',
    skills: 'Spring Framework, IoC & Dependency Injection, Spring Data, JUnit',
    verifyUrl: 'https://certificates.epicode.com/09fe7129-6731-45ed-81ea-9a9a4ab531ea',
  },
  {
    date: '22/06/2025',
    module: 'M6',
    track: 'Java',
    skills: 'Spring Security, JWT, Password Hashing, Design Patterns, Advanced Git',
    verifyUrl: 'https://certificates.epicode.com/373d111c-fa7a-4551-aa3a-08844ceef10f',
  },
  {
    date: '10/07/2025',
    module: 'M10',
    track: 'Extra',
    skills: 'Agile, Project Management, Scrum',
    verifyUrl: 'https://certificates.epicode.com/ab53c146-4820-419a-89ff-8f7c5206e5a7',
  },
  {
    date: '04/08/2025',
    module: null,
    track: 'Extra',
    skills: 'Python Continuous Learning',
    verifyUrl: 'https://certificates.epicode.com/7477e266-77e2-40d7-be86-a90563060feb',
  },
]

export const contactRows = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copy: profile.email },
  { label: 'Telefono', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, copy: profile.phone },
  { label: 'LinkedIn', value: profile.linkedin, href: profile.linkedinUrl, copy: null },
  { label: 'GitHub', value: profile.github, href: profile.githubUrl, copy: null },
]
