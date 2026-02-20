import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, GlassWater } from 'lucide-react';

const menuCategories = [
    {
        id: 'comidas',
        title: "Comidas",
        icon: <Utensils className="w-6 h-6" />,
        items: [
            "Salchipapas",
            "Choclo con queso",
            "Ensalada de frutas",
            "Porción de fruta",
        ]
    },
    {
        id: 'bebidas',
        title: "Bebidas",
        icon: <GlassWater className="w-6 h-6" />,
        items: [
            "Limonada Imperial",
            "Limonada Natural",
            "Té helado",
            "Bebidas energizantes",
            "Agua con gas",
            "Agua sin gas",
            "Gaseosas",
            "Cerveza",
            "Nevado",
        ]
    },
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
                    {menuCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] min-w-[300px]"
                        >
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                                <div className="p-3 bg-brand-light/30 rounded-xl text-brand">
                                    {category.icon}
                                </div>
                                <h3 className="font-bold text-xl text-brand-dark">{category.title}</h3>
                            </div>

                            <ul className="space-y-3">
                                {category.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-600 hover:text-brand transition-colors cursor-default">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand/40"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
