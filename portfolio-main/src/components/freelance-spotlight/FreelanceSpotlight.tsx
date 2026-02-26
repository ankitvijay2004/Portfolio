import { useContext } from "react";
import { ThemeContext } from "../../App";
import { motion } from "framer-motion";
import { 
  FreelancerIcon, 
  GithubIcon, 
  LinkedInIcon, 
  MailIcon, 
  InstagramIcon,
  // DiscordIcon,
  // ExternalLinkIcon
} from "../../assets/icons/icons";

const FreelanceSpotlight = () => {
    const theme = useContext(ThemeContext);
    const isDark = theme.isDarkmode;

    return (
        <section className="py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Background Decor */}
            <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-gradient-to-br from-slate-900 via-slate-900 to-black' : 'bg-gradient-to-br from-white via-slate-50 to-blue-50'}`}></div>
            
            {/* Glowing Orbs */}
            {isDark && (
                <>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                </>
            )}

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    
                    {/* Left: The Freelance Card */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full max-w-xl"
                    >
                        <div className={`
                            relative rounded-3xl overflow-hidden border p-1
                            ${isDark 
                                ? 'bg-slate-800/80 border-cyan-500/30 shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)]' 
                                : 'bg-white border-blue-200 shadow-2xl shadow-blue-200/50'
                            }
                        `}>
                            <div className={`
                                rounded-2xl p-8 md:p-12 text-center relative overflow-hidden
                                ${isDark 
                                    ? 'bg-gradient-to-b from-slate-900 to-black' 
                                    : 'bg-gradient-to-b from-blue-50 to-white'
                                }
                            `}>
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"></div>
                                
                                <div className={`
                                    w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center transform rotate-3 shadow-lg
                                    ${isDark ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}
                                `}>
                                    <FreelancerIcon /> 
                                    {/* Note: If FreelancerIcon is SVG structure in code, we might need a wrapper or style */}
                                </div>

                                <h3 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                    Hire Me on Freelancer
                                </h3>
                                <p className={`mb-8 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                    Top-rated Full Stack Developer & Video Editor delivering excellence.
                                </p>

                                <a 
                                    href="https://www.freelancer.in/u/Ankitvijay004"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`
                                        inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105
                                        ${isDark 
                                            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]' 
                                            : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:shadow-xl'
                                        }
                                    `}
                                >
                                    <span>Visit Profile</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Connect Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <h2 className={`text-4xl md:text-5xl font-extrabold mb-6 leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            Let's Build Something <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                                Beautiful Together
                            </span>
                        </h2>
                        
                        <p className={`text-xl mb-10 max-w-lg mx-auto lg:mx-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            Whether you need a full-stack web application, a custom Python script, or high-end video editing, I'm just a message away.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <a href="https://github.com/ankitvijay2004" target="_blank" rel="noreferrer" className={`p-4 rounded-xl transition-all border ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:scale-110 text-white' : 'bg-white border-slate-200 hover:shadow-lg hover:scale-110 text-slate-800'}`}>
                                <GithubIcon />
                            </a>
                            <a href="http://www.linkedin.com/in/ankit-kumar-vijay-276924285" target="_blank" rel="noreferrer" className={`p-4 rounded-xl transition-all border ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:scale-110 text-white' : 'bg-white border-slate-200 hover:shadow-lg hover:scale-110 text-blue-700'}`}>
                                <LinkedInIcon />
                            </a>
                            <a href="https://www.instagram.com/ankit_k_vijay/" target="_blank" rel="noreferrer" className={`p-4 rounded-xl transition-all border ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:scale-110 text-white' : 'bg-white border-slate-200 hover:shadow-lg hover:scale-110 text-pink-600'}`}>
                                <InstagramIcon />
                            </a>
                             <a href="mailto:ankitvijay100@gmail.com" className={`p-4 rounded-xl transition-all border ${isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:scale-110 text-white' : 'bg-white border-slate-200 hover:shadow-lg hover:scale-110 text-red-500'}`}>
                                <MailIcon />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FreelanceSpotlight;
