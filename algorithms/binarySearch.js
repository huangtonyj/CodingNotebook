function binarySearch(arr, target) {
  const mid = Math.floor(arr.length / 2);
  console.log('mid:', mid);
  
  if (arr.length <= 1 && arr[0] !== target) { return null}

  if (target === arr[mid]) {
    console.log('answer was found');
    
    return mid    
  } else if (target < arr[mid]) {
    return binarySearch(arr.slice(0, mid), target)
  } else if (target > arr[mid]) {
    console.log(arr.slice(mid));
    
    return (binarySearch(arr.slice(mid), target) + mid)
  } else {
    return null;
  }
}

// console.log(binarySearch([1,2,3], 1));
// console.log(binarySearch([1,2,3], 2));
// console.log(binarySearch([1,2,3], 3));

// console.log(binarySearch([1,2,3], 0));
// console.log(binarySearch([1,2,3], 4));


console.log(binarySearch([2,3], 4));
