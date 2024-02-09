// "use client";
// import React from "react";
// import { Button } from "@nextui-org/react";
// import { Filters } from "@/constants/filters";

// const Filter = () => {
//   return (
//     <div className="mt-4 flex flex-wrap gap-3 ">
//       {Filters.map((item) => (
//         <Button
//           key={item.value}
//           onClick={() => {}}
//           size="sm"
//           radius="full"
//           variant="bordered"
//           disableRipple
//           className=""
//         >
//           {item.name}
//         </Button>
//       ))}
//     </div>
//   );
// };

// export default Filter;

"use client";
import React from "react";
import { Filters } from "@/constants/filters";
import Button from "@/components/shared/Button";

const Filter = () => {
  return (
    <div className="mt-3 flex flex-wrap gap-3 ">
      {Filters.map((item) => (
        <Button
          key={item.value}
          onClick={() => {}}
          className=""
          text={item.name}
          textStyles="roboto rounded-full bg-white border border-solid border-gray-400 px-2 py-0.5 text-[10px] font-regular text-gray-700 hover:border-gray-700 tracking-wide"
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default Filter;
