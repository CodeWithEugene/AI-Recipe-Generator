
import React from 'react';

interface IngredientInputProps {
  ingredients: string;
  setIngredients: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

const IngredientInput: React.FC<IngredientInputProps> = ({ ingredients, setIngredients, onSubmit, isLoading }) => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoading && ingredients.trim()) {
      onSubmit();
    }
  };

  return (
    <div className="w-full max-w-2xl bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="ingredients" className="block text-lg font-semibold text-gray-800 mb-2">
          What ingredients do you have?
        </label>
        <p className="text-gray-500 mb-4">
          Enter your ingredients below, separated by commas. For example: chicken breast, rice, broccoli, soy sauce
        </p>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="e.g., tomatoes, basil, garlic, pasta..."
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition duration-200 ease-in-out resize-none"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !ingredients.trim()}
          className="mt-6 w-full flex items-center justify-center bg-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 ease-in-out disabled:bg-orange-300 disabled:cursor-not-allowed transform hover:scale-105 disabled:scale-100"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            'Generate Recipe'
          )}
        </button>
      </form>
    </div>
  );
};

export default IngredientInput;
