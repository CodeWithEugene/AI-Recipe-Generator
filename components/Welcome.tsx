
import React from 'react';

const ChefHatIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);

const KnifeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
    </svg>
);

const PlateIcon: React.FC<{className?: string}> = ({className}) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
    </svg>
);

const Welcome: React.FC = () => {
    return (
        <div className="text-center p-8 max-w-4xl animate-slide-up">
            <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-8">
                    <div className="bg-white p-4 rounded-full shadow-lg border-2 border-orange-200">
                        <ChefHatIcon className="w-8 h-8 text-orange-600" />
                    </div>
                    <div className="bg-white p-4 rounded-full shadow-lg border-2 border-red-200">
                        <KnifeIcon className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="bg-white p-4 rounded-full shadow-lg border-2 border-amber-200">
                        <PlateIcon className="w-8 h-8 text-amber-600" />
                    </div>
                </div>
            </div>
            
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-6">
                Ready to Create Culinary Magic?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-orange-100">
                    <div className="text-3xl mb-3">🥘</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Professional Recipes</h3>
                    <p className="text-gray-600 text-sm">Get restaurant-quality recipes tailored to your ingredients</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-red-100">
                    <div className="text-3xl mb-3">⚡</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Instant Inspiration</h3>
                    <p className="text-gray-600 text-sm">Transform any ingredients into delicious meals in seconds</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-amber-100">
                    <div className="text-3xl mb-3">🎯</div>
                    <h3 className="font-semibold text-gray-800 mb-2">Perfect Pairings</h3>
                    <p className="text-gray-600 text-sm">Discover flavor combinations you never thought possible</p>
                </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-2xl border border-orange-200">
                <p className="text-gray-700 text-lg font-medium mb-2">
                    Simply list your ingredients above, and watch as our AI chef crafts a masterpiece just for you.
                </p>
                <p className="text-gray-600">
                    From pantry staples to gourmet ingredients – every combination tells a delicious story.
                </p>
            </div>
        </div>
    );
};

export default Welcome;
