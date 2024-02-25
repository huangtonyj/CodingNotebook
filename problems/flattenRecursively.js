function flattenRecursively1(arr) {
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

function flattenRecursively(arr) {
  const flattened = [];

  arr.forEach((el) => {
    if (Array.isArray(el)) {
      const nextFlattened = flattenRecursively(el);
      nextFlattened.forEach((el2) => {
        flattened.push(el2);
      });
    } else {
      flattened.push(el);
    }
  });

  return flattened;
}

console.log(flattenRecursively([1, 2, 3, 4])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4, 5]]]])); //-> [1, {}, 3, 4, 5]
console.log(flattenRecursively([1, {}, [3, [[4, 5, [[[[[[[6]]]]]]]]]]])); //-> [1, {}, 3, 4, 5, 6]
