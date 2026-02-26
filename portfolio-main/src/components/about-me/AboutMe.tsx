import { useContext } from "react";
import { ThemeContext } from "../../App";
import { motion } from "framer-motion";

const AboutMe = () => {
  const theme = useContext(ThemeContext);
  const isDark = theme.isDarkmode;

  return (
    <section className={`py-32 px-6 overflow-visible ${isDark ? '' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden group">
               <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black/60' : 'from-blue-900/30'} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
               <img 
                 src="/ankit.jpg" 
                 alt="Ankit Vijay" 
                 className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
               />
            </div>
            
            {/* Decorative Backdrops */}
            <div className={`absolute -top-4 -left-4 w-full h-full rounded-[2rem] -z-10 border-2 ${isDark ? 'border-cyan-500/30' : 'border-blue-200'}`}></div>
            <div className={`absolute -bottom-4 -right-4 w-full h-full rounded-[2rem] -z-20 ${isDark ? 'bg-slate-800' : 'bg-white shadow-xl'}`}></div>
            
            {/* Floating Badge (optional) */}
            <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className={`hidden md:block absolute -bottom-10 -right-8 p-6 rounded-2xl shadow-xl backdrop-blur-md border ${isDark ? 'bg-slate-900/90 border-slate-700' : 'bg-white/90 border-slate-100'}`}
            >
                <div className="flex items-center gap-3">
                    <span className="text-4xl">🚀</span>
                    <div>
                        <p className={`text-sm font-semibold ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Status</p>
                        <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Open to Work</p>
                    </div>
                </div>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="w-full lg:w-3/5"
          >
            <h2 className={`text-sm font-bold tracking-widest uppercase mb-3 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
              Who I Am
            </h2>
            <h3 className={`text-4xl md:text-5xl font-bold mb-8 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Ankit Vijay</span>
            </h3>
            
            <div className={`space-y-6 text-lg leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
              <p>
                I’m a <span className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Computer Science Engineering Student</span> and a software engineer who enjoys building technology that feels as good as it performs.
              </p>
              
              <p>
                My work lives at the intersection of <span className={`${isDark ? 'text-cyan-300' : 'text-blue-600'}`}>Machine Learning</span>, <span className={`${isDark ? 'text-purple-300' : 'text-purple-600'}`}>MERN Stack Development</span>, and Data Structures & Algorithms — where intelligent models, scalable web systems, and efficient problem-solving come together. I focus on writing clean, maintainable code and designing architectures that can grow, adapt, and perform under real-world conditions.
              </p>
              
              <p>
                I believe great engineering is not only about making things work, but about making them simple, reliable, and elegant. Whether it’s optimizing algorithms, crafting backend systems, or designing modern user experiences, I care deeply about quality at every layer of a product.
              </p>

              <p>
                I’m driven by curiosity, continuous learning, and the desire to turn complex challenges into impactful software solutions. My goal is to grow as a Software Development Engineer and contribute to products that create meaningful value at scale.
              </p>
            </div>

            {/* Signature or CTA could go here */}
             <div className="mt-10 flex gap-4">
                  {/* Decorative line or small elements */}
                  <div className={`h-1 w-20 rounded-full ${isDark ? 'bg-cyan-500' : 'bg-blue-600'}`}></div>
                  <div className={`h-1 w-5 rounded-full ${isDark ? 'bg-slate-700' : 'bg-slate-300'}`}></div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
