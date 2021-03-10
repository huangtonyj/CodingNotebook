// ***

function threeNumberSum (arr, target) {
  arr.sort((a, b) => a - b);
  const result = [];
  let idx = 0;
  
  while (idx < arr.length) {
    let left = idx + 1;
    let right = arr.length - 1;

    while (left < right) {
      const a = arr[idx];
      const b = arr[left];
      const c = arr[right];

      if (a + b + c === target) { result.push([a, b, c]); }
      
      if (a + b + c > target) { right--; } else { left++; }
    }

    idx++;
  }

  return result;
}

module.exports = threeNumberSum;