const fs = require("fs");
const getSum = (string) => {
  const matches = string.match(/mul\(\d+,\d+\)/g);
  let sum = 0;
  matches.forEach((el, ind) => {
    const firstNumber = el.split("(")[1].split(",")[0];
    const secondNumber = el.split(",")[1].split(")")[0];
    sum = sum + firstNumber * secondNumber;
  });
  return sum;
};

const input = fs.readFileSync(
  "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 3/input.txt",
  "utf8"
);
const totalSum = getSum(input);
const matches = input.match(/don't\(\)(.|\n)*?do\(\)/g);

let toBeSubtracted = 0;

matches.forEach((el, ind) => {
  const sum = getSum(el);
  toBeSubtracted = toBeSubtracted + sum;
});

console.log("final: ", totalSum - toBeSubtracted);
