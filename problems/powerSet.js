function powerSet(arr) {
  const subsets = [[]];

  for (const el of arr) {
    const currentLength = subsets.length;

    for (let i = 0; i < currentLength; i++) {
      const currentSubset = subsets[i];
      subsets.push([...currentSubset, el]);
    }
  }

  return subsets;
}

module.exports = powerSet;

// Recursively append el to current subsets.