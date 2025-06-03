"use client";

import { useState } from "react";
import Image from "next/image";
import { ShinyButton } from "../magicui/shiny-button";

const imageSets: Record<string, string> = {
  skill: "/images/skill.webp",
  entrepreneur: "/images/edu-entrepreneur.webp",
  "social-economic": "/images/social-economic.webp",
  "youth-skill": "/images/youth-skill.webp",
  certificate: "/images/certificate.webp",
  "side-initiatives": "/images/side-initiatives.webp",
};

const accordionData = [
  {
    id: "skill",
    title: "Technical Skillset & Growth",
    content:
      "Showcase your proficiency in React, Next.js, TypeScript, Tailwind CSS, Zustand, etc.",
  },
  {
    id: "entrepreneur",
    title: "Freelance & Client Work",
    content: "Describe impactful freelance or contract-based projects.",
  },
  {
    id: "social-economic",
    title: "Open Source & Community Involvement",
    content:
      "Highlight GitHub contributions, design systems, or template sharing.",
  },
  {
    id: "youth-skill",
    title: "Workshops & Mentorship",
    content:
      "Talk about any community teaching, mentoring, or knowledge-sharing activities.",
  },
  {
    id: "certificate",
    title: "Learning & Certifications",
    content:
      "List courses you've completed (e.g., from Programming Hero, Frontend & MERN Stack Developer, etc.).",
  },
  {
    id: "side-initiatives",
    title: "Side Projects & Initiatives",
    content:
      "Include personal projects like your Todo App or anything creative.",
  },
];

export default function ImpactSection() {
  const [active, setActive] = useState("skill");

  return (
    <section className="py-20 dark:bg-zinc-950 bg-white" id="impact">
      <div className="wrapper ">
        <div className="grid gap-5 md:grid-cols-2">
            {/* Image Display */}
          <div className="image-box h-fit w-full space-y-4">
             <ShinyButton>FAQ Section</ShinyButton>
            <div>
                <h2 className="md:text-5xl text-3x text-zinc-900 dark:text-white pb-4">Questions, <span className="text-neutral-500">Answers</span></h2>
                <p className="text-neutral-300 font-medium text-sm">Git quick answer to your most pressing questions</p>
            </div>
            <Image
              src={imageSets[active]}
              alt={`${active} image`}
              width={500}
              height={500}
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {accordionData.map((item) => (
              <div
                key={item.id}
                className="group/btn relative overflow-hidden rounded-lg bg-white shadow-2xl border block bg-gradient-to-br from-black to-neutral-600 font-medium text-zinc-900 dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 pb-4"
              >
                <button
                  className="accordion-header relative flex w-full items-center justify-between px-6 py-4 text-left font-medium text-gray-700 transition hover:bg-zinc-900"
                  onClick={() => setActive(item.id)}
                >
                  <span className="text-lg font-semibold dark:text-white">
                    {item.title}
                  </span>
                  <svg
                    className={`h-5 w-5 dark:text-white transform transition-transform duration-200 ${
                      active === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`${
                    active === item.id ? "block" : "hidden"
                  } px-6 pt-0 pb-6`}
                >
                  <p className="text-neutral-800 dark:text-neutral-300">
                    {item.content}
                  </p>
                </div>

                {/* Bottom Gradient */}
                <div className="relative h-[1px]">
                  <BottomGradient />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);
