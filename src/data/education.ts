export interface EducationItem {
  title: string;
  institution: string;
  status: "Active" | "Graduated";
  detail: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  url?: string;
  credentialId?: string;
}

export const education: EducationItem[] = [
  {
    title: "S1 — Computer Science",
    institution: "Universitas Presiden",
    status: "Active",
    detail: "GPA: 3.33 · Final Semester",
    description:
      "Specializing in Internet of Things (IoT). Currently in final semester with focus on IoT systems, cross-platform application development, and modern web technologies.",
  },
  {
    title: "Rekayasa Perangkat Lunak",
    institution: "SMK MADINATULQURAN",
    status: "Graduated",
    detail: "Avg Score: 8.5 · July 2022",
    description:
      "Vocational education in Software Engineering with a strong foundation in programming and software development methodologies.",
  },
];

export const certifications: Certification[] = [
  {
    title: "Web Development With React",
    issuer: "Dicoding",
    date: "May 2026",
    url: "https://www.dicoding.com/certificates/81P2O5N1NZOY",
  },
  {
    title: "Self-Learning Development",
    issuer: "Dicoding",
    date: "April 2026",
    url: "https://www.dicoding.com/certificates/KEXLQJRM0PG2",
  },
  {
    title: "Front-end Web Development Beginners",
    issuer: "Dicoding",
    date: "March 2026",
    url: "https://www.dicoding.com/certificates/JLX1VLKY5Z72",
  },
  {
    title: "Back-end Development Beginners",
    issuer: "Dicoding",
    date: "February 2026",
    url: "https://www.dicoding.com/certificates/KEXLQGEWWPG2",
  },
  {
    title: "Dart & Flutter Development Bootcamp: Find House App",
    issuer: "BuildWithAngga",
    date: "June 2022",
    credentialId: "Nml9QCQSWC",
  },
  {
    title: "iOS Development With Swift UI",
    issuer: "BuildWithAngga",
    date: "June 2022",
    credentialId: "UlwOrcUw3Y",
  },
  {
    title: "Full-Stack Laravel Kotlin: FoodMarket Apps",
    issuer: "BuildWithAngga",
    date: "June 2022",
    credentialId: "08A4dRl0Wq",
  },
  {
    title: "Flutter Development for Beginners",
    issuer: "Dicoding",
    date: "January 2022",
    url: "https://dicoding.com/certificates/53XE0NNOVXRN",
  },
  {
    title: "Machine Learning for Beginners",
    issuer: "Dicoding",
    date: "January 2021",
    url: "https://www.dicoding.com/certificates/72ZD2NER6ZYW",
  },
  {
    title: "HTML Fundamental Course",
    issuer: "SoloLearn",
    date: "October 2019",
    credentialId: "1014-16060515",
  },
  {
    title: "Java Tutorial Course",
    issuer: "SoloLearn",
    date: "October 2019",
    credentialId: "1068-16060515",
  },
  {
    title: "Android Development for Beginners",
    issuer: "Dicoding",
    date: "January 2019",
    url: "https://www.dicoding.com/users/573369/academies",
  },
];
