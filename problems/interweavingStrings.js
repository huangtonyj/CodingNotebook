function interweavingStrings(str1, str2, str3) {
  if (str3 === '') return str1 === '' && str2 === '';
  
  const char1 = str1[0];
  const char2 = str2[0];
  const char3 = str3[0];

  if (char3 === char1 && char3 === char2) {
    return interweavingStrings(str1.slice(1), str2, str3.slice(1)) || interweavingStrings(str1, str2.slice(1), str3.slice(1));
  } else if (char3 === char1) {
    return interweavingStrings(str1.slice(1), str2, str3.slice(1));
  } else if (char3 === char2) {
    return interweavingStrings(str1, str2.slice(1), str3.slice(1));
  }

  return false;
}

module.exports = interweavingStrings;