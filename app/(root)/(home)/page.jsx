// /* eslint-disable no-lone-blocks */
// import CardRecipe from "@/components/Card";
// import React from "react";
// import { getAllRecipes } from "@/lib/actions/recipe.action";

// async function HomePage() {
//   const rec = await getAllRecipes();

//   return (
//     <div className="mt-10 flex justify-center">
//       <div className="xs:grid-cols-2 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
//         {rec.map((recipe) => (
//           <CardRecipe key={recipe.id} recipe={recipe} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HomePage;

"use client";
import CardRecipe from "@/components/Card";
import React, { useContext, useEffect, useState } from "react";
import { getAllRecipes } from "@/lib/actions/recipe.action";
import { RecipeContext } from "@/context/RecipeContext";

function HomePage() {
  const { selectedCategory, searchTerm } = useContext(RecipeContext);
  const [recipes, setRecipes] = useState([]);

  //   console.log("[Homepage] selectedCategory:", selectedCategory);

  useEffect(() => {
    const fetchRecipes = async () => {
      const rec = await getAllRecipes(selectedCategory, searchTerm);
      setRecipes(rec);
    };

    fetchRecipes();
  }, [selectedCategory, searchTerm]);

  return (
    <div className="mt-10 flex justify-center">
      <div className="xs:grid-cols-2 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <CardRecipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
