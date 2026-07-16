import React from 'react';
import { Utensils, GlassWater, CupSoda, Beer, IceCream, Beef, Wheat, Salad, Apple, Citrus, Leaf, Snowflake, Zap, Droplet, Sparkles } from 'lucide-react';

const comidas = [
    { name: "Salchipapas", icon: <Beef className="w-4 h-4" /> },
    { name: "Choclo con queso", icon: <Wheat className="w-4 h-4" /> },
    { name: "Ensalada de frutas", icon: <Salad className="w-4 h-4" /> },
    { name: "Porción de fruta", icon: <Apple className="w-4 h-4" /> },
];

const bebidasLista = [
    { name: "Limonada Imperial", icon: <Citrus className="w-4 h-4" /> },
    { name: "Limonada Natural", icon: <Leaf className="w-4 h-4" /> },
    { name: "Agua con gas", icon: <CupSoda className="w-4 h-4" /> },
    { name: "Agua sin gas", icon: <Droplet className="w-4 h-4" /> },
    { name: "Cerveza", icon: <Beer className="w-4 h-4" /> },
    { name: "Nevado", icon: <IceCream className="w-4 h-4" /> },
    { name: "Té helado", icon: <Snowflake className="w-4 h-4" /> },
    { name: "Bebidas energizantes", icon: <Zap className="w-4 h-4" /> },
    { name: "Gaseosas", icon: <Sparkles className="w-4 h-4" /> },
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
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] min-w-[min(300px,100%)]">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                            <div className="p-3 bg-brand-light/30 rounded-xl text-brand">
                                <Utensils className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl text-brand-dark">Comidas</h3>
                        </div>
                        <ul className="space-y-3">
                            {comidas.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-600 hover:text-brand transition-colors cursor-default">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-light/30 text-brand flex-shrink-0">
                                        {item.icon}
                                    </span>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Bebidas */}
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] min-w-[min(300px,100%)]">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                            <div className="p-3 bg-brand-light/30 rounded-xl text-brand">
                                <GlassWater className="w-6 h-6" />
                            </div>
                            <h3 className="font-bold text-xl text-brand-dark">Bebidas</h3>
                        </div>

                        <ul className="space-y-3">
                            {bebidasLista.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-gray-600 hover:text-brand transition-colors cursor-default">
                                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-brand-light/30 text-brand flex-shrink-0">
                                        {item.icon}
                                    </span>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
