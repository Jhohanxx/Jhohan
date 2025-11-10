
import React from 'react';
import type { GasLaw } from '../types';

interface GasLawCardProps {
    law: GasLaw;
}

const GasLawCard: React.FC<GasLawCardProps> = ({ law }) => {
    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in">
            <div className="p-6 md:p-8 bg-gradient-to-r from-sky-600 to-cyan-500 text-white">
                <h2 className="text-3xl md:text-4xl font-bold">{law.name}</h2>
            </div>
            <div className="p-6 md:p-8 space-y-8">
                {/* Description Section */}
                <section>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                       <i className="fas fa-info-circle mr-3 text-sky-500"></i>
                       Descripción
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{law.description}</p>
                </section>
                
                {/* Formula Section */}
                <section>
                    <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                        <i className="fas fa-square-root-alt mr-3 text-sky-500"></i>
                        Fórmula
                    </h3>
                    <div className="bg-slate-100 rounded-lg p-4 text-center text-sky-800">
                        {law.formula}
                    </div>
                    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        {Object.entries(law.variables).map(([key, value]) => (
                            <div key={key} className="bg-slate-50 p-2 rounded-md">
                                <span className="font-mono font-semibold text-slate-700">{key}:</span>
                                <span className="text-slate-600 ml-2">{value}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Example Section */}
                <section>
                     <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center">
                        <i className="fas fa-lightbulb mr-3 text-sky-500"></i>
                        Ejemplo Práctico
                    </h3>
                    <div className="border border-slate-200 rounded-lg p-6">
                        <h4 className="font-semibold text-lg text-slate-700 mb-2">{law.example.title}</h4>
                        <p className="text-slate-600 mb-4">{law.example.scenario}</p>
                        <div className="bg-slate-50 rounded-lg p-4 mb-4">
                            <h5 className="font-semibold text-slate-600 mb-2">Cálculo:</h5>
                            <div className="text-slate-800">{law.example.calculation}</div>
                        </div>
                         <div className="bg-emerald-50 text-emerald-800 rounded-lg p-4 flex items-start space-x-4">
                             <i className="fas fa-check-circle text-xl mt-1"></i>
                             <div>
                                <h5 className="font-semibold">Resultado:</h5>
                                <p>{law.example.result}</p>
                             </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

// Add fade-in animation to tailwind config (or use style tag as it's simpler for this setup)
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fadeIn 0.5s ease-out forwards;
    }
`;
document.head.appendChild(style);

export default GasLawCard;
