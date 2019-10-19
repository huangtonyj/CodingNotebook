const isPalindrome = require('../../problems/isPalindrome');

test('isPalindrome()', () => {

  expect(isPalindrome('a')).toEqual(true);

  expect(isPalindrome('ab')).toEqual(false);

  expect(isPalindrome('aba')).toEqual(true);

  expect(isPalindrome('abb')).toEqual(false);

  expect(isPalindrome('abba')).toEqual(true);

  expect(isPalindrome('abcdcba')).toEqual(true);

  expect(isPalindrome('abcdefghhgfedcba')).toEqual(true);

  expect(isPalindrome('abcdefghihgfedcba')).toEqual(true);

  expect(isPalindrome('abcdefghihgfeddcba')).toEqual(false);
  
});

