"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Building, LayoutGrid, Home as HomeIcon } from "lucide-react";

type ProjectCategory = "All" | "Commercial" | "Residential";

type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  client: string;
  year: string;
  description: string;
};

const projects: Project[] = [
  {
    id: "p1",
    title: "Apex Corporate Tower",
    category: "Commercial",
    image: "/images/project_2.png",
    client: "Apex Holdings Group",
    year: "2024",
    description: "A 45-story commercial skyscraper featuring sustainable materials, an advanced glass curtain wall, and a multi-level premium retail podium."
  },
  {
    id: "p2",
    title: "The Grand Retail Plaza",
    category: "Commercial",
    image: "/images/project_1.png",
    client: "Grand Estates",
    year: "2023",
    description: "State-of-the-art retail plaza spanning 500,000 sq ft, focusing on high-end luxury retail spaces and a modern open-air atrium."
  },
  {
    id: "p3",
    title: "Eco-Industrial Park",
    category: "Commercial",
    image: "/images/project_2.png",
    client: "Global Logistics",
    year: "2022",
    description: "A massive, automated logistics complex combining warehousing and sleek office spaces built rapidly using modular steel structures."
  },
  {
    id: "p4",
    title: "Himalayan Ridge Villas",
    category: "Residential",
    image: "/images/project_1.png",
    client: "Private Development",
    year: "2024",
    description: "A high-end gated community of 40 custom-built luxury villas, integrating cutting-edge smart home tech with stunning landscapes."
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-brand-light relative min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-0.5 w-12 bg-brand-orange"></span>
              <h3 className="text-brand-orange font-bold uppercase tracking-widest text-sm">Our Portfolio</h3>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight">
              A Legacy of Completed Masterpieces
            </h2>
          </div>
          
          {/* Filters */}
          <div className="flex items-center gap-2 bg-white rounded-full p-1.5 shadow-sm border border-brand-gray w-fit">
            {(["All", "Commercial", "Residential"] as ProjectCategory[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                  filter === tab
                    ? "bg-brand-dark text-white shadow-md"
                    : "text-brand-text hover:bg-gray-100"
                }`}
              >
                {tab === "All" && <LayoutGrid size={16} />}
                {tab === "Commercial" && <Building size={16} />}
                {tab === "Residential" && <HomeIcon size={16} />}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layoutId={`card-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer h-[400px] overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all"
                onClick={() => setSelectedId(project.id)}
              >
                <motion.img 
                  layoutId={`image-${project.id}`}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                {/* Card Content */}
                <div className="absolute top-6 left-6">
                   <div className="px-3 py-1 bg-brand-orange text-white text-xs font-bold uppercase tracking-widest rounded">
                     {project.category}
                   </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <motion.h4 layoutId={`title-${project.id}`} className="text-white text-3xl font-bold mb-2 break-words">
                      {project.title}
                    </motion.h4>
                    <p className="text-gray-300 text-sm font-medium">{project.client} &bull; {project.year}</p>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-brand-orange transition-colors shrink-0 mix-blend-screen">
                    <ArrowUpRight strokeWidth={3} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Popup overlay */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-brand-dark/90 backdrop-blur-md cursor-pointer"
              onClick={() => setSelectedId(null)}
            />
            
            {/* Modal Content */}
            <motion.div 
              layoutId={`card-${selectedProject.id}`}
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-3xl overflow-hidden z-10 flex flex-col md:flex-row"
            >
              {/* Image side */}
              <motion.div className="w-full md:w-1/2 h-[300px] md:h-[500px]">
                <motion.img 
                  layoutId={`image-${selectedProject.id}`}
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Text side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-brand-light">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="text-brand-orange text-xs font-bold uppercase tracking-widest mb-2">{selectedProject.category}</div>
                    <motion.h3 layoutId={`title-${selectedProject.id}`} className="text-3xl font-extrabold text-brand-dark leading-tight">
                      {selectedProject.title}
                    </motion.h3>
                  </div>
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="p-2 bg-gray-200 hover:bg-red-500 hover:text-white rounded-full transition-colors shrink-0"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-lg border border-brand-gray shadow-sm">
                    <span className="block text-gray-500 text-xs font-bold mb-1 uppercase">Client</span>
                    <span className="text-brand-dark font-semibold">{selectedProject.client}</span>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-brand-gray shadow-sm">
                    <span className="block text-gray-500 text-xs font-bold mb-1 uppercase">Completion Date</span>
                    <span className="text-brand-dark font-semibold">{selectedProject.year}</span>
                  </div>
                </div>
                
                <h5 className="font-bold text-lg mb-3 text-brand-dark border-b border-brand-gray pb-2 inline-block">Project Overview</h5>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 leading-relaxed font-medium"
                >
                  {selectedProject.description}
                </motion.p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
