// https://techdevguide.withgoogle.com/paths/advanced/sequence-2/volume-of-water/#!

function lakeVolume(arr) {

  let totalLakeVol = 0;
  let currentLakeVol = 0;
  let prevMaxElevation = 0;

  arr.forEach(currentElevation => {
    if (currentElevation > prevMaxElevation) {
      prevMaxElevation = currentElevation;
      
      totalLakeVol += currentLakeVol;

      currentLakeVol = 0;
      // lakeWidth = 0;
    } else {
      currentLakeVol += prevMaxElevation - currentElevation;
      // lakeWidth += 1;
    }
  });

  currentLakeVol = 0;
  prevMaxElevation = 0;

  arr.reverse().forEach(currentElevation => {
    if (currentElevation > prevMaxElevation) {
      prevMaxElevation = currentElevation;
      
      totalLakeVol += currentLakeVol;

      currentLakeVol = 0;
      // lakeWidth = 0;
    } else {
      currentLakeVol += prevMaxElevation - currentElevation;
    }
    
  });

  return totalLakeVol;

}

console.log(lakeVolume([1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 4, 2, 2], 15));
console.log(lakeVolume([2, 2, 4, 1, 2, 2, 5, 4, 1, 3, 1, 4, 2, 3, 1], 15));


