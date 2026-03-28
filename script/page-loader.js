/**
 * page-loader.js
 * Smart multi-page section loader.
 * Detects the current page and fetches only the relevant sections.
 * Replaces the old single-page loader.js
 */

// Base path helper for GitHub Pages compatibility
const BASE = (() => {
  const scripts = document.querySelectorAll("script[src]");
  for (const s of scripts) {
    const src = s.getAttribute("src");
    if (src && src.includes("page-loader.js")) {
      return src.replace(/script\/page-loader\.js$/, "");
    }
  }
  return "";
})();

// Determine current page — handle both /experience.html and /experience
const PAGE = (() => {
  const path = window.location.pathname;
  if (path.includes("projects")) return "projects";
  if (path.includes("experience")) return "experience";
  return "home"; // index.html or /
})();

// Section lists per page
const PAGE_SECTIONS = {
  home: [
    "sections/navbar.html",
    "sections/hero.html",
    "sections/about-home.html",
    "sections/portfolio-featured.html",
    "sections/dev-log.html",
    "sections/contact.html",
    "sections/footer.html",
  ],
  projects: [
    "sections/navbar.html",
    "sections/page-hero.html",
    "sections/portfolio.html",
    "sections/tech-stack.html",
    "sections/footer.html",
  ],
  experience: [
    "sections/navbar.html",
    "sections/page-hero.html",
    "sections/experience.html",
    "sections/education.html",
    "sections/footer.html",
  ],
};

async function loadPageSections() {
  const app = document.getElementById("app");
  if (!app) {
    console.error("[page-loader.js] Element #app tidak ditemukan.");
    return;
  }

  // Set data-page attribute for per-page CSS hooks
  document.documentElement.setAttribute("data-page", PAGE);

  // Set page-hero data attribute for dynamic title
  const heroTitles = {
    projects: {
      title: "My Projects",
      sub: "A showcase of my recent work & experiments",
    },
    experience: {
      title: "Experience & Education",
      sub: "My career journey and academic background",
    },
  };
  if (heroTitles[PAGE]) {
    document.documentElement.setAttribute(
      "data-page-title",
      heroTitles[PAGE].title,
    );
    document.documentElement.setAttribute(
      "data-page-sub",
      heroTitles[PAGE].sub,
    );
  }

  const sections = PAGE_SECTIONS[PAGE] || PAGE_SECTIONS.home;

  try {
    for (const url of sections) {
      const response = await fetch(BASE + url);
      if (!response.ok) {
        console.warn(
          `[page-loader.js] Gagal memuat: ${url} (${response.status})`,
        );
        continue;
      }
      const html = await response.text();
      app.insertAdjacentHTML("beforeend", html);
    }

    // Highlight active nav link based on current page
    document.querySelectorAll(".nav-link").forEach((link) => {
      const href = link.getAttribute("href") || "";
      const isActive =
        (PAGE === "home" && (href === "index.html" || href === "./")) ||
        (PAGE === "projects" && href.includes("projects.html")) ||
        (PAGE === "experience" && href.includes("experience.html"));
      if (isActive) link.classList.add("nav-active");
    });

    // On homepage: rewrite "index.html#section" links to just "#section"
    // so that main.js smooth scroll can intercept them
    if (PAGE === "home") {
      document
        .querySelectorAll(".nav-link, .footer-links a")
        .forEach((link) => {
          const href = link.getAttribute("href") || "";
          if (href.startsWith("index.html#")) {
            link.setAttribute("href", href.replace("index.html#", "#"));
          }
        });
    }

    // Init AOS
    if (typeof AOS !== "undefined") {
      AOS.init({ duration: 800, once: true, offset: 100 });
    }

    // Dispatch event for other scripts
    document.dispatchEvent(new Event("sectionsLoaded"));
  } catch (error) {
    console.error("[page-loader.js] Error:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadPageSections);
