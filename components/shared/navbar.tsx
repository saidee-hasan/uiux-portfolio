//componensts> shared > navbar
"use client";
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SheetDemo } from "../SheetDemo";
import ModeToggle from "./ModeToggle";



const Navbar = () => {
  const theme = "dark"
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // menu item
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "projects" },
    { href: "/blogs", label: "blogs" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-background/90 dark:bg-dark/80 backdrop-blur-2xl"
    >
      <div className="container py-3 flex items-center justify-between gap-3">
        {/* Logo & Name */}
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
            {/* Spinning gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-spin-slow rounded-full [mask-image:linear-gradient(transparent,white)]" />

            {/* Inner static circle with initials */}
            <div className="absolute inset-[2px] bg-content rounded-full flex items-center justify-center z-10">
              <span className="font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                <Link href="/">TS</Link>
              </span>
            </div>
          </div>

          {/* Name */}
          <h2 className="font-semibold text-white/90 hover:text-primary transition-colors">
            Tasmina Akter
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors font-medium ${isActive ? 'font-semibold text-primary' : 'text-white/80 hover:text-primary'}`}
              >
                {item.label}
              </Link>
            );
          })
          }
            <ModeToggle />
        </div>
        {/* mobile menu button  */}

         <div className="md:hidden hover:bg-gray-100 dark:hover:bg-gray-800">
           <SheetDemo />
         </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
