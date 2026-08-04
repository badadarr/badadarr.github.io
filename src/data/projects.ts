import type { ImageMetadata } from "astro";
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
  image: ImageMetadata;
  featured?: boolean;
  /** Platform badge, e.g. "Android · iOS" with a matching icon */
  platform: { icon: "smartphone" | "watch" | "pen-tool"; label: string };
}

export const projects: Project[] = [
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
