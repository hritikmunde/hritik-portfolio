"use client";

import { motion } from "framer-motion";
import { skills } from "../data";

export default function Skills() {
  return (
    <section className="py-24 bg-gray-950 text-white relative overflow-hidden" id="skills">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          <span className="text-green-400 font-mono text-2xl mr-2">01.</span> 
          Technical Arsenal
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)] hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                  <category.icon className="text-green-400" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1.5 bg-black/40 border border-gray-700 rounded-md text-xs text-gray-400 font-mono group-hover:border-green-500/30 group-hover:text-green-400/80 transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
