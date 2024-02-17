import RecipeForm from "@/components/RecipeForm";
import React from "react";

const AddRecipe = () => {
  return (
    <div className="mt-6 w-full flex-col items-center justify-center bg-white 320:px-6 md:px-10  lg:px-14">
      <RecipeForm />
    </div>
  );
};

export default AddRecipe;
