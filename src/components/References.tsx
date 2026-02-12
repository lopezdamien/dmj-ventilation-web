"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function References() {
    const categories = [
        {
            title: "Retail & Markets",
            clients: ["Manor", "H&M Suisse", "Coop", "Migros"]
        },
        {
            title: "Régies & Collectivités",
            clients: ["Régie Naef", "Ville de Genève", "Hospice Général", "Régie Rosset"]
        },
        {
            title: "Hôtellerie & Restauration",
            clients: ["Hôtel Beau-Rivage", "Four Seasons", "Groupe Eldora", "Starbucks"]
        }
    ];

    const testimonials = [
        {
            quote: "Une expertise technique rare. Ils ont su gérer notre installation complexe sans interrompre l'activité de l'hôtel.",
            author: "M. Dubois",
            role: "Directeur Technique",
            company: "Hôtel 5* Genève",
        },
        {
            quote: "Réactivité et précision. DMJ est notre partenaire de confiance pour toutes nos rénovations de ventilation.",
            author: "S. Martin",
            role: "Architecte Senior",
            company: "Bureau d'Études",
        },
        {
            quote: "Un travail soigné et des délais respectés. DMJ a parfaitement nettoyé notre réseau industriel.",
            author: "L. Weber",
            role: "Responsable Maintenance",
            company: "Industrie Pharma",
        }
    ];

    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section id="references" className="py-32 bg-surface/30 text-secondary border-t border-gray-100">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-24">
                    <span className="text-secondary/50 font-mono tracking-widest uppercase mb-4 block text-xs">
            /// Confiance
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tight text-primary uppercase">
                        ILS NOUS FONT CONFIANCE
                    </h2>
                </div>

                {/* Categories Grid - Minimalist */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
                    {categories.map((cat, i) => (
                        <div key={i} className="space-y-8">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-200 pb-4">{cat.title}</h3>
                            <div className="grid grid-cols-1 gap-6">
                                {cat.clients.map((client, j) => (
                                    <div key={j} className="flex items-center group">
                                        <span className="w-2 h-2 bg-gray-200 rounded-full mr-4 group-hover:bg-primary transition-colors"></span>
                                        <span className="font-bold text-lg text-gray-400 group-hover:text-primary transition-colors">{client}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonials Slider - Clean */}
                <div className="max-w-4xl mx-auto relative pt-12 border-t border-gray-200">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface/30 px-4">
                        <Star fill="currentColor" size={20} className="text-primary" />
                    </div>

                    <div className="relative overflow-hidden min-h-[180px] flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                                className="text-center"
                            >
                                <p className="text-xl md:text-2xl text-primary mb-8 font-medium leading-relaxed max-w-2xl mx-auto">
                                    "{testimonials[currentTestimonial].quote}"
                                </p>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="font-bold text-secondary uppercase tracking-widest text-xs">{testimonials[currentTestimonial].author}</div>
                                    <div className="text-[10px] text-gray-400 font-mono uppercase tracking-widest">{testimonials[currentTestimonial].role} — {testimonials[currentTestimonial].company}</div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Controls - Subtle */}
                    <div className="flex justify-center gap-3 mt-12">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentTestimonial(i)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentTestimonial === i ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
