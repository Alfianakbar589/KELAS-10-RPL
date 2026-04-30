import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Code2, Briefcase, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto pb-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-medium text-primary mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Tersedia untuk proyek baru
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Halo, Saya <span className="neon-text">Alfian</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-3xl font-medium text-gray-300 mb-8 h-[40px]"
          >
            <TypeAnimation
              sequence={[
                'Siswa X RPL',
                2000,
                'Penggiat Frontend',
                2000,
                'Calon Developer',
                2000,
                'Penjelajah Teknologi',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed"
          >
            Saya seorang siswa dari SMKN 2 Buduran dengan jurusan Rekayasa Perangkat Lunak (RPL) Saya sangat bersemangat dalam menciptakan pengalaman web yang modern, interaktif, dan indah
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a href="#portfolio" className="group flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-blue-600 transition-all hover:box-glow">
              Lihat Karya Saya
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="group flex items-center gap-2 px-8 py-3 glass-card text-white rounded-full font-semibold hover:bg-white/10 transition-all">
              Hubungi Saya
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex items-center gap-6"
          >
            <SocialLink href="#" icon={<Code2 />} />
            <SocialLink href="#" icon={<Briefcase />} />
            <SocialLink href="#" icon={<Mail />} />
          </motion.div>
          
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest">Gulir ke Bawah</span>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-primary hover:box-glow transition-all duration-300"
  >
    {React.cloneElement(icon, { className: 'w-5 h-5' })}
  </a>
);

export default Hero;
