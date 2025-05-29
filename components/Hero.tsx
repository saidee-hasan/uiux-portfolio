"use client";

import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown10Icon, DonutIcon, DownloadCloud } from "lucide-react";
import {
  DocumentArrowDownIcon,
  FolderArrowDownIcon,
} from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
import CustomButton from "./ui/CustomButton";

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group lg:w-1/2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-6"
            >
              Full Stack
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent ml-2"
              >
                Developer
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="text-xl text-foreground/80 mb-8"
            >
              Specializing in React, Node.js, Next.js, and Cloud Architecture.
              Experienced in building robust, scalable, and SEO-optimized web
              applications using modern full-stack technologies and cloud-native
              solutions.
            </motion.p>

            <div className="flex gap-4">
              <div className="flex justify-center mt-8">
                <CustomButton
                  variant="primary"
                  onClick={() => window.open("/Tasmina_Resume.pdf", "_blank")}
                  
                >
                  Explore Work
                </CustomButton>
              </div>

              <div className="text-center mt-8">
                <CustomButton
                  variant="primary"
                  icon={<FolderArrowDownIcon className="h-4 w-4 animate-bounce" />}
                  onClick={() => window.open("/resume.pdf", "_blank")}
                  className="uppercase"
                >
                  Download Resume
                </CustomButton>
              </div>
              <CustomButton variant="secondary"> Button</CustomButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
