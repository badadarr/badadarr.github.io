import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://badadarr.github.io",
  // Emit projects.html / experience.html so existing indexed URLs keep working
  build: { format: "file" },
  integrations: [sitemap()],
});
