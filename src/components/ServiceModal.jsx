import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;

    const hasCarousel = service.images && service.images.length > 1;
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % service.images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + service.images.length) % service.images.length);
    };

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
                    className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl relative"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>

                    <div className="relative h-64 sm:h-80 bg-gray-100">
                        {hasCarousel ? (
                            <>
                                <img
                                    src={service.images[currentSlide]}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full">
                                    <ChevronLeft size={24} />
                                </button>
                                <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full">
                                    <ChevronRight size={24} />
                                </button>
                            </>
                        ) : (
                            <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                        )}
                    </div>

                    <div className="p-8 text-center">
                        <h3 className="text-2xl font-display font-bold text-brand-dark mb-4">{service.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: service.description }} />
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ServiceModal;
