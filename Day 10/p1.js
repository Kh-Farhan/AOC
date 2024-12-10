const fs = require("fs");

const input = fs.readFileSync(
  "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 10/input.txt",
  "utf8"
);
const map = input.split("\n");
const grid = map.map((row) => row.split("").map(Number));

const rows = grid.length;
const cols = grid[0].length;

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function getTrails(startRow, startCol) {
  const queue = [[startRow, startCol, 0]];
  const visited = new Set();
  visited.add(`${startRow},${startCol}`);
  const endReached = new Set();

  while (queue.length > 0) {
    const [row, col, currentHeight] = queue.shift();

    for (let i = 0; i < directions.length; i++) {
      const nextRow = row + directions[i][0];
      const nextCol = col + directions[i][1];

      if (
        nextRow >= 0 &&
        nextRow < rows &&
        nextCol >= 0 &&
        nextCol < cols &&
        !visited.has(`${nextRow},${nextCol}`)
      ) {
        const nextHeight = grid[nextRow][nextCol];
        if (nextHeight === currentHeight + 1) {
          visited.add(`${nextRow},${nextCol}`);
          queue.push([nextRow, nextCol, nextHeight]);

          if (nextHeight === 9) {
            endReached.add(`${nextRow},${nextCol}`);
          }
        }
      }
    }
  }
  return endReached.size;
}

let total = 0;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    if (grid[i][j] === 0) {
      const score = getTrails(i, j);
      total += score;
    }
  }
}

console.log("Total:", total);
