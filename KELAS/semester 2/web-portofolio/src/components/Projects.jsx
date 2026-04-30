import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Sistem Dashboard Sekolah',
    description: 'Sebuah UI dashboard modern untuk mengelola data sekolah, siswa, dan nilai. Dibangun dengan React dan Tailwind CSS',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Tailwind', 'Chart.js'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'Frontend E-Commerce',
    description: 'Katalog produk e-commerce yang responsif dengan UI keranjang belanja dan fitur filter',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Aplikasi Cuaca',
    description: 'Aplikasi cuaca real-time menggunakan API publik. Memiliki UI mode gelap yang bersih dan minimalis',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000',
    tags: ['JavaScript', 'API', 'Tailwind'],
    link: '#',
    github: '#'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Proyek <span className="neon-text">Unggulan</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-xl"
            >
              Beberapa karya terbaru saya yang menunjukkan kemampuan frontend saya
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#" 
            className="inline-flex items-center gap-2 text-primary hover:text-cyan-400 transition-colors font-medium"
          >
            Lihat semua di GitHub <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.2)] cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-sm uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              className="relative w-full max-w-4xl glass-card rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-10 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-primary rounded-full text-white z-20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full md:w-1/2 h-64 md:h-auto shrink-0 relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="p-8 md:p-12 overflow-y-auto flex flex-col justify-center w-full">
                <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-primary bg-primary/10 px-3 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-8">
                  {selectedProject.description}
                  <br/><br/>
                  Proyek ini mendemonstrasikan kemampuan saya dalam membangun antarmuka yang bersih dan interaktif menggunakan teknologi web modern. 
                  Fokus utama ada pada desain responsif, performa, dan pengalaman pengguna
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <a href={selectedProject.link} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                    <ExternalLink className="w-4 h-4" /> Pratinjau Langsung
                  </a>
                  <a href={selectedProject.github} className="flex-1 flex items-center justify-center gap-2 px-6 py-3 glass hover:bg-white/10 text-white rounded-lg font-medium transition-colors border border-white/20">
                    <Code2 className="w-4 h-4" /> Kode Sumber
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
