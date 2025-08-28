import aboutMD from './about.md?raw';
import facts1MD from './facts-1.md?raw';
import facts2MD from './facts-2.md?raw';
import goalsMD from './goals.md?raw';
import partnerMD from './partner.md?raw';
import journeyMD from './journey.md?raw'
import impressumMD from './impressum.md?raw'
import privacyPolicyMD from './privacyPolicy.md?raw'
import teamJS from "./team.js";
import articlesJS from './articles.js';

const de = {
  menu: {
    about: "Über das Projekt",
    goals: "Projektziele",
    facts: "Projektfakten",
    usecases: "Anwendungsfälle",
    partner: "Projektpartner",
    news: "Neuigkeiten",
    contact: "Kontakt"
  },
  slogan: {
    prehab: "Prehabilitation",
    to: " bis ",
    rehab: "Rehabilitation",
    tagline: ": Ein nahtloser, digital unterstützter Versorgungspfad",
    keywords: "Integriert. Digital. Individuell."
  },
  about: aboutMD,
  facts: {
    1: facts1MD,
    2: facts2MD
  },
  journey: journeyMD,
  goals: goalsMD,
  usecases: {
    heading: "Anwendungsfälle",
    desc: "Das Projekt umfasst drei medizinische Anwendungsfälle, um die Nutzerfreundlichkeit und Akzeptanz einer digital unterstützten, integrativen Prehabilitation zu bewerten und die medizinische Wirksamkeit für klinische Folgestudien abzuschätzen.",
    abdominal: {
      title: "Viszeralchirurgie",
      desc: "Chirurgische Eingriffe an den inneren Organen des Bauches, z.B. Leber- und Gallenblase."
    },
    knee: {
      title: "Kniegelenksersatz",
      desc: "Implantation eines künstlichen Kniegelenks bei schweren Arthrosen oder Gelenkschäden."
    },
    cardiac: {
      title: "Herzchirurgie",
      desc: "Operationen am Herzen, z.B. Bypass-OPs, Klappenersatz oder Korrektur angeborener Herzfehler."
    }
  },
  partner: {
    desc: partnerMD,
    research: "Forschung",
    researchClinics: "Forschungskliniken",
    clinics: "Kliniken",
    industry: "Wirtschaft"
  },
  team: teamJS,
  contact: {
    heading: "Kontakt",
    description: "Wenn Sie Fragen, Anmerkungen haben oder am Projekt mitwirken möchten, können Sie sich gerne jederzeit an uns wenden.",
    subheading: "Ludwig Boltzmann Institut für Digitale Gesundheit und Prävention",
    address: "Lindhofstr. 22, 5020 Salzburg, Österreich",
    phone: "Telefon",
    email: "E-Mail",
  },
  news: {
    articles: articlesJS,
    more: "Mehr auf LinkedIn lesen",
    video: "Video ansehen"
  },
  impressum: impressumMD,
  privacyPolicy: privacyPolicyMD,
  footer: {
    impressum: "Impressum",
    privacy: "Datenschutzerklärung"
  }
};

export default de;