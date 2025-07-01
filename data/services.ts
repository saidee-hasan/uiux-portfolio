import { Service } from "@/types";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import {
  Code2,
  Palette,
  Rocket,
  Database,
  Gauge,
} from "lucide-react";

export const services: Service[] = [
    {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting beautiful, intuitive interfaces that deliver exceptional user experiences and drive engagement.",
  },
  {
    icon: Code2,
    title: "Custom Web Development",
    description:
      "Building fast, responsive web apps with modern technologies and best practices.",
  },

  {
    icon: Rocket,
    title: "Performance Optimization",
    description:
      "Supercharging web applications for lightning-fast performance and optimal search engine rankings.",
  },
  {
    icon: Database,
    title: "Backend Development",
    description:
      "Engineering robust server-side solutions and scalable APIs that power modern web applications.",
  },
  {
    icon: Gauge,
    title: "SEO Optimization",
    description:
      "Improve your website’s visibility with our SEO strategies, ensuring higher rankings and organic traffic growth.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Technical Consulting",
    description:
      "Guiding technical decisions with expert insights on architecture, technology stack, and development strategy.",
  },
];
