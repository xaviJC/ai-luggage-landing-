import React from 'react';
import { Luggage, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <Luggage className="w-6 h-6 text-slate-500" />
                    <span className="font-bold text-white text-lg">Pack<span className="text-slate-600">Smart</span>.ai</span>
                </div>

                <div className="flex gap-8 text-sm font-medium">
                    <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                    <a href="#" className="hover:text-white transition-colors">Términos</a>
                    <a href="#" className="hover:text-white transition-colors">Contacto</a>
                </div>

                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all">
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all">
                        <Linkedin className="w-5 h-5" />
                    </a>
                </div>
            </div>
            <div className="text-center mt-12 text-xs text-slate-600">
                &copy; {new Date().getFullYear()} PackSmart AI. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
