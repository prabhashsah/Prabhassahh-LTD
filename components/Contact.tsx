"use client";

import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", projectType: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text / Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full justify-center"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="h-0.5 w-12 bg-brand-orange"></span>
              <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm">Get In Touch</h3>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
              Ready to Build <br /> Your Next Project?
            </h2>
            
            <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-lg">
              Partner with Prabhas & Prem to ensure your commercial infrastructure is executed flawlessly. Reach out to our engineering directors today for a preliminary consultation.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-6 p-6 rounded-xl bg-brand-light border border-brand-gray">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-brand-dark mb-1">Corporate Office</h5>
                  <p className="text-gray-500 font-medium">123 Corporate Blvd, Business District, Kathmandu</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-xl bg-brand-light border border-brand-gray">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-brand-dark mb-1">Direct Hotline</h5>
                  <p className="text-gray-500 font-medium">+977 1-400-0000</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-xl bg-brand-light border border-brand-gray">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="font-bold text-brand-dark mb-1">Email Connect</h5>
                  <p className="text-gray-500 font-medium">hello@prabhasprem.com</p>
                </div>
              </div>
            </div>
            
          </motion.div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-dark p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden"
          >
            {/* Background design elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue/30 blur-3xl rounded-full -translate-x-10 translate-y-10"></div>
            
            <h3 className="text-white text-3xl font-bold mb-8 relative z-10">Request a Quote</h3>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-bold tracking-wide uppercase">Full Name</label>
                  <input 
                    required type="text" 
                    value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/20 rounded p-4 text-white focus:outline-none focus:border-brand-orange transition-colors" 
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-300 text-sm font-bold tracking-wide uppercase">Email Address</label>
                  <input 
                    required type="email" 
                    value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/20 rounded p-4 text-white focus:outline-none focus:border-brand-orange transition-colors" 
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-bold tracking-wide uppercase">Project Type</label>
                <select 
                  required
                  value={formData.projectType} onChange={e => setFormData({...formData, projectType: e.target.value})}
                  className="w-full bg-brand-dark border border-white/20 rounded p-4 text-white focus:outline-none focus:border-brand-orange transition-colors appearance-none"
                >
                  <option value="" disabled>Select a Project Type...</option>
                  <option value="commercial">Commercial & Corporate</option>
                  <option value="residential">Luxury Residential</option>
                  <option value="infrastructure">Infrastructure</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm font-bold tracking-wide uppercase">Project Details</label>
                <textarea 
                  required rows={4} 
                  value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/20 rounded p-4 text-white resize-none focus:outline-none focus:border-brand-orange transition-colors" 
                  placeholder="Tell us about the scope of your project..."
                />
              </div>

              <button 
                type="submit" 
                disabled={status !== "idle"}
                className={`w-full py-4 rounded font-bold text-lg flex justify-center items-center gap-2 transition-all shadow-lg ${
                  status === "success" 
                    ? "bg-green-500 text-white" 
                    : "bg-brand-orange text-white hover:bg-[#ff9d33]"
                }`}
              >
                {status === "idle" && <><Send size={20} /> Let's Build It</>}
                {status === "submitting" && <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
                {status === "success" && "Message Sent Successfully!"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
