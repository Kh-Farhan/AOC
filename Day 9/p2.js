const fs = require("fs");

const createIDString = (line) => {
  let formatedArray = [];
  let fileNumber = 0;

  line.forEach((num, index) => {
    const number = Number(num);
    if (index % 2 === 0) {
      formatedArray = formatedArray.concat(
        Array(number).fill(fileNumber.toString())
      );

      fileNumber = fileNumber + 1;
    } else {
      formatedArray = formatedArray.concat(Array(number).fill("."));
    }
  });
  return formatedArray;
};

function shiftNumberBlocksToLeft(inputArray) {
  let i = inputArray.length - 1;

  while (i >= 0) {
    if (inputArray[i] !== ".") {
      let num = inputArray[i];
      let blockEnd = i;
      let blockstart = i;

      while (blockstart >= 0 && inputArray[blockstart] === num) {
        blockstart--;
      }

      blockstart++;

      const block = inputArray.slice(blockstart, blockEnd + 1);
      i = i - block.length;

      let emptyIndex = -1;
      for (let j = 0; j <= blockstart; j++) {
        if (inputArray.slice(j, j + block.length).every((val) => val === ".")) {
          emptyIndex = j;
          break;
        }
      }

      if (emptyIndex !== -1) {
        for (let k = 0; k < block.length; k++) {
          inputArray[emptyIndex + k] = block[k];
          inputArray[blockstart + k] = ".";
        }
      }
    } else {
      i--;
    }
  }

  return inputArray;
}

const getSum = (updatedArray) => {
  let result = 0;
  for (let i = 0; i < updatedArray.length; i++) {
    if (updatedArray[i] !== ".") {
      result = result + Number(updatedArray[i]) * i;
    }
  }
  return result;
};

const input = fs.readFileSync(
  "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 9/input.txt",
  "utf8"
);
const line = input.split("");

const formatedArray = createIDString(line);
const updatedArray = shiftNumberBlocksToLeft(formatedArray);
const result = getSum(updatedArray);

console.log("result", result);
