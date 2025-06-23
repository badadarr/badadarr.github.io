$(document).ready(function () {
  $(".menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $(".top-nav .nav-link").on("click", function () {
    $(".menu-toggler").toggleClass("open");
    $(".top-nav").toggleClass("open");
  });

  $('nav a[href*="#"]').on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100,
      },
      2000
    );
  });

  $("#up").on("click", function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  AOS.init({
    easing: "ease",
    duration: 1800,
  });  // Enhanced layout optimization after page load
  $(window).on('load', function() {
    // Apply aggressive layout optimizations
    applyCompactLayout();
    optimizeLayoutSpacing();
    removeGitHubContactGap();
    optimizeChartContainers();
    optimizeImageSizing();
    
    // Force compact spacing
    forceCompactSpacing();
  });

  // Function to apply compact layout globally
  function applyCompactLayout() {
    $('body').addClass('compact-layout');
    
    // Override any excessive padding/margins
    $('section').css({
      'padding': '1.5rem 0',
      'margin': '0'
    });
    
    $('.github-stats').css({
      'padding': '1rem 0 0.5rem 0',
      'margin': '0'
    });
    
    $('.contact').css({
      'padding': '1.5rem 0',
      'margin': '0'
    });
  }

  // Function to force compact spacing on all elements
  function forceCompactSpacing() {
    // Remove excessive margins from common elements
    $('h1, h2, h3, h4, h5, h6').css({
      'margin-top': '0',
      'margin-bottom': '0.8rem'
    });
    
    $('p').css({
      'margin-bottom': '0.8rem',
      'line-height': '1.3'
    });
    
    $('.section-heading').css({
      'margin-bottom': '1.5rem',
      'margin-top': '0'
    });
    
    // Force container optimization
    $('.container').css({
      'padding-top': '0',
      'padding-bottom': '0'
    });
    
    // Optimize all cards and components
    $('.stat-card, .github-card, .portfolio-card').css({
      'margin': '0',
      'padding': '1rem'
    });
    
    // Remove gaps from grid layouts
    $('.stats-grid, .charts-container, .activity-stats').css({
      'margin': '1rem 0',
      'padding': '0'
    });
  }

  // Function to optimize overall layout spacing
  function optimizeLayoutSpacing() {
    // Reduce section-heading margins
    $('.section-heading').css({
      'margin-bottom': '2rem',
      'margin-top': '0'
    });
    
    // Optimize container spacing
    $('.container').css({
      'padding-top': '0',
      'padding-bottom': '0'
    });
    
    // Compact stats grid
    $('.stats-grid').css({
      'margin': '1rem 0',
      'gap': '1.5rem'
    });
    
    // Optimize activity sections
    $('.contribution-section, .trophies-section').css({
      'margin': '1.5rem 0',
      'padding': '0.5rem 0'
    });
  }

  // Function to optimize chart containers
  function optimizeChartContainers() {
    $('.charts-container').css({
      'margin': '1rem 0',
      'height': 'auto'
    });
    
    $('.chart-item').css({
      'margin': '0',
      'padding': '0'
    });
    
    // Ensure charts are properly sized
    $('canvas').each(function() {
      $(this).css({
        'max-height': '200px',
        'width': '100%'
      });
    });
  }

  // Enhanced function to remove gap between GitHub Stats and Contact sections
  function removeGitHubContactGap() {
    const githubSection = $('.github-stats');
    const contactSection = $('.contact');
    
    if (githubSection.length && contactSection.length) {
      // Calculate exact positions
      const githubBottom = githubSection.offset().top + githubSection.outerHeight(true);
      const contactTop = contactSection.offset().top;
      const gap = contactTop - githubBottom;
      
      // If gap is larger than expected, adjust it
      if (gap > 5) {
        contactSection.css({
          'margin-top': '-' + (gap - 2) + 'px',
          'position': 'relative',
          'z-index': '2'
        });
      }
      
      // Ensure GitHub activity section has no bottom spacing
      $('.github-activity').css({
        'margin-bottom': '0',
        'padding-bottom': '1rem'
      });
      
      // Optimize stat cards
      $('.stat-card').css({
        'margin': '0',
        'padding': '1rem'
      });
    }
  }

  // Function to optimize image loading and sizing
  function optimizeImageSizing() {
    // GitHub stats images
    $('.github-card img').css({
      'max-height': '200px',
      'width': '100%',
      'object-fit': 'contain'
    });
    
    // Contribution graph
    $('.contribution-graph img').css({
      'max-height': '300px',
      'width': '100%'
    });
    
    // Trophies
    $('.trophies-container img').css({
      'max-height': '150px',
      'width': '100%'
    });
  }

  // Optimize section spacing on scroll and resize
  $(window).on('scroll resize', function() {
    removeGitHubContactGap();
    optimizeImageSizing();
  });

  // Fix gap after AOS animations complete
  $(document).on('aos:in', function() {
    setTimeout(function() {
      removeGitHubContactGap();
      optimizeLayoutSpacing();
    }, 100);
  });

  // Additional optimization after all content loads
  $(document).ready(function() {
    setTimeout(function() {
      optimizeLayoutSpacing();
      optimizeImageSizing();
      removeGitHubContactGap();
    }, 1000);
  });
});
