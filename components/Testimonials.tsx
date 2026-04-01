"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ramesh Rajbhandari",
    role: "CEO",
    company: "Apex Holdings",
    text: "Prabhas & Prem fundamentally altered how we view commercial construction in Nepal. Their adherence to schedules and premium finishes sets a benchmark.",
  },
  {
    id: 2,
    name: "Sunita Koirala",
    role: "Director of Real Estate",
    company: "Grand Estates",
    text: "Working with them on our luxury villa projects was seamless. Their transparency in communication and engineering expertise resulted in exceptional ROI.",
  },
  {
    id: 3,
    name: "Aman Shrestha",
    role: "Head of Infrastructure",
    company: "Global Logistics",
    text: "For large-scale structural works, trust is everything. They delivered our mega-warehouse facility three weeks ahead of schedule with flawless safety records.",
  }
];

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-0.5 w-12 bg-brand-orange"></span>
            <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm">Client Experiences</h3>
            <span className="h-0.5 w-12 bg-brand-orange"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">
            Trusted By Industry Leaders
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ t, variants }: { t: Testimonial; variants: any }) {
  const [expanded, setExpanded] = useState(false);
  
  // truncate text to ~100 chars
  const isLong = t.text.length > 120;
  const displayText = expanded ? t.text : (isLong ? t.text.slice(0, 120) + "..." : t.text);

  return (
    <motion.div 
      variants={variants}
      className="bg-brand-light border border-brand-gray p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <Quote className="text-brand-orange/30 w-12 h-12 mb-6" />
        <p className="text-gray-700 leading-relaxed font-medium mb-4 italic text-lg">
          "{displayText}"
        </p>
        
        {isLong && (
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="text-brand-orange text-sm font-bold tracking-wide hover:text-brand-dark transition-colors mb-6 uppercase"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      <div className="flex items-center gap-4 pt-6 border-t border-brand-gray mt-auto">
        <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center font-bold text-white text-lg shrink-0">
          {t.name.charAt(0)}
        </div>
        <div>
          <h5 className="font-bold text-brand-dark tracking-tight">{t.name}</h5>
          <p className="text-gray-500 text-xs font-semibold uppercase">{t.role}, {t.company}</p>
        </div>
      </div>
    </motion.div>
  );
}
