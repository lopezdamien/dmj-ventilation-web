"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, ArrowRight } from "lucide-react";

export default function Contact() {
    return (
        <footer id="contact">
            {/* ZONE A: CTA BAND */}
            <section className="bg-primary py-16 md:py-20 text-white relative overflow-hidden">
                {/* Subtle pattern or gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-[#266e48] to-primary opacity-50"></div>

                <div className="container mx-auto px-6 md:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2">
                            Un projet ? Parlons-en.
                        </h2>
                        <p className="text-surface/90 font-medium text-lg">
                            Réponse sous 24h – Audit et étude technique personnalisée.
                        </p>
                    </div>
                    <div>
                        <a href="mailto:info@dmj-ventilation.ch" className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-surface transition-colors rounded-sm shadow-lg">
                            Demander un devis
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* ZONE B: STRUCTURED CONTACT BLOCK */}
            <section className="bg-surface py-20 md:py-28 text-secondary relative">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                        {/* Left Column: Info */}
                        <div className="lg:w-2/5 space-y-10">
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2">
                                    <span className="w-8 h-px bg-primary"></span>
                                    Nos Coordonnées
                                </h3>
                                <h4 className="text-3xl md:text-4xl font-black text-primary tracking-tight mb-6">
                                    DMJ VENTILATION
                                </h4>
                                <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-8">
                                    Notre bureau d’étude vous accompagne de la conception à la maintenance de vos installations aérauliques.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-sm bg-white border border-gray-100 flex items-center justify-center text-primary shadow-sm shrink-0">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">Siège Social</p>
                                        <p className="font-semibold text-primary">Chemin des Semales 1,<br />1290 Versoix</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-sm bg-white border border-gray-100 flex items-center justify-center text-primary shadow-sm shrink-0">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">Téléphone</p>
                                        <a href="tel:+41791234567" className="font-semibold text-primary hover:text-secondary transition-colors">+41 79 123 45 67</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-sm bg-white border border-gray-100 flex items-center justify-center text-primary shadow-sm shrink-0">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wide text-gray-400 mb-1">Email</p>
                                        <a href="mailto:info@dmj-ventilation.ch" className="font-semibold text-primary hover:text-secondary transition-colors">info@dmj-ventilation.ch</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Form */}
                        <div className="lg:w-3/5">
                            <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-primary mb-8 tracking-tight">Formulaire de contact</h3>
                                <form className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-1">
                                            <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Nom Complet</label>
                                            <input type="text" id="name" className="w-full h-12 px-4 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white transition-colors rounded-sm text-sm font-medium outline-none" placeholder="Votre nom" />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="company" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Entreprise</label>
                                            <input type="text" id="company" className="w-full h-12 px-4 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white transition-colors rounded-sm text-sm font-medium outline-none" placeholder="Votre société" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <div className="space-y-1">
                                            <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Email</label>
                                            <input type="email" id="email" className="w-full h-12 px-4 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white transition-colors rounded-sm text-sm font-medium outline-none" placeholder="votre@email.com" />
                                        </div>
                                        <div className="space-y-1">
                                            <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Téléphone</label>
                                            <input type="tel" id="phone" className="w-full h-12 px-4 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white transition-colors rounded-sm text-sm font-medium outline-none" placeholder="+41 79..." />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Message</label>
                                        <textarea id="message" rows={4} className="w-full p-4 bg-gray-50 border border-gray-200 focus:border-primary focus:bg-white transition-colors rounded-sm text-sm font-medium outline-none resize-none" placeholder="Détails de votre demande..."></textarea>
                                    </div>

                                    <div className="pt-4">
                                        <button type="submit" className="w-full md:w-[80%] bg-primary text-white h-12 font-bold uppercase tracking-widest text-xs hover:bg-secondary transition-all rounded-sm shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                                            <span>Envoyer le message</span>
                                            <Send size={14} />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ZONE C: FOOTER BOTTOM */}
                <div className="pt-16 mt-16 container mx-auto px-6 md:px-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-mono gap-4">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-primary uppercase tracking-wider">DMJ.Ventilation</span>
                            <span className="text-gray-300">|</span>
                            <span>© {new Date().getFullYear()} Tous droits réservés.</span>
                        </div>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-primary transition-colors uppercase font-bold tracking-wider">Mentions Légales</a>
                            <a href="#" className="hover:text-primary transition-colors uppercase font-bold tracking-wider">Confidentialité</a>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
