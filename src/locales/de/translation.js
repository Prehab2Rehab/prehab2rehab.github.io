import aboutMD from './about.md?raw';
import facts1MD from './facts-1.md?raw';
import facts2MD from './facts-2.md?raw';
import goalsMD from './goals.md?raw';
import partnerMD from './partner.md?raw';
import journeyMD from './journey.md?raw'
import impressumMD from './impressum.md?raw'
import privacyPolicyMD from './privacyPolicy.md?raw'

const de = {
  menu: {
    about: "Über das Projekt",
    goals: "Projektziele",
    facts: "Projektfakten",
    usecases: "Anwendungsfälle",
    partner: "Projektpartner",
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
  team: {
    title: "Projektteam",
    LBI_DHP: {
      name: "LBI für Digitale Gesundheit und Prävention",
      imgkey: "01-LBI-DHP",
      people: [
        { name: "Jan Smeddinck", role: "Projektleitung ", image: "Jan-Smeddinck.jpg", rights: "" },
        { name: "Daniela Wurhofer", role: "Leitung Arbeitspaket 2: Stakeholdereinbindung", image: "Daniela-Wurhofer.jpg", rights: "" },
        { name: "Andreas Stainer-Hochgatterer", role: "Projektadministration", image: "Andreas-Stainer-Hochgatterer.jpg", rights: "" },
        { name: "David Haag", role: "Forschung und Entwicklung", image: "David-Haag.jpg", rights: "" },
        { name: "Daria Kolosovskaia", role: "Administration, Kommunikation", image: "Daria-Kolosovskaia.jpg", rights: "" },
        { name: "Eva-Maria Krah", role: "Forschung und Entwicklung", image: "Eva-Maria-Krah.jpg", rights: "" },

      ]
    },
    LBI_RR: {
      name: "LBI for Rehabilitation Research",
      imgkey: "03-LBI-RR",
      people: [
        { name: "Vincent Grote", role: "", image: "Vincent-Grote.jpg", rights: "© LBG / Nachtschatt" },
        { name: "Stefan Löfler", role: "", image: "Stefan-Loefler.jpg", rights: "© LBG / Nachtschatt" },
        { name: "Ferdinand Prüfer", role: "", image: "Ferdinand-Pruefer.jpg", rights: "© Julia Dragosits" },
        { name: "Chiara Vetrano", role: "", image: "Chiara-Vetrano.jpg", rights: "© Vetrano" }
      ]
    },
    PMU: {
      name: "Paracelsus Medizinische Privatuniversität",
      imgkey: "04-PMU",
      people: [
        { name: "Gunnar Treff", role: "Leitung Arbeitspaket 4: Machbarkeitsstudien", image: "Gunnar-Treff.jpg", rights: "" },
        { name: "Fabian Leinauer", role: "", image: "Fabian-Leinauer.jpg", rights: "" }
      ]
    },
    SALK: {
      name: "Gemeinnützige Salzburger Landeskliniken",
      imgkey: "07-SALK",
      people: [
        { name: "Clemens Schmutzhart", role: "", image: "Clemens-Schmutzhart.jpg", rights: "" },
        { name: "Josef Niebauer", role: "", image: "Josef-Niebauer.jpg", rights: "" }
      ]
    },
    ALP: {
      name: "Alphaport OG",
      imgkey: "08-ALP",
      people: [
        { name: "Daniel Antlinger", role: "Projektmanagement, Softwareentwicklung", image: "Daniel-Antlinger.png", rights: "" },
        { name: "Christian Litzlbauer", role: "Projektmanagement, Softwareentwicklung", image: "Christian-Litzlbauer.png", rights: "" },
        { name: "Thomas Schey", role: "Softwareentwicklung", image: "Thomas-Schey.png", rights: "" },
        { name: "Daniel Trabe", role: "Softwareentwicklung", image: "Daniel-Trabe.png", rights: "" },
        { name: "Rebekka Schönauer", role: "Softwareentwicklung", image: "Rebekka-Schoenauer.png", rights: "" },
        { name: "Amelie Rinnerthaler", role: "Design, Klick-Prototypen", image: "Amelie-Rinnerthaler.jpg", rights: "" },
        { name: "Andreas Steiner", role: "Softwareentwicklung", image: "Andreas-Steiner.png", rights: "" }
      ]
    },
    BV: {
      name: "Medizinisches Zentrum Bad Vigaun",
      imgkey: "09-BV",
      people: [
        { name: "Josef Sturm", role: "", image: "Josef-Sturm.jpg", rights: "" }
      ]
    },
    RL: {
      name: "Redlink GmbH",
      imgkey: "11-RL",
      people: [
        { name: "Andreas Gruber", role: "", image: "Andreas-Gruber.webp", rights: "" },
        { name: "Jakob Frank", role: "Softwareentwicklung", image: "Jakob-Frank.webp", rights: "" },
        { name: "Jan Cortiel", role: "Softwareentwicklung", image: "Jan-Cortiel.webp", rights: "" },
        { name: "Markus Ebner", role: "Softwareentwicklung", image: "Markus-Ebner.webp", rights: "" },
        { name: "Thomas Kurz", role: "", image: "Thomas-Kurz.webp", rights: "" }
      ]
    },
    RDX: {
      name: "Redox Interactive",
      imgkey: "13-RDX",
      people: [
        { name: "Philipp Götz", role: "Projektmanagement, Softwareentwicklung", image: "Philipp-Goetz.jpg", rights: "" }
      ]
    }
  },
  contact: {
    heading: "Kontakt",
    description: "Wenn Sie Fragen, Anmerkungen haben oder am Projekt mitwirken möchten, können Sie sich gerne jederzeit an uns wenden.",
    subheading: "Ludwig Boltzmann Institut für Digitale Gesundheit und Prävention",
    address: "Lindhofstr. 22, 5020 Salzburg, Österreich",
    phone: "Telefon",
    email: "E-Mail",
  },
  impressum: impressumMD,
  privacyPolicy: privacyPolicyMD,
  footer: {
    impressum: "Impressum",
    privacy: "Datenschutzerklärung"
  }
};

export default de;