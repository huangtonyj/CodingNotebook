/*
  Revenue Milestones

  We keep track of the revenue Facebook makes every day, and we want to know on what days Facebook hits certain revenue milestones. Given an array of the revenue on each day, and an array of milestones Facebook wants to reach, return an array containing the days on which Facebook reached every milestone.

  Signature
    int[] getMilestoneDays(int[] revenues, int[] milestones)

  Input
    revenues is a length-N array representing how much revenue FB made on each day (from day 1 to day N). milestones is a length-K array of total revenue milestones.

  Output
    Return a length-K array where K_i is the day on which FB first had milestones[i] total revenue. If the milestone is never met, return -1.

  Example
    revenues = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    milestones = [100, 200, 500]
    output = [4, 6, 10]

  Explanation
    On days 4, 5, and 6, FB has total revenue of $100, $150, and $210 respectively. Day 6 is the first time that FB has >= $200 of total revenue.
*/

// O(n + mlogm + m)
function getMilestoneDays(revenues, milestones) {
  const milestonesSorted = [...milestones].sort((a,b) => a - b);
  const milestoneDays = {};
  let runningRevenue = 0;
  let currentMileStone = milestonesSorted.shift();

  revenues.forEach((revenue, day) => {
    runningRevenue += revenue;

    while (runningRevenue >= currentMileStone) {
      milestoneDays[currentMileStone] = day + 1;
      currentMileStone = milestonesSorted.shift();
    }
  });

  return milestones.map(milestone => milestoneDays[milestone] || -1);
}


// // These are the tests we use to determine if the solution is correct.
// // You can add your own at the bottom, but they are otherwise not editable!
// function printintegerArray(array) {
//   var size = array.length;
//   var res = '';
//   res += '[';
//   var i = 0;
//   for (i = 0; i < size; i++) {
//     if (i !== 0) {
//       res += ', ';
//     }
//     res += array[i];
//   }
//   res += ']';
//   return res;
// }

// var testCaseNumber = 1;

// function check(expected, output) {
//   var expectedSize = expected.length;
//   var outputSize = output.length;
//   var result = true;
//   if (expectedSize != outputSize) {
//     result = false;
//   }
//   for (var i = 0; i < Math.min(expectedSize, outputSize); i++) {
//     result &= (output[i] == expected[i]);
//   }
//   var rightTick = "\u2713";
//   var wrongTick = "\u2717";
//   if (result) {
//     var out = rightTick + ' Test #' + testCaseNumber;
//     console.log(out);
//   }
//   else {
//     var out = '';
//     out += wrongTick + ' Test #' + testCaseNumber + ': Expected ';
//     out += printintegerArray(expected);
//     out += ' Your output: ';
//     out += printintegerArray(output);
//     console.log(out);
//   }
//   testCaseNumber++;
// }

// var revenues1 = [100, 200, 300, 400, 500];
// var milestones1 = [300, 800, 1000, 1400];
// var expected1 = [2, 4, 4, 5];
// var output1 = getMilestoneDays(revenues1, milestones1);
// check(expected1, output1);

// var revenues2 = [700, 800, 600, 400, 600, 700];
// var milestones2 = [3100, 2200, 800, 2100, 1000];
// var expected2 = [5, 4, 2, 3, 2];
// var output2 = getMilestoneDays(revenues2, milestones2);
// check(expected2, output2);

// var revenues3 = [700, 800, 600, 400, 600, 700];
// var milestones3 = [10000, 3100, 2200, 800, 2100, 1000];
// var expected3 = [-1, 5, 4, 2, 3, 2];
// var output3 = getMilestoneDays(revenues3, milestones3);
// check(expected3, output3);