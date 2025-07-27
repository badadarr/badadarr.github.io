// Projects Section Component
class Projects {
  constructor(config) {
    this.config = config;
  }

  render() {
    const projectCards = this.config.projects.map((project, index) => `
      <div class="project-card" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
          <div class="project-overlay">
            <div class="project-actions">
              <button class="btn-view" data-project-id="${project.id}">
                <i class="fas fa-eye"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

    return `
      <section id="projects" class="projects">
        <div class="container">
          <div class="section-header" data-aos="fade-up">
            <h2 class="section-title">Featured Projects</h2>
            <p class="section-subtitle">Some of my recent work</p>
          </div>
          
          <div class="projects-filter" data-aos="fade-up" data-aos-delay="100">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="ui-design">UI Design</button>
            <button class="filter-btn" data-filter="web-dev">Web Development</button>
          </div>
          
          <div class="projects-grid">
            ${projectCards}
          </div>
        </div>
        
        <!-- Project Modal -->
        <div id="project-modal" class="modal">
          <div class="modal-content">
            <span class="modal-close">&times;</span>
            <div class="modal-body">
              <img id="modal-image" src="" alt="">
              <div class="modal-info">
                <h3 id="modal-title"></h3>
                <p id="modal-description"></p>
                <div id="modal-tech" class="project-tech"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  init() {
    // Filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
          if (filter === 'all') {
            card.style.display = 'block';
          } else {
            const projectCategory = this.getProjectCategory(card);
            card.style.display = projectCategory === filter ? 'block' : 'none';
          }
        });
      });
    });

    // Modal functionality
    const modal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    const viewBtns = document.querySelectorAll('.btn-view');

    viewBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const projectId = parseInt(btn.getAttribute('data-project-id'));
        const project = this.config.projects.find(p => p.id === projectId);
        
        if (project) {
          this.openModal(project);
        }
      });
    });

    modalClose.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  getProjectCategory(card) {
    // Logic to determine project category from card
    return 'ui-design'; // Default category
  }

  openModal(project) {
    const modal = document.getElementById('project-modal');
    document.getElementById('modal-image').src = project.image;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-description').textContent = project.description;
    document.getElementById('modal-tech').innerHTML = 
      project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    modal.style.display = 'block';
  }
}