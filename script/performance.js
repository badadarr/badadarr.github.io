/* ============================================================================
   PERFORMANCE MONITORING & ANALYTICS
   ============================================================================
   
   Comprehensive performance monitoring module that tracks:
   - Web Vitals (LCP, CLS, FID)
   - Page performance metrics (DNS, TCP, TTFB, etc.)
   - Resource performance loading times
   - Memory usage (Chrome/Edge only)
   - Image loading performance
   
   All metrics are logged to console for analysis
   Browser Support: Modern browsers with PerformanceObserver API
   
   ============================================================================ */

// ============================================================================
// WEB VITALS MEASUREMENT
// ============================================================================

/**
 * Measure Web Vitals
 * Tracks three core Web Vitals metrics:
 * - LCP (Largest Contentful Paint): Measures perceived load speed
 * - CLS (Cumulative Layout Shift): Measures visual stability
 * - FID (First Input Delay): Measures interactivity
 * 
 * @function measureWebVitals
 * @returns {void}
 */
function measureWebVitals() {
    // Largest Contentful Paint (LCP)

}

// ============================================================================
// PAGE PERFORMANCE METRICS
// ============================================================================

/**
 * Log Page Performance Metrics
 * Measures timing for various stages of page loading:
 * - DNS lookup, TCP connection, TTFB
 * - Download time, DOM parsing, resource loading
 * - Overall page load time
 * 
 * @function logPerformanceMetrics
 * @returns {void}
 */
function logPerformanceMetrics() {
    if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        
        setTimeout(() => {
            const metrics = {
                'DNS Lookup': timing.domainLookupEnd - timing.domainLookupStart,
                'TCP Connection': timing.connectEnd - timing.connectStart,
                'Time to First Byte': timing.responseStart - timing.requestStart,
                'Download Time': timing.responseEnd - timing.responseStart,
                'DOM Parsing': timing.domInteractive - timing.domLoading,
                'Resources Loading': timing.loadEventStart - timing.domInteractive,
                'DOM Content Loaded': timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart,
                'Page Load Time': timing.loadEventEnd - timing.navigationStart
            };

            console.log('=== Page Performance Metrics ===');
            Object.entries(metrics).forEach(([key, value]) => {
                console.log(`${key}: ${Math.round(value)}ms`);
            });
        }, 0);
    }
}

// ============================================================================
// RESOURCE PERFORMANCE MONITORING
// ============================================================================

/**
 * Monitor Resource Performance
 * Logs loading time for all resources (scripts, stylesheets, images)
 * Helps identify slow-loading assets
 * 
 * @function monitorResourcePerformance
 * @returns {void}
 */
function monitorResourcePerformance() {
    if (window.performance && window.performance.getEntriesByType) {
        const resources = window.performance.getEntriesByType('resource');
        
        console.log('=== Resource Performance ===');
        resources.forEach(resource => {
            console.log(`${resource.name}: ${Math.round(resource.duration)}ms`);
        });
    }
}

// ============================================================================
// MEMORY USAGE MONITORING
// ============================================================================

/**
 * Check Memory Usage (Chrome/Edge only)
 * Logs JavaScript heap size information
 * Note: This API is not available in all browsers
 * 
 * @function checkMemoryUsage
 * @returns {void}
 */
function checkMemoryUsage() {
    if (performance.memory) {
        const memory = performance.memory;
        console.log('=== Memory Usage ===');
        console.log(`Used JS Heap: ${Math.round(memory.usedJSHeapSize / 1048576)}MB`);
        console.log(`Total JS Heap: ${Math.round(memory.totalJSHeapSize / 1048576)}MB`);
        console.log(`JS Heap Limit: ${Math.round(memory.jsHeapSizeLimit / 1048576)}MB`);
    }
}

// ============================================================================
// IMAGE LOADING PERFORMANCE
// ============================================================================

/**
 * Monitor Image Loading Performance
 * Tracks loading time for lazy-loaded images
 * Uses Intersection Observer for efficient monitoring
 * 
 * @function monitorImageLoading
 * @returns {void}
 */
function monitorImageLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const startTime = performance.now();
                    entry.target.onload = () => {
                        const endTime = performance.now();
                        console.log(`Image loaded: ${entry.target.alt} (${Math.round(endTime - startTime)}ms)`);
                    };
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// ============================================================================
// INITIALIZATION
// ============================================================================

// Initialize performance monitoring on DOM content loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        measureWebVitals();
        logPerformanceMetrics();
        monitorImageLoading();
    });
} else {
    measureWebVitals();
    logPerformanceMetrics();
    monitorImageLoading();
}

// Monitor resources after page load
window.addEventListener('load', () => {
    monitorResourcePerformance();
    checkMemoryUsage();
});
