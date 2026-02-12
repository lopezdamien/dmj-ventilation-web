"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
    { name: "Accueil", href: "#" },
    { name: "À Propos", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Réalisations", href: "#references" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-primary text-white shadow-lg border-white/10 py-2"
                    : "bg-primary text-white border-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-xl md:text-2xl font-bold tracking-tighter uppercase">
                        DMJ<span className="text-surface">.Ventilation</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs md:text-sm font-semibold uppercase tracking-widest hover:text-surface/80 transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-surface transition-all group-hover:w-full duration-300" />
                        </Link>
                    ))}

                    <Link
                        href="#contact"
                        className="flex items-center gap-2 px-6 py-2 border border-surface text-surface font-bold uppercase tracking-wide text-xs hover:bg-surface hover:text-primary transition-all rounded-md"
                    >
                        <Phone size={16} />
                        <span>Devis Gratuit</span>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-accent hover:bg-white/10 rounded"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 bg-primary z-[60] flex flex-col"
                    >
                        <div className="p-5 flex justify-between items-center border-b border-accent/20 h-20">
                            <span className="text-2xl font-bold text-white uppercase tracking-tighter">
                                DMJ<span className="text-accent">.Ventilation</span>
                            </span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-white hover:text-accent transition-colors"
                            >
                                <X size={32} />
                            </button>
                        </div>

                        <nav className="flex-1 flex flex-col justify-center items-center gap-8 p-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-3xl font-bold text-white hover:text-accent uppercase tracking-widest transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <Link
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-8 px-8 py-4 bg-accent text-primary font-bold text-xl uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-3 w-full justify-center rounded-md"
                            >
                                <Phone size={24} />
                                Contactez-nous
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
