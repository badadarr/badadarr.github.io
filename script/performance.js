// Performance Monitoring & Analytics

// 1. Web Vitals Measurement
function measureWebVitals() {
    // Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
                clsValue += entry.value;
                console.log('CLS:', clsValue);
            }
        }
    }).observe({ entryTypes: ['layout-shift'] });

    // First Input Delay (FID)
    new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
            console.log('FID:', entry.processingDuration);
        });
    }).observe({ entryTypes: ['first-input'] });
}

// 2. Page Performance Metrics
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

// 3. Resource Performance
function monitorResourcePerformance() {
    if (window.performance && window.performance.getEntriesByType) {
        const resources = window.performance.getEntriesByType('resource');
        
        console.log('=== Resource Performance ===');
        resources.forEach(resource => {
            console.log(`${resource.name}: ${Math.round(resource.duration)}ms`);
        });
    }
}

// 4. Memory Usage (Chrome only)
function checkMemoryUsage() {
    if (performance.memory) {
        const memory = performance.memory;
        console.log('=== Memory Usage ===');
        console.log(`Used JS Heap: ${Math.round(memory.usedJSHeapSize / 1048576)}MB`);
        console.log(`Total JS Heap: ${Math.round(memory.totalJSHeapSize / 1048576)}MB`);
        console.log(`JS Heap Limit: ${Math.round(memory.jsHeapSizeLimit / 1048576)}MB`);
    }
}

// 5. Image Loading Performance
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

// Initialize on page load
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
