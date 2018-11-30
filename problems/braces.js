function braces(values) {
  return values.map((el) => braceCheck(el))
}

function braceCheck(str) {
  let curly = 0;
  let square = 0;
  let parens = 0;

  str.split('').forEach((value) => {
    switch (value) {
      case '{':
        curly += 1;
        break;
      case '[':
        square += 1;
        break;
      case '(':
        parens += 1;
        break;
      case '}':
        curly -= 1;
        break;
      case ']':
        square -= 1;
        break;
      case ')':
        parens -= 1;
        break;
    }
  })
  return (curly + square + parens === 0) ? 'YES' : 'NO'
}

console.log(braceCheck('{[]}'))
console.log(braces(['{[]}', '())']))