function permutations(arr) {
  if (arr.length < 2) { return arr; }

  const result = [];
  
  for (let i = 0 ; i < arr.length ; i++) {
    const perms = permutations(arr.slice(0, i).concat(arr.slice(i + 1, arr.length)));
   
    perms.forEach((perm) => {
      result.push([arr[i]].concat(perm));
    });
  }

  return result;
}

module.exports = permutations;