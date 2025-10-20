# CSS & JavaScript Cleanup Guide

## 🔍 Unused CSS Found

### Dark Mode Styles (20 rules - ~5-8 KB)
These styles are NOT used anywhere in the website:
- `.dark-mode .hero` (and related)
- `.dark-mode .section-title`
- `.dark-mode .about`
- `.dark-mode .skill-item`
- `.dark-mode .tech-stack`
- `.dark-mode .tech-item`
- And 14 more...

**Action**: Remove all `.dark-mode` prefixed styles from `style/simple-layout.css`

**Estimated Savings**: 5-8 KB

---

## 🔍 Unused JavaScript Found

### Optional Libraries (Not critical)
1. **Lottie animations** - Not used in current design
2. **Custom cursor effect** - Can be disabled for mobile
3. **Particle system** - Only decorative

**Current**: All libraries are loaded but some features are conditional

**Potential**: Can be made optional or deferred

**Estimated Savings**: 5-10 KB (if removed particle system code)

---

## 🎯 Files to Optimize

### CSS Files (54.33 KB total)
- `style/simple-layout.css` - 32.8 KB
  - Has dark-mode styles (unused)
  - Some animation utilities may be unused
  
- `style/animations.css` - 21.53 KB
  - Mostly used, but check for unused keyframes

### JavaScript Files (~20 KB total)
- `script/enhanced-animations.js` - 280 lines
  - Custom cursor (conditional)
  - Particles (decorative)
  - Type writer (not used in current design)
  
- `script/performance.js` - 150+ lines
  - All used for monitoring

- `script/polyfills.js` - 80+ lines
  - All used for compatibility

---

## 💡 Optimization Strategy

### Phase 1: Remove Dark Mode (EASY - 5-8 KB savings)
Delete all `.dark-mode` CSS rules from `simple-layout.css`

### Phase 2: Optional Features (MEDIUM)
- Make particle system optional (lazy load)
- Make custom cursor optional (mobile detection)
- Remove unused type writer code

### Phase 3: CSS Minification (ADVANCED)
- Minify CSS files using online minifier
- Inline critical CSS in <head>
- Use media query breakpoints efficiently

---

## Implementation Priority

1. **HIGH Impact (Easy)**
   - [x] Remove dark-mode styles (~8 KB)
   - [x] Remove unused animations
   
2. **MEDIUM Impact (Moderate)**
   - [ ] Lazy load particle system
   - [ ] Disable cursor on mobile by default
   - [ ] Remove unused JS functions
   
3. **LOW Impact (Complex)**
   - [ ] CSS minification
   - [ ] Code splitting
   - [ ] Dynamic imports

---

## Performance Impact

| Change | Savings | Difficulty |
|--------|---------|------------|
| Remove dark-mode CSS | 5-8 KB | Easy |
| Lazy load particles | 3-5 KB | Medium |
| Minify CSS | 10-15% | Medium |
| Remove unused JS | 5-10 KB | Medium |
| **TOTAL** | **~25-35 KB** | |

