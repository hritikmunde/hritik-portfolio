"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TerminalComponent() {
  const [lines, setLines] = useState<string[]>([]);
  
  useEffect(() => {
    const commands = [
      { cmd: "whoami", output: "hritik_munde" },
      { cmd: "cat skills.json", output: '"DevOps", "AWS", "K8s", "Go"' },
      { cmd: "kubectl get pods", output: "NAME           READY   STATUS    RESTART\nportfolio-app  1/1     Running   0" },
      { cmd: "./init_career.sh", output: "Initializing..." }
    ];

    let currentLine = 0;
    
    // Reset lines on mount
    setLines([]);
    
    const runCommand = async () => {
      if (currentLine >= commands.length) return;

      // Type command
      const command = commands[currentLine];
      setLines(prev => [...prev, `voldemort@macbook:~$ ${command.cmd}`]);
      
      await new Promise(r => setTimeout(r, 800)); // Processing delay
      
      // Show output
      if (command.output) {
        setLines(prev => [...prev, command.output]);
      }
      
      currentLine++;
      setTimeout(runCommand, 1000); // Wait before next command
    };

    runCommand();
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-lg mx-auto bg-[#1a1b26] rounded-xl overflow-hidden shadow-2xl border border-gray-800 font-mono text-sm"
    >
      <div className="bg-[#1f2335] px-4 py-3 flex items-center gap-2 border-b border-gray-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="ml-4 text-gray-500 text-xs flex-1 text-center">voldemort@macbook: ~</span>
      </div>
      <div className="p-4 text-[#a9b1d6] min-h-[300px] max-h-[300px] overflow-y-auto font-medium">
        <div className="space-y-1">
          {lines.map((line, i) => (
            <div key={i} className="break-all whitespace-pre-wrap">
              {line.startsWith("voldemort") ? (
                <span>
                  <span className="text-[#9ece6a]">voldemort@macbook</span>
                  <span className="text-[#7aa2f7]">:~$</span>
                  <span className="text-[#c0caf5] ml-2">{line.split("$")[1]}</span>
                </span>
              ) : (
                <span className="text-[#a9b1d6]">{line}</span>
              )}
            </div>
          ))}
          <div className="flex items-center">
             <span className="text-[#9ece6a]">voldemort@macbook</span>
             <span className="text-[#7aa2f7]">:~$</span>
             <span className="ml-2 w-2 h-4 bg-[#c0caf5] animate-pulse" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
