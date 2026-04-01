"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
  { label: "Completed Projects", value: 150, suffix: "+" },
  { label: "Years Experience", value: 25, suffix: "+" },
  { label: "Expert Engineers", value: 50, suffix: "+" },
  { label: "Client Satisfaction", value: 99, suffix: "%" },
];

function Counter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const easing = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easing * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return <span>{count}</span>;
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section 
      id="home" 
      className="relative w-full h-screen min-h-[800px] flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      >
        <div className="absolute inset-0 bg-brand-dark/80 bg-gradient-to-t from-brand-dark/95 via-brand-dark/70 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-white pt-10"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/50 text-brand-orange text-sm font-bold tracking-wide mb-6">
            Nepal's Premier Construction Partner
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-lg text-white">
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#ff9d33]">
              Commercial Excellence
            </span> <br />
            With Trust.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-lg mb-10 leading-relaxed font-light">
            Delivering high-performance corporate infrastructure, luxury real estate, and enterprise-grade construction solutions.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-brand-orange text-white rounded font-bold text-lg hover:bg-[#ff9d33] transition-all transform hover:-translate-y-1 shadow-lg flex items-center gap-2">
              Request a Quote <ArrowRight size={20} />
            </a>
            <a href="#projects" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded font-bold text-lg hover:bg-white hover:text-brand-dark transition-all transform hover:-translate-y-1">
              Explore Projects
            </a>
          </motion.div>
        </motion.div>
        
        {/* Right Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:grid grid-cols-2 gap-6 mt-10"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-lg shadow-2xl hover:bg-white/15 transition-colors">
              <div className="text-4xl lg:text-5xl font-extrabold text-brand-orange mb-2 flex">
                <Counter target={stat.value} />{stat.suffix}
              </div>
              <div className="text-gray-300 font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a 
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 hover:text-brand-orange transition-colors"
      >
        <span className="text-xs uppercase tracking-widest font-bold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.a>
    </section>
  );
}
