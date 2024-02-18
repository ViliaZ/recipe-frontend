// Customized Input component
"use client";
import React, { useState, useContext } from "react";
import { extendVariants, Input } from "@nextui-org/react";
import SearchIcon from "../../public/assets/icons/suche.svg";
import { RecipeContext } from "@/context/RecipeContext";
import Image from "next/image";

const MyInput = extendVariants(Input, {
  variants: {
    // <- modify/add variants
    color: {
      stone: {
        // <- add a new color variant
        inputWrapper: [
          // <- Input wrapper slot
          "bg-white",
          "border",
          "border-zinc-300",
          //   "shadow",
          "transition-colors",
          "focus-within:bg-white",
          "data-[hover=true]:border-zinc-400",
          "data-[hover=true]:bg-white",
          "group-data-[focus=true]:border-zinc-400",
        ],
        input: [
          // <- Input element slot
          "text-zinc-500",
          "placeholder:text-zinc-500",
        ],
      },
    },
    size: {
      xs: {
        inputWrapper: "h-unit-6 min-h-unit-6 px-1",
        input: "text-tiny",
      },
      sm: {
        inputWrapper: "h-unit-10 min-h-unit-10 w-full ",
        input: "text-small",
      },
      md: {
        inputWrapper: "h-unit-10 min-h-unit-10",
        input: "text-small",
      },
      xl: {
        inputWrapper: "h-unit-14 min-h-unit-14",
        input: "text-medium",
      },
    },
    radius: {
      xs: {
        inputWrapper: "rounded",
      },
      sm: {
        inputWrapper: "rounded-[4px]",
      },
    },
    textSize: {
      base: {
        input: "text-small",
      },
    },
    removeLabel: {
      true: {
        label: "hidden",
      },
      false: {},
    },
  },
  defaultVariants: {
    color: "stone",
    textSize: "base",
    removeLabel: true,
  },
});

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  // const { setSelectedCategory } = useContext(RecipeContext);
  const { setSearchTerm } = useContext(RecipeContext);

  const handleSearch = (value) => {
    setInputValue(value);
    setSearchTerm(value);
    console.log("input", value);
  };

  return (
    <MyInput
      isClearable
      type="text"
      variant="bordered"
      size="sm"
      placeholder="Search recipes.."
      startContent={
        <Image
          src={SearchIcon}
          alt="search"
          width={18}
          height={18}
          className="pointer-events-none mr-1 shrink-0 text-2xl text-default-400"
        />
      }
      value={inputValue}
      onChange={(e) => handleSearch(e.target.value)}
      onClear={() => {
        setInputValue("");
        console.log("input cleared");
      }}
      className="w-full text-black 320:mx-2 375:mx-4 425:mx-4 sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
    />
  );
}
