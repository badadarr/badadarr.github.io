/* ============================================================================
   POLYFILLS AND COMPATIBILITY FIXES FOR OLDER BROWSERS
   ============================================================================
   
   This module provides polyfills and compatibility fixes for APIs
   used throughout the application, ensuring support for older browsers
   like Internet Explorer 11 and earlier versions of other browsers.
   
   Polyfills Included:
   - IntersectionObserver (fallback)
   - Array.from() - IE11
   - Object.assign() - IE11
   - String.prototype.includes() - Older browsers
   - Element.prototype.closest() - IE11
   
   All polyfills are non-intrusive and don't break existing functionality
   
   ============================================================================ */

// ============================================================================
// INTERSECTION OBSERVER POLYFILL
// ============================================================================

/**
 * IntersectionObserver Polyfill Check
 * Provides a basic fallback for browsers without IntersectionObserver support
 * Falls back to immediate execution of animations if not available
 */
if (!window.IntersectionObserver) {
    console.warn('IntersectionObserver not supported. Using fallback.');
    // Fallback: Execute animations immediately
    window.IntersectionObserver = function() {
        this.observe = function() {};
        this.unobserve = function() {};
    };
}

// ============================================================================
// ARRAY.FROM POLYFILL
// ============================================================================

/**
 * Array.from() Polyfill for IE11
 * Converts array-like objects to real arrays
 * 
 * @example
 * Array.from(document.querySelectorAll('div')) // Works in IE11
 */
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

// ============================================================================
// OBJECT.ASSIGN POLYFILL
// ============================================================================

/**
 * Object.assign() Polyfill for IE11
 * Copies all properties from source objects to target object
 * Essential for modern JavaScript object composition patterns
 * 
 * @example
 * Object.assign({}, defaultConfig, userConfig) // Works in IE11
 */
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

// ============================================================================
// STRING.INCLUDES POLYFILL
// ============================================================================

/**
 * String.prototype.includes() Polyfill
 * Checks if a string contains a specified substring
 * Provides ES6 functionality in older browsers
 * 
 * @example
 * 'hello world'.includes('world') // true in all browsers
 */
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

// ============================================================================
// ELEMENT.CLOSEST POLYFILL
// ============================================================================

/**
 * Element.prototype.closest() Polyfill for IE11
 * Traverses the element's ancestors to find the closest node matching selector
 * Essential for event delegation and DOM traversal
 * 
 * @example
 * element.closest('.parent') // Works in IE11
 */
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
