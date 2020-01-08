function staircase(n, steps = [1, 2]) {
  let numWays = [1];

  for (let i = 1; i <= n; i++) {
    let ways = 0;
    
    steps.forEach((stepSize) => {
      if (stepSize > numWays.length) return;
      ways += numWays[i - stepSize];
    });
    
    numWays.push(ways);
  }

  return numWays[n];
}