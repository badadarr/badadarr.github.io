// Gunakan "strict mode" untuk penulisan kode yang lebih aman
"use strict";

const MOBILE_BREAKPOINT = 768;

/**
 * App Module
 * Mengenkapsulasi semua fungsionalitas portofolio dalam satu objek
 * untuk menghindari polusi global namespace.
 */
const App = {
  // --- PROPERTIES ---
  elements: {
    navToggle: null,
    navMenu: null,
    navbar: null,
    scrollProgress: null,
    backToTopButton: null,
    heroSection: null,
    contactForm: null,
  },

  // --- INITIALIZATION ---
  init() {
    // Tunggu hingga semua section dimuat oleh loader.js
    // loader.js akan dispatch 'sectionsLoaded' setelah semua section di-inject ke #app
    document.addEventListener("sectionsLoaded", () => {
      this.cacheDOMElements(); // 1. Simpan referensi elemen DOM
      this.bindEvents(); // 2. Pasang semua event listener
      // AOS sudah diinisialisasi oleh loader.js, tidak perlu diulang di sini
    });
  },

  // Menyimpan elemen-elemen yang sering digunakan agar tidak perlu query berulang kali
  cacheDOMElements() {
    this.elements.navToggle = document.querySelector(".nav-toggle");
    this.elements.navMenu = document.querySelector(".nav-menu");
    this.elements.navbar = document.querySelector(".navbar");
    this.elements.scrollProgress = document.querySelector(".scroll-progress");
    this.elements.backToTopButton = document.querySelector(".back-to-top");
    this.elements.heroSection = document.querySelector(".hero");
    this.elements.contactForm = document.getElementById("contact-form");
  },

  // Pusat untuk semua event listener
  bindEvents() {
    // Hanya ada SATU event listener untuk scroll
    window.addEventListener("scroll", this.handleScroll.bind(this));

    // Event listener untuk elemen spesifik
    this.elements.navToggle?.addEventListener(
      "click",
      this.toggleMobileNav.bind(this),
    );
    window.addEventListener("resize", this.handleViewportResize.bind(this));
    document.addEventListener("keydown", this.handleGlobalKeydown.bind(this));
    // Back to top button handled by back-to-top.js
    this.elements.contactForm?.addEventListener(
      "submit",
      this.handleFormSubmit.bind(this),
    );

    // Smooth scrolling untuk semua link anchor
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", this.smoothScroll.bind(this));
    });

    // Tutup mobile menu jika klik di luar area menu
    document.addEventListener("click", (e) => {
      const { navMenu, navToggle } = this.elements;
      if (
        navMenu?.classList.contains("nav-menu-active") &&
        !navMenu.contains(e.target) &&
        !navToggle?.contains(e.target)
      ) {
        this.closeMobileNav();
      }
    });

    // Experience accordion
    this.initExpAccordion();

    // Experience stats calculation
    this.initExpStats();
  },

  // --- EVENT HANDLERS & METHODS ---

  // Fungsi tunggal yang dipanggil setiap kali event scroll terjadi
  handleScroll() {
    const scrollY = window.scrollY;
    this.updateScrollProgress(scrollY);
    this.applyNavbarScroll(scrollY);
    this.applyParallaxEffect(scrollY);
  },

  // Menerapkan class 'scrolled' pada navbar saat halaman di-scroll
  applyNavbarScroll(scrollY) {
    if (!this.elements.navbar) return;
    if (scrollY > 50) {
      this.elements.navbar.classList.add("scrolled");
    } else {
      this.elements.navbar.classList.remove("scrolled");
    }
  },

  // AOS diinisialisasi oleh loader.js setelah semua section dimuat.
  // Fungsi ini dipertahankan sebagai fallback manual jika diperlukan.
  initAOS() {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 100,
        disable: window.innerWidth < 768,
      });
    }
  },

  // Mengatur buka/tutup navigasi mobile
  toggleMobileNav(forceState) {
    const { navMenu, navToggle } = this.elements;
    if (!navMenu || !navToggle) return;

    const shouldOpen =
      typeof forceState === "boolean"
        ? forceState
        : !navMenu.classList.contains("nav-menu-active");

    navMenu.classList.toggle("nav-menu-active", shouldOpen);
    navToggle.classList.toggle("active", shouldOpen);
    navToggle.setAttribute("aria-expanded", String(shouldOpen));
    document.body.classList.toggle("nav-open", shouldOpen);
  },

  closeMobileNav() {
    if (this.elements.navMenu?.classList.contains("nav-menu-active")) {
      this.toggleMobileNav(false);
    }
  },

  handleGlobalKeydown(e) {
    if (e.key === "Escape") {
      this.closeMobileNav();
    }
  },

  handleViewportResize() {
    if (window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT + 1}px)`).matches) {
      this.closeMobileNav();
    }
  },

  // Memperbarui lebar progress bar
  updateScrollProgress(scrollY) {
    if (!this.elements.scrollProgress) return;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollY / scrollHeight) * 100;
    this.elements.scrollProgress.style.width = `${scrollPercent}%`;
  },

  // Menerapkan efek parallax pada hero section (dinonaktifkan di mobile)
  applyParallaxEffect(scrollY) {
    if (!this.elements.heroSection) return;
    // Nonaktifkan parallax di layar mobile untuk performa & mencegah overflow
    if (window.innerWidth <= 768) {
      this.elements.heroSection.style.transform = "none";
      return;
    }
    this.elements.heroSection.style.transform = `translateY(${
      scrollY * 0.15
    }px)`;
  },

  // Fungsi untuk smooth scrolling
  smoothScroll(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

      // Tutup menu mobile jika sedang terbuka setelah link diklik
      if (this.elements.navMenu?.classList.contains("nav-menu-active")) {
        this.closeMobileNav();
      }
    }
  },

  // Calculate and display total experience stats + per-item duration chips
  initExpStats() {
    function parseYM(str) {
      if (!str || str === "now") return new Date();
      var parts = str.split("-");
      return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, 1);
    }
    function monthDiff(start, end) {
      return Math.max(
        0,
        (end.getFullYear() - start.getFullYear()) * 12 +
          (end.getMonth() - start.getMonth()),
      );
    }
    function formatDuration(totalMonths) {
      if (totalMonths <= 0) return "< 1 mo";
      var yrs = Math.floor(totalMonths / 12);
      var mos = totalMonths % 12;
      var parts = [];
      if (yrs > 0) parts.push(yrs + " yr" + (yrs > 1 ? "s" : ""));
      if (mos > 0) parts.push(mos + " mo" + (mos > 1 ? "s" : ""));
      return parts.join(" ");
    }

    const items = document.querySelectorAll(".exp-item[data-start]");
    if (!items.length) return;

    let totalMonths = 0;
    items.forEach((item) => {
      const start = parseYM(item.dataset.start);
      const end = parseYM(item.dataset.end);
      const months = monthDiff(start, end);
      totalMonths += months;

      const badge = item.querySelector(".badge");
      if (badge && months > 0 && !item.querySelector(".exp-duration-chip")) {
        const chip = document.createElement("span");
        chip.className = "exp-duration-chip";
        chip.textContent = formatDuration(months);
        badge.insertAdjacentElement("afterend", chip);
      }
    });

    const statEl = document.getElementById("stat-total-exp");
    if (statEl) statEl.textContent = formatDuration(totalMonths);
  },

  // Inisialisasi accordion untuk bagian Experience
  initExpAccordion() {
    const headers = document.querySelectorAll(".exp-header");
    if (!headers.length) return;

    headers.forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".exp-item");
        const isOpen = item.classList.contains("is-open");

        // Toggle item yang diklik
        item.classList.toggle("is-open", !isOpen);
        btn.setAttribute("aria-expanded", String(!isOpen));
      });
    });
  },

  // Menangani logika pengiriman form
  handleFormSubmit(e) {
    const form = e.currentTarget;
    const action = form.getAttribute("action");

    // Fallback jika Formspree tidak dikonfigurasi
    if (!action || action.includes("YOUR_FORM_ID")) {
      e.preventDefault();
      alert("Contact form is not configured yet.");
      return;
    }

    // Tampilkan status loading saat form dikirim
    const submitBtn = form.querySelector("#submit-btn");
    const btnText = form.querySelector("#btn-text");
    const formStatus = form.querySelector("#form-status");

    submitBtn.disabled = true;
    btnText.innerHTML = '<span class="spinner"></span> Sending...';
    formStatus.textContent = "Sending your message...";
    formStatus.className = "form-status loading";
  },
};

// --- APPLICATION START ---
App.init();
