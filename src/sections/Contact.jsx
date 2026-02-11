import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, ExternalLink } from 'lucide-react';

import imgVideo from '../assets/videovigilancia.jpg'; // Using as a background maybe? unused for now.

const Contact = () => {
    return (
        <section id="contacto" className="py-20 bg-white">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold text-brand-dark inline-block relative after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-light after:mx-auto after:mt-2 after:rounded-full">
                        Contacto
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        Estamos listos para recibirte. ¡Visítanos!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-2xl overflow-hidden shadow-2xl h-[400px] relative border-4 border-white ring-1 ring-gray-100"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.0871284482146!2d-78.45197478956736!3d-0.004791799995135889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d58823d468800f%3A0xf9d77d74486d0179!2sPiscina%20Zero%20Stress%20(Mitad%20del%20Mundo)!5e1!3m2!1ses-419!2sec!4v1754256824853!5m2!1ses-419!2sec"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Mapa de Ubicación"
                        ></iframe>
                    </motion.div>

                    {/* Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-8"
                    >
                        <div className="bg-brand-light/30 p-8 rounded-2xl border border-brand-light">
                            <h3 className="text-2xl font-bold text-brand-dark mb-4 flex items-center gap-2">
                                <MapPin className="text-brand" /> Ubicación
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                Nos encontramos en San Antonio de Pichincha, cerca de la Mitad del Mundo.
                                Un lugar estratégico y fácil de llegar.
                            </p>
                            <a
                                href="https://maps.app.goo.gl/j4BzytW4tB6A1ZT19"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-4 text-brand font-bold hover:underline"
                            >
                                Ver en Google Maps <ExternalLink size={16} />
                            </a>
                        </div>

                        <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                            <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                                <Phone className="text-green-600" /> Reservas e Información
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                ¿Tienes dudas o quieres reservar para un evento? Escríbenos directamente a WhatsApp.
                            </p>
                            <a
                                href="https://wa.me/593992509868"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6 invert" />
                                Chatear en WhatsApp
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
