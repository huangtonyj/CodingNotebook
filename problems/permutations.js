function permutations(arr) {
  if (arr.length === 0) { return []; }
  if (arr.length === 1) { return [arr]; }

  const result = [];
  
  for (let i = 0 ; i < arr.length ; i++) {
    const num = arr[i];
    const nextPerm = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const perms = permutations(nextPerm);

    perms.forEach((perm) => {
      result.push([num, ...perm]);
    });
  }

  return result;
}

module.exports = permutations;