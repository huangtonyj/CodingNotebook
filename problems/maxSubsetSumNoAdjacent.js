function maxSubsetSumNoAdjacent(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  const result = arr.map(el => el);

  result[1] = Math.max(result[0], result[1]);
  
  for (let i = 2; i < result.length; i++) {
    result[i] = Math.max(result[i-1], result[i] + result[i - 2]);
  }

  return result[arr.length - 1];
}

module.exports = maxSubsetSumNoAdjacent;