import React from 'react';
import { Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white py-12 mt-auto">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Brand */}
                    <div>
                        <h3 className="font-display font-bold text-2xl mb-4">Piscina Zero Stress</h3>
                        <p className="text-gray-400 max-w-xs mx-auto md:mx-0">
                            Tu escape perfecto en la Mitad del Mundo. Relájate, comparte y disfruta.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-cyan-400">Contacto</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://wa.me/593992509868" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center md:justify-start hover:text-cyan-300 transition-colors">
                                    <Phone size={18} /> <span>099 250 9868</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://maps.app.goo.gl/j4BzytW4tB6A1ZT19" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 justify-center md:justify-start hover:text-cyan-300 transition-colors">
                                    <MapPin size={18} /> <span>Ver en Google Maps</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Credits */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-cyan-400">Ubicación</h4>
                        <p className="text-gray-400">
                            San Antonio de Pichincha,<br />
                            Mitad del Mundo, Ecuador.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
                    <p>&copy; {currentYear} Piscina Zero Stress. Todos los derechos reservados.</p>
                    <p className="mt-2">Desarrollado por Matías Romo.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
