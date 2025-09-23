
import { GoogleGenAI, Type } from "@google/genai";
import { Recipe } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const RECIPE_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    recipeName: {
      type: Type.STRING,
      description: "The name of the recipe.",
    },
    description: {
      type: Type.STRING,
      description: "A short, appealing description of the dish.",
    },
    prepTime: {
      type: Type.STRING,
      description: "Estimated preparation time, e.g., '15 minutes'.",
    },
    cookTime: {
      type: Type.STRING,
      description: "Estimated cooking time, e.g., '30 minutes'.",
    },
    servings: {
      type: Type.STRING,
      description: "Number of servings the recipe makes, e.g., '4 servings'.",
    },
    ingredients: {
      type: Type.ARRAY,
      description: "A list of ingredients required for the recipe.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: {
            type: Type.STRING,
            description: "The name of the ingredient.",
          },
          quantity: {
            type: Type.STRING,
            description: "The amount of the ingredient, e.g., '2 cups' or '1 tbsp'.",
          },
        },
        required: ["name", "quantity"],
      },
    },
    instructions: {
      type: Type.ARRAY,
      description: "Step-by-step instructions to prepare the dish.",
      items: {
        type: Type.STRING,
        description: "A single instruction step.",
      },
    },
  },
  required: [
    "recipeName",
    "description",
    "prepTime",
    "cookTime",
    "servings",
    "ingredients",
    "instructions",
  ],
};

export const generateRecipe = async (ingredientsList: string): Promise<Recipe> => {
  const prompt = `You are an expert chef. Create a creative and delicious recipe using primarily the following ingredients: ${ingredientsList}. You can assume common pantry staples like salt, pepper, water, and basic cooking oil are available. Focus on using the provided ingredients as the main components. Please provide the recipe in JSON format.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: RECIPE_SCHEMA,
      },
    });

    const jsonText = response.text.trim();
    const recipeData = JSON.parse(jsonText);
    
    return recipeData;

  } catch (error) {
    console.error("Error generating recipe:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate recipe. Gemini API error: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating the recipe.");
  }
};
