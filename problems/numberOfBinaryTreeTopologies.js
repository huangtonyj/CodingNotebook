function numberOfBinaryTreeTopologies(n) {
  const result = [1];

  while(result[n] === undefined) {
    const current = result.length;
    let currentNumOfBinaryTree = 0;

    for (let left = 0; left < current; left++) {
      const right = current - left - 1;
      currentNumOfBinaryTree += result[left] * result[right];
    }

    result.push(currentNumOfBinaryTree);
  }
  
  return result[n];
}

module.exports = numberOfBinaryTreeTopologies;
