"use client";

import { motion } from "framer-motion";
import { Wind } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] md:h-screen flex items-center bg-primary text-white overflow-hidden pt-24 pb-12 md:pt-20 md:pb-0">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.jpg"
                    alt="Ventilation System"
                    fill
                    className="object-cover opacity-20 mix-blend-overlay"
                    priority
                />
                {/* Force explicit green gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E5B3A] via-[#1E5B3A]/95 to-[#1E5B3A]/80" />
            </div>

            <div className="container mx-auto px-6 md:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center text-center md:text-left">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 md:space-y-12"
                >
                    <div className="inline-block border-l-2 border-surface/50 pl-6 md:mx-0 mx-auto">
                        <span className="text-surface font-mono tracking-widest uppercase text-xs md:text-sm block mb-2 opacity-90">
                            Ingénierie Aéraulique Suisse
                        </span>
                        <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-tight">
                            SWISS<br />
                            AIR QUALITY.
                        </h1>
                    </div>

                    <p className="text-lg md:text-xl text-white/90 max-w-lg font-light leading-relaxed mx-auto md:mx-0">
                        Conception, installation et optimisation de systèmes de ventilation pour les régies, industries et particuliers.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 bg-surface text-primary font-bold uppercase tracking-widest hover:bg-white transition-all text-center text-sm"
                        >
                            Étude de projet
                        </a>
                        <a
                            href="#services"
                            className="w-full sm:w-auto px-8 py-4 border border-surface text-surface font-bold uppercase tracking-widest hover:bg-surface hover:text-primary transition-all text-center text-sm"
                        >
                            Nos solutions
                        </a>
                    </div>
                </motion.div>

                {/* Technical Illustration / Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative w-full aspect-square max-w-lg mx-auto">
                        {/* Abstract Air Flow Visualization - Subtler */}
                        <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_60s_linear_infinite]"></div>
                        <div className="absolute inset-8 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                            <div className="w-64 h-64 bg-secondary/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/5">
                                <div className="text-center">
                                    <Wind size={48} className="text-surface mx-auto mb-4 opacity-60" />
                                    <span className="block text-xl font-bold tracking-tighter text-white/90">PREMIUM<br />FLOW</span>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badges - More Discrete */}
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute top-4 right-12 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-sm"
                        >
                            <span className="text-[10px] font-bold uppercase text-surface tracking-wide">Performance</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-12 left-4 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-sm"
                        >
                            <span className="text-[10px] font-bold uppercase text-surface tracking-wide">Durabilité</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
