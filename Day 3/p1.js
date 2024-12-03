const fs = require("fs");

const input = fs.readFileSync(
  "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 3/input.txt",
  "utf8"
);
const matches = input.match(/mul\(\d+,\d+\)/g);
let sum = 0;
matches.forEach((el, ind) => {
  const firstNumber = el.split("(")[1].split(",")[0];
  const secondNumber = el.split(",")[1].split(")")[0];
  sum = sum + firstNumber * secondNumber;
});
console.log(sum);
