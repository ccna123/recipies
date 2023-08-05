import React, { useEffect, useState } from "react";
import recipie from "../data/recipies";
import { useParams } from "react-router-dom";

export const RecipiesPage = () => {
  const { id } = useParams();
  const [recipies, setRecipies] = useState(null);
  useEffect(() => {
    const fetchData = () => {
      const singleRec = recipie.find((r) => r.id === parseInt(id));
      setRecipies(singleRec);
    };
    fetchData();
  }, [id]);

  return (
    <div className="p-20">
      {recipies ? (
        <div className="grid lg:grid-cols-2 overflow-hidden items-center gap-10">
          <div className="max-w-full">
            <img
              className="rounded-md"
              src={recipies.image}
              alt={recipies.name}
            />
          </div>
          <div>
            <h1 className="font-bold text-4xl">{recipies.name}</h1>
            <p className="my-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
            <div className="flex justify-around">
              <p className="flex flex-col items-center">
                <i
                  className="fa-solid fa-clock"
                  style={{ color: "#5945F9", fontSize: 20 }}
                ></i>
                <span>Prep Time</span>
                <span>{recipies.prep}</span>
              </p>
              <p className="flex flex-col items-center">
                <i
                  className="fa-regular fa-clock"
                  style={{ color: "#5945F9", fontSize: 20 }}
                ></i>
                <span>Cook Time</span>
                {recipies.cook}
              </p>
              <p className="flex flex-col items-center">
                <i
                  class="fa-solid fa-user-group"
                  style={{ color: "#5945F9", fontSize: 20 }}
                ></i>
                <span>Servings</span>
                {recipies.serving}
              </p>
            </div>
            <div className="mt-10 flex gap-2 items-center">
              <p className="font-bold">Tags:</p>
              <div className="flex gap-4">
                {recipies.tags.map((t, index) => (
                  <p
                    className="bg-[#5945F9] text-white font-bold px-1.5 rounded-md"
                    key={index}
                  >
                    {t}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <div className="grid lg:grid-cols-3 mt-10 gap-5">
        <div className="lg:col-span-2">
          <h1 className="font-bold text-xl">Instruction</h1>
          {recipies &&
            recipies.steps.map((s) => (
              <div className="my-5">
                <div key={s.id} className="flex items-center gap-4">
                  <h2 className="text-[#5945F9] font-bold text-xl ">
                    STEP {s.id}
                  </h2>
                  <span className="border-2 lg:w-[80%] w-[50%]"></span>
                </div>
                <p>{s.detail}</p>
              </div>
            ))}
        </div>
        <hr className="lg:hidden border-2" />
        <div>
          <h1 className="font-bold text-xl">Ingredients</h1>
          {recipies &&
            recipies.ingredients.map((i) => (
              <p key={i.id} className="border-b-2 py-2">
                {i.detail}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};
