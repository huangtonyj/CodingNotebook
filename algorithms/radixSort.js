function radixSort(arr, digits) {
  if (arr.length < 2) { return arr }

  // Get max num of digits if not specified.
  digits = digits || 10 ** (Math.max(...arr).toString().length - 1);
  
  let buckets = [[],[], [], [], [], [], [], [], [], []];
  let iBucket = (num) => Math.floor(num / digits % 10);

  arr.forEach(el => buckets[iBucket(el)].push(el));

  console.log('arr', arr, 'digits', digits, 'buckets', buckets);
  if (digits > 1) { buckets = buckets.map(bucket => radixSort(bucket, digits / 10)) }

  return buckets.flat();
}

const r = () => Math.floor(10 ** (Math.random() * 5));
const arr = new Array(25).fill(0, 0, Infinity).map(el => r());

console.log(radixSort(arr));
