// Contact Section Component
class Contact {
  constructor(config) {
    this.config = config;
  }

  render() {
    return `
      <section id="contact" class="contact">
        <div class="container">
          <div class="section-header" data-aos="fade-up">
            <h2 class="section-title">Get In Touch</h2>
            <p class="section-subtitle">Let's work together on your next project</p>
          </div>
          
          <div class="contact-content">
            <div class="contact-info" data-aos="fade-right">
              <div class="contact-item">
                <i class="fas fa-envelope"></i>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:${this.config.personal.email}">${this.config.personal.email}</a></p>
                </div>
              </div>
              <div class="contact-item">
                <i class="fas fa-phone"></i>
                <div>
                  <strong>Phone</strong>
                  <p>${this.config.personal.phone}</p>
                </div>
              </div>
              <div class="contact-item">
                <i class="fab fa-linkedin"></i>
                <div>
                  <strong>LinkedIn</strong>
                  <p><a href="${this.config.social.linkedin}" target="_blank">linkedin.com/in/badadarrs</a></p>
                </div>
              </div>
              <div class="contact-item">
                <i class="fab fa-github"></i>
                <div>
                  <strong>GitHub</strong>
                  <p><a href="${this.config.social.github}" target="_blank">github.com/badadarr</a></p>
                </div>
              </div>
            </div>
            
            <div class="contact-form" data-aos="fade-left">
              <h3>Send a Message</h3>
              <form id="contact-form" action="https://formspree.io/f/${this.config.form.formspreeId}" method="POST">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="_replyto" placeholder="Your Email" required>
                </div>
                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input type="text" id="subject" name="_subject" placeholder="Subject" required>
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                </div>
                
                <input type="hidden" name="_next" value="">
                <input type="hidden" name="_captcha" value="false">
                
                <button type="submit" class="btn-primary" id="submit-btn">
                  <i class="fas fa-paper-plane"></i>
                  <span id="btn-text">Send Message</span>
                </button>
                <div id="form-status" class="form-status"></div>
              </form>
              
              <div class="alternative-contact">
                <p><strong>Alternative:</strong> You can also email me directly at:</p>
                <a href="${this.config.social.email}?subject=${encodeURIComponent(this.config.form.emailSubject)}" class="direct-email-btn">
                  <i class="fas fa-envelope"></i>
                  Send Direct Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  init() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const btnText = document.getElementById('btn-text');
    const formStatus = document.getElementById('form-status');

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Update button state
        submitBtn.disabled = true;
        btnText.textContent = 'Sending...';
        
        try {
          const formData = new FormData(form);
          const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });
          
          if (response.ok) {
            formStatus.innerHTML = `<div class="success-message">${this.config.form.successMessage}</div>`;
            form.reset();
          } else {
            throw new Error('Form submission failed');
          }
        } catch (error) {
          formStatus.innerHTML = `<div class="error-message">${this.config.form.errorMessage}</div>`;
        } finally {
          // Reset button state
          submitBtn.disabled = false;
          btnText.textContent = 'Send Message';
        }
      });
    }
  }
}