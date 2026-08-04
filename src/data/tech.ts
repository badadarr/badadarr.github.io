export interface TechCategory {
  title: string;
  items: { name: string; note: string }[];
}

export const techStack: TechCategory[] = [
  {
    title: "languages",
    items: [
      { name: "Python", note: "Backend & AI/ML" },
      { name: "JavaScript", note: "Web Development" },
      { name: "Swift", note: "iOS Development" },
      { name: "Kotlin", note: "Android Apps" },
      { name: "Go", note: "Backend Services" },
      { name: "PHP", note: "Server-side" },
      { name: "Dart", note: "Flutter Apps" },
    ],
  },
  {
    title: "iot & hardware",
    items: [
      { name: "ESP32", note: "WiFi/BLE Microcontroller" },
      { name: "Arduino Uno", note: "Prototyping" },
      { name: "Raspberry Pi", note: "Edge Computing" },
      { name: "MQTT", note: "IoT Messaging" },
    ],
  },
  {
    title: "ai & data engineering",
    items: [
      { name: "TensorFlow", note: "Deep Learning" },
      { name: "Keras", note: "Neural Networks" },
      { name: "PyTorch", note: "Deep Learning" },
      { name: "MLflow", note: "ML Lifecycle" },
      { name: "Pandas", note: "Data Analysis" },
      { name: "NumPy", note: "Numerical Computing" },
    ],
  },
  {
    title: "frameworks",
    items: [
      { name: "Flutter", note: "Cross-platform Mobile" },
      { name: "Laravel", note: "PHP Framework" },
      { name: "Next.js", note: "React Framework" },
      { name: "Inertia.js", note: "SPA Bridge" },
      { name: "Node.js", note: "Runtime" },
    ],
  },
  {
    title: "tools & services",
    items: [
      { name: "MySQL", note: "Relational DB" },
      { name: "Firebase", note: "BaaS" },
      { name: "Git", note: "Version Control" },
      { name: "GitHub Actions", note: "CI/CD" },
      { name: "Figma", note: "UI Design" },
    ],
  },
];
