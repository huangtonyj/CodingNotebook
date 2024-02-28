// ***
function minNumberOfCoinsForChange1(n, denoms) {
  if (n === 0) return 0;

  const queue = denoms.map((denom) => {
    return {
      total: denom,
      count: 1,
    };
  });

  let current = true;

  while (current.total !== n && queue.length) {
    current = queue.shift();
    if (current.total > n) {
      continue;
    }

    for (let denom of denoms) {
      const total = current.total + denom;
      const count = current.count + 1;

      queue.push({ total, count });
    }
  }

  return queue.length ? current.count : -1;
}

// Bottom Up
function minNumberOfCoinsForChange2(n, denoms) {
  const numOfCoins = new Array(n + 1).fill(Infinity);
  numOfCoins[0] = 0;

  for (const denom of denoms) {
    for (let amount = 0; amount < numOfCoins.length; amount++) {
      if (denom <= amount) {
        numOfCoins[amount] = Math.min(
          numOfCoins[amount],
          numOfCoins[amount - denom] + 1
        );
      }
    }
  }

  return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1;
}

// Top down (backtracking with memoization)
function minNumberOfCoinsForChange3(coins, amount) {
  const _coinChange = (amount, coins, memo = {}) => {
    if (amount == 0) return 0;
    if (amount < 0) return Infinity;
    if (amount in memo) return memo[amount];

    const numOfCoinsArr = coins.map((coin) =>
      _coinChange(amount - coin, coins, memo)
    );
    const numOfCoins = 1 + Math.min(...numOfCoinsArr);

    memo[amount] = numOfCoins; // cache it for future iterations

    return numOfCoins;
  };

  const numOfCoins = _coinChange(coins, amount);

  return numOfCoins == Infinity ? -1 : numOfCoins;
}

module.exports = minNumberOfCoinsForChange1;

// console.log(minNumberOfCoinsForChange(25, [1, 5, 10]));
// console.log(minNumberOfCoinsForChange2(25, [1, 5, 10]));
// console.log(minNumberOfCoinsForChange3(25, [1, 5, 10]));
