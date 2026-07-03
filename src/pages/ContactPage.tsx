import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Youtube } from 'lucide-react';
import TechNav from '@/components/TechNav';
import Footer from '@/components/Footer';
import CyberBackground from '@/components/CyberBackground';
import TopographicBackground from '@/components/TopographicBackground';
import PageHero from '@/components/PageHero';
import ScrambleText from '@/components/ScrambleText';

const ContactPage = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const body = `From: ${form.name} (${form.email})\n\n${form.message}`;
        window.location.href = `mailto:sowmisowmiyan58@gmail.com?subject=${encodeURIComponent(form.subject || 'Contact from portfolio')}&body=${encodeURIComponent(body)}`;
        setSent(true);
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-red-600 overflow-x-hidden">
            <CyberBackground />
            <TechNav />

            <main className="relative z-10">
                <PageHero
                    sectionNumber="05 // COMMUNICATION LAYER"
                    title="ESTABLISH CONTACT"
                    subtitle="Open a secure channel — collaboration, freelance, or full-time opportunities."
                />

                {/* Hero band matching HireMe */}
                <section className="relative w-full py-24 md:py-32 px-6 border-t border-white/5 bg-black flex flex-col items-center justify-center overflow-hidden">
                    <TopographicBackground />

                    <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center gap-16 text-center">
                        <div className="flex flex-col gap-6 items-center w-full">
                            <span className="text-[10px] md:text-xs opacity-40 font-mono tracking-[0.5em] uppercase text-white">
                                <ScrambleText text="LET'S BUILD TOGETHER" />
                            </span>
                            <h2 className="text-5xl md:text-8xl lg:text-[7rem] font-heading font-black text-white uppercase tracking-tighter leading-none">
                                Say <span className="text-red-600">Hello</span>
                            </h2>
                            <p className="text-base md:text-xl font-mono text-white/70 max-w-2xl leading-relaxed italic">
                                Available for freelance projects, internships, and full-time roles in AI &amp; full-stack engineering.
                            </p>
                        </div>

                        {/* Direct action buttons — same style as HireMe */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full justify-center">
                            <motion.a
                                href="mailto:sowmisowmiyan58@gmail.com"
                                whileHover={{ y: -2 }}
                                className="px-8 md:px-10 py-4 md:py-5 border border-white/10 bg-white/5 hover:bg-white hover:text-black hover:border-white transition-all font-heading font-bold uppercase tracking-widest text-xs md:text-base text-center flex items-center justify-center gap-4 group backdrop-blur-sm"
                            >
                                <Mail size={16} />
                                <span>Email Direct</span>
                                <div className="w-4 h-px bg-current group-hover:w-8 transition-all" />
                            </motion.a>

                            <motion.a
                                href="https://wa.me/919042561295"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ y: -2 }}
                                className="px-8 md:px-10 py-4 md:py-5 border border-red-600 bg-red-600/10 hover:bg-red-600 hover:text-white text-red-500 transition-all font-heading font-bold uppercase tracking-widest text-xs md:text-base text-center flex items-center justify-center gap-4 group backdrop-blur-sm"
                            >
                                <Phone size={16} />
                                <span className="group-hover:text-white transition-colors">WhatsApp Link</span>
                                <div className="w-4 h-px bg-current group-hover:w-8 transition-all" />
                            </motion.a>
                        </div>
                    </div>
                </section>

                {/* Form + info grid */}
                <section className="relative px-6 py-20 md:py-32 border-t border-white/5">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
                        {/* Form */}
                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-3 flex flex-col gap-5 border border-white/10 bg-black/40 backdrop-blur-md p-6 md:p-10"
                        >
                            <div className="flex flex-col gap-1 mb-2">
                                <span className="text-[10px] font-mono text-red-500 tracking-[0.4em] uppercase">Transmission_Form</span>
                                <h3 className="text-2xl md:text-3xl font-heading font-black uppercase tracking-tight">Send a Signal</h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <input
                                    type="text" required placeholder="YOUR NAME"
                                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                                    className="px-4 py-4 bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-red-600 transition-colors text-xs font-mono uppercase tracking-widest"
                                />
                                <input
                                    type="email" required placeholder="YOUR EMAIL"
                                    value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                                    className="px-4 py-4 bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-red-600 transition-colors text-xs font-mono uppercase tracking-widest"
                                />
                            </div>
                            <input
                                type="text" placeholder="SUBJECT"
                                value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                                className="px-4 py-4 bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-red-600 transition-colors text-xs font-mono uppercase tracking-widest"
                            />
                            <textarea
                                required placeholder="MESSAGE" rows={6}
                                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                                className="px-4 py-4 bg-black/40 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-red-600 transition-colors text-xs font-mono uppercase tracking-widest resize-none"
                            />
                            <button
                                type="submit"
                                className="mt-2 py-5 bg-red-600 text-white font-heading font-black text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all"
                            >
                                {sent ? "TRANSMISSION_SUCCESSFUL // CHANNEL_OPEN" : "INITIATE TRANSMISSION →"}
                            </button>
                        </motion.form>

                        {/* Info sidebar */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.15 }}
                            className="lg:col-span-2 flex flex-col gap-8"
                        >
                            <div className="border border-white/10 bg-black/40 backdrop-blur-md p-6 md:p-8 flex flex-col gap-6">
                                <span className="text-[10px] font-mono text-red-500 tracking-[0.4em] uppercase">Direct_Channels</span>

                                <a href="mailto:sowmisowmiyan58@gmail.com" className="flex items-start gap-4 group">
                                    <Mail size={18} className="text-red-500 mt-1 shrink-0" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-mono uppercase opacity-40 tracking-widest">Email</span>
                                        <span className="text-sm font-mono group-hover:text-red-500 transition-colors break-all">sowmisowmiyan58@gmail.com</span>
                                    </div>
                                </a>

                                <a href="https://wa.me/919042561295" target="_blank" rel="noreferrer" className="flex items-start gap-4 group">
                                    <Phone size={18} className="text-red-500 mt-1 shrink-0" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-mono uppercase opacity-40 tracking-widest">WhatsApp</span>
                                        <span className="text-sm font-mono group-hover:text-red-500 transition-colors">+91 90425 61295</span>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4">
                                    <MapPin size={18} className="text-red-500 mt-1 shrink-0" />
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-mono uppercase opacity-40 tracking-widest">Location</span>
                                        <span className="text-sm font-mono leading-relaxed">Kandampalayam, Tiruchengode<br/>Namakkal, Tamil Nadu — 637203</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border border-white/10 bg-black/40 backdrop-blur-md p-6 md:p-8 flex flex-col gap-4">
                                <span className="text-[10px] font-mono text-red-500 tracking-[0.4em] uppercase">Social_Nodes</span>
                                <div className="flex flex-wrap gap-3">
                                    <a href="https://linkedin.com/in/sowmiyan-s" target="_blank" rel="noreferrer" className="p-3 border border-white/10 hover:border-red-500 hover:text-red-500 transition-colors"><Linkedin size={18} /></a>
                                    <a href="https://github.com/sowmiyan-s" target="_blank" rel="noreferrer" className="p-3 border border-white/10 hover:border-red-500 hover:text-red-500 transition-colors"><Github size={18} /></a>
                                    <a href="https://youtube.com/@bound-by-code" target="_blank" rel="noreferrer" className="p-3 border border-white/10 hover:border-red-500 hover:text-red-500 transition-colors"><Youtube size={18} /></a>
                                </div>
                            </div>

                            <div className="border-l-2 border-red-600 pl-4 py-2">
                                <p className="text-xs font-mono opacity-60 leading-relaxed">
                                    Average response time: <span className="text-red-500">under 24 hours</span>. All inquiries reviewed personally.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ContactPage;
