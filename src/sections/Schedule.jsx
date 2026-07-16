import React, { useState, useEffect } from 'react';
import { Clock, Calendar, CheckCircle2, XCircle, AlertCircle } from 'lucide-react';
const Schedule = () => {
    const [status, setStatus] = useState({ state: 'cerrado', label: 'Cerrado', color: 'gray' });
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const updateStatus = () => {
            const current = new Date();
            setNow(current);
            const day = current.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
            const mins = current.getHours() * 60 + current.getMinutes();

            const OPEN_DAYS = [0, 4, 5, 6]; // Sun, Thu, Fri, Sat
            const OPEN_MIN = 10 * 60; // 10:00
            const CLOSE_MIN = 19 * 60; // 19:00
            const CLOSING_SOON_MIN = 30;

            if (!OPEN_DAYS.includes(day)) {
                setStatus({ state: 'cerrado', label: 'Cerrado', color: 'red' });
                return;
            }

            if (mins < OPEN_MIN) {
                setStatus({ state: 'por-abrir', label: 'Abre a las 10:00', color: 'blue' });
            } else if (mins >= OPEN_MIN && mins < CLOSE_MIN) {
                if (CLOSE_MIN - mins <= CLOSING_SOON_MIN) {
                    setStatus({ state: 'por-cerrar', label: 'Cierra pronto (19:00)', color: 'amber' });
                } else {
                    setStatus({ state: 'abierto', label: 'Abierto ahora', color: 'green' });
                }
            } else {
                setStatus({ state: 'cerrado', label: 'Cerrado', color: 'red' });
            }
        };

        updateStatus();
        const interval = setInterval(updateStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    const days = [
        { id: 1, name: 'Lun', open: false },
        { id: 2, name: 'Mar', open: false },
        { id: 3, name: 'Mié', open: false },
        { id: 4, name: 'Jue', open: true },
        { id: 5, name: 'Vie', open: true },
        { id: 6, name: 'Sáb', open: true },
        { id: 0, name: 'Dom', open: true },
    ];

    const todayDay = now.getDay();

    return (
        <section id="horarios" className="py-20 bg-slate-50">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold text-brand-dark inline-block relative after:content-[''] after:block after:w-20 after:h-1 after:bg-brand-light after:mx-auto after:mt-2 after:rounded-full">
                        Horarios de Atención
                    </h2>
                </div>

                {/* Week Strip */}
                <div className="flex justify-center gap-2 mb-12 flex-wrap">
                    {days.map((day) => {
                        const isToday = day.id === todayDay;
                        return (
                            <div
                                key={day.id}
                                className={`
                                    w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all
                                    ${day.open ? 'bg-white border-2 border-brand-light text-brand-dark' : 'bg-gray-100 text-gray-400 border border-transparent'}
                                    ${isToday ? 'ring-4 ring-brand/20 scale-110 shadow-lg border-brand' : ''}
                                `}
                            >
                                {day.name}
                            </div>
                        );
                    })}
                </div>

                {/* Cards */}
                <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
                    {/* General Schedule */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex-1 border border-slate-100 flex flex-col sm:flex-row">
                        <div className={`p-6 sm:w-1/3 flex flex-col items-center justify-center gap-2 ${status.color === 'green' ? 'bg-green-50' :
                            status.color === 'amber' ? 'bg-amber-50' :
                                status.color === 'blue' ? 'bg-blue-50' : 'bg-red-50'
                            }`}>
                            <div className={`p-4 rounded-full ${status.color === 'green' ? 'bg-green-100 text-green-600' :
                                status.color === 'amber' ? 'bg-amber-100 text-amber-600' :
                                    status.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-red-100 text-red-600'
                                }`}>
                                <Clock size={32} />
                            </div>
                            <span className={`font-bold text-lg ${status.color === 'green' ? 'text-green-700' :
                                status.color === 'amber' ? 'text-amber-700' :
                                    status.color === 'blue' ? 'text-blue-700' : 'text-red-700'
                                }`}>
                                {status.label}
                            </span>
                            {status.color === 'green' && <span className="animate-pulse w-3 h-3 bg-green-500 rounded-full"></span>}
                        </div>
                        <div className="p-8 flex-1">
                            <h3 className="text-2xl font-bold text-brand-dark mb-2">Atención al Público</h3>
                            <span className="inline-block bg-brand-light text-brand-dark text-xs font-bold px-2 py-1 rounded mb-4">HORARIO REGULAR</span>

                            <div className="space-y-2 text-gray-600">
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span>Jueves a Domingo</span>
                                    <span className="font-bold text-gray-900">10:00 - 19:00</span>
                                </div>
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                        <span>Feriados</span>
                                        <span className="font-bold text-gray-900">10:00 - 19:00</span>
                                    </div>
                            </div>
                        </div>
                    </div>

                    {/* Courses */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex-1 border border-slate-100 flex flex-col sm:flex-row">
                        <div className="bg-brand-light p-6 sm:w-1/3 flex flex-col items-center justify-center gap-2">
                            <div className="p-4 rounded-full bg-white text-brand">
                                <Calendar size={32} />
                            </div>
                            <span className="font-bold text-brand-dark">Cursos</span>
                        </div>
                        <div className="p-8 flex-1">
                            <h3 className="text-2xl font-bold text-brand-dark mb-2">Cursos de Natación</h3>
                            <span className="inline-block bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded mb-4">CUPOS LIMITADOS</span>

                            <div className="space-y-2 text-gray-600">
                                <div className="flex justify-between border-b border-gray-100 pb-2">
                                    <span>Jueves y Viernes</span>
                                    <span className="font-bold text-gray-900">17:30 - 18:20</span>
                                </div>
                                <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                                    Grupos por niveles. <br />
                                    <strong>¡Aprende a nadar con nosotros!</strong>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Schedule;
