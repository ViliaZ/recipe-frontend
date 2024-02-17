"use server";
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

export async function getAllRecipes(category, searchTerm) {
  let recipes = Data.recipes;
  //   console.log("[Recipe Action getAllRecipes] category:", category);

  if (!recipes) {
    throw new Error(`No recipes found`);
  }

  if (category !== "all") {
    recipes = recipes.filter((recipe) => recipe.category === category); // Filter by category
  }

  if (searchTerm !== "") {
    recipes = recipes.filter((recipe) => recipe.name.includes(searchTerm)); // Filter by search term
  }

  //   console.log("[Recipe Action getAllRecipes] recipes:", recipes);

  return recipes;
}

// Create a new recipe:
export async function createRecipe(recipe) {
  console.log("[Recipe Action createRecipe] recipe:", recipe);
  //   const recipes = Data.recipes;
  //   const newRecipe = {
  //     id: recipes.length + 1,
  //     ...recipe,
  //   };

  //   recipes.push(newRecipe);

  //   //   console.log("[Recipe Action createRecipe] newRecipe:", newRecipe);
  //   return newRecipe;
}
