"use client";

import { motion } from "framer-motion";
import { skills } from "../data";

export default function Skills() {
  return (
    <section className="py-20 bg-gray-900 text-white" id="skills">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          <span className="text-green-400 font-mono">01.</span> Technical Arsenal
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="text-green-400" size={24} />
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span 
                    key={item} 
                    className="px-3 py-1 bg-gray-900 rounded-full text-sm text-gray-300 font-mono"
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
