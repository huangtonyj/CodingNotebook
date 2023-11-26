function flattenRecursively(arr) {
  if (arr.length === 0) {
    return arr;
  }

  const el = arr.shift();

  if (Array.isArray(el)) {
    return [...flattenRecursively(el), ...flattenRecursively(arr)];
  } else {
    return [el, ...flattenRecursively(arr)];
  }
}

console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
