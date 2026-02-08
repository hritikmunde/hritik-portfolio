"use client";

import { motion } from "framer-motion";
import { personalInfo } from "../data";
import { Mail, Linkedin, Github, Terminal } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden" id="contact">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl"
        >
          <div className="inline-block p-4 rounded-full bg-green-500/10 mb-6 border border-green-500/20">
             <Terminal className="text-green-400" size={32} />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
            Initialize Connection?
          </h2>
          
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            I'm currently looking for new opportunities in DevOps and Cloud Engineering. 
            Whether you have a question about my stacks, infrastructure, or just want to ping me — 
            my inbox is always open (port 25).
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="px-8 py-4 bg-green-600 rounded-lg text-white font-bold hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Mail size={20} />
              <span>Send Packet</span>
            </a>
            
            <a 
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 font-bold hover:bg-gray-700 hover:text-white transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              <Linkedin size={20} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <div className="flex justify-center gap-6 mb-4">
               <a href={personalInfo.socials.github} className="text-gray-500 hover:text-green-400 transition-colors"><Github size={20} /></a>
               <a href={personalInfo.socials.linkedin} className="text-gray-500 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
               <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-red-400 transition-colors"><Mail size={20} /></a>
            </div>
            <p className="text-gray-600 text-sm font-mono">
              Designed & Deployed by {personalInfo.name} <span className="text-green-500">© 2026</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
