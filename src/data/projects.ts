import type { ImageMetadata } from "astro";
import type { Mock } from "../components/ProjectMock.astro";
import akademisApp from "../assets/images/akademis-app.png";
import futureJobs from "../assets/images/future-jobs.png";
import watchApp from "../assets/images/watch-app.png";
import cozyApp from "../assets/images/cozy-app.png";
import gojekApp from "../assets/images/gojek-app.png";
import profileUi from "../assets/images/profile-ui.png";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  /** Platform badge, e.g. "Android · iOS" with a matching icon */
  platform: {
    icon: "smartphone" | "watch" | "pen-tool" | "monitor";
    label: string;
  };
  /** Real screenshot. Takes precedence over `mock` when both are set. */
  image?: ImageMetadata;
  /** CSS device mockup, used until a real screenshot exists. */
  mock?: Mock;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Onelito KOI",
    platform: { icon: "smartphone", label: "Android · iOS" },
    description:
      "Real-time live auction app for koi fish, built with Flutter — live bidding, countdown timers, and instant bid updates across all connected buyers.",
    tags: ["Flutter", "Realtime", "Auction"],
    mock: {
      device: "phone",
      accent: "#ff9f1c",
      title: "Onelito KOI",
      highlight: { label: "current bid", value: "Rp 4,2 jt" },
      rows: [
        { label: "Showa Sanshoku 52cm", meta: "12 bids" },
        { label: "Kohaku 45cm", meta: "8 bids" },
        { label: "Shiro Utsuri 38cm", meta: "5 bids" },
      ],
      chips: ["● live", "00:42"],
      action: "Place bid",
    },
  },
  {
    title: "MPR LCC Quiz",
    platform: { icon: "smartphone", label: "Android · iOS" },
    description:
      "Quiz-competition (cerdas cermat) app for MPR LCC, handling the buzzer system with strict group answer ordering so the first team to press is locked in.",
    tags: ["Flutter", "Realtime", "Buzzer"],
    mock: {
      device: "phone",
      accent: "#a78bfa",
      title: "MPR LCC",
      highlight: { label: "buzzer order", value: "Team B" },
      rows: [
        { label: "Team B", meta: "1st" },
        { label: "Team A", meta: "2nd" },
        { label: "Team C", meta: "3rd" },
      ],
      chips: ["round 2", "locked"],
      action: "Buzz",
    },
  },
  {
    title: "Nexxuz Field Suite",
    platform: { icon: "smartphone", label: "Android" },
    description:
      "Vcomm, BLM, and BMS — a set of field applications covering network discovery and on-site configuration options for enterprise deployments.",
    tags: ["Flutter", "Networking", "Enterprise"],
    mock: {
      device: "phone",
      accent: "#58a6ff",
      title: "Vcomm",
      highlight: { label: "discovered devices", value: "24" },
      rows: [
        { label: "192.168.1.10", meta: "online" },
        { label: "192.168.1.24", meta: "online" },
        { label: "192.168.1.31", meta: "idle" },
      ],
      chips: ["BLM", "BMS"],
      action: "Configure",
    },
  },
  {
    title: "Internal ERP",
    platform: { icon: "monitor", label: "Web" },
    description:
      "Internal ERP system for PT. Spero Mahakarya Nusantara built with Laravel and Inertia.js, covering the modules the team uses day to day.",
    tags: ["Laravel", "Inertia.js", "MySQL"],
    mock: {
      device: "browser",
      accent: "#818cf8",
      title: "Internal ERP",
      subtitle: "erp.internal",
      sidebar: true,
      chips: ["laravel", "inertia.js"],
      rows: [
        { label: "Purchase orders", meta: "module" },
        { label: "Inventory", meta: "module" },
        { label: "Approvals", meta: "module" },
      ],
    },
  },
  {
    title: "Maids Agency System",
    platform: { icon: "monitor", label: "Web" },
    description:
      "Agency management system for a Singapore-based client, built with Laravel and Inertia.js — featuring a document generation tool that turns maid documents into digital forms automatically.",
    tags: ["Laravel", "Inertia.js", "Automation"],
    mock: {
      device: "browser",
      accent: "#2dd4bf",
      title: "Maids Agency",
      subtitle: "agency.internal",
      sidebar: true,
      highlight: { label: "generator", value: "PDF → Form" },
      rows: [
        { label: "Biodata form", meta: "generated" },
        { label: "Employment contract", meta: "draft" },
        { label: "Medical record", meta: "generated" },
      ],
    },
  },
  {
    title: "Travel Management System",
    platform: { icon: "monitor", label: "Web" },
    description:
      "Travel platform for the same Singapore agency, where I took full ownership of the Report Template system that drives their data reporting.",
    tags: ["Laravel", "Inertia.js", "Reporting"],
    mock: {
      device: "browser",
      accent: "#38bdf8",
      title: "Travel Manager",
      subtitle: "travel.internal",
      sidebar: true,
      highlight: { label: "report", value: "Template builder" },
      rows: [
        { label: "Monthly booking report", meta: "template" },
        { label: "Invoice summary", meta: "template" },
        { label: "Itinerary export", meta: "template" },
      ],
    },
  },
  {
    title: "Lyrics Management System",
    platform: { icon: "monitor", label: "Web" },
    description:
      "Full-stack content system for KapanLagi Youniverse — a Laravel frontend over an Express.js backend that automates lyrics scraping and keeps the catalogue organised.",
    tags: ["Laravel", "Express.js", "Scraping"],
    mock: {
      device: "browser",
      accent: "#f472b6",
      title: "Lyrics Manager",
      subtitle: "lyrics.internal",
      sidebar: true,
      highlight: { label: "scraper", value: "Running" },
      chips: ["express.js"],
      rows: [
        { label: "Artist catalogue", meta: "synced" },
        { label: "Scrape queue", meta: "24 jobs" },
        { label: "Duplicate check", meta: "passed" },
      ],
    },
  },
  {
    title: "Internship Portal",
    platform: { icon: "monitor", label: "Web" },
    description:
      "Registration portal for the Inspectorate General of the Ministry of Home Affairs, digitalising the onboarding flow for prospective interns.",
    tags: ["Laravel", "MySQL", "GovTech"],
    mock: {
      device: "browser",
      accent: "#e3b341",
      title: "Portal Magang",
      subtitle: "portal.internal",
      sidebar: true,
      highlight: { label: "registration", value: "Online" },
      rows: [
        { label: "Application form", meta: "step 1" },
        { label: "Document upload", meta: "step 2" },
        { label: "Placement status", meta: "step 3" },
      ],
    },
  },
  {
    title: "Genogram Form Builder",
    platform: { icon: "smartphone", label: "Android · iOS" },
    description:
      "Form Builder for medical students, featuring a custom Genogram Builder for mapping family medical history — Flutter frontend on a Laravel backend.",
    tags: ["Flutter", "Laravel", "REST API"],
    mock: {
      device: "phone",
      accent: "#ff7b72",
      title: "Form Builder",
      highlight: { label: "active form", value: "Genogram" },
      rows: [
        { label: "Patient assessment", meta: "draft" },
        { label: "Family history", meta: "done" },
        { label: "Nursing intake", meta: "done" },
      ],
      action: "New form",
    },
  },
  {
    title: "LoRa IoT Website",
    platform: { icon: "monitor", label: "Web · IoT" },
    description:
      "Web interface for a LoRa-based IoT system — devices scan for each other like radar, pairing a transmitter with its receiver and reporting link status and signal strength.",
    tags: ["LoRa", "IoT", "Web"],
    mock: {
      device: "browser",
      accent: "#3fb950",
      title: "LoRa Monitor",
      subtitle: "lora.local",
      highlight: { label: "link", value: "TX ⇄ RX" },
      chips: ["scanning"],
      rows: [
        { label: "Transmitter TX-01", meta: "−72 dBm" },
        { label: "Receiver RX-04", meta: "paired" },
        { label: "Unpaired in range", meta: "2 nodes" },
      ],
    },
  },
  {
    title: "Akademis App",
    platform: { icon: "smartphone", label: "Android · iOS" },
    description:
      "Educational mobile application built with Flutter, featuring student management and course tracking capabilities.",
    tags: ["Flutter", "Dart", "Firebase"],
    image: akademisApp,
    featured: true,
  },
  {
    title: "Future Jobs",
    platform: { icon: "smartphone", label: "Android · iOS" },
    description:
      "Mobile job search platform with AI-powered matching, built with Flutter and BLoC for state management.",
    tags: ["Flutter", "BLoC"],
    image: futureJobs,
    featured: true,
  },
  {
    title: "Watch App",
    platform: { icon: "watch", label: "watchOS" },
    description:
      "Smartwatch companion app with health tracking and notification management.",
    tags: ["Swift", "WatchOS", "HealthKit"],
    image: watchApp,
    featured: true,
  },
  {
    title: "Cozy App",
    platform: { icon: "smartphone", label: "Android · iOS" },
    description:
      "Real estate mobile application with property search, virtual tours, and booking functionality.",
    tags: ["Flutter", "REST API", "Maps"],
    image: cozyApp,
  },
  {
    title: "Multi-Service App",
    platform: { icon: "pen-tool", label: "UI/UX" },
    description:
      "UI/UX design for a multi-service mobile application, created by slicing a Dribbble design into Figma.",
    tags: ["Figma", "UI/UX Design", "Slicing"],
    image: gojekApp,
  },
  {
    title: "Profile UI Design",
    platform: { icon: "pen-tool", label: "UI/UX" },
    description:
      "A modern user profile UI/UX design, created by slicing a Dribbble concept into Figma.",
    tags: ["Figma", "UI/UX Design", "Slicing"],
    image: profileUi,
  },
];
