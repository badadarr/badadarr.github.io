# 🤝 Contributing Guidelines

Thank you for your interest in contributing to this portfolio project! This document provides guidelines and instructions for contributing.

## 📋 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Follow the existing code style
- Test your changes thoroughly

## 🔄 Development Workflow

### 1. Fork & Clone
```bash
git clone https://github.com/badadarr/badadarr.github.io.git
cd badadarr.github.io
```

### 2. Create Feature Branch
```bash
git checkout -b feature/your-feature-name
# or for bugs
git checkout -b fix/bug-description
```

### 3. Make Changes
- Follow code style guidelines (see below)
- Write meaningful commit messages
- Test your changes locally
- Ensure backward compatibility

### 4. Commit & Push
```bash
git add .
git commit -m "feat: Add descriptive commit message"
git push origin feature/your-feature-name
```

### 5. Submit Pull Request
- Clear title and description
- Reference any related issues
- Include screenshots if UI changes
- Link to any related PRs

## 📝 Code Style Guide

### HTML
```html
<!-- Use semantic tags -->
<section id="feature">
  <div class="container">
    <h2>Feature Title</h2>
    <!-- Content -->
  </div>
</section>

<!-- Add ARIA labels for accessibility -->
<nav aria-label="Main navigation">
  <!-- Navigation links -->
</nav>

<!-- Use descriptive alt text -->
<img src="image.png" alt="Descriptive alt text" loading="lazy" />
```

### CSS
```css
/* Follow BEM naming convention */
.block { }
.block__element { }
.block--modifier { }

/* Group related properties */
.selector {
  /* Layout */
  display: flex;
  align-items: center;

  /* Spacing */
  margin: 0;
  padding: 1rem;

  /* Styling */
  color: #333;
  background: #fff;

  /* Effects */
  transition: all 0.3s ease;
}

/* Mobile-first approach */
@media (min-width: 768px) {
  .selector {
    /* Tablet and up */
  }
}
```

### JavaScript
```javascript
// Use descriptive variable names
const MAX_RETRIES = 3;
let elementCount = 0;

// Use arrow functions
const handleClick = (event) => {
  console.log('Clicked!');
};

// Add comments for complex logic
function calculateLayout() {
  // This function calculates responsive layout
  // based on viewport dimensions
  // ...
}

// Use const/let, avoid var
const myConstant = 'value';
let myVariable = 0;
```

## 🧪 Testing Guidelines

### Browser Testing
- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ IE11 (graceful degradation)

### Device Testing
- ✅ Desktop (1920px, 1366px)
- ✅ Tablet (768px)
- ✅ Mobile (375px, 425px)

### Performance Testing
```javascript
// Use browser DevTools Performance tab
// Aim for:
// - LCP < 2.5s
// - FID < 100ms
// - CLS < 0.1
```

### Accessibility Testing
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Screen reader compatibility
- [ ] Color contrast (WCAG AA minimum)
- [ ] Form label associations
- [ ] ARIA attributes presence

## 📦 Project Structure Best Practices

```
badadarr.github.io/
├── index.html              # Keep minimal, well-organized
├── style/                  # CSS files organized by purpose
│   ├── simple-layout.css   # Main layout
│   └── animations.css      # Animation-specific styles
├── script/                 # JavaScript organized logically
│   ├── polyfills.js       # Browser compatibility
│   ├── enhanced-animations.js
│   └── performance.js     # Monitoring & analytics
└── images/                 # Optimize before committing
```

## 📋 Commit Message Format

```
type(scope): subject

body (optional)

footer (optional)
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Formatting, missing semicolons, etc.
- **refactor**: Code reorganization without feature changes
- **perf**: Performance improvements
- **chore**: Build, dependencies, etc.

### Examples
```
feat(nav): Add mobile hamburger menu

fix(form): Correct email validation regex

docs: Update installation instructions

perf(images): Implement lazy loading for portfolio images
```

## 🚀 Before Submitting PR

- [ ] Code follows style guide
- [ ] All changes tested locally
- [ ] No console errors/warnings
- [ ] Commit messages are clear
- [ ] Documentation updated if needed
- [ ] No breaking changes (unless major release)
- [ ] Performance metrics maintained
- [ ] Accessibility maintained

## 📚 Resources

- [HTML Living Standard](https://html.spec.whatwg.org/)
- [CSS Best Practices](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Web Accessibility](https://www.w3.org/WAI/)
- [Web Performance](https://web.dev/performance/)

## ❓ Questions?

- Open an issue with detailed information
- Check existing issues/discussions first
- Be specific about the problem/suggestion

## 📄 License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT).

---

Happy contributing! 🎉
