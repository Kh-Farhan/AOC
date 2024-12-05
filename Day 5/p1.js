const fs = require("fs");

const input = fs.readFileSync(
  "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 5/input.txt",
  "utf8"
);
const page = input.split("\n\n");
const rules = page[0].split("\n");
const updates = page[1].split("\n").map((update) => update.split(","));

const CheckUpdate = (update) => {
  const isIncorrect = update.some((currentPage, currentIndex) => {
    return update.some((testPage, testIndex) => {
      if (currentIndex !== testIndex) {
        const testString =
          currentIndex < testIndex
            ? currentPage + "|" + testPage
            : testPage + "|" + currentPage;
        return !rules.includes(testString);
      }
    });
  });
  if (!isIncorrect) {
    const middleNumber = Number(update[(update.length - 1) / 2]);
    return middleNumber;
  }
  return 0;
};

let sum = 0;

updates.map((update) => {
  sum = sum + CheckUpdate(update);
});

console.log(sum);
