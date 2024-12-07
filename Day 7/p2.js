const fs = require("fs");

const input = fs.readFileSync(
  "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 7/input.txt",
  "utf8"
);
const map = input.split("\n");

function isSolveable(expected, numbers) {
  const operators = ["+", "*", "|"];
  const combinations = generateCombinations(operators, numbers.length - 1);

  let status = false;
  for (let i = 0; i < combinations.length; i++) {
    const value = evaluate(numbers, combinations[i]);

    if (value === expected) {
      status = true;
      break;
    }
  }

  return status;
}

function generateCombinations(operators, length) {
  if (length === 0) return [""];
  const smallerCombinations = generateCombinations(operators, length - 1);
  const combinations = [];
  for (const op of operators) {
    for (const smaller of smallerCombinations) {
      combinations.push(smaller + op);
    }
  }

  return combinations;
}

function evaluate(numbers, operators) {
  let result = parseInt(numbers[0]);
  for (let i = 0; i < operators.length; i++) {
    const operator = operators[i];
    const nextNum = parseInt(numbers[i + 1]);
    if (operator === "+") {
      result = result + nextNum;
    } else if (operator === "*") {
      result = result * nextNum;
    } else if (operator === "|") {
      result = String(result) + String(nextNum);
      result = parseInt(result);
    }
  }
  return result;
}

let sum = 0;
map.forEach((line) => {
  const [target, numbersStr] = line.split(":");
  const value = parseInt(target.trim());
  const numbers = numbersStr.trim().split(" ");

  const Solveable = isSolveable(value, numbers);
  if (Solveable) {
    sum = sum + value;
  }
});

console.log("sum:", sum);
