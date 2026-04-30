import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Hexagon, LogIn, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Tentang', href: '#about' },
    { name: 'Keahlian', href: '#skills' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Kontak', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-400/20 border border-primary/30 group-hover:border-cyan-400/80 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-cyan-400/20 transition-colors"></div>
              <Hexagon className="w-6 h-6 text-primary group-hover:text-cyan-300 transition-colors relative z-10" strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-black tracking-widest text-white">
              FAN<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">TECH</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white hover:text-glow transition-all"
              >
                {link.name}
              </a>
            ))}
            <Link
              to={isAuthenticated ? '/dashboard' : '/login'}
              className="px-5 py-2 text-sm font-semibold text-white bg-primary/20 border border-primary/50 rounded-full hover:bg-primary/40 hover:box-glow transition-all duration-300 flex items-center gap-2"
            >
              {isAuthenticated ? (
                <><LayoutDashboard className="w-4 h-4" />Dashboard</>
              ) : (
                <><LogIn className="w-4 h-4" />Login</>
              )}
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass-card border-t-0 py-4 px-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-300 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
