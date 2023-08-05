import recipie from "./recipies"

export const CalculateTagCount = ()=>{
    const tagCount = {};
    recipie.forEach((r) => {
      r.tags.forEach((t) => {
        if (tagCount[t]) {
          tagCount[t]++;
        } else {
          tagCount[t] = 1;
        }
      });
    });
    return tagCount
}