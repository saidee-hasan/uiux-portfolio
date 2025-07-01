// HeroSection.tsx

"use client";
import { motion } from "framer-motion";
import CustomButton from "@/components/ui/CustomButton";
import { fadeLeft, fadeUp } from "@/lib/motionVariants";
import { CountsUp } from "./CountsUp";
import dynamic from "next/dynamic"; // ✅ dynamic import
import animationData from "@/assets/hero.json";
import { PhoneIcon } from "@heroicons/react/24/outline";

// ✅ Dynamically import Lottie Player
const LottiePlayer = dynamic(
  () => import("@lottiefiles/react-lottie-player").then(mod => mod.Player),
  { ssr: false }
);

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
             Creative UI UX
              <motion.span
                {...fadeUp}
                transition={fadeUp.transition(0.8)}
                className="hero-title-color ml-2"
              >
                 Design Agency 
              </motion.span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={fadeUp.transition(1.1)}
              className="text-md md:text-lg text-content dark:text-foreground/80 mb-6 leading-relaxed"
            >
             Helping startups and brands stand out through smart design.
We turn ideas into sleek, functional, user-validated interfaces.
UI/UX that delivers results, not just pretty pixels.
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
                  window.open("/call")
                }
                className="uppercase hidden md:block"
              >
                Book A call 
              </CustomButton>
            </motion.div>

            {/* Countup */}
            <div className="">
              <CountsUp />
            </div>
          </motion.div>

          {/* ✅ Client-side-only Lottie Animation */}
          <div className="w-full md:w-1/2 flex justify-center animate-float">
            <LottiePlayer
              autoplay
              loop
              src={animationData}
              style={{ height: 400, width: 400 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
