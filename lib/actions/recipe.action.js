"use server";
import Data from "../../data/recipes.json";
import fs from "fs";

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
  let data;
  try {
    data = JSON.parse(fs.readFileSync("data/recipes.json"));
  } catch (error) {
    data = { recipes: [] };
  }

  if (!Array.isArray(data.recipes)) {
    data.recipes = [];
  }

  // Format the steps array:
  //   const steps = recipe.steps
  //     ? recipe.steps.map((step) => ({ text: step }))
  //     : [];
  const newRecipe = {
    id: data.recipes.length + 1,
    ...recipe,
    // steps, // Add the formatted steps array
  };

  data.recipes.push(newRecipe);

  fs.writeFileSync("data/recipes.json", JSON.stringify(data, null, 2));

  return newRecipe;
}

// Edit a recipe:
export async function editRecipe(id, newRecipeData) {
  //   console.log("[Recipe Action editRecipe] id:", id);
  //   console.log("[Recipe Action editRecipe] newRecipeData:", newRecipeData);
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

  // Format the steps array:
  //   const steps = newRecipeData.steps.map((step) => ({ text: step }));

  // Edit the recipe
  const editedRecipe = {
    ...data.recipes[recipeIndex],
    ...newRecipeData,
    // steps, // Add the formatted steps array
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
