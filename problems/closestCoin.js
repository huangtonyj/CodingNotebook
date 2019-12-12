// Given the position of all the coins and your current position, 
// find the closest coin to you in terms of Manhattan distance. 
// That is, you can move around up, down, left, and right, but not diagonally. 
// If there are multiple possible closest coins, return any of them.

function closestCoin(map, currentPos) {
  let queue = getAdjacentPos(map, currentPos);

  while (queue.length) {
    const pos = queue.shift();
    const r = pos[0], c = pos[1];

    if (map[r][c]) return pos;

    queue = queue.concat(getAdjacentPos(map, pos));
  }

  return null;
}

const getAdjacentPos = (map, currentPos) => {
  const potentialNeighboringPos= [
    [currentPos[0] - 1, currentPos[1]], // N 
    [currentPos[0] + 1, currentPos[1]], // S 
    [currentPos[0], currentPos[1] + 1], // E 
    [currentPos[0], currentPos[1] - 1]  // W 
  ];

  return potentialNeighboringPos.filter(pos => 
    isWithinMapBoundry(map, pos)
  );
};

const isWithinMapBoundry = (map, pos) => {
  const r = pos[0], c = pos[1];
  return map[r] && (map[r][c] >= 0);
};

module.exports = closestCoin;