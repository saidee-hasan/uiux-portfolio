"use client";

import { motion } from "framer-motion";
import { SheetDemo } from "../SheetDemo";
import Navbar from "../shared/navbar";

const  Header = () => {

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="header-section"
    >
      <div className="wrapper py-3 d-flex-justifi w-full">
        {/* Left - Logo & Name */}
        <Navbar />
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden hover:bg-gray-100 dark:hover:bg-gray-100">
          <SheetDemo />
        </div>
        
      </div>
    </motion.header>
  );
};

export default Header;
