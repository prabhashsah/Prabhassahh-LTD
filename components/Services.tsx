"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Home, Landmark, Plus, Minus, Check } from "lucide-react";

type Service = {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  benefits: string[];
};

const services: Service[] = [
  {
    id: "01",
    title: "Commercial & Corporate Core",
    icon: <Building2 className="text-brand-orange" size={28} />,
    description: "High-end corporate office buildings, business parks, and mixed-use commercial centers built with precision and modern architectural standards.",
    benefits: ["LEED Certified Sustainable Builds", "Advanced HVAC & Electrical Pre-planning", "Rapid Timeline Execution"]
  },
  {
    id: "02",
    title: "Luxury Residential Contracting",
    icon: <Home className="text-brand-orange" size={28} />,
    description: "Premium residential complexes and bespoke luxury villas. We bring high-end materials and meticulous craftsmanship to every home we build.",
    benefits: ["Custom High-End Finishes", "Smart Home Integrated Frameworks", "Turnkey Handover Solutions"]
  },
  {
    id: "03",
    title: "Government & Infrastructure",
    icon: <Landmark className="text-brand-orange" size={28} />,
    description: "Large-scale civil engineering projects including bridges, roads, and institutional buildings built to rigorous safety and compliance codes.",
    benefits: ["Strict Regulatory Compliance", "High-Durability Material Sourcing", "Complex Project Management"]
  }
];

export default function Services() {
  const [active, setActive] = useState<string | null>("01");

  const toggle = (id: string) => {
    if (active === id) setActive(null);
    else setActive(id);
  };

  return (
    <section id="services" className="py-24 bg-brand-light relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-0.5 w-8 bg-brand-orange"></span>
            <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm">Our Expertise</h3>
            <span className="h-0.5 w-8 bg-brand-orange"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6">
            Enterprise-Grade Construction Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We provide an end-to-end building experience, from core infrastructure to bespoke interior finishes, maximizing your return on investment.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {services.map((service) => {
            const isActive = active === service.id;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`border rounded-lg overflow-hidden transition-colors duration-300 shadow-sm ${
                  isActive ? "bg-white border-brand-orange" : "bg-white border-brand-gray hover:border-brand-dark/20"
                }`}
              >
                <button 
                  onClick={() => toggle(service.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 outline-none focus:bg-gray-50/50 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${isActive ? "bg-brand-orange/10" : "bg-brand-light"}`}>
                      {service.icon}
                    </div>
                    <span className={`text-xl md:text-2xl font-bold text-left transition-colors ${isActive ? "text-brand-orange" : "text-brand-dark"}`}>
                      {service.title}
                    </span>
                  </div>
                  <div className={`shrink-0 transition-transform duration-300 ${isActive ? "rotate-90 text-brand-orange" : "text-brand-dark"}`}>
                    {isActive ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 pl-6 md:pl-[104px]">
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {service.description}
                        </p>
                        
                        <div className="bg-brand-light p-6 rounded border border-brand-gray">
                          <h5 className="font-bold text-brand-dark mb-4 text-sm uppercase tracking-wider">Key Benefits</h5>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-center gap-3">
                                <Check className="text-brand-orange shrink-0" size={18} />
                                <span className="text-gray-700 font-medium text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
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
