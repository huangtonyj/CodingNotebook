function radixSort(arr, expPower) {
  if (arr.length < 2) { return arr }

  const max = Math.max(...arr);
  expPower = expPower || 10 ** (max.toString().length - 1);
  
  let buckets = [[],[], [], [], [], [], [], [], [], []];
  let iBucket;

  arr.forEach(el => {
    iBucket = Math.floor(el / expPower % 10);
    buckets[iBucket].push(el);
  });

  console.log('arr', arr, 'expPower', expPower, 'buckets', buckets);

  if (expPower == 1) {return buckets.flat();}
  return buckets.map(subArr => radixSort(subArr, expPower / 10)).flat();
}

const r = () => Math.floor(10 ** (Math.random() * 5));
const arr = new Array(25).fill(0, 0, Infinity).map(el => r());

console.log(radixSort(arr));
