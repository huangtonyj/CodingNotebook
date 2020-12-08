function searchForRange(arr, target) {
  let idx = Math.floor(arr.length / 2);
  let minIdx = 0;
  let maxIdx = arr.length - 1;
  let searching = true;
  
  // Find an instance of target
  while (searching) {
    const current = arr[idx];

    if (minIdx === maxIdx && current !== target) return [-1, -1];

    if (current === target) {
      searching = false;
    } else if (current < target) {
      idx = Math.min(Math.floor(idx * 1.5), arr.length - 1);
      minIdx = Math.max(minIdx, idx);
    } else if (current > target) { 
      idx = Math.floor(idx / 2);
      maxIdx = Math.min(maxIdx, idx);
    }
  }
  
  let startIdx = idx;
  let currentIdx = Math.floor((0 + startIdx) / 2);
  
  // Find lower bound
  while (currentIdx !== startIdx) {
    const current = arr[currentIdx];
    
    if (current === target) {
      startIdx = currentIdx;
      currentIdx = Math.floor(currentIdx / 2);
    } else if (current < target) {
      const nextIdx = Math.floor((currentIdx + startIdx) / 2);
      currentIdx = currentIdx === nextIdx ? nextIdx + 1: nextIdx;
    }
  }
  
  let endIdx = idx;
  currentIdx = Math.min(Math.floor(endIdx * 2), arr.length - 1);

  // Find upper bound
  while (currentIdx !== endIdx) {
    const current = arr[currentIdx];
    
    if (current === target) {
      endIdx = currentIdx;
      currentIdx = Math.floor((currentIdx + arr.length) / 2);
    } else if (current > target) {
      const nextIdx = Math.floor((currentIdx + endIdx) / 2);
      currentIdx = currentIdx === nextIdx ? nextIdx + 1 : nextIdx;
    }
  }

  return [startIdx, endIdx];
}

module.exports = searchForRange;