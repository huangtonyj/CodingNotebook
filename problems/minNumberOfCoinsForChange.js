// ***
function minNumberOfCoinsForChange(n, denoms) {
  if  (n === 0) return 0;

  const queue = denoms.map((denom) => {
    return {
      total: denom, 
      count: 1
    };
  });

  let current = true;

  while (current.total !== n && queue.length) {
    current = queue.shift();
    if (current.total > n) { continue; }

    for (let denom of denoms) {
      const total = current.total + denom;
      const count = current.count + 1;

      queue.push({total, count});
      // console.log(current, queue);
    }
  } 

  return queue.length ? current.count : -1;
}

function minNumberOfCoinsForChange2(n, denoms) {
  const numOfCoins = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;

  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      if (denom <= amount) {
        numOfCoins[amount] = Math.min(numOfCoins[amount], numOfCoins[amount - denom] + 1);
        // console.log(denom, numOfCoins);
      }
    }
  }

  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}


module.exports = minNumberOfCoinsForChange;

// Simply a BFS search
// Improvement: Add a set to track current.total that was seen before.

// minNumberOfCoinsForChange(25, [1, 5, 10]);
// minNumberOfCoinsForChange2(25, [1, 5, 10]);