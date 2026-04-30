import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML5', level: 95, category: 'Frontend' },
  { name: 'CSS3 / Tailwind', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 85, category: 'Frontend' },
  { name: 'React', level: 80, category: 'Frontend' },
  { name: 'PHP', level: 60, category: 'Backend' },
  { name: 'MySQL', level: 65, category: 'Backend' },
  { name: 'Git & GitHub', level: 75, category: 'Tools' },
  { name: 'Figma', level: 70, category: 'Tools' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-slate-900/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Keahlian <span className="neon-text">Teknis</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Beberapa teknologi dan alat yang saya gunakan untuk mewujudkan ide
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {['Frontend', 'Backend', 'Tools'].map((category, catIdx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.2 }}
              className={`glass-card p-8 rounded-2xl ${category === 'Frontend' ? 'md:col-span-2' : ''}`}
            >
              <h3 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-3 inline-block">
                {category}
              </h3>
              
              <div className={`grid gap-6 ${category === 'Frontend' ? 'md:grid-cols-2' : 'grid-cols-1'}`}>
                {skills.filter(s => s.category === category).map((skill, idx) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-primary transition-colors">{skill.name}</span>
                      <span className="text-xs font-mono text-gray-500 group-hover:text-cyan-400 transition-colors">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full relative"
                      >
                        <div className="absolute top-0 right-0 bottom-0 w-2 bg-white/30 rounded-full animate-pulse"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
