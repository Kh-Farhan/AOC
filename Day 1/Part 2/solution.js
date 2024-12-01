const fs = require("fs");
const input = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 1/Part 2/input.txt",
    "utf8"
  )
  .split("\n");
const list1 = input.map((el) => Number(el.split("  ")[0])).sort();
const list2 = input.map((el) => Number(el.split("  ")[1])).sort();

let sum = 0;
list1.forEach((el, ind) => {
  sum = sum + el * list2.filter((el2) => el2 === el).length;
});
console.log(sum);
