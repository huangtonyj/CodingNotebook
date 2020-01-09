function minNumberOfCoinsForChange(n, denoms) {
  if  (n === 0) return 0;
  
  const queue = [];

  denoms.forEach((denom) => {
    queue.push({
      total: denom,
      count: 1
    });
  });

  let current = queue.shift();
  let breakCount = 0;

  while (current.total !== n && queue.length !== 0 && breakCount >= 0) {
    breakCount = 0;
    
    denoms.forEach((denom) => {
      if (current.total + denom > n) breakCount++;
      
      queue.push({
        total: denom + current.total,
        count: 1 + current.count
      });
      

      // if (breakCount === denoms.length) breakCount = -1;
      // console.table({n, total: current.total, count: current.count, breakCount});


    });

    current = queue.shift();
  }

  // return breakCount > denoms.length ? current.count : -1;
  return current.count;
  // return breakCount > 0 ? current.count : -1;

}

// console.log(minNumberOfCoinsForChange(11, [1, 5, 10]));
// console.log(minNumberOfCoinsForChange(7, [2, 4]));
console.log(minNumberOfCoinsForChange(4, [1, 5, 10]));
module.exports = minNumberOfCoinsForChange;