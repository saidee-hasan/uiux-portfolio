'use client'
import { motion } from "motion/react"

const Navbar = () => {
  return (
    <motion.nav 
    initial={{y: -100}}
    animate={{y: 0}}
    className="fixed w-full z-50 bg-[#0a0a0a]/50 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-3">
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
            {/* Spinning border */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] to-[#ec4899] animate-spin-slow rounded-full [mask-image:linear-gradient(transparent,white)]" />
            {/* Empty div to spin */}

            {/* Static inner circle with initials */}
            <div className="absolute inset-[2px] bg-[#171717] rounded-full flex items-center justify-center z-10">
              <span className="font-bold bg-gradient-to-r from-[#0ea5e9] to-[#ec4899] bg-clip-text text-transparent">
                TS
              </span>
            </div>
          </div>
          <span className="font-semibold text-white/90 group-hover:text-[#0ea5e9] transition-colors">
            Tasmina Akter
          </span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
