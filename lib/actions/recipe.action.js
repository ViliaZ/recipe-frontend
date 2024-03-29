"use server";
import Data from "../../data/recipes.json";
import fs from "fs";

// Get one recipe by id:
export const getOneRecipe = async (id) => {
  const recipes = Data.recipes; // We replace 'recipes' with the actual key in your JSON file
  const recipe = recipes.find((recipe) => String(recipe.id) === String(id));

  if (!recipe) {
    throw new Error(`No recipe found with id: ${id}`);
  }
  return recipe;
};

export async function getAllRecipes(category, searchTerm) {
  let recipes = Data.recipes;

  if (!recipes) {
    throw new Error(`No recipes found`);
  }

  if (category !== "all") {
    recipes = recipes.filter((recipe) => recipe.category === category); // Filter by category
  }

  if (searchTerm) {
    const searchTermLowerCase = searchTerm.toLowerCase();
    recipes = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchTermLowerCase)
    ); // Filter recipe name by search term
  }

  return recipes;
}

// Create a new recipe:
export async function createRecipe(recipe) {
  let data;
  try {
    data = JSON.parse(fs.readFileSync("data/recipes.json"));
  } catch (error) {
    data = { recipes: [] };
  }

  if (!Array.isArray(data.recipes)) {
    data.recipes = [];
  }

  const newRecipe = {
    id: data.recipes.length + 1,
    ...recipe,
  };

  data.recipes.push(newRecipe);

  fs.writeFileSync("data/recipes.json", JSON.stringify(data, null, 2));

  return newRecipe;
}

// Edit a recipe:
export async function editRecipe(id, newRecipeData) {
  let data;
  try {
    data = JSON.parse(fs.readFileSync("data/recipes.json"));
  } catch (error) {
    data = { recipes: [] };
  }

  if (!Array.isArray(data.recipes)) {
    data.recipes = [];
  }

  // Find the recipe to edit
  const recipeIndex = data.recipes.findIndex((recipe) => recipe.id === id);
  if (recipeIndex === -1) {
    throw new Error("Recipe not found");
  }

  // Edit the recipe. Merge the old recipe with the new recipe data.
  const editedRecipe = {
    ...data.recipes[recipeIndex],
    ...newRecipeData,
  };

  // Replace the old recipe with the edited recipe
  data.recipes[recipeIndex] = editedRecipe;

  fs.writeFileSync("data/recipes.json", JSON.stringify(data, null, 2));

  return editedRecipe;
}

// Delete a recipe:
export async function deleteRecipe(id) {
  const data = JSON.parse(fs.readFileSync("data/recipes.json"));

  if (!Array.isArray(data.recipes)) {
    data.recipes = [];
  }

  const updatedRecipes = data.recipes.filter((recipe) => recipe.id !== id);

  data.recipes = updatedRecipes;

  fs.writeFileSync("data/recipes.json", JSON.stringify(data, null, 2));

  return updatedRecipes;
}
