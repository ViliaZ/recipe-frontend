"use client";
import Link from "next/link";

const AddRecipe = () => {
  return (
    <Link
      className="rounded-md bg-[#ea371f] px-3 py-1 text-base font-semibold text-white hover:bg-[#c82e1a]"
      href={"/add-recipe"}
    >
      Add Recipe
    </Link>
  );
};

export default AddRecipe;
