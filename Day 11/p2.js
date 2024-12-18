const fs = require("fs");

const input = fs.readFileSync(
  "/Users/farhan.ahmed/Documents/Teamo/AOC/Day 11/input.txt",
  "utf8"
);

const updateStones = (stone, count) => {
  const result = new Map();
  const numStr = String(stone);

  if (stone === 0) {
    result.set(1, count);
  } else if (numStr.length % 2 === 0) {
    const mid = numStr.length / 2;
    const left = parseInt(numStr.slice(0, mid), 10);
    const right = parseInt(numStr.slice(mid), 10);

    result.set(left, (result.get(left) || 0) + count);
    result.set(right, (result.get(right) || 0) + count);
  } else {
    const newStone = stone * 2024;
    result.set(newStone, count);
  }
  return result;
};

const initialStones = input.split(" ").map(Number);

let stoneCounts = new Map();

for (const stone of initialStones) {
  stoneCounts.set(stone, (stoneCounts.get(stone) || 0) + 1);
}

for (let i = 0; i < 75; i++) {
  const nextCounts = new Map();

  for (const [stone, count] of stoneCounts) {
    const updates = updateStones(stone, count);

    for (const [updatedStone, updatedCount] of updates) {
      nextCounts.set(
        updatedStone,
        (nextCounts.get(updatedStone) || 0) + updatedCount
      );
    }
  }

  stoneCounts = nextCounts;
}

let totalStones = 0;
for (const count of stoneCounts.values()) {
  totalStones += count;
}
console.log("Number of stones ", totalStones);
