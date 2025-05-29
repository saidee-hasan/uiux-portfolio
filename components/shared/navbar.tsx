"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SheetDemo } from "../SheetDemo";
import ModeToggle from "./ModeToggle";
import { GithubIcon, LinkedInIcon } from "../social-icons";

const Navbar = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = {
    github: "https://github.com/wptasmina",
    linkedin: "https://www.linkedin.com/in/wptasmina",
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 backdrop:bg-white/50 dark:bg-content/30 backdrop-blur border-b border-gray-100 dark:border-gray-800 shadow "
    >
      <div className="container py-3 flex items-center justify-between">
        {/* Left - Logo & Name */}
        <motion.div 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center gap-2  group md:w-1/3 ">
          <div className="relative h-8 w-8 rounded-full overflow-hidden">
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
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.href}
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
                  href={item.href}
                  className={`transition-colors uppercase text-sm font-medium ${
                    isActive
                      ? "font-semibold text-primary"
                      : "dark:text-white/80 text-content hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Right - Social Icons and Theme Toggle */}
        <div className="hidden md:flex items-center justify-end gap-4 md:w-1/3">
        {/* Divider */}
        <div className="w-px h-6 bg-black/10 dark:bg-white/10 mx-2 hidden md:block" />
          <Link
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-content dark:bg-white/5 hover:text-primary/10 dark:hover:bg-primary/10 transition-colors group"
          >
            <GithubIcon className="h-5 w-5 text-amber-50 group-hover:text-primary" />
          </Link>
          <Link
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-content dark:bg-white/5 hover:text-primary/10 dark:hover:bg-primary/10 transition-colors group"
          >
            <LinkedInIcon className="h-5 w-5 text-amber-50 group-hover:text-primary" />
          </Link>
          <ModeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden hover:bg-gray-100 dark:hover:bg-gray-100">
          <SheetDemo />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
