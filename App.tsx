
import React, { useState } from 'react';
import { GAS_LAWS } from './constants';
import type { GasLaw } from './types';
import Sidebar from './components/Sidebar';
import GasLawCard from './components/GasLawCard';
import Header from './components/Header';

const App: React.FC = () => {
    const [selectedLawId, setSelectedLawId] = useState<string>(GAS_LAWS[0].id);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    const selectedLaw = GAS_LAWS.find(law => law.id === selectedLawId) as GasLaw;

    const handleSelectLaw = (id: string) => {
        setSelectedLawId(id);
        setIsSidebarOpen(false); // Close sidebar on selection in mobile view
    };

    return (
        <div className="min-h-screen bg-slate-100 text-slate-800 font-sans">
            <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className="flex">
                <Sidebar
                    laws={GAS_LAWS}
                    selectedLawId={selectedLawId}
                    onSelectLaw={handleSelectLaw}
                    isOpen={isSidebarOpen}
                    setIsOpen={setIsSidebarOpen}
                />
                <main className="flex-1 p-4 md:p-8 lg:p-12 transition-all duration-300 md:ml-64">
                    {selectedLaw && <GasLawCard law={selectedLaw} />}
                </main>
            </div>
        </div>
    );
};

export default App;
