const quickSort = require('./quickSort');

function radixSort(arr) {

  let buckets = new Array(10).fill([]);
  console.log(buckets);
  
  let tens;

  arr.forEach(el => {
    tens = Math.floor(el / 10);
    buckets[tens].push(el);
  });

  console.log(buckets);
  
  // buckets = buckets.map(bucket => quickSort(bucket));

  return buckets;
}


const r = () => Math.floor(Math.random() * 100);
const arr = new Array(10).fill(0, 0, 100).map(el => r());

console.log(radixSort(arr));
