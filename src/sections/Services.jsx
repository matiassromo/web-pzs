import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import ServiceModal from '../components/ServiceModal';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section id="servicios" className="py-20 bg-slate-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold text-brand-dark inline-block relative after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-light after:mx-auto after:mt-2 after:rounded-full">
                        Nuestros Servicios
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        Disfruta de todas las comodidades que tenemos preparadas para ti y tu familia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <motion.div
                            key={service.id}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedService(service)}
                            className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group border border-slate-100"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-brand transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 line-clamp-3 mb-3 text-sm">
                                    {service.shortDesc}
                                </p>
                                {service.highlight && (
                                    <span className="inline-block bg-yellow-50 text-yellow-700 text-xs font-semibold px-2 py-1 rounded-md border border-yellow-100">
                                        {service.highlight}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedService && (
                <ServiceModal
                    service={selectedService}
                    onClose={() => setSelectedService(null)}
                />
            )}
        </section>
    );
};

export default Services;
