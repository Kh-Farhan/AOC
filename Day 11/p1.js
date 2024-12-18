const fs = require("fs");

const input = fs.readFileSync(
  "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 11/input.txt",
  "utf8"
);

const updateStones = (arr) => {
  const update = [];
  arr.forEach((num, index) => {
    const NumAsStr = String(num);
    if (num === 0) {
      update.push(1);
    } else if (NumAsStr.length % 2 == 0) {
      const firstNum = NumAsStr.substring(0, NumAsStr.length / 2);
      const secondNum = NumAsStr.substring(
        NumAsStr.length / 2,
        NumAsStr.length
      );
      update.push(parseInt(firstNum));
      update.push(parseInt(secondNum));
    } else {
      update.push(num * 2024);
    }
  });
  return update;
};
const line = input.split("\n");
let ArrayOfNumbers = line[0].split(" ").map(Number);

for (let i = 0; i < 25; i++) {
  let updated = updateStones(ArrayOfNumbers);
  ArrayOfNumbers = updated;
}

console.log("ArrayOfNumbers:", ArrayOfNumbers.length);
