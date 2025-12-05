import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Luggage } from 'lucide-react';
import Button from '../components/Button';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Funcionalidades', href: '#features' },
        { name: 'Cómo funciona', href: '#how-it-works' },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="bg-gradient-to-tr from-brand-500 to-indigo-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Luggage className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white">Pack<span className="text-brand-400">Smart</span>.ai</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="primary" className="py-2 px-4 text-sm" onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}>
                        Únete a la lista
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950 border-b border-slate-800 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-slate-300 hover:text-brand-400"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <Button className="w-full" onClick={() => {
                                setMobileMenuOpen(false);
                                document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' });
                            }}>
                                Únete a la lista
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
