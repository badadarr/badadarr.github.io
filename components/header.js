// Header Component
class Header {
  constructor(config) {
    this.config = config;
  }

  render() {
    return `
      <header class="header">
        <nav class="navbar">
          <div class="container">
            <div class="nav-brand">
              <a href="#home">${this.config.personal.name}</a>
            </div>
            <div class="nav-toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ul class="nav-menu">
              <li><a href="#home" class="nav-link">Home</a></li>
              <li><a href="#about" class="nav-link">About</a></li>
              <li><a href="#skills" class="nav-link">Skills</a></li>
              <li><a href="#projects" class="nav-link">Projects</a></li>
              <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
          </div>
        </nav>
        <div class="scroll-progress"></div>
      </header>
    `;
  }

  init() {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu-active');
        navToggle.classList.toggle('active');
      });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Scroll progress bar
    const scrollProgress = document.querySelector('.scroll-progress');
    window.addEventListener('scroll', () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      scrollProgress.style.width = scrollPercent + '%';
    });
  }
}