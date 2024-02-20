import { Button } from "@nextui-org/react";
import Image from "next/image";
import TimerIcon from "../../../../public/assets/icons/uhr.svg";
import { getOneRecipe } from "@/lib/actions/recipe.action";
import AddRecipe from "@/components/shared/AddRecipe";

const Recipe = async ({ params }) => {
  const id = params.id;

  const recipe = await getOneRecipe(id);

  return (
    <div className="w-full flex-col items-center justify-center bg-white 320:px-6 md:px-10 lg:px-14">
      <div className="mx-6 mt-6 flex items-center justify-center">
        <AddRecipe />
      </div>
      <div className="mt-6 ">
        <Image
          src={recipe.imageUrl}
          alt="Food Image"
          width={1000}
          height={750}
          className="mb-6 w-full rounded-2xl"
        />
      </div>

      <div className="mb-6 flex w-full justify-center gap-2">
        <div className="flex justify-end md:flex-1 ">
          <Button
            size="sm"
            variant="ghost"
            color="default"
            className="text-gray-600"
          >
            Share
          </Button>
        </div>
        <div className="flex md:flex-1 ">
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
