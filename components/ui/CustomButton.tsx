'use client'

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

type CustomButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  icon?: React.ReactNode;
  whileHoverScale?: number;
  whileTapScale?: number;
};

export default function CustomButton({
  children,
  className = "",
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  icon,
  whileHoverScale = 1.05,
  whileTapScale = 0.95,
}: CustomButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium transition-colors duration-200";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
  };

  return (
    <motion.button
      whileHover={{ scale: whileHoverScale }}
      whileTap={{ scale: whileTapScale }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(base, variants[variant], disabled && "opacity-50 cursor-not-allowed", className)}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  );
}
