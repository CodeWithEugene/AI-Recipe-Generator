
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
    <div className="w-full max-w-4xl bg-white/90 backdrop-blur-sm p-4 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-2xl border border-orange-100 relative overflow-hidden animate-bounce-in hover-lift">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-amber-200/30 to-orange-200/30 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative z-10">
        <form onSubmit={handleFormSubmit}>
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-3 md:mb-4 shadow-lg">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
              What's in Your Kitchen?
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              List your ingredients and let our AI chef create something extraordinary
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="ingredients" className="block text-base md:text-lg font-semibold text-gray-800 mb-3">
                Ingredients List
              </label>
              <div className="relative">
                <textarea
                  id="ingredients"
                  value={ingredients}
                  onChange={(e) => setIngredients(e.target.value)}
                  placeholder="Enter your ingredients separated by commas..."
                  className="w-full h-20 p-4 md:p-6 pr-20 md:pr-6 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-orange-200 focus:border-orange-400 transition-all duration-300 ease-in-out resize-none text-base md:text-lg placeholder-gray-400 bg-white/80 backdrop-blur-sm shadow-inner"
                  disabled={isLoading}
                />
                <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 text-xs md:text-sm text-gray-400 bg-white/80 px-2 py-1 rounded-md">
                  {ingredients.length} chars
                </div>
              </div>
              <p className="text-gray-500 text-sm mt-2 flex items-center">
                <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Include quantities when possible (e.g., "2 cups rice", "1 lb chicken")
              </p>
            </div>

            <button
              type="submit"
              disabled={isLoading || !ingredients.trim()}
              className="w-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-xl md:rounded-2xl hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-4 focus:ring-orange-200 transition-all duration-300 ease-in-out disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transform hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-base md:text-lg">Crafting Your Recipe...</span>
                </>
              ) : (
                <>
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                  <span className="text-base md:text-lg">Create Recipe</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IngredientInput;
