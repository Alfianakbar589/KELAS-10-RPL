import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Terminal, Hexagon } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10 blur-3xl"></div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          
          {/* Image Side */}
          <motion.div variants={itemVariants} className="w-full lg:w-5/12">
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden glass-card border border-white/10">
                {/* Fallback pattern if no image */}
                <div className="w-full h-full bg-slate-900 flex items-center justify-center p-8 relative">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                  
                  <div className="flex flex-col items-center gap-6 group-hover:scale-110 transition-transform duration-500 relative z-10">
                    <div className="relative flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-cyan-400/20 border border-primary/30 group-hover:border-cyan-400/80 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300">
                      <Hexagon className="w-14 h-14 text-primary group-hover:text-cyan-300 transition-colors" strokeWidth={2.5} />
                    </div>
                    <span className="text-4xl font-black tracking-[0.2em] text-white">
                      FAN<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">TECH</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl shadow-2xl animate-bounce" style={{ animationDuration: '3s' }}>
                <p className="text-3xl font-bold neon-text">X</p>
                <p className="text-xs text-gray-400 font-medium">Kelas RPL</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div variants={itemVariants} className="w-full lg:w-7/12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-xs font-medium text-cyan-400 mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Mengenal saya lebih jauh</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Siapa itu <span className="text-glow">Alfian?</span>
            </h2>
            
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                Saya adalah siswa kelas X jurusan Teknik Perangkat Lunak di <span className="text-white font-medium">SMKN 2 Buduran</span> yang memiliki minat besar di dunia teknologi. Ketertarikan saya pada pemrograman berawal dari rasa penasaran tentang bagaimana website dan aplikasi bisa berjalan, hingga akhirnya berkembang menjadi keinginan serius untuk belajar coding dan membuat sistem sendiri.
              </p>
              <p>
                Perjalanan pendidikan saya dimulai dari <span className="text-white font-medium">TK Menara Ilmu</span>, kemudian <span className="text-white font-medium">SDN Banjarkemantren 2</span> dan <span className="text-white font-medium">SMPN 1 Buduran</span>. Sejak SD dan SMP, saya sudah memiliki cita-cita menjadi ahli IT. Saat ini saya melanjutkan pendidikan di SMKN 2 Buduran untuk lebih mendalami bidang tersebut dan terus mengembangkan kemampuan saya.
              </p>
              <p>
                Selain belajar IT, saya juga memiliki hobi bermain <span className="text-white font-medium">sepak bola</span>. Fun fact tentang saya, saya suka mencoret-coret di kertas saat sedang gabut. Dari kebiasaan kecil itu, kadang muncul ide-ide baru yang bisa saya kembangkan.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="glass p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                <Code className="text-primary w-8 h-8 mb-3" />
                <h3 className="text-xl font-semibold text-white mb-1">Frontend</h3>
                <p className="text-sm text-gray-500">React, Tailwind, UI/UX</p>
              </div>
              <div className="glass p-5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                <Terminal className="text-cyan-400 w-8 h-8 mb-3" />
                <h3 className="text-xl font-semibold text-white mb-1">Backend</h3>
                <p className="text-sm text-gray-500">Mempelajari dasar (PHP, SQL)</p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
