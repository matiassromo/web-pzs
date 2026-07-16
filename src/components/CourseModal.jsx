import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, Smile, Sun, Brain, Users, TrendingUp, ShieldCheck, Droplets, Shield, Home } from 'lucide-react';

const benefits = [
    { icon: Heart, label: 'Salud' },
    { icon: Smile, label: 'Diversión' },
    { icon: Sun, label: 'Confianza' },
    { icon: Brain, label: 'Disciplina' },
];

const highlights = [
    { icon: Users, text: 'Para niños, jóvenes y adultos' },
    { icon: TrendingUp, text: 'Grupos por niveles: mejora tu técnica y confianza' },
    { icon: ShieldCheck, text: 'Instructores profesionales' },
];

const poolFeatures = [
    { icon: Droplets, text: 'Agua limpia y climatizada' },
    { icon: Shield, text: 'Instalaciones seguras' },
    { icon: Home, text: 'Ambiente familiar y seguro' },
];

const CourseModal = ({ onClose }) => {
    const whatsappHref = 'https://wa.me/593992509868?text=' + encodeURIComponent('Hola, quiero inscribirme en los cursos de natación.');

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-white rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>

                    {/* Header */}
                    <div className="bg-brand-dark p-8 text-center">
                        <span className="inline-block bg-yellow-400 text-brand-dark text-xs font-bold px-3 py-1 rounded-full mb-3">
                            CUPOS LIMITADOS
                        </span>
                        <h3 className="text-2xl font-display font-bold text-white mb-1">
                            Cursos de Natación
                        </h3>
                        <p className="text-brand-light font-semibold mb-3">Jueves y Viernes — 17:30 a 18:20</p>
                        <p className="text-white/80 text-sm italic">Aprende a nadar con nosotros</p>
                    </div>

                    <div className="p-8">
                        {/* Highlights */}
                        <ul className="space-y-3 mb-6">
                            {highlights.map(({ icon: Icon, text }) => (
                                <li key={text} className="flex items-center gap-3 text-gray-700">
                                    <span className="p-2 rounded-full bg-brand-light text-brand-dark flex-shrink-0">
                                        <Icon size={18} />
                                    </span>
                                    {text}
                                </li>
                            ))}
                        </ul>

                        {/* Benefits */}
                        <div className="grid grid-cols-4 gap-2 mb-6 text-center">
                            {benefits.map(({ icon: Icon, label }) => (
                                <div key={label} className="flex flex-col items-center gap-1 text-gray-500">
                                    <Icon size={22} className="text-brand" />
                                    <span className="text-xs font-medium">{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Pool features */}
                        <div className="bg-slate-50 rounded-xl p-4 mb-6">
                            <p className="text-xs font-bold text-brand-dark uppercase tracking-wide mb-3 text-center">
                                ⭐ La mejor piscina de la Mitad del Mundo
                            </p>
                            <ul className="space-y-2">
                                {poolFeatures.map(({ icon: Icon, text }) => (
                                    <li key={text} className="flex items-center gap-2 text-gray-600 text-sm">
                                        <Icon size={15} className="text-brand flex-shrink-0" />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-center text-brand-dark font-bold mb-4 text-sm">
                            ¡Aprende nadando, crece disfrutando!
                        </p>

                        {/* CTA */}
                        <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Inscribirme aquí
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default CourseModal;
