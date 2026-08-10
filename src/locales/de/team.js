
import teamAllMD from './team-all.md?raw'

const team = {
  title: "Projektteam",
  LBI_DHP: {
    name: "LBI für Digitale Gesundheit und Prävention",
    imgkey: "01-LBI-DHP",
    people: [
      { name: "Daniela Wurhofer", role: "Projektleitung und Leitung Arbeitspaket 2: Stakeholdereinbindung", image: "Daniela-Wurhofer.jpg", rights: "" },
      { name: "Andreas Stainer-Hochgatterer", role: "Projektadministration", image: "Andreas-Stainer-Hochgatterer.jpg", rights: "" },
      { name: "Daria Kolosovskaia", role: "Forschung und Kommunikation", image: "Daria-Kolosovskaia-1.jpg", rights: "" },
      { name: "Eva-Maria Krah", role: "Forschung und Entwicklung", image: "Eva-Maria-Krah.jpeg", rights: "" },
      { name: "David Haag", role: "Forschung und Entwicklung", image: "David-Haag.jpg", rights: "" },
      { name: "Jan Smeddinck", role: "Beratende Funktion", image: "Jan-Smeddinck.jpg", rights: "" },


    ]
  },
  LBI_RR: {
    name: "LBI for Rehabilitation Research",
    imgkey: "02-LBI-RR",
    people: [
      { name: "Vincent Grote", role: "", image: "Vincent-Grote.jpg", rights: "© LBG / Nachtschatt" },
      { name: "Stefan Löfler", role: "", image: "Stefan-Loefler.jpg", rights: "© LBG / Nachtschatt" },
      { name: "Ferdinand Prüfer", role: "", image: "Ferdinand-Pruefer.jpg", rights: "© Julia Dragosits" },
      { name: "Chiara Vetrano", role: "", image: "Chiara-Vetrano.jpg", rights: "© Vetrano" },
      { name: "Spela Matko", role: "", image: "Spela-Matko.jpg", rights: "© Julia Dragosits" },
      { name: "Stefanie Hochenwarter", role: "", image: "Stefanie-Hochenwarter.jpeg", rights: "" }
    ]
  },
  LBI_AR: {
    name: "LBI für Arthritis und Rehabilitation",
    imgkey: "03-LBI-AR",
    people: [
      { name: "Bibiane Steinecker-Frohnwieser", role: "", image: "Bibiane-Steinecker-Frohnwieser.jpg", rights: "" }
    ]
  },
  PMU: {
    name: "Paracelsus Medizinische Privatuniversität",
    imgkey: "04-PMU",
    people: [
      { name: "Giorjines Boppré", role: "Leitung Arbeitspaket 4: Machbarkeitsstudien", image: "Giorjines-Boppre.jpeg", rights: "" },
      { name: "Fabian Leinauer", role: "", image: "Fabian-Leinauer.jpg", rights: "" },
      { name: "Chantal Gruber", role: "", image: "Chantal-Gruber.jpeg", rights: "" },
      { name: "Gunnar Treff", role: "Beratende Funktion", image: "Gunnar-Treff.jpg", rights: "" },
      // { name: "Andrea Planatscher", role: "", image: "Andrea-Planatscher.jpg", rights: "" }
    ]
  },
  SALK: {
    name: "Gemeinnützige Salzburger Landeskliniken Betriebsgesellschaft mbH",
    imgkey: "07-SALK",
    people: [
      { name: "Clemens Schmutzhart", role: "", image: "Clemens-Schmutzhart.jpg", rights: "" },
      { name: "Josef Niebauer", role: "", image: "Josef-Niebauer.jpg", rights: "" },
      { name: "Daniela Rohrmoser", role: "Leistungsdiagnostik, Trainingsbetreuung", image: "Daniela-Rohrmoser.jpg", rights: "" },
      { name: "Emina Salihovic", role: "Pflegeexpertin für perioperative Abläufe", image: "Emina-Salihovic.jpg", rights: "© SALK" }
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
  LOIDL: {
    name: "Loidl Consulting & IT Services GmbH",
    imgkey: "10-LOIDL",
    people: [
      { name: "Andrea Rainer Cerovská", role: "Leitung Arbeitspaket 6: Industrielle Verwertung", image: "Andrea-Rainer-Cerovska.png", rights: "" },
      { name: "Herwig Loidl", role: "", image: "Herwig-Loidl.png", rights: "" },
      { name: "Stefan Leipold", role: "", image: "Stefan-Leipold.png", rights: "" }

    ]
  },
  RL: {
    name: "RedLink GmbH",
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
    name: "REDOX GmbH",
    imgkey: "13-RDX",
    people: [
      { name: "Philipp Götz", role: "Projektmanagement, Softwareentwicklung", image: "Philipp-Goetz.jpg", rights: "" }
    ]
  },
  all: teamAllMD
};

export default team;
