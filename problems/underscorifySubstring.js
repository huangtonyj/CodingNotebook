// ***
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

  const occurences = getOccurences(str, substr);
  const groupedOccurences = getGroupedOccurences(occurences, substr.length);

  return groupedOccurences.reduce((result, occurence) => {
    const [start, end, next] = occurence;
    return result + `_${str.slice(start,end)}_${str.slice(end, next)}`;
  }, str.slice(0, occurences[0]));
}

// Find indices of the occurences of substr in str.
const getOccurences = (str, substr) => {
  const occurences = [];

  for (let i = 0; i < str.length; i++) {
    const currentWindow = str.slice(i, i + substr.length);
    if (currentWindow === substr) occurences.push(i);
  }

  return occurences;
};

// Group occurences together if they are with the span size;
const getGroupedOccurences = (occurences, span) => {
  const groupedOccurences = [];
  let startIdx = null;

  for (let i = 0; i < occurences.length; i++) {
    if (startIdx === null) {
      startIdx = occurences[i];
    }

    const currentIdx = occurences[i];
    const nextIdx = occurences[i + 1];

    if ((nextIdx - currentIdx > span) || !nextIdx) {
      groupedOccurences.push([startIdx, currentIdx + span, nextIdx]);
      startIdx = null;
    }
  }

  return groupedOccurences;
};

module.exports = underscorifySubstr;