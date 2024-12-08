const fs = require("fs");

const input = fs.readFileSync(
  "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 8/input.txt",
  "utf8"
);
const map = input.split("\n").map((col) => col.split(""));

const antennas = [];

map.forEach((row, index) => {
  row.forEach((col, index2) => {
    if (map[index][index2] !== ".") {
      antennas.push({y: index, x: index2, f: map[index][index2]});
    }
  });
});

const antinodes = new Set();

const isValidAntiNode = (row, col) => {
  return row >= 0 && row < map.length && col >= 0 && col < map[0].length;
};

for (let i = 0; i < antennas.length; i++) {
  for (let j = i + 1; j < antennas.length; j++) {
    let ant1 = antennas[i];
    let ant2 = antennas[j];

    ant1.isGreater =
      Math.max(antennas[i].x, antennas[j].x) === antennas[i].x ? true : false;
    ant2.isGreater =
      Math.max(antennas[i].x, antennas[j].x) === antennas[j].x ? true : false;

    if (ant1.f !== ant2.f) continue;

    const columnDistance = Math.abs(ant2.x - ant1.x);
    const rowDistance = Math.abs(ant2.y - ant1.y);

    const anColumn1 = ant1.isGreater
      ? Math.floor(ant1.x + columnDistance)
      : Math.floor(ant1.x - columnDistance);
    const anRow1 = Math.floor(ant1.y - rowDistance);

    const anColumn2 = ant2.isGreater
      ? Math.floor(ant2.x + columnDistance)
      : Math.floor(ant2.x - columnDistance);
    const anRow2 = Math.floor(ant2.y + rowDistance);

    if (isValidAntiNode(anRow1, anColumn1)) {
      antinodes.add(`${anRow1},${anColumn1}`);
    }
    if (isValidAntiNode(anRow2, anColumn2)) {
      antinodes.add(`${anRow2},${anColumn2}`);
    }
  }
}

console.log("Sum of Unique Antinodes:", antinodes.size);
