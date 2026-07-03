import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TopographicBackground from './TopographicBackground';
import ScrambleText from './ScrambleText';

const HireMeSection = () => {
    return (
        <section className="relative w-full min-h-screen py-24 md:py-32 px-4 sm:px-6 border-t border-white/5 bg-black z-10 flex flex-col items-center justify-center overflow-hidden">
            <TopographicBackground />

            <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center justify-center gap-12 md:gap-16 text-center pointer-events-auto">
                <div className="flex flex-col gap-4 md:gap-6 items-center justify-center w-full">
                    <span className="text-[10px] md:text-sm opacity-40 font-mono tracking-[0.4em] md:tracking-[0.5em] uppercase text-white">
                        <ScrambleText text="OPEN TO NEW OPPORTUNITIES" />
                    </span>
                    <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] font-heading font-black text-white uppercase tracking-tighter text-center leading-none break-words">
                        <ScrambleText text="Hire Me" speed={0.4} delay={0.2} />
                    </h2>
                    <p className="text-sm sm:text-base md:text-2xl font-mono text-white/80 max-w-3xl mt-4 md:mt-6 leading-relaxed text-center mx-auto italic px-2">
                        <ScrambleText text="Available for job opportunities and freelancing projects. Let's build intelligent systems and premium web experiences together." speed={0.2} delay={0.6} />
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center max-w-2xl">
                    <motion.a
                        href="mailto:sowmisowmiyan58@gmail.com"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 px-6 md:px-10 py-4 md:py-5 border border-white/10 bg-white/5 hover:bg-white hover:text-black hover:border-white transition-all font-heading font-bold uppercase tracking-widest text-xs md:text-base text-center flex items-center justify-center gap-3 md:gap-4 group backdrop-blur-sm"
                    >
                        <span>Email Direct</span>
                        <div className="w-4 h-px bg-current group-hover:w-8 transition-all" />
                    </motion.a>

                    <motion.a
                        href="https://wa.me/919042561295"
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 px-6 md:px-10 py-4 md:py-5 border border-red-600 bg-red-600/10 hover:bg-red-600 hover:text-white text-red-500 transition-all font-heading font-bold uppercase tracking-widest text-xs md:text-base text-center flex items-center justify-center gap-3 md:gap-4 group backdrop-blur-sm"
                    >
                        <span className="group-hover:text-white transition-colors">WhatsApp Link</span>
                        <div className="w-4 h-px bg-current group-hover:w-8 transition-all" />
                    </motion.a>
                </div>

                <Link
                    to="/contact"
                    className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-white/50 hover:text-red-500 transition-colors border-b border-white/10 hover:border-red-500 pb-1"
                >
                    or use the contact form →
                </Link>
            </div>
        </section>
    );
};

export default HireMeSection;
