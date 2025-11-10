
import React from 'react';

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-20">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-3">
                    <i className="fas fa-atom text-2xl text-sky-600"></i>
                    <h1 className="text-xl md:text-2xl font-bold text-slate-800">
                        Explorador de Leyes de los Gases
                    </h1>
                </div>
                <button
                    onClick={onMenuClick}
                    className="md:hidden p-2 rounded-md text-slate-600 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    aria-label="Open menu"
                >
                    <i className="fas fa-bars text-xl"></i>
                </button>
            </div>
        </header>
    );
};

export default Header;
