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
    } else {
      currentLakeVol += prevMaxElevation - currentElevation;
    }
  });

  // Compute it reverse as well
  currentLakeVol = 0;
  prevMaxElevation = 0;

  arr.reverse().forEach(currentElevation => {
    if (currentElevation > prevMaxElevation) {
      prevMaxElevation = currentElevation;
      totalLakeVol += currentLakeVol;
      currentLakeVol = 0;
    } else {
      currentLakeVol += prevMaxElevation - currentElevation;
    }
  });

  return totalLakeVol;
}

console.log(lakeVolume([1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 4, 2, 2], 15));


