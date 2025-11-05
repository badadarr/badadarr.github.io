// Gunakan "strict mode" untuk penulisan kode yang lebih aman
"use strict";

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
    scrollProgress: null,
    backToTopButton: null,
    heroSection: null,
    contactForm: null,
  },

  // --- INITIALIZATION ---
  init() {
    // Tunggu hingga DOM siap
    document.addEventListener("DOMContentLoaded", () => {
      this.cacheDOMElements(); // 1. Simpan referensi elemen DOM
      this.bindEvents(); // 2. Pasang semua event listener
      this.initAOS(); // 3. Inisialisasi library pihak ketiga
    });
  },

  // Menyimpan elemen-elemen yang sering digunakan agar tidak perlu query berulang kali
  cacheDOMElements() {
    this.elements.navToggle = document.querySelector(".nav-toggle");
    this.elements.navMenu = document.querySelector(".nav-menu");
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
      this.toggleMobileNav.bind(this)
    );
    this.elements.backToTopButton?.addEventListener("click", this.scrollToTop);
    this.elements.contactForm?.addEventListener(
      "submit",
      this.handleFormSubmit.bind(this)
    );

    // Smooth scrolling untuk semua link anchor
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", this.smoothScroll.bind(this));
    });
  },

  // --- EVENT HANDLERS & METHODS ---

  // Fungsi tunggal yang dipanggil setiap kali event scroll terjadi
  handleScroll() {
    const scrollY = window.scrollY;
    this.updateScrollProgress(scrollY);
    this.toggleBackToTopButton(scrollY);
    this.applyParallaxEffect(scrollY);
  },

  // Inisialisasi Animate on Scroll (AOS) dengan error handling
  initAOS() {
    try {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 100,
        disable: window.innerWidth < 768,
      });
    } catch (error) {
      console.warn("AOS initialization failed:", error);
      // Fallback jika AOS gagal: pastikan semua elemen tetap terlihat.
      document.querySelectorAll("[data-aos]").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.visibility = "visible";
      });
    }
  },

  // Mengatur buka/tutup navigasi mobile
  toggleMobileNav() {
    this.elements.navMenu?.classList.toggle("nav-menu-active");
    this.elements.navToggle?.classList.toggle("active");
    const isExpanded =
      this.elements.navToggle.getAttribute("aria-expanded") === "true";
    this.elements.navToggle.setAttribute("aria-expanded", !isExpanded);
  },

  // Memperbarui lebar progress bar
  updateScrollProgress(scrollY) {
    if (!this.elements.scrollProgress) return;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollY / scrollHeight) * 100;
    this.elements.scrollProgress.style.width = `${scrollPercent}%`;
  },

  // Menampilkan/menyembunyikan tombol back-to-top
  toggleBackToTopButton(scrollY) {
    if (!this.elements.backToTopButton) return;
    this.elements.backToTopButton.classList.toggle("visible", scrollY > 300);
  },

  // Menerapkan efek parallax pada hero section
  applyParallaxEffect(scrollY) {
    if (!this.elements.heroSection) return;
    this.elements.heroSection.style.transform = `translateY(${
      scrollY * 0.4
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
        this.toggleMobileNav();
      }
    }
  },

  // Kembali ke atas halaman
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
