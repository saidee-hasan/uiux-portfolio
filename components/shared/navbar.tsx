"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ModeToggle from "./ModeToggle";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const Navbar = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/wptasmina",
      icon:<FaGithub/>
    },
    {
    label: "Linkedin",
    href: "https://www.linkedin.com/in/wptasmina",
    icon: <FaLinkedinIn/>
  }
]

  return (
    <>
      {/* Left - Logo & Name */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="d-flex gap-2  group md:w-1/3 "
      >
        <div className="relative-overflo h-8 w-8 rounded-full ">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-tertiary animate-spin-slow rounded-full [mask-image:linear-gradient(transparent,white)]" />
          <div className="absolute inset-[2px] bg-content rounded-full flex items-center justify-center z-10">
            <span className="font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
              <Link href="/">TS</Link>
            </span>
          </div>
        </div>
        <h2 className="font-semibold dark:text-white/90 text-content group-hover:text-primary transition-colors">
          Tasmina Akter
        </h2>
      </motion.div>
      

      {/* Middle - Navigation Menu */}
      <div className="hidden md:flex items-center justify-center gap-4 md:w-1/3 dark:bg-background  py-2 border border-gray-100 dark:border-gray-800 rounded-full">
        {menuItems.map(({label, href}, index) => {
          const isActive = pathname === href;
          return (
            <motion.div
              key={href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
                ease: "easeInOut",
              }}
            >
              <Link
                href={href}
                className={`transition-colors uppercase text-sm font-medium ${
                  isActive
                    ? "font-semibold text-primary"
                    : "dark:text-white/80 text-content hover:text-primary"
                }`}
              >
                {label}
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Right - Social Icons and Theme Toggle */}
      <div className="hidden md:flex items-center justify-end gap-4 md:w-1/3 group">
        {/* Divider */}
        <div className="w-px h-6 bg-black/10 dark:bg-white/10 mx-2 hidden md:block" />

        {socialLinks.map(({href, icon}, key) => (
          
          <Link
            key={href}
            href={href}
            target="_blank"
            className="p-2 rounded-lg bg-content text-amber-50 dark:bg-white/5 dark:hover:bg-primary/10 transition-colors hover:text-primary"
            
          >
            {icon}
          </Link>
        ))}
      
        <ModeToggle />
      </div>
    </>
  );
};

export default Navbar;
