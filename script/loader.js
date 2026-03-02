/**
 * loader.js
 * Memuat semua section HTML secara berurutan ke dalam #app
 * Bekerja di GitHub Pages (HTTP) dan Local Server (Live Server, dll.)
 */

const SECTIONS = [
  "sections/navbar.html",
  "sections/hero.html",
  "sections/about.html",
  "sections/experience.html",
  "sections/education.html",
  "sections/tech-stack.html",
  "sections/portfolio.html",
  "sections/contact.html",
  "sections/footer.html",
];

async function loadSections() {
  const app = document.getElementById("app");

  if (!app) {
    console.error("[loader.js] Element #app tidak ditemukan.");
    return;
  }

  try {
    for (const url of SECTIONS) {
      const response = await fetch(url);
      if (!response.ok) {
        console.warn(`[loader.js] Gagal memuat: ${url} (${response.status})`);
        continue;
      }
      const html = await response.text();
      app.insertAdjacentHTML("beforeend", html);
    }

    // Semua section sudah dimuat — inisialisasi AOS
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      });
    }

    // Dispatch event agar script lain bisa bereaksi setelah section dimuat
    document.dispatchEvent(new Event("sectionsLoaded"));
  } catch (error) {
    console.error("[loader.js] Error saat memuat section:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadSections);
