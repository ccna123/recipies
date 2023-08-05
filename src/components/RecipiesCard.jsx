import React from "react";
import { Link } from "react-router-dom";

export const RecipiesCard = ({ recipie }) => {
  return (
    <Link
      to={`/recipies/${recipie.id}`}
      className="rounded-lg cursor-pointer lg:w-[20rem] md:w-fit w-full lg:mt-0 mt-5 mb-10"
    >
      <div className="lg:h-[15rem] md:h-[10rem] overflow-hidden">
        <img className="rounded-lg h-full" src={recipie.image} />
      </div>
      <div className="lg:m-0 m-4">
        <h1 className="font-bold text-xl">{recipie.name}</h1>
        <div className="flex text-sm gap-2 items-center">
          <p>Prep: {recipie.prep}</p>
          <span className="border-2 h-3 border-black"></span>
          <p>Cook: {recipie.cook}</p>
        </div>
      </div>
    </Link>
  );
};
