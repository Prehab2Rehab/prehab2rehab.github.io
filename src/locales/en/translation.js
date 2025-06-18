import aboutMD from './about.md?raw';
import facts1MD from './facts-1.md?raw';
import facts2MD from './facts-2.md?raw';
import goalsMD from './goals.md?raw';
import partnerMD from './partner.md?raw';
import journeyMD from './journey.md?raw';
import impressumMD from './impressum.md?raw';
import privacyPolicyMD from './privacyPolicy.md?raw';

const en = {
  menu: {
    about: "About the Project",
    goals: "Project Goals",
    facts: "Project Facts",
    usecases: "Use Cases",
    partner: "Project Partners",
    contact: "Contact"
  },
  slogan: {
    prehab: "Prehabilitation",
    to: " to ",
    rehab: "Rehabilitation",
    tagline: ": A seamless, digitally supported care pathway",
    keywords: "Integrated. Digital. Individualized."
  },
  about: aboutMD,
  facts: {
    1: facts1MD,
    2: facts2MD
  },
  journey: journeyMD,
  goals: goalsMD,
  usecases: {
    heading: "Use Cases",
    desc: "The project includes three medical use cases to evaluate the user-friendliness and acceptance of digitally supported, integrative prehabilitation and to assess the medical effectiveness for clinical follow-up studies.",
    abdominal: {
      title: "Visceral Surgery",
      desc: "Surgical procedures on the internal abdominal organs, e.g., liver and gallbladder."
    },
    knee: {
      title: "Knee Joint Replacement",
      desc: "Implantation of an artificial knee joint in cases of severe arthritis or joint damage."
    },
    cardiac: {
      title: "Cardiac Surgery",
      desc: "Operations on the heart, such as bypass surgeries, valve replacements, or correction of congenital heart defects."
    }
  },
  partner: {
    desc: partnerMD,
    research: "Research",
    researchClinics: "Research Clinics",
    clinics: "Clinics",
    industry: "Industry"
  },
  team: {
    title: "Project Team",
    LBI_DHP: {
      name: "LBI for Digital Health and Prevention",
      people: [
        { role: "Project lead" },
        { role: "Lead work package 2: Stakeholder involvement" },
        { role: "Project administration" },
        { role: "Research and development" },
        { role: "Administration, communication" },
        { role: "Research and development" },
      ]
    },
    LBI_AR: {
      name: "LBI for Arthritis and Rehabilitation",
      people: [
        { role: "" },
        { role: "" },
        { role: "" },
        { role: "" }
      ]
    },
    PMU: {
      name: "Paracelsus Medical University",
      people: [
        { role: "Lead work package 4: Feasibility studies" },
        { role: "" }
      ]
    },
    SALK: {
      people: [
        { role: "" },
        { role: "" }
      ]
    },
    ALP: {
      people: [
        { role: "Project management, software development" },
        { role: "Project management, software development" },
        { role: "Software development" },
        { role: "Software development" },
        { role: "Software development" },
        { role: "Design, clickable prototypes" },
        { role: "Software development" }
      ]
    },
    BV: {
      name: "Bad Vigaun medical health centre",
      people: [
        { role: "" }
      ]
    },
    RL: {
      people: [
        { role: "" },
        { role: "Software development" },
        { role: "Software development" },
        { role: "Software development" },
        { role: "" }
      ]
    },
    RDX: {
      people: [
        { role: "Project management, software development" }
      ]
    }
  },
  contact: {
    heading: "Contact",
    description: "If you have any questions, comments, or would like to participate in the project, feel free to contact us at any time.",
    subheading: "Ludwig Boltzmann Institute for Digital Health and Prevention",
    address: "Lindhofstr. 22, 5020 Salzburg, Austria",
    phone: "Phone",
    email: "Email",
  },
  impressum: impressumMD,
  privacyPolicy: privacyPolicyMD,
  footer: {
    impressum: "Impressum",
    privacy: "Privacy Policy"
  }
};

export default en;
