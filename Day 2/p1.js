const fs = require("fs");

const input = fs
  .readFileSync(
    "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 2/input.txt",
    "utf8"
  )
  .split("\n");

let numberofReportsSafe = 0;

input.map((el) => {
  const list = el.split(" ");
  const isAscending = Number(list[1]) - Number(list[0]) > 0 ? true : false;
  let pass = true;
  list.forEach((number, index) => {
    const num = Number(number);
    if (index > 0) {
      const prevNum = Number(list[index - 1]);
      const correctDifference =
        Math.abs(num - prevNum) > 0 && Math.abs(num - prevNum) < 4;

      if (isAscending) {
        if (num <= prevNum || !correctDifference) {
          pass = false;
        }
      } else {
        if (num >= prevNum || !correctDifference) {
          pass = false;
        }
      }
    }
  });
  numberofReportsSafe = pass ? numberofReportsSafe + 1 : numberofReportsSafe;
});

console.log("Number of reports safe: ", numberofReportsSafe);
