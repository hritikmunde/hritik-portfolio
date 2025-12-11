"use client";

import { motion } from "framer-motion";
import { personalInfo } from "../data";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-900 text-white text-center" id="contact">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-green-400 font-mono mb-4">04. What's Next?</p>
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-400 text-lg mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a 
            href={`mailto:${personalInfo.email}`}
            className="inline-block px-8 py-4 border border-green-400 text-green-400 font-mono rounded hover:bg-green-400/10 transition-colors"
          >
            Say Hello
          </a>
        </motion.div>

        <footer className="mt-20 text-gray-500 text-sm font-mono">
          <p>Designed & Built by {personalInfo.name}</p>
        </footer>
      </div>
    </section>
  );
}
