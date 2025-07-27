// Hero Section Component
class Hero {
  constructor(config) {
    this.config = config;
  }

  render() {
    return `
      <section id="home" class="hero">
        <div class="container">
          <div class="hero-content" data-aos="fade-up">
            <div class="hero-text">
              <h1>Hi, I'm <span class="highlight">${this.config.personal.name}</span></h1>
              <h2>${this.config.personal.title}</h2>
              <p>${this.config.personal.bio}</p>
              <div class="hero-buttons">
                <a href="#contact" class="btn-primary">Get In Touch</a>
                <a href="#projects" class="btn-secondary">View My Work</a>
              </div>
            </div>
            <div class="hero-image" data-aos="fade-left" data-aos-delay="200">
              <img src="${this.config.personal.profileImage}" alt="${this.config.personal.name}">
            </div>
          </div>
        </div>
      </section>
    `;
  }

  init() {
    // Add typing animation effect
    const titleElement = document.querySelector('.hero h2');
    if (titleElement) {
      this.typeWriter(titleElement, this.config.personal.title, 100);
    }
  }

  typeWriter(element, text, speed) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    
    setTimeout(type, 1000);
  }
}