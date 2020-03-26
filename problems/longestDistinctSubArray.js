function longestDistinctSubArray(arr) {
  const hash = {};
  let result = [];
  let left = 0;
  
  arr.forEach((el, right) => {
    if ((hash[el] !== undefined && hash[el] >= left) || right === arr.length -1) {
      if (right === arr.length - 1) right++;

      const current = arr.slice(left, right);
      if (result.length < current.length) result = current;
      
      left = hash[el] + 1;
    }

    hash[el] = right;
  });

  return result;
}

console.log(longestDistinctSubArray([5, 1, 3, 5, 2, 3, 4, 1]), [5, 2, 3, 4, 1]);