
import React from 'react';
import type { GasLaw } from '../types';

interface SidebarProps {
    laws: GasLaw[];
    selectedLawId: string;
    onSelectLaw: (id: string) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ laws, selectedLawId, onSelectLaw, isOpen, setIsOpen }) => {
    const sidebarClasses = `
        fixed top-0 left-0 h-full bg-white shadow-lg z-30
        w-64 transform transition-transform duration-300 ease-in-out
        md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `;
    
    const overlayClasses = `
        fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300
        md:hidden
        ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
    `;

    return (
        <>
            <div className={overlayClasses} onClick={() => setIsOpen(false)}></div>
            <aside className={sidebarClasses}>
                <div className="p-4 border-b border-slate-200">
                    <h2 className="text-lg font-semibold text-slate-700">Leyes Fundamentales</h2>
                </div>
                <nav className="p-2">
                    <ul>
                        {laws.map((law) => (
                            <li key={law.id}>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onSelectLaw(law.id);
                                    }}
                                    className={`
                                        flex items-center px-4 py-3 my-1 rounded-lg text-sm font-medium
                                        transition-colors duration-200
                                        ${
                                            selectedLawId === law.id
                                                ? 'bg-sky-100 text-sky-700'
                                                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                        }
                                    `}
                                >
                                    <i className="fas fa-flask w-5 mr-3"></i>
                                    <span>{law.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
