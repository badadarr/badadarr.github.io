/* ============================================================================
   ENHANCED PORTFOLIO ANIMATIONS AND EFFECTS (OPTIMIZED)
   ============================================================================
   
   Lightweight animation module for portfolio providing:
   - Scroll-triggered animations using AOS
   - Portfolio item hover effects with transforms
   - Magnetic button effects following cursor
   - Background color transitions based on scroll position
   
   Performance Optimizations:
   - Removed custom cursor (decorative, not essential)
   - Removed particle system (heavy on CPU)
   - Removed text reveal animation (blocks page load)
   - Removed skill bar animation (no .progress elements in HTML)
   - Removed typewriter effect (replaced with CSS)
   
   Browser Support: All modern browsers
   Dependencies: AOS library
   File Size: ~8 KB (reduced from ~12 KB)
   
   ============================================================================ */

document.addEventListener('DOMContentLoaded', function() {
    // ========================================================================
    // SCROLL ANIMATIONS SETUP
    // ========================================================================
    // ========================================================================
    // SCROLL ANIMATIONS SETUP
    // ========================================================================
    
    /**
     * Setup Scroll-Triggered Animations
     * Uses Intersection Observer to add 'animate-in' class when elements enter viewport
     * Provides fallback for AOS library animations
     * 
     * @function setupScrollAnimations
     * @returns {void}
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
    
    // ========================================================================
    // PORTFOLIO EFFECTS
    // ========================================================================
    // ========================================================================
    // PORTFOLIO EFFECTS
    // ========================================================================
    
    /**
     * Setup Portfolio Item Hover Effects
     * Applies transform and shadow effects on mouse enter/leave events
     * Smooth transitions handled by CSS for optimal performance
     * 
     * @function setupPortfolioEffects
     * @returns {void}
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
    
    // ========================================================================
    // MAGNETIC BUTTON EFFECTS
    // ========================================================================
    
    /**
     * Setup Magnetic Button Effect
     * Buttons follow cursor movement with subtle offset
     * Improves interactivity without slowing page load
     * 
     * @function setupMagneticButtons
     * @returns {void}
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
    
    // ========================================================================
    // SCROLL COLOR CHANGE
    // ========================================================================
    
    /**
     * Setup Background Color Change on Scroll (Optimized)
     * Changes body background color based on active section in viewport
     * Uses passive event listener for better performance
     * 
     * @function setupScrollColorChange
     * @returns {void}
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
     * Initialize Module
     * Triggers all animation and effect setup functions
     * Called once after a short delay to ensure DOM is fully ready
     * 
     * @function init
     * @returns {void}
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
