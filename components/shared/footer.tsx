'use client'

import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
  FaArrowUp,
  FaBehance,
  FaDribbble,
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'
import { FiArrowUpRight, FiFigma } from 'react-icons/fi'
import logoDark from "../../public/logo2.png"
import logoLight from "../../public/logo2.png"
const Footer = () => {
  const year = new Date().getFullYear()
  const pathname = usePathname()

   const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [isVisible, setIsVisible] = useState(false)
  const [currentTime, setCurrentTime] = useState('')
  
  const { theme } = useTheme();
  // Time display effect
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      setCurrentTime(timeString)
    }
    
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  // Scroll visibility effect
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Animation variants
  const container = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  const iconHover = {
    scale: 1.1,
    color: "#a78bfa",
    transition: { type: "spring", stiffness: 500, damping: 15 }
  }

  const linkHover = {
    x: 3,
    color: "#a78bfa",
    transition: { type: "spring", stiffness: 400 }
  }

  const services = [
    "UI/UX Design",
    "Web Development",
    "Brand Identity",
    "Motion Design",
    "3D Modeling",
    "SEO Optimization",
    "App Design",
    "Content Strategy"
  ]

  const socialLinks = [
    { icon: <FaDribbble size={14} />, name: "Dribbble", color: "#ea4c89", link: "#" },
    { icon: <FaBehance size={14} />, name: "Behance", color: "#1769ff", link: "#" },
    { icon: <FiFigma size={14} />, name: "Figma", color: "#a259ff", link: "#" },
    { icon: <FaGithub size={14} />, name: "GitHub", color: "#4078c0", link: "" },
    { icon: <FaLinkedin size={14} />, name: "LinkedIn", color: "#0077b5", link: "https://instagram.com/ui_verse_1/" },
    { icon: <FaInstagram size={14} />, name: "Instagram", color: "#e1306c", link: "https://www.linkedin.com/in/uiverse" },
    { icon: <FaTwitter size={14} />, name: "Twitter", color: "#1da1f2", link: "#" },
    { icon: <FaYoutube size={14} />, name: "YouTube", color: "#ff0000", link: "#" }
  ]
const [isHovering, setIsHovering] = useState<number | null>(null);
  const controls = useAnimation();

  const handleHoverStart = (index: number) => {
    setIsHovering(index);
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    });
  };

  const handleHoverEnd = () => {
    setIsHovering(null);
    controls.start({
      opacity: 0,
      y: 5,
      transition: { duration: 0.15 }
    });
  };
  return (
    <footer className="relative w-full bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800 px-4 md:px-8 lg:px-12 pt-16 pb-10 transition-colors duration-300 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div
          initial={{ x: -100, y: -100 }}
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-purple-500/5 blur-xl"
        ></motion.div>
        <motion.div
          initial={{ x: 100, y: 100 }}
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-indigo-500/5 blur-xl"
        ></motion.div>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={container}
        className="max-w-7xl mx-auto relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <motion.div variants={item} className="space-y-4">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2"
            >
           
              <div>
                 {mounted && (
          <Image
            src={theme === "dark" ? logoDark : logoLight}
            alt="Logo"
            width={100}
            height={100}
            priority
          />
        )}
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">
                  {currentTime}
                </p>
              </div>
            </motion.div>
            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Crafting digital experiences through innovative design and development.
            </p>
            
            <div className="flex gap-2 pt-1">
              {socialLinks.slice(0, 4).map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    ...iconHover,
                    color: social.color
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-1.5 text-gray-500 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  style={{ color: isHovering === i ? social.color : '' }}
                  onMouseEnter={() => handleHoverStart(i)}
                  onMouseLeave={handleHoverEnd}
                >
                  {social.icon}
                  <AnimatePresence>
                    {isHovering === i && (
                      <motion.span
                        initial={{ opacity: 0, y: 3 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 3 }}
                        className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-[10px] whitespace-nowrap text-gray-700 dark:text-gray-300"
                      >
                        {social.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Column */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 flex items-center">
              Navigation
              <span className="ml-1.5 text-[10px] px-1.5 py-0.5 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full">
                Explore
              </span>
            </h3>
            <div className="space-y-2">
              {["Home", "Work", "Services", "About", "Blog", "Contact"].map((link, i) => (
                <motion.div 
                  key={link} 
                  initial={{ x: -5, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={linkHover}
                  className="flex items-center group"
                >
                  <motion.div 
                    animate={{
                      scale: pathname === `/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}` ? [1, 1.1, 1] : 1,
                      backgroundColor: pathname === `/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}` ? 
                        "#8b5cf6" : 
                        "#e2e8f0"
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-1.5 h-1.5 rounded-full mr-2 transition-all duration-200"
                  />
                  <Link 
                    href={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                    className={`text-xs flex items-center ${pathname === `/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}` ? 'text-purple-600 font-medium' : 'text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400'}`}
                  >
                    {link}
                    <FiArrowUpRight className="ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-xs" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 flex items-center">
              Services
              <span className="ml-1.5 text-[10px] px-1.5 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                Expertise
              </span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {services.map((service, i) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{
                    x: 3,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="flex items-start group"
                >
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 4, 0]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.08
                    }}
                    className="mt-0.5 mr-1.5"
                  >
                    <svg className="w-3 h-3 text-purple-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <span className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {service}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={item} className="space-y-4">
            <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200 flex items-center">
              Contact
              <span className="ml-1.5 text-[10px] px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                Available
              </span>
            </h3>
            <div className="space-y-3">
              <motion.div 
                whileHover={{ y: -1 }}
                className="flex items-start gap-2 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
              >
                <div className="mt-0.5 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-purple-600 dark:text-purple-400 text-xs" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-300">Email Us</p>
                  <a 
                    href="mailto:hello.uiverse.bd@gmail.com" 
                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center group"
                  >
                   hello.uiverse@gmail.com
                    <FiArrowUpRight className="ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-xs" />
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -1 }}
                className="flex items-start gap-2 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
              >
                <div className="mt-0.5 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-300">Call Us</p>
                  <a 
                    href="tel:+1234567890" 
                    className="text-xs text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    +880  1790973652
                  </a>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -1 }}
                className="flex items-start gap-2 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
              >
                <div className="mt-0.5 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-600 dark:text-gray-300">Visit Us</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                  Bogura, Bangladesh
                  </p>
                </div>
              </motion.div>

              <div className="pt-2">
                <h4 className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-2">Follow Us</h4>
                <div className="grid grid-cols-4 gap-2">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0.9, opacity: 0.8 }}
                      whileHover={{ 
                        scale: 1.05,
                        color: social.color,
                        y: -2,
                        boxShadow: `0 3px 10px ${social.color}30`
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="relative w-full aspect-square rounded-md bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all"
                      style={{ color: isHovering === i ? social.color : '' }}
                      onMouseEnter={() => handleHoverStart(i)}
                      onMouseLeave={handleHoverEnd}
                    >
                      {social.icon}
                      <AnimatePresence>
                        {isHovering === i && (
                          <motion.span
                            initial={{ opacity: 0, y: 3 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 3 }}
                            className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-[10px] whitespace-nowrap text-gray-700 dark:text-gray-300"
                          >
                            {social.name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Divider */}
        <motion.div 
          variants={item}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent my-6 transform origin-left"
        />

        {/* Bottom Bar */}
        <motion.div 
          variants={container}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.p 
            variants={item}
            className="text-xs text-gray-500 dark:text-gray-500 text-center md:text-left"
          >
            © {year} UIVerse Design Agency
          </motion.p>
          
          <motion.div variants={item} className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Link 
              href="/privacy" 
              className="text-xs text-gray-500 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center group"
            >
              Privacy
              <FiArrowUpRight className="ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-xs" />
            </Link>
            <Link 
              href="/terms" 
              className="text-xs text-gray-500 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center group"
            >
              Terms
              <FiArrowUpRight className="ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-xs" />
            </Link>
            <Link 
              href="/cookies" 
              className="text-xs text-gray-500 dark:text-gray-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center group"
            >
              Cookies
              <FiArrowUpRight className="ml-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 text-xs" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Back to top button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#7c3aed",
              boxShadow: "0 3px 10px rgba(124, 58, 237, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-4 right-4 w-10 h-10 rounded-full bg-gray-800 dark:bg-gray-700 text-white flex items-center justify-center shadow-md z-50"
            aria-label="Back to top"
          >
            <FaArrowUp className="w-3 h-3" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}

export default Footer