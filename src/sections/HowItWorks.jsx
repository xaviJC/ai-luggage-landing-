import React from 'react';
import Section from '../components/Section';

const steps = [
    {
        step: "01",
        title: "Sube una foto",
        text: "Toma una foto de tu maleta abierta o de la ropa que planeas llevar."
    },
    {
        step: "02",
        title: "Análisis Mágico",
        text: "La IA identifica los artículos y los cruza con el clima y actividades de tu destino."
    },
    {
        step: "03",
        title: "Viaja Tranquilo",
        text: "Recibe alertas de lo que falta y confirma que llevas todo lo esencial."
    }
];

const HowItWorks = () => {
    return (
        <Section id="how-it-works">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="relative order-2 md:order-1">
                    {/* Abstract visual representation of the flow */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
                        <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-purple-900/20" />
                        <div className="aspect-square bg-slate-950 p-8 flex flex-col items-center justify-center space-y-8">
                            {/* Step 1 Visual */}
                            <div className="w-full bg-slate-900 p-4 rounded-lg border border-slate-800 flex items-center gap-4 opacity-50">
                                <div className="w-12 h-12 bg-slate-800 rounded-md" />
                                <div className="space-y-2 flex-1">
                                    <div className="h-2 w-3/4 bg-slate-800 rounded" />
                                    <div className="h-2 w-1/2 bg-slate-800 rounded" />
                                </div>
                            </div>

                            {/* Connector */}
                            <div className="h-8 w-0.5 bg-gradient-to-b from-slate-800 to-brand-500" />

                            {/* Step 2 Visual (Active) */}
                            <div className="w-full bg-slate-900 p-4 rounded-lg border border-brand-500/30 shadow-[0_0_20px_rgba(14,165,233,0.15)] flex items-center gap-4 relative">
                                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-8 bg-brand-500 rounded-r-lg" />
                                <div className="w-12 h-12 bg-brand-500/10 rounded-md flex items-center justify-center text-xl">✨</div>
                                <div className="space-y-2 flex-1">
                                    <div className="h-2 w-3/4 bg-slate-700 rounded" />
                                    <div className="h-2 w-full bg-brand-500/20 rounded" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="order-1 md:order-2">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Cómo funciona</h2>
                    <div className="space-y-12">
                        {steps.map((item, idx) => (
                            <div key={idx} className="flex gap-6 group">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-slate-700 text-slate-500 flex items-center justify-center font-mono text-lg group-hover:border-brand-500 group-hover:text-brand-400 transition-colors">
                                    {item.step}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400 leading-relaxed max-w-md">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default HowItWorks;
