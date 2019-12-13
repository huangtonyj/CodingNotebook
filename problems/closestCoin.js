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

const getAdjacentPos = (map, [r, c]) => {
  const potentialNeighboringPos= [
    [r - 1, c     ], // N 
    [r + 1, c     ], // S 
    [r,     c + 1 ], // E 
    [r,     c - 1 ]  // W 
  ];

  return potentialNeighboringPos.filter(pos => 
    isWithinMapBoundry(map, pos)
  );
};

const isWithinMapBoundry = (map, [r, c]) => {
  return map[r] && (map[r][c] >= 0);
};

module.exports = closestCoin;