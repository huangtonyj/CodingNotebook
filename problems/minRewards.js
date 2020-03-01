function minRewards(arr) {

  const result = arr.map(_ => 1);

  // forward
  for (let i = 1; i < arr.length; i++) {
    const prev = arr[i- 1];
    const current = arr[i];

    if (current > prev) result[i] = result[i - 1] + 1;
  }

  // backward
  for (let i = arr.length - 2; i >= 0; i--) {
    const prev = arr[i + 1];
    const current = arr[i];
  
    if (current > prev) result[i] = Math.max(result[i], result[i + 1] + 1);
  }

  return result.reduce((acc, el) => acc + el);
}

module.exports = minRewards;