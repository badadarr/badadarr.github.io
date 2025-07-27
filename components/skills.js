// Skills Section Component
class Skills {
  constructor(config) {
    this.config = config;
  }

  render() {
    const technicalSkills = this.config.skills.technical.map(skill => `
      <div class="skill-item" data-aos="fade-up" data-aos-delay="100">
        <div class="skill-icon">
          <i class="${skill.icon}"></i>
        </div>
        <div class="skill-info">
          <h4>${skill.name}</h4>
          <div class="skill-bar">
            <div class="skill-progress" data-width="${skill.level}%"></div>
          </div>
          <span class="skill-percentage">${skill.level}%</span>
        </div>
      </div>
    `).join('');

    const softSkills = this.config.skills.soft.map((skill, index) => `
      <div class="soft-skill-item" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
        <i class="fas fa-check-circle"></i>
        <span>${skill}</span>
      </div>
    `).join('');

    return `
      <section id="skills" class="skills">
        <div class="container">
          <div class="section-header" data-aos="fade-up">
            <h2 class="section-title">Skills & Expertise</h2>
            <p class="section-subtitle">Technologies and tools I work with</p>
          </div>
          
          <div class="skills-content">
            <div class="technical-skills">
              <h3 data-aos="fade-right">Technical Skills</h3>
              <div class="skills-grid">
                ${technicalSkills}
              </div>
            </div>
            
            <div class="soft-skills" data-aos="fade-left">
              <h3>Soft Skills</h3>
              <div class="soft-skills-grid">
                ${softSkills}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  init() {
    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
      skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
      });
    };

    // Trigger animation when skills section is in view
    const skillsSection = document.querySelector('#skills');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
          observer.unobserve(entry.target);
        }
      });
    });

    if (skillsSection) {
      observer.observe(skillsSection);
    }
  }
}