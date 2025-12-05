import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { Mail, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Waitlist = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <Section id="waitlist" className="relative">
            <div className="absolute inset-0 bg-brand-900/10 -z-10" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent -z-10" />

            <div className="max-w-4xl mx-auto text-center bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-16 shadow-2xl relative overflow-hidden">
                {/* Decoration */}
                <div className="absolute top-0 right-0 p-32 bg-brand-500/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Viaja de forma más inteligente.
                    </h2>
                    <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto">
                        Únete a la lista de espera y obtén acceso anticipado a PackSmart. Sé de los primeros en experimentar el asistente de equipaje del futuro.
                    </p>

                    {status === 'success' ? (
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="bg-green-500/10 border border-green-500/20 text-green-400 py-4 px-6 rounded-xl inline-flex items-center gap-3"
                        >
                            <CheckCircle className="w-6 h-6" />
                            <span className="font-bold">¡Estás en la lista! Te avisaremos pronto.</span>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative">
                            <div className="relative flex-1 group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-brand-400 transition-colors" />
                                <input
                                    type="email"
                                    placeholder="tu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 rounded-full bg-slate-950 border border-slate-700 text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                                    required
                                />
                            </div>
                            <Button type="submit" disabled={status === 'loading'} className={status === 'loading' ? 'opacity-80 cursor-not-allowed' : ''}>
                                {status === 'loading' ? 'Enviando...' : 'Unirme ahora'}
                            </Button>
                        </form>
                    )}

                    <p className="mt-6 text-sm text-slate-500">
                        *Lanzamiento beta limitado a 500 usuarios.
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Waitlist;
