function threeNumberSum (arr, target) {
  arr.sort((a, b) => a - b);
  const result = [];
  let idx = 0;
  
  while (idx < arr.length) {
    let leftIdx= idx + 1;
    let rightIdx = arr.length - 1;

    while (leftIdx< rightIdx) {
      const a = arr[idx];
      const b = arr[leftIdx];
      const c = arr[rightIdx];

      if (a + b + c === target) { result.push([a, b, c]); }
      
      if (a + b + c > target) { rightIdx--; } else { leftIdx++; }
    }

    idx++;
  }

  return result;
}

module.exports = threeNumberSum;