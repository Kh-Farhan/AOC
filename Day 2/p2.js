const fs = require("fs");

const input = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 2/input.txt",
    "utf8"
  )
  .split("\n");

let numberofReportsSafe = 0;

const isReportSafe = (list) => {
  const isAscending = Number(list[1]) - Number(list[0]) > 0 ? true : false;
  let status = true;
  list.forEach((number, index2) => {
    const num = Number(number);
    if (index2 > 0) {
      const prevNum = Number(list[index2 - 1]);
      const correctDifference =
        Math.abs(num - prevNum) > 0 && Math.abs(num - prevNum) < 4;

      if (isAscending) {
        if (num <= prevNum || !correctDifference) {
          status = false;
        }
      } else {
        if (num >= prevNum || !correctDifference) {
          status = false;
        }
      }
    }
  });
  return status;
};

input.map((el) => {
  const list = el.split(" ");
  if (isReportSafe(list)) {
    numberofReportsSafe = numberofReportsSafe + 1;
  } else {
    for (let i = 0; i < list.length; i++) {
      const splicedList = list.filter((_, ind) => ind !== i);
      if (isReportSafe(splicedList)) {
        numberofReportsSafe = numberofReportsSafe + 1;
        break;
      }
    }
  }
});

console.log("Number of reports safe: ", numberofReportsSafe);
