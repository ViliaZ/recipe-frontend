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

export default function CardRecipe() {
  return (
    <Link href="recipe/1">
      <Card shadow="sm" className="max-w-[250px] rounded-b-none">
        <CardHeader className="flex p-0">
          <div>
            <Image
              alt="Spaghetti Bolognese"
              width={300}
              height={40}
              src="/assets/images/01_Spaghetti_Bolognese.jpg"
              className="rounded-none"
            />
          </div>
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap">
            <h1 className="text-md font-bold">Spaghetti Bolognese</h1>
          </div>
        </CardBody>
        <CardBody className="flex flex-wrap">
          <p className="line-clamp-3 text-[14px] leading-tight text-neutral-500">
            A classic Italian Dish:
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.
          </p>
        </CardBody>
        <CardBody className="flex flex-row">
          <Image src="/assets/icons/uhr.svg" alt="Uhr" width={20} height={20} />
          <div className="ml-2 flex w-40 font-bold">60 min</div>
        </CardBody>
        <CardBody className="flex flex-row justify-between">
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
