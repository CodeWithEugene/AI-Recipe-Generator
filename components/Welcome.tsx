
import React from 'react';

const ChefIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v2h-2v-2zm0 4h2v6h-2v-6z" />
        <path d="M7.07 15.54c.39.39 1.02.39 1.41 0L12 12l3.52 3.52c.39.39 1.02.39 1.41 0l3.54-3.54c.39-.39.39-1.02 0-1.41L16.95 7.05c-.39-.39-1.02-.39-1.41 0L12 10.59l-3.54-3.54c-.39-.39-1.02-.39-1.41 0L3.51 10.5c-.39.39-.39 1.02 0 1.41l3.56 3.63zM12 5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
        <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fill="white">👨‍🍳</text>
    </svg>
);


const Welcome: React.FC = () => {
    return (
        <div className="text-center p-8 max-w-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to Recipe Generator AI!</h2>
            <p className="text-gray-600 text-lg">
                Tired of wondering what to cook? Simply list the ingredients you have on hand, and our AI chef will whip up a custom recipe just for you.
            </p>
            <p className="text-gray-600 text-lg mt-2">
                Let's turn your leftovers into a delicious meal!
            </p>
        </div>
    );
};

export default Welcome;
