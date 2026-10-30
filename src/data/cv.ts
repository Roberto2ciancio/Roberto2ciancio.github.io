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

export const certifications = [
  {
    year: '27 apr 2026',
    title: 'AI Capabilities and Limitations',
    body: 'Anthropic Academy',
    verifyUrl: 'https://verify.skilljar.com/c/jvr8dn5dtvpu',
  },
  {
    year: '27 apr 2026',
    title: 'Introduction to Agent Skills',
    body: 'Anthropic Academy',
    verifyUrl: 'https://verify.skilljar.com/c/3e3qj2xqizk4',
  },
  {
    year: '27 apr 2026',
    title: 'AI Fluency for Nonprofits',
    body: 'Anthropic Academy',
    verifyUrl: 'https://verify.skilljar.com/c/f7ja79uy69gh',
  },
  {
    year: '27 apr 2026',
    title: 'Teaching AI Fluency',
    body: 'Anthropic Academy',
    verifyUrl: 'https://verify.skilljar.com/c/khxuuss2nzdk',
  },
  {
    year: '27 apr 2026',
    title: 'Introduction to Subagents',
    body: 'Anthropic Academy',
    verifyUrl: 'https://verify.skilljar.com/c/daczrvoif3oe',
  },
  {
    year: '27 apr 2026',
    title: 'Claude on Google Cloud',
    body: 'Anthropic Academy',
    verifyUrl: 'https://verify.skilljar.com/c/4fkxdfzorf58',
  },
  {
    year: '24 apr 2026',
    title: 'Introduction to Model Context Protocol',
    body: 'Anthropic Academy',
    verifyUrl: 'https://verify.skilljar.com/c/grtb69z6x8b2',
  },
  {
    year: '24 apr 2026',
    title: 'AI Fluency for Educators',
    body: 'Anthropic Academy',
    verifyUrl: 'https://verify.skilljar.com/c/ekuyyu2rs9tv',
  },
  {
    year: '23 apr 2026',
    title: 'AI Fluency: Framework & Foundations',
    body: 'Anthropic Academy',
    verifyUrl: 'https://verify.skilljar.com/c/twkunrnm5goq',
  },
  {
    year: '23 apr 2026',
    title: 'Building with the Claude API',
    body: 'Anthropic Academy',
    verifyUrl: 'https://verify.skilljar.com/c/y9rtt6hmgh37',
  },
  {
    year: '17 apr 2026',
    title: 'Introduction to Claude Cowork',
    body: 'Anthropic Academy',
    verifyUrl: 'https://verify.skilljar.com/c/9ri4k78747gf',
  },
  {
    year: '17 apr 2026',
    title: 'Claude Code in Action',
    body: 'Anthropic Academy',
    verifyUrl: 'https://verify.skilljar.com/c/c5c3g38ud95x',
  },
  {
    year: '15 apr 2026',
    title: 'Claude Code 101',
    body: 'Anthropic Academy',
    verifyUrl: 'https://verify.skilljar.com/c/k6hu89o4crnm',
  },
  {
    year: '9 apr 2026',
    title: 'Claude 101',
    body: 'Anthropic Academy',
    verifyUrl: 'https://verify.skilljar.com/c/jscouhoy47ws',
  },
  {
    year: '2025',
    title: 'Full-Stack Developer',
    body: 'EPICODE',
    verifyUrl: 'https://certificates.epicode.com/0d0abddf-03fe-4b7c-81aa-7f72ea2b174b',
  },
]

export const contactRows = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copy: profile.email },
  { label: 'Telefono', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, copy: profile.phone },
  { label: 'LinkedIn', value: profile.linkedin, href: profile.linkedinUrl, copy: null },
  { label: 'GitHub', value: profile.github, href: profile.githubUrl, copy: null },
]
