"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { personalInfo } from "../data";
import TerminalComponent from "./Terminal";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-green-400 font-mono text-lg">Hi, my name is</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
            {personalInfo.name}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-400">
            {personalInfo.role}
          </h2>
          <p className="text-gray-400 max-w-lg text-lg">
            {personalInfo.bio}
          </p>
          
          <div className="flex gap-4 pt-4">
            <a 
              href={personalInfo.socials.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-green-500 hover:text-black transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href={personalInfo.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={`mailto:${personalInfo.email}`}
              className="p-2 bg-gray-800 rounded-full hover:bg-red-500 hover:text-white transition-colors"
            >
              <Mail size={24} />
            </a>
            <a 
              href="/HritikResume.pdf" 
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-md font-medium hover:bg-green-700 transition-colors"
            >
              <FileText size={20} />
              <span>Resume</span>
            </a>
          </div>
        </motion.div>

        <div className="w-full">
          <TerminalComponent />
        </div>
      </div>
    </section>
  );
}
