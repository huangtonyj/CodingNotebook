console.log(4  ** 3)

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
  let breakCounter = 0;

  while (current.total !== n && queue.length !== 0 && breakCounter >= 0) {
    // breakCounter = 0;
    
    if (current.total > n) breakCounter++;
    // if (breakCounter > denoms.length * current.count) breakCounter = -1;
    if (breakCounter === n ** denoms.length) breakCounter = -1;
    // console.table({total: current.total, count: current.count, breakCounter});


    denoms.forEach((denom) => {
      
      queue.push({
        total: denom + current.total,
        count: 1 + current.count
      });
      



    });

    current = queue.shift();
  }

  // return breakCounter > denoms.length ? current.count : -1;
  // return current.count;
  return breakCounter >= 0 ? current.count : -1;

}

// console.log(minNumberOfCoinsForChange(11, [1, 5, 10]));
// console.log(minNumberOfCoinsForChange(7, [2, 4]), -1);
// console.log(minNumberOfCoinsForChange(4, [1, 5, 10]), 4);
console.log(minNumberOfCoinsForChange(10, [1, 5, 10]), 1);

module.exports = minNumberOfCoinsForChange;