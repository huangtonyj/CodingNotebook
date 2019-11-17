function kadanesAlgorithm(array) {
  
  let ans = -Infinity;

  let currentRunningTotal = 0;
  
  array.forEach((el) => {
    currentRunningTotal = currentRunningTotal + el;
    
    if (currentRunningTotal > ans) ans = currentRunningTotal;
    if (currentRunningTotal < 0) currentRunningTotal = 0;
  });

  return ans;
}

module.exports = kadanesAlgorithm;