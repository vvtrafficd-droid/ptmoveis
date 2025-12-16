import React from 'react';

const Preloader: React.FC = () => {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[#1a170f] transition-opacity duration-500">
            <div className="relative mb-8">
                <div className="w-24 h-24 rounded-full border-4 border-gray-100 dark:border-gray-800 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <img
                        src="/logo.png"
                        alt="PT Móveis"
                        className="w-16 h-16 object-contain animate-bounce-slow"
                    />
                </div>
                <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
            </div>
            <h2 className="text-xl font-bold text-text-light dark:text-text-dark tracking-wider animate-pulse">
                PT MÓVEIS
            </h2>
            <p className="mt-2 text-sm text-text-light/60 dark:text-text-dark/60">
                Carregando a melhor experiência para si...
            </p>
        </div>
    );
};

export default Preloader;
