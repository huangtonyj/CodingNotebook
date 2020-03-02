function numberOfBinaryTreeTopologies(n) {
  const result = [1];

  while(result[n] === undefined) {
    const current = result.length;
    let currentNumOfBinaryTree = 0;

    for (let leftSize = 0; leftSize < current; leftSize++) {
      const rightSize = current - leftSize - 1;
      const leftNumTrees = result[leftSize];
      const rightNumTrees = result[rightSize];
      currentNumOfBinaryTree += leftNumTrees * rightNumTrees;
    }

    result.push(currentNumOfBinaryTree);
  }
  
  return result[n];
}

module.exports = numberOfBinaryTreeTopologies;

// Uses Dynamic Programming, caching from bottom up.
// Each n is a combination of all combination of (n -1) leftSize and rightSize subtrees.