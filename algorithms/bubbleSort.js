function bubbleSort(arr, sortFn = (a, b) => a - b) {
  const swap = (a, b) => {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      const currentEl = arr[j];
      const nextEl = arr[j + 1];
      
      if (sortFn(currentEl, nextEl) > 0) {
        swap(j, j + 1);
      }
    }
  }
  
  return arr;
}

module.exports = bubbleSort;