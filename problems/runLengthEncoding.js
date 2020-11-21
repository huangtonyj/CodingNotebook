function runLengthEncoding(str) {
  let encoding = '';
  let prevChar = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    const currentChar = str[i];

    if (prevChar === currentChar) {
      count++;
      
      if (count === 10) {
        encoding += (count - 1) + prevChar;
        count = 1;
      }
    } else {
      encoding += count + prevChar;
      prevChar = currentChar;
      count = 1;
    }
  }

  return encoding + count + prevChar;
}

// console.log(
//   runLengthEncoding('AAAAAAAAAAAAABBCCCCDD') === '9A4A2B4C2D'
// );