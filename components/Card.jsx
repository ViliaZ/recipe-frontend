"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Link,
  Image,
} from "@nextui-org/react";

export default function CardRecipe() {
  return (
    <Link href="recipe/1">
      <Card shadow="sm" className="max-w-[300px]">
        <CardHeader className="flex rounded-b-none rounded-t-md p-0">
          <Image
            alt="Spaghetti Bolognese"
            height={40}
            radius="sm"
            src="/assets/images/01_Spaghetti_Bolognese.jpg"
            classNames={"rounded-b-none"}
          />
        </CardHeader>
        <CardBody>
          <div className="flex flex-wrap">
            <h1 className="text-2xl font-bold">Spaghetti Bolognese</h1>
          </div>
        </CardBody>
        <CardBody className="flex flex-wrap">
          <p className="mb-2">A classic Italian Dish</p>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt.
          </p>
        </CardBody>
        <CardBody className="flex flex-row">
          <Image src="/assets/icons/uhr.svg" alt="Uhr" width={25} />
          <div className="ml-2 flex w-40 font-bold">60 min</div>
        </CardBody>
        <CardBody className="flex flex-row">
          <div className="min-w-20 rounded-xl border-1 border-solid border-black p-1">
            <div className="float-left">
              <Image src="/assets/icons/herz.svg" alt="Herz" width={25} />
            </div>
            <div className="ml-8 flex w-4 font-bold">12</div>
          </div>
          <div>
            <div className="float-right">
              <Image
                src="/assets/icons/kreuzkreis.svg"
                alt="Kreuz im Kreis"
                width={25}
                classNames={"justyfy-end"}
              />
            </div>
            <div className="float-right">
              <Image
                src="/assets/icons/bleistift.svg"
                alt="Bleistift"
                width={25}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </Link>
  );
}
