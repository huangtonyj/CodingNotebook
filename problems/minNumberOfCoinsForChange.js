function minNumberOfCoinsForChange(n, denoms) {
  if  (n === 0) return 0;
  
  const queue = [];

  denoms.forEach((denom) => {
    queue.push({
      total: denom,
      count: 1
    });
  });

  let current = true;

  while (current.total !== n && queue.length) {
    current = queue.shift();
    if (current.total > n) { continue; }

    for (let denom of denoms) {
      const total = current.total + denom;
      const count = current.count + 1;

      queue.push({total, count});
    }
  } 

  return queue.length ? current.count : -1;
}

module.exports = minNumberOfCoinsForChange;

// Could be further improved by adding a set to track current.total that was seen before.