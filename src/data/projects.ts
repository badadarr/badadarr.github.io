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
      accent: "#58a6ff",
      title: "Internal ERP",
      subtitle: "erp.internal",
      chips: ["laravel", "inertia.js", "approvals"],
      rows: [
        { label: "Purchase orders", meta: "module" },
        { label: "Inventory", meta: "module" },
        { label: "Approvals", meta: "module" },
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
    title: "Lora Website",
    platform: { icon: "monitor", label: "Web" },
    description:
      "Company website for Lora — responsive marketing pages with a product catalogue and contact flow.",
    tags: ["Web", "Responsive", "UI"],
    mock: {
      device: "browser",
      accent: "#3fb950",
      title: "Lora",
      subtitle: "lora.id",
      chips: ["responsive", "catalogue"],
      rows: [
        { label: "Landing page", meta: "section" },
        { label: "Product catalogue", meta: "section" },
        { label: "Contact form", meta: "section" },
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
