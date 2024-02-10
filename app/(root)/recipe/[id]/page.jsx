import Image from "next/image";
import React from "react";

const Recipe = ({ params }) => {
  // console.log('[Detail  Page] params: ', params);
  const id = params.id;
  return (
    <div className="mt-10 flex w-full justify-center bg-gray-100 px-16">
      {/* <h1>Recipe {id}</h1> */}
      <Image
        src="/assets/images/01_Spaghetti_Bolognese.jpg"
        alt="Food Image"
        width={600}
        height={400}
        className=""
      />

      <div></div>
    </div>
  );
};

export default Recipe;
