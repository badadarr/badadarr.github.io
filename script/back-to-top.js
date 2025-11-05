// Back to Top Button with Dynamic Color Adaptation
(function() {
  const backToTop = document.querySelector('.back-to-top');
  if (!backToTop) return;

  // Define sections with gradient backgrounds
  const gradientSections = ['contact'];
  
  function updateButtonStyle() {
    const scrollY = window.scrollY;
    
    // Show/hide button
    if (scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
    
    // Check which section is currently in view
    let isOnGradient = false;
    
    gradientSections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const buttonRect = backToTop.getBoundingClientRect();
        
        // Check if button overlaps with gradient section
        if (rect.top < buttonRect.bottom && rect.bottom > buttonRect.top) {
          isOnGradient = true;
        }
      }
    });
    
    // Apply appropriate style
    if (isOnGradient) {
      backToTop.classList.add('on-gradient');
      backToTop.classList.remove('on-white');
    } else {
      backToTop.classList.add('on-white');
      backToTop.classList.remove('on-gradient');
    }
  }
  
  // Smooth scroll to top
  backToTop.addEventListener('click', () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  });
  
  // Update on scroll with throttle
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateButtonStyle();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // Initial check
  updateButtonStyle();
})();
