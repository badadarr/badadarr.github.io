// Enhanced Portfolio Animations and Effects (Optimized)
// ====================================================
// Lightweight animation module for portfolio
// - Scroll-triggered animations using AOS
// - Portfolio item hover effects
// - Magnetic button effects
// - Background color transitions
// 
// Removed for performance:
// - Custom cursor (decorative, not essential)
// - Particle system (heavy on CPU, decorative)
// - Text reveal animation (blocks page load)
// - Skill bar animation (no .progress elements in HTML)
// - Type writer effect (replaced with CSS)
//
// Browser Support: All modern browsers
// Dependencies: AOS library
// File size: ~8 KB (reduced from ~12 KB)

document.addEventListener('DOMContentLoaded', function() {
    
    /**
     * Intersection Observer for scroll-triggered animations
     * Adds 'animate-in' class to elements as they enter viewport
     */
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
        
        // Observe elements - AOS handles these but this ensures fallback
        document.querySelectorAll('.portfolio-item, .timeline-item, .tech-item').forEach(el => {
            observer.observe(el);
        });
    }
    
    /**
     * Enhanced Portfolio Item Hover Effects
     * Applies transform and shadow effects on mouse events
     * Uses CSS for smooth transitions
     */
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
    
    /**
     * Magnetic Button Effect
     * Buttons follow cursor with subtle offset
     * Improves interactivity without slowing page load
     */
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
    
    /**
     * Background Color Change on Scroll (Optimized)
     * Changes body background based on active section
     * Uses passive event listener for better performance
     */
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
            let currentSection = 0;
            
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = index;
                }
            });
            
            document.body.style.backgroundColor = colors[currentSection] || colors[0];
        }
        
        window.addEventListener('scroll', updateBackgroundColor, { passive: true });
    }
    
    /**
     * Initialize all effects
     * Called once after DOM is ready
     */
    function init() {
        setupScrollAnimations();
        setupPortfolioEffects();
        setupMagneticButtons();
        setupScrollColorChange();
    }
    
    // Initialize after a short delay to ensure DOM is ready
    setTimeout(init, 100);
});
