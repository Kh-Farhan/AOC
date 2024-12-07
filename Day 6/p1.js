const fs = require("fs");

const input = fs.readFileSync(
  "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 6/input.txt",
  "utf8"
);
const map = input.split("\n").map((line) => line.split(""));

const currentPossition = [0, 0];

map.forEach((line, index) => {
  line.forEach((position, index2) => {
    if (position === "^") {
      currentPossition[0] = index;
      currentPossition[1] = index2;
    }
  });
});

let isValidPosition = true;
let direction = "up";

const moveOnePossition = () => {
  switch (direction) {
    case "up":
      map[currentPossition[0]][currentPossition[1]] = "X";

      if (currentPossition[0] > 0) {
        if (map[currentPossition[0] - 1][currentPossition[1]] !== "#") {
          currentPossition[0] = currentPossition[0] - 1;
        } else {
          direction = "right";
          currentPossition[1] = currentPossition[1] + 1;
        }
      } else {
        isValidPosition = false;
      }
      break;
    case "down":
      map[currentPossition[0]][currentPossition[1]] = "X";

      if (currentPossition[0] < map.length - 1) {
        if (map[currentPossition[0] + 1][currentPossition[1]] !== "#") {
          currentPossition[0] = currentPossition[0] + 1;
        } else {
          direction = "left";
          currentPossition[1] = currentPossition[1] - 1;
        }
      } else {
        isValidPosition = false;
      }
      break;

    case "left":
      map[currentPossition[0]][currentPossition[1]] = "X";

      if (currentPossition[1] > 0) {
        if (map[currentPossition[0]][currentPossition[1] - 1] !== "#") {
          currentPossition[1] = currentPossition[1] - 1;
        } else {
          direction = "up";
          currentPossition[0] = currentPossition[0] - 1;
        }
      } else {
        isValidPosition = false;
      }
      break;

    case "right":
      map[currentPossition[0]][currentPossition[1]] = "X";

      if (currentPossition[1] < map[currentPossition[0]].length - 1) {
        if (map[currentPossition[0]][currentPossition[1] + 1] !== "#") {
          currentPossition[1] = currentPossition[1] + 1;
        } else {
          direction = "down";
          currentPossition[0] = currentPossition[0] + 1;
        }
      } else {
        map[currentPossition[0]][currentPossition[1] + 1] = "X";

        isValidPosition = false;
      }
      break;
  }
};

while (isValidPosition) {
  moveOnePossition();
}

map.map((el) => el.join("")).forEach((line) => console.log(line));
let count = 0;

map.forEach((line) => {
  line.forEach((position) => {
    if (position === "X") {
      count = count + 1;
    }
  });
});
console.log(count);
