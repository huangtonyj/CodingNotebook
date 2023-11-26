function flattenRecursively(arr, newArr = []) {
  if (arr[0] === undefined) {
    return newArr;
  }

  if (Array.isArray(arr[0])) {
    newArr.push(arr[0].shift());
  } else {
    newArr.push(arr.shift());
  }

  return flattenRecursively(arr, newArr);
}

console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]
