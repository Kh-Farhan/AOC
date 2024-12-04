const fs = require("fs");

const input = fs.readFileSync(
  "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 4/input.txt",
  "utf8"
);
const array = input.split("\n");
const puzzle = array.map((el) => el.split(""));

const checkStringInstances = (row, column) => {
  let sum = 0;
  // Case for horizontal
  if (
    column + 3 < puzzle[row].length &&
    puzzle[row][column + 1] == "M" &&
    puzzle[row][column + 2] == "A" &&
    puzzle[row][column + 3] == "S"
  ) {
    sum = sum + 1;
  }
  // Case for Horzontal Backwards
  if (
    column - 3 >= 0 &&
    puzzle[row][column - 1] == "M" &&
    puzzle[row][column - 2] == "A" &&
    puzzle[row][column - 3] == "S"
  ) {
    sum = sum + 1;
  }
  // Case for Verticle

  if (
    row + 3 < puzzle.length &&
    puzzle[row + 1][column] == "M" &&
    puzzle[row + 2][column] == "A" &&
    puzzle[row + 3][column] == "S"
  ) {
    sum = sum + 1;
  }
  // Case for Verticle Backwards

  if (
    row - 3 >= 0 &&
    puzzle[row - 1][column] == "M" &&
    puzzle[row - 2][column] == "A" &&
    puzzle[row - 3][column] == "S"
  ) {
    sum = sum + 1;
  }

  // Case for Diagonal TopLeft
  if (
    row - 3 >= 0 &&
    column - 3 >= 0 &&
    puzzle[row - 1][column - 1] == "M" &&
    puzzle[row - 2][column - 2] == "A" &&
    puzzle[row - 3][column - 3] == "S"
  ) {
    sum = sum + 1;
  }

  // Case for Diagonal TopRight
  if (
    row - 3 >= 0 &&
    column + 3 < puzzle[row].length &&
    puzzle[row - 1][column + 1] == "M" &&
    puzzle[row - 2][column + 2] == "A" &&
    puzzle[row - 3][column + 3] == "S"
  ) {
    sum = sum + 1;
  }

  // Case for Diagonal BottomLeft
  if (
    row + 3 < puzzle.length &&
    column - 3 >= 0 &&
    puzzle[row + 1][column - 1] == "M" &&
    puzzle[row + 2][column - 2] == "A" &&
    puzzle[row + 3][column - 3] == "S"
  ) {
    sum = sum + 1;
  }

  // Case for Diagonal BottomRight
  if (
    row + 3 < puzzle.length &&
    column + 3 < puzzle[row].length &&
    puzzle[row + 1][column + 1] == "M" &&
    puzzle[row + 2][column + 2] == "A" &&
    puzzle[row + 3][column + 3] == "S"
  ) {
    sum = sum + 1;
  }

  return sum;
};

let count = 0;
puzzle.forEach((arr, row) => {
  arr.forEach((str, column) => {
    if (str === "X") {
      const sumOfAllInstances = checkStringInstances(row, column);
      count = count + sumOfAllInstances;
    }
  });
});

console.log("Final Count: ", count);
