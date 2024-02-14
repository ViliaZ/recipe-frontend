"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Link,
  // Image,
} from "@nextui-org/react";
import Image from "next/image";

export default function CardRecipe({ recipe }) {
  return (
    <Link href={"/recipe/" + recipe.id}>
      <Card shadow="sm" className="max-w-[250px] rounded-b-none">
        <CardHeader className="flex p-0">
          <div>
            <Image
              alt={recipe.name}
              // width={300}
              // height={40}
              fill
              objectFit="CardHeader"
              src={recipe.imageUrl}
              className="rounded-none"
            />
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap">
            <h1 className="text-medium font-bold">{recipe.name}</h1>
          </div>
        </CardBody>
        <CardBody className="flex flex-wrap">
          <p
            className="my-0 line-clamp-3 py-0 text-[14px] leading-tight text-neutral-500"
            style={{ marginTop: -15 + "px" }}
          >
            {recipe.description}
            <br />
            {}
          </p>
        </CardBody>
        <CardBody className="my-0 flex flex-row py-0">
          <Image src="/assets/icons/uhr.svg" alt="Uhr" width={20} height={20} />
          <div className="ml-2 flex w-40 font-bold">
            {recipe.cookingTime} min
          </div>
        </CardBody>
        <CardBody className="my-3 flex flex-row justify-between py-0">
          <div className="flex min-w-20 items-center justify-around rounded-full border-1 border-solid border-black px-1 py-0.5">
            <Image
              src="/assets/icons/herz.svg"
              alt="Herz"
              width={16}
              height={16}
              className=""
            />

            <div className="text-base font-bold">12</div>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/bleistift.svg"
              alt="Bleistift"
              width={20}
              height={20}
            />
            <Image
              src="/assets/icons/kreuzkreis.svg"
              alt="Kreuz im Kreis"
              width={20}
              height={20}
              className="justify-end"
            />
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
