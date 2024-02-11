// ********* STATIC PAGE *********
// import { Button } from "@nextui-org/react";
// import Image from "next/image";
// import TimerIcon from "../../../../public/assets/icons/uhr.svg";

// const Recipe = ({ params }) => {
//   // console.log('[Detail  Page] params: ', params);
//   //   const id = params.id;
//   return (
//     <div className="mx-auto mt-10 flex w-[80%] flex-col items-center justify-center bg-white px-16">
//       {/* <h1>Recipe {id}</h1> */}
//       <Image
//         src="/assets/images/01_Spaghetti_Bolognese.jpg"
//         alt="Food Image"
//         width={1000}
//         height={750}
//         className="mb-6 rounded-2xl"
//       />

//       <div className="mb-6 flex w-full  justify-center gap-2">
//         <div className="flex flex-1 justify-end ">
//           <Button
//             size="sm"
//             variant="ghost"
//             color="default"
//             className="text-gray-600"
//           >
//             Share
//           </Button>
//         </div>
//         <div className="flex flex-1 ">
//           <Button
//             size="sm"
//             variant="ghost"
//             color="default"
//             className="text-gray-600"
//           >
//             Add to Favorites
//           </Button>
//         </div>
//       </div>

//       <div className=" mx-auto flex w-full flex-col gap-2">
//         <h1 className="text-lg font-semibold text-neutral-800">
//           Spaghetti Bolognese
//         </h1>
//         <div className="mb-3 flex items-center gap-2">
//           <span className="text-neutral-500">
//             <Image src={TimerIcon} alt="Timer" width={16} height={16} />
//           </span>
//           <span className="text-sm font-medium text-neutral-800">20 min</span>
//         </div>

//         <p className="mb-3 text-sm text-neutral-500">
//           A classic Italian dish: <br />
//           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
//           nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
//           sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
//           rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
//           ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
//           sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
//           dolore magna aliquyam erat, sed diam voluptua.
//         </p>

//         <div className="mb-3">
//           <h2 className="mb-2 text-base font-semibold text-neutral-800">
//             Ingredients:
//           </h2>
//           <ul className="flex list-none flex-col items-start text-sm text-neutral-500">
//             <li className="flex">
//               <span className="mr-0.5">500</span>
//               <span className="mr-1">gr</span>
//               <span className="mr-1">Spaghetti</span>
//             </li>
//             <li className="flex">
//               <span className="mr-0.5">200</span>
//               <span className="mr-1">gr</span>
//               <span className="mr-1">Ground Beef</span>
//             </li>
//             <li className="flex">
//               <span className="mr-0.5">1</span>
//               <span className="mr-1">pc</span>
//               <span className="mr-1">Onion</span>
//             </li>
//             <li className="flex">
//               <span className="mr-0.5">1</span>
//               <span className="mr-1">pc</span>
//               <span className="mr-1">Garlic</span>
//             </li>
//             <li className="flex">
//               <span className="mr-0.5">1</span>
//               <span className="mr-1">can</span>
//               <span className="mr-1">Tomato Sauce</span>
//             </li>
//           </ul>
//         </div>

//         <h2 className="text-base font-semibold text-neutral-800">
//           Preparation:
//         </h2>

//         <p className="mb-3 text-sm text-neutral-500">
//           Prepare Ingredients: <br />
//           Finely chop the onion, carrot, and celery. Mince the garlic. Measure
//           out the tomato paste, crushed tomatoes, broth, and red wine (if
//           using). Have the ground beef ready.
//         </p>
//         <p className="mb-3 text-sm text-neutral-500">
//           Cooking the Vegetables: <br />
//           Heat a large skillet or pot over medium heat with a few tablespoons of
//           olive oil. Add the chopped onion, carrot, and celery. Cook until the
//           vegetables are softened, usually 5-7 minutes. Add minced garlic and
//           cook for an additional 1-2 minutes until fragrant.
//         </p>
//         <p className="mb-3 text-sm text-neutral-500">
//           Tomato Base: <br />
//           Stir in the tomato paste and cook for 2-3 minutes to enhance the
//           flavor. Pour in the crushed tomatoes, broth, and red wine (if using).
//           Season with dried oregano, dried basil, salt, and pepper. Bring the
//           mixture to a simmer, then reduce the heat and let it simmer for at
//           least 30 minutes to allow the flavors to meld. You can simmer longer
//           for a richer flavor.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Recipe;

// ********* DYNAMIC PAGE *********
import { Button } from "@nextui-org/react";
import Image from "next/image";
import TimerIcon from "../../../../public/assets/icons/uhr.svg";

// TODO: Refactor this function to a utils.js file later
// This function replaces line breaks in JSON with <br> tags for rendering in HTML:
// Define a function that takes an object as an argument
function replaceNewlinesInObject(obj) {
  // Create a new object or array based on the input type
  const newObj = Array.isArray(obj) ? [] : {};
  // Iterate over each property in the input object
  for (const key in obj) {
    // If the property value is a string
    if (typeof obj[key] === "string") {
      // Replace newline characters with HTML line breaks in the string and assign it to the new object
      newObj[key] = obj[key].replace(/\\n/g, "<br/>");
    }
    // If the property value is an array
    else if (Array.isArray(obj[key])) {
      // Apply the function recursively to each item in the array and assign the result to the new object
      newObj[key] = obj[key].map((item) => replaceNewlinesInObject(item));
    }
    // If the property value is an object
    else if (typeof obj[key] === "object") {
      // Apply the function recursively to the object and assign the result to the new object
      newObj[key] = replaceNewlinesInObject(obj[key]);
    }
    // If the property value is neither a string, an array, nor an object
    else {
      // Assign the property value directly to the new object
      newObj[key] = obj[key];
    }
  }
  // Return the new object with newline characters replaced
  return newObj;
}

let recipe = {
  id: 1,
  name: "Spaghetti Bolognese",
  description:
    "A classic Italian dish:\\n Indulge in the classic comfort of Spaghetti Bolognese, a hearty Italian dish that combines perfectly cooked spaghetti with a rich and savory meat sauce. Begin by sautéing a medley of aromatic vegetables like onions, carrots, and celery, before adding in minced garlic for an extra burst of flavor. Brown ground beef in the mix, and then introduce a symphony of tomato-based goodness with crushed tomatoes, tomato paste, and a splash of broth (or red wine for an extra layer of richness.",
  steps: [
    {
      text: "Prepare Ingredients:\\n Finely chop the onion, carrot, and celery. Mince the garlic. Measure out the tomato paste, crushed tomatoes, broth, and red wine (if using). Have the ground beef ready.",
    },
    {
      text: "Cooking the Vegetables:\\n Heat a large skillet or pot over medium heat with a few tablespoons of olive oil. Add the chopped onion, carrot, and celery. Cook until the vegetables are softened, usually 5-7 minutes. Add minced garlic and cook for an additional 1-2 minutes until fragrant.",
    },
    {
      text: "Tomato Base:\\n Stir in the tomato paste and cook for 2-3 minutes to enhance the flavor. Pour in the crushed tomatoes, broth, and red wine (if using). Season with dried oregano, dried basil, salt, and pepper. Bring the mixture to a simmer, then reduce the heat and let it simmer for at least 30 minutes to allow the flavors to meld. You can simmer longer for a richer flavor.",
    },
  ],
  imageUrl: "/assets/images/01_Spaghetti_Bolognese.jpg",
  cookingTime: 60,
  category: "pasta",
  region: "italian",
  userId: 1,
  ingredients: [
    {
      name: "Spaghetti",
      unit: "gr",
      amount: 200.0,
    },
    {
      name: "Tomato Sauce",
      unit: "gr",
      amount: 150.0,
    },
    {
      name: "Ground Beef",
      unit: "gr",
      amount: 100.0,
    },
  ],
};

recipe = replaceNewlinesInObject(recipe);

const Recipe = ({ params }) => {
  // console.log('[Detail  Page] params: ', params);
  //   const id = params.id;
  return (
    <div className="mx-auto mt-10 flex w-[80%] flex-col items-center justify-center bg-white px-16">
      {/* <h1>Recipe {id}</h1> */}
      <Image
        src={recipe.imageUrl}
        alt="Food Image"
        width={1000}
        height={750}
        className="mb-6 rounded-2xl"
      />

      <div className="mb-6 flex w-full justify-center gap-2">
        <div className="flex flex-1 justify-end ">
          <Button
            size="sm"
            variant="ghost"
            color="default"
            className="text-gray-600"
          >
            Share
          </Button>
        </div>
        <div className="flex flex-1 ">
          <Button
            size="sm"
            variant="ghost"
            color="default"
            className="text-gray-600"
          >
            Add to Favorites
          </Button>
        </div>
      </div>

      <div className="mx-auto flex w-full flex-col gap-2">
        <h1 className="text-lg font-semibold text-neutral-800">
          {recipe.name}
        </h1>
        <div className="mb-3 flex items-center gap-2">
          <span className="text-neutral-500">
            <Image src={TimerIcon} alt="Timer" width={16} height={16} />
          </span>
          <span className="text-sm font-medium text-neutral-800">{`${recipe.cookingTime} min`}</span>
        </div>

        <p
          className="mb-3 text-sm text-neutral-500"
          dangerouslySetInnerHTML={{ __html: recipe.description }} // Only use this if you trust the source of the HTML string
        ></p>

        <div className="mb-3">
          <h2 className="mb-2 text-base font-semibold text-neutral-800">
            Ingredients:
          </h2>
          <ul className="flex list-none flex-col items-start text-sm text-neutral-500">
            {recipe.ingredients.map((ingredient) => (
              <li className="flex" key={ingredient.name}>
                <span className="mr-0.5">{ingredient.amount}</span>
                <span className="mr-1">{ingredient.unit}</span>
                <span className="mr-1">{ingredient.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-base font-semibold text-neutral-800">
          Preparation:
        </h2>

        <div>
          {recipe.steps.map((step, index) => (
            <p
              className="mb-3 text-sm text-neutral-500"
              key={index}
              dangerouslySetInnerHTML={{ __html: step.text }}
            ></p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
