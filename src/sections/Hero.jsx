import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

// Images - importing directly to ensure Vite handles paths
import imgPiscina from '../assets/piscina.png';
import imgCuartos from '../assets/cuartos.jpg';
import imgArea from '../assets/area.jpg';
import imgParqueadero from '../assets/parqueadero.jpg';
import imgBaile from '../assets/baile.jpg';

const backgroundImages = [
    imgPiscina,
    imgCuartos,
    imgArea,
    imgParqueadero,
    imgBaile,
];

const Hero = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [visitas, setVisitas] = useState(null);
    const hasFetched = useRef(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const yaContado = sessionStorage.getItem('pzs-visita');
        const endpoint = yaContado
            ? 'https://countapi.mileshilliard.com/api/v1/get/piscinazerostress-ec-visitas'
            : 'https://countapi.mileshilliard.com/api/v1/hit/piscinazerostress-ec-visitas';

        fetch(endpoint)
            .then(r => r.json())
            .then(d => {
                const total = parseInt(d.value);
                if (!yaContado) sessionStorage.setItem('pzs-visita', true);
                setVisitas(total);
            })
            .catch(() => {});
    }, []);

    const badges = [
        "💧 Piscina temperada",
        "🫧 Hidromasaje",
        "🧖 Sauna & Turco",
        "🌿 Área verde"
    ];

    return (
        <section id="bienvenidos" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Slideshow */}
            <AnimatePresence mode='popLayout'>
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${backgroundImages[currentImage]})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="container-custom relative z-10 text-white w-full md:grid md:grid-cols-2">
                <div className="flex flex-col gap-6 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="font-display font-bold text-5xl md:text-7xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white drop-shadow-lg">
                            ¡Bienvenidos a <br /> Zero Stress!
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl font-light text-cyan-50 tracking-wide"
                    >
                        Tu escape perfecto en la <span className="font-semibold text-cyan-300">Mitad del Mundo</span> 🌎
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-gray-200 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed font-sans"
                    >
                        Relájate, comparte en familia y disfruta de instalaciones modernas con servicios de primera calidad.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-4"
                    >
                        <a href="https://wa.me/593992509868" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2 group">
                            <MessageCircle size={20} />
                            <span>Reserva por WhatsApp</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#servicios" className="btn-secondary flex items-center justify-center gap-2">
                            <span>Ver servicios</span>
                        </a>
                    </motion.div>

                    {/* Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="flex flex-wrap justify-center md:justify-start gap-3 mt-6"
                    >
                        {badges.map((badge, idx) => (
                            <span key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold shadow-sm">
                                {badge}
                            </span>
                        ))}
                    </motion.div>

                    {/* Contador de visitas */}
                    {visitas && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.4, duration: 0.8 }}
                            className="flex justify-center md:justify-start"
                        >
                            <span className="flex items-center gap-2 bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 px-4 py-1.5 rounded-full text-sm font-semibold text-cyan-200 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                {visitas.toLocaleString()} personas han visitado esta página
                            </span>
                        </motion.div>
                    )}

                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
