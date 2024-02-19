// "use client";
// import { createRecipe } from "@/lib/actions/recipe.action";
// import { useState, useContext } from "react";
// import { useRouter } from "next/navigation";
// import { RecipeContext } from "@/context/RecipeContext";

// export default function RecipeForm() {
//   const router = useRouter();
//   const [ingredientAmount, setIngredientAmount] = useState(1);
//   const { recipes, setRecipes } = useContext(RecipeContext);

//   const submitRecipe = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     // console.log('[Recipe Form] formData:', Object.fromEntries(formData));

//     const recipeData = {
//       name: formData.get("name"),
//       description: formData.get("description"),
//       category: formData.get("category"),
//       region: formData.get("region"),
//       steps: formData.get("steps"),
//       cookingTime: formData.get("cookingTime"),
//       ingredients: [...Array(ingredientAmount).keys()].map((index) => {
//         return {
//           name: formData.get(`name-${index}`),
//           amount: formData.get(`amount-${index}`),
//           units: formData.get(`units-${index}`),
//         };
//       }),
//     };

//     saveData(recipeData);
//     event.target.reset();

//     // Redirect to the home page:
//     router.push("/");
//   };

//   // Create a new recipe and send it to the server
//   const saveData = async (formData) => {
//     // console.log('[Recipe Page] Form data:', formData);

//     const newRecipe = {
//       name: formData.name,
//       description: formData.description,
//       steps: formData.steps.split("\n"),
//       imageUrl: "/assets/images/07_Placeholder.jpg",
//       cookingTime: parseInt(formData.cookingTime),
//       category: formData.category.toLowerCase(),
//       region: formData.region.toLowerCase(),
//       userId: 1,
//       ingredients: formData.ingredients.map((ingredient) => ({
//         name: ingredient.name,
//         unit: ingredient.units,
//         amount: parseFloat(ingredient.amount),
//       })),
//     };

//     // Send the new recipe to action:
//     const createdRecipe = await createRecipe(newRecipe);

//     // Update the recipes state with the new recipe
//     setRecipes([...recipes, createdRecipe]);
//   };

//   return (
//     <>
//       <div className="mx-auto flex w-full max-w-lg justify-center">
//         <h2 className="text-base font-medium tracking-normal text-neutral-500">
//           Add a new recipe:
//         </h2>
//       </div>
//       <form onSubmit={submitRecipe} className="mx-auto mt-4 w-full max-w-lg">
//         <div className="mb-6 flex flex-col items-start justify-start gap-2">
//           <label htmlFor="name" className="text-sm text-neutral-600">
//             Name:
//           </label>
//           <input
//             id="name"
//             name="name"
//             placeholder="Name"
//             className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
//           ></input>
//         </div>
//         <div className="flex gap-2">
//           <div className="mb-6 flex flex-1 flex-col items-start justify-start gap-2">
//             <label htmlFor="name" className="text-sm text-neutral-600">
//               Category:
//             </label>
//             <input
//               id="category"
//               name="category"
//               placeholder="E.g. Pasta"
//               className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
//             ></input>
//           </div>
//           <div className="mb-6 flex flex-1 flex-col items-start justify-start gap-2">
//             <label htmlFor="name" className="text-sm text-neutral-600">
//               Region:
//             </label>
//             <input
//               id="region"
//               name="region"
//               placeholder="E.g. Italian"
//               className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
//             ></input>
//           </div>
//         </div>
//         <div className="mb-6 flex flex-col items-start justify-start gap-2">
//           <label htmlFor="description" className="text-sm  text-neutral-600">
//             Description:
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             placeholder="Description"
//             className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
//           ></textarea>
//         </div>
//         <div className="mb-6 flex flex-col items-start justify-start gap-2">
//           <label htmlFor="steps" className="text-sm  text-neutral-600">
//             Preparation Steps:
//           </label>
//           <textarea
//             id="steps"
//             name="steps"
//             placeholder="1. Step..."
//             className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
//           ></textarea>
//         </div>
//         <div className="mb-6 flex flex-col items-start justify-start gap-2">
//           <label htmlFor="cookingTime" className="text-sm text-neutral-600">
//             Cooking Time (minutes):
//           </label>
//           <input
//             id="cookingTime"
//             name="cookingTime"
//             placeholder="30"
//             type="number"
//             className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
//           ></input>
//         </div>
//         {[...Array(ingredientAmount).keys()].map((index) => {
//           return (
//             <fieldset
//               className="mb-6 flex items-start justify-start gap-2"
//               key={index}
//             >
//               <div className="flex flex-col gap-2">
//                 <label
//                   htmlFor={`name-${index}`}
//                   className="self-start text-sm text-neutral-600"
//                 >
//                   Ingredient Name:
//                 </label>
//                 <input
//                   id={`name-${index}`}
//                   name={`name-${index}`}
//                   placeholder="Name"
//                   className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
//                 ></input>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label
//                   htmlFor={`amount-${index}`}
//                   className="self-start text-sm text-neutral-600"
//                 >
//                   Ingredient Amount:
//                 </label>
//                 <input
//                   id={`amount-${index}`}
//                   type="number"
//                   name={`amount-${index}`}
//                   placeholder="100"
//                   className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
//                 ></input>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <label
//                   htmlFor={`units-${index}`}
//                   className="self-start text-sm  text-neutral-600"
//                 >
//                   Ingredient Units:
//                 </label>
//                 <input
//                   id={`units-${index}`}
//                   name={`units-${index}`}
//                   placeholder="gr"
//                   className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm shadow-sm transition duration-300 ease-in-out placeholder:text-neutral-500 focus:border-neutral-400 focus:outline-none"
//                 ></input>
//               </div>
//             </fieldset>
//           );
//         })}
//         <button
//           type="button"
//           className="mb-3 mr-4 mt-1 w-full cursor-pointer rounded-md border border-transparent bg-gray-600 px-3 py-1 text-base font-medium text-white hover:bg-gray-700 sm:w-auto"
//           onClick={() => setIngredientAmount((amount) => amount + 1)}
//         >
//           Add Ingredient
//         </button>
//         <button
//           className="mt-1 w-full cursor-pointer rounded-md border border-transparent bg-[#038924] px-3 py-1 text-base font-medium text-white hover:bg-[#026e1d] sm:w-auto"
//           type="submit"
//         >
//           Save
//         </button>
//       </form>
//     </>
//   );
// }

"use client";
import { createRecipe, editRecipe } from "@/lib/actions/recipe.action";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RecipeContext } from "@/context/RecipeContext";

export default function RecipeForm() {
  const router = useRouter();
  const [ingredientAmount, setIngredientAmount] = useState(1);
  // State from the RecipeContext
  const { recipes, setRecipes, selectedRecipe, isEditing } =
    useContext(RecipeContext);

  console.log("[RecipeForm] selectedRecipe:", selectedRecipe);

  // Local state to prepopulate the form
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    region: "",
    steps: "",
    cookingTime: "",
    ingredients: [{ name: "", amount: "", units: "" }],
  });

  useEffect(() => {
    if (isEditing && selectedRecipe) {
      setForm({
        name: selectedRecipe.name,
        description: selectedRecipe.description,
        category: selectedRecipe.category,
        region: selectedRecipe.region,
        steps: selectedRecipe.steps.join("\n"),
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
        ingredients: [{ name: "", amount: "", units: "" }],
      });
    }
  }, [selectedRecipe, isEditing]);

  //   const submitRecipe = (event) => {
  //     event.preventDefault();
  //     const formData = new FormData(event.target);
  //     // console.log('[Recipe Form] formData:', Object.fromEntries(formData));

  //     const recipeData = {
  //       name: formData.get("name"),
  //       description: formData.get("description"),
  //       category: formData.get("category"),
  //       region: formData.get("region"),
  //       steps: formData.get("steps"),
  //       cookingTime: formData.get("cookingTime"),
  //       ingredients: [...Array(ingredientAmount).keys()].map((index) => {
  //         return {
  //           name: formData.get(`name-${index}`),
  //           amount: formData.get(`amount-${index}`),
  //           units: formData.get(`units-${index}`),
  //         };
  //       }),
  //     };

  //     saveData(recipeData);
  //     event.target.reset();

  //     // Redirect to the home page:
  //     router.push("/");
  //   };

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
        unit: ingredient.units,
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
          units: formData.get(`units-${index}`),
        };
      }),
    };

    console.log(recipeData.steps); // Fügen Sie diese Zeile hinzu, um den Wert von steps zu sehen

    const transformedData = transformRecipeData(recipeData);

    if (isEditing) {
      // Aktualisieren des ausgewählten Rezepts
      const updatedRecipe = await editRecipe(
        selectedRecipe.id,
        transformedData
      );
      // Aktualisieren des recipes Zustands mit dem aktualisierten Rezept
      setRecipes(
        recipes.map((recipe) =>
          recipe.id === updatedRecipe.id ? updatedRecipe : recipe
        )
      );
    } else {
      // Erstellen eines neuen Rezepts
      const newRecipe = await createRecipe(transformedData);
      // Aktualisieren des recipes Zustands mit dem neuen Rezept
      setRecipes([...recipes, newRecipe]);
    }

    event.target.reset();
    // Redirect to the home page:
    router.push("/");
  };

  // Create a new recipe and send it to the server
  //   const saveData = async (formData) => {
  //     // console.log('[Recipe Page] Form data:', formData);

  // const newRecipe = {
  //   name: formData.name,
  //   description: formData.description,
  //   steps: formData.steps.split("\n"),
  //   imageUrl: "/assets/images/07_Placeholder.jpg",
  //   cookingTime: parseInt(formData.cookingTime),
  //   category: formData.category.toLowerCase(),
  //   region: formData.region.toLowerCase(),
  //   userId: 1,
  //   ingredients: formData.ingredients.map((ingredient) => ({
  //     name: ingredient.name,
  //     unit: ingredient.units,
  //     amount: parseFloat(ingredient.amount),
  //   })),
  // };

  //     // Send the new recipe to action:
  //     const createdRecipe = await createRecipe(newRecipe);

  //     // Update the recipes state with the new recipe
  //     setRecipes([...recipes, createdRecipe]);
  //   };

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
                  htmlFor={`units-${index}`}
                  className="self-start text-sm  text-neutral-600"
                >
                  Ingredient Units:
                </label>
                <input
                  id={`units-${index}`}
                  name={`units-${index}`}
                  value={form.ingredients[index]?.units}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      ingredients: form.ingredients.map((ingredient, i) =>
                        i === index
                          ? { ...ingredient, units: e.target.value }
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
            Add Recipe
          </button>
        )}
      </form>
    </>
  );
}
