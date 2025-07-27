// Main Application File
class PortfolioApp {
  constructor() {
    this.config = CONFIG;
    this.components = {};
    this.init();
  }

  async init() {
    try {
      // Initialize AOS
      if (typeof AOS !== 'undefined') {
        AOS.init(this.config.animations.aos);
      }

      // Initialize components
      this.initComponents();
      
      // Render application
      this.render();
      
      // Initialize component functionality
      this.initComponentFunctionality();
      
      // Initialize global functionality
      this.initGlobalFunctionality();
      
      console.log('Portfolio app initialized successfully');
    } catch (error) {
      console.error('Error initializing portfolio app:', error);
      this.handleError(error);
    }
  }

  initComponents() {
    this.components = {
      header: new Header(this.config),
      hero: new Hero(this.config),
      skills: new Skills(this.config),
      projects: new Projects(this.config),
      contact: new Contact(this.config)
    };
  }

  render() {
    const app = document.getElementById('app');
    if (!app) {
      console.error('App container not found');
      return;
    }

    app.innerHTML = `
      ${this.components.header.render()}
      <main>
        ${this.components.hero.render()}
        ${this.renderAboutSection()}
        ${this.components.skills.render()}
        ${this.components.projects.render()}
        ${this.components.contact.render()}
      </main>
      ${this.renderFooter()}
      ${this.renderBackToTop()}
    `;
  }

  renderAboutSection() {
    return `
      <section id="about" class="about">
        <div class="container">
          <div class="section-header" data-aos="fade-up">
            <h2 class="section-title">About Me</h2>
            <p class="section-subtitle">Get to know me better</p>
          </div>
          <div class="about-content">
            <div class="about-text" data-aos="fade-right">
              <p>${this.config.personal.bio}</p>
              <p>I specialize in creating intuitive user interfaces and seamless user experiences. 
                 My passion lies in bridging the gap between design and development.</p>
            </div>
            <div class="about-stats" data-aos="fade-left">
              <div class="stat-item">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div class="stat-item">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div class="stat-item">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderFooter() {
    return `
      <footer class="footer">
        <div class="container">
          <p>&copy; 2025 ${this.config.personal.name}. All rights reserved.</p>
        </div>
      </footer>
    `;
  }

  renderBackToTop() {
    return `
      <button class="back-to-top" title="Back to top">
        <i class="fas fa-arrow-up"></i>
      </button>
    `;
  }

  initComponentFunctionality() {
    Object.values(this.components).forEach(component => {
      if (component.init) {
        component.init();
      }
    });
  }

  initGlobalFunctionality() {
    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      });

      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  handleError(error) {
    // Fallback: ensure all elements are visible
    document.querySelectorAll('[data-aos]').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.visibility = 'visible';
    });
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});