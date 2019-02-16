function numberOfWaysToMakeChange(n, denominations = [1, 5, 10, 25]) {
  const ways = new Array(n + 1).fill(0);

  ways[0] = [[]];
  // ways[1] = [[1]];

  for (let i = 1; i <= n; i++) {
    ways[i] = [];
    denominations.forEach(denom => {
      if (denom > i) return;

      const iWays = ways[i - denom];
      // ways[i].push(iWays.map(thatWay => [...thatWay, denom]));
      ways[i] = (iWays.map(thatWay => [...thatWay, denom]));

    });
  }
  
  console.log(ways);
  return ways[n];
}

console.log(numberOfWaysToMakeChange(5, [1, 5, 10]));
// console.log(numberOfWaysToMakeChange(10, [1, 5, 10]));