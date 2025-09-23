
import React from 'react';
import { Recipe } from '../types';

interface RecipeDisplayProps {
  recipe: Recipe;
}

const ClockIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UserGroupIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);


const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipe }) => {
  return (
    <div className="w-full max-w-4xl bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-200 animate-fade-in">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-2">{recipe.recipeName}</h1>
      <p className="text-gray-600 text-center mb-8">{recipe.description}</p>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 border-t border-b border-gray-200 py-6">
        <div className="flex items-center text-gray-700">
          <ClockIcon />
          <div>
            <span className="font-semibold">Prep Time:</span> {recipe.prepTime}
          </div>
        </div>
        <div className="flex items-center text-gray-700">
          <ClockIcon />
          <div>
            <span className="font-semibold">Cook Time:</span> {recipe.cookTime}
          </div>
        </div>
        <div className="flex items-center text-gray-700">
          <UserGroupIcon />
          <div>
            <span className="font-semibold">Servings:</span> {recipe.servings}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-orange-400 pb-2">Ingredients</h2>
          <ul className="space-y-3 text-gray-700">
            {recipe.ingredients.map((ing, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-2 mt-1">&#10003;</span>
                <span><strong>{ing.quantity}</strong> {ing.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-orange-400 pb-2">Instructions</h2>
          <ol className="space-y-4 text-gray-700 list-decimal list-inside">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="leading-relaxed">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDisplay;
