"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase } from "lucide-react";
import { education, certifications, experience } from "../data";

export default function Experience() {
  return (
    <section className="py-20 bg-gray-900 text-white" id="experience">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          <span className="text-green-400 font-mono">03.</span> Experience & Education
        </motion.h2>

        <div className="grid md:grid-cols-1 gap-16">
          
          {/* Work Experience Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-green-400" size={28} />
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            
            <div className="space-y-12 border-l-2 border-gray-800 ml-3 pl-8 relative">
              {experience.map((job, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-green-500 border-4 border-gray-900" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-xl font-bold text-white">{job.role}</h4>
                    <span className="text-green-400 font-mono text-sm">{job.period}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4 text-sm text-gray-400">
                    <span className="font-semibold text-gray-300">{job.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{job.location}</span>
                  </div>

                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                        <span className="text-green-400 mt-1.5 text-xs">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-green-400" size={28} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-8 border-l-2 border-gray-800 ml-3 pl-8 relative">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-green-500 border-4 border-gray-900" />
                  <h4 className="text-xl font-bold text-white">{edu.school}</h4>
                  <p className="text-green-400 font-mono text-sm mb-2">{edu.degree}</p>
                  <p className="text-gray-500 text-sm mb-4">{edu.period}</p>
                  <p className="text-gray-400">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          {certifications.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="text-green-400" size={28} />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-4 bg-gray-800 rounded-lg border border-gray-700 flex flex-col justify-between h-full hover:border-green-500 transition-colors"
                  >
                    <div>
                      <h4 className="font-bold text-white mb-1">{cert.name}</h4>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-700 flex justify-between items-center">
                      <span className="text-green-400 font-mono text-xs">{cert.date}</span>
                      {cert.link && cert.link !== "#" && (
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-500 hover:text-white transition-colors">
                          Verify ↗
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
