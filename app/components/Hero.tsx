"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { personalInfo } from "../data";
import TerminalComponent from "./Terminal";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 border border-green-500/30 rounded-full bg-green-500/10 mb-4">
             <span className="text-green-400 font-mono text-sm">Open to Work</span>
          </div>
          
          <h2 className="text-gray-400 font-mono text-lg">Hi, my name is</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-2">
            {personalInfo.name}
          </h1>
          
          <div className="h-12 md:h-16 overflow-hidden">
             <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
               {personalInfo.role}
             </h2>
          </div>
          
          <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
            {personalInfo.bio}
          </p>
          
          <div className="flex gap-4 pt-6">
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-green-500 hover:text-green-400 transition-all duration-300 hover:-translate-y-1"
            >
              <Github size={22} />
            </a>
            <a 
              href={personalInfo.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-red-500 hover:text-red-400 transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={22} />
            </a>
            <a 
              href="/Hritik-Munde-DevOps.pdf" 
              target="_blank"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 rounded-lg font-bold hover:bg-green-500 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transform hover:-translate-y-1"
            >
              <FileText size={20} />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>

        <div className="w-full relative">
          {/* Decorative blur blob */}
          <div className="absolute -inset-4 bg-green-500/20 blur-3xl rounded-full opacity-20 animate-pulse"></div>
          <TerminalComponent />
        </div>
      </div>
    </section>
  );
}
