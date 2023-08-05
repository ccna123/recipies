import React, { useEffect, useMemo, useState } from "react";
import recipie from "../data/recipies";
import { RecipiesCard } from "./RecipiesCard";
import { CalculateTagCount } from "../data/calculateTag";
export const Recipies = () => {
  const tags = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];

  const tagCount = useMemo(() => CalculateTagCount(), []);
  const [filter, setFilter] = useState("");
  const [filterRecipie, setFilterRecipie] = useState([]);
  const [selectedTag, setSelectedTag] = useState("All");

  const handleChooseRecipies = (e) => {
    setSelectedTag(e.target.textContent);
    setFilter(e.target.textContent);
  };
  useEffect(() => {
    if (selectedTag === "All") {
      setFilterRecipie(recipie);
    } else {
      const filtered = recipie.filter((r) => r.tags.includes(filter));
      setFilterRecipie(filtered);
    }
  }, [filter, selectedTag]);

  return (
    <div className="mt-5 lg:flex lg:justify-between">
      {/* recipies list */}
      <div className="text-center">
        <h1 className="font-bold text-2xl">Recipies</h1>
        <ul className="mt-4 lg:px-0 px-5">
          {tags.map((tag, index) => (
            <li
              key={index}
              onClick={(e) => handleChooseRecipies(e)}
              className={`cursor-pointer flex gap-2 hover:text-gray-400 ${
                index === 1 || index === 2 || index === 3 ? "my-3" : "my-0"
              } ${
                selectedTag === tag
                  ? "bg-[#5945F9] rounded-md text-white font-bold px-2"
                  : ""
              }`}
            >
              <p>{tag}</p>
              {tag !== "All" && <span>({tagCount[tag]})</span>}
            </li>
          ))}
        </ul>
      </div>
      {/* end recipies list */}

      {/* recipies image */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {filterRecipie.map((r) =>
          !filter || filter === "All" || r.tags.includes(filter) ? (
            <RecipiesCard key={r.id} recipie={r} />
          ) : null
        )}
      </div>
      {/* end recipies image */}
    </div>
  );
};
