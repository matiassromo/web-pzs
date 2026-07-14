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
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                </svg>
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
