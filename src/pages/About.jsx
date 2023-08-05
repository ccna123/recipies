import React from "react";
import recipie from "../data/recipies";
import { RecipiesCard } from "../components/RecipiesCard";

export const About = () => {
  return (
    <div className="mt-20">
      <section className="grid md:grid-cols-2 items-center gap-5">
        <div className="md:mx-0 mx-5">
          <h1 className="font-bold md:text-5xl text-3xl">
            I'm baby coloring book poke taxidermy
          </h1>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            cum quod, necessitatibus quia odio nostrum quasi eligendi harum, vel
          </p>
          <p className="my-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
          </p>
          <button className="bg-[#5945F9] font-bold text-white p-2 rounded-md">
            Contact
          </button>
        </div>
        <div className="w-full overflow-hidden rounded-lg">
          <img
            className="w-full object-cover h-[30rem]"
            src={require("../assets/about.jpeg")}
          />
        </div>
      </section>
      <section className="my-10">
        <h1 className="text-center font-bold text-xl">
          Look At This Awsomesource
        </h1>
        <div className="md:flex md:justify-between gap-4 mt-5 md:p-0 p-4">
          {recipie.slice(0, 3).map((r) => (
            <RecipiesCard key={r.id} recipie={r} />
          ))}
        </div>
      </section>
    </div>
  );
};
