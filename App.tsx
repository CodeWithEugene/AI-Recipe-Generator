
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
    <div className="min-h-screen bg-orange-50 font-sans flex flex-col items-center p-4 md:p-8">
      <header className="text-center mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
          Recipe Generator <span className="text-orange-500">AI</span>
        </h1>
        <p className="text-gray-600 mt-2 text-lg">Your Personal AI Sous-Chef</p>
      </header>
      
      <main className="w-full flex flex-col items-center gap-8">
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

      <footer className="text-center mt-auto pt-8 text-gray-500 text-sm">
        <p>Powered by Google Gemini. Discover new culinary creations.</p>
      </footer>
    </div>
  );
};

export default App;
