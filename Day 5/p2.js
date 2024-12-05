const fs = require("fs");
const input = fs.readFileSync(
  "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 5/input.txt",
  "utf8"
);
const page = input.split("\n\n");
const rules = page[0].split("\n");
const updates = page[1].split("\n").map((update) => update.split(","));

const CheckUpdate = (update) => {
  let corrected = false;
  update?.forEach((currentPage, currentIndex) => {
    update?.forEach((testPage, testIndex) => {
      if (currentIndex !== testIndex) {
        const testString =
          currentIndex < testIndex
            ? currentPage + "|" + testPage
            : testPage + "|" + currentPage;
        if (!rules.includes(testString)) {
          corrected = true;
          let helper = update[currentIndex];
          update[currentIndex] = update[testIndex];
          update[testIndex] = helper;
        }
      }
    });
  });
  return corrected ? {update, status: false} : {update, status: true};
};

let sum = 0;

updates.map((update) => {
  let currentUpdate = update;
  let isIncorrect = false;
  while (CheckUpdate(currentUpdate).status !== true) {
    isIncorrect = true;
    currentUpdate = CheckUpdate(currentUpdate).update;
  }
  sum = isIncorrect
    ? sum + Number(currentUpdate[(currentUpdate.length - 1) / 2])
    : sum;
});
console.log(sum);
