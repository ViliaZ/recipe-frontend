"use client";
import { createRecipe, editRecipe } from "@/lib/actions/recipe.action";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RecipeContext } from "@/context/RecipeContext";

export default function RecipeForm() {
  const router = useRouter();
  // Local state for adding ingredients
  const [ingredientAmount, setIngredientAmount] = useState(1);
  // State from the RecipeContext
  const { recipes, setRecipes, selectedRecipe, isEditing, setIsEditing } =
    useContext(RecipeContext);

  // Local state to prepopulate the form
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    region: "",
    steps: "",
    cookingTime: "",
    ingredients: [{ name: "", amount: 0, unit: "" }],
  });

  useEffect(() => {
    if (isEditing && selectedRecipe) {
      // Change the steps array from an array with objects to an array with strings:
      const stepsString = selectedRecipe.steps
        .map((step) => step.text)
        .join("\n");

      setForm({
        name: selectedRecipe.name,
        description: selectedRecipe.description,
        category: selectedRecipe.category,
        region: selectedRecipe.region,
        steps: stepsString,
        cookingTime: selectedRecipe.cookingTime,
        ingredients: selectedRecipe.ingredients,
      });
    } else {
      setForm({
        name: "",
        description: "",
        category: "",
        region: "",
        steps: "",
        cookingTime: "",
        ingredients: [{ name: "", amount: "", unit: "" }],
      });
    }
  }, [selectedRecipe, isEditing]);

  const transformRecipeData = (formData) => {
    const transformedData = {
      name: formData.name,
      description: formData.description,
      steps: formData.steps.split("\n").map((step) => ({ text: step })),
      imageUrl: "/assets/images/07_Placeholder.jpg",
      cookingTime: parseInt(formData.cookingTime),
      category: formData.category.toLowerCase(),
      region: formData.region.toLowerCase(),
      userId: 1,
      ingredients: formData.ingredients.map((ingredient) => ({
        name: ingredient.name,
        unit: ingredient.unit,
        amount: parseFloat(ingredient.amount),
      })),
    };
    return transformedData;
  };

  const submitRecipe = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const recipeData = {
      name: formData.get("name"),
      description: formData.get("description"),
      category: formData.get("category"),
      region: formData.get("region"),
      steps: formData.get("steps"),
      cookingTime: formData.get("cookingTime"),
      ingredients: [...Array(ingredientAmount).keys()].map((index) => {
        return {
          name: formData.get(`name-${index}`),
          amount: formData.get(`amount-${index}`),
          unit: formData.get(`unit-${index}`),
        };
      }),
    };

    const transformedData = transformRecipeData(recipeData);

    if (isEditing) {
      // Sending updated recipe to server action
      const updatedRecipe = await editRecipe(
        selectedRecipe.id,
        transformedData
      );
      // Setting updated recipe in state recipes array
      setRecipes(
        recipes.map((recipe) =>
          recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
      );

      // Reset isEditing:
      setIsEditing(false);

      // Reset the form:
      event.target.reset();
    } else {
      // Creating new rcipe
      const newRecipe = await createRecipe(transformedData);

      // Setting new recipe in state recipes array
      setRecipes([...recipes, newRecipe]);

      // Reset the form:
      event.target.reset();
    }

    // Redirect to the home page:
    router.push("/");
  };

  return (
    <>
      <div className="mx-auto flex w-full max-w-lg justify-center">
        {isEditing ? (
          <h2 className="text-base font-medium tracking-normal text-neutral-500">
            Edit Recipe:
          </h2>
        ) : (
          <h2 className="text-base font-medium tracking-normal text-neutral-500">
            Add a new recipe:
          </h2>
        )}
      </div>
      <form onSubmit={submitRecipe} className="mx-auto mt-4 w-full max-w-lg">
        <div className="mb-6 flex flex-col items-start justify-start gap-2">
          <label htmlFor="name" className="text-sm text-neutral-600">
            Name:
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Name"
            className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
          ></input>
        </div>
        <div className="flex gap-2">
          <div className="mb-6 flex flex-1 flex-col items-start justify-start gap-2">
            <label htmlFor="name" className="text-sm text-neutral-600">
              Category:
            </label>
            <input
              id="category"
              name="category"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              placeholder="E.g. Pasta"
              className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
            ></input>
          </div>
          <div className="mb-6 flex flex-1 flex-col items-start justify-start gap-2">
            <label htmlFor="name" className="text-sm text-neutral-600">
              Region:
            </label>
            <input
              id="region"
              name="region"
              value={form.region}
              onChange={(e) => setForm({ ...form, region: e.target.value })}
              placeholder="E.g. Italian"
              className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
            ></input>
          </div>
        </div>
        <div className="mb-6 flex flex-col items-start justify-start gap-2">
          <label htmlFor="description" className="text-sm  text-neutral-600">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Description"
            className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
          ></textarea>
        </div>
        <div className="mb-6 flex flex-col items-start justify-start gap-2">
          <label htmlFor="steps" className="text-sm  text-neutral-600">
            Preparation Steps:
          </label>
          <textarea
            id="steps"
            name="steps"
            value={form.steps}
            onChange={(e) => setForm({ ...form, steps: e.target.value })}
            placeholder="1. Step..."
            className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
          ></textarea>
        </div>
        <div className="mb-6 flex flex-col items-start justify-start gap-2">
          <label htmlFor="cookingTime" className="text-sm text-neutral-600">
            Cooking Time (minutes):
          </label>
          <input
            id="cookingTime"
            name="cookingTime"
            value={form.cookingTime}
            onChange={(e) => setForm({ ...form, cookingTime: e.target.value })}
            placeholder="30"
            type="number"
            className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
          ></input>
        </div>
        {[...Array(ingredientAmount).keys()].map((index) => {
          return (
            <fieldset
              className="mb-6 flex items-start justify-start gap-2"
              key={index}
            >
              <div className="flex flex-col gap-2">
                <label
                  htmlFor={`name-${index}`}
                  className="self-start text-sm text-neutral-600"
                >
                  Ingredient Name:
                </label>
                <input
                  id={`name-${index}`}
                  name={`name-${index}`}
                  value={form.ingredients[index]?.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      ingredients: form.ingredients.map((ingredient, i) =>
                        i === index
                          ? { ...ingredient, name: e.target.value }
                          : ingredient
                      ),
                    })
                  }
                  placeholder="Name"
                  className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor={`amount-${index}`}
                  className="self-start text-sm text-neutral-600"
                >
                  Ingredient Amount:
                </label>
                <input
                  id={`amount-${index}`}
                  type="number"
                  name={`amount-${index}`}
                  value={form.ingredients[index]?.amount}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      ingredients: form.ingredients.map((ingredient, i) =>
                        i === index
                          ? { ...ingredient, amount: e.target.value }
                          : ingredient
                      ),
                    })
                  }
                  placeholder="100"
                  className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor={`unit-${index}`}
                  className="self-start text-sm  text-neutral-600"
                >
                  Ingredient Units:
                </label>
                <input
                  id={`unit-${index}`}
                  name={`unit-${index}`}
                  value={form.ingredients[index]?.unit}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      ingredients: form.ingredients.map((ingredient, i) =>
                        i === index
                          ? { ...ingredient, unit: e.target.value }
                          : ingredient
                      ),
                    })
                  }
                  placeholder="gr"
                  className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
                ></input>
              </div>
            </fieldset>
          );
        })}
        <button
          type="button"
          className="mb-3 mr-4 mt-1 w-full cursor-pointer rounded-md border border-transparent bg-gray-600 px-3 py-1 text-base font-medium text-white hover:bg-gray-700 sm:w-auto"
          onClick={() => setIngredientAmount((amount) => amount + 1)}
        >
          Add Ingredient
        </button>
        {isEditing ? (
          <button
            type="submit"
            className="mt-1 w-full cursor-pointer rounded-md border border-transparent bg-[#038924] px-3 py-1 text-base font-medium text-white hover:bg-[#026e1d] sm:w-auto"
          >
            Save Changes
          </button>
        ) : (
          <button
            type="submit"
            className="mt-1 w-full cursor-pointer rounded-md border border-transparent bg-[#038924] px-3 py-1 text-base font-medium text-white hover:bg-[#026e1d] sm:w-auto"
          >
            Save Recipe
          </button>
        )}
      </form>
    </>
  );
}
