"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HardHat, TrendingUp, UsersRound } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Unmatched Reliability",
      description: "Our core foundation is delivering on time and within budget, with zero compromise on safety.",
      icon: <ShieldCheck className="text-white" size={32} />
    },
    {
      title: "Elite Engineering",
      description: "We deploy highly skilled engineering teams using the latest structural methodologies.",
      icon: <HardHat className="text-white" size={32} />
    },
    {
      title: "Data-Driven Execution",
      description: "Leveraging modern project management SaaS tools for transparent timeline tracking.",
      icon: <TrendingUp className="text-white" size={32} />
    },
    {
      title: "Client-Centric Focus",
      description: "A banking-level commitment to trusting client relationships and absolute transparency.",
      icon: <UsersRound className="text-white" size={32} />
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Abstract Background pattern */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-brand-blue/30 -skew-x-12 z-0 blur-3xl rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <span className="h-0.5 w-12 bg-brand-orange"></span>
            <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm text-shadow">Why Prabhas & Prem</h3>
            <span className="h-0.5 w-12 bg-brand-orange"></span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-md"
          >
            The Trust of a Bank. <br className="hidden md:block"/> The Innovation of Tech.
          </motion.h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, idx) => (
            <motion.div 
              key={idx}
              variants={itemAnim}
              className="bg-brand-blue/40 border border-brand-blue/80 backdrop-blur-md p-8 rounded-xl hover:bg-brand-blue/60 hover:-translate-y-2 transition-all duration-300 shadow-2xl group"
            >
              <div className="w-16 h-16 bg-brand-orange rounded-lg flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                {reason.icon}
              </div>
              <h4 className="text-white font-bold text-xl mb-3 tracking-wide">{reason.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
