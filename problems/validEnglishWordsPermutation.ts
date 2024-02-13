/*** 
    Please write a function that accepts a single string as input, 
    and that returns a list of English words that can be created using some combination of the letters in the input string.

    Example input: "oogd"
    Example output: ["good", "god", "dog", "goo", "do", "go"]

    You can assume you'll be given an array of strings that enumerates all valid English words.
    To determine whether a word is a valid word, you can simply check for its presence in the array (e.g., `WORDS.includes(word)`). 
    Please do not use any built-in libraries to generate permutations.
***/

const englishDictionary = new Set(["good", "god", "dog", "goo", "do", "go"]);

function validEnglishWordsPermutation(letters: string): [string] {
  const potentialWords = getWordPermutations(letters.split(""));

  return potentialWords.filter((word) => englishDictionary.has(word));
}

const getWordPermutations = (
  letters: [string],
  prevPrefix: string = "",
  memo: Set = new Set()
): [string] => {
  if (letters.length < 1) return [];

  const permutations = [];

  letters.forEach((letter, idx) => {
    const currentPrefix = prevPrefix + letter;
    if (memo.has(currentPrefix)) return;
    memo.add(currentPrefix);

    const unusedLetters = [...letters];
    unusedLetters.splice(idx, 1);

    permutations.push(currentPrefix);
    permutations.push(...getWordPermutations(unusedLetters, currentPrefix));
  });

  return permutations;
};

module.exports = validEnglishWordsPermutation;
