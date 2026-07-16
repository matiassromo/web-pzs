import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Bienvenidos', href: '#bienvenidos' },
        { name: 'Servicios', href: '#servicios' },
        { name: 'Menú', href: '#menu' },
        { name: 'Horarios', href: '#horarios' },
        { name: 'Contacto', href: '#contacto' },
    ];

    const NAV_OFFSET = 80;

    const handleNavClick = (e, href) => {
        // Let modified/middle clicks behave natively (open in new tab, etc.)
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;

        e.preventDefault();
        setIsOpen(false);

        const target = document.querySelector(href);
        if (!target) return;

        const top = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'}`}>
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    {/* Placeholder for Logo if image is not available, or use text */}
                    <div className="text-white font-display font-bold text-lg sm:text-xl md:text-2xl tracking-tight group-hover:scale-105 transition-transform">
                        PISCINA <span className="text-cyan-300">ZERO STRESS</span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-white font-medium hover:text-cyan-300 transition-colors text-sm uppercase tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-brand-dark/95 backdrop-blur-xl border-t border-white/10"
                    >
                        <div className="flex flex-col p-4 gap-4 items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="touch-manipulation text-white text-lg font-medium py-2 hover:text-cyan-300 transition-colors w-full text-center"
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
