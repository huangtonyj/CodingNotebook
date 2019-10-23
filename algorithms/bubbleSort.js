function bubbleSort(arr, sortFn) {
  const swap = (a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  const sortASC = (a,b) => a - b;
  sortFn = sortFn || sortASC;
  // let temp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      // const currentEl = arr[j];
      // const nextEl = arr[j + 1];
      if (sortFn(arr[j], arr[j + 1]) > 0) {
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  
  return arr;
}

module.exports = bubbleSort;