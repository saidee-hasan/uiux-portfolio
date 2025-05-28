//componensts> shared > navbar
'use client'
import { motion } from "motion/react"
import { useState } from "react";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen]= useState<boolean>(false)

  const toggleMobileMenu = ()=>{
    setIsMobileOpen(!isMobileOpen)
  }

  // menu item 
  const menuItems = [
    {href: "/", label:"Home"},
    {href: "/about", label:"About Us"},
    {href: "/projects", label:"projects"},
    {href: "/blogs", label:"blogs"},
    {href: "/contact", label:"contact"}
  ]

  return (
    <motion.nav 
    initial={{y: -100}}
    animate={{y: 0}}
    className="fixed w-full z-50 bg-background/50 dark:bg-dark/80 backdrop-blur-2xl">
      <div className="container py-3">
        <div className="flex items-center justify-center gap-3">
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
            {/* Spinning border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-spin-slow rounded-full [mask-image:linear-gradient(transparent,white)]" />
            {/* Empty div to spin */}

            {/* Static inner circle with initials */}
            <div className="absolute inset-[2px] bg-content rounded-full flex items-center justify-center z-10">
              <span className="font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                TS
              </span>
            </div>
          </div>
          <span className="font-semibold text-white/90 group-hover:text-primary transition-colors">
            Tasmina Akter
          </span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
