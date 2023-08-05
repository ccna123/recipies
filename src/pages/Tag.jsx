import React from "react";
import recipie from "../data/recipies";
import { CalculateTagCount } from "../data/calculateTag";

export const Tag = () => {
  const tags = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Dessert",
    "Beef",
    "Pork",
    "Pancakes",
  ];
  const tagCount = CalculateTagCount();

  return (
    <div className="mt-10">
      <section className="grid grid-cols-3 gap-4">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="bg-[#596881] p-4 cursor-pointer hover:bg-gray-400 duration-150 text-white  rounded-md text-center"
          >
            <p className="font-bold text-xl">{tag}</p>
            <span>{tagCount[tag]} recipie(s)</span>
          </div>
        ))}
      </section>
    </div>
  );
};
