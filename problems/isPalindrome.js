function isPalindrome(str) {
  let startIdx = 0;
  let endIdx = str.length - 1;

  while (endIdx > startIdx) {
    if (str[startIdx] !== str[endIdx]) return false;
    endIdx--;
    startIdx++;
  }

  return true;
}

module.exports = isPalindrome;


var isPalindrome2 = function(s) {
  let l = 0;
  let r = s.length - 1;
  
  while (l < r) {
    const lChar = s[l];
    const rChar = s[r];
    // console.table({l, r, lChar, rChar});
    
    if (!_isAlphaNumeric(lChar)) {
      l++;
    } else if (!_isAlphaNumeric(rChar)) {
      r--;
    } else if (!_isSameChar(lChar, rChar)) {
      return false;
    } else {
      l++;
      r--;
    }
  }
  
  return true;
};
  
  
function _isAlphaNumeric(char) {
  const charCode = char.charCodeAt();
  return ('a'.charCodeAt() <= charCode && charCode <= 'z'.charCodeAt()) || 
    ('A'.charCodeAt() <= charCode && charCode <= 'Z'.charCodeAt()) ||
    ('0'.charCodeAt() <= charCode && charCode <= '9'.charCodeAt());
}
  
function _isSameChar(char1, char2) {
  let charCode1 = char1.charCodeAt();
  let charCode2 = char2.charCodeAt();
  
  if (charCode1 < 91) charCode1 += 32;
  if (charCode2 < 91) charCode2 += 32;
    
  return charCode1 === charCode2;
}

console.log(
  isPalindrome2('Race a car'), false, '\n',
  isPalindrome2('A man, a plan, a canal: Panama'), true
);