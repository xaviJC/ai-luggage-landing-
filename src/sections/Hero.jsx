import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Section from '../components/Section';
import { Camera, ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
    return (
        <Section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-visible">

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px]" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-start gap-6"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-medium text-brand-300">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                        </span>
                        IA de Nueva Generación
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] text-white">
                        Tu maleta perfecta, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">
                            sin estrés ni olvidos
                        </span>
                    </h1>

                    <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                        Olvídate de las listas manuales. Simplemente toma una foto a lo que tienes, dinos tu destino, y nuestra IA te dirá qué falta (y qué sobra).
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
                        <Button onClick={() => document.getElementById('waitlist').scrollIntoView({ behavior: 'smooth' })}>
                            Únete a la Lista de Espera <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Button variant="outline" onClick={() => document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })}>
                            Ver cómo funciona
                        </Button>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-500 mt-4">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-xs">
                                    🤔
                                </div>
                            ))}
                        </div>
                        <p>+500 viajeros interesados</p>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 bg-gradient-to-b from-slate-800 to-slate-900 rounded-2xl border border-slate-700 p-2 shadow-2xl animate-float">
                        <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-slate-950 group">
                            {/* Simulated App UI */}
                            <div className="absolute inset-0 flex flex-col">
                                {/* Header UI */}
                                <div className="p-4 border-b border-white/10 flex justify-between items-center bg-slate-900/50 backdrop-blur-sm">
                                    <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center">
                                        <Camera className="w-4 h-4 text-brand-400" />
                                    </div>
                                    <div className="h-2 w-20 bg-slate-800 rounded-full" />
                                </div>

                                {/* Content UI */}
                                <div className="flex-1 p-6 flex flex-col gap-4 items-center justify-center relative">
                                    {/* Scanning Effect */}
                                    <motion.div
                                        className="absolute top-0 left-0 w-full h-1 bg-brand-400 shadow-[0_0_20px_rgba(56,189,248,0.8)] z-20"
                                        animate={{ top: ['10%', '90%', '10%'] }}
                                        transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
                                    />

                                    <div className="w-48 h-32 border-2 border-dashed border-slate-700 rounded-lg flex items-center justify-center text-slate-600 mb-4">
                                        Maleta Detectada
                                    </div>

                                    <div className="w-full space-y-3">
                                        <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-[10px] text-black font-bold">✓</div>
                                            <div className="h-2 w-24 bg-slate-700 rounded-full" />
                                        </div>
                                        <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] text-black font-bold">!</div>
                                            <div className="text-xs text-red-200">Falta: Adaptador de corriente</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative blobs behind phone */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-500/10 blur-3xl -z-10 rounded-full" />
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
