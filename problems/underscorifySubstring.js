/*  
  Write a function that takes in two strs: a main str and a potential substr of the main str. 
  The function should return a version of the main str with every instance of the substr in it wrapped between underscores. 
  If two instances of the substr in the main str overlap each other or sit side by side, 
  the underscores relevant to these two substrs should only appear on the far left of the left substr and on the far right of the right substr. 
  If the main str does not contain the other str at all, return the main str intact.
*/

// const inputStr = "testthis is a testtest to see if testestest it works";
// const inputSubStr = "test";
// const output = "_test_this is a _testtest_ to see if _testestest_ it works";

function underscorifySubstr(str, substr) {

  const locations = [];
  let idx = 0;
  const span = substr.length;


  // get indicies where "substr exist"
  while (idx < str.length) {
    const current = str.slice(idx, idx + span);

    if (current === substr) {
      locations.push(idx);
    }

    idx++;
  }

  // group locations if they are close to each other;
  const groupedLocations = [];
  let startIdx = null;
  for (let i = 0; i < locations.length; i++) {
    if (startIdx === null) {
      startIdx = locations[i];
    }
    // console.log(startIdx)

    const currentIdx = locations[i];
    const nextIdx = locations[i + 1];

    
    if ((nextIdx - currentIdx > span) || !nextIdx) {
      groupedLocations.push([startIdx, currentIdx + span]);
      startIdx = null;
    }
  }

  let result = str.slice(0, locations[0]);

  // Build the resulting string;
  groupedLocations.forEach((pair, jdx, arr) => {
    const [start, end] = pair;
    result += `_${str.slice(start,end)}_`;

    if (arr[jdx + 1]) {
      const nextStart = arr[jdx + 1][0];
      result += str.slice(end,nextStart);
    } else {
      result += str.slice(end);
    }
  });

  return result;  
}

module.exports = underscorifySubstr;