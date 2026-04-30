import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Siswa Kelas X RPL',
    org: 'SMKN 2 Buduran',
    date: '2025 - Sekarang',
    description: 'Saat ini sedang menempuh pendidikan Rekayasa Perangkat Lunak. Mempelajari dasar-dasar pemrograman, pengembangan web, dan algoritma',
    icon: <GraduationCap className="w-5 h-5" />,
    type: 'education'
  },
  {
    id: 2,
    title: 'Pengembangan Skill',
    org: 'SMKN 2 Buduran',
    date: 'Awal 2026',
    description: 'Fokus mengembangkan kemampuan dalam pembuatan web menggunakan HTML, CSS, PHP, Laravel, JavaScript, React JS, dan Java (NetBeans)',
    icon: <Award className="w-5 h-5" />,
    type: 'certification'
  },
  {
    id: 3,
    title: 'Proyek Portofolio Pribadi',
    org: 'Freelance / Mandiri',
    date: 'April 2026',
    description: 'Merancang dan mengembangkan portofolio pribadi yang interaktif menggunakan Vite, React, Tailwind CSS, dan Framer Motion',
    icon: <Briefcase className="w-5 h-5" />,
    type: 'project'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-primary/5 -z-10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Perjalanan <span className="neon-text">Saya</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-cyan-400/50 to-transparent md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full glass border border-primary/30 text-primary z-10 box-glow bg-slate-900">
                  {exp.icon}
                </div>

                {/* Content Box */}
                <div className="ml-20 md:ml-0 md:w-1/2 md:px-12 pt-2">
                  <div className={`glass-card p-6 rounded-2xl relative ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    {/* Arrow Pointer */}
                    <div className={`hidden md:block absolute top-6 w-0 h-0 border-y-8 border-y-transparent ${idx % 2 === 0 ? '-left-4 border-r-8 border-r-slate-800' : '-right-4 border-l-8 border-l-slate-800'}`}></div>
                    
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                      {exp.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <h4 className="text-sm text-cyan-400 font-medium mb-4">{exp.org}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
