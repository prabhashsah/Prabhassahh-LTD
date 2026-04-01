"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 isolate group"
    >
      {/* Tooltip */}
      <div className="bg-white text-brand-dark px-4 py-2 rounded shadow-xl font-bold text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:-translate-x-2 border border-brand-gray absolute right-16 bottom-2 whitespace-nowrap pointer-events-none">
        Chat via WhatsApp
      </div>

      <a
        href="https://wa.me/9779800000000" // Replace with real number
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-green-400 hover:scale-110 transition-all cursor-pointer relative"
      >
        <MessageCircle size={32} />
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full border-4 border-green-500 animate-ping opacity-75"></span>
      </a>
    </motion.div>
  );
}
