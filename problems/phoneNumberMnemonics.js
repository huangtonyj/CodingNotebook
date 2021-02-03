/*
  If you open the keypad of your mobile phone, it'll likely look like this:
   ----- ----- -----
  |     |     |     |
  |  1  |  2  |  3  |
  |     | abc | def |
   ----- ----- -----
  |     |     |     |
  |  4  |  5  |  6  |
  | ghi | jkl | mno |
   ----- ----- -----
  |     |     |     |
  |  7  |  8  |  9  |
  | pqrs| tuv | wxyz|
   ----- ----- -----
        |     |
        |  0  |
        |     |
         -----

  Almost every digit is associated with some letters in the alphabet; this
  allows certain phone numbers to spell out actual words. For example, the phone
  number 8464747328 can be written as timisgreat;
  similarly, the phone number 2686463 can be written as
  antoine or as ant6463.

  It's important to note that a phone number doesn't represent a single sequence
  of letters, but rather multiple combinations of letters. For instance, the
  digit 2 can represent three different letters (a, b, and c).

  A mnemonic is defined as a pattern of letters, ideas, or associations that
  assist in remembering something. Companies oftentimes use a mnemonic for their
  phone number to make it easier to remember.

  Given a stringified phone number of any non-zero length, write a function that
  returns all mnemonics for this phone number, in any order.

  For this problem, a valid mnemonic may only contain letters and the digits
  0 and 1. In other words, if a digit is able to be
  represented by a letter, then it must be. Digits 0 and
  1 are the only two digits that don't have letter representations
  on the keypad.

  Note that you should rely on the keypad illustrated above for digit-letter
  associations.

  Sample Input
    phoneNumber = "1905"

  Sample Output
    [
      "1w0j",
      "1w0k",
      "1w0l",
      "1x0j",
      "1x0k",
      "1x0l",
      "1y0j",
      "1y0k",
      "1y0l",
      "1z0j",
      "1z0k",
      "1z0l",
    ]
    // The mnemonics could be ordered differently.
*/

const phoneMnemonics = [
  ['0'],
  ['1'],
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['t', 'u', 'v'],
  ['w', 'x', 'y', 'z']
];

function phoneNumberMnemonics(phoneNumber) {
  let arrOdd = [];
  let arrEven = [];

  for (let i = 0; i < phoneNumber.length; i++) {
    const currentNum = phoneNumber[i];
    const currentMnemonics = phoneMnemonics[currentNum];

    if (i % 2) {
      arrOdd = crossMultiply(arrEven, currentMnemonics);
    } else {
      arrEven = crossMultiply(arrOdd, currentMnemonics);
    }
  }

  return phoneNumber.length % 2 ? arrEven : arrOdd;
}

function crossMultiply(arr1, arr2) {
  if (!arr1.length) return arr2;

  const arr = [];

  for (const char1 of arr1) {
    for (const char2 of arr2) {
      arr.push(char1 + char2);
    }
  }

  return arr;
}

module.exports = phoneNumberMnemonics;