"use client";
import { motion } from "framer-motion";
import CustomButton from '@/components/ui/CustomButton'
import { fadeLeft, fadeUp } from "@/lib/motionVariants";
import { FolderArrowDownIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { CountsUp } from "./CountsUp";
import Image from "next/image";
import tasmiImg from "@/assets/tasmi.png";


export default function HeroSection() {
  return (
    <section className="section-continar pt-20">
      <div className="wrapper">
        <div className="contentText d-flex">
          {/* Text Content */}
          <motion.div
            {...fadeLeft}
            transition={fadeLeft.transition()}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <motion.h1
              {...fadeUp}
              transition={fadeUp.transition(0.5)}
              className="hero-title hero-title-color mb-4"
            >
              Full Stack
              <motion.span
                {...fadeUp}
                transition={fadeUp.transition(0.8)}
                className="hero-title-color ml-2"
              >
                Developer
              </motion.span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={fadeUp.transition(1.1)}
              className="text-md md:text-lg text-content dark:text-foreground/80 mb-6 leading-relaxed"
            >
              Specializing in React, Node.js, Next.js, and Cloud Architecture.
              Experienced in building robust, scalable, and SEO-optimized web
              applications using modern full-stack technologies and cloud-native
              solutions.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={fadeUp.transition(1.3)}
              className="flex justify-center md:justify-start md:gap-4"
            >
              <CustomButton
                variant="outline"
                icon={<PhoneIcon className="h-4 w-4" />}
                onClick={() =>
                  window.open("https://wa.me/8801581543966", "_blank")
                }
                className="uppercase hidden md:block"
              >
                Contact Me
              </CustomButton>

              <CustomButton
                variant="outline"
                icon={
                  <FolderArrowDownIcon className="h-4 w-4 animate-bounce" />
                }
                onClick={() => window.open("/resume.pdf", "_blank")}
                className="uppercase "
              >
                Download CV
              </CustomButton>
            </motion.div>

            {/* Countup  */}
            <div className="">
              <CountsUp />
            </div>
          </motion.div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center animate-float">
            <Image src={tasmiImg} width={400} height={400} alt="avatar image" />
          </div>
        </div>
      </div>
    </section>
  );
}
