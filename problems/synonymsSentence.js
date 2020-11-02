/*
You are given a set of synonyms, such as (big, large) and (eat, consume). 
Using this set, determine if two sentences with the same number of words are equivalent.

For example, the following two sentences are equivalent:

"He wants to eat food."
"He wants to consume food."
Note that the synonyms (a, b) and (a, c) do not necessarily imply (b, c): 
consider the case of (coach, bus) and (coach, teacher).
*/

const synonymGraph = {
  'big': {
    'large': true
  }
};

function addSynonym (word1, word2) {
  if (!synonymGraph[word1]) { synonymGraph[word1] = {}; }
  if (!synonymGraph[word2]) { synonymGraph[word2] = {}; }
  
  synonymGraph[word1][word2] = true;
  synonymGraph[word2][word1] = true;
}

addSynonym('big', 'large');
addSynonym('eat', 'consume');
addSynonym('coach', 'bus');
addSynonym('coach', 'teacher');

/* {
  big: { large: true },
  large: { big: true },
  eat: { consume: true },
  consume: { eat: true },
  coach: { 
    bus: true, 
    teacher: true 
  },
  bus: { coach: true },
  teacher: { coach: true }
} */

function synonymsSentence (sentenceA, sentenceB) {
  const arrA = sentenceA.split(' ');
  const arrB = sentenceB.split(' ');

  if (arrA.length !== arrB.length) return false;

  for (let i = 0; i < arrA.length; i++) {
    const wordA = arrA[i];
    const wordB = arrB[i];
    const synonymA = synonymGraph[wordA] && synonymGraph[wordA][wordB];
    const synonymB = synonymGraph[wordB] && synonymGraph[wordB][wordA];

    if (wordA !== wordB && synonymA === undefined && synonymB === undefined) {
      return false;
    }
  }

  return true;
}

const sentence1 = 'He wants to eat food.';
const sentence2 ='He wants to consume food.';
const sentence3 ='He wants to drink food.';

console.log(
  synonymsSentence(sentence1, sentence2) === true,
  synonymsSentence(sentence1, sentence3) === false,
);