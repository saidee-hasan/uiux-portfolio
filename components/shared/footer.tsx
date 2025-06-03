'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'


const Footer = () => {
   const year = new Date().getFullYear()
  return (
        <footer className="w-full bg-background text-foreground border-t border-border py-6">
      <div className="wrapper d-flex-justifi gap-6">
        
        {/* Left: Copyright */}
        <p className="text-sm text-center md:text-left">
          © {year} Tasmina Akter. All rights reserved.
        </p>

        {/* Center: Navigation Links */}
        <div className="flex gap-4 text-sm">
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/projects" className="hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Right: Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/wptasmina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/wptasmina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:devtasmina@gmail.com"
            className="hover:text-primary transition-colors"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer