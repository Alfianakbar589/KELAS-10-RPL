import React from 'react';
import { Hexagon, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-cyan-400/20 border border-primary/30 group-hover:border-cyan-400/80 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.4)] transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-cyan-400/20 transition-colors"></div>
            <Hexagon className="w-5 h-5 text-primary group-hover:text-cyan-300 transition-colors relative z-10" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-black tracking-widest text-white">
            FAN<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">TECH</span>
          </span>
        </div>

        <p className="text-gray-500 text-sm flex items-center gap-1">
          &copy; {new Date().getFullYear()} Didesain & Dibangun dengan <Heart className="w-4 h-4 text-red-500 animate-pulse" /> oleh Alfian
        </p>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#home" className="text-gray-500 hover:text-white transition-colors">Beranda</a>
          <a href="#portfolio" className="text-gray-500 hover:text-white transition-colors">Portofolio</a>
          <a href="#contact" className="text-gray-500 hover:text-white transition-colors">Kontak</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
