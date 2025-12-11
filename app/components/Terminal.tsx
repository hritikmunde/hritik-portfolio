"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TerminalComponent() {
  const [text, setText] = useState("");
  const fullText = "> initializing_portfolio...\n> loading_modules...\n> status: online\n> welcome_user: hritik_munde";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-lg mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-800 font-mono text-sm"
    >
      <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-gray-400 text-xs">bash — 80x24</span>
      </div>
      <div className="p-4 text-green-400 min-h-[150px]">
        <pre className="whitespace-pre-wrap">
          {text}
          <span className="animate-pulse">_</span>
        </pre>
      </div>
    </motion.div>
  );
}
