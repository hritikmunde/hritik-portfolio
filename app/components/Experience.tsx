"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, Calendar, MapPin } from "lucide-react";
import { education, certifications, experience } from "../data";

export default function Experience() {
  return (
    <section className="py-24 bg-gray-950 text-white relative" id="experience">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          <span className="text-green-400 font-mono text-2xl mr-2">03.</span> 
          Career & Certifications
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Column */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Briefcase className="text-green-400" />
              Work History
            </h3>
            
            <div className="relative border-l border-gray-800 ml-3 space-y-12 pb-12">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-green-500 ring-4 ring-gray-950/50" />
                  
                  <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 hover:border-green-500/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <h4 className="text-xl font-bold text-gray-200">{job.role}</h4>
                      <span className="text-green-400 font-mono text-sm bg-green-400/10 px-3 py-1 rounded-full w-fit">
                        {job.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-mono">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {job.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {job.location}
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {job.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                          <span className="text-green-500 mt-1.5 opacity-60">▹</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sidebar: Certifications & Education */}
          <div className="space-y-12">
            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="text-green-400" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="group bg-gray-900/50 p-5 rounded-lg border border-gray-800 hover:border-green-500/50 hover:bg-gray-800 transition-all"
                  >
                    <h4 className="font-bold text-gray-200 group-hover:text-green-400 transition-colors">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                    <p className="text-xs text-gray-600 mt-2 font-mono flex items-center gap-2">
                       <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                       {cert.date}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
               <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="text-green-400" />
                Education
              </h3>
               <div className="space-y-6 border-l border-gray-800 ml-3 pl-8">
                  {education.map((edu, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="absolute -left-[37px] top-1.5 w-2 h-2 rounded-full border border-green-500 bg-gray-950" />
                      <h4 className="text-lg font-bold text-gray-200">{edu.school}</h4>
                      <p className="text-green-400 text-sm mb-1">{edu.degree}</p>
                      <p className="text-xs text-gray-500 font-mono mb-2">{edu.period}</p>
                      <p className="text-sm text-gray-400">{edu.description}</p>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
