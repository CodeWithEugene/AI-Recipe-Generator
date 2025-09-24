
import React, { useState, useCallback } from 'react';
import { Recipe } from './types';
import { generateRecipe } from './services/geminiService';
import IngredientInput from './components/IngredientInput';
import RecipeDisplay from './components/RecipeDisplay';
import ErrorDisplay from './components/ErrorDisplay';
import Welcome from './components/Welcome';

const App: React.FC = () => {
  const [ingredients, setIngredients] = useState<string>('');
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateRecipe = useCallback(async () => {
    if (!ingredients.trim()) return;

    setIsLoading(true);
    setError(null);
    setRecipe(null);

    try {
      const generatedRecipe = await generateRecipe(ingredients);
      setRecipe(generatedRecipe);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  }, [ingredients]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 font-sans">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18S-8 39.941-8 30s8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center p-3 md:p-8">
        {/* Header */}
        <header className="text-center mb-8 md:mb-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Culinary AI
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium mb-2">Your Professional Kitchen Assistant</p>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Transform your ingredients into extraordinary dishes with the power of artificial intelligence
          </p>
        </header>
        
        {/* Main Content */}
        <main className="w-full max-w-6xl flex flex-col items-center gap-6 md:gap-8">
          <IngredientInput
            ingredients={ingredients}
            setIngredients={setIngredients}
            onSubmit={handleGenerateRecipe}
            isLoading={isLoading}
          />
          
          <div className="w-full flex justify-center mt-4">
            {error && <ErrorDisplay message={error} />}
            {!isLoading && !error && !recipe && <Welcome />}
            {recipe && <RecipeDisplay recipe={recipe} />}
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-orange-200 w-full max-w-4xl">
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium">Crafted for culinary excellence</span>
            </div>
            <div className="text-sm text-gray-500 space-y-1">
              <div>
                Made with ❤️ by{' '}
                <a 
                  href="https://codewitheugene.top/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-orange-500 hover:text-orange-600 hover:underline transition-colors duration-200"
                >
                  Eugenius
                </a>
              </div>
              <div>
                <a 
                  href="https://codewitheugene.top/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-600 hover:underline transition-colors duration-200 font-medium"
                >
                </a>
                <span className="text-gray-400">Powered by Google Gemini AI</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
