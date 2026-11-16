export type ProgramLevel = 'UG' | 'PG' | 'Ph.D.';

export type SchoolCategory =
  | 'Computing & AI'
  | 'Commerce & Management'
  | 'Life Sciences & Math'
  | 'Humanities & Design';

export interface AcademicProgram {
  id: string;
  code: string;
  title: string;
  school: SchoolCategory;
  level: ProgramLevel;
  duration: string;
  intake: number;
  eligibility: string;
  departmentHead: string;
  overview: string;
  coreSubjects: string[];
  careerOutcomes: string[];
}

export interface CampusNotice {
  id: string;
  date: string;
  category: 'Academic' | 'Placements' | 'Events';
  title: string;
  venue: string;
  summary: string;
  contactOffice: string;
}

export interface RecruiterSector {
  sector: string;
  companies: string[];
}

export interface AlumniTestimonial {
  id: string;
  name: string;
  batch: string;
  program: string;
  role: string;
  organization: string;
  quote: string;
}

export const COLLEGE_IMAGES = {
  heroCampus: '/src/assets/images/regenerated_image_1794811654332.png',
  centralLibrary: '/src/assets/images/central_library_commons_1794810312964.jpg',
  scienceLab: '/src/assets/images/science_computing_lab_1794810313919.jpg',
  studentCourtyard: '/src/assets/images/campus_auditorium_quad_1794810313057.jpg',
};

export const INSTITUTIONAL_METRICS = [
  {
    value: 'NAAC A++',
    label: 'Accreditation Cycle III',
    detail: 'CGPA 3.68 out of 4.00',
  },
  {
    value: 'NIRF Top 50',
    label: 'National Ranking',
    detail: 'Ministry of Education, India',
  },
  {
    value: '34+ Programs',
    label: 'Autonomous Curriculum',
    detail: '21 UG · 10 PG · 8 Research',
  },
  {
    value: '94.6%',
    label: 'Placement Record',
    detail: '2025–26 Graduating Cohort',
  },
];

export const ACADEMIC_PROGRAMS: AcademicProgram[] = [
  {
    id: 'bsc-cs',
    code: 'SK-CS101',
    title: 'B.Sc. Computer Science',
    school: 'Computing & AI',
    level: 'UG',
    duration: '3 Years · 6 Semesters',
    intake: 180,
    eligibility: '10+2 pass with Mathematics / Computer Science from a recognized board.',
    departmentHead: 'Dr. K. S. Jeen Marseline',
    overview:
      'Foundational training in algorithms, systems architecture, database engineering, and distributed web development, paired with industry-mentored capstone sprints.',
    coreSubjects: [
      'Data Structures & Algorithmic Design',
      'Operating Systems & Linux Kernel',
      'Relational & Distributed Databases',
      'Cloud Infrastructure & DevOps',
    ],
    careerOutcomes: [
      'Software Systems Engineer',
      'Full-Stack Application Developer',
      'Cloud Operations Analyst',
    ],
  },
  {
    id: 'bsc-aiml',
    code: 'SK-AI104',
    title: 'B.Sc. Artificial Intelligence & Machine Learning',
    school: 'Computing & AI',
    level: 'UG',
    duration: '3 Years · 6 Semesters',
    intake: 120,
    eligibility: '10+2 pass with Mathematics and Physics / Computer Science (min. 60%).',
    departmentHead: 'Dr. S. Balasubramanian',
    overview:
      'Quantitative curriculum bridging statistical learning theory, neural architectures, computer vision, and ethical AI deployment on dedicated GPU clusters.',
    coreSubjects: [
      'Linear Algebra & Probability for ML',
      'Deep Learning & Neural Networks',
      'Natural Language Processing',
      'Applied Computer Vision',
    ],
    careerOutcomes: [
      'Machine Learning Associate',
      'Data Science Engineer',
      'Applied AI Researcher',
    ],
  },
  {
    id: 'bca',
    code: 'SK-CA102',
    title: 'Bachelor of Computer Applications (BCA)',
    school: 'Computing & AI',
    level: 'UG',
    duration: '3 Years · 6 Semesters',
    intake: 180,
    eligibility: '10+2 pass in any stream with Mathematics or Computer Applications.',
    departmentHead: 'Dr. R. Vijayalakshmi',
    overview:
      'Application-oriented degree focusing on enterprise software development, mobile ecosystems, UI engineering, and agile product delivery.',
    coreSubjects: [
      'Object-Oriented Programming in Java',
      'Enterprise Web Frameworks',
      'Mobile Application Architecture',
      'Software Testing & Quality Assurance',
    ],
    careerOutcomes: [
      'Application Developer',
      'QA Automation Specialist',
      'Product Support Engineer',
    ],
  },
  {
    id: 'msc-cs',
    code: 'SK-CS201',
    title: 'M.Sc. Computer Science',
    school: 'Computing & AI',
    level: 'PG',
    duration: '2 Years · 4 Semesters',
    intake: 50,
    eligibility: 'Bachelor’s degree in Computer Science, BCA, or IT with minimum 55%.',
    departmentHead: 'Dr. K. S. Jeen Marseline',
    overview:
      'Advanced postgraduate specialization in distributed computing, cryptographic protocols, big-data pipelines, and mandatory 6-month industry internship.',
    coreSubjects: [
      'Advanced Algorithms & Complexity',
      'Distributed Systems & Microservices',
      'Network Security & Cryptography',
      'Big Data Engineering',
    ],
    careerOutcomes: [
      'Senior Systems Architect',
      'Cybersecurity Analyst',
      'Doctoral Research Fellow',
    ],
  },
  {
    id: 'bcom-pa',
    code: 'SK-CM103',
    title: 'B.Com. Professional Accounting',
    school: 'Commerce & Management',
    level: 'UG',
    duration: '3 Years · 6 Semesters',
    intake: 120,
    eligibility: '10+2 pass in Commerce / Accountancy with Business Mathematics.',
    departmentHead: 'Dr. P. Dhanya',
    overview:
      'Syllabus mapped closely to CA, CMA, and ACCA professional papers, combining statutory auditing, direct taxation, and corporate financial reporting.',
    coreSubjects: [
      'Corporate Accounting & Ind-AS',
      'Direct & Indirect Taxation (GST)',
      'Statutory Auditing & Assurance',
      'Financial Management & Valuation',
    ],
    careerOutcomes: [
      'Chartered Accountancy Track',
      'Audit Associate (Big 4)',
      'Corporate Tax Consultant',
    ],
  },
  {
    id: 'bcom-fintech',
    code: 'SK-CM108',
    title: 'B.Com. Capital Markets & FinTech',
    school: 'Commerce & Management',
    level: 'UG',
    duration: '3 Years · 6 Semesters',
    intake: 60,
    eligibility: '10+2 pass with Commerce, Economics, or Mathematics.',
    departmentHead: 'Dr. M. Soundarya',
    overview:
      'Interdisciplinary commerce program integrating equity research, derivatives trading simulations, digital payment rails, and financial analytics.',
    coreSubjects: [
      'Securities Analysis & Portfolio Mgmt',
      'Financial Econometrics with Python',
      'Digital Banking & Payment Systems',
      'Risk & Derivatives Modeling',
    ],
    careerOutcomes: [
      'Financial Analyst',
      'Equity Research Associate',
      'FinTech Operations Specialist',
    ],
  },
  {
    id: 'bba',
    code: 'SK-MG101',
    title: 'Bachelor of Business Administration (BBA)',
    school: 'Commerce & Management',
    level: 'UG',
    duration: '3 Years · 6 Semesters',
    intake: 120,
    eligibility: '10+2 pass in any recognized discipline with minimum 55% aggregate.',
    departmentHead: 'Dr. V. Karthik',
    overview:
      'Case-study driven undergraduate management degree cultivating organizational leadership, supply chain strategy, and entrepreneurial execution.',
    coreSubjects: [
      'Organizational Behavior & HR Strategy',
      'Operations & Supply Chain Management',
      'Marketing Analytics & Consumer Insight',
      'Business Law & Corporate Governance',
    ],
    careerOutcomes: [
      'Management Trainee',
      'Business Operations Analyst',
      'Brand & Growth Coordinator',
    ],
  },
  {
    id: 'mcom',
    code: 'SK-CM201',
    title: 'M.Com. International Business',
    school: 'Commerce & Management',
    level: 'PG',
    duration: '2 Years · 4 Semesters',
    intake: 40,
    eligibility: 'B.Com., BBA, or BBM degree from a recognized university.',
    departmentHead: 'Dr. P. Dhanya',
    overview:
      'Postgraduate study in cross-border trade documentation, foreign exchange risk, WTO regulatory frameworks, and global export strategy.',
    coreSubjects: [
      'Global Trade Policy & EXIM Documentation',
      'International Financial Management',
      'Global Supply Chain Logistics',
      'Cross-Cultural Business Strategy',
    ],
    careerOutcomes: [
      'Export-Import Manager',
      'International Trade Consultant',
      'Corporate Treasury Analyst',
    ],
  },
  {
    id: 'bsc-biotech',
    code: 'SK-LS101',
    title: 'B.Sc. Biotechnology',
    school: 'Life Sciences & Math',
    level: 'UG',
    duration: '3 Years · 6 Semesters',
    intake: 60,
    eligibility: '10+2 pass with Biology / Biotechnology and Chemistry.',
    departmentHead: 'Dr. N. Thilagavathi',
    overview:
      'Wet-lab intensive program in molecular biology, recombinant DNA technology, bioprocess engineering, and bioinformatics.',
    coreSubjects: [
      'Cell & Molecular Biology',
      'Genetic Engineering & Genomics',
      'Immunology & Diagnostic Assays',
      'Bioprocess & Fermentation Tech',
    ],
    careerOutcomes: [
      'Bioprocess Research Associate',
      'Clinical Quality Control Analyst',
      'Bioinformatics Specialist',
    ],
  },
  {
    id: 'bsc-math',
    code: 'SK-LS105',
    title: 'B.Sc. Mathematics',
    school: 'Life Sciences & Math',
    level: 'UG',
    duration: '3 Years · 6 Semesters',
    intake: 60,
    eligibility: '10+2 pass with Mathematics as a core subject.',
    departmentHead: 'Dr. G. Arulmani',
    overview:
      'Rigorous pure and applied mathematics covering real analysis, abstract algebra, operations research, and computational modeling.',
    coreSubjects: [
      'Real & Complex Analysis',
      'Abstract & Linear Algebra',
      'Differential Equations & Modeling',
      'Operations Research & Optimization',
    ],
    careerOutcomes: [
      'Actuarial & Risk Analyst',
      'Quantitative Data Specialist',
      'Academic & Competitive Exams',
    ],
  },
  {
    id: 'msc-biotech',
    code: 'SK-LS201',
    title: 'M.Sc. Biotechnology',
    school: 'Life Sciences & Math',
    level: 'PG',
    duration: '2 Years · 4 Semesters',
    intake: 30,
    eligibility: 'B.Sc. in Biotechnology, Microbiology, Biochemistry, or Life Sciences.',
    departmentHead: 'Dr. N. Thilagavathi',
    overview:
      'DST-FIST supported postgraduate research program in proteomics, nanobiotechnology, and industrial enzyme engineering.',
    coreSubjects: [
      'Proteomics & Structural Biology',
      'Downstream Bioprocessing',
      'Stem Cell & Tissue Engineering',
      'Research Methodology & Biostatistics',
    ],
    careerOutcomes: [
      'R&D Scientist (Biopharma)',
      'Regulatory Affairs Associate',
      'Ph.D. Research Fellowship',
    ],
  },
  {
    id: 'phd-sciences',
    code: 'SK-RS301',
    title: 'Ph.D. Computer Science, Commerce & Life Sciences',
    school: 'Life Sciences & Math',
    level: 'Ph.D.',
    duration: '3–5 Years · Full / Part-Time',
    intake: 24,
    eligibility: 'Master’s degree (55%+) and Bharathiar University Common Entrance / NET-JRF.',
    departmentHead: 'Dr. R. Jagajeevan (Dean, Research)',
    overview:
      'Doctoral research tracks supervised by approved guides across Computer Science, Biotechnology, Microbiology, Commerce, and English Literature.',
    coreSubjects: [
      'Research Ethics & Scholarly Publishing',
      'Advanced Quantitative / Qualitative Methods',
      'Funded Extramural Project Tracks',
      'Doctoral Colloquium & Thesis Defense',
    ],
    careerOutcomes: [
      'University Faculty & Principal Investigator',
      'Industrial R&D Lead',
      'Policy & Academic Fellow',
    ],
  },
  {
    id: 'ba-english',
    code: 'SK-HM101',
    title: 'B.A. English Literature',
    school: 'Humanities & Design',
    level: 'UG',
    duration: '3 Years · 6 Semesters',
    intake: 60,
    eligibility: '10+2 pass in any stream with strong proficiency in English.',
    departmentHead: 'Dr. S. Meenakshi',
    overview:
      'Critical inquiry into British, Indian Writing in English, postcolonial theory, comparative literature, and editorial publishing.',
    coreSubjects: [
      'Classical & Modern Literary Criticism',
      'Indian Writing in English & Translation',
      'Contemporary Editorial & Media Writing',
      'Linguistics & Phonetics',
    ],
    careerOutcomes: [
      'Editorial & Publishing Specialist',
      'Corporate Communications Lead',
      'Civil Services & Journalism',
    ],
  },
  {
    id: 'bsc-viscom',
    code: 'SK-HM104',
    title: 'B.Sc. Visual Communication',
    school: 'Humanities & Design',
    level: 'UG',
    duration: '3 Years · 6 Semesters',
    intake: 60,
    eligibility: '10+2 pass in any recognized stream; portfolio interview optional.',
    departmentHead: 'Prof. A. Karthikeyan',
    overview:
      'Studio-based degree spanning documentary filmmaking, typography, photography, broadcast journalism, and interactive media design.',
    coreSubjects: [
      'Visual Storytelling & Cinematography',
      'Editorial Typography & Brand Systems',
      'Audio Production & Sound Design',
      'Digital Journalism & Media Law',
    ],
    careerOutcomes: [
      'Art & Creative Director',
      'Documentary Filmmaker',
      'UX & Visual Systems Designer',
    ],
  },
  {
    id: 'bsc-psychology',
    code: 'SK-HM106',
    title: 'B.Sc. Psychology',
    school: 'Humanities & Design',
    level: 'UG',
    duration: '3 Years · 6 Semesters',
    intake: 60,
    eligibility: '10+2 pass in any stream (Science or Humanities).',
    departmentHead: 'Dr. L. Priya',
    overview:
      'Empirical study of cognitive processes, developmental psychology, psychometrics, and clinical counseling practicum.',
    coreSubjects: [
      'Cognitive & Experimental Psychology',
      'Psychological Assessment & Testing',
      'Organizational & Industrial Psychology',
      'Counseling Skills Practicum',
    ],
    careerOutcomes: [
      'Behavioral Research Associate',
      'Organizational Talent Specialist',
      'M.Sc. Clinical Psychology Track',
    ],
  },
];

export const CAMPUS_NOTICES: CampusNotice[] = [
  {
    id: 'n1',
    date: '18 Nov 2026',
    category: 'Academic',
    title: 'Even Semester Autonomous Examination Timetable Published',
    venue: 'Controller of Examinations Portal & Main Notice Board',
    summary:
      'Final theory and laboratory schedules for UG (Semesters II, IV, VI) and PG (Semesters II, IV) are open for student verification. Discrepancies must be reported to department coordinators before 25 Nov.',
    contactOffice: 'Office of the Controller of Examinations',
  },
  {
    id: 'n2',
    date: '22 Nov 2026',
    category: 'Events',
    title: 'National Symposium on Sustainable Biotechnology & AI Diagnostics',
    venue: 'Sri Krishna Auditorium, Block A',
    summary:
      'Two-day interdisciplinary conference co-hosted by the Schools of Life Sciences and Computing, featuring keynote addresses from CSIR and IISc researchers alongside 45 student paper presentations.',
    contactOffice: 'Deanery of Research & Innovation',
  },
  {
    id: 'n3',
    date: '28 Nov 2026',
    category: 'Placements',
    title: 'Campus Recruitment Drive — Deloitte, Zoho & TCS Digital',
    venue: 'Placement & Career Guidance Cell, Annex II',
    summary:
      'Pre-placement talks and technical aptitude rounds for final-year B.Sc. Computer Science, BCA, and B.Com. (PA) eligible candidates. Carry updated academic transcripts.',
    contactOffice: 'Training & Placement Directorate',
  },
  {
    id: 'n4',
    date: '04 Dec 2026',
    category: 'Academic',
    title: 'Applications Open: First-Graduate & Merit Scholarships 2027–28',
    venue: 'Admissions & Student Welfare Desk, Admin Block',
    summary:
      'Incoming applicants with 90%+ higher secondary aggregate and state/national-level athletes may submit supporting credentials for tuition fee waiver consideration.',
    contactOffice: 'Admissions & Financial Aid Office',
  },
];

export const RECRUITER_SECTORS: RecruiterSector[] = [
  {
    sector: 'Technology & Engineering',
    companies: ['TCS Digital', 'Infosys', 'Zoho Corporation', 'Cognizant', 'Wipro', 'Bosch Global Software'],
  },
  {
    sector: 'Audit, Banking & FinTech',
    companies: ['Deloitte', 'EY India', 'KPMG', 'HDFC Bank', 'ICICI Prudential', 'Goldman Sachs Services'],
  },
  {
    sector: 'Life Sciences & Healthcare',
    companies: ['Biocon', 'Dr. Reddy’s', 'KMCH Research', 'Syngene', 'Thermo Fisher Scientific'],
  },
  {
    sector: 'Media, Design & Consulting',
    companies: ['The Hindu Group', 'Accenture', 'Freshworks', 'McKinsey Knowledge Center', 'Byju’s Media'],
  },
];

export const ALUMNI_TESTIMONIALS: AlumniTestimonial[] = [
  {
    id: 'a1',
    name: 'Ananya Sundaram',
    batch: 'Class of 2023',
    program: 'B.Sc. Computer Science',
    role: 'Software Development Engineer',
    organization: 'Zoho Corporation, Chennai',
    quote:
      'Before joining SKASC, I had never written a full-stack system from scratch. Through the autonomous lab sprints and faculty-mentored open-source club, I built three production projects by my fifth semester and cleared my campus placement in the first week.',
  },
  {
    id: 'a2',
    name: 'Karthik Narayanan',
    batch: 'Class of 2022',
    program: 'B.Com. Professional Accounting',
    role: 'Audit Senior Associate',
    organization: 'Deloitte Haskins & Sells, Bengaluru',
    quote:
      'Alignment between our autonomous syllabus and Chartered Accountancy standards saved me an entire year of duplicate preparation. Weekly case audits in the commerce department gave me complete confidence during Big 4 technical interviews.',
  },
  {
    id: 'a3',
    name: 'Dr. Harini Venkataraman',
    batch: 'Class of 2019',
    program: 'M.Sc. Biotechnology',
    role: 'Postdoctoral Research Fellow',
    organization: 'CSIR–Central Food Technological Research Institute',
    quote:
      'Unrestricted access to PCR, HPLC, and microbial culture suites during my master’s thesis turned curiosity into published research. Two papers co-authored with my advisor at SKASC directly secured my national doctoral fellowship.',
  },
];

export const ADMISSIONS_STEPS = [
  {
    step: '01',
    title: 'Submit Online Application',
    timeline: 'Opens January 2027',
    description:
      'Complete the program preference form with Class X/XII or undergraduate mark statements and upload supporting scholarship certificates.',
  },
  {
    step: '02',
    title: 'Merit Evaluation & Counseling',
    timeline: 'Rolling Shortlists',
    description:
      'Departments publish merit ranks based on qualifying examination marks. Shortlisted candidates attend an academic counseling session on campus or online.',
  },
  {
    step: '03',
    title: 'Document Verification',
    timeline: 'Within 7 Days of Offer',
    description:
      'Verify original transfer, community, and mark certificates at the Kuniamuthur Admissions Office along with scholarship eligibility records.',
  },
  {
    step: '04',
    title: 'Enrollment & Induction',
    timeline: 'June 2027',
    description:
      'Confirm seat allocation, receive your institutional register number, and attend the five-day Deeksharambh student induction program.',
  },
];
