import React from 'react';
import Section from '../components/Section';
import { Camera, CloudSun, CheckSquare } from 'lucide-react';

const features = [
    {
        icon: <Camera className="w-8 h-8 text-brand-400" />,
        title: "Foto a Análisis",
        description: "Nuestra IA ve lo que tú ves. Sube una foto de tu maleta abierta y detectaremos automáticamente cada artículo en segundos."
    },
    {
        icon: <CloudSun className="w-8 h-8 text-purple-400" />,
        title: "Contexto Inteligente",
        description: "¿Vas a Londres en noviembre? Te recordaremos el paraguas. ¿Bali en agosto? No olvides el protector solar. Recomendaciones basadas en clima y cultura."
    },
    {
        icon: <CheckSquare className="w-8 h-8 text-green-400" />,
        title: "Checklist Dinámico",
        description: "No es una lista estática. Evoluciona contigo mientras empacas, marcando lo que tienes y priorizando lo que realmente es esencial."
    }
];

const Features = () => {
    return (
        <Section id="features" className="bg-slate-900/50">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Más que una simple lista</h2>
                <p className="text-slate-400">
                    La mayoría de las apps son checklists vacíos. PackSmart es un asistente activo que entiende tu viaje.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="group p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-brand-500/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] transition-all duration-300"
                    >
                        <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-slate-400 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Features;
