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
}

export const projects: Project[] = [
  {
    title: "Akademis App",
    description:
      "Educational mobile application built with Flutter, featuring student management and course tracking capabilities.",
    tags: ["Flutter", "Dart", "Firebase"],
    image: akademisApp,
    featured: true,
  },
  {
    title: "Future Jobs",
    description:
      "Mobile job search platform with AI-powered matching, built with Flutter and BLoC for state management.",
    tags: ["Flutter", "BLoC"],
    image: futureJobs,
    featured: true,
  },
  {
    title: "Watch App",
    description:
      "Smartwatch companion app with health tracking and notification management.",
    tags: ["Swift", "WatchOS", "HealthKit"],
    image: watchApp,
    featured: true,
  },
  {
    title: "Cozy App",
    description:
      "Real estate mobile application with property search, virtual tours, and booking functionality.",
    tags: ["Flutter", "REST API", "Maps"],
    image: cozyApp,
  },
  {
    title: "Multi-Service App",
    description:
      "UI/UX design for a multi-service mobile application, created by slicing a Dribbble design into Figma.",
    tags: ["Figma", "UI/UX Design", "Slicing"],
    image: gojekApp,
  },
  {
    title: "Profile UI Design",
    description:
      "A modern user profile UI/UX design, created by slicing a Dribbble concept into Figma.",
    tags: ["Figma", "UI/UX Design", "Slicing"],
    image: profileUi,
  },
];
