'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import React from 'react'

type CustomButtonProps = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline'
  disabled?: boolean
  icon?: React.ReactNode
  whileHoverScale?: number
  whileTapScale?: number
}

export default function CustomButton({
  children,
  className = '',
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  icon,
  whileHoverScale = 1.05,
  whileTapScale = 0.95,
}: CustomButtonProps) {
  const base =
    'relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-colors duration-200 overflow-hidden group'

  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    outline:
      'border border-white/10 text-contents hover:border-primary/30 bg-surface leading-tight',
  }

  return (
    <motion.button
      whileHover={{ scale: whileHoverScale }}
      whileTap={{ scale: whileTapScale }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        base,
        variants[variant],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {/* Hover gradient layer for outline button only */}
      {variant === 'outline' && (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-tertiary/10 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
      )}

      {/* Content */}
      <span className="relative z-10 text-sm flex items-center gap-1 group-hover:text-primary transition-colors">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </span>
    </motion.button>
  )
}
