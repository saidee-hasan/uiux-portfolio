"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ModeToggle from "./ModeToggle";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import logoDark from "../../public/logo2.png";
import logoLight from "../../public/logo2.png";
import { useTheme } from "next-themes";

const Navbar = () => {
  const pathname = usePathname();
  const { theme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/uiverse/",
      icon: <FaLinkedinIn />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/ui_verse_1/",
      icon: <FaInstagram />,
    },
  ];

  return (
    <nav className="w-full flex items-center justify-between px-4  rounded-md py-0 bg-white dark:bg-black">
      {/* Left - Logo with theme awareness */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex items-center md:w-1/3"
      >
        {mounted && (
          <Image
            src={theme === "dark" ? logoDark : logoLight}
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        )}
      </motion.div>

      {/* Middle - Navigation Menu */}
      <div className="hidden md:flex items-center justify-center gap-4 md:w-1/3 py-2 border border-gray-100 dark:border-gray-800 rounded-full">
        {menuItems.map(({ label, href }, index) => {
          const isActive = pathname === href;
          return (
            <motion.div
              key={href}
              initial={{ y: -20 }}
              animate={{ y: 0 }}
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

      {/* Right - Social Links, Book a Call & Theme Toggle */}
      <div className="hidden md:flex items-center justify-end gap-4 md:w-1/3">
        {/* Divider */}
        <div className="w-px h-6 bg-black/10 dark:bg-white/10 mx-2" />

        {/* Social Icons */}
        {socialLinks.map(({ href, icon, label }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-2 rounded-lg bg-content text-amber-50 dark:bg-white/5 dark:hover:bg-primary/10 transition-colors hover:text-primary"
          >
            {icon}
          </Link>
        ))}

        {/* ✅ Book A Call Button */}
        <Link
          href="/call"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold transition hover:bg-gray-800"
        >
          Book A Call
        </Link>

        {/* Theme Toggle */}
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
