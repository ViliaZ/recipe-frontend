"use client";
import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import SearchIcon from "../../public/assets/icons/suche.svg";
import Image from "next/image";

export default function Search() {
  const [inputValue, setInputValue] = useState("");

  return (
    <Input
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
      onChange={(e) => setInputValue(e.target.value)}
      onClear={() => {
        setInputValue("");
        console.log("input cleared");
      }}
      className="max-w-xs"
    />
  );
}
