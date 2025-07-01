"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ModeToggle from "./shared/ModeToggle";
import { motion } from "motion/react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export function SheetDemo() {
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = {
   instagram:"https://www.instagram.com/ui_verse_1/",
    linkedin: "https://www.linkedin.com/in/uiverse",
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="bg-gray-800 p-1 rounded-md cursor-pointer">
          <Bars3Icon className="w-6 h-6 text-white" />
        </div>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-lg font-semibold">Ui verse</SheetTitle>
        </SheetHeader>

        {/* Menu items */}
        <div className="py-4 space-y-4">
          {menuItems.map((item, index) => (
            <SheetClose asChild key={item.href}>
              <motion.a
                key={item.href}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                href={item.href}
                className="block text-base font-medium text-gray-100 px-4 hover:text-primary transition-colors"
              >
                {item.label}
              </motion.a>
            </SheetClose>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700 my-4" />

        {/* Theme toggle & Social icons */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="flex gap-4 px-4 mb-4"
        >
          <ModeToggle />
          <Link
            href={socialLinks.instagram}
            target="_blank"
            className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
          >
            <FaInstagram className="h-5 w-5 text-white group-hover:text-primary" />
          </Link>
          <Link
            href={socialLinks.linkedin}
            target="_blank"
            className="p-2 rounded-lg bg-white/5 hover:bg-primary/10 transition-colors group"
          >
            <FaLinkedinIn className="h-5 w-5 text-white group-hover:text-primary" />
          </Link>
        </motion.div>
      </SheetContent>
    </Sheet>
  );
}
