import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, GlassWater } from 'lucide-react';

const comidas = [
    "Salchipapas",
    "Choclo con queso",
    "Ensalada de frutas",
    "Porción de fruta",
];

const bebidasDestacadas = [
    {
        name: "Agua con gas",
        subtitle: "Guitig",
        image: "https://www.eureka.com.ec/clasica/3868-large_default/agua-con-gas-guitig-caja-12-x-500-ml.jpg",
    },
    {
        name: "Cerveza",
        subtitle: "Pilsener",
        image: "https://www.cervecerianacional.ec/sites/g/files/seuoyk1251/files/2023-11/pilsener_330.png",
    },
    {
        name: "Nevado",
        subtitle: "Chocolate con café",
        image: "https://www.dollarstore.com.ec/wp-content/uploads/2026/03/7861223838695-1.png",
    },
];

const bebidasLista = [
    "Limonada Imperial",
    "Limonada Natural",
    "Té helado",
    "Bebidas energizantes",
    "Agua sin gas",
    "Gaseosas",
];

const MenuSection = () => {
    return (
        <section id="menu" className="py-20 bg-brand-light/30">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold text-brand-dark inline-block relative after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-light after:mx-auto after:mt-2 after:rounded-full">
                        Nuestro Menú
                    </h2>
                    <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                        Variedad de opciones para todos los gustos.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {/* Comidas */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] min-w-[300px]"
                    >
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                            <div className="p-3 bg-brand-light/30 rounded-xl text-brand">
                                <Utensils className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl text-brand-dark">Comidas</h3>
                        </div>
                        <ul className="space-y-3">
                            {comidas.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-600 hover:text-brand transition-colors cursor-default">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand/40 flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Bebidas */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] min-w-[300px]"
                    >
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                            <div className="p-3 bg-brand-light/30 rounded-xl text-brand">
                                <GlassWater className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl text-brand-dark">Bebidas</h3>
                        </div>

                        {/* Destacados con imagen */}
                        <div className="grid grid-cols-3 gap-3 mb-5">
                            {bebidasDestacadas.map((item) => (
                                <div key={item.name} className="flex flex-col items-center gap-1 text-center">
                                    <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-contain p-2"
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                    </div>
                                    <span className="text-xs font-bold text-brand-dark leading-tight">{item.name}</span>
                                    <span className="text-xs text-gray-400 leading-tight">{item.subtitle}</span>
                                </div>
                            ))}
                        </div>

                        {/* Resto como lista */}
                        <ul className="space-y-2 border-t border-gray-100 pt-4">
                            {bebidasLista.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-gray-600 hover:text-brand transition-colors cursor-default text-sm">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand/40 flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
