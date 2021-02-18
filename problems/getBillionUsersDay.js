/*
  1 Billion Users
  We have N different apps with different user growth rates. At a given time t, measured in days, the number of users using an app is g^t (for simplicity we'll allow fractional users), where g is the growth rate for that app. These apps will all be launched at the same time and no user ever uses more than one of the apps. We want to know how many total users there are when you add together the number of users from each app.
  After how many full days will we have 1 billion total users across the N apps?
  
  Signature
    int getBillionUsersDay(float[] growthRates)
    
  Input
    1.0 < growthRate < 2.0 for all growth rates
    1 <= N <= 1,000
    
  Output
    Return the number of full days it will take before we have a total of 1 billion users across all N apps.
    
  Example 1
    growthRates = [1.5]
    output = 52
    
  Example 2
    growthRates = [1.1, 1.2, 1.3]
    output = 79
    
  Example 3
    growthRates = [1.01, 1.02]
    output = 1047
*/

// O(k log n) k = days, n = growthRate
function getBillionUsersDay(growthRates) {
  const milestone = 1000000000;
  let days = 1;

  let userCountByApp = [...growthRates];
  let totalUsers = userCountByApp.reduce((total, appUser) => total + appUser);

  while (totalUsers <= milestone) {
    userCountByApp = userCountByApp.map((userCount, growth) => userCount * growthRates[growth]);
    totalUsers = userCountByApp.reduce((total, appUser) => total + appUser);
    
    days++;
  }

  return days;
}

/*
  Optimization potential:
  - on each iteration, grow by factor of 10 instead of 1
  - when surpasssed milestone, binary search down/up to find exact day
*/

// // Tests:
// function printInteger(n) {
//   var out = '[' + n + ']';
//   return out;
// }

// var testCaseNumber = 1;

// function check(expected, output) {
//   var result = (expected == output);
//   var rightTick = "\u2713";
//   var wrongTick = "\u2717";
//   if (result) {
//     var out = rightTick + ' Test #' + testCaseNumber;
//     console.log(out);
//   }
//   else {
//     var out = '';
//     out += wrongTick + ' Test #' + testCaseNumber + ': Expected ';
//     out += printInteger(expected);
//     out += ' Your output: ';
//     out += printInteger(output);
//     console.log(out);
//   }
//   testCaseNumber++;
// }

// var test0 = [1.5];
// var expected0 = 52;
// var output0 = getBillionUsersDay(test0);
// check(expected0, output0);

// var test1 = [1.1, 1.2, 1.3];
// var expected1 = 79;
// var output1 = getBillionUsersDay(test1);
// check(expected1, output1);

// var test2 = [1.01, 1.02];
// var expected2 = 1047;
// var output2 = getBillionUsersDay(test2);
// check(expected2, output2);