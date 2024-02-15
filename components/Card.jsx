"use client";

import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function CardRecipe({ recipe }) {
  return (
    <Link href={"/recipe/" + recipe.id}>
      <Card shadow="sm" className="max-w-[280px] rounded-b-none">
        <CardHeader className="flex p-0">
          <div
            style={{ width: "300px", height: "144px", position: "relative" }}
          >
            <Image
              alt={recipe.name}
              fill
              style={{ objectFit: "cover" }}
              src={recipe.imageUrl}
              className="rounded-none hover:opacity-60"
            />
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap">
            <h1 className="mt-1 text-[14px] font-medium">{recipe.name}</h1>
          </div>
        </CardBody>
        <CardBody className="flex flex-wrap">
          <p
            className="my-0 line-clamp-3 py-0 text-[12px] leading-tight tracking-wide text-neutral-600"
            style={{ marginTop: -15 + "px" }}
          >
            {recipe.description}
            <br />
            {}
          </p>
        </CardBody>
        <CardBody className="my-0 flex flex-row py-0">
          <Image src="/assets/icons/uhr.svg" alt="Uhr" width={18} height={18} />
          <div className="ml-2 flex w-40 text-[12px] font-medium">
            {recipe.cookingTime} min
          </div>
        </CardBody>
        <CardBody className="my-3 flex flex-row justify-between">
          <div className="flex min-w-14 items-center justify-around rounded-full border-1 border-solid border-neutral-600 p-0.5">
            <Image
              src="/assets/icons/herz.svg"
              alt="Herz"
              width={12}
              height={12}
              className=""
            />

            <div className="text-[12px] font-medium">12</div>
          </div>
          <div className="flex gap-4">
            <Image
              src="/assets/icons/bleistift.svg"
              alt="Bleistift"
              width={16}
              height={16}
            />
            <Image
              src="/assets/icons/kreuzkreis.svg"
              alt="Kreuz im Kreis"
              width={16}
              height={16}
              className="justify-end"
            />
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
