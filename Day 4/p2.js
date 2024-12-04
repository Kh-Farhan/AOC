const fs = require("fs");

const input = fs.readFileSync(
  "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 4/input.txt",
  "utf8"
);
const array = input.split("\n");
const puzzle = array.map((el) => el.split(""));

const checkStringInstances = (row, column) => {
  let sum = 0;
  // Case for Diagonal
  if (
    row - 1 >= 0 &&
    row + 1 < puzzle.length &&
    column + 1 < puzzle[row].length &&
    column - 1 >= 0 &&
    ((puzzle[row - 1][column - 1] == "M" &&
      puzzle[row + 1][column + 1] == "S") ||
      (puzzle[row - 1][column - 1] == "S" &&
        puzzle[row + 1][column + 1] == "M")) &&
    ((puzzle[row + 1][column - 1] == "M" &&
      puzzle[row - 1][column + 1] == "S") ||
      (puzzle[row + 1][column - 1] == "S" &&
        puzzle[row - 1][column + 1] == "M"))
  ) {
    console.log(row, column);
    sum = sum + 1;
  }

  return sum;
};

let count = 0;
puzzle.forEach((arr, row) => {
  arr.forEach((str, column) => {
    if (str === "A") {
      const sumOfAllInstances = checkStringInstances(row, column);
      count = count + sumOfAllInstances;
    }
  });
});
console.log("Final Count: ", count);
