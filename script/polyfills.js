// Polyfills and Compatibility Fixes for older browsers

// 1. IntersectionObserver Polyfill Check
if (!window.IntersectionObserver) {
    console.warn('IntersectionObserver not supported. Using fallback.');
    // Fallback: Execute animations immediately
    window.IntersectionObserver = function() {
        this.observe = function() {};
        this.unobserve = function() {};
    };
}

// 2. Array.from Polyfill for IE11
if (!Array.from) {
    Array.from = function(arrayLike) {
        if (arrayLike == null) {
            throw new TypeError('Array.from requires an array-like object');
        }
        var arr = [];
        var len = arrayLike.length;
        for (var i = 0; i < len; i++) {
            arr.push(arrayLike[i]);
        }
        return arr;
    };
}

// 3. Object.assign Polyfill for IE11
if (typeof Object.assign !== 'function') {
    Object.defineProperty(Object, 'assign', {
        value: function assign(target, varArgs) {
            'use strict';
            if (target === null || target === undefined) {
                throw new TypeError('Cannot convert undefined or null to object');
            }
            
            var to = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];
                if (nextSource !== null && nextSource !== undefined) {
                    for (var nextKey in nextSource) {
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        }
    });
}

// 4. String.includes Polyfill for older browsers
if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        'use strict';
        if (typeof start !== 'number') {
            start = 0;
        }
        return start + search.length <= this.length &&
            this.indexOf(search, start) !== -1;
    };
}

// 5. Element.closest Polyfill for IE11
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

// 6. Safe Error Handling
window.addEventListener('error', function(event) {
    console.error('JavaScript Error:', event.message, event.filename, event.lineno);
});

// 7. Check for required APIs
function checkBrowserSupport() {
    var unsupported = [];
    
    if (!window.fetch) {
        unsupported.push('Fetch API');
    }
    
    if (!window.Promise) {
        unsupported.push('Promises');
    }
    
    if (unsupported.length > 0) {
        console.warn('Unsupported features: ' + unsupported.join(', '));
    }
    
    return unsupported.length === 0;
}

// Run on page load
document.addEventListener('DOMContentLoaded', checkBrowserSupport);
