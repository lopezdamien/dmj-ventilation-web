"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Facebook, Linkedin, Instagram, Clock } from "lucide-react";

export default function Contact() {
    return (
        <footer id="contact" className="bg-primary text-white py-20 md:py-32 relative overflow-hidden">
            {/* Background Decor */}
            <div className="hidden md:block absolute top-0 right-0 w-2/3 h-full bg-secondary/30 -skew-x-12 transform translate-x-1/3"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20 items-start">

                    {/* Contact Info Side */}
                    <div className="lg:w-1/2 space-y-8">
                        <div>
                            <span className="text-surface font-mono tracking-widest uppercase mb-2 block text-xs">
                                /// Contact
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-none">
                                PARLONS<br />PROJET.
                            </h2>
                            <div className="w-12 h-px bg-surface mb-6 opacity-50"></div>

                            <div className="inline-flex items-center gap-3 text-surface font-bold uppercase tracking-wide bg-white/5 p-2 px-3 border-l border-surface text-[10px] rounded-r-sm">
                                <Clock size={14} />
                                <span>Réponse garantie sous 24h</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <h4 className="font-bold uppercase tracking-wider text-[10px] text-gray-400 flex items-center gap-2">
                                    <MapPin size={12} className="text-surface" /> Siège Social
                                </h4>
                                <p className="font-medium text-sm leading-snug pl-5 text-gray-200">Chemin des Semales 1<br />1290 Versoix, Suisse</p>
                            </div>

                            <div className="space-y-1">
                                <h4 className="font-bold uppercase tracking-wider text-[10px] text-gray-400 flex items-center gap-2">
                                    <Phone size={12} className="text-surface" /> Téléphone
                                </h4>
                                <a href="tel:+41791234567" className="font-medium text-sm hover:text-surface transition-colors pl-5 block text-gray-200">+41 79 123 45 67</a>
                            </div>

                            <div className="space-y-1">
                                <h4 className="font-bold uppercase tracking-wider text-[10px] text-gray-400 flex items-center gap-2">
                                    <Mail size={12} className="text-surface" /> Email
                                </h4>
                                <a href="mailto:info@dmj-ventilation.ch" className="font-medium text-sm hover:text-surface transition-colors pl-5 block text-gray-200">info@dmj-ventilation.ch</a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Side - Extremely Compact */}
                    <div className="lg:w-1/2 w-full bg-white text-secondary p-6 shadow-sm relative border border-gray-100 rounded-sm">
                        <form className="space-y-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-widest mb-1 text-gray-400">Nom Complet</label>
                                    <input type="text" id="name" className="w-full bg-gray-50 border border-gray-200 h-12 px-4 text-base md:text-xs focus:border-primary focus:bg-white focus:outline-none transition-all font-semibold rounded-sm" placeholder="Votre Nom" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-[10px] font-bold uppercase tracking-widest mb-1 text-gray-400">Entreprise</label>
                                    <input type="text" id="company" className="w-full bg-gray-50 border border-gray-200 h-12 px-4 text-base md:text-xs focus:border-primary focus:bg-white focus:outline-none transition-all font-semibold rounded-sm" placeholder="Votre Société" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest mb-1 text-gray-400">Email</label>
                                    <input type="email" id="email" className="w-full bg-gray-50 border border-gray-200 h-12 px-4 text-base md:text-xs focus:border-primary focus:bg-white focus:outline-none transition-all font-semibold rounded-sm" placeholder="email@exemple.com" />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-widest mb-1 text-gray-400">Téléphone</label>
                                    <input type="tel" id="phone" className="w-full bg-gray-50 border border-gray-200 h-12 px-4 text-base md:text-xs focus:border-primary focus:bg-white focus:outline-none transition-all font-semibold rounded-sm" placeholder="+41 79..." />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-widest mb-1 text-gray-400">Message</label>
                                <textarea id="message" rows={3} className="w-full bg-gray-50 border border-gray-200 p-4 text-base md:text-xs focus:border-primary focus:bg-white focus:outline-none transition-all font-semibold rounded-sm" placeholder="Décrivez votre projet..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary text-white font-bold uppercase tracking-widest py-3 text-xs relative overflow-hidden group hover:bg-secondary transition-all rounded-sm mt-2">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Envoyer
                                    <Send size={12} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 font-mono">
                    <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
                        <span className="font-bold text-white uppercase tracking-wider">DMJ<span className="text-surface">.Ventilation</span></span>
                        <span className="hidden md:inline text-white/20">|</span>
                        <span>© {new Date().getFullYear()} Tous droits réservés.</span>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-surface transition-colors uppercase font-bold tracking-wider">Mentions Légales</a>
                        <a href="#" className="hover:text-surface transition-colors uppercase font-bold tracking-wider">Confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
