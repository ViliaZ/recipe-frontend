// "use client";
// import React from "react";
// import { Filters } from "@/constants/filters";
// import Button from "@/components/shared/Button";

// const Filter = () => {
//   return (
//     <div className="mt-3 flex flex-wrap items-center gap-3">
//       <p className="text-base font-medium tracking-wide text-neutral-500">
//         Categories:
//       </p>
//       {Filters.map((item) => (
//         <Button
//           key={item.value}
//           onClick={() => {}}
//           className=""
//           text={item.name}
//           textStyles="roboto rounded-full bg-white border border-solid border-gray-400 px-2 py-0.5 text-[10px] font-regular text-gray-700 hover:border-gray-700 tracking-wide"
//         >
//           {item.name}
//         </Button>
//       ))}
//     </div>
//   );
// };

// export default Filter;

// "use client";
// import React, { useState } from "react";
// import { Filters } from "@/constants/filters";
// import Button from "@/components/shared/Button";

// const Filter = () => {
//   const [activeButton, setActiveButton] = useState(Filters[0].value);

//   const handleClick = (value) => {
//     setActiveButton(value);
//     console.log(value);
//   };

//   return (
//     <div className="mt-3 flex flex-wrap items-center gap-3">
//       <p className="text-base font-medium tracking-wide text-neutral-500">
//         Categories:
//       </p>
//       {Filters.map((item) => (
//         <Button
//           key={item.value}
//           onClick={() => handleClick(item.value)}
//           text={item.name}
//           textStyles={`roboto rounded-full bg-white border border-solid ${item.value === activeButton ? "bg-gray-200 text-neutral-600 border-gray-300 font-medium" : "border-gray-400"} px-2 py-0.5 text-[10px] font-regular text-gray-700 hover:border-gray-700 tracking-wide`}
//         >
//           {item.name}
//         </Button>
//       ))}
//     </div>
//   );
// };

// export default Filter;

"use client";
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { Filters } from "@/constants/filters";
import Button from "@/components/shared/Button";
import { RecipeContext } from "@/context/RecipeContext";

const Filter = () => {
  const router = useRouter();
  const { setSelectedCategory } = useContext(RecipeContext);
  const [activeButton, setActiveButton] = useState(Filters[0].value);

  const handleClick = (value) => {
    setActiveButton(value);
    setSelectedCategory(value);

    router.push("/");
  };

  return (
    <div className="mt-3 flex flex-wrap items-center gap-3">
      <p className="text-base font-medium tracking-wide text-neutral-500">
        Categories:
      </p>
      {Filters.map((item) => (
        <Button
          key={item.value}
          onClick={() => handleClick(item.value)}
          text={item.name}
          textStyles={`roboto rounded-full border border-solid ${item.value === activeButton ? "bg-gray-200 text-neutral-600 border-gray-300 font-medium" : "border-gray-400"} px-2 py-0.5 text-[10px] font-regular text-gray-700 hover:border-gray-700 tracking-wide`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default Filter;
