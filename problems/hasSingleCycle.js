function hasSingleCycle(arr) {
  const visitedIndicies = new Set([0]);
  let currentIdx = getCurrentIdx(0, arr);

  while (currentIdx !== 0) {
    if (visitedIndicies.has(currentIdx)) { return false; }

    visitedIndicies.add(currentIdx);

    currentIdx = getCurrentIdx(currentIdx, arr);
  }

  return visitedIndicies.size === arr.length;
}


function getCurrentIdx(currentIdx, arr) {
  let nextIdx = currentIdx + arr[currentIdx];
  
  if (nextIdx < 0) {
    nextIdx += arr.length * (Math.ceil(Math.abs(nextIdx / arr.length)));
  }

  return nextIdx % arr.length; 
}

module.exports = hasSingleCycle;