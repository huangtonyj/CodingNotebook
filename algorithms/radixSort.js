function radixSort(arr, digits) {
  if (arr.length < 2) { return arr }

  digits = digits || 10 ** (Math.max(...arr).toString().length - 1); // Get max num of digits if not specified.
  
  let buckets = [[], [], [], [], [], [], [], [], [], []];
  let iBucket = (num) => Math.floor(num / digits % 10); 

  arr.forEach(el => buckets[iBucket(el)].push(el)); // assign each el to its respective bucket number

  // console.log('arr', arr, 'digits', digits, 'buckets', buckets);
  if (digits > 1) { buckets = buckets.map(bucket => radixSort(bucket, digits / 10)) } // Recursive radixSort until the ones digit.

  return buckets.flat();
}

// const randromLogNum = () => Math.floor(10 ** (Math.random() * 5));
// const arr = new Array(100).fill(0, 0, Infinity).map(el => randromLogNum());

// console.log(radixSort(arr));
