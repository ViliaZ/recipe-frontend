import CardRecipe from "@/components/Card";
import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div className="m-20 flex justify-center">
      <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-3">
        {/* <Link href="/recipe/1">
          <CardRecipe recipes={recipes}/>
        </Link>
        <Link href="/recipe/2">
          <CardRecipe />
        </Link>
        <Link href="/recipe/3">
          <CardRecipe />
        </Link> */}

        <Link href="/recipe/1">
          <div className="flex h-[200px] w-[150px] items-center justify-center bg-gray-500">
            Card 1
          </div>
        </Link>
        <Link href="/recipe/2">
          <div className="flex h-[200px] w-[150px] items-center justify-center bg-gray-500">
            Card 2
          </div>
        </Link>
        <Link href="/recipe/3">
          <div className="flex h-[200px] w-[150px] items-center justify-center bg-gray-500">
            Card 3
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
