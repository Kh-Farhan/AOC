const fs = require("fs");

const input = fs.readFileSync(
  "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 6/input.txt",
  "utf8"
);
let map = input.split("\n").map((line) => line.split(""));

let currentPossition = [0, 0];

map.forEach((line, index) => {
  line.forEach((position, index2) => {
    if (position === "^") {
      currentPossition[0] = index;
      currentPossition[1] = index2;
    }
  });
});

const moveOnePossition = (Obs, dir) => {
  let direction = dir;
  if (
    currentPossition[0] <= 0 ||
    currentPossition[0] >= map.length - 1 ||
    currentPossition[1] <= 0 ||
    currentPossition[1] >= map[currentPossition[0]].length - 1
  ) {
    return {status: false, direction};
  }

  if (direction === "up") {
    if (
      map[currentPossition[0] - 1][currentPossition[1]] === "#" ||
      (currentPossition[0] - 1 === Obs[0] && currentPossition[1] === Obs[1])
    ) {
      direction = "right";
      currentPossition[1] = currentPossition[1] + 1;
    } else {
      currentPossition[0] = currentPossition[0] - 1;
    }
  }
  if (direction === "down") {
    if (
      map[currentPossition[0] + 1][currentPossition[1]] === "#" ||
      (currentPossition[0] + 1 === Obs[0] && currentPossition[1] === Obs[1])
    ) {
      direction = "left";
      currentPossition[1] = currentPossition[1] - 1;
    } else {
      currentPossition[0] = currentPossition[0] + 1;
    }
  }

  if (direction === "left") {
    if (
      map[currentPossition[0]][currentPossition[1] - 1] === "#" ||
      (currentPossition[0] === Obs[0] && currentPossition[1] - 1 === Obs[1])
    ) {
      direction = "up";
      currentPossition[0] = currentPossition[0] - 1;
    } else {
      currentPossition[1] = currentPossition[1] - 1;
    }
  }

  if (direction === "right") {
    if (
      map[currentPossition[0]][currentPossition[1] + 1] === "#" ||
      (currentPossition[0] === Obs[0] && currentPossition[1] + 1 === Obs[1])
    ) {
      direction = "down";
      currentPossition[0] = currentPossition[0] + 1;
    } else {
      currentPossition[1] = currentPossition[1] + 1;
    }
  }

  return {status: true, direction};
};

let currentObs = [0, 0];
let totalObstructions = 0;

for (let index = 0; index < map.length; index++) {
  for (let index1 = 0; index1 < map[0].length; index1++) {
    const maps = map;
    if (maps[index][index1] === "#" || maps[index][index1] === "^") {
      continue;
    }
    let direc = "up";
    let isValidPosition = true;
    currentObs[0] = index;
    currentObs[1] = index1;
    let numberOfiteration = 0;
    while (true) {
      const {status, direction} = moveOnePossition(currentObs, direc);

      if (numberOfiteration >= 10000) {
        totalObstructions = totalObstructions + 1;
        break;
      }
      isValidPosition = status;
      direc = direction;
      if (!isValidPosition) {
        break;
      }
      numberOfiteration = numberOfiteration + 1;
    }
    currentPossition[0] = 33; //ToDo: make it dynamic later
    currentPossition[1] = 56; //ToDo: make it dynamic later
  }
}

console.log(totalObstructions);
