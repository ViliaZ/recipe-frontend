"use client";
import CardRecipe from "@/components/Card";
import React, { useContext, useEffect } from "react";
import { getAllRecipes } from "@/lib/actions/recipe.action";
import { RecipeContext } from "@/context/RecipeContext";
import AddRecipe from "@/components/shared/AddRecipe";

function HomePage() {
  // useContext is a hook that allows you to use context without wrapping a component in a Context.Consumer
  // Here, we're getting the selectedCategory, searchTerm, and recipes from the RecipeContext
  const { selectedCategory, searchTerm, recipes, setRecipes } =
    useContext(RecipeContext);

  useEffect(() => {
    // useEffect is a hook that allows you to perform side effects in function components
    // Here, we're defining a function fetchRecipes to fetch all recipes based on the selectedCategory and searchTerm
    const fetchRecipes = async () => {
      const rec = await getAllRecipes(selectedCategory, searchTerm);
      // Once the recipes are fetched, we update the recipes state using setRecipes
      setRecipes(rec);
    };

    // Call the fetchRecipes function
    fetchRecipes();
  }, [selectedCategory, searchTerm]); // This effect will run every time selectedCategory or searchTerm changes

  return (
    <>
      <div className="mx-6 mt-6 flex items-center justify-center">
        <AddRecipe />
      </div>
      <div className="mt-10 flex justify-center">
        <div className="xs:grid-cols-2 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <CardRecipe key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
