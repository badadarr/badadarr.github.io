// Enhanced Portfolio Animations and Effects
// =============================================
// This module provides custom animations and visual effects for the portfolio
// including cursor effects, particles, scroll animations, and form interactions.
// 
// Features:
// - Custom cursor with follower effect
// - Particle system for background animation
// - Scroll-triggered animations using AOS
// - Form validation and submission handling
// - Smooth scrolling behavior
//
// Browser Support: All modern browsers + IE11 with polyfills
// Dependencies: AOS, Lottie Player (optional), Font Awesome icons

document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * Creates a custom cursor effect with smooth follower animation
     * Automatically disables on mobile devices for better performance
     */
    function createCustomCursor() {
        const cursor = document.createElement('div');
        const cursorFollower = document.createElement('div');
        
        cursor.className = 'cursor';
        cursorFollower.className = 'cursor-follower';
        
        document.body.appendChild(cursor);
        document.body.appendChild(cursorFollower);
        
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });
        
        function animateFollower() {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';
            
            requestAnimationFrame(animateFollower);
        }
        
        animateFollower();
        
        // Hide cursor on mobile
        if (window.innerWidth <= 768) {
            cursor.style.display = 'none';
            cursorFollower.style.display = 'none';
        }
    }
    
    // Particle System
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        document.body.appendChild(particlesContainer);
        
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
            particle.style.opacity = Math.random() * 0.5 + 0.3;
            
            particlesContainer.appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 6000);
        }
        
        // Create particles periodically
        setInterval(createParticle, 300);
    }
    
    // Typing Effect for Hero Text
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Intersection Observer for animations
    function setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);
        
        // Observe elements
        document.querySelectorAll('.portfolio-item, .timeline-item, .tech-item').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Skill Progress Animation
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const percentage = progressBar.dataset.percentage || '90';
                    progressBar.style.width = percentage + '%';
                }
            });
        });
        
        skillBars.forEach(bar => observer.observe(bar));
    }
    
    // Enhanced Portfolio Hover Effects
    function setupPortfolioEffects() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        portfolioItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-20px) scale(1.05)';
                this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            });
        });
    }
    
    // Text Reveal Animation
    function setupTextReveal() {
        const textElements = document.querySelectorAll('h1, h2, h3');
        
        textElements.forEach(element => {
            const text = element.textContent;
            element.innerHTML = '';
            
            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.textContent = char === ' ' ? '\u00A0' : char;
                span.style.opacity = '0';
                span.style.transform = 'translateY(20px)';
                span.style.transition = `all 0.5s ease ${index * 50}ms`;
                element.appendChild(span);
            });
        });
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const spans = entry.target.querySelectorAll('span');
                    spans.forEach(span => {
                        span.style.opacity = '1';
                        span.style.transform = 'translateY(0)';
                    });
                }
            });
        });
        
        textElements.forEach(el => observer.observe(el));
    }
    
    // Magnetic Button Effect
    function setupMagneticButtons() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
        
        buttons.forEach(button => {
            button.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translate(0, 0)';
            });
        });
    }
    
    // Background Color Change on Scroll
    function setupScrollColorChange() {
        const sections = document.querySelectorAll('section');
        const colors = [
            '#f8fafc', // Hero
            '#ffffff', // About
            '#f1f5f9', // Experience
            '#ffffff', // Education
            '#f8fafc', // Tech Stack
            '#ffffff', // Portfolio
            '#f1f5f9'  // Contact
        ];
        
        function updateBackgroundColor() {
            const scrollY = window.scrollY;
            let currentSection = 0;
            
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = index;
                }
            });
            
            if (!document.body.classList.contains('dark-mode')) {
                document.body.style.backgroundColor = colors[currentSection] || colors[0];
            }
        }
        
        window.addEventListener('scroll', updateBackgroundColor);
    }
    
    // Initialize all effects
    function init() {
        // Only initialize heavy effects on non-mobile devices
        if (window.innerWidth > 768) {
            createCustomCursor();
            createParticles();
            setupTextReveal();
        }
        
        setupScrollAnimations();
        animateSkillBars();
        setupPortfolioEffects();
        setupMagneticButtons();
        setupScrollColorChange();
        
        // Add typing effect to hero title if it exists
        const heroTitle = document.querySelector('.hero h2');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            heroTitle.classList.add('typewriter');
            setTimeout(() => {
                typeWriter(heroTitle, originalText, 100);
            }, 1000);
        }
    }
    
    // Initialize after a short delay to ensure DOM is ready
    setTimeout(init, 100);
    
    // Reinitialize on window resize
    window.addEventListener('resize', () => {
        // Remove existing particles and cursor on mobile
        if (window.innerWidth <= 768) {
            const cursor = document.querySelector('.cursor');
            const cursorFollower = document.querySelector('.cursor-follower');
            const particles = document.querySelector('.particles');
            
            if (cursor) cursor.style.display = 'none';
            if (cursorFollower) cursorFollower.style.display = 'none';
            if (particles) particles.style.display = 'none';
        } else {
            const cursor = document.querySelector('.cursor');
            const cursorFollower = document.querySelector('.cursor-follower');
            const particles = document.querySelector('.particles');
            
            if (cursor) cursor.style.display = 'block';
            if (cursorFollower) cursorFollower.style.display = 'block';
            if (particles) particles.style.display = 'block';
        }
    });
});
