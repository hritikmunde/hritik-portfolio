"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section className="py-20 bg-black text-white" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          <span className="text-green-400 font-mono">02.</span> Featured Deployments
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-gray-800 rounded-lg text-green-400">
                    <Github size={20} />
                  </div>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                      <span className="text-green-400 mt-1">▹</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-mono text-green-400/80"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
