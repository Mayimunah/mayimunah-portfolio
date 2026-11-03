/*
 * All the public content for this site is in one place.
 * When I finish a new project or publish a paper, I update this file
 * instead of searching through the page layouts.
 *
 * A project should only say "live" when there is a working public link.
 * I am leaving unknown information blank rather than guessing.
 */
window.portfolioContent = {
  contact: {
    linkedin: 'https://za.linkedin.com/in/mayimunah-nagayi-2b9bb0196/',
    github: '', // Add my public GitHub profile URL when I want to share it.
    email: '',  // Add a public-facing address before enabling email links.
    cv: ''      // Example: 'cv/Mayimunah_Nagayi_CV.pdf' once the file is there.
  },
  research: [
    {
      number: '01', year: '2026', area: 'Vision · Information extraction',
      label: 'SACAIR 2026 accepted · arXiv preprint',
      title: 'Region-guided evidence extraction for draft R3337 screening',
      summary: 'Using detected image regions, OCR and explicit screening rules to assess nutrition and ingredient evidence. Uncertain cases are left for review instead of forcing a decision.',
      paper: 'https://arxiv.org/abs/2610.28211'
    },
    {
      number: '02', year: '2026', area: 'Computer vision · OCR',
      label: 'IEEE ICTAS 2026 presented · arXiv preprint',
      title: 'OCR-enabled sodium screening from food photographs',
      summary: 'An evidence-based workflow for extracting sodium information from packaging images and assessing it against South Africa’s R214 requirements.',
      paper: 'https://arxiv.org/abs/2609.15427'
    },
    {
      number: '03', year: '2025', area: 'Document analysis · Evaluation',
      label: 'SACAIR 2025 presented · arXiv preprint',
      title: 'Evaluating OCR on real food-packaging labels',
      summary: 'A study comparing OCR tools on challenging packaging photographs, including nutrition panels, ingredients and text affected by real capture conditions.',
      paper: 'https://arxiv.org/abs/2510.03570'
    }
  ],
  // These are the exact public titles of the linked arXiv manuscripts.
  publications: [
    {year:'2026', status:'SACAIR 2026 accepted · preprint', title:'Region-Guided Food-Package Evidence Extraction and Abstention-Aware Draft R3337 Screening with Selective VLM Review', url:'https://arxiv.org/abs/2610.28211'},
    {year:'2026', status:'IEEE ICTAS 2026 presented · preprint', title:'A Conservative OCR-Enabled Workflow for R214 Sodium Screening of South African Packaged Foods', url:'https://arxiv.org/abs/2609.15427'},
    {year:'2025', status:'SACAIR 2025 presented · preprint', title:'Evaluating OCR Performance on Food Packaging Labels in South Africa', url:'https://arxiv.org/abs/2510.03570'}
  ],
  software: [
    {
      number:'01', category:'Personal web application', title:'Application Tracker',
      summary:'A web tool I use to organise applications, opportunities and deadlines in one place.',
      stack:['Web application','Productivity'], url:'https://mayimunahapplicationtracker.netlify.app/',
      status:'live'
    },
    {
      number:'02', category:'Education · Collaborative website', title:'Ace Group',
      summary:'An education-focused website for tutoring and student support. I will update this description to explain my specific contribution.',
      stack:['Website','Education'], url:'https://ace-group-liard.vercel.app/', status:'live'
    },
    {
      number:'03', category:'Honours project', title:'Streamlit project',
      summary:'A project from my Computer Science Honours work. I will add a proper description, code and screenshots when the deployment is ready.',
      stack:['Python','Streamlit'], url:'', status:'in-progress'
    }
  ]
};
