"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const values = [
    "Uncompromising Safety Standards",
    "On-Time Project Delivery",
    "Sustainable & Modern Architecture",
    "Transparent Client Communication"
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image & Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/about.png" 
                alt="Prabhas and Prem Engineers reviewing blueprint" 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-brand-dark/10"></div>
            </div>
            
            {/* Floating Trust Badge */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 md:bottom-10 md:-right-10 bg-white p-6 md:p-8 rounded-xl shadow-xl max-w-xs border-l-4 border-brand-orange"
            >
              <div className="text-4xl font-extrabold text-brand-dark mb-2">25+</div>
              <p className="text-sm font-bold text-gray-600">Years of Building Legacy & Trust in Nepal</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="h-0.5 w-12 bg-brand-orange"></span>
              <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm">About The Company</h3>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
              A Foundation Built On Vision & Integrity.
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              At <strong className="text-brand-dark">Prabhas & Prem Commercial Construction Pvt. Ltd.</strong>, we don’t just build structures; we forge long-term partnerships. With decades of expertise backing our operations, we bring a data-driven, client-first approach to commercial, residential, and industrial construction.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {values.map((val, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-orange shrink-0" size={20} />
                  <span className="text-gray-700 font-semibold text-sm">{val}</span>
                </li>
              ))}
            </ul>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: "1rem" }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 bg-brand-light rounded-lg border border-brand-gray mb-8">
                    <h4 className="text-brand-dark font-bold text-xl mb-3">Our Mission</h4>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      To deliver world-class construction solutions by leveraging cutting-edge technology, unparalleled craftsmanship, and stringent quality control, exceeding client expectations on every project.
                    </p>
                    <h4 className="text-brand-dark font-bold text-xl mb-3">Our Vision</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      To be the most respected and trusted enterprise construction firm globally, renowned for driving innovation and sustainable infrastructure development.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="group flex items-center gap-2 text-brand-dark font-bold hover:text-brand-orange transition-colors w-max"
            >
              {isExpanded ? (
                <>Read Less <ChevronUp className="group-hover:-translate-y-1 transition-transform" size={20} /></>
              ) : (
                <>Read More <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} /></>
              )}
            </button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
