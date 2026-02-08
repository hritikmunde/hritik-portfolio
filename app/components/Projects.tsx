"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section className="py-24 bg-black text-white relative" id="projects">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          <span className="text-green-400 font-mono text-2xl mr-2">02.</span> 
          Featured Deployments
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-green-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Top Bar for "Window" look */}
              <div className="h-2 bg-gradient-to-r from-green-500/20 to-transparent w-full"></div>

              <div className="p-7 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-gray-800/80 rounded-lg text-green-400 group-hover:scale-110 transition-transform duration-300">
                    <Folder size={24} />
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mb-6 space-y-2 bg-black/20 p-4 rounded-lg border border-gray-800/50">
                  {project.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="text-green-400 mt-0.5">▹</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-800">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs font-mono text-green-400/90 bg-green-400/10 px-2 py-1 rounded"
                    >
                      {tag}
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
