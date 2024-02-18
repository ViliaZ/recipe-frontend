"use server";
import Data from "../../data/recipes.json";

// Get one recipe by id:
export const getOneRecipe = async (id) => {
  const recipes = Data.recipes; // replace 'recipes' with the actual key in your JSON file
  const recipe = recipes.find((recipe) => String(recipe.id) === String(id));

  if (!recipe) {
    throw new Error(`No recipe found with id: ${id}`);
  }
  return recipe;
};

export async function getAllRecipes(category, searchTerm) {
  console.log("test", category, searchTerm);
  let recipes = Data.recipes;

  if (!recipes) {
    throw new Error(`No recipes found`);
  }

  if (category !== "all") {
    recipes = recipes.filter((recipe) => recipe.category === category); // Filter by category
  }

  if (searchTerm !== "") {
    const searchTermLowerCase = searchTerm.toLowerCase();
    recipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTermLowerCase)
    ); // Filter by search term
  }

  return recipes;
}
