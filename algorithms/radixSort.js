function radixSort(arr) {

  const max = Math.max(...arr);
  let expPower = 10 ** max.toString().length;

  // const buckets = new Array(10).fill(new Array(), 0, 10);
  const buckets = [[],[], [], [], [], [], [], [], [], []];

  // while (expPower >= 0) {
  //   expPower -= 1;
  // }

  arr.forEach(el => {
    buckets[el % expPower].push(el);
  });
  
  return buckets;
}


const r = () => Math.floor(Math.random() * 10);
const arr = new Array(25).fill(0, 0, 25).map(el => r());

console.log(radixSort(arr));


// const quickSort = require('./quickSort');

// function radixSort(arr) {

//   let buckets = new Array(10).fill([]);
//   console.log(buckets);

//   let tens;

//   arr.forEach(el => {
//     tens = Math.floor(el / 10);
//     buckets[tens].push(el);
//   });

//   console.log(buckets);

//   // buckets = buckets.map(bucket => quickSort(bucket));

//   return buckets;
// }