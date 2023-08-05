import React from "react";

export const Header = () => {
  return (
    <div>
      <div
        className="mt-10 relative w-full"
        style={{
          height: "300px",
          backgroundImage: `url(${require("../assets/main.jpeg")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute w-[100%] h-[100%] top-0 left-0 flex flex-col  justify-center items-center z-10">
          <h1 className="text-white lg:text-7xl text-4xl font-mono">
            Simply Recipies
          </h1>
          <p className="text-white text-2xl">No Fluff, Just Recipies</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>
    </div>
  );
};
