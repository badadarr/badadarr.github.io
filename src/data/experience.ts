export interface ExperienceItem {
  role: string;
  note?: string;
  company: string;
  start: string; // YYYY-MM
  end: string | null; // null = present
  summary: string;
  bullets: { label: string; text: string }[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer Intern",
    company: "PT. Spero Mahakarya Nusantara",
    start: "2025-12",
    end: null,
    summary:
      "Spearheading development of an internal ERP system and providing on-site technical support for enterprise clients.",
    bullets: [
      {
        label: "ERP Development",
        text: "Led development of an internal ERP system utilizing Laravel and Inertia.js, delivering key features that significantly boosted team productivity",
      },
      {
        label: "MPR LCC Quiz App",
        text: "Built a quiz-competition (cerdas cermat) application for MPR LCC, handling the buzzer feature with group answer ordering",
      },
      {
        label: "Nexxuz Applications",
        text: "Maintained several applications within the Nexxuz ecosystem — Vcomm, BLM, and BMS — covering network discovery and application configuration options",
      },
      {
        label: "Onelito KOI Auction",
        text: "Developed a Flutter-based real-time live auction application for Onelito KOI",
      },
      {
        label: "Lora Website",
        text: "Designed and built the Lora website",
      },
      {
        label: "Field Operations",
        text: "Conducted on-site field operations for client Nexxuz, providing hands-on technical support and facilitating installation of required client systems",
      },
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "QIUB SG",
    start: "2025-11",
    end: null,
    summary:
      "Engineering enterprise systems for a Singapore-based agency, focusing on document automation and reporting capabilities.",
    bullets: [
      {
        label: "Maids Agency System",
        text: "Engineered a comprehensive system using Laravel and Inertia.js, featuring an automated document generation tool that converts maid documents into digital forms",
      },
      {
        label: "Travel Management System",
        text: "Contributed to the platform and took full ownership of the Report Template system to streamline data reporting capabilities",
      },
    ],
  },
  {
    role: "Software Developer",
    company: "Bilcode.id",
    start: "2022-03",
    end: "2026-01",
    summary:
      "Delivered a wide range of freelance software projects spanning mobile applications, web platforms, and client-specific tools.",
    bullets: [
      {
        label: "Flutter & REST API",
        text: "Developed REST API-integrated Flutter applications tailored for hospital operational needs",
      },
      {
        label: "State Management",
        text: "Implemented robust solutions utilizing GetX and Provider to ensure smooth application performance",
      },
      {
        label: "Form Builder App",
        text: "Built a specialized Form Builder for medical students, highlighting a custom Genogram Builder feature",
      },
      {
        label: "Corporate Website",
        text: "Designed and deployed a responsive corporate profile website using Next.js",
      },
      {
        label: "Nursing Assessment App",
        text: "Delivered a client-specific application leveraging Flutter for the frontend and Laravel for the backend",
      },
    ],
  },
  {
    role: "SEO Technical",
    note: "(Full Stack)",
    company: "KapanLagi Youniverse",
    start: "2025-02",
    end: "2025-05",
    summary:
      "Developed full-stack SEO tools and analytics systems to automate content operations and improve organic search performance.",
    bullets: [
      {
        label: "Lyrics Management System",
        text: "Built a full-stack system using a Laravel frontend and Express.js backend for automated lyrics scraping and content organization",
      },
      {
        label: "Google Trends Analytics",
        text: "Engineered a real-time monitoring system in Express.js with Google Sheets integration, automated ratio calculations, and WhatsApp notifications for trending content alerts",
      },
      {
        label: "SEO Performance Audits",
        text: "Executed comprehensive audits using Screaming Frog and Google PageSpeed Insights to optimize internal site speed and search rankings",
      },
      {
        label: "SEO Optimization",
        text: "Implemented data-driven strategies and automated content analysis tools to significantly enhance organic search visibility",
      },
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Kementerian Dalam Negeri RI",
    start: "2024-09",
    end: "2025-01",
    summary:
      "Contributed to internal information systems and digitalization initiatives within the Indonesian Ministry of Home Affairs.",
    bullets: [
      {
        label: "Laravel Development",
        text: "Contributed to internal information systems using Laravel, directly improving operational efficiency",
      },
      {
        label: "Internship Portal",
        text: "Built an informative internship registration portal to facilitate the digitalization of the onboarding process for prospective interns",
      },
      {
        label: "Client Communication",
        text: "Maintained continuous and professional client communication throughout the entire product lifecycle, from conception to final delivery",
      },
      {
        label: "Modern Tech Stack",
        text: "Researched and applied modern technology stacks to create efficient, user-centric application solutions",
      },
    ],
  },
  {
    role: "User Experience Intern",
    company: "Tani Bersama Estate",
    start: "2024-03",
    end: "2024-08",
    summary:
      "Focused on mobile UX design and application development for an agricultural estate company.",
    bullets: [
      {
        label: "Mobile UX Design",
        text: "Worked on Android design and mobile application development to enhance the user experience of internal tools",
      },
    ],
  },
  {
    role: "Tech Hub Ambassador",
    company: "Tokopedia",
    start: "2023-06",
    end: "2024-02",
    summary:
      "Facilitated learning circles and networking events to connect students with technology professionals and foster deeper learning in tech fields.",
    bullets: [
      {
        label: "Learning Facilitation",
        text: "Spearheaded small study groups and learning circles to foster in-depth technological learning and peer-to-peer collaboration",
      },
      {
        label: "Event Management",
        text: "Organized and executed impactful networking events, connecting university students with industry experts, tech professionals, and alumni",
      },
      {
        label: "Community Building",
        text: "Cultivated and expanded a highly engaged student community driven by technology careers and continuous professional development",
      },
    ],
  },
  {
    role: "Quality Assurance Intern",
    company: "Kamar Pelajar",
    start: "2023-10",
    end: "2024-01",
    summary:
      "Ensured the performance and quality standards of developing applications for a Sweden-based remote team.",
    bullets: [
      {
        label: "Quality Assurance",
        text: "Ensured performance and quality of developing applications, applying QA standards and analysis techniques",
      },
    ],
  },
  {
    role: "Mobile Flutter Developer Intern",
    company: "tumbue.ai",
    start: "2022-11",
    end: "2023-01",
    summary:
      "Contributed to mobile application development using Flutter in a remote, work-from-anywhere environment.",
    bullets: [
      {
        label: "Flutter Development",
        text: "Built and maintained mobile application features using Flutter and Dart",
      },
    ],
  },
  {
    role: "Flutter Developer",
    company: "Merah Putih Academy",
    start: "2022-02",
    end: "2022-06",
    summary:
      "Led end-to-end Flutter development for Android applications, from framework design to final client delivery.",
    bullets: [
      {
        label: "App Architecture",
        text: "Designed application frameworks, layouts, and prototypes to establish clear core concepts prior to integration",
      },
      {
        label: "Flutter Development",
        text: "Led end-to-end Flutter development for Android applications, ensuring high quality and seamless functionality from concept to deployment",
      },
      {
        label: "Client Collaboration",
        text: "Collaborated closely with clients to align project requirements, workflows, and business objectives for optimal solution delivery",
      },
      {
        label: "Delivery",
        text: "Successfully delivered high-quality software solutions that consistently met and exceeded client specifications and expectations",
      },
    ],
  },
  {
    role: "Frontend Developer",
    company: "Google Developer Student Clubs",
    start: "2021-11",
    end: "2022-04",
    summary:
      "Contributed as a Front-end Developer for the GDSC Waseda chapter, an initiative supported by Google Developers.",
    bullets: [
      {
        label: "Frontend Development",
        text: "Built and maintained web features using JavaScript and HTML for the GDSC Waseda chapter",
      },
      {
        label: "Global Collaboration",
        text: "Engaged in collaborative tech learning environments, with exposure to global initiatives like the Google Solution Challenge",
      },
    ],
  },
  {
    role: "Software Developer Intern",
    company: "PT. Amanah Karya Indonesia",
    start: "2021-01",
    end: "2021-07",
    summary:
      "Learned about internal systems development, installation, and configuration. Developed user interfaces for internal applications.",
    bullets: [
      {
        label: "Android Development",
        text: "Designed and developed Android applications based on internal team specifications, ensuring strict adherence to quality and functionality standards",
      },
      {
        label: "System Deployment",
        text: "Gained practical experience in deploying, installing, and configuring internal enterprise applications",
      },
      {
        label: "UI Development",
        text: "Created user-friendly UI designs for internal corporate apps, prioritizing usability and operational efficiency",
      },
      {
        label: "SDLC Foundation",
        text: "Acquired comprehensive foundational knowledge in the Software Development Life Cycle, including testing and deployment methodologies",
      },
    ],
  },
];
