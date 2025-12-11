"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-4 shadow-lg" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-green-400 font-mono font-bold text-xl">
          &lt;Hritik /&gt;
        </a>
        
        <div className="hidden md:flex gap-8 font-mono text-sm text-gray-300">
          <a href="#skills" className="hover:text-green-400 transition-colors"><span className="text-green-400">01.</span> Skills</a>
          <a href="#projects" className="hover:text-green-400 transition-colors"><span className="text-green-400">02.</span> Projects</a>
          <a href="#experience" className="hover:text-green-400 transition-colors"><span className="text-green-400">03.</span> Experience</a>
          <a href="#contact" className="hover:text-green-400 transition-colors"><span className="text-green-400">04.</span> Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
