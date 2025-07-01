"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShinyButton } from "../magicui/shiny-button";

const imageSets: Record<string, string> = {
  skill: "/faq/1.webp",
  entrepreneur: "/images/edu-entrepreneur.webp",
  "social-economic": "/faq/2.webp",
  "youth-skill": "/faq/5.webp",
  certificate: "/faq/5.webp",
  "side-initiatives": "/images/side-initiatives.webp",
};

const accordionData = [
  {
    id: "skill",
    title: "Technical Skillset & Growth",
    content: "Showcase your proficiency in React, Next.js, TypeScript, Tailwind CSS, Zustand, etc.",
    icon: "💻",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    id: "entrepreneur",
    title: "Freelance & Client Work",
    content: "Describe impactful freelance or contract-based projects.",
    icon: "💼",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: "social-economic",
    title: "Open Source & Community Involvement",
    content: "Highlight GitHub contributions, design systems, or template sharing.",
    icon: "🌐",
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: "youth-skill",
    title: "Workshops & Mentorship",
    content: "Talk about any community teaching, mentoring, or knowledge-sharing activities.",
    icon: "👨‍🏫",
    gradient: "from-rose-500 to-pink-600"
  },
  {
    id: "certificate",
    title: "Learning & Certifications",
    content: "List courses you've completed (e.g., from Programming Hero, Frontend & MERN Stack Developer, etc.).",
    icon: "📜",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    id: "side-initiatives",
    title: "Side Projects & Initiatives",
    content: "Include personal projects like your Todo App or anything creative.",
    icon: "🔮",
    gradient: "from-violet-500 to-fuchsia-600"
  }
];

export default function ImpactSection() {
  const [active, setActive] = useState(accordionData[0].id);
  const activeItem = accordionData.find(item => item.id === active) || accordionData[0];

  return (
    <section className="py-20 bg-white dark:bg-[#0a0a0a]" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Image Display */}
          <div className="h-fit w-full space-y-6 sticky top-6">
            <div className="flex flex-col gap-4">
              <ShinyButton className="w-fit">
                <span className="relative z-10">FAQ Section</span>
              </ShinyButton>
              
              <div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-300 dark:to-zinc-200 bg-clip-text text-transparent pb-2">
                  Questions, <span className="text-zinc-400 dark:text-zinc-500">Answers</span>
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium text-sm">
                  Get quick answers to your most pressing questions
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-900 dark:to-zinc-800 shadow-xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={imageSets[active]}
                    alt={`${activeItem.title} image`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <motion.h3 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-bold text-white"
                    >
                      {activeItem.title}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mt-1 text-zinc-200"
                    >
                      {activeItem.content}
                    </motion.p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {accordionData.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-all duration-200 ${active === item.id ? 'ring-2 ring-opacity-30' : ''}`}
                style={{
                  boxShadow: active === item.id ? `0 4px 20px -5px rgba(139, 92, 246, 0.3)` : ''
                }}
              >
                <button
                  className="accordion-header flex w-full items-center justify-between px-5 py-4 text-left transition-all"
                  onClick={() => setActive(item.id)}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${item.gradient} text-white`}>
                      <span className="text-xl">{item.icon}</span>
                    </div>
                    <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                      {item.title}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: active === item.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`flex items-center justify-center w-6 h-6 rounded-full ${active === item.id ? 'bg-purple-500 text-white' : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'}`}
                  >
                    <svg
                      className="h-4 w-4"
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
                  </motion.div>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: active === item.id ? "auto" : 0,
                    opacity: active === item.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">
                    <p className="text-zinc-600 dark:text-zinc-300">
                      {item.content}
                    </p>
                    {active === item.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-3"
                      >
                        <button className="text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                          Learn more →
                        </button>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Animated bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: active === item.id ? "100%" : "0%" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full bg-gradient-to-r ${item.gradient}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}