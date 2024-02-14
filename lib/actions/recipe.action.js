import Data from "../../data/recipes.json";

// Get one recipe by id:
export const getOneRecipe = async (id) => {
  const recipes = Data.recipes; // replace 'recipes' with the actual key in your JSON file
  const recipe = recipes.find((recipe) => String(recipe.id) === String(id));

  if (!recipe) {
    throw new Error(`No recipe found with id: ${id}`);
  }

  //   console.log("[Recipe Action getOneRecipe] recipe:", recipe);
  return recipe;
};

export const getAllRecipes = async () => {
  const recipes = Data.recipes; // replace 'recipes' with the actual key in your JSON file

  if (!recipes) {
    throw new Error(`No recipes found`);
  }

  return recipes;
};
