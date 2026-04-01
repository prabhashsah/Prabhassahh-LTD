"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of commercial projects do you handle?",
    a: "We handle a wide spectrum of commercial projects including corporate high-rises, retail malls, mixed-use complexes, and industrial logistics parks."
  },
  {
    q: "How do you ensure project timelines are met?",
    a: "We utilize advanced AI-driven project management software to track milestones in real-time, allowing us to preemptively address supply chain or labor shortages before they impact the schedule."
  },
  {
    q: "Do you provide design-build services?",
    a: "Yes. From conceptual architecture and structural engineering to final interior fit-outs, we offer comprehensive turnkey design-build solutions."
  },
  {
    q: "What are your safety protocols on site?",
    a: "Safety is our absolute priority. We adhere to stringent international HSE (Health, Safety, and Environment) standards, conducting mandatory daily briefings and regular third-party audits on all active sites."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    if (openIdx === idx) setOpenIdx(null);
    else setOpenIdx(idx);
  };

  return (
    <section id="faq" className="py-24 bg-brand-light relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-0.5 w-12 bg-brand-orange"></span>
            <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm">Knowledge Base</h3>
            <span className="h-0.5 w-12 bg-brand-orange"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-white rounded-lg border transition-colors ${isOpen ? "border-brand-orange shadow-md" : "border-brand-gray hover:border-brand-dark/30"}`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className={`font-bold text-lg transition-colors ${isOpen ? "text-brand-orange" : "text-brand-dark"}`}>
                    {faq.q}
                  </span>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className={isOpen ? "text-brand-orange" : "text-gray-400"} size={24} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed font-medium">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
