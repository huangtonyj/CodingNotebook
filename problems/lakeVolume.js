function lakeVolume(arr) {

  // let prevMaxElevation = arr[0];
  // let prevMaxElevation = -Infinity;
  let prevMaxElevation = 0;
  let totalLakeVol = 0;
  let currentLakeVol = 0;

  arr.forEach(currentElevation => {
    if (currentElevation > prevMaxElevation) {
      prevMaxElevation = currentElevation;
      
      totalLakeVol += currentLakeVol;
      currentLakeVol = 0;
    } else {
      currentLakeVol += prevMaxElevation - currentElevation;
    }
    console.log('prevMaxElevation', prevMaxElevation, 'currentElevation', currentElevation, 'totalLakeVol', totalLakeVol, 'currentLakeVol', currentLakeVol);
    
  });

  return totalLakeVol;



}

console.log(lakeVolume([1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 4, 2, 2], 15));


