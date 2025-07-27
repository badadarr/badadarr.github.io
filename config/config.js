// Personal Configuration
const CONFIG = {
  // Personal Information
  personal: {
    name: "Badar Maulana",
    title: "UI/UX Designer & Frontend Developer",
    email: "badar.maulana.techno@gmail.com",
    phone: "087788997971",
    location: "Indonesia",
    bio: "Passionate UI/UX Designer and Frontend Developer with expertise in creating user-centered digital experiences.",
    profileImage: "./images/badarimageformal.png"
  },

  // Social Links
  social: {
    github: "https://github.com/badadarr",
    linkedin: "https://www.linkedin.com/in/badadarrs/",
    email: "mailto:badar.maulana.techno@gmail.com"
  },

  // Skills Configuration
  skills: {
    technical: [
      { name: "HTML5", level: 90, icon: "fab fa-html5" },
      { name: "CSS3", level: 85, icon: "fab fa-css3-alt" },
      { name: "JavaScript", level: 80, icon: "fab fa-js-square" },
      { name: "React", level: 75, icon: "fab fa-react" },
      { name: "Figma", level: 90, icon: "fab fa-figma" },
      { name: "Adobe XD", level: 85, icon: "fas fa-pencil-ruler" }
    ],
    soft: [
      "Problem Solving",
      "Team Collaboration", 
      "Creative Thinking",
      "Time Management",
      "Communication",
      "Adaptability"
    ]
  },

  // Projects Configuration
  projects: [
    {
      id: 1,
      title: "Akademis App UI",
      description: "Modern educational app interface design",
      image: "./images/Akademisapp ui.png",
      technologies: ["Figma", "UI/UX", "Mobile Design"],
      category: "ui-design"
    },
    {
      id: 2,
      title: "Cozy App UI",
      description: "Comfortable living space rental app",
      image: "./images/cozyapp ui.png", 
      technologies: ["Figma", "UI/UX", "Mobile Design"],
      category: "ui-design"
    },
    {
      id: 3,
      title: "Future Jobs UI",
      description: "Job search platform interface",
      image: "./images/futurejobs ui.png",
      technologies: ["Figma", "UI/UX", "Web Design"],
      category: "ui-design"
    },
    {
      id: 4,
      title: "Gojek App UI",
      description: "Multi-service app redesign concept",
      image: "./images/gojekapp ui.png",
      technologies: ["Figma", "UI/UX", "Mobile Design"],
      category: "ui-design"
    }
  ],

  // Form Configuration
  form: {
    formspreeId: "YOUR_FORM_ID",
    emailSubject: "Portfolio Inquiry - Let's Connect",
    successMessage: "Thank you! Your message has been sent successfully.",
    errorMessage: "Sorry, there was an error sending your message. Please try again."
  },

  // Animation Settings
  animations: {
    aos: {
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100
    }
  }
};